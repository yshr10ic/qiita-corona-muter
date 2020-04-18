var url = location.href;
url = url.replace($(location).attr('search'), '');

switch(url) {
    // トレンド
    case 'https://qiita.com/':
        $(function() {
            muteTrend();
        });
        break;
    // タイムライン
    case 'https://qiita.com/timeline':
        setInterval(function() {
            muteTimeline();
        }, 500);
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
        if (url.search(/\/items\//g) != -1) {
            muteArticle();
        }
        break;
}

function muteTrend() {
    $('.tr-Item').each(function(index, element) {
        if (includeCorona($(element).children('div').children('a').text())) {
            $(element).hide();
            // $(element).children('div').css('color', 'red');
        }
    });
}

function muteTimeline() {
    $('.tl-Item').each(function(index, element) {
        if (includeCorona($(element).children('div').children('.tl-ItemContent').children('div').children('div').children('a').text())) {
            $(element).hide();
            // $(element).children('div').children('.tl-ItemContent').children('div').children('div').css('color', 'red');
        }
    });
}

function mute(prefix) {
    $('.' + prefix + '-Item').each(function(index, element) {
        if (includeCorona($(element).children('div').children('.' + prefix + '-ItemContent').children('div').children('a').text())) {
            $(element).hide();
            // $(element).children('div').children('.' + prefix + '-ItemContent').children('div').css('color', 'red');
        }
    });
}

function muteArticle() {
    if (includeCoronaInArticle()) {
        location.href = 'https://qiita.com/';
    }
}

function includeCoronaInArticle() {
    // タイトル
    if (includeCorona($('.it-Header_title').text())) {
        return true;
    }
    // 本文
    if (includeCorona($('#personal-public-article-body').html())) {
        return true;
    }
    // リンク
    $('.it-Reference').each(function(index, element) {
        if (includeCorona($(element).children('a').text())) {
            return true;
        }
    });
    // コメント
    $('.co-Item').each(function(index, element) {
        if (includeCorona($(element).children('div.co-Item_text').html())) {
            return true;
        }
    });
    return false;
}

function includeCorona(text) {
    let regex = /コロナ/g;
    return text.search(regex) != -1;
}