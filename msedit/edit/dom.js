function DomEd(opts) {

    this.container = 0;

    for (var a in opts) {
        this[a] = opts[a];
    }
    this.current_subattribute = 0;
    this.current_attribute = 0;
    this.iscroll = 0;

}

DomEd.prototype.setCss = function (val, key, value) {
    for (var s = 0; s < document.styleSheets.length; s++) {
        var sheet = document.styleSheets[s];
        for (var r = 0; r < sheet.rules.length; r++) {
            if (sheet.rules[r].selectorText == val) {
                sheet.rules[r].style[key] = value;
                return 1;
            }
        }
    }
    return 0;
}

DomEd.prototype.param = function (id) {
    var key;
    //myString.replace(/([a-z][A-Z])/g, function (g) { return g[0] + '-' + g[1].toLowerCase() });

    if (id.indexOf("-") != -1) {
        key = id.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
        console.log("LOOKING FOR (" + id + ")(" + key + ")");
        if (this.db[key]) return this.db[key];

    } else return this.db[id];


}
DomEd.prototype.dtoggle = function (level, id) {
    if (0) {
		var d = document.getElementById("sheet_" + id + "_cont");
		if (d) {
			d.style.display = d.style.display == "block" ? "none" : "block";
		}
    } else {
		var d = document.getElementById("dom_" + id + "_cont");
		if (d) {
			d.style.display = d.style.display == "block" ? "none" : "block";
		}


    }
    this.refresh();
}
DomEd.prototype.attriOver = function (lit, id) {
    var that = this;
    if (this.attribute_timer) clearTimeout(this.attribute_timer);
    this.attribute_timer = 0;

    $(".attribute").removeClass("selected");

    if (this.current_attribute != id) {
        $("#attri_" + this.current_attribute + "_cont").css("display","none");
    }
    if (this.current_subattribute) {
        $("#subattri_" + this.current_subattribute + "_cont").css("display","none");
    }
    console.log(lit + " " + id);
    var off = this.relPos("attri_" + id, "param_cont");
 //   var off = $("#attri_" + id).position();

    var p = this.words[id];
    var hide = 0;
    if (p.length == 1 && (p[0].id == id)) {
        hide =1;
       // this.current_attribute = id;
       // that.subattriOver(1, 0, id, 1);
        //return;
    }

    if (off) {
		$("#attri_" + id + "_cont").css("display",lit && !hide ? "block" : "none")
		$("#attri_" + id + "_cont").css("top",(off.top-2) + "px");
		$("#attri_" + id + "_cont").css("left",(off.left + 77) + "px");

		this.current_attribute = id;
		this.attribute_timer = setTimeout(function () {
		   that.attriOver(0, this.current_attribute);
		},2000);
		if (hide) {
            that.subattriOver(1, 0, id+"_", "attri_" + id);
		}
    }


}
DomEd.prototype.relPos = function (child, parent) {
    var p = $("#" + parent).offset();
    var c = $("#" + child).offset();
    return {top:c.top - p.top,left:c.left - p.left}


}

DomEd.prototype.subattriOver = function (lit, index, sid, indent) {
    var that = this;
    if (this.attribute_timer) clearTimeout(this.attribute_timer);
    this.attribute_timer = 0;


    $(".subattribute").removeClass("selected");
    $("#attri_" + this.current_attribute).addClass("selected");


    if (this.current_subattribute != sid) {
        $("#subattri_" + this.current_subattribute + "_cont").css("display","none");
    }
   // var off = $("#" + (indent ? indent : "subattri_" + sid)).position();
    var off = this.relPos((indent ? indent : "subattri_" + sid), "param_cont");
  //  console.log(lit + " " + sid + " " + off.top);


    if (off) {
		$("#subattri_" + sid + "_cont").css("display",lit ? "block" : "none")
		$("#subattri_" + sid + "_cont").css("top",(off.top-2) + "px");


		$("#subattri_" + sid + "_cont").css("left",(indent ? off.left+62 : off.left+102) + "px");

		this.current_subattribute = sid;
		this.attribute_timer = setTimeout(function () {
		   that.subattriOver(0, index, this.current_subattribute,0);
		},2000);
    }


}

DomEd.prototype.parameterOver = function (lit, pid) {
    var that = this;
    if (this.attribute_timer) clearTimeout(this.attribute_timer);
    this.attribute_timer = 0;


    $("#subattri_" + this.current_subattribute).addClass("selected");


    if (this.current_parameter != pid) {
        $("#param_" + this.current_parameter + "_cont").css("display","none");
    }
    var off = this.relPos("param_" + pid, "param_cont");
    console.log(lit + " " + pid + " " + off.top);


    if (off) {
		$("#param_" + pid + "_cont").css("display",lit ? "block" : "none")
		$("#param_" + pid + "_cont").css("top",(off.top-2) + "px");

		this.current_parameter = pid;
		this.attribute_timer = setTimeout(function () {
		   that.parameterOver(0, this.current_parameter);
		},2000);
    }


}
DomEd.prototype.daddParam = function () {

    this.params.style.display = "block";
    this.me.style.filter = "blur(5px)";

}

