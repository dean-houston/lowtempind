		<div id="hero">
			<div id="hero-overlay" style="background-image: url('<?php the_field('hero_background_image'); ?>'), linear-gradient(to right, rgb(8, 106, 178, 1.0), transparent 60%); background-position: <?php the_field('hero_background_position'); ?>; background-size: <?php the_field('hero_background_size'); ?>;">
				<div class="content-section">
					<div class="wrapper">
						<div class="header-wrap">
							<!-- <div class="bcnxt">< php if( function_exists( 'bcn_display' ) ) bcn_display(); ?></div> -->
							<p class="preheader"><?php the_field('before_hero_text'); ?></p>
							
							<?php $imageID = get_field('optional_logo'); ?>
							<?php if(!empty($imageID)): ?>
							<?php $image = wp_get_attachment_image_src( $imageID, 'full' ); ?>
							<?php $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true); ?>
							<img src="<?php echo $image[0]; ?>" alt="<?php echo $alt_text; ?>" />
							
							<h1 style="font-size: 0; margin: 0;"><?php the_title(); ?></h1>
							<?php else: // field_name returned false ?>
							<h1><?php the_title(); ?></h1>
							<?php endif; ?>
							<span class="divider"></span>
							<?php the_field('hero_text'); ?>
							<?php $hero_button_label = get_field('hero_button_label'); ?>
							<?php if(!empty($hero_button_label)): ?>
							<a class="button ghost js-open-modal" data-modal-id="popup" style="margin-top: 30px;" href="<?php the_field('hero_button_link'); ?>"><?php the_field('hero_button_label'); ?></a>
							<?php endif; ?>
						</div><!-- / .header-wrap -->
					</div><!-- / .wrapper -->
				</div><!-- / .content-section  -->
			</div><!-- #hero-overlay -->
		</div><!-- / #hero -->

		<!-- mobile hero section -->	
		<div id="hero-mobile-image" style="background-image: url('<?php the_field('hero_background_image'); ?>'), linear-gradient(to right, rgb(8, 106, 178, 1.0), transparent 60%); background-position: <?php the_field('hero_background_position'); ?>; background-size: <?php the_field('hero_background_size'); ?>;">
			<div class="content-section">
				<div class="wrapper">
					<div class="header-wrap">
						<div class="bcnxt"><?php if( function_exists( 'bcn_display' ) ) bcn_display(); ?></div>
						<h1><?php the_title(); ?></h1>
						<?php $hero_button_label = get_field('hero_button_label'); ?>
						<?php if(!empty($hero_button_label)): ?>
						<a class="button green" style="margin-top: 30px;" href="<?php the_field('hero_button_link'); ?>"><?php the_field('hero_button_label'); ?></a>
						<?php endif; ?>
					</div><!-- / .header-wrap -->
				</div><!-- / .wrapper -->
			</div><!-- / .content-section  -->		
		</div><!-- / #hero-mobile-image -->
		
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
		
		
		<div id="popup" class="modal-box">  
			<header>
				<a href="#" class="js-modal-close close">x</a>
			</header>
			<div class="modal-body">
				<?php $feature_list = get_field("feature_list"); ?>
				<?php if(!empty($feature_list)): ?>			
					<h2><?php the_field('features_text'); ?></h2>
					<?php if( have_rows('feature_list') ): ?>
							<ul class="feature_list">
							<?php while( have_rows('feature_list') ): the_row(); 
								$list_item = get_sub_field('list_item');
								?>
								<i class="fa-solid fa-check"></i> <li>
									<?php echo the_sub_field('list_item'); ?>
								</li>
							<?php endwhile; ?>
						</ul>
					<?php endif; ?>
				<?php endif; ?>
			</div>
		</div>