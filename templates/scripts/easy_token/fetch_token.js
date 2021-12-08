async function fetch_token(form_data) {
  data = {"email":"b@b.b",
          "password": "b",
          "confirmPassword":"b",
          "podName":"b",
          "register": "on",
          "createPod": "on",
          "webId": ".."}

  resp = await fetch("http://localhost:8081/idp/register/",
                      {method: "POST",
                       headers:{
                         "Content-Type": "application/json",
                         "Accept": "application/json"},
                       body:JSON.stringify(form_data)})
              .then(resp => resp.json())
              .then( data => {
                console.log(data)
                token = data.details.quad.split(' ')[2].slice(1, -2)
                console.log("raw tok " + token)
                document.getElementById("tokenValue").value = token;
              });

};


function get_form_data() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const podName = document.getElementById("podName").value;
  const register = document.getElementById("register").value; // on off
  const createPod = document.getElementById("createPod").value; // on off
  const webId = document.getElementById("webId").value;
  data2 = {"email":"b@b.b",
          "password": "b",
          "confirmPassword":"b",
          "podName":"b",
          "register": "on",
          "createPod": "on",
          "webId": "..webid..."}

  data = {"email": email,
           "password": password,
           "confirmPassword": confirmPassword,
           "podName": podName,
           "register": register,
           "createPod": createPod,
           "webId": webId           }
  console.log('data1')
  console.log(data)
  console.log('data2')
  console.log(data2)
  return data
}

const buttonFormData = document.querySelector("#fetchFormData");

buttonFormData.onclick = () => { get_form_data();  };

const buttonFetch = document.querySelector("#fetchToken");

buttonFetch.onclick = () => {
const buttonFetch = document.querySelector("#fetchToken");
  const webid = "http://localhost:3003/a/profile/card#me"
  const form_data = get_form_data();
  fetch_token(form_data);
  };

