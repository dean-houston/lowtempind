<?php $team_members = get_field('team_members'); ?>
<?php if(!empty($team_members)): ?>
<div class="content-section grid-section">	
	<div class="wrapper" style="padding-bottom: 5vw;">
	
				<div class="intro-section">
					<p class="preheader"><?php the_field('team_members_preheader'); ?></p>
					<span class="divider"></span>
					<h2><?php the_field('team_members_heading'); ?></h2>
					<p style="margin-bottom: 30px;"><?php the_field('team_members_description'); ?></p>
				</div><!--.intro-section-->
				
				<div class="content-grid">

					<?php while(the_repeater_field('team_members')): ?>

					<div class="team-member">
						<div class="headshot">
							<img src="<?php the_sub_field('team_member_image'); ?>" alt="<?php echo the_sub_field('team_member_name'); ?>">
						</div>
						<div style="border-left: 3px solid #62bb21;">
							<div style="padding-left: 10px;">
								<h3><?php the_sub_field('team_member_name'); ?></h3>
								<span class="title"><p><?php the_sub_field('team_member_title'); ?></p></span>
							</div>	
						</div>
						<span class="bio"><p><?php the_sub_field('team_member_bio'); ?></p></span>
					</div><!--.team-member-->
	
					<?php endwhile; ?>

				</div><!--.grid-->
				
	</div><!-- / .wrapper --> 
</div><!-- / .content-section -->
<?php endif; ?>

<!--
https://stackoverflow.com/questions/41361238/how-to-target-element-by-data-attribute-using-javascript 
https://www.w3schools.com/howto/howto_js_popup.asp
https://wpbeaches.com/create-an-acf-repeater-loop-of-bootstrap-modals-in-wordpress/
-->