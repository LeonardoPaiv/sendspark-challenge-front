import DeleteIcon from '@mui/icons-material/Delete';
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import { IUserReturnDTO } from "../models/IUserReturnDTO";
import { deleteUser } from "../services/userService";

const UserList = ({ users, update }: {users: IUserReturnDTO[], update: () => void}) => {

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUser(id)
      update()
    } catch (err: any) {
    }
  };

  return (
    <List>
      {users.map((u) => (
        <ListItem key={u.id}>
          <ListItemText primary={`${u.firstName} ${u.lastName}`} />
          <IconButton color='error' onClick={() => handleDeleteUser(u.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default UserList;
