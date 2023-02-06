import {Grid, Typography} from "@mui/material";

export default function SkillsList() {
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
    return (
        <>
        <Grid container>
            {skills.map(skill=>{
                return (
                    <>
                        <Grid item style={{marginBottom:"1em", paddingRight: ".5em"}} sx={6} md={6}><Typography variant="h5"><em>{skill[0]}</em></Typography></Grid>    
                        <Grid item style={{marginBottom:"1em", paddingRight: ".5em"}} sx={6} md={6}><Typography variant="h5"><em>{skill[1]}</em></Typography></Grid>
                    </>
                )
            })}
        </Grid>
        </>
    )
}