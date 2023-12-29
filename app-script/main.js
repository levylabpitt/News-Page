function doGet(){
    return HtmlService  
        .createTemplateFromFile("index")
        .evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .addMetaTag("viewport",  "width=device-width, initial-scale=1.0");
}

function getNews(){
    var sheet = SpreadsheetApp.openById("1DoQyLMyUQtEq6izDsQMd-HF5qjSY-v2aqSJO5GRy218").getSheetByName("News");
    var data = sheet.getDataRange().getValues();

    var allNews = [];

    for (var i = 1; i < data.length; i++){
        var news = {
            id: data[i][0],
            title: data[i][1],
            description: data[i][2],
            image: data[i][3],
            link: data[i][4],
        }
        allNews.push(news);
    }
    return allNews;
}