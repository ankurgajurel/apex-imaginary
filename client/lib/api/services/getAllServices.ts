import { gql } from "@apollo/client";

export const SERVICES = gql`
  query {
    services {
      data {
        attributes {
          icon
          title
          description
          href
        }
      }
    }
  }
`;
