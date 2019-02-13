(function (context) {
  let currentHeight = 0;
  let zoomFactor = 0;

  function viewImage(imageName) {

    currentHeight = 0

    const instance = basicLightbox.create(`
    <div class="image-modal-container">
    <div class="button-container">
    <div class="btn-group">
        <button class="zoom-button btn btn-primary btn-sm" onclick="zoom('in')">+</button>
        <button class="zoom-button btn btn-primary btn-sm" onclick="zoom('out')">-</button>     
        </div>  
        <a class="zoom-button btn btn-primary" rel="noopener nofollow" target="_blank" download href="${imageName}">download</a>
    </div>
        <div class="image-container">
            <img id="displayed-image" src="${imageName}" />
        </div>
    </div>`
    ).show();


  }

  function viewTable(id) {

    currentHeight = 0

    const table = document.querySelector('#' + id).cloneNode(true);

    const el = `
    <div class="image-modal-container">
    <div class="button-container">

    </div>
        <table class="table">
        ${table.innerHTML}
        </table>
    </div>`;

    const instance = basicLightbox.create(el).show();
  }


  function zoom(inOrOut) {
    const image = document.getElementById('displayed-image');
    if (currentHeight === 0) {
      currentHeight = image.offsetHeight;
      zoomFactor = currentHeight / 2;
    }
    if (inOrOut === 'in') {
      currentHeight = currentHeight + zoomFactor;
    } else {
      currentHeight = currentHeight - zoomFactor;
    }

    image.style.height = currentHeight + 'px';
  }

  function toggleChapterMenu() {

    const menu = document.getElementById('chapterMenu');

    if (!menu.classList.contains('show')) {
      menu.className += ' show';
    } else {
      menu.classList.remove('show')
    }
  }

  context.viewImage = viewImage;
  context.viewTable = viewTable;
  context.zoom = zoom;
  context.toggleChapterMenu = toggleChapterMenu;

})(window);

