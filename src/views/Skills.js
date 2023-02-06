import {Box, Grid} from "@mui/material";
import SkillsBox from "../components/SkillsBox";
import SkillsList from "../components/SkillsList";

export default function Skills() {
    return (
        <Grid container
        >
            <Grid item sx={12} md={4}><SkillsList/></Grid>
            <Grid item sx={0} md={8}><SkillsBox/></Grid>
            
        </Grid>
    )
}