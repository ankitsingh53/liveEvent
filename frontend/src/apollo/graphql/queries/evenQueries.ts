import {gql} from "@apollo/client";


export const GET_ALL_EVENTS = gql`
  query GetEvents {
    getEvents {
      id
      title
      summary
      date
      start_time
      end_time
    }
  }
`;


export const GET_SEARCH_EVENT = gql`
query($word: String!){
  search(word: $word) {
    id
    title
    summary
    date
    start_time
    end_time
  }
}
`;

export const GET_EVENT_BY_ID = gql`
  query GetEventById($id: ID!) {
    getEvent(id: $id) {
      id
      title
      summary
      date
      start_time
      end_time
    }
  }
`;