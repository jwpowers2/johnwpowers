import Navbar from "../components/Navbar";
import { Container, Box } from "@mui/material";
import Casual from "./Casual";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Container>
        <Box sx={{ mt: "6em", p: "2em", borderRight: "4px solid #e65c00", borderLeft: "4px solid #e65c00"}}>  
            <Casual/>
        </Box>
    </Container>
    </>
  )
}