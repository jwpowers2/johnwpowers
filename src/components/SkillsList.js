import {useEffect, useState} from 'react'; 
import {Grid, Typography} from "@mui/material";

export default function SkillsList(props) {
    let [variant, setVariant] = useState("h5");
    const skills = [
                    ["React.js","Regular Expressions"],
                    ["bug fix","Material UI"],
                    ["Docker","Docker Compose"],
                    ["Authentication","Vue.js"],
                    ["Node.js","Typescript"],
                    ["Agile","Python"],
                    ["R & D", "PWA"],
                    ["MongoDB", "Postgres"]
    ]
    useEffect(()=>{
        if(props.mobile === true) {
            setVariant("p")
        }
    },[])
    return (
        <>
        <Grid container>
            {skills.map(skill=>{
                return (
                    <>
                        <Grid item style={{marginBottom:"1em", paddingRight: "1em"}} sx={6} md={6}><Typography variant={variant}><em>{skill[0]}</em></Typography></Grid>    
                        <Grid item style={{marginBottom:"1em", paddingRight: "1em"}} sx={6} md={6}><Typography variant={variant}><em>{skill[1]}</em></Typography></Grid>
                        <br/>
                    </>
                )
            })}
        </Grid>
        </>
    )
}