var szyft = 0;
function shift() { if (szyft == 0) szyft = 1; else szyft = 0; }
function letter_bi() { updatepage("ㅂ","ㅃ"); }
function letter_ji() { updatepage("ㅈ", "ㅉ"); }
function letter_di() { updatepage("ㄷ", "ㄸ"); }
function letter_ga() { updatepage("ㄱ","ㄲ"); }
function letter_sa() { updatepage("ㅅ","ㅆ"); }
function letter_yo() { updatepage("ㅛ","ㅛ"); }
function letter_yeo() { updatepage("ㅕ","ㅕ"); }
function letter_ya() { updatepage("ㅑ","ㅑ"); }
function letter_ye() { updatepage("ㅐ","ㅒ"); }
function letter_yea() { updatepage("ㅔ","ㅖ"); }
function letter_mi() { updatepage("ㅁ","ㅁ"); }
function letter_ni() { updatepage("ㄴ","ㄴ"); }
function letter_o() { updatepage("ㅇ","ㅇ"); }
function letter_li() { updatepage("ㄹ","ㄹ"); }
function letter_hi() { updatepage("ㅎ","ㅎ"); }
function letter_oh() { updatepage("ㅗ","ㅗ"); }
function letter_uh() { updatepage("ㅓ","ㅓ"); }
function letter_ah() { updatepage("ㅏ","ㅏ"); }
function letter_i() { updatepage("ㅣ","ㅣ"); }
function letter_ki() { updatepage("ㅋ","ㅋ"); }
function letter_ti() { updatepage("ㅌ","ㅌ"); }
function letter_chi() { updatepage("ㅊ","ㅊ"); }
function letter_pi() { updatepage("ㅍ","ㅍ"); }
function letter_u() { updatepage("ㅠ","ㅠ"); }
function letter_wo() { updatepage("ㅜ","ㅜ"); }
function letter_eu() { updatepage("ㅡ","ㅡ"); }
function spacebar() { updatepage(" "," "); }

function updatepage( bukwa1, bukwa2 )
{
  if (bukwa1 == ".")
  {
    if (szyft==0) 
		{ 
			insert(document.forms.textformularz.texterja, bukwa1);
			document.forms.textformularz.texterja.focus();
		};
    if (szyft==1) 
		{ 
			insert(document.forms.textformularz.texterja, bukwa2);
			document.forms.textformularz.texterja.focus();
		};
  }
  else
  {
    if (document.forms.capslockformularz.capslock.checked) { help=bukwa2; bukwa2=bukwa1; bukwa1=help; }
    if (szyft==1) { 
      //document.forms.textformularz.texterja.value += bukwa2; 
      insert(document.forms.textformularz.texterja, bukwa2);
      document.forms.textformularz.texterja.focus();
    }
    if (szyft==0) { 
      //document.forms.textformularz.texterja.value += bukwa1;
      insert(document.forms.textformularz.texterja, bukwa1);
      document.forms.textformularz.texterja.focus();
    }
  }
  szyft = 0;
}

// NEW FUNCTION
function insert(element,ins) {
    // gecko based
    if (element.setSelectionRange){
        var start = element.selectionStart;
        var end = element.selectionEnd;
        if (is_chrome) {
            start = selectionStart;
            end = selectionEnd;
        }
        element.value = element.value.substring(0,start) + ins + element.value.substring(end,element.value.length);

        start++;
        if (is_chrome) {
          selectionStart = start;
          selectionEnd = start;
        }

	element.selectionStart = start;
        element.selectionEnd = start;

    }
    // IE
    else if (document.selection && document.selection.createRange) {
        element.focus();
        var range = document.selection.createRange();
        range.text = ins;
	range.collapse(false);
        range.select();
    }
} 

function selectall()
{
 document.forms.textformularz.texterja.select();
}


var inputupper = new Array(
126,	//~
33,	//!
64,	//@
35,	//#
36,	//$
37,	//%
94,	//^
38,	//&
42,	//*
40,	//(
41,	//)
95,	//_
43,	//+
81,	//Q
87,	//W
69,	//E
82,	//R
84,	//T
89,	//Y
85,	//U
73,	//I
79,	//O
80,	//P
123,	//{
125,	//}
65,	//A
83,	//S
68,	//D
70,	//F
71,	//G
72,	//H
74,	//J
75,	//K
76,	//L
58,	//:
34,	//"
90,	//Z
88,	//X
67,	//C
86,	//V
66,	//B
78,	//N
77,	//M
60,	//<
62,	//>
63,	//?
124 //| //MSW*/
);

