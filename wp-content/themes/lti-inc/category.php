<?php
/**
 * Category
 */
?>
<?php get_template_part( 'parts/header' ); ?>

<main id="main" role="main">
	
	<div class="wrapper">
		<div id="content" class="narrow">
			<?php if ( have_posts() ): ?>	
				<ol id="blog-roll">
					<?php while ( have_posts() ) : the_post(); ?>
						<li>
							<?php if(has_post_thumbnail()): ?>
								<a href="<?php the_permalink(); ?>">
									<?php the_post_thumbnail('blog-image'); ?>
								</a>
							<?php endif; ?>
							<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
								<h1><a href="<?php esc_url( the_permalink() ); ?>" title="Permalink to <?php the_title(); ?>" rel="bookmark"><?php the_title(); ?></a></h1>
								<time datetime="<?php the_time( 'Y-m-d' ); ?>" pubdate><date><?php the_time('F j, Y'); ?></date>									<?php the_excerpt(); ?>
								<a class="read-more" href="<?php the_permalink(); ?>">Read More <i class="fa fa-chevron-right"></i></a>
							</article>
						</li>
					<?php endwhile; ?>
				</ol><!-- / #blog-roll -->
			<?php else: ?>
				<h2>No posts to display</h2>
			<?php endif; ?>
		</div><!-- / #content -->
		
		<div id="sidebar">
			<?php dynamic_sidebar( 'blog-sidebar' ); ?>
		</div><!-- / #sidebar -->
		
		<nav id="post-nav">
			<ul>
				<li class="prev"><?php previous_posts_link("<i class='fa fa-chevron-left'></i> Previous Posts"); ?></li>
				<li class="next"><?php next_posts_link("Next Posts <i class='fa fa-chevron-right'></i>"); ?></li>
			</ul>
		</nav><!-- / #post-nav -->
		
	</div><!-- / .wrapper -->

</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>