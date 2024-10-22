import { Card, CardContent, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import GrupoComponent from "../../../components/GrupoComponent";
import { axios } from "../../../lib/axios";
//import { axios } from "../lib/axios";

//export const metadata: Metadata = {
//  title: "Página dos Grupos",
//};
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const GrupoPage = async () => {
  const grupos = await axios.get("/grupo").then((res) => res.data);
  return (
    <Container maxWidth="lg">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Grupos
          </Typography>
          <GrupoComponent grupos={grupos}></GrupoComponent>
        </CardContent>
      </Card>
    </Container>
  );
};

export default GrupoPage;
