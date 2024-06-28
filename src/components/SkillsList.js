import { useEffect, useState } from "react";
import { Grid, Typography, Button, Card } from "@mui/material";
import SkillsModal from "./SkillsModal";

const emails = ["username@gmail.com", "user02@gmail.com"];

export default function SkillsList(props) {
  let [variant, setVariant] = useState("h6");
  let [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);
  const skills = [
    [
      {
        name: "React.js",
        text:
          "I worked with React.js for over a year at Flexgen, \
          creating new features and troubleshooting bugs in old code"
      },
      {
        name: "Regular Expressions",
        text:
          "I worked heavily with regular expressions \
      as a developer at Forsta and as a web scraper at AggData"
      }
    ],
    [
      {
        name: "bug fix",
        text:
          "At Flexgen I've worked on many bug fixes, as I inherited a legacy code base from varied developers."
      },
      {
        name: "Material UI",
        text: "I worked with a Material UI code base at Flexgen."
      }
    ],
    [
      {
        name: "Docker",
        text:
          "I worked with Docker for development at The Select Group and at Flexgen.  At Trenchant Analytics, I wrote Dockerfiles for production deployments."
      },
      {
        name: "Docker Compose",
        text:
          "I worked with Docker Compose at Flexgen and Kubernetes at The Select Group."
      }
    ],
    [
      {
        name: "Security",
        text:
          "I helped customers choose cipher suites and set up virtual ip interface scripting at A10 networks."
      },
      {
        name: "Vue.js",
        text:
          "I made a Vue.js dashboard for contract work at Cisco Systems (The Select Group contracting)."
      }
    ],
    [
      {
        name: "Node.js",
        text:
          "At Flexgen I implemented various features in Node.js like expired password and MFA."
      },
      {
        name: "Typescript",
        text:
          "I implemented logging features in production code \
      and implemented a Nest.js backend for a Proof of Concept which I demo'd to a large audience."
      }
    ],
    [
      {
        name: "Agile",
        text:
          "I have used Agile planning at Forsta, The Select Group, and at Flexgen."
      },
      {
        name: "Python",
        text:
          "I built a scraping botnet in python at Forsta.io, \
      admin tools at AggData, and am helping design and refactor a python tool at Flexgen. \
      At Trenchant Analytics, I refactored two python AI chat apps."
      }
    ],
    [
      {
        name: "R & D",
        text:
          "I did independent R&D at AggData for new web scraping methodologies and explored new tools.\
        At Flexgen I spent 8 months exploring data models, feasibility studies, and proof of concepts for my team."
      },
      {
        name: "PWA",
        text:
          "I built a Progressive Web App for a Proof of Concept at Flexgen and demo'd it for a large audience."
      }
    ],
    [
      {
        name: "MongoDB",
        text:
          "I designed schemas at Flexgen and implemented new MongoDB features."
      },
      {
        name: "Postgres",
        text:
          "I created and maintained a botnet Postgres database in Amazon RDS.  I used Postgres in various proof of concepts at Flexgen with the Sequelize ORM."
      }
    ],
    [
      {
        name: "Remix",
        text:
          "I designed and implemented most of a 3D image catalog program using Remix and Azure Blob Storage."
      },
      {
        name: "Tailwind CSS",
        text: "I created custom features and components for a Remix app at Trenchant Analytics."
      }
    ]
  ];
  const handleButtonClick = value => {
    setSelectedValue(value);
    setOpen(true);
  };
  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };
  useEffect(() => {
    if (props.mobile === true) {
      setVariant("p");
    }
  }, []);
  return (
    <>
      <SkillsModal
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
      <Card sx={{padding: "0em",backgroundColor:"transparent"}}>
      <Grid container>
        {skills.map((skill, index) => {
          return (
            <>
              {skill[0] &&
                <Grid item sx={6} md={5}>
                  <Button
                    style={{
                      marginBottom: "1em",
                      border: "2px solid #d6d6d6",
                      padding: ".5em",
                      color: "black",
                      width: "11em",
                      backgroundColor:"white"
                    }}
                    onClick={() => handleButtonClick(skills[index][0])}
                  >
                    <Typography variant={variant}>
                      <em>{skill[0].name}</em>
                    </Typography>
                  </Button>
                </Grid>
              }
              {skill[1] &&
              <>
              <Grid item sx={2} md={2}></Grid>
              <Grid item sx={6} md={5}>
                <Button
                  style={{
                    marginBottom: "1em",
                    border: "2px solid #d6d6d6",
                    padding: ".5em",
                    color: "black",
                    width: "11em",
                    backgroundColor:"white"
                  }}
                  onClick={() => handleButtonClick(skills[index][1])}
                >
                  <Typography variant={variant}>
                    <em>{skill[1].name}</em>
                  </Typography>
                </Button>
              </Grid>
              
              <br />
              </>
                }
            </>
          );
        })}
      </Grid>
      </Card>
    </>
  );
}
