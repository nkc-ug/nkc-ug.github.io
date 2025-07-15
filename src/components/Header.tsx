// src/components/Header.jsx
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, Drawer, Link } from "@mui/material";
import nkcugLogo from "../assets/NKCUG_DP.svg";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const nav = useNavigate();
  const showShinkan = import.meta.env.VITE_SHOW_SHINKAN === "true";
  const PAGE_LINK = [
    { name: "トップへ", link: "/" },
    { name: "アカウント一覧", link: "/Account" },
    { name: "イベント一覧", link: "/Event" },
    { name: "入部希望者向け", link: "/Welcome" },
  ];
  return (
    <AppBar
      position="static"
      sx={{
        padding: 0,
        backgroundColor: "rgb(192,192,192)",
        textAlign: "left",
      }}
    >
      <Toolbar>
        <Link
          href="/"
          color="inherit"
          underline="none"
          sx={{
            flexGrow: 1,
          }}
        >
          <Box
            component="img"
            src={nkcugLogo}
            alt="NKC-UG Logo"
            style={{ height: "40px" }}
          />
        </Link>
        <Box
          sx={{
            "@media screen and (max-width:930px)": {
              display: "none",
            },
          }}
        >
          {showShinkan && (
            <Button
              variant="outlined"
              onClick={() => {
                nav("/NewStudent");
              }}
            >
              新入生の方へ
              <ArrowRightIcon />
            </Button>
          )}
          {PAGE_LINK.map((value, key) => {
            return (
              <Button
                onClick={() => {
                  nav(value.link);
                }}
                sx={{
                  padding: 2,
                  color: "rgb(255,255,255)",
                }}
                key={key}
              >
                {value.name}
              </Button>
            );
          })}
        </Box>
        <Box
          sx={{
            "@media screen and (min-width:931px)": {
              display: "none",
            },
          }}
        >
          <Hamburger toggled={isOpen} toggle={setOpen} size={40} />
          <Drawer
            open={isOpen}
            anchor="right"
            sx={{
              "@media screen and (min-width:931px)": {
                display: "none",
              },
            }}
          >
            <Box
              sx={{
                width: "48px",
                margin: "0.5rem 0.5rem 0.5rem auto",
              }}
            >
              <Hamburger toggled={isOpen} toggle={setOpen} size={40} />
            </Box>
            {PAGE_LINK.map((value, key) => {
              return (
                <Button
                  onClick={() => {
                    nav(value.link);
                  }}
                  sx={{
                    margin: 3,
                    color: "rgb(0,0,0)",
                  }}
                  key={key}
                >
                  {value.name}
                </Button>
              );
            })}
            {showShinkan && (
              <Button
                sx={{ margin: "2rem" }}
                variant="outlined"
                onClick={() => {
                  nav("/NewStudent");
                }}
              >
                新入生の方へ
                <ArrowRightIcon />
              </Button>
            )}
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
