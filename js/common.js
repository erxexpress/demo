
//------------------------------------------------------------------------------
// Common Functions
//
//------------------------------------------------------------------------------

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
