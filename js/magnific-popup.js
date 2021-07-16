
$('.design-content_img').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
        verticalFit: true,
        
    },
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
            return element.find('img');
        }
    }
    
  });

    $('.promo').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen autoplay="1"></iframe>'+
                '</div>',

            srcAction: 'iframe_src',
            }
    });



    $('.modalForm, .btn-intro-lead').magnificPopup({
        type: 'inline',
        focus: '#name',
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        zoom: {
            enabled: true,
            duration: 300
        }
     });




 
     $('.products-image.card-club').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: true,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 500, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
        
      });    



  
$('.products-image.sms').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: true,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
        verticalFit: true,
        
    },
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 500, // don't foget to change the duration also in CSS
        opener: function(element) {
            return element.find('img');
        }
    }
    
  });

  $('.products-image.unixml').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: true,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
        verticalFit: true,
        
    },
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 500, // don't foget to change the duration also in CSS
        opener: function(element) {
            return element.find('img');
        }
    }
  });

  $('.products-image.oplata-chastymi').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: true,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
        verticalFit: true,
        
    },
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 500, // don't foget to change the duration also in CSS
        opener: function(element) {
            return element.find('img');
        }
    }
  });
  

  $('.products-image.im-report').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: true,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    fixedContentPos: false,

    callbacks: {
        open: function() {
           jQuery('body').addClass('noscroll');
        },
        close: function() {
            jQuery('body').removeClass('noscroll');
        }
   },

    image: {
        verticalFit: true,
        
    },
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 500, // don't foget to change the duration also in CSS
        opener: function(element) {
            return element.find('img');
        }
    }
  });
  



  $('.marketing-img').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: true,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
        verticalFit: true,
        
    },
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 500, // don't foget to change the duration also in CSS
        opener: function(element) {
            return element.find('img');
        }
    }
    
  }); 