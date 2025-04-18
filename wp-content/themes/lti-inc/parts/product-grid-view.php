<div class="content-section">	
	<div class="wrapper" style="padding-bottom: 5vw;">
			<div id="multi_column_wrapper">
				<div class="featured_content_wrapper">
						<div class="multi_column small-100 ta-l flt">
				<?php 
					$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
					$query_args = array(
						'post_type' => 'product-spec-sheet',
						'posts_per_page' => -1,
						'paged' => $paged	
					);
					$the_query = new WP_Query($query_args); ?>

				<?php while($the_query->have_posts()) : $the_query->the_post(); ?>
					<?php $taxes = array('spec-sheet-tag'); ?>
					<?php $terms_array = get_the_terms( $post->ID, $taxes);
					$terms_string = ""; 
					    foreach ( $terms_array as $term ) {
					        $terms_string .= $term->slug.' '; 
					    }
					?> 
					<div class="item <?php echo $terms_string; ?>">
						<?php if( has_post_thumbnail() ): ?>
							<div class="featured-image">
								<?php the_post_thumbnail('list-image'); ?>
							</div><!-- / .feature-image -->
						<?php endif; ?>
						<div class="item-detail">
							<h3><?php the_title(); ?></h3>
							<p><?php $excerpt = get_the_excerpt(); echo wp_trim_words( $excerpt , '40' ); ?></p>
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
				</div><!--featured_content_wrapper-->
			</div><!--multi_column_wrapper-->
		<?php endif; ?>
	</div><!-- / .wrapper --> 
</div><!-- / #content -->