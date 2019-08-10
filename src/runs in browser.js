var { toBlob } = require('dom-to-image')
var { saveAs } = require('file-saver')
function download (e) {
  if (e.key == 'Enter') {
    toBlob(document.querySelector('div'))
      .then(function (blob) {
        saveAs(blob, 'meme.png')
      });
  }
}
document.querySelectorAll('input').forEach(e => e.addEventListener('keyup', download))