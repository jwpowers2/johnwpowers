import {Box, Grid} from "@mui/material";
import { isMobile } from "react-device-detect";
import SkillsBox from "../components/SkillsBox";
import SkillsList from "../components/SkillsList";

export default function Skills() {
    return (
        <Grid container
        >
            
            {(isMobile === false) ? 
                <>
                    <Grid item sx={12} md={4}><SkillsList mobile={false} /></Grid>
                    <Grid item sx={0} md={8}><SkillsBox mobile={false} /></Grid>
                </>
                :
                <>
                    <Grid item sx={12} md={12}><SkillsBox mobile={true} /></Grid>
                    <Grid item sx={12} md={12}><SkillsList mobile={true} /></Grid>
                </>
            }
            
        </Grid>
    )
}