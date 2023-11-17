import { Box,Center,Text ,Heading,Grid,GridItem,Image} from '@chakra-ui/react'
import React,{useEffect,useState} from 'react'
import '../LetterAnimation.css'

export default function About() {

  useEffect(() => {
    document.title = 'About - Tatvika Tattoo';
  }, []);

  // Letters
  const text="Tatvika Tattoo";
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLetterIndex < text.length - 1) {
        setCurrentLetterIndex(currentLetterIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 200); // Adjust the time interval as needed
    return () => clearInterval(interval);
  }, [currentLetterIndex, text]);

  const displayedText = text.substring(0, currentLetterIndex + 1);
  return (
    <Box pt="100px" bg="#f5f4f0" >
      {/* Desktop */}
      <Box pb={["0px","0px","0px","0px","0px","170px"]}>
        <Grid className="welcome" display={["none","none","none","flex","flex"]} templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)']} gap={0}>

          <GridItem w="100%" h="100%">
            <Center><Heading mt="35px" fontFamily="Montserrat" >About&nbsp;</Heading><Heading mt="35px" color="#ff0000" fontFamily="Montserrat">{displayedText}</Heading> </Center>
            <Center>
            <Text mt="20px" mb="40px" fontFamily="Montserrat"  ml="30px" width={["500px","500px","500px","500px","550px"]} letterSpacing={["5px"]}  lineHeight={["20px","28px"]}>
            Welcome to Tatvika Tattoo Studio, where ink transforms into artistry under the creative guidance of our founder, Vimalesh. With a deep passion for self-expression through body art, Vimalesh has dedicated years to perfecting the craft of tattooing. Tatvika Tattoo Studio was established with the aim of offering unparalleled artistry, and Vimalesh, as the main artist, brings unparalleled expertise to every design. Our studio is a sanctuary for unique and meaningful tattoos, celebrating the beauty of individuality and storytelling through ink. Step into the world of creativity and craftsmanship at Tatvika Tattoo, where your vision becomes a stunning reality.
            </Text>
            </Center>
          </GridItem>

          <GridItem w="100%" h="100%">
          <Center>
              <Heading mt="85px" fontSize="2xl" fontFamily="Montserrat">FOUNDER OF TATVIKA TATTOO</Heading>
            </Center>
            <Center>
            <Image  src="images/vimal.jpg" alt="founder"  mt="10px" borderRadius="20px" height={["400px","400px"]} width={["300px"]}/>
            </Center>
           
            <Center><Heading mt="10px"  fontSize="2xl" fontFamily="Montserrat">MAIN ARTIST</Heading></Center>
            <Center><Heading mt="10px" mb="40px" fontSize="2xl" color="#ff0000" fontFamily="Montserrat">VIMALESH</Heading></Center>
          </GridItem>

          
        </Grid>
      </Box>

      <Box>
      <Grid  display={["block","block","block","none","none"]} templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)']} gap={0}>

      <GridItem w="100%" h="100%">
      <Center><Heading mt="10px" >About&nbsp;</Heading><Heading mt="10px" color="#ff0000">{displayedText}</Heading> </Center>
        <Center>
            <Heading mt="20px" fontSize={["lg","xl","2xl"]}  fontFamily="Montserrat">FOUNDER OF TATVIKA TATTOO</Heading>
        </Center>
          <Center>
          <Image  src="images/vimall.jpg" alt="founder"  mt="10px" borderRadius="20px" height={["400px","400px"]} width={["300px"]}/>
          </Center>
        
          <Center><Heading mt="10px"  fontSize={["xl","2xl"]}  fontFamily="Montserrat">MAIN ARTIST</Heading></Center>
          <Center><Heading mt="10px" mb="20px"fontSize={["xl","2xl"]} color="#ff0000"  fontFamily="Montserrat">VIMALESH</Heading></Center>
        </GridItem>

        <GridItem w="100%" h="100%">
          <Center>
          <Text mb="40px"   fontFamily="Montserrat" width={["90vw","500px","500px","500px","550px"]} lineHeight="28px">
          Welcome to Tatvika Tattoo Studio, where ink transforms into artistry under the creative guidance of our founder, Vimalesh. With a deep passion for self-expression through body art, Vimalesh has dedicated years to perfecting the craft of tattooing. Tatvika Tattoo Studio was established with the aim of offering unparalleled artistry, and Vimalesh, as the main artist, brings unparalleled expertise to every design. Our studio is a sanctuary for unique and meaningful tattoos, celebrating the beauty of individuality and storytelling through ink. Step into the world of creativity and craftsmanship at Tatvika Tattoo, where your vision becomes a stunning reality.
          </Text>
          </Center>
        </GridItem>

        

      </Grid>
      </Box>
    </Box>
  )
}
