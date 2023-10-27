import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
function Footer() {
    const linkedin = "https://www.linkedin.com/in/gustavo-ferreira-do-nascimento-0916b11a2/";
    const iconStyle = {
        cursor: "pointer",
      };
    
    const linkedinOpen = () => {
        window.open(linkedin, "_blank");
    };
    return (
    <footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>
                <FaFacebook/>
            </li>
            <li>
                <FaInstagram/>
            </li>
            <li>
                <FaLinkedin style={iconStyle} onClick={linkedinOpen}/>
            </li>
        </ul>
        <p className={styles.copy_right}><span>Costs</span> &copy; 2023</p>
    </footer>)
}

export default Footer