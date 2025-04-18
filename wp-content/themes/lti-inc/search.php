<?php
/**
 * Search results page
 */
?>
<?php get_template_part( 'parts/header' ); ?>

	<main id="main" role="main">
			<div class="wrapper">
			
			<div id="content" class="narrow">

				<?php if ( have_posts() ): ?>
					<h1 style="margin-bottom: 0;">You searched for '<?php echo get_search_query(); ?>'</h1>
					<p style="margin-bottom: 36px;">Here's what we found:</p>
					<ul>
						<?php while ( have_posts() ) : the_post(); ?>
							<li>
								<article id="post-<?php the_ID(); ?>">
									<h2><a href="<?php esc_url( the_permalink() ); ?>" title="Permalink to <?php the_title(); ?>" rel="bookmark"><?php the_title(); ?></a></h2>
									<?php the_excerpt(); ?>
									<p><a  class="read-more" href=<?php esc_url( the_permalink() ); ?> title="Permalink to <?php the_title(); ?>" rel="bookmark">Read More <i class="fa fa-chevron-right"></i></a></p>
								</article>
							</li>
						<?php endwhile; ?>
					</ul>
				<?php else: ?>
					<h2>No results found for '<?php echo get_search_query(); ?>'</h2>
				<?php endif; ?>

			</div><!-- / #content -->
			
			<div id="sidebar">
				<?php dynamic_sidebar( 'blog-sidebar' ); ?>
			</div><!-- / #sidebar -->
			
		</div><!-- / .wrapper -->
		
	</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>