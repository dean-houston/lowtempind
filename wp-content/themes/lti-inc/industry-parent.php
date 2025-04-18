<?php
/**
Template Name: Industry Parent
 */
?>
<?php get_template_part( 'parts/header' ); ?>

	<main id="main" role="main">
	
		<div id="content">
		
			<div class="content">
				<div class="wrapper">
					<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
						<div class="intro">
							<p class="preheader"><?php the_field('preheader'); ?></p>
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
				</div><!-- / .wrapper -->
			</div><!-- / .content -->

			<?php $feature_row = get_field("feature_row"); ?>
			<?php if(!empty($feature_row)): ?>
			<div class="content-section grey">
				<div class="wrapper">			
					<h2><?php the_field('feature_row_heading'); ?></h2>
					<?php while(the_repeater_field("feature_row")): ?>
					<div class="feature_row" style="background: <?php the_sub_field("feature_color_palette"); ?>; display: inline-block; margin-bottom: 30px;">
						<div class="content-left-column m-slider">
							<?php the_sub_field("slider_shortcode"); ?>
						</div>
						<div class="content-right-column" style="padding: 25px;">
							<h3 style="color: #fff; text-align: left;"><?php the_sub_field("title"); ?></h3>
							<p style="color: #fff; text-align: left;"><span class="subheading"><?php the_sub_field("subtitle"); ?></span>
							<p style="color: #fff; text-align: left;"><?php the_sub_field("text"); ?></p>
							<p style="color: #fff; text-align: left;"><a class="read-more" style="color: #fff; font-weight: 700; text-decoration: none;" href="<?php the_sub_field("url"); ?>" title="<?php the_sub_field("url_title_tag"); ?>">Explore <i class="fa fa-chevron-right"></i></a></p>
						</div><!-- / .feature_row_text -->
					</div><!-- / .feature_row -->
					<?php endwhile; ?>
					</div>
				</div><!-- / .wrapper -->
			</div><!-- / .content-section grey -->
			<?php endif; ?>

			<?php $cta_preheader = get_field('cta_preheader'); ?>
			<?php if(!empty($cta_preheader)): ?>			
				<div class="content-section">
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
			<?php endif; ?>
		
		</div><!-- / #content -->	
		
	</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>