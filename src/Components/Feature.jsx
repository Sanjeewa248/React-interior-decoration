import React from "react";
import { feature } from "../Images";
import { features } from "../Data/dummy";
import { TiTick } from "react-icons/ti";
import "../Styles/feature.scss";
import Control from "./Control";

const Feature = () => {
	return (
		<div className="app__feature">
			<div className="feature__container">
				<div className="left__feature">
					<img src={feature} alt="" draggable={false} />
				</div>
				<div className="right__feature">
					<div className="right__text">
						<h1>
							Feature to help <br /> your team succeed
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quibusdam soluta dolorem facere, eos
							reiciendis dolorum. Quis aliquam numquam aliquid
							corporis culpa corrupti earum eum repellendus?
							Ducimus distinctio itaque error! Aliquam.
						</p>
					</div>
					<div className="feature__content">
						{features.map((feature, index) => (
							<div className="feature" key={index}>
								<TiTick />
								<div className="feature__text">
									<p>{feature}</p>
									<span>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Ipsa, nisi!
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<Control/>
		</div>
	);
};

export default Feature;
