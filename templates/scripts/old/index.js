/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const buttonLogin = document.querySelector(\"#btnLogin\");\nconst buttonAdd = document.querySelector(\"#btnAdd\");\n\nconst buttonAlert = document.querySelector(\"#btnAlert\");\nbuttonAlert.onclick = function() {\n  alert(\"WORKING\")\n  console.log(\"WORKING\")\n}\n\n// 1a. Start Login Process. Call login() function.\nfunction startLogin(oidcIssuer) {\n  return login({\n    // oidcIssuer: \"https://broker.pod.inrupt.com\",\n    oidcIssuer: oidcIssuer,\n    redirectUrl: window.location.href,\n    clientName: \"Getting started !\"\n  });\n}\n\n// 1b. Login Redirect.\n// When redirected after login, call handleIncomingRedirect() function to\n// finish the login process by retrieving session information.\nasync function finishLogin() {\n    let token = document.getElementById(\"tokenValue\").value;\n    await handleIncomingRedirect();\n    const session = getDefaultSession();\n    if (session.info.isLoggedIn) {\n      let webIdUrl = session.info.webId;\n      document.getElementById(\"labelStatus\").textContent = `Logged in with WebID ${session.info.webId}`;\n\n    }\n\n}\n\n// The example has the login redirect back to the index.html.\n// finishLogin() calls the function to process login information.\n// If the function is called when not part of the login redirect, the function is a no-op.\n\nfinishLogin();\n\nasync function addToken(token_value, webIdUrl) {\n\n  const profileCardUrl = `${webIdUrl}`;\n  const OIDC_SCHEMA =\"http://www.w3.org/ns/solid/terms#oidcIssuerRegistrationToken\"\n  let myProfileCard ;\n \n\n  try {\n    myProfileCard = await getSolidDataset(profileCardUrl, { fetch: fetch });\n  } catch (error) {\n      console.error(error.message);\n  }\n\n  let card = getThing(myProfileCard, webIdUrl)\n  card = addStringNoLocale(card, OIDC_SCHEMA, token_value);\n  myProfileCard = setThing(myProfileCard, card);\n\n  try {\n    // Save the SolidDataset\n    await saveSolidDatasetAt(\n      profileCardUrl,\n      myProfileCard,\n      { fetch: fetch }\n    );\n  } catch (error) {\n    console.log(error);\n  } \n}\n\nbuttonLogin.onclick = function() {\n  let oidcIssuer = document.getElementById('oidcIssuer').value\n  startLogin(oidcIssuer);\n};\n\nbuttonAdd.onclick = function() {\n    const session = getDefaultSession();\n    if (session.info.isLoggedIn) {\n      let token = document.getElementById('tokenValue').value\n      addToken(token, session.info.webId );\n      document.getElementById(\"sendStatus\").textContent = `token sent`;\n    }else{\n      document.getElementById(\"labelStatus\").textContent = ` 👈 Please login first`;\n    }\n};\n\n\n\n\n\n//# sourceURL=webpack://inrupt_tut/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;