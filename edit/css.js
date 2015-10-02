function CSSEd(opts) {

    this.container = 0;

    for (var a in opts) {
        this[a] = opts[a];
    }
    this.current_subattribute = 0;
    this.current_attribute = 0;
    this.iscroll = 0;
    this.attri_offy = 0;
    this.attri_timer = 0;
    this.yperc = -1;
    this.quad = 0;
    this.inc = 2;
    this.cell_height = 16;

}

CSSEd.prototype.search = function () {


}

CSSEd.prototype.findCss = function (base) {
    var lookfor = ["#" + base,"." + base, base];
    //console.log("looking for " + lookfor);
    var list = [];
    for (var s = 0; s < document.styleSheets.length; s++) {
        var sheet = document.styleSheets[s];
        for (var r = 0; sheet.rules && r < sheet.rules.length; r++) {
            for (var c = 0;  c < lookfor.length; c++) {
                //if (base == "category_wrapper") console.log(sheet.rules[r].selectorText + " == " + lookfor[c]);
                var st = sheet.rules[r].selectorText ? sheet.rules[r].selectorText.toString() : 0;
				if (st && (st.indexOf(lookfor[c]) == 0)) {
				  //  console.log("found class " + sheet.rules[r].selectorText + " for " + base);
					list.push(st);
				}
            }
        }
    }
   // if (list.length) alert("found " + list + " for " + base);
    return list;
}

CSSEd.prototype.setCss = function (val, key, value) {
    for (var s = 0; s < document.styleSheets.length; s++) {
        var sheet = document.styleSheets[s];
        for (var r = 0; sheet.rules && r < sheet.rules.length; r++) {
            if (sheet.rules[r].selectorText == val) {
                sheet.rules[r].style[key] = value;
                return 1;
            }
        }
    }
    return 0;
}

CSSEd.prototype.param = function (id) {
    var key;
    //myString.replace(/([a-z][A-Z])/g, function (g) { return g[0] + '-' + g[1].toLowerCase() });

    if (id.indexOf("-") != -1) {
        key = id.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
        console.log("LOOKING FOR (" + id + ")(" + key + ")");
        if (this.db[key]) return this.db[key];

    } else return this.db[id];


}
CSSEd.prototype.toggle = function (level, id, index, sub) {
    if (index == -1) {
		var d = document.getElementById("sheet_" + id + "_cont");
		if (d) {
			d.style.display = d.style.display == "block" ? "none" : "block";
		}
    } else {
        var id = "sheet_" + id + "_" + index + (level == 2 ? "_hp_" + sub : "") + "_cont";
		var d = document.getElementById(id);
		if (d) {
			d.style.display = d.style.display == "block" ? "none" : "block";
		}


    }
    CSS.refresh();

}

CSSEd.prototype.attriAdjust = function (y) {
    var perc = (y - this.me.offsetTop)/(this.me.offsetHeight);

    var f= (this.num_attributes*(this.cell_height+6))-this.params.offsetHeight;
    this.setCss(".attribute","top",-perc*f + "px");
}

CSSEd.prototype.attriOver = function (e, lit, id) {
    var that = this;
	var x = ((e.touches ? e.touches[0].pageX : e.pageX));
	var y = ((e.touches ? e.touches[0].pageY : e.pageY));


    //alert(e.type);
    if (this.attribute_timer) clearTimeout(this.attribute_timer);
    this.attribute_timer = 0;

    if (!this.attri_cont) this.attri_cont = document.getElementById("attri_cont");
    $(".attribute").removeClass("selected");

    if (this.current_attribute != id) {
        $("#attri_" + this.current_attribute + "_cont").css("display","none");
    }
    if (this.current_subattribute) {
        $("#subattri_" + this.current_subattribute + "_cont").css("display","none");
    }
    var off = this.relPos("attri_" + id, "param_cont");


    this.yperc = (y - this.me.offsetTop)/(this.me.offsetHeight);
    //console.log("aperc = " + this.yperc);
    if (!this.attri_timer) this.attri_timer = setInterval(function () {

        if (that.yperc > .85) {
            that.quad = "bottom";

            that.attri_offy -= that.inc;
            var f = (that.num_attributes*(that.cell_height+4))-that.me.offsetHeight;
            if (that.attri_offy < -f) that.attri_offy = -f;
            that.inc += 1;
            //console.log(that.attri_offy + " " + that.me.offsetHeight);
            that.attri_cont.style.top = that.attri_offy + "px";
            //that.setCss(".attribute","top",that.attri_offy + "px");
        } else if (that.yperc < .15) {
            that.quad = "top";
            that.attri_offy += that.inc;
            if (that.attri_offy > 0) that.attri_offy = 0;
            //console.log(that.attri_offy);
            that.inc += 1;
            that.attri_cont.style.top = that.attri_offy + "px";
            //that.setCss(".attribute","top",that.attri_offy + "px");

        } else {
            that.quad = 0;
            that.inc = 2;
        }

    },50);

    var d = document.getElementById("attri_" + id);
    if (d) this.cell_height = d.offsetHeight;
   // if (d) alert(this.cell_height);


    var p = this.words[id];
    var hide = 0;
    if (p.length == 1 && (p[0].id == id)) {
        hide =1;
       // this.current_attribute = id;
       // that.subattriOver(1, 0, id, 1);
        //return;
    }

    if (off) {
       // console.log("sub len = " + this.words[id].length);
		$("#attri_" + id + "_cont").css("display",lit && !hide ? "block" : "none");

		var t = ((off.top-7)-this.attri_offy);
		var nt = (off.top-7)+(this.words[id].length*(this.cell_height+4));

		var tindex = (this.words[id][0].index + this.words[id].length+1)*(this.cell_height+4);


		//if (nt > this.attri_offy + this.me.offsetHeight)
		var bumpy = 0;
		if (tindex > (-this.attri_offy + this.me.offsetHeight)) bumpy = tindex - (-this.attri_offy + this.me.offsetHeight);
		console.log(tindex + " > " + (-this.attri_offy + this.me.offsetHeight) + " " + this.words[id][0].index + " " + (this.words[id].length));

		$("#attri_" + id + "_cont").css("top",(((off.top-7)-this.attri_offy)-bumpy) + "px");
		$("#attri_" + id + "_cont").css("left",(off.left + 73) + "px");

		this.current_attribute = id;
		this.attribute_timer = setTimeout(function () {
		   that.attriOver(e, 0, this.current_attribute);
		},2000);
		if (hide) {
            that.subattriOver(1, 0, id+"_", "attri_" + id);
		}
    }


}
CSSEd.prototype.relPos = function (child, parent) {
    var p = $("#" + parent).offset();
    var c = $("#" + child).offset();
    return {top:(c && p ? c.top - p.top : (c ? c.top : p.top)),left:(c && p ? c.left - p.left : (c ? c.left : p.left))}


}

