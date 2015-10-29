/*
congress.api.sunlightfoundation.com/amendments?apikey=ebbe9f8409134303aab01479e8f1a42f
congress.api.sunlightfoundation.com/bills?apikey=ebbe9f8409134303aab01479e8f1a42f
congress.api.sunlightfoundation.com/bills/search?apikey=ebbe9f8409134303aab01479e8f1a42f
congress.api.sunlightfoundation.com/committees?member_ids=A000372&apikey=ebbe9f8409134303aab01479e8f1a42f
congress.api.sunlightfoundation.com/districts/locate?apikey=ebbe9f8409134303aab01479e8f1a42f
congress.api.sunlightfoundation.com/floor_updates?apikey=ebbe9f8409134303aab01479e8f1a42f
congress.api.sunlightfoundation.com/hearings?dc=false&apikey=ebbe9f8409134303aab01479e8f1a42f
congress.api.sunlightfoundation.com/hearings?dc=true&apikey=ebbe9f8409134303aab01479e8f1a42f
congress.api.sunlightfoundation.com/hearings?dc=null&apikey=ebbe9f8409134303aab01479e8f1a42f
congress.api.sunlightfoundation.com/legislators/locate?apikey=ebbe9f8409134303aab01479e8f1a42f
congress.api.sunlightfoundation.com/legislators?apikey=ebbe9f8409134303aab01479e8f1a42f

congress.api.sunlightfoundation.com/nominations?apikey=ebbe9f8409134303aab01479e8f1a42f
congress.api.sunlightfoundation.com/votes?apikey=ebbe9f8409134303aab01479e8f1a42f
congress.api.sunlightfoundation.com/upcoming_bills?apikey=ebbe9f8409134303aab01479e8f1a42f
*/



$(document).ready(function () {
    $("select[name='person2']").hide();

var apiURLStub1 = 'https://congress.api.sunlightfoundation.com/';
var apiURLStubAPIKey = '&apikey=ebbe9f8409134303aab01479e8f1a42f';

var apiURLStubAmendments = "amendments?";
var apiURLStubBills = "bills?";
var apiURLStubBillsSearch = "bills/search?";
var apiURLStubCommittees = 'committees?';
var apiURLStubDistrictsLocate = "districts/locate?";
var apiURLStubFloorUpdates = "floor_updates?";
var apiURLStubHearingsDCFalse = "hearings?dc=false?";
var apiURLStubHearingsDCTrue = "hearings?dc=true?";
var apiURLStubHearingsDCNull = "hearings?dc=null?";
var apiURLStubLegislators = "legislators?";
var apiURLStubLegislatorsLocate = "legislators/locate?";
var apiURLStubNominations = "nominations?";
var apiURLStubUpcomingBills = "upcoming_bills?";
var apiURLStubVotes = "votes?";
var apiURLStubAllPerPage = "per_page=all";

var initialAPICall = apiURLStub1 + apiURLStubLegislators + apiURLStubAllPerPage + apiURLStubAPIKey;

    $.getJSON(initialAPICall, function (data) {

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


// show user what they have selected


var personSelectEvent = function() {
  var str = "";
  $(this).find('option:selected').each(function(i,v){
    str += $(this).text() + " ";
  });
  $('#'+$(this).attr('id').replace('person', 'selected')).text( str );
}
$('.person-selector').change(personSelectEvent);



function displayVal1() {
  var selectedVal1 = $("#person1").val();
  $("#selected-val-1").html( "<b>Selected Option 1 val=\"\":</b> " + selectedVal1 );
  var apiURLStubMemberID1 = 'member_ids=' + selectedVal1;
  var apiURLCommittee1 = apiURLStub1 + apiURLStubCommittees + apiURLStubMemberID1 + apiURLStubAPIKey;
  console.log(apiURLCommittee1);

    $.getJSON(apiURLCommittee1, function (data) {

    });




}



// don't need this at some point
$("#person1").change(displayVal1);
displayVal1();



function displayVal2() {
  var selectedVal2 = $("#person2").val();
  $("#selected-val-2").html( "<b>Selected Option 2 val=\"\":</b> " + selectedVal2 );
  var apiURLStubMemberID2 = 'member_ids=' + selectedVal2;
  var apiURLCommittee2 = apiURLStub1 + apiURLStubCommittees + apiURLStubMemberID2 + apiURLStubAPIKey;
  console.log(apiURLCommittee2);
}

// don't need this at some point
$("#person2").change(displayVal2);
displayVal2();

});