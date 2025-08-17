import { Grid, Typography, Button } from "@mui/material";
import { useState } from "react";

const UserForm = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: 2,
        backgroundColor: "#e6af19ff",
        borderRadius: "5px",
        marginBottom: "30px",
        display: "block",
      }}
    >
      <Grid item xs={12}>
        <Typography
          component={"h1"}
          sx={{
            color: "#000000",
            fontWeight: "bold",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          User Form
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "#000000",
            marginRight: 20,
            fontSize: "16px",
            width: "30px",
            display: "block",
            fontWeight: "bold",
          }}
        >
          ID
        </Typography>
        <input
          type="number"
          id="id"
          name="id"
          value={id}
          placeholder="Enter ID"
          style={{ width: "400px", borderRadius: "5px" }}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="name"
          sx={{
            color: "#000000",
            marginRight: 20,
            fontSize: "16px",
            width: "30px",
            display: "block",
            fontWeight: "bold",
          }}
        >
          Name
        </Typography>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Enter Name"
          style={{ width: "400px", borderRadius: "5px" }}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Grid>
      <Button
        sx={{
          marginBottom: "20px",
          margin: "auto",
          backgroundColor: "#61dafb",
          color: "#000000",
          marginLeft: "15px",
          marginTop: "20px",
          "&:hover": { opacity: 0.7, backgroundColor: "#21a1f1" },
        }}
      >
        Add
      </Button>
    </Grid>
  );
};

export default UserForm;
