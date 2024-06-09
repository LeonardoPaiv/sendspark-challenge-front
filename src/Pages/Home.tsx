import { Paper, TextField, Button, CircularProgress, Box } from "@mui/material";
import Page from "../Components/Page";
import { useContext, useEffect, useState } from "react";
import { searchUsers } from "../services/userService";
import { useNavigate } from "react-router-dom";
import Title from "../Components/Title";
import { IUserReturnDTO } from "../models/IUserReturnDTO";
import { Formik, Form, Field } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { searchSchema } from "../FormSchema/searchSchema";
import ArrowRight from "@mui/icons-material/ArrowRight";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import Logout from "@mui/icons-material/Logout";
import UserList from "../Components/UserList";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<IUserReturnDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchValues, setSearchValues] = useState({
    company: "",
    jobTitle: "",
  });

  const logout = () => {
    authContext?.logout()
    navigate('/login')
  }

  useEffect(() => {
    if (!authContext?.token) {
      toast.info("You have been logged out.");
      navigate('/login');
    }
  }, [authContext?.token, navigate]);

  const handleSearch = (
    values: { company: string; jobTitle: string },
    page: number
  ) => {
    setLoading(true);
    searchUsers({
      page,
      pageSize: 5,
      filter: {
        company: values.company,
        jobTitle: values.jobTitle,
      },
    })
      .then((res) => {
        if (res?.data) {
          setUsers(res.data);
          setPage(page);
        }
      })
      .catch((err) => {
        toast.error(err.message);
        navigate("/login");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const increasePage = () => {
    const nextPage = page + 1;
    handleSearch(searchValues, nextPage);
  };

  const decreasePage = () => {
    const prevPage = page - 1 >= 1 ? page - 1 : 1;
    handleSearch(searchValues, prevPage);
  };

  const updateList = () => {
    handleSearch(searchValues, page)
  }

  return (
    <Page center>
      <Paper elevation={3} sx={{ padding: "24px" }}>
        <div className="flex justify-between">
          <Title text={"Welcome Back " + authContext?.firstName} />
          <Button onClick={logout}>
            <Logout />
          </Button>
        </div>
        <Formik
          initialValues={searchValues}
          validationSchema={searchSchema}
          onSubmit={(values) => {
            handleSearch(values, 1);
            setSearchValues(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Box display="flex" alignItems="center">
                <Field
                  as={TextField}
                  name="company"
                  label="Company"
                  margin="normal"
                  fullWidth
                  error={touched.company && !!errors.company}
                  helperText={touched.company && errors.company}
                  sx={{ marginRight: 2 }}
                />
                <Field
                  as={TextField}
                  name="jobTitle"
                  label="Job Title"
                  margin="normal"
                  fullWidth
                  error={touched.jobTitle && !!errors.jobTitle}
                  helperText={touched.jobTitle && errors.jobTitle}
                  sx={{ marginRight: 2 }}
                />
                <Button type="submit" variant="contained" color="primary">
                  Search
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
        {loading ? (
          <Box display="flex" justifyContent="center" sx={{ marginTop: 2 }}>
            <CircularProgress />
          </Box>
        ) : (
          <UserList users={users} update={updateList} />
        )}
        <Box display="flex" justifyContent="center" marginTop={2}>
          <Button
            onClick={decreasePage}
            sx={{ marginRight: "12px" }}
            variant="contained"
            color="primary"
            disabled={page === 1}
          >
            <ArrowLeft />
          </Button>
          <Button
            onClick={increasePage}
            sx={{ marginLeft: "12px" }}
            variant="contained"
            color="primary"
          >
            <ArrowRight />
          </Button>
        </Box>
      </Paper>
      <ToastContainer />
    </Page>
  );
}

export default Home;
