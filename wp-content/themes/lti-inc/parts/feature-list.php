		<?php $feature_list = get_field("feature_list"); ?>
		<?php if(!empty($feature_list)): ?>			
		<div class="content-section grey">	
			<div class="wrapper">
				<h2><?php the_field('features_text'); ?></h2>
				<?php if( have_rows('feature_list') ): ?>
						<ul class="feature_list">
						<?php while( have_rows('feature_list') ): the_row(); 
							$list_item = get_sub_field('list_item');
							?>
							<i class="fa-solid fa-check"></i> <li>
								<?php echo the_sub_field('list_item'); ?>
							</li>
						<?php endwhile; ?>
					</ul>
				<?php endif; ?>
			</div><!-- / .wrapper --> 
		</div><!-- / .content-section -->
		<?php endif; ?>