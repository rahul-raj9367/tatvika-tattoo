import { Box, Grid, GridItem, Text,Center, Card,CardFooter,Button,CardBody,Image,Heading} from '@chakra-ui/react'
import React ,{useEffect} from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { PhoneIcon} from '@chakra-ui/icons'
import '../LetterAnimation.css'

export default function WaterColorTattoo() {
    useEffect(() => {
        document.title = 'WaterColor Tattoo - Tatvika Tattoo';
      }, []);
      return (
      
        <Box pt="100px" bg="#f5f4f0" pb="205px">
          <Box>
            {/* Grid 1 */}
            <Grid className='welcome' display={["none","none","none","flex","flex"]} templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}>
              <GridItem w="100%" h="100%"  >
              <Center>
                  <Text width={["90vw","90vw","300px","450px","650px"]} mt={["25px","25px","20px","10px","80px"]} lineHeight="28px" ml={["5px","60px","60px","60px","120px"]} letterSpacing="3px">
                  A watercolor tattoo is an artistic masterpiece that brings the world of painting to the realm of body art. Inspired by the fluid and vivid qualities of watercolors, these tattoos appear as if they were painted directly onto the skin. Bold, vibrant colors blend seamlessly, often without black outlines, creating a dreamy and ethereal effect. Much like a painting on canvas, watercolor tattoos can depict a wide range of subjects from nature to abstract designs, and they are celebrated for their artistic freedom and the unique, individual expression they allow. They evoke a sense of emotion and a deep connection to art, making them a stunning choice for those who appreciate the beauty of the painted world, intricately etched into their skin.
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
                        <Image src="images/mom.jpg"   alt="wolf_Tattoo" borderRadius="20px"/>
                    </Box>
                    <Box >
                    <Box >
                        <Image src="images/mom.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                    </Box>
                    </Box>
                    <Box >
                        <Image src="images/mom.jpg"   alt="wolf_Tattoo" borderRadius="20px"/>
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
                        <Image src="images/mom.jpg"   alt="wolf_Tattoo" borderRadius="20px"/>
                        </Center>
                      </Box>
                      <Box >
                      <Box >
                          <Image src="images/mom.jpg"  alt="wolf_Tattoo" borderRadius="20px"/>
                      </Box>
                      </Box>
                      <Box >
                          <Image src="images/mom.jpg"   alt="wolf_Tattoo" borderRadius="20px"/>
                      </Box>
                    </Carousel>
                    </Box>
                </Center>
              </GridItem>
              
              
              <GridItem w="100%" h="100%">
                <Center>
                  <Box mt={["","","300px"]} className='rahul'>
                  <Text width={["90vw","90vw","90vw"]}  lineHeight="28px" ml={["10px","10px","10px",]} letterSpacing="3px" className='p'>
                  A watercolor tattoo is an artistic masterpiece that brings the world of painting to the realm of body art. Inspired by the fluid and vivid qualities of watercolors, these tattoos appear as if they were painted directly onto the skin. Bold, vibrant colors blend seamlessly, often without black outlines, creating a dreamy and ethereal effect. Much like a painting on canvas, watercolor tattoos can depict a wide range of subjects from nature to abstract designs, and they are celebrated for their artistic freedom and the unique, individual expression they allow. They evoke a sense of emotion and a deep connection to art, making them a stunning choice for those who appreciate the beauty of the painted world, intricately etched into their skin.
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
