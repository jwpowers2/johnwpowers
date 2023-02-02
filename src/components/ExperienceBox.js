import {useState} from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {Container,Button,Box,Stack} from "@mui/material";

export default function ExperienceBox(props) {
    let [experience, setExperience] = useState(props.experience);
    let [count, setCount] = useState(0)
    const arrowLeft = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    const arrowRight = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    return (
        <Container>
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
                    <ArrowLeftIcon style={{fontSize:"4em"}}/>
                </Button>
                
                <Button onClick={arrowRight}>
                    <ArrowRightIcon style={{fontSize:"4em"}}/>
                </Button>
            </Stack>
          
        </Box>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
        {experience[count].body}
      </Box>
      </Container>
    )
}