CSSEd.prototype.subattriOver = function (lit, index, sid, indent) {
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
    console.log("length = " + this.words[this.current_attribute][index].obj.options.length);


    if (off) {
		$("#subattri_" + sid + "_cont").css("display",lit ? "block" : "none");

		var t = ((off.top-7)-that.attri_offy);
		var h = (this.words[this.current_attribute][index].obj.options.length+1)*(that.cell_height+4);
		if (t + h > (-this.attri_offy + this.me.offsetHeight)) t -= (t+h) - (-this.attri_offy + this.me.offsetHeight);
		$("#subattri_" + sid + "_cont").css("top",t + "px");


		$("#subattri_" + sid + "_cont").css("left",(indent ? off.left+58 : off.left+98) + "px");

		this.current_subattribute = sid;
		this.attribute_timer = setTimeout(function () {
		   that.subattriOver(0, index, this.current_subattribute,0);
		},2000);
    }


}

CSSEd.prototype.parameterOver = function (lit, pid) {
    var that = this;
    if (this.attribute_timer) clearTimeout(this.attribute_timer);
    this.attribute_timer = 0;


    $("#subattri_" + this.current_subattribute).addClass("selected");
    var posi = $("#subattri_" + this.current_subattribute).position();
    var offs = $("#subattri_" + this.current_subattribute).offset();


    if (this.current_parameter != pid) {
        $("#param_" + this.current_parameter + "_cont").css("display","none");
    }
    var off = this.relPos("param_" + pid, "param_cont");
    console.log(lit + " " + pid + " off=" + off.top + " posi=" + posi.top + " offs=" + offs.top);


    if (off) {
		$("#param_" + pid + "_cont").css("display",lit ? "block" : "none")

		//if (off.top
		$("#param_" + pid + "_cont").css("top",(off.top-2) + "px");

		this.current_parameter = pid;
		this.attribute_timer = setTimeout(function () {
		   that.parameterOver(0, this.current_parameter);
		},2000);
    }


}
CSSEd.prototype.addParam = function () {

    this.params.style.display = "block";
    this.me.style.filter = "blur(5px)";

}

