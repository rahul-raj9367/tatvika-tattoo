import { Box, Grid, GridItem, Text,Center, Card,CardFooter,Button,CardBody,Image,Heading} from '@chakra-ui/react'
import React ,{useEffect} from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style.css'
import '../LetterAnimation.css'
import { PhoneIcon} from '@chakra-ui/icons'

export default function Wolf_Tattoo() {

  useEffect(() => {
    document.title = 'Wolf Tattoo - Tatvika Tattoo';
  }, []);
  return (
  
    <Box pt="100px" bg="#f5f4f0" pb="205px">
      <Box>
        {/* Grid 1 */}
        <Grid display={["none","none","none","flex","flex"]} className='welcome' templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}>
          <GridItem w="100%" h="100%"  >
          <Center>
              <Text width={["90vw","90vw","300px","450px","650px"]} mt={["25px","25px","20px","10px","80px"]} lineHeight="28px" ml={["5px","60px","60px","60px","120px"]} letterSpacing="3px">
              A wolf tattoo is more than just body art; it's a symbol of deep meaning and significance. Wolves are often associated with traits such as strength, resilience, intelligence, and a strong sense of family and community. A wolf tattoo represents the wild spirit within, a connection to nature, and a reminder of the power that lies within us. Whether you choose a realistic wolf tattoo, a tribal design, or a more abstract representation, it can be a powerful emblem of your own inner strength and the importance of unity, loyalty, and individuality. The versatility of wolf tattoos allows for a wide range of interpretations, making it a meaningful choice for those looking to express their unique personality and values through body art.              
              </Text>
            </Center>
            <Center>
            <Box mt="30px">
          <Button colorScheme='red' leftIcon={<PhoneIcon />}><a href="tel:+916382120489" cursor="pointer">Free Consultation</a></Button>

          </Box>
            </Center>
          </GridItem>

          <GridItem w="100%" h="100%">
            <Center>
            <Box height={["400px","500px"]} width={["100vw","400px"]}>
              <Carousel autoPlay showArrows showStatus={false} showThumbs infiniteLoop className="custom-carousel" interval={2000}>
                <Box >
                    <Image src="images/wolf.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                </Box>
                <Box >
                <Box >
                    <Image src="images/wolf.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                </Box>
                </Box>
                <Box >
                    <Image src="images/wolf.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                </Box>
              </Carousel>
              </Box>
            </Center>
          </GridItem>
        </Grid>
      </Box>


       {/* Grid 2 */}
       <Grid  display={["block","block","block","none","none"]} templateColumns='repeat(1, 1fr)' >
        <GridItem w="100vw" h="100%">
            <Center>
              <Box height={["400px","600px"]} width={["90%","90%","90%","600px"]} borderRadius="20px">
                <Carousel autoPlay showArrows showStatus={false} showThumbs infiniteLoop className="custom-carousel" interval={2000} >
                  <Box>
                    <Center>
                    <Image src="images/wolf.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                    </Center>
                  </Box>
                  <Box >
                  <Box >
                      <Image src="images/wolf.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                  </Box>
                  </Box>
                  <Box >
                      <Image src="images/wolf.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                  </Box>
                </Carousel>
                </Box>
            </Center>
          </GridItem>
          
          
          <GridItem w="100%" h="100%">
            <Center>
              <Box mt={["","","300px"]} className='rahul'>
              <Text width={["90vw","90vw","90vw"]}  lineHeight="28px" ml={["10px","10px","10px",]} letterSpacing="3px" className='p'>
              A wolf tattoo is more than just body art; it's a symbol of deep meaning and significance. Wolves are often associated with traits such as strength, resilience, intelligence, and a strong sense of family and community. A wolf tattoo represents the wild spirit within, a connection to nature, and a reminder of the power that lies within us. Whether you choose a realistic wolf tattoo, a tribal design, or a more abstract representation, it can be a powerful emblem of your own inner strength and the importance of unity, loyalty, and individuality. The versatility of wolf tattoos allows for a wide range of interpretations, making it a meaningful choice for those looking to express their unique personality and values through body art.              
                </Text>
              </Box>
              </Center>
              <Center>
            <Box mt="30px">
          <Button colorScheme='red' leftIcon={<PhoneIcon />}><a href="tel:+916382120489" cursor="pointer">Free Consultation</a></Button>

          </Box>
            </Center>
          </GridItem>

          
        </Grid>
    </Box>
  )
}
