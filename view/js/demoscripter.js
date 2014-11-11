function fetch_demo_script() {
    $.ajax({
        "url": "scripts/2014-11-11-release.json",
        "type": "GET",
        "dataType" : "json",
        error: function( xhr, status, errorThrown ) {
            alert( "Sorry, there was a problem!" );
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
            console.dir( xhr );
        },
        success: function( json ) {
            set_site_document_title(json.title);
            set_body_title(json.date + " - " + json.title);
            set_date_string(json.date);
	    // add_panels(json.steps);
            console.log(json);
        }
    });
}

function add_panels(json) {
    console.log("Adding " + json.length.toString() + " panels");
    $.each(json, function(index, value) {
	var new_panel = $('#template_panel').clone().show();
	$('#panel-container').append(new_panel);
    });
}


function set_site_document_title(title) {
    // Set the page title from the loaded JSON configuration
    document.title = title;
}
function set_body_title(title) {
    $('#demo-title').html(title)
}
function set_date_string(demo_date) {
    $('#nav-date').html(demo_date);
}


$( document ).ready(function() {
    console.log( "ready!" );
    fetch_demo_script();
    console.log("Fetched demo script");

    $(".btn").click(function(){
	console.log("Clicked button");
        $("#collapseOne").collapse({
	    "toggle": true,
	    "parent": '#accordian'
	});
	console.log("Finished Clicked button");
    });

    $(".panel-heading").click(function(){
	console.log("trying to collapse from clicking a bar");
	$(( this )).next().collapse('toggle');
    });


});
