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
        <button class="zoom-button btn btn-primary" onclick="download()">download</button>
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

  context.viewImage = viewImage;
  context.viewTable = viewTable;
  context.zoom = zoom;

})(window);

