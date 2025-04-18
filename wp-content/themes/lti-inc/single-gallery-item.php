<?php
/**
 * The Template for displaying all single gallery items
 */
?>
<?php get_template_part( 'parts/header' ); ?>

<main id="main" role="main">
	
	<div class="wrapper">
		<div id="content" class="narrow">
			
			<h1><?php the_title(); ?></h1>
			<date><?php the_time('F j, Y'); ?></date>
			<?php if(has_post_thumbnail()): ?>
				<?php the_post_thumbnail('blog-image'); ?>
			<?php endif; ?>

		<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
			<p><?php the_field("caption"); ?></p>
		<?php endwhile; ?>
		
		</div><!-- / #content -->
		
		<div id="sidebar">
			
		</div><!-- / #sidebar -->
		
		<nav id="post-nav">
			<ul>
				<li class="prev"><?php previous_posts_link("<i class='fa fa-chevron-left'></i> Previous Gallery Item"); ?></li>
				<li class="next"><?php next_posts_link("Next Gallery Item <i class='fa fa-chevron-right'></i>"); ?></li>
			</ul>
		</nav><!-- / #post-nav -->
		
	</div><!-- / .wrapper -->

</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>