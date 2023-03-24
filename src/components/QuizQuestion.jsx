import React from "react";
import { Heading, Radio, RadioGroup, VStack } from "@chakra-ui/react";
export default function QuizQuestion({ question, answers, onChange,value }) {
  
  const answersOptions = answers.map((answer, index) => (
    <Radio key={index} value={String(index)}>{answer}</Radio>
  ));
  return (
    <VStack >
      <Heading as="h4" size="md">
        {question}
      </Heading>
      <RadioGroup value={value} onChange={onChange} >
        <VStack>{answersOptions}</VStack>
      </RadioGroup>
    </VStack>
  );
}
