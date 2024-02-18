import { gql } from "@apollo/client";

export const BLOGS = gql`
  query {
    blogs {
      data {
        attributes {
          title
          cover {
            data {
              attributes {
                url
                previewUrl
              }
            }
          }
          slug
        }
      }
    }
  }
`;
