import {Box, Typography, Stack, Divider, Card} from "@mui/material";

export default function Education() {
    return (
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="card-background"
        sx={{minHeight: "50rem", padding: "2em"}}
    >
        <Stack direction="column">
        <Card sx={{padding: "1em", marginBottom: "2em"}}>
        <Typography variant="h5" mt="1em">
            Information Assurance (A.S.)
        </Typography>
        <Typography variant="h6" mb="1em">Anne Arundel Community College</Typography>
        </Card>
        <Card sx={{padding: "1em", marginBottom: "2em"}}>
        <Typography variant="h5" mt="1em">
            Latin American Studies (B.A.)
        </Typography>
        <Typography variant="h6" mb="1em">George Washington University</Typography>
        </Card>
        <Card sx={{padding: "1em", marginBottom: "2em"}}>
        <Typography variant="h5" mt="1em">
            Certified Ethical Hacker (CEH) (Expired)
        </Typography>
        <Typography variant="h6" mb="1em">EC-Council</Typography>
        </Card>
        <Card sx={{padding: "1em", marginBottom: "2em"}}>
        <Typography variant="h5" mt="1em">
            Cisco Certified Network Associate (CCNA) (Expired)
        </Typography>
        <Typography variant="h6" mb="1em">Cisco Systems</Typography>
        </Card>
        <Card sx={{padding: "1em", marginBottom: "2em"}}>
        <Typography variant="h5" mt="1em">
            Linux Essentials (Expired)
        </Typography>
        <Typography variant="h6" mb="1em">Linux Professional Institute</Typography>
        </Card>
        </Stack>
        </Box>
    )
}