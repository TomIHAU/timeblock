//sets the clock on page load
$("#currentDay").text(moment().format("LLLL"));

var clickBtn = $(".clickMe");
var LSarray =["hello","hello","hello","hello","hello","hello","hello","hello","hello","hello"];
//LSarray = JSON.parse(localStorage.getItem("ToDos"));

// function init(){
//   JSON.parse(localStorage.getItem("ToDos"));
//   localStorage.setItem("ToDos", JSON.stringify(LSarray));
//   $("table tr td:first-child").each(function(){

//   })
// }

// ------- ask about using i in an each loop
var secondChild = $("textarea")

for(let i = 0; i < secondChild.length; i++){
  console.log(LSarray[i])
  console.log(secondChild[i])
  if(LSarray[i] === !null){
   secondChild.eq(i).val(LSarray[i]);
  
}

// $("table tr td")[1].each(function(){
//   if Ls
// })


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
//init();
//clickBtn.addEventListener("click", function(event){});
