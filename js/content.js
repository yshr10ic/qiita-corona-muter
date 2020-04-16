/**
 * トレンドの記事一覧で、タイトルにコロナが入っている場合にタイトルを非表示する
 */
$(".tr-Item").each(function(index, element) {
    if (includeCorona($(element).children("div").children("a").text())) {
        $(element).hide();
        // $(element).children("div").css("color", "red");
    }
});

function includeCorona(text) {
    let regex = /コロナ/g;
    return text.search(regex) != -1;
}