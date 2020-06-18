const yargs = require('yargs')

const { formatInputDate, addNumberInputDate } = require('./commands')

const cli = yargs
  .command(formatInputDate)
  .command(addNumberInputDate)
  .help()
  .wrap(yargs.terminalWidth() - 10)

const args = cli.argv

if (!args._[0]) {
  cli.showHelp()
}
