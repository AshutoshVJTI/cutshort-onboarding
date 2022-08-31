import { Button } from "@mui/material";
import React from "react";
import { PageProps } from "../../types/@types";
import TextfieldWrapper from "../TextfieldWrapper";

const Page2 = (props: PageProps) => {
  const {setPage} = props;
  return (
    <div>
      <h1>Let's set up a home for all your work</h1>
      <p>You can always create another workspace later.</p>
      <TextfieldWrapper label="Workspace Name" placeholder="Cutshort" />
      <TextfieldWrapper label="Workspace URL" placeholder="www.cutshort.com/example" />
      <Button variant="contained" className="button" onClick={() => setPage(3)}>
        Create Workspace
      </Button>
    </div>
  );
};

export default Page2;
