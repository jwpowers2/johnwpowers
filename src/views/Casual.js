import {useState} from 'react';
import { Container } from "@mui/material";
import Ticker from "../components/Ticker";

export default function Casual() {
  return (
    <>
    <Container>
        <h1>casual</h1>
        <Ticker arr={["one","two","three","four","five","six","seven"]}/>
    </Container>
    </>
  )
}