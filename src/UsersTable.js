import { Paper, TableBody, TableCell, TableContainer } from "@mui/material";

const UsersTable = (props) => {
  <TableContainer component={Paper}>
    <table>
      <thead>
        <tr>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Actions</TableCell>
        </tr>
      </thead>
      <TableBody>{props.rows}</TableBody>
    </table>
  </TableContainer>;
};

export default UsersTable;
