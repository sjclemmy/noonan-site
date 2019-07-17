(function (context) {
  let currentHeight = 0;
  let zoomFactor = 0;
  let instance;

  function viewImage(imageName) {

    currentHeight = 0

    instance = basicLightbox.create(`
    <div class="image-modal-container">
    <div class="button-container">
    <div class="btn-group">
        <button class="zoom-button btn btn-primary btn-sm" onclick="zoom('in')">+</button>
        <button class="zoom-button btn btn-primary btn-sm" onclick="zoom('out')">-</button>     
        </div>  
        <a class="zoom-button btn btn-primary btn-sm" rel="noopener nofollow" target="_blank" download href="${imageName}">download</a>
        <button class=" btn btn-primary btn-sm btn-sm" onclick="closeViewer()">close</button>  
    </div>
        <div class="image-container dragscroll" id="image-container">
            <img id="displayed-image" src="${imageName}" />
        </div>
    </div>`
    );

    instance.show();



  }

  function closeViewer() {

    instance.close();

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
    const imageContainer = document.getElementById('image-container');
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

    //wait for animation to happen
    setTimeout(()=>{
      imageContainer.scroll({
        left: (image.clientWidth - imageContainer.clientWidth) / 2,
        top: (image.clientHeight - imageContainer.clientHeight) / 2,
        behavior: 'smooth'
      })
      dragscroll.reset()
      // imageContainer.scrollLeft = (image.clientWidth - imageContainer.clientWidth) / 2
    }, 100)




  }

  
  
  context.viewImage = viewImage;
  context.viewTable = viewTable;
  context.zoom = zoom;
  context.closeViewer = closeViewer;


})(window);

// PN fiddling from here

// Chapter 3 accordion

var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem ferme';
        }
        if (itemClass == 'accordionItem ferme') {
            this.parentNode.className = 'accordionItem ouvert';
        }
    }

// Chapter 5 accordion

var accItem1 = document.getElementsByClassName('accordion1Item');
    var accHD1 = document.getElementsByClassName('accordion1ItemHeading');
    for (i = 0; i < accHD1.length; i++) {
        accHD1[i].addEventListener('click', toggleItem1, false);
    }
    function toggleItem1() {
        var itemClass1 = this.parentNode.className;
        for (i = 0; i < accItem1.length; i++) {
            accItem1[i].className = 'accordion1Item ferme';
        }
        if (itemClass1 == 'accordion1Item ferme') {
            this.parentNode.className = 'accordion1Item ouvert';
        }
    }
	
// Burger menus toggler

function toggleburger(x) {
var menuElt = document.getElementById(x);
	
if (x == 'chapmenu')	
{var menuEltA = document.getElementById('qlmenu');
menuEltA.style.display = 'none';}
else
{var menuEltB = document.getElementById('chapmenu');
menuEltB.style.display = 'none';}

if (menuElt.style.display == 'none') 
   {menuElt.style.display = 'block';}
else
	{menuElt.style.display = 'none';}
}

function vanish(x) {
	x.style.display = 'none';
}

 // end burger toggler   
  
  
 //map movement opacity 

function opaque(x) {
	x.style.opacity = 1.0;
}

function translucent(x) {
	x.style.opacity = 0.5;
}
