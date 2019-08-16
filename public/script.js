$(document).ready(function(){    
    // WHEN SEARCH BUTTON IS HIT    
    $("#gif-search").click(function(e){
        e.preventDefault();
        // retrieve data
        var value = $("input#gif-input").val().trim();
        // clear field
        $("#gif-input").val('')
        // call function to use data
        sendRequest(value);
    });

    function sendRequest(data){
        // search term
        var Search = data;
        // unique api key
        var Key = "&api_key=dc6zaTOxFJmzC&limit=10";
        // api url
        var Address = "HTTPS://api.giphy.com/v1/gifs/search?q=";
        
        // API SEARCH URL
        var queryURL = Address + Search + Key;

        // AJAX CALL TO QUERY DATA
        $.ajax({
            url: queryURL,
            method: "GET"            
        }).done(function(response){
            var data = response.data;
            data.forEach(element => {
                console.log(element);
                var gifDiv = $("<div class='item'>");

                var rating = element.rating;
    
                var p = $("<p>").text("Rating: " + rating);
    
                var personImage = $("<img>");
                //starts off as still
                personImage.attr("src", element.images.original.url);
                personImage.attr("data-animate", element.images.original.url)
                personImage.attr("data-still", element.images.original_still.url)
                personImage.attr("data-state", "still");
                personImage.addClass("gif");
    
    
    
                gifDiv.prepend(p);
                gifDiv.prepend(personImage);
                $(".results-div").prepend(gifDiv);
            });
        });
    }


    $("#reset-button").click(function(e){
        e.preventDefault();
        $(".item").empty();
    });











});