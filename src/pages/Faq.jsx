import { Box ,Center,Heading,Text} from '@chakra-ui/react'
import React,{useEffect} from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import '../LetterAnimation.css'

export default function Faq() {

  useEffect(() => {
    document.title = 'Frequently Asked Questions - Tatvika Tattoo';
  }, []);

  return (
    <Box pt="100px" bgGradient='linear(to-r, #ffff, #f5f4f0)'>
      <Box pb="100px"  className='welcome'>
        <Center>
          <Heading fontSize={["xl","5xl"]} fontFamily="Montserrat">Frequently Asked Questions</Heading>
        </Center>
        <Center>
          <Heading mt="20px" mb="20px" fontSize={["2xl","5xl"]} color="#6ae0e9" fontFamily="Montserrat">Tattoo FAQs</Heading>
        </Center>

        {/* Tattoos  */}
        <Center>  
        <Accordion allowToggle>
        <Box width={["85vw","80vw","80vw","80vw","80vw","55vw"]}>
              <AccordionItem >
              <h2>
                <AccordionButton  mt={["5px","10px"]} mb={["5px","10px"]}  _hover={{ bg: 'transport', color: 'black' }}>
                  <Box as="span" flex='1' textAlign='left'>
                  <Heading fontSize={["lg","2xl"]} _hover={[""]} fontFamily="Montserrat">How do I prepare for my tattoo appointment?</Heading>
                  </Box>
                  <AccordionIcon boxSize={[6,6]}/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text fontSize={["lg","xl"]}>
                Before your appointment, make sure you've eaten and are well-hydrated. Wear comfortable clothing that allows easy access to the area you're getting tattooed. If you have specific design ideas or references, bring them along for discussion.
                </Text>
              </AccordionPanel>
            </AccordionItem>
              </Box>
            

              <Box width={["85vw","80vw","80vw","80vw","80vw","55vw"]}>
              <AccordionItem>
              <h2>
                <AccordionButton mt={["5px","10px"]} mb={["5px","10px"]}  _hover={{ bg: 'transport', color: 'black' }}>
                  <Box as="span" flex='1' textAlign='left'>
                  <Heading fontSize={["lg","2xl"]}> 
                  Is it painful to get a tattoo, and can I use numbing cream?
                  </Heading>
                  </Box>
                  <AccordionIcon boxSize={[6,6]}/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text fontSize={["lg","xl"]}>
              Pain varies from person to person, but some discomfort is typical. Numbing creams can help reduce pain, and you can discuss this with your tattoo artist.
              </Text>
              </AccordionPanel>
            </AccordionItem>
              </Box>

              <Box width={["85vw","80vw","80vw","80vw","80vw","55vw"]}>
              <AccordionItem>
              <h2>
                <AccordionButton mt={["5px","10px"]} mb={["5px","10px"]}   _hover={{ bg: 'transport', color: 'black' }}>
                  <Box as="span" flex='1' textAlign='left'>
                  <Heading fontSize={["lg","2xl"]}> How long does a tattoo session typically last?</Heading>
                  </Box>
                  <AccordionIcon boxSize={[6,6]}/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text fontSize={["lg","xl"]} >
              The duration varies based on the complexity and size of the design. Sessions can range from a quick 15 minutes to several hours or multiple sessions for larger tattoos.
              </Text>
              </AccordionPanel>
            </AccordionItem>
              </Box>

              <Box width={["85vw","80vw","80vw","80vw","80vw","55vw"]}>
              <AccordionItem>
              <h2>
              <AccordionButton mt={["5px","10px"]} mb={["5px","10px"]} _hover={{ bg: 'transport', color: 'black' }}>
                  <Box as="span" flex='1' textAlign='left'>
                  <Heading fontSize={["lg","2xl"]}>Do you offer custom tattoo designs, or do I need to choose from existing designs?</Heading>
                  </Box>
                  <AccordionIcon boxSize={[6,6]}/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text fontSize={["lg","xl"]} >
              We offer both! You can choose from our existing designs or collaborate with our artists to create a custom piece.
              </Text>
              </AccordionPanel>
            </AccordionItem>
              </Box>


              <Box width={["85vw","80vw","80vw","80vw","80vw","55vw"]}>
              <AccordionItem>
              <h2>
                <AccordionButton  mt={["5px","10px"]} mb={["5px","10px"]}   _hover={{ bg: 'transport', color: 'black' }}>
                  <Box as="span" flex='1' textAlign='left'>
                  <Heading fontSize={["lg","2xl"]}>Can I bring my own design idea for a tattoo?</Heading>
                  </Box>
                  <AccordionIcon boxSize={[6,6]}/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text fontSize={["lg","xl"]} >
              Absolutely, we encourage it! Feel free to bring your design ideas, references, or sketches, and our artists can work with you to bring your vision to life.
              </Text>
              </AccordionPanel>
            </AccordionItem>
              </Box>


              <Box width={["85vw","80vw","80vw","80vw","80vw","55vw"]}>
              <AccordionItem>
              <h2>
                <AccordionButton  mt={["5px","10px"]} mb={["5px","10px"]}  _hover={{ bg: 'transport', color: 'black' }}>
                  <Box as="span" flex='1' textAlign='left'>
                  <Heading fontSize={["lg","2xl"]}>What is the tattoo aftercare process, and how do I take care of my new tattoo?</Heading>
                  </Box>
                  <AccordionIcon boxSize={[6,6]}/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text fontSize={["lg","xl"]} >
              We provide detailed aftercare instructions, including cleaning, moisturizing, and protecting your new tattoo. Follow these guidelines to ensure a successful healing process.
              </Text>
              </AccordionPanel>
            </AccordionItem>
              </Box>


              <Box width={["85vw","80vw","80vw","80vw","80vw","55vw"]}>
              <AccordionItem>
              <h2>
                <AccordionButton  mt={["5px","10px"]} mb={["5px","10px"]}  _hover={{ bg: 'transport', color: 'black' }}>
                  <Box as="span" flex='1' textAlign='left'>
                  <Heading  fontSize={["lg","2xl"]}>Is it possible to get a price estimate for my tattoo idea before the appointment?</Heading>
                  </Box>
                  <AccordionIcon boxSize={[6,6]}/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text fontSize={["lg","xl"]} >
              Yes, we can provide a price estimate based on the size, complexity, and placement of your tattoo. Prices vary, so feel free to inquire.
              </Text>
              </AccordionPanel>
            </AccordionItem>
              </Box>


              <Box width={["85vw","80vw","80vw","80vw","80vw","55vw"]}>
              <AccordionItem>
              <h2>
                <AccordionButton mt={["5px","10px"]} mb={["5px","10px"]}  _hover={{ bg: 'transport', color: 'black' }}>
                  <Box as="span" flex='1' textAlign='left'>
                  <Heading fontSize={["lg","2xl"]}>Do you offer touch-ups for tattoos that have faded or need improvements?</Heading>
                  </Box>
                  <AccordionIcon boxSize={[6,6]}/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text fontSize={["lg","xl"]} >
              Yes, we offer touch-up services to ensure your tattoo stays vibrant and beautiful over time. Please consult with us to schedule a touch-up appointment.
              </Text>
              </AccordionPanel>
            </AccordionItem>
              </Box>

              
          </Accordion>

        </Center>


        {/*Piercing  */}

        <Center>
          <Heading mt="20px" mb="20px" fontSize={["2xl","5xl"]} color="#6ae0e9" fontFamily="Montserrat">Piercing FAQs</Heading>
        </Center>


        <Center>  
        <Accordion allowToggle>
        <Box width={["85vw","80vw","80vw","80vw","80vw","55vw"]}>
              <AccordionItem >
              <h2>
                <AccordionButton  mt={["5px","10px"]} mb={["5px","10px"]}   _hover={{ bg: 'transport', color: 'black' }}>
                  <Box as="span" flex='1' textAlign='left'>
                  <Heading fontSize={["lg","2xl"]} fontFamily="Montserrat">What are the common types of piercings you offer?</Heading>
                  </Box>
                  <AccordionIcon boxSize={[6,6]}/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text fontSize={["lg","xl"]}>
                We offer a range of piercings, including earlobe, cartilage, facial, body, and genital piercings. Contact us for specific options.
                </Text>
              </AccordionPanel>
            </AccordionItem>
              </Box>
            
              <Box width={["85vw","80vw","80vw","80vw","80vw","55vw"]}>
              <AccordionItem>
              <h2>
                <AccordionButton mt={["5px","10px"]} mb={["5px","10px"]}  _hover={{ bg: 'transport', color: 'black' }}>
                  <Box as="span" flex='1' textAlign='left'>
                  <Heading fontSize={["lg","2xl"]} fontFamily="Montserrat"> 
                  How should I prepare for my piercing appointment?
                  </Heading>
                  </Box>
                  <AccordionIcon boxSize={[6,6]}/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text fontSize={["lg","xl"]}>
              Ensure you're well-rested, have had a meal, and stay hydrated before your appointment. Wear comfortable clothing and clean the piercing area if possible.
              </Text>
              </AccordionPanel>
            </AccordionItem>
              </Box>

              <Box width={["85vw","80vw","80vw","80vw","80vw","55vw"]}>
              <AccordionItem>
              <h2>
                <AccordionButton mt={["5px","10px"]} mb={["5px","10px"]}   _hover={{ bg: 'transport', color: 'black' }}>
                  <Box as="span" flex='1' textAlign='left'>
                  <Heading fontSize={["lg","2xl"]} fontFamily="Montserrat"> Is the piercing process painful, and how long does it take?</Heading>
                  </Box>
                  <AccordionIcon boxSize={[6,6]}/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text fontSize={["lg","xl"]} >
              Pain varies from person to person, but piercing is generally quick. Most piercings take only a few seconds.
              </Text>
              </AccordionPanel>
            </AccordionItem>
              </Box>

              <Box width={["85vw","80vw","80vw","80vw","80vw","55vw"]}>
              <AccordionItem>
              <h2>
              <AccordionButton mt={["5px","10px"]} mb={["5px","10px"]}  _hover={{ bg: 'transport', color: 'black' }}>
                  <Box as="span" flex='1' textAlign='left'>
                  <Heading fontSize={["lg","2xl"]} fontFamily="Montserrat">What materials are used for piercings, and are they safe for my skin?</Heading>
                  </Box>
                  <AccordionIcon boxSize={[6,6]}/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text fontSize={["lg","xl"]} >
              We use high-quality, hypoallergenic materials, typically surgical steel or titanium, which are safe for most skin types.
              </Text>
              </AccordionPanel>
            </AccordionItem>
              </Box>


              <Box width={["85vw","80vw","80vw","80vw","80vw","55vw"]}>
              <AccordionItem>
              <h2>
                <AccordionButton  mt={["5px","10px"]} mb={["5px","10px"]}   _hover={{ bg: 'transport', color: 'black' }}>
                  <Box as="span" flex='1' textAlign='left'>
                  <Heading fontSize={["lg","2xl"]} fontFamily="Montserrat">What is the aftercare process for my new piercing, and how do I prevent infections?</Heading>
                  </Box>
                  <AccordionIcon boxSize={[6,6]}/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text fontSize={["lg","xl"]} >
              We provide thorough aftercare instructions. It's crucial to follow these instructions to ensure proper healing and prevent infections.
              </Text>
              </AccordionPanel>
            </AccordionItem>
              </Box>


              <Box width={["85vw","80vw","80vw","80vw","80vw","55vw"]}>
              <AccordionItem>
              <h2>
                <AccordionButton  mt={["5px","10px"]} mb={["5px","10px"]}  _hover={{ bg: 'transport', color: 'black' }}>
                  <Box as="span" flex='1' textAlign='left'>
                  <Heading fontSize={["lg","2xl"]} fontFamily="Montserrat">Do you offer custom or unique piercing options, or is it limited to standard piercings?</Heading>
                  </Box>
                  <AccordionIcon boxSize={[6,6]}/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text fontSize={["lg","xl"]} >
              We offer standard piercings, but our experienced piercers can discuss custom or unique options if you have specific preferences.
              </Text>
              </AccordionPanel>
            </AccordionItem>
              </Box>


              <Box width={["85vw","80vw","80vw","80vw","80vw","55vw"]}>
              <AccordionItem>
              <h2>
                <AccordionButton  mt={["5px","10px"]} mb={["5px","10px"]}  _hover={{ bg: 'transport', color: 'black' }}>
                  <Box as="span" flex='1' textAlign='left'>
                  <Heading  fontSize={["lg","2xl"]} fontFamily="Montserrat">Can I bring my own piercing jewelry for my appointment, or should I use what you provide?</Heading>
                  </Box>
                  <AccordionIcon boxSize={[6,6]}/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text fontSize={["lg","xl"]} >
              We typically provide jewelry that meets our safety standards. If you have your own jewelry, please consult with our piercer to ensure it's suitable for your piercing.
              </Text>
              </AccordionPanel>
            </AccordionItem>
              </Box>


              <Box width={["85vw","80vw","80vw","80vw","80vw","55vw"]}>
              <AccordionItem>
              <h2>
                <AccordionButton mt={["5px","10px"]} mb={["5px","10px"]}  _hover={{ bg: 'transport', color: 'black' }}>
                  <Box as="span" flex='1' textAlign='left'>
                  <Heading fontSize={["lg","2xl"]} fontFamily="Montserrat">Do you offer piercing touch-ups or removal services if needed?</Heading>
                  </Box>
                  <AccordionIcon boxSize={[6,6]}/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text fontSize={["lg","xl"]} >
              We provide services for touch-ups and piercing removal. Contact us for more information on the specific service you require.
              </Text>
              </AccordionPanel>
            </AccordionItem>
              </Box>

              
          </Accordion>

        </Center>


      </Box>
    </Box>
  )
}
