$.getScript('https://www.mobzway.com/assets/js/lazyload.jquery.min.js', function () {

    $('.img-lazy').lazyload({

    });


});
$('.casinoGameimage-slide').owlCarousel({
    loop: true,
    margin: 5,
    autoplay: true,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

var fired = false;
//window.addEventListener('scroll', function() {

//let scroll = window.scrollY;
//if (scroll > 0  && fired === false) {
// var recaptchaScript = document.createElement('script');
//recaptchaScript.src = 'https://www.google.com/recaptcha/api.js';
//recaptchaScript.defer = true;
// document.body.appendChild(recaptchaScript);    
//  fired = true;
//    console.log('On scroll fired');
//  }
//}, true);
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-70164754-1');

function extractDomain(url) {
    let hostname = new URL(url).hostname;
    console.log(hostname)
    let parts = hostname.split('.').slice(-2);
    console.log(parts)
    return parts[0];
}



function freeConsultation() {
    // Make AJAX call

    let fname = $('#freeConName').val();
    let mob_number = $('#freecon_num').val();
    let Source_URL = window.location.href;
    //let Source_URL = "https://www.mobzway.com";
    //let lead_source = Source_URL.split('//')[1].split('.')[0];
    let lead_source = extractDomain(Source_URL);
    let hidden_chat_id = $('#hidden_hero_id').val();
    let countryCodeGet = $('.selectedCode_hero_chat').attr('data-code');

    // if (fname == "" || lname == "" || mob_number == "" || email == "") {
    //   alert("fill all input fields");
    // }
    if (fname == "") {
        alert("Name cannot be empty.");
    }

    else if (mob_number == "") {
        alert("Mobile cannot be empty.");
    }
    else if (hidden_chat_id === 'mobile' && (!countryCodeGet || countryCodeGet === "Select Code")) {
        alert('Please select a country code.');
        return;
    }
    else {
        const codeandMobileNumber = '';
        if (hidden_chat_id === 'mobile') {
            codeandMobileNumber = (countryCodeGet || '') + mob_number;
        } else {
            codeandMobileNumber = mob_number;
        }
        const postData = { fname: fname, mob_number: codeandMobileNumber, Source_URL: Source_URL, lead_source: lead_source, contact_type: hidden_chat_id }
        console.log(postData)
        $('.spinner-submit-btn').css('display', 'flex');
        $('.contact_btn_hero').prop('disabled', true);
        $.ajax({
            //url: 'http://54.179.162.141:9100/create-lead', // Specify the URL to send the request to
            url: "https://crm-api.mobzway.com:2083/create-lead",
            method: 'POST', // Specify the HTTP method
            data: postData, // Specify any data to send with the request
            success: function (response) {
                // Handle successful response
                console.log('Response:', response);

                $('#freeConName').val('');
                $('#chatForm')[0].reset()
                $('.spinner-submit-btn').hide();
                $('.contact_btn_hero').prop('disabled', false);
                window.location.href = 'https://mobzway.com/thank-you/';

            },
            error: function (xhr, status, error) {
                // Handle error
                console.error('Error:', error);
            }
        });
    }
    // alert("called")
}


// function sendRequest() {
//     // Make AJAX call

//     let fname = $('#firstNameReq').val();
//     let lname = $('#lastNameReq').val();
//     let email = $('#emailReq').val();
//     let mob_number = $('#requestNum').val();
//     let Source_URL = window.location.href;
//     //let Source_URL = "https://www.mobzway.com";
//     //let lead_source = Source_URL.split('//')[1].split('.')[0];
//     let lead_source = extractDomain(Source_URL);
//     let product = $('#chooseProductReq').text().trim();
//     if (product === "Choose Product") product = "";
//     let hidden_chat_id = $('#hidden_req_id').val();
//     // let selectedCode_request = $('.selectedCode_request').text().trim();
//     let selectedCode_request = $('.selectedCode_request').attr('data-code');

//     // console.log(selectedCode_request, 'selectedCode_request');

//     let buttonClicked = null;

//     // if (fname == "" || lname == "" || mob_number == "" || email == "") {
//     //   alert("fill all input fields");
//     // }
//     if (fname == "") {
//         alert("First Name cannot be empty.");
//     }
//     else if (lname == "") {
//         alert("Last Name cannot be empty.");
//     }

//     else if (product == "") {
//         alert("Product cannot be empty.");
//     }

//     else if (email == "") {
//         alert("Email Name cannot be empty.");
//     }

//     else if (mob_number == "") {
//         alert("Mobile cannot be empty.");
//     }
//     else if (hidden_chat_id === 'mobile' && (!selectedCode_request || selectedCode_request === "Select Code")) {
//         alert('Please select a country code.');
//         return;
//     }

//     else {
//         let numberWithCountryCode = '';
//         if (hidden_chat_id === 'mobile') {
//             numberWithCountryCode = (selectedCode_request || '') + mob_number;
//         } else {
//             numberWithCountryCode = mob_number;
//         }
//         const postData = { fname: fname, lname: lname, email: email, mob_number: numberWithCountryCode, Source_URL: Source_URL, product: product, lead_source: lead_source, contact_type: hidden_chat_id }
//         console.log(postData)
//         $('.spinner-submit-btn').css('display', 'flex');
//         $('.contact_btn_next').prop('disabled', true);
//         $.ajax({
//             //url: 'http://54.179.162.141:9100/create-lead', // Specify the URL to send the request to
//             url: "https://crm-api.mobzway.com:2083/create-lead",
//             method: 'POST', // Specify the HTTP method
//             data: postData, // Specify any data to send with the request
//             success: function (response) {
//                 // Handle successful response
//                 console.log('Response:', response);

//                 $('#chatForm')[0].reset()
//                 $('.spinner-submit-btn').hide();
//                 $('.contact_btn_next').prop('disabled', false);
//                 window.location.href = 'https://mobzway.com/thank-you/';

//             },
//             error: function (xhr, status, error) {
//                 // Handle error
//                 console.error('Error:', error);
//             }
//         });
//     }
//     // alert("called")
// }

// $(document).ready(function () {
//     $('.skill_btn_block').click(function () {
//         $(this).addClass('skill_btn_block_active').siblings().removeClass('skill_btn_block_active');
//     });
// });

// function sendChatRequest() {

//     // Make AJAX call

//     let fname = $('#firstNameChat').val();
//     let lname = $('#lastNameChat').val();
//     let email = $('#emailChat').val();
//     let mob_number = $('#mob_number_chat').val();
//     let Source_URL = window.location.href;
//     //let Source_URL = "https://www.mobzway.com";
//     // let selectedCode = $('.selectedCode_chat').text();
//     let selectedCode = $('.selectedCode_chat').attr('data-code');
//     let clickedButton = $('#chatQoute').find('.try_demo_link.active');

//     // let lead_source = Source_URL.split('//')[1].split('.')[0];
//     let lead_source = extractDomain(Source_URL);
//     console.log(`------------------lead source`);
//     console.log(lead_source);
//     let product = $('#chooseProduct').text().trim();
//     if (product === "Choose Product") product = "";
//     let hidden_chat_id = $('#hidden_chat_id').val();
//     console.log(hidden_chat_id, 'contact_type');



//     // if (fname == "" || lname == "" || mob_number == "" || email == "") {
//     //   alert("fill all input fields");
//     // }
//     if (fname == "") {
//         //alert(selectedCode)
//         alert("First Name cannot be empty.");
//     }
//     else if (lname == "") {
//         alert("Last Name cannot be empty.");
//     }

//     else if (product == "") {
//         alert("Product cannot be empty.");
//     }

//     else if (email == "") {
//         alert("Email Name cannot be empty.");
//     }

//     else if (mob_number == "") {
//         alert("Mobile cannot be empty.");
//     }
//     else if (hidden_chat_id === 'mobile' && (!selectedCode || selectedCode === "Select Code")) {
//         alert("Please select a country code.");
//         return;
//     }
//     else {
//         //alert("Working fine")
//         let fullMobileNumber = "";
//         if (hidden_chat_id === 'mobile') {
//             fullMobileNumber = (selectedCode || '') + mob_number;
//         } else {
//             fullMobileNumber = mob_number;
//         }
//         const postData = { fname: fname, lname: lname, email: email, mob_number: fullMobileNumber, Source_URL: Source_URL, product: product, lead_source: lead_source, contact_type: hidden_chat_id }
//         $('.spinner-submit-btn').css('display', 'flex');
//         $('.contact_btn_next').prop('disabled', true);
//         $.ajax({
//             //url: 'http://54.179.162.141:9100/create-lead', // Specify the URL to send the request to
//             url: "https://crm-api.mobzway.com:2083/create-lead",
//             method: 'POST', // Specify the HTTP method
//             data: postData, // Specify any data to send with the request
//             success: function (response) {
//                 // Handle successful response
//                 console.log('----------------Response:', response);
//                 $('.spinner-submit-btn').hide();
//                 $('.contact_btn_next').prop('disabled', false);

//                 if (response.status == true) {


//                     //   $('#fname').val("");
//                     //   $('#lname').val("");
//                     //   $('#email').val("");
//                     //   $('#product').val("");

//                     $('#chatForm')[0].reset();
//                     console.log(`-----------inside success`);
//                     let activeBlock = $('.skill_btn_block_active');
//                     let redirectUrl = activeBlock.data('url');
//                     if (redirectUrl === 'https://mobzway.com/thank-you/#poker-game') {
//                         window.location.href = redirectUrl;
//                     } else if (redirectUrl === 'https://mobzway.com/thank-you/#rummy-game') {
//                         window.location.href = redirectUrl;
//                     } else if (redirectUrl === 'https://mobzway.com/thank-you/#ludo-game') {
//                         window.location.href = redirectUrl;
//                     } else {
//                         window.location.href = 'https://mobzway.com/thank-you/';
//                     }

//                 }
//                 else {
//                     if (response.message === 'Request failed with status code 400') {
//                         $('#chatForm')[0].reset();
//                         console.log(`-----------inside success`);
//                         let activeBlock1 = $('.skill_btn_block_active');
//                         let redirectUrl1 = activeBlock1.data('url');
//                         if (redirectUrl1 === 'https://mobzway.com/thank-you/#poker-game') {
//                             window.location.href = redirectUrl1;
//                         } else if (redirectUrl1 === 'https://mobzway.com/thank-you/#rummy-game') {
//                             window.location.href = redirectUrl1;
//                         } else if (redirectUrl1 === 'https://mobzway.com/thank-you/#ludo-game') {
//                             window.location.href = redirectUrl1;
//                         } else {
//                             window.location.href = 'https://mobzway.com/thank-you/';
//                         }
//                     } else {
//                         alert(response.message);
//                     }

//                 }
//             },
//             error: function (xhr, status, error) {
//                 // Handle error
//                 console.error('Error:', error);
//                 alert(error);
//                 $('.spinner-submit-btn').hide();
//                 $('.contact_btn_next').prop('disabled', false);
//             }
//         });
//     }
//     // alert("called")
// }


// $(document).ready(function () {
//     AOS.init();
// });
// new WOW().init();
$(document).ready(function () {
    $('.moreless-button1').click(function () {
        $('.moretext1').slideToggle(500);
        if ($('.moreless-button1').text() == "Read more") {
            $('.moreless-button1').text("Read less");
        } else {
            $('.moreless-button1').text("Read more");
        }
    });

    $('.moreless-button2').click(function () {
        $('.moretext2').slideToggle(500);
        if ($('.moreless-button2').text() == "Read more") {
            $('.moreless-button2').text("Read less");
        } else {
            $('.moreless-button2').text("Read more");
        }
    });
});
$(document).ready(function () {
    $("#myTab a").click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
});
// function openNav() {
//     $('.responsive-nav span').toggleClass('one');
//     $('.left_nav').toggleClass('left_nav_blks');
//     $("body").toggleClass("scroll-stop");
// }

$(document).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('#header').addClass('shrink');
    } else {
        $('#header').removeClass('shrink');
    }
});

