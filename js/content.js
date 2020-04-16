var url = location.href;
url = url.replace($(location).attr('search'), '');

switch(url) {
    // トレンド
    case 'https://qiita.com/':
        $(function() {
            muteTrend();
        });
        break;
    default:
        console.log(url);
        break;
}

/**
 * トレンドの記事一覧で、タイトルにコロナが入っている場合にタイトルを非表示する
 */
function muteTrend() {
    console.log("muteTimeline is called");
    $(".tr-Item").each(function(index, element) {
        if (includeCorona($(element).children("div").children("a").text())) {
            $(element).hide();
            // $(element).children("div").css("color", "red");
        }
    });
}

function includeCorona(text) {
    let regex = /コロナ/g;
    return text.search(regex) != -1;
}