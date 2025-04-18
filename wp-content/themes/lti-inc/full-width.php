<?php
/**
 * Template Name: Full width page
 */
?>
<?php get_template_part( 'parts/header' ); ?>

	<main id="main" role="main">
		
		<div id="content">
		
			<?php get_template_part( 'parts/hero-page' ); ?>
		
			<div class="wrapper" style="padding-bottom: 0;">
			<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
				<?php the_content(); ?>
			<?php endwhile; ?>
			</div><!-- / .wrapper -->

			<?php get_template_part( 'parts/featured-team' ); ?>	
			<?php get_template_part( 'parts/two-column-layout' ); ?>			
			<?php get_template_part( 'parts/video-wall' ); ?>
			<?php get_template_part( 'parts/media-text' ); ?>
			<?php get_template_part( 'parts/accordion' ); ?>
			<?php get_template_part( 'parts/featured-content' ); ?>
			<?php get_template_part( 'parts/featured-media' ); ?>
		
		</div><!-- / #content -->
	
	</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>

<?php $accordion = get_field("insert_accordion"); ?>
<?php if(!empty($accordion)): ?>	
<script type='text/javascript' id='accordion-shortcodes-script-js-extra'>
/* <![CDATA[ */
var accordionShortcodesSettings = [{"id":"accordion-1","autoClose":true,"openFirst":false,"openAll":false,"clickToClose":true,"scroll":false,"usebuttons":false}];
/* ]]> */
</script>
<script type='text/javascript' src='https://lowtempind.com/wp-content/plugins/accordion-shortcodes/accordion.min.js?ver=2.4.2' id='accordion-shortcodes-script-js'></script>
<?php endif; ?>