var inputlower = new Array(
96,	//`
49,	//1
50,	//2
51,	//3
52,	//4
53,	//5
54,	//6
55,	//7
56,	//8
57,	//9
48,	//0
45,	//-
61,	//=
113,	//q
119,	//w
101,	//e
114,	//r
116,	//t
121,	//y
117,	//u
105,	//i
111,	//o
112,	//p
91,	//[
93,	//]
97,	//a
115,	//s
100,	//d
102,	//f
103,	//g
104,	//h
106,	//j
107,	//k
108,	//l
59,	//;
39,	//'
122,	//z
120,	//x
99,	//c
118,	//v
98,	//b
110,	//n
109,	//m
44,	//,
46,	//.
47,	////
92 //\ //MSW*/
);


var outputlowercase = new Array(
"ㅂ",	//q
"ㅈ",	//w
"ㄷ",	//e
"ㄱ",	//r
"ㅅ",	//t
"ㅛ",	//y
"ㅕ",	//u
"ㅑ",	//i
"ㅐ",	//o
"ㅔ",	//p
"ㅁ",	//a
"ㄴ",	//s
"ㅇ",	//d
"ㄹ",	//f
"ㅎ",	//g
"ㅗ",	//h
"ㅓ",	//j
"ㅏ",	//k
"ㅣ",	//l
"ㅋ",	//z
"ㅌ",	//x
"ㅊ",	//c
"ㅍ",	//v
"ㅠ",	//b
"ㅜ",	//n
"ㅡ",	//m
".", "\\" //*/
);

var outputuppercase = new Array(
"ㅃ",	//q
"ㅉ",	//w
"ㄸ",	//e
"ㄲ",	//r
"ㅆ",	//t
"ㅛ",	//y
"ㅕ",	//u
"ㅑ",	//i
"ㅒ",	//o
"ㅖ",	//p
"ㅁ",	//a
"ㄴ",	//s
"ㅇ",	//d
"ㄹ",	//f
"ㅎ",	//g
"ㅗ",	//h
"ㅓ",	//j
"ㅏ",	//k
"ㅣ",	//l
"ㅋ",	//z
"ㅌ",	//x
"ㅊ",	//c
"ㅍ",	//v
"ㅠ",	//b
"ㅜ",	//n
"ㅡ",	//m
);

var translate = true;

var selectionStart = -1;
var selectionEnd = -1;

var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

function getKeyCode(e) {
  var myKeyCode=0;
  
  // Internet Explorer 4+
  if ( document.all ) {
    myKeyCode=e.keyCode;

  // Netscape 4
  } else if ( document.layers ) {
    myKeyCode=e.which;

  // Netscape 6
  } else if ( document.getElementById ) {
    myKeyCode=e.which;
  }

  return myKeyCode;
}

function resetctrls() {
  translate = true;
}

function checkControlAlt(e) {

  var myKeyCode = getKeyCode(e); 

  if (myKeyCode == 17 || myKeyCode == 18) {
    translate = false;
  }
}

function keyUp(e) {
  updateStartEnd();
  
   var myKeyCode = getKeyCode(e);
 
  if (myKeyCode == 17 || myKeyCode == 18) {
    translate = true;
  }
}

function updateStartEnd() 
{
  if (document.forms.textformularz.texterja.setSelectionRange) 
  {
    selectionStart = document.forms.textformularz.texterja.selectionStart;
    selectionEnd = document.forms.textformularz.texterja.selectionEnd;
  }
}

function translateKeyCode(e) {
 
  var myKeyCode = getKeyCode(e);
  
  if (!translate)
    return true;
  
  //MSW
  if (document.getElementById("ruskey").checked) translate = true;
  else translate = false;
  //MSW

  if (!translate)
    return true;

  var index = -1
  var isLower = -1;

  for (var i = 0; i < inputlower.length; i++) {
    if (inputlower[i] == myKeyCode) {
      index = i;
      isLower = 0;
    }
  }

  if (isLower == -1) {
    for (var i = 0; i < inputupper.length; i++) {
      if (inputupper[i] == myKeyCode) {
        index = i;
        isLower = 1;
      }
    }
  }

  if (index >= 0) {
    insert(document.forms.textformularz.texterja, (isLower == 1) ? outputuppercase[index] : outputlowercase[index]);
    updateStartEnd();
    return false;
  } else {
    updateStartEnd();
  }
}