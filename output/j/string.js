$.extend(Function.prototype,{makeArray:function(t){var e=this,i=[];if(null!=t){var n=t.length;if(null==n||"string"==typeof t||e.isFunction(t)||t.setInterval)i[0]=t;else for(;n;)i[--n]=t[n]}return i}}),$.extend(String.prototype,{trim:function(){return this.replace(/(^\s*)|(\s*$)/g,"")},trimAll:function(t){return t.replace(/\s/g,"")},format:function(){var t=this;if(arguments.length>0){var e=1==arguments.length&&$.isArray(arguments[0])?arguments[0]:$.makeArray(arguments);$.each(e,function(e,i){t=t.replace(new RegExp("\\{"+e+"\\}","g"),i)})}return t},substitute:function(t){return t&&"object"==typeof t?this.replace(/\{([^{}]+)\}/g,function(e,i){var n=t[i];return void 0!==n?""+n:""}):this.toString()},parseJSON:function(){return new Function("return "+this.toString())()},parseDate:function(){return(new Date).parse(this.toString())},replaceAll:function(t,e){return this.replace(new RegExp(t,"gm"),e)},parseAttrJSON:function(){for(var t={},e=this.toString().split(";"),i=0;i<e.length;i++)if(!(""===e[i].trim()||e[i].indexOf(":")<1)){var n=e[i].sliceBefore(":").trim(),r=e[i].sliceAfter(":").trim();""!==n&&""!==r&&(t[n.toCamelCase()]=r._toRealValue())}return t},sliceAfter:function(t){return this.indexOf(t)>=0?this.substring(this.indexOf(t)+t.length,this.length):""},sliceBefore:function(t){return this.indexOf(t)>=0?this.substring(0,this.indexOf(t)):""},padLeft:function(t,e){return this.length>=t?this.toString():this._pad(t,e,0)}});var _tip,tID;$('<div class="wrapper"></div>').appendTo("body");var tipBox=function(t){t&&(_tip&&_tip.remove()&&clearTimeout(tID),_tip=$('<div class="tips_overlay"><div class="tipBox"><div class="msg"><h2><i></i>'+t+"</h2></div></div></div>").appendTo(".wrapper"),setTimeout(function(){_tip.addClass("overlay-in"),_tip.children(".tipBox").addClass("mask-in")},10),tID=setTimeout(function(){_tip&&(_tip.addClass("overlay-out"),_tip.children(".tipBox").addClass("mask-out"),_tip.remove(),_tip=null)},2e3))};window.tipBox=tipBox;