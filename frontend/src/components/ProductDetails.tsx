import Box from "@mui/material/Box";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Loader from "./Loader";
import {GET_EVENT_BY_ID} from '../apollo/graphql/queries/evenQueries'
import { useQuery } from "@apollo/client/react";
import type {GetData} from '../types/eventTypes';


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useQuery<GetData>(GET_EVENT_BY_ID, {
    variables: { id: Number(id) },
    skip: !id,
  });


  const result = data?.getEvent || null;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h3>Error: {error.message}</h3>;
  }

  if (!result) {
    return <h3>Event not found</h3>;
  }

  const eventDate = new Date(Number(result.date));
  const date = eventDate.toLocaleDateString();

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const period = Number(hours) >= 12 ? "PM" : "AM";
    const hour = Number(hours) % 12 || 12;
    return `${hour}:${String(minutes).padStart(2, "0")} ${period}`;
  };

  return (
    <Box
      sx={{
        padding: "30px",
        boxShadow: "0 0 10px 0",
        width: "40%",
        minHeight: "250px",
        height: "auto",
        textAlign: "justify",
        margin: "60px",
      }}
    >
      <h2>{result.title}</h2>
      <p>{result.summary}</p>
      <p>Date:- {date}</p>
      <p>Start time:- {formatTime(result.start_time)}</p>
      <p>End time:- {formatTime(result.end_time)}</p>

      <Button
        variant="contained"
        size="large"
        color="primary"
        type="button"
        onClick={() => navigate("/")}
        sx={{ display: "flex", alignItems: "flex-end" }}
      >
        Go To Home Page
      </Button>
    </Box>
  );
};

export default ProductDetails;