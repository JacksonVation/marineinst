$(function() {

  let cFilter, cFilterData; // declare a variable to store the filter and one for the data to filter by
  let filtersActive = []; // an array to store the active filters

  $(".works-filter").each(function(index, item) {
    filtersActive.push($(item).attr('data-filter'))
  })

  $(".works-filter").on("click", function() { // if filters are clicked
    cFilter = $(this);
    cFilterData = cFilter.attr('data-filter'); // read filter value
    if (filtersActive.indexOf(cFilterData) === -1) {
      filtersActive.push(cFilterData)
      $('.' + cFilterData).show();
      $('html, body').animate({
        scrollTop: $('.' + cFilterData).offset().top - 50
      }, 2000);
    } else {
      filtersActive = filtersActive.slice(filtersActive.indexOf(cFilterData) + 1, filtersActive.length)
      $('.' + cFilterData).hide();
    }

    for (let i = 0; i < filtersActive.length; i++) {
      if ($('.' + filtersActive[i]).is(':hidden')) {
        $('.' + filtersActive[i]).show();
      }
    }


  });

});
