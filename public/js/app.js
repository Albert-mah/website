/* Template Name: Landrick - Saas & Software Landing Page Template
   Author: Shreethemes
   E-mail: support@shreethemes.in
   Created: August 2019
   Version: 4.7.0
   File Description: Main JS file of the template

   
*/


/*********************************/
/*         INDEX                 */
/*================================
 *     01.  Loader               *
 *     02.  Toggle Menus         *
 *     03.  Active Menu          *
 *     04.  Clickable Menu       *
 *     05.  Back to top          *
 *     06.  Feather icon         *
 *     07.  DD Menu              *
 *     08.  Active Sidebar Menu  *
 *     09.  Contact Js           *
 ================================*/


 window.addEventListener('load',   fn , false )

 //  window.onload = function loader() {
 function fn() {
     // Preloader
     if(document.getElementById('preloader')){
         setTimeout(() => {
             document.getElementById('preloader').style.visibility = 'hidden';
             document.getElementById('preloader').style.opacity = '0';
         }, 350);
     }
     // Menus
     activateMenu();
 }
 
 //Menu
 // Toggle menu
 function toggleMenu() {
     document.getElementById('isToggle').classList.toggle('open');
     var isOpen = document.getElementById('navigation')
     if (isOpen.style.display === "block") {
         isOpen.style.display = "none";
     } else {
         isOpen.style.display = "block";
     }
 };
 
 //Menu Active
 function getClosest(elem, selector) {
 
     // Element.matches() polyfill
     if (!Element.prototype.matches) {
         Element.prototype.matches =
             Element.prototype.matchesSelector ||
             Element.prototype.mozMatchesSelector ||
             Element.prototype.msMatchesSelector ||
             Element.prototype.oMatchesSelector ||
             Element.prototype.webkitMatchesSelector ||
             function (s) {
                 var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                     i = matches.length;
                 while (--i >= 0 && matches.item(i) !== this) { }
                 return i > -1;
             };
     }
 
     // Get the closest matching element
     for (; elem && elem !== document; elem = elem.parentNode) {
         if (elem.matches(selector)) return elem;
     }
     return null;
 
 };
 
 function activateMenu() {
     var menuItems = document.getElementsByClassName("sub-menu-item");
     if (menuItems) {
 
         var matchingMenuItem = null;
         for (var idx = 0; idx < menuItems.length; idx++) {
             if (menuItems[idx].href === window.location.href) {
                 matchingMenuItem = menuItems[idx];
             }
         }
 
         if (matchingMenuItem) {
             matchingMenuItem.classList.add('active');
          
          
             var immediateParent = getClosest(matchingMenuItem, 'li');
       
             if (immediateParent) {
                 immediateParent.classList.add('active');
             }
             
             var parent = getClosest(immediateParent, '.child-menu-item');
             if(parent){
                 parent.classList.add('active');
             }
 
             var parent = getClosest(parent || immediateParent , '.parent-menu-item');
         
             if (parent) {
                 parent.classList.add('active');
 
                 var parentMenuitem = parent.querySelector('.menu-item');
                 if (parentMenuitem) {
                     parentMenuitem.classList.add('active');
                 }
 
                 var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                 if (parentOfParent) {
                     parentOfParent.classList.add('active');
                 }
             } else {
                 var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                 if (parentOfParent) {
                     parentOfParent.classList.add('active');
                 }
             }
         }
     }
 }
 
 // Clickable Menu
 if(document.getElementById("navigation")){
     var elements = document.getElementById("navigation").getElementsByTagName("a");
     for(var i = 0, len = elements.length; i < len; i++) {
         elements[i].onclick = function (elem) {
             if(elem.target.getAttribute("href") === "javascript:void(0)") {
                 var submenu = elem.target.nextElementSibling.nextElementSibling;
                 submenu.classList.toggle('open');
             }
         }
     }
 }
 
 // Menu sticky
 function windowScroll() {
     const navbar = document.getElementById("topnav");
     if(navbar!=null){
         if (
             document.body.scrollTop >= 50 ||
             document.documentElement.scrollTop >= 50
         ) {
             navbar.classList.add("nav-sticky");
         } else {
             navbar.classList.remove("nav-sticky");
         }
     }
 }
 
 window.addEventListener('scroll', (ev) => {
     ev.preventDefault();
     windowScroll();
 })
 
 // back-to-top
 var mybutton = document.getElementById("back-to-top");
 window.onscroll = function () {
     scrollFunction();
 };
 
 function scrollFunction() {
     if(mybutton!=null){
         if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
             mybutton.style.display = "block";
         } else {
             mybutton.style.display = "none";
         }
     }
 }
 
 function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 }
 
 //ACtive Sidebar
 (function () {
     var current = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);;
     if (current === "") return;
     var menuItems = document.querySelectorAll('.sidebar-nav a');
     for (var i = 0, len = menuItems.length; i < len; i++) {
         if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
             menuItems[i].parentElement.className += " active";
         }
     }
 })();
 
 //Feather icon
 feather.replace();
 
 // dd-menu
 var ddmenu = document.getElementsByClassName("dd-menu");
 for(var i = 0, len = ddmenu.length; i < len; i++) {
     ddmenu[i].onclick = function (elem) {
         elem.stopPropagation();
     }
 }
 
 //Tooltip
 var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
 var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
   return new bootstrap.Tooltip(tooltipTriggerEl)
 });
 
 //Popovers
 var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
 var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
   return new bootstrap.Popover(popoverTriggerEl)
 })
 
 //small menu
 try {
     var spy = new Gumshoe('#navmenu-nav a');
 }catch(err) {
     
 }
 
 
 //Contact js
 try {
     function validateForm() {
         var name = document.forms["myForm"]["name"].value;
         var email = document.forms["myForm"]["email"].value;
         var subject = document.forms["myForm"]["subject"].value;
         var comments = document.forms["myForm"]["comments"].value;
         document.getElementById("error-msg").style.opacity = 0;
         document.getElementById('error-msg').innerHTML = "";
         if (name == "" || name == null) {
             document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Name*</div>";
             fadeIn();
             return false;
         }
         if (email == "" || email == null) {
             document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Email*</div>";
             fadeIn();
             return false;
         }
         if (subject == "" || subject == null) {
             document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Subject*</div>";
             fadeIn();
             return false;
         }
         if (comments == "" || comments == null) {
             document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Comments*</div>";
             fadeIn();
             return false;
         }
         var xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function () {
             if (this.readyState == 4 && this.status == 200) {
                 document.getElementById("simple-msg").innerHTML = this.responseText;
                 document.forms["myForm"]["name"].value = "";
                 document.forms["myForm"]["email"].value = "";
                 document.forms["myForm"]["subject"].value = "";
                 document.forms["myForm"]["comments"].value = "";
             }
         };
         xhttp.open("POST", "php/contact.php", true);
         xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
         xhttp.send("name=" + name + "&email=" + email + "&subject=" + subject + "&comments=" + comments);
         return false;
       }
     
       function fadeIn() {
         var fade = document.getElementById("error-msg");
         var opacity = 0;
         var intervalID = setInterval(function () {
             if (opacity < 1) {
                 opacity = opacity + 0.5
                 fade.style.opacity = opacity;
             } else {
                 clearInterval(intervalID);
             }
         }, 200);
     }
 } catch (error) {
     
 }
 
 // Demo
 $(document).ready(function() { 
     $('.steps-wrap').addClass('loaded');
     // Load the first image and preload the second on page load
     var firstStep = $('.demo_step_start');
     if (firstStep.length) {
         loadImage(firstStep.find('img'));
         var secondStep = firstStep.prev(); // Assuming steps are in reverse order in HTML
         if (secondStep.length) {
             preloadImage(secondStep.find('img'));
         }
     }
 });
 
 // Function to load an image
 function loadImage(imgElement) {
     var dataSrc = imgElement.attr('data-src');
     if (dataSrc && imgElement.attr('src') === '') {
         imgElement.attr('src', dataSrc);
     }
 }
 
 // Function to preload an image
 function preloadImage(imgElement) {
     var dataSrc = imgElement.attr('data-src');
     if (dataSrc) {
         var img = new Image();
         img.src = dataSrc;
     }
 }
 
 $('.demo_step_start').hover(function(){
     $(this).find('.button').attr('data-balloon-visible','');
 })
 
 $('.button').hover(function(){
     $(this).removeAttr("data-balloon-visible");
 })
 
 $('.button').click(function(){
     var curStep = $(this).parent();
     var nextStep = $(this).parent().prev();
     var stepsGroup = nextStep.find('.steps-groups');
 
     // Load current image
     loadImage(nextStep.find('img'));
 
     // Preload next image if it exists
     var nextNextStep = nextStep.prev();
     if (nextNextStep.length) {
         preloadImage(nextNextStep.find('img'));
     }
 
     if($(this).hasClass('crm-button1')) {
         $('.steps-title').removeClass('active');
         $('#crm-guide1').addClass('active');
     } else if($(this).hasClass('crm-button6')) {
         $('.steps-title').removeClass('active');
         $('#crm-guide2').addClass('active');
     } else if($(this).hasClass('crm-button10')) {
         $('.steps-title').removeClass('active');
         $('#crm-guide3').addClass('active');
     } else if($(this).hasClass('crm-button32')) {
         $('.steps-title').removeClass('active');
     }
 
     nextStep.show();
 
     curStep.fadeOut('slow', function(){
         setTimeout(() => { 
             nextStep.find('.button').attr('data-balloon-visible','');
         }, 100);
     });
 })
 
 $('.steps-groups').click(function(){
     $(this).fadeOut();
 })
 
 $('.steps-title').click(function(){
     $('.demo_step').fadeOut();
     $('.steps-title').removeClass('active');
     $(this).addClass('active');
     $('.steps-groups').show(0);
 
     var targetStep;
     if($(this).hasClass('crm-guide1')) {
         targetStep = $('#crm-button2').parent();
     } else if($(this).hasClass('crm-guide2')) {
         targetStep = $('#crm-button7').parent();
     } else if($(this).hasClass('crm-guide3')) {
         targetStep = $('#crm-button11').parent();
     }
 
     if (targetStep && targetStep.length) {
         loadImage(targetStep.find('img'));
         targetStep.fadeIn();
         // Preload the next image for the clicked guide
         var nextTargetStep = targetStep.prev(); 
         if(nextTargetStep.length){
             preloadImage(nextTargetStep.find('img'));
         }
     }
 })