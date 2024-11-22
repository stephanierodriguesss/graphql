const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')
const nodemon = require('nodemon')

const resolvers = require('./resolvers')

const server = new ApolloServer({
    typeDefs: importSchema('./schema/index.graphql'),
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})