(function ($) {
    $.fn.menumaker = function (options) {
        var menus_lnk = $(this),
            settings = $.extend({
                format: "dropdown",
                sticky: false
            }, options);
        return this.each(function () {
            $(this).find(".button").on('click', function () {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.slideToggle().removeClass('open');
                } else {
                    mainmenu.slideToggle().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show();
                    }
                }
            });
            menus_lnk.find('li ul').parent().addClass('has-sub');
            multiTg = function () {
                menus_lnk.find(".has-sub").prepend('<span class="submenu-button"></span>');
                menus_lnk.find('.submenu-button').on('click', function () {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').slideToggle();
                    } else {
                        $(this).siblings('ul').addClass('open').slideToggle();
                    }
                });
            };
            if (settings.format === 'multitoggle') multiTg();
            else menus_lnk.addClass('dropdown');
            if (settings.sticky === true) menus_lnk.css('position', 'fixed');
            resizeFix = function () {
                var mediasize = 1000;
                if ($(window).width() > mediasize) {
                    menus_lnk.find('ul').show();
                }
                if ($(window).width() <= mediasize) {
                    menus_lnk.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };
})(jQuery);

(function ($) {
    $(document).ready(function () {
        $("#menus_lnk").menumaker({
            format: "multitoggle"
        });
    });
})(jQuery);



$(document).ready(function () {
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function () {
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
});
$(document).ready(function () {
    $("#myTab a").click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
});
$(document).ready(function () {

    $(".has_child > span:first-child").addClass("height-btn");

    $(".height-btn").click(function () {
        $(".left_nav").toggleClass("full-height");
    })

    $(".submenu-button").click(function () {
        $(this).toggleClass("rotate");
    })
});
//$("#menus_lnk ul li.contact_btn_list_wrapper a").addClass("contact_btn");
jQuery(document).ready(function ($) {
    $(".menu-item-7291").click(function () {
        $("#requestQoute").modal('show');
    });
});
jQuery(document).ready(function ($) {
    $(".menu-item-7296").click(function () {
        $("#requestQoute").modal('show');
    });
    $("#menus_lnk ul li#menu-item-74 a").click(function () {
        $(".sub-menu").toggleClass("sub-menu-open")
    });
});
$("#accordion").on("hide.bs.collapse show.bs.collapse", (e) => {
    $(e.target).prev().find("i:last-child").toggleClass("fa-minus fa-plus");
});
$(document).ready(function () {
    $("#second").click(function () {
        $("#one,#three,#four").hide();
        $("#two").show();

    });
});
$(document).ready(function () {
    $("#third").click(function () {
        $("#one,#two,#four").hide();
        $("#three").show();

    });
});
$(document).ready(function () {
    $("#fourth").click(function () {
        $("#one,#two,#three").hide();
        $("#four").show();

    });
});
$(document).ready(function () {
    $("#first").click(function () {
        $("#four,#two,#three").hide();
        $("#one").show();

    });
});
// var $zoho = $zoho || {}; $zoho.salesiq = $zoho.salesiq || { widgetcode: "8ae08dca07a36a1019fccd94dc29f48e037312ac322437a4a9b0364f2599ba92813c9c77f9215c9a056812428f74bb41", values: {}, ready: function () { } }; var d = document; s = d.createElement("script"); s.type = "text/javascript"; s.id = "zsiqscript"; s.defer = true; s.src = "https://salesiq.zoho.com/widget"; t = d.getElementsByTagName("script")[0]; t.parentNode.insertBefore(s, t);
/* Do not remove this code. */
function rccallback1742164000001858039() {
    if (document.getElementById('recap1742164000001858039') != undefined) {
        document.getElementById('recap1742164000001858039').setAttribute('captcha-verified', true);
    }
    if (document.getElementById('recapErr1742164000001858039') != undefined && document.getElementById('recapErr1742164000001858039').style.visibility == 'visible') {
        document.getElementById('recapErr1742164000001858039').style.visibility = 'hidden';
    }
}
function reCaptchaAlert1742164000001858039() {
    var recap = document.getElementById('recap1742164000001858039');
    if (recap != undefined && recap.getAttribute('captcha-verified') == 'false') {
        document.getElementById('recapErr1742164000001858039').style.visibility = 'visible';
        return false;
    }
    return true;
}
function validateEmail1742164000001858039() {
    var form = document.forms['WebToLeads1742164000001858039'];
    var emailFld = form.querySelectorAll('[ftype=email]');
    var i;
    for (i = 0; i < emailFld.length; i++) {
        var emailVal = emailFld[i].value;
        if ((emailVal.replace(/^\s+|\s+$/g, '')).length != 0) {
            var atpos = emailVal.indexOf('@');
            var dotpos = emailVal.lastIndexOf('.');
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
                alert('Please enter a valid email address. ');
                emailFld[i].focus();
                return false;
            }
        }
    }
    return true;
}


function checkMandatory1742164000001858039() {
    var mndFileds = new Array('Last Name', 'Email');
    var fldLangVal = new Array('Last\x20Name', 'Email');
    for (i = 0; i < mndFileds.length; i++) {
        var fieldObj = document.forms['WebToLeads1742164000001858039'][mndFileds[i]];
        if (fieldObj) {
            if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
                if (fieldObj.type == 'file') {
                    alert('Please select a file to upload.');
                    fieldObj.focus();
                    return false;
                }
                alert(fldLangVal[i] + ' cannot be empty.');
                fieldObj.focus();
                return false;
            } else if (fieldObj.nodeName == 'SELECT') {
                if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
                    alert(fldLangVal[i] + ' cannot be none.');
                    fieldObj.focus();
                    return false;
                }
            } else if (fieldObj.type == 'checkbox') {
                if (fieldObj.checked == false) {
                    alert('Please accept  ' + fldLangVal[i]);
                    fieldObj.focus();
                    return false;
                }
            }
            try {
                if (fieldObj.name == 'Last Name') {
                    name = fieldObj.value;
                }
            } catch (e) { }
        }
    }
    trackVisitor1742164000001858039();
    if (!validateEmail1742164000001858039()) { return false; }

    if (!reCaptchaAlert1742164000001858039()) { return false; }
    document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
}


