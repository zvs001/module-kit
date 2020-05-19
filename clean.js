#!/usr/bin/env node

// cmd module-kit-clean

const del = require('del')

const deletedPaths = del.sync([
  './**/*.js',
  './**/*.d.ts',
  // '!scripts',
  '!typings',
  '!node_modules',
])

console.log('Deleted files and directories:\n', deletedPaths.join('\n'), '\n\n')
