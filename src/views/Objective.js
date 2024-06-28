import { Box, Typography, Stack, Divider, Card } from "@mui/material";

export default function Objective() {
  return (
    <Box className="card-background" display="flex" justifyContent="center" alignItems="center" sx={{height: "50rem"}}>
      <Stack direction="column">
        <Card sx={{padding: "1em", margin: "1em"}}>
        <Typography variant="h5" m="1em" fontWeight={700}>
          Create <span style={{color:"#e75d1d"}}><u>effective</u></span> and <span style={{color:"#e75d1d"}}><u>innovative</u></span> new features
        </Typography>
        </Card>
        <Card sx={{padding: "1em", margin: "1em"}}>
        <Typography m="1em" variant="h5" fontWeight={700}>
        <span style={{color:"#e75d1d"}}><u>Optimize</u></span> legacy code
        </Typography>
        </Card >
        <Card sx={{padding: "1em", margin: "1em"}}>
        <Typography m="1em" variant="h5" fontWeight={700}>
          Contribute to a <span style={{color:"#e75d1d"}}><u>team</u></span>
        </Typography>
        </Card>
        <Card sx={{padding: "1em", margin: "1em"}}>
        <Typography m="1em" variant="h5" fontWeight={700}>
          Maintain a <span style={{color:"#e75d1d"}}><u>creative</u></span> mindset
        </Typography>
        </Card>
      </Stack>
    </Box>
  );
}
