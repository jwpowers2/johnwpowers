import {Box, Grid} from "@mui/material";
import {useState, useEffect} from 'react';
//import { isMobile } from "react-device-detect";
import SkillsBox from "../components/SkillsBox";
import SkillsList from "../components/SkillsList";
import MobileSkillsList from "../components/MobileSkillsList.js";

export default function Skills() {
    let [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
      if (window.innerWidth< 1024) console.log("WINDOW IS LESS THAN 700")
      setIsMobile(window.innerWidth < 1200);
    },[])
    return (
        <Grid container className="card-background"
        >
            
            {(isMobile === false) ? 
                <>
                    <Grid item sx={12} md={4}><SkillsList mobile={false} /></Grid>
                    <Grid item sx={0} md={8}><SkillsBox mobile={false} /></Grid>
                </>
                :
                <>
                    
                    <Grid item sx={12} md={12}><MobileSkillsList mobile={true} /></Grid>
                </>
            }
            
        </Grid>
    )
}