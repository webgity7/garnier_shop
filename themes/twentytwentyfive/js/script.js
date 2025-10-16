                                             
$( document ).ready(function() {


// owl object.....

  const $carousel= $('.owl-carousel').owlCarousel({
    	slideBy:5,
    	items:5,
    	loop:false,
    	nav:false,
	dots:false,
	margin:8,
	smartSpeed:400,
	autoWidth:true,
	
	

});


// Button active inactive checking functionality

  function updateButtonStates() {
    // owl internal data. 
    const data = $carousel.data('owl.carousel');
    console.log(data);
    // getting current index to visible items.
    const currentIndex = data.relative(data.current());
   
    // geting image shows in per page.
    const visibleCount = data.options.items || 5;

    // get total items.
    const totalCount = data.items().length;

    // if it is first element button disable
    $prevButton.toggleClass("inactive", currentIndex <= 0);

    // if it is last visible group disable button
    const isAtEnd = currentIndex + visibleCount >= totalCount;
    $nextButton.toggleClass("inactive", isAtEnd);
  }


  $carousel.on("initialized.owl.carousel changed.owl.carousel resized.owl.carousel", function () {
    updateButtonStates(); //  Always update nav state after init/change/resize
  });
  setTimeout(updateButtonStates, 50);




// html button element
  const $prevButton = $("#left_arrow");
  const $nextButton = $("#right_arrow");



// previous button logic...

  $prevButton.on("click", function () {
    //  Only trigger if button is not disabled
    if (!$(this).hasClass("inactive")) {
      $carousel.trigger("prev.owl.carousel");
    }
  });


// next button logic...

 $nextButton.on("click", function () {
    if (!$(this).hasClass("inactive")) {
      $carousel.trigger("next.owl.carousel");
    }
  });
	
});

