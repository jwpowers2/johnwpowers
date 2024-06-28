import { Box, Typography, Stack, Divider, Card } from "@mui/material";

export default function Objective() {
  return (
    <Box className="card-background" display="flex" justifyContent="center" alignItems="center" sx={{height: "50rem"}}>
      <Stack direction="column">
        <Card sx={{padding: "1em", marginBottom: "2em"}}>
        <Typography variant="h5" m="1em" fontWeight={700}>
          Create effective and innovative new features
        </Typography>
        </Card>
        <Card sx={{padding: "1em", marginBottom: "2em"}}>
        <Typography m="1em" variant="h5" fontWeight={700}>
          Optimize legacy code
        </Typography>
        </Card >
        <Card sx={{padding: "1em", marginBottom: "2em"}}>
        <Typography m="1em" variant="h5" fontWeight={700}>
          Contribute to a team
        </Typography>
        </Card>
        <Card sx={{padding: "1em", marginBottom: "2em"}}>
        <Typography m="1em" variant="h5" fontWeight={700}>
          Maintain a creative mindset
        </Typography>
        </Card>
      </Stack>
    </Box>
  );
}
