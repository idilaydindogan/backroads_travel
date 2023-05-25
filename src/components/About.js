import React from "react";
import aboutImg from "../images/about.jpeg";
import Title from "./Title";

function About() {
	return (
		<section className="section" id="about">
			<Title title="about" subTitle="us" />
			<div className="section-center about-center">
				<div className="about-img">
					<img src={aboutImg} className="about-photo" alt="awesome beach" />
				</div>
				<article className="about-info">
					<h3>explore the difference</h3>
					<p>
						From dense forests to vast oceans, it unveils breathtaking
						landscapes, diverse wildlife, and a profound connection to the
						Earth's intrinsic beauty.
					</p>
					<p>
						It allows us to immerse ourselves in the serenity of untouched
						wilderness, sparking a sense of wonder, inspiring conservation, and
						reminding us of our harmonious coexistence with the natural world.
					</p>
					<a href="#home" className="btn">
						read more
					</a>
				</article>
			</div>
		</section>
	);
}

export default About;
