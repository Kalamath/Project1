// CODE TO: Hover over GIF to move!
$("#jumboTeam").on("mouseover", ".profile", function () {
    $(this).attr('src', $(this).attr("animated"));
}).on("mouseout", ".profile", function () {
    $(this).attr('src', $(this).attr("still"));
});

