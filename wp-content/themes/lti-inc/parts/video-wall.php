	<?php $featured_video_embed = get_field("featured_video_embed"); ?>
	<?php if(!empty($featured_video_embed)): ?>	
	<div class="videos">
		<div class="content-section">
			<div class="wrapper">	
				<div class="featured-video">						
					<?php $featured_video_embed = get_field("featured_video_embed"); ?>
					<?php if(!empty($featured_video_embed)): ?>	
						<figure>
							<div class="video">
								<div class="video-embed">
									<div class="video-container"><iframe width="560" height="315"  src="<?php the_field('featured_video_embed'); ?>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
								</div>
							</div>
						</figure>		
						<h3 style="display: inline-block; padding-top:10px; font-size: 1.125em; line-height: 1.5; margin-bottom: 0px;"><?php the_field("featured_video_heading"); ?></h3>
						<p><?php the_field("featured_video_caption"); ?></p>
					<?php endif; ?>						
				</div>			
				
		
				<div id="two-columns">
					<?php $product_videos = get_field("product_videos"); ?>
					<?php if(!empty($product_videos)): ?>	
					<div class="content-left-column">
						<h2>Product Videos</h2>
						<?php while(the_repeater_field("product_videos")): ?>
						<div class="product-video">						
							<?php $product_video_embed = get_sub_field("product_video_embed"); ?>
							<?php if(!empty($product_video_embed)): ?>	
								<figure>
									<div class="video">
										<div class="video-embed">
											<div class="video-container"><iframe width="560" height="315"  src="<?php the_sub_field('product_video_embed'); ?>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
										</div>
									</div>
								</figure>		
								<h3 style="display: inline-block; padding-top:10px; font-size: 1.125em; line-height: 1.5; margin-bottom: 0px;"><?php the_sub_field("product_video_heading"); ?></h3>
								<p><?php the_sub_field("product_video_caption"); ?></p>
							<?php endif; ?>						
						</div>					
						<?php endwhile; ?>
					</div>
					<?php endif; ?>

					<?php $operational_videos = get_field("operational_videos"); ?>
					<?php if(!empty($operational_videos)): ?>						
					<div class="content-right-column">
						<h2>Operational Videos</h2>
						<?php while(the_repeater_field("operational_videos")): ?>
						<div class="operational-video">						
							<?php $operational_video_embed = get_sub_field("operational_video_embed"); ?>
							<?php if(!empty($operational_video_embed)): ?>	
								<figure>
									<div class="video">
										<div class="video-embed">
											<div class="video-container"><iframe width="560" height="315"  src="<?php the_sub_field('operational_video_embed'); ?>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
										</div>
									</div>
								</figure>		
								<h3 style="display: inline-block; padding-top:10px; font-size: 1.125em; line-height: 1.5; margin-bottom: 0px;"><?php the_sub_field("operational_video_heading"); ?></h3>
								<p><?php the_sub_field("operational_video_caption"); ?></p>
							<?php endif; ?>						
						</div>					
						<?php endwhile; ?>	
					</div>
					<?php endif; ?>					
					
				</div><!-- #two-columns -->
				
				<div id="two-columns">
				
					<?php $industry_videos = get_field("industry_videos"); ?>
					<?php if(!empty($industry_videos)): ?>	
					<div class="content-left-column">
						<h2>Industry Solutions Videos</h2>
						<?php while(the_repeater_field("industry_videos")): ?>
						<div class="industry-video">						
							<?php $industry_video_embed = get_sub_field("industry_video_embed"); ?>
							<?php if(!empty($industry_video_embed)): ?>	
								<figure>
									<div class="video">
										<div class="video-embed">
											<div class="video-container"><iframe width="560" height="315"  src="<?php the_sub_field('industry_video_embed'); ?>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
										</div>
									</div>
								</figure>		
								<h3 style="display: inline-block; padding-top:10px; font-size: 1.125em; line-height: 1.5; margin-bottom: 0px;"><?php the_sub_field("industry_video_heading"); ?></h3>
								<p><?php the_sub_field("industry_video_caption"); ?></p>
							<?php endif; ?>						
						</div>					
						<?php endwhile; ?>
					</div>
					<?php endif; ?>	
					<div class="content-right-column">
					</div>					
					
				</div><!-- #two-columns -->				
				
			</div><!-- / .wrapper -->
		</div><!-- / .content-section  -->		
	</div><!-- / .videos  -->	
	<?php endif; ?>