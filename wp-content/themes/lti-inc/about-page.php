<?php
/**
 * Template Name: About Page
 */
?>
<?php get_template_part( 'parts/header' ); ?>

<main id="main" role="main">

	<div id="content">
	
		<?php get_template_part( 'parts/hero-page' ); ?>
		
		<div class="content-section-wrapper">
		
			<div class="content-section">
				<div class="wrapper exist">
					<h2>Why do we exist?</h2>
					<p>To create environments and innovative food serving solutions that bring family, friends and communities together.</p>
					<a class="button green" href="/team/">Meet the team behind LTI's success</a>
				</div><!--.wrapper-->
			</div><!--.content-section-->

			<div class="content-section">
				<div class="wrapper behave">
					<h2 style="margin-bottom: 30px;">How do we behave?</h2>
					<div class="content-grid">
						<div class="content-box" style="background-color: #00457C;">
							<h3>Humble</h3>
							<ul>
								<li>Acts with honesty and integrity</li>
								<li>Is real and genuine</li>
								<li>Emphasizes team over self</li>
								<li>Defines success collectively</li>
							</ul>
						</div><!--.content-box-->
						<div class="content-box" style="background-color: #62bb21;">
							<h3>Hungry</h3>
							<ul>
								<li>Has a strong work ethic</li>
								<li>Is a creative problem solver</li>
								<li>Demonstrates a sense of urgency</li>
								<li>Is willing to learn</li>
								<li>Takes responsibility</li>
							</ul>
						</div><!--.content-box-->
						<div class="content-box" style="background-color: #747575;">
							<h3>Smart</h3>
							<ul>
								<li>Builds strong relationships</li>
								<li>Understands the impact of one’s words and actions</li>
								<li>Listens well</li>
								<li>Is considerate of others’ ideas and opinions</li>
							</ul>
						</div><!--.content-box-->
					</div><!--.content-grid-->
				</div><!--.wrapper-->
			</div><!--.content-section-->	

			<div class="content-section">
				<div class="wrapper succeed">
					<h2 style="margin-bottom: 30px;">How will we succeed?</h2>
					<div class="content-grid">
						<div class="content-box" style="background-color: #d8d8d8;">
							<ul style="color: #444;">
								<li>Win as a team</li>
								<li>Provide exceptional customer experiences</li>
								<li>Deliver the highest quality with reliability</li>
								<li>Continuous improvement</li>
								<li>Steward our resources</li>
							</ul>
						</div><!--.content-box-->
					</div><!--.content-grid-->
				</div><!--.wrapper-->
			</div><!--.content-section-->	

		</div>		

		<div class="content-section" style="background-color: #00457c;">
			<div class="wrapper going">
				<h2 style="color: #fff;">Where are we going?</h2>
				<p style="color: #fff;">Becoming the leading manufacturer of food serving solutions by 2027.</p>
				<a class="button green" href="/product/">Explore Our Product Lines</a>
			</div><!--.wrapper-->
		</div><!--.content-section-->
		
		<div class="content-section" style="background-color: #eee;">
			<div class="wrapper duration">
				<h2>How long have we been at it?</h2>
				<p style="color: #444;">Since 1947, LTI has been leading the industry in the design, durability and innovation of custom counters. Proudly manufactured right here in the USA.</p>
				<a class="button green" href="/team/">Browse the markets we serve</a>
			</div><!--.wrapper-->
		</div><!--.content-section-->
		
		<div class="content-section white" style="background: url('https://lowtempind.com/wp-content/uploads/2021/09/lti-history-group-photo.jpg') no-repeat; background-position: top; background-size: cover;">
			<div class="wrapper history">
				<h2 class="section-heading" style="padding-bottom: 30%;">Our History</p>
			</div><!-- / .wrapper -->
		</div><!-- / #content -->
		
		<div class="content-section white" >
			<div class="wrapper history-accordion">

			<!-- via https://www.advancedcustomfields.com/resources/working-with-nested-repeaters/ -->
			<!-- check for rows (parent repeater) -->
			<?php if( have_rows('insert_accordion') ): ?>
			
				<!-- loop thru rows (parent repeater) -->
				<?php while( have_rows('insert_accordion') ): the_row(); ?>
					
					<div id="accordion-1" class="accordion col-full opaque">
						<h2 style="color: #62bb21;"><?php the_sub_field("accordion_item_title"); ?></h2>
						
						<!-- check for rows (subrepeater) -->
						<?php if( have_rows('accordion_item_content') ): ?>
						
							<!-- loop thru rows (subrepeater) -->
							<?php while( have_rows('accordion_item_content') ): the_row(); ?>
							
								<?php echo do_shortcode ('[accordion-item title="'.get_sub_field("accordion_content_title").'"]'.get_sub_field("accordion_content").'[/accordion-item]');?>
									
					
					<?php endwhile; ?>
					<?php endif; ?><!-- accordion_item_content -->	
				</div>
				
			<?php endwhile; ?><!-- insert_accordion -->
			<?php endif; ?><!-- insert_accordion -->
			
			</div><!-- / .wrapper -->
		</div><!-- / .content-section -->

	</div> <!-- / #content -->
		
</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>

<script type='text/javascript' id='accordion-shortcodes-script-js-extra'>
/* <![CDATA[ */
var accordionShortcodesSettings = [{"id":"accordion-1","autoClose":true,"openFirst":false,"openAll":false,"clickToClose":true,"scroll":false,"usebuttons":false}];
/* ]]> */
</script>
<script type='text/javascript' src='https://lowtempind.com/wp-content/plugins/accordion-shortcodes/accordion.min.js?ver=2.4.2' id='accordion-shortcodes-script-js'></script>