
//------------------------------------------------------------------------------
// Main Module
//
//------------------------------------------------------------------------------

var deviceID = "0283828483";

var themeId = ""
var pid_priceline = "priceline";
var pid_twc = "twc";
var pid_nova = "nova";
var pid_eRx = "eRx";

var scannedSCID = "";
var scriptID = "";

var tempPage = " ";
var currentPage = " ";

var themeSettings = {};
var signedIn = false;
var signInFromRequest = false;

var pharmacyName = " ";
var pharmacyAddress = " ";


$(document).ready(function () {
    // alert("Page loaded");
});


function initScriptData() {

    scannedSCID = "";
    scriptID = "";
}



function loadIframe(iframeName, url) {
    var $iframe = $('#' + iframeName);
    if ($iframe.length) {
        $iframe.attr('src', url);
        return false;
    }
    return true;
}

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


/*
function clearSelection(id) {
    $('#' + id).html("&nbsp;");
};

function setSelection(id) {
    $('#' + id).html(".");
};

function isSelected(id) {
    return ($('#' + id).text() == ".");
}

function changeSelection(id) {
    //if ($('#' + id).text() == ".")
    if (isSelected(id))
        clearSelection(id);
    else
        setSelection(id);
};
*/

$("#selDrug1").click(function (event) {
    changeSelection('selDrugVal1');
});


$("#selDrug2").click(function (event) {
    changeSelection('selDrugVal2');
});


function setCurrentPharmacy(id) {
    setSelection(id);
    /*
    pharmacyName = $("#"+id+"name").Text();
    pharmacyAddress = " ";
    */
};

$("#selPhmcy1").click(function (event) {
    setCurrentPharmacy('selPhmcyVal1');
    clearSelection('selPhmcyVal2');
    clearSelection('selPhmcyVal3');
    clearSelection('selPhmcyVal4');
});

$("#selPhmcy2").click(function (event) {
    setCurrentPharmacy('selPhmcyVal2');
    clearSelection('selPhmcyVal1');
    clearSelection('selPhmcyVal3');
    clearSelection('selPhmcyVal4');
});

$("#selPhmcy3").click(function (event) {
    setCurrentPharmacy('selPhmcyVal3');
    clearSelection('selPhmcyVal1');
    clearSelection('selPhmcyVal2');
    clearSelection('selPhmcyVal4');
});

$("#selPhmcy4").click(function (event) {
    setCurrentPharmacy('selPhmcyVal4');
    clearSelection('selPhmcyVal1');
    clearSelection('selPhmcyVal2');
    clearSelection('selPhmcyVal3');
});

$("#getScriptId").click(function (event) {
    GetScriptId();
});

$("#getScriptDetails").click(function (event) {
    GetScriptDetails();
});


function requestScriptData() {
    var ok;
    hideDialog("dialogProgress");

    showPage("pageDrug");
}

function ScanCode() {

    initScriptData();

    scannedSCID = "12JVRJ4M5KYJ4DRV71";

    // GetScriptId();

    showDialog("dialogProgress", "Requesting script details...");
    setTimeout(function () {
        requestScriptData();
    }, 2000);


    scriptID = "";

    // show scanned SCID, ID
    /*
    hideElement("InfoSCID");
    hideElement("InfoScriptId");

    $("#InfoSCID").text('Script: ' + $('#SCID').val());
    $("#InfoScriptId").text('Id: ' + $('#ScriptId').val());

    $("#scanCode").text('Id: ' + $('#ScriptId').val());
    hideElement("scanCode");
    */
}


