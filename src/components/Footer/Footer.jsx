import './Footer.css';
import twitter from '../../images/Twitter-Icon.png';
import facebook from '../../images/Facebook-Icon.png';
import instagram from '../../images/Instagram-Icon.png';
import github from '../../images/GitHub-Icon.png';


export default function Footer() {
    return (
        <footer className='footer-container'>
            <img src={twitter}alt="twitter icon" />
            <img src={facebook} alt="facebook icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={github} alt="github icon" />
        </footer>
    )
}