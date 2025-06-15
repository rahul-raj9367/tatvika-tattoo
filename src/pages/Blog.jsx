import { Box,Grid,GridItem,Center,Heading,Text } from '@chakra-ui/react'
import React,{useEffect} from 'react'
import '../LetterAnimation.css'
import '../Style.css'

export default function Blog() {
    
    useEffect(() => {
        document.title = 'Blog - Tatvika Tattoo';
      }, []);
  return (
    <Box pt="80px"  bgGradient='linear(to-r, #ffff, #ffff)'>
        <Box  mt="100px">
            <Grid className='welcome' templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}>
                <GridItem w="100%" h="100%">
                    <Center>
                        <Heading fontSize={["xl","2xl"]} className='nn'>A Journey Beneath the Skin</Heading>
                    </Center>
                    <Center>
                        <Text  width={["90vw","90vw","80vw","40vw","600px"]} lineHeight="28px" mt="5px">Tattoos have transcended their traditional roots to become a widely embraced form of personal expression and artistry. These permanent body adornments have been around for centuries, each one telling a unique story, making them a fascinating facet of human culture. In this blog post, we'll dive into the world of tattoos, exploring their history, symbolism, and the intricate process of getting inked.</Text>
                    </Center>

                </GridItem>

                <GridItem w="100%" h="100%">
                    <Center>
                        <Heading fontSize={["xl","2xl"]} mt={["30px","30px","30px","0px"]} fontFamily="Montserrat">A Brief History of Tattoos</Heading>
                    </Center>
                    <Center>
                        <Text width={["90vw","90vw","80vw","40vw","600px"]} lineHeight="28px" mt="5px">Tattoos are ancient, with evidence of their existence dating back thousands of years. Their purposes have ranged from spiritual and cultural significance to rites of passage. Indigenous tribes, for example, have used tattoos to denote a person's tribe, rank, or life achievements. In some cultures, tattoos were even believed to hold protective or healing properties.</Text>
                    </Center>
                </GridItem>
            </Grid>
        </Box>

        <Box mt={["30px","30px","30px","100px"]}>
        <Grid className='welcome' templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}>
                <GridItem w="100%" h="100%">
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Center>
                            <Heading fontSize={["xl","2xl"]} fontFamily="Montserrat">The Art of Personal Expression</Heading>
                        </Center>
                    </Box>
                    <Center>
                        <Text width={["90vw","90vw","80vw","40vw","600px"]} lineHeight="28px" mt="5px">Today, tattoos are all about personal expression. Your tattoo can represent a piece of your life story, your beliefs, or your passions. From minimalist designs to intricate sleeves or full-back pieces, the possibilities are endless. Whether you want to commemorate a loved one, showcase your love for a particular hobby, or simply appreciate the beauty of body art, your tattoo can be a unique canvas for self-expression.</Text>
                    </Center>

                </GridItem>

                <GridItem w="100%" h="100%">
                    <Center>
                        <Heading fontSize={["xl","2xl"]} mt={["30px","30px","30px","0px"]} fontFamily="Montserrat">Choosing the Right Design</Heading>
                    </Center>
                    <Center>
                        <Text width={["90vw","90vw","80vw","40vw","600px"]} lineHeight="28px" mt="5px">Selecting the perfect design is a crucial step in the tattoo process. It's essential to think about the meaning behind your design, its placement on your body, and its long-term significance. You may want to consult with a professional tattoo artist who can offer advice on design, size, and placement, ensuring your tattoo complements your body and personality.</Text>
                    </Center>
                </GridItem>
            </Grid>
        </Box>

        <Box  mt={["30px","30px","30px","100px"]}>
        <Grid className='welcome' templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}>
                <GridItem w="100%" h="100%">
                    <Center>
                        <Heading fontSize={["xl","2xl"]} fontFamily="Montserrat">The Tattooing Process</Heading>
                    </Center>
                    <Center>
                        <Text  width={["90vw","90vw","80vw","40vw","600px"]} lineHeight="28px" mt="5px">Tattooing is a precise art form. It involves the use of a tattoo machine that delivers ink into the dermal layer of your skin, creating a permanent design. The process can be uncomfortable, as the needles puncture the skin, but skilled artists strive to make it as painless as possible. After the tattoo is complete, there's a healing period during which the skin may scab and peel. Proper aftercare is essential for preserving the tattoo's vibrancy and detail.</Text>
                    </Center>

                </GridItem>

                <GridItem w="100%" h="100%">
                    <Center>
                        <Heading fontSize={["xl","2xl"]} mt={["30px","30px","30px","0px"]} fontFamily="Montserrat">Symbolism and Meaning</Heading>
                    </Center>
                    <Center>
                        <Text width={["90vw","90vw","80vw","40vw","600px"]} lineHeight="28px" mt="5px">The meaning of a tattoo can vary widely. Some people choose symbols that reflect their cultural background, religious beliefs, or personal experiences. Others might opt for abstract or artistic designs open to interpretation. Whether it's a tribute to a loved one, a representation of a life lesson, or a mark of a personal achievement, tattoos are a powerful form of storytelling on your skin.</Text>
                    </Center>
                </GridItem>
            </Grid>
        </Box>

        <Box  mt={["30px","30px","30px","100px"]}   pb={["30px","30px","30px","100px"]}>
        <Grid className='welcome' templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}>
                <GridItem w="100%" h="100%">
                    <Center>
                        <Heading fontSize={["xl","2xl"]} fontFamily="Montserrat">A Lasting Impression</Heading>
                    </Center>
                    <Center>
                        <Text  width={["90vw","90vw","80vw","40vw","600px"]} lineHeight="28px" mt="5px">Tattoos are a unique way to carry meaningful stories and art with you wherever you go. They've come a long way from their traditional roots, now encompassing a vast array of styles, techniques, and personal significance. Before getting a tattoo, take your time to consider the design, the meaning behind it, and, most importantly, choose a reputable tattoo artist to ensure your vision is brought to life with skill and precision.</Text>
                    </Center>

                </GridItem>
                <GridItem w="100%" h="100%">
                   

                </GridItem>
            </Grid>
        </Box>
    </Box>
  )
}
