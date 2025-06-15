import { Box,Heading ,Image,Center,Text,Button,Stack,FormLabel,Input,InputGroup,InputLeftAddon,FormControl,Select ,Flex,} from '@chakra-ui/react'
import { Grid, GridItem,AbsoluteCenter } from '@chakra-ui/react'
import React  from 'react'
import { useState ,useEffect,useRef} from "react";
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
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Divider,VStack, IconButton} from '@chakra-ui/react' 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Style.css'
import { PhoneIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Home() {

  useEffect(() => {
    document.title = 'Best Tattoo in Tirunelveli - Tatvika Tattoo';
  }, []);
  // Letters
  const text="TATVIKA TATTOO";
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLetterIndex < text.length - 1) {
        setCurrentLetterIndex(currentLetterIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 200); // Adjust the time interval as needed
    return () => clearInterval(interval);
  }, [currentLetterIndex, text]);

  const displayedText = text.substring(0, currentLetterIndex + 1);
  
  // Drawer
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  const initialFormData = {
    name: "",
    email: "",
    mobileNumber: "",
    Interested: "",
    tattoo: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://mernback-esoz.onrender.com/submit-form", formData);
      console.log("Form submitted successfully:", response.data);
      setIsFormSubmitted(true);
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }finally {
      // Reset form data after submission
      setFormData(initialFormData);
    }
  };

  

  //Comments
  // const CommentCarousel = () => {
  //   const [selectedIndex, setSelectedIndex] = useState(0);
  //   const carouselRef = useRef(null);
  
  //   const handlePrev = () => {
  //     setSelectedIndex(selectedIndex - 1);
  //     carouselRef.current?.slidePrev();
  //   };
  
  //   const handleNext = () => {
  //     setSelectedIndex(selectedIndex + 1);
  //     carouselRef.current?.slideNext();
  //   };
  // }
  
  const commentsData = [
    { id: 1, text: 'I just had a great tattoo from the shop. I liked it very much that because I show him a photo he just set up the tattoo design that perfectly fited on my hand at the correct shape that I want to, and he did it very well with good texture and it looks great now, and everybody likes my tattoo and they have great response on it. And he took care on my tattoo for so many days and helped me in the aftercare of my tattoo at every single time that I called him and he cleared my doubts. And am gonna do another one soon💙', author: '~Jerin,Kerala' },
    { id: 2, text: "An absolute masterpiece! The Phoenix bold band tattoo in black exceeded my expectations. The studio's artist was not only incredibly talented but also incredibly friendly, making the entire experience delightful. The studio itself exudes professionalism and warmth. Highly recommended for top-notch artistry and a welcoming atmosphere", author: '~Rahul Raj,Tirunelveli' },
    { id: 3, text: "Absolutely thrilled with my script tattoo! The artist's skill in creating intricate lettering surpassed my expectations. The studio's friendly and attentive approach made the experience enjoyable. Highly recommend this studio for their expertise in script tattoos and their fantastic customer service!", author: '~Athinesh Lal,Tirunelveli' },
    // Add more comments as needed
  ];

  useEffect(()=>{
    Aos.init()
  },[])

  return (
    <Box mt="0px">
      <Box bg="#333333" >
      <Grid className='welcome' templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)',,'repeat(2, 1fr)']}>
      <GridItem w='100%' h='100%' mt={["110px","110px","100px","135px"]} >
        <Center>
          <Box>
          <Center>
            <Flex alignItems="center" flexDirection={["column","column","column","column","row"]}>
            <Heading className='nn' fontFamily="Montserrat" color="white">Welcome to&nbsp;</Heading> <Heading  className="animated-text" fontFamily="Montserrat" color="#6ae0e9">{displayedText}</Heading>  
            </Flex>
            </Center>
            <Center mt={["25px","25px","20px","25px"]}>
                <Text fontFamily="Montserrat" color="white" fontWeight={100}> Where Ink Meets Artistry!</Text>
            </Center>
            <Center>
              <Text color="white" width={["90vw","90vw","500px","500px"]} mt={["25px","25px","20px","25px"]} lineHeight="28px" ml={["5px",""]} >
              Unlock the world of unparalleled self-expression through the power of tattoos. Our expert artists bring your visions to life with precision and creativity. Whether you're a first-timer or an ink enthusiast, step into a realm where every tattoo tells a unique story. Your journey starts here - book your appointment now and let your inked masterpiece come to life.
              </Text>
            </Center>
            
            
              <Button ml={["5px","5px","5%",""]} bg='#6ae0e9'   _hover={{ bg: "#1be4ec" }} mt={["30px","30px","20px","30px"]} onClick={onOpen}>BOOK YOUR SLOT NOW</Button>
           
      
      {/* Form */}
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
              <Heading fontSize='xl' color="#6ae0e9">Let's Connect</Heading>
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
                  <FormLabel htmlFor='name' fontWeight={400}>Name</FormLabel>
                  <Input
                      variant='filled'
                      type="text"
                      name="name"
                      placeholder='Please enter name'
                      value={formData.name}
                      onChange={handleInputChange}
                      autoComplete="off"
                  />
                  </FormControl>
                </Box>

                <Box>
                <FormControl isRequired>
                  <FormLabel htmlFor='email' fontWeight={400}>Email</FormLabel>
                  <Input
                  variant='filled'
                    type="email"
                    name="email"
                    placeholder='Please enter email'
                  
                    value={formData.email}
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                  </FormControl>
                </Box>

                <Box>
                <FormControl isRequired>
                  <FormLabel fontWeight={400}>Phone Number</FormLabel>
                  <Input
                    type="tel" 
                    variant='filled'
                    
                    placeholder='Please enter Number'
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                  </FormControl>
                </Box>
              
                <Box>
                <FormControl isRequired>
                <FormLabel fontWeight={400}>Interested In</FormLabel>
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
                <FormLabel fontWeight={400}> When would you like to get this tattoo?</FormLabel>
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
              <Button bg='#6ae0e9' _hover={{ bg: "#1be4ec" }} width={["500px","500px","500px","700px","900px"]}  type="submit">Submit</Button>
            </DrawerFooter>
         
        </DrawerContent>
        </form>
      </Drawer>
          
          </Box>
        </Center>
      </GridItem>

      <GridItem w='100%' h='100%' mt="70px" >
          <Image src="images/wolf.gif"  height={["400px","500px"]} width="100vw" alt="wolf" />
          {/* <video width="100%" controls={fa} loop>
            <source src="images/tattoo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
      </GridItem>
      </Grid>
      </Box>


      {/* Round */}
      <Box mt="100px" mb="100px">
        <Center>
          <Box display="flex" flexDir={["column","row"]} alignItems="center">
            <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" position="relative">
              <Box   borderColor="red" borderRadius="50%" >
                <Image src="images/phone.png" alt='phone'   height={["80px","80px"]} width={["80px","80px"]} />
              </Box>
              <Box position="absolute"  top={["100px","100px","90px","100px","100px"]}  width={["300px","200px",""]} >
                <Center>
                <Text fontSize={["md","lg"]} >Consulting first </Text>
                </Center>
                </Box>
            </Box>
            
            
            <Center>
            <Divider ml="10px" mr="10px" mt={["130px","0px"]} orientation={['vertical','horizontal']}  transform={["rotate(90deg)","rotate(180deg)"]} height="0px" width={["130px","130px","180px","250px","400px"]} borderTop="5px dotted" borderBlockEndWidth="0px" borderColor="black"/>
            </Center>

            <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" position="relative">
            <Box  bg="white" borderColor="red" borderRadius="50%" >
              <Image src="images/customtatto.png" alt='phone'  height={["100px","120px"]} width={["100px","120px"]}   mb={["0px","0px","20px"]}/>
            </Box>
              <Box position="absolute" top={["100px","100px","120px","125px","130px"]} width={["300px","200px",""]}>
                <Center>
                <Text fontSize={["md","lg"]} >Let's plan your design</Text>
                </Center>
              </Box>
              </Box>


              <Center>
            <Divider ml="10px" mr="10px" mt={["130px","0px"]} orientation={['vertical','horizontal']}  transform={["rotate(90deg)","rotate(180deg)"]} height="0px" width={["130px","130px","180px","250px","400px"]} borderTop="5px dotted" borderBlockEndWidth="0px" borderColor="black"/>
            </Center>


            <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" position="relative">
            <Box  bg="white"  borderColor="red" borderRadius="50%" >
              <Image src="images/tattooo.png" alt='phone'   height={["80px","100px"]} width={["80px","100px"]} />
            </Box>
            <Box position="absolute"  top={["100px","100px","100px","100px","110px"]}>
                <Text  fontSize={["md","lg"]}>Tattoo Day</Text>
              </Box>
              </Box>
              
            
            
          </Box>
        </Center>
        <Center>
          <Box mt="100px">
          <Button bg='#6ae0e9'   _hover={{ bg: "#1be4ec" }} leftIcon={<PhoneIcon />}><a href="tel:+916382120489" cursor="pointer">Talk to Us</a></Button>

          </Box>
        </Center>

      </Box>







      {/*Categories Tattoo*/}
      <Box bg="#333333" pb="15px" >
        <Box>
        <Grid className='welcome' templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']} gap={6}>
          <GridItem  mt="50px" >
              <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
               <Link to="/Wolf_Tattoo"><Image src="images/wolf.jpg" alt="wolf_Tattoo" borderRadius="20px" height={["400px","400px"]} width={["300px"]}  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/></Link>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Wolf Tattoo</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
           
          </GridItem>
          <GridItem mt="50px">
          <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
                <Link to="/Pheonix_Tattoo"><Image src="images/pheonix.jpg" alt="Pheonix_Tattoo" borderRadius="20px" height="400px" width="300px"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/></Link>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Pheonix  Tattoo</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
          </GridItem>
          <GridItem mt="50px">
          <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
              <Link to="/HoneyBee_Tattoo"><Image src="images/honey.jpg" alt="HonyBee_Tattoo" borderRadius="20px" height="400px" width="300px"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/></Link>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">HonyBee Tattoo</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
          </GridItem>
          <GridItem mt="50px">
          <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
              <Link to="/Spiritual_Tattoo"><Image src="images/lordshiva.jpg" alt="Lord_Shiva_Tattoo" borderRadius="20px" height="400px" width="300px"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/></Link>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Spiritual Tattoo</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
          </GridItem>
        </Grid>
        </Box>
        
        {/* Grid 2 */}
        <Box>
        <Grid className='welcome' templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']} gap={6}>
          <GridItem  mt="50px">
              <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
              <Link to="/Floral_Tattoo"><Image src="images/momflowernew.jpg" alt="Flower_Tattoo" borderRadius="20px" height="400px" width="300px"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/></Link>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Floral  Tattoo</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
           
          </GridItem>
          <GridItem mt="50px">
          <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
                <Link to="/Couples_Tattoo">
                <Image src="images/couples.jpg" alt="Couples_Tattoo" borderRadius="20px" height="400px" width="300px"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </Link>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Couples Tattoo</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
          </GridItem>
          <GridItem mt="50px">
          <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
              <Link to="/LadyBug_Tattoo"><Image src="images/ladybug.jpg" alt="Ladybug_Tattoo" borderRadius="20px" height="400px" width="300px"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/></Link>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Customised Ladybug Tattoo</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
          </GridItem>
          <GridItem mt="50px">
          <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
                <Link to="/Portrait"><Image src="images/Portrait.jpg" alt="Band Tattoo" borderRadius="20px" height="400px" width="300px"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/></Link>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Portrait  Tattoo</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
          </GridItem>
        </Grid>
        </Box>

            {/* Grid 3 */}
        <Box>
        <Grid className='welcome' templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']} gap={6}>
          <GridItem  mt="50px">
              <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
                <Link to="/Minimal_Tattoo"><Image src="images/min2.jpg"  alt="Minimal Tattoo" borderRadius="20px" height="400px" width="300px"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/></Link>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Minimal Tattoo</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
           
          </GridItem>
          <GridItem mt="50px">
          <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
                <Link to="/Band_Tattoo"><Image src="images/rahulband.jpg" alt="Band Tattoo" borderRadius="20px" height="400px" width="300px"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/></Link>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Band Tattoo</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
          </GridItem>
          <GridItem mt="50px">
          <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
                <Link to="/WaterColor_Tattoo"><Image src="images/mom.jpg" alt="Water Colour Tattoo" borderRadius="20px" height="400px" width="300px"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/></Link>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Water Colour Tattoo</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
          </GridItem>
          <GridItem mt="50px" mb="50px">
          <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
                <Link to="/Script_Tattoo"><Image src="images/athi.jpg" alt="Script Tattoo" borderRadius="20px" height="400px" width="300px"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/></Link>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Script Tattoo</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
          </GridItem>
        </Grid>
        </Box>


        <Box>
        <Grid className='welcome' templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']} gap={6}>
          {/* <GridItem  mt="50px">
              <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
                <Link to="/Minimal_Tattoo"><Image src="images/minimaltatto.jpg" alt="Minimal Tattoo" borderRadius="20px" height="400px" width="300px"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/></Link>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Minimal Tattoo</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
           
          </GridItem> */}
           <GridItem mt="50px">
          <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
                <Link to="/CoverUp_Tattoo"><Image src="images/coverup.jpg" alt="Coverup_Tattoo" borderRadius="20px" height="400px" width="300px"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/></Link>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Coverup Tattoo</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
          </GridItem> 
          <GridItem mt="50px">
          <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
                <Link to="/Astrological_Tattoo"><Image src="images/cow.jpg" alt="Water Colour Tattoo" borderRadius="20px" height="400px" width="300px"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/></Link>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Astrological   Tattoo</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
          </GridItem>
          {/* <GridItem mt="50px" mb="50px">
          <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
                <Link to="/Script_Tattoo"><Image src="images/athi.jpg" alt="Script Tattoo" borderRadius="20px" height="400px" width="300px"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/></Link>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Script Tattoo</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
          </GridItem> */}
        </Grid>
        </Box>
      </Box>


      {/* Carousel */}
      <Box bg="#fff">
      {/* <Box pt="100px" pb="100px" overflow="hidden" className='welcome'>
      <Center>
        <Carousel
          width="100%"
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          stopOnHover={true} // Stop autoPlay on hover
          stopOnFocus={true}
          className="custom-carousel"
        >
         <VStack spacing={4} mb="50px">
            <a href="https://www.google.com/search?q=tatvika+tattoo&oq=tatvika+tattoo+&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyCQgCEAAYDRiABDIGCAMQRRhAMgoIBBAAGAgYDRgeMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMjYwNWowajSoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x3b043ddfd85a19e7:0x193a9cffd2867937,1,,,," target='_blank'><Button colorScheme='black' variant='outline'>See All Reviews </Button></a>
            <Text width={["90vw","90vw","90vw","90%"]} ml="40px" mr="40px"  fontSize={["sm","lg"]} letterSpacing={["1.5px","4px"]}>
            I just had a great tattoo from the shop. I liked it very much that because I show him a photo he just set up the tattoo design that perfectly fited on my hand at the correct shape that I want to, and he did it very well with good texture and it looks great now, and everybody likes my tattoo and they have great response on it. And he took care on my tattoo for so many days and helped me in the aftercare of my tattoo at every single time that I called him and he cleared my doubts. And am gonna do another one soon💙
            </Text>
            <Center>
              <Heading fontSize="lg">~Jerin,Kerala</Heading>
            </Center>
          </VStack>
          <VStack spacing={4}>
          <a href="https://www.google.com/search?q=tatvika+tattoo&oq=tatvika+tattoo+&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyCQgCEAAYDRiABDIGCAMQRRhAMgoIBBAAGAgYDRgeMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMjYwNWowajSoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x3b043ddfd85a19e7:0x193a9cffd2867937,1,,,," target='_blank'><Button colorScheme='black' variant='outline'>See All Reviews </Button></a>
          <Text width={["90vw","90vw","90vw","90%"]} ml="40px" mr="40px"  fontSize={["sm","lg"]} letterSpacing={["1.5px","4px"]}>
            I just had a great tattoo from the shop. I liked it very much that because I show him a photo he just set up the tattoo design that perfectly fited on my hand at the correct shape that I want to, and he did it very well with good texture and it looks great now, and everybody likes my tattoo and they have great response on it. And he took care on my tattoo for so many days and helped me in the aftercare of my tattoo at every single time that I called him and he cleared my doubts. And am gonna do another one soon💙
            </Text>
            <Center>
              <Heading fontSize="lg">~Jerin,Kerala</Heading>
            </Center>
          </VStack>
          <VStack spacing={4}>
          <a href="https://www.google.com/search?q=tatvika+tattoo&oq=tatvika+tattoo+&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyCQgCEAAYDRiABDIGCAMQRRhAMgoIBBAAGAgYDRgeMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMjYwNWowajSoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x3b043ddfd85a19e7:0x193a9cffd2867937,1,,,," target='_blank'><Button colorScheme='black' variant='outline'>See All Reviews </Button></a>
            <Text width={["90vw","90vw","90vw","90%"]} ml="40px" mr="40px"  fontSize={["sm","lg"]} letterSpacing={["1.5px","4px"]}>
            I just had a great tattoo from the shop. I liked it very much that because I show him a photo he just set up the tattoo design that perfectly fited on my hand at the correct shape that I want to, and he did it very well with good texture and it looks great now, and everybody likes my tattoo and they have great response on it. And he took care on my tattoo for so many days and helped me in the aftercare of my tattoo at every single time that I called him and he cleared my doubts. And am gonna do another one soon💙
            </Text>
            <Center>
              <Heading fontSize="lg">~Jerin,Kerala</Heading>
            </Center>
          </VStack>
        </Carousel>
      </Center>
      </Box> */}
      <Box pt="100px" pb="100px" overflow="hidden" className='welcome'>
        <Center>
        <a href="https://www.google.com/search?sca_esv=d572c6a4b45d64e1&sxsrf=AE3TifPQ82N-NIlfOH4zjtszWFf5W8DzaQ:1749997562446&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1z_NtdQdjT8IUmRGyIE46djnpMYMNzL15yyZ_bJ3xhTiJ7wIJQ3N_6NArxpptXNWTblPgCJrqdiGiXSXAKCVujGApvNkUaYdmKWiQQXnZRZJ70aVw%3D%3D&q=Tatvika+Tattoo+%26+Piercing+Reviews&sa=X&ved=2ahUKEwji5sT40PONAxWLSmwGHXMkD5cQ0bkNegQINxAE&biw=1536&bih=730&dpr=1.25" target='_blank'><Button colorScheme='black' mb="20px" variant='outline'>See All Reviews </Button></a>
        </Center>
        <Center>
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            interval={3000}
            swipeable={false}
            autoPlay={true}
            className="custom-carousel"
            >

            {commentsData.map((comment) => (
              <Box mb="50px">
                <Text   display="flex" flexDir="column" alignItems="center" justifyContent="center"  key={comment.id}>
                    <Text width={["90vw","90vw","90vw","90%"]} fontSize={["sm","lg"]} letterSpacing={["1.5px","4px"]}>{comment.text}</Text>
                    <Heading fontSize="lg" mt="10px" fontFamily="Montserrat">{comment.author}</Heading>
                </Text>
              </Box>
            ))}
          </Carousel>
        </Center>
      
      </Box>

      </Box>
     


      
    </Box>
  )
}