CSSEd.prototype.buildParams = function () {
    var that = this;
    this.params = document.createElement("div");


    var ss = "";
    var s1 = "";
    var s2 = "";
    var cnt = 0;

    var but = "<svg viewbox='0 0 100 100'> <path class='adder' d='M 36,62 L 0,62 L 0,37 L 36,37 L 36,0 L 62,0 L 62,37  L 100,37  L 100,62  L 62,62 L 62,100 L 36,100 L 36,62 Z' transform=' scale(.75,.75) translate(18,7)'></svg>";



        //alert("got one");
    this.words = {};
    this.num_attributes = 0;
	for (var b in this.db) {
	    p = b;

	    var c = "";
	    for (var a = 0; a < p.length; a++) {
	        if (p[a] >= "a" && p[a] <= "z") c += p[a];
	        else break;
	    }
	    if (!this.words.hasOwnProperty(c)) this.words[c] = [];
	    this.words[c].push({id:b,obj:this.db[b]});

	}


	for (var b in this.words) {
        this.words[b][0].index = this.num_attributes;
        this.num_attributes++;
		ss += "<div id='attri_" + b + "' class=attribute style='' onmouseover='CSS.attriOver(event, 1,\"" + b + "\")' ontouchover='CSS.attriOver(event,1,\"" + b + "\")' ><span class='selector title'  >" + (b) + "&nbsp;</span>";

		s1 += "<div id='attri_" + b + "_cont' style='position:absolute;display:none;font-size:14px;margin-top:2px;top:0px;left:79px;'>";

		for (var c = 0; c < this.words[b].length; c++) {
			var p = this.words[b][c];

            var tit = p.id.substring(b.length, p.id.length);
            var t2 = b + "_" + tit;
			s1 += "<div id='subattri_" + t2 + "' class=subattribute onmouseover='CSS.subattriOver(1," + c + ",\"" + t2 + "\",0)' ontouchover='CSS.subattriOver(1," + c + "\"" + t2 + "\",0)'>" + tit + "&nbsp;</div>";


			s2 += "<div id='subattri_" + (t2) + "_cont' style='position:absolute;font-size:14px;display:none;margin-top:2px;top:0px;left:183px;'>";


			for (var d = 0; d < p.obj.options.length; d++) {
				var dp = p.obj.options[d];

				s2 += "<div id='param_" + (t2 + "_" + d) + "' class=parameter style=''  onmouseover='CSS.parameterOver(1,\"" + (t2 + "_" + d) + "\")' ontouchover='CSS.parameterOver(1,\"" + (t2 + "_" + d) + "\")'><nobr>&nbsp;" + dp.value + "&nbsp;</nobr></div>";


			}


			s2 += "</div>"


		}
        s1 += "</div>";
        ss += "</div>";
    }



   // alert(this.me.offsetHeight);
    this.params.id = "param_cont";
    this.params.style.position = "absolute";
    this.params.style.left = "10px";
    this.params.style.top = "10px";
    this.params.style.width = "320px";
    this.params.style.overflow = "hidden";
    this.params.style.height = (this.me.offsetHeight-15) + "px";
    this.params.style.padding = "5px";
    this.params.style.borderRadius = "10px";
    this.params.style.boxSizing = "border-box";
    this.params.style.background = "rgba(0,0,0,.6)";
    this.params.style.color = "rgba(0,0,0,1.0)";
    this.params.innerHTML = "<div id='attri_cont' onClick='CSS.hideParams(event)' style='cursor:pointer;position:relative;'>" + ss + s1 + s2 + "</div>";

    this.me.appendChild(this.params);
    this.params.onclick = this.hideParams;

    this.params.style.display = "none";
}

CSSEd.prototype.hideParams = function (e) {
	 if (this.attri_timer) clearInterval(this.attri_timer);
	 this.attri_timer = 0;
	 if (!e || (e.target.id == "param_cont") && this.params) this.params.style.display = "none";
	 else if (e.target.id == "attri_cont" && this.params) this.params.style.display = "none";

}

CSSEd.prototype.cssSoloParam = function (p, color, dash) {

    var g = color ? "background-image:-webkit-linear-gradient(left,rgba(" + color + ",.2) 0%, rgba(" + color + ",0) 75%, rgba(" + color + ",0) 100%);" : "";
    var ss = "<div style='overflow:hidden;width:100%;white-space:nowrap;'><nobr><div style='display:inline-block;overflow:hidden;float:left;margin-left:10px;margin-top:0px;margin-bottom:0px;padding-left:10px;background-color:rgba(255,255,255,.4);padding-right:5px;width:100px;border-radius:8px;border:1px " + (dash ? "dashed" : "solid") + " rgba(" + (color ? color : "100,100,100") + ",.3);" + g + "'><nobr>" + p + "</nobr></div>";

//	var p2 = CSS.param(p);

	ss += "</nobr></div>";

    return ss;
}

CSSEd.prototype.rightCssParam = function (id, p, v, color, dash, left, right) {

    var ss = "<div " + (id ? "id='" + id + "' " : "") + "style='overflow:hidden;width:100%;white-space:nowrap;'><nobr>";

	var p2 = CSS.param(p);

	ss += "<div " + (right ? right : "") +  " class='css_right css_p" + (color ? color : "gray") + "' " + (dash ? "style='border-style:dashed;'" : "") + "><nobr>" + ((p2 && p2.draw) ? p2.draw(2,2,20,10,v) : v) + "</nobr></div></nobr></div>";

    return ss;
}

