<?php
/**
 * Template name: Careers
 */
?>
<?php get_template_part( 'parts/header' ); ?>

	<main id="main" role="main">
	
		<div class="wrapper">
			<div id="content" class="narrow">
				<!-- < ?php global $post; ?>
				< ?php if ( is_page() && $post->post_parent ) : ?>
					< ?php $parent_title = get_the_title($post->post_parent); ?>
					<h3 class="parent-title">< ?php echo $parent_title; ?></h3>
					<span class="divider"></span>
				< ?php endif; ?> -->
				<div class="bcnxt"><?php if( function_exists( 'bcn_display' ) ) bcn_display(); ?></div>
				<span class="divider"></span>	
				<h1><?php the_title(); ?></h1>
				<?php if ( has_post_thumbnail() ) { // check if the post has a Post Thumbnail assigned to it.
				the_post_thumbnail( 'full' );} ?>
				<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
					<?php the_content(); ?>
				<?php endwhile; ?>
			</div><!-- / #content -->
			
			<div id="sidebar">
				<?php dynamic_sidebar( 'page-sidebar' ); ?>
			</div><!-- / #sidebar -->
		</div><!-- / .wrapper -->
	
	</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>