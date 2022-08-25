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

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("const button = document.getElementById('button');\nconst audioElement = document.getElementById('audio');\n\n\n// VoiceRSS Javascript SDK\nconst VoiceRSS = {\n\tspeech: function (e) {\n\t\tthis._validate(e), this._request(e);\n\t},\n\t_validate: function (e) {\n\t\tif (!e) throw \"The settings are undefined\";\n\t\tif (!e.key) throw \"The API key is undefined\";\n\t\tif (!e.src) throw \"The text is undefined\";\n\t\tif (!e.hl) throw \"The language is undefined\";\n\t\tif (e.c && \"auto\" != e.c.toLowerCase()) {\n\t\t\tvar a = !1;\n\t\t\tswitch (e.c.toLowerCase()) {\n\t\t\t\tcase \"mp3\":\n\t\t\t\t\ta = new Audio().canPlayType(\"audio/mpeg\").replace(\"no\", \"\");\n\t\t\t\t\tbreak;\n\t\t\t\tcase \"wav\":\n\t\t\t\t\ta = new Audio().canPlayType(\"audio/wav\").replace(\"no\", \"\");\n\t\t\t\t\tbreak;\n\t\t\t\tcase \"aac\":\n\t\t\t\t\ta = new Audio().canPlayType(\"audio/aac\").replace(\"no\", \"\");\n\t\t\t\t\tbreak;\n\t\t\t\tcase \"ogg\":\n\t\t\t\t\ta = new Audio().canPlayType(\"audio/ogg\").replace(\"no\", \"\");\n\t\t\t\t\tbreak;\n\t\t\t\tcase \"caf\":\n\t\t\t\t\ta = new Audio().canPlayType(\"audio/x-caf\").replace(\"no\", \"\");\n\t\t\t}\n\t\t\tif (!a) throw \"The browser does not support the audio codec \" + e.c;\n\t\t}\n\t},\n\t_request: function (e) {\n\t\tvar a = this._buildRequest(e),\n\t\t\tt = this._getXHR();\n\t\t(t.onreadystatechange = function () {\n\t\t\tif (4 == t.readyState && 200 == t.status) {\n\t\t\t\tif (0 == t.responseText.indexOf(\"ERROR\")) throw t.responseText;\n\t\t\t\t(audioElement.src = t.responseText), audioElement.play();\n\t\t\t}\n\t\t}),\n\t\t\tt.open(\"POST\", \"https://api.voicerss.org/\", !0),\n\t\t\tt.setRequestHeader(\n\t\t\t\t\"Content-Type\",\n\t\t\t\t\"application/x-www-form-urlencoded; charset=UTF-8\"\n\t\t\t),\n\t\t\tt.send(a);\n\t},\n\t_buildRequest: function (e) {\n\t\tvar a = e.c && \"auto\" != e.c.toLowerCase() ? e.c : this._detectCodec();\n\t\treturn (\n\t\t\t\"key=\" +\n\t\t\t(e.key || \"\") +\n\t\t\t\"&src=\" +\n\t\t\t(e.src || \"\") +\n\t\t\t\"&hl=\" +\n\t\t\t(e.hl || \"\") +\n\t\t\t\"&r=\" +\n\t\t\t(e.r || \"\") +\n\t\t\t\"&c=\" +\n\t\t\t(a || \"\") +\n\t\t\t\"&f=\" +\n\t\t\t(e.f || \"\") +\n\t\t\t\"&ssml=\" +\n\t\t\t(e.ssml || \"\") +\n\t\t\t\"&b64=true\"\n\t\t);\n\t},\n\t_detectCodec: function () {\n\t\tvar e = new Audio();\n\t\treturn e.canPlayType(\"audio/mpeg\").replace(\"no\", \"\")\n\t\t\t? \"mp3\"\n\t\t\t: e.canPlayType(\"audio/wav\").replace(\"no\", \"\")\n\t\t\t? \"wav\"\n\t\t\t: e.canPlayType(\"audio/aac\").replace(\"no\", \"\")\n\t\t\t? \"aac\"\n\t\t\t: e.canPlayType(\"audio/ogg\").replace(\"no\", \"\")\n\t\t\t? \"ogg\"\n\t\t\t: e.canPlayType(\"audio/x-caf\").replace(\"no\", \"\")\n\t\t\t? \"caf\"\n\t\t\t: \"\";\n\t},\n\t_getXHR: function () {\n\t\ttry {\n\t\t\treturn new XMLHttpRequest();\n\t\t} catch (e) {}\n\t\ttry {\n\t\t\treturn new ActiveXObject(\"Msxml3.XMLHTTP\");\n\t\t} catch (e) {}\n\t\ttry {\n\t\t\treturn new ActiveXObject(\"Msxml2.XMLHTTP.6.0\");\n\t\t} catch (e) {}\n\t\ttry {\n\t\t\treturn new ActiveXObject(\"Msxml2.XMLHTTP.3.0\");\n\t\t} catch (e) {}\n\t\ttry {\n\t\t\treturn new ActiveXObject(\"Msxml2.XMLHTTP\");\n\t\t} catch (e) {}\n\t\ttry {\n\t\t\treturn new ActiveXObject(\"Microsoft.XMLHTTP\");\n\t\t} catch (e) {}\n\t\tthrow \"The browser does not support HTTP request\";\n\t},\n};\n\n// Disable/Enable button\nconst toggleButton = () => {\n\tbutton.disabled = !button.disabled;\n};\n\n// Passing joke to the VoiceRSS API\n\nconst tellMe = (joke) => {\n\tVoiceRSS.speech({\n\t\tkey: `${\"ac83a8930cb948f7a8888586a52014fd\"}`,\n\t\tsrc: joke,\n\t\thl: \"en-us\",\n\t\tv: \"John\",\n\t\tr: 0,\n\t\tc: \"mp3\",\n\t\tf: \"44khz_16bit_stereo\",\n\t\tssml: false,\n\t});\n}\n\n// Get jokes from Joke API\n\nconst getJokes = async () => {\n\tlet joke ='';\n\tconst apiUrl = 'https://v2.jokeapi.dev/joke/Programming,Pun,Spooky';\n\ttry {\n\t\tconst response = await fetch(apiUrl);\n\t\tconst data = await response.json();\n\t\tif (data.setup) {\n\t\t\tjoke = `${data.setup} ... ${data.delivery}`;\n\t\t} else {\n\t\t\tjoke = data.joke;\n\t\t}\n\t\ttellMe(joke);\n\t\t// Disable button\n\t\ttoggleButton();\n\t} catch (error) {\n\t\tconsole.log('no jokes :(', error);\n\t}\n}\n\n// Event Listeners\nbutton.addEventListener('click', getJokes);\naudioElement.addEventListener('ended', toggleButton);\n\n//# sourceURL=webpack://joke-teller/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;