import { Box, Grid, GridItem, Text,Center, Card,CardFooter,Button,CardBody,Image,Heading} from '@chakra-ui/react'
import React ,{useEffect} from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style.css'
import { PhoneIcon} from '@chakra-ui/icons'
import '../LetterAnimation.css' 

export default function LadyBugTattoo() {
    useEffect(() => {
        document.title = 'LadyBug Tattoo - Tatvika Tattoo';
      }, []);
      return (
      
        <Box pt="100px" bg="#f5f4f0" pb="205px">
          <Box>
            {/* Grid 1 */}
            <Grid className="welcome" display={["none","none","none","flex","flex"]} templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}>
              <GridItem w="100%" h="100%"  >
              <Center>
                  <Text width={["90vw","90vw","300px","450px","650px"]} mt={["25px","25px","20px","10px","80px"]} lineHeight="28px" ml={["5px","60px","60px","60px","120px"]} letterSpacing="3px">
                  A ladybug tattoo is a charming and symbolic choice, embodying good luck, love, and protection. These tiny, vibrant insects are often associated with positive omens and joy. The ladybug's distinctive red hue adorned with black spots adds a touch of whimsy to any design, making it a delightful choice for those seeking a small yet meaningful tattoo. This inked ladybug can serve as a constant reminder of the beauty in life's little moments and the belief in serendipity. It's a miniature masterpiece that carries with it a world of positivity and a touch of nature's magic.
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
                        <Image src="images/ladybug.jpg"   alt="wolf_Tattoo" borderRadius="20px"/>
                    </Box>
                    <Box >
                    <Box >
                        <Image src="images/ladybug.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                    </Box>
                    </Box>
                    <Box >
                        <Image src="images/ladybug.jpg"   alt="wolf_Tattoo" borderRadius="20px"/>
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
                        <Image src="images/ladybug.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                        </Center>
                      </Box>
                      <Box >
                      <Box >
                          <Image src="images/ladybug.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                      </Box>
                      </Box>
                      <Box >
                          <Image src="images/ladybug.jpg"   alt="wolf_Tattoo" borderRadius="20px"/>
                      </Box>
                    </Carousel>
                    </Box>
                </Center>
              </GridItem>
              
              
              <GridItem w="100%" h="100%">
                <Center>
                  <Box mt={["","","300px"]} className='rahul'>
                  <Text width={["90vw","90vw","90vw"]}  lineHeight="28px" ml={["10px","10px","10px",]} letterSpacing="3px" className='p'>

                  A ladybug tattoo is a charming and symbolic choice, embodying good luck, love, and protection. These tiny, vibrant insects are often associated with positive omens and joy. The ladybug's distinctive red hue adorned with black spots adds a touch of whimsy to any design, making it a delightful choice for those seeking a small yet meaningful tattoo. This inked ladybug can serve as a constant reminder of the beauty in life's little moments and the belief in serendipity. It's a miniature masterpiece that carries with it a world of positivity and a touch of nature's magic.                    </Text>
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
