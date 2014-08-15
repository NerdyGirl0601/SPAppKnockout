window.NewsAnnounces.ViewModels.News = function () {
    var odataQueryText = "ContentTypeId:*";
    var odataSelectProperties = "Title,Url,Author,Write,PublishingImage,Description,LikesCount,ReplyCount";
    var odataRowLimit = 10;
    var accentNumber = 2;
    var cssClassArticleCommon = 'col-sm-6';
    var cssClassArticleAccent = 'accent';
    var cssClassImageExistFigure = 'col-sm-4 col-md-3 col-lg-2';
    var cssClassImageEmptyFigure = 'rwd-hidden';
    var cssClassImageExistBody = 'col-sm-8 col-md-9 col-lg-10';
    var cssClassImageEmptyBody = '';
    var newsSiteLink = "/sites/News";
    var apiUrl = '..';
    var apiPath = "/_api/search/query";
    var format = "application/json;odata=verbose";
    var articles = ko.observableArray();

    // constructor
    var news = function () {
        var location = purl(window.location.href);
        if (location.param('ODataQueryText')) {
            odataQueryText = location.param('ODataQueryText');
        }
        if (location.param('ODataSelectProperties')) {
            odataSelectProperties = location.param('ODataSelectProperties');
        }
        if (location.param('ODataRowLimit')) {
            odataRowLimit = location.param('ODataRowLimit');
        }
        if (location.param('AccentNumber')) {
            accentNumber = location.param('AccentNumber');
        }
        if (location.param('NewsSiteLink')) {
            newsSiteLink = location.param('NewsSiteLink');
        }
        if (location.param('SPHostUrl')) {
            newsSiteLink = location.param('SPHostUrl') + newsSiteLink;
        }
    }();

    var loadArticles = function () {
        var request = "{0}{1}?querytext='{2}'&selectproperties='{3}'&rowlimit={4:d}";
        request = String.format(request, apiUrl, apiPath, odataQueryText, odataSelectProperties, odataRowLimit);

        OData.read(
            {
                requestUri: request,
                headers: {
                    Accept: format
                }
            },
            function (data) {
                articles.removeAll();
                $.each(data.query.PrimaryQueryResult.RelevantResults.Table.Rows.results, function (key, row) {
                    var record = new NewsAnnounces.Models.Article();
                    row.Cells.results.getValueByKey = Helpers.getCellValueByKey;
                    record.ArticleClass = (key < accentNumber) ? cssClassArticleAccent : cssClassArticleCommon;
                    record.FigureClass = (row.Cells.results.getValueByKey('PublishingImage')) ? cssClassImageExistFigure : cssClassImageEmptyFigure;
                    record.BodyClass = (row.Cells.results.getValueByKey('PublishingImage')) ? cssClassImageExistBody : cssClassImageEmptyBody;
                    record.Link = row.Cells.results.getValueByKey('Url');
                    record.Title = row.Cells.results.getValueByKey('Title');
                    record.Description = row.Cells.results.getValueByKey('Description');
                    record.SetImage(row.Cells.results.getValueByKey('PublishingImage'));
                    record.AuthorName = row.Cells.results.getValueByKey('Author');
                    record.SetDate(row.Cells.results.getValueByKey('Write'));
                    record.Comments = row.Cells.results.getValueByKey('ReplyCount');
                    record.Likes = row.Cells.results.getValueByKey('LikesCount');
                    articles.push(record);
                });
            },
            function (error) {
                alert("Error occurred " + error.message);
            }
        );
    };
    return {
        Articles: articles,
        loadArticles: loadArticles,
        getArticles: function () {
            return articles;
        },
        NewsSiteLink: newsSiteLink,
        doAfterRender: function () {
            Helpers.ResizeIFrame();
        }
    };
}();