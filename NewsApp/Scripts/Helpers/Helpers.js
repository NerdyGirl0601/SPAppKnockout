Helpers.getCellValueByKey = function (title) {
    var val = '';
    $.each(this, function (key, cell) {
        if (cell.Key === title) {
            val = cell.Value;
            return false;
        }
        return true;
    });
    return val;
};

Helpers.ResizeIFrame = function () {
    // checks
    if (window.parent === null) {
        return;
    }
    var senderId = purl(window.location.href).param('SenderId');
    if (!senderId) {
        return;
    }

    var body = $('#NewsAnnounces');

    // add iframe to handle resize event
    if (!window.resizableIframe) {
        body.prepend('<iframe name="resizableIframe" style="position: absolute; width: 100%; height: 100%; z-index: -1"></iframe>');
    }

    // add resize handler   
    window.resizableIframe.window.onresize = function () {
        var width = "100%";
        var height = body.outerHeight();
        var message = '<message senderId=' + senderId + '>resize(' + width + ',' + height + ')</message>';
        window.parent.postMessage(message, document.referrer);
    };
};

Helpers.ParsePublishingImageField = function(raw) {
    if (!raw) {
        return '';
    }
    var $holder = $('<div>');
    $holder.append(raw);
    var $image = $holder.find('img:first-child');
    if (!$image.length) {
        return '';
    }
    var src = $image.attr('src').split('?')[0];
    return src + '?RenditionID=3';
};

Helpers.ParseDateField = function(raw) {
    if (!raw) {
        return '';
    }
    var date = new Date(raw);
    return String.format('{0}.{1}.{2}', date.getDate(), (date.getMonth() + 1), date.getFullYear());
};