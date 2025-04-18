		<?php $features_list = get_field("features_list"); ?>
		<?php if(!empty($features_list)): ?>			
		<div class="content-section grey features-list">	
			<div class="wrapper">
				<h2><?php the_title(); ?> Standard Features</h2>
				<?php the_field('features_list'); ?>
			</div><!-- / .wrapper --> 
		</div><!-- / .content-section -->
		<?php endif; ?>