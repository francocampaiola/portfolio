import { background, extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                transitionProperty: "all",
                transitionDuration: "normal",
            }
        }
    },
    config : {
        disableTransitionOnChange: false
    }
})