function GetScriptId() {

    /*
async: true,
type: "GET",
contentType: "application/json; charset=utf-8",
url: "../../Services/RunningBarbusService.svc/GetTeamData",
dataType: "json",
data: '{"teamId":"' + teamId + '", "weekNumber":"' + weekNumber + '"}',
success: function (content) {
DisplayRun(map, content);
}
*/

    alert("Get Script Id for " + $('#deviceId').val() + " " + $('#SCID').val());

    $.ajax({
        type: "GET",
        async: "false",
        //url: "http://6082ade8bf5f4339aa46229bed13fa85.cloudapp.net/erxExpressService.svc/RequestScript",
        // data: '{"deviceId":"' + $('#deviceId').val() + '", "scriptID":"' + $('#SCID').val() + '"}',
        //data: 'deviceId=' + $('#deviceId').val() + '&scriptID=' + $('#SCID').val(),
        // url: "http://6082ade8bf5f4339aa46229bed13fa85.cloudapp.net/erxExpressService.svc/RequestScript?deviceId=12345&scriptID=124423",
        url: "http://6082ade8bf5f4339aa46229bed13fa85.cloudapp.net/erxExpressConsumer/GetScriptData/?deviceId=ryanmoore-lap&QueueId=3",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        // processData: true,
        success: function (msg) {
            AjaxSucceeded(msg);
        },
        error: AjaxFailed
    });

    alert("done");
}


function GetScriptDetails() {

    alert("Get Script Details Id for " + $('#deviceId').val() + " " + $('#ScriptId').val());

    $.ajax({
        type: "GET",
        async: "false",
        url: "http://6082ade8bf5f4339aa46229bed13fa85.cloudapp.net/erxExpressService.svc/GetScriptData",
        data: '{"DeviceId":"' + $('#deviceId').val() + '", "ScriptID":"' + $('#ScriptId').val() + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            AjaxSucceeded(msg);
        },
        error: AjaxFailed
    });

    alert("done");
}

function AjaxSucceeded(result) {
    alert(result.d);
}

function AjaxFailed(result) {
    alert('Failed: ' + result.status + ' ' + result.statusText);
}

// -----------------------------------------

function initPharmacyMap() {

    return;

    // $('#pharmacyMap',window.parent.document).attr('src', $('#pharmacyMap',window.parent.document).attr('src'));


    var currSrc = $("#pharmacyMap").attr("src");
    currSrc = 'http://www.google.com.au';

    // $('#pharmacyMap',window.parent.document).attr('src', currSrc);
    $('#pharmacyMap').attr('src', currSrc);

    // alert($("#pharmacyMap").attr("src"));

    // $("#pharmacyMap").attr("src", currSrc);

    var iFrame = $('#pharmacyMap');
    // iFrame.load(currSrc);

    // alert('1');
    /*
                $('#pharmacyMap').attr('src', '');
                var lcMap
                lcMap = 'http://maps.google.com.au/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=67-69 Union Rd, ASCOT VALE VIC 3032,Victoria&amp;aq=0&amp;&amp;ie=UTF8&amp;hq=&amp;hnear=67-69 Union Rd, ASCOT VALE VIC 3032&amp;z=14&amp;&amp;output=embed';
                lcMap = "http://maps.google.com.au/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=67-69 Union Rd, ASCOT VALE VIC 3032,Victoria&amp;aq=0&amp;&amp;ie=UTF8&amp;hq=&amp;hnear=67-69 Union Rd, ASCOT VALE VIC 3032&amp;z=14&amp;&amp;output=embed";
                // $('#pharmacyMap').attr('src', lcMap);
                // $('#pharmacyMap').attr('src', 'http://maps.google.com.au/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=67-69 Union Rd, ASCOT VALE VIC 3032,Victoria&amp;aq=0&amp;&amp;ie=UTF8&amp;hq=&amp;hnear=67-69 Union Rd, ASCOT VALE VIC 3032&amp;z=14&amp;&amp;output=embed');
                */
    /*
    $(function(){
        $('#trns').attr('transform', 'rotate(60,50,50)');
    });
    */

    // 'http://maps.google.com.au/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=67-69 Union Rd, ASCOT VALE VIC 3032,Victoria&amp;aq=0&amp;&amp;ie=UTF8&amp;hq=&amp;hnear=67-69 Union Rd, ASCOT VALE VIC 3032&amp;z=14&amp;&amp;output=embed
}





function EnableDialog() {
    $('#pageMask').css('visibility', 'visible');
    $('.popUpArea').css('visibility', 'visible');
}

function DisableDialog() {
    $('#pageMask').css('visibility', 'hidden');
    $('.popUpArea').css('visibility', 'hidden');
}


