import { Card, CardActionArea, CardContent } from "@mui/material";
import React from "react";
import { CardWrapperProps } from "../../types/@types";
import "./cardwrapper.css";

const CardWrapper = (props: CardWrapperProps) => {
  const { image, title, description } = props;
  return (
    <div>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent className="card">
          {image}
          <h5>{title}</h5>
          <p>{description}</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CardWrapper;
