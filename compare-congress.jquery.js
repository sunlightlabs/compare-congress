$(document).ready(function () {
    $("select[name='person2']").hide();





    $.getJSON("https://congress.api.sunlightfoundation.com/legislators?per_page=all&apikey=ebbe9f8409134303aab01479e8f1a42f", function (data) {

        // sort alphabetically by last name
        var jsonData = data.results;
        jsonData.sort(function(a,b) {
            if (a['last_name'] < b['last_name']) return -1;
            if (a['last_name'] > b['last_name']) return 1;
            return 0;
        });

        $.each(jsonData, function () {
            var ele = $("<option>").attr('value', this['bioguide_id'])
            					   .text(this['first_name'] + " " + this['last_name']);
           	$("select").append(ele.clone());
            
            
            // show 2nd list of options only after user has selected first. doing this with button and not on selection because user could easily make 
            // an erroneous choice
            // another option here is to grey it out until the button is clicked....
            $(".show").click(function() {
                $("select[name='person2']").show();
            });
        });
    });




// get user selections
// text value of selected
// var selection01 = $("#person1").find(":selected").text();
// var selection02 = $("#person2").find(":selected").text();
// value attribute value of selected
// $("#person1").val();
// $("#person2").val();



});