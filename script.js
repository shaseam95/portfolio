var mySlider;
$(document).ready(function(){
// intro fading
        $(".header").hide().fadeIn(2500);
        $(".buttons").hide().fadeIn(2500);

// sticky nav bar on scroll
        var navOffset = $(".buttons").offset().top;
        
        $(window).scroll(function() {
            var scrollPos = $(window).scrollTop();
            
            if (scrollPos >= navOffset) {
                $(".buttons").css("bottom", "auto");
                $(".buttons").css("position", "fixed");
                $(".buttons").css("top", "0");
            }else{
                $(".buttons").css("position", "absolute");
                $(".buttons").css("bottom", "0");
                $(".buttons").css("top", "auto");
            }
        });

// scrolling nav bar buttons
        $(".aboutmeBtn").click(function() {
            $('html, body').animate({
                scrollTop: $(".aboutMe").offset().top - 57
            }, 1500);
        });
        $(".workBtn").click(function() {
            $('html, body').animate({
                scrollTop: $(".work").offset().top - 57
            }, 1500);
        });
        
        
        
        
// View work buttons
        $('#mdVeiwBtn').on('click', function() {
            $('.page4').css("display", "none");
            $('#academicContainer').css("display", "none");
            $('.page4').css("display", "none");
            $('#tscContainer').css("display", "none");
            
            $('.page4').css("display", "block");
            $('#merrowDynastyContainer').css("display", "block");
            
            $('#bxslider1').bxSlider({
                slideWidth:700
            });
            $('html, body').animate({
                scrollTop: $(".page4").offset().top - 57
            }, 1500);
            
            // $(".page4 .pageHeader").html("THE MERROW DYNASTY");
            // $(".workText").html("Redesign of the original flash based website to HTML. Version 1 of the redesign was not responsive so it was updated to be responsive and suitable for mobile devices.<br><br>Technologies used to make this website were HTML, CSS, jQuery and Google Maps API.");
            // $("#websiteLink").attr("href", "http://www.merrowdynasty.co.uk/");
            // $(".prevVer").html("Previous Version");
            // $(".prevVer").attr("href","");
            
            // $(".dynamicContent").empty().append("<span class='pageHeader'>WIREFRAMES</span>");
            // var wfHeader = document.createElement("span");
            // var wfHeaderText = document.createTextNode("WIREFRAMES");
            // wfHeader.appendChild(wfHeaderText);
            // $(wfHeader).css("color","#cf3535");
            // var element = document.getElementById("p4Container");
            // element.appendChild(wfHeader);
            // $('div.faq_info').empty().append('whatever string');
            // $("p4Container").remove().append(wfHeader);
            // $(".page4 .p4Container .pageHeader:nth-of-type(2)").html("WIREFRAMES")
        })
        
        $('#acadVeiwBtn').on('click', function() {
            $('.page4').css("display", "none");
            $('#merrowDynastyContainer').css("display", "none");
            $('.page4').css("display", "none");
            $('#tscContainer').css("display", "none");
            
            $('.page4').css("display", "block");
            $('#academicContainer').css("display", "block");
            $('#bxslider2').bxSlider({
                slideWidth:700
            });
            $('html, body').animate({
                scrollTop: $(".page4").offset().top - 57
            }, 1500);
            
        })
        
        $('#tscVeiwBtn').on('click', function() {
            $('.page4').css("display", "none");
            $('#merrowDynastyContainer').css("display", "none");
            $('.page4').css("display", "none");
            $('#academicContainer').css("display", "none");
            
            $('.page4').css("display", "block");
            $('#tscContainer').css("display", "block");
            $('#bxslider3').bxSlider({
                slideWidth:700
            });
            $('html, body').animate({
                scrollTop: $(".page4").offset().top - 57
            }, 1500);
            
        })
        
  


        
});