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
            {title:"Flexgen Power Systems", body:"Software Developer II September 2021 – Present,Build New Features, collaborating or solo, bugfixes, Customer interactions, varied levels of guidance ok, Unit testing (FE, BE), manual testing, storybook UI development, Find Bugs using various means to include network debugging, React.js (Material-UI), Node.js, Typescript, Go, Docker, Docker-Compose, Nest.js,Implemented security features to include password expiration and MFA, SSO POC, R&D for several months creating several POC’s, demo to large audience"},
            {title:"The Select Group, at Cisco Systems",body:"Software Developer II, greenfield project development (front end) September 2019 – May 2022"},
            {title:"Spottedbot",body:"Developer, Cloud Threat Intelligence web site January 2019 – August 2019"}
          ]}
        />
    </Container>
    </>
  )
}