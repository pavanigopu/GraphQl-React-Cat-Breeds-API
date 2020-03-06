const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type CatBreed {
  _id: ID!
  name: String!
  description: String!
  temperament: String!
  origin: String!
}

input BreedInput {
  name: String!
  description: String!
  temperament: String!
  origin: String!
}

type RootQuery {
  breeds: [CatBreed!]!
  breedById(id: String!): CatBreed!
  searchByName(name: String!): [CatBreed]
}

type RootMutation {
  createBreed(breedInput: BreedInput!): CatBreed
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);