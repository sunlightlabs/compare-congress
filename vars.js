// temporary
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


zipcodes to congressional districts url
http://assets.sunlightfoundation.com/data/districts.csv
legislator photos
https://github.com/unitedstates/images



pagination
All results in the Congress API are paginated. Set per_page and page to control the page size and offset. The maximum per_page is 50.
/floor_updates?chamber=house&per_page=50&page=3
*/






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


// chamber, committee_id, name, parent_committee_id, subcommittee
var apiCallCommittees = apiURLStub1 + apiURLStubCommittees + apiURLStubAllPerPage + apiURLStubAPIKey;

// legislative_day, bill_id, range, congress, chamber, source_type
var apiCallUpcomingBills = apiURLStub1 + apiURLStubUpcomingBills+ apiURLStubAllPerPage + apiURLStubAPIKey;

