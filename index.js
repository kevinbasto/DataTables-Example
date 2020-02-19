var users = [];
var table;

$(document).ready(()=>{
    getUserData();
    loadActionListeners();
})

async function getUserData(){
    await $.ajax({
        type: "GET",
        url : "php/index/index.users.php",
        success: res => {
            users = JSON.parse(res);
            printTable(users);
        },
        error: err => {
            console.error(err);
        }
    });
    
}

function printTable(content){

    table = $('#usersTable').DataTable({
        data: content,
        columns: [
            { 
                "className": "details-control",
                "data": 'id',
            },
            { data: 'first_name'},
            { data: 'last_name'},
            { data: 'email'},
            { data: 'gender'},
            { data: 'ip_address'},
            { data: 'password'}
        ]
    });

    $('#usersTable tbody td.details-control').mouseenter(function(){
        $(this).css("cursor", "pointer");
        $(this).css("background", "#bfbfbf");
    });

    $('#usersTable tbody td.details-control').mouseleave(function(){
        $(this).css("background", "#FFFFFF");
    });

    $('#usersTable tbody').on('click', 'td.details-control', function(){
        console.log('Hello from id!');
    });


}

function loadActionListeners(){
    $('#clearTable').on('click', function(){
        table.clear();
        table.destroy();
    });

    $('#loadTable').on('click', function(){
        let content = [];
        users.forEach(user => {
            if(user.gender == 'Female'){
                content.push(user);
            }
        })
        console.log(content);
        printTable(content);
    })
}