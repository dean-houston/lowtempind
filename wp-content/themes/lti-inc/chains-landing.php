<?php
/**
 * Template Name: Chains Landing Page
 */
?>
<?php get_template_part( 'parts/header-chains-landing' ); ?>

	<main id="main" role="main">
	
		<div id="content">
			<div class="wrapper">
			<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
				<div class="chains-landing-page-copy">
					<h1><?php the_title(); ?></h1>
					<?php the_content(); ?>
				</div>
				<div class="chains-landing-page-featured-image">				
					<?php if(has_post_thumbnail()): ?>
					<?php the_post_thumbnail(); ?>
					<?php endif; ?>
				</div>
				<div class="chains-landing-page-form">
					<h3>Put Our Solutions to Work For You</h3>
					<p>Complete the form below to learn more about LTI's lineup of innovative serving solutions.</p>
					<?php the_field('contact-form') ?>

<!-- SHARPSPRING FORM SCRIPT (Ben @ VantagePoint) -->

<script>
var wpcf7Elm = jQuery('#ss_chain_landing_page').closest('.wpcf7')[0];
wpcf7Elm.addEventListener( 'wpcf7mailsent',
function( event )
{ __ss_noform.push(['submit', null, '863b94fa-e87c-4031-9982-4eb1c15b6375']); },
false );
</script>

<script type="text/javascript">
    var __ss_noform = __ss_noform || [];
    __ss_noform.push(['baseURI', 'https://app-3QNLEGUAPI.marketingautomation.services/webforms/receivePostback/MzawMDG3tLSwBAA/']);
    __ss_noform.push(['form', 'ss_chain_landing_page', '863b94fa-e87c-4031-9982-4eb1c15b6375']);
 __ss_noform.push(['submitType', 'manual']);

</script>
<script type="text/javascript" src="https://koi-3QNLEGUAPI.marketingautomation.services/client/noform.js?ver=1.24"></script>

<!-- end SHARPSPRING FORM SCRIPT -->

				</div>
			<?php endwhile; ?>
			</div><!-- / .wrapper -->
		</div><!-- / #content -->

		<div id="content" class="narrow-white">
			<div class="wrapper" style="overflow: unset;">
				<div class="chains-landing-page-midpoint"></div>
				<div class="chains-landing-page-who-we-are"><?php the_field('who-we-are') ?></div>
				<div class="chains-landing-page-signposts">	
					<?php $signposts = get_field("signposts"); ?>
					<?php if(!empty($signposts)): ?>
					<div id="signposts">
						<h3>How We Solve Other Challenges</h3>
						<div class="wrapper">
							<?php while(the_repeater_field("signposts")): ?>
							<?php $background = wp_get_attachment_image_src( get_sub_field('background_image'), 'signpost' ); ?>
							<div class="signpost" style="background-image: url(<?php echo $background[0]; ?>);">
								<div class="white-mask"><a href="<?php the_sub_field("url"); ?>"></a></div>
								<?php $colour = get_sub_field("hover_colour"); ?>
								<div class="orange-mask" style="background: <?php echo $colour; ?>"></div>
								<div class="details">
										<h3><a href="<?php the_sub_field("url"); ?>"><?php the_sub_field("title"); ?> <i class="fa fa-chevron-right"></i></a></h3>
								</div><!-- / .details -->
							</div><!-- / .signpost -->
							<?php endwhile; ?>
						</div><!-- / .wrapper -->
					</div><!-- / #signposts -->
					<?php endif; ?>
				</div><!-- .chains-landing-page-signposts -->
				<div class="carousel">
					<h3>Gallery</h3>
					<?php the_field('gallery') ?>
				</div>
			</div><!-- / .wrapper -->
		</div><!-- / #content -->
		
	</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>