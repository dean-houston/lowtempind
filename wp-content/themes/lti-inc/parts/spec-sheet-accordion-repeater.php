	<!-- via https://wpbeaches.com/create-an-acf-repeater-accordion-in-wordpress/ -->
	
	<?php $accordion_section_title = get_field('accordion_section_title'); ?>
	<?php if(!empty($accordion_section_title)): ?>	
	<div class="content-section">
		<div class="wrapper">
		
			<div style="margin-bottom: 0;">
				<span class="divider"></span>
				<h2><?php the_field('accordion_section_title'); ?></h2>
				<p><?php the_field('accordion_section_description'); ?></p>	
			</div>
			
			<?php

			// check if the repeater field has rows of data
			if( have_rows('accordion_repeater') ):
				
				
				// loop through the rows of data for the tab header
				while ( have_rows('accordion_repeater') ) : the_row();
					
					$header = get_sub_field('accordion_header');
					$content = get_sub_field('accordion_content');
					$products = get_sub_field('products');

				?>
				
					<button class="accordion"><?php echo $header; ?></button>
					<div class="panel">
						<p><?php echo $content; ?></p>  
						<?php if(!empty($products)): ?>		
						<div id="post-list" class="grid-layout">
								<!-- ?php echo $products; ? -->
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
												<h4><?php the_title(); ?></h4>
												<p class="read-more"><?php the_field('product_cta'); ?> <i class="fa-solid fa-chevron-right"></i></p>
											</div><!-- / .item-detail -->
										</a>
									</div><!-- / .item -->
								<?php endwhile; wp_reset_query(); ?>
						</div><!-- / #post-list .grid-layout -->
						<?php endif; ?>
					</div>    
					<?php endwhile; //End the loop 
				endif;?>
		</div><!-- .wrapper -->
	</div><!-- .content-section -->
	<?php endif; ?>