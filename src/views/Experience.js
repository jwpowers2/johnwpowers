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
                "Build New reactive dashboard features from Mock Ups", 
                "utilize Vuex data store, routing, nested components",
                "Build responsive, non-standard, data visualizations using D3.js",
                "Build unit testing for multiple components, accommodating data store, API service methods (jest)",
                "Used docker and kubernetes as a developer for front end and back end testing environments"
              ]
            },
            {
              title:"Spottedbot", 
              description: "Developer", 
              timeline: "January 2019 – August 2019", 
              body:[
                "Cloud Threat Intelligence web site (Project Only)",
                "Gather data from SSH Honeypot (Cowrie) and from diverse Honeypot (Dionaea)",
                "conform the data, geolocate source ip’s, send data to Command and Control Server",
                "Collect data in Postgresql Database with raw SQL queries",
                "queryable threatmap UI in Vue.js",
                "TrieSet large data set autocompletes for global location queries"
              ]
            },
            {
              title:"AggData", 
              description: "Web Data Extraction Manager", 
              timeline: "September 2016 - December 2017", 
              body:[
                "Web Data Collection and normalization, Regular Expressions",
                "traffic analysis using knowledge of HTTP in depth, Fiddler traffic analyzer and chrome dev tools ",
                "Wrote Python code for Proof of Concepts, Web Scraping projects (Scrapy and Postgres, selenium), and Management tools such as cloud-based metrics tools",
                "Managed 5-person team to include formulated week-long training regimen for new engineers", 
                "interfaced between management and workers, conducted daily Scrum"
              ]
            },
            {
              title:"Forsta.io", 
              description: "Software Developer", 
              timeline: "March 2016 - August 2016", 
              body:[
                "Designed and Implemented Cloud-Based Web Scraper Network",
                "Developed Scraper Programs using Python (scrapy), Postgres (Amazon RDS) and Bash",
                "AWS admin work with EC2, IAM"
              ]
            },
            {
              title:"A10 Networks", 
              description: "Network Support Engineer II", 
              timeline: "August 2014 - July 2015", 
              body:[
                "Firmware Upgrades, Network Troubleshooting using TCP Dump, TShark, Wireshark",
                "Scripting in TCL, Bash, Python to replicate bugs and formulate configuration solutions",
                "Assist customers with Load Balancer Configuration and Network Down Scenarios"
              ]
            }
          ]}
        />
    </Container>
    </>
  )
}