$(document).ready(function()
{
	$.ajax({
		url: "ReadJson.pl", 
		success: function(data) {
			$("#projectsContents").html(data);
   		}
	});
/*    $.ajax(
    {
		url: "functions/select.pl", 
		success:function(data)
		{
			jsonParser(data);	
   		}
	});

	var jsonParser = function(datax)
	{
		var dataSn = JSON.stringify(datax);
		var count = (dataSn.match(/awonderfulproject/g) || []).length;
		datax = JSON.parse(datax);
		for (i = 0; i < count; i++)
		{
			if(!datax.projects[i].awonderfulproject['demo'].length)
			{
				var demo_exists = "No Available Demo";
			}
			else
			{
				var demo_exists = "View Demo";
			}
			$("#projectsContents").append("<div class='contentDiv'>" + 
				"<div class='titlePROJ'>" + datax.projects[i].awonderfulproject['title'] + "</div>" +
				"<div class='descriptionPROJ'><div style='padding:10px;'>&nbsp;&nbsp;" + datax.projects[i].awonderfulproject['description'] + "</div></div>" +
				"<div class='sourcePROJ'><span style='color:transparent;'>iiii</span><a href='" + datax.projects[i].awonderfulproject['source'] + "' target='_blank'>Source Code</a></div>" +
				"<div class='demoPROJ' id='" + datax.projects[i].awonderfulproject['demo'] + "'><div style='top:35%;position:relative;'>" + demo_exists + "</div></div>" +
				"<br/></div><br/>");
		}
	}
*/
	/*
	$('.demoPROJ').on('click', function()
	{
		alert('clicked');
		
	});
	*/
	$("#projectsContents").delegate(".demoPROJ", "click", function ()
	{
		if(!this.id)
		{
			return;
		}
		$('#closeFrame').animate({'width' : '100%', 'color' : 'rgba(255, 255, 255, 1.0)'});
		$('#viewer').animate({'width' : '100%', 'background-color' : 'rgba(255, 255, 255, 1.0)'});
		document.getElementById('viewer').setAttribute('src', this.id);
	});

	$('#closeFrame').click(function()
	{
		document.getElementById('viewer').setAttribute('src', 'http://ilankleiman.com/p.txt');
		$('#viewer').animate({'width' : '0px'});
		$('#closeFrame').animate({'width' : '0px', 'color' : 'rgba(255, 255, 255, 0)'});
	});

});