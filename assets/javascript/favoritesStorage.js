var favorited = false;

// ============================================= HOME Page Button listening =================================================

$(".searchResultsDiv").on("click", ".favebtn", function () {
    // removing from FAVES
    var favoriteList = JSON.parse(localStorage.getItem('Favorited'));
    if (favoriteList !== null) {
        // taking out of faves
        if (favoriteList.includes($(this).attr("search-term"))) {
            $(this).css("background-color", "");
            $(this).css("color", "");
            $(this).css("border", "");
            $(this).css("padding", "");
            $(this).text("Add to Favorites");

            var searchedItem = $(this).attr("search-term");
            removeFave(searchedItem);
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
            console.log(btnVal)
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

// Removing un-faved item from from Array Function
function removeFave(searchedItem) {
    var Array = JSON.parse(localStorage.getItem('Favorited'))
    var removeTerm = Array.slice(0);
    removeTerm.forEach(function (element) {
        if (Array.includes(searchedItem)) {
            let removeIndex = Array.map(function (item) {
                return searchedItem;
            }).indexOf(element);
            Array.splice(removeIndex, 1);
            console.log(Array)
            localStorage.setItem('Favorited', JSON.stringify(Array));
        }
    });
    
}
