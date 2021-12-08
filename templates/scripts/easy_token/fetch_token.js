async function fetch_token(webid) {
  data = {"email":"b@b.b",
          "password": "b",
          "confirmPassword":"b",
          "podName":"b",
          "register": "on",
          "createPod": "on",
          "webId": webid}
  resp = await fetch("http://localhost:8081/idp/register/",
                      {method: "POST",
                       headers:{
                         "Content-Type": "application/json",
                         "Accept": "application/json"},
                       body:JSON.stringify(data)})
              .then(resp => resp.json())
              .then( data => {
                console.log(data)
                token = data.details.quad.split(' ')[2].slice(1, -2)
                console.log("raw tok " + token)
                document.getElementById("tokenValue").value = token;
              });

};

const buttonFetch = document.querySelector("#fetchToken");

buttonFetch.onclick = () => {
  const webid = "http://localhost:3003/a/profile/card#me"
  fetch_token(webid);
  };

