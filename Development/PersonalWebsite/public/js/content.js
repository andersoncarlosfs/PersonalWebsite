/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    
    $(".menu li a:not(.passive)").click(function(){
        
        $(".menu li a").removeClass("active");
        
        $(this).addClass("active");
        
        $(".content").hide();                              
        
        $($(this).attr("href")).show();
        
    });
    
});