CSSEd.prototype.cssTitleParam = function (id, v, color, dash, left, right) {

    var ss = "<div " + (id ? "id='" + id + "' " : "") + "style='overflow:hidden;width:100%;white-space:nowrap;'><div   " + (left ? left : "") +  " class='css_title css_" + (color ? color : "gray") + "' " + (dash ? "style='border-style:dashed;'" : "") + " ><nobr>" + v + "</nobr></div></div>";

    var ss = "<div " + (id ? "id='" + id + "' " : "") + "style='overflow:hidden;width:100%;white-space:nowrap;'><div   " + (left ? left : "") +  " class='css_title css_c" + (color ? color : "gray") + "' " + (dash ? "style='border-style:dashed;'" : "") + " ><nobr>" + v + "</nobr></div></div>";


    return ss;
}
CSSEd.prototype.cssParam = function (id, p, v, color, dash, left, right) {

    var ss = "<div " + (id ? "id='" + id + "' " : "") + "style='overflow:hidden;width:100%;white-space:nowrap;'><div   " + (left ? left : "") +  " class='css_left css_" + (color ? color : "gray") + "' " + (dash ? "style='border-style:dashed;'" : "") + " ><nobr>" + p + "</nobr></div>";

	var p2 = CSS.param(p);

	ss += "<div " + (right ? right : "") +  " class='css_right css_p" + (color ? color : "gray") + "' " + (dash ? "style='border-style:dashed;'" : "") + "><nobr>" + ((p2 && p2.draw) ? p2.draw(2,2,20,10,v) : v) + "</nobr></div></div>";

    return ss;
}
CSSEd.prototype.cssParamOld = function (id, p, v, color, dash) {

    var g = color ? "background-image:-webkit-linear-gradient(left,rgba(" + color + ",.2) 0%, rgba(" + color + ",0) 75%, rgba(" + color + ",0) 100%);" : "";
    var ss = "<div " + (id ? "id='" + id + "' " : "") + "style='overflow:hidden;width:100%;white-space:nowrap;'><nobr><div style='display:inline-block;overflow:hidden;float:left;margin-left:10px;margin-top:0px;margin-bottom:0px;padding-left:10px;background-color:rgba(255,255,255,.4);padding-right:5px;width:100px;border-radius:8px;border-top-right-radius:0px;border-bottom-right-radius:0px;border:1px " + (dash ? "dashed" : "solid") + " rgba(" + (color ? color : "100,100,100") + ",.3);" + g + "'><nobr>" + p + "</nobr></div>";

	var p2 = CSS.param(p);

	ss += "<div style='overflow:hidden;position:relative;display:inline-block;margin-left:2px;margin-top:0px;margin-bottom:0px;padding-left:5px;max-width:calc(100% - 108px);background-color:rgba(255,255,255,.4);padding-right:10px;border-radius:8px;border-top-left-radius:0px;border-bottom-left-radius:0px;border:1px " + (dash ? "dashed" : "solid") + " rgba(" + (color ? color : "100,100,100") + ",.3);'><nobr>" + ((p2 && p2.draw) ? p2.draw(2,2,20,10,v) : v) + "</nobr></div></nobr></div>";

    return ss;
}

CSSEd.prototype.refresh = function () {
   // alert("resize");
    if (!this.iscroll) {

		this.iscroll = new IScroll(this.me, {
					scrollX: false,
					scrollY: true,
					eventPassthrough:"horizontal",
					momentum: true,
					directionLockThreshold:1000,
					keyBindings: true,
					useTransition:false,
					mouseWheel:true,
					bounceTime: 500,
					fclick:function (e) {
						alert("MAIN " + e.id);
					},
				});
        // alert("done");

    }
    var d = document.getElementById("css_placer");
    var o = $("#css_placer").position();
   // alert(o.top);
    document.getElementById("css_scroller").style.height = o.top + "px";
    this.iscroll.refresh();


}
CSSEd.prototype.search = function (t) {
    var s = t.value.length > 2 ? t.value : 0;
    for (var a = 0; a < this.pages.length; a++) {
        var hit_page = 0;
        var page = this.pages[a];
        if (!page.icont) page.icont = document.getElementById("sheet_" + page.id);
        if (!page.cont) page.cont = document.getElementById("sheet_" + page.id + "_cont");

		for (var b = 0; page && b < page.suniques.length; b++) {
			var ps = page.suniques[b];
			var hit_selector = 0;
			var hit = 0;
			if (!ps.icont) ps.icont = document.getElementById("sheet_" + page.id + "_" + b);
			if (!ps.cont) ps.cont = document.getElementById("sheet_" + page.id + "_" + b + "_cont");

			for (var r = 0; r < ps.hparams.length; r++) {
			    hit = 0;
			    if (!ps.hparams[r].cont) ps.hparams[r].cont = document.getElementById(page.id + "_" + b + "_hp_" + r);

			    if (s && (ps.hparams[r].id.indexOf(s) != -1)) hit = 1;
			    else if (s && (ps.hparams[r].value.indexOf(s) != -1)) hit = 1;

			    ps.hparams[r].cont.style.display = (!s || hit) ? "block" : "none";
			    if (hit) hit_selector = 1;

            }
			for (var r = 0; r < ps.aparams.length; r++) {
			    hit = 0;
			    if (!ps.aparams[r].cont) ps.aparams[r].cont = document.getElementById(page.id + "_" + b + "_ap_" + r);

			    if (s && (ps.aparams[r].id.indexOf(s) != -1)) hit = 1;
			    else if (s && (ps.aparams[r].value.indexOf(s) != -1)) hit = 1;

			    ps.aparams[r].cont.style.display = (!s || hit) ? "block" : "none";
			    if (hit) hit_selector = 1;
            }


            ps.cont.style.display = (hit_selector) ? "block" : "none";
            ps.icont.style.display = (!s || hit_selector) ? "block" : "none";
            if (hit_selector) hit_page = 1;



        }
        page.cont.style.display = (hit_page) ? "block" : "none";
        page.icont.style.display = (!s || hit_page) ? "block" : "none";
    }
    this.refresh();
}

