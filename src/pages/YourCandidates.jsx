import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import candidates from "../data/candidates.js";
import CandidateCard from "../components/CandidateCard.jsx";

const YourCandidates = () => {
  return (
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
          {candidates.map((candidate) => (
            <CandidateCard candidate={candidate}></CandidateCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourCandidates;
