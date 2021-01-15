import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    $(document).ready(function() {
   
     $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
      var $el = $(this);
      var $parent = $(this).offsetParent(".dropdown-menu");
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass('show');
      
      $(this).parent("li").toggleClass('show');

      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
        $('.dropdown-menu .show').removeClass("show");
      });
      
      if (!$parent.parent().hasClass('navbar-nav')) {
        $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
      }

      return false;
    });
  
/** 
      $('.notification-button').on('click', function(e) {
        e.preventDefault();
        $('.notification-card').toggleClass('show');
        $('.notification-card').fadeToggle();
      })
   
      $(document).on('click', function(event){
        var clickovr = $(event.target);
        var _open =$('.notification-card').hasClass('show');
        if(_open && !clickovr.is('.notification-button')) {
          $('.notification-button').trigger('click');
        }
      });
  
      $('.selectpicker').selectpicker({
        size: 10
      });
  */
       /*-------------------------------------
      Custom Nav
      -------------------------------------*/

       
      $('.notification-button').on('click', function(e) {
        e.preventDefault();
        $('.notification-card').toggleClass('show');
        $('.notification-card').fadeToggle();
      });
   
      $(document).on('click', function(event){
        var clickovr = $(event.target);
        var _open =$('.notification-card').hasClass('show');
        if(_open && !clickovr.is('.notification-button')) {
          $('.notification-button').trigger('click');
        }
      });
  
      $('.account-button').on('click', function(e) {
        e.preventDefault();
        $('.account-card').toggleClass('show');
        $('.account-card').fadeToggle();
      });
  
      $(document).on('click', function(event){
        var clickovrAcc = $(event.target);
        var _openAcc =$('.account-card').hasClass('show');
        if(_openAcc && !clickovrAcc.is('.account-button')) {
          $('.account-button').trigger('click');
        }
      });
  
      function topToggler() {
        if ($(window).width() < 992) {
  
          $('.header-top .top-nav').css({
            'display': 'none'
          })
  
          $('.header-top-toggler-button').on('click', function() {
            $('.header-top .top-nav').toggleClass('show');
            $('.header-top .top-nav').slideToggle();
          })
  
          $(document).on('click', function(event){
            var clickovrNot = $(event.target);
            var _openNot =$('.header-top .top-nav').hasClass('show');
            if(_openNot && !clickovrNot.is('.header-top-toggler-button, .top-nav, .top-nav *')) {
              $('.header-top-toggler-button').trigger('click');
            }
          });
  
        } else {
  
          $('.header-top .top-nav').css({
            'display': 'flex'
          });
  
        }
      }
  
      topToggler();
  
  
      $('.back-to-top a').on('click', function() {
        $("html, body").animate({
          scrollTop: 0
        }, 600);
        return false;
      });
      });
      
 

  }

}
