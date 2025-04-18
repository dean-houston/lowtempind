		<?php $featured_media_heading = get_field('featured_media_heading'); ?>
		<?php if(!empty($featured_media_heading)): ?>
		<div class="content-section">

			<div id="featured-media">
			
				<div class="wrapper" >		

						<div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile is-style-tw-shadow has-background">
							
							<div class="wp-block-media-text__content">
								<h3><?php the_field('featured_media_heading'); ?></h3>
								<p><?php the_field('featured_media_caption'); ?></p>
								<a class="button green" style="margin-top: 30px;" href="<?php the_field('featured_media_button_link'); ?>" target="_blank"><?php the_field('featured_media_button_label'); ?></a>
							</div><!-- .wp-block-media-text__content -->

							<?php $featured_media_image = get_field("featured_media_image"); ?>
							<?php if(!empty($featured_media_image)): ?>	
								<figure class="wp-block-media-text__media">
									<img class="size-full" src="<?php the_field('featured_media_image'); ?>" style="margin-bottom: 0;">
								</figure>
							<?php endif; ?>

							<?php $featured_media_video = get_field('featured_media_video'); ?>
							<?php if(!empty($featured_media_video)): ?>
							<figure class="wp-block-media-text__media">
								<div id="video">
									<div class="video-embed">
										<div class="video-container"><iframe width="560" height="315"  src="<?php the_field('featured_media_video'); ?>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
									</div>
								</div>
							</figure>								
							<?php endif; ?>
							
							<?php $featured_media_slider = get_field('featured_media_slider'); ?>
							<?php if(!empty($featured_media_slider)): ?>		
							<figure class="wp-block-media-text__media">
								<?php echo do_shortcode($featured_media_slider); ?>
							</figure>
							<?php endif; ?>

						</div>
						
				</div><!-- / .wrapper -->
				
			</div><!-- / #featured-media -->
			
		</div><!-- / .content-section  -->	
		<?php endif; ?>