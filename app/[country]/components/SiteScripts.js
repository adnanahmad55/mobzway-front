"use client";

import Script from 'next/script';
import React, { useEffect } from 'react';
// import "jquery/dist/jquery.min.js";
// import $ from "jquery";
// import "popper.js/dist/popper.min.js";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function SiteScripts() {

    useEffect(() => {
        if (typeof window !== "undefined") {

            // jQuery load
            import("jquery").then((jquery) => {
                window.$ = window.jQuery = jquery.default;

                // Popper
                import("popper.js/dist/popper.min.js").then(() => {

                    // Bootstrap (after jQuery + Popper)
                    import("bootstrap/dist/js/bootstrap.bundle.min.js");
                });
            });

        }
    }, []);



    return (
        <>

            {/* <Script
                src="/assets/js/jquery-3.4.1.min.js"
                strategy="beforeInteractive"
            /> */}

            {/* 2. After jQuery loaded, expose jQuery to window */}
            {/* <Script id="global-jq" strategy="afterInteractive">
                {`
          if (typeof window !== 'undefined' && window.jQuery) {
            window.$ = window.jQuery;
          }
        `}
            </Script> */}

            {/* 3. Check working */}
            {/* <Script id="check-jq" strategy="afterInteractive">
                {`
          setTimeout(()=>{
            console.log("jQuery Loaded:", typeof window.$);
            if(window.$){
              $(document).ready(function(){
                console.log("jQuery Working inside Next.js!!!");
              });
            }
          },300);
        `}
            </Script> */}
            <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback" strategy="afterInteractive"></Script>

            {/* <Script id="turnstile-script" strategy="afterInteractive">
                {`
          if (sessionStorage.getItem('advertOnce') !== 'true') {

            window.onloadTurnstileCallback = function () {
              turnstile.render('#example-container', {
                sitekey: '0x4AAAAAAAWEebmaMiyf4Ej7',
                callback: function (token) {
                  $('#example-container').remove();
                  $('#example-container').hide();
                  
                  sessionStorage.setItem('advertOnce', 'true');

                },
              });
            };
    } else {
            $('#example-container').remove();
    }
`}
            </Script> */}

            {/* <Script src="/assets/js/popper.min.js" strategy="afterInteractive"></Script> */}
            {/* <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive"></Script> */}
            {/* <Script defer src="/assets/js/aos.js" strategy="afterInteractive"></Script> */}
            {/* <Script defer src="/assets/js/wow.js" strategy="afterInteractive"></Script> */}
            {/* <Script defer src="/assets/js/owl.js" strategy="afterInteractive"></Script>
            <Script defer src="/assets/js/owl.carousel.min.js" strategy="afterInteractive"></Script> */}
            {/* <Script defer src="/assets/js/slick.min.js" strategy="afterInteractive"></Script>
            <Script src="/assets/js/mainscript.js" strategy="afterInteractive"></Script> */}
            {/*<Script id='wf_anal'
                src='https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=c6e4fdd49e7ece532078ecf1f399f64de7ac44b920ea899066415dca11735926gid89a4c4e1cd2b8d798a13869a512e0430f10d4e54011dc2ab6ecb48142704f733gid885e3c1045bd9bdcc91bdf30f82b5696gid14f4ec16431e0686150daa43f3210513&tw=61690b96c1d0471b638f31426f38e68aa67fb7ed6da86f32dc10ad817fe55a0a'
                strategy="afterInteractive">
            </Script>*/}
            {/* <Script src="/assets/js/aos.js" strategy="afterInteractive"
                onLoad={() => {
                    console.log("AOS Loaded");
                    AOS.init();
                }}
            /> */}

            {/* <Script>

                {`
    $(document).on('scroll', function () {
        if ($(window).scrollTop() > 5) {
            $('.gameplushmb').addClass('gameplushmbopen');
        } else {
            $('.gameplushmb').removeClass('gameplushmbopen');
        }
    });
    `}
            </Script> */}

            {/* <Script>
                {`
          
    $('.whatsapp_fixed').click(function () {
        $('.whatsappNumber').toggleClass('whatsappNumber-active');
    });
    $('.whatsappNumber-closebtn, .whatsappfixclose').click(function () {
        $('.whatsappNumber').removeClass('whatsappNumber-active');
    });
`}
            </Script> */}

            {/* <Script id='VisitorTracking'>
                {`var $zoho = $zoho || {};
    $zoho.salesiq = $zoho.salesiq || {
        widgetcode: 'siq94c90e504edeae96d2db0bc300f8d83900a44ff6df5a19ce6e1e1566b0de4f35e4e11a1e1b28e17908146255f9a45b54',
        values: {},
        ready: function () { }
    };
    var d = document;
    s = d.createElement('script');
    s.type = 'text/javascript';
    s.id = 'zsiqscript';
    s.defer = true;
    s.src = 'https://salesiq.zoho.com/widget';
    t = d.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);

    function trackVisitor1742164000151383001() {
        try {
            if ($zoho) {
                var LDTuvidObj = document.forms['WebToLeads1742164000151383001']['LDTuvid'];
                if (LDTuvidObj) {
                    LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();
                }
                var firstnameObj = document.forms['WebToLeads1742164000151383001']['First Name'];
                if (firstnameObj) {
                    name = firstnameObj.value + ' ' + name;
                }
                $zoho.salesiq.visitor.name(name);
                var emailObj = document.forms['WebToLeads1742164000151383001']['Email'];
                if (emailObj) {
                    email = emailObj.value;
                    $zoho.salesiq.visitor.email(email);
                }
            }
        } catch (e) { }
    }`}
            </Script> */}
            {/* <Script id='wf_anal'
                src='https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=e92bdb7c8607187080f1a68124148cff8894eb4b5f5267e8f8fdcfb9a1c07cead2ac8ef1d7910c30b66d19424c62bfc6gid8a7b9da52b4267ccf63d76681a45063661b67ae7bc99bf22e5d5665cacb8e771gidb0c2120402738fef3400854aa0e66e39c04c1c061f9eb3e5ba747e9217f70f0bgid7d8ddebc2a13b12a140cfc6d462dd01c3d1cc1595cbd2a0cf092af149d7106ae&tw=58b5ea92eb4c693ad5b8e6b65bb7d0b0a295c79964939129ccfeab19fd67288e'></Script>

            <Script language="javascript" type="text/javascript">
                {`function getVal(evt) {
        document.getElementById('Mobile').value = document.getElementById('whatsapp-number-field').value;
      
    }`}
            </Script> */}

            {/* <Script>
                {`

    $('.dropdown_chat_option_hover').hover(function () {
        $('.dropdown-toggle-hover', this).trigger('click');
    });
`}
            </Script> */}

            {/* <Script>
                {` $('.hero-form-filed .dropdown-item').click(function () {
        const getText = $(this).html();
        const getInputText = $('.hero_numb_input');

        $('.hero-form-filed').each(function () {
            if ($(this).parent().hasClass('hero-block-filed-inner')) {
                $(this).find('.dropdown-toggle').html(getText);
            } else {
                $('.input_icon_option').html(getText);
            }
        });

        $(this).addClass('active-item').siblings().removeClass('active-item'); // Updated to target the element
        const getText2 = $(this).text().trim();

        if (getText2 === "Telegram") {
            getInputText.attr('placeholder', 'Telegram Account');
            $('.country_code_flied').hide();
            $('.country_code_flied').removeClass('country_code_flied_active');
            $('.hero_numb_input').css("padding-left", "10px");
            $('.hidden_chat_input').val("telegram");
        } else if (getText2 === "Skype") {
            getInputText.attr('placeholder', 'Skype Account');
            $('.country_code_flied').hide();
            $('.country_code_flied').removeClass('country_code_flied_active');
            $('.hero_numb_input').css("padding-left", "10px");
            $('.hidden_chat_input').val("skype");
        } else if (getText2 === "Email") {
            getInputText.attr('placeholder', 'Email ID');
            $('.country_code_flied').hide();
            $('.country_code_flied').removeClass('country_code_flied_active');
            $('.hero_numb_input').css("padding-left", "10px");
            $('.hidden_chat_input').val("email"); // Uncommented
        } else if (getText2 === "Whatsapp") {
            getInputText.attr('placeholder', 'Whatsapp Account');
            $('.country_code_flied').show();
            $('.country_code_flied').addClass('country_code_flied_active');
            $('.hero_numb_input').css("padding-left", "0");
            $('.hidden_chat_input').val("whatsapp");
        } else {
            getInputText.attr('placeholder', 'Phone Number');
            $('.country_code_flied').show();
            $('.country_code_flied').addClass('country_code_flied_active');
            $('.hero_numb_input').css("padding-left", "0");
            $('.hidden_chat_input').val("mobile");
        }
    });

    $('.dropdown-subject .dropdown-toggle').click(function () {
        const getTextDr = $('.dropdown-subject .dropdown-item').text();
        $('.dropdown-subject .dropdown-item').click(function () {
            const getTextDr = $(this).text();
            $('.dropdown-subject .dropdown-toggle').text(getTextDr);
        });
    });



    $('.dropdown-subject .dropdown-toggle').click(function () {
        const getTextDr = $('.dropdown-subject .dropdown-item').text();
        $('.dropdown-subject .dropdown-item').click(function () {
            const getTextDr = $(this).text();
            $('.dropdown-subject .dropdown-toggle').text(getTextDr);
        });


    })`}
            </Script> */}
            {/* <Script>
                {`try {
        $zoho.salesiq.ready = function () {
            $zoho.salesiq.floatbutton.visible("hide");
        }
    } catch (e) {
        console.log(e);
    }`}
            </Script> */}

            {/* <Script>
                {`var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.isDeleting = false;
        this.pause = false;
        this.tick();
    };

    TxtType.prototype.tick = function () {
        if (this.pause) return;

        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;

            if (fullTxt === "Try Demo") {
                //console.log('Full text "Try Demo" reached, starting pause');
                // Add class to all wrap elements
                var wraps = document.querySelectorAll('.wrap');
                wraps.forEach(function (el) {
                    el.classList.add('border-right-before');
                });
                this.pause = true;
                setTimeout(function () {
                    //console.log('Pause delay ended, resuming animation');
                    // Remove class and resume animation
                    wraps.forEach(function (el) {
                        el.classList.remove('border-right-before');
                    });
                    that.isDeleting = true;
                    that.pause = false;
                    that.tick();
                }, 10000); // Pause delay
            } else {
                this.isDeleting = true;
            }
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    function initTypewriter() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
    }

    window.onload = function () {
        initTypewriter();
    };`}
            </Script> */}

            {/* <Script>
                {`const navLinks = document.querySelectorAll('.left_nav > ul > li, .foot_navs li, .left_nav ul.mobile_menu li');

    const currentPath = window.location.href;
    console.log(currentPath, 'currentPath');
    navLinks.forEach(link => {
        const linksFind = link.querySelector('a');
        if (linksFind) {


            // console.log(linksFind.getAttribute('href'), 'link.getAttribute');
            if (linksFind.getAttribute('href') === currentPath) {
                linksFind.classList.add('active');
            } else {
                linksFind.classList.remove('active');
            }
        }
    });`}
            </Script> */}

            {/* <Script id="country-dropdown-script" strategy="afterInteractive">
                {`
          console.log("Script injected...")
          document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".country_code_dropdown").forEach(function (dropdownContainer) {
        console.log(dropdownContainer, 'dropdownContainer');
        
        
        const dropdown = dropdownContainer.querySelector(".dropdown-menu");
        const selectedFlag = dropdownContainer.querySelector(".country_code_flied_active img");
        const selectedCode = dropdownContainer.querySelector(".country_code_flied_active span");

        // Local JSON file path
        fetch("https://www.mobzway.com/assets/data/CountryCodes.json")
            .then(response => response.json())
            .then(countries => {
                let defaultCountryFound = false;
console.log(countries, 'countries');

                dropdown.innerHTML = ''; // Purana data clear karein

                countries.forEach(country => {
                    const dialCode = country.dial_code;
                    const countryFlag = "https://flagcdn.com/w320/" + country.code.toLowerCase() + ".png"

                    const option = document.createElement("a");
                    option.classList.add("dropdown-item");
                    option.href = "javascript:void(0);";

                    const flagImg = document.createElement("img");
                    flagImg.src = countryFlag;
                    flagImg.classList.add("country-flag");

                    const codeText = document.createElement("span");
                    codeText.textContent = dialCode;
                    codeText.setAttribute('data-code', dialCode);

                    option.appendChild(flagImg);
                    option.appendChild(codeText);

                    // Default Country Selection (India)
                    if (dialCode === '+91' && !defaultCountryFound) {
                        selectedFlag.src = countryFlag;
                        selectedCode.textContent = dialCode;
                        selectedCode.setAttribute('data-code', dialCode);
                        defaultCountryFound = true;
                    }

                    // Click Event to Change Selection
                    option.addEventListener("click", function () {
                        selectedFlag.src = countryFlag;
                        selectedCode.textContent = dialCode;
                        selectedCode.setAttribute('data-code', dialCode);
                        dropdown.classList.remove('show');
                    });

                    dropdown.appendChild(option);
                });

                
                if (!defaultCountryFound) {
                    selectedFlag.src = 'https://flagcdn.com/w320/in.png';
                    selectedCode.textContent = '+91';
                    selectedCode.setAttribute('data-code', dialCode);
                }
            })
            .catch(error => console.error("Error loading country data:", error));
    });
});
        `}
            </Script> */}



            {/* <Script id="toggleReadMore-script" strategy="afterInteractive">
                {`function toggleReadMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMoreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}`}
            </Script> */}

            <Script id="zoho-init" strategy="afterInteractive">
                {`
            window.$zoho = window.$zoho || {};
            $zoho.salesiq = $zoho.salesiq || { ready:function(){} };
          `}
            </Script>

            {/* Zoho SalesIQ Widget Script */}
            <Script
                id="zoho-widget"
                src="https://salesiq.zohopublic.com/widget?wc=siq94c90e504edeae96d2db0bc300f8d83900a44ff6df5a19ce6e1e1566b0de4f35e4e11a1e1b28e17908146255f9a45b54"
                strategy="afterInteractive"
            />

        </>
    )
}
