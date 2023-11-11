import { Input } from '@chakra-ui/react';

export const TextInput = ({ changeFn, ...props }) => {
    return(
        <Input
            name="searchBar"
            size="md"
            w={400}
            h={50}
            my={2}
            color="#000"
            fontSize={20}
            bg="#FFF"
            _hover={{
                border: "2px",
                borderColor: "#43035c"
            }}
            onChange={changeFn}
            {...props}
        />
    );
};
    
    