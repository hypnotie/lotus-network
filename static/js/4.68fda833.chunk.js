(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[4],{244:function(e,t,s){"use strict";t.a=s.p+"static/media/id.dbc6e722.svg"},251:function(e,t,s){e.exports={pagination_top:"Users_pagination_top__2sACl",pagination_bottom:"Users_pagination_bottom__1C7tJ",preloader:"Users_preloader__2TklM",users:"Users_users__1L3VI",ani:"Users_ani__2FWue"}},252:function(e,t,s){e.exports={pagination:"Paginator_pagination__7tdhC",paginationBody:"Paginator_paginationBody__2xH88",selectedPage:"Paginator_selectedPage__25VKW",dots:"Paginator_dots__2O920",back:"Paginator_back__nHcAR",next:"Paginator_next__A7uGw"}},253:function(e,t,s){e.exports={user:"User_user__CdMY9",image:"User_image__2Nacl",info:"User_info__35TPg",name:"User_name__1SYdN",location:"User_location__T_KFP",id:"User_id__1bA8x",status:"User_status__3ON4U",location_icon:"User_location_icon__355zm",id_icon:"User_id_icon__17Ad2",status_icon:"User_status_icon__c71rW",status_text:"User_status_text__1zans",follow:"User_follow__3Cmrd"}},256:function(e,t,s){"use strict";s.r(t);var n=s(4),a=s(5),i=s(9),o=s(10),r=s(0),c=s.n(r),l=s(251),u=s.n(l),d=s(69),g=s(17),j=s(252),h=s.n(j),_=s(1),p=function(e){for(var t=e.totalItemsCount,s=e.pageSize,n=e.portionSize,a=void 0===n?10:n,i=e.currentPage,o=e.onPageChanged,c=Math.ceil(t/s),l=[],u=1;u<=c;u++)l.push(u);var d=Math.ceil(c/a),j=Object(r.useState)(1),p=Object(g.a)(j,2),b=p[0],f=p[1],m=(b-1)*a+1,x=b*a;return Object(r.useEffect)((function(){return f(Math.ceil(i/a))}),[i]),Object(_.jsxs)("div",{className:h.a.pagination,children:[b>1&&Object(_.jsx)("svg",{viewBox:"0 0 24 24",width:"30",height:"30",className:h.a.back,children:Object(_.jsx)("a",{onClick:function(){f(b-1)},onMouseDown:function(e){e.preventDefault()},children:Object(_.jsx)("path",{d:"M13.29,18.59,7.71,13a1,1,0,0,1,0-1.41L13.29,6A1,1,0,0,1,15,6.71V17.88A1,1,0,0,1,13.29,18.59Z"})})}),Object(_.jsxs)("div",{className:h.a.paginationBody,children:[Object(_.jsx)("div",{className:i===l[0]&&h.a.selectedPage,onClick:function(){o(l[0]),f(1)},children:l[0]}),1!==b&&Object(_.jsx)("div",{className:h.a.dots,children:"..."}),l.filter((function(e){return e>=m&&e<=x})).map((function(e){return Object(_.jsx)(_.Fragment,{children:e>1&&e<l.length&&Object(_.jsx)("div",{className:i===e&&h.a.selectedPage,onClick:function(){o(e)},children:e},e)})})),b!==d&&Object(_.jsx)("div",{className:h.a.dots,children:"..."}),Object(_.jsx)("div",{className:i===l.length&&h.a.selectedPage,onClick:function(){o(l.length),f(d)},children:l.length})]}),d>b&&Object(_.jsx)("svg",{viewBox:"0 0 24 24",width:"30",height:"30",className:h.a.next,children:Object(_.jsx)("a",{onClick:function(){f(b+1)},onMouseDown:function(e){e.preventDefault()},children:Object(_.jsx)("path",{d:"M9,17.88V6.71A1,1,0,0,1,10.71,6l5.58,5.59a1,1,0,0,1,0,1.41l-5.58,5.59A1,1,0,0,1,9,17.88Z"})})})]})},b=s(253),f=s.n(b),m=s(244),x=s(68),O=s.p+"static/media/status.aa5445d5.svg",P=s(12),v=function(e){var t=e.user,s=e.followingInProgress,n=e.follow,a=e.unfollow,i=e.authorizedUserId;return Object(_.jsxs)("div",{className:f.a.user,children:[Object(_.jsx)("div",{className:f.a.image,children:Object(_.jsx)(P.b,{to:"/users/"+t.id,children:Object(_.jsx)("img",{src:null!=t.photos.large?t.photos.large:x.a,alt:t.name})})}),Object(_.jsx)("div",{className:f.a.info,children:Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{className:f.a.name,children:Object(_.jsx)("h5",{children:Object(_.jsx)(P.b,{to:"/users/"+t.id,children:t.name})})}),Object(_.jsxs)("li",{className:f.a.id,children:[Object(_.jsx)("img",{className:f.a.id_icon,src:m.a,alt:"User's ID"}),Object(_.jsx)("div",{className:f.a.id_number,children:t.id})]}),t.status?Object(_.jsxs)("li",{className:f.a.status,children:[Object(_.jsx)("img",{className:f.a.status_icon,src:O,alt:"Status"}),Object(_.jsx)("div",{className:f.a.status_text,children:t.status})]}):""]})}),t.id!==i?Object(_.jsx)("div",{children:t.followed?Object(_.jsx)("button",{className:f.a.follow,disabled:s.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(_.jsx)("button",{className:f.a.follow,disabled:s.some((function(e){return e===t.id})),onClick:function(){n(t.id)},children:"Follow"})}):""]},t.id)},w=function(e){return Object(_.jsxs)("div",{className:u.a.usersContent,children:[Object(_.jsx)("div",{className:u.a.pagination_top,children:Object(_.jsx)(p,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalItemsCount,pageSize:e.pageSize})}),e.isFetching?Object(_.jsx)("div",{className:u.a.preloader,children:Object(_.jsx)(d.a,{})}):Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:u.a.users,children:e.users.map((function(t){return Object(_.jsx)(v,{user:t,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow},t.id)}))}),Object(_.jsx)("div",{className:u.a.pagination_bottom,children:Object(_.jsx)(p,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalItemsCount,pageSize:e.pageSize})})]})]})},C=s(18),N=s(103),U=function(e){return e.usersPage.users},z=function(e){return e.usersPage.pageSize},I=function(e){return e.usersPage.totalItemsCount},k=function(e){return e.usersPage.currentPage},S=function(e){return e.usersPage.isFetching},F=function(e){return e.usersPage.followingInProgress},A=function(e){return e.auth.id},M=function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(n.a)(this,s);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).onPageChanged=function(t){var s=e.props;(0,s.getUsers)(t,s.pageSize)},e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.getUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(w,{users:this.props.users,pageSize:this.props.pageSize,portionSize:this.props.portionSize,totalItemsCount:this.props.totalItemsCount,currentPage:this.props.currentPage,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress,authorizedUserId:this.props.authorizedUserId,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged})})}}]),s}(c.a.Component);t.default=Object(C.b)((function(e){return{users:U(e),pageSize:z(e),totalItemsCount:I(e),currentPage:k(e),isFetching:S(e),followingInProgress:F(e),authorizedUserId:A(e)}}),{follow:N.b,unfollow:N.f,setCurrentPage:N.d,toggleFollowingProgress:N.e,getUsers:N.c})(M)}}]);
//# sourceMappingURL=4.68fda833.chunk.js.map