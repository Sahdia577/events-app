import { Text  } from '@chakra-ui/react';

export const LabelText = ({ ...props }) => {
return (
    <Text {...props}
        fontSize={"20"}
        fontWeight={"600"}
        color='#43035c'
    >
        {props.children}
    </Text>
    );
};