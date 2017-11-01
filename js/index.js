/**
 * Created by Administrator on 2017/9/30.
 */
'use strict';
$(function () {
    /*swiper*/
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 5000
    });
    /*fullpage*/
    $('#dookbook').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        scrollingSpeed: 1000,
        keyboardScrolling: false,
        menu: '#menu',
        onLeave: function (index, nextIndex, direction) {
               // console.log(nextIndex + "=----" + direction)
            $('#menu li a').parent('li').siblings().find('ul').hide();
            $('#menu li a').eq(nextIndex-1).next('ul').show();
            if (nextIndex > 1) {
                if (nextIndex == 2 && direction == 'down') {
                    setTimeout(function () {
                        $("#menu").show();
                    }, 100);
                } else {
                    $("#menu").show();
                }
            } else {
                $("#menu").hide();
            }
        }
    });
    /*右边栏*/
    $('#menu li ul li').on('click', function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        var ind = $(this).index();
        $('.book').find('.phy-waiguo').eq(ind).addClass('active').siblings().removeClass('active')
    });
    $('#menu li ul').css('display', 'none');
    $('#menu li a').on('click', function () {
        $(this).next('ul').show();
        $(this).parent('li').siblings().find('ul').hide();
    });
    $('#menu li ul li').on('click', function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    /*图书详情*/
    $('.phy-waiguo img').on('click', function () {
        $.fn.fullpage.setAllowScrolling(false);
        $('.phy-con').show();
    });
    $('.show-title').on('click', function () {
        $.fn.fullpage.setAllowScrolling(true);
        $('.phy-con').hide();
    });
    /*IP详情*/
    $('.ip-aj').on('click', function () {
        $.fn.fullpage.setAllowScrolling(false);
        $('.super-show').show();
    });
    $('.sups-title').on('click', function () {
        $.fn.fullpage.setAllowScrolling(true);
        $('.super-show').hide()
    });
    /*作家详情*/
    $('.author ul li img').on('click', function () {
        $.fn.fullpage.setAllowScrolling(false);
        $('.author-show').show();
    });
    $('.author-title').on('click', function () {
        $.fn.fullpage.setAllowScrolling(true);
        $('.author-show').hide();
    });
    /*招聘详情*/
    $('.adds-title ul li').on('click', function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        var inds = $(this).index();
        $('.adds-bottom').eq(inds).addClass('active').siblings().removeClass('active')
    });
});