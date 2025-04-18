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
					<h3>QuickSwich Hot/Cold/Freeze Wells & Glass Shelf</h3>
					<p>LTI's QuickSwitch technology is the industry’s gold standard in convertible food wells. Each independently controlled well switches between hot, cold, and frozen in an hour or less!</p>
					<div id="post-list" class="grid-layout">
							<?php 
								$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
								$query_args = array(
									'orderby' => 'title',
									'order'   => 'ASC',
									'paged' => $paged,
									'posts_per_page' => -1,
									'taxonomy' => 'spec-sheet-tag',
									'term' => 'quickswitch'
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
					<h3>TempestAir Cold Food Wells</h3>
					<p>The patented air flow technology behind LTI’s TempestAir refrigerated cold pans holds products in open drop-in cold pans at temperatures of 40° F or less.</p>
					<div id="post-list" class="grid-layout">
							<?php 
								$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
								$query_args = array(
									'orderby' => 'title',
									'order'   => 'ASC',
									'paged' => $paged,
									'posts_per_page' => -1,
									'taxonomy' => 'spec-sheet-tag',
									'term' => 'tempestair'
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
					<h3>ThermalWell Hot Food Wells</h3>
					<p>LTI’s ThermalWell technology features an energy-efficient silicone heat blanket that can be used with or without water inside the food well.</p>
					<div id="post-list" class="grid-layout">
							<?php 
								$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
								$query_args = array(
									'orderby' => 'title',
									'order'   => 'ASC',
									'paged' => $paged,
									'posts_per_page' => -1,
									'taxonomy' => 'spec-sheet-tag',
									'term' => 'thermalwell'
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
					<h3>Hot and Cold Food Display Cases & Shelves</h3>
					<p>Ditch the serving pans to create an upscale look by displaying foods directly on the surface. Shelves convert from hot to frozen with the flip of a switch.</p>
					<div id="post-list" class="grid-layout">
							<?php 
								$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
								$query_args = array(
									'orderby' => 'title',
									'order'   => 'ASC',
									'paged' => $paged,
									'posts_per_page' => -1,
									'taxonomy' => 'spec-sheet-tag',
									'term' => 'merchandisers'
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