const Product = require('./ProductModel')

const { GraphQLObjectType, GraphQLFloat, GraphQLString, GraphQLList, GraphQLSchema, GraphQLError } = require('graphql');

const ProductType = new GraphQLObjectType({
  name: 'product',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    category: { type: GraphQLString },
    shortDesc: { type: GraphQLString },
    description: { type: GraphQLString },
  })
});




// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.find({})
      }
    },
    product: {
      type: ProductType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Product.findById(args.id)
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
    },
    deleteProduct: {
      type: ProductType,
      args: {
        id: { type: GraphQLString }
      },
      async resolve(parent, args) {
        try {
          await Product.deleteOne({ _id: args.id });
        } catch (err) {
          const error = new GraphQLError(err);
          return error;
        }
      }
    },
    updateProduct: {
      type: ProductType,
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        price: { type: GraphQLFloat },
        category: { type: GraphQLString },
        shortDesc: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      async resolve(parent, args) {
        try {
          const updatedProduct = {
            name: args.name,
            price: args.price,
            category: args.category,
            shortDesc: args.shortDesc,
            description: args.description
          }
          await Product.updateOne({ _id: args.id },
            { $set: updatedProduct });
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