<?php
/**
Template Name: Product Line Type
Template Post Type: product
 */
?>
<?php get_template_part( 'parts/header' ); ?>
	
<main id="main" role="main">

	<div id="content">

		<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
		<?php endwhile; wp_reset_query(); ?>
		
		<?php get_template_part( 'parts/hero-product' ); ?>	
	
		<!-- Check if post content is empty in WordPress -->
		<?php $content = get_post()->post_content;
		if(empty($content)):?>

		<?php else:?>
		
			<div class="content">
				<div class="wrapper">
					<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
						<?php the_content(); ?>
					<?php wp_reset_query(); ?>
					<?php endwhile;  ?>
					
					<?php $intro_button_label = get_field('intro_button_label'); ?>
					<?php if(!empty($intro_button_label)): ?>
					<a class="button" style="margin-top: 30px;" href="<?php the_field('intro_button_link'); ?>"><?php the_field('intro_button_label'); ?></a>
					<?php endif; ?>
					
				</div><!-- / .wrapper -->
			</div><!-- / .content -->
			
		<?php endif;?>
		
		<!-- via https://www.webdesign101.net/check-if-post-content-is-empty-in-wordpress-solved/ -->
		
		<?php get_template_part( 'parts/featured-media' ); ?>
		<?php get_template_part( 'parts/featured-products' ); ?>	
		<?php get_template_part( 'parts/product-configurator' ); ?>
		<?php get_template_part( 'parts/featured-content' ); ?>
		
	</div><!-- / #content -->
		
</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>