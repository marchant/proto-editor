function Edit() {
    this.id = "edit";
    this.current_format = 4;

if (!this.formats) this.formats = [{
        id:"phone_land",
        width:540,
        height:320,
        pad_left:50,
        pad_right:50,
        pad_top:5,
        pad_bottom:5,
        radius:16
        },{
        id:"phone_port",
        width:320,
        height:540,
        pad_left:5,
        pad_right:5,
        pad_top:50,
        pad_bottom:50,
        radius:16
        },{
        id:"tab_land",
        width:1024,
        height:768,
        pad_left:50,
        pad_right:50,
        pad_top:5,
        pad_bottom:5,
        radius:16
        },{
        id:"tab_port",
        width:768,
        height:1024,
        pad_left:5,
        pad_right:5,
        pad_top:50,
        pad_bottom:50,
        radius:16
        },{
        id:"comp",
        width:100,
        height:100,
        pad_left:0,
        pad_right:0,
        pad_top:0,
        pad_bottom:0,
        radius:0
        },{
        id:"tv",
        width:1280,
        height:720,
        pad_left:5,
        pad_right:5,
        pad_top:5,
        pad_bottom:5,
        radius:8
        }];

    if (0) for (var a = 0;a < this.formats.length; a++) {
         this.formats[a].pad_left = 0;
         this.formats[a].pad_right = 0;
         this.formats[a].pad_top = 0;
         this.formats[a].pad_bottom = 0;
    }
    this.current_format = 5;

}
Edit.prototype.toggle = function (opt, id, obj) {

    if (opt == 1) {
        if ($("#edit_" + id).hasClass("off")) {
            $(".edit_rpane").addClass("off");
        }
    }
    if ($("#edit_" + id).hasClass("off")) {
        $("#edit_" + id).removeClass("off");
    } else {
        $("#edit_" + id).addClass("off");
        $("#edit_side_" + id).removeClass("on");

    }
    if (opt == 1) {
        $(".hedit_title").removeClass("on");
        if ($("#edit_" + id).hasClass("off")) {
		    $("#edit_side_" + id).removeClass("on");
        } else {

            $("#edit_side_" + id).addClass("on");
        }
    }
    //alert(id);
}


Edit.prototype.format = function (index) {

    if (!this.edit_cont) this.edit_cont = document.getElementById("edit_live_cont");


    this.current_format = index;

    var f = this.formats[index];
    var w = (f.width == 100) ? "100%" : f.width + "px";
    var h = (f.height == 100) ? "100%" : f.height + "px";
    CSS.setCss("#edit_live_device","width",w);
    //CSS.setCss("#edit_live_device","flex-basis",w);
    CSS.setCss("#edit_live_device","height",h );
    CSS.setCss("#edit_live_device","padding-left",f.pad_left + "px");
    CSS.setCss("#edit_live_device","padding-top",f.pad_top + "px");
    CSS.setCss("#edit_live_device","padding-right",f.pad_right + "px");
    CSS.setCss("#edit_live_device","padding-bottom",f.pad_bottom + "px");
    CSS.setCss("#edit_live_device","border-radius",f.radius + "px");
    CSS.setCss("#edit_live_clip","width",w);
    CSS.setCss("#edit_live_clip","height",h);
    CSS.setCss("#fullscreen","width",w);
    CSS.setCss("#fullscreen","height",h);


    $(".format").removeClass("on");
    $("#edit_" + f.id).addClass("on");

   // var sx = this.edit_cont.offsetWidth/(f.width+f.pad_left+f.pad_right);
   // var sy = this.edit_cont.offsetHeight/(f.height+f.pad_top+f.pad_bottom);
    var sx = this.edit_cont.offsetWidth/(f.width+f.pad_left+f.pad_right);
    var sy = this.edit_cont.offsetHeight/(f.height+f.pad_top+f.pad_bottom);


    if (f.width == 100) sx = sy = 1.0;

    var sc = sx < sy ? sx : sy;

    if (sc > 1.0) sc = 1.0;

    console.log("calc cont width = " + this.edit_cont.offsetWidth + "," + this.edit_cont.offsetHeight + " " + f.width + "," + f.height + " scale=" + sc);


    CSS.setCss("#edit_live_device","-webkit-transform","scaleX(" + sc + ") scaleY(" + sc + ")");
    //var w2 = document.getElementById("edit_live_device").offsetWidth;
    //var w2 = document.getElementById("edit_live_device").offsetHeight;

}

