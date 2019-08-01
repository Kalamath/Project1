var favorited = false;

// Removing gif ID from from Array Function
function removeFave(index) {
    console.log('index', index);
    favoriteList = JSON.parse(localStorage.getItem('Favorited'));
    favoriteList.splice(index, 1);
    localStorage.setItem('Favorited', JSON.stringify(favoriteList));
};

// ============================================= HOME Page Button listening =================================================

$(".searchResultsDiv").on("click", ".favebtn", function () {
    // removing from FAVES
    favoriteList = JSON.parse(localStorage.getItem('Favorited'));
    if (JSON.parse(localStorage.getItem('Favorited')) !== null) {
        if (favoriteList.includes($(this).attr("id"))) {
            $(this).css("background-color", "");
            $(this).css("color", "");
            $(this).css("border", "");
            $(this).css("padding", "");
            $(this).text("Add to Favorites");

            var DI = $(this).attr("data-index");
            removeFave(DI);
            favorited = false;

            // this is tracking if the item is IS NOT in the list, ADDING TO FAVE
        } else {
            var dataIndex = favoriteList.length ? favoriteList.length - 1 : 0;

            $(this).attr("data-index", dataIndex);
            $(this).css("background-color", "#fff200b7");
            $(this).css("color", "rgb(94, 94, 94)");
            $(this).css("border", "2px solid rgb(94, 94, 94)");
            $(this).text("Favorited");

            var btnVal = $(this).attr("search-term");
            // need this push id into array to track what is favorited
            SaveDataToLocalStorage(btnVal);
            favorited = true;
        }
    } else if (JSON.parse(localStorage.getItem('Favorited')) === null) {
        $(this).attr("data-index", 0);
        $(this).css("background-color", "#fff200b7");
        $(this).css("color", "rgb(94, 94, 94)");
        $(this).css("border", "2px solid rgb(94, 94, 94)");
        $(this).text("Favorited");

        var btnVal = $(this).attr("search-term");
        // need this push id into array to track what is favorited
        SaveDataToLocalStorage(btnVal);
        favorited = true;

    }

    console.log("from results:" + favoriteList)
});


// Click to add to favorites
// PUSHING THE ARRAY (IN STRING FORM) TO LOCAL STORAGE
function SaveDataToLocalStorage(term) {
    var favoriteList = [];
    console.log(term)
    // Parse the serialized data back into an aray of objects
    if (JSON.parse(localStorage.getItem('Favorited')) === null) {
        // Push the new data (whether it be an object or anything else) onto the array
        favoriteList.push(term);
        // Re-serialize the array back into a string and store it in localStorage
        localStorage.setItem('Favorited', JSON.stringify(favoriteList));
    } else {
        favoriteList = JSON.parse(localStorage.getItem('Favorited'));
        // Push the new data (whether it be an object or anything else) onto the array
        favoriteList.push(term);
        // Re-serialize the array back into a string and store it in localStorage
        localStorage.setItem('Favorited', JSON.stringify(favoriteList));
    }




}
