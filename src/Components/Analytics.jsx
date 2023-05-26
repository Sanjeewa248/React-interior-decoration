import React from "react";
import { analytics } from "../Data/dummy";
import { onephone } from "../Images";
import "../Styles/analytics.scss";

const Analytics = () => {
	return (
		<div className="app_analytics">
			<div className="analytics__container">
				<div className="left__analytics">
					<div className="left__text">
						<h1>Okay, lets see test numbers</h1>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Inventore dolor eveniet voluptates cupiditate
							modi, reprehenderit ea ullam natus laudantium quod.
							Autem explicabo voluptatibus minima corrupti
							similique possimus quibusdam vitae aliquid.
						</p>
					</div>
					<div className="left__analytics__container">
						{analytics.map((analytic, index) => (
							<div className="analytics__container" key={index}>
								<div className="analytics__icon">
									{analytic.desc}
								</div>
								<p>{analytic.name}</p>
							</div>
						))}
					</div>
				</div>
				<div className="right__analytics">
					<div className="img-container">
						<img src={onephone} alt="" draggable={false} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
