import Style from './css/Home.module.css' 
import ft_homem from '../assets/img/Homem.png'

function Home(){
    return(
        <>
        
        <section id='home'  className={Style.home}>

            <img src={ft_homem} alt="homem" />

            <div className={Style.texto}>

                <h1>Tecnologia que mantém sua empresa em movimento. <br/>
                Aluguel, manutenção e suporte técnico para empresas</h1>

               <button><a href="https://wa.me/5511953432545">ORÇAMENTO</a></button>

            </div>

        </section>

        </>
    )
}

export default Home