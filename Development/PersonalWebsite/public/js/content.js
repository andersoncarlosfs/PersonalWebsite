/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    $(".menu li:not(.submenu-themes) a:not(.passive)").click(function (event) {

        event.preventDefault();

        $(".menu li a").removeClass("active");

        $(this).addClass("active");

        $(".content").hide();

        $($(this).attr("href")).show();

    });

    $(".submenu-themes a:not(.passive)").click(function (event) {

        event.preventDefault();

        $(".submenu-themes a").removeClass("active");

        $(this).addClass("active");

        $("#theme").attr("href", $(this).attr("href"));

    });

    $(".dropdown-content a").hover(
            function () {
                $(this).closest("a.dropdown-button").addClass("active");
            },
            function () {
                $(this).closest("a.dropdown-button").removeClass("hover");
            }
    );

});