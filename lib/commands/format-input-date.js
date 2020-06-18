const moment = require('../helpers/moment')

const builder = yargs => yargs.default('key', 'YYYY-MM-DDTHH:mm:ssZ')

const handler = args => {
  const inputDate = moment(args.value).format(args.key)

  console.log(inputDate)
  process.exit(0)
}

module.exports = {
  command: 'format <key> [value]',
  aliases: ['f'],
  desc: 'Output format. See https://momentjs.com/docs/#/displaying/format/',
  builder,
  handler,
}
