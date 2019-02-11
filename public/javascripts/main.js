(function (context) {
  let currentHeight = 0;
  let zoomFactor = 0;

  function viewImage(imageName) {

    const instance = basicLightbox.create(`
    <div class="image-modal-container">
    <div class="button-container">
        <button class="zoom-button" onclick="zoom('in')">in</button>
        <button class="zoom-button" onclick="zoom('out')">out</button>  
        <button class="zoom-button" onclick="download()">download</button>  
    </div>
        <div class="image-container">
            <img id="displayed-image" src="${imageName}" />
        </div>
    </div>`
    ).show();


  }

  function viewTable(id) {

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

