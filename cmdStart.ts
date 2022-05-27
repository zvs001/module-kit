import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import cleaner from './src/cleaner'

function getArgs() {
  return yargs(hideBin(process.argv))
    .option('list', {
      alias: 'l',
      type: 'boolean',
      description: 'List files that will be deleted without deleting them.',
    })
    .option('ignore', {
      alias: 'exclude',
      type: 'array',
      description: 'List of paterns to exclude from deleting',
    })
    .exitProcess(true)
    .argv
}

const cmdStart = async () => {
  const args = getArgs()
  // @ts-ignore
  const { ignore, list } = args

  await cleaner.clean({
    excludeList: ignore || [],
    noDelete: list,
  })
}

cmdStart()
