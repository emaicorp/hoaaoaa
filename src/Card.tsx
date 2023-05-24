import styled from "styled-components";
import Button from "@mui/material/Button";

export const CTAButton = styled(Button)`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 5px;
  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);
  color: white;
  font-size: 16px;
  font-weight: bold;
`; // add your own styles here

export const Card = () => {
  return (
    <div>
      <div className="relative">
        <div className="maindiv">
          <h1 className="info">Pre-Sale: Live</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};
