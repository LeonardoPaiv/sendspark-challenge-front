import DeleteIcon from '@mui/icons-material/Delete';
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import { IUserReturnDTO } from "../models/IUserReturnDTO";
import { deleteUser } from "../services/userService";
import { useContext } from 'react';
import { ToastContext } from '../context/ToastContext';

const UserList = ({ users, update }: {users: IUserReturnDTO[], update: () => void}) => {

  const toastContext = useContext(ToastContext)

  const handleDeleteUser = async (id: number) => {
      await deleteUser(id).then((res) => {
      toastContext.success(res.message)
      update()
      }).catch(err => {
        toastContext.error(err.message)
      })
  };

  return (
    <List>
      {users.map((u) => (
        <ListItem key={u.id}>
          <ListItemText primary={u.workEmail} />
          <IconButton color='error' onClick={() => handleDeleteUser(u.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default UserList;
