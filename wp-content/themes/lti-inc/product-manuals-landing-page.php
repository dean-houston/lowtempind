<?php
/**
 * Template name: Product manuals landing page
 */
?>
<?php get_template_part( 'parts/header' ); ?>

		<main id="main" role="main">
	
		<div id="content">
			<div class="wrapper overflow">
					<div class="bcnxt"><?php if( function_exists( 'bcn_display' ) ) bcn_display(); ?></div>
					<span class="divider"></span>	
					<h1><?php the_title(); ?></h1>
					<p>Scroll through LTI's foodservice equipment manuals:</p>
			</div><!-- / .wrapper -->
		</div><!-- / #content -->
		
		<div id="specsheet-list" class="content-section">
			<div class="wrapper">
				<div id="post-list" class="list-view">
				<?php 
					$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
					$query_args = array(
						'post_type' => 'product-manual',
						'posts_per_page' => -1,
						'paged' => $paged	
					);
					$the_query = new WP_Query($query_args); ?>
				<?php while($the_query->have_posts()) : $the_query->the_post(); ?>
					<?php $taxes = array('manuals-tag'); ?>
					<?php $post_tags = get_the_tags(); ?>
					<?php $terms_array = get_the_terms( $post->ID, $taxes);
					$terms_string = ""; 
					    foreach ( $terms_array as $term ) {
					        $terms_string .= $term->slug.' '; 
					    }
					?> 
					<div class="item <?php echo $terms_string; ?> 
					
						<?php

						if ($post_tags) {
						  foreach($post_tags as $tag) {
							echo $tag->slug;
						  }
						}
						?>					
											
					">
						<?php if( has_post_thumbnail() ): ?>
							<div class="featured-image">
								<?php the_post_thumbnail('list-image'); ?>
							</div><!-- / .feature-image -->
						<?php endif; ?>
						<div class="item-detail">
							<h3><?php the_title(); ?></h3>
							<p><?php $excerpt = get_the_excerpt(); echo wp_trim_words( $excerpt , '35' ); ?></p>
							<p class="read-more">
								<?php $pdf_file = get_field("pdf_file"); ?>
								<?php if( $pdf_file ): ?>
									<a href="<?php echo esc_url( $pdf_file ); ?>" target="_blank">
										Download <i class="fa fa-chevron-right"></i>
									</a>
								<?php endif; ?>
								<?php $dflip_shortcode = get_field("dflip_shortcode"); ?>
								<?php if( $dflip_shortcode ): ?>
									&nbsp;<a href="<?php echo get_the_permalink(); ?>">
										View <i class="fa fa-chevron-right"></i>
									</a>
								<?php endif; ?>
							</p>
						</div><!-- / .item-detail -->
					</div><!-- / .item -->
				<?php endwhile; wp_reset_query(); ?>
				</div><!-- / #post-list .list-view -->
			</div>
		</div>
		
		<nav id="pagination">
			<div class="wrapper">
				<ul>
					<li><a class="back-to-top" href="#">Back to top <i class="fa fa-chevron-up"></i></a></li>
				</ul>
			</div><!-- / .wrapper -->
		</nav><!-- / #pagination -->
	
	</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>
