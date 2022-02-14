const npmPackageOptions = {
  movePaths: [
    'README.md',
    'LICENSE',
    {
      source: 'src/components/Dialer/DialPad/assets/RcDialerPadSounds.json',
      to: 'RcDialerPadSounds.json',
    },
    { source: 'src/components/Icon/assets', to: 'icons' },
    { source: 'src/components/Icon/assets', to: 'components/Icon/assets' },
    { source: 'src/scss', to: 'scss' },
  ],
  subModules: ['icon'],
};

exports.npmPackageOptions = npmPackageOptions;
