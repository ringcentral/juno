import { useState, useEffect } from 'react';

export type RcIconMap = {
  [key: string]: any;
};

type IconMapChangeListener = (newIcons: RcIconMap) => void;

/** @deprecated never use that anymore */
export class RcIconService {
  static instance: RcIconService;

  static getInstance(): RcIconService {
    if (!RcIconService.instance) {
      RcIconService.instance = new RcIconService();
    }
    return RcIconService.instance;
  }

  static setInstance(icons: RcIconMap): RcIconService {
    const _icon = RcIconService.getInstance();
    _icon.setIconMap(icons);
    return _icon;
  }

  private _iconMap: RcIconMap;

  private _iconMapChangeListeners: IconMapChangeListener[] = [];

  setIconMap(iconMap: RcIconMap) {
    if (iconMap === this._iconMap) return;
    this._iconMap = iconMap;
    this._iconMapChangeListeners.forEach((listener) => listener(iconMap));
  }

  getIconMap() {
    return this._iconMap;
  }

  onIconMapChange(listener: IconMapChangeListener) {
    this._iconMapChangeListeners.push(listener);
  }

  offIconMapChange(listener: IconMapChangeListener) {
    this._iconMapChangeListeners = this._iconMapChangeListeners.filter(
      (item) => item !== listener,
    );
  }
}

/** @deprecated never use that anymore */
export function useIconService() {
  const iconService = RcIconService.getInstance();

  const [iconMap, setIconMap] = useState<RcIconMap | undefined>(
    iconService.getIconMap(),
  );

  useEffect(() => {
    iconService.onIconMapChange(setIconMap);
    return () => {
      iconService.offIconMapChange(setIconMap);
    };
  }, [iconService]);

  return { iconMap };
}
