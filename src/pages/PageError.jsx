import { Box,Center,Image,Heading ,Text,Tooltip,Button} from '@chakra-ui/react'
import React, { useEffect } from 'react';


export default function PageError() {

    useEffect(() => {
        document.title = '404 Page Not Found - Tatvika Tattoo';
      }, []);
  return (
    <Box>



<Box mt="100px">
      <Center> <Image  src='images/oops.jpg' alt='404 Page Error' height={["400","500"]} width={["500"]} /></Center>
      <Center><Heading color="black" mt="15px">This page doesn’t exist</Heading></Center>
      <Center><Text mt="15px"  color="#ff0000" as="b">Please check your URL or return to home.</Text></Center>
      <Center><a href="/"><Button mb="50px" colorScheme='red'  mt="15px">Back To Home</Button></a></Center>
    </Box>
      
    </Box>
  )
}