function pageInit() {
    // TO DO: use phone number 
    deviceID = "2393832049842";
    currentPage = "test";

    setTheme(pid_eRx);
    // setTheme(pid_priceline);

    // homePage();
    newScript();
    // showPage("pageDrug");
}

function hide_container(id) {

    $('#' + id).css('visibility', 'hidden');
    return;

    $("#" + id).fadeTo(100, 0);
    $("#" + id).hide();
    // $('#pageDrug').css('visibility', 'visible');
}

function show_container(id) {

    $("#" + id).css('visibility', 'visible');
    return;

    $("#" + id).show();
    $("#" + id).fadeTo(200, 1);

}

function hideElement(id) {
    $("#" + id).css('visibility', 'hidden');
}

function showElement(id) {
    $("#" + id).css('visibility', 'visible');
}

// --------------------------------

$("#logo").click(function () {
    // homePage();    

    // alert(themeId);

    switch (themeId) {
        case pid_eRx:
            setTheme(pid_priceline);
            break;

        case pid_priceline:
            setTheme(pid_twc);
            break;

        case pid_twc:
            setTheme(pid_nova);
            break;

        default:
            setTheme(pid_eRx);
            break;
    }
});


// --------------------------------------------------

function hideDialog(id) {
    DisableDialog();
    hideElement(id);
}

function showDialog(id, title) {
    if (title.length > 0) {
        $("#progressText1").text(title);
        // $("#progressText1").html(title);
    }

    EnableDialog();
    show_container(id);
}

function processSignIn() {
    var ok;
    hideDialog("dialogProgress");
}

function doSignIn() {

    showDialog("dialogProgress", "Signing-in...");
    setTimeout(function () {
        processSignIn();
    }, 2000);
}


function processAddToCalendar() {
    var ok;
    hideDialog("dialogProgress");
}

function doAddToCalender() {

    showDialog("dialogProgress", "Adding appointment to calender...");
    setTimeout(function () {
        processAddToCalendar();
    }, 2000);
}


$("#signIn").click(function () {
    showDialog("dialogLogin", "");
});

$("#signOut").click(function () {
    signedIn = false;
    hideElement("signOut");
    showElement("signIn");
});



$("#loginCancel").click(function () {
    hideDialog("dialogLogin");
    signInFromRequest = false;
});

$("#loginOk").click(function () {

    // validate
    doSignIn();
    signedIn = true;

    // update button
    hideElement("signIn");
    showElement("signOut");

    hideDialog("dialogLogin");

    if (signInFromRequest) {
        signInFromRequest = false;
        doSendRequest();
    }
});


$("#settingsOk").click(function () {

    // update app...

    // hideDialog("dialogLogin");
});


function homePage() {

    showPage("pageHome");
}

function showPage(id) {

    if (currentPage.length > 0)
        hide_container(currentPage);

    currentPage = id;
    show_container(id);
}


function newScript() {

    initScriptData();
    homePage();
}



// ----------------------------------------------------

$("#optNew").click(function () {
    newScript();
});


$("#optAbout").click(function () {
    if ($('#pageAbout').css('visibility') == "hidden") {
        tempPage = currentPage;
        showPage("pageAbout");
    }
});

$("#aboutClose").click(function () {
    showPage(tempPage);
});


$("#optSettings").click(function () {
    if ($('#pageSettings').css('visibility') == "hidden") {
        tempPage = currentPage;
        showPage("pageSettings");
    }
});


$("#settingsClose").click(function () {
    showPage(tempPage);
});



$("#selectDrug").click(function () {
    ShowDrugs();
});

$("#selDrugHome").click(function () {
    homePage();
});

$("#selDrugOk").click(function () {
    showPage("pagePharmacy");
});

$("#selDrugCancel").click(function () {
    homePage();
});

function ShowDrugs() {
    showPage("pageDrug");
}

$("#selPharmacyOk").click(function () {
    showPage("pageRequest");
});

$("#selPharmacyCancel").click(function () {
    showPage("pageDrug");
});

function doPageCompleted() {
    initPharmacyMap();
    showPage("pageCompleted");
}

function sendRequestToPharmacy() {
    var ok;

    hideDialog("dialogProgress");
    doPageCompleted()
}

