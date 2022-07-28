import gql from "graphql-tag";

export const getCategories = () => gql`
  query {
    categories {
      name
    }
  }
`;

export const getCategoriesWithProducts = () => gql`
  query {
    categories {
      name
      products {
        name
        gallery
      }
    }
  }
`;
