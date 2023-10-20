
module.exports = function(sourceCode) {
    
    var code =  `var style = document.createElement('style');
    style.innerHTML = \`${sourceCode}\`;
    document.head.appendChild(style);
    module.exports = {
        style: \`${sourceCode}\`
    }
    `
    return code
}