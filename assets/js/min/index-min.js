$( document ).ready(function() {

  // $(".play").on("click", function() {
  //   $(".overlay").removeClass("hidden").addClass("showing");
  //   _wq.push({ "5e7": function(video) {
  //     video.play();
  //   }});
  // });

  $(".overlay-bg").on("click", function() {
    $(".overlay").removeClass("showing").addClass("hidden");
    //video.pause();
  });

  $(document).ready(function() {
      $('#ck_firstNameField').focus();
  });

  $(document).keyup(function(e) {
       if (e.keyCode === 27) { // escape key maps to keycode `27`
          $(".overlay").removeClass("showing").addClass("hidden");
      }
  });

  $( "#ck_subscribe_form" ).submit(function( event ) {
    event.preventDefault();
    $(".intro").addClass("hidden");
  });

  $(".cta-primary-email").on("click", function() {
    $(".cta-primary-email").html("Submitting...");
    //video.pause();
  });

  var share = new ShareButton({
    title: "Free UX Starter Kit",
    url: "http://learnaiux.com",
    description: "I just snagged a free UX starter kit from @mds 👌",
    image: "http://aiux-production.s3.amazonaws.com/assets/aiux-card.jpg",
    ui: {
      flyout: "bottom right"
    },
    networks: {
      whatsapp: {
        enabled: false
      }
    }
  });

  share.open();

});



