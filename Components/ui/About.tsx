import {FC} from "react";
import styles from "../../styles/about.module.css";

export const About: FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.aboutAmalie}>
                <div className={styles['row-1']}>
                    <div className={styles.title}>
                        <h2>Ques es Amalie?</h2>
                    </div>
                    <div className={styles['explain-amalie']}>
                        <p>En Amalie traemos tus artículos de SHEIN China,
                            al mismo precio de la app + costo de envío de USA a Nicaragua
                            el cual se paga según el peso de tu paquete y el servicio de importación que escogiste,
                            no es necesario que tengas tarjeta de crédito.
                        </p>
                    </div>
                </div>
                <div className={styles['row-2']}>
                    <div className={styles.title}>
                        <h2>Ques es SHEIN?</h2>
                    </div>
                    <div className={styles['explain-shein']}>
                        <p>
                            SHEIN es una app especializada en ofrecer artículos de moda rápida
                            donde encontraras desde ropa hasta artículos de papelería, accesorios y muchísimo más,
                            en tendencia y lo mejor de todo es que a costos muy bajos.
                        </p>
                        <p>Estos Artículos vienen desde China de Donde es esta app y nosotros te lo traemos a Nicaragua
                            a costos bajos y con garantía del 100% de tu compra en caso de que el proceso de
                            importación presente problemas como paquetes extraviados, el cual crea una gran oportunidad
                            para comenzar a emprender, de la mano de quien cuidara tu inversión,
                            lo mejor es que no tenemos mínimo de compra y ofrecemos descuentos en el precio de envío a
                            partir de compras mayores a $50.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}