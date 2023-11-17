import { Box ,Center,Heading,List,
    ListItem,
    ListIcon,Button,} from '@chakra-ui/react'
import React,{useEffect} from 'react'
import { StarIcon ,PhoneIcon} from '@chakra-ui/icons'

export default function Tattoos() {

    useEffect(() => {
        document.title = 'Our Services Tattoos';
      }, []);


  return (
    <Box mt="100px" mb="100px">
        <Box>
            <Center>
                    <Heading mt="20px"  fontFamily="Montserrat" fontSize={["2xl","4xl"]}>TATTOOS CATEGORIES</Heading>
            </Center>
            <Center>

            <Box  mt="50px" w={["80vw","400px"]} h={["500px","500px"]} bg="#f5f4f0" borderRadius="10px" boxShadow="2xl">
                <Center>
                <List spacing={3} mt="20px"  fontFamily="Montserrat">
                    <ListItem>
                        <ListIcon as={StarIcon} color='red.500' />
                        Scripting Tattoo
                    </ListItem>
                    <ListItem>
                        <ListIcon as={StarIcon} color='red.500' />
                        Cover up Tattoo
                    </ListItem>
                    <ListItem>
                        <ListIcon as={StarIcon} color='red.500' />
                        Finger print Tattoo
                    </ListItem>
                    <ListItem>
                        <ListIcon as={StarIcon} color='red.500' />
                        Tribal Tattoo
                    </ListItem>
                    <ListItem>
                        <ListIcon as={StarIcon} color='red.500' />
                        Minimal Tattoo 
                    </ListItem>
                    <ListItem>
                        <ListIcon as={StarIcon} color='red.500' />
                        Black and Grey (Portrait)
                    </ListItem>
                    <ListItem>
                        <ListIcon as={StarIcon} color='red.500' />
                        Realstic Tattoo
                    </ListItem>
                    <ListItem>
                        <ListIcon as={StarIcon} color='red.500' />
                        Geometric Tattoo
                    </ListItem>
                    <ListItem>
                        <ListIcon as={StarIcon} color='red.500' />
                        Hyper Realistic Tattoo
                    </ListItem>
                    <ListItem>
                        <ListIcon as={StarIcon} color='red.500' />
                        Colour Tattoo
                    </ListItem>
                    <ListItem>
                        <ListIcon as={StarIcon} color='red.500' />
                        Watercolor Tattoo
                    </ListItem>
                    <ListItem>
                        <ListIcon as={StarIcon} color='red.500' />
                        Bio organic Tattoo
                    </ListItem>
                    <ListItem>
                        <ListIcon as={StarIcon} color='red.500' />
                        Bio mechanical Tattoo
                    </ListItem>
                    
                </List>
                </Center>
                
            </Box>
            </Center>

            <Center>
          <Box mt="50px">
          <Button colorScheme='red' leftIcon={<PhoneIcon />}><a href="tel:+916382120489" cursor="pointer">Free Consultation</a></Button>

          </Box>
        </Center>
            
        </Box>
    </Box>
  )
}