DomEd.prototype.object = function (obj, level) {
    var but = "<svg viewbox='0 0 100 100'> <path class='dadder' d='M 36,62 L 0,62 L 0,37 L 36,37 L 36,0 L 62,0 L 62,37  L 100,37  L 100,62  L 62,62 L 62,100 L 36,100 L 36,62 Z' transform=' scale(.75,.75) translate(18,7)'></svg>";

    var ad = "";
    var s = obj.innerHTML;
    if (obj.nodeName == "#text") return "";
    if (s && obj.nodeName == "#text") ad += " - " + s.substring(0,20) + ((s.length > 20) ? "..." : "");
    var ss = "<div style='font-size:14px;margin-left:10px;margin-bottom:2px;padding-left:10px;padding-right:5px;background-color:rgba(230,230,230,.6);border-radius:6px;border:1px solid rgba(100,100,100,.3);cursor:pointer'  ><span class='dselector dtitle' onClick='DOM.dtoggle(1,\"" + level + "\")'>" + obj.nodeName.toLowerCase() + (obj.id ? "." + obj.id : "") + ad + "</span>&nbsp;<div class='daddparam' onClick='DOM.daddParam(\"" + "b" + "\")'>" + but + "</div>";


    var shortcuts = {};
    shortcuts["border"] = "none";
    var s2 = "";
    for (var a = 0; obj.style && a < obj.style.length; a++) {
        var b = 0;
        var p = obj.style[a];
        var shortcut = 0;
        for (b in shortcuts) {
            if (shortcuts[b] && p.indexOf(shortcuts[b]) == 0) {
                if (shortcuts[b] == "none") {
                    shortcuts[b] = "yes";
                }
                shortcut = shortcuts[b];
                break;
            }
        }
        if (shortcut == "done") continue;
        else if (shortcut == "yes") {
            p = b;
            shortcuts[b] = "done";
        }


        s2 += CSS.cssParam(0,p,obj.style[p],"blue");
    }

    var s3 = "";
    for (var a = 0; obj.attributes && a < obj.attributes.length; a++) {
	    var v = obj.attributes[a].name;
	    if (v != "style" && v != "class") {
            s3 += CSS.cssParam(0,v,obj.attributes[a].nodeValue,"green");
        }
    }

    var s4 = "";
    var checked = 0;
    var c = obj.className ? obj.className.split(" ") : 0;
	for (var a = 0; c && a < c.length; a++) {
	    s4 += CSS.cssParam(0,"class",c[a],"red");
    }
    var checked = 0;
    if (c.length) {
	        var clist = CSS.findCss(c[0]);
	        checked = c[0];
	        for (var b = 0; b < clist.length; b++) {
	            s4 += CSS.cssParam(0,"class",clist[b],"red", 1);
	        }
    }
    if (obj.id && ((checked && checked != obj.id) || (!checked))) {

	        var clist = CSS.findCss(obj.id);
	       // if (obj.id == "question_menu") alert("look for " + obj.id +  " = " + (clist ? clist : "none"));
	        checked = c[a];
	        for (var b = 0; b < clist.length; b++) {
	            //if (obj.id == "question_menu") alert(clist[b]);
	            s4 += CSS.cssParam(0,"class",clist[b],"red", 1);
	        }
    }

    ss += "<div id='dom_" + level + "_cont' style='display:none;margin-top:2px;'>";
    ss +=  s2 + s3 + s4;

	for (var a = 0; a < obj.childNodes.length; a++) {
	    ss += this.object(obj.childNodes[a], level + "_" + a);
	}


    ss += "</div></div>";

    return ss;
}

DomEd.prototype.refresh = function () {
   // alert("resize");
    if (!this.iscroll) {

		this.iscroll = new IScroll(this.me, {
					scrollX: false,
					scrollY: true,
					eventPassthrough:"horizontal",
					momentum: true,
					directionLockThreshold:1000,
					keyBindings: true,
					mouseWheel:true,
					useTransition:false,
					bounceTime: 500,
					fclick:function (e) {
						alert("MAIN " + e.id);
					},
				});
        // alert("done");

    }
    var d = document.getElementById("dom_placer");
    var o = $("#dom_placer").position();
   // alert(o.top);
    document.getElementById("dom_scroller").style.height = o.top + "px";
    this.iscroll.refresh();


}

DomEd.prototype.build = function (parent, cont) {
    var me = document.createElement("div");

    //this.sheets = document.styleSheets;
    var ss = "";
    var cnt = 0;


    var base = parent;//document.getElementById("contents");

    var ss = "";
	ss += "<div id=dom_scroller style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:visible;'>";

    for (var a = 0; a < base.childNodes.length; a++) {
        ss += this.object(base.childNodes[a], "0_" + a);

    }

    ss += "<div id=dom_placer style='width:100%;height:1px;'></div>";
    ss += "</div>";

    me.style.position = "absolute";
    me.style.left = "-5px";
    me.style.top = "32px";
    me.style.width = "340px";
    me.style.height = "calc(100% - 32px)";
    me.style.overflow = "hidden";
    //me.style.background = "rgba(255,255,255,1.0)";
    me.style.color = "rgba(0,0,0,1.0)";
    me.innerHTML = ss;
    this.me = me;
    this.cont = cont;
    this.cont.appendChild(me);


}

DOM = new DomEd();