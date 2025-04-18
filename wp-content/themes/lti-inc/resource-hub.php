<?php
/**
 * Template Name: Resource Hub
 */
?>
<?php get_template_part( 'parts/header' ); ?>

	<main id="main" role="main">
	
		<?php if(has_post_thumbnail()): ?>
		<?php $page_splash = wp_get_attachment_image_src(get_post_thumbnail_id( $post->ID ), 'page-splash'); ?>
		<?php $intro_text = get_field("intro_text"); ?>
		<div id="page-splash" style="background-image: url(<?php echo $page_splash[0]; ?>);">
			<?php if($intro_text != ""): ?>
			<div id="page-title">
				<div class="wrapper">
					<h1><?php echo $intro_text; ?></h1>
				</div><!-- / .intro-text -->
			</div><!-- / #page-title -->
			<?php endif; ?>
		</div><!-- / #page-splash -->
		<?php endif; ?>
		
		<div id="content">
			<div class="wrapper">
			<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
				<div class="bcnxt"><?php if( function_exists( 'bcn_display' ) ) bcn_display(); ?></div>
				<span class="divider"></span>
				<h1><?php the_title(); ?></h1>
				<?php the_content(); ?>
			<?php endwhile; ?>
				<div class="resource-hub-signposts">	
					<?php $signposts = get_field("signposts"); ?>
					<?php if(!empty($signposts)): ?>
					<div id="signposts">
						<div class="wrapper">
							<?php while(the_repeater_field("signposts")): ?>
							<?php $background = wp_get_attachment_image_src( get_sub_field('background_image'), 'signpost' ); ?>
							<div class="signpost" style="background-image: url(<?php echo $background[0]; ?>);">
								
								<div class="white-mask"><a href="<?php the_sub_field("url"); ?>"></a></div>
								<?php $colour = get_sub_field("hover_colour"); ?>
								<div class="orange-mask" style="background: <?php echo $colour; ?>"></div>
								
									<div><a href="<?php the_sub_field("url"); ?>" title="<?php the_sub_field("url_title_tag"); ?>" target="<?php the_sub_field("url_target"); ?>">
										<div class="details">
												<h3><?php the_sub_field("title"); ?><br /><span style="font-weight: initial; text-transform: initial;"><?php the_sub_field("subtitle"); ?></span></h3>
										</div><!-- / .details -->
									</a></div>
									
							</div><!-- / .signpost -->
							<?php endwhile; ?>
						</div><!-- / .wrapper -->
					</div><!-- / #signposts -->
					<?php endif; ?>
				</div><!-- .resource-hub-signposts -->
			</div><!-- / .wrapper -->
		</div><!-- / #content -->
	
	</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>