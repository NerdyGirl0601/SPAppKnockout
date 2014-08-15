<%@ Page Language="C#" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@ Register TagPrefix="WebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<WebControls:ScriptLink language="javascript" name="reputation.js" OnDemand="false" LoadAfterUI="true" runat="server" Localizable="false" />
<WebPartPages:AllowFraming ID="AllowFraming" runat="server" />

<html>
<head>
    <title>News App Part</title>
    <link rel="Stylesheet" type="text/css" href="../Styles/bootstrap.min.css" />
    <link rel="Stylesheet" type="text/css" href="../Styles/App.css" />
    <link rel="Stylesheet" type="text/css" href="../Styles/News.App.css" />
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>
</head>
<body id="NewsAnnounces">
    <section class="rwd-news-announces">
        <div class="row" data-bind="foreach: { data: getArticles(), afterRender: doAfterRender }">
            <article class="hnews h-entry col-xs-12" data-bind="css: ArticleClass">
                <div class="row">
                    <figure class="col-xs-12" data-bind="css: FigureClass">
                        <a data-bind="attr: { href: Link }" href="#" target="_parent">
                            <img src="#" class="photo" data-bind="attr: { alt: Title, src: GetImage() }" alt="" />
                            <figcaption class="fn" data-bind="text: Title"></figcaption>
                        </a>
                    </figure>
                    <div class="col-xs-12" data-bind="css: BodyClass">
                        <header class="container-fluid">
                            <hgroup class="row">
                                <h1><a data-bind="attr: { href: Link }, text: Title" href="#" class="p-name" target="_parent"></a></h1>
                            </hgroup>
                            <div class="row info">
                                <time datetime="2012-10-07" class="dt-published" data-bind="text: GetDate()"></time>
                                <address class="p-author h-card">av <a href="#" class="p-name u-url" data-bind="attr: { href: AuthorLink }, text: AuthorName"></a></address>
                                <span class="social">
                                    <a href="#" class="likes">
                                        <span class="rwd-icon-social-like"></span>
                                        <span class="count">0</span>
                                    </a>
                                    <a href="#" class="comments">
                                        <span class="rwd-icon-social-comment"></span>
                                        <span class="count">0</span>
                                    </a>
                                </span>
                            </div>
                        </header>
                        <p class="p-summary" data-bind="text: Description"></p>
                    </div>
                </div>
                <hr/>
            </article>
        </div>
        <div class="row">
            <div class="col-xs-12 rwd-more"><a data-bind="attr: { href: NewsSiteLink }" href="#" target="_parent">flere nyheter &raquo;</a></div>
        </div>
    </section>

    <script type="text/javascript" src="../Scripts/Libs/MicrosoftAjax.js"></script>
    <script type="text/javascript" src="../Scripts/Libs/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="../Scripts/Libs/datajs-1.1.2.min.js"></script>
    <script type="text/javascript" src="../Scripts/Libs/knockout-3.1.0.js"></script>
    <script type="text/javascript" src="../Scripts/Libs/purl.js"></script>
    <script type="text/javascript" src="../Scripts/Libs/require.js"></script>
    <script type="text/javascript" src="../Scripts/Apps/News.App.js"></script>

    <script type="text/javascript">
        'use strict';
        (function () {
            //#region custom styles from host web
            (function () {
                var hostUrl = purl(window.location.href).param('SPHostUrl');
                if (hostUrl) {
                    document.write('<link rel="stylesheet" href="' + hostUrl + '/_layouts/15/defaultcss.ashx" />');
                    document.write('<link rel="stylesheet" href="' + hostUrl + '/Style Library/ResponsiveServer/evry.smart.branding.css" />');
                }
                else
                    document.write('<link rel="stylesheet" href="/_layouts/15/1033/styles/themable/corev15.css" />');
            })();
            //#endregion
            
            //var aContextObject = new SP.ClientContext();
            //console.log(_spPageContextInfo);
            //console.log(aContextObject);
            //EnsureScriptFunc('reputation.js', 'Microsoft.Office.Server.ReputationModel.Reputation', function () {
                //console.log(_spPageContextInfo);
                //Microsoft.Office.Server.ReputationModel.Reputation.setLike(aContextObject,
                //    _spPageContextInfo.pageListId.substring(1, 37),
                //    _spPageContextInfo.pageItemId, !likedPage);
            //});
        })();
    </script>
</body>
</html>
