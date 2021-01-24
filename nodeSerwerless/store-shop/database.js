const { MongoClient } = require('mongodb')

const dbName = 'Shop'
const collectionName = 'Products'

exports.connect = async () =>
  new Promise((resolve, reject) => {
    MongoClient.connect(process.env.DB_CONNECTION_STRING, (error, client) => {
      if (error != null) {
        return reject(error)
      }
      resolve(client)
    })
  })

exports.findAll = async (client) =>
  new Promise((resolve, reject) => {
    client
      .db(dbName)
      .collection(collectionName)
      .find({})
      .toArray((err, res) => {
        if (err != null) {
          return reject(err)
        }
        resolve(res)
      })
  })

exports.insertOne = async (client, productData) =>
  new Promise((resolve, reject) => {
    client
      .db(dbName)
      .collection(collectionName)
      .insertOne(productData, (error, response) => {
        if (error != null) {
          return reject(error)
        }
        resolve(response.insertedId)
      })
  })

exports.deleteOne = async (client, productId) =>
  new Promise((resolve, reject) => {
    client
      .db(dbName)
      .collection(collectionName)
      .deleteOne({ _id: productId }, (err, res) => {
        if (err != null) {
          return reject(err)
        }
        resolve(productId)
      })
  })
