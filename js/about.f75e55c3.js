(self["webpackChunkTeacherExamination"]=self["webpackChunkTeacherExamination"]||[]).push([[443],{5743:function(t){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",o="hour",a="day",u="week",c="month",f="quarter",l="year",h="date",d="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+p(r,2,"0")+":"+p(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,o=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:u,d:a,D:h,h:o,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",g={};g[M]=v;var D=function(t){return t instanceof Y},S=function t(e,n,r){var i;if(!e)return M;if("string"==typeof e){var s=e.toLowerCase();g[s]&&(i=s),n&&(g[s]=n,i=s);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var a=e.name;g[a]=e,i=a}return!r&&i&&(M=i),i||!r&&M},w=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new Y(n)},b=y;b.l=S,b.i=D,b.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var Y=function(){function v(t){this.$L=S(t.locale,null,!0),this.parse(t)}var p=v.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return b},p.isValid=function(){return!(this.$d.toString()===d)},p.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return w(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<w(t)},p.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),d=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case l:return r?d(1,0):d(31,11);case c:return r?d(1,v):d(0,v+1);case u:var M=this.$locale().weekStart||0,g=(m<M?m+7:m)-M;return d(r?p-g:p+(6-g),v);case a:case h:return $(y+"Hours",0);case o:return $(y+"Minutes",1);case s:return $(y+"Seconds",2);case i:return $(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,u=b.p(t),f="set"+(this.$u?"UTC":""),d=(n={},n[a]=f+"Date",n[h]=f+"Date",n[c]=f+"Month",n[l]=f+"FullYear",n[o]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[u],$=u===a?this.$D+(e-this.$W):e;if(u===c||u===l){var m=this.clone().set(h,1);m.$d[d]($),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d]($);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[b.p(t)]()},p.add=function(r,f){var h,d=this;r=Number(r);var $=b.p(f),m=function(t){var e=w(d);return b.w(e.date(e.date()+Math.round(t*r)),d)};if($===c)return this.set(c,this.$M+r);if($===l)return this.set(l,this.$y+r);if($===a)return m(1);if($===u)return m(7);var v=(h={},h[s]=e,h[o]=n,h[i]=t,h)[$]||1,p=this.$d.getTime()+r*v;return b.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,o=this.$m,a=this.$M,u=n.weekdays,c=n.months,f=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},l=function(t){return b.s(s%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:b.s(a+1,2,"0"),MMM:f(n.monthsShort,a,c,3),MMMM:f(c,a),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,u,2),ddd:f(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:b.s(s,2,"0"),h:l(1),hh:l(2),a:h(s,o,!0),A:h(s,o,!1),m:String(o),mm:b.s(o,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(t,e){return e||$[t]||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,h,d){var $,m=b.p(h),v=w(r),p=(v.utcOffset()-this.utcOffset())*e,y=this-v,M=b.m(this,v);return M=($={},$[l]=M/12,$[c]=M,$[f]=M/3,$[u]=(y-p)/6048e5,$[a]=(y-p)/864e5,$[o]=y/n,$[s]=y/e,$[i]=y/t,$)[m]||y,d?M:b.a(M)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return g[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},p.clone=function(){return b.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},v}(),O=Y.prototype;return w.prototype=O,[["$ms",r],["$s",i],["$m",s],["$H",o],["$W",a],["$M",c],["$y",l],["$D",h]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,Y,w),t.$i=!0),w},w.locale=S,w.isDayjs=D,w.unix=function(t){return w(1e3*t)},w.en=g[M],w.Ls=g,w.p={},w}))},7064:function(t,e,n){"use strict";n.d(e,{S:function(){return i},h:function(){return s}});var r=n(3396);const i=Symbol();function s(t){const e=(0,r.f3)(i,null);e&&(0,r.YP)(e,(e=>{e&&t()}))}},998:function(t,e,n){"use strict";n.d(e,{F:function(){return s}});var r=n(3396),i=n(4452);function s(t){const e=(0,r.FN)();e&&(0,i.l7)(e.proxy,t)}},90:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return H}});n(1958),n(368),n(6742);var r=n(8395),i=n(3396),s=n(9242),o=n(4870),a=n(2981),u=n(5737),c=n(6300),f=n(5634),l=n(998),h=n(7064),d=n(176);const[$,m]=(0,a["do"])("notice-bar"),v={text:String,mode:String,color:String,delay:(0,u.SI)(1),speed:(0,u.SI)(60),leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null}};var p=(0,i.aZ)({name:$,props:v,emits:["close","replay"],setup(t,{emit:e,slots:n}){let r,a=0,u=0;const $=(0,o.iH)(),v=(0,o.iH)(),p=(0,o.qj)({show:!0,offset:0,duration:0}),y=()=>n["left-icon"]?n["left-icon"]():t.leftIcon?(0,i.Wm)(d.J,{class:m("left-icon"),name:t.leftIcon},null):void 0,M=()=>"closeable"===t.mode?"cross":"link"===t.mode?"arrow":void 0,g=n=>{"closeable"===t.mode&&(p.show=!1,e("close",n))},D=()=>{if(n["right-icon"])return n["right-icon"]();const t=M();return t?(0,i.Wm)(d.J,{name:t,class:m("right-icon"),onClick:g},null):void 0},S=()=>{p.offset=a,p.duration=0,(0,f.Wn)((()=>{(0,f.d1)((()=>{p.offset=-u,p.duration=(u+a)/+t.speed,e("replay")}))}))},w=()=>{const e=!1===t.scrollable&&!t.wrapable,r={transform:p.offset?`translateX(${p.offset}px)`:"",transitionDuration:`${p.duration}s`};return(0,i.Wm)("div",{ref:$,role:"marquee",class:m("wrap")},[(0,i.Wm)("div",{ref:v,style:r,class:[m("content"),{"van-ellipsis":e}],onTransitionend:S},[n.default?n.default():t.text])])},b=()=>{const{delay:e,speed:n,scrollable:i}=t,s=(0,c.Xq)(e)?1e3*+e:0;a=0,u=0,p.offset=0,p.duration=0,clearTimeout(r),r=setTimeout((()=>{if(!$.value||!v.value||!1===i)return;const t=(0,f.EL)($).width,e=(0,f.EL)(v).width;(i||e>t)&&(0,f.d1)((()=>{a=t,u=e,p.offset=-u,p.duration=u/+n}))}),s)};return(0,h.h)(b),(0,f.Ib)(b),(0,f.OR)("pageshow",b),(0,l.F)({reset:b}),(0,i.YP)((()=>[t.text,t.scrollable]),b),()=>{const{color:e,wrapable:n,background:r}=t;return(0,i.wy)((0,i.Wm)("div",{role:"alert",class:m({wrapable:n}),style:{color:e,background:r}},[y(),w(),D()]),[[s.F8,p.show]])}}});const y=(0,r.n)(p);var M=y,g=n(5743),D=n.n(g);const S=(0,i._)("p",{class:"mg20"},"马上更新，敬请期待日更",-1),w=(0,i.Uk)(" 距离考编还有八个月 "),b=(0,i._)("iframe",{src:"https://kdocs.cn/l/ceKapMNlMOVQ",frameborder:"0"},null,-1);var Y=(0,i.aZ)({setup(t){const e=(0,o.iH)();(0,o.iH)(),D()().subtract(2,"day").format("YYYY-MM-DD HH:mm:ss"),D()().format("YYYY-MM-DD HH:mm:ss"),D()().add(2,"day").format("YYYY-MM-DD HH:mm:ss"),(0,o.qj)({name:"",phone:"",code:""});(0,i.bv)((()=>{}));return(t,n)=>((0,i.wg)(),(0,i.iD)("div",{ref_key:"root",ref:e,class:"text-center"},[(0,i.Wm)((0,o.SU)(M),{"left-icon":"volume-o",text:"每天进步一小点，和自己比较"}),S,w,b],512))}});const O=Y;var H=O}}]);