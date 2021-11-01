import atosRich from './atosRich';
import atosRichMobile from './atosRich/mobile';
import attRich from './attRich';
import attRichMobile from './attRich/mobile';
import avayaCustomized from './avayaCustomized';
import avayaCustomizedMobile from './avayaCustomized/mobile';
import btRich from './btRich';
import btRichMobile from './btRich/mobile';
import eastlinkSimple from './eastlinkSimple';
import eastlinkSimpleMobile from './eastlinkSimple/mobile';
import ecotelSimple from './ecotelSimple';
import ecotelSimpleMobile from './ecotelSimple/mobile';
import mcmRich from './mcmRich';
import mcmRichMobile from './mcmRich/mobile';
import rainbowRich from './rainbowRich';
import rainbowRichMobile from './rainbowRich/mobile';
import rcBlue from './rcBlue';
import rcBlueMobile from './rcBlue/mobile';
import rcDark from './rcDark';
import rcDarkMobile from './rcDark/mobile';
import rcHighContrast from './rcHighContrast';
import rcHighContrastMobile from './rcHighContrast/mobile';
import rcJupiterBlue from './rcJupiterBlue';
import rcJupiterBlueMobile from './rcJupiterBlue/mobile';
import rcPhoenix from './rcPhoenix';
import rcPhoenixMobile from './rcPhoenix/mobile';
import telusRich from './telusRich';
import telusRichMobile from './telusRich/mobile';
import verizonSimple from './verizonSimple';
import verizonSimpleMobile from './verizonSimple/mobile';
import vodafoneBalanced from './vodafoneBalanced';
import vodafoneBalancedMobile from './vodafoneBalanced/mobile';

type RcThemesIdType = keyof typeof RcThemes;

type RcThemesType = Record<RcThemesIdType, any>;

const RcThemes = {
  rcBlue,
  rcJupiterBlue,
  rcDark,
  rcHighContrast,
  rcPhoenix,
  avayaCustomized,
  verizonSimple,
  vodafoneBalanced,
  rainbowRich,
  atosRich,
  telusRich,
  attRich,
  btRich,
  eastlinkSimple,
  mcmRich,
  ecotelSimple,
};

const RcMobileThemes = {
  rcBlue: rcBlueMobile,
  rcJupiterBlue: rcJupiterBlueMobile,
  rcDark: rcDarkMobile,
  rcHighContrast: rcHighContrastMobile,
  rcPhoenix: rcPhoenixMobile,
  avayaCustomized: avayaCustomizedMobile,
  verizonSimple: verizonSimpleMobile,
  vodafoneBalanced: vodafoneBalancedMobile,
  rainbowRich: rainbowRichMobile,
  atosRich: atosRichMobile,
  telusRich: telusRichMobile,
  attRich: attRichMobile,
  btRich: btRichMobile,
  eastlinkSimple: eastlinkSimpleMobile,
  mcmRich: mcmRichMobile,
  ecotelSimple: ecotelSimpleMobile,
};

const RcThemeIds = Object.keys(RcThemes) as RcThemesIdType[];

export { RcThemeIds, RcThemes, RcMobileThemes, RcThemesIdType, RcThemesType };
