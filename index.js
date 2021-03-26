import { ApolloServer,gql } from "apollo-server-express";
import express from "express";

const app=express()

const port=8080;

const typeDefs=gql`
type Query {
    hello:String!
}
`
const resolvers={
    Query:{
        hello:()=>"Hello World"
    }
}

const server=new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({app})

app.listen(port,()=>console.log("Server running on port 8080"))

