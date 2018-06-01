(function($) {
    'use strict';

/**
 * AJAX-based random post fetching
 */

    $(function() {
    // Place code for random fetching in here (FETCHING DATA)
        $('#new-quote-button').on('click',function(event){
            event.preventDefault();
            var prevPage= window.location.href;
    $.ajax({
        method: 'GET',
        url: api_vars.rest_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
    }).done(function(data) {
// got first and only post array, hint - use .shift() method
console.log(data);
// update the quote content and name of person

var newContent=data[0].content.rendered;
var newTitle='- ' + data[0].title.rendered;
var newSource ='<span class="newSourceComma">' + ' , '+'</span>' + data[0]._qod_quote_source
var newSourceURL =data[0]._qod_quote_source_url;

$('.entry-content p').empty();
$('.entry-content p').append(newContent);
$('.entry-title').empty();
$('.entry-title').append(newTitle);

if(data[0]._qod_quote_source && data[0]._qod_quote_source_url) {
    $('.source').empty();
    $('.source').append('<a href="' + newSourceURL +'">'+ newSource + '</a>');

}
else if(data[0]._qod_quote_source ) {
    $('.source').empty();
    $('.source').append(newSource);
}

else {$('.source').empty();}

var url=api_vars.home_url +'/' + data[0].slug;
history.pushState(null,null,url)


$(window).on('popstate', function() {
    window.location.replace(prevPage)    


});




  

  // wrap previous state (page) in a variable and when popstate gets triggerd, use it to implemenet the variable rather thant the default
  

// update the URL (hint:history api)
    });
    });
    });

    
    
 // Ajax based front end post submissions code goes here (POST DATA)
 $(function() {
 $('.submit-quote').on('click', function (event) {
    event.preventDefault();
      var quoteAuthor =  $('#quote-author').val();
      var quoteContent =  $('#quote-content').val();
      var quoteSource =  $('#quote-source').val();
      var quoteSourceUrl =  $('#quote-source-url').val();

      // watching a submit event

       // set some values according to the inputs

       //make ajax call below
       $.ajax({
           method:'post',
           url: api_vars.rest_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',
           data:{
               title: quoteAuthor,
               content: quoteContent,
                _qod_quote_source : quoteSource,
                _qod_quote_source_url : quoteSourceUrl,
                status : 'publish',
                comment_status: 'open'
                
        },
        beforeSend: function (nonceit) {
            nonceit.setRequestHeader('X-WP-Nonce', api_vars.nonce); 
          }
       }).done(function () {
        $('#quote-author').empty();
        $('#quote-content').empty();
        $('#quote-source').empty();
        $('#quote-source-url').empty();
        $('#quote-submission-form').hide();
        $('.submit-success-message').append(api_vars.success).show();

           // clear the input in the form
           //make the form disappear
           //show a success message
       }).fail(function(){

        $('.submit-success-message').append( api_vars.failure).show();

       });
    });
});

})(jQuery)

