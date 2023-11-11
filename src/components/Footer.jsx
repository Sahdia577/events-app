import { Text, Center } from '@chakra-ui/react'

export const Footer = () => {
    return (
        <Center bgColor="#606688">
        <Text
            fontSize={15}
            align="center"
            color="#FFF"
        >
            <br></br>
            ✉ Do you have any questions or feedback? Please let us know at: 
            <a href='mailto:events@hostingfolk.com'> events@hostingfolk.com</a>.
            We will reply within 3 working days. ✆ You can also call us at 055-386FUN.
            </Text>
        </Center>
    );
};