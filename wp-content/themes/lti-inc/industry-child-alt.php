<?php
/**
Template Name: Industry Child Alt
 */
?>
<?php get_template_part( 'parts/header' ); ?>

<main id="main" role="main" class="<?php the_field('color_palette'); ?>">

	<div id="content">
			
		<div class="content">
		
			<div class="wrapper">
			
				<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
					<div class="intro" style="padding-bottom: 1vw;">
						<p class="preheader"><?php the_field('preheader'); ?></p>
						<div class="bcnxt"><?php if( function_exists( 'bcn_display' ) ) bcn_display(); ?></div>
						<span class="divider"></span>	
						<h1><?php the_title(); ?></h1>
						<div>
							<blockquote style="border: none;">
								<p><?php the_field('intro_text'); ?></p>
							</blockquote>
						</div>
						<div class="content-left-column">
							<?php the_field('left_column'); ?>
						</div>
						<div class="content-right-column">
							<?php the_field('right_column'); ?>
						</div>	
					</div><!-- end intro -->
				<?php endwhile; ?>
				<?php wp_reset_query(); ?>

				<?php if( get_field('video_embed') ): ?>				
				<div id="video" style="margin-bottom: 30px;">
					<div class="video-embed">
						<div class="video-container"><?php the_field('video_embed'); ?></div>
					</div>
					<div class="video-caption">
						<?php the_field('video_caption'); ?>
					</div>
				</div>	
				<?php endif; ?>
		
				<?php $image_hotspot = get_field('image_hotspot'); ?>
				<?php if(!empty($image_hotspot)): ?>			
					<div id="hotspot-splash">
						<?php the_field('image_hotspot') ?>
					</div><!-- / #hotspot-splash -->					
					<div class="hotspot-description">
						<div class="content-left-column">
							<?php the_field('hotspot_left_column'); ?>
						</div>
						<div class="content-right-column">
							<?php the_field('hotspot_right_column'); ?>
						</div>	
					</div><!-- / #hotspot_description -->
				<?php endif; ?>
				
				<?php get_template_part( 'parts/download' ); ?>

				<?php $featured_content = get_field('featured_content'); ?>
				<?php if(!empty($featured_content)): ?>
					<div id="multi_column_wrapper" style="padding-top: 5vw;">
						<p class="preheader"><?php the_field('features_preheader'); ?></p>
						<span class="divider"></span>
						<h2><?php the_field('features_heading'); ?></h2>
						<p style="margin-bottom: 30px;"><?php the_field('features_description'); ?></p>
						
						<div class="featured_content_wrapper">
							<?php while(the_repeater_field('featured_content')): ?>
								<div class="multi_column one-third small-100 ta-l flt">
									<a href="<?php the_sub_field('feature_link'); ?>" title="<?php the_title(); ?> <?php echo the_sub_field('feature_title'); ?>" target="<?php echo the_sub_field('feature_link_tab'); ?>">
										<img src="<?php the_sub_field('feature_image'); ?>" alt="<?php echo the_sub_field('feature_title'); ?>">
									</a>
									<h4><?php the_sub_field('feature_title'); ?></h4>
									<p class="excerpt"><?php the_sub_field('feature_text'); ?></p>
									<p><a class="learn-more" href="<?php the_sub_field('feature_link'); ?>" title="<?php echo the_sub_field('feature_title'); ?>" target="<?php echo the_sub_field('feature_link_tab'); ?>"><?php the_sub_field('feature_link_label'); ?>  <i class="fa fa-chevron-right"></i></a></p>
								</div>
							<?php endwhile; ?>
						</div><!--featured_content_wrapper-->
					</div>
				<?php endif; ?>

			</div><!-- / .wrapper -->
		</div><!-- / .content -->

		<?php $signposts = get_field("signposts"); ?>
		<?php if(!empty($signposts)): ?>
		<div id="signposts" style="padding-top:5vw;">
			<div class="wrapper">
				<p  style="color: #fff;" class="preheader"><?php the_field('signpost_preheader'); ?></p>
				<span class="divider"></span>
				<h2 style="color: #fff;"><?php the_field('signpost_heading'); ?></h2>
				<p style="color: #fff; margin-bottom: 25px; font-size: 1.125em; font-weight: 100; line-height: 1.6;"><?php the_field('signpost_description'); ?></p>
			
				<div class="signpost_wrapper">
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
									<p>Read More <i class="fa fa-chevron-right"></i></p>
								</div><!-- / .details -->
							</a>
						</div>
					</div><!-- / .signpost -->
				<?php endwhile; ?>
				</div>
				
			</div><!-- / .wrapper -->
		</div><!-- / #signposts -->
		<?php endif; ?>
		
			<div class="content">
				<div class="wrapper">
					<div class="cta_columns_wrapper">
							<div class="content-left-column">
								<p class="preheader"><?php the_field('cta_preheader'); ?></p>
								<span class="divider"></span>
								<h2><?php the_field('cta_heading'); ?></h2>
								<p style="margin-bottom: 30px;"><?php the_field('cta_description'); ?></p>
							</div>	
							<div class="content-right-column">
								<div class="contact-form">
									<?php the_field('contact-form') ?>
								</div>
							</div>
					</div>
				</div><!-- / .wrapper -->	
			</div><!-- / .content -->	
	
		</div><!-- / #content -->
'		
</main><!-- / #main -->

<?php get_template_part( 'parts/footer-industry' ); ?>