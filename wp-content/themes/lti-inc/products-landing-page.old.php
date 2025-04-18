<?php
/**
 * Template name: Products landing page
 */
?>
<?php get_template_part( 'parts/header' ); ?>

	<main id="main" role="main">
	
		<div id="content">
			<div class="wrapper">
				
				<h1><?php the_title(); ?></h1>
				
				<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
					<?php the_content(); ?>
				<?php endwhile; wp_reset_query(); ?>
				
				<div id="post-list" class="list-view">
				<?php $featured_products = get_field("featured_products"); ?>
				<?php 
					$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
					$query_args = array(
						'post_type' => 'product',
						'posts_per_page' => 20,
						'paged' => $paged,
						'post__in' => $featured_products,
						'orderby' => 'post__in'	
					);
					$the_query = new WP_Query($query_args); ?>
				<?php while($the_query->have_posts()) : $the_query->the_post(); ?>
					<div class="item">
						<a href="<?php the_permalink(); ?>">
							<div class="featured-image">
								<?php the_post_thumbnail('list-image'); ?>
							</div><!-- / .feature-image -->
							<div class="item-detail">
								<h3><?php the_title(); ?></h3>
								<p><?php $excerpt = get_the_excerpt(); echo wp_trim_words( $excerpt , '35' ); ?></p>
								<p class="read-more">Read More <i class="fa fa-chevron-right"></i></p>
							</div><!-- / .item-detail -->
						</a>
					</div><!-- / .item -->
				<?php endwhile; wp_reset_query(); ?>
				</div><!-- / #post-list .list-view -->
			
			</div><!-- / .wrapper -->
		</div><!-- / #content -->
				
		<?php if ($the_query->max_num_pages > 1) { // check if the max number of pages is greater than 1  ?>
		<nav id="pagination">
			<div class="wrapper">
				<ul>
					<li class="prev"><?php echo get_previous_posts_link( '<i class="fa fa-chevron-left"></i> Previous Products Page', $the_query->max_num_pages ); ?></li>
					<li class="next"><?php echo get_next_posts_link( 'Next Products Page <i class="fa fa-chevron-right"></i>', $the_query->max_num_pages ); ?></li>
				</ul>
			</div><!-- / .wrapper -->
		</nav><!-- / #pagination -->
		<?php } ?>
	
	</main><!- / #main -->

<?php get_template_part( 'parts/footer' ); ?>
	
