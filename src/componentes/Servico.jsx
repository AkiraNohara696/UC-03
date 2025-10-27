import Style from './css/Servico.module.css'
import Escudo from '../assets/img/escudo.png'
import Radar from '../assets/img/radar.png'
import Cloud from '../assets/img/cloud.png'

function Servico(){
    return(
        <>
            <section id='Servico' className={Style.Servico}>
            <h1>NOSSOS SERVIÇOS</h1>

            <div className={Style.ordem}>
                <div className={Style.card}>
                    <img src={Escudo} alt="escudo" />
                    <h2>Configuração e <br/>Segurança de Rede</h2>

                    <p>Implementamos redes seguras com roteadores, switches,
                         firewalls, VLANs e VPNs para garantir conectividade e proteção total.</p>

                    <button><a href="https://wa.me/5511953432545">ORÇAMENTO</a></button>

                    </div>

                      <div className={Style.card}>
                    <img src={Radar} alt="radar" />
                    <h2>Monitoramento e Desempenho</h2>

                    <p>Realizamos monitoramento contínuo com Zabbix,
                    Grafana e Prometheus, assegurando desempenho, disponibilidade e eficiência da sua rede.</p>

                    <button><a href="https://wa.me/5511953432545">ORÇAMENTO</a></button>
                </div>

                  <div className={Style.card}>
                    <img src={Cloud} alt="cloud" />
                    <h2>Infraestrutura Virtual e Integração Cloud</h2>

                    <p>Configuramos redes virtuais e integramos ambientes
                        locais e em nuvem, garantindo segurança, escalabilidade e alto desempenho.</p>

                   <button><a href="https://wa.me/5511953432545">ORÇAMENTO</a></button>
                </div>
                </div>
            </section>

        </>
    )
} 

export default Servico