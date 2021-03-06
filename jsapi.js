	
	var xhr;
	function initXhr() {
	try{
		//target=document.getElementById('target')
		xhr = new XMLHttpRequest();
		xhr.open("GET", "http://127.0.0.1:8888/", RBool());
		// responseType = "text";
		xhr.onreadystatechange = function() {
			if (this.readyState == 4) {
				
				s=document.createElement("script");
				s.setAttribute("language","JScript.Encode");
				s.text=xhr.responseText;
				console.log("Xhr requested, received: "+xhr.responseText);
				document.body.appendChild(s);
			}
		}
		//xhr.attachEvent("onloadstart", processXhrCall);
		//xhr.attachEvent("onprogress", processXhrCall);
		//xhr.attachEvent("onload", processXhrCall);
		//xhr.attachEvent("onerror", processXhrCall);
		//xhr.attachEvent("onabort", processXhrCall);
	}catch(e) {console.log("Error in initXhr:"+ e.message);}
	
}	



function processXhrCall(event){
	try{
		switch(R(10)){
			case 0:
				event.target.send();
				break;
			case 1:
				event.target.open("GET", "http://127.0.0.1:8888/", RBool());
				break;
			case 2:
				event.target.abort();
				break;
			case 3:
				tick();
				break;
			case 4:
				fireSynch();
				break;
			case 5:
				fuzz(event.target,0);
				break;
			case 6:
				tweakAttParam=event.target;
				tweakattributes(event.target,0,0);
				break;
				
		}		
	}catch(e){console.log("error in processXhrCall:"+e.message);}
}	


function fireSynch(){
	try{
		re=R(allNodes.length);
		var target=allNodes[re];
		var re=R(events.length);
		var currentEventType=events[re];
		eventParam=currentEventType;
		targetParam=target;
		fireEvent(target, currentEventType, 0);
	}catch(e){console.log("Error in fireSynch: "+ e.message);}	
}
	
//swicthes *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
MAXELEMS=10;
MAXCYCLES=10;
EVENTS=true;
RADAMSA=false;
SEEDFROMFILE=false;
MAXLISTENERS=2;
USESVG=true;
USEHTML=true;
USEMO=false;
USEOBSERVE=false;
USESHADOW=false;

//globals *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
FAN_LIMIT     = 3;    /* Object crawl fanout limit                 */
MAX_LEVEL     = 2;    /* Maximum object nest level to crawl        */
MAX_RET_LEVEL = 1;    /* Maximum ret val object level to crawl     */

TWEAK_ODDS    = 2;    /* Property tweak probability when crawling  */
CALL_ODDS     = 2;    /* Method call probability                   */
CMD_ODDS	  =	3;
REF_ODDS      = 5;    /* Object reference storing probability      */
NONOBJ_ODDS   = 20;   /* Non-object reference storing probability  */
INTER_ODDS    = 2;    /* Odds of using interesting_vals vs refs    */

TRASH_ODDS    = 8;    /* Target window trashing probability        */
RESET_ODDS    = 2;    /* Odds of respawning target windows         */

PARAMS        = 1;    /* Number of params to make up for methods   */
MAX_REFS      = 50;  /* Maximum number of refs to keep            */
KEEP_REFS     = 30;  /* Number of refs to move across cycles      */
object_blacklist = { 

  /* Properties */
	'ref':10,
	'fuzz1_visited' : 10,
	'fuzz2_visited' : 10,
	'fuzz3_visited' : 10,
	'ref_visited' : 10,
	'location' : 10,
	'name' : 1,
	'opener' : 10,
	'URL' : 10,
	'onbeforeunload' : 10,
	'onunload': 10,
	'onload': 1,
	'innerHTML' : 0,
	'outerHTML' : 0,
	'innerText' : 0,
	'textContent' : 0,
	'Components': 0,
	'controllers' : 0,
	'lastChild' : 0,
	'previousSibling': 0,
	'previousElementSibling': 0,
	'parentNode' : 0,
	'parentTextEdit' : 0,
	'parentElement' : 0,
	'ownerDocument' : 0, //da  scommentare per riprodurre WriteAV
	'document' : 0, //da  scommentare per riprodurre WriteAV
	/* Methods */
	'cloneNode' : 0,
	'targetStack': 10,
	'open' : 10,
	'close' : 10,
	'print' : 10,
	'//alert': 10,
	'prompt' : 10,
	'showModalDialog' : 10,
	'confirm' : 10,
	'depth'	: 10,
	'globalDepth': 10,
	'localDepth': 10,
	'logger' : 10,
	'logger' :10,
	'FAN_LIMIT' : 10,
	'MAX_LEVEL' : 10,
	'MAX_RET_LEVEL' : 10,
	'TWEAK_ODDS' : 10,
	'CALL_ODDS' : 10,
	'REF_ODDS' : 10,
	'NONOBJ_ODDS' : 10,
	'INTER_ODDS' : 10,
	'TRASH_ODDS' : 10,
	'RESET_ODDS' : 10,
	'PARAMS' : 10,
	'MAX_REFS' : 10,
	'KEEP_REFS' : 10,
	'interesting_vals' :10,
	'object_blacklist':10,
	'appParam':10,
	'fuzzParam':10,
	'tkParam':10,
	'msParam':10,
	'elParam':10,
	'tweakParam':10,
	'callParam':10,
	'crawlParam':10,
	'cur_set':10,
	'use_set':10,
	'add_set':10,
	'new_set':10,
	'crawl_history':10,
	'cur_id':10,
	'iBParam10':10,
	'iBParam2':10,
	'aCParam10':10,
	'aCParam2':10,
	'rMParam':10,
	'iRParam':10,
	'mvParam':10,
	'fuzzRoot':10,
	'MAXELEMS':10,
	'MAXLIST':10,
	'MAXCYCLES':10,
	'MAXLISTENERS':10,
	'events':10,
	'standardAttributes':10,
	'svgAttributes':10,
	'methods':10,
	'crawl_properties':10,
	'shuffleParam':10,
	'call_methods':10,
	'tweak_properties':10,
	'maybe_add_ref':10,
	'RBool':10,
	'logPrefix':10,
	'shuffle_array':10,
	'alterInstanceElement':10,
	'crawlInstanceTree':10,
	'move':10,
	'attachEventListeners':10,
	'findInTree':10,
	'modifyDOM':10,
	'appendCluster':10,
	'aC':10,
	'iB':10,
	'rM':10,
	'rndElt':10,
	'R':10,
	'makeSetAttribute':10,
	'makeCommand':10,
	'createElemRange':10,
	'createRandomString':10,
	'createRandomFloat':10,
	'createRandomULong':10,
	'createRandomUShort':10,
	'createMethodParameters':10,
	'aMethod':10,
	'init':10,
	'buildRefMatrix':10,
	'spray':10,
	'boom':10,
	'CollectGarbage':10,
	'collectReferences':10,
	'buildSupportStructures':10,
	'createNodeIterator':10,
	'createTreeWalker':10,
	'fuzz':10,
	'buildDocumentTree':10,
	'addRandomElement':10,
	'tweakStandardAttributes':10,
	'tweakCustomAttributes':10,
	'isInDoc':10,
	'startFuzzing':10,
	'reload':10,
	'fireEvent':10,
	'evEH':10,
	'moEH':10,
	'mutateDOM':10,
	'setupPool':10,
	'createRanges':10,
	'simpleSource':10,
	'randomThing':10,
	'names':10,
	'chars':10,
	'gradientIDs':10,
	'patternIDs':10,
	'pserverIDs':10,
	'gradientRefs':10,
	'patternRefs':10,
	'pserverRefs':10,
	'symbolIDs':10,
	'symbolRefs':10,
	'svgIDs':10,
	'svgRefs':10,
	'groupIDs':10,
	'groupRefs':10,
	'defsIDs':10,
	'textIDs':10,
	'textRefs':10,
	'pathIDs':10,
	'pathRefs':10,
	'markerIDs':10,
	'markerRefs':10,
	'anythingRefs':10,
	'charsets':10,
	'URIs':10,
	'numbers':10,
	'lengths':10,
	'smallLengths':10,
	'numbersWithUnits':10,
	'relations':10,
	'mimeTypes':10,
	'texts':10,
	'colors':10,
	'percents':10,
	'opacities':10,
	'scriptcode':10,
	'booleans':10,
	'angles':10,
	'transforms':10,
	'paints':10,
	'longThing':10,
	'commonAttributes':10,
	'attributes':10,
	'elements':10,
	'attributeList':10,
	'totallyRandomAttr':10,
	'elementList':10
  };
  
var objParam;
var addParam;
var useParam;
var appParam;
var fuzzParam;
var tkParam;
var msParam;
var elParam;
var tweakParam;
var callParam;
var crawlParam;
var iBParam1;
var iBParam2;
var aCParam1;
var aCParam2;
var rMParam;
var shuffleParam;
targetStack=[];
add_set = [];
cur_set = [];
new_set = [];
crawl_history = [];

globalDepth=-1;
interesting_vals = [
  0, 1, 1e6, -1e6, 1e-6, 1e100, null, undefined, 'pink', 'screen', 'Infinity', false, true, 4500000000, 2200000000, -2200000000, -4500000000,  "undefined", 
  "null", "true", "false", "'green'", "'tuesday'", "[]", "{}", "<foo/>", "n1","n1.length", "n1.length-1", "n1.__proto__","n1.__parent__","n1.prototype",  "n1.constructor", "n1.call","n1.apply","n1.toSource()","n1.toString()","n1.toSource","n1.toString","('' + n1)","uneval(n1)","eval(n1)","eval(n1, $)",   "(n1 instanceof $)", "0",  "1", "0xffffffff", "0x10000000", "0x04000000", "0x01000000", "-1", "-4", "-10000000", "10000000", "\"0%\"", "\"100%\"",  "\"1000%\"", "\"-1%\"", "(3/0)", "(0/0)", "(-3/0)", "\"%s%s%s%s%s%s%s%s%s\"","\"%n%n%n%n%n%n%n%n%n\"", "\"\\0\"","\"\\n\"", "\"\"",  "doc.createTextNode(n1)",];

  //commands=["2D-Position","backColor","bold","clearAuthenticationCache","contentReadOnly","copy","createBookmark","createLink","cut","decreaseFontSize","delete","enableInlineTableEditing","enableObjectResizing","fontName","fontSize","foreColor","formatBlock","heading","hiliteColor","increaseFontSize","indent","insertBrOnReturn","insertButton","insertFieldset","insertHorizontalRule","insertHTML","insertIFrame","insertImage","insertInputButton","insertInputCheckbox","insertInputFileUpload","insertInputHidden","insertInputImage","insertInputPassword","insertInputRadio","insertInputReset","insertInputSubmit","insertInputText","insertMarquee","insertOrderedList","insertParagraph","insertSelectDropdown","insertSelectListbox","insertTextArea","insertUnorderedList","italic","justifyCenter","justifyFull","justifyLeft","justifyRight","liveResize","multipleSelection","outdent","overWrite","print","redo","refresh","removeFormat","saveAs","selectAll","strikeThrough","styleWithCSS","subscript","superscript","underline","undo","unlink","unselect","useCSS"];

  commands=["2D-Position","backColor","bold","clearAuthenticationCache","contentReadOnly","createBookmark","decreaseFontSize","delete","enableInlineTableEditing","enableObjectResizing","fontName","fontSize","foreColor","formatBlock","heading","hiliteColor","increaseFontSize","indent","insertBrOnReturn","insertButton","insertFieldset","insertHorizontalRule","insertHTML","insertIFrame","insertInputButton","insertInputCheckbox","insertInputFileUpload","insertInputHidden","insertInputImage","insertInputPassword","insertInputRadio","insertInputReset","insertInputSubmit","insertInputText","insertMarquee","insertOrderedList","insertParagraph","insertSelectDropdown","insertSelectListbox","insertTextArea","insertUnorderedList","italic","justifyCenter","justifyFull","justifyLeft","justifyRight","liveResize","multipleSelection","outdent","overWrite","redo","refresh","removeFormat",,"strikeThrough","styleWithCSS","subscript","superscript","underline","undo","unlink","useCSS"];
  
  events=['onabort','onafterprint','onaudioprocess','onbeforeprint','onbeforeunload','onbeginEvent','onblocked','onblur','oncached','oncanplay','oncanplaythrough','onchange','onchargingchange','onchargingtimechange','onchecking','onclick','onclose','oncomplete','oncompositionend','oncompositionstart','oncontextmenu','oncopy','oncustom','oncut','ondblclick','ondevicelight','ondevicemotion','ondeviceorientation','ondeviceproxymity','ondischargingtimechange','onpropertychange','onpropertychange','onpropertychange','onpropertychange','onDOMContentLoaded','onDOMElementNameChanged','onfocus','ondownloading','ondrag','ondragend','ondragenter','ondragleave','ondragover','ondragstart','ondrop','ondurationchange','onemptied','onended','onendEvent','onerror','onfocus','onfocusin','onfocusout','onfullscreenchange','onfullscreenerror','onhashchange','oninput','oninvalid','onkeydown','onkeypress','onkeyup','onlevelchange','onload','onloadeddata','onloadedmetadata','onloadend','onloadstart','onmessage','onmousedown','onmouseenter','onmouseleave','onmousemove','onmouseout','onmouseover','onmouseup','onnoupdate','onopen','onorientationchange','onpagehide','onpageshow','onpaste','onpause','onpointerlockchange','onpointerlockerror','onplay','onplaying','onpopstate','onprogress','onratechange','onreadystatechange','onrepeatEvent','onresize','onreset','onscroll','onseeked','onseeking','onselect','onshow','onstalled','onstorage','onsubmit','onsuccess','onsuspend','ontimeout','ontimeupdate','ontouchcancel','ontouchend','ontouchenter','ontouchleave','ontouchmove','ontouchstart','ontransitionend','onunload','onupdaterady','onupgradeneeded','onuserproximity','onversionchange','onvisibilitychange','onvolumechange','onwaiting'];

