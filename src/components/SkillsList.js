import { useEffect, useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import SkillsModal from "./SkillsModal";

const emails = ["username@gmail.com", "user02@gmail.com"];

export default function SkillsList(props) {
  let [variant, setVariant] = useState("h6");
  let [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);
  const skills = [
    [
      { name: "React.js", text: "hello react" },
      { name: "Regular Expressions", text: "hello regex" }
    ],
    [
      { name: "bug fix", text: "" },
      { name: "Material UI", text: "" }
    ],
    [
      { name: "Docker", text: "" },
      { name: "Docker Compose", text: "" }
    ],
    [
      { name: "Security", text: "" },
      { name: "Vue.js", text: "" }
    ],
    [
      { name: "Node.js", text: "" },
      { name: "Typescript", text: "" }
    ],
    [
      { name: "Agile", text: "" },
      { name: "Python", text: "" }
    ],
    [
      { name: "R & D", text: "" },
      { name: "PWA", text: "" }
    ],
    [
      { name: "MongoDB", text: "" },
      { name: "Postgres", text: "" }
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
      <Grid container>
        {skills.map((skill, index) => {
          return (
            <>
              <Grid
                item
                style={{
                  marginBottom: "1em",
                  border: "2px solid #d6d6d6",
                  padding: "1.2em"
                }}
                sx={6}
                md={5}
              >
                <Button onClick={() => handleButtonClick(skills[index][0])}>
                  <Typography variant={variant}>
                    <em>{skill[0].name}</em>
                  </Typography>
                </Button>
              </Grid>

              <Grid item sx={2} md={2}></Grid>
              <Grid
                item
                style={{
                  marginBottom: "1em",
                  border: "2px solid #d6d6d6",
                  padding: "1.2em"
                }}
                sx={6}
                md={5}
              >
                <Button onClick={() => handleButtonClick(skills[index][1])}>
                  <Typography variant={variant}>
                    <em>{skill[1].name}</em>
                  </Typography>
                </Button>
              </Grid>

              <br />
            </>
          );
        })}
      </Grid>
    </>
  );
}
