document.addEventListener('DOMContentLoaded', function () {
  new Splide('#splide', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap:10,
    autoplay: false,
    pagination: true,
    breakpoints: {
      991: {
        perPage: 2,
      },
      575: {
        perPage: 1,
      }
    }
  }).mount();
  
  
  splide.on( 'pagination:mounted', function ( data ) {
    data.list.classList.add( 'splide__pagination--custom' );
    data.items.forEach( function ( item ) {
      item.button.textContent = String( item.page + 1 );
    } );
  } );
  });


