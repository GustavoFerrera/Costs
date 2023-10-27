import styles from './Home.module.css'
import savings from '../../img/Screenshot_1.png'
import LinkButton from '../layout/LinkButton';
function Home () {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerencir os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img src={savings} alt='Costs' className={styles.img}/>
        </section>
    )
}
export default Home;