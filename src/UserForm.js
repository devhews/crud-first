// import { Grid, Typography, Button } from "@mui/material";

// const UserForm = () => {
//   return (
//     <Grid
//       container
//       spacing={2}
//       sx={{
//         padding: 2,
//         backgroundColor: "#ffffff",
//         borderRadius: "5px",
//         marginBottom: "30px",
//         display: "block",
//       }}
//     >
//       <Grid item xs={12}>
//         <Typography component={"h1"} sx={{ color: "#000000" }}>
//           User Form
//         </Typography>
//       </Grid>
//       <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
//         <Typography
//           component={"label"}
//           htmlFor="id"
//           sx={{
//             color: "#000000",
//             marginRight: 20,
//             fontSize: "16px",
//             width: "100px",
//             display: "block",
//           }}
//         >
//           ID
//         </Typography>
//         <input
//           type="number"
//           id="id"
//           name="id"
//           placeholder="Enter ID"
//           style={{ width: "400px" }}
//           onChange={(e) => {}}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
//         <Typography
//           component={"label"}
//           htmlFor="name"
//           sx={{
//             color: "#000000",
//             marginRight: 20,
//             fontSize: "16px",
//             width: "100px",
//             display: "block",
//           }}
//         >
//           Name
//         </Typography>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder="Enter Name"
//           style={{ width: "400px" }}
//           onChange={(e) => {}}
//         />
//       </Grid>
//       <Button
//         sx={{
//           marginBottom: "20px",
//           margin: "auto",
//           backgroundColor: "#61dafb",
//           color: "#000000",
//           marginLeft: "15px",
//           marginTop: "20px",
//           "&:hover": { opacity: 0.7, backgroundColor: "#21a1f1" },
//         }}
//       >
//         Add
//       </Button>
//     </Grid>
//   );
// };

import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Grid,
  Stack,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export default function UserForm() {
  const [values, setValues] = React.useState({
    id: "",
    name: "",
    email: "",
    role: "",
    dob: "",
    interests: [],
  });

  const [errors, setErrors] = React.useState({});
  const [open, setOpen] = React.useState(false);

  const roles = ["Admin", "Editor", "Viewer"];
  const interestOptions = ["Gaming", "Music", "Design", "Coding", "Travel"];

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setValues((prev) => ({ ...prev, [field]: value }));
    // Live validation on change
    validateField(field, value);
  };

  const validateField = (field, value) => {
    let message = "";
    switch (field) {
      case "id":
        if (!value) message = "ID is required";
        else if (!/^\d+$/.test(value)) message = "ID must be a number";
        break;
      case "name":
        if (!value) message = "Name is required";
        else if (value.length < 2) message = "Name is too short";
        break;
      case "email":
        if (!value) message = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(value)) message = "Enter a valid email";
        break;
      case "role":
        if (!value) message = "Select a role";
        break;
      case "dob":
        if (!value) message = "Date of birth is required";
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [field]: message }));
    return !message;
  };

  const validateAll = () => {
    const fields = ["id", "name", "email", "role", "dob"];
    const results = fields.map((f) => validateField(f, values[f]));
    return results.every(Boolean);
  };

  const handleReset = () => {
    setValues({
      id: "",
      name: "",
      email: "",
      role: "",
      dob: "",
      interests: [],
    });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) return;
    // Simulate save
    setOpen(true);
  };

  return (
    <Box
      sx={{
        width: "100%",
        p: { xs: 1.5, sm: 2, md: 3 },
        background: {
          xs: "linear-gradient(135deg, #f0f7ff 0%, #fff 60%)",
          sm: "linear-gradient(135deg, #edf7ff 0%, #ffffff 60%)",
        },
        borderRadius: 3,
      }}
    >
      <Card
        elevation={6}
        sx={{
          overflow: "hidden",
          borderRadius: 4,
          backdropFilter: "blur(6px)",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <CardHeader
          title={
            <Typography variant="h5" fontWeight={800}>
              User Form
            </Typography>
          }
          subheader="Responsive • Colorful • Professional"
          sx={{
            px: { xs: 2, sm: 3 },
            py: 2,
            background: "linear-gradient(90deg, #7c4dff, #18ffff)",
            color: "#0a0a0a",
          }}
        />
        <CardContent sx={{ px: { xs: 2, sm: 3 }, pt: 3 }}>
          <form onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2.5}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="ID"
                  type="number"
                  value={values.id}
                  onChange={handleChange("id")}
                  error={Boolean(errors.id)}
                  helperText={errors.id || "Enter a numeric user ID"}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Name"
                  value={values.name}
                  onChange={handleChange("name")}
                  error={Boolean(errors.name)}
                  helperText={errors.name || "Your full name"}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  error={Boolean(errors.email)}
                  helperText={errors.email || "We'll never share your email"}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth required error={Boolean(errors.role)}>
                  <InputLabel id="role-label">Role</InputLabel>
                  <Select
                    labelId="role-label"
                    label="Role"
                    value={values.role}
                    onChange={handleChange("role")}
                  >
                    {roles.map((r) => (
                      <MenuItem key={r} value={r}>
                        {r}
                      </MenuItem>
                    ))}
                  </Select>
                  <Typography
                    variant="caption"
                    color={errors.role ? "error" : "text.secondary"}
                    sx={{ mt: 0.5 }}
                  >
                    {errors.role || "Choose a permission level"}
                  </Typography>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Date of Birth"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={values.dob}
                  onChange={handleChange("dob")}
                  error={Boolean(errors.dob)}
                  helperText={errors.dob || "YYYY-MM-DD"}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id="interests-label">Interests</InputLabel>
                  <Select
                    labelId="interests-label"
                    multiple
                    label="Interests"
                    value={values.interests}
                    onChange={handleChange("interests")}
                    renderValue={(selected) => (
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {selected.map((val) => (
                          <Chip key={val} label={val} size="small" />
                        ))}
                      </Stack>
                    )}
                  >
                    {interestOptions.map((opt) => (
                      <MenuItem key={opt} value={opt}>
                        {opt}
                      </MenuItem>
                    ))}
                  </Select>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ mt: 0.5 }}
                  >
                    Optional: select multiple
                  </Typography>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Divider sx={{ my: 1 }} />
                <CardActions sx={{ p: 0, pt: 1 }}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1.5}
                    width="100%"
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      startIcon={<SaveIcon />}
                      fullWidth
                      sx={{
                        py: 1.25,
                        fontWeight: 700,
                        background: "linear-gradient(90deg, #00bfa5, #00e5ff)",
                        boxShadow: 3,
                        ":hover": { boxShadow: 6 },
                      }}
                    >
                      Save User
                    </Button>
                    <Button
                      onClick={handleReset}
                      variant="outlined"
                      startIcon={<RestartAltIcon />}
                      fullWidth
                      sx={{ py: 1.25, fontWeight: 700 }}
                    >
                      Reset
                    </Button>
                  </Stack>
                </CardActions>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          User saved successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}
