$("#currentDay").text(moment().format("LLLL"));
var clickBtn = $(".saveBtn");
var LSarray = [];
var currentHour = moment().format("hA")

$("table tr td:first-child").each(function(){
    console.log($(this).text())
    // if(moment($(this.text()).format("hA").isAfter(currentHour)){
    //     this.setAttribute("style", "background-color: green")
    // }
})

//moment(variable input from table).format(hA) -- for the for/ if loop regarding background.







function brTest(event){
    event.stopPropagation();
    event.clickBtn.setAttribute(
        "style",
        "background-color: #000"
    )
}

clickBtn.addEventListener("click", brTest);