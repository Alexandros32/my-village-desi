$(document).ready(function () {
    var t = document.getElementById("myModal"),
    c = ($(".img-fluid"), $("#img01"));
    $(".img-fluid").click(function () {
    t.style.display = "block";
    var e = this.src;
    c.attr("src", e);
    }),
    (document.getElementsByClassName("close")[0].click = function () {
    t.style.display = "none";
    });
    });
