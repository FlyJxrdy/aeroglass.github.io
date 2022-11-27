"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["ondemand.ModuleHeader"],{56062:e=>{var l,n,t,a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"relayURTModuleHeader_TimelineTimelineModule",selections:[{alias:null,args:null,concreteType:"TimelineModuleHeader",kind:"LinkedField",name:"header",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"icon",storageKey:null},n={alias:"landingUrl",args:null,concreteType:"TimelineUrl",kind:"LinkedField",name:"landing_url",plural:!1,selections:[{kind:"InlineDataFragmentSpread",name:"formatUrl_timelineUrl",selections:[l={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:"urlType",args:null,kind:"ScalarField",name:"url_type",storageKey:null},{alias:"urtEndpointOptions",args:null,concreteType:"TimelineUrtEndpointOptions",kind:"LinkedField",name:"urt_endpoint_options",plural:!1,selections:[{alias:"cacheId",args:null,kind:"ScalarField",name:"cache_id",storageKey:null},{alias:"requestParams",args:null,concreteType:"RequestParamsEntry",kind:"LinkedField",name:"request_params",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"key",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"value",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"subtitle",storageKey:null},{alias:"timelineWithContext",args:null,concreteType:"TimelineWithContext",kind:"LinkedField",name:"timeline_with_context",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"context",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null}],storageKey:null}],args:null,argumentDefinitions:[]}],storageKey:null},{alias:"socialContext",args:null,concreteType:null,kind:"LinkedField",name:"social_context",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:"contextType",args:null,kind:"ScalarField",name:"context_type",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},l,{alias:"contextImageUrls",args:null,kind:"ScalarField",name:"context_image_urls",storageKey:null},n],type:"TimelineGeneralContext",abstractKey:null}],storageKey:null},t],storageKey:null}],type:"TimelineTimelineModule",abstractKey:null};a.hash="bcd067baa57f7b4ff20e2f20ac489f5d",e.exports=a},1451:(e,l,n)=>{n.d(l,{Z:()=>u});var t=n(2784),a=n(44173),r=n(73186);n(6886);const i=(0,n(56499).Z)({loader:()=>n.e("loader.FeedbackSheet").then(n.bind(n,68767))});var o=n(60673),s=n(60007);const c=r.Z.create((e=>({curationControl:{marginStart:e.spaces.space20}}))),u=(0,o.Z)((e=>{const{analytics:l,feedbackItems:n,isDisplayedOnMedia:r}=e,o=t.useCallback((e=>n?t.createElement(i,{actionItems:n,onClose:e}):null),[n]),u=t.useCallback((()=>l.scribe({element:"caret",action:"click"})),[l]);return n&&n.length>0?t.createElement(a.Z,{onClick:u,renderActionMenu:o,style:c.curationControl,testID:s.Z.caret,withDarkBackground:r}):null}))},17707:(e,l,n)=>{n.r(l),n.d(l,{default:()=>Z});var t=n(16742),a=n(19744),r=n(2784),i=(n(85488),n(77660)),o=n.n(i),s=n(3760),c=n(68591),u=n(11839),d=n(65526),m=n(60673),g=n(1451);const y=({feedbackItems:e,icon:l,landingUrl:n,renderCustomControl:t,socialContext:a,text:i})=>{const o=(0,m.z)(),s=r.useCallback((()=>{o.scribe({element:"header",action:"click"})}),[o]),y=a&&a.generalContext&&a.generalContext.text,p=r.useMemo((()=>t?t():r.createElement(g.Z,{feedbackItems:e})),[e,t]),k=r.useMemo((()=>r.createElement(c.ZP,{icon:l,landingUrl:n,rightControl:p,subtext:y,text:i})),[l,n,p,y,i]);return(0,d.q)((()=>{n&&o.scribe({element:"header",action:"impression"})})),n?r.createElement(u.Z,{interactive:!1,onPress:s},k):k},p=r.memo(y);var k;const x=void 0!==k?k:k=n(56062),C=({feedbackItems:e,moduleContentRef:l,renderCustomControl:n})=>{const t=o()(x,l),{header:a}=t,i=r.useMemo((()=>null!=a&&a.landingUrl?(0,s.Y)(a.landingUrl):void 0),[a]);if(!(a||null!=a&&a.text))return null;const c=(e=>{if("TopicFilled"===e)return"TOPIC_FILLED"})(a.icon),u=(e=>{const l={};if(null!=e&&e.text&&null!=e&&e.contextType)return l.text=null==e?void 0:e.text,l.contextType=null==e?void 0:e.contextType,null!=e&&e.contextImageUrls&&(l.contextImageUrls=e.contextImageUrls.concat()),null!=e&&e.landingUrl&&(l.landingUrl=(0,s.Y)(e.landingUrl)),{generalContext:l}})(a.socialContext);return r.createElement(p,{feedbackItems:e,icon:c,landingUrl:i,renderCustomControl:n,socialContext:u,text:a.text})},f=r.memo(C),h=({entry:e,feedbackItems:l})=>{const{icon:n,landingUrl:t,renderCustomControl:a,socialContext:i,text:o}=e.content.header,{moduleContentRef:s}=e.content.timelineModule;return s?r.createElement(f,{moduleContentRef:s,renderCustomControl:a}):r.createElement(p,{feedbackItems:l,icon:n,landingUrl:t,renderCustomControl:a,socialContext:i,text:o})},b=r.memo(h),F={viewType:"module_header"},Z=a.iH({component:b,defaultScribeNamespace:{element:"header"},feedbackEntrySelector:e=>e.content.timelineModule,shouldDisplayBorder:(0,t.Z)(!1),getBehavioralEventContextOverride:()=>F}).getHandler()},68591:(e,l,n)=>{n.d(l,{Tu:()=>m,ZP:()=>y});var t=n(2784),a=n(25686),r=n(3655),i=n(36934),o=n(79866),s=n(11839),c=n(73186),u=n(80166);const d=c.Z.create((e=>({icon:{color:e.colors.primary,height:e.fontSizes.title4,paddingEnd:e.spaces.space12,width:e.fontSizes.title4}}))),m=Object.freeze({TopicFilled:"TOPIC_FILLED"});const g=c.Z.create((e=>({root:{justifyContent:"space-between",paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical},mainContent:{flexDirection:"row"},subtext:{alignSelf:"flex-start"},withSubtext:{alignSelf:"center"},icon:{alignSelf:"flex-start",height:e.spaces.space20,justifyContent:"center"},iconArrow:{color:e.colors.text},rightControlGroup:{flexDirection:"row",justifyContent:"flex-end",flexGrow:1,alignSelf:"center"}}))),y=function({icon:e,landingUrl:l,nativeID:n,rightControl:y,style:p,subtext:k,testID:x,text:C}){const f=(e=>e===m.TopicFilled?t.createElement(u.Z,{style:d.icon}):null)(e),h=k?null:g.withSubtext,b=o.Z.generate({backgroundColor:c.Z.theme.colors.gray0,color:c.Z.theme.colors.cellBackground,customFocusBackgroundColor:c.Z.theme.colors.gray0,customHoverBackgroundColor:c.Z.theme.colors.gray0,customPressedBackgroundColor:c.Z.theme.colors.gray0});return t.createElement(s.Z,{interactiveStyles:l?b:null,link:null==l?void 0:l.url,nativeID:n,style:[g.root,p],testID:x},t.createElement(a.Z,{accessibilityLevel:2,accessibilityRole:"heading",style:g.mainContent},t.createElement(a.Z,{style:g.icon},f),t.createElement(i.ZP,{numberOfLines:3,size:"headline1",style:h,weight:"heavy",withHashflags:!0},C),t.createElement(a.Z,{style:g.rightControlGroup},l?t.createElement(a.Z,{style:h},t.createElement(r.Z,{style:g.iconArrow})):null,y?t.createElement(a.Z,null,y):null)),k?t.createElement(i.ZP,{color:"gray700",numberOfLines:2,size:"subtext2",style:g.subtext,withHashflags:!0},k):null)}}}]);
