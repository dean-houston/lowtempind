		<?php $product_configurator_group = get_field('product_configurator_group'); ?>
		<?php if(!empty($product_configurator_heading)): ?>	
		
		<div id="configurator">

			<div class="wrapper configurator">		

					<div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile is-style-tw-shadow has-background">
						
						<div class="wp-block-media-text__content">
							<h3 style="color: #fff;"><?php echo $product_configurator_group['product_configurator_heading']; ?></h3>
							<p style="color: #fff;"><?php echo $product_configurator_group['product_configurator_caption']; ?></p>
							<a class="button green" style="margin-top: 15px;" href="<?php echo $product_configurator_group['product_configurator_link']; ?>">Start Customizing</a>
						</div><!-- .wp-block-media-text__content -->

						<figure class="wp-block-media-text__media">
							<img class="size-full" style="margin-bottom: 0;" src="<?php echo $product_configurator_group['product_configurator_image_right']; ?>" >
						</figure>	

					</div>
					
			</div><!-- / .wrapper -->

		</div><!-- / .configurator -->
		
		<?php endif; ?>
		
