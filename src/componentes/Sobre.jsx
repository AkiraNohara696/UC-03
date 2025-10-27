import Style from './css/Sobre.module.css'
import ft_mulher from '../assets/img/Mulher.png'

function Sobre(){
    return(
        <>

    <section id='sobre' className={Style.sobre}>
        <img src={ft_mulher} alt="mulher" />
        <div className={Style.texto}>
            <h1>QUEM SOMOS</h1>

            <p>Na W&M Support, oferecemos suporte técnico e 
                infraestrutura de TI para empresas. Com foco em eficiência, 
                segurança e inovação, garantimos que sua operação nunca pare.
                Cuidamos da sua tecnologia para que você cuide do seu negócio.</p>

            <button><a href="https://wa.me/5511953432545">ORÇAMENTO</a></button>
        </div>
            </section>
        

        </>
    )
}

export default Sobre