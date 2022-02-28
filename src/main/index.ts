import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import { UserResolver } from '../resolvers'

const PORT = process.env.PORT ?? 4000

void (
  async (): Promise<void> => {
    const schema = await buildSchema({
      resolvers: [UserResolver]
    })

    const server = new ApolloServer({
      schema
    })

    const { url } = await server.listen(PORT)
    console.log(`Hello baby ~ Server running at ${url}`)
  }
)()
