		<?php $download_heading = get_field('download_heading'); ?>
		<?php if(!empty($download_heading)): ?>
		<div class="content-section download" style="background-image:url('<?php the_field('download_background_image'); ?>);">
			<div class="wrapper">
				<p class="preheader"><?php the_field('download_preheader'); ?></p>
				<span class="divider"></span>
				<h2><?php the_field('download_heading'); ?></h2>
				<p><?php the_field('download_description'); ?></p>
				<a class="button green" style="margin-top: 30px;" href="<?php the_field('download_button_link'); ?>" target="_blank"><?php the_field('download_button_label'); ?></a>
			</div><!-- / .wrapper -->
		</div><!-- / .content-section.gray-->
		<?php endif; ?>