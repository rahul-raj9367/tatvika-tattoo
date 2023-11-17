import { Flex ,Box, Text,Spacer, Avatar, Container,Image, Center} from "@chakra-ui/react";
import { List, ListItem ,IconButton} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon} from "@chakra-ui/icons"
import { NavLink,Link } from "react-router-dom";


import { Heading ,Button,Stack,FormLabel,Input,InputGroup,InputLeftAddon,FormControl,Select } from '@chakra-ui/react'
import React  from 'react'
import { useState ,useEffect} from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure  } from "@chakra-ui/react";
import '../LetterAnimation.css'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import axios from "axios";
import '../Style.css'


export default function Navbar() {

  const [display,ChangeDisplay]=useState('none')

     // Drawer
     const { isOpen, onOpen, onClose } = useDisclosure()
     const firstField = React.useRef()
   
     // Form
     const initialFormData = {
       name: "",
       email: "",
       mobileNumber: "",
       Interested: "",
       tattoo: "", 
     };
   
     const [formData, setFormData] = useState(initialFormData);
   
     const handleInputChange = (e) => {
       const { name, value } = e.target;
       setFormData({ ...formData, [name]: value });
     };
       
     const handleSubmit = async (e) => {
       e.preventDefault();
       try {
         const response = await axios.post("http://localhost:3002/submit-form", formData);
         console.log("Form submitted successfully:", response.data);
       } catch (error) {
         console.error("Error submitting form:", error);
       }
       setFormData(initialFormData);
       
   
       setTimeout(() => {
         setIsFormSubmitted(true);
         setShowSuccessAlert(true); // Display the success alert
       }, 1000); // Simulate a 2-second dela
     };
   
   
     //Alert 
     const [showSuccessAlert, setShowSuccessAlert] = useState(false);
     const [isFormSubmitted, setIsFormSubmitted] = useState(false);
   
     useEffect(() => {
       if (isFormSubmitted) {
         // Reset the form data
         setFormData(initialFormData);
     
         // Hide the success alert after a delay
         setTimeout(() => {
           setShowSuccessAlert(false);
         }, 2000); // Hide the alert after 5 seconds
       }
     }, [isFormSubmitted]);




  return (
    <Box>
    <Box as="div"  position={["fixed"]}  bg="white" width="100vw" top="0" left="0" alignItems="center"  justifyContent="center" zIndex={99} >
        <Flex as="nav" className="NAV"  width="100vw" height="70px" >
            <a href='/tatvika-tattoo/'>
                <Image borderRadius='full' height={["70px"]} width={["280px","180px"]}  src='images/tatlogo.png' alt='VV Rice Mill' ml={["8px","15px"]} />
            </a>
        <IconButton
            position="fixed"
            top="19"
            right="3"
            aria-label="Open Menu"
            fontSize='23px'
            align="right"
            icon={<HamburgerIcon />}
            display={['flex','flex','none','none']}
            color="black"  bg="transparent" _hover={{ bg: 'transparent' }}
            onClick={()=>ChangeDisplay('flex')}/>

        {/*Mobile View  */}
        <Flex
            w="100vw"
            h="100vh"
            bgColor="#f5f4f0"
            position="fixed"
            top="0"
            right="0"
            zIndex={20}
            overflowY="auto"
            flexDir="column"
            display={display}
        >
            <Flex justifyContent="flex-end">
                <IconButton
                position="fixed"
                top="19"
                right="3"
                aria-label="Close Menu"
                fontSize='23px'
                icon={<CloseIcon />}
                color="black" bg="transparent" _hover={{ bg: 'transparent' }}
                onClick={()=>ChangeDisplay('none')}></IconButton>
            </Flex>
                <Flex 
                flexDir="column"
                justifyContent="center"
                >
                <List mt="95px">
                        <Center>
                        <ListItem   mb="30px">
                        <NavLink >
                            <Link to="/" onClick={()=>ChangeDisplay('none')}><Text fontFamily="Montserrat" fontSize='lg' as='b' color="black">HOME</Text></Link>
                        </NavLink>
                        </ListItem>
                        </Center>
                        
                        <Center>
                        <ListItem   mb="30px">
                        <NavLink >
                            <Link to="/About" onClick={()=>ChangeDisplay('none')}><Text fontFamily="Montserrat"  fontSize='lg' as='b' color="black">ABOUT</Text></Link>
                        </NavLink>
                        </ListItem>
                        </Center>

                        <Center>
                        <ListItem  mb="30px" >
                            <NavLink>
                                <Link to="/Service" onClick={()=>ChangeDisplay('none')}><Text fontFamily="Montserrat" fontSize='lg' as='b' color="black">SERVICES</Text></Link>
                            </NavLink>
                            </ListItem>
                        </Center>
                        
                        <Center>
                        <ListItem   mb="30px">
                        <NavLink >
                            <Link to="/Blog" onClick={()=>ChangeDisplay('none')}><Text fontSize='lg' fontFamily="Montserrat" as='b' color="black">BLOG</Text></Link>
                        </NavLink>
                        </ListItem>
                        </Center>
                        
                        <Center>
                        <ListItem  mb="30px">
                        <NavLink >
                            <span onClick={()=>ChangeDisplay('none')}>
                            <Text onClick={onOpen} fontSize='lg' as='b' fontFamily="Montserrat" color="black">CONTACT</Text>
                              </span>
                        </NavLink>
                        </ListItem>
                        </Center>

                        <Center>
                        <ListItem  mb="30px">
                        <NavLink >
                            <Link to="/Faq" onClick={()=>ChangeDisplay('none')}><Text fontSize='lg' fontFamily="Montserrat" as='b' color="black">FAQ</Text></Link>
                        </NavLink>
                        </ListItem>
                        </Center>
                        
                    </List>

                </Flex>
        </Flex>
        {/*Mobile View  */}
        
        {/* DeskTop View  */}
        

       <Container mr={{sm:"0px",lg:"10px",xl:"100px"}} pr="0px"  display="flex" alignItems="center"  justifyContent={['none','none',"flex-end","flex-end"]}>        
            <List display={['none','none','flex','flex']}  alignItems={['none','none',"center","center"]} justifyContent={['none','none',"flex-end","flex-end"]}>
                <ListItem  mr={["30px","30px","25px","40px"]} mt="7px">
                    <NavLink >
                    <Link to="/" onClick={()=>ChangeDisplay('none')}><Text fontSize='lg' as='b' fontFamily="Montserrat" color="black">HOME</Text></Link>
                    </NavLink>
                </ListItem>
                <ListItem  mr={["30px","30px","25px","40px"]} mt="7px">
                    <NavLink>
                    <Link to="/About" onClick={()=>ChangeDisplay('none')}><Text fontSize='lg' as='b' fontFamily="Montserrat" color="black">ABOUT</Text></Link>
                    </NavLink>
                </ListItem>
                <ListItem   mr={["30px","30px","25px","40px"]} mt="7px">
                    <NavLink>
                    <Link to="/Service"  onClick={()=>ChangeDisplay('none')}><Text fontSize='lg' as='b' fontFamily="Montserrat" color="black">SERVICES</Text></Link>
                    </NavLink>
                </ListItem>
                <ListItem   mr={["30px","30px","25px","40px"]} mt="7px">
                    <NavLink >
                    <Link to="/Blog" onClick={()=>ChangeDisplay('none')}><Text fontSize='lg' as='b' fontFamily="Montserrat" color="black">BLOG</Text></Link>
                    </NavLink>
                </ListItem>
                <ListItem   mr={["30px","30px","25px","40px"]} mt="7px">
                    <NavLink >
                    <Text onClick={onOpen} fontSize='lg' as='b' fontFamily="Montserrat" color="black">CONTACT </Text>
                    </NavLink>
                </ListItem>
                <ListItem   mr={["30px","30px","25px","40px"]} mt="7px">
                    <NavLink >
                    <Link to="/Faq" onClick={()=>ChangeDisplay('none')}><Text fontFamily="Montserrat" fontSize='lg' as='b' color="black">FAQ </Text></Link>
                    </NavLink>
                </ListItem>
            </List>
        </Container>
        </Flex>  
    </Box>
    

    <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
        size={['xs', 'sm', 'md', 'lg', 'xl']}
      >
        <DrawerOverlay />
        <form onSubmit={handleSubmit}>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Center>
              <Heading fontSize='xl' color="red.500">Let's Connect</Heading>
            </Center>
            <Center>
              <Text mt="5px" fontSize={['sm',"sm","lg"]}>Fill out the form below and you will receive a call back shortly</Text>
            </Center>
            
          {showSuccessAlert && (
          <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
          >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
              Application submitted!
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
              Thanks for submitting your application. Our team will get back to you soon.
            </AlertDescription>
          </Alert>
        )}


          </DrawerHeader>
            
         
            <DrawerBody >
              <Stack spacing={['15px','15px','15px','25px']}>
                
                <Box>
                <FormControl isRequired>
                  <FormLabel htmlFor='name'>Name</FormLabel>
                  <Input
                      variant='filled'
                      type="text"
                      name="name"
                      placeholder='Please enter name'
                      value={formData.name}
                      onChange={handleInputChange}
                  />
                  </FormControl>
                </Box>

                <Box>
                <FormControl isRequired>
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input
                  variant='filled'
                    type="email"
                    name="email"
                    placeholder='Please enter email'
                  
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  </FormControl>
                </Box>

                <Box>
                <FormControl isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    type="tel" 
                    variant='filled'
                    
                    placeholder='Please enter Number'
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                  />
                  </FormControl>
                </Box>

                {/* <Box>
                <FormControl isRequired>
                  <FormLabel>Location of Tattoo in your Body</FormLabel>
                  <Input
                    type="text" 
                    variant='filled'
                    
                    placeholder='Please enter location'
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                  />
                  </FormControl>
                </Box>

                <Box>
                <FormControl isRequired>
                  <FormLabel>Approximate Size </FormLabel>
                  <Input
                    type="text" 
                    variant='filled'
                    
                    placeholder='Please enter size'
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                  />
                  </FormControl>
                </Box> */}
              
                <Box>
                <FormControl isRequired>
                <FormLabel>Interested In</FormLabel>
                  <Select  placeholder='Interested In'  
                  variant='filled' name="Interested"
                    value={formData.Interested}
                      onChange={handleInputChange}>
                    <option value='Tattoo'>Tattoo</option>
                    <option value='Piercing'>Piercing</option>
                  </Select>
                  </FormControl>
                </Box>

                <Box>
                <FormControl isRequired>
                <FormLabel> When would you like to get this tattoo?</FormLabel>
                  <Select
                  
                      placeholder='How soon do you wish to get it done?'
                      name="tattoo"  
                      variant='filled'
                      value={formData.tattoo}
                      onChange={handleInputChange}
                    >
                      <option value='This Week'>This Week</option>
                      <option value='Within a Month'>Within a Month</option>
                      <option value='In three Months Time'>In three Months Time</option>
                      <option value='Not a Soon'>Not a Soon</option>
                  </Select>
                  </FormControl>
                </Box>

              </Stack>
            </DrawerBody>
            
            <DrawerFooter >    
              <Button colorScheme='red' width={["500px","500px","500px","700px","900px"]}  type="submit" 
               
              >Submit</Button>
            </DrawerFooter>
         
        </DrawerContent>
        </form>
      </Drawer>

    </Box>
    
    
  )
}
