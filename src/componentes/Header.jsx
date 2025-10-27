import Style from './css/Header.module.css'
import ft_logo from '../assets/img/Logo.png'

function Header() {
    return (
        <>
            <header>
                <img src={ft_logo} alt="logo" />

                <div className={Style.links}>
                    <a className={Style.des} href="#home">Home</a>
                    <a className={Style.des} href="#Servico">Serviço</a>
                    <a className={Style.des} href="#sobre">Quem Somos</a>
                    <a className={Style.des} href="#contato">Contatos</a>
                    <button><a href="https://wa.me/5511953432545">ORÇAMENTO</a></button>
                </div>
            </header>
        </>
    )
}

export default Header


