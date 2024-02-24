import { gql } from "@apollo/client";

export const TEAMS = gql`
  query {
    teams {
      data {
        attributes {
          name
          designation
          headline
          github
          linkedin
          profileGithub
        }
      }
    }
  }
`;