CSSEd.prototype.clickAttr = function (val) {
    var that = this;
    //alert ("single " + val);
    opts = val.split("_");

    var shift = window.event.shiftKey;
    CSS.event = window.event;

    if (!shift) $(".aselected").removeClass("aselected");

    $("#" + val).addClass("aselected");

    return;
    var param = 0;
    for (var a = 0; a < this.pages.length; a++) {
        if (this.pages[a].id == opts[0]) {
			var page = this.pages[a];
            var ps = page.suniques[opts[1]];

            if (opts[2] == "ap") param = ps.aparams[opts[3]];
            else if (opts[2] == "hp") param = ps.hparams[opts[3]];
            break;
            //alert(param.id + ":" + param.value);
		}
    }
    var p = param ? this.param(param.id) : 0;
    if (!p) {
        console.log("ERROR NO PARAM FOR " + param.id);
        if (this.pop_attributes.parentNode) this.pop_attributes.parentNode.removeChild(this.pop_attributes);
        return;
    }

    //alert(param.id + " " + p.options.length);
    var ss = "";
    var hit = -1;
    for (var a = 0; p && p.options && a < p.options.length; a++) {
        var v = p.options[a].value;
        if (v == param.value) hit = a;
       // alert("[" + v + "][" + param.value + "]");

        //var val = p.options[a].value;
        if (p.options[a].value == "px" && (param.value.indexOf("px") != -1)) {
            v = param.value;
            hit = a;
        }
        if (p.options[a].value == "%" && (param.value.indexOf("%") != -1)) {
		            v = param.value;
		            hit = a;
        }
        ss += this.rightCssParam(0,param.id, v, 0, 0, 0, 0); //id, p, v, color, dash, left, right

    }
   // alert(hit + " " + param.value);
    if (!this.pop_attributes) {
        this.pop_attributes = document.createElement("div");
	    this.pop_attributes.className = "css_popper";
	    this.pop_attributes.id = "css_popper";
    }
    this.pop_attributes.style.height = ((p.options.length+1)*(this.cell_height+4)+10) + "px";
    //alert(val);
    var off = $("#" + val).offset();
   // alert(off.left + " " + off.top);
    var off = this.relPos(val,"css_scroller");

    this.pop_attributes.style.top = ((off.top-13) - (hit != -1 ? (hit*(this.cell_height+4)) : 0)) + "px";
    this.pop_attributes.style.left = (off.left+116) + "px";
	this.pop_attributes.innerHTML = ss;
    document.getElementById("css_scroller").appendChild(this.pop_attributes);
    document.onmousedown = document.ontouchstart = function (e) {

        var p = e.target;
        var hit = 0;
        while (p && !hit) {
            if (p.id == "css_popper") hit = 1;
            else p = p.parentNode;

        }
        //alert("TEMP " + hit);
        if (!hit) {
            that.resetParam();
            that.pop_attributes.parentNode.removeChild(that.pop_attributes);
            document.onmousedown = document.ontouchstart = 0;
            return false;

        } else {
            return true;
        }
        document.onmouseup = document.ontouchend = function (e) {
            document.onmousedown = document.ontouchstart = 0;
            document.onmouseup = document.ontouchend = 0;

        }


    }


    //this.refresh();

}

CSSEd.prototype.doubleClickParam = function (val) {
    var that = this;
  //  alert ("double " + val);
}

CSSEd.prototype.overParam = function (v1, v2) {

    var p = v1.split("_");
    var found = 0;
    for (var a= 0; a < this.pages.length; a++) {
        if (this.pages[a].id == p[0]) {
            found = a;
            break;
        }

    }
    if (!found) return;
    var page = this.pages[found];
    var ps = page.suniques[p[1]];
    var param;
    if (p[2] == "ap") param = ps.aparams[p[3]];
    else param = ps.hparams[p[3]];
    CSS.clicked = param;
    if (param.rule.style) param.rule.style[param.id] = v2;
   // alert(param.rule);

    return;



}

CSSEd.prototype.setParam = function (v1, v2) {

    var p = v1.split("_");
    var found = 0;
    for (var a= 0; a < this.pages.length; a++) {
        if (this.pages[a].id == p[0]) {
            found = a;
            break;
        }

    }
    if (!found) return;
    var page = this.pages[found];
    var ps = page.suniques[p[1]];
    var param;
    if (p[2] == "ap") param = ps.aparams[p[3]];
    else param = ps.hparams[p[3]];
    CSS.clicked = param;
    if (param.rule.style) param.rule.style[param.id] = v2;
   // alert(param.rule);
   //ACTUALLY SET IT!!!

     param.value = v2;
     var d = document.getElementById(v1);
     if (d) d.childNodes[1].innerHTML = "<nobr>" + v2 + "</nobr>";
	this.pop_attributes.parentNode.removeChild(this.pop_attributes);
	document.onmousedown = document.ontouchstart = 0;

    return;



}

