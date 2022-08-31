import { Button } from "@mui/material";
import "./styles/page4.css";

const Page4 = () => {
  return (
    <div>
      <img
        src={require("../../images/tick.svg").default}
        alt="tick"
        className="tick"
      />
      <h1>Congratulations, Eren!</h1>
      <p>You have completed onboarding, you can start using the Eden!</p>
      <Button variant="contained" className="button">
        Launch Cutshort
      </Button>
    </div>
  );
};

export default Page4;
