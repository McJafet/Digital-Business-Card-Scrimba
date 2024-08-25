import photo from "../../images/perfil.jpg";
import mailIcon from "../../images/Mail-Icon.png";
import inIcon from "../../images/In-Icon.png";
import "./Info.css";

export default function Info() {
  return (
    
    <div className="info-container">
        <img src={photo} alt="photo" className="info-img"/>
        <h1>Jafet Mendoza</h1>
        <h3>Frontend Developer</h3>
        <h5>jafet2195@gmail.com</h5>
        <div className="info-button-container">
            <a href="#" className="info-emailButton">
                <img src={mailIcon} alt="mail icon" />
                <span>Email</span>
            </a>
            <a href="#" className="info-linkedinButton">
                <img src={inIcon} alt="linkedin icon" />
                <span>Linkedin</span>
            </a>
        </div>
    </div>
    
  );
}