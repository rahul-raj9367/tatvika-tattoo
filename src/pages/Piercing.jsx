import {
    Box, Center, Heading, List,
    ListItem,Text,
    ListIcon, Button,
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { StarIcon, PhoneIcon } from '@chakra-ui/icons'

export default function Piercing() {

    useEffect(() => {
        document.title = 'Our Services Piercing';
    }, []);


    return (
        <Box mt="100px" mb="100px">
            <Box>
                <Center>
                    <Heading mt="20px" fontFamily="Montserrat" fontSize={["2xl", "4xl"]}>PIERCING CATEGORIES</Heading>
                </Center>
                <Center>

                    <Box mt="50px" w={["90vw", "400px"]} h={["100%", "720px"]} bg="#333333" borderRadius="10px" boxShadow="2xl">
                        <Center>
                            <List spacing={3} mt="20px" mb="20px" fontFamily="Montserrat">
                                <ListItem>
                                    <ListIcon as={StarIcon} color='#6ae0e9' />
                                    <Text as="span" color="white">Earlobe Piercing</Text>
                                    </ListItem>
                                <ListItem>
                                    <ListIcon as={StarIcon} color='#6ae0e9' />
                                    <Text as="span" color="white">Helix Piercing</Text>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={StarIcon} color='#6ae0e9' />
                                    <Text as="span" color="white">Conch Piercing</Text>

                                    
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={StarIcon} color='#6ae0e9' />
                                    <Text as="span" color="white"> Daith Piercing</Text>

                                   
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={StarIcon} color='#6ae0e9' />
                                    <Text as="span" color="white">Tragus Piercing</Text>

                                    
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={StarIcon} color='#6ae0e9' />
                                    <Text as="span" color="white">Rook Piercing</Text>

                                    
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={StarIcon} color='#6ae0e9' />
                                    <Text as="span" color="white">Nose Piercing</Text>

                                    
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={StarIcon} color='#6ae0e9' />
                                    <Text as="span" color="white"> Septum Piercing</Text>

                                   
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={StarIcon} color='#6ae0e9' />
                                    <Text as="span" color="white">Lip Piercing</Text>

                                    
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={StarIcon} color='#6ae0e9' />
                                    <Text as="span" color="white">Eyebrow Piercing</Text>

                                    
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={StarIcon} color='#6ae0e9' />
                                    <Text as="span" color="white">Cheek Piercing</Text>

                                    
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={StarIcon} color='#6ae0e9' />
                                    <Text as="span" color="white">Tongue Piercing</Text>

                                    
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={StarIcon} color='#6ae0e9' />
                                    <Text as="span" color="white">Smiley Piercing</Text>

                                    
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={StarIcon} color='#6ae0e9' />
                                    <Text as="span" color="white">Frenulum Piercing</Text>

                                    
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={StarIcon} color='#6ae0e9' />
                                    <Text as="span" color="white"> Navel Piercing</Text>

                                   
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={StarIcon} color='#6ae0e9' />
                                    <Text as="span" color="white">Forward Helix Piercing</Text>

                                    
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={StarIcon} color='#6ae0e9' />
                                    <Text as="span" color="white">Snug Piercing</Text>

                                    
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={StarIcon} color='#6ae0e9' />
                                    <Text as="span" color="white">Anti-Tragus Piercing</Text>

                                    
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={StarIcon} color='#6ae0e9' />
                                    <Text as="span" color="white">Industrial Piercing</Text>
                                </ListItem>

                            </List>
                        </Center>

                    </Box>
                </Center>

                <Center>
                    <Box mt="50px">
                        <Button bg='#6ae0e9'   _hover={{ bg: "#1be4ec" }} leftIcon={<PhoneIcon />}><a href="tel:+916382120489" cursor="pointer">Free Consultation</a></Button>

                    </Box>
                </Center>

            </Box>
        </Box>
    )
}
