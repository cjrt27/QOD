(function($) {
    'use strict';

/**
 * AJAX-based random post fetching
 */

    $(function() {
    // Place code for random fetching in here (FETCHING DATA)
        $('#new-quote-button').on('click',function(event){
            event.preventDefault();
    $.ajax({
        method: 'GET',
        url: api_vars.rest_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
    }).done(function(data) {
// got first and only post array, hint - use .shift() method
console.log(data);
// update the quote content and name of person

//if quotesource,update/display

// update the URL (hint:history api)
    });
    });
    });

    
    
 // Ajax based front end post submissions code goes here (POST DATA)

    $(function() {
       // watching a submit event

       // set some values according to the inputs

       //make ajax call below
       $.ajax({
           method:'post',
           url: '',
           data:''
           //check notes, under new ajax way
       }).done(function () {
           // clear the input in the form
           //make the form disappear
           //show a success message
       }).fail(function(){


       });
    });


})(jQuery)