// Click to add to favorites
var favoriteList = [];
var favorited = false;

// PUSHING THE ARRAY (IN STRING FORM) TO LOCAL STORAGE
var lspush = function () {
    localStorage.clear();
    localStorage.setItem("Favorited", JSON.stringify(favoriteList));
}



// Removing gif ID from from Array Function
function removeFave(index) {
    console.log('index', index);
    favoriteList.splice(index, 1)
}

// ============================================= HOME Page Button listening =================================================

$(".searchResultsDiv").on("click", ".favebtn", function () {
    // removing from FAVES
    if (favoriteList.includes($(this).attr("id"))) {
        $(this).css("background-color", "");
        $(this).css("color", "");
        $(this).css("border", "");
        $(this).css("padding", "");
        $(this).text("Add to Favorites");

        var DI = $(this).attr("data-index");
        removeFave(DI);

        // this is tracking if the item is IS NOT in the list, ADDING TO FAVE
    } else {
        var dataIndex = favoriteList.length ? favoriteList.length - 1 : 0;

        $(this).attr("data-index", dataIndex);
        $(this).css("background-color", "#fff200b7");
        $(this).css("color", "rgb(94, 94, 94)");
        $(this).css("border", "2px solid rgb(94, 94, 94)");
        $(this).text("Favorited");

        favoriteList.push($(this).attr("id"))
        favorited = true;

    }

    console.log("from results:" + favoriteList)
});
