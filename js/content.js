var url = location.href;
url = url.replace($(location).attr('search'), '');

switch(url) {
    // トレンド
    case 'https://qiita.com/':
        $(function() {
            muteTrend();
        });
        break;
    // タグフィード
    case 'https://qiita.com/tag-feed':
        let id = setInterval(function() {
            muteTagFeed();
        }, 1000);
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

function muteTagFeed() {
    console.log("muteTagFeed is called");
    $(".tf-Item").each(function(index, element) {
        let regex = /コロナ/g;
        if (includeCorona($(element).children("div").children(".tf-ItemContent").children("div").children("a").text())) {
            $(element).css("display", "none");
            // $(element).children("div").children(".tf-ItemContent").children("div").css("color", "red");
        }
    });
}

function includeCorona(text) {
    let regex = /コロナ/g;
    return text.search(regex) != -1;
}