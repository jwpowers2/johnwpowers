import {Box, Typography, Stack, Divider} from "@mui/material";

export default function Education() {
    return (
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
    >
        <Stack direction="column">
        <Typography variant="h5" mt="1em">
            Information Assurance (A.S.)
        </Typography>
        <Typography variant="h6" mb="1em">Anne Arundel Community College</Typography>
        <Divider/>
        <Typography variant="h5" mt="1em">
            Latin American Studies (B.A.)
        </Typography>
        <Typography variant="h6" mb="1em">George Washington University</Typography>
        <Divider/>
        <Typography variant="h5" mt="1em">
            Certified Ethical Hacker (CEH) (Expired)
        </Typography>
        <Typography variant="h6" mb="1em">EC-Council</Typography>
        <Divider/>
        <Typography variant="h5" mt="1em">
            Cisco Certified Network Associate (CCNA) (Expired)
        </Typography>
        <Typography variant="h6" mb="1em">Cisco Systems</Typography>
        <Divider/>
        <Typography variant="h5" mt="1em">
            Linux Essentials (Expired)
        </Typography>
        <Typography variant="h6" mb="1em">Linux Professional Institute</Typography>
        <Divider/>
        </Stack>
        </Box>
    )
}