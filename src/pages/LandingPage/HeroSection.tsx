import {
    Box,
    Text,
    Heading,
    Center,
    Image,
} from '@chakra-ui/react'
import heroImage from "@src/assets/hero-image.png"
import { HeroCTASvg } from '@src/components/svgs'

export const HeroSection = () => {
    return (
        <>
            <Center>
                <Heading as='h1' size='4xl' noOfLines={1}>
                    Make your home an ode to joy
                </Heading>
            </Center>
            <Box mt={10} mb={10}></Box>
            <Center>
                <Text maxW='45%' align="center">
                    Transforming Concepts into
                    Masterpieces: Elevating Spaces
                    through Impeccable Architectural
                    3D Modeling and Rendering
                    Services
                </Text>
            </Center>
            <Box mt={10} mb={24}></Box>
            <Box position="relative" >
                <Image objectFit='cover' src={heroImage} alt='Dan Abramov' />
                <Box position="absolute" top="-80px" left="150px">
                    <HeroCTASvg />
                </Box> 
            </Box>
        </>
    )
}
