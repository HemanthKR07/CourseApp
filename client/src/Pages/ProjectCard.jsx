import React from "react";
import "../Styles/ProjectCard.css";
import Button from "@mui/material/Button";

function ProjectCard(obj) {
  return (
    <>
      <div className="projects">
        <h6 className="h6_proj1">{obj.title}</h6>
        <p className="p_proj">{obj.text}</p>
        <Button variant="outlined" id="proj_b1">
          <span className="sp1">+ </span> <b>{obj.b_txt}</b>
        </Button>
      </div>
    </>
  );
}

export default ProjectCard;
