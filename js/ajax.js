$(document).ready(function() {
	$.ajax({
		url: "ReadJson.pl", 
		success: function(data) {
			$("#projectsContents").html(data);
   		}
	});
});