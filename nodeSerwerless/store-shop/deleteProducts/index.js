const { connect, deleteOne } = require('../database')

module.exports = async function (context, req) {
  const client = await connect()
  const id = await deleteOne(client, req.query.id)

  context.res = {
    body: { id }
  }
}
