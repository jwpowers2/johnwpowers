import { Box, Typography, Stack, Divider } from "@mui/material";

export default function Objective() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Stack direction="column">
        <Typography variant="h5" m="1em">
          Create effective and innovative new features
        </Typography>
        <Divider />
        <Typography m="1em" variant="h5">
          Optimize legacy code
        </Typography>
        <Divider />
        <Typography m="1em" variant="h5">
          Contribute to a team
        </Typography>
        <Divider />
        <Typography m="1em" variant="h5">
          Maintain a creative mindset
        </Typography>
      </Stack>
    </Box>
  );
}
