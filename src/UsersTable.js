import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const UsersTable = (props) => {
  return (
    //Paper in MUI gives you a material design “sheet of paper” look. It has background color (usually white), rounded corners,
    //  and supports elevation (shadows). This makes your table look more like a neat, card-style component rather than just plain text.
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.Rows && props.Rows.length > 0 ? (
            props.Rows.map((row) => (
              <TableRow
                key={row.id}
                //is an inline style (using MUI’s sx prop) that applies a CSS selector to remove borders from the last row of the table.
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <Button
                    sx={{
                      margin: "0px 10px",
                      backgroundColor: "black",
                      fontcolor: "white",
                    }}
                    onClick={() => {}}
                  >
                    Edit
                  </Button>
                  <Button
                    sx={{ margin: "0px 10px", backgroundColor: "black" }}
                    onClick={() => {}}
                  >
                    Delete
                  </Button>
                  <Button
                    sx={{ margin: "20px 10px", backgroundColor: "black" }}
                    onClick={() => {}}
                  >
                    Favorite
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow
              //is an inline style (using MUI’s sx prop) that applies a CSS selector to remove borders from the last row of the table.
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell colSpan={3} align="center">
                No users found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
