import type { NextPage } from 'next';
import { Maylayout } from '../Components/layouts';
import React from "react";
import {Portraint} from "../Components/ui/Portraint";
import {About} from "../Components/ui/About";
import {Services} from "../Components/ui/Services";


const Home: NextPage = () => {
  return(
    <Maylayout>
        <Portraint />
        <About />
        <Services />
    </Maylayout>
  )
}

export default Home;