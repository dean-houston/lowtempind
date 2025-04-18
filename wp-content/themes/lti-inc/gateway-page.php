<?php
/**
 * Template Name: Gateway Page
 */
?>
<?php get_template_part( 'parts/gateway/header' ); ?>

	<main id="main" role="main">
	
		<?php if(has_post_thumbnail()): ?>
		<?php $page_splash = wp_get_attachment_image_src(get_post_thumbnail_id( $post->ID ), 'page-splash'); ?>
		<?php $intro_text = get_field("intro_text"); ?>
		<div id="page-splash--home" style="background-image: url(<?php echo $page_splash[0]; ?>);">
			<?php if($intro_text != ""): ?>
			<div id="page-title--home">
				<div class="wrapper">
					<div class="end-users splash-half">
						<div class="splash-half__inner">
							<h2>Owners &amp; End Users <i class="fa fa-chevron-right"></i></h2>
							<span class="divider"></span>
							<p>If you’re an owner or end user in the foodservice industry, enter here for a more streamlined online experience.</p>
						</div><!-- / .splash-half__inner -->
						<a id="end-user" class="button green" href="<?php bloginfo('siteurl'); ?>/end-user/">Enter</a>
					</div><!-- / .end-users splash-half-->
					<div class="specifiers splash-half">
						<div class="splash-half__inner">
							<h2>Specifiers &amp; Designers <i class="fa fa-chevron-right"></i></h2>
							<span class="divider"></span>
							<p>If you’re a specifier, consultant or designer working for a client, enter here for a more tailored online experience.</p>
						</div><!-- / .splash-half__inner -->
						<a id="specifier" class="button green" href="<?php bloginfo('siteurl'); ?>/specifier/">Enter</a>
					</div><!-- / .specifiers splash-half-->
				</div><!-- / .intro-text -->
			</div><!-- / #page-title -->
			<?php endif; ?>
		</div><!-- / #page-splash -->
		<?php endif; ?>
		
		<div id="content">
			<div class="wrapper">
			<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
				<?php the_content(); ?>
			<?php endwhile; ?>
			</div><!-- / .wrapper -->
		</div><!-- / #content -->
	
	</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>