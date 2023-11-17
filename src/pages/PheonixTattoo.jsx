import { Box, Grid, GridItem, Text,Center, Card,CardFooter,Button,CardBody,Image,Heading} from '@chakra-ui/react'
import React ,{useEffect} from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style.css'
import { PhoneIcon} from '@chakra-ui/icons'
import '../LetterAnimation.css'

export default function PheonixTattoo() {
    useEffect(() => {
        document.title = 'Phenoix Tattoo - Tatvika Tattoo';
      }, []);
      return (
      
        <Box pt="100px" bg="#f5f4f0" pb="205px">
          <Box>
            {/* Grid 1 */}
            <Grid className='welcome' display={["none","none","none","flex","flex"]} templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}>
              <GridItem w="100%" h="100%"  >
              <Center>
                  <Text width={["90vw","90vw","300px","450px","650px"]} mt={["25px","25px","20px","10px","80px"]} lineHeight="28px" ml={["5px","60px","60px","60px","120px"]} letterSpacing="3px">
                  A phoenix tattoo is a striking symbol of rebirth, transformation, and resilience. This legendary bird rises from its own ashes, signifying the ability to overcome adversity and emerge stronger and renewed. A phoenix tattoo is a reminder that, like the mythical bird, we too can face challenges, endure hardships, and emerge from the flames of life's trials with newfound strength and purpose.
Whether you opt for a vibrant and colorful design or a more intricate, detailed portrayal of the phoenix, your tattoo can serve as a testament to your own ability to rise above challenges and embrace personal growth. It is a powerful representation of the cycle of life, death, and rebirth, making it a meaningful choice for those who wish to express their resilience and inner strength through body art.
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
                        <Image src="images/pheonix.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                    </Box>
                    <Box >
                    <Box >
                        <Image src="images/pheonix.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                    </Box>
                    </Box>
                    <Box >
                        <Image src="images/pheonix.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
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
                        <Image src="images/pheonix.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                        </Center>
                      </Box>
                      <Box >
                      <Box >
                          <Image src="images/pheonix.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                      </Box>
                      </Box>
                      <Box >
                          <Image src="images/pheonix.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                      </Box>
                    </Carousel>
                    </Box>
                </Center>
              </GridItem>
              
              
              <GridItem w="100%" h="100%">
                <Center>
                  <Box mt={["","","300px"]} className='rahul'>
                  <Text width={["90vw","90vw","90vw"]}  lineHeight="28px" ml={["10px","10px","10px",]} letterSpacing="3px" className='p'>A phoenix tattoo is a striking symbol of rebirth, transformation, and resilience. This legendary bird rises from its own ashes, signifying the ability to overcome adversity and emerge stronger and renewed. A phoenix tattoo is a reminder that, like the mythical bird, we too can face challenges, endure hardships, and emerge from the flames of life's trials with newfound strength and purpose.
Whether you opt for a vibrant and colorful design or a more intricate, detailed portrayal of the phoenix, your tattoo can serve as a testament to your own ability to rise above challenges and embrace personal growth. It is a powerful representation of the cycle of life, death, and rebirth, making it a meaningful choice for those who wish to express their resilience and inner strength through body art.
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
