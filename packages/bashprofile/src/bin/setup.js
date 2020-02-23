#!/usr/bin/env node
/**
 * @fileoverview the initial command that a user will execute to set up
 * this script into their bash_profile file. It will add a line to the
 * bash_profile file to execute the script that actually does the bash_profile
 * stuff
 */

const fs = require('fs');

const yargs = require('yargs');

const PACKAGE_NAME = '@bigpopakap/bashprofile';
const BASHPROFILE_SCRIPT = `bigpopakap-bashprofile`;

const CONTENTS = `
# Added by the ${PACKAGE_NAME} package
npx ${BASHPROFILE_SCRIPT} --package ${PACKAGE_NAME}
`;

// Parse the command line arguments
const args = yargs.string('bashfile').default('bashfile', '~/.bash_profile').argv;

// Append or create the file
if (fs.existsSync(args.bashfile)) {
  fs.appendFileSync(args.bashfile, CONTENTS);
} else {
  fs.writeFileSync(args.bashfile, CONTENTS);
}
