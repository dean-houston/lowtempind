		<?php $signposts = get_field("signposts"); ?>
		<?php if(!empty($signposts)): ?>
		<div id="signposts">
			<div class="wrapper">
				<h2 style="color: #fff;"><?php the_field('signpost_heading'); ?></h2>
				<span class="divider"></span>
				<p style="color: #fff; margin-bottom: 5vw;"><?php the_field('signpost_text'); ?></p>
				<?php while(the_repeater_field("signposts")): ?>
				<?php $background = wp_get_attachment_image_src( get_sub_field('background_image'), 'signpost' ); ?>
				<div class="signpost" style="background-image: url(<?php echo $background[0]; ?>);">
					<div class="white-mask"><a href="<?php the_sub_field("url"); ?>"></a></div>
					<?php $colour = get_sub_field("hover_colour"); ?>
					<div class="orange-mask" style="background: <?php echo $colour; ?>"></div>
					<div>
						<a href="<?php the_sub_field("url"); ?>" title="<?php the_sub_field("url_title_tag"); ?>">
							<div class="details">
								<h3><?php the_sub_field("title"); ?></h3>
								<span class="divider"></span>
								<p><?php the_sub_field("text"); ?></p>
								<p class="read-more">Read More <i class="fa-solid fa-chevron-right"></i></p>
							</div><!-- / .details -->
						</a>
					</div>
				</div><!-- / .signpost -->
				<?php endwhile; ?>
			</div><!-- / .wrapper -->
		</div><!-- / #signposts -->
		<?php endif; ?>