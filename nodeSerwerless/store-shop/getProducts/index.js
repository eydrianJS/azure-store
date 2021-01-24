const { connect, findAll } = require('../database')

module.exports = async function (context, req) {
  const client = await connect()
  const products = await findAll(client)

  context.res = {
    body: products
  }
}
