$("#currentDay").text(moment().format("LLLL"));
var clickBtn = $(".clickMe");
var LSarray = [];
var currentHour = moment().format("ha")

$("table tr td:first-child").each(function(){
    if(moment($(this.text()))==moment().format("ha")){
        this.nextElementSibling.firstChild.setAttribute("style", "background-color: red")
    } else if (moment($(this).text(), "ha").isBefore(moment())) {
   this.nextElementSibling.firstChild.setAttribute("style", "background-color: green")
}});







function brTest(event){
    event.stopPropagation();
    event.clickBtn.setAttribute(
        "style",
        "background-color: #000"
    )
}

clickBtn.addEventListener("click", brTest);