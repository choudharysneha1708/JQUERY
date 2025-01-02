$(document).ready(function () {
  console.log("I'm in new file now");
  // console.log($);
  // console.log("Sneha!");

  // jquery sytanx look like this
  // $('selector').action()

  // $('#id').hide();
  // $('.class').hide();
  //   $("p").click();  // it will click on p
  //   $("p").click(function () {   // when any one click on p then this function is executed
  //     console.log("You Clicked on P", this);
  //     // $(this).hide();
  //   });
  //    $(".odd").click();
  //    $("#second").click();

  //    $('p').dblclick(function(){
  //         console.log("You Double click on P");
  //    });
  //    $('p').mouseenter(function(){
  //         console.log("You entered :  ", this);
  //    });

  //    $('p').mouseleave(function(){
  //         console.log("your coursor is leaved Form", this);
  //    });

  //    $('p').mousedown(function(){
  //         console.log("You mousedown on ", this);
  //    });

  //    $('p').mouseup(function(){
  //         console.log("You mouseup from", this);
  //    })
  /**
   *  There are three types of selector in jquery
   * 1. element selector
   *      $('p').click()
   * 2. class selector
   *       $('.className').hide()
   *
   * 3. id selector
   *      $('#idName').hide()
   * other selectors
   * $('*').click()  -> click on all elements
   * $(this).hide()
   * $('p.odd').click() -> it will select all class whose name is odd
   * $('p:first').click()-> it will select first item of p tag
   *
   *
   * Events in JQuery:
   * Mouse events = click, dblclick, mouseenter, mouseleave, mouseup
   *    mousedown is similar event as click it invoked when we click on something
   *    mouseup event invoked when , jb click krte hue upper jao and jis point pr click krna chor do uss point pr mouseup event work krta h
   * keyboardEvent = keypress, keydown, KeyUp
   * form events = submit, change, focus, blur
   * document/window events = load, resize, scroll, unload
   *  on : used for attaching multiple event from single selector
   * */

  //demoing on method
  //   $('p').on({
  //         click: function(){
  //           console.log("Thanks for clicking", this);
  //         },
  //         mouseleave: function(){
  //             console.log("Left mouse from", this);
  //         },
  //     })
  //     $('#myIntro').hide(1000, function(){
  //         console.log("content is hided!")
  //     })
  //     $("#myIntro").show(1000, function () {
  //         console.log("content is showen!");
  //     });
  //     $('#button').click(function(){
  //         $('#myIntro').toggle(1000, function(){
  //             console.log("Intro is toggled!")
  //         });
  //     })

  //fadeIn(), fadeOut(), fadeToggle(), fadeTo()

  // $('#myIntro').slideUp(2000, function(){
  //     console.log("intro is toggled!");
  // });
  // $('#myIntro').slideUp(2000, function(){
  //     console.log("Intro is slide up");
  // })

  // $('#myIntro').slideDown(2000, function(){
  //     console.log("Intro is slide down");
  // })

  // $('#myIntro').fadeOut(2000, function(){
  //     console.log("Intro is fade Out");
  // })

  // $("#myIntro").fadeIn(2000, function () {
  //   console.log("Intro is fade In");
  // });

  // $('#myIntro').fadeTo(2000, function(){
  //     console.log("Intro is fade To");
  // })

  /**
   * difference btw slide and fade
   * in slide all the things is fade in line by line fashion
   * in fade all the things fade at once
   * both are just two way of gyab hona
   * speed and callback are optional
   */

  // animate method in Jquery here animate can be (slow, fast)
  // $('#myIntro').animate({
  //     opacity: 0.3,
  //     height : '150px',
  //     weidth: '150px'
  // }, 2000)
  $("#myIntro").animate({ opacity: 0.3 }, 4000);
  $("#myIntro").animate({ opacity: 0.9 }, 2000);
  $("#myIntro").animate({ width: "350px" }, 1000);
  $("#myIntro").text(); // it will return all the text inside myIntro
  $("#myIntro").text("Hello!"); // it will set all the text inside myIntro
  // $('body').html(); // it will return all the html inside body tag
  // $('body').html('Hello Sneha'); // it will set html inside body tag with given

  //for changing value of form field we need to change by the help of .val field
  //
  // .empty() -> yeah kisi field ko khali kr deta h
  // $('#myIntro').empty();

  // .remove() -> this method delete the element  from DOM
  // $('#myIntro').remove();

  // .addClass() -> this add a class in given selector
  $("#myIntro").addClass("class1");
  // .removeClass() -> this remove class from selector
  $("#myIntro").removeClass("class1");

  $("#myIntro").toggleClass("Class2");

  // to set css

  $("#myIntro").css("background-color", "black");
  $("#myIntro").css("background-color");

  //AJAX using JQUERY
  // $.get("https://code.jquery.com/jquery-3.7.1.js", function(data, status){
  //     alert(data);
  // });

  // $.get("https://code.jquery.com/jquery-3.7.1.js", function (data, status) {
  //   alert(status);
  // });

  $.post(
    "https://code.jquery.com/jquery-3.7.1.js",
    { name: "Sneha", age: 22 },
    function (data, status) {
      alert(status);
    }
  );  // this post will give error because post does not take this url
});
