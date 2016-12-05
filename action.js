$( document ).ready(function() {
  var currentContent = "content-1";
  var currentLinkPage = "link-page-1";
  var opacity = 100;
  var scrollAmount = 0;
  var AmountToScroll = 0;
  /* Height of the page */
  var documentHeight = $(document).height();


  var sectionsPage = [
  {start:0, end:10},
  {start:10, end:20},
  {start:20, end:30},
  {start:30, end:40},
  {start:40, end:50},
  {start:70, end:85}
  ]

  /* Initialise all content to be hidden when the page hasn't yet been scrolled */
  $(".changing-content").hide();
  $("#content-0").show();

    $( window ).scroll(function(event) {
      /* Amount scrolled by 'user' */
      scrollAmount = $(window).scrollTop();

      /* % scrolled */
      var scrollPercent = (scrollAmount / documentHeight) * 100;



      setPercentageScrollForPages(scrollPercent);
      replaceText(scrollPercent);
      changeOpacity(scrollPercent, scrollAmount, documentHeight);

    });

    $("#link-page-0").on("click", function(event) {
       event.preventDefault();;
       AmountToScroll = (documentHeight*0.01*sectionsPage[0]["start"]).toString();
       $('html, body').animate({ scrollTop: AmountToScroll }, 2000);
     });

     $("#link-page-1").on("click", function(event) {
       event.preventDefault();;
       AmountToScroll = (documentHeight*0.01*sectionsPage[2]["start"]).toString();
       $('html, body').animate({ scrollTop: AmountToScroll }, 2000);
     });

     $("#link-page-2").on("click", function(event) {
       event.preventDefault();;
       AmountToScroll = (documentHeight*0.01*sectionsPage[4]["start"]).toString();
       $('html, body').animate({ scrollTop: AmountToScroll }, 2000);
     });

     $("#link-page-3").on("click", function(event) {
       event.preventDefault();;
       AmountToScroll = (documentHeight*0.01*75).toString();
       $('html, body').animate({ scrollTop: AmountToScroll }, 2000);
     });


  function replaceText(scrollPercent) {
    console.log("current content:",currentContent);

    $(".changing-content").hide();
    $(currentContent).show();

   }

  function changeOpacity(scrollPercent, scrollAmount, documentHeight){
    for (var i = 0; i < 6; i++){
      if (i%2 == 0){ // i odd
        if(scrollPercent>sectionsPage[i]["start"] && scrollPercent <sectionsPage[i]["end"]){
         opacity = map(scrollAmount, sectionsPage[i]["start"], documentHeight*0.01*sectionsPage[i]["end"], 1, 0); //FadeOut
        };
      }else{ // i even
        if(scrollPercent>sectionsPage[i]["start"] && scrollPercent <sectionsPage[i]["end"]){
         opacity = map(scrollAmount, sectionsPage[i]["start"], documentHeight*0.01*sectionsPage[i]["end"], 0, 1); //FadeIn
        };
      };
    };

    $('.column-left').css({'opacity': opacity});
  };

     function map(scrollAmount, in_min, in_max, out_min, out_max) {
       return (scrollAmount - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
     }

    function setPercentageScrollForPages(scrollPercent) {
      if(scrollPercent<sectionsPage[0]["end"]){
        currentContent = "#content-0"
        currentLinkPage = "#link-page-0";
        $(".circle").removeClass("current-section");
        $(".circle").removeClass("current-section-pink");
        $("#link-page-0").addClass("current-section");
       }else if(scrollPercent>sectionsPage[1]["start"] && scrollPercent<sectionsPage[2]["end"]){
        currentContent = "#content-1"
        currentLinkPage = "#link-page-1";
        $(".circle").removeClass("current-section");
        $(".circle").removeClass("current-section-pink");
        $("#link-page-1").addClass("current-section");
       }else if(scrollPercent>sectionsPage[3]["start"] && scrollPercent<sectionsPage[4]["end"]){
        currentContent = "#content-2"
        currentLinkPage = "#link-page-2";
        $(".circle").removeClass("current-section");
        $(".circle").removeClass("current-section-pink");
        $("#link-page-2").addClass("current-section");
       }else if(scrollPercent>sectionsPage[5]["start"]){
        currentContent = "#content-3"
        currentLinkPage = "#link-page-3";
        $(".circle").removeClass("current-section");
        $("#link-page-3").addClass("current-section-pink");
       }
    };

  });
