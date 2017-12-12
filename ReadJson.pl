#!/usr/bin/perl

use strict;
use warnings;

use CGI::Carp qw(fatalsToBrowser);
use CGI;

use JSON;
use Path::Tiny;

# gets age of output.json
# if age is more than 1 hour old, then GetNewData().
sub AgeOfData {
	my @params = @_;
	if (time - (stat "output.json")[9] > 3600) {
		# It's over an hour old, so fetch new data from GitHub
		print "it's older than 60 minutes, getting new data... \n";
		GetNewData();
	}
	else {
		# not an hour old yet. So Don't do anything I guess.
		print "It's only " . (time - (stat "output.json")[9]) / 60 . " minutes old\n";
	}
}

# only gets executed if AgeOfData gets >60min age
sub GetNewData {
	my @params = @_;
	my $output = `curl -s -L -A 'ilankleiman\@gmail.com' 'https://api.github.com/users/shortland/repos?sort=pushed&per_page=100'`;
	path("output.json")->spew($output);
	print "Got new data and written to output.json\n";
	ParseWriteNewData();
}

# gets output.json and parses the data.
# write output to projectPage.txt in neat format
# projectPage.txt then ajax'd into main site.
# b/c pP.html doesn't contain CSS. uses main site CSS. So should be ajax'd over.
sub ParseWriteNewData {
	my @params = @_;
	my $outputData = path("output.json")->slurp;

	my $JSON = JSON->new->allow_nonref->allow_singlequote;
	my $jsonObject = $JSON->decode($outputData);

	my $toWrite;
	my $i = 0;
	my $isFork;
	foreach my $project (@{$jsonObject}) {
		$isFork = "";
		if ($jsonObject->[$i]{fork}) {
			$isFork = "<div style='margin-left:24px;'><small><i><u>Forked Project</u></i> (Not my original project, something I may contribute(d) towards.)</small></div>";
		}
		$toWrite .= "<div class='project'><h3 style='text-decoration:underline;margin-left:20px;'>" . $jsonObject->[$i]{name} . "</h3>$isFork\n";
		$toWrite .= "<p>" . $jsonObject->[$i]{description} . "</p>\n" unless !defined($jsonObject->[$i]{description});
		$toWrite .= "<p>Source: <a rel='noopener' target='_blank' href='" . $jsonObject->[$i]{html_url} . "'>" . $jsonObject->[$i]{html_url} . "</a></p></div><br/><br/>\n\n";
		$i++;
	}
	path('projectPage.txt')->spew($toWrite);
	print "wrote new html data to projectPage.txt";
}

# auto begin
BEGIN {
	my $cgi = new CGI;
	print $cgi->header(-type => 'text');
	open(STDERR, ">&STDOUT");

	if (defined $cgi->param("cmd") && $cgi->param("cmd") =~ /^force$/) {
		print "Forcefully refreshing data. Overriding time constraints.\n";
		GetNewData();
	}

	print "<div style='display:none;'>";
	print "Hello!\n";
	AgeOfData();
	print "Done!\n";
	print "</div>";
	print path("projectPage.txt")->slurp;
}