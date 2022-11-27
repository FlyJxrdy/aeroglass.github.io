"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["loaders.video.VideoPlayerDefaultUI"],{31177:(e,t,r)=>{r.d(t,{Z:()=>c});r(6886);var l=r(2784),a=r(25686),n=r(79404),i=r.n(n),s=r(29496),o=r(73186);const p=i().f2d4e6f2;class c extends l.PureComponent{constructor(...e){super(...e),this._createWatchAgainHandler=e=>t=>{const{onScribeEvent:r,playerApi:l}=this.props;t.stopPropagation(),r&&r({namespace:{element:e,action:"click"}}),l&&l.replay()},this._handleOnPress=this._createWatchAgainHandler("watch_again_button"),this._handleOnClick=this._createWatchAgainHandler("watch_again_overlay")}render(){const{playerState:e}=this.props;return e&&e.tracksFinished?l.createElement(a.Z,{onClick:this._handleOnClick,style:u.overlay},l.createElement(s.ZP,{accessibilityLabel:p,onPress:this._handleOnPress,type:"onMediaDominantColorFilled"},p)):null}}const u=o.Z.create((e=>({overlay:{...o.Z.absoluteFillObject,backgroundColor:o.Z.theme.colors.translucentBlack30,alignItems:"center",justifyContent:"center"}})))},61267:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});r(6886);var l=r(2784),a=r(25686),n=r(6869),i=r(34577),s=r(38250),o=r(95606),p=r(3381),c=r(66023),u=r(19229),d=r(73346),y=r(28904),h=r(6019),m=r(17119),E=r(2790),S=r(63276),v=r(34516),b=r(22509),g=r(43174),A=r(78388),Z=r(31177),_=r(23739);class k extends l.PureComponent{constructor(...e){super(...e),this.state={wasPrerollSkipped:!1},this._renderVideoPlayer=e=>{var t;const{playerApi:r,playerState:a,poster:n,useKeyboardShortcuts:p}=this.props;if(!r||!a)return null;const c=(0,y.Ci)(a),u=(null==c?void 0:c.displayType)===h.ak.AD&&(null==c?void 0:c.playbackCompleted),m=null==(t=a.errorInfo)?void 0:t.adFailed,E=(null==c?void 0:c.displayType)===h.ak.AD&&(null==c?void 0:c.useRedesignedPrerollUx);return E&&(this.state.wasPrerollSkipped||u||m)?l.createElement(s.o,null,(({aspectRatio:e})=>{const t=n||a.posterImage;return l.createElement(i.ZP,{aspectRatio:e,imageSrc:t,onTransitionComplete:this._handleTransitionAnimationComplete})})):E?this._renderVideo(e,!0):l.createElement(d.Z,{enabled:!!p,playerApi:r,playerState:a},l.createElement(o.Z,{playerState:a},this._renderVideo(e,!1)))},this._renderVideo=(e,t)=>{var r,i;const{accessibilityLabel:s,containerRef:o,customControlBarIcon:c,fullscreenAdsDisabledOnIOS:d,guestsState:k,includeDisputeLinkInCopyrightErrorMessage:C,onScribeEvent:f,playerApi:w,playerDisplayOptions:P,playerState:I,poster:D,shouldShowAltLabel:O,showWatchAgain:T}=this.props;if(!w||!I)return null;const{Observer:F,observed:L}=e,R=(0,_.JN)(I,L,_.i2),B=!!I.error,V=(0,y.Ci)(I),U=(null==V?void 0:V.contentType)===h.wF.GIF,x="PLAY_REQUESTED"!==(null==(r=I.controls)?void 0:r.playState),G=T&&I.tracksFinished,K=R&&I.isPreview,H=!(!R||null==V||!V.isLive),W=O?s:void 0,M=!(null!=P&&P.hideLeftBadges)&&(!!W||U||K||H),N=!(null!=P&&P.hideRightBadges)&&R,j=K||!R,Y=!(null!=P&&P.hidePosterImage),J=null==(i=I.controls)?void 0:i.isPosterShown;return l.createElement(F,{click:!0,interactionKey:_.IG.Root,mousemove:!0,mouseover:!0},B?null:l.createElement(l.Fragment,null,l.createElement(b.Z,{hideControls:R,isTouchOnlyUI:_.i2,playerApi:w,playerDisplayOptions:P,playerState:I}),Y&&!G&&l.createElement(g.Z,{imageSrc:D,playerApi:w,playerState:I,withPlayButton:x}),l.createElement(E.Z,{playerState:I}),t?l.createElement(A.Z,{containerRef:o,onSkip:this._handleSkip,playerApi:w,playerState:I}):l.createElement(l.Fragment,null,!U&&T&&l.createElement(Z.Z,{onScribeEvent:f,playerApi:w,playerState:I}),l.createElement(v.Z,{guestsState:k,playerState:I}),!U&&l.createElement(F,{focus:!0,interactionKey:_.IG.VideoCTA,mouseover:!0},l.createElement(n.Z,{show:!R},l.createElement(u.Z,{playerApi:w,playerState:I}))),!U&&!J&&l.createElement(l.Fragment,null,l.createElement(F,{focus:!0,interactionKey:_.IG.A11YHook},l.createElement(a.Z,{focusable:!0})),l.createElement(F,{focus:!0,interactionKey:_.IG.ControlBar,mouseover:!0,touch:!0},l.createElement(p.Z,{containerRef:o,customControlBarIcon:c,fullscreenAdsDisabledOnIOS:d,hideControls:R,playerApi:w,playerState:I,publisherDisplayName:null==V?void 0:V.publisherDisplayName,publisherProfileImageUrl:null==V?void 0:V.publisherProfileImageUrl,showScrubber:"ad"!==(null==V?void 0:V.displayType)&&!(null!=V&&V.isLive)}))),l.createElement(n.Z,{show:M},l.createElement(m.Z,{mediaAccessibilityLabel:W,playerDisplayOptions:P,playerState:I,position:"left"})),l.createElement(n.Z,{show:N},l.createElement(m.Z,{playerDisplayOptions:P,playerState:I,position:"right"})),l.createElement(n.Z,{show:j},l.createElement(m.Z,{playerDisplayOptions:P,playerState:I,position:"topRight"})))),l.createElement(n.Z,{show:B},B&&l.createElement(S.Z,{imageSrc:D,includeDisputeLinkInCopyrightErrorMessage:C,playerApi:w,playerState:I})))},this._handleSkip=()=>{const{playerApi:e}=this.props;e&&e.pause(),this.setState({wasPrerollSkipped:!0})},this._handleTransitionAnimationComplete=()=>{const{playerApi:e}=this.props;e&&e.nextTrack()}}render(){const{playerApi:e,playerState:t}=this.props;return e&&t?l.createElement(c.Z,null,l.createElement(c.Z.Context.Consumer,null,this._renderVideoPlayer)):null}}const C=k}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.VideoPlayerDefaultUI.34728ae9.js.map