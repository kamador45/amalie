import {FC} from "react";
import portraintPic from "../../public/portraint.png";
import styles from "../../styles/Portraint.module.css";
import {TitleApp} from "./Title";


export const Portraint: FC = () => {
    return(
        <section className={styles.container}>
            <div className={styles.containerLogo}>
                <TitleApp />
                <img src={portraintPic.src} />
            </div>
        </section>
    )
}