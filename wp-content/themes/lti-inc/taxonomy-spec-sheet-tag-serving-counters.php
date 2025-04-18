<?php
/**
 * Archive
 */
?>
<?php get_template_part( 'parts/header' ); ?>

<main id="main" role="main">
		<div id="content">
			<div class="wrapper">
				<div id="tax-spec-sheet-tag-header">
					<div class="bcnxt"><?php if( function_exists( 'bcn_display' ) ) bcn_display(); ?></div>
					<span class="divider"></span>
					<h1><?php single_term_title (); ?> Spec Sheets</h1><!-- via https://wordpress.stackexchange.com/questions/179585/remove-category-tag-author-from-the-archive-title -->
					<?php the_archive_description( '<div class="taxonomy-description">', '</div>' );?> <!-- via https://stackoverflow.com/a/64890345 -->
				</div>

				<div class="post-list-group">
					<h3>ColorPoint Modular Fiberglass Serviing Counter Spec Sheets</h3>
					<p>Available with any of LTI’s technology and control systems to create a cost-effective and durable modular serving line.</p>
					<div id="post-list" class="grid-layout">
							<?php 
								$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
								$query_args = array(
									'orderby' => 'title',
									'order'   => 'ASC',
									'paged' => $paged,
									'posts_per_page' => -1,
									'taxonomy' => 'spec-sheet-tag',
									'term' => 'colorpoint'
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
											<!--<p> ?php $excerpt = get_the_excerpt(); echo wp_trim_words( $excerpt , '35' ); ?></p>-->
											<p class="read-more"><?php the_field('product_cta'); ?> <i class="fa fa-chevron-right"></i></p>
										</div><!-- / .item-detail -->
									</a>
								</div><!-- / .item -->
							<?php endwhile; wp_reset_query(); ?>
					</div><!-- / #post-list .grid-view -->
				</div><!-- .post-list-group -->
				
				<div class="post-list-group">
					<h3>SpecLine by LTI Serving Counter Spec Sheets</h3>
					<p>SpecLine by LTI modular serving counters give you the flexibility to create hot food tables or cold food tables that best suit your needs.</p>
					<div id="post-list" class="grid-layout">
							<?php 
								$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
								$query_args = array(
									'orderby' => 'title',
									'order'   => 'ASC',
									'paged' => $paged,
									'posts_per_page' => -1,
									'taxonomy' => 'spec-sheet-tag',
									'term' => 'specline-by-lti'
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
											<!--<p> ?php $excerpt = get_the_excerpt(); echo wp_trim_words( $excerpt , '35' ); ?></p>-->
											<p class="read-more"><?php the_field('product_cta'); ?> <i class="fa fa-chevron-right"></i></p>
										</div><!-- / .item-detail -->
									</a>
								</div><!-- / .item -->
							<?php endwhile; wp_reset_query(); ?>
					</div><!-- / #post-list .grid-view -->
				</div><!-- .post-list-group -->

				<div class="post-list-group">
					<h3>SelectLine Premium Custom Food Counter Spec Sheets</h3>
					<p>These one-piece, turnkey commercial counters offer a wide range of custom options and arrive completely assembled for quick installation.</p>
					<div id="post-list" class="grid-layout">
							<?php 
								$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
								$query_args = array(
									'orderby' => 'title',
									'order'   => 'ASC',
									'paged' => $paged,
									'posts_per_page' => -1,
									'taxonomy' => 'spec-sheet-tag',
									'term' => 'selectline'
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
											<!--<p> ?php $excerpt = get_the_excerpt(); echo wp_trim_words( $excerpt , '35' ); ?></p>-->
											<p class="read-more"><?php the_field('product_cta'); ?> <i class="fa fa-chevron-right"></i></p>
										</div><!-- / .item-detail -->
									</a>
								</div><!-- / .item -->
							<?php endwhile; wp_reset_query(); ?>
					</div><!-- / #post-list .grid-view -->			
				</div><!-- .post-list-group -->
				
			</div><!-- / .wrapper -->
		</div><!-- / #content -->
</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>