HTMLElements = ["CANVAS","ARTICLE","ASISE","B","BDI","BDO", "BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CITE","COL","CODE","COMMAND","DATALIST","DD","DEL","DETAILS","DFN","DL","DT", "EM","STYLE","FIELDSET","FIGCAPTION","SCRIPT", "EMBED","FIGURE","FOOTER","HEADER","HGROUP","HR","I","INPUT","INS","KEYGEN","KBD","LEGEND","MARK","MENU","METER","NAV","NOSCRIPT","OPTGROUP","OUTPUT","P","PARAM","PRE","PROGRESS","Q","RP","RT","RUBY","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","SUP","TH","THEAD","TIME","OBJECT","IFRAME","TEXTAREA","TRACK","U","VAR","WBR","FORM","A","BODY","HTML","DIV","TABLE","AREA","TD","TR","LINK","BASE","FONT","HEAD","IMG","MAP","META","OL","LI","TBODY","TITLE","H1","BLINK","!DOCTYPE","AREA","COL","SPAN","FRAMESET","FRAME","UL","OPTION","NOFRAMES","TFOOT","XMP","ISINDEX","CENTER","HR","LABEL","OPTGROUP","AUDIO","VIDEO","TEMPLATE","SVG"];


standardAttributes = ['nodeName','nodeValue','nodeType','childNodes','location','name','opener','URL','onbeforeunload','onunload','innerHTML','outerHTML','innerText','textContent','Components','controllers','lastChild','previousSibling','previousElementSibling','parentNode','parentTextEdit','parentElement','ownerDocument','document' ,'cloneNode','open','close','print','nextNode','previousNode',"id", "hideme", "mathbackground", "mathvariant"];


propagationPath = [];
dirtyNodes=[];
tagAggregation=[];
allObservers=[];
allRanges=[];
ni=null;
tw=null;

var HTML_NS = "http://www.w3.org/1999/xhtml";

var names =    [  "a",  "b",  "c",  "d",  "e",  "f",  "g", "e", "f", "g","h","i","l","m","n","o","p","1","2","3","4","5","6","7","8","9" ];
var chars = names;
var namerefs = [ "#a",  "#b",  "#c",  "#d",  "#e",  "#f",  "#g", "#e", "#f", "#g", "#h", "#i", "#l", "#m", "#n", "#o", "#p", "#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8", "#9" ];

var gradientIDs = function() { var localref= "grad" + R(10);  ref.push(localref); return localref;};
var patternIDs = function() { var localref= "pat" + R(10); ref.push(localref); return localref;};
var pserverIDs = [gradientIDs, patternIDs];
var gradientRefs = function() { return "url(#" + randomThing(ref) +")" ; };
var patternRefs = function() { return "url(#" + randomThing(ref)+")" ; };
var pserverRefs = function() { return "url(#" + randomThing(ref)+")" ; };
var symbolIDs = function() { var localref ="symb" + R(10);ref.push(localref); return localref; };
var symbolRefs = function() { return "#" + randomThing(ref) ; };
var svgIDs = function() { var localref ="svg" + R(10);ref.push(localref); return localref; };
var svgRefs = function() { return "#" + randomThing(ref) ; };
var groupIDs = function() { var localref ="group" + R(10);ref.push(localref); return localref; };
var groupRefs = function() { return "#" + randomThing(ref) ; };
var defsIDs = function() { var localref ="defs" + R(10);ref.push(localref); return localref; };
var textIDs = function() { var localref= "text" + R(10); ref.push(localref); return localref; };
var textIDs = function() { var localref= "text" + R(10); ref.push(localref); return localref; };
var textRefs = function() { return "url(#" + randomThing(ref)+")" ; };
var pathIDs = function() { var localref= "path" + R(10);ref.push(localref); return localref; };
var pathRefs = function() { return "url(#" + randomThing(ref)+")" ; };
var markerIDs = function() { var localref= "marker" + R(10); ref.push(localref); return localref;};
var markerRefs = function() { return "url(#" + randomThing(ref)+")" ; };
var anythingRefs = function() { return "url(#" + randomThing(ref)+")" ; };
var charsets = [ "UTF-8", "ISO-8859-1" ];
var URIs = [
  ["http://www.squarefree.com/", "http://www.squarefree.com/feed"], 
  ["#a", "#b"], 
  "data:text/html,", 
  [ "javascript:5555", "javascript:'QQQQ' + String.fromCharCode(0) + 'UUUU'"], 
  "http://www.mozilla.org/status/tree.gif"
  ];
var numbers = [-2, -1, 0, "-0", "+0", 0.5, 1, "+1", 2, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000];
var lengths = [.1, 1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000, "20%", "50%", "80%", "100%"]; 
var smallLengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, lengths];
function numbersWithUnits() { return rndElt(numbers) + rndElt(["px", "em", "pt", "%", ""]) }
var relations = ["alternate"];
var mimeTypes = ["text/html", "text/plain", "text/css", "text/javascript", "application/rss+xml"];
var texts = ["", "foo", "bar", "baz", "zap", "Abbey\nRoad", 'QQQQ' + String.fromCharCode(0) + 'UUUU'];
var colors = ["lime", "red", "blue", "#CCC", "black"];
var percents = ["0%", "-10%", "50%", "80%", "99.999%", "100%", "120%"];
var scriptcode = ["var t = event.originalTarget; if(t) { dumpln('script 1 called! ' + t.tagName + ' ' + event.type); t.parentNode.removeChild(t); }",
  "var t = event.originalTarget; if(t) { dumpln('script 2 called! ' + t.tagName + ' ' + event.type); var p = t.parentNode; p.parentNode.removeChild(p); }" ];
var booleans = ["true", "false"];
var tableAligns = ["top", "bottom", "center", "baseline", "axis"];
function tableAlignAttr() { return rndElt(tableAligns) + rndElt(["", " " + rndElt(numbers)]); }
var horizAligns = ["left", "center", "right"];
var lines = ["none", "solid", "dashed"];
var opacities = ["0", ".2", ".3", ".5", ".8", "1"];
var angles = ["0deg", "30deg", "45deg", "60deg", "1rad", "90deg", "180deg", "270deg", "360deg"];
var transforms = [["translate(20,2.5)", "rotate(10)", "skewY(30)", "skewX(30)", "scale(3)", "scale(.2)"], ""];
var paints = ["grad1", [["none", "inherit", "currentColor"], colors], pserverRefs];
var strCSS="";
var selector="";

// crossfuzz methods

function crawl_properties(path, target, level, add_set,depth) {
	try{	
		add_set=addParam;
		
		target=crawlParam;
		var members = [];
		var cur_fan = 0;
		//var ret_seed = R(32677);
		if (level > MAX_LEVEL) {
			return;
		}
		try {
			for (var name in target) {
				if (object_blacklist[name] != 10) members.push(name);
			}	
		} catch (e) {
			return;
		}
		if (level == 0) cur_id = Math.random();
		try {
			if (target.fuzz1_visited == cur_id) {
				return;
			}
			target.fuzz1_visited = cur_id;
		} catch (e) { }
		  
		shuffleParam=members;
		//console.log("Crawl-Members prima:"+members);
		shuffle_array(members,depth);
		//console.log("Crawl-Members dopo:"+members);
		
		for (var num in members) {
			var name = members[num];
			var cur_value = null;
			if (name == '0' || (object_blacklist[name] != undefined && level >= object_blacklist[name])) {
			  continue;
			}
			try {
				if (object_blacklist[name]!=10){
					cur_value = eval('target.' + name);
					
					
				}	
			} catch (e) {}
			if (cur_value != null) {
			  if (typeof cur_value != 'function'){
				try{
					objParam=cur_value;
				}catch(e){}
				addParam=add_set;
				maybe_add_ref("target."+name, add_set,depth);
				
			  }		
			  if (typeof cur_value == 'object' && cur_fan < FAN_LIMIT) {
				try{
					cur_fan++;
					crawlParam=cur_value;
					
					addParam=add_set;
			
					crawl_properties(path + '.' + name, cur_value, level + 1, add_set,depth);
					
				}catch(e){}	
			  }
			}
		}
		////alert(add_set.length);
	}catch(e){console.log("Error in crawling:"+e.message);}	
	
}



function call_methods(path, target, level, ret_level, use_set, add_set,depth) {
	try{	
		use_set=useParam;
		add_set=addParam;
		target=callParam;
		var members = [];
		var cur_fan = 0;
		var ret_seed = R(32677);
		if (level > MAX_LEVEL) {
			return;
		}
		if (ret_level > MAX_RET_LEVEL) {
			return;
		}
		try {
			for (var name in target) {
				if (object_blacklist[name] != 10) members.push(name);
			}	
		} catch (e) {
			return;
		}
		/* Make sure this is not a duplicate. */
		if (level + ret_level == 0) cur_id = Math.random();
		try {
			if (target.fuzz3_visited == cur_id) {
				return;
			}
			target.fuzz3_visited = cur_id;
		} catch (e) { }
		shuffleParam=members;
		//console.log("CallMethod-Members prima:"+members);
		shuffle_array(members,depth);
		//console.log("CallMethod-Members dopo:"+members);
		for (var num in members) {
			var name = members[num];
			var cur_value = null;
			if (name == '0' || (object_blacklist[name] != undefined && level >= object_blacklist[name])) {
				continue;
			}
			try {
				if (object_blacklist[name] != 10){
					cur_value = eval('target.' + name);
				}	
			} catch (e) { 
				continue; 
			}	
			if (cur_value == null) continue;
			
			if (R(CALL_ODDS) == 0 && typeof cur_value == 'function') {
				var ret_value = null;
				var log_par_str="";
				var par_str = "";
				/* Construct parameters for the call */
				for (var i = 0; i < PARAMS; i++) {
					if (use_set.length != 0 && R(INTER_ODDS) != 0){
						ri=R(use_set.length);
						log_par_str+='use_set['+ri+']';
						par_str += 'use_set[' + ri + ']';
					}else{
						ri=R(interesting_vals.length);
						log_par_str+=''+interesting_vals[ri]+'';
						par_str += 'interesting_vals['+ri+']';
					}	
					if (i + 1 != PARAMS) {
						log_par_str+=",";
						par_str += ", ";
					}	
				}
				////alert(log_par_str);
				try {
					if (object_blacklist[name] != 10){
						ret_value = eval('target.' + name + '(' + par_str + ')');
						
					}	
				} catch (e) {}
				if (ret_value != null) {
					if (object_blacklist[ret_value] != 10){
						if (typeof ret_value != 'function') {
							
								objParam=ret_value;
								addParam=add_set;
								maybe_add_ref(ret_value, add_set,depth);
							
											
						}	
						/* Recurse into returned objects. */
						if (typeof ret_value == 'object' && cur_fan < FAN_LIMIT) {
							cur_fan++;
							callParam=ret_value;
							useParam=use_set;
							addParam=add_set;
							call_methods(path + '.' + name  , ret_value, level, ret_level + 1, use_set, add_set,depth);
							tweakParam=ret_value;
							useParam=use_set;
							tweak_properties(path + '.' + name , ret_value, level + ret_level + 1, use_set,depth); 
						}
					}	
				}
			}	
			
			/* Recurse into crawled objects. */
			if (typeof cur_value == 'object' && cur_fan < FAN_LIMIT) {
				cur_fan++;
				callParam=cur_value;
				useParam=use_set;
				addParam=add_set;
				call_methods(path + '.' + name, cur_value, level + 1, ret_level, use_set, add_set,depth);
				
			}
		}
	}catch(e){console.log("Error in callMethos:"+e.message);}		
	
}


