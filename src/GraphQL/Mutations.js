import { gql } from "@apollo/client";

export const ADD_SHOP = gql`
  mutation addShop($name: String!) {
    addShop(name: $name) {
      id
      name
    }
  }
`;
