import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6rem"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          UniVerse
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreen ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{mb:"1.5rem"}}>
          Welcome To UniVerse, the Social Media for every World!!!
        </Typography>
        <Form>

        </Form>
      </Box>
    </Box>
  );
};

export default LoginPage;
