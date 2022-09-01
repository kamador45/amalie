import {FC} from "react";
import {Image} from "@nextui-org/react";
import styles from "../../styles/Services.module.css";
//Load assets
import common from "../../public/common.png";
import quick from "../../public/quick.png";
import premium from "../../public/premium.png";


export const Services: FC = () => {
    //Load services
    const services = [
        {
            id:1,
            'name':'Normal',
            'img':common
        },
        {
            id:2,
            'name':'Quick',
            'img':quick
        },
        {
            id:2,
            'name':'Premium',
            'img':premium
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
                            <Image className={styles['image-services']} showSkeleton={true} maxDelay={10000}  src={x.img.src} alt={x.name}/>
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