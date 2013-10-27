
//------------------------------------------------------------------------------
// Pharmacy Selection
//
//------------------------------------------------------------------------------


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
