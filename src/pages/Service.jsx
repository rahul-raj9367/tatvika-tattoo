import { Box ,Heading,Center,Grid,GridItem,Flex,Button} from '@chakra-ui/react'
import React,{useEffect} from 'react'
import { NavLink,Link } from "react-router-dom";
import '../LetterAnimation.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Service() {

    useEffect(() => {
        document.title = 'Our Services - Tatvika Tattoo';
      }, []);

      useEffect(()=>{
        Aos.init()
      },[])
    


  return (
    <Box pt="100px" pb="100px">
        <Box mt="70px" className='welcome'>
            <Center><Heading mt="20px" mb="20px"  fontFamily="Montserrat">OUR SERVICES</Heading></Center>
            <Grid  templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']} gap={10}>
                <GridItem w="100%" h="100%" data-aos="fade-down" data-aos-delay="100">
                    <Center>
                    <Flex alignItems="center" justifyContent="center" w={["80vw","400px"]} h={["300px","400px"]} bg="#f5f4f0" borderRadius="10px" boxShadow="2xl"> 
                        <Box>
                            <Heading  fontFamily="Montserrat">Tattoos</Heading>
                            <Flex>
                                <Link to="/Tattoos"><Button colorScheme='red' _hover={{ bg: 'red', color: 'white' }} >Know More</Button></Link>
                            </Flex>
                        </Box>
                    </Flex>
                    </Center>
                </GridItem>

                <GridItem w="100%" h="100%" data-aos="fade-down"  data-aos-delay="100">
                <Center>
                    <Flex alignItems="center" justifyContent="center" w={["80vw","400px"]}  h={["300px","400px"]} bg="#f5f4f0" borderRadius="10px" boxShadow="2xl"> 
                        <Box>
                            <Heading  fontFamily="Montserrat">Piercing</Heading>
                            <Flex>
                            <Link to="/Piercing"><Button colorScheme='red' _hover={{ bg: 'red', color: 'white' }} >Know More</Button></Link>
                            </Flex>
                        </Box>
                    </Flex>
                    </Center>
                </GridItem>
            </Grid>
        </Box>
    </Box>
  )
}
