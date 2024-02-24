import { gql } from "@apollo/client";

export const BLOG = gql`
  query ($slug: String!) {
    blogs(filters: { slug: { contains: $slug } }) {
      data {
        attributes {
          title
          slug
          headline
          author_email
          content
          tags
          createdAt
          cover {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
