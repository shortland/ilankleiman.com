$(document).ready(function()
{
	$.ajax({
		url: "ReadJson.pl", 
		success: function(data) {
			$("#projectsContents").html(data);
   		}
	});
	
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