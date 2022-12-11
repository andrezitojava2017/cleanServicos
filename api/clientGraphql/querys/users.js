import {gql} from '@apollo/client';

export const GET_USERS = gql`
  query {
    cleanUsers {
      data {
        attributes {
          idd
          name
          service
          coords
        }
      }
    }
  }
`;
