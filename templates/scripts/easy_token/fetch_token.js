async function fetch_token() {
  data = {"email":"a@a.a",
          "password": "a",
          "confirmPassword":"a",
          "podName":"a",
          "register": "on",
          "createPod": "on",
          "webId": "http://localhost:8081/a/profile/card#me"}
  resp = await fetch("http://localhost:8081/idp/register/",
                      {method: "POST",
                       headers:{
                         "Content-Type": "application/json",
                         "Accept": "application/json"},
                       body:JSON.stringify(data)})
              .then(resp => resp.json())
              .then( data => {
                token = data.details.quad.split(' ')[2].slice(1, -2)
                console.log("raw tok " + token)
                document.getElementById("tokenValue").value = token;
              });

};

const buttonFetch = document.querySelector("#fetchToken");

buttonFetch.onclick = () => {
  fetch_token();
  };

