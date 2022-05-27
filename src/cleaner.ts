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
  noDelete?: boolean
}) {
  const { excludeList = [], noDelete } = config || {}

  const list: string[] = [
    ...listDefault,
  ]
  excludeList.forEach(item => list.push(`!${item}`))

  let pathsDeleting: string[] = []
  if (noDelete) {
    pathsDeleting = await globby(list)
  } else {
    pathsDeleting = del.sync(list)
  }

  if (!pathsDeleting.length) return null
  console.log('Deleted files and directories:')
  console.log('-', pathsDeleting.join('\n- '))
  console.log(`Total files deleted: ${pathsDeleting.length}`)
}

export default {
  clean,
}
