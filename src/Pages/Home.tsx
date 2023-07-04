import { Container, Typography, CssBaseline } from "@mui/material";
import Futura from "../assets/fonts/Futura.ttf";

const Home = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: "#1f235c",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <Typography
        variant="h1"
        sx={{ fontFamily: "Futura", textAlign: "center", color: "#fff" }}
      >
        Coming Soon!
      </Typography>
    </Container>
  );
};

export default Home;
