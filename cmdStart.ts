import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import cleaner from './src/cleaner'

function getArgs() {
  return yargs(hideBin(process.argv))
    .option('ignore', {
      alias: 'exclude',
      type: 'array',
      description: 'List of paterns to exclude from deleting',
    })
    .exitProcess(true)
    .argv
}

const cmdStart = () => {
  const args = getArgs()
  // @ts-ignore
  const { ignore } = args
  // invariant(configPath, '--config path is invalid')

  cleaner.clean({
    excludeList: ignore || [],
  })
}

cmdStart()
