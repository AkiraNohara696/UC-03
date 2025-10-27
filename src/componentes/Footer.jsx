import Style from './css/Footer.module.css'
import logo from '../assets/img/Logo.png'

function Footer(){
    return(
        <>

        <footer id='contato'  className={Style.contato}>

            <img src={logo} alt="logo" />

            <div className={Style.rede}>
                <h2>Siga nossas redes</h2>
                <div className={Style.icons}>
                    <i class="fa-brands fa-instagram fa-2x"></i>
                    <i class="fa-brands fa-x-twitter fa-2x"></i>
                    <i class="fa-brands fa-facebook fa-2x"></i>
                    <i class="fa-brands fa-youtube fa-2x"></i>
                </div>
                <h2>Entre em Contato</h2>
                <h2 href="https://wa.me/5511953432545">(11) 95343-2545</h2>
                <h2>contato@wmsuport.com.br</h2>
            </div>
            <div className={Style.mapa}>

                    <h2>Mapa do Site</h2>
                    <a href="#home">Home</a>
                    <a href="#Servico">Serviço</a>
                    <a href="#sobre">Quem Somos</a>
                    <a href="#contato">Contatos</a>
            </div>

        </footer>

        </>
    )
}

export default Footer