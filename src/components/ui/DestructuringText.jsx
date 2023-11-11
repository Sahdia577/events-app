import { Text  } from '@chakra-ui/react';

export const DestructuringText = ({ ...props }) => {
    return (
        <Text {...props}
            fontSize={"20"}
            fontWeight={"600"}
            color="#000"
        >
            {props.children}
        </Text>
        );
    };