CSSEd.prototype.resetParam = function () {


    if (!this.clicked) return;
    var param = this.clicked;

    if (param.rule.style) param.rule.style[param.id] = param.value;




}

CSSEd.prototype.clickParam = function (val) {
    var that = this;
    //alert ("single " + val);
    opts = val.split("_");
    this.clicked = 0;
    var param = 0;
    for (var a = 0; a < this.pages.length; a++) {
        if (this.pages[a].id == opts[0]) {
			var page = this.pages[a];
            var ps = page.suniques[opts[1]];

            if (opts[2] == "ap") param = ps.aparams[opts[3]];
            else if (opts[2] == "hp") param = ps.hparams[opts[3]];
            break;
            //alert(param.id + ":" + param.value);
		}
    }
    var p = param ? this.param(param.id) : 0;
    if (!p) {
        console.log("ERROR NO PARAM FOR " + param.id);
        if (this.pop_attributes.parentNode) this.pop_attributes.parentNode.removeChild(this.pop_attributes);
        return;
    }

    //alert(param.id + " " + p.options.length);
    var ss = "";
    var hit = -1;
    for (var a = 0; p && p.options && a < p.options.length; a++) {
        var v = p.options[a].value;
        if (v == param.value) hit = a;
       // alert("[" + v + "][" + param.value + "]");

        //var val = p.options[a].value;
        if (p.options[a].value == "px" && (param.value.indexOf("px") != -1)) {
            v = param.value;
            hit = a;
        }
        if (p.options[a].value == "%" && (param.value.indexOf("%") != -1)) {
		            v = param.value;
		            hit = a;
        }
        ss += this.rightCssParam(0,param.id, v, hit==a ? "current" : 0, 0, 0, " onmouseover='CSS.overParam(\"" + val + "\",\"" + v + "\")'  onClick='CSS.setParam(\"" + val + "\",\"" + v + "\")' "); //id, p, v, color, dash, left, right

    }
   // alert(hit + " " + param.value);
    if (!this.pop_attributes) {
        this.pop_attributes = document.createElement("div");
	    this.pop_attributes.className = "css_popper";
	    this.pop_attributes.id = "css_popper";
    }
    this.pop_attributes.style.height = ((p.options.length+1)*(this.cell_height+5)-8) + "px";
    //alert(val);
    var off = $("#" + val).offset();
   // alert(off.left + " " + off.top);
    var off = this.relPos(val,"css_scroller");

    this.pop_attributes.style.top = ((off.top-13) - (hit != -1 ? (hit*(this.cell_height+4)) : 0)) + "px";
    this.pop_attributes.style.left = (off.left+116) + "px";
	this.pop_attributes.innerHTML = ss;
    document.getElementById("css_scroller").appendChild(this.pop_attributes);
    document.onmousedown = document.ontouchstart = function (e) {

        var p = e.target;
        var hit = 0;
        while (p && !hit) {
            if (p.id == "css_popper") hit = 1;
            else p = p.parentNode;

        }
        //alert("TEMP " + hit);
        if (!hit) {
            that.pop_attributes.parentNode.removeChild(that.pop_attributes);
            document.onmousedown = document.ontouchstart = 0;
            that.resetParam();
            return false;

        } else {
            return true;
        }
        document.onmouseup = document.ontouchend = function (e) {
            document.onmousedown = document.ontouchstart = 0;
            document.onmouseup = document.ontouchend = 0;

        }


    }


    //this.refresh();

}

