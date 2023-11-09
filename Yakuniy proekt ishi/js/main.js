let users = [
    {
        login: "joxa",
        password: "1234",
    }
];
$(document).ready(function (){
    $(".btn-success").click(function () {
        let login = $("#login").val();
        let password = $("#password").val();
        let num = false;

        if (login == "") {
            alert("login qatorini to'ldiring")
        }
        else if ([password] == ""){
            alert("parolni qatorini to'ldiring")
        }

        if (users.length !=0) {
            users.forEach(function (item){
                if (login == item.login){
                    if (password == item.password){
                        num = true
                        alert("Siz tizimga kirdingiz!");
                    }
                    else{
                        alert("Parolingiz hato!");
                    }
                }
            });
        }else{
            alert("siz birinchi foydalanuvchisiz! Iltimos, ro'yxatdan o'ting");
        }
    });
    $(".btn-link").click(function (){
        let login = $("#login").val();
        let password = $("#password").val();
        let num = false;


        if (login == ""){
            alert("Login qatorini to'ldiring")
        }else if (password == ""){
            alert("Parol qatorini to'ldiring")
        }else {
            if (users.length !=0) {
                users.forEach(function (item){
                    if (login == item.login){
                        num = true;
                    }
                });
                if (num) {
                    alert("Bunday user mavjud!");
                }else{
                    alert("Zo'r! Siz ro'yxatdan otdingiz!");
                    users.push({login: login, password: password});
                }
            }else {
                users.push({login: login, password: password});
            }
        }
    });
    $(".btn-light").on("mousedown",function (){
        let attr = $("#password").attr("type");
        $("#password").attr("type","text");
        $(".fa").toggleClass("fa-eye fa-eye-slash");
        $("#password").css("border-color","red");
    });
    $(".btn-light").on("mouseup", function (){
        let attr = $("#password").attr("type");
        $("#password").attr("type","password");
        $(".fa").toggleClass("fa-eye fa-eye-slash");
        $("#password").css("border-color", "royalblue")
    })
});




let toDolList = [];
let tr = 1;
let allTask = 0;
let completeTask = 0;


function addTask() {
    let taskName = document.getElementById('taskInput').value;
    if (taskName !=''){
        let obj = {
            tartib: tr++,
            name: taskName,
            complete: false
        };
        toDolList.push(obj);
        chizish();
        allTask = toDolList.length;
        document.getElementById('allTask').innerText = allTask;
    }
}
function chizish() {
    let list = '';
    toDolList.forEach(function (item) {
        list += '<li class="list-group-item">'+
            '<input '+(item.complete ? "checked" : "") +' onchange="completed(this)" type="checkbox" id=" '+item.tartib+' " class="mr-2"><label for="'+item.tartib+'">'+item.name+'</label>'
        '</li>'
    });

    document.getElementById('list').innerHTML = list;
    document.getElementById('comlateTask').innerHTML = completeTask;
    let progressW = (completeTask * 100) / allTask;
    document.getElementById("progress").style.width = progressW + "%";
}
function completed(input) {
    let searchId = input.getAttribute("id");
    let checked = input.getAttribute("checked");
    toDolList.forEach(function (item,i ) {
        if (item.tartib == searchId){
            toDolList[i].complete = item.complete ? false : true;
        }
    });
    console.log(checked);
    if (checked == null){
        completeTask++
    }else {
        completeTask--
    }
    chizish();
};
