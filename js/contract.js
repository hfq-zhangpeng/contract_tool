var ue = UE.getEditor('editor');


function getContent() {
    var content = ue.getContent();

    content = replaceContent(content);

    console.log(createNewDom(content));
    // console.log(content);
}

/**
 * 对content进行处理，消除实体名称、字体样式
 * @param  {[type]} content [description]
 * @return {[type]}         [description]
 */
function replaceContent(content) {
    content = content.replace(/&quot;/g, "'");

    content = content.replace(/font-family[^;]*?"/g,'"');

    content = content.replace(/font-family.*?;/g, '');

    content = content.replace(/font-size[^;]*?"/g,'"');

    content = content.replace(/font-size.*?;/g, '');

    content = content.replace(/text-decoration: underline;"/g, '" class="line"');

    content = content.replace(/-webkit-tap-highlight-color[^;]*?"/g, '"');

    content = content.replace(/-webkit-tap-highlight-color.*?;/g, '');

    content = content.replace(/(&nbsp;){2,}/g, '');

    content = content.replace(/(&nbsp; ){2,}/g, '');

    content = content.replace(/color[^;]*?51\)"/g, '"');

    content = content.replace(/color.*?51\);/g, '');

    content = content.replace(/style=" "/g, '');

    content = content.replace(/width=".*?"/g,'');

    content = content.replace(/height=".*?"/g,'');

    return content;
}

/**
 * 创建新的页面dom文本
 * @param  {[type]} content [description]
 * @return {[type]}         [description]
 */
function createNewDom(content) {
    var _html = [];
    _html.push('<!DOCTYPE html>');
    _html.push('<html>');
    _html.push('<title></title>');
    _html.push(_meta);
    _html.push(_phoneStyle);
    _html.push(_style);
    _html.push('<body>');
    _html.push(content);
    _html.push('</body>');
    _html.push('</html>');

    return _html.join('');
}