Edit.prototype.build = function (parent) {
    var that = this;
    this.parent = document.getElementById(parent);
    this.container = document.createElement("div");
    this.container.className = "edit_container";

    this.proj = document.createElement("div");
    this.proj.id = "edit_proj";
    this.proj.className = "edit_proj edit_pane";
    this.proj.innerHTML = "<div name='edit' class='edit_title' onClick='EDIT.toggle(0,\"proj\")'><span >PROJ</span></div>";

    this.css = document.createElement("div");
    this.css.id = "edit_css";
    this.css.className = "edit_css edit_pane";
    this.css.innerHTML = "<div name='edit' class='edit_title' onClick='EDIT.toggle(0,\"css\")'><span >CSS</span></div><input class=css_search onkeyup='CSS.search(this)' value='Search'/>";

    this.dom = document.createElement("div");
    this.dom.id = "edit_dom";
    this.dom.className = "edit_dom edit_pane";
    this.dom.innerHTML = "<div name='edit' class='edit_title' onClick='EDIT.toggle(0,\"dom\")'><span >DOM</span></div>";

    this.live = document.createElement("live");
    this.live.id = "edit_live";
    var md = function(i) {return " onClick='EDIT.format(" + i + ")' ";}
    this.live.className = "edit_live edit_pane";
    this.live.innerHTML = "<div name='edit' class='edit_title' ionClick='EDIT.toggle(0,\"live\")'><span >LIVE</span></div><div id=edit_device_cont><div id=edit_phone_land " + md(0) + " class=format></div><div id=edit_phone_port" + md(1) + " class=format></div><div id=edit_tab_land" + md(2) + " class=format></div><div id=edit_tab_port " + md(3) + " class=format></div><div id=edit_comp" + md(4) + " class='format on'></div><div id=edit_tv" + md(5) + " class=format></div></div><div id='edit_live_cont' ><div id='edit_live_device'><div id='edit_live_clip'><div id='contents'></div></div></div></div>";


    this.insp = document.createElement("div");
    this.insp.id = "edit_insp";
    this.insp.className = "edit_insp edit_rpane off";
    this.insp.innerHTML = "<div name='edit' class='edit_title' onClick='EDIT.toggle(0,\"insp\")'><span >INFO</span></div>";

    this.pale = document.createElement("div");
    this.pale.id = "edit_pale";
    this.pale.className = "edit_pale edit_rpane off";
    this.pale.innerHTML = "<div name='edit' class='edit_title' onClick='EDIT.toggle(0,\"pale\")'><span >PALETTE</span></div>";

    this.dumb = document.createElement("div");
    this.dumb.id = "edit_dumb";
    this.dumb.className = "edit_dumb edit_pane";
    this.dumb.innerHTML = "<div id='edit_side_insp' name='hedit' class='hedit_title' onClick='EDIT.toggle(1,\"insp\",this)'><span>&nbsp;&nbsp;INFO&nbsp;&nbsp;</span></div><div id=edit_side_pale name='hedit' class='hedit_title' onClick='EDIT.toggle(1,\"pale\",this)'><span >&nbsp;&nbsp;PALETTE&nbsp;&nbsp;</span></div>";

    this.container.appendChild(this.proj);
    this.container.appendChild(this.css);
    this.container.appendChild(this.dom);
    this.container.appendChild(this.live);
    this.container.appendChild(this.insp);
    this.container.appendChild(this.pale);
    this.container.appendChild(this.dumb);

    document.body.appendChild(this.container);


    CSS.build(this.css);
    setTimeout(function () {
        that.parent.parentNode.removeChild(that.parent);
        var c = document.getElementById("contents");
        c.parentNode.appendChild(that.parent);
        c.parentNode.removeChild(c);
        DOM.build(that.parent,that.dom);
    },1000);

    $(window).resize(function() {
	         EDIT.format(EDIT.current_format);
	         CSS.refresh();
	         if (!that.clip) that.clip = document.getElementById("edit_live_clip");
	         f = EDIT.formats[EDIT.current_format];
	         if (EDIT.onresize) EDIT.onresize(f.width, f.height);
		    //clearTimeout(resizeTimer);
		    //var resizeTimer = setTimeout(AMK.doResize, 1000);
	});

}

EDIT = new Edit();