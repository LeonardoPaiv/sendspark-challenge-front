import { Paper, Button, CircularProgress, Box } from "@mui/material";
import Page from "../Components/Page";
import { useContext, useEffect, useState } from "react";
import { searchUsers } from "../services/userService";
import { useNavigate } from "react-router-dom";
import Title from "../Components/Title";
import { IUserReturnDTO } from "../models/IUserReturnDTO";
import "react-toastify/dist/ReactToastify.css";
import Logout from "@mui/icons-material/Logout";
import UserList from "../Components/UserList";
import { AuthContext } from "../context/AuthContext";
import PageHandler from "../Components/PageHandler";
import { IUserSearchDTO } from "../models/IUserSearchDTO";
import SearchForm from "../Components/SearchForm";
import { ToastContext } from "../context/ToastContext";

function Home() {
  const authContext = useContext(AuthContext);
  const toastContext = useContext(ToastContext)
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<IUserReturnDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchValues, setSearchValues] = useState<IUserSearchDTO>({
    company: "",
    jobTitle: "",
  });

  const logout = () => {
    authContext.logout()
  }

  const submit = (values: IUserSearchDTO) => {
    handleSearch(values, 1);
    setSearchValues(values);
  }

  useEffect(() => {
    if (!authContext.token) {
      toastContext.info("You have been logged out.");
      navigate('/login');
    }
  }, [authContext.token, navigate]);

  const handleSearch = (
    values: IUserSearchDTO,
    page: number
  ) => {
    setLoading(true);
    searchUsers({
      page,
      pageSize: 5,
      filter: values
    })
      .then((res) => {
        if (res?.data) {
          setUsers(res.data);
          setPage(page);
        }
      })
      .catch((err) => {
        toastContext.error(err.message);
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
        <SearchForm searchValues={searchValues} submit={submit}/>
        {loading ? (
          <Box display="flex" justifyContent="center" sx={{ marginTop: 2 }}>
            <CircularProgress />
          </Box>
        ) : (
          <UserList users={users} update={updateList} />
        )}
        <PageHandler decreasePage={decreasePage} increasePage={increasePage} page={page}/>
      </Paper>
    </Page>
  );
}

export default Home;
