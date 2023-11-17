import { Box ,Center,Heading,List,
    ListItem,
    ListIcon,Button,} from '@chakra-ui/react'
import React,{useEffect} from 'react'
import { StarIcon ,PhoneIcon} from '@chakra-ui/icons'

export default function Piercing() {

    useEffect(() => {
        document.title = 'Our Services Piercing';
      }, []);


  return (
    <Box mt="100px" mb="100px">
    <Box>
        <Center>
                <Heading mt="20px"  fontFamily="Montserrat" fontSize={["2xl","4xl"]}>PIERCING CATEGORIES</Heading>
        </Center>
        <Center>

        <Box  mt="50px" w={["90vw","400px"]} h={["100%","720px"]} bg="#f5f4f0" borderRadius="10px" boxShadow="2xl">
            <Center>
            <List spacing={3} mt="20px" mb="20px" fontFamily="Montserrat">
                <ListItem>
                    <ListIcon as={StarIcon} color='red.500' />
                    Earlobe Piercing
                </ListItem>
                <ListItem>
                    <ListIcon as={StarIcon} color='red.500' />
                    Helix Piercing
                </ListItem>
                <ListItem>
                    <ListIcon as={StarIcon} color='red.500' />
                    Conch Piercing
                </ListItem>
                <ListItem>
                    <ListIcon as={StarIcon} color='red.500' />
                    Daith Piercing
                </ListItem>
                <ListItem>
                    <ListIcon as={StarIcon} color='red.500' />
                    Tragus Piercing
                </ListItem>
                <ListItem>
                    <ListIcon as={StarIcon} color='red.500' />
                    Rook Piercing
                </ListItem>
                <ListItem>
                    <ListIcon as={StarIcon} color='red.500' />
                    Nose Piercing
                </ListItem>
                <ListItem>
                    <ListIcon as={StarIcon} color='red.500' />
                    Septum Piercing
                </ListItem>
                <ListItem>
                    <ListIcon as={StarIcon} color='red.500' />
                    Lip Piercing 
                </ListItem>
                <ListItem>
                    <ListIcon as={StarIcon} color='red.500' />
                    Eyebrow Piercing
                </ListItem>
                <ListItem>
                    <ListIcon as={StarIcon} color='red.500' />
                    Cheek Piercing 
                </ListItem>
                <ListItem>
                    <ListIcon as={StarIcon} color='red.500' />
                    Tongue Piercing
                </ListItem>
                <ListItem>
                    <ListIcon as={StarIcon} color='red.500' />
                    Smiley Piercing 
                </ListItem>
                <ListItem>
                    <ListIcon as={StarIcon} color='red.500' />
                    Frenulum Piercing 
                </ListItem>
                <ListItem>
                    <ListIcon as={StarIcon} color='red.500' />
                    Navel Piercing 
                </ListItem>
                <ListItem>
                    <ListIcon as={StarIcon} color='red.500' />
                    Forward Helix Piercing
                </ListItem>
                <ListItem>
                    <ListIcon as={StarIcon} color='red.500' />
                    Snug Piercing
                </ListItem>
                <ListItem>
                    <ListIcon as={StarIcon} color='red.500' />
                    Anti-Tragus Piercing
                </ListItem>
                <ListItem>
                    <ListIcon as={StarIcon} color='red.500' />
                    Industrial Piercing
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
