<?php

	/**
	 * Theme functions
	 */
	
	/* ---------------------------------------------------------------------------------------------------------- 
		External files
	---------------------------------------------------------------------------------------------------------- */

	// require_once( 'external/acf/acf-lite.php' );

	//add_filter(
		//'be_media_from_production_url',
		//function () {
			//return 'https://lowtempind.com/';
		//}
	//);
	
	define( 'WP_ROCKET_EMAIL', 'vantagepointmarketing@gmail.com');
	define( 'WP_ROCKET_KEY', '50900154');
	
	/* CASE STUDY SLIDER -- https://support.advancedcustomfields.com/forums/topic/how-to-use-alt-tags/ */
	function get_image_with_alt($background, $postID, $imagesize = 'slider'){
	$imageID = get_sub_field($background, $postID); 
	$image = wp_get_attachment_image_src( $imageID, $imagesize ); 
	$alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true); 
	return '<img src="' . $image[0] . '" alt="' . $alt_text . '" />';
	}

	/* Register menus, thumbnail sizes and widget areas */

	add_theme_support( 'post-thumbnails' );
	add_image_size( 'page-splash', 2000, 550, true ); /* originally 1500, 550 */
	add_image_size( 'market-page-splash', 2000, 550, true ); /* originally 1500, 750 */
	add_image_size( 'signpost', 800, 800, true );
	add_image_size( 'slider', 9999, 550, false );
	add_image_size( 'sidebar-case-study', 280, 190, true );
	add_image_size( 'list-image', 768, 512, true );
	add_image_size( 'gallery-item-thumb', 500, 500, true );
	add_image_size( 'gallery-item-full', 1200, 800, true );
	add_image_size( 'blog-image', 1200, 630, true );
	
	the_post_thumbnail( 'blog-image' ); 
	
	register_nav_menus( array( 'primary' => 'Primary Navigation' ) );
	register_nav_menus( array( 'secondary' => 'Secondary Navigation' ) );
	register_nav_menus( array( 'mobile' => 'Mobile Navigation' ) );
	
	register_sidebar( array(
		'name'=> 'Page sidebar',
		'id' => 'page-sidebar',
		'before_widget' => '<div class="widget">',
		'after_widget' => '</div>',
		'before_title' => '<h3>',
		'after_title' => '</h3>'
	));
	
	register_sidebar( array(
		'name'=> 'Single case studies sidebar',
		'id' => 'single-case-studies-sidebar',
		'before_widget' => '<div class="widget">',
		'after_widget' => '</div>',
		'before_title' => '<h3>',
		'after_title' => '</h3>'
	));
	
	register_sidebar( array(
		'name'=> 'Single products sidebar',
		'id' => 'single-products-sidebar',
		'before_widget' => '<div class="widget">',
		'after_widget' => '</div>',
		'before_title' => '<h3>',
		'after_title' => '</h3>'
	));
	
	register_sidebar( array(
		'name'=> 'Blog sidebar',
		'id' => 'blog-sidebar',
		'before_widget' => '<div class="widget">',
		'after_widget' => '</div>',
		'before_title' => '<h3>',
		'after_title' => '</h3>'
	));
	
	register_sidebar( array(
		'name' => 'First Footer Area',
		'id' => 'sidebar-footer-1',
		'before_widget' => '<div class="widget">',
		'after_widget' => '</div>',
		'before_title' => '<h3>',
		'after_title' => '</h3>'
	));
	
	register_sidebar( array(
		'name' => 'Second Footer Area',
		'id' => 'sidebar-footer-2',
		'before_widget' => '<div class="widget">',
		'after_widget' => '</div>',
		'before_title' => '<h3>',
		'after_title' => '</h3>'
	));
	
	register_sidebar( array(
		'name' => 'Third Footer Area',
		'id' => 'sidebar-footer-3',
		'before_widget' => '<div class="widget">',
		'after_widget' => '</div>',
		'before_title' => '<h3>',
		'after_title' => '</h3>'
	));
	
	register_sidebar( array(
		'name' => 'Fourth Footer Area',
		'id' => 'sidebar-footer-4',
		'before_widget' => '<div class="widget">',
		'after_widget' => '</div>',
		'before_title' => '<h3>',
		'after_title' => '</h3>'
	));	
	
	
	/* ---------------------------------------------------------------------------------------------------------- 
		Functions and filters
	---------------------------------------------------------------------------------------------------------- */


	
	
	function get_page_id_from_path( $path ) {
		$page = get_page_by_path( $path );
		if( $page ) return $page->ID;
		return null;
	}
	
	function get_category_id( $cat_name ){
		$term = get_term_by( 'name', $cat_name, 'category' );
		return $term->term_id;
	}
	
	function add_slug_to_body_class( $classes ) {
		global $post;
	   
		if( is_home() ) {			
			$key = array_search( 'blog', $classes );
			if($key > -1) unset( $classes[$key] );
		} elseif( is_page() ) {
			$classes[] = sanitize_html_class( $post->post_name );
		} elseif( is_singular() ) {
			$classes[] = sanitize_html_class( $post->post_name );
		};
	
		return $classes;
	}
	
	add_filter( 'body_class', 'add_slug_to_body_class' );

	function enqueue_comments_reply() {
		if( get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}
	}
	
	add_action( 'comment_form_before', 'enqueue_comments_reply' );
	
	function script_enqueuer() {
		wp_register_script( 'site', get_stylesheet_directory_uri().'/js/site-min.js' );
		wp_enqueue_script( 'site' );

		wp_register_style( 'screen', get_stylesheet_directory_uri().'/css/style-min.css', '', '', 'screen' );
        wp_enqueue_style( 'screen' );
	}
	 
	add_action( 'wp_enqueue_scripts', 'script_enqueuer' );
	
	wp_enqueue_style( 'dashicons' );
	

