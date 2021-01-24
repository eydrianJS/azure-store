const { connect, insertOne } = require('../database')

module.exports = async function (context, req) {
  const client = await connect()
  const id = await insertOne(client, req.body)

  context.res = {
    body: { id }
  }
}
