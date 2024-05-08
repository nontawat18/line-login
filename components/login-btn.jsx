"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Logo from "../assets/images/next.svg";
import Image from "next/image";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Component() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        <div className="card-profile flex min-h-screen flex-col justify-between p-24">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Grid item xs={11} md={11}>
                <img src={session.user.image} alt="" className="img-profile" />
                <br />
                <br />

                <strong className="texe-header">{session.user.name}</strong>
                <br />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, quis inventore laborum nam sunt incidunt dolore
                  commodi! Quidem quisquam, error eveniet dicta, ipsum sint
                  incidunt porro expedita recusandae numquam corporis.
                </span>
              </Grid>
              <Grid
                item
                xs={1}
                md={1}
                justifyContent="center"
                alignItems="center"
              >
                <IconButton aria-label="delete" onClick={() => signOut()} >
                  <LogoutIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={4} md={4}>
                <div className="card-sub flex flex-col items-center">
                  <strong className="texe-header">103</strong>
                  <span>Post</span>
                </div>
              </Grid>
              <Grid item xs={4} md={4}>
                <div className="card-sub flex flex-col items-center">
                  <strong className="texe-header">10k</strong>
                  <span>Friends</span>
                </div>
              </Grid>
              <Grid item xs={4} md={4}>
                <div className="card-sub flex flex-col items-center">
                  <strong className="texe-header">100k</strong>
                  <span>Like</span>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="card-login flex min-h-screen flex-col items-center justify-between p-24">
        <Image
          src={Logo}
          className=" flex flex-col items-center justify-between"
          alt="Picture of the author"
        />
        <h1>Exam Login with Line</h1>

        <button onClick={() => signIn()} className="login-btn">
          Sign in
        </button>
      </div>
    </>
  );
}
