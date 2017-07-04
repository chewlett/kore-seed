function showLoading(message) {
    showBlank();
    var loading = $('#loading');
    loading.css('display', 'block');
    var messageSpan = loading.find('.message');
    messageSpan.html(message);
}

function hideLoading() {
    hideBlank();
    var loading = $('#loading');
    loading.css('display', 'none');
}

function showBlank() {
    var blank = $('#blankSheet');
    blank.css('display', 'block');
}

function hideBlank() {
    var blank = $('#blankSheet');
    blank.css('display', 'none');
}