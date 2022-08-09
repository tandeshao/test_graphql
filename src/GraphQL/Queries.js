import { gql } from '@apollo/client';

export const GET_ALL_SHOPS = gql`
    query {
        shops {
            id
            name
            items {
                id
            }
        }
    }
`