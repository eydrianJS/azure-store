const { connect, findAll, findOne } = require('../database')

module.exports = async function (context, req) {
  const client = await connect()
  let products
  if (req.query.id) {
    console.log(req.query.id)
    products = await findOne(client, req.query.id)
  } else {
    products = await findAll(client)
  }

  context.res = {
    body: products
  }
}
