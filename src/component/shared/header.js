"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import headingImage from "@/assets/TheDragonNews.png";
const moment = require("moment");

const Header = () => {
  const date = moment().format("MMMM Do YYYY, h:mm:ss a");
  return (
    <Box className="py-5">
      <Container>
        <Box className="flex justify-center">
          <Image src={headingImage} width={400} height={400} alt="heading" />
        </Box>

        <Typography variant="body2" color="gray" textAlign="center">
          Journalism without Fear or Favour
        </Typography>

        <Box variant="body2" textAlign="center">
          {date}
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
