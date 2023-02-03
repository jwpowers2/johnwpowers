import {useState} from 'react';
import { Container,Box } from "@mui/material";
import Ticker from "../components/Ticker";
import ExperienceBox from '../components/ExperienceBox';
export default function Experience() {
  return (
    <>
    <Container>
        <ExperienceBox experience={
          [
            {
              title:"Flexgen Power Systems", 
              description: "Software Developer II", 
              timeline: "September 2021 – Present", 
              body:[
                "Build New Features", 
                "bugfixes", 
                "Customer interactions", 
                "independent work, varied levels of guidance", 
                "Unit testing (FE, BE)", 
                "manual testing", 
                "storybook UI development", 
                "Find Bugs using various means to include network debugging", 
                "React.js",
                "Material UI", 
                "Node.js", 
                "Typescript", 
                "Go", 
                "Docker", 
                "Docker-Compose", 
                "Nest.js",
                "Implemented security features to include password expiration and MFA, SSO POC", 
                "R&D for several months creating several POC’s, demo to large audience"
              ]
            },
            {
              title:"The Select Group, at Cisco Systems", 
              description: "Software Developer II", 
              timeline: "September 2019 – May 2022", 
              body:[
                "greenfield project development (front end)"
              ]
            },
            {
              title:"Spottedbot", 
              description: "Developer", 
              timeline: "January 2019 – August 2019", 
              body:[
                "Cloud Threat Intelligence web site"
              ]
            }
          ]}
        />
    </Container>
    </>
  )
}