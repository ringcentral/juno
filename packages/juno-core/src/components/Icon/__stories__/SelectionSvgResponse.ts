export interface SelectionSvgResponse {
  IcoMoonType: string;
  icons: Icon2[];
  height: number;
  preferences: Preferences;
}

interface Preferences {
  showGlyphs: boolean;
  showCodes: boolean;
  showQuickUse: boolean;
  showQuickUse2: boolean;
  showSVGs: boolean;
  fontPref: FontPref;
  imagePref: ImagePref;
  historySize: number;
  quickUsageToken: QuickUsageToken;
  imageUploadTime: string;
  imageUrlS3: string;
  imageCF: ImageCF;
  imageUrlHash: string;
  imageHostingName: string;
  gridSize: number;
  showGrid: boolean;
  fontUploadTime: string;
  fontUrlS3: string;
  fontCF: ImageCF;
  fontUrlHash: string;
  fontHostingName: string;
}

interface ImageCF {
  url: string;
  time: number;
}

interface QuickUsageToken {
  Jupiternewicontest: boolean;
}

interface ImagePref {
  prefix: string;
  png: boolean;
  useClassSelector: boolean;
  color: number;
  bgColor: number;
  name: string;
  classSelector: string;
  autoHost: boolean;
  height: number;
  columns: number;
  margin: number;
  addTitleTags: boolean;
}

interface FontPref {
  prefix: string;
  metadata: Metadata;
  metrics: Metrics;
  hideFormats: boolean;
  autoHost: boolean;
}

interface Metrics {
  emSize: number;
  baseline: number;
  whitespace: number;
}

interface Metadata {
  fontFamily: string;
}

interface Icon2 {
  icon: Icon;
  attrs: Attr[];
  properties: Properties;
  setIdx: number;
  setId: number;
  iconIdx: number;
}

interface Properties {
  order: number;
  id: number;
  name: string;
  prevSize: number;
}

interface Icon {
  paths: string[];
  attrs: Attr[];
  isMulticolor: boolean;
  isMulticolor2: boolean;
  grid: number;
  tags: string[];
}

interface Attr {
  fill: string;
  opacity?: number;
}
