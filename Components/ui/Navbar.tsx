import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Navbar.module.css";
import logo from "../../public/Amalie.png";

export const NavbarComponent: FC = () => {

    //define list menu
    const menuItems = [
        {
            'id':1,
            'text':'Inicio',
            'href':'/'
        },
        {
            'id':2,
            'text':'Nosotros',
            'href':'/nosotros'
        },
        {
            'id':3,
            'text':'Servicios',
            'href':'/servicios'
        },
        {
            'id':4,
            'text':'Contacto',
            'href':'/contacto'
        },
    ];

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
                    {
                        menuItems.map(x => (
                            <li key={x.id}>
                                <Link href={x.href}>
                                    <a>{x.text}</a>
                                </Link>
                            </li>
                        ))
                    }
                </div>
            </ul>
        </nav>
    )
}
