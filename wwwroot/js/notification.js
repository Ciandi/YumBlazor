window.ShowToastr = function (type, message, title) {
    if (type === 'success') {
        toastr.success(message, title);
    }
    else if (type === 'error') {
        toastr.error(message, title);
    }
}