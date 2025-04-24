<?php

/**
Template Name: Industry Child K12
Template Post Type: post, page
 */
?>
<?php get_template_part('parts/header'); ?>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">


<style>
	.wrapper.k12 {
		margin: 0 auto;
		padding: 0;
		max-width: unset;

		h3 {
			font-size: 1.5rem;
			color: #00457C;
			line-height: 150%;

		}

		p {
			line-height: 150%;
		}

		.button {
			max-width: fit-content;
			margin: auto;
			padding: .8rem 1rem;
			font-size: 1.1rem;
		}
	}

	.hero {
		background: url(/wp-content/uploads/2025/04/main-banner.jpg) center/cover;
		height: 45vh;
		position: relative;
		z-index: 1;
		display: flex;
		align-items: flex-end;
		justify-content: center;

		.hero-content {
			background-color: #00457C;
			background-image: url(/wp-content/uploads/2025/04/icon-star-white.png);
			background-repeat: no-repeat;
			background-position: 1rem;
			background-size: 5.8rem;
			margin: 0 auto;
			width: 80%;
			padding: 1rem 1rem 1rem 10rem;

			h1,
			h2 {
				color: #fff !important;
				margin-bottom: .5rem !important;
				padding: 0 20px;
			}

			h1 {
				font-size: 1.5rem;
			}

			h2 {
				font-family: "Montserrat", sans-serif;
				font-weight: 100 !important;
				font-size: 2rem !important;

				span {
					background-color: #62BB21;
					padding: .5rem 1rem;
					margin-right: .3rem;

					&.decorative {
						background-color: #62BB21;
						width: .5rem;
						max-width: .5rem;
						padding: 4px 3px 5px 4px
					}
				}
			}

			.rotating-header {
				display: none;
				min-width: 21rem;
				text-align: center;

				&.active {
					display: inline-block;
					animation: fade 1s linear;
				}
			}

		}
	}

	.sub-banner,
	.benefits {
		width: 80%;
		margin: auto;
	}

	.sub-banner {
		display: flex;
		background-color: #F2F2F2;


		.graphic {
			flex-basis: 40%;

			img {
				width: 100%;
				height: auto;
			}
		}

		.copy {
			flex-basis: 60%;
			padding: 2rem;
			display: flex;
			flex-direction: column;
			gap: 2rem;



		}
	}

	.benefits {
		text-align: center;
		margin: 2rem auto;
		padding: 1rem;

		.benefits-container {
			display: flex;
			justify-content: space-between;
			gap: 2rem;
			margin-top: 2rem;

			.benefit {
				flex-basis: 50%;
				text-align: center;
				min-height: 23rem;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				max-width: 40rem;

				h3 {
					position: absolute;
					bottom: -1.6rem;
					max-width: 16rem;
					line-height: 120%;
					font-family: 'Montserrat', sans-serif;
					font-weight: 100;
				}

				&.participation {
					color: #fff;
					background: url(/wp-content/uploads/2025/04/icon-apples.png) no-repeat center/60%;
					position: relative;

					&:after {
						content: '';
						width: 4px;
						height: 50%;
						position: absolute;
						top: 25%;
						right: 0;
						background-color: #F2F2F2;

					}
				}

				&.scores {
					color: #fff;
					background: url(/wp-content/uploads/2025/04/icon-books.png) no-repeat center/60%;
				}

				.numberroll {
					color: #fff;
					font-size: 3rem;
					font-weight: 700;
					margin-left: 20%;
					margin-top: 6%;

				}
			}
		}

	}

	.mid-banner {
		width: 100%;
		margin: 2rem auto;
		/* background: url(/wp-content/uploads/2025/04/students-at-cafeteria-table.jpg) no-repeat center/100%; */
		height: 45vh;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		position: relative;
		overflow: visible;

		.mid-banner-video {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			z-index: 0;
		}

		.mid-headers {
			background-color: rgba(0, 69, 124, 0.8);
			width: 60%;
			padding: 2rem;
			text-align: center;
			max-height: 11rem;
			position: absolute;
			bottom: 0;
			z-index: 3;

			h3 {
				color: #fff;
				font-size: 1.5em;
				margin-bottom: .5rem;
			}

			h4 {
				color: #fff;
				font-family: 'Montserrat', sans-serif;
				font-weight: 100 !important;
				font-size: 1.3em;
				margin-bottom: .5rem;
			}
		}
	}

	.testimonials {
		width: 100%;
		margin: 2rem auto;
		text-align: center;
		padding: 2rem;
		position: relative;
		min-height: 36rem;

		h3,
		p {
			text-align: center;
		}

		.testimonial {
			position: absolute;
			padding: 1rem;
			margin-bottom: 1rem;
			box-shadow: 0.5rem 0.5rem 1.5rem #eee;
			width: 35%;
			height: fit-content;
			min-height: 13rem;

			&:nth-of-type(1) {
				top: 6rem;
				left: 10rem;
				z-index: 0;

				strong {
					color: #62BB21;
				}
			}

			&:nth-of-type(2) {
				top: 7rem;
				right: 5rem;
			}

			&:nth-of-type(3) {
				top: 17rem;
				left: 4rem;
				z-index: 1;
				background-color: #fff;
			}

			&:nth-of-type(4) {
				bottom: 1rem;
				right: 15rem;
				background-color: #fff;

				strong {
					color: #62BB21;
				}
			}

			p {
				line-height: 175%;

				strong {
					font-size: 1.2em;
					color: #00457C;
				}
			}

		}
	}

	.why-lti {
		background: url(/wp-content/uploads/2025/04/background-contact-form.jpg) no-repeat center/cover;
		width: 100%;
		text-align: center;
		padding: 2rem 0;

		h3.white {
			color: #fff;
		}
	}

	.tiles {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
		align-items: center;
		padding: 2rem 4rem;
		color: #fff;

		.tile {
			flex-basis: 22%;
			text-align: center;

			img {
				width: 100%;
			}

			p {
				background-color: #000;
				min-height: 5rem;
				padding: .5rem;
				margin-top: -2rem;
				opacity: 0.8;
				font-size: .8em;
			}
		}
	}

	.carousel {
		margin: 2rem auto;
	}


	.carousel-container {
		display: flex;
		/* animation: scroll 15s linear infinite; */
		/* animation-timing-function: ease-in-out; */
		overflow: hidden;
		width: 333%;
		height: 100%;
		position: relative;
		overflow: visible;

		&:hover {
			animation-play-state: paused;
		}

		gap: 2rem;
		padding: 0;
		justify-content: space-evenly;

		.carousel-item {
			flex-basis: 33%;
			position: relative;

			&:hover {
				cursor: pointer;

				img.small {
					border: 4px solid #62BB21;

				}

			}
		}
	}



	.serving-counters {
		width: 80%;
		margin: 2rem auto;
		text-align: center;
		padding: 2rem;

		h3 {
			text-align: center;
			margin-bottom: 2rem;
		}

		p {
			margin-bottom: 2rem;
		}

		.specline {
			background: url(/wp-content/uploads/2025/04/background-specline.png) no-repeat left/cover;
			height: fit-content;
			width: 100%;
			margin-bottom: 2rem;
		}

		.colorpoint {
			background: url(/wp-content/uploads/2025/04/background-colorpoint.png) no-repeat left/cover;
			height: fit-content;
			width: 100%;
			margin-bottom: 2rem;
		}

		.grab-and-go {
			background: url(/wp-content/uploads/2025/04/background-mobile-grab-go.png) no-repeat left/cover;
			background-color: #eee;
			height: fit-content;
			width: 100%;
			margin-bottom: 2rem;
		}

		.specline,
		.colorpoint,
		.grab-and-go {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			gap: 2rem;

			.logo {
				width: fit-content;
				max-width: 23rem;
				padding: 2rem;
			}

		}

		.teaser {
			background: #000;
			color: #fff;
			padding: 1rem;
			opacity: 0.8;
			flex-basis: 50%;
			text-align: left;
			font-size: .7em;
			margin: 1rem;

			.button {
				background: transparent;
				border: 2px solid #3A8886;
				font-size: 1em;
				margin-top: .5rem;

				&:hover {
					border-color: #62BB21;
				}
			}

			p {
				margin-bottom: unset
			}
		}
	}

	.wow-factor {
		display: flex;
		width: 80%;
		margin: 1rem auto;
		align-items: center;
		justify-content: center;
		gap: 1rem;

		div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			min-height: 22rem;
			flex-basis: 50%;
			position: relative;
			font-size: .9em;

			h3 {
				margin-bottom: 1rem;
			}
		}
	}

	.star {
		position: absolute;
		z-index: 1;

		&.small {
			top: 2rem;
			left: 40%;
			animation: pulsate 2s infinite;
			width: 3rem;

			&.second {
				animation: pulsate 1.5s infinite;
				bottom: 1rem;
				right: 2rem;
				top: unset;
				left: unset;
			}
		}

		&.large {
			bottom: 0;
			right: 4rem;
			animation: pulsate 3s infinite;
			width: 5rem;

			&.second {
				animation: pulsate 3.5s infinite;
				bottom: unset;
				right: unset;
				top: 0;
				left: 2rem;
			}
		}
	}

	.carousel-item img.large {
		display: none;
		min-width: 600px;
		position: absolute;
		top: -100px;
		left: -100px;
		z-index: 5;
		border: 10px solid #eee;

	}

	.carousel-item.show-large {
		img.large {
			display: block;
			animation: zoomin 1s linear;
		}

		/* &:after {
		content: "Click to close";
		width: fit-content;
		display: block;
		color: #fff;
		background-color: #00457C;
		box-shadow: 5px 5px 5px #ccc;
		position: relative;
		top: -4rem;
		left: 22rem;
		font-weight: 700;
		z-index: 6;
	} */

		img.small {
			display: none;
		}
	}

	.serving-technologies {
		display: flex;
		gap: 1rem;
		width: 80%;
		margin: 2rem auto 0;

		p {
			font-size: .9em;
		}

		div {
			background-color: #F2F2F2;
			padding: 2rem;
			flex-basis: 50%;

			h3,
			h3+p {
				margin-bottom: 1rem;
			}

			.serving-technology {
				background: #B1B1B1;
				color: #fff;
				display: flex;
				align-items: center;
				gap: 1rem;
				padding: 1rem;
				min-height: 6rem;
				justify-content: center;
				margin: 1rem auto;

				.brandname {
					font-size: 1.2rem;
					font-weight: 700;
					justify-content: center;
				}

				.description {
					font-size: .7em;
					line-height: 120%;
					padding: 0 1rem;
					border-left: 1px solid #000;
					display: none;
				}

				&:hover {
					background: #62BB21;

					.description {
						display: block;
					}
				}
			}
		}

		.warranty {
			display: flex;
			gap: 1rem;
			justify-content: center;
			align-items: center;
			padding: 1rem;
			height: 6rem;
			margin: 1rem auto;

			&:nth-of-type(1) {
				background: #053159;
			}

			&:nth-of-type(2) {
				background: #374B6E;
			}

			&:nth-of-type(3) {
				background: #5E6988;
			}

			.checkmark {
				display: block;
				width: 2rem;
				height: auto;
				flex-basis: 10%;
			}

			.warranty-info {
				flex-basis: 90%;
				background-color: transparent;
				color: #fff;
				padding-left: 5rem;

				h4 {
					font-size: 2rem;
					margin-bottom: .5rem;
				}

				span {
					font-size: .8rem;
				}
			}
		}

		&+.footnote {
			font-size: .8rem;
			text-align: center;
		}
	}

	.footer-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		color: #fff;
		margin-top: 2rem;
		padding: 1rem;
		background: url(https://lowtempind.com/wp-content/uploads/2025/04/background-contact-form-1.jpg) no-repeat center/cover;

		.copy {
			flex-basis: 50%;
			padding: 1rem;

			h3 {
				color: #fff;
				margin-bottom: 1rem;
			}

			p {
				margin-bottom: 1rem;
			}
		}

		.form {
			flex-basis: 50%;
			padding: 1rem;

			.button,
			input[type="submit"] {
				background-color: #62BB21;
				color: #fff;
				padding: 1rem 2rem;
				font-size: 1.2rem;
				margin-top: 1rem;
			}

			p {
				margin-bottom: .5rem;
			}
		}
	}

	.footer-menu-wrapper {
		margin-top: -1rem;
	}

	.wpcf7-not-valid-tip {
		color: yellow !important;
	}

	.wpcf7 form.invalid .wpcf7-response-output {
		background-color: #00457C !important;
	}


	/* Media Queries */
	@media screen and (max-width: 1280px) {
		.hero {
			.hero-content {
				width: 100%;
				max-height: 30%;
				background-image: unset;
				padding: .5rem;

				h1 {
					font-size: 1.1rem !important;
					text-align: center;
				}

				h2 {
					font-size: 1.3rem !important;
					text-align: center;

					span {
						display: inline-block;
						max-width: fit-content;
					}

					span.decorative {
						display: inline;
						padding: 0.4rem .1rem;
					}
				}
			}

		}

		.benefits {
			width: 100%;
			margin-bottom: 0;

			.benefits-container {
				.benefit {
					.numberroll {
						font-size: 2rem;
					}
				}
			}
		}

		.testimonials {
			.testimonial {
				position: unset;
				width: 60vw;
				margin: 1rem auto;
			}
		}

		.tiles {
			.tile {
				flex-basis: 33%;

				p {
					min-height: 6rem;
					font-size: .9em;
				}
			}
		}

		.serving-technologies {
			flex-direction: column;
		}

	}

	@media screen and (max-width:1024px) {
		.sub-banner {
			flex-direction: column;
		}

		.testimonials {
			font-size: .9rem;
		}
		.benefits {
			margin-bottom: 6rem;
		}

		.mid-banner {
			font-size: .8rem;
			margin-top: -5rem;

			.mid-headers {
				width: 100%;
				max-height: fit-content;
			}
		}

		.serving-counters {

			.specline,
			.colorpoint,
			.grab-and-go {
				flex-direction: column;
				align-items: flex-start;
				gap: 0;
				margin-bottom: 1rem;

				.teaser {
					flex-basis: 90%;
				}
			}
		}

		.wow-factor {
			display: block;
		}

	}

	@media screen and (max-width: 768px) {
		.benefits-container {
			flex-direction: column;

			.benefit {
				max-width: 30rem;
				&.participation::after {display: none}
			}
		}

		.sub-banner {
			width: 100%;
		}

		.testimonials {
			.testimonial {
				width: 80vw;
			}
		}

		.tiles {
			.tile {
				flex-basis: 80%;
			}
		}

		.serving-counters {

			.specline,
			.colorpoint,
			.grab-and-go {
				display: block;
				height: fit-content;
				padding-top: 2rem;

				.teaser {
					margin: 0;
				}
			}
		}
	}

	@media screen and (max-width: 480px) {
		.wrapper.k12 {
			h3 {
				font-size: 1rem;
			}
		}

		.benefits .benefit h3 {
			font-size: 1.5rem;
		}

		.hero {
			.hero-content {

				h2 {
					span {
						margin-top: .5rem;

						&.decorative {
							padding: .35rem .1rem;
						}
					}
				}
			}
		}

		.sub-banner .copy {
			font-size: .8rem;
			padding: 1rem;

			h3,
			.button {
				font-size: 1rem;
			}

		}

		.benefits {
			.benefits-container {
				.benefit {
					min-height: 16rem;
				}
			}
		}

		.testimonials {
			.testimonial {
				width: 85vw;
			}
		}

		.mid-banner {
			height: 35vh;

			.mid-headers {
				padding: .6rem;

				h3,
				h4 {
					font-size: 1.1em;
				}

				.button {
					font-size: .9em;
					padding: .6rem 3rem;
				}
			}
		}

		.tiles {
			.tile {
				flex-basis: 100%;
			}
		}

		.serving-counters {
			width: 100%;
		}

		.wow-factor {
			width: 95%;
			margin: auto;

			.copy {
				.star {
					display: none;
				}

				h3 {
					text-align: center;
				}
			}
		}
	}

	/*  Animations */
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}

		100% {
			transform: translateX(-100%);
		}
	}

	@keyframes fade {

		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes pulsate {

		0%,
		100% {
			opacity: 1;
		}

		50% {
			opacity: 0.2;
		}
	}

	@keyframes zoomin {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
</style>


<main id="main" role="main" class="<?php the_field('color_palette'); ?>">


	<div class="wrapper k12">
		<section class="hero">
			<div class="hero-content">
				<h1><?php the_title(); ?></h1>
				<h2>With Beautiful Serving Systems
					<span class="rotating-header active">Built to Last</span>
					<span class="rotating-header">Built in America</span>
					<span class="rotating-header">Built to Inspire Pride</span>
					<span class="decorative"></span>
				</h2>
			</div>
		</section>

		<section class="sub-banner">
			<div class="copy">
				<h3>What turns food into a meaningful meal?<br>
					The environment.</h3>
				<p>Whether you’re renovating or starting a new build, LTIss long-lasting and beautiful serving systems are designed to visually transform your foodservice experience into a welcoming environment that students and staff proudly call their school cafeteria.</p>

				<a href="#form-container" class="button green smooth-scroll">
					BEGIN YOUR TRANSFORMATION
				</a>


			</div>
			<div class="graphic">
				<img src="/wp-content/uploads/2025/04/students-carrying-food-trays.jpg" alt="Students carrying food trays" />
			</div>

		</section>

		<section class="benefits">
			<h3>How Does Your School Benefit from Beautiful Serving Systems?</h3>
			<p>With LTI serving counters and technology, you can serve life-changing meals day after day, year after year. </p>

			<div class="benefits-container">
				<div class="benefit participation">
					<p class="numberroll" data-percentage="46">46%</p>
					<h3>More Meal Participation</h3>
				</div>
				<div class="benefit scores">
					<p class="numberroll" data-percentage="17">17%</p>
					<h3>Higher Scores on Standardized Tests</h3>
				</div>
			</div>
		</section>


		<section class="mid-banner">


			<div class="mid-headers">
				<h3>Want more in-depth insights on how to <br>create a memorable cafeteria experience? </h3>
				<h4>[Title of the Long Form Document]</h4>
				<a href="" class="button green">
					CLICK HERE TO READ
				</a>
			</div>
			<video autoplay="" muted="" loop="" class="mid-banner-video">
				<source src="/wp-content/themes/lti-inc/images/students-at-table.mp4" type="video/mp4">
			</video>
		</section>

		<section class="testimonials">
			<h3>“Wow! Talk About a Total Transformation!”</h3>
			<p>Everything from higher participation rates to over-the-weekend installations, here’s why K-12 foodservice leaders are raving about LTI.</p>

			<div class="testimonial">
				<p><strong>"I am extremely excited for my students to be able to dine in such an exquisite environment that your team created. And it was all done over a weekend!"</strong></p>
				<p>- Craigmont High School Principal</p>
			</div>
			<div class="testimonial">
				<p><strong>"[LTI] is wonderful to work with and has a real sense of reality in the food industry market. They listen to our needs and wants and especially try to work within our budget. The team worked fast and installed over a weekend.”</strong></p>
				<p>- Thomas County Schools, GA</p>
			</div>
			<div class="testimonial">
				<p><strong>"LTI goes out of their way to work with us concerning installation of their products during weekends or down periods during our school year. Shelby County Schools would be pleased to recommend LTI concerning remodeling of school cafeterias."</strong></p>
				<p>- Shelby County Schools</p>
			</div>
			<div class="testimonial">
				<p><strong>"SpecLine serving lines came in perfectly and they are the most beautiful red you have ever seen. Our participation jumped at least 20%! And this was all done in a matter of hours!"</strong></p>
				<p>- Midfield City Schools, AL</p>
			</div>
		</section>

		<section class="why-lti">
			<h3 class="white">Why LTI Serving Systems?</h3>
			<div class="tiles">
				<div class="tile">
					<img src="/wp-content/uploads/2025/04/women-in-hallway.jpg" />
					<p>Made with Pride by a Woman-Owned Family Business In Operation for 75+ Years</p>
				</div>
				<div class="tile">
					<img src="/wp-content/uploads/2025/04/students-at-table-closeup.jpg" />
					<p>Made to Increase Meal Participation by Inspiring School Pride in Students and Staff</p>
				</div>
				<div class="tile">
					<img src="/wp-content/uploads/2025/04/warehouse.jpg" />
					<p>Made in America with High-Quality Standards for Simple Maintenance</p>
				</div>
				<div class="tile">
					<img src="/wp-content/uploads/2025/04/cafeteria-worker.jpg" />
					<p>Made with Warranty-Backed Durability Needed for K-12 Foodservice</p>
				</div>
			</div>
			<h3 class="white">Transform Your Cafeteria Experience <a href="#form-container" class="button green smooth-scroll">BEGIN</a></h3>

		</section>

		<section class="carousel">
			<h3>Schools Are Transforming the Way They Serve Their Students</h3>
			<div class="carousel-container">
				<div class="carousel-item">
					<img src="/wp-content/uploads/2025/04/cafeteria-food-bay-empty.jpg" class="small" alt="" />
					<img src="/wp-content/uploads/2025/04/cafeteria-food-bay-empty.jpg" class="large alt="" />
				</div>
				<div class=" carousel-item">
					<img src="/wp-content/uploads/2025/04/cafeteria-tables-empty.jpg" class="small" alt="" />
					<img src="/wp-content/uploads/2025/04/cafeteria-tables-empty.jpg" class="large alt="" />
				</div>
				<div class=" carousel-item">
					<img src="/wp-content/uploads/2025/04/cafeteria-food-bays-array.jpg" class="small" alt="" />
					<img src="/wp-content/uploads/2025/04/cafeteria-food-bays-array.jpg" class="large alt="" />
				</div>
				<div class=" carousel-item">
					<img src="/wp-content/uploads/2025/04/cafeteria-serving-counter.jpg" class="small" alt="" />
					<img src="/wp-content/uploads/2025/04/cafeteria-serving-counter.jpg" class="large alt="" />
				</div>
				<div class=" carousel-item">
					<img src="/wp-content/uploads/2025/04/cafeteria-food-serving-area.jpg" class="small" alt="" />
					<img src="/wp-content/uploads/2025/04/cafeteria-food-serving-area.jpg" class="large" alt="" />
				</div>
			</div>

		</section>

		<section class="serving-counters">
			<h3>Build Your Beautiful K-12 Serving SystemWithin Your Budget</h3>
			<p>When budgets are limited and every dollar must be justified, selecting the right school cafeteria equipment can be a challenge, and one that demands careful consideration.</p>

			<p>LTI’s serving counters and technologies have both the long-lasting performance and attention-grabbing design to keep everyone in your school in good spirits—all within a budget that works for you. </p>

			<div class="specline">
				<div class="logo">
					<img src="/wp-content/uploads/2025/04/logo-specline.png" alt="SpecLine Logo" />
				</div>
				<div class="teaser">
					<p>Our modular serving counters are built, assembled and tested in our Georgia factory to make installation as simple, fast and trouble-free as possible. SpecLine is a durable cafeteria counter available in laminate or stainless steel bodies to match your school’s aesthetic.</p>
					<a href="/product/specline/" target="_blank" class="button">LEARN MORE</a>
				</div>
			</div>
			<div class="colorpoint">
				<div class="logo">
					<img src="/wp-content/uploads/2025/04/logo-colorpoint.png" alt="ColorPoint Logo" />
				</div>
				<div class="teaser">
					<p>Built from virtually indestructible fiberglass, our extremely durable, modular serving counters tackle the daily demands of K-12 foodservice. Available in hundreds of colors, ColorPoint helps create an engaging and vibrant school cafeteria experience for decades. </p>
					<a href="/product/colorpoint/" target="_blank" class="button">LEARN MORE</a>
				</div>
			</div>
			<div class="grab-and-go">
				<div class="logo">
					<img src="/wp-content/uploads/2025/04/logo-grab-n-go.png" alt="Grab and Go Logo" />
				</div>
				<div class="teaser">
					<p>Our customizable mobile grab-and-go kiosks and carts give you the flexibility to serve snacks, breakfast and lunch—all with limited space and staff. Without the cost of infrastructure changes, you can add an extra point of service, reduce wait times and help increase meal participation.</p>
					<a href="/product/mobile-carts-and-kiosks/" target="_blank" class="button">LEARN MORE</a>
				</div>
			</div>
		</section>

		<section class="wow-factor">
			<div class="copy">
				<h3>Want your school's foodservice to have the biggest WOW factor? </h3>
				<p>Our premier SelectLine serving counters are fully customizable to help create the most spectacular foodservice environment for your students, teachers and staff. Create Your Custom Counter.</p>
				<img src="https://lowtempind.com/wp-content/uploads/2025/04/icon-star.png" alt="Star Icon" class="star large" />
				<img src="https://lowtempind.com/wp-content/uploads/2025/04/icon-star.png" alt="Star Icon" class="star small" />
			</div>
			<div class="graphic">
				<img src="https://lowtempind.com/wp-content/uploads/2025/04/cafeteria-big-counter.png" alt="Big counter" />
				<img src="https://lowtempind.com/wp-content/uploads/2025/04/icon-star.png" alt="Star Icon" class="star large second" />
				<img src="https://lowtempind.com/wp-content/uploads/2025/04/icon-star.png" alt="Star Icon" class="star small second" />
			</div>
		</section>

		<section class="serving-technologies">
			<div>
				<h3>Serve Hot, Cold and Frozen Food with LTI Serving Technologies</h3>
				<p>All of LTI’s hot and cold serving line counters and carts are available with our efficient serving technologies.</p>

				<div class="serving-technology">
					<p class="brandname">TempestAir</p>
					<p class="description">Ensure consistent and even temperatures in every pan with our flexible and refrigerated cold pans, which feature patented forced-air technology.</p>
				</div>

				<div class="serving-technology">
					<p class="brandname">ThermalWell</p>
					<p class="description">Conserve water and energy with our hot food well technology, which creates an ultra-efficient silicone heat blanket that can be used with or without water.</p>
				</div>
				<div class="serving-technology">
					<p class="brandname">QuickSwitch</p>
					<p class="description">Expand food choices or quickly replace items easily with our independent food wells that go from hot to cold to frozen in less than an hour. </p>
				</div>
			</div>
			<div>
				<h3>Long-Lasting Beauty. <br>No Warranty Worries.</h3>
				<p>Lipsum for balance.<br>
					More lipsum.</p>
				<div class="warranty">
					<img src="https://lowtempind.com/wp-content/uploads/2025/04/icon-checkmark.png" alt="Checkmark" class="checkmark" />
					<div class="warranty-info">
						<h4>5-Year</h4><span>Body Warranty</span>
					</div>
				</div>
				<div class="warranty">
					<img src="https://lowtempind.com/wp-content/uploads/2025/04/icon-checkmark.png" class="checkmark" alt="Checkmark" />
					<div class="warranty-info">
						<h4>5-Year</h4><span>Compressor Warranty</span>
					</div>

				</div>
				<div class="warranty">
					<img src="https://lowtempind.com/wp-content/uploads/2025/04/icon-checkmark.png" class="checkmark" alt="Checkmark" />
					<div class="warranty-info">
						<h4>2-Year</h4><span>Parts and Labor Warranty*</span>
					</div>
				</div>
			</div>
		</section>
		<p class="footnote">*Including QuickSwitch, TempestAir and ThermalWell Serving Technologies</p>



		<section id="form-container" class="footer-container">
			<div class="copy">
				<h3>How Can We Help YouBegin Your Transformation?</h3>
				<p>At LTI, we truly care about your school, students and staff. From our
					reps who quickly answer questions to our designers who draft with
					precision, we are obsessed with moving quickly to help make your
					cafeteria the heart of your school.</p>
				<p><strong>Looking to take the next step?
					</strong></p>
				<p>Please fill out our form and one of our responsive team members will
					make it their priority to get back to you as quickly as possible.
				</p>
			</div>
			<div class="form">
				<?php the_field('contact-form') ?>
			</div>

		</section>
	</div>
	'
</main><!-- / #main -->

<script>
	// JavaScript to handle the rotating header
	document.addEventListener('DOMContentLoaded', () => {
		const rotatingHeaders = document.querySelectorAll('.rotating-header');
		let currentIndex = 0;

		setInterval(() => {
			rotatingHeaders[currentIndex].classList.remove('active');
			currentIndex = (currentIndex + 1) % rotatingHeaders.length;
			rotatingHeaders[currentIndex].classList.add('active');
		}, 5000);
	});

	// JavaScript to animate percentage count
	document.addEventListener('elementInView', function() {
		const percentageElements = document.querySelectorAll('p.numberroll');
		percentageElements.forEach((element) => {
			if (element.classList.contains('animated')) {
				return;
			}
			element.classList.add('animated');
			let currentPercentage = 0;
			const targetPercentage = parseInt(element.getAttribute('data-percentage'));
			const duration = 1000; // Duration in milliseconds
			const increment = targetPercentage / (duration / 10);

			// Animate the percentage count
			const interval = setInterval(() => {
				currentPercentage += increment;
				if (currentPercentage >= targetPercentage) {
					currentPercentage = targetPercentage;
					clearInterval(interval);
				}
				element.textContent = Math.floor(currentPercentage) + '%';
			}, 10);
		});
	});

	// Function to check if an element is in the viewport
	function isInViewport(element) {
		const rect = element.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	// Add scroll event listener to trigger animation
	window.addEventListener('scroll', function() {
		const percentageElement = document.querySelector('p.numberroll');
		if (isInViewport(percentageElement)) {
			const event = new CustomEvent('elementInView', {
				detail: {
					element: percentageElement
				}
			});
			document.dispatchEvent(event);
		}
	});

	document.querySelectorAll('.smooth-scroll').forEach(el => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			const url = el.getAttribute('href');
			const scrollPx = document.querySelector(url).offsetTop;
			scrollTo({
				top: scrollPx,
				left: 0,
				behavior: "smooth"
			});
		});
	});

	// Infinite loop animation for carousel
	const carouselContainer = document.querySelector('.carousel-container');
	const carouselItems = Array.from(carouselContainer.children);

	// Duplicate carousel items for seamless looping
	carouselItems.forEach(item => {
		const clone = item.cloneNode(true);
		carouselContainer.appendChild(clone);
	});

	let scrollAmount = 0;

	function animateCarousel() {
		if (carouselContainer.classList.contains('paused')) {
			return;
		}

		scrollAmount -= 1; // Adjust the scroll speed here
		carouselContainer.style.transform = `translateX(${scrollAmount}px)`;

		// Reset scroll position seamlessly when it reaches the end
		if (Math.abs(scrollAmount) >= carouselItems[0].offsetWidth * carouselItems.length) {
			scrollAmount = 0;
			carouselContainer.style.transition = 'none';
			carouselContainer.style.transform = `translateX(${scrollAmount}px)`;
			requestAnimationFrame(() => {
				carouselContainer.style.transition = 'transform 0.1s linear';
			});
		}

		requestAnimationFrame(animateCarousel);
	}

	carouselContainer.querySelectorAll('.carousel-item').forEach(item => {
		item.addEventListener('mouseover', (event) => {
			event.stopPropagation();
			carouselContainer.classList.add('paused');
		});

		item.addEventListener('click', (event) => {
			event.stopPropagation();
			item.classList.toggle('show-large');
		});
	});

	carouselContainer.querySelectorAll('.carousel-item').forEach(item => {
		item.addEventListener('mouseleave', (event) => {
			event.stopPropagation();
			carouselContainer.classList.remove('paused');
			console.log(carouselContainer.querySelector('.show-large'));
			animateCarousel();
			setTimeout(() => {
				item.classList.remove('show-large');
			}, 1000);
		});
	});



	// Start the animation
	animateCarousel();
</script>

<?php get_template_part('parts/footer'); ?>