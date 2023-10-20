

module.exports = class FileListPlugin {

    constructor(filename = '文件列表.md') {
        this.filename = filename;
    }

    apply(compiler) {
        compiler.hooks.emit.tap("FileListPlugin", compilation => {
            let arr = [];
            for (let i in compilation.assets) {
                let content = `[${i}]\nsize: ${compilation.assets[i].size() / 1000} KB`
                arr.push(content);
            }
            
            let all = arr.join('\n\n');
            compilation.assets[this.filename] = {
                source() {
                    return all
                },
                size() {
                    return 12
                }
            }
        })
    }
}