import gql from 'graphql-tag'

export const getProductsQuery = gql`
{
  Product{
    id,
    name,
    price,
    category,
    shortDesc,
    description
  }
}
`;

export const addProductQuery = gql`
mutation( $name:String!,$price:Float!, $category:String!, $shortDesc:String!, $description:String!){
    addProduct(name:$name, price:$price, category:$category, shortDesc:$shortDesc, description:$description ){
    name,
    price,
    category,
    shortDesc,
    description
  }
}
`;


// AddProduct( $name:String!, $price:Number!, $category:String!, $shortDesc:String!, $description:String!)
// mutation {
//   addProduct(name:$name, price:$price, category:$category, shortDesc:$shortDesc, description:$description ){
//     name
//     price
//     category
//     shortDesc
//     description
//   }
// }
// `;