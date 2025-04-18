		<?php $image_carousel = get_field("image_carousel"); ?>
		<?php if(!empty($image_carousel)): ?>	
		<div class="content-section">
			<div class="wrapper" style="padding-bottom: 0;">	
				<div class="carousel" style="clear: both; padding-bottom: 0;">	
					<h2><?php the_field('image_carousel_heading'); ?></h2>
					<span class="divider"></span>
					<p style="margin-bottom: 25px;">See the superior craftsmanship and engineering that take <?php the_title(); ?> to the next level.</p>
					<?php echo do_shortcode($image_carousel); ?>
				</div>	
			</div><!-- / .wrapper -->
		</div><!-- / .content-section  -->					
		<?php endif; ?>