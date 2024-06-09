import { List, ListItem, ListItemText } from "@mui/material";
import { IUserReturnDTO } from "../models/IUserReturnDTO";
  
const UserList = ({ users }: {users: IUserReturnDTO[]}) => {
    return (
      <List>
        {users.map((u) => (
          <ListItem key={u.id}>
            <ListItemText primary={`${u.firstName} ${u.lastName}`} />
          </ListItem>
        ))}
      </List>
    );
  }

export default UserList