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
		
		<?php get_template_part( 'parts/testimonials' ); ?>
		
		<?php get_template_part( 'parts/signposts' ); ?>
	
	</div> <!-- / #content -->
		
</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>