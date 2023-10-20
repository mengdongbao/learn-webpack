module.exports = class MyPlugin {
    apply(compiler) {
        console.log('插件运行了');
        compiler.hooks.done.tap("MyPlugin-done", function(compilation) {
            console.log("编译完成");
        })
    }
}