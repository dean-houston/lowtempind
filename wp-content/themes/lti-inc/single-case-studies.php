<?php
/**
 * Single case studies page
 */
?>
<?php get_template_part( 'parts/header' ); ?>

	<main id="main" role="main">
	
		<?php $slider = get_field("slider"); ?>
		<?php if(!empty($slider)): ?>
		<div id="slider">
			<?php while(the_repeater_field("slider")): ?>
			
			<?php $background = wp_get_attachment_image_src( get_sub_field('slide_image'), 'slider' ); ?>
			
			<div class="slide" style="background-image: url(<?php echo $background[0]; ?>);">
				<!-- CASE STUDY SLIDER -- https://support.advancedcustomfields.com/forums/topic/how-to-use-alt-tags/ -->
				<?php echo get_image_with_alt('slide_image', get_the_ID() ); ?>
				<?php $slide_header = get_sub_field("slide_header"); ?>
				<?php if(!empty($slide_header)): ?>
				<div class="overlay">
					<h2><?php the_sub_field("slide_header"); ?></h2>
					<?php $link_1_url = get_sub_field("slide_link_1"); $link_2_url = get_sub_field("slide_link_2"); $link_3_url = get_sub_field("slide_link_3"); ?>
					<?php $link_1_text = get_sub_field("slide_link_text_1"); $link_2_text = get_sub_field("slide_link_text_2"); $link_3_text = get_sub_field("slide_link_text_3"); ?>
					<?php if($link_1_url != ""): ?>
					<a href="<?php echo $link_1_url; ?>"><?php echo $link_1_text; ?> <i class="fa fa-chevron-right"></i></a>		
					<?php endif; ?>
					<?php if($link_2_url != ""): ?>
					<a href="<?php echo $link_2_url; ?>"><?php echo $link_2_text; ?> <i class="fa fa-chevron-right"></i></a>		
					<?php endif; ?>
					<?php if($link_3_url != ""): ?>
					<a href="<?php echo $link_3_url; ?>"><?php echo $link_3_text; ?> <i class="fa fa-chevron-right"></i></a>		
					<?php endif; ?>
				</div><!-- / .overlay -->
				<?php endif; ?>
			</div><!-- / .slide -->
			<?php endwhile; ?>
			
			<div class="slider-nav"></div>
		</div><!-- / #slider -->
		<?php endif; ?>
		
		<div class="wrapper">
			<div id="content" class="narrow">
				<div class="bcnxt"><?php if( function_exists( 'bcn_display' ) ) bcn_display(); ?></div>
				<!-- <p class="preheader">Case Study</p> -->
				<span class="divider"></span>
				<h1><?php the_title(); ?></h1>
				<p class="location"><?php the_field("location"); ?></p>
				<ul class="case-study-links">
					<li class="mood"><?php echo do_shortcode( '[gpimb-btn-addto label="Add to Mood Book" ifnew="Add to Mood Book"]' ); ?></li>
					<li class="mood"><?php echo do_shortcode( '[gpimb-btn-view label="View Mood Book" ifnew="View Mood Book"]' ); ?></li>
					<!-- <li class="share"><a href="mailto:?subject=GPI Design has a good resource for our project, take a look&body=<?php the_permalink(); ?>">Share this</a></li> -->
					<!-- <li class="quote"><a href="http://gpidesign.com/resources/get-a-quote/" title="Get a quote on your backlit architectural feature">Got a project? Get a quote</a></li> -->
				</ul>
				<?php if(isset($_COOKIE["user"])): ?>
				<div id="intro">
					<?php $user = $_COOKIE["user"]; ?>
					<?php if($user == "specifier"): ?>
						<?php $intro = get_field("specifier_intro"); ?>
							<?php echo $intro; ?>
					<?php elseif($user == "end-user"): ?>
						<?php $intro = get_field("end_user_intro"); ?>
							<?php echo $intro; ?>
					<?php endif; ?>
				</div><!-- / #intro -->
				<?php endif; ?>
				
				<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
					<?php the_content(); ?>
				<?php endwhile; ?>
				<?php wp_reset_query(); ?>
				<!-- share via jetpack -->
			</div><!-- / #content -->
			
			<div id="sidebar">
				<h3>More case studies</h3>
				<span class="divider"></span>
				<div id="case-study-slider">
					<?php $loop = new WP_Query(array('post_type' => 'case-studies', 'posts_per_page' => 5, 'post__not_in' => array($post->ID))); ?>
					<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
					<div class="case-study">
						<a class="image" href="<?php the_permalink(); ?>">
							<?php the_post_thumbnail('sidebar-case-study'); ?>
						</a>
						<h4 class="title"><?php the_title(); ?></h4>
						<p class="location"><?php the_field("location"); ?></p>
						<p class="excerpt"><?php $excerpt = get_the_excerpt(); echo wp_trim_words( $excerpt , '25' ); ?></p>
						<a class="learn-more" href="<?php the_permalink(); ?>">Learn more <i class="fa fa-chevron-right"></i></a>
					</div><!-- / .case-study -->
					<?php endwhile; ?>
					<?php wp_reset_query(); ?>
				</div><!-- / #case-study-slider -->
				<div class="case-study-slider-nav">
					<button class="case-study-slider-prev"><i class="fa fa-chevron-left"></i> Previous</button>
					<button class="case-study-slider-next">Next <i class="fa fa-chevron-right"></i></button>
				</div>
				<?php dynamic_sidebar( 'single-case-studies-sidebar' ); ?>
			</div><!-- / #sidebar -->
		</div><!-- / .wrapper -->

		<?php $featured_products = get_field("featured_products"); ?>
		<?php if(!empty($featured_products)): ?>
		<div id="featured-products" class="content-section">
			<div class="wrapper">
				<h3>Featured Products</h3>
				<div id="post-list" class="list-view">
				<?php 
					$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
					$query_args = array(
						'post_type' => 'product',
						'posts_per_page' => 8,
						'paged' => $paged,
						'post__in' => $featured_products,
						'orderby' => 'post__in'	
					);
					$the_query = new WP_Query($query_args); ?>
				<?php while($the_query->have_posts()) : $the_query->the_post(); ?>
					<div class="item">
						<a href="<?php the_permalink(); ?>">
							<div class="featured-image">
								<?php the_post_thumbnail('list-image'); ?>
							</div><!-- / .feature-image -->
							<div class="item-detail">
								<h3><?php the_title(); ?></h3>
								<p><?php $excerpt = get_the_excerpt(); echo wp_trim_words( $excerpt , '35' ); ?></p>
								<p class="read-more">Read More <i class="fa fa-chevron-right"></i></p>
							</div><!-- / .item-detail -->
						</a>
					</div><!-- / .item -->
				<?php endwhile; wp_reset_query(); ?>
				</div><!-- / #post-list .list-view -->
			</div><!-- / .wrapper -->
		</div><!-- / #featured-products .content-section -->
		<?php endif; ?>
		
		<?php $product_spec_sheets = get_field("product_spec_sheets"); ?>
		<?php if(!empty($product_spec_sheets)): ?>
		<div id="featured-products" class="content-section">
			<div class="wrapper">
				<h3>Product Spec Sheets</h3>
				<div id="post-list" class="list-view">
				<?php 
					$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
					$query_args = array(
						'post_type' => 'product-spec-sheet',
						'posts_per_page' => 8,
						'paged' => $paged,
						'post__in' => $product_spec_sheets,
						'orderby' => 'post__in'	
					);
					$the_query = new WP_Query($query_args); ?>
				<?php while($the_query->have_posts()) : $the_query->the_post(); ?>
					<div class="item">
						<a href="<?php the_permalink(); ?>">
							<div class="featured-image">
								<?php the_post_thumbnail('list-image'); ?>
							</div><!-- / .feature-image -->
							<div class="item-detail">
								<h3><?php the_title(); ?></h3>
								<p><?php $excerpt = get_the_excerpt(); echo wp_trim_words( $excerpt , '35' ); ?></p>
								<p class="read-more">Read More <i class="fa fa-chevron-right"></i></p>
							</div><!-- / .item-detail -->
						</a>
					</div><!-- / .item -->
				<?php endwhile; wp_reset_query(); ?>
				</div><!-- / #post-list .list-view -->
			</div><!-- / .wrapper -->
		</div><!-- / #featured-products .content-section -->
		<?php endif; ?>
		
		<nav id="pagination">
			<div class="wrapper">
				<ul>
					<li class="prev"><?php previous_post_link("%link", "<i class='fa fa-chevron-left'></i> Previous Case Study"); ?></li>
					<li class="next"><?php next_post_link("%link", "Next Case Study <i class='fa fa-chevron-right'></i>"); ?></li>
				</ul>
			</div><!-- / .wrapper -->
		</nav><!-- / #pagination -->
	</main><!-- / #main -->

	<footer>
		<div class="footer-menu-wrapper">
			<a style="width: 100%;" href="<?php bloginfo('siteurl'); ?>/market-served/corporate/"><div class="footer-menu" style="background: #00457C;">Corporate Dining</div></a>
			<a style="width: 100%;" href="<?php bloginfo('siteurl'); ?>/market-served/government/"><div class="footer-menu" style="background: #00457C;">Government</div></a>
			<a style="width: 100%;" href="<?php bloginfo('siteurl'); ?>/market-served/college-university/"><div class="footer-menu" style="background: #00457C;">Higher Ed</div></a>
			<a style="width: 100%;" href="<?php bloginfo('siteurl'); ?>/market-served/k-12/"><div class="footer-menu" style="background: #00457C;">K-12</div></a>
			<a style="width: 100%;" href="<?php bloginfo('siteurl'); ?>/market-served/military/"><div class="footer-menu" style="background: #00457C;">Military</div></a>
			<a style="width: 100%;" href="<?php bloginfo('siteurl'); ?>/market-served/restaurants/"><div class="footer-menu" style="background: #00457C;">Restaurants</div></a>
		</div>
	</footer>	

<?php get_template_part( 'parts/footer' ); ?>