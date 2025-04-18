		<?php $blurb_heading = get_field('blurb_heading'); ?>
		<?php if(!empty($blurb_heading)): ?>
		<div class="content-section grey">
			<div class="wrapper">
				<?php $blurb_heading = get_field('blurb_heading'); ?>
				<?php if(!empty($blurb_heading)): ?>				
					<h2><?php the_field('blurb_heading'); ?></h2>
					<span class="divider"></span>
					<p><?php the_field('blurb_text'); ?></p>
						<?php $blurb_link = get_field('blurb_link'); ?>
						<?php if(!empty($blurb_link)): ?>
						<nav class="arrow-nav">
							<ul>
								<li><a href="<?php the_field('blurb_link'); ?>"><?php the_field('blurb_link_text'); ?> <i class="fa fa-chevron-right"></i></a>
							</ul>
						</nav><?php endif; ?><!-- $blurb_link -->
				<?php endif; ?><!-- $blurb_heading -->
			</div><!-- / .wrapper -->
		</div><!-- / .content-section.grey -->
		<?php endif; ?>