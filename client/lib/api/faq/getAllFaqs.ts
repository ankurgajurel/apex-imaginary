import { gql } from "@apollo/client";

export const FAQS = gql`
  query {
    faqs {
      data {
        attributes {
          question
          answer
        }
      }
    }
  }
`;
