import {useState} from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {Container,Button,Box,Stack, Typography, Card, Table, TableRow, TableCell} from "@mui/material";

export default function ExperienceBox(props) {
    let [experience, setExperience] = useState(props.experience);
    let [count, setCount] = useState(0)
    const arrowLeft = () => {
        const newCount = (count > 0) ? count - 1 : count;
        setCount(newCount);
    }
    const arrowRight = () => {
        const newCount = (count < experience.length-1)? count + 1: count;
        setCount(newCount);
    }
    return (
        <Container  className="card-background" sx={{minHeight: "50em"}}>
            <Card  sx={{marginTop: "2em",padding: "1em"}}>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
        <Box sx={{pt:".5em"}} style={{fontSize:"2em"}}>
                {experience[count].title}
            </Box>
        </Box>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Stack direction="row" style={{fontSize:"2em"}}>
                <Button onClick={arrowLeft}>
                    <ArrowLeftIcon style={{fontSize:"4em", color: "#e65c00"}}/>
                </Button>
                
                <Button onClick={arrowRight}>
                    <ArrowRightIcon style={{fontSize:"4em", color: "#e65c00"}}/>
                </Button>
            </Stack>
          
        </Box>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Typography variant="h4">{experience[count].description}</Typography>
        </Box>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Typography varient="h5">{experience[count].timeline}</Typography>
        </Box>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={3}
        >
            <ul>
            <Typography variant="h5">
                {experience[count].body.map((item) => {
                    return (
                        <li>
                        <Typography mb="1em" variant="h6">
                            {item}
                        </Typography>
                        </li>
                    )
                })}
            </Typography>
            </ul>
        </Box>
        </Card>
      </Container>
    )
}