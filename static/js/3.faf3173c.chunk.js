(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{246:function(e,t,i){"use strict";t.a=i.p+"static/media/id.dbc6e722.svg"},247:function(e,t,i){e.exports={cover_block:"Profile_cover_block__109yF",content_block:"Profile_content_block__2dhHN",preloaderContainer:"Profile_preloaderContainer__1aC2n",preloader:"Profile_preloader__3QW6e"}},248:function(e,t,i){e.exports={header:"MyPosts_header__1_4GG",add_post:"MyPosts_add_post__u2a8h"}},249:function(e,t,i){e.exports={profile_post:"Post_profile_post__3Si3u",profile_picture:"Post_profile_picture__2iIpn",post_content:"Post_post_content__JG7MH",text:"Post_text__25UwL",author_name:"Post_author_name__3t3SU",likes_count:"Post_likes_count__tWk9p",like_icon:"Post_like_icon__2g4-i"}},250:function(e,t,i){e.exports={header:"OthersPosts_header__3p6rE",noPosts:"OthersPosts_noPosts__2YeA7",noPostsMessage:"OthersPosts_noPostsMessage__r7ZFR"}},251:function(e,t,i){e.exports={info:"ProfileInfo_info__1qsgp",editSection:"ProfileInfo_editSection__3l-SO",editInfoButton:"ProfileInfo_editInfoButton__Ea3uC",hint:"ProfileInfo_hint__33PF-",choosePicture:"ProfileInfo_choosePicture__1mMu6",avatar:"ProfileInfo_avatar__15JQ8",avatarPic:"ProfileInfo_avatarPic__1MVl4",uploadImage:"ProfileInfo_uploadImage__2U8G3",editSectionButton:"ProfileInfo_editSectionButton__2Ysb0",description:"ProfileInfo_description__31VE0",info_middle_left:"ProfileInfo_info_middle_left__1xMzB",userInfo_top:"ProfileInfo_userInfo_top__Xouqe",userInfo_right:"ProfileInfo_userInfo_right__1RmqF",userInfo_bottom:"ProfileInfo_userInfo_bottom__2-4nq",is_job_looking:"ProfileInfo_is_job_looking__1wpQE",name:"ProfileInfo_name__3Od-V",birth:"ProfileInfo_birth__2Oxn2",place:"ProfileInfo_place__1kwXR",main_link:"ProfileInfo_main_link__3pgpY",about:"ProfileInfo_about__3AJVi",job_description:"ProfileInfo_job_description__cYa2_",id:"ProfileInfo_id__2pSgZ",birth_icon:"ProfileInfo_birth_icon__2rO9Z",place_icon:"ProfileInfo_place_icon__36IwQ",main_link_icon:"ProfileInfo_main_link_icon__2BSAG",about_icon:"ProfileInfo_about_icon__1TlQB",id_icon:"ProfileInfo_id_icon__3Oa8L",job_description_icon:"ProfileInfo_job_description_icon__39j5y",birth_info:"ProfileInfo_birth_info__1im1T",place_info:"ProfileInfo_place_info__3jg4c",main_link_info:"ProfileInfo_main_link_info__L8a-k",about_info:"ProfileInfo_about_info__31hm3",id_number:"ProfileInfo_id_number__3C_6a",job_description_info:"ProfileInfo_job_description_info__31tcr",contacts:"ProfileInfo_contacts__3Fyx9",fb_link:"ProfileInfo_fb_link__1z-Z7",gh_link:"ProfileInfo_gh_link__1mmBk"}},252:function(e,t,i){e.exports={myStatus:"ProfileStatus_myStatus__1yO5F",userStatus:"ProfileStatus_userStatus__2pKi3",status:"ProfileStatus_status__29rNk",editStatus:"ProfileStatus_editStatus__wcpZR",line:"ProfileStatus_line__smiFD"}},253:function(e,t,i){e.exports={profileAboutForm:"ProfileAboutForm_profileAboutForm__1cg4M",editHeader:"ProfileAboutForm_editHeader__zMcAz",editHeaderContacts:"ProfileAboutForm_editHeaderContacts__2PSHo",editInfo_row:"ProfileAboutForm_editInfo_row__2mIWu",incorrect:"ProfileAboutForm_incorrect__cWCaS",editContacts:"ProfileAboutForm_editContacts__1QUC-",editContacts_left:"ProfileAboutForm_editContacts_left__AJpBs",editContacts_right:"ProfileAboutForm_editContacts_right__3ejmF",editFullName:"ProfileAboutForm_editFullName__2-z0Q",editWebsite:"ProfileAboutForm_editWebsite__1lEu4",editInfoButton:"ProfileAboutForm_editInfoButton__1dZdp",hint:"ProfileAboutForm_hint__2fGP7",editCancel:"ProfileAboutForm_editCancel__gTJj4",editSection:"ProfileAboutForm_editSection__2Qi4x",editSectionFirst:"ProfileAboutForm_editSectionFirst__3IW5K",editSection_label:"ProfileAboutForm_editSection_label__13Adb",editSocialIcon:"ProfileAboutForm_editSocialIcon__3m45I"}},259:function(e,t,i){"use strict";i.r(t);var c=i(2),s=i(5),a=i(6),o=i(9),r=i(10),n=i(0),l=i.n(n),d=i(247),j=i.n(d),b=i(248),f=i.n(b),u=i(249),h=i.n(u),_=i(69),p=i(1),O=function(e){return Object(p.jsxs)("div",{className:h.a.profile_post,children:[Object(p.jsx)("img",{className:h.a.profile_picture,src:e.currentUserProfile.photos.small||_.a,alt:"Profile"}),Object(p.jsxs)("div",{className:h.a.post_content,children:[Object(p.jsx)("h4",{className:h.a.author_name,children:e.currentUserProfile.fullName}),Object(p.jsx)("div",{className:h.a.text,children:e.text})]})]})},x=function(e){var t=e.posts.map((function(t){return Object(p.jsx)(O,{id:t.id,text:t.text,currentUserProfile:e.currentUserProfile},t.id)}));return Object(p.jsxs)("div",{className:f.a.myPosts,children:[Object(p.jsx)("h3",{className:f.a.header,children:"My Posts"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("textarea",{onChange:function(t){var i=t.target.value;e.updateNewPostTextCreator(i)},onKeyDown:function(t){t.ctrlKey&&"Enter"===t.key&&e.newPostText&&e.addPostCreator(e.newPostText)},placeholder:"What's on your mind?",value:e.newPostText,cols:"80",rows:"3"}),Object(p.jsx)("div",{className:f.a.add_post,children:Object(p.jsx)("button",{onClick:function(){e.newPostText&&e.addPostCreator(e.newPostText)},children:"Add Post"})})]}),t]})},m=i(42),v=i(19),g=i(22),P=function(e){Object(o.a)(i,e);var t=Object(r.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"componentDidMount",value:function(){var e=this.props.authorizedUserId;this.props.getCurrentUserProfile(e)}},{key:"componentDidUpdate",value:function(e){if(e.authorizedUserId!==this.props.authorizedUserId){var t=this.props.authorizedUserId;this.props.getCurrentUserProfile(t)}}},{key:"render",value:function(){return Object(p.jsx)(x,Object(c.a)({},this.props))}}]),i}(l.a.Component),A=Object(g.c)(Object(v.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,currentUserProfile:e.profilePage.currentUserProfile,authorizedUserId:e.auth.id}}),{getCurrentUserProfile:m.c,updateNewPostTextCreator:m.h,addPostCreator:m.a}))(P),N=i(250),k=i.n(N),I=function(){return Object(p.jsxs)("div",{className:k.a.posts,children:[Object(p.jsx)("h3",{className:k.a.header,children:"Posts"}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{className:k.a.noPosts,children:Object(p.jsx)("div",{className:k.a.noPostsMessage,children:"There are no posts yet"})})]})},C=i(18),S=i(251),w=i.n(S),M=i.p+"static/media/about.26e9e7f7.svg",F=i.p+"static/media/job_desc.2bc0f1b6.svg",y=i.p+"static/media/main_link.cd4ba0cd.svg",z=i(70),L=i(246),U=i(252),Z=i.n(U),B=function(e){var t=Object(n.useState)(!1),i=Object(C.a)(t,2),c=i[0],s=i[1],a=Object(n.useState)(e.status),o=Object(C.a)(a,2),r=o[0],l=o[1];Object(n.useEffect)((function(){l(e.status)}),[e.status]);return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:Z.a.status,children:e.id===e.authorizedUserId?Object(p.jsx)("div",{className:Z.a.myStatus,children:c?Object(p.jsx)("div",{children:Object(p.jsx)("input",{className:Z.a.editStatus,onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(r)},value:r})}):Object(p.jsx)("div",{onClick:function(){s(!0)},children:Object(p.jsx)("span",{children:e.status||"Set status"})})}):Object(p.jsx)("div",{className:Z.a.userStatus,children:e.status})}),Object(p.jsx)("div",{className:Z.a.line})]})},H=i(4),T=i.n(H),D=i(13),V=i(35),J=i(253),G=i.n(J),W=i(103),q=i.p+"static/media/vk.ca27dad2.svg",E=i.p+"static/media/instagram.3537cf9b.svg",R=i.p+"static/media/twitter.cb75ff81.svg",Y=i.p+"static/media/other_link.b506c081.svg",K=i.p+"static/media/youtube.318b62e5.svg",Q=i.p+"static/media/facebook.addb87b0.svg",X=i.p+"static/media/github.3df0810a.svg",$=Object(v.b)((function(){return{}}),{saveProfile:m.g})((function(e){var t=e.saveProfile,i=e.onSubmit,s=e.profile,a=e.setEditMode;i=function(){var e=Object(D.a)(T.a.mark((function e(i,c){var s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.setFieldValue,e.next=3,t(i.profile,s);case 3:e.sent&&a(!1);case 5:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}();var o=function(e){return!!(e.preventDefault()&a(!1))};return Object(p.jsx)("div",{className:G.a.profileAboutForm,children:Object(p.jsx)(V.c,{initialValues:{profile:{FullName:s.fullName,AboutMe:s.aboutMe,LookingForAJob:s.lookingForAJob,LookingForAJobDescription:s.lookingForAJobDescription,contacts:{facebook:s.contacts.facebook,website:s.contacts.website,vk:s.contacts.vk,twitter:s.contacts.twitter,instagram:s.contacts.instagram,youtube:s.contacts.youtube,github:s.contacts.github,mainLink:s.contacts.mainLink}}},onSubmit:i,children:function(e){var t=e.values,i=e.handleSubmit;return Object(p.jsxs)(V.b,{className:G.a.editInfo,children:[Object(p.jsx)("div",{className:G.a.editHeader,children:"main information"}),Object(p.jsxs)("div",{className:G.a.editInfo_row,children:[Object(p.jsxs)("div",{className:[G.a.editSection,G.a.editSectionFirst,G.a.editFullName].join(" "),children:[Object(p.jsxs)("div",{className:G.a.editSection_label,children:[Object(p.jsx)("img",{src:W.a,alt:"Full Name"}),Object(p.jsx)("div",{children:"Full name"})]}),Object(p.jsx)(V.a,{name:"profile.FullName",value:t.profile.FullName,children:function(e){var t=e.field;return Object(p.jsx)("input",Object(c.a)({type:"text",placeholder:"Text",autoComplete:"off"},t))}})]}),Object(p.jsxs)("div",{className:[G.a.editSection,G.a.editSectionFirst,G.a.editWebsite].join(" "),children:[Object(p.jsxs)("div",{className:G.a.editSection_label,children:[Object(p.jsx)("img",{src:y,alt:"Website"}),Object(p.jsx)("div",{children:"Website"})]}),Object(p.jsx)(V.a,{name:"profile.contacts.mainLink",value:t.profile.contacts.mainLink,children:function(e){var t=e.field;return Object(p.jsx)("input",Object(c.a)({type:"text",placeholder:"Link"},t))}})]})]}),Object(p.jsxs)("div",{className:G.a.editSection,children:[Object(p.jsxs)("div",{className:G.a.editSection_label,children:[Object(p.jsx)("img",{src:M,alt:"About Me"}),Object(p.jsx)("div",{children:"About me"})]}),Object(p.jsx)(V.a,{name:"profile.AboutMe",value:t.profile.AboutMe,children:function(e){var t=e.field;return Object(p.jsx)("textarea",Object(c.a)({type:"text",placeholder:"Text",autoComplete:"off",maxLength:160},t))}})]}),Object(p.jsxs)("div",{className:G.a.editSection,children:[Object(p.jsxs)("div",{className:G.a.editSection_label,children:[Object(p.jsx)("img",{src:F,alt:"Professional Skills"}),Object(p.jsx)("div",{children:"Professional skills"})]}),Object(p.jsx)(V.a,{name:"profile.LookingForAJobDescription",value:t.profile.LookingForAJobDescription,children:function(e){var t=e.field;return Object(p.jsx)("textarea",Object(c.a)({type:"text",placeholder:"Text",autoComplete:"off",maxLength:160},t))}})]}),Object(p.jsx)("div",{className:G.a.editSection,children:Object(p.jsxs)("div",{className:G.a.editSection_label,children:[Object(p.jsx)(V.a,{name:"profile.LookingForAJob",value:t.profile.LookingForAJob,children:function(e){var t=e.field;return Object(p.jsx)("input",Object(c.a)({type:"checkbox",checked:t.value,autoComplete:"off"},t))}}),Object(p.jsx)("div",{children:"Looking for a job"})]})}),Object(p.jsx)("button",{className:G.a.editInfoButton,onClick:i,type:"submit",children:Object(p.jsxs)("div",{className:G.a.hint,children:[Object(p.jsx)("svg",{viewBox:"0 0 507.506 507.506",width:"16",height:"16",children:Object(p.jsx)("g",{children:Object(p.jsx)("path",{d:"M163.865,436.934c-14.406,0.006-28.222-5.72-38.4-15.915L9.369,304.966c-12.492-12.496-12.492-32.752,0-45.248l0,0   c12.496-12.492,32.752-12.492,45.248,0l109.248,109.248L452.889,79.942c12.496-12.492,32.752-12.492,45.248,0l0,0   c12.492,12.496,12.492,32.752,0,45.248L202.265,421.019C192.087,431.214,178.271,436.94,163.865,436.934z"})})}),Object(p.jsx)("span",{children:"Save"})]})}),Object(p.jsx)("div",{className:[G.a.editHeader,G.a.editHeaderContacts].join(" "),children:"socials"}),Object(p.jsxs)("div",{className:G.a.editContacts,children:[Object(p.jsxs)("div",{className:G.a.editContacts_left,children:[Object(p.jsxs)("div",{className:G.a.editSection,children:[Object(p.jsxs)("div",{className:G.a.editSection_label,children:[Object(p.jsx)("img",{className:G.a.editSocialIcon,src:q,alt:"VK"}),Object(p.jsx)("div",{children:"VK"})]}),Object(p.jsx)(V.a,{name:"profile.contacts.vk",value:t.profile.contacts.vk,children:function(e){var t=e.field;return Object(p.jsx)("input",Object(c.a)({type:"text",placeholder:"Link",autoComplete:"off"},t))}})]}),Object(p.jsxs)("div",{className:G.a.editSection,children:[Object(p.jsxs)("div",{className:G.a.editSection_label,children:[Object(p.jsx)("img",{className:G.a.editSocialIcon,src:E,alt:"Instagram"}),Object(p.jsx)("div",{children:"Instagram"})]}),Object(p.jsx)(V.a,{name:"profile.contacts.instagram",value:t.profile.contacts.instagram,children:function(e){var t=e.field;return Object(p.jsx)("input",Object(c.a)({type:"text",placeholder:"Link",autoComplete:"off"},t))}})]}),Object(p.jsxs)("div",{className:G.a.editSection,children:[Object(p.jsxs)("div",{className:G.a.editSection_label,children:[Object(p.jsx)("img",{className:G.a.editSocialIcon,src:R,alt:"Twitter"}),Object(p.jsx)("div",{children:"Twitter"})]}),Object(p.jsx)(V.a,{name:"profile.contacts.twitter",value:t.profile.contacts.twitter,children:function(e){var t=e.field;return Object(p.jsx)("input",Object(c.a)({type:"text",placeholder:"Link",autoComplete:"off"},t))}})]}),Object(p.jsxs)("div",{className:G.a.editSection,children:[Object(p.jsxs)("div",{className:G.a.editSection_label,children:[Object(p.jsx)("img",{className:G.a.editSocialIcon,src:Y,alt:"Other link"}),Object(p.jsx)("div",{children:"Other link"})]}),Object(p.jsx)(V.a,{name:"profile.contacts.website",value:t.profile.contacts.website,children:function(e){var t=e.field;return Object(p.jsx)("input",Object(c.a)({type:"text",placeholder:"Link",autoComplete:"off"},t))}})]})]}),Object(p.jsxs)("div",{className:G.a.editContacts_right,children:[Object(p.jsxs)("div",{className:G.a.editSection,children:[Object(p.jsxs)("div",{className:G.a.editSection_label,children:[Object(p.jsx)("img",{className:G.a.editSocialIcon,src:K,alt:"YouTube"}),Object(p.jsx)("div",{children:"YouTube"})]}),Object(p.jsx)(V.a,{name:"profile.contacts.youtube",value:t.profile.contacts.youtube,children:function(e){var t=e.field;return Object(p.jsx)("input",Object(c.a)({type:"text",placeholder:"Link",autoComplete:"off"},t))}})]}),Object(p.jsxs)("div",{className:G.a.editSection,children:[Object(p.jsxs)("div",{className:G.a.editSection_label,children:[Object(p.jsx)("img",{className:G.a.editSocialIcon,src:Q,alt:"Facebook"}),Object(p.jsx)("div",{children:"Facebook"})]}),Object(p.jsx)(V.a,{name:"profile.contacts.facebook",value:t.profile.contacts.facebook,children:function(e){var t=e.field;return Object(p.jsx)("input",Object(c.a)({type:"text",placeholder:"Link",autoComplete:"off"},t))}})]}),Object(p.jsxs)("div",{className:G.a.editSection,children:[Object(p.jsxs)("div",{className:G.a.editSection_label,children:[Object(p.jsx)("img",{className:G.a.editSocialIcon,src:X,alt:"Github"}),Object(p.jsx)("div",{children:"Github"})]}),Object(p.jsx)(V.a,{name:"profile.contacts.github",value:t.profile.contacts.github,children:function(e){var t=e.field;return Object(p.jsx)("input",Object(c.a)({type:"text",placeholder:"Link",autoComplete:"off"},t))}})]})]})]}),Object(p.jsx)("button",{className:[G.a.editInfoButton,G.a.editCancel].join(" "),onClick:o,children:Object(p.jsxs)("div",{className:G.a.hint,children:[Object(p.jsx)("svg",{viewBox:"0 0 512 512",width:"14",height:"14",children:Object(p.jsx)("g",{children:Object(p.jsx)("path",{d:"M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256C511.847,114.678,397.322,0.153,256,0z M256,64   c39.843,0.004,78.686,12.477,111.083,35.669L99.669,367.061c-61.503-86.178-41.499-205.897,44.679-267.4   C176.93,76.409,215.972,63.939,256,64z M256,448c-39.837-0.002-78.673-12.475-111.061-35.669l267.392-267.413   c61.514,86.17,41.527,205.891-44.643,267.406C335.098,435.588,296.042,448.064,256,448z"})})}),Object(p.jsx)("span",{children:"Cancel"})]})}),t.general&&Object(p.jsx)("div",{className:G.a.incorrect,children:t.general[0]})]})}})})})),ee=function(e){return Object(p.jsxs)("div",{className:w.a.userInfo_bottom,children:[Object(p.jsxs)("div",{className:w.a.userInfo_left,children:[Object(p.jsxs)("ul",{className:w.a.info_middle_left,children:[e.profile.aboutMe&&Object(p.jsxs)("li",{className:w.a.about,children:[Object(p.jsx)("img",{className:w.a.about_icon,src:M,alt:"About"}),Object(p.jsx)("div",{className:w.a.about_info,children:e.profile.aboutMe})]}),e.profile.lookingForAJobDescription&&Object(p.jsxs)("li",{className:w.a.job_description,children:[Object(p.jsx)("img",{className:w.a.job_description_icon,src:F,alt:"Professional Skills"}),Object(p.jsx)("div",{className:w.a.job_description_info,children:e.profile.lookingForAJobDescription})]}),e.profile.contacts.mainLink&&e.profile.contacts.mainLink.includes("http")&&Object(p.jsxs)("li",{className:w.a.main_link,children:[Object(p.jsx)("img",{className:w.a.main_link_icon,src:y,alt:"Main Link"}),Object(p.jsx)("div",{className:w.a.main_link_info,children:Object(p.jsx)("a",{href:e.profile.contacts.mainLink,target:"_blank",rel:"noreferrer",children:e.profile.contacts.mainLink})})]})]}),Object(p.jsxs)("ul",{className:w.a.contacts,children:[e.profile.contacts.facebook&&Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:e.profile.contacts.facebook,target:"_blank",rel:"noreferrer",children:Object(p.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:Object(p.jsx)("g",{children:Object(p.jsx)("path",{d:"M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z"})})})})}),e.profile.contacts.website&&Object(p.jsx)("li",{children:Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.profile.contacts.website,children:Object(p.jsxs)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:[Object(p.jsx)("path",{d:"M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"}),Object(p.jsx)("path",{d:"M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"}),Object(p.jsx)("path",{d:"M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"}),Object(p.jsx)("path",{d:"M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"})]})})}),e.profile.contacts.vk&&Object(p.jsx)("li",{children:Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.profile.contacts.vk,children:Object(p.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:Object(p.jsx)("g",{children:Object(p.jsx)("path",{d:"M22.316,1.684C20.632,0,17.921,0,12.5,0h-1C6.079,0,3.368,0,1.684,1.684C0,3.368,0,6.079,0,11.5v1   c0,5.421,0,8.131,1.684,9.816S6.079,24,11.5,24h1c5.421,0,8.131,0,9.816-1.684C24,20.632,24,17.921,24,12.5v-1   C24,6.079,24,3.368,22.316,1.684z M19.503,17h-1.75c-0.667,0-0.863-0.532-2.05-1.719c-1.039-1.001-1.484-1.131-1.743-1.131   c-0.353,0-0.458,0.1-0.458,0.6v1.569c0,0.43-0.137,0.681-1.25,0.681c-1.854,0-3.892-1.126-5.339-3.202   c-2.17-3.041-2.763-5.34-2.763-5.803c0-0.26,0.1-0.495,0.6-0.495h1.751c0.447,0,0.615,0.196,0.783,0.68   c0.856,2.493,2.3,4.672,2.893,4.672c0.222,0,0.324-0.103,0.324-0.667V9.608c-0.065-1.186-0.696-1.284-0.696-1.706   c0-0.195,0.167-0.402,0.445-0.402h2.751c0.371,0,0.5,0.198,0.5,0.643v3.467c0,0.37,0.161,0.5,0.272,0.5   c0.223,0,0.408-0.13,0.816-0.538c1.261-1.409,2.151-3.578,2.151-3.578c0.112-0.26,0.316-0.495,0.762-0.495h1.75   c0.529,0,0.641,0.272,0.529,0.643c-0.223,1.02-2.355,4.023-2.355,4.023c-0.186,0.297-0.26,0.445,0,0.779   c0.186,0.26,0.797,0.779,1.205,1.261c0.752,0.846,1.319,1.559,1.477,2.051C20.254,16.75,20.003,17,19.503,17z"})})})})}),e.profile.contacts.twitter&&Object(p.jsx)("li",{children:Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.profile.contacts.twitter,children:Object(p.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:Object(p.jsx)("path",{id:"Logo_00000038394049246713568260000012923108920998390947_",d:"M21.543,7.104c0.014,0.211,0.014,0.423,0.014,0.636  c0,6.507-4.954,14.01-14.01,14.01v-0.004C4.872,21.75,2.252,20.984,0,19.539c0.389,0.047,0.78,0.07,1.172,0.071  c2.218,0.002,4.372-0.742,6.115-2.112c-2.107-0.04-3.955-1.414-4.6-3.42c0.738,0.142,1.498,0.113,2.223-0.084  c-2.298-0.464-3.95-2.483-3.95-4.827c0-0.021,0-0.042,0-0.062c0.685,0.382,1.451,0.593,2.235,0.616  C1.031,8.276,0.363,5.398,1.67,3.148c2.5,3.076,6.189,4.946,10.148,5.145c-0.397-1.71,0.146-3.502,1.424-4.705  c1.983-1.865,5.102-1.769,6.967,0.214c1.103-0.217,2.16-0.622,3.127-1.195c-0.368,1.14-1.137,2.108-2.165,2.724  C22.148,5.214,23.101,4.953,24,4.555C23.339,5.544,22.507,6.407,21.543,7.104z"})})})}),e.profile.contacts.instagram&&Object(p.jsx)("li",{children:Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.profile.contacts.instagram,children:Object(p.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:Object(p.jsxs)("g",{children:[Object(p.jsx)("path",{d:"M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z"}),Object(p.jsx)("path",{d:"M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z"}),Object(p.jsx)("circle",{cx:"18.406",cy:"5.594",r:"1.44"})]})})})}),e.profile.contacts.youtube&&Object(p.jsx)("li",{children:Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.profile.contacts.youtube,children:Object(p.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:Object(p.jsx)("g",{id:"XMLID_184_",children:Object(p.jsx)("path",{d:"M23.498,6.186c-0.276-1.039-1.089-1.858-2.122-2.136C19.505,3.546,12,3.546,12,3.546s-7.505,0-9.377,0.504   C1.591,4.328,0.778,5.146,0.502,6.186C0,8.07,0,12,0,12s0,3.93,0.502,5.814c0.276,1.039,1.089,1.858,2.122,2.136   C4.495,20.454,12,20.454,12,20.454s7.505,0,9.377-0.504c1.032-0.278,1.845-1.096,2.122-2.136C24,15.93,24,12,24,12   S24,8.07,23.498,6.186z M9.546,15.569V8.431L15.818,12L9.546,15.569z"})})})})}),e.profile.contacts.github&&Object(p.jsx)("li",{children:Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",className:w.a.gh_link,href:e.profile.contacts.github,children:Object(p.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:Object(p.jsxs)("g",{children:[Object(p.jsx)("path",{d:"M12,0.296c-6.627,0-12,5.372-12,12c0,5.302,3.438,9.8,8.206,11.387   c0.6,0.111,0.82-0.26,0.82-0.577c0-0.286-0.011-1.231-0.016-2.234c-3.338,0.726-4.043-1.416-4.043-1.416   C4.421,18.069,3.635,17.7,3.635,17.7c-1.089-0.745,0.082-0.729,0.082-0.729c1.205,0.085,1.839,1.237,1.839,1.237   c1.07,1.834,2.807,1.304,3.492,0.997C9.156,18.429,9.467,17.9,9.81,17.6c-2.665-0.303-5.467-1.332-5.467-5.93   c0-1.31,0.469-2.381,1.237-3.221C5.455,8.146,5.044,6.926,5.696,5.273c0,0,1.008-0.322,3.301,1.23   C9.954,6.237,10.98,6.104,12,6.099c1.02,0.005,2.047,0.138,3.006,0.404c2.29-1.553,3.297-1.23,3.297-1.23   c0.653,1.653,0.242,2.873,0.118,3.176c0.769,0.84,1.235,1.911,1.235,3.221c0,4.609-2.807,5.624-5.479,5.921   c0.43,0.372,0.814,1.103,0.814,2.222c0,1.606-0.014,2.898-0.014,3.293c0,0.319,0.216,0.694,0.824,0.576   c4.766-1.589,8.2-6.085,8.2-11.385C24,5.669,18.627,0.296,12,0.296z"}),Object(p.jsx)("path",{d:"M4.545,17.526c-0.026,0.06-0.12,0.078-0.206,0.037c-0.087-0.039-0.136-0.121-0.108-0.18   c0.026-0.061,0.12-0.078,0.207-0.037C4.525,17.384,4.575,17.466,4.545,17.526L4.545,17.526z"}),Object(p.jsx)("path",{d:"M5.031,18.068c-0.057,0.053-0.169,0.028-0.245-0.055c-0.079-0.084-0.093-0.196-0.035-0.249   c0.059-0.053,0.167-0.028,0.246,0.056C5.076,17.903,5.091,18.014,5.031,18.068L5.031,18.068z"}),Object(p.jsx)("path",{d:"M5.504,18.759c-0.074,0.051-0.194,0.003-0.268-0.103c-0.074-0.107-0.074-0.235,0.002-0.286   c0.074-0.051,0.193-0.005,0.268,0.101C5.579,18.579,5.579,18.707,5.504,18.759L5.504,18.759z"}),Object(p.jsx)("path",{d:"M6.152,19.427c-0.066,0.073-0.206,0.053-0.308-0.046c-0.105-0.097-0.134-0.234-0.068-0.307   c0.067-0.073,0.208-0.052,0.311,0.046C6.191,19.217,6.222,19.355,6.152,19.427L6.152,19.427z"}),Object(p.jsx)("path",{d:"M7.047,19.814c-0.029,0.094-0.164,0.137-0.3,0.097C6.611,19.87,6.522,19.76,6.55,19.665   c0.028-0.095,0.164-0.139,0.301-0.096C6.986,19.609,7.075,19.719,7.047,19.814L7.047,19.814z"}),Object(p.jsx)("path",{d:"M8.029,19.886c0.003,0.099-0.112,0.181-0.255,0.183c-0.143,0.003-0.26-0.077-0.261-0.174c0-0.1,0.113-0.181,0.256-0.184   C7.912,19.708,8.029,19.788,8.029,19.886L8.029,19.886z"}),Object(p.jsx)("path",{d:"M8.943,19.731c0.017,0.096-0.082,0.196-0.224,0.222c-0.139,0.026-0.268-0.034-0.286-0.13   c-0.017-0.099,0.084-0.198,0.223-0.224C8.797,19.574,8.925,19.632,8.943,19.731L8.943,19.731z"})]})})})})]})]}),Object(p.jsx)("div",{className:w.a.userInfo_right,children:e.profile.lookingForAJob&&Object(p.jsx)("div",{className:w.a.is_job_looking,children:Object(p.jsxs)("div",{className:w.a.hint,children:[Object(p.jsx)("img",{src:"data:image/png;base64,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",alt:"Looking for a Job"}),Object(p.jsxs)("span",{children:[e.profile.fullName," is looking for a job!"]})]})})})]})},te=function(e){var t=Object(n.useState)(!1),i=Object(C.a)(t,2),c=i[0],s=i[1];if(!e.profile)return Object(p.jsx)(z.a,{});return Object(p.jsxs)("div",{className:w.a.info,children:[Object(p.jsxs)("div",{className:w.a.avatar,children:[Object(p.jsx)("img",{className:w.a.avatarPic,src:e.profile.photos.large||_.a,alt:"Profile"}),e.authorizedUserId===e.profile.userId&&Object(p.jsxs)("div",{className:w.a.editSection,children:[Object(p.jsxs)("div",{className:[w.a.editSectionButton,w.a.choosePicture].join(" "),children:[Object(p.jsx)("div",{className:w.a.hint,children:Object(p.jsxs)("label",{htmlFor:"file-input",children:[Object(p.jsxs)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:[Object(p.jsx)("path",{d:"M17.721,3,16.308,1.168A3.023,3.023,0,0,0,13.932,0H10.068A3.023,3.023,0,0,0,7.692,1.168L6.279,3Z"}),Object(p.jsx)("circle",{cx:"12",cy:"14",r:"4"}),Object(p.jsx)("path",{d:"M19,5H5a5.006,5.006,0,0,0-5,5v9a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V10A5.006,5.006,0,0,0,19,5ZM12,20a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,20Z"})]}),Object(p.jsx)("span",{children:"Change picture"})]})}),Object(p.jsx)("input",{id:"file-input",className:w.a.uploadImage,type:"file",title:" ",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}})]}),Object(p.jsx)("div",{className:w.a.editSectionButton,children:!c&&Object(p.jsx)("button",{className:w.a.editInfoButton,onClick:function(){s(!0)},children:Object(p.jsxs)("div",{className:w.a.hint,children:[Object(p.jsxs)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",children:[Object(p.jsx)("path",{d:"M1.172,19.119A4,4,0,0,0,0,21.947V24H2.053a4,4,0,0,0,2.828-1.172L18.224,9.485,14.515,5.776Z"}),Object(p.jsx)("path",{d:"M23.145.855a2.622,2.622,0,0,0-3.71,0L15.929,4.362l3.709,3.709,3.507-3.506A2.622,2.622,0,0,0,23.145.855Z"})]}),Object(p.jsx)("span",{children:"Edit info"})]})})})]})]}),Object(p.jsx)("div",{className:w.a.description,children:Object(p.jsxs)("div",{className:w.a.userInfo,children:[Object(p.jsxs)("div",{className:w.a.userInfo_top,children:[Object(p.jsx)("h2",{className:w.a.name,children:e.profile.fullName}),Object(p.jsxs)("div",{className:w.a.id,children:[Object(p.jsx)("img",{className:w.a.id_icon,src:L.a,alt:"User's ID"}),Object(p.jsx)("div",{className:w.a.id_number,children:e.profile.userId})]})]}),Object(p.jsx)(B,{status:e.status,updateStatus:e.updateStatus,id:e.profile.userId,isAuth:e.isAuth,authorizedUserId:e.authorizedUserId}),c?Object(p.jsx)($,{profile:e.profile,setEditMode:s,editMode:c}):Object(p.jsx)(ee,{profile:e.profile})]})})]})},ie=function(e){return Object(n.useEffect)((function(){document.getElementById("content").scrollTo(0,0)}),[]),e.profile?Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:j.a.content_block,children:[Object(p.jsx)(te,{profile:e.profile,status:e.status,isAuth:e.isAuth,updateStatus:e.updateStatus,authorizedUserId:e.authorizedUserId,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),e.authorizedUserId===e.profile.userId?Object(p.jsx)(A,{}):Object(p.jsx)(I,{})]})}):Object(p.jsx)("div",{className:j.a.preloaderContainer,children:Object(p.jsx)("span",{className:j.a.preloader,children:Object(p.jsx)(z.a,{})})})},ce=i(3),se=function(e){return function(t){var i=Object(ce.g)("/users/:userId/");return Object(p.jsx)(e,Object(c.a)(Object(c.a)({},t),{},{match:i}))}},ae=i(27),oe=function(e){Object(o.a)(i,e);var t=Object(r.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"componentDidMount",value:function(){var e=this.props.match?this.props.match.params.userId:this.props.authorizedUserId;this.props.getProfile(e),this.props.getStatus(e),23279!==this.props.authorizedUserId&&this.props.logout()}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[!this.props.match&&!this.props.authorizedUserId&&Object(p.jsx)(ce.a,{to:"/login"}),Object(p.jsx)(ie,Object(c.a)(Object(c.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,isAuth:this.props.isAuth,updateStatus:this.props.updateStatus,authorizedUserId:this.props.authorizedUserId,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))]})}}]),i}(l.a.Component);t.default=Object(g.c)(Object(v.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,isAuth:e.auth.isAuth,authorizedUserId:e.auth.id}}),{getProfile:m.d,getStatus:m.e,updateStatus:m.i,savePhoto:m.f,saveProfile:m.g,logout:ae.d}),se)(oe)}}]);
//# sourceMappingURL=3.faf3173c.chunk.js.map