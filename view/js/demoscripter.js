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
            append_steps(json.steps);
        }
    });
}


function append_steps(steps){
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = {'steps': steps};
    var html    = template(context);
    $('#accordian').append(html);
    console.log("Appended another container");

    $(".panel-heading").click(function(){
        console.log("trying to collapse from clicking a bar");
        $(( this )).next().collapse('toggle');
    });
}


function set_site_document_title(title) {
    // Set the page title from the loaded JSON configuration
    document.title = title;
}
function set_body_title(title) {
    $('#demo-title').html(title);
}
function set_date_string(demo_date) {
    $('#nav-date').html(demo_date);
}


$( document ).ready(function() {
    fetch_demo_script();

    // $(".btn").click(function(){
    //     $("#collapseOne").collapse({
    //      "toggle": true,
    //      "parent": '#accordian'
    //  });
    // });




});
