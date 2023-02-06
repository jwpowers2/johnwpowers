import {Box, Typography, Stack, Divider} from "@mui/material";

export default function Objective() {
    return (
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
    >
        <Stack direction="column">
        <Typography variant="h5" m="1em">
            Create effective and innovative new things
        </Typography>
        <Divider/>
        <Typography m="1em" variant="h5">
            Optimize old things
        </Typography>
        <Divider/>
        <Typography m="1em" variant="h5">
            Contribute to the team
        </Typography>
        <Divider/>
        <Typography m="1em" variant="h5">
            Maintain a creative and unorthodox mindset 
        </Typography>
        </Stack>
        </Box>
    )
}