import type { NextPage } from 'next';
import { Maylayout } from '../Components/layouts';
import React from "react";
import {Portraint} from "../Components/ui/Portraint";
import {About} from "../Components/ui/About";
import {Services} from "../Components/ui/Services";
import {Advices} from "../Components/ui/Advices";


const Home: NextPage = () => {
  return(
    <Maylayout>
        <Portraint />
        <About />
        <Services />
        <Advices />
    </Maylayout>
  )
}

export default Home;