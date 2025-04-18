<?php
/**
 * Archive
 */
?>
<?php get_template_part( 'parts/header' ); ?>

<main id="main" role="main">
	<div class="wrapper">
		<div id="content">
			<div class="wrapper">
				<div class="bcnxt"><?php if( function_exists( 'bcn_display' ) ) bcn_display(); ?></div>
				<span class="divider"></span>
				<h1>Spec Sheets</h1>
				<p style="margin-bottom: 2.5vw;">A description for this page...</p>
				<?php the_archive_description( '<div class="taxonomy-description">', '</div>' );?> <!-- via https://stackoverflow.com/a/64890345 -->
				<div id="post-list" class="grid-layout">
						<?php 
							$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
							$query_args = array(
								'orderby' => 'title',
								'order'   => 'ASC',
								'paged' => $paged,
								'post_type' => 'product-spec-sheet'
							);
							$the_query = new WP_Query($query_args); ?>
						<?php while($the_query->have_posts()) : $the_query->the_post(); ?>
							<div class="item">
								<a href="<?php the_permalink(); ?>">
									<div class="featured-image">
										<?php the_post_thumbnail('list-image'); ?>
									</div><!-- / .feature-image -->
									<div class="item-detail">
										<h4><?php the_title(); ?></h4>
										<p><?php $excerpt = get_the_excerpt(); echo wp_trim_words( $excerpt , '35' ); ?></p>
										<p class="read-more"><?php the_field('product_cta'); ?> <i class="fa fa-chevron-right"></i></p>
									</div><!-- / .item-detail -->
								</a>
							</div><!-- / .item -->
						<?php endwhile; wp_reset_query(); ?>
				</div><!-- / #post-list .grid-view -->

			</div><!-- / .wrapper -->
		</div><!-- / #content -->
	</div><!-- / .wrapper -->
</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>


