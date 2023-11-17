import { Box,Center, List, ListItem ,Heading,Text} from '@chakra-ui/react'
import React from 'react'
import { Grid, GridItem,Image,AspectRatio} from '@chakra-ui/react'
import { FiInstagram} from 'react-icons/fi';
import { BsYoutube,BsFillTelephoneFill} from 'react-icons/bs';
import {  BsWhatsapp} from 'react-icons/bs';
import { FaFacebook} from 'react-icons/fa';
import '../style.css'
export default function Footer() {

  //background
  const iconStyle = {
    
   
     // Optional padding to give some space around the icon
    // display: 'inline-block', // Ensures the background color only covers the icon area
  };
  return ( 
    <Box bg="#333333" as="footer" >

      <Box className='Footer'>
      <Box style={iconStyle} display={["none","none","none","none","block"] } position="fixed" left={["15px","15px"]} bottom={["110px","130px"]} cursor="pointer" zIndex={99}>
        <a href="https://wa.me/6382120489"  target="_blank">
        <Image src='images/whatsapp.png' boxSize={45}  borderRadius="50%"/>
        </a>
        </Box>

        <Box style={iconStyle} display={["none","none","none","none","block"] }  position="fixed" left={["15px","15px"]} bottom={["60px","70px"]} cursor="pointer" zIndex={99}>
        <a href="https://www.instagram.com/tatvika_tattoo/"  target="_blank">
        <Image src='images/insta.webp' boxSize={45}/>
        </a>
        </Box>

        <Box style={iconStyle} display={["none","none","none","none","block"] }  position="fixed" left={["15px","15px"]} bottom={["10px","10px"]} cursor="pointer" zIndex={99}>
        <a href="https://www.youtube.com/channel/UCGvPxohf8muVOk69i6GOQjw"  target="_blank">
          <Image src='images/youtube.webp' boxSize={45}/>
        </a>
        </Box>



      <Box pt="50px" pb={["5px","50px"]}>
        <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']} gap={['8','10','10','10']}>

            <GridItem w='100%' h='100%'>
            <Center>
                <AspectRatio height={["100%"]} ml={["","","30px","30px","30px"]} width={["90%","90%","380px","550px"]} border="4px" borderColor="#f5f4f0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15774.062816113757!2d77.5239693!3d8.7374507!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b043ddfd85a19e7%3A0x193a9cffd2867937!2sTatvika%20Tattoo%20%26%20Piercing!5e0!3m2!1sen!2sin!4v1697950008035!5m2!1sen!2sin"
                />
              </AspectRatio>
            </Center>
            </GridItem>

            <GridItem w='100%' h='100%'>
              <Center>
              <List spacing={["13px","17px"]} >
                <ListItem mt={["10px","10px","5px","55px"]}>
                  <Heading as='h1' fontSize="xl" color="white" mb="10px">Hour of Operations</Heading>
                </ListItem>
                <ListItem color="white">
                  <Box display="flex">
                    <Text>Monday :</Text>
                    <Text ml="55px">24 hours</Text>
                  </Box>
                </ListItem>
                <ListItem color="white">
                  <Box display="flex" >
                    <Text>Tuesday :</Text>
                    <Text ml="55px">24 hours</Text>
                  </Box>
                </ListItem>
                <ListItem color="white"> 
                  <Box display="flex">
                    <Text>Wednesday :</Text>
                    <Text ml="31px">24 hours</Text>
                  </Box>
                </ListItem>
                <ListItem color="white"> 
                  <Box display="flex">
                    <Text>Thursday :</Text>
                    <Text ml="49px">24 hours</Text>
                  </Box>
                </ListItem>
                <ListItem color="white">
                  <Box display="flex">
                    <Text mr="10px">Friday :</Text>
                    <Text ml="61px">24 hours</Text>
                  </Box>
                </ListItem>
                <ListItem color="white">
                  <Box display="flex">
                    <Text>Saturday :</Text>
                    <Text ml="51px">24 hours</Text>
                  </Box>
                </ListItem>
                <ListItem color="white">
                <Box display="flex">
                    <Text>Sunday :</Text>
                    <Text ml="61px">24 hours</Text>
                  </Box>
                </ListItem>
                </List>

              </Center>
              
               
             
            </GridItem>

        </Grid>

        <Box mt={["30px","30px","50px"]}>
          <Center>
          <a href='/tatvika-tattoo/'><Image src="images/footerlogo.png" alt="tavika_logo" height="70px" width="180px"/></a>
          </Center>
          <Center>
          <List  ml="15px" mr="15px">
              <a href="tel:+916382120489" cursor="pointer"><BsFillTelephoneFill  size={20} color='white' /></a>
            </List>
            <List  mr="15px">
            <a href="https://www.instagram.com/tatvika_tattoo/"  target="_blank"><FiInstagram  size={20} color='white' /></a>
            </List>
            <List mr="15px">
            <a href="https://www.youtube.com/channel/UCGvPxohf8muVOk69i6GOQjw"  target="_blank"><BsYoutube  size={20} color='white'/></a>
            </List>
            <List mr="15px">
            <a href="https://wa.me/6382120489"  target="_blank"><BsWhatsapp  size={20} color='white'/></a>
            </List>
            <List mr="15px">
              <FaFacebook  size={20} color='white'/>
            </List>
          </Center>
        </Box>

        <Box mt={["25px","0px","0px"]}>
        <Grid  templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']} gap={6}>
            <GridItem w='100%' h='10'>
                <List mt={["25px","25px","25px","50px"]}  ml={["0px","","12px","12px","80px"]}>
                    <ListItem  color="white" ml="18px">© 2023. Tatvika Tattoo. </ListItem>
                </List>
            </GridItem>
            <GridItem w='100%' h='10' >
                <List mt={["0px","25px","25px","50px"]}  ml={["0px","80px"]} >
                    <ListItem  color="white" ml={["18px","0px","0px"]} textAlign={["left","right"]} mr={["0px","20px","60px","120px",]}>All right reserved</ListItem>
                </List>
            </GridItem>
            </Grid>
        </Box>

      </Box>   

      </Box>
          
    </Box>
  )
}
