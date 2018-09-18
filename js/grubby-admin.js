require('medium-editor/src/sass/medium-editor.scss');
require('medium-editor/src/sass/themes/flat.scss');
import MediumEditor from 'medium-editor';

const editor = new MediumEditor('.editor', {
  placeholder: {
    text: 'Type your text',
    hideOnClick: true
  }
});

editor.subscribe('blur', function (event, editable) {
  if (editable.dataset.target) {
    const element = document.querySelector(editable.dataset.target);
    if (element.nodeName === 'TEXTAREA') {
      element.value = editable.innerHTML;
    }
  }
});
