import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import QuizQuestion from "../components/QuizQuestion";

import { answers, question } from "../assets/questions.json";
import { Button, ButtonGroup, VStack } from "@chakra-ui/react";

export default function QuizPage() {
  const navigate = useNavigate();

  const [questionIndex, setQuestionIndex] = useState(0);

  const [quizAnswers, setQuizAnswers] = useState({});

  useEffect(() => {
    const initialQuizAnswer = Object.keys(answers).reduce((obj, currentKey) => {
      obj[currentKey] = "0";
      return obj;
    }, {});
    setQuizAnswers(initialQuizAnswer);
  }, []);

  function selectAnswer(answer) {
    setQuizAnswers({...quizAnswers,[questionIndex]:answer});
  }



  const isLastQuestion = questionIndex === question.length - 1;

  function prevClickHandler() {
    setQuestionIndex(questionIndex - 1);
  }
  function nextClickHandler() {
    setQuestionIndex(questionIndex + 1);
  }

  function finishClickHandler() {
    navigate("/result", { state: quizAnswers });
  }

  return (
    <VStack align="center">
      <QuizQuestion
        onChange={selectAnswer}
        question={question[questionIndex].question}
        answers={question[questionIndex].answers}
        value={quizAnswers[questionIndex]}
      />
      <ButtonGroup gap="4">
        <Button isDisabled={questionIndex === 0} onClick={prevClickHandler}>
          Previous
        </Button>
        {isLastQuestion ? (
          <Button onClick={finishClickHandler}>Finish</Button>
        ) : (
          <Button onClick={nextClickHandler}>Next</Button>
        )}
      </ButtonGroup>
    </VStack>
  );
}
