// src/query/schema.ts
import { gql } from "@apollo/client";

export const GETQUERY = gql`
  {
    articles(sort: "id:desc") {
      data {
        id
        attributes {
          Title
          createdAt
        }
      }
    }
  }
`;

export const ADDMUT = gql`
  mutation createArticle($Title: String) {
    createArticle(data: { Title: $Title }) {
      data {
        id
        attributes {
          Title
          createdAt
        }
      }
    }
  }
`;

export const UPDATEMUT = gql`
  mutation updateArticle($id: ID!, $Title: String!) {
    updateArticle(id: $id, data: { Title: $Title }) {
      data {
        id
        attributes {
          Title
          createdAt
        }
      }
    }
  }
`;

export const DELETEMUT = gql`
  mutation deleteArticle($id: ID!) {
    deleteArticle(id: $id) {
      data {
        id
        attributes {
          Title
          createdAt
        }
      }
    }
  }
`;
