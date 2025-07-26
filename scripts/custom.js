function PrintElem(o) {
    Popup($(o).html())
}

function Popup(o) {
    var t = window.open();
    return t.document.write("<html><head><title></title>"), t.document.write('<link rel="stylesheet" href="https://www.a-solutionplumbing.com/css/mabank-css_cashe.css" type="text/css" />'), t.document.write('<style>.discount-amount,.expires-time{text-transform:uppercase;color:#000000 !important;;font-family:Montserrat,sans-serif !important;}.coupon-box{background-color:#ffffff;display:block;width:600px;margin:60px auto;position:relative;padding:30px;text-align:center;text-decoration:none !important;opacity:1;transition:all .4s ease}.coupon-box:hover{text-decoration:none;}.coupon-box:before{content:" ";position:absolute;width:calc(100% - 1em);height:calc(100% - 1em);top:.5em;left:.5em;border-width:.25em;border-style:dashed;border-color:#000000 !important;}.expires-time{font-size:16px;margin-bottom:0}.discount-amount{display:inline-block;font-size:68px !important;font-weight:700;position:relative;margin-bottom:0px!important;line-height:.8}.discount-amount:before{content:"$";font-size:.55em!important;top:0;font-weight:400;width:25px;left:-28px}.coupon-box.type-2 .discount-amount:before{content:"%";font-size:.65em!important;top:0;left:unset;right:-40px;width:40px;font-weight:600}.discount-amount:after{content:"OFF";font-size:.45em!important;bottom:0;font-weight:600;width:67px;right:-67px}.discount-amount:after,.discount-amount:before{display:block;position:absolute}.coupon-box.type-2 .discount-amount{padding-right:0;padding-left:0;margin-left:-40px;}.coupon-box.type-2 .discount-amount:after{font-size:.35em!important;width:52px;right:-52px}.discount-desc{font-size:1.5556em;line-height:1.2em;font-weight:700;color:#000000 !important;;font-family:Montserrat,sans-serif !important;}.coupons-extra-desc{font-size:16px;font-weight:400;color:#000000 !important;;font-family:Montserrat,sans-serif !important;margin-bottom:0;margin-top:15px}</style>'), t.document.write("</head><body >"), t.document.write(o), t.document.write("</body></html>"), t.document.close(), t.focus(), setTimeout(function () {
        t.print()
    }, 1e3), !0
}! function (t) {
    t("input#phone").mask("(999) 999-9999"), t(window).load(function () {
        767 < document.documentElement.clientWidth ? t("#main-navigation nav li.dropdown").hover(function () {
            t(this).find(".dropdown-menu").first().stop(!0, !0).slideDown("fast"), t(this).addClass("open")
        }, function () {
            t(this).find(".dropdown-menu").first().stop(!0, !0).slideUp("fast"), t(this).removeClass("open")
        }) : (t("#main-navigation .dropdown-toggle").after(t("<i class='fa fa-caret-down'></i>")), t("li.dropdown i").click(function (o) {
            t(this).parents("nav li.dropdown").toggleClass("open")
        }))
    })
}(jQuery), $(document).ready(function () {
    "use strict";
    $("#contact").validate({
        submitHandler: function () {
            var e = $("#contact");
            return $("<div />").addClass("formOverlay").appendTo(e), $.ajax({
                url: "/mail.php",
                type: "POST",
                data: e.serialize(),
                success: function (o) {
                    var t = o.split("::");
                    e.find("div.formOverlay").remove(), e.prev(".expMessage").html(t[1]), "Success" === t[0] && (e.remove(), e.prev(".expMessage").html(""))
                }
            }), !1
        }
    }), $("#sendNotification").validate({
        submitHandler: function () {
            var e = $("#sendNotification");
            return $("<div />").addClass("formOverlay").appendTo(e), $.ajax({
                url: "/smail.php",
                type: "POST",
                data: e.serialize(),
                success: function (o) {
                    var t = o.split("::");
                    e.find("div.formOverlay").remove(), e.prev(".expMessage").html(t[1])
                }
            }), !1
        }
    }), $("#search").validate({
        submitHandler: function () {
            var e = $("#search");
            return $("<div />").addClass("formOverlay").appendTo(e), $.ajax({
                url: "/mail.php",
                type: "POST",
                data: e.serialize(),
                success: function (o) {
                    var t = o.split("::");
                    e.find("div.formOverlay").remove(), "Success" === t[0] && (window.location.href = "/thankyou/")
                }
            }), !1
        }
    }), $(".quick-quote").validate({
        submitHandler: function () {
            var e = $(".quick-quote");
            return $("<div />").addClass("formOverlay").appendTo(e), $.ajax({
                url: "/mail.php",
                type: "POST",
                data: e.serialize(),
                success: function (o) {
                    var t = o.split("::");
                    e.find("div.formOverlay").remove(), "Success" === t[0] && (window.location.href = "/thankyou/")
                }
            }), !1
        }
    }), $(".Banner img").on("click", function () {
        window.location.assign("print.php")
    }), $(".printBlock button").on("click", function () {
        window.print()
    }), $(window).scroll(function () {
        //$("#service").height(), console.log($(window).scrollTop()), $(window).scrollTop(), $(window).scrollTop()
        $("#service").height(),  $(window).scrollTop(), $(window).scrollTop()
    }), $(".caret-left").on("click", function () {
        $(".reviews_container").css("right", "-3000px"), $(".reviews_container").css("transition", "all 2s ease 0s")
    }), $(".floating_icon_container").on("click", function () {
        $(".floating_icon_container").addClass("hide_op"), $(".message_container ").addClass("show_op")
    }), $(".btn-close").on("click", function () {
        $(".message_container ").removeClass("show_op"), $(".floating_icon_container").addClass("show_op"), $(".floating_icon_container").removeClass("hide_op")
    }), $("#chat-field").on("keyup", function () {
        0 < $("#chat-field").val().length ? $(".send-button").removeAttr("disabled") : $(".send-button").attr("disabled", !0)
    }), $(".send-button").on("click", function () {
        var o = $("#chat-field").val();
        $("#form_message").html(o), $(this).parents(".message_container").removeClass("show_op"), $(this).parents(".floating_icon_container").removeClass("show_op"), $(".form_container").addClass("show_op"), $(".expMessage").hide()
    }), $(".fa-close_form").on("click", function () {
        $(".form_container").removeClass("show_op"), $(".floating_icon_container").addClass("show_op"), $(".floating_icon_container").removeClass("hide_op")
    }), $(".review_widget_button").on("click", function () {
        $(".reviews_container").css("right", "0"), $(".reviews_container").css("transition", "all 1s ease 0s")
    }), $(".close-note").on("click", function () {
        $(".notification_bar").css("display", "none")
    }), $("input#form_phone").mask("(999) 999-9999"), $(".sticky_chat").validate({
        rules: {
            "formInput[Name]": {
                pattern: /^[a-zA-Z\s]+$/
            },
            "formInput[Phone]": {
                phoneUS: !0
            },
            "formInput[Message]": {
                pattern: /^[a-z0-9\-\s]+$/i
            }
        },
        submitHandler: function () {
            var e = $(".sticky_chat");
            return $("<div />").addClass("formOverlay").appendTo(e), $.ajax({
                url: "/cmail.php",
                type: "POST",
                data: e.serialize(),
                success: function (o) {
                    var t = o.split("::");
                    e.find("div.formOverlay").remove(), e.prev(".expMessage").html(t[1]), "Success" == t[0] && ($("#form_email,#form_name,#form_phone,#form_message").val(""), $("#form_message").html(""), $(".expMessage").show(), e.prev(".expMessage").html(t[1]))
                }
            }), !1
        }
        
        
        
    })
    
    jQuery(document).ready(function($) {
        		"use strict";
        		//  TESTIMONIALS CAROUSEL HOOK
		        $('#customers-testimonials').owlCarousel({
		            loop: true,
		            center: true,
		            items: 3,
		            margin: 0,
		            autoplay: true,
		            dots:true,
		            autoplayTimeout: 8500,
		            smartSpeed: 450,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 2
		              },
		              1170: {
		                items: 3
		              }
		            }
		        });
        	});
    
}), jQuery;


        	
$(".phoneHead a").removeAttr("href");function ValidBotBoot(t){return $("#"+t).find(".BotBootInput").val()==c?($("form#"+t+" .BotRecaptcha").html("<span><p>validated successfully</p></span>"),$("form#"+t).find(".cp").val("captcha"),!0):($("form#"+t+" .BotRecaptcha").html("<span><p>Security Code is Wrong</p></span>"),!1)}$().ready(function(){$=jQuery,$(".form").length>0&&$("#phone").inputmask("999-999-9999"),$(".form").validate(),$(".sidebarform").length>0&&$(".sidebarform").validate({submitHandler:function(t){if(!ValidBotBoot("sidebarcontactForm"))return!1;t.submit()}}),$(".htmlform").length>0&&$(".htmlform").validate({submitHandler:function(t){if(!ValidBotBoot("htmlcontactForm"))return!1;t.submit()}}),$("img[data-link='1']").each(function(t,a){0==$(a).parents("a").length&&$(a).wrap("<a href='"+$(a).attr("src")+"' title='"+$(a).attr("alt")+"' class='imgPOP'  />")}),$("body").find("a.imgPOP").on("click",function(t){t.preventDefault(),$.fn.prettyPhoto(),$.prettyPhoto.open($(this).attr("href"),$(this).attr("title"),"")})});