(function() {
  // Keep track of the button element and selected text
  let button;

  document.addEventListener('mouseup', function(event) {
    // button のクリックイベントの場合は何もしない
    if (event.target === button) {
      return;
    }
    // button 以外の箇所のクリックで、button が存在する場合は削除する
    if (event.target !== button && button) {
      button.remove();
      button = null;
      return;
    }
    // Get the selected text
    const selectedText = window.getSelection().toString().trim();

    if (selectedText.length > 0) {
      button = document.createElement('button');
      button.innerHTML = selectedText;
      button.style.position = 'absolute';
      button.style.left = event.pageX + 'px';
      button.style.top = event.pageY + 'px';

      document.body.appendChild(button);
    }
  });
})();
