import React from "react";
import "../Styles/distribution.scss";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import { twophones } from "../Images";

const Distribution = () => {
	return (
		<div className="app__distribution">
			<div className="distribution__container">
				<div className="left__distribution">
					<div className="distribution__text">
						<h1>Test also works on your phone</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Fuga excepturi asperiores inventore, animi
							vero quisquam praesentium dicta, repellat iusto
							fugiat cupiditate accusamus. Consequuntur sint
							necessitatibus id voluptatibus adipisci aliquid
							ratione!
						</p>
					</div>

					<div className="distribution__buttons">
						<button>
							<BsApple />
							Download App
						</button>
						<button>
							<IoLogoGooglePlaystore />
							Download App
						</button>
					</div>
				</div>
				<div className="right__distribution">
					<img src={twophones} alt="" draggable={false} />
				</div>
			</div>
		</div>
	);
};

export default Distribution;
