import { Button as CButton } from '@chakra-ui/react'; 

export const Button = ({ ...props }) => (
    <CButton
        variant="ghost"
        w="130px"
        h="50px"
        fontWeight="semibold"
        fontSize={18}
        _hover={{
            border: "2px",
            borderColor: "#43035c"
        }}
        {...props}
    >
        {props.children}
    </CButton>
);