/* ---------------------------------------------------------------------------------------------------------- 
	Custom post types and taxonomies
---------------------------------------------------------------------------------------------------------- */
	

/* added for chains landing page via https://support.advancedcustomfields.com/forums/topic/adding-custom-css-class-in-body_class/ - 2.22.20 */
function add_acf_body_class($class) {
    $queried_object_id = get_queried_object_id();
    $value = get_field('lti-logo', $queried_object_id);
    $class[] = $value;
    return $class;
}
add_filter('body_class', 'add_acf_body_class');


// via https://wpbeaches.com/removing-scheduled-actions-woocommerce-action-scheduler/
add_filter( 'action_scheduler_retention_period', 'wpb_action_scheduler_purge' );
/**
 * Change Action Scheduler default purge to 1 week
 */
function wpb_action_scheduler_purge() {
 return WEEK_IN_SECONDS;
}

/**
 * Fixes empty <p> and <br> tags showing before and after shortcodes in the
 * output content. 
 */
function pb_the_content_shortcode_fix($content) {
    $array = array(
        '<p>['    => '[',
        ']</p>'   => ']',
        ']<br />' => ']',
        ']<br>'   => ']'
    );
    return strtr($content, $array);
}
add_filter('the_content', 'pb_the_content_shortcode_fix');


//Disable the Read More link added by Send Images to RSS (Ben @ VantagePoint bkammer@vantagep.com)
add_filter( 'send_images_rss_excerpt_read_more', '__return_false' );


//Limit number of revisions
define( 'WP_POST_REVISIONS', 3 );

// Disable ACF unsafe HTML error messages entirel
add_filter( 'acf/admin/prevent_escaped_html_notice', '__return_true' );


// via themeisle.com/blog/wordpress-custom-javascript/#functions-php
function ti_custom_javascript() {
  if (is_page ('15')) { 
    ?>
<script type="text/javascript">
var num_runs = 0;	  
var intervalID = window.setInterval(function() {
	if(window.location.href.indexOf("service.lowtempind.com")) {
	var url_array = window.location.href.split("/");
	var serial_number = url_array.slice(-1);
	if (/^\d{4}-\d{1,25}$/.test(serial_number)) {
		document.getElementsByName("your-serialnumber")[0].value = serial_number;
	}
	num_runs += 1;
	if (num_runs === 5) {
		window.clearInterval(intervalID);
	}
	}
}, 1000);
</script>
    <?php
  }
}
add_action('wp_head', 'ti_custom_javascript');