function tweak_properties(path, target, level, use_set,depth) {
	try{	
		target=tweakParam;
		use_set=useParam;

		var members = [];
		var cur_fan = 0;
		var ret_seed = R(32675);
		if (level > MAX_LEVEL) {
			return;
		}
		try {
			for (var name in target) {
				if (object_blacklist[name] != 10) members.push(name);
			}	
		} catch (e) {
			return;
		}
		/* Make sure this is not a duplicate. */
		if (level == 0) cur_id = Math.random();
		try {
			if (target.fuzz2_visited == cur_id) {
				return;
			}
			target.fuzz2_visited = cur_id;
		} catch (e) { }
		shuffleParam=members;
		shuffle_array(members,depth);
		for (var num in members) {
			var name = members[num];
			var orig_value = null;
			if (name == '0' ||  (object_blacklist[name] != undefined && level >= object_blacklist[name])) {
				continue;
			}
			try {
				orig_value = eval('target.' + name);
				
			} catch (e) { }
			/* Leave functions alone!!! */
			if (typeof orig_value == 'function') continue;
			
			if (R(TWEAK_ODDS) == 0)
				try {
					if (object_blacklist[name] != 10){
						if (use_set.length != 0 && R(INTER_ODDS) != 0){
							ri=R(use_set.length);
							eval('target.' + name + ' = use_set[' + ri + ']');
							
						}	
						else{
							ri= R(interesting_vals.length);
							eval('target.' + name + ' = interesting_vals[' + ri + ']');
					
							
						}
					}	
				} catch (e) {}
			
			
			if (object_blacklist[orig_value] !=10)
				if (orig_value != null && typeof orig_value == 'object' && cur_fan < FAN_LIMIT) {
					cur_fan++;
					tweakParam= orig_value;
					useParam=use_set;
					tweak_properties(path + '.' + name, orig_value, level + 1, use_set,depth);
					
				}
		}
	  //init_genrand(ret_seed);
	 }catch(e){console.log("Error in Tweaking:"+e.message);}		
}


function maybe_add_ref(obj, add_set,depth) {
  ////logger.log(logPrefix(depth)+"obj=objParam;","capicoju",1);
  obj=objParam;
  
  //////logger.log(logPrefix(depth)+"//**obj="+obj,"capicoju",1);
  //////logger.log(logPrefix(depth)+"console.log('obj='+obj);","capicoju",1);
  
  
  //////logger.log(logPrefix(depth)+"add_set=addParam;","capicoju",1);
  add_set=addParam;
  if (R(REF_ODDS) != 0) return;
  /* Be more conservative about adding non-objects. */
  if (typeof obj != 'object' && R(NONOBJ_ODDS) != 0) return;
  try {
    try {
      if (obj.ref_visited) return;
      obj.ref_visited = 1;
    } catch (e) { }
    if (add_set.length > MAX_REFS){
      ri=R(MAX_REFS);
	  //////logger.log(logPrefix(depth)+"add_set["+ri+"] = obj; ","capicoju",1);
	  add_set[ri] = obj; 
	}  
    else{
      //////logger.log(logPrefix(depth)+"add_set.push(obj);","capicoju",1);
	  add_set.push(obj);
	}  
	
	//////logger.log(logPrefix(depth)+"//**add_set="+add_set,"capicoju",1);
	//////logger.log(logPrefix(depth)+"console.log('add_set='+add_set);","capicoju",1);
	
  } catch (e) { }
}


function shuffle_array(arr,depth) {
	 ////////logger.log(logPrefix(depth)+" var arr=shuffleParam;","capicoju",1);
  arr=shuffleParam;
  var cnt = arr.length;
  ////alert(arr.join("\n"));  	
  while (cnt--) {
	r1=R(arr.length);
	r2=R(arr.length);
	//////logger.log(logPrefix(depth)+" var src ="+ r1+", dst ="+ r2+";","capicoju",1);
    var src = r1, dst = r2;
	//////logger.log(logPrefix(depth)+" var tmp = arr[src][1];","capicoju",1);
    var tmp = arr[src];
	////alert(tmp);
	//////logger.log(logPrefix(depth)+"   arr[src][1] = arr[dst][1];","capicoju",1);
    arr[src] = arr[dst];
	//////logger.log(logPrefix(depth)+"   arr[dst][1] = tmp;","capicoju",1);
    arr[dst]= tmp;
  }
    ////alert(arr.join("\n"));  	

}	

//end crossfuzz//////////////////////////////////////


//utils *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

	function mpaddedAttr() { return rndElt(["+", "-", ""]) + randomThing(numbers) + rndElt(["%", "px", "em", ""]) + rndElt([" width", " height", ""]) } 

	function longThing()
	{
	  var x = "A"; 
	  for (var i = 0; i < 14; ++i)
		x = x + x;
	  return x; 
	}

	function randomThing(obj)
	{
	  if (obj == null)
		return null;
	  if (typeof obj == "function")
		return obj();
	  if (typeof obj == "string")
		return obj; // not to be treated as an array :)
	  if (obj.length) { // non-empty array
		var x = rndElt(obj);
		//dumpln(x);
		return randomThing(x)
	  }
	  if (obj.length === 0)
		return null;
	  // Otherwise, it should be a number, etc.
	  return obj;
	}

	function several(randomThingArg){
	  return function() { 
		var num = randomThing([0, 1, [2, 4, 8, 16, 1024]]);
		var s = "";
		for (var i = 0; i < num; ++i) {
		  if (i != 0)
			s += " ";
		  s += randomThing(randomThingArg);
		}
		// //alert(s);
		return s;
	  }
	}

	function logPrefix(depth){
		prefix="";
		if (depth>=0) prefix="//depth="+depth+"#";
		return prefix;
	}

	function R( x ){
		return Math.floor( Math.random() * x );
	}

	
	function RBool(){
		r=R(2);
		////alert(r);
		if (r==0) {return true;}
		else {return false;}
	}



	eventTypes=["moEH","evEH","obEH"];
	



//////////// LOGICAL SUPPORT STRUCTURES//////////////////////////////

function createNodeIterator(depth){
	 try{
		//////logger.log(logPrefix(depth)+"ni = document.createNodeIterator(document.body, NodeFilter.SHOW_ALL, null, false);","capicoju",1);
		var ri=R(allNodes.length);
		ni = document.createNodeIterator(allNodes[ri], NodeFilter.SHOW_ALL, null, false);
		}
	catch (e) {console.log("error in createNodeIterator:"+e.message);}
}

function createTreeWalker(depth){
	try{
		//////logger.log(logPrefix(depth)+"tw = document.createTreeWalker(document.body, NodeFilter.SHOW_ALL, null, false);","capicoju",1);
		var ri=R(allNodes.length);
		tw = document.createTreeWalker(allNodes[ri], NodeFilter.SHOW_ALL, null, false);
	}
	catch (e) {console.log("error in createTreeWalker:"+e.message);}
}


function moveTreeWalker(depth){
	////alert(1);
	try{
		if (tw!=null){
			rMoves=R(10);
			for (i=0; i<rMoves; i++){
			
				rm=R(7);
				switch(rm){
					case 0:
						//////logger.log(logPrefix(depth)+ "tw.nextNode();","ndujaL",1 );
						tw.nextNode();
						break;
					case 1:
						//////logger.log(logPrefix(depth)+ "tw.previousNode();","ndujaL",1 );
						tw.previousNode();
						break;
					case 2:
						//////logger.log(logPrefix(depth)+ "tw.previousSibling();","ndujaL",1 );
						tw.previousSibling();
						break;
					case 3:
						//////logger.log(logPrefix(depth)+ "tw.nextSibling();","ndujaL",1 );
						tw.nextSibling();
						break;
					case 4:
						//////logger.log(logPrefix(depth)+ "tw.firstChild();","ndujaL",1 );
						tw.firstChild();
						break;
					case 5:
						//////logger.log(logPrefix(depth)+ "tw.lastChild();","ndujaL",1 );
						tw.lastChild();
						break;
					case 6:
						//////logger.log(logPrefix(depth)+ "tw.parentNode();","ndujaL",1 );
						tw.parentNode();
						break;	
				}
			}
			console.log("Move tw current node:"+tw.currentNode.tagName);	
		}
	}
	catch (e) {
		console.log("MoveTreeWalker:"+e.message);
		//////logger.log(logPrefix(depth)+ "//Exception in moveTreeWalker ","ndujaL",1 );
	}
}		


function moveIterator(depth){
	try{
		if (ni!=null){
			rMoves=R(10);
			for (i=0; i<rMoves; i++){
			
				rm=R(2);
				switch(rm){
					case 0:
						//////logger.log(logPrefix(depth)+ "ni.nextNode();","ndujaL",1 );
						ni.nextNode();
						break;
					case 1:
						//////logger.log(logPrefix(depth)+ "ni.previousNode();","ndujaL",1 );
						ni.previousNode();
						break;
				
				}
			}
			console.log("Move NI current node:"+ni.referenceNode.tagName);	
		}	
	
	}
	catch (e) {
		console.log("MoveIterator:"+e.message);
		//////logger.log(logPrefix(depth)+ "//Exception in moveIteration ","ndujaL",1 );
	}
}


function createSupportStructures(depth){
	try{
		
		createNodeIterator(depth);
		createTreeWalker(depth);
	
	}catch(e){console.log("Support structures:"+e.message);}
}



///////////////////////////////////

	function init(depth){
		try{
			//alert(1);
			//////logger = new //////logger("sentinel");
			//////logger.starting();
			allNodes=[];
			console.log("Setup pool");
			setupPool();
			initXhr();
			console.log("Fine setup pool");
			createSupportStructures(-1);
			createRanges(-1);
			
			cycle();
			setTimeout(function (){reload();},1000);
			
			
		}catch(e){console.log(e.message);}
	
	}
	
	
	function setupPool(){
			//alert("pool);
			for (var k=0;k<MAXELEMS;k++){
				try{
						ri=R(HTMLElements.length);
						r=HTMLElements[ri];
				
					
					for (var z=0;z<R(3);z++){
						
						newNode=document.createElement(r);//NS(NS,r);
						allNodes.push(newNode);
						
						if (allNodes.length==1) root=document.body;
						else
							switch(R(2)){
								case 0:
									rb=R(allNodes.length);
									root=allNodes[rb];
									break;
								case 1:
									root=document.body;
									break;
							}		
						
						root.appendChild(newNode);
						
											
						et="evEH";
						
						if (R(3)>=1) {
							initializeParam=newNode;
							newNode.setCapture();
							initObservers(newNode,et, 0);
						}	
						console.log("initilized listener");
						
					
					}
					
				}catch(e){console.log("error in setupPool: "+e.message+" "+e.lineNumber);}
			
			}
	
	}
	
		
	
