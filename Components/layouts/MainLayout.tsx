import Head from "next/head";
import React, { FC } from "react";
import {NavbarComponent} from "../ui";


//Define props
interface Props {
    children: React.ReactNode;
}

export const Maylayout: FC<Props> = ({children}) => {
    return(
        <>
            <Head>
                <title>Amalie</title>
                <meta name="author" content="Amalie, Sheein" />
                <meta name="description" content="Amalie is an asistant of Sheein in Nicaragua"/>
                <meta name="keyword" content="Sheein, Amalie"/>
            </Head>
            <main>
                {/* Navbar */}
                <NavbarComponent/>
                { children }
            </main>
        </>
    )
}