$("#currentDay").text(moment().format("LLLL"));
var secondChild = $("textarea");
var clickBtn = $(".clickMe");
var tableBtn = $("#tableBtn");
var LSarray =["","","","","","","","","",""];
var temp = JSON.parse(localStorage.getItem("ToDos"));

if (temp != null){
    LSarray = temp;
}

//------- ask about using i in an each loop
//secondChild.each(function(){
//  XXXXXXXXXXXXX
//})

for(let i = 0; i < secondChild.length; i++){
    secondChild[i].setAttribute("data-index", i);
    secondChild.eq(i).val(LSarray[i]);
};

//colours the time zones
$("tr td:first-child").each(function(){
    if(moment($(this).text(), 'ha').isSame(moment(), "hour")){
        this.nextElementSibling.firstChild.setAttribute("style", "background-color: red")
    } else if (moment($(this).text(), "ha").isAfter(moment())) {
        this.nextElementSibling.firstChild.setAttribute("style", "background-color: green")
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
