<?php
/**
 * Template Name: End User Home Page
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
				<img src="<?php echo $background[0]; ?>" />
				<?php if( get_sub_field('slide_header') ): ?>
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
		
		<?php $title_1 = get_field("section_1_title"); ?>
		<?php $text_1 = get_field("section_1_text"); ?>
		<?php $url_1 = get_field("section_1_url"); ?>
		<?php $link_text_1 = get_field("section_1_link_text"); ?>
		<?php if($title_1 || $text_1 || $url_1 != ""): ?>
		<div class="content-section grey">
			<div class="wrapper">
				<?php if($title_1 != ""): ?>
				<h1><?php echo $title_1; ?></h1>
				<span class="divider"></span>
				<?php endif; ?>
				<?php if($text_1 != ""): ?>
				<p><?php echo $text_1; ?></p>
				<?php endif; ?>
				<?php if($url_1 != ""): ?>
				<nav class="arrow-nav">
					<ul>
						<li><a href="<?php echo $url_1; ?>"><?php echo $link_text_1; ?> <i class="fa fa-chevron-right"></i></a>
					</ul>
				</nav><!-- / .arrow-nav -->
				<?php endif; ?>
			</div><!-- / .wrapper -->
		</div><!-- / .content-section.grey -->
		<?php endif; ?>	
		
		<?php $title_2 = get_field("section_2_title"); ?>
		<?php $text_2 = get_field("section_2_text"); ?>
		<?php $url_2 = get_field("section_2_url"); ?>
		<?php $link_text_2 = get_field("section_2_link_text"); ?>
		<?php if($title_2 || $text_2 || $url_2 != ""): ?>
		<div class="content-section blue">
			<div class="wrapper">
				<?php if($title_2 != ""): ?>
				<h2><?php echo $title_2; ?></h2>
				<span class="divider"></span>
				<?php endif; ?>
				<?php if($text_2 != ""): ?>
				<p><?php echo $text_2; ?></p>
				<?php endif; ?>
				<?php if($url_2 != ""): ?>
				<nav class="arrow-nav">
					<ul>
						<li><a href="<?php echo $url_2; ?>"><?php echo $link_text_2; ?> <i class="fa fa-chevron-right"></i></a>
					</ul>
				</nav><!-- / .arrow-nav -->
				<?php endif; ?>
			</div><!-- / .wrapper -->
		</div><!-- / .content-section -->
		<?php endif; ?>
		
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
					<div>
						<a href="<?php the_sub_field("url"); ?>" title="<?php the_sub_field("url_title_tag"); ?>">
							<div class="details">
								<h3><?php the_sub_field("title"); ?></h3>
								<span class="divider"></span>
								<p><?php the_sub_field("text"); ?></p>
								<p>Read More <i class="fa fa-chevron-right"></i></p>
							</div><!-- / .details -->
						</a>
					</div>
				</div><!-- / .signpost -->
				<?php endwhile; ?>
			</div><!-- / .wrapper -->
		</div><!-- / #signposts -->
		<?php endif; ?>
		
		<?php $title_3 = get_field("section_3_title"); ?>
		<?php $text_3 = get_field("section_3_text"); ?>
		<?php $url_3 = get_field("section_3_url"); ?>
		<?php $link_text_3 = get_field("section_3_link_text"); ?>
		<?php if($title_3 || $text_3 || $url_3 != ""): ?>
		<div class="content-section white">
			<div class="wrapper">
				<?php if($title_3 != ""): ?>
				<h2><?php echo $title_3; ?></h2>
				<span class="divider"></span>
				<?php endif; ?>
				<?php if($text_3 != ""): ?>
				<p><?php echo $text_3; ?></p>
				<?php endif; ?>
				<?php if($url_3 != ""): ?>
				<nav class="arrow-nav">
					<ul>
						<li><a href="<?php echo $url_3; ?>"><?php echo $link_text_3; ?> <i class="fa fa-chevron-right"></i></a>
					</ul>
				</nav><!-- / .arrow-nav -->
				<?php endif; ?>
			</div><!-- / .wrapper -->
		</div><!-- / .content-section -->
		<?php endif; ?>
		
		<!--  echo do_shortcode('[instagram-feed]'); ?> -->
	
	</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>