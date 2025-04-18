<?php
/**
 * Archive
 */
?>
<?php get_template_part( 'parts/header' ); ?>

<main id="main" role="main">
	
	<main id="main" role="main">
	
		<div id="content">
			<div class="wrapper">
				<div class="bcnxt"><?php if( function_exists( 'bcn_display' ) ) bcn_display(); ?></div>
				<span class="divider"></span>
				<h1>K-12 Foodservice Case Studies</h1>
				<?php the_archive_description( '<div class="taxonomy-description">', '</div>' );?> <!-- via https://stackoverflow.com/a/64890345 -->
				<div id="post-list" class="list-view">
				<?php 
					$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
					$query_args = array(
					    'orderby' => 'title',
						'order'   => 'ASC',
						'taxonomy' => 'market-served',
						'term' => 'k-12',
						'posts_per_page' => -1,
						'ignore_custom_sort' => false, /* via https://wordpress.stackexchange.com/questions/248993/wp-query-orderby-title-doesnt-work */
						'paged' => $paged
					);
					$the_query = new WP_Query($query_args); ?>
				<?php while($the_query->have_posts()) : $the_query->the_post();?>
					<div class="item">
						<a href="<?php the_permalink(); ?>" title="<?php the_title();?>">
							<div class="featured-image">
								<?php the_post_thumbnail('list-image');?>
							</div><!-- / .feature-image -->
							<div class="item-detail">
								<h6><?php the_field('sticky_cpt'); ?></h6>
								<h3><?php the_title();?></h3>
								<p><?php $excerpt = get_the_excerpt(); echo wp_trim_words( $excerpt , '35' );?></p>
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
					<li class="prev"><?php echo get_previous_posts_link( '<i class="fa fa-chevron-left"></i> Previous Case Studies', $the_query->max_num_pages ); ?></li>
					<li class="next"><?php echo get_next_posts_link( 'Next Case Studies <i class="fa fa-chevron-right"></i>', $the_query->max_num_pages ); ?></li>
				</ul>
			</div><!-- / .wrapper -->
		</nav><!-- / #pagination -->
		<?php } ?>
	
	</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>