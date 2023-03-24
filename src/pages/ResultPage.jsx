import React from "react";
import { Button, Text, VStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

import { answers } from "../assets/questions.json";

function getFinalGrade(userAnswers){
  let counter=0
  for (const key in answers) {
    if(userAnswers[key]===answers[key]){
      counter ++
    }
  }
  return counter / Object.keys(answers).length * 100
}
export default function ResultPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const grade = getFinalGrade(state);
  return (
    <VStack>
      <Text fontSize="3xl">Your grade is :{grade}</Text>
      <Button onClick={() => navigate("/quiz")}>Restart?</Button>
    </VStack>
  );
}
