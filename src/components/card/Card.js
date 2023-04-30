import "./card.css";
import cryptologo from "../../assets/logo/cryptoLogo.png"
// import neofilogo from "../../assets/logo/neofiLogo.png"
// import { Link } from 'react-router-dom';

function Card() {
	return (
		<main className="main-container">
            <div className="card">
                <div className="dp-container">
                    <img src={cryptologo} alt="logo" className="brand_logo"/>
                </div>
            </div>
        </main>		
	);
}

export default Card;

