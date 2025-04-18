		<?php $media_and_text = get_field("media_and_text"); ?>
		<?php if(!empty($media_and_text)): ?>	
		
	
		<div class="content-section">

			<div class="wrapper media-text">		

					<?php while(the_repeater_field("media_and_text")): ?>

					<div class="wp-block-media-text alignwide <?php the_sub_field("media_and_text_image_right"); ?> is-stacked-on-mobile ">
						
						<div class="wp-block-media-text__content">
							<h3><?php the_sub_field("media_and_text_heading"); ?></h3>
							<p><?php the_sub_field("media_and_text_caption"); ?></p>
						</div><!-- .wp-block-media-text__content -->

						<?php $media_and_text_image = get_sub_field("media_and_text_image"); ?>
						<?php if(!empty($media_and_text_image)): ?>	
							<figure class="wp-block-media-text__media">
								<img class="size-full" style="margin-bottom: 0;" src="<?php the_sub_field("media_and_text_image"); ?>" >
							</figure>
						<?php endif; ?>
						
						<?php $video = get_sub_field("video"); ?>
						<?php if(!empty($video)): ?>	
							<figure class="wp-block-media-text__media">
								<div id="video" style="padding: 0;">
									<div class="video-embed" style="width: 100%; margin-right: 0;">
										<div class="video-container"><?php the_sub_field('video'); ?></div>
									</div>
								</div>
							</figure>								
						<?php endif; ?>						

						<?php $image_slider = get_sub_field("image_slider"); ?>
						<?php if(!empty($image_slider)): ?>	
							<figure class="wp-block-media-text__media">
								<?php echo do_shortcode($image_slider); ?>
							</figure>
						<?php endif; ?>

					</div>
					<?php endwhile; ?>
					
			</div><!-- / .wrapper -->
			
		</div><!-- / .content-section  -->		

		
		<?php endif; ?>
		
