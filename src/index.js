import program from 'commander';
import lintStaged from 'lint-staged';

import {version} from '../package.json';


function main() {
  program.version(version);
}

main();

const lint = async () => {
  try {
    const success = await lintStaged({
      allowEmpty: false,
      concurrent: true,
      // configPath: './path/to/configuration/file',
      config: {
        '*.js': 'eslint'
      },
      cwd: process.cwd(),
      debug: false,
      maxArgLength: null,
      quiet: false,
      relative: false,
      shell: false,
      stash: true,
      verbose: false
    })
    console.log(success ? 'lint success' : 'lint failed');
  }
  catch (e) {
    console.error(e);
  }
};

lint();

