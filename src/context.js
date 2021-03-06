var marked = require('marked');
var gzipSize = require('gzip-size');
var fs = require('fs');
var prettyBytes = require('pretty-bytes');

marked.setOptions({
    gfm: true,
    tables: true
});


function readHammerFileSync(path) {
    return fs.readFileSync(__dirname +'/../node_modules/hammerjs/'+ path, {encoding:'utf8'});
}

module.exports = {
    readme: (function() {
        return marked(readHammerFileSync('README.md'));
    })(),

    version: (function() {
        return JSON.parse(readHammerFileSync('package.json')).version;
    })(),

    gzipped: (function() {
        return prettyBytes(gzipSize.sync(readHammerFileSync('hammer.min.js')));
    })()
};