$("#completedShowMap").click(function () {
    showPage("pageMap");
});


$("#completedAddCalender").click(function () {
    doAddToCalender();
});


$("#mapClose").click(function () {
    showPage("pageCompleted");
});


function doSendRequest() {

    showDialog("dialogProgress", "Sending request...");
    setTimeout(function () {
        sendRequestToPharmacy();
    }, 2000);
}

$("#requestOk").click(function () {

    if (!signedIn) {
        signInFromRequest = true;
        showDialog("dialogLogin", "");
    }
    else {
        doSendRequest();
    }
});

$("#requestCancel").click(function () {
    showPage("pagePharmacy");
});

$("#completedOk").click(function () {
    homePage();
});


$("#settingsOk").click(function () {

});



function setOpacity(id, value) {

    return;

    $('#' + id).css('opacity', 'value/10');
    $('#' + id).css('filter', alpha(opacity = value));

    // opacity: value/10;   // 0.5
    // filter:alpha(opacity=value); /* For IE8 and earlier */
}


function setTheme(id) {

    themeId = id;

    switch (id) {
        case pid_priceline:
            {
                $('#homeTopAd').css('visibility', "visible");
                // $('#homeTopImage').attr('src', 'url(images/priceline-logo.jpg)');
                $('#banner').attr('src', 'url(images/priceline-logo.jpg)');
                $('#background').css('background-image', 'url(images/priceline-logo.jpg)');
                $('#background').css('background-position', 'bottom');
                //$('#background').css('padding-top', '100%');
                setOpacity('background', 30);

                $('.actionButton').css('background-color', 'white');
                $('.actionButton').css('color', 'red');

                $('.okButton').css('background-color', 'white');
                $('.okButton').css('color', 'red');

                $('.cancelButton').css('background-color', 'white');
                $('.cancelButton').css('color', 'red');

                break;
            }


        case pid_nova:
            {
                $('#homeTopAd').css('visibility', "hidden");

                $('#background').css('background-image', 'url(images/nova_logo.png)');
                // $('#background').css('background-image', 'url()');
                $('#background').css('background-position', 'bottom');
                // $('#background').css('background-color', '#D81A62');
                // $('#background').css('color', 'white');
                setOpacity('backgroundImage', 80);

                //$('#background').css('padding-top', '100%');


                $('.actionButton').css('background-color', '#D81A62');
                $('.actionButton').css('color', 'white');

                $('.okButton').css('background-color', '#D81A62');
                $('.okButton').css('color', 'white');

                $('.cancelButton').css('background-color', '#D81A62');
                $('.cancelButton').css('color', 'white');

                break;
            }

        case pid_twc:
            {
                $('#homeTopAd').css('visibility', "hidden");

                $('#background').css('background-image', 'url(images/TWC.jpg)');
                $('#background').css('background-position', 'bottom');
                // $('#background').css('padding-top', '100%');
                setOpacity('background', 30);

                $('.actionButton').css('background-color', '#8C93C7');
                $('.actionButton').css('color', 'white');

                $('.okButton').css('background-color', '#8C93C7');
                $('.okButton').css('color', 'white');

                $('.cancelButton').css('background-color', '#8C93C7');
                $('.cancelButton').css('color', 'white');

                break;
            }

        case pid_eRx:
            {
                $('#homeTopAd').css('visibility', "visible");
                // $('#homeTopImage').attr('src', 'url(images/priceline-logo.jpg)');

                $('#banner').attr('src', 'url()');
                $('#background').css('background-image', 'url()');
                $('#background').css('background-position', 'bottom');
                //$('#background').css('padding-top', '100%');
                setOpacity('background', 30);

                $('.actionButton').css('background-color', 'white');
                $('.actionButton').css('color', 'black');

                $('.okButton').css('background-color', 'white');
                $('.okButton').css('color', 'black');

                $('.cancelButton').css('background-color', 'white');
                $('.cancelButton').css('color', 'black');
                break;
            }

        default:

            break;
            // 
    }

    // $('#signIn').css('visibility', 'hidden');
    // $('#footer').css('visibility', 'hidden');
}

