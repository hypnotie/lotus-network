(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{245:function(e,t,c){"use strict";t.a=c.p+"static/media/id.dbc6e722.svg"},246:function(e,t,c){e.exports={cover_block:"Profile_cover_block__109yF",content_block:"Profile_content_block__2dhHN"}},247:function(e,t,c){e.exports={header:"MyPosts_header__1_4GG",add_post:"MyPosts_add_post__u2a8h"}},248:function(e,t,c){e.exports={profile_post:"Post_profile_post__3Si3u",profile_picture:"Post_profile_picture__2iIpn",post_content:"Post_post_content__JG7MH",text:"Post_text__25UwL",author_name:"Post_author_name__3t3SU",likes_count:"Post_likes_count__tWk9p",like_icon:"Post_like_icon__2g4-i"}},249:function(e,t,c){e.exports={info:"ProfileInfo_info__1qsgp",editSection:"ProfileInfo_editSection__3l-SO",editInfoButton:"ProfileInfo_editInfoButton__Ea3uC",avatar:"ProfileInfo_avatar__15JQ8",avatarPic:"ProfileInfo_avatarPic__1MVl4",uploadImage:"ProfileInfo_uploadImage__2U8G3",editSectionButton:"ProfileInfo_editSectionButton__2Ysb0",description:"ProfileInfo_description__31VE0",info_middle_left:"ProfileInfo_info_middle_left__1xMzB",userInfo_top:"ProfileInfo_userInfo_top__Xouqe",userInfo_right:"ProfileInfo_userInfo_right__1RmqF",userInfo_bottom:"ProfileInfo_userInfo_bottom__2-4nq",is_job_looking:"ProfileInfo_is_job_looking__1wpQE",name:"ProfileInfo_name__3Od-V",birth:"ProfileInfo_birth__2Oxn2",place:"ProfileInfo_place__1kwXR",main_link:"ProfileInfo_main_link__3pgpY",about:"ProfileInfo_about__3AJVi",job_description:"ProfileInfo_job_description__cYa2_",id:"ProfileInfo_id__2pSgZ",birth_icon:"ProfileInfo_birth_icon__2rO9Z",place_icon:"ProfileInfo_place_icon__36IwQ",main_link_icon:"ProfileInfo_main_link_icon__2BSAG",about_icon:"ProfileInfo_about_icon__1TlQB",id_icon:"ProfileInfo_id_icon__3Oa8L",job_description_icon:"ProfileInfo_job_description_icon__39j5y",birth_info:"ProfileInfo_birth_info__1im1T",place_info:"ProfileInfo_place_info__3jg4c",main_link_info:"ProfileInfo_main_link_info__L8a-k",about_info:"ProfileInfo_about_info__31hm3",id_number:"ProfileInfo_id_number__3C_6a",job_description_info:"ProfileInfo_job_description_info__31tcr",contacts:"ProfileInfo_contacts__3Fyx9",fb_link:"ProfileInfo_fb_link__1z-Z7",gh_link:"ProfileInfo_gh_link__1mmBk"}},250:function(e,t,c){e.exports={myStatus:"ProfileStatus_myStatus__1yO5F",userStatus:"ProfileStatus_userStatus__2pKi3",status:"ProfileStatus_status__29rNk",editStatus:"ProfileStatus_editStatus__wcpZR",line:"ProfileStatus_line__smiFD"}},251:function(e,t,c){e.exports={profileAboutForm:"ProfileAboutForm_profileAboutForm__1cg4M",editInfoButton:"ProfileAboutForm_editInfoButton__1dZdp",label:"ProfileAboutForm_label__16t5R",fullName_label:"ProfileAboutForm_fullName_label__2J6ak"}},257:function(e,t,c){"use strict";c.r(t);var i=c(2),o=c(4),s=c(5),a=c(9),n=c(10),r=c(0),l=c.n(r),j=c(246),d=c.n(j),f=c(247),b=c.n(f),u=c(248),h=c.n(u),_=c(1),p=function(e){return Object(_.jsxs)("div",{className:h.a.profile_post,children:[Object(_.jsx)("img",{className:h.a.profile_picture,src:"https://social-network.samuraijs.com/activecontent/images/users/23279/user.jpg?v=25",alt:"Profile"}),Object(_.jsxs)("div",{className:h.a.post_content,children:[Object(_.jsx)("h4",{className:h.a.author_name,children:"Maksym Hanhalo"}),Object(_.jsx)("div",{className:h.a.text,children:e.text})]})]})},O=function(e){var t=e.posts.map((function(e){return Object(_.jsx)(p,{id:e.id,text:e.text,likes:e.likes},e.id)}));return Object(_.jsxs)("div",{children:[Object(_.jsx)("h3",{className:b.a.header,children:"My Posts"}),Object(_.jsxs)("div",{children:[Object(_.jsx)("textarea",{onChange:function(t){var c=t.target.value;e.updateNewPostText(c)},onKeyDown:function(t){t.ctrlKey&&"Enter"===t.key&&e.newPostText&&e.addPost(e.newPostText)},placeholder:"What's on your mind?",value:e.newPostText,cols:"80",rows:"3"}),Object(_.jsx)("div",{className:b.a.add_post,children:Object(_.jsx)("button",{onClick:function(){e.newPostText&&e.addPost(e.newPostText)},children:"Add Post"})})]}),t]})},x=c(67),m=c(18),v=Object(m.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){return e(Object(x.g)(t))},addPost:function(t){return e(Object(x.a)(t))}}}))(O),g=c(17),A=c(249),P=c.n(A),k=c.p+"static/media/about.26e9e7f7.svg",I=c.p+"static/media/job_desc.2bc0f1b6.svg",N=c.p+"static/media/main_link.cd4ba0cd.svg",C=c(69),w=c(68),S=c(245),M=c(250),z=c.n(M),y=function(e){var t=Object(r.useState)(!1),c=Object(g.a)(t,2),i=c[0],o=c[1],s=Object(r.useState)(e.status),a=Object(g.a)(s,2),n=a[0],l=a[1];Object(r.useEffect)((function(){l(e.status)}),[e.status]);return Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:z.a.status,children:e.id===e.authorizedUserId?Object(_.jsx)("div",{className:z.a.myStatus,children:i?Object(_.jsx)("div",{children:Object(_.jsx)("input",{className:z.a.editStatus,onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(n)},value:n})}):Object(_.jsx)("div",{onClick:function(){o(!0)},children:Object(_.jsx)("span",{children:e.status||"Set status"})})}):Object(_.jsx)("div",{className:z.a.userStatus,children:e.status})}),Object(_.jsx)("div",{className:z.a.line})]})},Z=c(38),F=c(251),L=c.n(F),B=c(102),U=c.p+"static/media/about_me.725ab795.svg",H=Object(m.b)((function(){}),{saveProfile:x.f})((function(e){var t=e.saveProfile,c=e.onSubmit,o=e.profile,s=(e.editMode,e.setEditMode);return c=function(e){t(e.profile),s(!1)},Object(_.jsx)("div",{className:L.a.profileAboutForm,children:Object(_.jsx)(Z.c,{initialValues:{profile:{FullName:o.fullName,AboutMe:o.aboutMe,LookingForAJob:o.lookingForAJob,LookingForAJobDescription:o.lookingForAJobDescription,contacts:{facebook:o.contacts.facebook,website:o.contacts.website,vk:o.contacts.vk,twitter:o.contacts.twitter,instagram:o.contacts.instagram,youtube:o.contacts.youtube,github:o.contacts.github,mainLink:o.contacts.mainLink}}},onSubmit:c,children:function(e){var t=e.values,c=e.handleSubmit;return Object(_.jsxs)(Z.b,{children:[Object(_.jsxs)("div",{className:L.a.label.fullName,children:[Object(_.jsxs)("div",{className:L.a.fullName_label,children:[Object(_.jsx)("img",{src:B.a,alt:"Full Name"}),Object(_.jsx)("div",{children:"Full Name"})]}),Object(_.jsx)(Z.a,{name:"profile.FullName",value:t.profile.FullName,children:function(e){var t=e.field;return Object(_.jsx)("input",Object(i.a)({type:"text",placeholder:"Text",autoComplete:"off"},t))}})]}),Object(_.jsxs)("div",{className:L.a.fullName,children:[Object(_.jsxs)("div",{className:L.a.fullName_label,children:[Object(_.jsx)("img",{src:U,alt:"About Me"}),Object(_.jsx)("div",{children:"About Me"})]}),Object(_.jsx)(Z.a,{name:"profile.AboutMe",value:t.profile.AboutMe,children:function(e){var t=e.field;return Object(_.jsx)("input",Object(i.a)({type:"text",placeholder:"Text",autoComplete:"off"},t))}})]}),Object(_.jsx)("label",{children:"Looking for a Job"}),Object(_.jsx)("div",{children:Object(_.jsx)(Z.a,{name:"profile.LookingForAJob",value:t.profile.LookingForAJob,children:function(e){var t=e.field;return Object(_.jsx)("input",Object(i.a)({type:"checkbox",checked:t.value,autoComplete:"off"},t))}})}),Object(_.jsx)("label",{children:"Professional Skills"}),Object(_.jsx)("div",{children:Object(_.jsx)(Z.a,{name:"profile.LookingForAJobDescription",value:t.profile.LookingForAJobDescription,children:function(e){var t=e.field;return Object(_.jsx)("input",Object(i.a)({type:"text",placeholder:"Text",autoComplete:"off"},t))}})}),Object(_.jsx)("label",{children:"Website"}),Object(_.jsx)("div",{children:Object.keys(o.contacts).map((function(e){return Object(_.jsx)("div",{children:Object(_.jsx)(Z.a,{type:"text",name:"profile.contacts.".concat(e),placeholder:"Link"})},e)}))}),Object(_.jsx)("button",{className:L.a.editInfoButton,onClick:c,type:"submit",children:Object(_.jsx)("svg",{viewBox:"0 0 507.506 507.506",width:"16",height:"16",children:Object(_.jsx)("g",{children:Object(_.jsx)("path",{d:"M163.865,436.934c-14.406,0.006-28.222-5.72-38.4-15.915L9.369,304.966c-12.492-12.496-12.492-32.752,0-45.248l0,0   c12.496-12.492,32.752-12.492,45.248,0l109.248,109.248L452.889,79.942c12.496-12.492,32.752-12.492,45.248,0l0,0   c12.492,12.496,12.492,32.752,0,45.248L202.265,421.019C192.087,431.214,178.271,436.94,163.865,436.934z"})})})})]})}})})})),D=function(e){return Object(_.jsxs)("div",{className:P.a.userInfo_bottom,children:[Object(_.jsxs)("div",{className:P.a.userInfo_left,children:[Object(_.jsxs)("ul",{className:P.a.info_middle_left,children:[e.profile.aboutMe&&Object(_.jsxs)("li",{className:P.a.about,children:[Object(_.jsx)("img",{className:P.a.about_icon,src:k,alt:"About"}),Object(_.jsx)("div",{className:P.a.about_info,children:e.profile.aboutMe})]}),e.profile.lookingForAJobDescription&&Object(_.jsxs)("li",{className:P.a.job_description,children:[Object(_.jsx)("img",{className:P.a.job_description_icon,src:I,alt:"Professional Skills"}),Object(_.jsx)("div",{className:P.a.job_description_info,children:e.profile.lookingForAJobDescription})]}),e.profile.contacts.mainLink&&e.profile.contacts.mainLink.includes("http")&&Object(_.jsxs)("li",{className:P.a.main_link,children:[Object(_.jsx)("img",{className:P.a.main_link_icon,src:N,alt:"Main Link"}),Object(_.jsx)("div",{className:P.a.main_link_info,children:Object(_.jsx)("a",{href:e.profile.contacts.mainLink,target:"_blank",rel:"noreferrer",children:e.profile.contacts.mainLink})})]})]}),Object(_.jsxs)("ul",{className:P.a.contacts,children:[e.profile.contacts.facebook&&Object(_.jsx)("li",{children:Object(_.jsx)("a",{href:e.profile.contacts.facebook,target:"_blank",rel:"noreferrer",children:Object(_.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:Object(_.jsx)("g",{children:Object(_.jsx)("path",{d:"M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z"})})})})}),e.profile.contacts.website&&Object(_.jsx)("li",{children:Object(_.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.profile.contacts.website,children:Object(_.jsxs)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:[Object(_.jsx)("path",{d:"M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"}),Object(_.jsx)("path",{d:"M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"}),Object(_.jsx)("path",{d:"M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"}),Object(_.jsx)("path",{d:"M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"})]})})}),e.profile.contacts.vk&&Object(_.jsx)("li",{children:Object(_.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.profile.contacts.vk,children:Object(_.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:Object(_.jsx)("g",{children:Object(_.jsx)("path",{d:"M22.316,1.684C20.632,0,17.921,0,12.5,0h-1C6.079,0,3.368,0,1.684,1.684C0,3.368,0,6.079,0,11.5v1   c0,5.421,0,8.131,1.684,9.816S6.079,24,11.5,24h1c5.421,0,8.131,0,9.816-1.684C24,20.632,24,17.921,24,12.5v-1   C24,6.079,24,3.368,22.316,1.684z M19.503,17h-1.75c-0.667,0-0.863-0.532-2.05-1.719c-1.039-1.001-1.484-1.131-1.743-1.131   c-0.353,0-0.458,0.1-0.458,0.6v1.569c0,0.43-0.137,0.681-1.25,0.681c-1.854,0-3.892-1.126-5.339-3.202   c-2.17-3.041-2.763-5.34-2.763-5.803c0-0.26,0.1-0.495,0.6-0.495h1.751c0.447,0,0.615,0.196,0.783,0.68   c0.856,2.493,2.3,4.672,2.893,4.672c0.222,0,0.324-0.103,0.324-0.667V9.608c-0.065-1.186-0.696-1.284-0.696-1.706   c0-0.195,0.167-0.402,0.445-0.402h2.751c0.371,0,0.5,0.198,0.5,0.643v3.467c0,0.37,0.161,0.5,0.272,0.5   c0.223,0,0.408-0.13,0.816-0.538c1.261-1.409,2.151-3.578,2.151-3.578c0.112-0.26,0.316-0.495,0.762-0.495h1.75   c0.529,0,0.641,0.272,0.529,0.643c-0.223,1.02-2.355,4.023-2.355,4.023c-0.186,0.297-0.26,0.445,0,0.779   c0.186,0.26,0.797,0.779,1.205,1.261c0.752,0.846,1.319,1.559,1.477,2.051C20.254,16.75,20.003,17,19.503,17z"})})})})}),e.profile.contacts.twitter&&Object(_.jsx)("li",{children:Object(_.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.profile.contacts.twitter,children:Object(_.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:Object(_.jsx)("path",{id:"Logo_00000038394049246713568260000012923108920998390947_",d:"M21.543,7.104c0.014,0.211,0.014,0.423,0.014,0.636  c0,6.507-4.954,14.01-14.01,14.01v-0.004C4.872,21.75,2.252,20.984,0,19.539c0.389,0.047,0.78,0.07,1.172,0.071  c2.218,0.002,4.372-0.742,6.115-2.112c-2.107-0.04-3.955-1.414-4.6-3.42c0.738,0.142,1.498,0.113,2.223-0.084  c-2.298-0.464-3.95-2.483-3.95-4.827c0-0.021,0-0.042,0-0.062c0.685,0.382,1.451,0.593,2.235,0.616  C1.031,8.276,0.363,5.398,1.67,3.148c2.5,3.076,6.189,4.946,10.148,5.145c-0.397-1.71,0.146-3.502,1.424-4.705  c1.983-1.865,5.102-1.769,6.967,0.214c1.103-0.217,2.16-0.622,3.127-1.195c-0.368,1.14-1.137,2.108-2.165,2.724  C22.148,5.214,23.101,4.953,24,4.555C23.339,5.544,22.507,6.407,21.543,7.104z"})})})}),e.profile.contacts.instagram&&Object(_.jsx)("li",{children:Object(_.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.profile.contacts.instagram,children:Object(_.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:Object(_.jsxs)("g",{children:[Object(_.jsx)("path",{d:"M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z"}),Object(_.jsx)("path",{d:"M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z"}),Object(_.jsx)("circle",{cx:"18.406",cy:"5.594",r:"1.44"})]})})})}),e.profile.contacts.youtube&&Object(_.jsx)("li",{children:Object(_.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.profile.contacts.youtube,children:Object(_.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:Object(_.jsx)("g",{id:"XMLID_184_",children:Object(_.jsx)("path",{d:"M23.498,6.186c-0.276-1.039-1.089-1.858-2.122-2.136C19.505,3.546,12,3.546,12,3.546s-7.505,0-9.377,0.504   C1.591,4.328,0.778,5.146,0.502,6.186C0,8.07,0,12,0,12s0,3.93,0.502,5.814c0.276,1.039,1.089,1.858,2.122,2.136   C4.495,20.454,12,20.454,12,20.454s7.505,0,9.377-0.504c1.032-0.278,1.845-1.096,2.122-2.136C24,15.93,24,12,24,12   S24,8.07,23.498,6.186z M9.546,15.569V8.431L15.818,12L9.546,15.569z"})})})})}),e.profile.contacts.github&&Object(_.jsx)("li",{children:Object(_.jsx)("a",{target:"_blank",rel:"noreferrer",className:P.a.gh_link,href:e.profile.contacts.github,children:Object(_.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:Object(_.jsxs)("g",{children:[Object(_.jsx)("path",{d:"M12,0.296c-6.627,0-12,5.372-12,12c0,5.302,3.438,9.8,8.206,11.387   c0.6,0.111,0.82-0.26,0.82-0.577c0-0.286-0.011-1.231-0.016-2.234c-3.338,0.726-4.043-1.416-4.043-1.416   C4.421,18.069,3.635,17.7,3.635,17.7c-1.089-0.745,0.082-0.729,0.082-0.729c1.205,0.085,1.839,1.237,1.839,1.237   c1.07,1.834,2.807,1.304,3.492,0.997C9.156,18.429,9.467,17.9,9.81,17.6c-2.665-0.303-5.467-1.332-5.467-5.93   c0-1.31,0.469-2.381,1.237-3.221C5.455,8.146,5.044,6.926,5.696,5.273c0,0,1.008-0.322,3.301,1.23   C9.954,6.237,10.98,6.104,12,6.099c1.02,0.005,2.047,0.138,3.006,0.404c2.29-1.553,3.297-1.23,3.297-1.23   c0.653,1.653,0.242,2.873,0.118,3.176c0.769,0.84,1.235,1.911,1.235,3.221c0,4.609-2.807,5.624-5.479,5.921   c0.43,0.372,0.814,1.103,0.814,2.222c0,1.606-0.014,2.898-0.014,3.293c0,0.319,0.216,0.694,0.824,0.576   c4.766-1.589,8.2-6.085,8.2-11.385C24,5.669,18.627,0.296,12,0.296z"}),Object(_.jsx)("path",{d:"M4.545,17.526c-0.026,0.06-0.12,0.078-0.206,0.037c-0.087-0.039-0.136-0.121-0.108-0.18   c0.026-0.061,0.12-0.078,0.207-0.037C4.525,17.384,4.575,17.466,4.545,17.526L4.545,17.526z"}),Object(_.jsx)("path",{d:"M5.031,18.068c-0.057,0.053-0.169,0.028-0.245-0.055c-0.079-0.084-0.093-0.196-0.035-0.249   c0.059-0.053,0.167-0.028,0.246,0.056C5.076,17.903,5.091,18.014,5.031,18.068L5.031,18.068z"}),Object(_.jsx)("path",{d:"M5.504,18.759c-0.074,0.051-0.194,0.003-0.268-0.103c-0.074-0.107-0.074-0.235,0.002-0.286   c0.074-0.051,0.193-0.005,0.268,0.101C5.579,18.579,5.579,18.707,5.504,18.759L5.504,18.759z"}),Object(_.jsx)("path",{d:"M6.152,19.427c-0.066,0.073-0.206,0.053-0.308-0.046c-0.105-0.097-0.134-0.234-0.068-0.307   c0.067-0.073,0.208-0.052,0.311,0.046C6.191,19.217,6.222,19.355,6.152,19.427L6.152,19.427z"}),Object(_.jsx)("path",{d:"M7.047,19.814c-0.029,0.094-0.164,0.137-0.3,0.097C6.611,19.87,6.522,19.76,6.55,19.665   c0.028-0.095,0.164-0.139,0.301-0.096C6.986,19.609,7.075,19.719,7.047,19.814L7.047,19.814z"}),Object(_.jsx)("path",{d:"M8.029,19.886c0.003,0.099-0.112,0.181-0.255,0.183c-0.143,0.003-0.26-0.077-0.261-0.174c0-0.1,0.113-0.181,0.256-0.184   C7.912,19.708,8.029,19.788,8.029,19.886L8.029,19.886z"}),Object(_.jsx)("path",{d:"M8.943,19.731c0.017,0.096-0.082,0.196-0.224,0.222c-0.139,0.026-0.268-0.034-0.286-0.13   c-0.017-0.099,0.084-0.198,0.223-0.224C8.797,19.574,8.925,19.632,8.943,19.731L8.943,19.731z"})]})})})})]})]}),Object(_.jsx)("div",{className:P.a.userInfo_right,children:e.profile.lookingForAJob&&Object(_.jsx)("div",{className:P.a.is_job_looking,children:Object(_.jsx)("img",{src:"data:image/png;base64,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",alt:"Looking for a Job"})})})]})},J=function(e){var t=Object(r.useState)(!1),c=Object(g.a)(t,2),i=c[0],o=c[1];if(!e.profile)return Object(_.jsx)(C.a,{});return Object(_.jsxs)("div",{className:P.a.info,children:[Object(_.jsxs)("div",{className:P.a.avatar,children:[Object(_.jsx)("img",{className:P.a.avatarPic,src:e.profile.photos.large||w.a,alt:"Profile"}),e.authorizedUserId===e.profile.userId&&Object(_.jsxs)("div",{className:P.a.editSection,children:[Object(_.jsxs)("div",{className:P.a.editSectionButton,children:[Object(_.jsx)("label",{for:"file-input",children:Object(_.jsxs)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:[Object(_.jsx)("path",{d:"M17.721,3,16.308,1.168A3.023,3.023,0,0,0,13.932,0H10.068A3.023,3.023,0,0,0,7.692,1.168L6.279,3Z"}),Object(_.jsx)("circle",{cx:"12",cy:"14",r:"4"}),Object(_.jsx)("path",{d:"M19,5H5a5.006,5.006,0,0,0-5,5v9a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V10A5.006,5.006,0,0,0,19,5ZM12,20a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,20Z"})]})}),Object(_.jsx)("input",{id:"file-input",className:P.a.uploadImage,type:"file",title:" ",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}})]}),Object(_.jsx)("div",{className:P.a.editSectionButton,children:!i&&Object(_.jsx)("button",{className:P.a.editInfoButton,onClick:function(){o(!0)},children:Object(_.jsxs)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",children:[Object(_.jsx)("path",{d:"M1.172,19.119A4,4,0,0,0,0,21.947V24H2.053a4,4,0,0,0,2.828-1.172L18.224,9.485,14.515,5.776Z"}),Object(_.jsx)("path",{d:"M23.145.855a2.622,2.622,0,0,0-3.71,0L15.929,4.362l3.709,3.709,3.507-3.506A2.622,2.622,0,0,0,23.145.855Z"})]})})})]})]}),Object(_.jsx)("div",{className:P.a.description,children:Object(_.jsxs)("div",{className:P.a.userInfo,children:[Object(_.jsxs)("div",{className:P.a.userInfo_top,children:[Object(_.jsx)("h2",{className:P.a.name,children:e.profile.fullName}),Object(_.jsxs)("div",{className:P.a.id,children:[Object(_.jsx)("img",{className:P.a.id_icon,src:S.a,alt:"User's ID"}),Object(_.jsx)("div",{className:P.a.id_number,children:e.profile.userId})]})]}),Object(_.jsx)(y,{status:e.status,updateStatus:e.updateStatus,id:e.profile.userId,isAuth:e.isAuth,authorizedUserId:e.authorizedUserId}),i?Object(_.jsx)(H,{profile:e.profile,setEditMode:o,editMode:i}):Object(_.jsx)(D,{profile:e.profile})]})})]})},V=function(e){return Object(_.jsx)("div",{children:Object(_.jsxs)("div",{className:d.a.content_block,children:[Object(_.jsx)(J,{profile:e.profile,status:e.status,isAuth:e.isAuth,updateStatus:e.updateStatus,authorizedUserId:e.authorizedUserId,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),Object(_.jsx)(v,{})]})})},T=c(28),G=c(3),q=function(e){return function(t){var c=Object(G.g)("/users/:userId/");return Object(_.jsx)(e,Object(i.a)(Object(i.a)({},t),{},{match:c}))}},R=function(e){Object(a.a)(c,e);var t=Object(n.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"componentDidMount",value:function(){var e=this.props.match?this.props.match.params.userId:this.props.authorizedUserId;this.props.getProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(_.jsxs)(_.Fragment,{children:[!this.props.match&&!this.props.authorizedUserId&&Object(_.jsx)(G.a,{to:"/login"}),Object(_.jsx)(V,Object(i.a)(Object(i.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,isAuth:this.props.isAuth,updateStatus:this.props.updateStatus,authorizedUserId:this.props.authorizedUserId,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))]})}}]),c}(l.a.Component);t.default=Object(T.c)(Object(m.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,isAuth:e.auth.isAuth,authorizedUserId:e.auth.id}}),{getProfile:x.c,getStatus:x.d,updateStatus:x.h,savePhoto:x.e,saveProfile:x.f}),q)(R)}}]);
//# sourceMappingURL=3.b276af19.chunk.js.map