<?php if ($the_query->max_num_pages > 1) { // check if the max number of pages is greater than 1  ?>
<nav id="pagination">
	<div class="wrapper" style="padding: 0 50px;">
		<ul>
			<li class="prev"><?php echo get_previous_posts_link( '<i class="fa-solid fa-chevron-left"></i> Previous Products', $the_query->max_num_pages ); ?></li>
			<li class="next"><?php echo get_next_posts_link( 'More Products <i class="fa-solid fa-chevron-left"></i>', $the_query->max_num_pages ); ?></li>
		</ul>
	</div><!-- / .wrapper -->
</nav><!-- / #pagination -->
<?php } ?>