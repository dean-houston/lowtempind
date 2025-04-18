<?php $featured_content = get_field('featured_content'); ?>
<?php if(!empty($featured_content)): ?>
<div class="content-section">	
	<div class="wrapper" style="padding-bottom: 5vw;">
			<div id="multi_column_wrapper">
				<p class="preheader"><?php the_field('featured_content_preheader'); ?></p>
				<span class="divider"></span>
				<h2><?php the_field('featured_content_heading'); ?></h2>
				<p style="margin-bottom: 30px;"><?php the_field('featured_content_description'); ?></p>
				<div class="featured_content_wrapper">
					<?php while(the_repeater_field('featured_content')): ?>
						<div class="multi_column <?php the_field('feature_columns'); ?> small-100 ta-l flt">
							<a href="<?php the_sub_field('feature_link'); ?>" title="<?php the_title(); ?> <?php echo the_sub_field('feature_title'); ?>" target="<?php echo the_sub_field('feature_link_tab'); ?>">
								<img src="<?php the_sub_field('feature_image'); ?>" alt="<?php echo the_sub_field('feature_title'); ?>">
							</a>
							<h3><?php the_sub_field('feature_title'); ?></h3>
							<p class="excerpt"><?php the_sub_field('feature_text'); ?></p>
							<p><a class="read-more" href="<?php the_sub_field('feature_link'); ?>" title="<?php echo the_sub_field('feature_title'); ?>" target="<?php echo the_sub_field('feature_link_tab'); ?>"><?php the_sub_field('feature_link_label'); ?>  <i class="fa-solid fa-chevron-right"></i></a></p>
						</div>
					<?php endwhile; ?>
				</div><!--featured_content_wrapper-->
			</div>
	</div><!-- / .wrapper --> 
</div><!-- / .content-section -->
<?php endif; ?>