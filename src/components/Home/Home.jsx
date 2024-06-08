import {
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  Image,
  Box,
  HStack,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import vg from '../../Assets/images/Online test-amico.svg';
import { GiWorld, GiNinjaHead, GiPathDistance, GiSaloon } from 'react-icons/gi';
import { AiFillWechat, AiTwotoneTrophy } from 'react-icons/ai';

const Home = () => {
  const toast = useToast();
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-start']}
            spacing="8"
          >
            <Heading
              children="Empowering Tomorrow's Leaders, Today!! "
              size={'2xl'}
              color={'green.600'}
            />
            <Text
              fontFamily={'cursive'}
              textAlign={['center', 'left']}
              children="Learn.🖋️ Conquer.🏆 Succeed.🏅 Repeat.♻️"
              fontSize={'large'}
            />
            <Link to="/Country">
              <Button
                onClick={() =>
                  toast({
                    title: 'Enjoy Learning.',
                    description: "We've drafted questions for you.👍",
                    status: 'success',
                    duration: 3000,
                    // isClosable: true,
                  })
                }
                size={'lg'}
                rightIcon={<GiWorld />}
                colorScheme="red"
              >
                Get Started for free
              </Button>
            </Link>
          </VStack>
          <Image className="vector-graphics" boxSize={'lg'} src={vg} />
        </Stack>
      </div>

      {/* <Box padding={'4'} bg="blue.100">
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'#6c63ff'}
          children="Our Features"
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop="4"
        >
          <AiFillWechat className='chat'/>
          <GiNinjaHead className='ninja'/>
          <GiPathDistance className='path' />
          <GiSaloon className='school' />
          <AiTwotoneTrophy className='trophy' />
        </HStack>
      </Box> */}

<Box padding={'4'} bg="blue.100">
  <Heading
    textAlign={'center'}
    fontFamily="body"
    color={'#007e56'}
    children="Our Features"
  />
  <HStack
    className="brandsBanner"
    justifyContent={'space-evenly'}
    marginTop="4"
  >
    <Box textAlign="center">
      <AiFillWechat className='chat' size={'4rem'}/>
      <Text fontWeight={'5px'}>24x7 support</Text>
    </Box>
    <Box textAlign="center">
      <GiNinjaHead className='ninja' size={'4rem'}/>
      <Text fontWeight={'5px'}>1-1 coaching</Text>
    </Box>
    <Box textAlign="center">
      <GiPathDistance className='path' size={'4rem'} />
      <Text fontWeight={'5px'}>Guided Roadmap</Text>
    </Box>
    <Box textAlign="center">
      <GiSaloon className='school' size={'4rem'} />
      <Text fontWeight={'5px'}>Coaching support</Text>
    </Box>
    <Box textAlign="center">
      <AiTwotoneTrophy className='trophy' size={'4rem'} />
      <Text fontWeight={'5px'}>Win Prizes</Text>
    </Box>
  </HStack>
</Box>

    </section>
  );
};

export default Home;
