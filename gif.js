//Here I am setting up an array of topics that I like to do.
var searchTopics = ["dancing", "hiking", "reading", "coding", "learning", "teaching", "volleyball", "basketball", "concerts", "traveling", "lauhing", "shopping", "movies", "food", "animal gifs"];
//This jQuery function focuses on what happens when a button is clicked.
$(".gifBtn").on("click", function () {
    //Here we are creating a variable searchTopic that is equal to a jQuery function that identifies this attribute data-type (finds the buttons to link with).
    var searchTopics = $(this).attr("data-type");

    //Here is a variable queryURL that is equal to the API address that will retrieve data based on the specified searchTopic. 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTopics + "&api_key=iYsgmGgAecbaK67QHTa4d1UQT2o4wmpO&limit=10";

    //This is an ajax call that will go to the queryURL and get the data for the searchTopic.
    $.ajax({
        url: queryURL,
        method: "GET"
    //Then, we are running a function for a response.       
    }).then(function (response) {
        //We set the variable results equal to response.data becausee we want the response to bring the data back from the API source.
        var results = response.data
        
        console.log(results)
        //We are creating a for loop. The variable i is set to 0. If i is less than the length of the results, then the increment is increased by one.
        for (var i = 0; i < results.length; i++) {
            //We are creating a variable gifDiv equal to div tag.
            var gifDiv = $("<div>");
            //we are creating a variable gifInfo equal to the response data that will bring a fixed image in the "index" and connecting to it's url.
            var gifInfo = results[i].images.fixed_height.url;
            //We are creating a variable gifImage equal to an image tag.
            var gifImage = $("<img>");
            //We are creating a variable placeRating equal to a p tag that will write the result of the "index" rating.
            var placeRating = $("<p>").text(results[i].rating);

            //We are setting up a gifImage attribute that has a source of gifInfo.
            gifImage.attr("src", gifInfo);
            //We are setting up a gifImage attribute with an alternative name of GIF.
            gifImage.attr("alt", "GIF");

            //We are placing the rating in the created div and they will appear one after the other.
            gifDiv.append(placeRating);
            //Here the the div (rating) will come after the image.
            gifDiv.append(gifImage);
            //The jQuery function will place a GIF image where the gif id is specified in the html.
            $("#gifs").prepend(gifImage);
        //This closes out the for loop
        }
    //This closes out the response function.
    });
//This closes out the onclick funtion.
});

/*function renderButtons() {
    $("#gifs").empty();
    var a = $("<button>");
    a.addClass("gifBtn");
    a.attr("data-name", results[i]);
    a.text(rating[i]);
    $("#buttons-view").append(a);
}

$("#add-topic").on("click", function(event) {
    event.preventDefault();
    var topicChosen = $("#topic-input").val().trim();
    ?.push(topicChosen);
    renderButtons();
});

$(document).on("click", ".gifBtn", displayTopicInfo);
renderButtons();

$(".gifBtn").on("click", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });

*/