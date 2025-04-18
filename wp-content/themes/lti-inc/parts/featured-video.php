		<?php $video_embed = get_field("video_embed"); ?>
		<?php if(!empty($video_embed)): ?>	
		<div class="content-section">
			<div class="wrapper">			
				<div id="video">
					<div class="video-embed">
						<div class="video-container"><?php the_field('video_embed'); ?></div>
					</div>
					<div class="video-caption">
						<?php the_field('video_caption'); ?>
					</div>
				</div>	
			</div><!-- / .wrapper -->
		</div><!-- / .content-section  -->			
		<?php endif; ?>