(function ($) {
  $(document).ready(function () {
    const reel = $(".carousel .reel"); // Asegúrate de que este selector coincide con tu HTML
    const scrollAmount = 300; // Ajusta la cantidad de desplazamiento según tus necesidades

    $(".carousel .forward").click(function () {
      reel.animate({ scrollLeft: reel.scrollLeft() + scrollAmount }, 600);
    });

    $(".carousel .backward").click(function () {
      reel.animate({ scrollLeft: reel.scrollLeft() - scrollAmount }, 600);
    });
  });
})(jQuery);
