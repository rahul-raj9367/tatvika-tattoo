import { Box, Grid, GridItem, Text,Center, Card,CardFooter,Button,CardBody,Image,Heading} from '@chakra-ui/react'
import React ,{useEffect} from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Style.css'
import { PhoneIcon} from '@chakra-ui/icons'
import '../LetterAnimation.css'
import Aos from 'aos';
import 'aos/dist/aos.css'


export default function SpiritualTattoo() {
    useEffect(() => {
        document.title = 'Spiritual - Tatvika Tattoo';
      }, []);

      useEffect(()=>{
        Aos.init()
      },[])
      return (
      
        <Box pt="100px" bg="#333333" >
          <Box>
            {/* Grid 1 */}
            <Grid className='welcome' display={["none","none","none","flex","flex"]} templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}>
              <GridItem w="100%" h="100%"  >
              <Center>
                  <Text color="white" width={["90vw","90vw","300px","450px","650px"]} textAlign="justify" mt={["25px","25px","20px","10px","80px"]} lineHeight="28px" ml={["5px","60px","60px","60px","120px"]} letterSpacing="3px">
                  A Shiva and universe tattoo is a profound embodiment of spirituality and cosmic significance. This intricate design typically features Lord Shiva, the representation of divine consciousness, amidst a cosmic backdrop, symbolizing his role as the cosmic creator and destroyer. Shiva's third eye signifies spiritual insight, while celestial elements like stars and galaxies showcase the vastness of the universe. The tattoo encapsulates the interplay between the divine and the cosmos, a visual testament to the interconnectedness of all things and the pursuit of higher consciousness. It's a powerful and deeply meaningful expression of one's spiritual journey and connection to the universe.
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
                        <Image src="images/lordshiva.jpg" alt="wolf_Tattoo" borderRadius="20px"/>
                    </Box>
                    <Box >
                    <Box >
                        <Image src="images/lordshiva.jpg" alt="wolf_Tattoo" borderRadius="20px"/>
                    </Box>
                    </Box>
                    <Box >
                        <Image src="images/lordshiva.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
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
                        <Image src="images/lordshiva.jpg" alt="wolf_Tattoo" borderRadius="20px"/>
                        </Center>
                      </Box>
                      <Box >
                      <Box >
                          <Image src="images/lordshiva.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                      </Box>
                      </Box>
                      <Box >
                          <Image src="images/lordshiva.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                      </Box>
                    </Carousel>
                    </Box>
                </Center>
              </GridItem>
              
              
              <GridItem w="100%" h="100%">
                <Center>
                  <Box mt={["","","300px"]} className='rahul'>
                  <Text color="white" width={["90vw","90vw","90vw"]} textAlign="justify"  lineHeight="28px" ml={["10px","10px","10px",]} letterSpacing="3px" className='p'>
                  A Shiva and universe tattoo is a profound embodiment of spirituality and cosmic significance. This intricate design typically features Lord Shiva, the representation of divine consciousness, amidst a cosmic backdrop, symbolizing his role as the cosmic creator and destroyer. Shiva's third eye signifies spiritual insight, while celestial elements like stars and galaxies showcase the vastness of the universe. The tattoo encapsulates the interplay between the divine and the cosmos, a visual testament to the interconnectedness of all things and the pursuit of higher consciousness. It's a powerful and deeply meaningful expression of one's spiritual journey and connection to the universe.
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

        {/* Related Work */}
            <Box bg="white" mt="100px">
              {/* <Center>
                <Heading>Related Works</Heading>
              </Center> */}
              <Box pt="50px" pb="50px">
              <Center>
                <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(3, 1fr)']} gap={20}>
                  <GridItem w="100%" h="100%" data-aos="fade-down" data-aos-delay="100">
                  <Image src='images/ohm.jpg' alt='tattoo' borderRadius="20px" height={["400px","400px"]} width={["300px"]}/>
                  </GridItem>

                  <GridItem w="100%" h="100%" data-aos="fade-down" data-aos-delay="100">
                  <Image src='images/vel.jpg' alt='tattoo' borderRadius="20px" height={["400px","400px"]} width={["300px"]}/>
                  </GridItem>

                  <GridItem w="100%" h="100%" data-aos="fade-down" data-aos-delay="100">
                  <Image src='images/l3.jpg' alt='band_tattoo' borderRadius="20px" height={["400px","400px"]} width={["300px"]}/>
                  </GridItem>
                </Grid>
              </Center>

              </Box>
             
            </Box>

        </Box>
      )
}
