const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

if (!fs.existsSync(path.join(__dirname, '../jest_html_reporters.html'))) {
  execSync('yarn test');
}
