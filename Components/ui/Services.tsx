import {FC} from "react";
import {Image} from "@nextui-org/react";
import styles from "../../styles/Services.module.css";
//Load assets
import maritimo from '../../public/ship.png';
import air from '../../public/airplane.png';

export const Services: FC = () => {
    //Load services
    const services = [
        {
            id:1,
            'name':'MARÍTIMO',
            'img':maritimo
        },
        {
            id:2,
            'name':'AEREO',
            'img':air
        },
    ];

    return(
        <section className={styles['container-services']} >
            <div className={styles['container-title-services']}>
                <h2>Nuestros Servicios</h2>
            </div>
            <div className={styles['services-list']}>
                {
                    services.map(x => (
                        <div key={x.id} className={styles['services-one']}>
                            <Image width={190} showSkeleton={true} maxDelay={10000}  src={x.img.src} alt={x.name}/>
                            <div className={styles['services-one-title']}>
                                <h3>{x.name}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}