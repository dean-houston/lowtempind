<?php
/**
 * Template name: Gallery Landing
 */
?>
<?php get_template_part( 'parts/header' ); ?>
	
	<main id="main" role="main">
		
		<div id="content">
		
			<div class="wrapper">	

				<div class="bcnxt"><?php if( function_exists( 'bcn_display' ) ) bcn_display(); ?></div>
				<span class="divider"></span>
				<h1><?php the_title(); ?></h1>
				<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
					<?php the_content(); ?>
				<?php endwhile; wp_reset_query(); ?>
			</div><!-- / .wrapper -->
	
		</div><!-- / #content -->
		
	</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>