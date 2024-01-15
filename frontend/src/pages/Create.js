import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@material-ui/core";

import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/action";
const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  details: Yup.string().required("Details are required"),
});

const initialValues = {
  title: "",
  details: "",
  category: "money",
};

const useStyles = makeStyles((theme) => ({
  field: {
    margin: theme.spacing(2, 0),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export default function Create() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      debugger;
      values.date = new Date().toLocaleDateString();
      const user = JSON.parse(localStorage.getItem("LoginUser"));

      // Extract the "id" from the user object
      const userId = user.id;

      // Add the "id" to the "requestData" object
      const requestData = {
        ...values,
        userId: userId, // Add the "id" property to "requestData"
      };

      try {
        //Dispatch form Data to Redux Action
        dispatch(addTask(requestData, navigate));
      } catch (error) {
        console.error("API Request Error:", error);
      }
    },
  });

  return (
    <>
      <Layout />
      <Container maxWidth="sm">
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Create a New Note
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            className={classes.field}
            fullWidth
            variant="outlined"
            color="secondary"
            label="Note Title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            required
          />

          <TextField
            className={classes.field}
            fullWidth
            variant="outlined"
            color="secondary"
            label="Details"
            name="details"
            value={formik.values.details}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.details && Boolean(formik.errors.details)}
            helperText={formik.touched.details && formik.errors.details}
            multiline
            minRows={2}
            required
          />

          <FormControl className={classes.field}>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
            >
              <FormControlLabel
                value="money"
                control={<Radio />}
                label="Money"
              />
              <FormControlLabel
                value="todos"
                control={<Radio />}
                label="Todos"
              />
              <FormControlLabel
                value="reminders"
                control={<Radio />}
                label="Reminders"
              />
              <FormControlLabel value="work" control={<Radio />} label="Work" />
            </RadioGroup>
          </FormControl>

          <div className={classes.button}>
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              endIcon={<KeyboardArrowRightIcon />}
            >
              Submit
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}
