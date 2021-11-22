import React, {
  ComponentType,
  createRef,
  RefObject,
  SyntheticEvent,
} from 'react';

import cloneDeep from 'lodash/cloneDeep';
import values from 'lodash/values';

import styled from '../../foundation/styled-components';
import ImageBroken from '../../icon/ImageBroken';
import { RcIcon } from '../Icon';

const StyledLoadingPage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackground = styled.div<{
  visibility: string;
  height?: number;
  width?: number;
}>`
  display: block;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows[7]};
  visibility: ${({ visibility }) => visibility};
  user-select: none;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

const HiddenImage = styled.img`
  visibility: hidden;
  display: none;
`;

type RcImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  imageRef?: RefObject<HTMLDivElement & HTMLImageElement>;
  loadingPlaceHolder?: ComponentType<any>;
  thumbnailSrc?: string;
  onSizeLoad?: (naturalWidth: number, naturalHeight: number) => void;
  onLoad?: () => void;
  onError?: () => void;
  performanceTracerStart?: () => void;
  performanceTracerEnd?: () => void;
  width?: number;
  height?: number;
};

type RcImageState = {
  currentShow: 'raw' | 'thumbnail';
  loadings: {
    raw: boolean;
    thumbnail?: boolean;
  };
  errors: {
    raw: boolean;
    thumbnail?: boolean;
  };
};

function isThumbnailMode(props: RcImageProps) {
  return props.thumbnailSrc && props.thumbnailSrc !== props.src;
}

class RcImageView extends React.Component<RcImageProps, RcImageState> {
  static initState: RcImageState = {
    loadings: {
      raw: true,
    },
    errors: {
      raw: false,
    },
    currentShow: 'raw',
  };

  static initThumbnailModeState: RcImageState = {
    loadings: {
      raw: true,
      thumbnail: true,
    },
    errors: {
      raw: false,
      thumbnail: false,
    },
    currentShow: 'thumbnail',
  };

  private _imageRef: RefObject<HTMLDivElement & HTMLImageElement> = createRef();

  private _canvasRef: RefObject<HTMLCanvasElement> = createRef();

  constructor(props: RcImageProps) {
    super(props);
    const { performanceTracerStart } = this.props;
    performanceTracerStart?.();
    this.state = this.getInitState(props);
    const { width, height, onSizeLoad } = this.props;
    if (width && height && onSizeLoad) {
      onSizeLoad?.(Number(width), Number(height));
    }
  }

  getInitState(props: RcImageProps): RcImageState {
    if (isThumbnailMode(props)) {
      return cloneDeep(RcImageView.initThumbnailModeState);
    }
    return cloneDeep(RcImageView.initState);
  }

  getImageRef = (): RefObject<HTMLDivElement & HTMLImageElement> =>
    this.props.imageRef || this._imageRef;

  private _errorView() {
    if (!this.error) {
      return null;
    }
    return (
      <StyledLoadingPage>
        <RcIcon size="xxxlarge" color="neutral.f02" symbol={ImageBroken} />
      </StyledLoadingPage>
    );
  }

  private _hiddenRawLoader() {
    const { loadings, errors, currentShow } = this.state;
    const { onSizeLoad, src } = this.props;
    return (
      currentShow !== 'raw' && (
        <HiddenImage
          src={src}
          onLoad={(event: SyntheticEvent<HTMLImageElement>) => {
            const { naturalWidth, naturalHeight } = event.currentTarget;
            onSizeLoad?.(naturalWidth, naturalHeight);
            this.setState({
              loadings: {
                ...loadings,
                raw: false,
              },
              currentShow: 'raw',
            });
          }}
          onError={() => {
            this.setState({
              loadings: {
                ...loadings,
                raw: false,
              },
              errors: {
                ...errors,
                raw: true,
              },
            });
          }}
        />
      )
    );
  }

  get error() {
    const { errors } = this.state;
    return values(errors).every((status: boolean) => status);
  }

  private _drawToCanvas = (imgBitmap: ImageBitmap | HTMLImageElement) => {
    const canvasE = this._canvasRef.current;
    if (!canvasE) {
      return;
    }
    const ctx = canvasE.getContext('2d');
    if (ctx) {
      if (!imgBitmap) {
        return;
      }
      const { width: naturalWidth, height: naturalHeight } = imgBitmap;
      canvasE.width = naturalWidth;
      canvasE.height = naturalHeight;
      ctx.drawImage(
        imgBitmap,
        0,
        0,
        naturalWidth,
        naturalHeight,
        0,
        0,
        naturalWidth,
        naturalHeight,
      );
    }
  };

  private _loadHandler = async (event: SyntheticEvent<HTMLImageElement>) => {
    const { loadings, currentShow } = this.state;
    const { onSizeLoad, onLoad } = this.props;
    if (currentShow === 'raw') {
      const { naturalWidth, naturalHeight } = event.currentTarget;
      onSizeLoad?.(naturalWidth, naturalHeight);
      onLoad?.();
      const { performanceTracerEnd } = this.props;
      performanceTracerEnd?.();
    }
    this.setState({
      loadings: {
        ...loadings,
        [currentShow]: false,
      },
    });
    if (!this._canvasRef.current) {
      return;
    }
    const target = event.target as HTMLImageElement;
    if ('createImageBitmap' in window) {
      const bitmap = await createImageBitmap(target);
      this._drawToCanvas(bitmap);
    } else {
      this._drawToCanvas(target);
    }
  };

  private _errorHandler = () => {
    const { loadings, errors, currentShow } = this.state;
    const { onError } = this.props;
    if (currentShow === 'raw') {
      onError?.();
    }
    this.setState({
      loadings: {
        ...loadings,
        [currentShow]: false,
      },
      errors: {
        ...errors,
        [currentShow]: true,
      },
    });
    onError?.();
  };

  get _imageAttributes() {
    const {
      onSizeLoad,
      onLoad,
      onError,
      loadingPlaceHolder,
      imageRef: viewRef,
      thumbnailSrc,
      src,
      performanceTracerEnd,
      performanceTracerStart,
      ...rest
    } = this.props;
    return { ...rest, ref: this.getImageRef() };
  }

  private rawImageLoader = () => {
    const { currentShow } = this.state;
    const { thumbnailSrc, src } = this.props;
    const currentShowSrc = currentShow === 'raw' ? src : thumbnailSrc;
    if (!currentShowSrc) {
      return null;
    }
    const pathName = new URL(currentShowSrc).pathname;
    const isGif = /\.gif$/.test(pathName);
    if (isGif) {
      return (
        <img
          src={currentShowSrc}
          alt=""
          onLoad={this._loadHandler}
          onError={this._errorHandler}
          {...this._imageAttributes}
        />
      );
    }
    return (
      <>
        {this.canvasRenderer()}
        <HiddenImage
          src={currentShowSrc}
          onLoad={this._loadHandler}
          onError={this._errorHandler}
        />
      </>
    );
  };

  canvasRenderer = () => {
    return (
      <StyledBackground
        {...this._imageAttributes}
        visibility={this.error ? 'hidden' : 'visible'}
      >
        <canvas ref={this._canvasRef} style={{ width: '100%' }} />
      </StyledBackground>
    );
  };

  render() {
    return (
      <>
        {this.rawImageLoader()}
        {this._hiddenRawLoader()}
        {this._errorView()}
      </>
    );
  }
}
export { RcImageView };
