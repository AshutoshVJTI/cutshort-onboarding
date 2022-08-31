import { Button } from "@mui/material";
import React from "react";
import { PageProps } from "../../types/@types";
import TextfieldWrapper from "../TextfieldWrapper";

const Page1 = (props: PageProps) => {
  const {setPage} = props;
  return (
    <div>
      <h1>Welcome! First things first...</h1>
      <p>You can always change them later</p>
      <TextfieldWrapper label="Full Name" placeholder="Steve Jobs" />
      <TextfieldWrapper label="Display Name" placeholder="Steve" />
      <Button variant="contained" className="button" onClick={() => setPage(2)}>Create Workspace</Button>
    </div>
  );
};

export default Page1;