// function tooltipShow1742164000001858039(el) {
//     var tooltip = el.nextElementSibling;
//     var tooltipDisplay = tooltip.style.display;
//     if (tooltipDisplay == 'none') {
//         var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
//         for (i = 0; i < allTooltip.length; i++) {
//             allTooltip[i].style.display = 'none';
//         }
//         tooltip.style.display = 'block';
//     } else {
//         tooltip.style.display = 'none';
//     }
// }
// var $zoho = $zoho || {}; $zoho.salesiq = $zoho.salesiq || { widgetcode: '8ae08dca07a36a1019fccd94dc29f48e037312ac322437a4a9b0364f2599ba92813c9c77f9215c9a056812428f74bb41', values: {}, ready: function () { } }; var d = document; s = d.createElement('script'); s.type = 'text/javascript'; s.id = 'zsiqscript'; s.defer = true; s.src = 'https://salesiq.zoho.com/widget'; t = d.getElementsByTagName('script')[0]; t.parentNode.insertBefore(s, t); function trackVisitor1742164000001858039() { try { if ($zoho) { var LDTuvidObj = document.forms['WebToLeads1742164000001858039']['LDTuvid']; if (LDTuvidObj) { LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid(); } var firstnameObj = document.forms['WebToLeads1742164000001858039']['First Name']; if (firstnameObj) { name = firstnameObj.value + ' ' + name; } $zoho.salesiq.visitor.name(name); var emailObj = document.forms['WebToLeads1742164000001858039']['Email']; if (emailObj) { email = emailObj.value; $zoho.salesiq.visitor.email(email); } } } catch (e) { } }


$('.game-offer').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 4,
            nav: false,
            loop: false
        }
    }
});
$('.product').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 2,
            nav: false,
            loop: false
        }
    }

});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});
if ($(".featured-slider").length) {
    $(".featured-slider").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        items: 1,
        animateOut: 'fadeOut'
    });
}
$('#slick1').slick({
    rows: 2,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});

$('.sub_menu_mobile_parent').click(function () {
    $(this).toggleClass("sub_menu_mobile_parent_active")
    $(this).next('.sub_menu_mobile').toggleClass('sub_menu_mobile_active').siblings('.sub_menu_mobile').removeClass('sub_menu_mobile_active');
});





