<?php
/**
* Template
* via https://wordpress.stackexchange.com/questions/95902/stop-blog-page-from-using-index-php
*/
?>
<?php get_template_part( 'parts/header' ); ?>

<main id="main" role="main">

	<div id="content" >
		<div class="wrapper" style="padding-bottom: 0;">
			<h1><?php single_post_title(); ?></h1>


			<?php
			// Define our WP Query Parameters
			$the_query = new WP_Query( array(
				'posts_per_page' => 1,
				'ignore_sticky_posts' => 1,
			) ); ?>
			<?php
			// Start our WP Query
			while ($the_query -> have_posts()) : $the_query -> the_post();
			?>	
			<div class="content-section" style="background-color: #00457c;">	

				<div id="featured-post-wrapper"  style="background-image: url('<?php the_post_thumbnail_url();?>'); background-repeat: no-repeat; background-size: cover; min-height: 500px;">
					<div id="featured-post-details">	
						<h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>
						<p class="read-more"><a href="<?php echo get_the_permalink(); ?>">Read More</a></p>
					</div><!-- featured-post-details -->
				</div><!-- / #featured-post-wrapper -->
				<?php
				// Repeat the process and reset once it hits the limit
				endwhile;
				wp_reset_postdata();
				?>
				
				<div id="featured-post-sidebar" style="background-color: #f2f2f2;">
					<!-- <div id="signup-form" >	
						<h4>Stay in the loop</h4>
						<p>Sign up now to get inspiration and important industry insights delivered to your inbox every month!</p>
						< ?php echo do_shortcode( '[contact-form-7 id="ac27fd3" title="Subscribe to Blog"]' ); ?>
					</div> signup-form -->
					<div id="search-form">
						<h4>Find it fast with search</h4>
						<p>Search our content by product name, industry, or key words</p>
						<?php if ( function_exists( 'wpes_search_form' ) ) {
							wpes_search_form( array( 
								'wpessid' => 68698 
							) );
						} ?>
					</div><!-- search form -->
				</div><!-- featured-post-sidebar -->
				
			</div><!-- / .content-section -->
						
		</div><!-- .wrapper -->
		
		
		<div class="wrapper">
			<?php echo do_shortcode( '[wpupg-grid-with-filters id="post-grid"]' ); ?>
		</div><!-- .wrapper -->
	</div><!-- #content -->

	<div id="blog-signup" class="content-section" style="border-top: 1px solid #ccc;">
		<div class="wrapper">
			<div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile is-style-tw-shadow has-background">
				<div class="wp-block-media-text__content" style="border: 0; padding: 30px 30px 30px 0;">
					<h2>Keep the inspiration going</h2>
					<p>Don’t miss out on the solutions and industry news that affect you most — subscribe now! </p>
					<?php echo do_shortcode( '[contact-form-7 id="ac27fd3" title="Subscribe to Blog"]' ); ?>
					<p class="policy">Your email address is safe with us.</p>
				</div><!-- .wp-block-media-text__content -->
				<figure class="wp-block-media-text__media" >
					<img class="size-full" style="margin-bottom: 0;" src="https://lowtempind.com/wp-content/uploads/2023/08/subscribe-to-our-blog.jpg" >
				</figure>	
			</div>
		</div><!-- / .wrapper -->
	</div><!-- / .content-section.gray-->

	<!--<nav id="pagination">
			<ul>
				<li class="prev">< ?php echo get_previous_posts_link( '<i class="fa fa-chevron-left"></i> Previous Posts'); ?></li>
				<li class="next">< ?php echo get_next_posts_link( 'More Posts <i class="fa fa-chevron-right"></i>'); ?></li>
			</ul>
	</nav> / #pagination -->

</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>