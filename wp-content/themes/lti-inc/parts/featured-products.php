		<?php $featured_products = get_field("featured_products"); ?>
		<?php if(!empty($featured_products)): ?>
		<div id="featured-products" class="content">
			<div class="wrapper"  style="padding-bottom: 0px;">
				<span class="divider"></span>
				<h2 style="margin-bottom: 0; padding-bottom: 5vw;"><?php the_field('featured_products_heading'); ?></h2>
				<div id="post-list" class="list-view">
				<?php 
					$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
					$query_args = array(
						'post_type' => array('product','product-spec-sheet'),
						'posts_per_page' => 8,
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
								<p><?php $excerpt = get_the_excerpt(); echo wp_trim_words( $excerpt , '100' ); ?></p>
								<p class="read-more"><?php the_field('product_cta'); ?> <i class="fa fa-chevron-right"></i></p>
							</div><!-- / .item-detail -->
						</a>
					</div><!-- / .item -->
				<?php endwhile; wp_reset_query(); ?>
				</div><!-- / #post-list .list-view -->
			</div><!-- / .wrapper -->
		</div><!-- / #featured-products .content -->
		<?php endif; ?>