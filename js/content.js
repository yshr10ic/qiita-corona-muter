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
        setInterval(function() {
            mute('tf');
        }, 500);
        break;
    // マイルストーン
    case 'https://qiita.com/milestones':
        setInterval(function() {
            mute('ms');
        }, 500);
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

function mute(prefix) {
    console.log("mute " + prefix + " is called");
    $("." + prefix + "-Item").each(function(index, element) {
        if (includeCorona($(element).children("div").children("." + prefix + "-ItemContent").children("div").children("a").text())) {
            $(element).hide();
            // $(element).children("div").children("." + prefix + "-ItemContent").children("div").css("color", "red");
        }
    });
}

function includeCorona(text) {
    let regex = /コロナ/g;
    return text.search(regex) != -1;
}