
//------------------------------------------------------------------------------
// Home Screen
//
//------------------------------------------------------------------------------


//ScannedSCID
$("#scanCode").click(function (event) {
    ScanCode();

    return;
    // showPage("pagePharmacy");

    loadIframe('pharmacyMap', 'http://maps.google.com.au/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=67-69 Union Rd, ASCOT VALE VIC 3032,Victoria&amp;aq=0&amp;&amp;ie=UTF8&amp;hq=&amp;hnear=67-69 Union Rd, ASCOT VALE VIC 3032&amp;z=14&amp;&amp;output=embed');
    // $('#pharmacyMap').attr('src', 'http://maps.google.com.au/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=67-69 Union Rd, ASCOT VALE VIC 3032,Victoria&amp;aq=0&amp;&amp;ie=UTF8&amp;hq=&amp;hnear=67-69 Union Rd, ASCOT VALE VIC 3032&amp;z=14&amp;&amp;output=embed');


    showPage("pageCompleted");
    // showPage("pageMap");
});

