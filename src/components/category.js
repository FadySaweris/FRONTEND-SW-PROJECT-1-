import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";

const getCategories = gql`
  query {
    categories {
      name
    }
  }
`;

const Category = () => {
  const { data } = useQuery(getCategories);
  return <div>{data?.categories.map((d) => d.name)}</div>;
};

export default Category;
