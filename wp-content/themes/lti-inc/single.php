<?php
/**
 * The Template for displaying all single posts
 */
?>
<?php get_template_part( 'parts/header' ); ?>

<main id="main" role="main">
	
	<div class="wrapper">
		<div id="content" class="narrow">
			<div class="bcnxt"><?php if( function_exists( 'bcn_display' ) ) bcn_display(); ?></div>
			<span class="divider"></span>	
			<h1><?php the_title(); ?></h1>
			<date><?php the_time('F j, Y'); ?></date>
			<div style="<?php the_field('display_post_thumbnail'); ?>;">
				<?php if(has_post_thumbnail()): ?>
					<?php the_post_thumbnail('blog-image'); ?>
				<?php endif; ?>
			</div>

			<?php $embed_iframe = get_field("embed_iframe"); ?>
			<?php if(!empty($embed_iframe)): ?>				
			<figure>
				<div class="video-embed" style="width: 100%; margin-right: 0; margin-bottom: 25px;">
					<div class="video-container">
						<div class="video-container"><iframe width="560" height="315"  src="<?php the_field('embed_iframe'); ?>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
					</div>
				</div>
			</figure>
			<?php endif; ?>

		<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
			<?php the_content(); ?>
		<?php endwhile; ?>
		
		</div><!-- / #content -->
		
		<div id="sidebar" style="background-color: transparent;">
			<!-- < ?php dynamic_sidebar( 'blog-sidebar' ); ?> -->
		</div><!-- / #sidebar -->
		
	</div><!-- / .wrapper -->

</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>