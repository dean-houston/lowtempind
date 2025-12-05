<?php
/**
 * Template Name: Home Page
 */
?>
<?php get_template_part( 'parts/header' ); ?>

<main id="main" role="main">

	<div id="content">
	
		<?php get_template_part( 'parts/hero-page' ); ?>
		
		<?php get_template_part( 'parts/blurb' ); ?>

		<?php get_template_part( 'parts/featured-content' ); ?>
		
		<?php get_template_part( 'parts/product-configurator' ); ?>

		<?php get_template_part( 'parts/cta' ); ?>
		
		<!-- < ?php get_template_part( 'parts/testimonials' ); ?> -->
		
		<?php get_template_part( 'parts/signposts' ); ?>
	
	</div> <!-- / #content -->
		
</main><!-- / #main -->

<script type="text/javascript" >
(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "07/15/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "See you next year at ANC!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());
</script>

<style type='text/css'>

/* general styling */
:root {
  --smaller: .75;
}


.countdown-container {
  color: #fff;
  margin: 0 auto;
  text-align: left;
}

#headline p {
  font-weight: normal;
  letter-spacing: .125rem;
  margin-bottom: 0;
  text-transform: uppercase;
}
#countdown ul {
	margin-left: 0;
}
#countdown li  {
  display: inline-block;
  font-size: .75em;
  list-style-type: none;
  padding: 0 1.5em 0 0;
  text-transform: uppercase;
}

#countdown li span {
  display: block;
  font-size: 2.0rem;
}


@media all and (max-width: 768px) {
  #headline p  {
    font-size: calc(1.5rem * var(--smaller));
  }
  
  #countdown li {
    font-size: calc(1.125rem * var(--smaller));
  }
  
  #countdown li span {
    font-size: calc(3.375rem * var(--smaller));
  }
}
</style>


<?php get_template_part( 'parts/footer' ); ?>