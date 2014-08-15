// create namespaces
window.NewsAnnounces = window.NewsAnnounces || {};
window.NewsAnnounces.Models = window.NewsAnnounces.Models || {};
window.NewsAnnounces.ViewModels = window.NewsAnnounces.ViewModels || {};
window.Helpers = window.Helpers || {};

require([
    "../Scripts/Helpers/Helpers.js",
    "../Scripts/Models/News.Model.js",
    "../Scripts/ViewModels/News.ViewModel.js"
], function () {
    window.NewsAnnounces.ViewModels.News.loadArticles();
    ko.applyBindings(window.NewsAnnounces.ViewModels.News, document.getElementById('NewsAnnounces'));
});
