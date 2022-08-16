import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Navbar.module.css";
import logo from "../../public/Amalie.png";

export const NavbarComponent: FC = () => {
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href={'/'}>
                    <a>
                        <Image width={'100%'}  height={'65%'} src={logo} />
                    </a>
                </Link>
            </div>
            <ul className={styles["nav-links"]}>
                <input className={styles.checkbox} type={'checkbox'} id={'checkbox_toggle'} />
                <label form={'checkbox_toggle'} className={styles.hamburger}>&#9776;</label>
                <div className={styles.menu}>
                    <li>
                        <Link href={'home/'}>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'about/'}>
                            <a>About Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'services/'}>
                            <a>Services</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'contact/'}>
                            <a>Contact</a>
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}
