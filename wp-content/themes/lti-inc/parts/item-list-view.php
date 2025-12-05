		<?php $item_list = get_field('item_list'); ?>
		<?php if(!empty($item_list)): ?>
		<div id="featured-products" class="content">
			<div class="wrapper"  style="padding-bottom: 0px;">

				<h2 style="margin-bottom: 0; padding-bottom: 5vw;"><?php the_field('item_list_heading'); ?></h2>
				<p><?php the_field('item_list_text'); ?></p>
				
				<?php while(the_repeater_field('item_list')): ?>
				<div id="post-list" class="list-view">
					<div class="item">
						
							<div class="featured-image">
								<img src="<?php the_sub_field('item_image','list-image'); ?>" >
							</div><!-- / .feature-image -->
							<div class="item-detail">
								<h3><?php the_sub_field('item_title'); ?></h3>
								<p><?php the_sub_field('item_text'); ?></p>
								<a href="<?php the_sub_field('item_url'); ?>" title="<?php the_sub_field('item_title_tag'); ?>" class="read-more">Browse Options <i class="fa-solid fa-chevron-right"></i></a>
								
								<?php $flyer_url = get_sub_field('flyer_url'); ?>
								<?php if(!empty($flyer_url)): ?>
								<a href="<?php the_sub_field('flyer_url'); ?>" title="<?php the_sub_field('flyer_title_tag'); ?>" target="_blank" class="read-more">Download Flyer <i class="fa-solid fa-chevron-right"></i></a>
								<?php endif; ?>
								
							</div><!-- / .item-detail -->
						
					</div><!-- / .item -->
				<?php endwhile; ?>
				
				</div><!-- / #post-list .list-view -->
			</div><!-- / .wrapper -->
		</div><!-- / #featured-products .content -->
		<?php endif; ?>