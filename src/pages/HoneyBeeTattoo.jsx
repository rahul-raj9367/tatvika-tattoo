import { Box, Grid, GridItem, Text,Center, Card,CardFooter,Button,CardBody,Image,Heading} from '@chakra-ui/react'
import React ,{useEffect} from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Style.css'
import { PhoneIcon} from '@chakra-ui/icons'
import '../LetterAnimation.css'

export default function HoneyBeeTattoo() {
    useEffect(() => {
        document.title = 'HoneyBee Tattoo - Tatvika Tattoo';
      }, []);
      return (
      
        <Box pt="100px" bg="#333333" pb="205px">
          <Box>
            {/* Grid 1 */}
            <Grid className='welcome' display={["none","none","none","flex","flex"]} templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}>
              <GridItem w="100%" h="100%"  >
              <Center>
                  <Text color="white" width={["90vw","90vw","300px","450px","650px"]} textAlign="justify" mt={["25px","25px","20px","10px","30px"]} lineHeight="28px" ml={["5px","60px","60px","60px","120px"]} letterSpacing="3px">
A honey bee tattoo is a beautiful embodiment of nature's wonders and carries deep symbolic meanings. Bees, known for their unwavering work ethic and vital role in pollination, represent various virtues. They symbolize industriousness, reflecting the values of hard work, dedication, and unwavering determination. Bees also epitomize community and teamwork, working seamlessly within their colonies, highlighting the importance of collective efforts in our lives. This tattoo connects us to the natural world, serving as a reminder of the delicate balance that sustains ecosystems. Moreover, bees produce honey as a result of their labor, signifying that persistence and dedication can lead to sweet rewards. Whether portrayed in a realistic or artistic style, a honey bee tattoo is a constant reminder to cherish life's small but crucial elements and to diligently pursue our goals, showcasing both the beauty of nature and the significance of hard work in our own lives.
                </Text>
                </Center>
                <Center>
                <Box mt="30px">
              <Button bg='#6ae0e9'   _hover={{ bg: "#1be4ec" }} leftIcon={<PhoneIcon />}><a href="tel:+916382120489" cursor="pointer">Free Consultation</a></Button>
    
              </Box>
                </Center>
              </GridItem>
    
              <GridItem w="100%" h="100%">
                <Center>
                <Box height={["400px","500px"]} width={["100vw","400px"]}>
                  <Carousel autoPlay showArrows showStatus={false} showThumbs infiniteLoop className="custom-carousel" interval={2000}>
                    <Box >
                        <Image src="images/honey.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                    </Box>
                    <Box >
                    <Box >
                        <Image src="images/honey.jpg" alt="wolf_Tattoo" borderRadius="20px"/>
                    </Box>
                    </Box>
                    <Box >
                        <Image src="images/honey.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
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
                  <Box height={["400px","600px"]} width={["90vw","90vw","90vw","600px"]} borderRadius="20px">
                    <Carousel autoPlay showArrows showStatus={false} showThumbs infiniteLoop className="custom-carousel" interval={2000} >
                      <Box>
                        <Center>
                        <Image src="images/honey.jpg" alt="wolf_Tattoo" borderRadius="20px"/>
                        </Center>
                      </Box>
                      <Box >
                      <Box >
                          <Image src="images/honey.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                      </Box>
                      </Box>
                      <Box >
                          <Image src="images/honey.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                      </Box>
                    </Carousel>
                    </Box>
                </Center>
              </GridItem>
              
              
              <GridItem w="100%" h="100%">
                <Center>
                  <Box mt={["","","300px"]} className='rahul'>
                  <Text color="white" width={["90vw","90vw","90vw"]} textAlign="justify" lineHeight="28px" ml={["10px","10px","10px",]} letterSpacing="3px" className='p'>
                  A honey bee tattoo is a beautiful embodiment of nature's wonders and carries deep symbolic meanings. Bees, known for their unwavering work ethic and vital role in pollination, represent various virtues. They symbolize industriousness, reflecting the values of hard work, dedication, and unwavering determination. Bees also epitomize community and teamwork, working seamlessly within their colonies, highlighting the importance of collective efforts in our lives. This tattoo connects us to the natural world, serving as a reminder of the delicate balance that sustains ecosystems. Moreover, bees produce honey as a result of their labor, signifying that persistence and dedication can lead to sweet rewards. Whether portrayed in a realistic or artistic style, a honey bee tattoo is a constant reminder to cherish life's small but crucial elements and to diligently pursue our goals, showcasing both the beauty of nature and the significance of hard work in our own lives.
                    </Text>
                  </Box>
                  </Center>
                  <Center>
                <Box mt="30px">
              <Button bg='#6ae0e9'   _hover={{ bg: "#1be4ec" }} leftIcon={<PhoneIcon />}><a href="tel:+916382120489" cursor="pointer">Free Consultation</a></Button>
    
              </Box>
                </Center>
              </GridItem>
    
              
            </Grid>
        </Box>
  )
}
