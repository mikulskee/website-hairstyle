(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(n,e,t){n.exports=t.p+"static/media/logo-main.c6784122.svg"},24:function(n,e,t){n.exports=t.p+"static/media/dots.0025f424.svg"},25:function(n,e,t){n.exports=t.p+"static/media/icon-facebook.9625cf5e.svg"},26:function(n,e,t){n.exports=t.p+"static/media/icon-instagram2.351e3d87.svg"},30:function(n,e,t){n.exports=t.p+"static/media/logo-main-white.bf4166ea.svg"},43:function(n,e,t){n.exports=t.p+"static/media/hero-image-min.17c00f80.png"},44:function(n,e,t){n.exports=t.p+"static/media/lines-pattern.19ccb419.svg"},49:function(n,e,t){n.exports=t.p+"static/media/girl-one-min.d7a11663.png"},50:function(n,e,t){n.exports=t.p+"static/media/girl-two-min.45c00865.png"},51:function(n,e,t){n.exports=t.p+"static/media/girl-three-min.a087e80e.png"},52:function(n,e,t){n.exports=t.p+"static/media/blob.41fda4ff.svg"},53:function(n,e,t){n.exports=t.p+"static/media/blob2.b0b9dd1f.svg"},54:function(n,e,t){n.exports=t.p+"static/media/dots2.f1c3ccc1.svg"},55:function(n,e,t){n.exports=t.p+"static/media/casual-girl-1.70d49214.jpg"},56:function(n,e,t){n.exports=t.p+"static/media/casual-girl-2.a301c4e4.jpg"},57:function(n,e,t){n.exports=t.p+"static/media/motto-girl.b0ef79e2.png"},58:function(n,e,t){n.exports=t.p+"static/media/owner.cdc5457f.png"},59:function(n,e,t){n.exports=t.p+"static/media/owner2.734484af.png"},60:function(n,e,t){n.exports=t.p+"static/media/blob3.6d7e189d.svg"},61:function(n,e,t){n.exports=t.p+"static/media/blob4.327ac58c.svg"},62:function(n,e,t){n.exports=t.p+"static/media/certificate1.ac1721d0.png"},63:function(n,e,t){n.exports=t.p+"static/media/certificate2.44117c08.png"},64:function(n,e,t){n.exports=t.p+"static/media/heroimage-about.f45ea3ed.jpg"},69:function(n,e,t){n.exports=t(86)},86:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(22),o=t.n(r),c=t(7),l=t(8),s=t(10),d=t(9),p=t(11),u=t(2),m=t(19),h=t(17),f=t(3);function b(){var n=Object(u.a)(["\n\n*{\n    margin:0;\n    padding: 0;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    /* scrollbar-width: none */\n}\nbody {\n    height: 100vh;\n}\n\n#root {\n    overflow:hidden;\n}\n::-webkit-scrollbar { \n    /* display: none;  */\n}\n\n\n"]);return b=function(){return n},n}var x=Object(f.a)(b()),g=t(43),w=t.n(g);function y(){var n=Object(u.a)(['\n  position: relative;\n  background: none;\n  border: 2px solid black;\n  margin-top: 30px;\n  text-align: center;\n  display: block;\n  font-family: "Lato", sans-serif;\n  letter-spacing: 2px;\n  font-size: 14px;\n  padding: 10px 15px;\n  cursor: pointer;\n\n  ::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: translate(-3%, 12%);\n    content: "";\n    display: block;\n    width: 106%;\n    height: 110%;\n    background-color: #cd97c4;\n    z-index: -1;\n    transition: transform 0.25s ease, width 0.25s ease, height 0.25s ease;\n  }\n\n  :hover::before {\n    transform: translate(0, 0);\n    width: 100%;\n    height: 100%;\n  }\n\n  @media only screen and (min-width: 768px) and (orientation: portrait) {\n    margin-top: 73px;\n    font-size: 22px;\n  }\n  @media only screen and (min-width: 1024px) {\n    font-size: 24px;\n    margin-top: 50px;\n  }\n  @media only screen and (min-width: 1024px) and (orientation: portrait) {\n    font-size: 32px;\n    margin-top: 50px;\n  }\n']);return y=function(){return n},n}var v=f.c.button(y()),k=function(n){var e=n.content;return i.a.createElement(v,null,e)},j=t(44),E=t.n(j),z=t(45),O=t(67),N=function(n){var e=n.className,t=n.src,a=n.isVisible,r=n.showAbout,o=Object(z.a)(n,["className","src","isVisible","showAbout"]);return i.a.createElement("div",Object.assign({},o,{className:e}),i.a.createElement(O.a,{src:t,isVisible:a,showAbout:r}))},A=t(23),L=t.n(A),S=t(48),C=t.n(S);function M(){var n=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  width: 70%;\n  height: 70%;\n  margin-top: 55px;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n  flex-direction: column;\n\n  .logo {\n    width: 270px;\n    transform: translate(-10%, 0);\n\n    .e,\n    .f,\n    .g,\n    .h,\n    .i,\n    .j,\n    .k,\n    .l,\n    .m,\n    .n,\n    .o {\n      opacity: 0;\n      transition: opacity 0.2s ease-in-out;\n\n      @media only screen and (min-width: 568px) and (orientation: landscape) {\n        opacity: 1;\n      }\n      @media only screen and (min-width: 768px) {\n        opacity: 1;\n      }\n    }\n\n    @media only screen and (min-width: 375px) and (min-height: 812px) and (orientation: portrait) {\n      width: 310px;\n    }\n    @media only screen and (min-width: 731px) {\n      width: 300px;\n    }\n    @media only screen and (min-width: 736px) and (orientation: portrait) {\n      width: 410px;\n    }\n    @media only screen and (min-width: 1024px) {\n      width: 520px;\n    }\n    @media only screen and (min-width: 1024px) and (orientation: portrait) {\n      width: 570px;\n    }\n  }\n\n  @media only screen and (min-width: 480px) and (orientation: landscape) {\n    width: 60%;\n  }\n  @media only screen and (min-width: 736px) {\n    margin-left: 30px;\n  }\n  @media only screen and (min-width: 1024px) {\n    width: 70%;\n  }\n\n  @media only screen and (min-width: 375px) and (min-height: 812px) and (orientation: portrait) {\n    transform: translate(-5%, -5%);\n  }\n\n  @media only screen and (min-width: 1024px) {\n    transform: translate(-5%, 0);\n  }\n"]);return M=function(){return n},n}function q(){var n=Object(u.a)(['\n  position: relative;\n  height: 88vh;\n  width: 100vw;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  z-index: -10;\n\n  ::before {\n    content: "";\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-image: url(',');\n    background-size: cover;\n    background-position-x: 50%;\n    transition: background-size 0.2s linear;\n  }\n  ::after {\n    position: absolute;\n    z-index: 2;\n    top: 0;\n    left: 0;\n    content: "";\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n\n  /* DESKTOP */\n\n  .lines {\n    position: absolute;\n    bottom: -2%;\n    left: 0;\n    margin: 0;\n    opacity: 0;\n\n    @media only screen and (min-width: 640px) and (orientation: landscape) {\n      opacity: 1;\n    }\n\n    svg {\n      width: 180px;\n\n      @media only screen and (min-width: 730px) and (orientation: landscape) {\n        width: 220px;\n      }\n      @media only screen and (min-width: 1024px) and (orientation: landscape) {\n        width: 400px;\n      }\n    }\n  }\n']);return q=function(){return n},n}var Y=f.c.header(q(),w.a),P=f.c.div(M()),D=function(n){function e(){var n,t;Object(c.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(s.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(i)))).state={},t}return Object(p.a)(e,n),Object(l.a)(e,[{key:"componentDidMount",value:function(){var n=document.querySelector(".cover-photo");new C.a(n,{scale:1.5,delay:.55,orientation:"down",overflow:!0})}},{key:"render",value:function(){return i.a.createElement(Y,{showAbout:this.props.showAbout},i.a.createElement(P,{showAbout:this.props.showAbout},i.a.createElement(N,{className:"logo",src:L.a,showAbout:this.props.showAbout}),i.a.createElement(k,{content:"um\xf3w si\u0119 na wizyt\u0119"})),i.a.createElement(N,{className:"lines",src:E.a}))}}]),e}(a.Component),B=t(49),F=t.n(B),T=t(50),H=t.n(T),R=t(51),W=t.n(R),I=t(52),J=t.n(I),K=t(53),V=t.n(K),X=t(24),$=t.n(X),G=t(54),Q=t.n(G);function U(){var n=Object(u.a)(["\n  display: block;\n"]);return U=function(){return n},n}var Z=f.c.img(U()),_=function(n){var e=n.className,t=n.src,a=n.alt;return i.a.createElement(Z,{className:e,src:t,alt:a})},nn=t(55),en=t.n(nn),tn=t(56),an=t.n(tn);function rn(){var n=Object(u.a)(['\n  position: absolute;\n  font-family: "Lato", sans-serif;\n  font-weight: 500;\n  font-size: 24px;\n  color: white;\n  margin: 40px 0 0 40px;\n  z-index: 1;\n  ::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: translate(-20%, -35%);\n    z-index: -1;\n    display: block;\n    content: "";\n    background-color: #cd97c4;\n    width: 70%;\n    height: 100%;\n  }\n']);return rn=function(){return n},n}var on=f.c.h1(rn());function cn(){var n=Object(u.a)(['\n  display: flex;\n  align-items: center;\n  width: 90%;\n  max-width: 400px;\n  padding: 25px;\n  font-size: 13px;\n  margin: 50px auto 60px;\n  line-height: 1.2rem;\n  color: #666;\n  font-family: "Montserrat", sans-serif;\n  letter-spacing: 0.1rem;\n']);return cn=function(){return n},n}var ln=f.c.article(cn()),sn=t(21),dn=t(18);function pn(){var n=Object(u.a)(["\n  @media only screen and (orientation: landscape) and (min-width: 667px) {\n    width: 40%;\n    order: 4;\n  }\n"]);return pn=function(){return n},n}function un(){var n=Object(u.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  height: 40vh;\n  width: 100%;\n  overflow: hidden;\n\n  @media only screen and (orientation: landscape) and (min-width: 568px) {\n    order: 3;\n    height: 50vh;\n    width: 100%;\n    align-self: center;\n    margin-left: 10px;\n  }\n  @media only screen and (orientation: landscape) and (min-width: 667px) {\n    width: 50%;\n    height: 70vh;\n  }\n  div {\n    position: relative;\n    width: 50%;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    img {\n      height: 100%;\n      display: block;\n    }\n  }\n"]);return un=function(){return n},n}function mn(){var n=Object(u.a)(["\n  margin-top: 10px;\n  border-bottom: 10px double white;\n  @media only screen and (orientation: landscape) and (min-width: 667px) {\n    width: 40%;\n    order: 1;\n    margin: 140px 0 30px 20px;\n  }\n"]);return mn=function(){return n},n}function hn(){var n=Object(u.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10vh;\n  min-height: 300px;\n  padding: 0 5px 0;\n  margin-top: 150px;\n\n  @media only screen and (orientation: landscape) and (min-width: 667px) {\n    width: 55%;\n    order: 2;\n  }\n\n  div.blob {\n    position: absolute;\n    width: 85%;\n    top: -20px;\n    right: 3px;\n    z-index: -3;\n  }\n  div.blob2 {\n    position: absolute;\n    width: 80%;\n    top: 0;\n    right: 2px;\n    z-index: -3;\n  }\n  div.dotted {\n    position: absolute;\n    width: 35%;\n    bottom: 0;\n    left: 5%;\n    z-index: -3;\n  }\n  div.dotted2 {\n    position: absolute;\n    width: 12%;\n    top: -15%;\n    right: 5%;\n    z-index: -3;\n  }\n\n  .girl-one {\n    position: absolute;\n    top: 0;\n    left: 15px;\n    width: 37%;\n    z-index: 3;\n    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);\n    visibility: hidden;\n  }\n  .girl-two {\n    position: absolute;\n    width: 70%;\n    z-index: 2;\n    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);\n    visibility: hidden;\n  }\n  .girl-three {\n    position: absolute;\n    top: 50px;\n    right: 15px;\n    width: 30%;\n    z-index: 3;\n    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);\n  }\n"]);return hn=function(){return n},n}function fn(){var n=Object(u.a)(['\n  position: relative;\n  background-color: #c1c9d0;\n  overflow: hidden;\n  z-index: -3;\n  display: flex;\n  flex-direction: column;\n  ::after {\n    position: absolute;\n    bottom: 0;\n    content: "";\n    display: block;\n    height: 10px;\n    width: 100%;\n    border-bottom: 10px dotted white;\n  }\n  @media only screen and (orientation: landscape) and (min-width: 667px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding-bottom: 40px;\n  }\n']);return fn=function(){return n},n}var bn=f.c.main(fn()),xn=f.c.div(hn()),gn=Object(f.c)(ln)(mn()),wn=f.c.div(un()),yn=Object(f.c)(ln)(pn()),vn=function(n){function e(){var n,t;Object(c.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(s.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(i)))).state={},t}return Object(p.a)(e,n),Object(l.a)(e,[{key:"componentDidMount",value:function(){var n=document.querySelector(".girl-one"),e=document.querySelector(".girl-two"),t=document.querySelector(".girl-three"),a=document.querySelectorAll(".casual"),i=document.querySelector(".picswrapper"),r=new dn.a({reversed:!0}),o=new dn.a({reversed:!0}),c=new dn.a({reversed:!0}),l=sn.b.from(a,.7,{scale:1.4,transformOrigin:"center center"});r.set(n,{visibility:"visible"}),r.from(n,1,{opacity:0,x:-80}),o.set(e,{visibility:"visible"}),o.from(e,1,{opacity:0,y:80}),c.set(t,{visibility:"visible"}),c.from(t,1,{opacity:0,y:-80}),window.addEventListener("scroll",function(){var e=n.getBoundingClientRect().top+10,t=n.getBoundingClientRect().top+10,a=n.getBoundingClientRect().top+10,s=i.getBoundingClientRect().top+10;e<=window.innerHeight?r.play():r.reverse(),t<=window.innerHeight?o.play():o.reverse(),a<=window.innerHeight?c.play():c.reverse(),s<=window.innerHeight?l.play():l.reverse()})}},{key:"render",value:function(){return i.a.createElement(bn,null,i.a.createElement(on,{className:"main"},"prostowanie ",i.a.createElement("br",null)," keratynoweeeee"),i.a.createElement(xn,null,i.a.createElement(_,{src:F.a,className:"girl-one",alt:"dziewczyna z prostymi w\u0142osami"}),i.a.createElement(_,{src:H.a,className:"girl-two",alt:"dziewczyna z prostymi w\u0142osami"}),i.a.createElement(_,{src:W.a,className:"girl-three",alt:"dziewczyna z prostymi w\u0142osami"}),i.a.createElement(N,{className:"blob",src:J.a}),i.a.createElement(N,{className:"blob2",src:V.a}),i.a.createElement(N,{className:"dotted",src:$.a}),i.a.createElement(N,{className:"dotted2",src:Q.a})),i.a.createElement(gn,{className:"articleone"},i.a.createElement("p",null,i.a.createElement("strong",null,"Amazon Keratin")," to zabieg keratynowy, kt\xf3rego celem jest odbudowa struktury w\u0142os\xf3w, ich intensywne od\u017cywienie i wyg\u0142adzenie. Polega na uzupe\u0142nieniu w strukturze w\u0142osa niedoboru keratyny, b\u0119d\u0105cej naturalnym sk\u0142adnikiem budulcowym w\u0142os\xf3w.")),i.a.createElement(wn,{className:"picswrapper"},i.a.createElement("div",null,i.a.createElement(_,{className:"casual",src:en.a,alt:"Dziewczyna po prostowaniu w\u0142os\xf3w"})),i.a.createElement("div",null,i.a.createElement(_,{className:"casual",src:an.a,alt:"Dziewczyna po prostowaniu w\u0142os\xf3w"}))),i.a.createElement(yn,{className:"articletwo"},i.a.createElement("p",null,i.a.createElement("strong",null,"Preparaty keratynowe"),", u\u017cywane podczas zabiegu, zawieraj\u0105 nie tylko keratyn\u0119, lecz tak\u017ce"," ",i.a.createElement("strong",null,"antyoksydanty, wyci\u0105gi z ro\u015blin i witaminy")," , kt\xf3re trwale nawil\u017caj\u0105 w\u0142osy i dostarczaj\u0105 niezb\u0119dnych sk\u0142adnik\xf3w od\u017cywczych oraz kwasy t\u0142uszczowe, kt\xf3re tworz\u0105 na w\u0142osach niewidoczna barier\u0119 ochronna przed szkodliwymi czynnikami zewn\u0119trznymi.")))}}]),e}(a.Component),kn=t(57),jn=t.n(kn);function En(){var n=Object(u.a)(['\n  font-family: "Pacifico", sans-serif;\n  color: #de617a;\n  font-weight: 300;\n  letter-spacing: 2px;\n  position: relative;\n  font-size: 20px;\n']);return En=function(){return n},n}function zn(){var n=Object(u.a)(["\n  position: relative;\n  overflow: hidden;\n  background-image: url(",');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 50vh;\n  min-height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  ::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.65);\n  }\n']);return zn=function(){return n},n}var On=f.c.aside(zn(),jn.a),Nn=f.c.h2(En()),An=function(){return i.a.createElement(On,null,i.a.createElement(Nn,null,"get hair straight naturally"))},Ln=t(30),Sn=t.n(Ln),Cn=t(25),Mn=t.n(Cn),qn=t(26),Yn=t.n(qn);function Pn(){var n=Object(u.a)(['\n  font-family: "Lato", sans-serif;\n  color: white;\n  text-align: center;\n  padding-top: 20px;\n  font-size: 10px;\n']);return Pn=function(){return n},n}function Dn(){var n=Object(u.a)(["\n  max-width: 65px;\n  width: 20%;\n  padding: 10px 20px;\n  .facebook {\n    .bfacebook {\n      fill: #fff;\n    }\n  }\n\n  .instagram {\n    .cls-1 {\n      fill: #fff;\n    }\n    .cls-2,\n    .cls-3,\n    .cls-4 {\n      stroke: #fff;\n    }\n  }\n"]);return Dn=function(){return n},n}function Bn(){var n=Object(u.a)(["\n  display: flex;\n  min-height: 80px;\n  align-items: center;\n  justify-content: center;\n"]);return Bn=function(){return n},n}function Fn(){var n=Object(u.a)(["\n  border-top: 10px dotted white;\n  background-color: #000;\n  padding: 20px 0;\n  overflow: hidden;\n\n  .logo {\n    width: 50vw;\n    max-width: 200px;\n    margin: 0 auto;\n  }\n"]);return Fn=function(){return n},n}var Tn=f.c.footer(Fn()),Hn=f.c.div(Bn()),Rn=f.c.a(Dn()),Wn=f.c.p(Pn()),In=function(){return i.a.createElement(Tn,null,i.a.createElement(N,{src:Sn.a,className:"logo"}),i.a.createElement(Hn,null,i.a.createElement(Rn,{href:"https://facebook.com/ale.prosssto"},i.a.createElement(N,{src:Mn.a,className:"facebook"})),i.a.createElement(Rn,{href:"https://instagram.com/ale.prossste"},i.a.createElement(N,{src:Yn.a,className:"instagram"}))),i.a.createElement(Wn,null,"\xa9 2019 Mateusz Mikulski. All rights reserved."))},Jn=function(n){function e(){var n,t;Object(c.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(s.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(i)))).state={},t}return Object(p.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(x,{isScrollable:this.props.isScrollable}),i.a.createElement(D,{showAbout:this.props.showAbout,handleAboutMount:this.props.handleAboutMount}),i.a.createElement(vn,null),i.a.createElement(An,null),i.a.createElement(In,null))}}]),e}(a.Component),Kn=t(58),Vn=t.n(Kn),Xn=t(59),$n=t.n(Xn),Gn=t(60),Qn=t.n(Gn),Un=t(61),Zn=t.n(Un),_n=t(62),ne=t.n(_n),ee=t(63),te=t.n(ee),ae=t(64),ie=t.n(ae);function re(){var n=Object(u.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  @media only screen and (orientation: landscape) and (min-width: 667px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding-bottom: 30px;\n  }\n"]);return re=function(){return n},n}function oe(){var n=Object(u.a)(["\n  transform: translateY(-200%);\n  margin: 0;\n  top: 36%;\n  left: 45%;\n  font-size: 30px;\n\n  ::before {\n    display: none;\n  }\n"]);return oe=function(){return n},n}function ce(){var n=Object(u.a)(['\n  position: relative;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n\n  ::before {\n    content: "";\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-image: url(',');\n    background-size: cover;\n    background-position: 58% 50%;\n    background-repeat: no-repeat;\n  }\n  ::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: "";\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.25);\n  }\n']);return ce=function(){return n},n}function le(){var n=Object(u.a)(["\n  position: relative;\n  display: flex;\n  padding: 0px 5px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 70vh;\n  max-height: 450px;\n\n  .certificate {\n    position: relative;\n    transform: translate(4%, 0);\n    width: 80%;\n    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);\n    max-height: 250px;\n  }\n  .certificate2 {\n    position: relative;\n    transform: translate(-4%, 0);\n    width: 80%;\n    margin-top: 20px;\n    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);\n    max-height: 250px;\n  }\n\n  @media only screen and (orientation: landscape) and (min-width: 667px) {\n    width: 55%;\n    order: 3;\n  }\n"]);return le=function(){return n},n}function se(){var n=Object(u.a)(["\n  margin: 50px auto 50px;\n  border-top: 10px double white;\n  @media only screen and (orientation: landscape) and (min-width: 667px) {\n    width: 40%;\n    order: 4;\n    margin: 40px 20px 30px 10px;\n    height: 50%;\n    align-self: center;\n  }\n"]);return se=function(){return n},n}function de(){var n=Object(u.a)(["\n  margin: 0px auto 50px;\n  padding-bottom: 45px;\n  border-bottom: 10px double white;\n  @media only screen and (orientation: landscape) and (min-width: 667px) {\n    width: 40%;\n    order: 1;\n    margin: 100px 0 30px 20px;\n  }\n"]);return de=function(){return n},n}function pe(){var n=Object(u.a)(["\n  position: relative;\n  display: flex;\n  margin-top: 150px;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 45vh;\n  max-height: 320px;\n\n  .marta {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-98%, -77%);\n    width: 45%;\n    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);\n  }\n  .marta2 {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-2%, -55%);\n    width: 45%;\n    box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.29);\n  }\n  div:nth-child(3) {\n    position: absolute;\n    top: 25%;\n    left: 50%;\n    width: 45%;\n    max-width: 280px;\n    z-index: -1;\n  }\n  div:nth-child(4) {\n    position: absolute;\n    top: 50%;\n    left: 40%;\n    width: 40%;\n    z-index: -1;\n  }\n  div:nth-child(5) {\n    position: absolute;\n    top: 55%;\n    left: 10%;\n    width: 40%;\n    z-index: -1;\n  }\n  @media only screen and (orientation: landscape) and (min-width: 667px) {\n    width: 55%;\n    order: 2;\n  }\n"]);return pe=function(){return n},n}function ue(){var n=Object(u.a)(["\n  position: relative;\n  background-color: #c1c9d0;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: transform 0.8s linear;\n"]);return ue=function(){return n},n}var me=f.c.section(ue()),he=f.c.div(pe()),fe=Object(f.c)(ln)(de()),be=Object(f.c)(ln)(se()),xe=f.c.div(le()),ge=f.c.div(ce(),ie.a),we=Object(f.c)(on)(oe()),ye=f.c.main(re()),ve=function(n){function e(){var n,t;Object(c.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(s.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(i)))).state={},t}return Object(p.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(me,null,i.a.createElement(x,null),i.a.createElement(ge,null,i.a.createElement(we,null,"kim jestem?")),i.a.createElement(ye,null,i.a.createElement(on,null,"Cze\u015b\u0107!",i.a.createElement("br",null)," Nazywam si\u0119 Marta"),i.a.createElement(he,null,i.a.createElement("img",{src:Vn.a,className:"marta",alt:"owner of the company with puppy"}),i.a.createElement("img",{src:$n.a,className:"marta2",alt:"owner of the company"}),i.a.createElement(N,{src:Qn.a,className:"blob3"}),i.a.createElement(N,{src:Zn.a,className:"blob4"}),i.a.createElement(N,{className:"dotted",src:$.a})),i.a.createElement(fe,null,i.a.createElement("p",null,"Posiadam certyfikaty marki ",i.a.createElement("strong",null,"Amazon Keratin"),", kt\xf3re otrzyma\u0142am po uko\u0144czeniu kursu, gdzie zdoby\u0142am wiedz\u0119, jak profesjonalnie wykonywa\u0107 zabiegi polegaj\u0105ce na rekonstrukcji w\u0142os\xf3w. Wszystkie zabiegi wykonuj\u0119 z"," ",i.a.createElement("strong",null,"najwy\u017csz\u0105 staranno\u015bci\u0105"),", skupiaj\u0105c szczeg\xf3ln\u0105 uwag\u0119 na sterylno\u015bci narz\u0119dzi, kt\xf3rych u\u017cywam.")),i.a.createElement(xe,null,i.a.createElement("img",{src:ne.a,className:"certificate",alt:"certificate"}),i.a.createElement("img",{src:te.a,className:"certificate2",alt:"certificate"})),i.a.createElement(be,null,i.a.createElement("p",null,"Stawiam na rozw\xf3j, \u015bledz\u0119 nowinki techniczne i"," ",i.a.createElement("strong",null,"najnowsze trendy fryzjerskie"),". Chc\u0105c podnosi\u0107 swoje kwalifikacje w najbli\u017cszej przysz\u0142o\u015bci planuj\u0119 uczestnictwo w kursach ",i.a.createElement("strong",null,"przed\u0142u\u017cania w\u0142os\xf3w")," oraz"," ",i.a.createElement("strong",null,"upi\u0119\u0107 okoliczno\u015bciowych"),".")))))}}]),e}(a.Component);function ke(){var n=Object(u.a)(["\n  position: fixed;\n  transform: ",";\n  transition: transform 0.35s 3s linear;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  color: white;\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  overflow: hidden;\n\n  div.logo {\n    width: 80vw;\n    max-width: 300px;\n    transform: ",";\n    opacity: ",';\n    transition: opacity 0.5s 1.8s ease-out, transform 0.5s 1.8s linear;\n  }\n\n  ::after {\n    content: "";\n    right: ',";\n    top: 50%;\n    left: 20%;\n    transition: right 1s 0.25s linear, opacity 0.3s 1.3s linear;\n    opacity: ",";\n    position: fixed;\n    height: 4px;\n    background-color: #fff;\n  }\n"]);return ke=function(){return n},n}f.c.div(ke(),function(n){return n.isLoaded?"translatey(-110%)":"translatey(0)"},function(n){return n.isLoaded?"translatey(-10%)":"translatey(0)"},function(n){return n.isLoaded?"1":"0"},function(n){return n.isLoaded?"20%":"80%"},function(n){return n.isLoaded?"0":"1"});function je(){var n=Object(u.a)(["\n  max-width: 100vh;\n  min-height: 200vh;\n  background-color: white;\n  color: black;\n  overflow: hidden;\n  position: relative;\n  background-color: #c1c9d0;\n"]);return je=function(){return n},n}var Ee=f.c.section(je()),ze=function(n){function e(){var n,t;Object(c.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(s.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(i)))).state={},t}return Object(p.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Ee,null,i.a.createElement(x,{isScrollable:this.props.isScrollable}),i.a.createElement(on,null,"Strona w budowie")))}}]),e}(a.Component);function Oe(){var n=Object(u.a)(['\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: black;\n  z-index: 6;\n  transform: translateY(100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  h2 {\n    line-height: 100vh;\n  }\n\n  h2 span {\n    display: inline-block;\n    color: #de617a;\n    font-family: "Just Another Hand", sans-serif;\n    font-size: 40px;\n    font-weight: 400;\n    margin-right: 2px;\n    opacity: 1;\n    transform: translateY(0);\n    /* animation: wave-text 0.7s infinite alternate paused; */\n  }\n\n  ',";\n\n  @keyframes wave-text {\n    from {\n      color: #ffa8b9;\n      transform: translateY(0);\n    }\n    to {\n      color: #de617a;\n      transform: translateY(-13px);\n    }\n  }\n"]);return Oe=function(){return n},n}function Ne(){var n=Object(u.a)(["\n    ","\n  "]);return Ne=function(){return n},n}var Ae={offset:"translateY(-5%)",count:"40",duration:"0.7"},Le=f.c.div(Oe(),function(){for(var n="",e=0;e<40;e+=1)n+="    \n       h2 :nth-child(40n+".concat(e,"){\n         animation-delay: -").concat(2*(40-e)*.7/40,"s !important;\n       }\n  ");return Object(f.b)(Ne(),n)}()),Se=Array.from("get hair straight naturally").map(function(n,e){return" "===n?i.a.createElement("span",{key:e},"\xa0"):i.a.createElement("span",{key:e},n)}),Ce=function(n){function e(){var n,t;Object(c.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(s.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(i)))).state={},t}return Object(p.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement(Le,{className:this.props.className,theme:Ae},i.a.createElement("h2",null,Se))}}]),e}(a.Component);function Me(){var n=Object(u.a)(['\n  margin-bottom: 15%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n\n  @media only screen and (min-width: 500px) and (orientation: landscape) {\n    margin: 10px;\n  }\n  @media only screen and (min-height: 811px) and (orientation: portrait) {\n    margin-bottom: 0;\n    margin-top: 17%;\n  }\n  @media only screen and (min-width: 768px) and (min-height: 700px) {\n    margin-top: 12%;\n    width: 200px;\n  }\n\n  a {\n    cursor: pointer;\n    border: 2px solid black;\n    position: relative;\n    text-decoration: none;\n    color: black;\n    display: block;\n    padding: 10px 20px;\n    font-family: "Lato", sans-serif;\n    font-weight: 500;\n    text-transform: uppercase;\n    font-size: 18px;\n    letter-spacing: 3px;\n    height: 100%;\n    width: 100%;\n\n    ::before {\n      position: absolute;\n      top: 0;\n      left: 0;\n      transform: translate(-5%, 12%);\n      display: block;\n      content: "";\n      height: 110%;\n      width: 110%;\n      background-color: #cd97c4;\n      z-index: -1;\n      transition: transform 0.25s ease, width 0.25s ease, height 0.25s ease;\n    }\n\n    :hover::before {\n      transform: translate(0, 0);\n      height: 100%;\n      width: 100%;\n    }\n\n    @media only screen and (min-width: 500px) and (orientation: landscape) {\n      font-size: 14px;\n    }\n    @media only screen and (min-width: 768px) and (min-height: 700px) {\n      font-size: 22px;\n      padding: 5px 0;\n    }\n  }\n\n  a.active::before {\n    transform: translate(0, 0);\n    height: 100%;\n    width: 100%;\n  }\n']);return Me=function(){return n},n}function qe(){var n=Object(u.a)(["\n  height: 100%;\n  color: black;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media only screen and (min-width: 500px) and (orientation: landscape) {\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n  }\n\n  @media only screen and (min-height: 811px) and (orientation: portrait) {\n    justify-content: start;\n    padding-top: 100px;\n  }\n"]);return qe=function(){return n},n}function Ye(){var n=Object(u.a)(["\n  margin-top: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transform: translateY(20%);\n  svg {\n    width: 240px;\n    transform: translateX(-10%);\n\n    @media only screen and (min-width: 768px) {\n      width: 350px;\n    }\n    @media only screen and (min-width: 1024px) {\n      width: 420px;\n    }\n  }\n\n  @media only screen and (min-width: 1024px) {\n    margin-top: 60px;\n  }\n"]);return Ye=function(){return n},n}var Pe=f.c.div(Ye()),De=f.c.ul(qe()),Be=f.c.li(Me()),Fe=function(n){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Pe,{className:"logo"},i.a.createElement(N,{src:L.a})),i.a.createElement(De,null,i.a.createElement(Be,null,i.a.createElement(m.b,{to:"/",exact:!0,onClick:n.setLoader},"home")),i.a.createElement(Be,null,i.a.createElement(m.b,{to:"/about",onClick:n.setLoader},"o mnie")),i.a.createElement(Be,null,i.a.createElement(m.b,{to:"/contact",onClick:n.setLoader},"kontakt"))))};function Te(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: #c1c9d0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  transform: translateX(100%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 5;\n"]);return Te=function(){return n},n}var He=f.c.div(Te()),Re=function(n){return i.a.createElement(He,{className:"burgerMenu"},i.a.createElement(Fe,{setLoader:n.setLoader}))};function We(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  background: none;\n  border: none;\n  padding: 20px 32px;\n  z-index: 9999;\n  cursor: pointer;\n\n  div {\n    width: 28px;\n    height: 2px;\n    background-color: black;\n    display: block;\n    @media (min-width: 768px) and (min-height: 700px) {\n      width: 30px;\n    }\n  }\n\n  div:nth-child(1),\n  div:nth-child(3) {\n    display: block;\n    position: absolute;\n  }\n  div:nth-child(1) {\n    transform: translateY(-350%);\n  }\n  div:nth-child(3) {\n    transform: translateY(350%);\n  }\n"]);return We=function(){return n},n}var Ie=f.c.button(We()),Je=function(n){function e(){var n,t;Object(c.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(s.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(i)))).state={},t}return Object(p.a)(e,n),Object(l.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(Ie,{className:"burger"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))}}]),e}(a.Component);function Ke(){var n=Object(u.a)(["\n  cursor: pointer;\n  padding: 10px 20px;\n  @media only screen and (min-width: 1024px) and (orientation: portrait) {\n    padding: 15px 25px;\n  }\n\n  span {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n      width: 25px;\n\n      @media only screen and (min-width: 768px) {\n        width: 30px;\n      }\n      @media only screen and (min-width: 1024px) {\n        width: 40px;\n      }\n      @media only screen and (min-width: 1024px) and (orientation: portrait) {\n        width: 50px;\n      }\n    }\n  }\n"]);return Ke=function(){return n},n}var Ve=f.c.a(Ke()),Xe=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Ve,{href:"https://instagram.com/ale.prossste"},i.a.createElement(N,{className:"insta",src:Yn.a})),i.a.createElement(Ve,{href:"https://facebook.com/ale.prosssto"},i.a.createElement(N,{className:"face",src:Mn.a})))},$e=t(1);function Ge(){var n=Object(u.a)(["\n  overflow: hidden;\n  width: 100vw;\n"]);return Ge=function(){return n},n}function Qe(){var n=Object(u.a)(["\n  position: absolute;\n  margin-top: 10px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n\n  div:nth-child(1) {\n    display: flex;\n  }\n"]);return Qe=function(){return n},n}var Ue=f.c.div(Qe()),Ze=f.c.div(Ge()),_e=function(n){function e(){var n,t;Object(c.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(s.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(i)))).state={isOpen:!1},t}return Object(p.a)(e,n),Object(l.a)(e,[{key:"componentDidMount",value:function(){var n=this,e=document.querySelector(".burger"),t=document.querySelectorAll("li"),a=document.querySelector(".burgerMenu"),i=document.querySelector(".burgerMenu .logo"),r=document.querySelectorAll(".burger div"),o=new sn.a({reversed:!0});o.addPause().addLabel("start").to(r[0],.15,{css:{transform:"translatey(0)"}}).to(r[2],.15,{css:{transform:"translatey(0)"}},"start").to(r[1],.1,{opacity:0}).addLabel("endTransform").to(r[0],.15,{rotation:45}).to(r[2],.15,{rotation:-45},"endTransform").addLabel("endTransformMenu").to(a,.25,{css:{transform:"translatex(0)"}},"start").to(i,.15,{css:{transform:"translatey(0)",opacity:"1"}},"endTransformMenu");var c=function(e){n.setState(function(n){return{isOpen:!n.isOpen}}),n.state.isOpen?o.play():o.reverse()},l=document.querySelector(".template-loader"),s=document.querySelectorAll(".template-loader h2 span"),d=new sn.a;d.addPause().addLabel("start").to(l,.45,{ease:$e.c.easeInOut,css:{transform:"translateY(0)"}}).set(s,{css:{animation:"wave-text 0.7s infinite alternate"}}).to(l,.45,{delay:1,ease:$e.c.easeInOut,css:{transform:"translateY(-100%)"}}).set(s,{clearProps:"all"}).set(l,{clearProps:"all"}),t.forEach(function(n){n.addEventListener("click",function(n){"active"===n.target.className?c():(console.log("leci"),d.play(!1),setTimeout(c,100))})}),e.addEventListener("click",c)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Ce,{className:"template-loader"}),i.a.createElement(Ze,null,i.a.createElement(m.a,{basename:"/website-hairstyle"},i.a.createElement(Re,{setLoader:this.setLoader}),i.a.createElement(Ue,{className:"upperWrapper"},i.a.createElement("div",null,i.a.createElement(Xe,null)),i.a.createElement("div",null,i.a.createElement(Je,null))),i.a.createElement(h.c,null,i.a.createElement(h.a,{path:"/",exact:!0,render:function(n){return i.a.createElement(Jn,null)}}),i.a.createElement(h.a,{path:"/about",exact:!0,render:function(n){return i.a.createElement(ve,null)}}),i.a.createElement(h.a,{path:"/contact",exact:!0,render:function(n){return i.a.createElement(ze,null)}})))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[69,1,2]]]);
//# sourceMappingURL=main.f81c5cad.chunk.js.map