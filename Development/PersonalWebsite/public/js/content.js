/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    
    //
    $(".header .overlay").height("0");
    
    //Mobile
    //
    $(".header .content .open-button").click(function (event) {
        
        event.preventDefault();
        
        $(".header .overlay").height("100%");
        
    });
    
    //
    $(".header .menu .close-button").click(function (event) {
        
        event.preventDefault();

        $(".header .overlay").height("0");
        
    });
    
    //
    $(".header .overlay").mouseleave(function () {
        $(".header .overlay").height("0");
    });

    //
    $(".menu li:not(.submenu-themes) a:not(.passive)").click(function (event) {

        event.preventDefault();

        $(".menu li:not(.submenu-themes) a").removeClass("active");

        $(this).addClass("active");

        $(".body .content").hide();

        $($(this).attr("href")).show();
        
        $(".header .menu .close-button").click();

    });

    //
    $(".submenu-themes a:not(.passive)").click(function (event) {

        event.preventDefault();

        $(".submenu-themes a").removeClass("active");

        $(this).addClass("active");

        $("#theme").attr("href", $(this).attr("href"));
                
        $(".header .menu .close-button").click();

    });
    
    //
    $(".dropdown-content a").hover(
            function () {
                $(this).closest("li.dropdown").find(".dropdown-button").first().addClass("hover");
            },
            function () {
                $(this).closest("li.dropdown").find(".dropdown-button").first().removeClass("hover");
            }
    );

});