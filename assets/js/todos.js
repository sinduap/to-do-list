$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//menghapus todo list
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //Menghentikan event bubbling
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
    if(event.which === 13){
        //ambil todo baru dari input
        var toDoText = $(this).val();
        $(this).val("");
        //buat list baru dan tambah ke ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + " " + toDoText + "</li>");
    };
});

$(".fa-plus-square").on("click",function(){
    $("input[type='text']").fadeToggle(100);
});