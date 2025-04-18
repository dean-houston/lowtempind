		<?php $call_to_action_heading = get_field('call_to_action_heading'); ?>
		<?php if(!empty($call_to_action_heading)): ?>
		<div class="content-section blue" style="margin-top: 5vw;">
			<div class="wrapper">
				<p class="preheader"><?php the_field('call_to_action_preheader'); ?></p>
				<span class="divider"></span>
				<h2><?php the_field('call_to_action_heading'); ?></h2>
				<p><?php the_field('call_to_action_description'); ?></p>
				<a class="button green" style="margin-top: 30px;" href="<?php the_field('call_to_action_button_link'); ?>"><?php the_field('call_to_action_button_label'); ?></a>
			</div><!-- / .wrapper -->
		</div><!-- / .content-section.gray-->
		<?php endif; ?>