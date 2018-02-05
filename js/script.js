/*
* Ilan Kleiman
* script.js
* First: 1/31/2018
* Last: 2/5/2018
*/

$(document).ready(function() {
	// so I can change later...
	var PROJECT_COUNT = 7;

	var HOME_PAGE = "http://ilankleiman.com/";
	var PATH_NAME = "ilankleiman.com/";
	var PROJECTS_HTML = "get_projects.html";
	var SKILLS_HTML = "get_skills.html";
	var RESUME_HTML = "get_resume.html";
	var BLOG_HTML = "<div id='main_content_box'>Blog</div>";
	var CSE300_HTML = "get_cse300.html";

	// url variables
	var url_string = window.location.href;
	var url = new URL(url_string);
	var page = url.searchParams.get("p");

	$("#header_name").click(function() {
		window.location.href = HOME_PAGE;
	});

	if (page == 'home' || page === undefined || page === null) {
		page = "home";
		$("#home").css({"text-decoration" : "underline"});
	}

	// mobile menu
	$("#mobile_menu").click(function() {
		$("#mobile_menu_menu").toggle();
	});

	$(".mobile_menu_menu_links").click(function() {
		window.location.href = HOME_PAGE + PATH_NAME + "?p=" + this.id;
	});

	$("#header_tabs").css({"right" : ($(".a_tab").width() - 30)});
	$("#about_me_box, #social_information").css({"width" : ($(window).width() - 310)});

	$("#social_information").css({"top" : $("#about_me_box_bottom_hr").offset().top});

	$(window).resize(function() {
		smaller_v1_about($(window).width());
	});

	smaller_v1_about($(window).width());
	var set_small = false;
	function smaller_v1_about(window_width) {
		if (window_width < 580) {
			$(".a_tab").hide();
			$("#mobile_menu").show();
		}
		else {
			$(".a_tab").show();
			$("#mobile_menu").hide();
		}
		if (page == "home") {
			if (window_width > 850) {
				if (set_small) {
					//alert("we were small but now we want to be bigger.");
					set_small = false;
					$("#about_me_box, #social_information").css({"right" : "80px", "left": "auto"});
					$("#profile_pic").css({"top" : "110px"});
				}
				$("#profile_pic").show();
				$("#profile_pic_alt_contacts").hide();
				//$("#about_me_box, #social_information").css({"width" : ($(window).width() - 310)});
				$("#social_information").css({"top" : $("#about_me_box_bottom_hr").offset().top});
				$("#about_me_box, #social_information").css({"width" : ($(window).width() - 310)});
			}
			else {
				set_small = true;
				$("#profile_pic").hide();
				$("#profile_pic_alt_contacts").show();
				$("#about_me_box, #social_information").css({"left" : 20, "top" : 110, "width" : $(window).width() - 40});
				$("#social_information").css({"top" : $("#about_me_box_bottom_hr").offset().top});
				if (window_width < 650) {
					$("#about_me_box, #social_information").css({"width" : "100%", "left" : "0px", "margin" : "0px"});
				}
			}
		}
		else if (page == "projects") {
			if (window_width > 850) {
				$("#projects_content").css({"left" : "80px", "right": "auto", "width" : $(window).width()-160});
			}
			else {
				$("#projects_content").css({"top" : "110px"});
				$("#projects_content").css({"left" : "20px", "right": "auto", "width" : $(window).width()-40});
			}
			if (window_width < 650) {
				$("#about_these_projects, #projects_content").css({"height" : "60px", "width" : "100%", "left" : "0px", "margin" : "0px"});
			}
		}
		else if (page == "skills") {
			if (window_width > 850) {
				$("#skills_content").css({"left" : "80px", "right": "auto", "width" : $(window).width()-160});
			}
			else {
				$("#skills_content").css({"top" : "110px"});
				$("#skills_content").css({"left" : "20px", "right": "auto", "width" : $(window).width()-40});
			}
			if (window_width < 650) {
				$("#skills_title, #experience_title, #skills_content").css({"width" : "100%", "left" : "0px", "margin" : "0px"});
			}
		}
		else if (page == "cse300") {
			if (window_width > 850) {
				$("#cse300_content").css({"left" : "80px", "right": "auto", "width" : $(window).width()-160});
			}
			else {
				$("#cse300_content").css({"top" : "110px"});
				$("#cse300_content").css({"left" : "20px", "right": "auto", "width" : $(window).width()-40});
			}
			if (window_width < 650) {
				$("#cse300_content").css({"width" : "100%", "left" : "0px", "margin" : "0px"});
			}
		}
		else if (page == "resume") {
			if (window_width > 850) {
				$("#resume_content").css({"left" : "80px", "right": "auto", "width" : $(window).width()-160});
			}
			else {
				$("#resume_content").css({"top" : "110px"});
				$("#resume_content").css({"left" : "20px", "right": "auto", "width" : $(window).width()-40});
			}
			if (window_width < 650) {
				$("#resume_content").css({"width" : "100%", "left" : "0px", "margin" : "0px"});
			}
		}
		else {
			//alert("unknown page");
		}
	}

	if (page == "home") {
		$("#relative_content").show();
	}
	
	if (page == "projects") {
		$.get(PROJECTS_HTML, function(data, status){
			$("#relative_content").html(data).promise().done(function() {
				smaller_v1_about($(window).width());
			});
		}, "html");
		$("#projects").css({"text-decoration" : "underline"});
		$("#relative_content").show();
	}

	if (page == "skills") {
		$.get(SKILLS_HTML, function(data, status){
			$("#relative_content").html(data).promise().done(function() {
				smaller_v1_about($(window).width());
			});
		}, "html");
		$("#skills").css({"text-decoration" : "underline"});
		$("#relative_content").show();
	}

	if (page == "cse300") {
		$.get(CSE300_HTML, function(data, status){
			$("#relative_content").html(data).promise().done(function() {
				smaller_v1_about($(window).width());
			});
		}, "html");
		$("#cse300").css({"text-decoration" : "underline"});
		$("#relative_content").show();
	}

	if (page == "resume") {
		$.get(RESUME_HTML, function(data, status){
			$("#relative_content").html(data).promise().done(function() {
				smaller_v1_about($(window).width());
			});
		}, "html");
		$("#resume").css({"text-decoration" : "underline"});
		$("#relative_content").show();
	}

	if (page == "blog") {
		$("#relative_content").html(BLOG_HTML);
		$("#blog").css({"text-decoration" : "underline"});
		$("#relative_content").show();
	}
});
