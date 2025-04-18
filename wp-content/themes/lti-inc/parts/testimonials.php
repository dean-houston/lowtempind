		<div class="content-section white">	
			<div class="wrapper">	
				<?php $testimonial_shortcode = get_field('testimonial_shortcode'); ?>
				<?php if(!empty($testimonial_shortcode)): ?>
					<p class="preheader">Testimonials</p>
					<span class="divider"></span>
					<h2>What Our Customers Say</h2>
					<p><?php echo do_shortcode('[slide-anything id="7790"]'); ?></p>
				<?php endif; ?>	
			</div><!-- / .wrapper --> 
		</div><!-- / #content -->