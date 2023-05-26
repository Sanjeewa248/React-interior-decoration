import React from "react";
import "../Styles/home.scss";
import { TiTick } from "react-icons/ti";

const Home = () => {
	return (
		<div className="app__home" id="home">
			<div className="home__text">
				<h1>Interior Decoration</h1>
				<h1>Make Your Life Easy</h1>
			</div>
			<div className="ticks__container">
				<p>
					<span>
						<TiTick />
					</span>
					Lifetime Support
				</p>
				<p>
					<span>
						<TiTick />
					</span>
					No NCC Register
				</p>
			</div>
			<div className="input__container">
				<input type="text" placeholder="Input your email" />
				<button>Try for Free</button>
			</div>
		</div>
	);
};

export default Home;
