import type { NextPage } from 'next';
import { Maylayout } from '../Components/layouts';
import React from "react";
import {Portraint} from "../Components/ui/Portraint";

const Home: NextPage = () => {
  return(
    <Maylayout>
        <Portraint />
    </Maylayout>
  )
}

export default Home;