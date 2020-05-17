import gql from 'graphql-tag'

export const getProductsQuery = gql`
query{
  products{
    id,
    name,
    price,
    category,
    shortDesc,
    description
  }
} 
`;

export const getProductQuery = gql`
query ProductQuery($id:String!){
  product(id:$id){
    id
    name,
    price,
    category,
    shortDesc,
    description
  }  
}
`;


export const addProductQuery = gql`
mutation addProductQuery( $name:String!,$price:Float!, $category:String!, $shortDesc:String!, $description:String!){
    addProduct(name:$name, price:$price, category:$category, shortDesc:$shortDesc, description:$description ){
    name,
    price,
    category,
    shortDesc,
    description
  }
}
`;

export const deleteProductQuery = gql`
mutation deleteProductQuery( $id:String!){
    deleteProduct(id:$id){
      id
    }
}
`;

export const updateProductQuery = gql`
mutation updateProductQuery( $id:String!,$name:String!,$price:Float!, $category:String!, $shortDesc:String!, $description:String!){
    updateProduct(id:$id,name:$name, price:$price, category:$category, shortDesc:$shortDesc, description:$description ){
    id,
    name,
    price,
    category,
    shortDesc,
    description
  }
}
`;