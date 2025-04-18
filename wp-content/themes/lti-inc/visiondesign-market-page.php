<?php
/**
 * Template Name: VisionDesign Market page
 */
?>
<?php get_template_part( 'parts/header' ); ?>

	<main id="main" role="main">
	
	<main id="main" role="main">
	
		<?php $slider = get_field("slider"); ?>
		<?php if(!empty($slider)): ?>
		<div id="slider">
			<?php while(the_repeater_field("slider")): ?>
			<?php $background = wp_get_attachment_image_src( get_sub_field('slide_image'), 'slider' ); ?>
			<div class="slide" style="background-image: url(<?php echo $background[0]; ?>);">
				<img src="<?php echo $background[0]; ?>" />
				<div class="overlay">
					<h2><?php the_sub_field("slide_header"); ?></h2>
					<?php $link_1_url = get_sub_field("slide_link_1"); $link_2_url = get_sub_field("slide_link_2"); $link_3_url = get_sub_field("slide_link_3"); ?>
					<?php $link_1_text = get_sub_field("slide_link_text_1"); $link_2_text = get_sub_field("slide_link_text_2"); $link_3_text = get_sub_field("slide_link_text_3"); ?>
					<?php if($link_1_url != ""): ?>
					<a href="<?php echo $link_1_url; ?>"><?php echo $link_1_text; ?> <i class="fa fa-chevron-right"></i></a>		
					<?php endif; ?>
					<?php if($link_2_url != ""): ?>
					<a href="<?php echo $link_2_url; ?>"><?php echo $link_2_text; ?> <i class="fa fa-chevron-right"></i></a>		
					<?php endif; ?>
					<?php if($link_3_url != ""): ?>
					<a href="<?php echo $link_3_url; ?>"><?php echo $link_3_text; ?> <i class="fa fa-chevron-right"></i></a>		
					<?php endif; ?>
				</div><!-- / .overlay -->
			</div><!-- / .slide -->
			<?php endwhile; ?>
			<div class="slider-nav"></div>
		</div><!-- / #slider -->
		<?php else: ?>
			<?php if(has_post_thumbnail()): ?>
			<?php $page_splash = wp_get_attachment_image_src(get_post_thumbnail_id( $post->ID ), 'page-splash'); ?>
			<div id="page-splash" style="background-image: url(<?php echo $page_splash[0]; ?>);">
			</div><!-- / #page-splash -->
			<?php endif; ?>
		<?php endif; ?>
		
		<div id="content" style="padding-top: 2.5vw;">
			<div class="wrapper">
				<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
					<div class="market-page-copy">
						<p class="preheader" style="margin-top: 0;">Products</p>
						<span class="divider"></span>
						<img style="padding-top: 35px;" src="https://lowtempind.com/wp-content/uploads/2016/01/lti-visiondesign-logo.png" width="284" height="42">
						<?php the_content(); ?>
					</div>
				<?php endwhile; ?>
				<?php wp_reset_query(); ?>
				
				<div class="infographic" style="margin-bottom: 5vw;">
					<h3 style="text-align: center;">See How We Can Help</h3>
					<p style="text-align: center;">Use our interactive infographic to see the areas where our VisionDesign team can help transform your dining area.</p>
					<?php echo do_shortcode('[hotspot id=41527 /]'); ?>
				</div>

				<div class="downloadable">
					<div class="download-tn">
						<a href="<?php the_field('download-link'); ?>"><?php the_field('thumbnail'); ?></a>
					</div>
					<div class="download-cta">
						<?php the_field('call-to-action'); ?>
						<a class="button green" href="<?php the_field('download-link'); ?>">Download the Catalog</a>
					</div>
				</div>	
				
				<div class="slider" style="margin-bottom: 5vw;">
					<h3 style="text-align: center;">Watch The Transformation</h3>
					<p style="text-align: center;">Here are just a few of the dining areas our VisionDesign team has helped to transform – use the slider to see the before and after of each installation.</p>
					<?php the_field('gallery') ?>
				</div>
				
				<div class="market-case-studies">
					<h3 style="text-align: center;">Case Studies & Recent Installations</h3>
						<?php $featured_cases = get_field("featured_cases"); ?>
						<?php if(!empty($featured_cases)): ?>
						<div class="case-study">
							<?php 
								$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
								$query_args = array(
									'post_type' => 'case-studies',
									'posts_per_page' => 3,
									'paged' => $paged,
									'post__in' => $featured_cases,
									'orderby' => 'post__in'	
								);
								$the_query = new WP_Query($query_args); ?>
							<?php while($the_query->have_posts()) : $the_query->the_post(); ?>
								<div class="single-case">
									<a class="image" href="<?php the_permalink(); ?>">
										<?php the_post_thumbnail(); ?>
									</a>
									<h4 class="title"><?php the_title(); ?></h4>
									<p class="location"><?php the_field("location"); ?></p>
									<p class="excerpt"><?php $excerpt = get_the_excerpt(); echo wp_trim_words( $excerpt , '25' ); ?></p>
									<a class="learn-more" href="<?php the_permalink(); ?>">Learn more <i class="fa fa-chevron-right"></i></a>
								</div>
							<?php endwhile; wp_reset_query(); ?>
						</div><!-- / .case-study -->
					<?php endif; ?>

				</div>
				
				<div class="market-page-form">
					<?php the_field('contact-form') ?>
				</div>
				
			</div><!-- / .wrapper -->
		</div><!-- / #content -->
	
	</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>