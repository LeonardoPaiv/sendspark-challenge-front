import DeleteIcon from '@mui/icons-material/Delete';
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import { IUserReturnDTO } from "../models/IUserReturnDTO";
import { deleteUser } from "../services/userService";

const UserList = ({ users, update }: {users: IUserReturnDTO[], update: () => void}) => {

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUser(id)
      update()
    } catch (err) {
      console.log(err)
    }
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
