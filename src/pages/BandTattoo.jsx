import { Box, Grid, GridItem, Text,Center, Card,CardFooter,Button,CardBody,Image,Heading} from '@chakra-ui/react'
import React ,{useEffect} from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style.css'
import { PhoneIcon} from '@chakra-ui/icons'
import '../LetterAnimation.css'

export default function BandTattoo() {
    useEffect(() => {
        document.title = 'Band Tattoo - Tatvika Tattoo';
      }, []);
      return (
      
        <Box pt="100px" bg="#f5f4f0" >
          <Box>
            {/* Grid 1 */}
            <Grid className='welcome' display={["none","none","none","flex","flex"]} templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}>
              <GridItem w="100%" h="100%"  >
              <Center>
                  <Text width={["90vw","90vw","300px","450px","650px"]} mt={["25px","25px","20px","10px","80px"]} lineHeight="28px" ml={["5px","60px","60px","60px","120px"]} letterSpacing="3px">
                  Band tattoos are a unique form of body art that encircle the arm, leg, wrist, or any part of the body, creating a continuous and harmonious design. These intricate bands can be as simple or complex as the wearer desires, often incorporating various elements such as tribal patterns, geometric shapes, or personal symbols. Band tattoos serve as both decorative adornments and expressions of individuality, symbolizing the wearer's connection to a specific culture, their personal beliefs, or their journey through life. The circular nature of these tattoos often represents unity, infinity, and the unending cycles of life, making them a visually captivating and symbolic choice for those who wish to carry their stories on their skin with grace and flair.
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
                        <Image src="images/rahulband.jpg" alt="wolf_Tattoo" borderRadius="20px"/>
                    </Box>
                    <Box >
                    <Box >
                        <Image src="images/rahulband.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                    </Box>
                    </Box>
                    <Box >
                        <Image src="images/rahulband.jpg" alt="wolf_Tattoo" borderRadius="20px"/>
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
                        <Image src="images/rahulband.jpg" alt="wolf_Tattoo" borderRadius="20px"/>
                        </Center>
                      </Box>
                      <Box >
                      <Box >
                          <Image src="images/rahulband.jpg" alt="wolf_Tattoo" borderRadius="20px"/>
                      </Box>
                      </Box>
                      <Box >
                          <Image src="images/rahulband.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                      </Box>
                    </Carousel>
                    </Box>
                </Center>
              </GridItem>
              
              
              <GridItem w="100%" h="100%">
                <Center>
                  <Box mt={["","","300px"]} className='rahul'>
                  <Text width={["90vw","90vw","90vw"]}  lineHeight="28px" ml={["10px","10px","10px",]} letterSpacing="3px" className='p'>
                  Band tattoos are a unique form of body art that encircle the arm, leg, wrist, or any part of the body, creating a continuous and harmonious design. These intricate bands can be as simple or complex as the wearer desires, often incorporating various elements such as tribal patterns, geometric shapes, or personal symbols. Band tattoos serve as both decorative adornments and expressions of individuality, symbolizing the wearer's connection to a specific culture, their personal beliefs, or their journey through life. The circular nature of these tattoos often represents unity, infinity, and the unending cycles of life, making them a visually captivating and symbolic choice for those who wish to carry their stories on their skin with grace and flair.
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
            
             {/* Related Work */}
            <Box bg="white" mt="100px">
              <Box pt="50px" mb="50px">
              <Center>
                <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(3, 1fr)']} gap={20}>
                  <GridItem w="100%" h="100%">
                  <Image src='images/band.jpg' alt='band_tattoo' borderRadius="20px" height={["400px","400px"]} width={["300px"]}/>
                  </GridItem>

                  <GridItem w="100%" h="100%">
                  <Image src='images/jerinband.jpg' alt='band_tattoo' borderRadius="20px" height={["400px","400px"]} width={["300px"]}/>
                  </GridItem>

                  <GridItem w="100%" h="100%">
                  {/* <Image src='images/band.jpg' alt='band_tattoo' borderRadius="20px" height={["400px","400px"]} width={["300px"]}/> */}
                  </GridItem>
                </Grid>
              </Center>

              </Box>
             
            </Box>
        </Box>
  )
}
