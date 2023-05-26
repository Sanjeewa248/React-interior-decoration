import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ParallaxProvider} from 'react-scroll-parallax';
import React from "react";
import "../Styles/dashboardPreview.scss";
import {
	layer1,
	layer2,
	layer3,
	layer4,
	layer5,
	layer6,
	layer7,
} from "../Images";

const DashboardPreview = () => {
	return (
		<div className="app__dashboard">
			<Parallax pages={3} style={{ top: "0", left: "0" }} class="animation">
				<ParallaxLayer offset={0} speed={0.1} x={-100} z={-1}>
					<div className="animation__layer parallax" id="layer1"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.3} x={50} z={0}>
					<div className="animation__layer parallax" id="layer2"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={-0.2} x={-30} z={-3}>
					<div className="animation__layer parallax" id="layer3"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.2} x={80} z={-4}>
					<div className="animation__layer parallax" id="layer4"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.25} x={-60} z={-5}>
					<div className="animation__layer parallax" id="layer5"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.4} x={-70} z={-6}>
					<div className="animation__layer parallax" id="layer6"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.35} x={90} z={-7}>
					<div className="animation__layer parallax" id="layer7"></div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
};


export default DashboardPreview;
