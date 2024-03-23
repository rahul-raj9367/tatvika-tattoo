import { Box, Grid, GridItem, Text,Center, Card,CardFooter,Button,CardBody,Image,Heading} from '@chakra-ui/react'
import React ,{useEffect} from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Style.css'
import { PhoneIcon} from '@chakra-ui/icons'
import '../LetterAnimation.css'

export default function Astrological_Tattoo() {
    useEffect(() => {
        document.title = 'Astrological Tattoo - Tatvika Tattoo';
      }, []);
      return (
      
        <Box pt="100px" bg="#f5f4f0" pb="205px">
          <Box>
            {/* Grid 1 */}
            <Grid className='welcome' display={["none","none","none","flex","flex"]} templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}>
              <GridItem w="100%" h="100%"  >
              <Center>
                  <Text width={["90vw","90vw","300px","450px","650px"]} mt={["25px","25px","20px","10px","80px"]} lineHeight="28px" ml={["5px","60px","60px","60px","120px"]} letterSpacing="3px">
                 
Astrological tattoos are celestial narratives etched into the skin, where cosmic symbols and imagery become a personal testament to one's astrological identity. This unique form of body art allows individuals to embody the essence of their zodiac sign, planetary influences, or celestial alignments in intricate and symbolic designs.

Each symbol and element within an astrological tattoo carries profound significance, reflecting the traits, energies, and archetypes associated with specific celestial bodies or astrological signs. Whether it's the iconic glyph of one's sun sign, the intricate patterns of constellations, or representations of planetary alignments, these tattoos serve as a visual manifestation of one's cosmic connection and personal journey through the cosmos.

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
                        <Image src="images/cow.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                    </Box>
                    <Box >
                    <Box >
                        <Image src="images/cow.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                    </Box>
                    </Box>
                    <Box >
                        <Image src="images/cow.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
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
                        <Image src="images/cow.jpg" alt="wolf_Tattoo" borderRadius="20px"/>
                        </Center>
                      </Box>
                      <Box >
                      <Box >
                          <Image src="images/cow.jpg" alt="wolf_Tattoo" borderRadius="20px"/>
                      </Box>
                      </Box>
                      <Box >
                          <Image src="images/cow.jpg" alt="wolf_Tattoo" borderRadius="20px"/>
                      </Box>
                    </Carousel>
                    </Box>
                </Center>
              </GridItem>
              
              
              <GridItem w="100%" h="100%">
                <Center>
                  <Box mt={["","","300px"]} className='rahul'>
                  <Text width={["90vw","90vw","90vw"]}  lineHeight="28px" ml={["10px","10px","10px",]} letterSpacing="3px" className='p'>
                  Astrological tattoos are celestial narratives etched into the skin, where cosmic symbols and imagery become a personal testament to one's astrological identity. This unique form of body art allows individuals to embody the essence of their zodiac sign, planetary influences, or celestial alignments in intricate and symbolic designs.

Each symbol and element within an astrological tattoo carries profound significance, reflecting the traits, energies, and archetypes associated with specific celestial bodies or astrological signs. Whether it's the iconic glyph of one's sun sign, the intricate patterns of constellations, or representations of planetary alignments, these tattoos serve as a visual manifestation of one's cosmic connection and personal journey through the cosmos.
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
