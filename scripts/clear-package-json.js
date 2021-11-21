const fs = require('fs');
const path = require('path');

const ENCODING = 'utf-8';

const packageJsonPath = path.join(__dirname, '..', 'package.json');

fs.readFile(packageJsonPath, ENCODING, (readError, content) => {
  if (readError) {
    console.error(readError);
    process.exit(1);
  }

  const data = JSON.parse(content);
  const { devDependencies, scripts, resolutions, ...clearedProps } = data;
  const newContent = JSON.stringify(clearedProps, null, 2);
  const distPackageJsonPath = path.join(__dirname, '..', 'dist', 'package.json');

  fs.writeFile(distPackageJsonPath, newContent, ENCODING, (writeError) => {
    if (writeError) {
      console.error(writeError);
      process.exit(1);
    }

    console.log('Finished writing cleaned "dist/package.json"');
  });
});
