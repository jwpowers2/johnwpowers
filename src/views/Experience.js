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
                "New Feature Development, design planning",  
                "Unit testing (FE, BE)", 
                "storybook UI development", 
                "Find Bugs using various means to include network debugging",
                "live troubleshooting with other engineering teams", 
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
            },
            {
              title:"AggData", 
              description: "Web Scraper Manager", 
              timeline: "J", 
              body:[
                "scraping"
              ]
            },
            {
              title:"Forsta.io", 
              description: "Developer", 
              timeline: "", 
              body:[
                ""
              ]
            }
          ]}
        />
    </Container>
    </>
  )
}