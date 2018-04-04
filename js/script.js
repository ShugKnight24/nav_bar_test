$(document).ready(function(){

	$('#team-nav-item').on('click', function(){
		var width = window.innerWidth;

		if (width >= 1024){
			return;
		} else {
			$(this).toggleClass('open');
			$('.teams-sub-nav-mobile').toggleClass('open');
		}
	}).on('mouseenter', function(){
		var width = window.innerWidth;

		if (width < 1024){
			return;
		} else {
			var $desktopTeamMenu = $('#teams-sub-nav-desktop');

			if (!$desktopTeamMenu.hasClass('open')){
				$desktopTeamMenu.toggleClass('open');
			}
		}
	}).on('mouseleave', function(e){
		var $desktopTeamMenu = $('#teams-sub-nav-desktop');

		if ($desktopTeamMenu.is(':hover')){
			return;
		} else {
			$desktopTeamMenu.toggleClass('open');
		}
	});

	$('#teams-sub-nav-desktop').on('mouseleave', function(e){
		if ($('#team-nav-item').is(':hover')){
			return;
		} else {
			$(this).toggleClass('open');
		}
	});

	$('#burger-open').on('click', function(){
		var $mainNavUl = $('#main-nav > ul');

		$(this).parent().addClass('open');
		$mainNavUl.addClass('open');
		setTimeout(function() {
			$mainNavUl.addClass('transition-complete');
		}, 0);
	});

	$('#burger-close').on('click', function(){
		var $mainNavUl = $('#main-nav > ul');

		$(this).parent().removeClass('open');
		$('#main-nav > ul').removeClass('transition-complete');
		setTimeout(function() {
			$mainNavUl.removeClass('open');
		}, 300);
	});

});
