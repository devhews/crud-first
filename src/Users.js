import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

const Users = () => {
  return (
    <Box>
      <UserForm />
      <UsersTable rows={users} />
    </Box>
  );
};

export default Users;