CSSEd.prototype.build = function (cont) {
    var me = document.createElement("div");

    this.sheets = document.styleSheets;
    var ss = "";
    var cnt = 0;

    var but = "<svg viewbox='0 0 100 100'> <path class='adder' d='M 36,62 L 0,62 L 0,37 L 36,37 L 36,0 L 62,0 L 62,37  L 100,37  L 100,62  L 62,62 L 62,100 L 36,100 L 36,62 Z' transform=' scale(.75,.75) translate(18,7)'></svg>";

    ss += "<div id=css_scroller style='width:340px;height:100%;position:absolute;left:0px;top:0px;overflow:visible;'>";

    function get_base(val) {
		var valids = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-_";
		var valids0 = ".#ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890_-";
		var specials = "@:[*"
		var ss = "";
		console.log("CHECKING " + val);
		for (var a = 0; a < val.length; a++) {

			var c = val.charAt(a);
			if (!a) {
				if (specials.indexOf(c) != -1) {
					ss = val;
					break;
				}
				if (valids0.indexOf(c) != -1) ss += c;
				else break;
			} else {
				if (valids.indexOf(c) != -1) ss += c;
				else break;
			}
		}
        val = ss;
        return val;

    }

    this.pages = [];

    function make_selector(r) {
        if (r.cssText.indexOf("@font-face") == 0) {
		    return "@font-face:" + r.style["fontFamily"];
        } else if (r.cssText.indexOf("@media") == 0) {
            return "@media";
        }
        return r;
    }

    this.media_rules = [];

    for (var a = 0; a < document.styleSheets.length; a++) {
        var st = document.styleSheets[a];

        var id = st.href ? st.href.substring(st.href.lastIndexOf("/")+1,st.href.length) : "internal_" + cnt++;
		while (id.indexOf(".") != -1) id = id.substring(0, id.indexOf("."));// + "_" + id.substring(id.indexOf(".")+1, id.length);
        //alert(id);
        var page = {id:id,uniques:{},medias:[]};


        this.pages.push(page);

        var pounds = [];
        for (var b = 0; st.rules && b < st.rules.length; b++) {
            var r = st.rules[b].selectorText ? st.rules[b].selectorText : make_selector(st.rules[b]);
            if (!r) continue;
            if (st.rules[b].media) {
                //SUCK OUT MEDIA RULES
                var name = "media_" + page.medias.length;
                if (st.rules[b].cssRules[0].selectorText == ".media_name") {
                    name = st.rules[b].cssRules[0].style["content"];
                    name = name.substring(1,name.length-1);
                }

                var m = {id:name,rule:st.rules[b],rules:[]}
                page.medias.push(m);
                continue;
            }
            base = get_base(r);
            //if (base.charAt(0) == "#") {
            //    //SUCK OUT ALL THE ID RULES
            //    pounds.push(st.rules[b]);
            //    continue;
            //}
            if (!page.uniques[base]) page.uniques[base] = {id:base,sort:0,rules:[]}
            page.uniques[base].rules.push(st.rules[b]);
        }
        for (var b = 0; b < pounds.length; b++) {
			var r = "." + pounds[b].selectorText.substring(1,pounds[b].selectorText.length);
			base = get_base(r);
			if (!page.uniques[base]) {
				base = "#" + base.substring(1,base.length);
				page.uniques[base] = {id:base,sort:0,rules:[]}
			}
			page.uniques[base].rules.push(pounds[b]);
        }

        for (var b1 = 0; b1 < page.medias.length; b1++) {
            var rules = page.medias[b1].rule.cssRules;
            for (var b = 0; b < rules.length; b++) {
				if (rules[b].selectorText == ".media_name") continue;
                if (rules[b].selectorText.indexOf(" " + page.medias[b1].id) == -1) rules[b].selectorText = rules[b].selectorText + " " + page.medias[b1].id;
				var r = rules[b].selectorText;// + " " + page.medias[b1].id;
				//alert(r);
				//alert("adding media def " + page.medias[b1].id + " " + alert(r));
				base = get_base(r);
				if (!page.uniques[base]) {
					page.uniques[base] = {id:base,sort:0,rules:[]}
					//alert("ADDING MEDIA BASE???? - " + base);
				}
				rules[b].mediaName = page.medias[b1].id;
				page.uniques[base].rules.push(rules[b]);
				this.media_rules.push(rules[b]);
            }
        }

		page.suniques = [];
		for (var ar in page.uniques) page.suniques.push(page.uniques[ar]);
		page.suniques.sort(function(a, b) {
		        var a1 = ((a.id.charAt(0) == ".") || (a.id.charAt(0) == "#")) ? a.id.substring(1,a.id.length) : a.id;
		        var b1 = ((b.id.charAt(0) == ".") || (b.id.charAt(0) == "#")) ? b.id.substring(1,b.id.length) : b.id;
				if (a1 < b1) return -1;
				else if (a1 > b1) return 1;
				else return 0;


	    });
    }




	for (var a = 0; a < document.styleSheets.length; a++) {

		var st = document.styleSheets[a];
		var id = st.href ? st.href.substring(st.href.lastIndexOf("/")+1,st.href.length) : "internal_" + cnt++;
		while (id.indexOf(".") != -1) id = id.substring(0, id.indexOf("."));// + "_" + id.substring(id.indexOf(".")+1, id.length);

		//alert(id);
		var page = this.pages[a];

		ss += "<div id='sheet_" + id + "'  class=css_back style=''><div class='sheet_title' onClick='CSS.toggle(0,\"" + id + "\",-1)'>" + id + "</div><div id='sheet_" + id + "_cont' style='display:none;'>"

		for (var m = 0; m < page.medias.length; m++) {
		    var mm = page.medias[m];

			ss += "<div id='sheet_" + id + "_" + b + "' class='selector_back' style=''  ><span class='selector title' onClick='CSS.toggle(1,\"" + id + "\"," + b + ")'>@media - " + mm.id + "</span>&nbsp;<div class='addparam' onClick='CSS.addParam(\"" + b + "\")'>" + but + "</div><div id='sheet_" + id + "_" + b + "_cont' class='css_attr' style='display:none;margin-top:2px;'></div></div>";




		}


		var page = this.pages[a];

		var color = ["red","purple","green","blue","cyan","orange","brown","aqua","gold","lightpink","pink"];

		for (var b = 0; page && b < page.suniques.length; b++) {
			var ps = page.suniques[b];
			ss += "<div id='sheet_" + id + "_" + b + "' class='selector_back' style=''  ><span class='selector title' onClick='CSS.toggle(1,\"" + id + "\"," + b + ")'>" + ps.id + "</span>&nbsp;<div class='addparam' onClick='CSS.addParam(\"" + b + "\")'>" + but + "</div><div id='sheet_" + id + "_" + b + "_cont' class='css_attr' style='display:none;margin-top:2px;'>";
			ps.hparams = [];
			var cnt = 0;
			for (var r = 0;ps.rules && r < ps.rules.length; r++) {
				ps.colors = [];
				if (ps.id != ps.rules[r].selectorText)	{
					var st = ps.rules[r].selectorText;
					//if (ps.rules[r].mediaName) st += " " + ps.rules[r].mediaName;
					ps.hparams.push({id:ps.id,index:cnt,value:st ? st.substring(ps.id.length, st.length) : "",color:color[cnt],rule:0});
				   ps.rules[r].color = color[cnt];
				   cnt++;
				}
			}
			ps.aparams = [];
			cnt = 0;
			for (var r = 0;ps.rules && r < ps.rules.length; r++) {

				var text = ps.rules[r].cssText;
				if (text) {
					var tt = text.substring(text.indexOf("{")+1,text.lastIndexOf("}"));
					var t = tt.split(";");
					//if (a == 1 && ps.id == ".navigation") alert(tt);
var st = ps.rules[r].selectorText;
var sel = st ? st.substring(ps.id.length, st.length): 0;
					for (var c = 0; c < t.length-1; c++) {


						var p = t[c].substring(0, t[c].indexOf(":"));
						p = p.replace(/ /g,"");
						var v = t[c].substring(t[c].indexOf(":")+1,t[c].length);
						while (v.charAt(0) == " ") v = v.substring(1,v.length);

						ps.aparams.push({id:p,sel:sel,index:cnt,value:v,color:((ps.id != ps.rules[r].selectorText) ? ps.rules[r].color : 0),rule:ps.rules[r]});
					    cnt++;

					}
				} else alert(text);

			}
			if (ps.sort) ps.aparams.sort(function (a, b) {
				var a1 = (a.id.charAt(0) == "-") ? a.id.substring(1,a.id.length) : a.id;
				var b1 = (b.id.charAt(0) == "-") ? b.id.substring(1,b.id.length) : b.id;
				if (a1 < b1) return -1;
				else if (a1 > b1) return 1;
				else return 0;
			});
			//for (var r = 0; r < ps.hparams.length; r++) {
			//    ss += this.cssParam(id+ "_" + b + "_hp_" + r,ps.hparams[r].id,ps.hparams[r].value,ps.hparams[r].color, 0, 0, 0);
           // }
            //if (ps.hparams.length) ss += "<div class=css_divider></div>";
            var current = 0;
            var inside = 0;
			for (var r = 0; r < ps.aparams.length; r++) {
			    if (ps.aparams[r].sel != current && ps.aparams[r].sel != ps.id) {
			        if (inside) ss += "</div></div>";

			        var m = ps.aparams[r].rule.mediaName;
			       // if (m) alert(m);
			        var sel = ps.aparams[r].sel;
			        if (sel.indexOf(" " + m) != -1) {
			            sel = sel.substring(0,sel.indexOf(" " + m)) + " <span class='media_box'>" + m.toUpperCase() + "</span>";

			        }

			        ss += "<div id='sheet_" + id + "_" + b + "_hp_" + r + "' class='selector_back' style=''  ><span class='selector title' onClick='CSS.toggle(2,\"" + id + "\"," + b + "," + r + ")'>" + sel  + "</span>&nbsp;<div class='addparam' onClick='CSS.addParam(\"" + b + "\"," + r + ")'>" + but + "</div><div id='sheet_" + id + "_" + b + "_hp_" + r + "_cont' class='css_attr' style='display:none;margin-top:2px;'>";

			       // ss += this.cssTitleParam(id+ "_" + b + "_hp_" + r,ps.aparams[r].sel,ps.aparams[r].color, 0, 0, 0);
			        inside = 1;
			    }
			    ss += this.cssParam(id+"_" + b + "_ap_" + r, ps.aparams[r].id,ps.aparams[r].value,ps.aparams[r].color, 0,  " onClick='CSS.clickAttr(\"" + id+"_" + b + "_ap_" + r + "\")'" , " onDblClick='CSS.doubleClickParam(\"" + id+"_" + b + "_ap_" + r + "\")' onClick='CSS.clickParam(\"" + id+"_" + b + "_ap_" + r + "\")' ");
			    current = ps.aparams[r].sel;

            }
            if (inside) ss += "</div></div>";
			ss += "</div></div>";

		}


		ss += "</div></div>";

	}

    ss += "<div id=css_placer style='width:100%;height:1px;'></div>";
    ss += "</div>";

    me.style.position = "absolute";
    me.style.left = "0px";
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
    this.buildParams();

}

CSS = new CSSEd();
