const moment = require('../helpers/moment')

const builder = yargs =>
  yargs
    .option('number', {
      type: 'number',
      default: '1',
    })
    .option('key', {
      describe: `years(y), quarters(Q), months(M), weeks(w), days(d),
        hours(h), minutes(m), seconds(s), milliseconds(ms)`,
      type: 'string',
      default: 'days',
    }).argv

const handler = args => {
  const inputDate = moment(args.value).add(args.number, args.key).format()

  console.log(inputDate)
  process.exit(0)
}

module.exports = {
  command: 'add <number> <key> [value]',
  aliases: ['a'],
  desc: 'Output add time. See https://momentjs.com/docs/#/manipulating/add/',
  builder,
  handler,
}
