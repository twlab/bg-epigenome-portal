import{l as m,ac as D,K as re,f as T,ad as ht,b as S,ae as he,J as O,af as G,r as dt,y as C,E as B,Y as V,ag as ct,ah as de,w as Ce,ai as pt,aj as P,q as Y,u as k,a as R,R as ft,x as ce,V as X,ak as gt,T as A,m as U,X as Se,al as ie,am as j,B as F,N as se,v as mt,H as Pe,an as xt,G as ne,d as Fe,c as _t,_ as yt,C as Re,j as Ue,k as vt,z as bt,A as Be,n as Tt,ao as wt,o as ae,a8 as Me,h as ze,P as ee,ap as E}from"./index-DQQERGSw.js";import{v as L,P as H,_ as Ae,h as Ct,T as St,F as Pt}from"./colorToUniform-DQmiMhES-COwxHuAu-Datn6Jmg.js";class Ge{static init(e){Object.defineProperty(this,"resizeTo",{configurable:!0,set(t){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=t,t&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let t,r;if(this._resizeTo===globalThis.window)t=globalThis.innerWidth,r=globalThis.innerHeight;else{const{clientWidth:i,clientHeight:s}=this._resizeTo;t=i,r=s}this.renderer.resize(t,r),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}}Ge.extension=m.Application;class ke{static init(e){e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,"ticker",{configurable:!0,set(t){this._ticker&&this._ticker.remove(this.render,this),this._ticker=t,t&&t.add(this.render,this,ft.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?ce.shared:new ce,e.autoStart&&this.start()}static destroy(){if(this._ticker){const e=this._ticker;this.ticker=null,e.destroy()}}}ke.extension=m.Application;class Ft extends mt{constructor(){super(...arguments),this.chars=Object.create(null),this.lineHeight=0,this.fontFamily="",this.fontMetrics={fontSize:0,ascent:0,descent:0},this.baseLineOffset=0,this.distanceField={type:"none",range:0},this.pages=[],this.applyFillAsTint=!0,this.baseMeasurementFontSize=100,this.baseRenderedFontSize=100}get font(){return C(B,"BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."),this.fontFamily}get pageTextures(){return C(B,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}get size(){return C(B,"BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."),this.fontMetrics.fontSize}get distanceFieldRange(){return C(B,"BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."),this.distanceField.range}get distanceFieldType(){return C(B,"BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."),this.distanceField.type}destroy(e=!1){var t;this.emit("destroy",this),this.removeAllListeners();for(const r in this.chars)(t=this.chars[r].texture)==null||t.destroy();this.chars=null,e&&(this.pages.forEach(r=>r.texture.destroy(!0)),this.pages=null)}}const De=class Oe extends Ft{constructor(e){super(),this.resolution=1,this.pages=[],this._padding=0,this._measureCache=Object.create(null),this._currentChars=[],this._currentX=0,this._currentY=0,this._currentMaxCharHeight=0,this._currentPageIndex=-1,this._skipKerning=!1;const t={...Oe.defaultOptions,...e};this._textureSize=t.textureSize,this._mipmap=t.mipmap;const r=t.style.clone();t.overrideFill&&(r._fill.color=16777215,r._fill.alpha=1,r._fill.texture=S.WHITE,r._fill.fill=null),this.applyFillAsTint=t.overrideFill;const i=r.fontSize;r.fontSize=this.baseMeasurementFontSize;const s=he(r);t.overrideSize?r._stroke&&(r._stroke.width*=this.baseRenderedFontSize/i):r.fontSize=this.baseRenderedFontSize=i,this._style=r,this._skipKerning=t.skipKerning??!1,this.resolution=t.resolution??1,this._padding=t.padding??4,t.textureStyle&&(this._textureStyle=t.textureStyle instanceof O?t.textureStyle:new O(t.textureStyle)),this.fontMetrics=G.measureFont(s),this.lineHeight=r.lineHeight||this.fontMetrics.fontSize||r.fontSize}ensureCharacters(e){var t,r;const i=G.graphemeSegmenter(e).filter(g=>!this._currentChars.includes(g)).filter((g,f,b)=>b.indexOf(g)===f);if(!i.length)return;this._currentChars=[...this._currentChars,...i];let s;this._currentPageIndex===-1?s=this._nextPage():s=this.pages[this._currentPageIndex];let{canvas:n,context:a}=s.canvasAndContext,u=s.texture.source;const h=this._style;let d=this._currentX,l=this._currentY,c=this._currentMaxCharHeight;const p=this.baseRenderedFontSize/this.baseMeasurementFontSize,y=this._padding*p;let x=!1;const v=n.width/this.resolution,_=n.height/this.resolution;for(let g=0;g<i.length;g++){const f=i[g],b=G.measureText(f,h,n,!1);b.lineHeight=b.height;const w=b.width*p,M=Math.ceil((h.fontStyle==="italic"?2:1)*w),ot=b.height*p,K=M+y*2,$=ot+y*2;if(x=!1,f!==`
`&&f!=="\r"&&f!=="	"&&f!==" "&&(x=!0,c=Math.ceil(Math.max($,c))),d+K>v&&(l+=c,c=$,d=0,l+c>_)){u.update();const z=this._nextPage();n=z.canvasAndContext.canvas,a=z.canvasAndContext.context,u=z.texture.source,d=0,l=0,c=0}const ut=w/p-(((t=h.dropShadow)==null?void 0:t.distance)??0)-(((r=h._stroke)==null?void 0:r.width)??0);if(this.chars[f]={id:f.codePointAt(0),xOffset:-this._padding,yOffset:-this._padding,xAdvance:ut,kerning:{}},x){this._drawGlyph(a,b,d+y,l+y,p,h);const z=u.width*p,le=u.height*p,lt=new dt(d/z*u.width,l/le*u.height,K/z*u.width,$/le*u.height);this.chars[f].texture=new S({source:u,frame:lt}),d+=Math.ceil(K)}}u.update(),this._currentX=d,this._currentY=l,this._currentMaxCharHeight=c,this._skipKerning&&this._applyKerning(i,a)}get pageTextures(){return C(B,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}_applyKerning(e,t){const r=this._measureCache;for(let i=0;i<e.length;i++){const s=e[i];for(let n=0;n<this._currentChars.length;n++){const a=this._currentChars[n];let u=r[s];u||(u=r[s]=t.measureText(s).width);let h=r[a];h||(h=r[a]=t.measureText(a).width);let d=t.measureText(s+a).width,l=d-(u+h);l&&(this.chars[s].kerning[a]=l),d=t.measureText(s+a).width,l=d-(u+h),l&&(this.chars[a].kerning[s]=l)}}}_nextPage(){this._currentPageIndex++;const e=this.resolution,t=V.getOptimalCanvasAndContext(this._textureSize,this._textureSize,e);this._setupContext(t.context,this._style,e);const r=e*(this.baseRenderedFontSize/this.baseMeasurementFontSize),i=new S({source:new ct({resource:t.canvas,resolution:r,alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:this._mipmap})});this._textureStyle&&(i.source.style=this._textureStyle);const s={canvasAndContext:t,texture:i};return this.pages[this._currentPageIndex]=s,s}_setupContext(e,t,r){t.fontSize=this.baseRenderedFontSize,e.scale(r,r),e.font=he(t),t.fontSize=this.baseMeasurementFontSize,e.textBaseline=t.textBaseline;const i=t._stroke,s=(i==null?void 0:i.width)??0;if(i&&(e.lineWidth=s,e.lineJoin=i.join,e.miterLimit=i.miterLimit,e.strokeStyle=de(i,e)),t._fill&&(e.fillStyle=de(t._fill,e)),t.dropShadow){const n=t.dropShadow,a=Ce.shared.setValue(n.color).toArray(),u=n.blur*r,h=n.distance*r;e.shadowColor=`rgba(${a[0]*255},${a[1]*255},${a[2]*255},${n.alpha})`,e.shadowBlur=u,e.shadowOffsetX=Math.cos(n.angle)*h,e.shadowOffsetY=Math.sin(n.angle)*h}else e.shadowColor="black",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0}_drawGlyph(e,t,r,i,s,n){const a=t.text,u=t.fontProperties,h=n._stroke,d=((h==null?void 0:h.width)??0)*s,l=r+d/2,c=i-d/2,p=u.descent*s,y=t.lineHeight*s;let x=!1;n.stroke&&d&&(x=!0,e.strokeText(a,l,c+y-p));const{shadowBlur:v,shadowOffsetX:_,shadowOffsetY:g}=e;n._fill&&(x&&(e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0),e.fillText(a,l,c+y-p)),x&&(e.shadowBlur=v,e.shadowOffsetX=_,e.shadowOffsetY=g)}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{canvasAndContext:t,texture:r}=this.pages[e];V.returnCanvasAndContext(t),r.destroy(!0)}this.pages=null}};De.defaultOptions={textureSize:512,style:new D,mipmap:!0};let pe=De;function Ee(o,e,t,r){const i={width:0,height:0,offsetY:0,scale:e.fontSize/t.baseMeasurementFontSize,lines:[{width:0,charPositions:[],spaceWidth:0,spacesIndex:[],chars:[]}]};i.offsetY=t.baseLineOffset;let s=i.lines[0],n=null,a=!0;const u={width:0,start:0,index:0,positions:[],chars:[]},h=t.baseMeasurementFontSize/e.fontSize,d=e.letterSpacing*h,l=e.wordWrapWidth*h,c=e.lineHeight?e.lineHeight*h:t.lineHeight,p=e.wordWrap&&e.breakWords,y=_=>{const g=s.width;for(let f=0;f<u.index;f++){const b=_.positions[f];s.chars.push(_.chars[f]),s.charPositions.push(b+g)}s.width+=_.width,a=!1,u.width=0,u.index=0,u.chars.length=0},x=()=>{let _=s.chars.length-1;if(r){let g=s.chars[_];for(;g===" ";)s.width-=t.chars[g].xAdvance,g=s.chars[--_]}i.width=Math.max(i.width,s.width),s={width:0,charPositions:[],chars:[],spaceWidth:0,spacesIndex:[]},a=!0,i.lines.push(s),i.height+=c},v=_=>_-d>l;for(let _=0;_<o.length+1;_++){let g;const f=_===o.length;f||(g=o[_]);const b=t.chars[g]||t.chars[" "];if(/(?:\s)/.test(g)||g==="\r"||g===`
`||f){if(!a&&e.wordWrap&&v(s.width+u.width)?(x(),y(u),f||s.charPositions.push(0)):(u.start=s.width,y(u),f||s.charPositions.push(0)),g==="\r"||g===`
`)x();else if(!f){const w=b.xAdvance+(b.kerning[n]||0)+d;s.width+=w,s.spaceWidth=w,s.spacesIndex.push(s.charPositions.length),s.chars.push(g)}}else{const w=b.kerning[n]||0,M=b.xAdvance+w+d;p&&v(s.width+u.width+M)&&(y(u),x()),u.positions[u.index++]=u.width+w,u.chars.push(g),u.width+=M}n=g}return x(),e.align==="center"?Rt(i):e.align==="right"?Ut(i):e.align==="justify"&&Bt(i),i}function Rt(o){for(let e=0;e<o.lines.length;e++){const t=o.lines[e],r=o.width/2-t.width/2;for(let i=0;i<t.charPositions.length;i++)t.charPositions[i]+=r}}function Ut(o){for(let e=0;e<o.lines.length;e++){const t=o.lines[e],r=o.width-t.width;for(let i=0;i<t.charPositions.length;i++)t.charPositions[i]+=r}}function Bt(o){const e=o.width;for(let t=0;t<o.lines.length;t++){const r=o.lines[t];let i=0,s=r.spacesIndex[i++],n=0;const a=r.spacesIndex.length,u=(e-r.width)/a;for(let h=0;h<r.charPositions.length;h++)h===s&&(s=r.spacesIndex[i++],n+=u),r.charPositions[h]+=n}}function Mt(o){if(o==="")return[];typeof o=="string"&&(o=[o]);const e=[];for(let t=0,r=o.length;t<r;t++){const i=o[t];if(Array.isArray(i)){if(i.length!==2)throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${i.length}.`);if(i[0].length===0||i[1].length===0)throw new Error("[BitmapFont]: Invalid character delimiter.");const s=i[0].charCodeAt(0),n=i[1].charCodeAt(0);if(n<s)throw new Error("[BitmapFont]: Invalid character range.");for(let a=s,u=n;a<=u;a++)e.push(String.fromCharCode(a))}else e.push(...Array.from(i))}if(e.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return e}let I=0;class zt{constructor(){this.ALPHA=[["a","z"],["A","Z"]," "],this.NUMERIC=[["0","9"]],this.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],this.ASCII=[[" ","~"]],this.defaultOptions={chars:this.ALPHANUMERIC,resolution:1,padding:4,skipKerning:!1,textureStyle:null},this.measureCache=pt(1e3)}getFont(e,t){var r;let i=`${t.fontFamily}-bitmap`,s=!0;if(t._fill.fill&&!t._stroke?(i+=t._fill.fill.styleKey,s=!1):(t._stroke||t.dropShadow)&&(i=`${t.styleKey}-bitmap`,s=!1),!P.has(i)){const a=Object.create(t);a.lineHeight=0;const u=new pe({style:a,overrideFill:s,overrideSize:!0,...this.defaultOptions});I++,I>50&&Y("BitmapText",`You have dynamically created ${I} bitmap fonts, this can be inefficient. Try pre installing your font styles using \`BitmapFont.install({name:"style1", style})\``),u.once("destroy",()=>{I--,P.remove(i)}),P.set(i,u)}const n=P.get(i);return(r=n.ensureCharacters)==null||r.call(n,e),n}getLayout(e,t,r=!0){const i=this.getFont(e,t),s=`${e}-${t.styleKey}-${r}`;if(this.measureCache.has(s))return this.measureCache.get(s);const n=G.graphemeSegmenter(e),a=Ee(n,t,i,r);return this.measureCache.set(s,a),a}measureText(e,t,r=!0){return this.getLayout(e,t,r)}install(...e){var t,r,i,s;let n=e[0];typeof n=="string"&&(n={name:n,style:e[1],chars:(t=e[2])==null?void 0:t.chars,resolution:(r=e[2])==null?void 0:r.resolution,padding:(i=e[2])==null?void 0:i.padding,skipKerning:(s=e[2])==null?void 0:s.skipKerning},C(B,"BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})"));const a=n==null?void 0:n.name;if(!a)throw new Error("[BitmapFontManager] Property `name` is required.");n={...this.defaultOptions,...n};const u=n.style,h=u instanceof D?u:new D(u),d=n.dynamicFill??this._canUseTintForStyle(h),l=new pe({style:h,overrideFill:d,skipKerning:n.skipKerning,padding:n.padding,resolution:n.resolution,overrideSize:!1,textureStyle:n.textureStyle}),c=Mt(n.chars);return l.ensureCharacters(c.join("")),P.set(`${a}-bitmap`,l),l.once("destroy",()=>P.remove(`${a}-bitmap`)),l}uninstall(e){const t=`${e}-bitmap`,r=P.get(t);r&&r.destroy()}_canUseTintForStyle(e){return!e._stroke&&(!e.dropShadow||e.dropShadow.color===0)&&!e._fill.fill&&e._fill.color===16777215}}const At=new zt;var Gt=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,kt=`in vec2 vTextureCoord;
out vec4 finalColor;
uniform sampler2D uTexture;
void main() {
    finalColor = texture(uTexture, vTextureCoord);
}
`,fe=`struct GlobalFilterUniforms {
  uInputSize: vec4<f32>,
  uInputPixel: vec4<f32>,
  uInputClamp: vec4<f32>,
  uOutputFrame: vec4<f32>,
  uGlobalFrame: vec4<f32>,
  uOutputTexture: vec4<f32>,
};

@group(0) @binding(0) var <uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler: sampler;

struct VSOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv: vec2<f32>
};

fn filterVertexPosition(aPosition: vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0 * gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord(aPosition: vec2<f32>) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

@vertex
fn mainVertex(
  @location(0) aPosition: vec2<f32>,
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {
    return textureSample(uTexture, uSampler, uv);
}
`;class Dt extends Pt{constructor(){const e=Me.from({vertex:{source:fe,entryPoint:"mainVertex"},fragment:{source:fe,entryPoint:"mainFragment"},name:"passthrough-filter"}),t=ze.from({vertex:Gt,fragment:kt,name:"passthrough-filter"});super({gpuProgram:e,glProgram:t})}}class Ie{constructor(e){this._renderer=e}push(e,t,r){this._renderer.renderPipes.batch.break(r),r.add({renderPipeId:"filter",canBundle:!1,action:"pushFilter",container:t,filterEffect:e})}pop(e,t,r){this._renderer.renderPipes.batch.break(r),r.add({renderPipeId:"filter",action:"popFilter",canBundle:!1})}execute(e){e.action==="pushFilter"?this._renderer.filter.push(e):e.action==="popFilter"&&this._renderer.filter.pop()}destroy(){this._renderer=null}}Ie.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"filter"};const ge=new U;function Ot(o,e){e.clear();const t=e.matrix;for(let r=0;r<o.length;r++){const i=o[r];if(i.globalDisplayStatus<7)continue;const s=i.renderGroup??i.parentRenderGroup;s!=null&&s.isCachedAsTexture?e.matrix=ge.copyFrom(s.textureOffsetInverseTransform).append(i.worldTransform):s!=null&&s._parentCacheAsTextureRenderGroup?e.matrix=ge.copyFrom(s._parentCacheAsTextureRenderGroup.inverseWorldTransform).append(i.groupTransform):e.matrix=i.worldTransform,e.addBounds(i.bounds)}return e.matrix=t,e}const Et=new re({attributes:{aPosition:{buffer:new Float32Array([0,0,1,0,1,1,0,1]),format:"float32x2",stride:2*4,offset:0}},indexBuffer:new Uint32Array([0,1,2,0,2,3])});class It{constructor(){this.skip=!1,this.inputTexture=null,this.backTexture=null,this.filters=null,this.bounds=new Pe,this.container=null,this.blendRequired=!1,this.outputRenderSurface=null,this.globalFrame={x:0,y:0,width:0,height:0},this.firstEnabledIndex=-1,this.lastEnabledIndex=-1}}class We{constructor(e){this._filterStackIndex=0,this._filterStack=[],this._filterGlobalUniforms=new A({uInputSize:{value:new Float32Array(4),type:"vec4<f32>"},uInputPixel:{value:new Float32Array(4),type:"vec4<f32>"},uInputClamp:{value:new Float32Array(4),type:"vec4<f32>"},uOutputFrame:{value:new Float32Array(4),type:"vec4<f32>"},uGlobalFrame:{value:new Float32Array(4),type:"vec4<f32>"},uOutputTexture:{value:new Float32Array(4),type:"vec4<f32>"}}),this._globalFilterBindGroup=new Se({}),this.renderer=e}get activeBackTexture(){var e;return(e=this._activeFilterData)==null?void 0:e.backTexture}push(e){const t=this.renderer,r=e.filterEffect.filters,i=this._pushFilterData();i.skip=!1,i.filters=r,i.container=e.container,i.outputRenderSurface=t.renderTarget.renderSurface;const s=t.renderTarget.renderTarget.colorTexture.source,n=s.resolution,a=s.antialias;if(r.every(p=>!p.enabled)){i.skip=!0;return}const u=i.bounds;if(this._calculateFilterArea(e,u),this._calculateFilterBounds(i,t.renderTarget.rootViewPort,a,n,1),i.skip)return;const h=this._getPreviousFilterData(),d=this._findFilterResolution(n);let l=0,c=0;h&&(l=h.bounds.minX,c=h.bounds.minY),this._calculateGlobalFrame(i,l,c,d,s.width,s.height),this._setupFilterTextures(i,u,t,h)}generateFilteredTexture({texture:e,filters:t}){const r=this._pushFilterData();this._activeFilterData=r,r.skip=!1,r.filters=t;const i=e.source,s=i.resolution,n=i.antialias;if(t.every(d=>!d.enabled))return r.skip=!0,e;const a=r.bounds;if(a.addRect(e.frame),this._calculateFilterBounds(r,a.rectangle,n,s,0),r.skip)return e;const u=s;this._calculateGlobalFrame(r,0,0,u,i.width,i.height),r.outputRenderSurface=F.getOptimalTexture(a.width,a.height,r.resolution,r.antialias),r.backTexture=S.EMPTY,r.inputTexture=e,this.renderer.renderTarget.finishRenderPass(),this._applyFiltersToTexture(r,!0);const h=r.outputRenderSurface;return h.source.alphaMode="premultiplied-alpha",h}pop(){const e=this.renderer,t=this._popFilterData();t.skip||(e.globalUniforms.pop(),e.renderTarget.finishRenderPass(),this._activeFilterData=t,this._applyFiltersToTexture(t,!1),t.blendRequired&&F.returnTexture(t.backTexture),F.returnTexture(t.inputTexture))}getBackTexture(e,t,r){const i=e.colorTexture.source._resolution,s=F.getOptimalTexture(t.width,t.height,i,!1);let n=t.minX,a=t.minY;r&&(n-=r.minX,a-=r.minY),n=Math.floor(n*i),a=Math.floor(a*i);const u=Math.ceil(t.width*i),h=Math.ceil(t.height*i);return this.renderer.renderTarget.copyToTexture(e,s,{x:n,y:a},{width:u,height:h},{x:0,y:0}),s}applyFilter(e,t,r,i){const s=this.renderer,n=this._activeFilterData,a=n.outputRenderSurface===r,u=s.renderTarget.rootRenderTarget.colorTexture.source._resolution,h=this._findFilterResolution(u);let d=0,l=0;if(a){const p=this._findPreviousFilterOffset();d=p.x,l=p.y}this._updateFilterUniforms(t,r,n,d,l,h,a,i);const c=e.enabled?e:this._getPassthroughFilter();this._setupBindGroupsAndRender(c,t,s)}calculateSpriteMatrix(e,t){const r=this._activeFilterData,i=e.set(r.inputTexture._source.width,0,0,r.inputTexture._source.height,r.bounds.minX,r.bounds.minY),s=t.worldTransform.copyTo(U.shared),n=t.renderGroup||t.parentRenderGroup;return n&&n.cacheToLocalTransform&&s.prepend(n.cacheToLocalTransform),s.invert(),i.prepend(s),i.scale(1/t.texture.orig.width,1/t.texture.orig.height),i.translate(t.anchor.x,t.anchor.y),i}destroy(){var e;(e=this._passthroughFilter)==null||e.destroy(!0),this._passthroughFilter=null}_getPassthroughFilter(){return this._passthroughFilter??(this._passthroughFilter=new Dt),this._passthroughFilter}_setupBindGroupsAndRender(e,t,r){if(r.renderPipes.uniformBatch){const i=r.renderPipes.uniformBatch.getUboResource(this._filterGlobalUniforms);this._globalFilterBindGroup.setResource(i,0)}else this._globalFilterBindGroup.setResource(this._filterGlobalUniforms,0);this._globalFilterBindGroup.setResource(t.source,1),this._globalFilterBindGroup.setResource(t.source.style,2),e.groups[0]=this._globalFilterBindGroup,r.encoder.draw({geometry:Et,shader:e,state:e._state,topology:"triangle-list"}),r.type===se.WEBGL&&r.renderTarget.finishRenderPass()}_setupFilterTextures(e,t,r,i){if(e.backTexture=S.EMPTY,e.inputTexture=F.getOptimalTexture(t.width,t.height,e.resolution,e.antialias),e.blendRequired){r.renderTarget.finishRenderPass();const s=r.renderTarget.getRenderTarget(e.outputRenderSurface);e.backTexture=this.getBackTexture(s,t,i==null?void 0:i.bounds)}r.renderTarget.bind(e.inputTexture,!0),r.globalUniforms.push({offset:t})}_calculateGlobalFrame(e,t,r,i,s,n){const a=e.globalFrame;a.x=t*i,a.y=r*i,a.width=s*i,a.height=n*i}_updateFilterUniforms(e,t,r,i,s,n,a,u){const h=this._filterGlobalUniforms.uniforms,d=h.uOutputFrame,l=h.uInputSize,c=h.uInputPixel,p=h.uInputClamp,y=h.uGlobalFrame,x=h.uOutputTexture;a?(d[0]=r.bounds.minX-i,d[1]=r.bounds.minY-s):(d[0]=0,d[1]=0),d[2]=e.frame.width,d[3]=e.frame.height,l[0]=e.source.width,l[1]=e.source.height,l[2]=1/l[0],l[3]=1/l[1],c[0]=e.source.pixelWidth,c[1]=e.source.pixelHeight,c[2]=1/c[0],c[3]=1/c[1],p[0]=.5*c[2],p[1]=.5*c[3],p[2]=e.frame.width*l[2]-.5*c[2],p[3]=e.frame.height*l[3]-.5*c[3];const v=this.renderer.renderTarget.rootRenderTarget.colorTexture;y[0]=i*n,y[1]=s*n,y[2]=v.source.width*n,y[3]=v.source.height*n,t instanceof S&&(t.source.resource=null);const _=this.renderer.renderTarget.getRenderTarget(t);this.renderer.renderTarget.bind(t,!!u),t instanceof S?(x[0]=t.frame.width,x[1]=t.frame.height):(x[0]=_.width,x[1]=_.height),x[2]=_.isRoot?-1:1,this._filterGlobalUniforms.update()}_findFilterResolution(e){let t=this._filterStackIndex-1;for(;t>0&&this._filterStack[t].skip;)--t;return t>0&&this._filterStack[t].inputTexture?this._filterStack[t].inputTexture.source._resolution:e}_findPreviousFilterOffset(){let e=0,t=0,r=this._filterStackIndex;for(;r>0;){r--;const i=this._filterStack[r];if(!i.skip){e=i.bounds.minX,t=i.bounds.minY;break}}return{x:e,y:t}}_calculateFilterArea(e,t){if(e.renderables?Ot(e.renderables,t):e.filterEffect.filterArea?(t.clear(),t.addRect(e.filterEffect.filterArea),t.applyMatrix(e.container.worldTransform)):e.container.getFastGlobalBounds(!0,t),e.container){const r=(e.container.renderGroup||e.container.parentRenderGroup).cacheToLocalTransform;r&&t.applyMatrix(r)}}_applyFiltersToTexture(e,t){const r=e.inputTexture,i=e.bounds,s=e.filters,n=e.firstEnabledIndex,a=e.lastEnabledIndex;if(this._globalFilterBindGroup.setResource(r.source.style,2),this._globalFilterBindGroup.setResource(e.backTexture.source,3),n===a)s[n].apply(this,r,e.outputRenderSurface,t);else{let u=e.inputTexture;const h=F.getOptimalTexture(i.width,i.height,u.source._resolution,!1);let d=h;for(let l=n;l<a;l++){const c=s[l];if(!c.enabled)continue;c.apply(this,u,d,!0);const p=u;u=d,d=p}s[a].apply(this,u,e.outputRenderSurface,t),F.returnTexture(h)}}_calculateFilterBounds(e,t,r,i,s){var n;const a=this.renderer,u=e.bounds,h=e.filters;let d=1/0,l=0,c=!0,p=!1,y=!1,x=!0,v=-1,_=-1;for(let g=0;g<h.length;g++){const f=h[g];if(f.enabled){if(v===-1&&(v=g),_=g,d=Math.min(d,f.resolution==="inherit"?i:f.resolution),l+=f.padding,f.antialias==="off"?c=!1:f.antialias==="inherit"&&c&&(c=r),f.clipToViewport||(x=!1),!(f.compatibleRenderers&a.type)){y=!1;break}if(f.blendRequired&&!(((n=a.backBuffer)==null?void 0:n.useBackBuffer)??!0)){Y("Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options."),y=!1;break}y=!0,p||(p=f.blendRequired)}}if(!y){e.skip=!0;return}if(x&&u.fitBounds(0,t.width/i,0,t.height/i),u.scale(d).ceil().scale(1/d).pad((l|0)*s),!u.isPositive){e.skip=!0;return}e.antialias=c,e.resolution=d,e.blendRequired=p,e.firstEnabledIndex=v,e.lastEnabledIndex=_}_popFilterData(){return this._filterStackIndex--,this._filterStack[this._filterStackIndex]}_getPreviousFilterData(){let e,t=this._filterStackIndex-1;for(;t>0&&(t--,e=this._filterStack[t],!!e.skip););return e}_pushFilterData(){let e=this._filterStack[this._filterStackIndex];return e||(e=this._filterStack[this._filterStackIndex]=new It),this._filterStackIndex++,e}}We.extension={type:[m.WebGLSystem,m.WebGPUSystem],name:"filter"};const Ve=class Ye extends re{constructor(...e){let t=e[0]??{};t instanceof Float32Array&&(C(B,"use new MeshGeometry({ positions, uvs, indices }) instead"),t={positions:t,uvs:e[1],indices:e[2]}),t={...Ye.defaultOptions,...t};const r=t.positions||new Float32Array([0,0,1,0,1,1,0,1]);let i=t.uvs;i||(t.positions?i=new Float32Array(r.length):i=new Float32Array([0,0,1,0,1,1,0,1]));const s=t.indices||new Uint32Array([0,1,2,0,2,3]),n=t.shrinkBuffersToFit,a=new k({data:r,label:"attribute-mesh-positions",shrinkToFit:n,usage:R.VERTEX|R.COPY_DST}),u=new k({data:i,label:"attribute-mesh-uvs",shrinkToFit:n,usage:R.VERTEX|R.COPY_DST}),h=new k({data:s,label:"index-mesh-buffer",shrinkToFit:n,usage:R.INDEX|R.COPY_DST});super({attributes:{aPosition:{buffer:a,format:"float32x2",stride:2*4,offset:0},aUV:{buffer:u,format:"float32x2",stride:2*4,offset:0}},indexBuffer:h,topology:t.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(e){this.attributes.aPosition.buffer.data=e}get uvs(){return this.attributes.aUV.buffer.data}set uvs(e){this.attributes.aUV.buffer.data=e}get indices(){return this.indexBuffer.data}set indices(e){this.indexBuffer.data=e}};Ve.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1};let oe=Ve;const me="http://www.w3.org/2000/svg",xe="http://www.w3.org/1999/xhtml";class Xe{constructor(){this.svgRoot=document.createElementNS(me,"svg"),this.foreignObject=document.createElementNS(me,"foreignObject"),this.domElement=document.createElementNS(xe,"div"),this.styleElement=document.createElementNS(xe,"style");const{foreignObject:e,svgRoot:t,styleElement:r,domElement:i}=this;e.setAttribute("width","10000"),e.setAttribute("height","10000"),e.style.overflow="hidden",t.appendChild(e),e.appendChild(r),e.appendChild(i),this.image=ae.get().createImage()}destroy(){this.svgRoot.remove(),this.foreignObject.remove(),this.styleElement.remove(),this.domElement.remove(),this.image.src="",this.image.remove(),this.svgRoot=null,this.foreignObject=null,this.styleElement=null,this.domElement=null,this.image=null,this.canvasAndContext=null}}let _e;function Wt(o,e,t,r){r||(r=_e||(_e=new Xe));const{domElement:i,styleElement:s,svgRoot:n}=r;i.innerHTML=`<style>${e.cssStyle};</style><div style='padding:0'>${o}</div>`,i.setAttribute("style","transform-origin: top left; display: inline-block"),t&&(s.textContent=t),document.body.appendChild(n);const a=i.getBoundingClientRect();n.remove();const u=e.padding*2;return{width:a.width-u,height:a.height-u}}class Vt{constructor(){this.batches=[],this.batched=!1}destroy(){this.batches.forEach(e=>{X.return(e)}),this.batches.length=0}}class Le{constructor(e,t){this.state=L.for2d(),this.renderer=e,this._adaptor=t,this.renderer.runners.contextChange.add(this)}contextChange(){this._adaptor.contextChange(this.renderer)}validateRenderable(e){const t=e.context,r=!!e._gpuData,i=this.renderer.graphicsContext.updateGpuContext(t);return!!(i.isBatchable||r!==i.isBatchable)}addRenderable(e,t){const r=this.renderer.graphicsContext.updateGpuContext(e.context);e.didViewUpdate&&this._rebuild(e),r.isBatchable?this._addToBatcher(e,t):(this.renderer.renderPipes.batch.break(t),t.add(e))}updateRenderable(e){const t=this._getGpuDataForRenderable(e).batches;for(let r=0;r<t.length;r++){const i=t[r];i._batcher.updateElement(i)}}execute(e){if(!e.isRenderable)return;const t=this.renderer,r=e.context;if(!t.graphicsContext.getGpuContext(r).batches.length)return;const i=r.customShader||this._adaptor.shader;this.state.blendMode=e.groupBlendMode;const s=i.resources.localUniforms.uniforms;s.uTransformMatrix=e.groupTransform,s.uRound=t._roundPixels|e._roundPixels,H(e.groupColorAlpha,s.uColor,0),this._adaptor.execute(this,e)}_rebuild(e){const t=this._getGpuDataForRenderable(e),r=this.renderer.graphicsContext.updateGpuContext(e.context);t.destroy(),r.isBatchable&&this._updateBatchesForRenderable(e,t)}_addToBatcher(e,t){const r=this.renderer.renderPipes.batch,i=this._getGpuDataForRenderable(e).batches;for(let s=0;s<i.length;s++){const n=i[s];r.addToBatch(n,t)}}_getGpuDataForRenderable(e){return e._gpuData[this.renderer.uid]||this._initGpuDataForRenderable(e)}_initGpuDataForRenderable(e){const t=new Vt;return e._gpuData[this.renderer.uid]=t,t}_updateBatchesForRenderable(e,t){const r=e.context,i=this.renderer.graphicsContext.getGpuContext(r),s=this.renderer._roundPixels|e._roundPixels;t.batches=i.batches.map(n=>{const a=X.get(gt);return n.copyTo(a),a.renderable=e,a.roundPixels=s,a})}destroy(){this.renderer=null,this._adaptor.destroy(),this._adaptor=null,this.state=null}}Le.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"graphics"};const He=class Ke extends oe{constructor(...e){super({});let t=e[0]??{};typeof t=="number"&&(C(B,"PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead"),t={width:t,height:e[1],verticesX:e[2],verticesY:e[3]}),this.build(t)}build(e){e={...Ke.defaultOptions,...e},this.verticesX=this.verticesX??e.verticesX,this.verticesY=this.verticesY??e.verticesY,this.width=this.width??e.width,this.height=this.height??e.height;const t=this.verticesX*this.verticesY,r=[],i=[],s=[],n=this.verticesX-1,a=this.verticesY-1,u=this.width/n,h=this.height/a;for(let l=0;l<t;l++){const c=l%this.verticesX,p=l/this.verticesX|0;r.push(c*u,p*h),i.push(c/n,p/a)}const d=n*a;for(let l=0;l<d;l++){const c=l%n,p=l/n|0,y=p*this.verticesX+c,x=p*this.verticesX+c+1,v=(p+1)*this.verticesX+c,_=(p+1)*this.verticesX+c+1;s.push(y,x,v,x,_,v)}this.buffers[0].data=new Float32Array(r),this.buffers[1].data=new Float32Array(i),this.indexBuffer.data=new Uint32Array(s),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()}};He.defaultOptions={width:100,height:100,verticesX:10,verticesY:10};let Yt=He;class ue{constructor(){this.batcherName="default",this.packAsQuad=!1,this.indexOffset=0,this.attributeOffset=0,this.roundPixels=0,this._batcher=null,this._batch=null,this._textureMatrixUpdateId=-1,this._uvUpdateId=-1}get blendMode(){return this.renderable.groupBlendMode}get topology(){return this._topology||this.geometry.topology}set topology(e){this._topology=e}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.geometry=null,this._uvUpdateId=-1,this._textureMatrixUpdateId=-1}setTexture(e){this.texture!==e&&(this.texture=e,this._textureMatrixUpdateId=-1)}get uvs(){const e=this.geometry.getBuffer("aUV"),t=e.data;let r=t;const i=this.texture.textureMatrix;return i.isSimple||(r=this._transformedUvs,(this._textureMatrixUpdateId!==i._updateID||this._uvUpdateId!==e._updateID)&&((!r||r.length<t.length)&&(r=this._transformedUvs=new Float32Array(t.length)),this._textureMatrixUpdateId=i._updateID,this._uvUpdateId=e._updateID,i.multiplyUvs(t,r))),r}get positions(){return this.geometry.positions}get indices(){return this.geometry.indices}get color(){return this.renderable.groupColorAlpha}get groupTransform(){return this.renderable.groupTransform}get attributeSize(){return this.geometry.positions.length/2}get indexSize(){return this.geometry.indices.length}}class ye{destroy(){}}class $e{constructor(e,t){this.localUniforms=new A({uTransformMatrix:{value:new U,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),this.localUniformsBindGroup=new Se({0:this.localUniforms}),this.renderer=e,this._adaptor=t,this._adaptor.init()}validateRenderable(e){const t=this._getMeshData(e),r=t.batched,i=e.batched;if(t.batched=i,r!==i)return!0;if(i){const s=e._geometry;if(s.indices.length!==t.indexSize||s.positions.length!==t.vertexSize)return t.indexSize=s.indices.length,t.vertexSize=s.positions.length,!0;const n=this._getBatchableMesh(e);return n.texture.uid!==e._texture.uid&&(n._textureMatrixUpdateId=-1),!n._batcher.checkAndUpdateTexture(n,e._texture)}return!1}addRenderable(e,t){var r,i;const s=this.renderer.renderPipes.batch,n=this._getMeshData(e);if(e.didViewUpdate&&(n.indexSize=(r=e._geometry.indices)==null?void 0:r.length,n.vertexSize=(i=e._geometry.positions)==null?void 0:i.length),n.batched){const a=this._getBatchableMesh(e);a.setTexture(e._texture),a.geometry=e._geometry,s.addToBatch(a,t)}else s.break(t),t.add(e)}updateRenderable(e){if(e.batched){const t=this._getBatchableMesh(e);t.setTexture(e._texture),t.geometry=e._geometry,t._batcher.updateElement(t)}}execute(e){if(!e.isRenderable)return;e.state.blendMode=ie(e.groupBlendMode,e.texture._source);const t=this.localUniforms;t.uniforms.uTransformMatrix=e.groupTransform,t.uniforms.uRound=this.renderer._roundPixels|e._roundPixels,t.update(),H(e.groupColorAlpha,t.uniforms.uColor,0),this._adaptor.execute(this,e)}_getMeshData(e){var t,r;return(t=e._gpuData)[r=this.renderer.uid]||(t[r]=new ye),e._gpuData[this.renderer.uid].meshData||this._initMeshData(e)}_initMeshData(e){return e._gpuData[this.renderer.uid].meshData={batched:e.batched,indexSize:0,vertexSize:0},e._gpuData[this.renderer.uid].meshData}_getBatchableMesh(e){var t,r;return(t=e._gpuData)[r=this.renderer.uid]||(t[r]=new ye),e._gpuData[this.renderer.uid].batchableMesh||this._initBatchableMesh(e)}_initBatchableMesh(e){const t=new ue;return t.renderable=e,t.setTexture(e._texture),t.transform=e.groupTransform,t.roundPixels=this.renderer._roundPixels|e._roundPixels,e._gpuData[this.renderer.uid].batchableMesh=t,t}destroy(){this.localUniforms=null,this.localUniformsBindGroup=null,this._adaptor.destroy(),this._adaptor=null,this.renderer=null}}$e.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"mesh"};class Xt{execute(e,t){const r=e.state,i=e.renderer,s=t.shader||e.defaultShader;s.resources.uTexture=t.texture._source,s.resources.uniforms=e.localUniforms;const n=i.gl,a=e.getBuffers(t);i.shader.bind(s),i.state.set(r),i.geometry.bind(a.geometry,s.glProgram);const u=a.geometry.indexBuffer.data.BYTES_PER_ELEMENT===2?n.UNSIGNED_SHORT:n.UNSIGNED_INT;n.drawElements(n.TRIANGLES,t.particleChildren.length*6,u,0)}}class Lt{execute(e,t){const r=e.renderer,i=t.shader||e.defaultShader;i.groups[0]=r.renderPipes.uniformBatch.getUniformBindGroup(e.localUniforms,!0),i.groups[1]=r.texture.getTextureBindGroup(t.texture);const s=e.state,n=e.getBuffers(t);r.encoder.draw({geometry:n.geometry,shader:t.shader||e.defaultShader,state:s,size:t.particleChildren.length*6})}}function ve(o,e=null){const t=o*6;if(t>65535?e||(e=new Uint32Array(t)):e||(e=new Uint16Array(t)),e.length!==t)throw new Error(`Out buffer length is incorrect, got ${e.length} and expected ${t}`);for(let r=0,i=0;r<t;r+=6,i+=4)e[r+0]=i+0,e[r+1]=i+1,e[r+2]=i+2,e[r+3]=i+0,e[r+4]=i+2,e[r+5]=i+3;return e}function Ht(o){return{dynamicUpdate:be(o,!0),staticUpdate:be(o,!1)}}function be(o,e){const t=[];t.push(`

        var index = 0;

        for (let i = 0; i < ps.length; ++i)
        {
            const p = ps[i];

            `);let r=0;for(const s in o){const n=o[s];if(e!==n.dynamic)continue;t.push(`offset = index + ${r}`),t.push(n.code);const a=ee(n.format);r+=a.stride/4}t.push(`
            index += stride * 4;
        }
    `),t.unshift(`
        var stride = ${r};
    `);const i=t.join(`
`);return new Function("ps","f32v","u32v",i)}class Kt{constructor(e){this._size=0,this._generateParticleUpdateCache={};const t=this._size=e.size??1e3,r=e.properties;let i=0,s=0;for(const d in r){const l=r[d],c=ee(l.format);l.dynamic?s+=c.stride:i+=c.stride}this._dynamicStride=s/4,this._staticStride=i/4,this.staticAttributeBuffer=new E(t*4*i),this.dynamicAttributeBuffer=new E(t*4*s),this.indexBuffer=ve(t);const n=new re;let a=0,u=0;this._staticBuffer=new k({data:new Float32Array(1),label:"static-particle-buffer",shrinkToFit:!1,usage:R.VERTEX|R.COPY_DST}),this._dynamicBuffer=new k({data:new Float32Array(1),label:"dynamic-particle-buffer",shrinkToFit:!1,usage:R.VERTEX|R.COPY_DST});for(const d in r){const l=r[d],c=ee(l.format);l.dynamic?(n.addAttribute(l.attributeName,{buffer:this._dynamicBuffer,stride:this._dynamicStride*4,offset:a*4,format:l.format}),a+=c.size):(n.addAttribute(l.attributeName,{buffer:this._staticBuffer,stride:this._staticStride*4,offset:u*4,format:l.format}),u+=c.size)}n.addIndex(this.indexBuffer);const h=this.getParticleUpdate(r);this._dynamicUpload=h.dynamicUpdate,this._staticUpload=h.staticUpdate,this.geometry=n}getParticleUpdate(e){const t=$t(e);return this._generateParticleUpdateCache[t]?this._generateParticleUpdateCache[t]:(this._generateParticleUpdateCache[t]=this.generateParticleUpdate(e),this._generateParticleUpdateCache[t])}generateParticleUpdate(e){return Ht(e)}update(e,t){e.length>this._size&&(t=!0,this._size=Math.max(e.length,this._size*1.5|0),this.staticAttributeBuffer=new E(this._size*this._staticStride*4*4),this.dynamicAttributeBuffer=new E(this._size*this._dynamicStride*4*4),this.indexBuffer=ve(this._size),this.geometry.indexBuffer.setDataWithSize(this.indexBuffer,this.indexBuffer.byteLength,!0));const r=this.dynamicAttributeBuffer;if(this._dynamicUpload(e,r.float32View,r.uint32View),this._dynamicBuffer.setDataWithSize(this.dynamicAttributeBuffer.float32View,e.length*this._dynamicStride*4,!0),t){const i=this.staticAttributeBuffer;this._staticUpload(e,i.float32View,i.uint32View),this._staticBuffer.setDataWithSize(i.float32View,e.length*this._staticStride*4,!0)}}destroy(){this._staticBuffer.destroy(),this._dynamicBuffer.destroy(),this.geometry.destroy()}}function $t(o){const e=[];for(const t in o){const r=o[t];e.push(t,r.code,r.dynamic?"d":"s")}return e.join("_")}var jt=`varying vec2 vUV;
varying vec4 vColor;

uniform sampler2D uTexture;

void main(void){
    vec4 color = texture2D(uTexture, vUV) * vColor;
    gl_FragColor = color;
}`,Nt=`attribute vec2 aVertex;
attribute vec2 aUV;
attribute vec4 aColor;

attribute vec2 aPosition;
attribute float aRotation;

uniform mat3 uTranslationMatrix;
uniform float uRound;
uniform vec2 uResolution;
uniform vec4 uColor;

varying vec2 vUV;
varying vec4 vColor;

vec2 roundPixels(vec2 position, vec2 targetSize)
{       
    return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
}

void main(void){
    float cosRotation = cos(aRotation);
    float sinRotation = sin(aRotation);
    float x = aVertex.x * cosRotation - aVertex.y * sinRotation;
    float y = aVertex.x * sinRotation + aVertex.y * cosRotation;

    vec2 v = vec2(x, y);
    v = v + aPosition;

    gl_Position = vec4((uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    if(uRound == 1.0)
    {
        gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
    }

    vUV = aUV;
    vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uColor;
}
`,Te=`
struct ParticleUniforms {
  uTranslationMatrix:mat3x3<f32>,
  uColor:vec4<f32>,
  uRound:f32,
  uResolution:vec2<f32>,
};

fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
{
  return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
}

@group(0) @binding(0) var<uniform> uniforms: ParticleUniforms;

@group(1) @binding(0) var uTexture: texture_2d<f32>;
@group(1) @binding(1) var uSampler : sampler;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) color : vec4<f32>,
  };
@vertex
fn mainVertex(
  @location(0) aVertex: vec2<f32>,
  @location(1) aPosition: vec2<f32>,
  @location(2) aUV: vec2<f32>,
  @location(3) aColor: vec4<f32>,
  @location(4) aRotation: f32,
) -> VSOutput {
  
   let v = vec2(
       aVertex.x * cos(aRotation) - aVertex.y * sin(aRotation),
       aVertex.x * sin(aRotation) + aVertex.y * cos(aRotation)
   ) + aPosition;

   var position = vec4((uniforms.uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

   if(uniforms.uRound == 1.0) {
       position = vec4(roundPixels(position.xy, uniforms.uResolution), position.zw);
   }

    let vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uniforms.uColor;

  return VSOutput(
   position,
   aUV,
   vColor,
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) color: vec4<f32>,
  @builtin(position) position: vec4<f32>,
) -> @location(0) vec4<f32> {

    var sample = textureSample(uTexture, uSampler, uv) * color;
   
    return sample;
}`;class qt extends ne{constructor(){const e=ze.from({vertex:Nt,fragment:jt}),t=Me.from({fragment:{source:Te,entryPoint:"mainFragment"},vertex:{source:Te,entryPoint:"mainVertex"}});super({glProgram:e,gpuProgram:t,resources:{uTexture:S.WHITE.source,uSampler:new O({}),uniforms:{uTranslationMatrix:{value:new U,type:"mat3x3<f32>"},uColor:{value:new Ce(16777215),type:"vec4<f32>"},uRound:{value:1,type:"f32"},uResolution:{value:[0,0],type:"vec2<f32>"}}}})}}class je{constructor(e,t){this.state=L.for2d(),this.localUniforms=new A({uTranslationMatrix:{value:new U,type:"mat3x3<f32>"},uColor:{value:new Float32Array(4),type:"vec4<f32>"},uRound:{value:1,type:"f32"},uResolution:{value:[0,0],type:"vec2<f32>"}}),this.renderer=e,this.adaptor=t,this.defaultShader=new qt,this.state=L.for2d()}validateRenderable(e){return!1}addRenderable(e,t){this.renderer.renderPipes.batch.break(t),t.add(e)}getBuffers(e){return e._gpuData[this.renderer.uid]||this._initBuffer(e)}_initBuffer(e){return e._gpuData[this.renderer.uid]=new Kt({size:e.particleChildren.length,properties:e._properties}),e._gpuData[this.renderer.uid]}updateRenderable(e){}execute(e){const t=e.particleChildren;if(t.length===0)return;const r=this.renderer,i=this.getBuffers(e);e.texture||(e.texture=t[0].texture);const s=this.state;i.update(t,e._childrenDirty),e._childrenDirty=!1,s.blendMode=ie(e.blendMode,e.texture._source);const n=this.localUniforms.uniforms,a=n.uTranslationMatrix;e.worldTransform.copyTo(a),a.prepend(r.globalUniforms.globalUniformData.projectionMatrix),n.uResolution=r.globalUniforms.globalUniformData.resolution,n.uRound=r._roundPixels|e._roundPixels,H(e.groupColorAlpha,n.uColor,0),this.adaptor.execute(this,e)}destroy(){this.renderer=null,this.defaultShader&&(this.defaultShader.destroy(),this.defaultShader=null)}}class Ne extends je{constructor(e){super(e,new Xt)}}Ne.extension={type:[m.WebGLPipes],name:"particle"};class qe extends je{constructor(e){super(e,new Lt)}}qe.extension={type:[m.WebGPUPipes],name:"particle"};const Je=class Ze extends Yt{constructor(e={}){e={...Ze.defaultOptions,...e},super({width:e.width,height:e.height,verticesX:4,verticesY:4}),this.update(e)}update(e){var t,r;this.width=e.width??this.width,this.height=e.height??this.height,this._originalWidth=e.originalWidth??this._originalWidth,this._originalHeight=e.originalHeight??this._originalHeight,this._leftWidth=e.leftWidth??this._leftWidth,this._rightWidth=e.rightWidth??this._rightWidth,this._topHeight=e.topHeight??this._topHeight,this._bottomHeight=e.bottomHeight??this._bottomHeight,this._anchorX=(t=e.anchor)==null?void 0:t.x,this._anchorY=(r=e.anchor)==null?void 0:r.y,this.updateUvs(),this.updatePositions()}updatePositions(){const e=this.positions,{width:t,height:r,_leftWidth:i,_rightWidth:s,_topHeight:n,_bottomHeight:a,_anchorX:u,_anchorY:h}=this,d=i+s,l=t>d?1:t/d,c=n+a,p=r>c?1:r/c,y=Math.min(l,p),x=u*t,v=h*r;e[0]=e[8]=e[16]=e[24]=-x,e[2]=e[10]=e[18]=e[26]=i*y-x,e[4]=e[12]=e[20]=e[28]=t-s*y-x,e[6]=e[14]=e[22]=e[30]=t-x,e[1]=e[3]=e[5]=e[7]=-v,e[9]=e[11]=e[13]=e[15]=n*y-v,e[17]=e[19]=e[21]=e[23]=r-a*y-v,e[25]=e[27]=e[29]=e[31]=r-v,this.getBuffer("aPosition").update()}updateUvs(){const e=this.uvs;e[0]=e[8]=e[16]=e[24]=0,e[1]=e[3]=e[5]=e[7]=0,e[6]=e[14]=e[22]=e[30]=1,e[25]=e[27]=e[29]=e[31]=1;const t=1/this._originalWidth,r=1/this._originalHeight;e[2]=e[10]=e[18]=e[26]=t*this._leftWidth,e[9]=e[11]=e[13]=e[15]=r*this._topHeight,e[4]=e[12]=e[20]=e[28]=1-t*this._rightWidth,e[17]=e[19]=e[21]=e[23]=1-r*this._bottomHeight,this.getBuffer("aUV").update()}};Je.defaultOptions={width:100,height:100,leftWidth:10,topHeight:10,rightWidth:10,bottomHeight:10,originalWidth:100,originalHeight:100};let Jt=Je;class Zt extends ue{constructor(){super(),this.geometry=new Jt}destroy(){this.geometry.destroy()}}class Qe{constructor(e){this._renderer=e}addRenderable(e,t){const r=this._getGpuSprite(e);e.didViewUpdate&&this._updateBatchableSprite(e,r),this._renderer.renderPipes.batch.addToBatch(r,t)}updateRenderable(e){const t=this._getGpuSprite(e);e.didViewUpdate&&this._updateBatchableSprite(e,t),t._batcher.updateElement(t)}validateRenderable(e){const t=this._getGpuSprite(e);return!t._batcher.checkAndUpdateTexture(t,e._texture)}_updateBatchableSprite(e,t){t.geometry.update(e),t.setTexture(e._texture)}_getGpuSprite(e){return e._gpuData[this._renderer.uid]||this._initGPUSprite(e)}_initGPUSprite(e){const t=e._gpuData[this._renderer.uid]=new Zt,r=t;return r.renderable=e,r.transform=e.groupTransform,r.texture=e._texture,r.roundPixels=this._renderer._roundPixels|e._roundPixels,e.didViewUpdate||this._updateBatchableSprite(e,r),t}destroy(){this._renderer=null}}Qe.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"nineSliceSprite"};const Qt={name:"tiling-bit",vertex:{header:`
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,main:`
            uv = (tilingUniforms.uTextureTransform * vec3(uv, 1.0)).xy;

            position = (position - tilingUniforms.uSizeAnchor.zw) * tilingUniforms.uSizeAnchor.xy;
        `},fragment:{header:`
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,main:`

            var coord = vUV + ceil(tilingUniforms.uClampOffset - vUV);
            coord = (tilingUniforms.uMapCoord * vec3(coord, 1.0)).xy;
            var unclamped = coord;
            coord = clamp(coord, tilingUniforms.uClampFrame.xy, tilingUniforms.uClampFrame.zw);

            var bias = 0.;

            if(unclamped.x == coord.x && unclamped.y == coord.y)
            {
                bias = -32.;
            }

            outColor = textureSampleBias(uTexture, uSampler, coord, bias);
        `}},er={name:"tiling-bit",vertex:{header:`
            uniform mat3 uTextureTransform;
            uniform vec4 uSizeAnchor;

        `,main:`
            uv = (uTextureTransform * vec3(aUV, 1.0)).xy;

            position = (position - uSizeAnchor.zw) * uSizeAnchor.xy;
        `},fragment:{header:`
            uniform sampler2D uTexture;
            uniform mat3 uMapCoord;
            uniform vec4 uClampFrame;
            uniform vec2 uClampOffset;
        `,main:`

        vec2 coord = vUV + ceil(uClampOffset - vUV);
        coord = (uMapCoord * vec3(coord, 1.0)).xy;
        vec2 unclamped = coord;
        coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

        outColor = texture(uTexture, coord, unclamped == coord ? 0.0 : -32.0);// lod-bias very negative to force lod 0

        `}};let N,q;class tr extends ne{constructor(){N??(N=Fe({name:"tiling-sprite-shader",bits:[Ct,Qt,Re]})),q??(q=Ue({name:"tiling-sprite-shader",bits:[St,er,Be]}));const e=new A({uMapCoord:{value:new U,type:"mat3x3<f32>"},uClampFrame:{value:new Float32Array([0,0,1,1]),type:"vec4<f32>"},uClampOffset:{value:new Float32Array([0,0]),type:"vec2<f32>"},uTextureTransform:{value:new U,type:"mat3x3<f32>"},uSizeAnchor:{value:new Float32Array([100,100,.5,.5]),type:"vec4<f32>"}});super({glProgram:q,gpuProgram:N,resources:{localUniforms:new A({uTransformMatrix:{value:new U,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),tilingUniforms:e,uTexture:S.EMPTY.source,uSampler:S.EMPTY.source.style}})}updateUniforms(e,t,r,i,s,n){const a=this.resources.tilingUniforms,u=n.width,h=n.height,d=n.textureMatrix,l=a.uniforms.uTextureTransform;l.set(r.a*u/e,r.b*u/t,r.c*h/e,r.d*h/t,r.tx/e,r.ty/t),l.invert(),a.uniforms.uMapCoord=d.mapCoord,a.uniforms.uClampFrame=d.uClampFrame,a.uniforms.uClampOffset=d.uClampOffset,a.uniforms.uTextureTransform=l,a.uniforms.uSizeAnchor[0]=e,a.uniforms.uSizeAnchor[1]=t,a.uniforms.uSizeAnchor[2]=i,a.uniforms.uSizeAnchor[3]=s,n&&(this.resources.uTexture=n.source,this.resources.uSampler=n.source.style)}}class rr extends oe{constructor(){super({positions:new Float32Array([0,0,1,0,1,1,0,1]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])})}}function ir(o,e){const t=o.anchor.x,r=o.anchor.y;e[0]=-t*o.width,e[1]=-r*o.height,e[2]=(1-t)*o.width,e[3]=-r*o.height,e[4]=(1-t)*o.width,e[5]=(1-r)*o.height,e[6]=-t*o.width,e[7]=(1-r)*o.height}function sr(o,e,t,r){let i=0;const s=o.length/e,n=r.a,a=r.b,u=r.c,h=r.d,d=r.tx,l=r.ty;for(t*=e;i<s;){const c=o[t],p=o[t+1];o[t]=n*c+u*p+d,o[t+1]=a*c+h*p+l,t+=e,i++}}function nr(o,e){const t=o.texture,r=t.frame.width,i=t.frame.height;let s=0,n=0;o.applyAnchorToTexture&&(s=o.anchor.x,n=o.anchor.y),e[0]=e[6]=-s,e[2]=e[4]=1-s,e[1]=e[3]=-n,e[5]=e[7]=1-n;const a=U.shared;a.copyFrom(o._tileTransform.matrix),a.tx/=o.width,a.ty/=o.height,a.invert(),a.scale(o.width/r,o.height/i),sr(e,2,0,a)}const W=new rr;class ar{constructor(){this.canBatch=!0,this.geometry=new oe({indices:W.indices.slice(),positions:W.positions.slice(),uvs:W.uvs.slice()})}destroy(){var e;this.geometry.destroy(),(e=this.shader)==null||e.destroy()}}class et{constructor(e){this._state=L.default2d,this._renderer=e}validateRenderable(e){const t=this._getTilingSpriteData(e),r=t.canBatch;this._updateCanBatch(e);const i=t.canBatch;if(i&&i===r){const{batchableMesh:s}=t;return!s._batcher.checkAndUpdateTexture(s,e.texture)}return r!==i}addRenderable(e,t){const r=this._renderer.renderPipes.batch;this._updateCanBatch(e);const i=this._getTilingSpriteData(e),{geometry:s,canBatch:n}=i;if(n){i.batchableMesh||(i.batchableMesh=new ue);const a=i.batchableMesh;e.didViewUpdate&&(this._updateBatchableMesh(e),a.geometry=s,a.renderable=e,a.transform=e.groupTransform,a.setTexture(e._texture)),a.roundPixels=this._renderer._roundPixels|e._roundPixels,r.addToBatch(a,t)}else r.break(t),i.shader||(i.shader=new tr),this.updateRenderable(e),t.add(e)}execute(e){const{shader:t}=this._getTilingSpriteData(e);t.groups[0]=this._renderer.globalUniforms.bindGroup;const r=t.resources.localUniforms.uniforms;r.uTransformMatrix=e.groupTransform,r.uRound=this._renderer._roundPixels|e._roundPixels,H(e.groupColorAlpha,r.uColor,0),this._state.blendMode=ie(e.groupBlendMode,e.texture._source),this._renderer.encoder.draw({geometry:W,shader:t,state:this._state})}updateRenderable(e){const t=this._getTilingSpriteData(e),{canBatch:r}=t;if(r){const{batchableMesh:i}=t;e.didViewUpdate&&this._updateBatchableMesh(e),i._batcher.updateElement(i)}else if(e.didViewUpdate){const{shader:i}=t;i.updateUniforms(e.width,e.height,e._tileTransform.matrix,e.anchor.x,e.anchor.y,e.texture)}}_getTilingSpriteData(e){return e._gpuData[this._renderer.uid]||this._initTilingSpriteData(e)}_initTilingSpriteData(e){const t=new ar;return t.renderable=e,e._gpuData[this._renderer.uid]=t,t}_updateBatchableMesh(e){const t=this._getTilingSpriteData(e),{geometry:r}=t,i=e.texture.source.style;i.addressMode!=="repeat"&&(i.addressMode="repeat",i.update()),nr(e,r.uvs),ir(e,r.positions)}destroy(){this._renderer=null}_updateCanBatch(e){const t=this._getTilingSpriteData(e),r=e.texture;let i=!0;return this._renderer.type===se.WEBGL&&(i=this._renderer.context.supports.nonPowOf2wrapping),t.canBatch=r.textureMatrix.isSimple&&(i||r.source.isPowerOfTwo),t.canBatch}}et.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"tilingSprite"};const or={name:"local-uniform-msdf-bit",vertex:{header:`
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32,
                uRound:f32,
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `},fragment:{header:`
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
         `,main:`
            outColor = vec4<f32>(calculateMSDFAlpha(outColor, localUniforms.uColor, localUniforms.uDistance));
        `}},ur={name:"local-uniform-msdf-bit",vertex:{header:`
            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix *= uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `},fragment:{header:`
            uniform float uDistance;
         `,main:`
            outColor = vec4(calculateMSDFAlpha(outColor, vColor, uDistance));
        `}},lr={name:"msdf-bit",fragment:{header:`
            fn calculateMSDFAlpha(msdfColor:vec4<f32>, shapeColor:vec4<f32>, distance:f32) -> f32 {

                // MSDF
                var median = msdfColor.r + msdfColor.g + msdfColor.b -
                    min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                    max(msdfColor.r, max(msdfColor.g, msdfColor.b));

                // SDF
                median = min(median, msdfColor.a);

                var screenPxDistance = distance * (median - 0.5);
                var alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                // Gamma correction for coverage-like alpha
                var luma: f32 = dot(shapeColor.rgb, vec3<f32>(0.299, 0.587, 0.114));
                var gamma: f32 = mix(1.0, 1.0 / 2.2, luma);
                var coverage: f32 = pow(shapeColor.a * alpha, gamma);

                return coverage;

            }
        `}},hr={name:"msdf-bit",fragment:{header:`
            float calculateMSDFAlpha(vec4 msdfColor, vec4 shapeColor, float distance) {

                // MSDF
                float median = msdfColor.r + msdfColor.g + msdfColor.b -
                                min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                                max(msdfColor.r, max(msdfColor.g, msdfColor.b));

                // SDF
                median = min(median, msdfColor.a);

                float screenPxDistance = distance * (median - 0.5);
                float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);

                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                // Gamma correction for coverage-like alpha
                float luma = dot(shapeColor.rgb, vec3(0.299, 0.587, 0.114));
                float gamma = mix(1.0, 1.0 / 2.2, luma);
                float coverage = pow(shapeColor.a * alpha, gamma);

                return coverage;
            }
        `}};let J,Z;class dr extends ne{constructor(e){const t=new A({uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uTransformMatrix:{value:new U,type:"mat3x3<f32>"},uDistance:{value:4,type:"f32"},uRound:{value:0,type:"f32"}});J??(J=Fe({name:"sdf-shader",bits:[_t,yt(e),or,lr,Re]})),Z??(Z=Ue({name:"sdf-shader",bits:[vt,bt(e),ur,hr,Be]})),super({glProgram:Z,gpuProgram:J,resources:{localUniforms:t,batchSamplers:Tt(e)}})}}class cr extends wt{destroy(){this.context.customShader&&this.context.customShader.destroy(),super.destroy()}}class tt{constructor(e){this._renderer=e}validateRenderable(e){const t=this._getGpuBitmapText(e);return this._renderer.renderPipes.graphics.validateRenderable(t)}addRenderable(e,t){const r=this._getGpuBitmapText(e);we(e,r),e._didTextUpdate&&(e._didTextUpdate=!1,this._updateContext(e,r)),this._renderer.renderPipes.graphics.addRenderable(r,t),r.context.customShader&&this._updateDistanceField(e)}updateRenderable(e){const t=this._getGpuBitmapText(e);we(e,t),this._renderer.renderPipes.graphics.updateRenderable(t),t.context.customShader&&this._updateDistanceField(e)}_updateContext(e,t){const{context:r}=t,i=At.getFont(e.text,e._style);r.clear(),i.distanceField.type!=="none"&&(r.customShader||(r.customShader=new dr(this._renderer.limits.maxBatchableTextures)));const s=G.graphemeSegmenter(e.text),n=e._style;let a=i.baseLineOffset;const u=Ee(s,n,i,!0),h=n.padding,d=u.scale;let l=u.width,c=u.height+u.offsetY;n._stroke&&(l+=n._stroke.width/d,c+=n._stroke.width/d),r.translate(-e._anchor._x*l-h,-e._anchor._y*c-h).scale(d,d);const p=i.applyFillAsTint?n._fill.color:16777215;let y=i.fontMetrics.fontSize,x=i.lineHeight;n.lineHeight&&(y=n.fontSize/d,x=n.lineHeight/d);let v=(x-y)/2;v-i.baseLineOffset<0&&(v=0);for(let _=0;_<u.lines.length;_++){const g=u.lines[_];for(let f=0;f<g.charPositions.length;f++){const b=g.chars[f],w=i.chars[b];if(w!=null&&w.texture){const M=w.texture;r.texture(M,p||"black",Math.round(g.charPositions[f]+w.xOffset),Math.round(a+w.yOffset+v),M.orig.width,M.orig.height)}}a+=x}}_getGpuBitmapText(e){return e._gpuData[this._renderer.uid]||this.initGpuText(e)}initGpuText(e){const t=new cr;return e._gpuData[this._renderer.uid]=t,this._updateContext(e,t),t}_updateDistanceField(e){const t=this._getGpuBitmapText(e).context,r=e._style.fontFamily,i=P.get(`${r}-bitmap`),{a:s,b:n,c:a,d:u}=e.groupTransform,h=Math.sqrt(s*s+n*n),d=Math.sqrt(a*a+u*u),l=(Math.abs(h)+Math.abs(d))/2,c=i.baseRenderedFontSize/e._style.fontSize,p=l*i.distanceField.range*(1/c);t.customShader.resources.localUniforms.uniforms.uDistance=p}destroy(){this._renderer=null}}tt.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"bitmapText"};function we(o,e){e.groupTransform=o.groupTransform,e.groupColorAlpha=o.groupColorAlpha,e.groupColor=o.groupColor,e.groupBlendMode=o.groupBlendMode,e.globalDisplayStatus=o.globalDisplayStatus,e.groupTransform=o.groupTransform,e.localDisplayStatus=o.localDisplayStatus,e.groupAlpha=o.groupAlpha,e._roundPixels=o._roundPixels}class pr extends Ae{constructor(e){super(),this.generatingTexture=!1,this.currentKey="--",this._renderer=e,e.runners.resolutionChange.add(this)}resolutionChange(){const e=this.renderable;e._autoResolution&&e.onViewUpdate()}destroy(){const{htmlText:e}=this._renderer;e.getReferenceCount(this.currentKey)===null?e.returnTexturePromise(this.texturePromise):e.decreaseReferenceCount(this.currentKey),this._renderer.runners.resolutionChange.remove(this),this.texturePromise=null,this._renderer=null}}function te(o,e){const{texture:t,bounds:r}=o,i=e._style._getFinalPadding();xt(r,e._anchor,t);const s=e._anchor._x*i*2,n=e._anchor._y*i*2;r.minX-=i-s,r.minY-=i-n,r.maxX-=i-s,r.maxY-=i-n}class rt{constructor(e){this._renderer=e}validateRenderable(e){const t=this._getGpuText(e),r=e.styleKey;return t.currentKey!==r}addRenderable(e,t){const r=this._getGpuText(e);if(e._didTextUpdate){const i=e._autoResolution?this._renderer.resolution:e.resolution;(r.currentKey!==e.styleKey||e.resolution!==i)&&this._updateGpuText(e).catch(s=>{console.error(s)}),e._didTextUpdate=!1,te(r,e)}this._renderer.renderPipes.batch.addToBatch(r,t)}updateRenderable(e){const t=this._getGpuText(e);t._batcher.updateElement(t)}async _updateGpuText(e){e._didTextUpdate=!1;const t=this._getGpuText(e);if(t.generatingTexture)return;const r=t.texturePromise;t.texturePromise=null,t.generatingTexture=!0,e._resolution=e._autoResolution?this._renderer.resolution:e.resolution;let i=this._renderer.htmlText.getTexturePromise(e);r&&(i=i.finally(()=>{this._renderer.htmlText.decreaseReferenceCount(t.currentKey),this._renderer.htmlText.returnTexturePromise(r)})),t.texturePromise=i,t.currentKey=e.styleKey,t.texture=await i;const s=e.renderGroup||e.parentRenderGroup;s&&(s.structureDidChange=!0),t.generatingTexture=!1,te(t,e)}_getGpuText(e){return e._gpuData[this._renderer.uid]||this.initGpuText(e)}initGpuText(e){const t=new pr(this._renderer);return t.renderable=e,t.transform=e.groupTransform,t.texture=S.EMPTY,t.bounds={minX:0,maxX:1,minY:0,maxY:0},t.roundPixels=this._renderer._roundPixels|e._roundPixels,e._resolution=e._autoResolution?this._renderer.resolution:e.resolution,e._gpuData[this._renderer.uid]=t,t}destroy(){this._renderer=null}}rt.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"htmlText"};function fr(){const{userAgent:o}=ae.get().getNavigator();return/^((?!chrome|android).)*safari/i.test(o)}const gr=new Pe;function it(o,e,t,r){const i=gr;i.minX=0,i.minY=0,i.maxX=o.width/r|0,i.maxY=o.height/r|0;const s=F.getOptimalTexture(i.width,i.height,r,!1);return s.source.uploadMethodId="image",s.source.resource=o,s.source.alphaMode="premultiply-alpha-on-upload",s.frame.width=e/r,s.frame.height=t/r,s.source.emit("update",s.source),s.updateUvs(),s}function mr(o,e){const t=e.fontFamily,r=[],i={},s=/font-family:([^;"\s]+)/g,n=o.match(s);function a(u){i[u]||(r.push(u),i[u]=!0)}if(Array.isArray(t))for(let u=0;u<t.length;u++)a(t[u]);else a(t);n&&n.forEach(u=>{const h=u.split(":")[1].trim();a(h)});for(const u in e.tagStyles){const h=e.tagStyles[u].fontFamily;a(h)}return r}async function xr(o){const e=await(await ae.get().fetch(o)).blob(),t=new FileReader;return await new Promise((r,i)=>{t.onloadend=()=>r(t.result),t.onerror=i,t.readAsDataURL(e)})}async function _r(o,e){const t=await xr(e);return`@font-face {
        font-family: "${o.fontFamily}";
        font-weight: ${o.fontWeight};
        font-style: ${o.fontStyle};
        src: url('${t}');
    }`}const Q=new Map;async function yr(o){const e=o.filter(t=>P.has(`${t}-and-url`)).map(t=>{if(!Q.has(t)){const{entries:r}=P.get(`${t}-and-url`),i=[];r.forEach(s=>{const n=s.url,a=s.faces.map(u=>({weight:u.weight,style:u.style}));i.push(...a.map(u=>_r({fontWeight:u.weight,fontStyle:u.style,fontFamily:t},n)))}),Q.set(t,Promise.all(i).then(s=>s.join(`
`)))}return Q.get(t)});return(await Promise.all(e)).join(`
`)}function vr(o,e,t,r,i){const{domElement:s,styleElement:n,svgRoot:a}=i;s.innerHTML=`<style>${e.cssStyle}</style><div style='padding:0;'>${o}</div>`,s.setAttribute("style",`transform: scale(${t});transform-origin: top left; display: inline-block`),n.textContent=r;const{width:u,height:h}=i.image;return a.setAttribute("width",u.toString()),a.setAttribute("height",h.toString()),new XMLSerializer().serializeToString(a)}function br(o,e){const t=V.getOptimalCanvasAndContext(o.width,o.height,e),{context:r}=t;return r.clearRect(0,0,o.width,o.height),r.drawImage(o,0,0),t}function Tr(o,e,t){return new Promise(async r=>{t&&await new Promise(i=>setTimeout(i,100)),o.onload=()=>{r()},o.src=`data:image/svg+xml;charset=utf8,${encodeURIComponent(e)}`,o.crossOrigin="anonymous"})}class st{constructor(e){this._activeTextures={},this._renderer=e,this._createCanvas=e.type===se.WEBGPU}getTexture(e){return this.getTexturePromise(e)}getManagedTexture(e){const t=e.styleKey;if(this._activeTextures[t])return this._increaseReferenceCount(t),this._activeTextures[t].promise;const r=this._buildTexturePromise(e).then(i=>(this._activeTextures[t].texture=i,i));return this._activeTextures[t]={texture:null,promise:r,usageCount:1},r}getReferenceCount(e){var t;return((t=this._activeTextures[e])==null?void 0:t.usageCount)??null}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}decreaseReferenceCount(e){const t=this._activeTextures[e];t&&(t.usageCount--,t.usageCount===0&&(t.texture?this._cleanUp(t.texture):t.promise.then(r=>{t.texture=r,this._cleanUp(t.texture)}).catch(()=>{Y("HTMLTextSystem: Failed to clean texture")}),this._activeTextures[e]=null))}getTexturePromise(e){return this._buildTexturePromise(e)}async _buildTexturePromise(e){const{text:t,style:r,resolution:i,textureStyle:s}=e,n=X.get(Xe),a=mr(t,r),u=await yr(a),h=Wt(t,r,u,n),d=Math.ceil(Math.ceil(Math.max(1,h.width)+r.padding*2)*i),l=Math.ceil(Math.ceil(Math.max(1,h.height)+r.padding*2)*i),c=n.image,p=2;c.width=(d|0)+p,c.height=(l|0)+p;const y=vr(t,r,i,u,n);await Tr(c,y,fr()&&a.length>0);const x=c;let v;this._createCanvas&&(v=br(c,i));const _=it(v?v.canvas:x,c.width-p,c.height-p,i);return s&&(_.source.style=s),this._createCanvas&&(this._renderer.texture.initSource(_.source),V.returnCanvasAndContext(v)),X.return(n),_}returnTexturePromise(e){e.then(t=>{this._cleanUp(t)}).catch(()=>{Y("HTMLTextSystem: Failed to clean texture")})}_cleanUp(e){F.returnTexture(e,!0),e.source.resource=null,e.source.uploadMethodId="unknown"}destroy(){this._renderer=null;for(const e in this._activeTextures)this._activeTextures[e]&&this.returnTexturePromise(this._activeTextures[e].promise);this._activeTextures=null}}st.extension={type:[m.WebGLSystem,m.WebGPUSystem,m.CanvasSystem],name:"htmlText"};class wr extends Ae{constructor(e){super(),this._renderer=e,e.runners.resolutionChange.add(this)}resolutionChange(){const e=this.renderable;e._autoResolution&&e.onViewUpdate()}destroy(){const{canvasText:e}=this._renderer;e.getReferenceCount(this.currentKey)>0?e.decreaseReferenceCount(this.currentKey):this.texture&&e.returnTexture(this.texture),this._renderer.runners.resolutionChange.remove(this),this._renderer=null}}class nt{constructor(e){this._renderer=e}validateRenderable(e){const t=this._getGpuText(e),r=e.styleKey;return t.currentKey!==r?!0:e._didTextUpdate}addRenderable(e,t){const r=this._getGpuText(e);if(e._didTextUpdate){const i=e._autoResolution?this._renderer.resolution:e.resolution;(r.currentKey!==e.styleKey||e.resolution!==i)&&this._updateGpuText(e),e._didTextUpdate=!1,te(r,e)}this._renderer.renderPipes.batch.addToBatch(r,t)}updateRenderable(e){const t=this._getGpuText(e);t._batcher.updateElement(t)}_updateGpuText(e){const t=this._getGpuText(e);t.texture&&this._renderer.canvasText.decreaseReferenceCount(t.currentKey),e._resolution=e._autoResolution?this._renderer.resolution:e.resolution,t.texture=this._renderer.canvasText.getManagedTexture(e),t.currentKey=e.styleKey}_getGpuText(e){return e._gpuData[this._renderer.uid]||this.initGpuText(e)}initGpuText(e){const t=new wr(this._renderer);return t.currentKey="--",t.renderable=e,t.transform=e.groupTransform,t.bounds={minX:0,maxX:1,minY:0,maxY:0},t.roundPixels=this._renderer._roundPixels|e._roundPixels,e._gpuData[this._renderer.uid]=t,t}destroy(){this._renderer=null}}nt.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"text"};class at{constructor(e){this._activeTextures={},this._renderer=e}getTexture(e,t,r,i){typeof e=="string"&&(C("8.0.0","CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments"),e={text:e,style:r,resolution:t}),e.style instanceof D||(e.style=new D(e.style)),e.textureStyle instanceof O||(e.textureStyle=new O(e.textureStyle)),typeof e.text!="string"&&(e.text=e.text.toString());const{text:s,style:n,textureStyle:a}=e,u=e.resolution??this._renderer.resolution,{frame:h,canvasAndContext:d}=j.getCanvasAndContext({text:s,style:n,resolution:u}),l=it(d.canvas,h.width,h.height,u);if(a&&(l.source.style=a),n.trim&&(h.pad(n.padding),l.frame.copyFrom(h),l.frame.scale(1/u),l.updateUvs()),n.filters){const c=this._applyFilters(l,n.filters);return this.returnTexture(l),j.returnCanvasAndContext(d),c}return this._renderer.texture.initSource(l._source),j.returnCanvasAndContext(d),l}returnTexture(e){const t=e.source;t.resource=null,t.uploadMethodId="unknown",t.alphaMode="no-premultiply-alpha",F.returnTexture(e,!0)}renderTextToCanvas(){C("8.10.0","CanvasTextSystem.renderTextToCanvas: no longer supported, use CanvasTextSystem.getTexture instead")}getManagedTexture(e){e._resolution=e._autoResolution?this._renderer.resolution:e.resolution;const t=e.styleKey;if(this._activeTextures[t])return this._increaseReferenceCount(t),this._activeTextures[t].texture;const r=this.getTexture({text:e.text,style:e.style,resolution:e._resolution,textureStyle:e.textureStyle});return this._activeTextures[t]={texture:r,usageCount:1},r}decreaseReferenceCount(e){const t=this._activeTextures[e];t.usageCount--,t.usageCount===0&&(this.returnTexture(t.texture),this._activeTextures[e]=null)}getReferenceCount(e){var t;return((t=this._activeTextures[e])==null?void 0:t.usageCount)??0}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}_applyFilters(e,t){const r=this._renderer.renderTarget.renderTarget,i=this._renderer.filter.generateFilteredTexture({texture:e,filters:t});return this._renderer.renderTarget.bind(r,!1),i}destroy(){this._renderer=null;for(const e in this._activeTextures)this._activeTextures[e]&&this.returnTexture(this._activeTextures[e].texture);this._activeTextures=null}}at.extension={type:[m.WebGLSystem,m.WebGPUSystem,m.CanvasSystem],name:"canvasText"};T.add(Ge);T.add(ke);T.add(Le);T.add(ht);T.add($e);T.add(Ne);T.add(qe);T.add(at);T.add(nt);T.add(tt);T.add(st);T.add(rt);T.add(et);T.add(Qe);T.add(We);T.add(Ie);
