		<?php $hero_background_image = get_field('hero_background_image'); ?>
		<?php if(!empty($hero_background_image)): ?>
		<div id="hero">
			<div id="hero-overlay" style="background-image: url('<?php the_field('hero_background_image'); ?>')<?php the_field('hero_background_gradient'); ?>; background-position: <?php the_field('hero_background_position'); ?>; background-size: <?php the_field('hero_background_size'); ?>; background-repeat: <?php the_field('hero_background_repeat'); ?>;">
				<div class="content-section">
					<div class="wrapper">
						<div class="header-wrap">
							<div class="bcnxt"><?php if( function_exists( 'bcn_display' ) ) bcn_display(); ?></div>
							
							<?php $imageID = get_field('optional_logo'); ?>
							<?php if(!empty($imageID)): ?>
							<?php $image = wp_get_attachment_image_src( $imageID, 'full' ); ?>
							<?php $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true); ?>
							<img src="<?php echo $image[0]; ?>" alt="<?php echo $alt_text; ?>" />							
							<?php endif; ?>
							
							<h1><?php the_title(); ?></h1>
							<span class="divider"></span>
							<?php the_field('hero_text'); ?>
							<?php $hero_button_label = get_field('hero_button_label'); ?>
							<?php if(!empty($hero_button_label)): ?>
							<a class="button <?php the_field('hero_button_class'); ?>" style="margin-top: 30px;" href="<?php the_field('hero_button_link'); ?>" target="_blank"><?php the_field('hero_button_label'); ?></a>
							<?php endif; ?>
						</div><!-- / .header-wrap -->
					</div><!-- / .wrapper -->
				</div><!-- / .content-section  -->
			</div><!-- #hero-overlay -->
		</div><!-- / #hero -->

		<!-- mobile hero section -->	
		<div id="hero-mobile-image" style="background-image: url('<?php the_field('hero_background_image'); ?>')<?php the_field('hero_background_gradient'); ?>; background-position: <?php the_field('hero_background_position'); ?>; background-size: <?php the_field('hero_background_size'); ?>; background-repeat: <?php the_field('hero_background_repeat'); ?>;">
			<div class="content-section">
				<div class="wrapper">
					<div class="header-wrap">
						<div class="bcnxt"><?php if( function_exists( 'bcn_display' ) ) bcn_display(); ?></div>
						<h1><?php the_title(); ?></h1>
						<?php $hero_button_label = get_field('hero_button_label'); ?>
						<?php if(!empty($hero_button_label)): ?>
						<a class="button <?php the_field('hero_button_class'); ?>" style="margin-top: 30px;" href="<?php the_field('hero_button_link'); ?>"><?php the_field('hero_button_label'); ?></a>
						<?php endif; ?>
					</div><!-- / .header-wrap -->
				</div><!-- / .wrapper -->
			</div><!-- / .content-section  -->		
		</div><!-- / #hero-mobile-image -->
		<?php endif; ?><!-- / hide hero section if no bg image  -->

		<?php $hero_text = get_field('hero_text'); ?>
		<?php if(!empty($hero_text)): ?>		
		<div id="hero-mobile-overlay">
			<div class="content-section">
				<div class="wrapper">
					<div class="header-wrap">
						<?php $imageID = get_field('optional_logo'); ?>
						<?php if(!empty($imageID)): ?>
						<?php $image = wp_get_attachment_image_src( $imageID, 'full' ); ?>
						<?php $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true); ?>
						<img src="<?php echo $image[0]; ?>" alt="<?php echo $alt_text; ?>" style="max-width: 50%; margin-bottom: 0px;"/>
						<?php endif; ?>
						<?php the_field('hero_text'); ?>
					</div><!-- / .header-wrap -->	
				</div><!-- / .wrapper -->
			</div><!-- / .content-section  -->
		</div><!-- / #hero-mobile-overlay  -->	
		<!-- / mobile hero section -->	
		<?php endif; ?>