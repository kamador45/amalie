import { Button, Image } from "@nextui-org/react";
import Link from "next/link";
import { FC } from "react";
import logo from "../../public/Amalie-Single.png";
import styles from '../../styles/Contact.module.css';

export const Contact: FC = () => {
    return(
        <section className={styles['container-contact']}>
            <div className={styles['container-title-contact']}>
                <h2>Contáctanos</h2>
            </div>

            <div className={styles['container-split-screen']}>
                <div className={styles['container-split-1']}>
                    <Image src={logo.src} width={500} height={500}/>
                </div>
                <div className={styles['container-split-2']}>
                    <div className={styles['container-button']}>
                        <Link href={'https://wa.me/58167427'} target={"_blank"}>
                            <Button size={'xl'} css={{background:'#fff', color:'#111'}}>
                                Chat WhatsApp
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}