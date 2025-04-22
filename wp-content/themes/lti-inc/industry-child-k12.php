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
		background: url(https://lowtempind.com/wp-content/uploads/2025/04/main-banner.jpg) center/cover;
		height: 45vh;
		position: relative;
		z-index: 1;
		display: flex;
		align-items: flex-end;
		justify-content: center;

		.hero-content {
			background-color: #00457C;
			background-image: url(https://lowtempind.com/wp-content/uploads/2025/04/icon-star-white.png);
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
						padding-right: 0;
						padding-left: .5rem;
					}
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

		.benefits-container {
			display: flex;
			justify-content: space-between;
			gap: 2rem;
			margin-top: 2rem;

			.benefit {
				flex-basis: 50%;
				text-align: center;
				min-height: 30vh;
				display: flex;
				justify-content: center;
				align-items: center;

				&.participation {
					color: #fff;
					background: url(https://lowtempind.com/wp-content/uploads/2025/04/icon-apples.png) no-repeat center/60%;
				}

				&.scores {
					color: #fff;
					background: url(https://lowtempind.com/wp-content/uploads/2025/04/icon-books.png) no-repeat center/60%;
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
		background: url(https://lowtempind.com/wp-content/uploads/2025/04/students-at-cafeteria-table.jpg) no-repeat center/100%;
		height: 45vh;
		display: flex;
		align-items: flex-end;
		justify-content: center;

		.mid-headers {
			background-color: rgba(0, 69, 124, 0.8);
			width: 60%;
			padding: 2rem;
			text-align: center;
			max-height: 11rem;

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
		min-height: 54vh;

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
				top: 8rem;
				left: 10rem;
				z-index: 0;

				strong {
					color: #62BB21;
				}
			}

			&:nth-of-type(2) {
				top: 10rem;
				right: 5rem;
			}

			&:nth-of-type(3) {
				top: 20rem;
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
		background: url(https://lowtempind.com/wp-content/uploads/2025/04/background-contact-form.jpg) no-repeat center/cover;
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
						padding: 0.55rem .1rem;
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


	}

	@media screen and (max-width:1024px) {
		.sub-banner {
			flex-direction: column;
		}

		.testimonials {
			font-size: .9rem;
		}

		.mid-banner {
			font-size: .8rem;
			margin-top: -5rem;

			.mid-headers {
				width: 100%;
				max-height: fit-content;
			}
		}

	}

	@media screen and (max-width: 768px) {
		.benefits-container {
			flex-direction: column;
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

	}

	@media screen and (max-width: 480px) {
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
	}
</style>


<main id="main" role="main" class="<?php the_field('color_palette'); ?>">


	<div class="wrapper k12">
		<section class="hero">
			<div class="hero-content">
				<h1><?php the_title(); ?></h1>
				<h2>With Beautiful Serving Systems <span>Built to Last</span><span class="decorative"></span></h2>
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
				<img src="https://lowtempind.com/wp-content/uploads/2025/04/students-carrying-food-trays.jpg" alt="Students carrying food trays" />
			</div>

		</section>

		<section class="benefits">
			<h3>How Does Your School Benefit from Beautiful Serving Systems?</h3>
			<p>With LTI serving counters and technology, you can serve life-changing meals day after day, year after year. </p>

			<div class="benefits-container">
				<div class="benefit participation">
					<p class="numberroll" data-percentage="47">47%</p>

				</div>
				<div class="benefit scores">
					<p class="numberroll" data-percentage="17">17%</p>

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
					<img src="https://lowtempind.com/wp-content/uploads/2025/04/students-at-table-closeup.jpg" />
					<p>Made to Increase Meal Participation by Inspiring School Pride in Students and Staff</p>
				</div>
				<div class="tile">
					<img src="https://lowtempind.com/wp-content/uploads/2025/04/warehouse.jpg" />
					<p>Made in America with High-Quality Standards for Simple Maintenance</p>
				</div>
				<div class="tile">
					<img src="https://lowtempind.com/wp-content/uploads/2025/04/cafeteria-worker.jpg" />
					<p>Made with Warranty-Backed Durability Needed for K-12 Foodservice</p>
				</div>
			</div>
			<h3 class="white">Transform Your Cafeteria Experience <a href="#form-container" class="button green smooth-scroll">BEGIN</a></h3>

		</section>

		<section id="form-container"></section>
	</div>
	'
</main><!-- / #main -->

<script>
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
</script>

<?php get_template_part('parts/footer'); ?>