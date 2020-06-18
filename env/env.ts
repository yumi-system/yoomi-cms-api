import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';

const dotenvFilesPath = path.resolve(__dirname, './.env');

const NODE_ENV = process.env.NODE_ENV || 'production';

// https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
const dotenvFiles: string[] = [
  `${dotenvFilesPath}.${NODE_ENV}.local`,
  `${dotenvFilesPath}.${NODE_ENV}`,
  NODE_ENV !== 'test' && `${dotenvFilesPath}.local`,
  dotenvFilesPath,
].filter(Boolean) as string[];

// Load environment variables from .env* files. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.  Variable expansion is supported in .env files.
// https://github.com/motdotla/dotenv
// https://github.com/motdotla/dotenv-expand
dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    dotenvExpand(
        dotenv.config({
        path: dotenvFile,
      })
    );
  }
});