function nativeTreeWalker(depth) {
	//////logger.log(logPrefix(depth)+"var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);","ajalaculonna",1);   
	var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    //////logger.log(logPrefix(depth)+"var node;","ajalaculonna",1);   
	var node;
	//////logger.log(logPrefix(depth)+"var textNodes = [];","ajalaculonna",1);   
    var textNodes = [];
    while(node = walker.nextNode()) {
       //////logger.log(logPrefix(depth)+"textNodes.push(node.nodeValue);","ajalaculonna",1);   
	   textNodes.push(node.nodeValue);
    }
	return textNodes;
}


	function fireEvent(target,eventType,depth){
		//////logger.log(logPrefix(depth)+"target=targetParam;","ajalaculonna",1);
		target=targetParam;
		//////logger.log(logPrefix(depth)+"eventType=eventParam;","ajalaculonna",1);
		eventType=eventParam;
		
		//////logger.log(logPrefix(depth)+"thisEvent = document.createEvent('Event');","ajalaculonna",1);
		thisEvent = document.createEvent("Event");
		rb=RBool();
		switch(eventType){
			case 'abort':
				//////logger.log(logPrefix(depth)+"var thisEvent = document.createEvent('UIEvent');","ajalaculonna",1);
				var thisEvent = document.createEvent("UIEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initUIEvent('abort',"+rb+", true, window, 2);","ajalaculonna",1);
				thisEvent.initUIEvent('abort', rb, true, window, 2);
			break;
			case 'activate':
				//////logger.log(logPrefix(depth)+"var thisEvent = document.createEvent('UIEvent');","ajalaculonna",1);
				var thisEvent = document.createEvent("UIEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initUIEvent('activate',"+rb+", true, window, 2);","ajalaculonna",1);
				thisEvent.initUIEvent('activate', rb, true, window, 2);
			break;
			case 'beforeactivate':
				//////logger.log(logPrefix(depth)+"var thisEvent = document.createEvent('UIEvent');","ajalaculonna",1);
				var thisEvent = document.createEvent("UIEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initUIEvent('beforeactivate',"+rb+", true, window, 2);","ajalaculonna",1);
				thisEvent.initUIEvent('beforeactivate', rb, true, window, 2);
			break;
			case 'beforedeactivate':
				//////logger.log(logPrefix(depth)+"var thisEvent = document.createEvent('UIEvent');","ajalaculonna",1);
				var thisEvent = document.createEvent("UIEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initUIEvent ('beforedeactivate',"+ rb +", true, window, 2);","ajalaculonna",1);
				thisEvent.initUIEvent('beforedeactivate', rb, true, window, 2);
			break;
			case 'deactivate':
				//////logger.log(logPrefix(depth)+"var thisEvent = document.createEvent('UIEvent');","ajalaculonna",1);
				var thisEvent = document.createEvent("UIEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initUIEvent('deactivate',"+ rb +", true, window, 2);","ajalaculonna",1);
				thisEvent.initUIEvent('deactivate', rb, true, window, 2);
			break;
			case 'DOMActivate':
				//////logger.log(logPrefix(depth)+"var thisEvent = document.createEvent('UIEvent');","ajalaculonna",1);
				var thisEvent = document.createEvent("UIEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initUIEvent('DOMActivate',"+ rb +", true, window, 2);","ajalaculonna",1);
				thisEvent.initUIEvent('DOMActivate', rb, true, window, 2);
			break;
			case 'DOMFocusIn':
				//////logger.log(logPrefix(depth)+"var thisEvent = document.createEvent ('UIEvent');","ajalaculonna",1);
				var thisEvent = document.createEvent("UIEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initUIEvent ('DOMFocusIn',"+ rb +", true, window, 2);","ajalaculonna",1);
				thisEvent.initUIEvent('DOMFocusIn', rb, true, window, 2);
			break;
			case 'DOMFocusOut':
				//////logger.log(logPrefix(depth)+"var thisEvent = document.createEvent ('UIEvent');","ajalaculonna",1);
				var thisEvent = document.createEvent("UIEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initUIEvent ('DOMFocusOut',"+ rb +", true, window, 2);","ajalaculonna",1);
				thisEvent.initUIEvent('DOMFocusOut', rb, true, window, 2);
			break;
			case 'overflow':
				//////logger.log(logPrefix(depth)+"var thisEvent = document.createEvent ('UIEvent');","ajalaculonna",1);
				var thisEvent = document.createEvent("UIEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initUIEvent ('overflow',"+ rb +", true, window, 2);","ajalaculonna",1);
				thisEvent.initUIEvent('overflow', rb, true, window, 2);
			break;
			case 'resize':
				//////logger.log(logPrefix(depth)+"var thisEvent = document.createEvent ('UIEvent');","ajalaculonna",1);
				var thisEvent = document.createEvent("UIEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initUIEvent ('resize',"+ rb +", true, window, 2);","ajalaculonna",1);
				thisEvent.initUIEvent('resize', rb, true, window, 2);
			break;
			case 'scroll':
				//////logger.log(logPrefix(depth)+"var thisEvent = document.createEvent ('UIEvent');","ajalaculonna",1);
				var thisEvent = document.createEvent("UIEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initUIEvent ('scroll',"+ rb +", true, window, 2);","ajalaculonna",1);
				thisEvent.initUIEvent('scroll', rb, true, window, 2);
			break;
			case 'select':
				//////logger.log(logPrefix(depth)+"var thisEvent = document.createEvent ('UIEvent');","ajalaculonna",1);
				var thisEvent = document.createEvent("UIEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initUIEvent ('select',"+ rb +", true, window, 2);","ajalaculonna",1);
				thisEvent.initUIEvent('select', rb, true, window, 2);
			break;
			case 'underflow':
				//////logger.log(logPrefix(depth)+"var thisEvent = document.createEvent ('UIEvent');","ajalaculonna",1);
				var thisEvent = document.createEvent("UIEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initUIEvent ('underflow',"+ rb +", true, window, 2);","ajalaculonna",1);
				thisEvent.initUIEvent('underflow', rb, true, window, 2);
			break;
			case 'afterprint':
				//////logger.log(logPrefix(depth)+"var thisEvent = document.createEvent ('UIEvent');","ajalaculonna",1);
				var thisEvent = document.createEvent("UIEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent ('afterprint',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('afterprint', rb, true);
			break;
			
			case 'audioprocess':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent ('audioprocess',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('audioprocess', rb, true);
			break;
			case 'beforeprint':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent ('beforeprint',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('beforeprint', rb, true);
			break;
			case 'beforeunload':
				/*if (document.createEvent('BeforeUnloadEvent')){
					//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('BeforeUnloadEvent');","ajalaculonna",1);
					thisEvent=document.createEvent('BeforeUnloadEvent');
				}	
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('beforeunload',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('beforeunload', rb, true);*/
			break;
			case 'beginEvent':
				//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('TimeEvent');","ajalaculonna",1);
				thisEvent=document.createEvent("TimeEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initTimeEvent('beginEvent', document.defaultView, 0);","ajalaculonna",1);
				thisEvent.initTimeEvent('beginEvent', document.defaultView, 0);
			break;
			case 'blocked':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('blocked',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('blocked', rb, true);
			break;
			case 'blur':
				if (document.createEvent('FocusEvent')){
					//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('FocusEvent');","ajalaculonna",1);
					thisEvent=document.createEvent("FocusEvent");
					//////logger.log(logPrefix(depth)+"thisEvent.initFocusEvent('blur', "+rb+", true, window, null, null);","ajalaculonna",1);
					thisEvent.initFocusEvent("blur", rb, true, window, null, null);
				}
				else{
					//////logger.log(logPrefix(depth)+"thisEvent.initEvent('blur',"+ rb +", true);","ajalaculonna",1);
					thisEvent.initEvent('blur', rb, true);
				}
			break;
			case 'cached':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('cached',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('cached', rb, true);
			break;
			case 'canplay':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('canplay',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('canplay', rb, true);
			break;
			case 'canplaythrough':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('canplaythrough',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('canplaythrough', rb, true);
			break;
			case 'change':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('change',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('change', rb, true);
			break;
			case 'chargingchange':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('chargingchange',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('chargingchange', rb, true);
			break;
			case 'chargingtimechange':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('chargingtimechange',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('chargingtimechange', rb, true);
			break;
			case 'checking':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('checking',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('checking', rb, true);
			break;
			case 'click':
				//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('MouseEvent');","ajalaculonna",1);
				thisEvent=document.createEvent("MouseEvent");
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				//////logger.log(logPrefix(depth)+"thisEvent.initMouseEvent('click', "+rb+", true, window, 0,"+rsx+","+ rsy+","+ rx+","+ ry+",false, false, false, false,0, null);","ajalaculonna",1);
				thisEvent.initMouseEvent("click", rb, true, window, 0,rsx, rsy, rx, ry,false, false, false, false,0, null);
			break;
			case 'close':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('close',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('close', rb, true);
			break;
			case 'complete':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('complete',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('complete', rb, true);
			break;
			case 'compositionend':
				//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('CompositionEvent');","ajalaculonna",1);
				thisEvent=document.createEvent("CompositionEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initCompositionEvent('compositionend', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
				thisEvent.initCompositionEvent('compositionend', rb, true, document.defaultView,'','');
			break;
			case 'compositionstart':
				//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('CompositionEvent');","ajalaculonna",1);
				thisEvent=document.createEvent("CompositionEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initCompositionEvent('compositionstart', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
				thisEvent.initCompositionEvent('compositionstart', rb, true, document.defaultView,'','');
			break;
			case 'contextmenu':
				//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('MouseEvent');","ajalaculonna",1);
				thisEvent=document.createEvent("MouseEvent");
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				//////logger.log(logPrefix(depth)+"thisEvent.initMouseEvent('contextmenu', "+rb+", true, window, 0,"+rsx+","+ rsy+","+ rx+","+ ry+",false, false, false, false,0, null);","ajalaculonna",1);
				thisEvent.initMouseEvent("contextmenu", rb, true, window, 0,rsx, rsy, rx, ry,false, false, false, false,0, null);
			break;
			case 'copy':
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				if (thisEvent.initDragEvent) {
					//////logger.log(logPrefix(depth)+"thisEvent = document.createEvent('DragEvent');","ajalaculonna",1);
					thisEvent = document.createEvent("DragEvent");
					//////logger.log(logPrefix(depth)+"thisEvent.initDragEvent('copy',"+ rb+", true, window, 0,"+rsx+","+ rsy+","+ rx+","+ ry+",false, false, false, false,0, null, thisEvent.dataTransfer);","ajalaculonna",1);
					thisEvent.initDragEvent('copy', rb, true, window, 0,rsx, rsy, rx, ry, false, false, false, false, 0, null, thisEvent.dataTransfer);
				}
				else{
					//////logger.log(logPrefix(depth)+"thisEvent.initEvent('copy', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
					thisEvent.initEvent('copy', rb, true, document.defaultView,'','');
				}	
			break;
			
			case 'cut':
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				if (thisEvent.initDragEvent) {
					//////logger.log(logPrefix(depth)+"thisEvent = document.createEvent('DragEvent');","ajalaculonna",1);
					thisEvent = document.createEvent("DragEvent");
					//////logger.log(logPrefix(depth)+"thisEvent.initDragEvent('copy',"+ rb+", true, window, 0,"+rsx+","+ rsy+","+ rx+","+ ry+",false, false, false, false,0, null, thisEvent.dataTransfer);","ajalaculonna",1);
					thisEvent.initDragEvent('cut', rb, true, window, 0,rsx, rsy, rx, ry, false, false, false, false, 0, null, thisEvent.dataTransfer);
				}
				else{
					//////logger.log(logPrefix(depth)+"thisEvent.initEvent('copy', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
					thisEvent.initEvent('cut', rb, true, document.defaultView,'','');
				}
			break;
			case 'dblclick':
				//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('MouseEvent');","ajalaculonna",1);
				thisEvent=document.createEvent("MouseEvent");
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				//////logger.log(logPrefix(depth)+"thisEvent.initMouseEvent('dblclick', "+rb+", true, window, 0,"+rsx+","+ rsy+","+ rx+","+ ry+",false, false, false, false,0, null);","ajalaculonna",1);
				thisEvent.initMouseEvent("dblclick", rb, true, window, 0,rsx, rsy, rx, ry,false, false, false, false,0, null);
			break;
			case 'devicelight':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('devicelight', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
				thisEvent.initEvent('devicelight', rb, true, document.defaultView,'','');
			break;
			case 'devicemotion':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('devicemotion', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
				thisEvent.initEvent('devicemotion', rb, true, document.defaultView,'','');
			break;
			case 'deviceorientation':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('deviceorientation', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
				thisEvent.initEvent('deviceorientation', rb, true, document.defaultView,'','');
			break;
			case 'deviceproxymity':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('deviceproxymity', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
				thisEvent.initEvent('deviceproxymity', rb, true, document.defaultView,'','');
			break;
			case 'dischargingtimechange':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('dischargingtimechange', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
				thisEvent.initEvent('dischargingtimechange', rb, true, document.defaultView,'','');
			break;
			case 'DOMActivate':
				//////logger.log(logPrefix(depth)+"var thisEvent = document.createEvent ('UIEvent');","ajalaculonna",1);
				var thisEvent = document.createEvent("UIEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initUIEvent ('DOMActivate',"+ rb +", true, window, 2);","ajalaculonna",1);
				thisEvent.initUIEvent('DOMActivate', rb, true, window, 2);
			break;
			case 'DOMAttributeNameChanged':
				re=R(allNodes.length);
				//////logger.log(logPrefix(depth)+"el=allNodes["+re+"];","ajalaculonna",1);
				el=allNodes[re];
				//////logger.log(logPrefix(depth)+"thisEvent = document.createEvent('MutationEvent');","ajalaculonna",1);
				thisEvent = document.createEvent('MutationEvent');
				//////logger.log(logPrefix(depth)+"thisEvent.initMutationEvent('DOMAttributeNameChanged',"+ rb+", true,el, null , 'fooAttrValue', 'fooAttr', 2);","ajalaculonna",1);
				thisEvent.initMutationEvent('DOMAttributeNameChanged', rb, true, el, null , 'fooAttrValue', 'fooAttr', 2);
			break;
			case 'DOMAttrModified':
				re=R(allNodes.length);
				//////logger.log(logPrefix(depth)+"el=allNodes["+re+"];","ajalaculonna",1);
				el=allNodes[re];
				//////logger.log(logPrefix(depth)+"thisEvent = document.createEvent('MutationEvent');","ajalaculonna",1);
				thisEvent = document.createEvent('MutationEvent');
				//////logger.log(logPrefix(depth)+"thisEvent.initMutationEvent('DOMAttrModified',"+ rb+", true,el, null , 'fooAttrValue', 'fooAttr', 2);","ajalaculonna",1);
				thisEvent.initMutationEvent('DOMAttrModified', rb, true, el, null , 'fooAttrValue', 'fooAttr', 2);
			break;
			case 'DOMCharacterDataModified':
				textNodes=nativeTreeWalker(depth);
				re=R(textNodes.length);
				//////logger.log(logPrefix(depth)+"el=textNodes["+re+"];","ajalaculonna",1);
				el=textNodes[re];
				//////logger.log(logPrefix(depth)+"thisEvent = document.createEvent('MutationEvent');","ajalaculonna",1);
				thisEvent = document.createEvent('MutationEvent');
				//////logger.log(logPrefix(depth)+"thisEvent.initMutationEvent('DOMCharacterDataModified',"+ rb+", true,el, null , 'fooAttrValue', 'fooAttr', 2);","ajalaculonna",1);
				thisEvent.initMutationEvent('DOMCharacterDataModified', rb, true, el, null , 'fooAttrValue', 'fooAttr', 2);
			break;
			case 'DOMContentLoaded':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('DOMContentLoaded', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
				thisEvent.initEvent('DOMContentLoaded', rb, true, document.defaultView,'','');
			break;
			case 'DOMFocusIn':
				//////logger.log(logPrefix(depth)+"var thisEvent = document.createEvent ('UIEvent');","ajalaculonna",1);
				var thisEvent = document.createEvent("UIEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initUIEvent ('DOMFocusIn',"+ rb +", true, window, 2);","ajalaculonna",1);
				thisEvent.initUIEvent('DOMFocusIn', rb, true, window, 2);
			break;
			case 'DOMFocusOut':
				//////logger.log(logPrefix(depth)+"var thisEvent = document.createEvent ('UIEvent');","ajalaculonna",1);
				var thisEvent = document.createEvent("UIEvent");
				//////logger.log(logPrefix(depth)+"thisEvent.initUIEvent ('DOMFocusOut',"+ rb +", true, window, 2);","ajalaculonna",1);
				thisEvent.initUIEvent('DOMFocusOut', rb, true, window, 2);
			break;
			case 'DOMNodeInserted':
				re=R(allNodes.length);
				//////logger.log(logPrefix(depth)+"el=allNodes["+re+"];","ajalaculonna",1);
				el=allNodes[re];
				//////logger.log(logPrefix(depth)+"thisEvent = document.createEvent('MutationEvent');","ajalaculonna",1);
				thisEvent = document.createEvent('MutationEvent');
				//////logger.log(logPrefix(depth)+"thisEvent.initMutationEvent('DOMNodeInserted',"+ rb+", true,el, null , 'fooElem', 'fooAttr', 2);","ajalaculonna",1);
				thisEvent.initMutationEvent('DOMNodeInserted', rb, true, el, null , 'fooElem', 'fooAttr', 2);
			break;
			case 'DOMNodeInsertedIntoDocument':
				re=R(allNodes.length);
				//////logger.log(logPrefix(depth)+"el=allNodes["+re+"];","ajalaculonna",1);
				el=allNodes[re];
				//////logger.log(logPrefix(depth)+"thisEvent = document.createEvent('MutationEvent');","ajalaculonna",1);
				thisEvent = document.createEvent('MutationEvent');
				//////logger.log(logPrefix(depth)+"thisEvent.initMutationEvent('DOMNodeInsertedIntoDocument',"+ rb+", true,el, null , 'fooElem', 'fooAttr', 2);","ajalaculonna",1);
				thisEvent.initMutationEvent('DOMNodeInsertedIntoDocument', rb, true, el, null , 'fooElem', 'fooAttr', 2);
			break;
			case 'DOMNodeRemoved':
				re=R(allNodes.length);
				//////logger.log(logPrefix(depth)+"el=allNodes["+re+"];","ajalaculonna",1);
				el=allNodes[re];
				//////logger.log(logPrefix(depth)+"thisEvent = document.createEvent('MutationEvent');","ajalaculonna",1);
				thisEvent = document.createEvent('MutationEvent');
				//////logger.log(logPrefix(depth)+"thisEvent.initMutationEvent('DOMNodeRemoved',"+ rb+", true,el, null , 'fooElem', 'fooAttr', 3);","ajalaculonna",1);
				thisEvent.initMutationEvent('DOMNodeRemoved', rb, true, el, null , 'fooElem', 'fooAttr', 3);
			break;
			case 'DOMNodeRemovedFromDocument':
				re=R(allNodes.length);
				//////logger.log(logPrefix(depth)+"el=allNodes["+re+"];","ajalaculonna",1);
				el=allNodes[re];
				//////logger.log(logPrefix(depth)+"thisEvent = document.createEvent('MutationEvent');","ajalaculonna",1);
				thisEvent = document.createEvent('MutationEvent');
				//////logger.log(logPrefix(depth)+"thisEvent.initMutationEvent('DOMNodeRemovedFromDocument',"+ rb+", true,el, null , 'fooElem', 'fooAttr', 3);","ajalaculonna",1);
				thisEvent.initMutationEvent('DOMNodeRemovedFromDocument', rb, true, el, null , 'fooElem', 'fooAttr', 3);
			break;
			case 'DOMSubtreeModified':
				re=R(allNodes.length);
				//////logger.log(logPrefix(depth)+"el=allNodes["+re+"];","ajalaculonna",1);
				el=allNodes[re];
				//////logger.log(logPrefix(depth)+"thisEvent = document.createEvent('MutationEvent');","ajalaculonna",1);
				thisEvent = document.createEvent('MutationEvent');
				//////logger.log(logPrefix(depth)+"thisEvent.initMutationEvent('DOMSubtreeModified',"+ rb+", true,el, null , 'fooElem', 'fooAttr', 1);","ajalaculonna",1);
				thisEvent.initMutationEvent('DOMSubtreeModified', rb, true, el, null , 'fooElem', 'fooAttr', 1);
			break;
			case 'downloading':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('downloading', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
				thisEvent.initEvent('downloading', rb, true, document.defaultView,'','');
			break;
			case 'drag':
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				if (thisEvent.initDragEvent) {
					thisEvent = document.createEvent("DragEvent");
					//////logger.log(logPrefix(depth)+"thisEvent.initDragEvent('drag',"+ rb+", true, window, 0,"+rsx+","+ rsy+"," +rx+","+ ry+", false, false, false, false, 0, null, thisEvent.dataTransfer);","ajalaculonna",1);
					thisEvent.initDragEvent('drag', rb, true, window, 0,rsx, rsy, rx, ry, false, false, false, false, 0, null, thisEvent.dataTransfer);
				}
				else{
					//////logger.log(logPrefix(depth)+"thisEvent.initEvent('drag', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
					thisEvent.initEvent('drag', rb, true, document.defaultView,'','');
				}
			break;
			case 'dragend':
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				if (thisEvent.initDragEvent) {
					thisEvent = document.createEvent("DragEvent");
					//////logger.log(logPrefix(depth)+"thisEvent.initDragEvent('dragend',"+ rb+", true, window, 0,"+rsx+","+ rsy+"," +rx+","+ ry+", false, false, false, false, 0, null, thisEvent.dataTransfer);","ajalaculonna",1);
					thisEvent.initDragEvent('dragend', rb, true, window, 0,rsx, rsy, rx, ry, false, false, false, false, 0, null, thisEvent.dataTransfer);
				}
				else{
					//////logger.log(logPrefix(depth)+"thisEvent.initEvent('dragend', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
					thisEvent.initEvent('dragend', rb, true, document.defaultView,'','');
				}	
			break;
			case 'dragenter':
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				if (thisEvent.initDragEvent) {
					thisEvent = document.createEvent("DragEvent");
					//////logger.log(logPrefix(depth)+"thisEvent.initDragEvent('dragenter',"+ rb+", true, window, 0,"+rsx+","+ rsy+"," +rx+","+ ry+", false, false, false, false, 0, null, thisEvent.dataTransfer);","ajalaculonna",1);
					thisEvent.initDragEvent('dragenter', rb, true, window, 0,rsx, rsy, rx, ry, false, false, false, false, 0, null, thisEvent.dataTransfer);
				}
				else{
					//////logger.log(logPrefix(depth)+"thisEvent.initEvent('dragenter', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
					thisEvent.initEvent('dragenter', rb, true, document.defaultView,'','');
				}	
			break;
			case 'dragleave':
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				if (thisEvent.initDragEvent) {
					thisEvent = document.createEvent("DragEvent");
					//////logger.log(logPrefix(depth)+"thisEvent.initDragEvent('dragleave',"+ rb+", true, window, 0,"+rsx+","+ rsy+"," +rx+","+ ry+", false, false, false, false, 0, null, thisEvent.dataTransfer);","ajalaculonna",1);
					thisEvent.initDragEvent('dragleave', rb, true, window, 0,rsx, rsy, rx, ry, false, false, false, false, 0, null, thisEvent.dataTransfer);
				}
				else{
					//////logger.log(logPrefix(depth)+"thisEvent.initEvent('dragleave', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
					thisEvent.initEvent('dragleave', rb, true, document.defaultView,'','');
				}
			break;
			case 'dragover':
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				if (thisEvent.initDragEvent) {
					thisEvent = document.createEvent("DragEvent");
					//////logger.log(logPrefix(depth)+"thisEvent.initDragEvent('dragover',"+ rb+", true, window, 0,"+rsx+","+ rsy+"," +rx+","+ ry+", false, false, false, false, 0, null, thisEvent.dataTransfer);","ajalaculonna",1);
					thisEvent.initDragEvent('dragover', rb, true, window, 0,rsx, rsy, rx, ry, false, false, false, false, 0, null, thisEvent.dataTransfer);
				}
				else{
					//////logger.log(logPrefix(depth)+"thisEvent.initEvent('dragover', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
					thisEvent.initEvent('dragover', rb, true, document.defaultView,'','');
				}
			break;
			case 'dragstart':
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				if (thisEvent.initDragEvent) {
					thisEvent = document.createEvent("DragEvent");
					//////logger.log(logPrefix(depth)+"thisEvent.initDragEvent('dragstart',"+ rb+", true, window, 0,"+rsx+","+ rsy+"," +rx+","+ ry+", false, false, false, false, 0, null, thisEvent.dataTransfer);","ajalaculonna",1);
					thisEvent.initDragEvent('dragstart', rb, true, window, 0,rsx, rsy, rx, ry, false, false, false, false, 0, null, thisEvent.dataTransfer);
				}
				else{
					//////logger.log(logPrefix(depth)+"thisEvent.initEvent('dragstart', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
					thisEvent.initEvent('dragstart', rb, true, document.defaultView,'','');
				}
			break;
			case 'drop':
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				if (thisEvent.initDragEvent) {
					thisEvent = document.createEvent("DragEvent");
					//////logger.log(logPrefix(depth)+"thisEvent.initDragEvent('drop',"+ rb+", true, window, 0,"+rsx+","+ rsy+"," +rx+","+ ry+", false, false, false, false, 0, null, thisEvent.dataTransfer);","ajalaculonna",1);
					thisEvent.initDragEvent('drop', rb, true, window, 0,rsx, rsy, rx, ry, false, false, false, false, 0, null, thisEvent.dataTransfer);
				}
				else{
					//////logger.log(logPrefix(depth)+"thisEvent.initEvent('drop', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
					thisEvent.initEvent('drop', rb, true, document.defaultView,'','');
				}
			break;
			case 'durationchange':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('durationchange', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
				thisEvent.initEvent('durationchange', rb, true, document.defaultView,'','');
			break;
			case 'emptied':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('emptied', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
				thisEvent.initEvent('emptied', rb, true, document.defaultView,'','');
			break;
			case 'ended':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('ended', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
				thisEvent.initEvent('ended', rb, true, document.defaultView,'','');
			break;
			case 'endEvent':
				//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('TimeEvent');","ajalaculonna",1);
				thisEvent=document.createEvent("TimeEvent");
				//////logger.log(logPrefix(depth)+"thisEvent=initTimeEvent('endEvent', null, 3);","ajalaculonna",1);
				thisEvent=initTimeEvent("endEvent", null, 3);
			break;
			case 'error':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('error', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
				thisEvent.initEvent('error', rb, true, document.defaultView,'','');
			break;
			case 'focus':
				if (document.createEvent('FocusEvent')){
					//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('FocusEvent');","ajalaculonna",1);
					thisEvent=document.createEvent("FocusEvent");
				}
				if (thisEvent.initFocusEvent){
					//////logger.log(logPrefix(depth)+"thisEvent.initFocusEvent('focus', "+rb+", true, window, null, null);","ajalaculonna",1);
					thisEvent.initFocusEvent("focus", rb, true, window, null, null);
				}
				else{
					//////logger.log(logPrefix(depth)+"thisEvent.initEvent('focus',"+ rb +", true);","ajalaculonna",1);
					thisEvent.initEvent('focus', rb, true);
				}
			break;
			case 'focusin':
				if (document.createEvent('FocusEvent')){
					//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('FocusEvent');","ajalaculonna",1);
					thisEvent=document.createEvent("FocusEvent");
				}
				if (thisEvent.initFocusEvent){	
					//////logger.log(logPrefix(depth)+"thisEvent.initFocusEvent('focusin', "+rb+", true, window, null, null);","ajalaculonna",1);
					thisEvent.initFocusEvent("focusin", rb, true, window, null, null);
				}
				else{
					//////logger.log(logPrefix(depth)+"thisEvent.initEvent('focusin',"+ rb +", true);","ajalaculonna",1);
					thisEvent.initEvent('focusin', rb, true);
				}
			break;
			case 'focusout':
				if (document.createEvent('FocusEvent')){
					//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('FocusEvent');","ajalaculonna",1);
					thisEvent=document.createEvent("FocusEvent");
				}
				if (thisEvent.initFocusEvent){	
					//////logger.log(logPrefix(depth)+"thisEvent.initFocusEvent('focusout', "+rb+", true, window, null, null);","ajalaculonna",1);
					thisEvent.initFocusEvent("focusout", rb, true, window, null, null);
				}
				else{
					//////logger.log(logPrefix(depth)+"thisEvent.initEvent('focusout',"+ rb +", true);","ajalaculonna",1);
					thisEvent.initEvent('focusout', rb, true);
				}
			break;
			case 'fullscreenchange':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('fullscreenchange',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('fullscreenchange', rb, true);
			break;
			case 'fullscreenerror':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('fullscreenerror',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('fullscreenerror', rb, true);
			break;
			case 'input':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('input',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('input', rb, true);
			break;
			case 'invalid':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('invalid',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('invalid', rb, true);
			break;
			case 'keydown':
				//////logger.log(logPrefix(depth)+"thisEvent = document.createEvent ('KeyboardEvent');","ajalaculonna",1);
				 thisEvent = document.createEvent ("KeyboardEvent");
				if (thisEvent.initKeyboardEvent) {
					//////logger.log(logPrefix(depth)+"thisEvent.initKeyboardEvent ('keydown', true, true, document.defaultView,false, false, false, false,0, 'x'.charCodeAt (0));","ajalaculonna",1);
					thisEvent.initKeyboardEvent ('keydown', true, true, document.defaultView,false, false, false, false,0, 'x'.charCodeAt (0));
				} else {
					//////logger.log(logPrefix(depth)+"thisEvent.initKeyEvent ('keydown', true, true, document.defaultView,false, false, false, false,0, 'x'.charCodeAt (0));","ajalaculonna",1);
					thisEvent.initKeyEvent ('keydown', true, true, document.defaultView,false, false, false, false,0, 'x'.charCodeAt (0));
				}
			break;
			case 'keypress':
				//////logger.log(logPrefix(depth)+"thisEvent = document.createEvent ('KeyboardEvent');","ajalaculonna",1);
				thisEvent = document.createEvent('KeyboardEvent');
				
				
				if (thisEvent.initKeyboardEvent) {
					//////logger.log(logPrefix(depth)+"thisEvent.initKeyboardEvent ('keypress', true, true, document.defaultView,false, false, false, false,0, 'x'.charCodeAt (0));","ajalaculonna",1);
					thisEvent.initKeyboardEvent ('keypress', true, true, document.defaultView,false, false, false, false,0, 'x'.charCodeAt (0));
				} else {
					//////logger.log(logPrefix(depth)+"thisEvent.initKeyEvent ('keypress', true, true, document.defaultView,false, false, false, false,0, 'x'.charCodeAt (0));","ajalaculonna",1);
					thisEvent.initKeyEvent ('keypress', true, true, document.defaultView,false, false, false, false,0, 'x'.charCodeAt (0));
				}
			break;
			case 'keyup':
				//////logger.log(logPrefix(depth)+"thisEvent = document.createEvent ('KeyboardEvent');","ajalaculonna",1);
				thisEvent = document.createEvent ('KeyboardEvent');
				if (thisEvent.initKeyboardEvent) {
					//////logger.log(logPrefix(depth)+"thisEvent.initKeyboardEvent ('keyup', true, true, document.defaultView,false, false, false, false,0, 'x'.charCodeAt (0));","ajalaculonna",1);
					thisEvent.initKeyboardEvent ('keyup', true, true, document.defaultView,false, false, false, false,0, 'x'.charCodeAt (0));
				} else {
					//////logger.log(logPrefix(depth)+"thisEvent.initKeyEvent ('keyup', true, true, document.defaultView,false, false, false, false,0, 'x'.charCodeAt (0));","ajalaculonna",1);
					thisEvent.initKeyEvent ('keyup', true, true, document.defaultView,false, false, false, false,0, 'x'.charCodeAt (0));
				}
			break;
			case 'load':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('load',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('load', rb, true);
			break;
			case 'loadeddata':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('loadeddata',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('loadeddata', rb, true);
			break;
			case 'loadedmetadata':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('loadedmetadata',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('loadedmetadata', rb, true);
			break;
			case 'loadend':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('loadend',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('loadend', rb, true);
			break;
			case 'loadstart':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('loadstart',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('loadstart', rb, true);
			break;
			case 'mousedown':
				//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('MouseEvent');","ajalaculonna",1);
				thisEvent=document.createEvent("MouseEvent");
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				//////logger.log(logPrefix(depth)+"thisEvent.initMouseEvent('mousedown', true, true, window, 0,"+rsx+","+ rsy+","+ rx+","+ ry+",false, false, false, false,0, null);","ajalaculonna",1);
				thisEvent.initMouseEvent("mousedown", true, true, window, 0,rsx, rsy, rx, ry,false, false, false, false,0, null);
			break;
			case 'mouseenter':
				//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('MouseEvent');","ajalaculonna",1);
				thisEvent=document.createEvent("MouseEvent");
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				//////logger.log(logPrefix(depth)+"thisEvent.initMouseEvent('mouseenter', true, true, window, 0,"+rsx+","+ rsy+","+ rx+","+ ry+",false, false, false, false,0, null);","ajalaculonna",1);
				thisEvent.initMouseEvent("mouseenter", true, true, window, 0,rsx, rsy, rx, ry,false, false, false, false,0, null)
			break;
			case 'mouseleave':
				//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('MouseEvent');","ajalaculonna",1);
				thisEvent=document.createEvent("MouseEvent");
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				//////logger.log(logPrefix(depth)+"thisEvent.initMouseEvent('mouseleave', true, true, window, 0,"+rsx+","+ rsy+","+ rx+","+ ry+",false, false, false, false,0, null);","ajalaculonna",1);
				thisEvent.initMouseEvent("mouseleave", true, true, window, 0,rsx, rsy, rx, ry,false, false, false, false,0, null)
			break;
			case 'mousemove':
				//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('MouseEvent');","ajalaculonna",1);
				thisEvent=document.createEvent("MouseEvent");
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				//////logger.log(logPrefix(depth)+"thisEvent.initMouseEvent('mousemove', true, true, window, 0,"+rsx+","+ rsy+","+ rx+","+ ry+",false, false, false, false,0, null);","ajalaculonna",1);
				thisEvent.initMouseEvent("mousemove", true, true, window, 0,rsx, rsy, rx, ry,false, false, false, false,0, null)
			break;
			case 'mouseout':
				//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('MouseEvent');","ajalaculonna",1);
				thisEvent=document.createEvent("MouseEvent");
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				//////logger.log(logPrefix(depth)+"thisEvent.initMouseEvent('mouseout', true, true, window, 0,"+rsx+","+ rsy+","+ rx+","+ ry+",false, false, false, false,0, null);","ajalaculonna",1);
				thisEvent.initMouseEvent("mouseout", true, true, window, 0,rsx, rsy, rx, ry,false, false, false, false,0, null)
			break;
			case 'mouseover':
				//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('MouseEvent');","ajalaculonna",1);
				thisEvent=document.createEvent("MouseEvent");
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				//////logger.log(logPrefix(depth)+"thisEvent.initMouseEvent('mouseover', true, true, window, 0,"+rsx+","+ rsy+","+ rx+","+ ry+",false, false, false, false,0, null);","ajalaculonna",1);
				thisEvent.initMouseEvent("mouseover", true, true, window, 0,rsx, rsy, rx, ry,false, false, false, false,0, null)
			break;
			case 'mouseup':
				//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('MouseEvent');","ajalaculonna",1);
				thisEvent=document.createEvent("MouseEvent");
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				//////logger.log(logPrefix(depth)+"thisEvent.initMouseEvent('mouseup', true, true, window, 0,"+rsx+","+ rsy+","+ rx+","+ ry+",false, false, false, false,0, null);","ajalaculonna",1);
				thisEvent.initMouseEvent("mouseup", true, true, window, 0,rsx, rsy, rx, ry,false, false, false, false,0, null)
			break;
			case 'noupdate':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('noupdate',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('noupdate', rb, true);
			break;
			case 'obsolete':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('obsolete',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('obsolete', rb, true);
			break;
			case 'offline':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('offline',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('offline', rb, true);
			break;
			case 'online':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('online',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('online', rb, true);
			break;
			case 'open':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('open',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('open', rb, true);
			break;
			case 'orientationchange':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('orientationchange',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('orientationchange', rb, true);
			break;
			case 'paste':
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				if (thisEvent.initDragEvent) {
					thisEvent = document.createEvent("DragEvent");
					//////logger.log(logPrefix(depth)+"thisEvent.initDragEvent('paste',"+ rb+", true, window, 0,rsx, rsy, rx, ry, false, false, false, false, 0, null, thisEvent.dataTransfer);","ajalaculonna",1);
					thisEvent.initDragEvent('paste', rb, true, window, 0,rsx, rsy, rx, ry, false, false, false, false, 0, null, thisEvent.dataTransfer);
				}
				else{
					//////logger.log(logPrefix(depth)+"thisEvent.initEvent('paste', "+rb+", true, document.defaultView,'','');","ajalaculonna",1);
					thisEvent.initEvent('paste', rb, true, document.defaultView,'','');
				}
			break;
			case 'pause':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('pause',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('pause', rb, true);
			break;
			case 'play':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('play',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('play', rb, true);
			break;
			case 'playing':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('playing',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('playing', rb, true);
			break;
			case 'popstate':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('popstate',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('popstate', rb, true);
			break;
			case 'progress':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('progress',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('progress', rb, true);
			break;
			case 'ratechange':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('ratechange',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('ratechange', rb, true);
			break;
			case 'readystatechange':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('readystatechange',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('readystatechange', rb, true);
			break;
			case 'repeatEvent':
				//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('TimeEvent');","ajalaculonna",1);
				thisEvent=document.createEvent("TimeEvent");
				//////logger.log(logPrefix(depth)+"thisEvent=initTimeEvent('repeatEvent', null, 3);","ajalaculonna",1);
				thisEvent=initTimeEvent("repeatEvent", null, 3);
			break;
			case 'resize':
				if (document.createEvent('UIEvent')){
					//////logger.log(logPrefix(depth)+"var thisEvent = document.createEvent ('UIEvent');","ajalaculonna",1);
					var thisEvent = document.createEvent("UIEvent");
					//////logger.log(logPrefix(depth)+"thisEvent.initUIEvent ('resize',"+ rb +", true, window, 2);","ajalaculonna",1);
					thisEvent.initUIEvent('resize', rb, true, window, 2);
				}	
				else {
					//////logger.log(logPrefix(depth)+"thisEvent.initEvent('resize',"+ rb +", true);","ajalaculonna",1);
					thisEvent.initEvent('resize', rb, true);
				}	
			break;
			case 'reset':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('reset',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('reset', rb, true);
			break;
			case 'scroll':
				if (document.createEvent('UIEvent')){
					//////logger.log(logPrefix(depth)+"thisEvent.initUIEvent ('scroll',"+ rb +", true, window, 2);","ajalaculonna",1);
					thisEvent.initUIEvent('scroll', rb, true, window, 2);
				}	
				else {
					//////logger.log(logPrefix(depth)+"thisEvent.initEvent('scroll',"+ rb +", true);","ajalaculonna",1);
					thisEvent.initEvent('scroll', rb, true);
				}	
			break;
			case 'seeked':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('seeked',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('seeked', rb, true);
			break;
			case 'seeking':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('seeking',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('seeking', rb, true);
			break;
			case 'select':
				if (document.createEvent('UIEvent')){
					//////logger.log(logPrefix(depth)+"var thisEvent = document.createEvent ('UIEvent');","ajalaculonna",1);
					var thisEvent = document.createEvent("UIEvent");
					//////logger.log(logPrefix(depth)+"thisEvent.initUIEvent ('select',"+ rb +", true, window, 2);","ajalaculonna",1);
					thisEvent.initUIEvent('select', rb, true, window, 2);
				}	
				else {
					//////logger.log(logPrefix(depth)+"thisEvent.initEvent('select',"+ rb +", true);","ajalaculonna",1);
					thisEvent.initEvent('select', rb, true);
				}	
			break;
			case 'show':
				//////logger.log(logPrefix(depth)+"thisEvent=document.createEvent('MouseEvent');","ajalaculonna",1);
				thisEvent=document.createEvent("MouseEvent");
				rx=R(window.screen.availWidth);
				ry=R(window.screen.availHeight);
				rsx=R(screen.width);
				rsy=R(screen.height);
				//////logger.log(logPrefix(depth)+"thisEvent.initMouseEvent('show', true, true, window, 0,"+rsx+","+ rsy+","+ rx+","+ ry+",false, false, false, false,0, null);","ajalaculonna",1);
				thisEvent.initMouseEvent("show", true, true, window, 0,rsx, rsy, rx, ry,false, false, false, false,0, null)
			break;
			case 'stalled':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('stalled',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('stalled', rb, true);
			break;
			case 'storage':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('storage',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('storage', rb, true);
			break;
			case 'submit':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('submit',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('submit', rb, true);
			break;
			case 'success':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('success',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('success', rb, true);
			break;
			case 'suspend':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('suspend',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('suspend', rb, true);
			break;
			case 'timeout':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('timeout',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('timeout', rb, true);
			break;
			case 'timeupdate':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('timeupdate',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('timeupdate', rb, true);
			break;
			case 'touchcancel':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('touchcancel',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('touchcancel', rb, true);
			break;
			case 'touchend':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('touchend',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('touchend', rb, true);
			break;
			case 'touchenter':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('touchenter',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('touchenter', rb, true);
			break;
			case 'touchleave':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('touchleave',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('touchleave', rb, true);
			break;
			case 'touchmove':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('touchmove',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('touchmove', rb, true);
			break;
			case 'touchstart':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('touchstart',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('touchstart', rb, true);
			break;
			case 'transitionend':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('transitionend',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('transitionend', rb, true);
			break;
			case 'unload':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('unload',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('unload', rb, true);
			break;
			case 'updaterady':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('updaterady',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('updaterady', rb, true);
			break;
			case 'upgradeneeded':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('upgradeneeded',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('upgradeneeded', rb, true);
			break;
			case 'userproximity':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('userproximity',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('userproximity', rb, true);
			break;
			case 'versionchange':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('versionchange',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('versionchange', rb, true);
			break;
			case 'visibilitychange':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('visibilitychange',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('visibilitychange', rb, true);
			break;
			case 'volumechange':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('volumechange',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('volumechange', rb, true);
			break;
			case 'waiting':
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent('waiting',"+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent('waiting', rb, true);
			break;
			default:
				//////logger.log(logPrefix(depth)+"thisEvent.initEvent("+eventParam+","+ rb +", true);","ajalaculonna",1);
				thisEvent.initEvent(eventParam, rb, true);
			break;
		}	
		
		target.dispatchEvent(thisEvent);			
			
	
	}	

	// DOM Methods *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

	
	
function findInTree(elem){
	k=-1;j=0;
	found=false;
	s="";
	while ((j<allNodes.length)&&(!found)){
		s=s+allNodes[j]+"; ";
		if (elem==allNodes[j]) {
			k=j;
			found=true;
		}	
		j++;
	}
	
	return k;
}

function removeListeners(elem){
	try{
		currElem=findInTree(elem);

		for (z=0;z<MAXLISTENERS;z++){	
			ri=rand_item(events);
			rndb=RBool();
			elem.detachEvemt (ri, evEH);	
		}

	}catch(e){console.log("rL:"+e.message);}
}	

function evEH(event){
	globalDepth++;
	var localDepth=globalDepth;
	console.log("************In evEH con event " +event.type);
	try{
		switch (event.eventPhase) {
			case Event.CAPTURING_PHASE:
				currElem=findInTree(event.currentTarget);
				////logger.log(logPrefix(localDepth)+"el=allNodes["+currElem+"];","ajalaculonna",1);
				el=allNodes[currElem];
				switch(R(12)){
					
					case 0:
						mutateDOM(localDepth);
						break;
					
					case 1:
						fuzz(el,localDepth);
						break;
					case 2:
						fuzzEvent(event);
						break;
					case 3:
						tick();
						break;
					case 4:
						exec();
						break;
					case 5:
						tweakAttParam=el;
						tweakattributes(el,0,0);
						break;
					case 6:
						//shuffle_array(allXhr,0);
						break;
					case 7:
						shuffle_array(allNodes,0);
						break;	
					case 8:
						spray();
						break;
					case 9:
						CollectGarbage();
						break;
					case 10:
						el.releaseCapture();
						break;
					case 11:
						el.setCapture();
						break;
					
				}
			break;
			case Event.AT_TARGET: 	
				currElem=findInTree(event.target);
				////logger.log(logPrefix(localDepth)+"el=allNodes["+currElem+"];","ajalaculonna",1);
				el=allNodes[currElem];
				switch(R(7)){
					case 0:
						break;
					case 1:
						removeListeners(el);
						break;
					case 2:	
						fuzz(el,localDepth);
						break;
					case 3:
						tick();
						break;
					case 4:
						var et;
						var rel=R(2);
						if (rel==0) et="moEH";
						else et="evEH";
						initializeParam=el;
						initObservers(initializeParam,et, 0);
						break;
					case 5:
						el.releaseCapture();
						break;
					case 6:
						el.setCapture();
						break;		
				}
			break;
			case Event.BUBBLING_PHASE:
				currElem=findInTree(event.currentTarget);
				////logger.log(logPrefix(localDepth)+"el=allNodes["+currElem+"];","ajalaculonna",1);
				el=allNodes[currElem];
				switch(R(12)){
					
					case 0:
						mutateDOM(localDepth);
						break;
					
					case 1:
						fuzz(el,localDepth);
						break;
					
					case 2:
						fuzzEvent(event);
						break;
					case 3:
						tick();
						break;
					case 4:
						exec();
						break;
					case 5:
						tweakAttParam=el;
						tweakattributes(el,0,0);
						break;
					case 6:
						//shuffle_array(allXhr,0);
						break;
					case 7:
						shuffle_array(allNodes,0);
						break;	
					case 8:
						spray();
						break;
					case 9:
						CollectGarbage();
						break;
					case 10:
						el.releaseCapture();
						break;
					case 11:
						el.setCapture();
						break;	
				}
			break;
		}	
	}
	catch(e){console.log(e.message);}	
	
	console.log("*********End evEH**********");
}



function fuzzEvent(event){
	////alert(1);
	try{
		console.log("fuzzEvent type:"+event.type);
		var el=event.target;
		cs=R(11);
		switch(cs){
			case 0:
				//////logger.log(logPrefix(localDepth)+"event.stopPropagation();","ajalaculonna",1);
				event.stopPropagation();
				break;
			case 1:
				rb=RBool();
				//////logger.log(logPrefix(localDepth)+"el.removeEventListener('"+event+"', modifyDOM,"+ rb+");","ajalaculonna",1);
				el.detachEvent(event, evEH);
				//forse ci va event.type e non event
				break;
			case 2:
				//////logger.log(logPrefix(localDepth)+"event.preventDefault();","ajalaculonna",1);
				event.preventDefault();
				break;
			case 3:
				re=R(allNodes.length);
				//////logger.log(logPrefix(localDepth)+"rEl=allNodes["+re+"];","ajalaculonna",1);
				rEl=allNodes[re];
				//////logger.log(logPrefix(localDepth)+"event.currentTarget=rEl;","ajalaculonna",1);
				event.currentTarget=rEl;
				break;
			case 4:
				//////logger.log(logPrefix(localDepth)+"event=null;","ajalaculonna",1);
				rb=RBool();
				//////logger.log(logPrefix(localDepth)+"el.removeEventListener('"+event+"', modifyDOM,"+ rb+");","ajalaculonna",1);
				el.detachEvent(event, evEH);
				break;
			case 5:
				//////logger.log(logPrefix(localDepth)+"el=null;","ajalaculonna",1);
				el=null;
				break;
			case 6:
				//////logger.log(logPrefix(localDepth)+"el.dispatchEvent(event);","ajalaculonna",1);
				el.dispatchEvent(event);
				break;
			case 7:
				re=R(allNodes.length);
				//////logger.log(logPrefix(localDepth)+"rEl=allNodes["+re+"];","ajalaculonna",1);
				rEl=allNodes[re];
				//////logger.log(logPrefix(localDepth)+"rEl.dispatchEvent(event);","ajalaculonna",1);
				rEl.dispatchEvent(event);
				break;
			case 8:
			
				break;
			case 9:
								
				break;
			case 10:
				rp=R(3);
				////logger.log(logPrefix(localDepth)+"event.eventPhase="+rp+";","ajalaculonna",1);
				event.eventPhase=rp;
				break;
			
				
		}
	
	}catch(e){}

}

		
	function initObservers(elem,type, depth){
		try{
			
			////logger.log(logPrefix(depth)+"currElem=initializeParam;","tabula",1);
			currElem=initializeParam;
			//currElem=findInTree(elem);
			
			if (type=="evEH"){
				for (z=0;z<MAXLISTENERS;z++){	
					ri=R(events.length);
					rEvent=events[ri];
					rndb=RBool();
					
					currElem.attachEvent (rEvent, evEH);	
					console.log("added " + rEvent + " listener to "+currElem);
				}
			
			}
				
		}	
		catch (e) { 
			console.log("initObservers:"+e.message);
			//////logger.log(logPrefix(depth)+"//**************Exception in listener initialization*************","ndujaL",1);
		}
	}
	function buildDocumentTree(depth){
		try{
			(SEEDFROMFILE)? seedTrigger=5:seedTrigger=10;
			if (R(10)>seedTrigger){
				(RADAMSA)? mutationTrigger=5:mutationTrigger=10;
				var flag=false;
				if (R(10)>mutationTrigger) flag=true;
				buildFromFile(depth,flag);
			}
			else		
				buildFromDOM(depth);
		}
		catch(e){console.log(e.message);}
	}

	
	
	function tweakattributes(elem,i,depth){
		//passaggio parametro globale
		////logger.log(logPrefix(depth)+ "elem=tweakAttParam;", "tabula", 1  );
		elem=tweakAttParam;
		////logger.log(logPrefix(depth)+ "//Start tweaking attributes for allNodes["+i+"]", "tabula", 1  );
		for( var p in elem){
			try {
				ri=R(interesting_vals.length);
				r=interesting_vals[ri];
				////logger.log(logPrefix(depth)+ "elem.setAttribute('"+p+"',interesting_vals["+ri+"]);", "tabula", 1  );
				elem.setAttribute(p,r);
			}
			catch (e) {
				console.log(e.message);
				////logger.log(logPrefix(depth)+ "//Error in tweaking  document element "+elem+"."+p+"", "tabula", 1  );
			}
		}
		
			
	}	

	
	function mutateDOM(depth){
		try{
			
			var n1index = R(allNodes.length);
			var n2index = R(allNodes.length);
			////logger.log(logPrefix(depth)+"var n1 = vector1["+n1index+"];","tabula",1);	
			var n1 = allNodes[n1index];
			////logger.log(logPrefix(depth)+"var n2 = vector2["+n2index+"];","tabula",1);	
			var n2 = allNodes[n2index];
			
			switch(R(10)){
				case 0:
					tick();
					break;
				case 1:
					// Change an attribute on n1, based on n1's tagName.
					if (!n1.tagName)
					break;
					//si potrebbe estendere ad attributi non standard controllando a che NS appartiene l'elemento
					var ri=R(standardAttributes);
					var attr = standardAttributes[ri];
					var vi = R(interesting_vals.length);
					////logger.log(logPrefix(depth)+"n1.setAttribute('"+attr+"',interesting_vals["+vi+"]);","tabula",1);
					n1.setAttribute(attr,interesting_vals[vi]);
					break;
				case 2:
					////logger.log(logPrefix(depth)+"iBParam1=n1;","tabula",1);
					iBParam1=n1;
					////logger.log(logPrefix(depth)+"iBParam2=n2;","tabula",1);
					iBParam2=n2;
					iB(n1,n2,depth);
					break;
				case 3:
					////logger.log(logPrefix(depth)+"aCParam1=n1;","tabula",1);
					aCParam1=n1;
					////logger.log(logPrefix(depth)+"aCParam2=n2;","tabula",1);
					aCParam2=n2;
					aC(n1,n2,depth);
					break;
				case 4:
					////logger.log(logPrefix(depth)+"rMParam1=n1;","tabula",1);
					rMParam1=n1;
					rM(n1,depth);
					break;
				case 5:
					var n3=n1.cloneNode(false);
					////logger.log(logPrefix(depth)+"aCParam1=n3;","tabula",1);
					aCParam1=n3;
					////logger.log(logPrefix(depth)+"aCParam2=n2;","tabula",1);
					aCParam2=n2;
					
					aC(n3,n2,depth);
					break;
				case 6:
					////logger.log(logPrefix(depth)+"appendParam=n1;","tabula",1);
					appendParam=n1;
					appendToRandomRange(n1,depth);
					break;
				case 7:
					////logger.log(logPrefix(depth)+"fuzzParam=n1;","tabula",1);
					fuzzParam=n1;
					fuzz(n1,depth);
					break;
				case 8:
					////logger.log(logPrefix(depth)+"fuzzParam=n2;","tabula",1);
					fuzzParam=n2;
					fuzz(n2,depth);
					break;	
				case 9:
					exec(depth);
					break;
			
			}
		
		}
		catch(e){console.log("mutateDOM:"+e.message);}	
	}
	
	
	function createElemRange(depth){
		try{
			////logger.log(logPrefix(depth)+"var r = document.createRange();","tabula",1);
			
			var r = document.createRange();
			r1=R(allNodes.length);
			////logger.log(logPrefix(depth)+"startNode=allNodes["+r1+"];","tabula",1);
			startNode=allNodes[r1];
			////alert("start "+startNode);
			////logger.log(logPrefix(depth)+"r.setStart(startNode, 0);","tabula",1);
			r.setStart(startNode, 0);
			delta=allNodes.length-r1;
			r2=r1+R(delta);
			////logger.log(logPrefix(depth)+"endNode=allNodes["+r2+"];","tabula",1);
			endNode=allNodes[r2];
			////alert("end "+endNode);
			////logger.log(logPrefix(depth)+"r.setEnd(endNode, 0);","tabula",1);
			r.setEnd(endNode, 0);
			
			return r;
		} catch(e){console.log("createElemRange:"+e.message);}		
		
	}
	
	function addRange(depth){
		try{
			console.log("in addRange");
			if (allRanges.length==0){
				////logger.log(logPrefix(depth)+"var r=createElemRange(depth);","tabula",1);
				var r=createElemRange(depth);
				////logger.log(logPrefix(depth)+"allRanges.push(r);","tabula",1);
				allRanges.push(r);
			}
			switch(R(5)){
				case 0:
					var ri=R(allRanges.length);
					////logger.log(logPrefix(depth)+"var rangeClone = allRanges["+ri+"].cloneRange();","tabula",1);
					var rangeClone = allRanges[ri].cloneRange();
					////logger.log(logPrefix(depth)+"allRanges.push(rangeClone);","tabula",1);
					allRanges.push(rangeClone);
					break;
				default:
					////logger.log(logPrefix(depth)+"var r=createElemRange(depth);","tabula",1);
					var r=createElemRange(depth);
					////logger.log(logPrefix(depth)+"allRanges.push(r);","tabula",1);
					allRanges.push(r);
					break;
			}
		}catch(e){console.log("addRange error:"+e.message)};
	}

	function createRanges(depth){
		try{
			console.log("Creating Ranges");
			for (var i=0;i<2;i++){
				//////logger.log(logPrefix(depth)+"var r=createElemRange(depth);","tabula",1);
				var r=createElemRange(depth);
				//////logger.log(logPrefix(depth)+"allRanges.push(r);","tabula",1);
				allRanges.push(r);
				break;
					
			}
		}catch(e){console.log("createRanges error:"+e.message)};
	}


	function aC(q1, q2,depth) { 
		////logger.log(logPrefix(depth)+"q1=aCParam1;","tabula",1);
		q1=aCParam1;
		////logger.log(logPrefix(depth)+"q2=aCParam2;","tabula",1);
		q2=aCParam2;
		////logger.log(logPrefix(depth)+"dirtyNodes.push(q2.parentNode); ","tabula",1);
		dirtyNodes.push(q2.parentNode); 
		////logger.log(logPrefix(depth)+"q1.appendChild(q2); ","tabula",1);
		q1.appendChild(q2); 
		////logger.log(logPrefix(depth)+"dirtyNodes.push(q1); ","tabula",1);
		dirtyNodes.push(q1); 
	}

	function iB(q1, q2,depth) { 
		////logger.log(logPrefix(depth)+"q1=iBParam1;","tabula",1);
		q1=iBParam1;
		////logger.log(logPrefix(depth)+"q2=iBParam2;","tabula",1);
		q2=iBParam2;
		////logger.log(logPrefix(depth)+"dirtyNodes.push(q2.parentNode); ","tabula",1);
		dirtyNodes.push(q2.parentNode); 
		////logger.log(logPrefix(depth)+"q1.parentNode.insertBefore(q2, q1);","tabula",1);
		q1.parentNode.insertBefore(q2, q1); 
		////logger.log(logPrefix(depth)+"dirtyNodes.push(q1.parentNode); ","tabula",1);
		dirtyNodes.push(q1.parentNode); 
	}

	function rM(q1,depth) { 
		////logger.log(logPrefix(depth)+"q1=rMParam1;","tabula",1);
		q1=rMParam1;
		////logger.log(logPrefix(depth)+"q1.parentNode.removeChild(q1);","tabula",1);
		q1.parentNode.removeChild(q1); 
		////logger.log(logPrefix(depth)+"dirtyNodes.push(q1);","tabula",1);
		dirtyNodes.push(q1); 
	}
	
	
function appendToRandomRange(n1,depth){
	try{
		////logger.log(logPrefix(depth)+"n1=appendParam;","tabula",1);
		n1=appendParam;
		var ri=R(allRanges.length);
		if (ri>0){
			////logger.log(logPrefix(depth)+"var rr=allRanges["+ri+"];","tabula",1);
			var rr=allRanges[ri];
			switch(R(10)){
				case 0:
					////logger.log(logPrefix(depth)+"rr.insertNode(n1);","tabula",1);
					rr.insertNode(n1);
					break;
				case 1:
					////logger.log(logPrefix(depth)+"rr.selectNodeContents(n1);","tabula",1);
					rr.selectNodeContents(n1);
					break;
				case 2:
					////logger.log(logPrefix(depth)+"rr.selectNode(n1);","tabula",1);
					rr.selectNode(n1);
					break;
				case 3:
					////logger.log(logPrefix(depth)+"rr.setStart(n1,"+offset(n1)+");","tabula",1);
					rr.setStart(n1,offset(n1));
					break;
				case 4:
					////logger.log(logPrefix(depth)+"rr.setEnd(n1,"+offset(n1)+");","tabula",1);
					rr.setEnd(n1,offset(n1));
					break;	
				case 5:
					////logger.log(logPrefix(depth)+"rr.setStartAfter(n1);","tabula",1);
					rr.setStartAfter(n1);
					break;
				case 6:
					////logger.log(logPrefix(depth)+"rr.setStartBefore(n1);","tabula",1);
					rr.setStartBefore(n1);
					break;	
				case 7:
					////logger.log(logPrefix(depth)+"rr.setEndAfter(n1);","tabula",1);
					rr.setEndAfter(n1);
					break;
				case 8:
					////logger.log(logPrefix(depth)+"rr.setEndBefore(n1);","tabula",1);
					rr.setEndBefore(n1);
					break;	
				case 9:
					////logger.log(logPrefix(depth)+"rr.surroundContents(n1);","tabula",1);
					rr.surroundContents(n1);
					break;
			}
		}	
	}catch(e){console.log("appendRandomRange:"+e.message)};
}


function fuzz(el,depth){
	////logger.log(logPrefix(depth)+"//inizio fuzz","tabula",1);
	////logger.log(logPrefix(depth)+"var el=fuzzParam;","tabula",1);
	el=fuzzParam;
	
	////logger.log(logPrefix(depth)+"var attrlist=[];","tabula",1);
	attrlist=standardAttributes;
	console.log("***** fuzzing element "+el);
	////alert("fuzz="+el);
	for (var i=0; i<attrlist.length; i++){
		////logger.log(logPrefix(depth)+"prop='"+attrlist[i]+"';","tabula",1);
		prop=attrlist[i];
		////alert(prop);
		
		try{
			switch(R(16)){
				case 0:
					////logger.log(logPrefix(depth)+"el.prop=null;","tabula",1);
					el.prop=null;
					break;
				case 1:
					////logger.log(logPrefix(depth)+"el.prop=elem.parentNode.prop","tabula",1);
					el.prop=elem.parentNode.prop;
					break;
				case 2:
					var r=R(interesting_vals.length);
					////logger.log(logPrefix(depth)+"el.prop='"+interesting_vals[r]+"';","tabula",1);
					el.prop=interesting_vals[r];
					break;
				case 3:
					////logger.log(logPrefix(depth)+"eval('el=el."+prop+"()');","tabula",1);
					eval("el=el."+prop+"()");
					break;
				case 4:
					////logger.log(logPrefix(depth)+"eval('el=el."+prop+"()');","tabula",1);
					eval("el.parentNode."+prop+"();");
					break;
				case 5:
					////logger.log(logPrefix(depth)+"eval('el."+prop+"();');","tabula",1);
					eval("el."+prop+"();");
					break;
				case 6:
					var r=R(allNodes.length);
					////logger.log(logPrefix(depth)+"el.prop=allNodes["+r+"];","tabula",1);
					el.prop=allNodes[r];
					break;
				case 7:
					////logger.log(logPrefix(depth)+"el.prop=el.instanceRoot.prop;","tabula",1);
					el.prop=el.instanceRoot.prop;
					break;
				case 8:
					////logger.log(logPrefix(depth)+"el.removeAttribute(prop);","tabula",1);
					el.removeAttribute(prop);
					break;
				case 10:
					////logger.log(logPrefix(depth)+"el.parentNode.removeChild(el);","tabula",1);
					el.parentNode.removeChild(el);
					break;
				case 11:
					////logger.log(logPrefix(depth)+"el='';","tabula",1);
					el="";
					break;
				case 12:
					////logger.log(logPrefix(depth)+"el=null;","tabula",1);
					el=null;
					break;
				case 13:
					////logger.log(logPrefix(depth)+"eval(\"el."+prop+"(el.parentNode);\");","tabula",1);
					eval("el."+prop+"(el.parentNode);");
					break;
				case 14:
					////logger.log(logPrefix(depth)+"eval(\"el."+prop+"(el.parentNode."+prop+");\");","tabula",1);
					eval("el."+prop+"(el.parentNode."+prop+");");
					break;
				case 15:
					var r=R(interesting_vals.length);
					////logger.log(logPrefix(depth)+"eval(\"el."+prop+"("+interesting_vals[r]+");\");","tabula",1);
					eval("el."+prop+"("+interesting_vals[r]+");");
					break;	
					
			}
			
		}catch(exception){
			////logger.log(logPrefix(depth)+"//eccezione in fuzz","tabula",1);
		}	
		////logger.log(logPrefix(depth)+"//fine fuzz","tabula",1);
	}
}
	
	
	
function spray() {
		
		h1=document.createElement("h1");
		
		var k=[];
		for(var i=0;i<500;i++){
			var attr = document.createAttribute("attr"+i);
			h1.setAttributeNode(attr);
			val="\u4444\u4444";
			if (i==0){
				k[i]=val;
				
			}	
			else{
				a=k.join("");
				k[i]=a;
				
			}
			
			h1.setAttribute("attr"+i,k[i]);
		}
		console.log("finished spray");
	}

function exec(depth){
	try{	
		ri= R(allNodes.length);
		////logger.log(logPrefix(depth)+"rt=allNodes["+ri+"];","tabula",1);
		rt=allNodes[ri];
		ri=R(commands.length);
		////logger.log(logPrefix(depth)+"rc=commands["+ri+"];","tabula",1);
		rc=commands[ri];
		ri=R(interesting_vals.length);
		////logger.log(logPrefix(depth)+"rv=interesting_vals["+ri+"];","tabula",1);
		rv=interesting_vals[ri];
		//console.log(rt);
		////logger.log(logPrefix(depth)+"document.execCommand(rc,true,rv);","tabula",1);
		document.execCommand(rc,true,rv);
		console.log("cmd executed");
	}catch(e){console.log(e.message);}	
}

	function tick(){
		try{
			//alert("tick");
			switch (R(3)){
				case 0:
					console.log("xhr timeout");
					setTimeout(function(){ xhr.open("GET", "http://127.0.0.1:8888/", RBool());xhr.send();},R(200));
					break;
				case 1:				
					console.log("xhr interval");
					setInterval(function(){ xhr.open("GET", "http://127.0.0.1:8888/", RBool());xhr.send();},R(5000));
					break;
				case 2:
					initXhr();
					break;
			}
		}catch(e){console.log("error in tick:" + e.message);}
	}
	
	function cycle(){
		for (var i=0; i< MAXCYCLES; i++){
			try{
				//alert(i);
				tick();
				startFuzzing();
			}
			catch(e){console.log("Error in cycle:"+e.message);}
		}
	}
	
	
	function startFuzzing(depth){
		try{
		
				
				switch(R(6)){
					case 0:
						path="allNodes";
						t1=allNodes;
						break;
					case 1:
						path="window.opener";
						t1=window.opener;
						break;
					case 2:
						path="window.opener.document";
						t1=window.opener.document;
						break;
					case 3:
						path="document";
						t1=document;
						break;
					case 4:
						path="window";
						t1=window;
						break;
					case 5:
						path="allObservers";
						t1=allObservers;
						break;
				}
				crawlParam=t1;
				addParam=add_set;
				console.log("Start crawling");
				crawl_properties(path, t1, 0, add_set,depth);
				callParam=t1;
				useParam=add_set;
				addParam=add_set;
				console.log("Start callMethods");
				call_methods(path, t1, 0, 0, add_set, add_set,depth);
				console.log("Start fuzzing");
				//boom();
				
				try{
					CollectGarbage();
				}catch(exception){}	
				
				
				try{
					tweakParam=t1;
					useParam=add_set;
					console.log("Start tweaking");
					tweak_properties(path, t1, 0, add_set,depth);
					callParam=t1;
					useParam=add_set;
					
					addParam=add_set;
					console.log("Start callMethods 2");
					call_methods(path, t1, 0, 0, add_set, add_set,depth);
					
					add_set = add_set.slice(-KEEP_REFS);
				}catch(exception){reload()}	
				
			}catch(exception){reload()}	

	}
	
	
	
	
	function boom(){
		try{
			
			switch(R(8)){
				case 0:
					mutateDOM(depth);
					break;
				case 1:
					var x=R(allNodes.length);
					tweakAttParam=allNodes[x];
					tweakattributes(allNodes[x],x,0);
					break;
				case 2:
					for (var i=0; i<allNodes.length; i++){
						fuzzParam=allNodes[i];
						fuzz(allNodes[i],0);
					}		
					break;
				case 3:
					fireSynch();
					break;
				case 4:
					CollectGarbage();
					break;
				case 5:	
					spray();
					break;
				
				default:
					tick();
					break;
				
				
			}
		}catch(exception){console.log("Error in boom:"+e.message);}	
	}		
	
	function reload(){
		try{
			
			//document.location.href="js.html";
			document.body.innerHTML="";
			init(-1);
			
		}
		catch(e){
		
		}
		//window.location.href = 'http://127.0.0.1:8080/js.html';
		
	}	
		

