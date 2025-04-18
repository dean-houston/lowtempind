<?php
/**
 * Template name: Default Template No Splash
 */
?>
<?php get_template_part( 'parts/header' ); ?>

	<main id="main" role="main">
	
		<div class="wrapper">
			<div id="content" class="narrow">
				<?php global $post; ?>
				<?php if ( is_page() && $post->post_parent ) : ?>
					<?php $parent_title = get_the_title($post->post_parent); ?>
					<h3 class="parent-title"><?php echo $parent_title; ?></h3>
					<span class="divider"></span>
				<?php endif; ?>
				<h1><?php the_title(); ?></h1>
				<?php if ( has_post_thumbnail() ) { // check if the post has a Post Thumbnail assigned to it.
				the_post_thumbnail( 'full' );} ?>
				<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
					<?php the_content(); ?>
					<ul class="case-study-links">
						<li class="mood"><?php echo do_shortcode( '[gpimb-btn-addto label="Add to Mood Book" ifnew="Add to Mood Book"]' ); ?></li>
						<li class="mood"><?php echo do_shortcode( '[gpimb-btn-view label="View Mood Book" ifnew="View Mood Book"]' ); ?></li>
						<!-- <li class="share"><a href="mailto:?subject=GPI Design has a good resource for our project, take a look&body=<?php the_permalink(); ?>">Share this</a></li> -->
						<!-- <li class="quote"><a href="http://gpidesign.com/resources/get-a-quote/" title="Get a quote on your backlit architectural feature">Got a project? Get a quote</a></li> -->
					</ul>
				<?php endwhile; ?>
			</div><!-- / #content -->
			
			<div id="sidebar">
				<?php dynamic_sidebar( 'page-sidebar' ); ?>
			</div><!-- / #sidebar -->
		</div><!-- / .wrapper -->
	
	</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>