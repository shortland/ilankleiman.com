$(document).ready(function()
{
	$("html, body").animate({ scrollTop: 0 }, "slow");
	
	$("#pageHOVA").animate({'width' : $("#pageAbout").width()});
	$("#pagePROJ").animate({'width' : $("#pageProjects").width()-2});

	var falsePositiveA;
	var falsePositiveP;

	if($(window).width() < 650)
	{
		$("#pageAbout").animate({'right' : '-=25'});
		$("#pageHOVA").animate({'right' : '-=25'});
		$("#pageProjects").animate({'right' : '-=40'});
		$("#pagePROJ").animate({'right' : '-=40'});
	}
	
	$(function()
	{
		FastClick.attach(document.body);
		
		$("#pageAbout").animate(
			{'color' : 'rgba(206, 231, 255, 1.0)'},
		100);
		$("#pageHOVA").fadeIn(100);
		
		falsePositiveA = 1;
	});
	
	$("#title").click(function()
	{
		window.location.href = "http://ilankleiman.com/?nocache=" + Math.random();
	});
	
	$(".tabs").click(function()
	{
		if(this.id == "pageAbout")
		{
			$("html, body").animate({ scrollTop: 0 }, "slow");
			
			falsePositiveA = 1;
			$("#" + this.id).css(
				{'color' : 'rgba(206, 231, 255, 1.0)'}
			);
			$("#pageHOVA").fadeIn(100);
			
			load_page('about');
		
			$("#pageProjects").animate(
				{'color': 'rgba(158, 207, 255, 1.0)'},
			50);
			$("#pagePROJ").fadeOut(300);
		}
		
		if(this.id == "pageProjects")
		{
			falsePositiveP = 1;
			$("#" + this.id).css(
				{'color' : 'rgba(206, 231, 255, 1.0)'}
			);
			$("#pagePROJ").fadeIn(100);
			
			load_page('projects');
			
			$("#pageAbout").animate(
				{'color': 'rgba(158, 207, 255, 1.0)'},
			50);
			$("#pageHOVA").fadeOut(100);
		}
	});

	$("#pageAbout").hover(function()
	{
		$("#pageAbout").animate(
			{'color' : 'rgba(206, 231, 255, 1.0)'},
		100);
		$("#pageHOVA").fadeIn(100);
	});
	
	$("#pageProjects").hover(function()
	{
		$("#pageProjects").animate(
			{'color' : 'rgba(206, 231, 255, 1.0)'},
		100);
		$("#pagePROJ").fadeIn(100);
	});
	
	$("#pageAbout").mouseout(function()
	{
		if(falsePositiveA == 1)
		{
			falsePositiveP = 0;
			$("#pageProjects").animate(
				{'color': 'rgba(158, 207, 255, 1.0)'},
			50);
			$("#pagePROJ").fadeOut(300);
			return;
		}
		$("#pageAbout").animate(
			{'color': 'rgba(158, 207, 255, 1.0)'},
		50);
		$("#pageHOVA").fadeOut(300);
	});
	
	$("#pageProjects").mouseout(function()
	{
		if(falsePositiveP == 1)
		{
			falsePositiveA = 0;
			$("#pageAbout").animate(
				{'color': 'rgba(158, 207, 255, 1.0)'},
			50);
			$("#pageHOVA").fadeOut(300);
			return;
		}
		$("#pageProjects").animate(
			{'color': 'rgba(158, 207, 255, 1.0)'},
		50);
		$("#pagePROJ").fadeOut(300);
	});
	
	var load_page = function(pageName)
	{
		$(".pageContents").fadeOut();
		$("#" + pageName + "Contents").fadeIn()
	}
});