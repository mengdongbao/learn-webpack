const utils = require('loader-utils');

function loader(buffer) {
    // const base = toBase64(buffer);
    const src = getFilePath.call(this, buffer);
    return `
        module.exports = \`
        ${src}
        \`
    `
}
loader.raw = true

module.exports = loader

function toBase64(buffer) {
    return "data:image/png;base64," + buffer.toString('base64')
}

function getFilePath(buffer) {
    var filename = utils.interpolateName(this, "[contenthash:5].[ext]", {
        content: buffer
    })
    this.emitFile(filename, buffer);
    return filename
}