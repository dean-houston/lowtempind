<?php
/**
 * Template name: Product Line Parent
 * Template Post Type: product
 */
?>
<?php get_template_part( 'parts/header' ); ?>
	
<main id="main" role="main">

	<div id="content">

		<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
		<?php endwhile; wp_reset_query(); ?>
		
		<?php get_template_part( 'parts/hero-product' ); ?>	

		<!-- Check if post content is empty in WordPress -->
		<?php $content = get_post()->post_content;
		if(empty($content)):?>
		<?php else:?>
			<div class="content the_content">
				<div class="wrapper">
					<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
						<?php the_content(); ?>
					<?php wp_reset_query(); ?>
					<?php endwhile;  ?>
					
					<?php $intro_button_label = get_field('intro_button_label'); ?>
					<?php if(!empty($intro_button_label)): ?>
					<a class="button" style="margin-top: 30px;" href="<?php the_field('intro_button_link'); ?>"><?php the_field('intro_button_label'); ?></a>
					<?php endif; ?>
					
				</div><!-- / .wrapper -->
			</div><!-- / .content -->
		<?php endif;?>
		<!-- via https://www.webdesign101.net/check-if-post-content-is-empty-in-wordpress-solved/ -->
		
		<!-- relocated, in part, to hero-product.php ?php get_template_part( 'parts/feature-list' ); ? -->	
		<?php get_template_part( 'parts/media-text' ); ?>	
		<?php get_template_part( 'parts/two-column-layout' ); ?>
		<?php get_template_part( 'parts/featured-media' ); ?>
		<?php get_template_part( 'parts/image-carousel' ); ?>	
		<?php get_template_part( 'parts/spec-sheet-accordion-repeater' ); ?>
		<?php get_template_part( 'parts/product-configurator' ); ?>
		<?php get_template_part( 'parts/featured-content' ); ?>
		<?php get_template_part( 'parts/image-gallery' ); ?>

	</div><!-- / #content -->
		
</main><!-- / #main -->



<script type='text/javascript'> 

$(function(){

var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");

  $('a[data-modal-id]').click(function(e) {
    e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());
  });  
  
  
$(".js-modal-close, .modal-overlay").click(function() {
  $(".modal-box, .modal-overlay").fadeOut(500, function() {
    $(".modal-overlay").remove();
  });
});
 
$(window).resize(function() {
  $(".modal-box").css({
    top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
    left: ($(window).width() - $(".modal-box").outerWidth()) / 2
  });
});
 
$(window).resize();
 
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

</script>


<?php get_template_part( 'parts/footer' ); ?>