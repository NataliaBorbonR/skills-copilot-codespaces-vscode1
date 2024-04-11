function skillsMember() {
    // Get the input element
    var input = document.getElementById("skillsMember");
    // Get the filter
    var filter = input.value.toUpperCase();
    // Get the ul element
    var ul = document.getElementById("skillsMemberList");
    // Get the li elements
    var li = ul.getElementsByTagName("li");
    // Loop through all list items, and hide those who don't match the search query
    for (var i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0];
        var txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}