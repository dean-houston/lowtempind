<!-- https://support.advancedcustomfields.com/forums/topic/acf-fields-not-displaying-on-posts-page/ -->
<?php

$post_id = false;

if( is_home() )
{
	$post_id = 465; // specif ID of home page
}
?>

<!-- How to Post Object Field via https://www.youtube.com/watch?v=wlhZp9XIF4A -->
<?php $featured_post = get_field('featured_post', $post_id);
if( $featured_post ): ?>
	
<!-- https://support.advancedcustomfields.com/forums/topic/post-object-featured-image-url/ -->
<?php $featured_img_url = get_post_thumbnail_id( $featured_post->ID ); ?>
<div class="content-section" style="background-image: url(<?php echo wp_get_attachment_image_url( $featured_img_url, 'blog-image' ); ?>); background-repeat: no-repeat; background-size: cover; ">	
<!-- div class="content-section" style="background-image: url(<?php bloginfo('siteurl'); ?>/wp-content/themes/lti-inc/images/lti-texture-1920x1080-dark-blue.png); background-repeat: no-repeat; background-size: 100%; " -->	

	<div id="featured-post-wrapper">
		<div id="featured-post-details" style="border: 1px solid #ccc; display: inline-block;">	
			<!-- https://support.advancedcustomfields.com/forums/topic/get-the-feature-img-from-post-objects/ 
			< ?php echo get_the_post_thumbnail( $featured_post->ID, 'blog-image' ); ?> -->
			<!-- via https://wpmudev.com/blog/how-to-get-a-wordpress-category-name-without-the-link/ --> 
			<p style="text-transform: uppercase; font-size: 1em; color: #00457c;"><?php
			 foreach((get_the_category( $featured_post->ID )) as $category) { 
			 echo $category->cat_name . ' ';
			 }
			 ?></p> 
			<h2><a href="<?php echo get_the_permalink( $featured_post->ID ); ?>"><?php echo esc_html( $featured_post->post_title, $post_id ); ?></a></h2>
			<p><?php echo esc_html( $featured_post->post_excerpt, $post_id ); ?></p>
			<p class="read-more"><a href="<?php echo get_the_permalink( $featured_post->ID ); ?>">Read More</a></p>
		</div><!-- featured-post-details -->				
	<?php endif; wp_reset_query(); ?>
	</div><!-- / #featured-post-wrapper -->
	
	<div id="featured-post-sidebar">
		<div id="signup-form" >	
			<h4>Stay in the loop</h4>
			<p>Sign up now to get inspiration and important industry insights delivered to your inbox every month!</p>
			<?php echo do_shortcode( '[contact-form-7 id="ac27fd3" title="Subscribe to Blog"]' ); ?>
		</div><!-- signup-form -->
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