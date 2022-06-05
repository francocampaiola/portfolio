import {
    useColorMode,
    useColorModeValue,
    IconButton,
    Tooltip
  } from "@chakra-ui/react";
  import { FaMoon, FaSun } from "react-icons/fa";
  
  export const ColorModeSwitcher = props => {
    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  
    const handleClick = () => {
      toggleColorMode();
    };
  
    return (
      <Tooltip>
        <IconButton
          size="md"
          fontSize="md"
          variant="ghost"
          color="current"
          marginLeft="2"
          onClick={handleClick}
          icon={<SwitchIcon />}
          aria-label={`Switch to ${text} mode`}
          _hover={{
            bg: useColorModeValue("gray.200", "gray.900")
          }}
          {...props}
        />
      </Tooltip>
    );
  };
