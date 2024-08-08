(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    // display section on clicking the online Courses 
    // <script>
    //     document.addEventListener('DOMContentLoaded', function() {
    //         const onlineClassesLink = document.querySelector('.nav-item.nav-link.active');
    //         const navBarCatBelow = document.querySelector('.navBarCatBelow');
    //         onlineClassesLink.addEventListener(
    //             'click',
    //             function(event) {
    //                 event.preventDefault();
    //                 navBarCatBelow.style.display = navBarCatBelow.style.display === 'flex' ? 'none' : 'flex';
    //             });
    //         document.addEventListener('click', function(event) {
    //             if (!onlineClassesLink.contains(event.target) && !navBarCatBelow.contains(event.target)) {
    //                 navBarCatBelow.style.display = 'none';
    //             }
    //         });
    //     });
    // </script>
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

function whatsapp() {
    var stuname = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    // var course = document.getElementById("course").value;
    var course = document.getElementById('dropdown1').value;
    var classtype = document.getElementById('dropdown2').value;
    var jointype = document.getElementById('dropdown3').value;
    // var radioButtonGroup = document.getElementsByName("classtype");
    // var checkedRadio = Array.from(radioButtonGroup).find(
    //    (radio) => radio.checked
    // );
    // var radioButtonJointype = document.getElementsByName("jointype");
    // var checkedRadio1 = Array.from(radioButtonJointype).find(
    //    (radio) => radio.checked
    // );
    var message = document.getElementById("message").value;
    // console.log(class_type1);
    var whatsappurl = "https://web.whatsapp.com/send?phone=919620405406&text="
    +"Student Name: "+stuname+"%0a"
    +"Number: "+mobile+"%0a"
    +"Email Id: "+email+"%0a"
    +"Course: "+course+"%0a"
    +"Class Type: "+classtype+"%0a"
    +"Join AS A: "+jointype+"%0a"

    // +"Class Type: "+(checkedRadio ? encodeURIComponent(checkedRadio.value) : '')+"%0a"
    // +"Join As A: "+(checkedRadio ? encodeURIComponent(checkedRadio1.value) : '')+"%0a"
    +"Message: "+message+"%0a";
    window.open(whatsappurl,"_blank").focus();

}
