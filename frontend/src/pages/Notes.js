import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import Lottie from "react-lottie";
import animation from "../animation.json";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { allTasks, deleteRecord } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";

export default function Notes() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notes = useSelector((state) => state?.getNotes?.getNotes) || [];
  const { success } = useSelector((state) => state?.deleteNotes) || [];

  // Function to handle "Add Note" button click

  const handleButtonClick = () => {
    navigate("/create");
  };
  // Function to handle note deletion
  const handleDeleteClick = (id) => {
    // Dispatch the deleteRecord action with the note's id
    dispatch(deleteRecord(id));
  };

  //  Dispatch to get All notes from redux action api
  useEffect(() => {
    dispatch(allTasks());
  }, []);

  // dispatch after delete note card and reload page
  useEffect(() => {
    if (success) {
      dispatch(allTasks());
    }
  }, [success]);
  return (
    <>
      <Layout />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
        }}
      >
        {notes?.alltasks?.length === 0 ? (
          <Grid item xs={12} lg={7} md={3}>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animation,
              }}
              height={400}
              width={800}
            />
          </Grid>
        ) : (
          <Grid container spacing={3}>
            {notes?.alltasks?.map((note) => (
              <Grid item xs={12} md={6} lg={4} sm={2} key={note._id}>
                <Card elevation={1}>
                  <CardHeader
                    action={
                      <>
                        <IconButton onClick={() => handleDeleteClick(note._id)}>
                          <DeleteOutlinedIcon />
                        </IconButton>
                      </>
                    }
                    title={note.title}
                    subheader={`${note.category} : ${note.date}`}
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      {note.details}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        <Button
          variant="contained"
          style={{
            marginTop: "20px",
          }}
          color="secondary"
          onClick={handleButtonClick}
        >
          Add Note
        </Button>
      </Container>
    </>
  );
}
