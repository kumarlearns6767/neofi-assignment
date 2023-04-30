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
            <div className="card-content">
                <div className="currenct-selector">
                    <div className="current-value">
                        <span>
                            Current Value
                        </span>
                        <span>
                            ₹ 25000
                        </span>
                    </div>
                    <div className="cryptoCurrency">
                        <select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                </div>
                <div className="amount-invest-container">
                    <div className="amount-invest">
                        <h6>
                            Amount you want to invest
                        </h6>
                    </div>
                    <div className="cryptoCurrency">
                        <input placeholder="0.0" />
                    </div>
                </div>
                <div className="amount-invest-container">
                    <div className="amount-invest">
                        <h6>
                            Amount you want to invest
                        </h6>
                    </div>
                    <div className="cryptoCurrency">
                        <input placeholder="0.0" />
                    </div>
                </div>
            </div>
        </main>		
	);
}

export default Card;

