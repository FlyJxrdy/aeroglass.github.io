"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["loader.SideNav"],{73792:e=>{var t,l,n,a,i,s,r,c,o,d,u,p,m,g,h,y,_={fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"DelegatedAccountListQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:t=[{kind:"Literal",name:"status",value:"Accepted"}],concreteType:"DelegationGroup",kind:"LinkedField",name:"list_delegation_groups",plural:!0,selections:[{alias:"handle",args:null,concreteType:"UserResults",kind:"LinkedField",name:"handle_results",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"result",plural:!1,selections:[l={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[n={alias:null,args:null,kind:"ScalarField",name:"rest_id",storageKey:null},{alias:null,args:null,concreteType:"ApiUser",kind:"LinkedField",name:"legacy",plural:!1,selections:[{kind:"RequiredField",field:a={alias:null,args:null,kind:"ScalarField",name:"profile_image_url_https",storageKey:null},action:"LOG",path:"viewer.list_delegation_groups.handle.result.legacy.profile_image_url_https"}],storageKey:null},i={args:null,kind:"FragmentSpread",name:"UserCell_user"}],type:"User",abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"DelegationMembership",kind:"LinkedField",name:"members",plural:!0,selections:[{alias:null,args:null,concreteType:"UserResults",kind:"LinkedField",name:"user_results",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"result",plural:!1,selections:[l,{kind:"InlineFragment",selections:[n,i],type:"User",abstractKey:null}],storageKey:null}],storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"role",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null}],storageKey:null}],storageKey:'list_delegation_groups(status:"Accepted")'}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"DelegatedAccountListQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:t,concreteType:"DelegationGroup",kind:"LinkedField",name:"list_delegation_groups",plural:!0,selections:[{alias:"handle",args:null,concreteType:"UserResults",kind:"LinkedField",name:"handle_results",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"result",plural:!1,selections:[l,{kind:"InlineFragment",selections:[n,{alias:null,args:null,concreteType:"ApiUser",kind:"LinkedField",name:"legacy",plural:!1,selections:[a,c={alias:null,args:null,kind:"ScalarField",name:"id_str",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"screen_name",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"protected",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"verified",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"followed_by",storageKey:null}],storageKey:null},g={alias:null,args:null,filters:null,handle:"defaultScalars",key:"",kind:"LinkedHandle",name:"legacy"},h={alias:null,args:null,kind:"ScalarField",name:"is_blue_verified",storageKey:null},y={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"User",abstractKey:null}],storageKey:null},y],storageKey:null},{alias:null,args:null,concreteType:"DelegationMembership",kind:"LinkedField",name:"members",plural:!0,selections:[{alias:null,args:null,concreteType:"UserResults",kind:"LinkedField",name:"user_results",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"result",plural:!1,selections:[l,{kind:"InlineFragment",selections:[n,h,{alias:null,args:null,concreteType:"ApiUser",kind:"LinkedField",name:"legacy",plural:!1,selections:[c,a,o,d,u,p,m],storageKey:null},g,y],type:"User",abstractKey:null}],storageKey:null},y],storageKey:null},s,r,y],storageKey:null},y],storageKey:'list_delegation_groups(status:"Accepted")'}],storageKey:null}]},params:{id:"lj1jSU2FSrrS88ANbpDsIQ",metadata:{features:["responsive_web_twitter_blue_verified_badge_is_enabled"]},name:"DelegatedAccountListQuery",operationKind:"query",text:null}};_.hash="3c1185bf452a5c431724cb39d1dc2e04",e.exports=_},20871:e=>{var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"UserCell_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_blue_verified",storageKey:null},{alias:null,args:null,concreteType:"ApiUser",kind:"LinkedField",name:"legacy",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id_str",storageKey:null},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"profile_image_url_https",storageKey:null},action:"THROW",path:"legacy.profile_image_url_https"},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},action:"THROW",path:"legacy.name"},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"screen_name",storageKey:null},action:"THROW",path:"legacy.screen_name"},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"protected",storageKey:null},action:"THROW",path:"legacy.protected"},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"verified",storageKey:null},action:"THROW",path:"legacy.verified"},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"followed_by",storageKey:null},action:"THROW",path:"legacy.followed_by"}],storageKey:null}],type:"User",abstractKey:null,hash:"0c3f58f309f54e04a99be964ee3acc59"};e.exports=t},20229:(e,t,l)=>{l.r(t),l.d(t,{default:()=>H});var n=l(2784),a=l(25686),i=l(54044),s=l(73186),r=(l(36728),l(79404)),c=l.n(r),o=l(11816),d=l(95514),u=l(22613),p=l(60673),m=l(23335),g=l(92160),h=l(26401),y=l(99945),_=l(57659),b=l(23803);const k=(0,g.Z)().propsFromState((()=>({fetchStatus:h.UD,loggedInUser:_.ZP.selectLoggedInUser,multiAccountUsers:h.pc,hasMultiAccountBadges:h.pA}))).propsFromActions((()=>({createLocalApiErrorHandlerAccountSwitch:(0,m.createLocalApiErrorHandlerWithContextFactory)("ACCOUNT_SWITCHER_ACCOUNT_SWITCH"),createLocalApiErrorHandlerMultiListFetch:(0,m.createLocalApiErrorHandlerWithContextFactory)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"),fetchMultiAccountList:h.qc,switchAccount:y.y}))).adjustStateProps((({fetchStatus:e,hasMultiAccountBadges:t,loggedInUser:l,multiAccountUsers:n})=>({fetchStatus:e===b.ZP.NONE?b.ZP.LOADING:e,hasMultiAccountBadges:!!l&&t,loggedInUser:l,multiAccountUsers:n}))).withAnalytics({page:"nav",section:"account_switcher"});var f=l(62672);const C="SideNav_AccountSwitcher_Button",v="AccountSwitcher_AddAccount_Button",E="AccountSwitcher_Logout_Button",w="AccountSwitcher_ManageAccounts_Button",S=c().j0a8da6e,A=c().c6f2bf00,F=c().a58e0e51,U=k((({createLocalApiErrorHandlerAccountSwitch:e,createLocalApiErrorHandlerMultiListFetch:t,fetchMultiAccountList:l,fetchStatus:a,hasMultiAccountBadges:i,isExpanded:s,loggedInUser:r,multiAccountUsers:c,switchAccount:m})=>{const g=(0,p.z)(),h=n.useCallback((()=>{const e=c.length>1,t=[];return c.length>=5||t.push({actionText:S,link:"/i/flow/login",scribeElement:"add_existing_account",testID:v}),e&&t.push({actionText:A,link:"/account/switch",scribeElement:"manage_accounts",testID:w}),r&&t.push({actionText:F({screenName:r.screen_name}),link:"/logout",scribeElement:"log_out",testID:E}),t}),[r,c.length]),y=n.useCallback((({hasBadge:t,isProtected:l,userId:n})=>{g.scribe({component:l?"switch_to_protected_account":"switch_account",element:t?"account_badged":"account",action:"click"}),m({user_id:n}).catch(e(d.y))}),[g,e,m]),_=n.useCallback((()=>{const{hasMultiAccountCookie:e}=(0,u.s)();return e}),[]),b=n.useCallback((e=>r?n.createElement(f.Z,{accountSwitch:y,accountUsers:c,activeUser:r,additionalMenuItems:h(),createLocalApiErrorHandlerAccountsFetch:t,fetchAccounts:l,fetchStatus:a,onClose:e,shouldDisplayFetchRenderer:_(),withBadges:!0}):null),[t,l,a,h,_,r,y,c]);return n.createElement(o.ZP,{analytics:g,currentUser:r,hasMultiAccountBadges:i,interactiveViewTestId:C,isExpanded:s,renderMenuSheet:b})}));l(6886);var I=l(47636),Z=l(50217);const L=c().g34f2c63({verb:""});class T extends n.Component{constructor(...e){super(...e),this._handlePress=e=>{const{analytics:t}=this.props;t.scribe({component:"new_tweet_button",action:"click"})}}render(){const{composeOptions:e,isExpanded:t,testID:l}=this.props;return n.createElement(Z.Z,{icon:x,isExpanded:t,label:L,link:{pathname:"/compose/tweet",state:e},onPress:this._handlePress,testID:l})}}const x=n.createElement(I.Z,null),B=(0,p.Z)(T);var M=l(52008),D=l(7694);const K="SideNav_NewTweet_Button";class H extends n.Component{render(){const{SideNavButton:e,TabBar:t,TeamsSwitcher:l,history:s,isCollapsedSmall:r,isExpanded:c,isLoggedIn:o,isTwoColumn:d,location:u,logoButton:p,onTabRefresh:m,widthStyle:g,withTweetButton:h}=this.props,y=[R.root,g,r?R.rootPaddingSmall:R.rootPaddingNormal],_=p||n.createElement(D.ZP,{onClick:m,pullLeft:!1,size:"large"});return n.createElement(i.Z,null,(({windowHeight:i})=>n.createElement(a.Z,{style:y},n.createElement(a.Z,{style:[R.topSection,!c&&R.alignItemsCenter]},n.createElement(a.Z,{style:R.topControl},_),n.createElement(a.Z,{style:[R.appTabBar,!c&&R.alignItemsCenter]},n.createElement(t,{history:s,layout:"vertical",location:u,onTabRefresh:m,wideMode:d,withExtendedItems:!0,withLabel:c})),o&&(e||h)?this._renderButton(i):null),o?n.createElement(a.Z,{style:[R.footerContainer,!c&&R.alignItemsCenter]},n.createElement(U,{isExpanded:c}),l?n.createElement(l,{isExpanded:c}):null):null)))}_renderButton(e){const{SideNavButton:t,composeOptions:l,isExpanded:i}=this.props;return n.createElement(a.Z,{style:[R.button,!i&&R.alignItemsCenter,"tall"===M.Z.getHeightMode(e)&&R.withTallHeight]},t?n.createElement(t,{isExpanded:i}):n.createElement(B,{composeOptions:l,isExpanded:i,testID:K}))}}H.defaultProps={withTweetButton:!0};const R=s.Z.create((e=>({root:{height:"100%",overflowY:"auto",justifyContent:"space-between"},rootPaddingNormal:{paddingHorizontal:e.spaces.space12},rootPaddingSmall:{paddingHorizontal:e.spaces.space4},topSection:{alignItems:"flex-start"},topControl:{paddingVertical:e.spaces.space2,maxWidth:"100%"},appTabBar:{marginBottom:e.spaces.space4,marginTop:e.spaces.space2,width:"100%"},button:{marginVertical:e.spaces.space4,width:"90%"},withTallHeight:{marginVertical:e.spaces.space16},alignItemsCenter:{alignItems:"center"},settingsButton:{marginBottom:e.spaces.space20,marginHorizontal:e.spaces.space4},footerContainer:{marginVertical:e.spaces.space12}})))},11816:(e,t,l)=>{l.d(t,{ZP:()=>C});l(6886);var n=l(2784),a=l(13980),i=l(25686),s=l(79866),r=l(73186),c=l(26741),o=l(95995),d=l(3188),u=l(4642),p=l(11839),m=l(79404),g=l.n(m),h=l(84793),y=l(27036);const _=g().d86bbf0f,b=g().h6beb5fb,k=g().b8e1d524,f=g().gef27c4c;class C extends n.Component{constructor(...e){super(...e),this._renderUser=e=>{const{isExpanded:t}=this.props,{is_blue_verified:l,name:a,profile_image_url_https:s,protected:r,screen_name:d,verified:u}=e;return n.createElement(n.Fragment,null,n.createElement(i.Z,null,n.createElement(c.Z,{accessibilityLabel:a,screenName:d,size:"xLarge",uri:s}),t?null:this._renderBadge()),t?n.createElement(n.Fragment,null,n.createElement(o.Z,{badgeContext:"account",isBlueVerified:l,isProtected:r,isVerified:u,name:a,screenName:d,style:v.userName,withStackedLayout:!0}),n.createElement(i.Z,{style:v.iconContainer},n.createElement(h.Z,{style:v.icon}),t?this._renderBadge():null)):null)},this._renderEmptyState=()=>{const{renderEmptyState:e}=this.props;return e?n.createElement(i.Z,{style:v.emptyStateWrapper},e()):null},this._renderBadge=()=>{const{hasMultiAccountBadges:e,isExpanded:t}=this.props;return e?n.createElement(d.Z,{pip:!0,style:t&&v.pip,truncatedCountFormatter:b,unreadCountLabel:_}):null},this._handleAccountSwitcherClick=()=>{const{analytics:e}=this.props;e.scribe({action:"click"})}}render(){const{accessibilityLabel:e,currentUser:t,hoverLabel:l,interactiveViewTestId:a,isExpanded:i,renderEmptyState:c,renderMenuSheet:o}=this.props;return t||c?n.createElement(u.Z,{contentStyle:v.menuContainer,enableEnterKeyToggle:!0,renderContent:o,withArrow:!0,withFixedPosition:!0},n.createElement(p.Z,{accessibilityLabel:e||f,accessibilityRole:"button",hoverLabel:i?void 0:{label:l||k},interactiveStyles:s.Z.generate({backgroundColor:"transparent",color:r.Z.theme.colors.text}),onClick:this._handleAccountSwitcherClick,style:v.anchorContainer,testID:a},t?this._renderUser(t):this._renderEmptyState())):null}}C.contextTypes={featureSwitches:a.object};const v=r.Z.create((e=>({anchorContainer:{alignItems:"center",borderRadius:e.borderRadii.infinite,display:"flex",flexDirection:"row",padding:e.spaces.space12},icon:{color:e.colors.text},iconContainer:{alignItems:"flex-end",flexGrow:1},pip:{position:"absolute",end:`calc(-1 * ${e.spaces.space4})`,top:`calc(-1 * ${e.spaces.space4})`},userName:{flexGrow:1,marginHorizontal:e.spaces.space12},menuContainer:{width:y.Z.cardWidth.normal},emptyStateWrapper:{height:e.spaces.space40,minWidth:e.spaces.space40,width:"100%"}})))},62672:(e,t,l)=>{l.d(t,{Z:()=>J});l(6886);var n,a=l(2784),i=l(25686),s=l(23791),r=l(27519),c=l(36934),o=l(19153),d=l(3188),u=l(68472),p=l(73186),m=l(79404),g=l.n(m),h=l(31735),y=l(7066),_=l(1206),b=l(63140),k=l(20032),f=l(60673),C=(l(36728),l(77953)),v=(l(85488),l(12696)),E=l.n(v),w=l(37800),S=l(35131),A=l(55916),F=l(51600),U=l(67935),I=l(3767);const Z=void 0!==n?n:n=l(73792),L=g().daffabde,T=g().eccbfa26,x=g().a1b7a904,B={context:"DelegateGroups"},M=({activeUserId:e,delegateUserId:t,onCellClick:l})=>a.createElement(F.H,{errorConfig:B},a.createElement(D,{activeUserId:e,delegateUserId:t,onCellClick:l})),D=({activeUserId:e,delegateUserId:t,onCellClick:l})=>{var n;const s=(0,C.I0)(),[r,o]=a.useState(!0),d=E()(Z,{}),[u,p]=a.useState(!1),m=a.useMemo((()=>{var l,n;const a=[];return null==(l=d.viewer)||null==(n=l.list_delegation_groups)||n.forEach((l=>{const{result:n}=l.handle||{};"User"===(null==n?void 0:n.__typename)&&(null==n?void 0:n.rest_id)===e||(null!=n&&n.rest_id&&t===(null==n?void 0:n.rest_id)&&p(!0),a.push(n))})),a}),[e,null==(n=d.viewer)?void 0:n.list_delegation_groups,t]),g=a.useCallback((()=>{o(!r)}),[r]);return a.useEffect((()=>{s(U.po(m.length))}),[m,s]),m.length<1?null:a.createElement(a.Fragment,null,a.createElement(i.Z,{onClick:g,style:K.delegateAccountsLabel},a.createElement(c.ZP,{color:"gray700",weight:"bold"},u?L:T),!u&&(r?a.createElement(S.Z,null):a.createElement(A.Z,{style:K.IconChevronUp}))),r||u?m.map((e=>{if("User"===(null==e?void 0:e.__typename))return a.createElement(I.Z,{accessibilityLabel:x,badgeContext:"account",displayMode:"UserCompact",key:e.rest_id,onCellClick:l,user:e,withLink:!1})})):a.createElement(i.Z,{style:K.facePileContainer},a.createElement(w.Z,{userAvatarSize:"large",userAvatarUrls:m.map((e=>{var t;return(null==e?void 0:e.legacy)&&(null==e||null==(t=e.legacy)?void 0:t.profile_image_url_https)||""}))})))},K=p.Z.create((e=>({IconChevronUp:{color:e.colors.primary},delegateAccountsLabel:{padding:e.spaces.space12,alignItems:"center",flexDirection:"row",justifyContent:"space-between",cursor:"pointer"},facePileContainer:{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingStart:e.spaces.space16,paddingEnd:e.spaces.space16}}))),H=a.memo(M);var R=l(37796);const P=g().c61eea74,N=g().b7dc3885,V=g().d86bbf0f,W=g().h6beb5fb,O=({accountUsers:e,activeUser:t,handleMultiAccountSwitch:l,renderUserDecoration:n,withBadges:s})=>{const{featureSwitches:r}=a.useContext(k.rC),u=(0,R.v)(U.BP)||0,p=r.isTrue("twitter_delegate_enabled"),m=r.isTrue("responsive_web_twitter_blue_verified_badge_is_enabled"),[g,h]=a.useState(!p),y=a.useMemo((()=>e.filter((e=>e.user_id!==(null==t?void 0:t.id_str)))),[e,t]),_=a.useMemo((()=>y.reduce(((e,t)=>e+(t.badgeCount||0)),0)),[y]),b=a.useCallback((()=>{h(!g)}),[g]),f=a.useMemo((()=>p&&u>0?a.createElement(i.Z,{onClick:b,style:z.personalAccountsLabel},a.createElement(c.ZP,{color:"gray700",weight:"bold"},P),g?a.createElement(S.Z,{style:z.IconChevronDown}):a.createElement(A.Z,{style:z.IconChevronUp})):a.createElement(i.Z,null)),[p,u,b,g]),C=a.useMemo((()=>y.map((e=>{const t=e.badgeCount;return a.createElement(o.ZP,{accessibilityLabel:N({screenName:e.screen_name}),avatarUri:e.avatar_image_url,badgeContext:"account",decoration:n({badgeCount:t,withBadges:s,isActiveUser:!1}),displayMode:"UserCompact",isBlueVerified:m&&e.is_blue_verified,isProtected:e.is_protected,isVerified:e.is_verified,key:e.user_id,name:e.name,onCellClick:l({hasBadge:!!t,isProtected:e.is_protected,userId:e.user_id}),screenName:e.screen_name,userId:e.user_id,withLink:!1})}))),[l,m,y,n,s]),v=a.useMemo((()=>a.createElement(i.Z,{style:z.facePileContainer},a.createElement(w.Z,{userAvatarSize:"large",userAvatarUrls:y.map((e=>e.avatar_image_url))}),_>0?a.createElement(d.Z,{count:_,standalone:!0,truncatedCountFormatter:W,unreadCountLabel:V}):null)),[y,_]);return y.length>0?a.createElement(i.Z,{style:z.container},f,!p||p&&g||0===u?C:v):null},z=p.Z.create((e=>({container:{paddingBottom:e.spaces.space12},personalAccountsLabel:{padding:e.spaces.space12,alignItems:"center",flexDirection:"row",justifyContent:"space-between",cursor:"pointer"},IconChevronUp:{color:e.colors.primary},IconChevronDown:{color:e.colors.gray700},facePileContainer:{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingStart:e.spaces.space16,paddingEnd:e.spaces.space16}}))),q=a.memo(O),j=g().d86bbf0f,G=g().h6beb5fb;class Q extends a.Component{constructor(...e){super(...e),this._renderAdditionalMenuItems=()=>(this.props.additionalMenuItems||[]).map(((e,t)=>a.createElement(a.Fragment,{key:t},0===t?a.createElement(s.Z,null):null,a.createElement(r.Z,{Icon:e.Icon,actionText:e.actionText,isSelected:e.isSelected,link:e.link,onClick:this._handleMenuItemClick(e.scribeElement,e.onClick),selectable:!0,testID:e.testID})))),this._renderTitle=()=>{const{title:e}=this.props;return e?a.createElement(c.ZP,{size:"headline1",style:$.title,weight:"bold"},e):null},this._renderUserAccounts=()=>{const{accountUsers:e,activeUser:t,withBadges:l=!1}=this.props;return a.createElement(a.Fragment,null,e.some((e=>e.user_id===t.id_str))?a.createElement(o.ZP,{avatarUri:t.profile_image_url_https,badgeContext:"account",decoration:this._renderUserDecoration({withBadges:l,isActiveUser:!0}),displayMode:"UserCompact",isBlueVerified:this._isBlueVerifiedBadgeEnabled&&t.is_blue_verified,isProtected:t.protected,isVerified:t.verified,name:t.name,screenName:t.screen_name,userId:t.id_str,withLink:!1}):null,this._isDelegateEnabled?a.createElement(a.Fragment,null,a.createElement(H,{activeUserId:this.context.loggedInUserId,onCellClick:this.onDelegateAccountCellClick})):null,a.createElement(q,{accountUsers:e,activeUser:t,handleMultiAccountSwitch:this._handleMultiAccountSwitch,renderUserDecoration:this._renderUserDecoration,withBadges:l}))},this._renderUserDecoration=({badgeCount:e,isActiveUser:t,withBadges:l})=>t?this._isDelegateEnabled?a.createElement(h.Z,{style:[$.IconCheckmarkCircleFill,$.userDecoration]}):a.createElement(y.Z,{style:[$.iconCheckMark,$.userDecoration]}):e&&l?a.createElement(d.Z,{count:e,standalone:!0,style:$.userDecoration,truncatedCountFormatter:G,unreadCountLabel:j}):void 0,this._handleMultiAccountSwitch=({hasBadge:e,isProtected:t,userId:l})=>()=>{const{accountSwitch:n,onClose:a}=this.props;n({hasBadge:e,isProtected:t,userId:l}),a()},this._handleFetch=()=>{const{createLocalApiErrorHandlerAccountsFetch:e,fetchAccounts:t}=this.props;t().catch(e({[b.ZP.AppInReadOnlyMode]:{customAction:_.Z}}))},this._handleMenuItemClick=(e,t)=>()=>{const{analytics:l,onClose:n}=this.props;e&&l.scribe({element:e,action:"click"}),null==t||t(),n()}}render(){var e,t,l,n;const{fetchStatus:s,shouldDisplayFetchRenderer:r}=this.props;return this._isDelegateEnabled=null==(e=this.context)||null==(t=e.featureSwitches)?void 0:t.isTrue("twitter_delegate_enabled"),this._isBlueVerifiedBadgeEnabled=null==(l=this.context)||null==(n=l.featureSwitches)?void 0:n.isTrue("responsive_web_twitter_blue_verified_badge_is_enabled"),a.createElement(i.Z,{style:$.menuContainer},this._renderTitle(),r?a.createElement(u.Z,{fetchStatus:s,onRequestRetry:this._handleFetch,render:this._renderUserAccounts}):this._renderUserAccounts(),this._renderAdditionalMenuItems())}}Q.contextType=k.rC;const $=p.Z.create((e=>({iconCheckMark:{color:e.colors.primary,flexShrink:0},IconCheckmarkCircleFill:{color:e.colors.green500,flexShrink:0},menuContainer:{paddingVertical:e.spaces.space12},userDecoration:{marginStart:e.spaces.space12},title:{paddingBottom:e.componentDimensions.gutterVertical,paddingHorizontal:e.componentDimensions.gutterHorizontal}}))),J=(0,f.Z)(Q)},27323:(e,t,l)=>{l.d(t,{B:()=>i});var n=l(2784),a=l(13364);function i(e){var t;const{accessibilityLabel:l,children:i,loadingMessage:s}=e,r=null!=(t=e.fallback)?t:n.createElement(a.J,{accessibilityLabel:l,loadingMessage:s});return n.createElement(n.Suspense,{fallback:r},i)}},51600:(e,t,l)=>{l.d(t,{H:()=>s});var n=l(2784),a=l(92397),i=l(27323);function s(e){const{children:t,errorConfig:l,suspenseFallback:s}=e;return n.createElement(a.N,{errorConfig:l},n.createElement(i.B,{fallback:s},t))}},95514:(e,t,l)=>{l.d(t,{y:()=>c});var n=l(79404),a=l.n(n),i=l(63140),s=l(90437);const r=a().b20a3894,c={[i.ZP.AppInReadOnlyMode]:{customAction:s.w1},[i.ZP.TargetUserNotFound]:{toast:{text:r}},showToast:!0}},99945:(e,t,l)=>{l.d(t,{y:()=>r});var n=l(53392),a=l(12171),i=l(84673);const s={REQUEST:"rweb/multiAccount/SWITCH_REQUEST",SUCCESS:"rweb/multiAccount/SWITCH_SUCCESS",FAILURE:"rweb/multiAccount/SWITCH_FAILURE"},r=e=>(t,l,{api:r})=>{const c=(0,n._O)(t,{request:r.Auth.switch,params:e});return t((0,a.MH)()).then((()=>t((0,i.nB)()).then((()=>c({actionTypes:s,context:"SWITCH"}).then((()=>{window.location.assign("/home")}))))))}},3767:(e,t,l)=>{l.d(t,{Z:()=>u});var n,a=l(7896),i=l(2784),s=(l(85488),l(77660)),r=l.n(s),c=l(19153);const o=void 0!==n?n:n=l(20871),d=({user:e,...t})=>{var l,n,s,d;const u=r()(o,e),{is_blue_verified:p,legacy:m}=u;return i.createElement(c.ZP,(0,a.Z)({},t,{avatarUri:null!=(l=null==m?void 0:m.profile_image_url_https)?l:"",isBlueVerified:p||!1,isFollowedBy:null==m?void 0:m.followed_by,isProtected:null==m?void 0:m.protected,isVerified:null==m?void 0:m.verified,name:null!=(n=null==m?void 0:m.name)?n:"",screenName:null!=(s=null==m?void 0:m.screen_name)?s:"",userId:null!=(d=null==m?void 0:m.id_str)?d:""}))},u=i.memo(d)},35131:(e,t,l)=>{l.d(t,{Z:()=>r});var n=l(2784),a=l(90601),i=l(73569);const s=(e={})=>(0,a.Z)("svg",{...e,accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[i.Z.root,e.style],viewBox:"0 0 24 24",children:n.createElement("g",null,n.createElement("path",{d:"M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"}))});s.metadata={width:24,height:24};const r=s},55916:(e,t,l)=>{l.d(t,{Z:()=>r});var n=l(2784),a=l(90601),i=l(73569);const s=(e={})=>(0,a.Z)("svg",{...e,accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[i.Z.root,e.style],viewBox:"0 0 24 24",children:n.createElement("g",null,n.createElement("path",{d:"M12 6.59l8.457 8.45-1.414 1.42L12 9.41l-7.043 7.05-1.414-1.42L12 6.59z"}))});s.metadata={width:24,height:24};const r=s},47636:(e,t,l)=>{l.d(t,{Z:()=>r});var n=l(2784),a=l(90601),i=l(73569);const s=(e={})=>(0,a.Z)("svg",{...e,accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[i.Z.root,e.style],viewBox:"0 0 24 24",children:n.createElement("g",null,n.createElement("path",{d:"M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"}))});s.metadata={width:24,height:24};const r=s}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.SideNav.1a8924d9.js.map