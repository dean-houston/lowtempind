<?php
/**
 * Template name: Product Line Child
 * Template Post Type: product
 */
?>
<?php get_template_part( 'parts/header' ); ?>
				
<main id="main" role="main">

	<div id="content">

		<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
		<?php endwhile; wp_reset_query(); ?>
		
		<?php get_template_part( 'parts/hero' ); ?>
		
		<div class="content-section grey">	
			<div class="wrapper">
				<h2>Key Features</h2>
				<span class="divider"></span>
				<p><?php the_field('features_text'); ?></p>
				<?php if( have_rows('feature_list') ): ?>
						<ul class="feature_list">
						<?php while( have_rows('feature_list') ): the_row(); 
							$list_item = get_sub_field('list_item');
							?>
							<li>
								<?php echo the_sub_field('list_item'); ?>
							</li>
						<?php endwhile; ?>
					</ul>
				<?php endif; ?>
			</div><!-- / .wrapper --> 
		</div><!-- / #content -->
				
		<div id="post-list" class="grid-view">
			<div class="wrapper">
				<h2>Products</h2>
				<span class="divider"></span>
				<p style="margin-bottom: 5vw;">Explore the full product line, then browse product date and download spec sheets.</p>
				<?php $products = get_field("products"); ?>
				<?php 
					$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
					$query_args = array(
						'post_type' => 'product-spec-sheet',
						'posts_per_page' => -1,
						'paged' => $paged,
						'post__in' => $products,
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
								<p class="read-more">Product Data <i class="fa fa-chevron-right"></i></p>
							</div><!-- / .item-detail -->
						</a>
					</div><!-- / .item -->
				<?php endwhile; wp_reset_query(); ?>
			</div><!-- / .wrapper -->
		</div><!-- / #post-list .list-view -->
	
	</div><!-- / #content -->
		
<?php if ($the_query->max_num_pages > 1) { // check if the max number of pages is greater than 1  ?>
<nav id="pagination">
	<div class="wrapper" style="padding: 0 50px;">
		<ul>
			<li class="prev"><?php echo get_previous_posts_link( '<i class="fa fa-chevron-left"></i> Previous Products', $the_query->max_num_pages ); ?></li>
			<li class="next"><?php echo get_next_posts_link( 'More Products <i class="fa fa-chevron-right"></i>', $the_query->max_num_pages ); ?></li>
		</ul>
	</div><!-- / .wrapper -->
</nav><!-- / #pagination -->
<?php } ?>
		
</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>
	
