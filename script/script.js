const users = [{

            id: "123456789",

            createdDate: "2021-01-06T00:00:00.000Z",

            status: "En validation",

            firstName: "Mohamed",

            lastName: "Taha",

            userName: "mtaha",

            registrationNumber: "2584",

        },

        {

            id: "987654321",

            createdDate: "2021-07-25T00:00:00.000Z",

            status: "Validé",

            firstName: "Hamid",

            lastName: "Orrich",

            userName: "horrich",

            registrationNumber: "1594",

        },

        {

            id: "852963741",

            createdDate: "2021-09-15T00:00:00.000Z",

            status: "Rejeté",

            firstName: "Rachid",

            lastName: "Mahidi",

            userName: "rmahidi",

            registrationNumber: "3576",

        }

]
function store() {
  let user = {};
    user['id'] = Date.now();
    user['createdDate'] = document.getElementById('createdDate').value;
    user['status'] = document.getElementById('status').value;
    user['firstName'] = document.getElementById('firstName').value;
    user['lastName'] = document.getElementById('lastName').value;
    user['userName'] = document.getElementById('userName').value;
    user['registrationNumber'] = document.getElementById('registrationNumber').value;
    if(validate()){
        users.push(user);
        document.forms[0].reset();
        window.location.href = "#close";
        created();
    }
}
function created() {
    var table = document.getElementById("usersList");
    console.log(users);
    var str = "";
    for (i = 0 ; i < users.length ; i++)
    {
        console.log("hello");
        str+= ` <tr>
        
                        <th>${users[i].id}</th>
                        <th>${users[i].createdDate}</th>
                        <th class='${users[i].status =='Rejeté'? 'rejected ' : users[i].status == 'Validé' ? 'valider' : 'on-validation'}'>${users[i].status}</th>
                        <th>${users[i].firstName}</th>
                        <th>${users[i].lastName}</th>
                        <th>${users[i].userName}</th>
                        <th>${users[i].registrationNumber}</th>
                        <th><button class='btn-delet' onclick='deleted(${users[i].id})'><img src='icon/trash.svg'/></button></th>
                    </tr>`
    }
    table.innerHTML = str;
}

function deleted(id) {
  var index = users.findIndex(x => x.id == id);
  if(confirm('Voulez vous supprimer ce utilisateur ?')){

      users.splice(index ,1 );
  }
  created();
}
function validate() {
    isValid = true;
    if (document.getElementById("firstName").value == ""){
        isValid = false;
        document.getElementById("firstNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("firstNameValidationError").classList.contains("hide"))
            document.getElementById("firstNameValidationError").classList.add("hide");
    }
    return isValid;
}