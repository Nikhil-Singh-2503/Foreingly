import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Box,
  ChakraProvider,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Text,
  useToast,
  CircularProgress,
  CircularProgressLabel, // Import useToast from Chakra UI
} from '@chakra-ui/react';
let score3_g=0;
function Quiz5() {
  const questions = useMemo(
    () =>[
      {
          "question": "What is the German word for 'hello'?",
          "options": [
              "Guten Tag",
              "Auf Wiedersehen",
              "Danke",
              "Bitte"
          ],
          "correctAnswer": "Guten Tag"
      },
      {
          "question": "Which of the following is the correct translation for 'apple' in German?",
          "options": [
              "Banane",
              "Apfel",
              "Erdbeere",
              "Kirsche"
          ],
          "correctAnswer": "Apfel"
      },
      {
          "question": "How do you say 'I love you' in German?",
          "options": [
              "Ich mag dich",
              "Ich liebe dich",
              "Du liebst mich",
              "Wir mögen uns"
          ],
          "correctAnswer": "Ich liebe dich"
      },
      {
          "question": "What is the German word for 'cat'?",
          "options": [
              "Hund",
              "Katze",
              "Maus",
              "Pferd"
          ],
          "correctAnswer": "Katze"
      },
      {
          "question": "Which of the following means 'thank you' in German?",
          "options": [
              "Bitte",
              "Entschuldigung",
              "Danke",
              "Ja"
          ],
          "correctAnswer": "Danke"
      },
      {
          "question": "What does 'Schule' mean in English?",
          "options": [
              "School",
              "House",
              "Car",
              "Park"
          ],
          "correctAnswer": "School"
      },
      {
          "question": "Which verb means 'to eat' in German?",
          "options": [
              "Trinken",
              "Schlafen",
              "Essen",
              "Gehen"
          ],
          "correctAnswer": "Essen"
      },
      {
          "question": "What is the German word for 'goodbye'?",
          "options": [
              "Hallo",
              "Auf Wiedersehen",
              "Bitte",
              "Danke"
          ],
          "correctAnswer": "Auf Wiedersehen"
      },
      {
          "question": "How would you say 'my name is' in German?",
          "options": [
              "Mein Buch",
              "Mein Name ist",
              "Wie heißt du?",
              "Woher kommst du?"
          ],
          "correctAnswer": "Mein Name ist"
      },
      {
          "question": "What is the German word for 'water'?",
          "options": [
              "Brot",
              "Milch",
              "Wasser",
              "Apfel"
          ],
          "correctAnswer": "Wasser"
      }
  ]
  
  ,
    []
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScoreboard, setShowScoreboard] = useState(false);

  const toast = useToast(); 

  const handleOptionChange = value => {
    setSelectedOption(value);
  };

  const handleNextQuestion = useCallback(() => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      score3_g=score+1;
    }

    setSelectedOption('');

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScoreboard(true);
    }
    toast({
      title:
        selectedOption === questions[currentQuestion].correctAnswer
          ? 'Correct!'
          : 'Wrong!',
      description:
        selectedOption === questions[currentQuestion].correctAnswer
          ? 'You chose the correct answer.'
          : `The correct answer is:- ${questions[currentQuestion].correctAnswer}`,
      status:
        selectedOption === questions[currentQuestion].correctAnswer
          ? 'success'
          : 'error',
      duration: 2500, 
      isClosable: true,
      position:'bottom-right',
    });
  }, [selectedOption, currentQuestion, score, questions, toast]);

  useEffect(() => {
    if (selectedOption !== '') {
      handleNextQuestion();
    }
  }, [selectedOption, handleNextQuestion]);
  const percentageCorrect = (score / questions.length) * 100;
  return (
    <ChakraProvider>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Flex
          align="center"
          justify="center"
          flex="1"
          flexDirection="column"
          px={4}
          pt={8}
        ><Box
        position="absolute"
        top="1rem"
        right="1rem"
        zIndex="999" // Ensure it's above other content
      >
        <CircularProgress
          size="80px"
          value={percentageCorrect}
          color="green.500"
          thickness="10px"
        >
             <CircularProgressLabel>
              {`${Math.round(percentageCorrect)}%`} {/* Show percentage */}
            </CircularProgressLabel>
        </CircularProgress>
      </Box>
          <Heading
            as="h1"
            mb={'10vh'}
            textAlign="center"
            color={'blue.600'}
            size={'2xl'}
          >
         Choose Correct Option
          </Heading>
          <Text fontSize={'lg'} fontWeight={'semibold'}>
            Choose the correct option:
          </Text>
          <Box
            bgColor="gray.200"
            boxShadow="dark-lg"
            rounded="lg"
            width="100%"
            maxWidth="600px"
            p={4}
            borderRadius="md"
            bg="gray.100"
            mb={'45vh'}
            mt={42}
          >
            {showScoreboard ? (
              <Box textAlign="center">
                <Heading as="h2" size="lg" mb={8} color={'GrayText'}>
                  Quiz Completed!🎉
                </Heading>
                <Text fontSize="xl" fontWeight="bold" color={'green.500'}>
                  Your Score: {score} / {questions.length}
                </Text>
              </Box>
            ) : (
              <Box bgColor={'gray.100'} height={'50vh'}>
                <Heading
                  color={'GrayText'}
                  as="h2"
                  size="xl"
                  mb={4}
                  fontWeight="bold"
                >
                  Question {currentQuestion + 1}/{questions.length}
                </Heading>
                <Text color={'gray.700'} fontSize="lg" fontWeight="bold" mb={4}>
                  {questions[currentQuestion].question}
                </Text>
                <RadioGroup
                  size="lg"
                  textColor="gray.700"
                  letterSpacing={1.5}
                  onChange={handleOptionChange}
                  value={selectedOption}
                  colorScheme="green"
                  style={{ flexDirection: 'column' }}
                >
                  {questions[currentQuestion].options.map((option, index) => (
                    <div
                      key={index}
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <Radio
                        value={option}
                        fontWeight="bold"
                        colorScheme="green"
                        mb={2}
                      >
                        {option}
                      </Radio>
                    </div>
                  ))}
                </RadioGroup>
              </Box>
            )}
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
export{score3_g};
export default Quiz5;
