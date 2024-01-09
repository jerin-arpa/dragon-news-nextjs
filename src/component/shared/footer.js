"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, IconButton, Typography } from "@mui/material";

// icons
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  const navItems = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Pages",
      pathname: "/pages",
    },
    {
      route: "Category",
      pathname: "/category",
    },
    {
      route: "News",
      pathname: "/news",
    },
    {
      route: "About",
      pathname: "/about",
    },
    {
      route: "Contact",
      pathname: "/contact",
    },
  ];

  return (
    <Box className="bg-black px-2 py-14">
      <Container>
        <Box
          className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
            <FacebookOutlinedIcon></FacebookOutlinedIcon>
          </IconButton>
          <IconButton>
            <LinkedInIcon></LinkedInIcon>
          </IconButton>
          <IconButton>
            <InstagramIcon></InstagramIcon>
          </IconButton>
        </Box>

        <Box className="w-full text-center">
          {navItems.map((item) => (
            <Link key={item} href={item.pathname}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>

        <Typography variant="body2" color="gray" textAlign="center">
          @2023 the dragon news
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
