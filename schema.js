const Product = require('./ProductModel')

const { GraphQLObjectType, GraphQLID, GraphQLFloat, GraphQLString, GraphQLList, GraphQLSchema, GraphQLError } = require('graphql');

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    category: { type: GraphQLString },
    shortDesc: { type: GraphQLString },
    description: { type: GraphQLString }
  })
});




// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    Product: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.find({})
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addProduct: {
      type: ProductType,
      args: {
        name: { type: GraphQLString },
        price: { type: GraphQLFloat },
        category: { type: GraphQLString },
        shortDesc: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      async resolve(parent, args) {
        let newProduct = new Product({
          name: args.name,
          price: args.price,
          category: args.category,
          shortDesc: args.shortDesc,
          description: args.description
        });

        try {
          await newProduct.save();
        } catch (err) {
          const error = new GraphQLError(err);
          return error;
        }
      }
    }
  }
}
)


module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});