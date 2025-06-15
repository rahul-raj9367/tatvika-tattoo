import { Box ,Center,Heading,List,
    ListItem,Text,
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

            <Box  mt="50px" w={["80vw","400px"]} h={["500px","500px"]} bg="#333333" borderRadius="10px" boxShadow="2xl">
                <Center>
                <List spacing={3} mt="20px"  fontFamily="Montserrat">
                    <ListItem>
                    <ListIcon as={StarIcon} color='#6ae0e9' />
                    <Text as="span" color="white">Scripting Tattoo</Text>                    
                    </ListItem>
                    <ListItem>
                    <ListIcon as={StarIcon} color='#6ae0e9' />
                    <Text as="span" color="white">Cover up Tattoo</Text>                                        
                    </ListItem>
                    <ListItem>
                    <ListIcon as={StarIcon} color='#6ae0e9' />
                    <Text as="span" color="white"> Finger print Tattoo</Text>                    

                   
                    </ListItem>
                    <ListItem>
                    <ListIcon as={StarIcon} color='#6ae0e9' />
                    <Text as="span" color="white"> Tribal Tattoo</Text>                    

                   
                    </ListItem>
                    <ListItem>
                    <ListIcon as={StarIcon} color='#6ae0e9' />
                    <Text as="span" color="white">Minimal Tattoo </Text>                    

                    
                    </ListItem>
                    <ListItem>
                    <ListIcon as={StarIcon} color='#6ae0e9' />
                    <Text as="span" color="white">Black and Grey (Portrait)</Text>                    


                        
                    </ListItem>
                    <ListItem>
                    <ListIcon as={StarIcon} color='#6ae0e9' />
                    <Text as="span" color="white">Realstic Tattoo</Text>                    

                        
                    </ListItem>
                    <ListItem>
                    <ListIcon as={StarIcon} color='#6ae0e9' />
                    <Text as="span" color="white">Geometric Tattoo</Text>                    


                        
                    </ListItem>
                    <ListItem>
                    <ListIcon as={StarIcon} color='#6ae0e9' />
                    <Text as="span" color="white">Hyper Realistic Tattoo</Text>                    


                        
                    </ListItem>
                    <ListItem>
                    <ListIcon as={StarIcon} color='#6ae0e9' />
                    <Text as="span" color="white">Colour Tattoo</Text>                    


                        
                    </ListItem>
                    <ListItem>
                    <ListIcon as={StarIcon} color='#6ae0e9' />
                    <Text as="span" color="white">Watercolor Tattoo</Text>                    


                        
                    </ListItem>
                    <ListItem>
                    <ListIcon as={StarIcon} color='#6ae0e9' />
                    <Text as="span" color="white">Bio organic Tattoo</Text>                    


                        
                    </ListItem>
                    <ListItem>
                    <ListIcon as={StarIcon} color='#6ae0e9' />
                    <Text as="span" color="white">Bio mechanical Tattoo</Text>                    

                        
                    </ListItem>
                    
                </List>
                </Center>
                
            </Box>
            </Center>

            <Center>
          <Box mt="50px">
          <Button bg='#6ae0e9' _hover={{ bg: "#1be4ec" }} leftIcon={<PhoneIcon />}><a href="tel:+916382120489" cursor="pointer">Free Consultation</a></Button>

          </Box>
        </Center>
            
        </Box>
    </Box>
  )
}
