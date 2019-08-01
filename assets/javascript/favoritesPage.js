   // ============================================= FAVORITES BUTTON =================================================

    // Click to add to favorites
    var favoriteList = [];
    var favorited = false;

    $(".searchResultsDiv").on("click", ".favebtn", function () {
        if (favoriteList.includes($(this).attr("id"))) {
            $(this).css("background-color", "");
            $(this).css("color", "");
            $(this).css("border", "");
            $(this).css("padding", "");
            $(this).text("Add to Favorites");

            // HOW TO DETACH A DIV FROM ANOTHER AREA?
            var ID = $(this).attr("id");
            var deletingDiv = $("." + ID)

            // we are filtering our elements that share the same class (BY ID) 
            // within the filter we must return true for our filtering mechanism to work and it returns as an array
            var myItem = deletingDiv.filter(function (index, item) {
                return $(item).hasClass("clone")
            })
            $(myItem[0]).remove();

            var index = $(myItem[0]).attr("data-index");
            removeFave(index);

        } else {
            $(this).css("background-color", "#fff200b7");
            $(this).css("color", "rgb(94, 94, 94)");
            $(this).css("border", "2px solid rgb(94, 94, 94)");
            $(this).text("Favorited");

            favoriteList.push($(this).attr("id"))
            favorited = true;

            var dataIndex = favoriteList.length ? favoriteList.length - 1 : 0;

            // adding giv to favorites to local storage
            var faveDiv = $("div[id=" + ($(this).attr("id")) + "]").attr("data-index", dataIndex);
            faveDiv.clone().detach().addClass("clone").appendTo("#favoriteCharities");

        }

        console.log("from results:" + favoriteList)
    });



    $(".favorites").on("click", ".favebtn", function () {
        var faveDiv = $("div[id=" + ($(this).attr("id")) + "]");

        $(this).css("background-color", "");
        $(this).css("color", "");
        $(this).css("border", "");
        $(this).css("padding", "");
        $(faveDiv).remove()

        if (favoriteList.includes($(this).attr("id"))) {
            // HOW TO DETACH A DIV FROM ANOTHER AREA?
            var ID = $(this).attr("id");
            var deletingDiv = $("." + ID)

            // we are filtering our elements that share the same class (BY ID) 
            // within the filter we must return true for our filtering mechanism to work and it returns as an array
            var myItem = deletingDiv.filter(function (index, item) {
                return $(item).hasClass("clone")
            })

            var index = $(myItem[0]).attr("data-index");
            removeFave(index);
        }

        console.log("from Fave:" + favoriteList)
    });
