$("#currentDay").text(moment().format("LLLL"));
var secondChild = $("textarea");
var clickBtn = $(".clickMe");
var tableBtn = $("#tableBtn");
var LSarray =["","","","","","","","","",""];
var temp = JSON.parse(localStorage.getItem("ToDos"));

if (temp != null){
    LSarray = temp;
}

$(secondChild).each(function(i){
    secondChild[i].setAttribute("data-index", i);
    secondChild.eq(i).val(LSarray[i]);
});

$("tr td:first-child").each(function(){
    if(moment($(this).text(), 'ha').isSame(moment(), "hour")){
        this.nextElementSibling.firstChild.setAttribute("style", "background-color: #dd3535a2")
    } else if (moment($(this).text(), "ha").isAfter(moment())) {
        this.nextElementSibling.firstChild.setAttribute("style", "background-color: #1c7c1cb6")
}
});

tableBtn.click(function(event){ 
    var element = event.target;
    console.log(element)
    if (element.matches(".clickMe") === true) {
        var index = element.previousElementSibling.firstChild.getAttribute("data-index");
        LSarray[index] = secondChild.eq(index).val();
        localStorage.setItem("ToDos", JSON.stringify(LSarray));
        }
});
