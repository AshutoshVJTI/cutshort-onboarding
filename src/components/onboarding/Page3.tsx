import { Button } from "@mui/material";
import React from "react";
import { PageProps } from "../../types/@types";
import CardWrapper from "../CardWrapper";
import './styles/page3.css'

const Page3 = (props: PageProps) => {
  const {setPage} = props;
  return (
    <div>
      <h1>Welcome! First things first...</h1>
      <p>We'll streamline your setup experience accordingly.</p>
      <div className="cards-container">
        <CardWrapper
          image={<img
            src={require('../../images/user.svg').default}
            alt="user"
            className="svg"
          />}
          title="For myself"
          description="Write better. Think more clearly. Stay organized."
        />
        <CardWrapper
          image={<img
            src={require('../../images/user-group.svg').default}
            alt="user-group"
            className="svg"
          />}
          title="With my team"
          description="Wikis, docs, tasks & projects, all in one place."
        />
      </div>
      <Button variant="contained" className="button" onClick={() => setPage(4)}>
        Create Workspace
      </Button>
    </div>
  );
};

export default Page3;
