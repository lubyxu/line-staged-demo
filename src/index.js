import lintStaged from 'lint-staged';

const lint = async () => {
  const success = await lintStaged({
    allowEmpty: false,
    concurrent: true,
    configPath: './path/to/configuration/file',
    cwd: process.cwd(),
    debug: false,
    maxArgLength: null,
    quiet: false,
    relative: false,
    shell: false,
    stash: true,
    verbose: false
  })
};