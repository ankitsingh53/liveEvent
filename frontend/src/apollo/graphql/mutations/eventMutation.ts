import {gql} from '@apollo/client';
export const DELETE_EVENT = gql`
  mutation DeleteEvent($id: ID!) {
    deleteEvent(id: $id)
  }
`;

export const CREATE_EVENT = gql`
  mutation CreateEvent($input: CreateEvent!) {
    createEvent(input: $input) {
      id
      title
      summary
      date
      start_time
      end_time
    }
  }
`;

export const UPDATE_EVENT = gql`
  mutation UpdateEvent($input: UpdateEvent!) {
    updateEvent(input: $input) {
      id
      title
      summary
      date
      start_time
      end_time
    }
  }
`;