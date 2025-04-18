		<!-- via https://stackoverflow.com/questions/38939212/wordpress-paginate-links-how-to-use-it/38939382#38939382 -->
		<?php $products = get_field("products"); ?>
		<?php if(!empty($products)): ?>		
		<div id="post-list" class="grid-view">
			<div class="wrapper">
				<h2><?php the_field('specsheets_heading'); ?></h2>
				<span class="divider"></span>
				<p style="margin-bottom: 25px;">Browse and download product specsheets.</p>
				<?php $products = get_field("products"); ?>
				
				<?php 
				$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

				$data= new WP_Query(array(
					'post_type'=>'product-spec-sheet',
					'posts_per_page' => 9, 
					'paged' => $paged,
					'post__in' => $products,
					'orderby' => 'post__in'	
				));

				if($data->have_posts()) :
					while($data->have_posts())  : $data->the_post();?>
							
					<div class="item">
						<a href="<?php the_permalink(); ?>">
							<div class="featured-image">
								<?php the_post_thumbnail('list-image'); ?>
							</div><!-- / .feature-image -->
							<div class="item-detail">
								<h3><?php the_title(); ?></h3>
								<p><?php $excerpt = get_the_excerpt(); echo wp_trim_words( $excerpt , '35' ); ?></p>
								<p class="read-more">View Specsheet <i class="fa fa-chevron-right"></i></p>
							</div><!-- / .item-detail -->
						</a>
					</div><!-- / .item -->
					
					<?php endwhile;

					$total_pages = $data->max_num_pages;

					if ($total_pages > 1){

						$current_page = max(1, get_query_var('paged'));

						echo paginate_links(array(
							'base' => get_pagenum_link(1) . '%_%',
							'format' => 'page/%#%',
							'current' => $current_page,
							'total' => $total_pages,
							'prev_text'    => __('« prev'),
							'next_text'    => __('next »'),
						));
					}
					?>    
				<?php else :?>
				<h3><?php _e('404 Error&#58; Not Found', ''); ?></h3>
				<?php endif; ?>
				<?php wp_reset_postdata();?>
				
			</div><!-- / .wrapper -->
		</div><!-- / #post-list .list-view -->
		<?php endif; ?>