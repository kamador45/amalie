import {FC} from "react";
import styles from "../../styles/Advices.module.css";
import stepOne from "../../public/Step1.png";
import stepTwo from "../../public/Step2.png";
import stepThree from "../../public/Step3.png";
import {Image} from "@nextui-org/react";

export const Advices: FC = () => {

    const Steps = [
        {
            'id':1,
            'text':{
                'step_1':'Descarga la app y ubícate en United States esto es bastante importante.',
                'step_2':'Selecciona tus prendas favoritas',
            },
            'img':stepOne,
        },
        {
            'id':2,
            'text':{
                'step_1':'Envíanos los enlaces de cada articulo seguido de sus detalles en un mensaje como talla, color, cantidad, modelo de teléfono en el caso de ser funda. Enviarlo escrito en un mensaje ya que al abrir el enlace solo nos aparecerá el articulo seleccionado y no los detalles que deseas.',
                'step_2':'Deposita el total de la compra a cualquiera de nuestras cuentas.',
            },
            'img':stepTwo,
        },
        {
            'id':3,
            'text': {
                'step_1':'Envíanos el comprobante de deposito y escoge el servicio con el que desea hacer tu pedido.',
                'step_2':'Por Último, espera tu paquete en Nicaragua y cancelas el envío de usa a Nicaragua.'
            },
            'img':stepThree
        }
    ]

    return(
        <section className={styles['container-helpful']}>
            <div className={styles['steps-follow']}>
                <h2>Como realizar tu pedido?</h2>
            </div>
            <div className={styles['helpful-list']}>
                {
                    Steps.map(x => (
                        <div key={x.id} className={styles['helpful']}>
                            <Image width={250}  src={x.img.src} showSkeleton={true} maxDelay={10000} />
                            <div className={styles['helpful-subTitle']}>
                                <ol>
                                    <li>
                                        <p>{x.text.step_1}</p>
                                    </li>
                                    <li>
                                        <p>{x.text.step_2}</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}