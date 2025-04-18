		<?php $products = get_field("products"); ?>
		<?php if(!empty($products)): ?>		
		<div id="post-list" class="grid-view">
			<div class="wrapper">
				<h2>Products</h2>
				<span class="divider"></span>
				<p style="margin-bottom: 2.5vw;">Explore the full product line, then browse product data and download spec sheets.</p>
				<?php $products = get_field("products"); ?>
				<?php 
					$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
					$query_args = array(
						'post_type' => 'product-spec-sheet',
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
								<p class="read-more"><?php the_field('product_cta'); ?> <i class="fa fa-chevron-right"></i></p>
							</div><!-- / .item-detail -->
						</a>
					</div><!-- / .item -->
				<?php endwhile; wp_reset_query(); ?>
			</div><!-- / .wrapper -->
		</div><!-- / #post-list .list-view -->
		<?php endif; ?>