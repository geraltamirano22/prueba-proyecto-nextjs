import Image from "next/image";
import ClearButton from "@/components/home/clear-button-header/ClearButtonHeader";
import BigBlueButton from "@/components/home/BigBlueButton/BigBlueButton";
import { BiPackage } from "react-icons/bi";
import { BiMap } from "react-icons/bi";
import { FaTruck } from "react-icons/fa6";
import '@/app/page-home.css'



export default function Home() {
  return (
    <>
      <header className="header-home">
        <nav>
          <ul className="links-header-home">
          <li><img className="logo-empresa" src="" alt="Logo de empresa" /></li>
            <div className="links-header-1">
              <li><a href="">Inicio</a></li>
              <li><a href="">Realizar Envio</a></li>
              <li><a href="">Conductores</a></li>
              <li><a href="">API</a></li>
            </div>
            <div className="links-header-2">
              <li><a href="">Iniciar Sesion</a></li>
              <li><a href=""><div className="button-register">Registrarse</div></a></li>
            </div>
          </ul>
        </nav>
      </header>
      <main>
      
        <section className="home-1">
          <div className="text-home-1">
            <h1>Envios rapidos y seguros</h1>
            <div className="text-img-home-1">
              <img src="" alt="Imagen de ruta de envio"/>
              <h3>Seguí tu envio</h3>
            </div>
          </div>
          <form>
            <div className="input-conteiner">
              <input type="text" id="cod-seg" name="cod-seg" value="" placeholder="Ingrese su numero de seguimiento"/>
              <button className="button-seguim" type="submit"></button>
            </div>
          </form>
        </section>

        <section className="home-cards">
          <BigBlueButton texto="Hacer un envio" imagen={<BiPackage/>} />
          <BigBlueButton texto="Seguir mis envios" imagen={<BiMap/>} />
          <BigBlueButton texto="Portal de conductores" imagen={<FaTruck/>} />
        </section>

      </main>
    </>
  );
}
