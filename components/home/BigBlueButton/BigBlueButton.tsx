import { ReactElement } from "react";
import '@/components/home/BigBlueButton/BigBlueButton.css'

interface Props{
    imagen: ReactElement;
    texto: string;
}

export default function BigBlueButton ({imagen, texto}: Props){
    return(
        <div className="blue-button-home">
            {imagen}
            <p>{texto}</p>
        </div>
    )
}