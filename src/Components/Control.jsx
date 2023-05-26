import React from "react";
import { controls } from "../Data/dummy";
import "../Styles/control.scss";

const Control = () => {
	return (
		<div className="feature__controls">
			<div className="control__container">
				<div className="control__text">
					<h1>Control in one place</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Nam enim, nesciunt nobis dolores sapiente harum
						corporis ipsa autem vitae deleniti.
					</p>
					<button>Start 14 Days Trial</button>
				</div>
				<div className="control__content">
					{controls.map((control, index) => (
						<div className="control" key={index}>
							<div className="control__icon">
								<control.icon />
							</div>
							<div className="control__text__content">
								<p>{control.name}</p>
								<span>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quo similique, natus
									dignissimos tempora repellendus, nam
									praesentium, suscipit pariatur aut earum
									exercitationem commodi illo! Rem quasi
									reprehenderit ipsam at. Ex, minus.
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Control;
