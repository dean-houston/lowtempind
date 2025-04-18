	<?php $image_gallery_shortcode = get_field('image_gallery_shortcode'); ?>
	<?php if(!empty($image_gallery_shortcode)): ?>
	<div class="content-section">
		<div class="wrapper">
			<div>
				<h2><?php the_field('image_gallery_subhead'); ?></h2>
				<span class="divider"></span>
				<p><?php the_field('image_gallery_copy'); ?></p>
			</div>
			<?php echo do_shortcode($image_gallery_shortcode); ?>
		</div><!-- / .wrapper -->		
		
	</div><!-- / .content-section -->
	<?php endif; ?>
	
	
	
	