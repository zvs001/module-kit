#!/usr/bin/env node
// cmd module-kit-clean

import del from 'del'
import globby from 'globby'

let listDefault = [
  './**/*.js',
  './**/*.d.ts',
  './**/*.js.map',
  // '!scripts',
  '!typings',
  '!node_modules',
  '!bin',
  '!_',
]

async function clean(config: {
  excludeList: string[]
}) {

  const { excludeList = [] } = config || {}

  const list: string[] = [
    ...listDefault,
  ]
  excludeList.forEach(item => list.push(`!${item}`))

  const pathsDeleting = await globby(excludeList)

  // const pathsDeleting = del.sync(excludeList)

  console.log('Deleted files and directories:')
  console.log('-', pathsDeleting.join('\n - '))
}

export default {
  clean,
}
