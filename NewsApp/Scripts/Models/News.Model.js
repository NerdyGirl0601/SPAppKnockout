window.NewsAnnounces.Models.Article = function () {
    var title = '';

    var description = '';

    var image = '';
    var getImage = function () {
        return Helpers.ParsePublishingImageField(image);
    };
    var setImage = function (value) {
        image = value;
    };
    var date = new Date();
    var getDate = function () {
        return Helpers.ParseDateField(date);
    };
    var setDate = function (value) {
        date = value;
    };

    var link = '';

    var authorName = '';

    var authorLink = '';

    var articleClass = '';
    var figureClass = '';
    var bodyClass = '';

    var comments = 0;

    var likes = 0;

    return {
        ArticleClass: articleClass,
        Title: title,
        Description: description,
        GetImage: getImage,
        SetImage: setImage,
        FigureClass: figureClass,
        BodyClass: bodyClass,
        GetDate: getDate,
        SetDate: setDate,
        Link: link,
        AuthorName: authorName,
        AuthorLink: authorLink,
        Comments: comments,
        Likes: likes
    };
};