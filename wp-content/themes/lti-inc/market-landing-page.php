<?php
/**
 * Template name: Market Landing Page
 */
?>
<?php get_template_part( 'parts/header' ); ?>

	<main id="main" role="main">
	
		<div id="content">
			<div class="wrapper">
			<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
				<h1><?php the_title(); ?></h1>
				<?php the_content(); ?>
			<?php endwhile; ?>
				<div class="market-list-view">	
					<?php $markets = get_field("markets"); ?>
					<?php if(!empty($markets)): ?>
					<div id="markets">
						<div class="wrapper">
							<?php while(the_repeater_field("markets")): ?>
							<div class="market">
								<div class="featured-image">
									<?php the_sub_field("featured_market_image"); ?>
								</div><!-- / .feature-image -->
								<div class="details">
									<h3><?php the_sub_field("market_title"); ?></h3>
									<p><?php the_sub_field("market_excerpt"); ?></p>
									<p class="read-more"><a href="<?php the_sub_field("url"); ?>">Read More <i class="fa fa-chevron-right"></i></a></p>
								</div><!-- / .details -->
							</div><!-- / .market -->
							<?php endwhile; ?>
						</div><!-- / .wrapper -->
					</div><!-- / #markets -->
					<?php endif; ?>
				</div><!-- .chains-landing-page-signposts -->
			</div><!-- / .wrapper -->
		</div><!-- / #content -->
			
	
	</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>