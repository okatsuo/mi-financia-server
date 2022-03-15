import { ApolloServer } from 'apollo-server'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { UserResolver } from './graphql'

const port = process.env.PORT ?? 4000

class App {
  static start = async (): Promise<void> => {
    const schema = await buildSchema({
      resolvers: [UserResolver]
    })

    const server = new ApolloServer({
      schema
    })

    const { url } = await server.listen(port)
    console.log(`Hello baby ~ Server running at ${url}`)
  }
}

App.start().catch(console.error)
