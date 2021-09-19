//sets the clock on page load
$("#currentDay").text(moment().format("LLLL"));
var secondChild = $("textarea");
var clickBtn = $(".clickMe");
var tableBtn = $("#tableBtn");
var LSarray =["","","","","","","","","",""];
var temp = JSON.parse(localStorage.getItem("ToDos"));

console.log(temp)
if (temp === !null){
    LSarray = temp;
}
console.log(LSarray)
//------- ask about using i in an each loop
//secondChild.each(function(){
//  XXXXXXXXXXXXX
//})
for(let i = 0; i < secondChild.length; i++){
    secondChild[i].setAttribute("data-index", i);
    secondChild.eq(i).val(LSarray[i]);
};

//event.target
//colours the time zones
$("tr td:first-child").each(function(){
    if(moment($(this).text(), 'ha').isSame(moment(), "hour")){
        this.nextElementSibling.firstChild.setAttribute("style", "background-color: red")
    } else if (moment($(this).text(), "ha").isAfter(moment())) {
        this.nextElementSibling.firstChild.setAttribute("style", "background-color: green")
}
});
// function onClick(event){
//     var element = this.target;

// }

tableBtn.click(function(event){ 
    console.log("click")
     var element = event.target;
     console.log(element)
     if (element.matches(".clickMe") === true) {
         console.log("yay")
       var index = element.previousElementSibling.firstChild.getAttribute("data-index");
       LSarray[index] = secondChild.eq(index).val();
       localStorage.setItem("ToDos", JSON.stringify(LSarray));
       }
});
