(this["webpackJsonprandom-recipe-react"]=this["webpackJsonprandom-recipe-react"]||[]).push([[0],{56:function(e,t,s){},57:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var a=s(0),r=s.n(a),n=s(16),i=s.n(n),c=(s(56),s(57),s(80)),o=s(82),l=s(3),d=Object(c.a)({navBar:{maxHeight:"63px",borderBottom:"1px solid black",backgroundColor:"pink"},headerTitle:{height:"100%",width:"100%",textAlign:"center",fontSize:"8.199121522693996vw",fontFamily:"'Style Script', cursive"}});var h=function(){var e=d();return Object(l.jsx)(o.a,{container:!0,xs:12,children:Object(l.jsx)(o.a,{item:!0,xs:12,className:e.headerTitle,children:"Random Recipe"})})},j=s(23),m=s(83),u=Object(c.a)({headerContainer:{borderTop:"1px solid black",borderBottom:"1px solid black",fontFamily:"'Quicksand', sans-serif"},headerTitle:{fontWeight:"600",fontFamily:"'Quicksand', sans-serif",color:"black"}});var b=function(){var e=u();return Object(l.jsx)(o.a,{className:e.headerContainer,container:!0,xs:12,children:Object(l.jsx)(o.a,{item:!0,xs:12,children:Object(l.jsx)(j.a,{children:Object(l.jsx)(m.a,{className:e.headerTitle,children:"Home"})})})})},p=s(37),x=s(19),g=s(11),O=s(43),f=s(42),v=s(84),y=s(90),k=s(85),C=s(91),T=s(86),R=s(87),S=s(88),F=s(89),N=s(5),A=s(41),w=s.n(A),L=s(38),M=s.n(L),B=s(39),D=s.n(B),I=s(40),z=s.n(I),E=function(e){Object(O.a)(s,e);var t=Object(f.a)(s);function s(){var e;return Object(p.a)(this,s),(e=t.call(this)).state={isFetchingRecipe:!1,strMeal:null,strThumb:null,titleSubString:null,strCategory:null,strArea:null,strTag:null,ingredientArray:[],measurementArray:[]},e.randomRecipe=e.randomRecipe.bind(Object(g.a)(e)),e}return Object(x.a)(s,[{key:"componentDidMount",value:function(){this.fetchingRecipe()}},{key:"fetchingRecipe",value:function(){var e=this;this.setState({isFetchingRecipe:!0}),fetch("https://www.themealdb.com/api/json/v1/1/random.php",{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){e.setState({strMeal:t.meals[0].strMeal,isFetchingRecipe:!1,strThumb:t.meals[0].strMealThumb,titleSubString:t.meals[0].strMeal.substring(0,1),strCategory:t.meals[0].strCategory,strArea:t.meals[0].strArea,strTags:t.meals[0].strTags,strSource:t.meals[0].strSource,ingredientArray:t.meals[0],measurementArray:t.meals[0]});var s=t.meals[0];console.clear(),console.log(s)}))}},{key:"randomRecipe",value:function(){this.fetchingRecipe()}},{key:"render",value:function(){var e=this.state.ingredientArray,t=Object.keys(e).map((function(t,s){return e[t]})).slice(9,28).filter((function(e){return e})).map((function(e){return Object(l.jsx)("li",{children:e})})),s=this.state.measurementArray,a=Object.keys(s).map((function(e,t){return s[e]})).slice(29,48).filter((function(e){return e})).map((function(e){return Object(l.jsx)("li",{children:e})}));return Object(l.jsx)(v.a,{className:this.props.classes.rootContainer,spacing:1,children:Object(l.jsxs)(o.a,{className:this.props.classes.gridContainer,container:!0,xs:12,children:[Object(l.jsx)(o.a,{className:this.props.classes.gridOne,item:!0,xs:12,sm:6,lg:4,xl:4,children:Object(l.jsxs)(y.a,{className:this.props.classes.rootCard,children:[Object(l.jsx)(k.a,{avatar:Object(l.jsx)(C.a,{"aria-label":"recipe",className:this.props.classes.avatar,children:this.state.titleSubString}),title:this.state.isFetchingRecipe?"Loading Recipe...":this.state.strMeal,subheader:Object(l.jsx)(m.a,{href:this.state.strSource,target:"_blank",rel:"noreferrer",children:Object(l.jsx)(M.a,{})})}),Object(l.jsx)(T.a,{className:this.props.classes.media,image:this.state.strThumb,title:"Random-recipe"}),Object(l.jsx)(R.a,{children:Object(l.jsx)(j.a,{variant:"body2",color:"textSecondary",component:"p",children:this.state.isFetchingRecipe?"Tags":this.state.strTags+" | "+this.state.strCategory+" | "+this.state.strArea})}),Object(l.jsx)(S.a,{"aria-label":"add to favorites",children:Object(l.jsx)(D.a,{})}),Object(l.jsx)(S.a,{"aria-label":"share",children:Object(l.jsx)(z.a,{})})]})}),Object(l.jsx)(o.a,{item:!0,className:this.props.classes.gridTwo,xs:12,sm:6,lg:3,xl:3,children:Object(l.jsx)(F.a,{onClick:this.randomRecipe,endIcon:Object(l.jsx)(w.a,{}),className:"myButton",color:"primary",variant:"contained",disabled:this.state.isFetchingRecipe,children:"Random Recipe"})}),Object(l.jsxs)(o.a,{container:!0,className:this.props.classes.ingredientContainer,xs:12,sm:6,lg:3,xl:3,children:[Object(l.jsx)(o.a,{className:this.props.classes.ingredientsList,item:!0,xs:12,children:Object(l.jsx)("ul",{children:t})}),Object(l.jsx)(o.a,{className:this.props.classes.measurementList,item:!0,xs:12,children:Object(l.jsx)("ul",{children:a})})]})]})})}}]),s}(r.a.Component),H=Object(N.a)((function(e){return{rootContainer:{backgroundColor:"#fdf3f3"},gridContainer:{},rootCard:{maxWidth:345},media:{height:0,paddingTop:"56.25%",margin:"2px 20px"},avatar:{backgroundColor:"red"},sourceLink:{fontSize:".8rem",color:"black",textDecoration:"none",fontStyle:"italic"},gridOne:{},gridTwo:{textAlign:"center"},ingredientContainer:{border:"1px dotted red"},ingredientsList:{},measurementList:{}}}))(E);var J=function(){return Object(l.jsxs)(r.a.Fragment,{children:[Object(l.jsx)(h,{}),Object(l.jsx)(b,{}),Object(l.jsx)(H,{})]})},P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,93)).then((function(t){var s=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),r(e),n(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(J,{})}),document.getElementById("root")),P()}},[[65,1,2]]]);
//# sourceMappingURL=main.9e3504a8.chunk.js.map