function getsample(){
        //fetch("sample.txt").then(
        //  function(response){
        //      return response.text();
        //    }
        //)   .then(
        //      function(data){
        //         alert("This is the sample data")
        //         alert(data);
        //         console.log(data);
        //         document.getElementById("dataprint").innerHTML = data;
        //       }
        //    )}
        //instead of doing allt his, we can simply make arrow functions
        fetch("sample.txt").then(
            (response) => response.text())
        .then(
            (data) => {
                alert("This is the sample data");
                alert(data);
                console.log(data);
                document.getElementById("dataprint").innerHTML = data;
            }
        ).catch(
            (error) => {
                alert(error);
                console.log(error);
            }
        )
}

function redirect_errors(){
    window.location = "errors.html";
}
function home(){
    window.location = "index.html";
}

function getjson() {
    fetch("index.json").then(
        (response) => response.json()
    ).then(
        (data) => {
            //alert("getting data");
            //document.getElementById("jsondataprint").innerHTML = data;
            let output = "<h2>Users </h2>";
            data.map(function(user){
                output += `
                   <ul>
                     <li> ID: ${user.id} </li>
                     <li> Name: ${user.Name} </li>
                     <li> Email: ${user.Email} </li>
                   </ul>
                `;
            })
            document.getElementById("jsondataprint").innerHTML = output;
        }
    )
}

function getjsonexternal(){
    alert("fetching");
    fetch("https://jsonplaceholder.typicode.com/posts").then(
        //from this site, we are receiving fake json data!
        (response) => response.json()
    ).then(
        (data) => {
            let output = "<h2> Images </h2>";
            data.map(function(user){
                output += `
                  <div>
                   <h3> Title: ${user.title} </h3>
                   <p> Body: ${user.body} </p>
                  </div>
                `;
            })
            document.getElementById("jsondataprintexternal").innerHTML = output;
        }
    )

}

function postdata(e){

    e.preventDefault();
    alert("post started");
    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;

    console

    fetch("https://jsonplaceholder.typicode.com/posts",{
        method : "POST",
        headers : {
            "Accept" : "application/json, text/plain",
            "Content-type" : "application/json"
        },
        body : JSON.stringify({title:title, body:body})
    }).then(
        (response) => response.json()
    ).then(
        (data) => {
            alert("look for the console to see if the new enr=try is added");
            console.log(data);

        }
    )


}