(()=>{var J={"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=style&index=0&id=1334c634&scoped=true&lang=css":(r,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>c});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),u=t.n(e),a=t("../../node_modules/css-loader/dist/runtime/api.js"),d=t.n(a),p=d()(u());p.push([r.id,`
.preload-transition[data-v-1334c634] {
    transition: none !important;
}
.settings-title[data-v-1334c634] {
    font-size: calc(1.1 * var(--vscode-font-size)); /* TODO: make this configurable */
    font-weight: bold;
    margin: 0;
    padding: 0;
}
.sub-pane[data-v-1334c634] {
    transition: max-height 0.5s, padding 0.5s;
    padding: 1rem;
    overflow: hidden;
}
[data-v-1334c634] .sub-pane div:first-child {
    margin-top: 0;
}
.collapse-leave-from[data-v-1334c634] {
    max-height: var(--max-height);
}
.collapse-leave-active[data-v-1334c634] {
    transition: max-height 0.5s, visibility 0.5s, padding 0.5s;
    visibility: hidden;
    padding: 0 1rem;
    max-height: 0;
}
.collapse-enter-active[data-v-1334c634] {
    transition: max-height 0.5s, padding 0.5s;
    max-height: 0;
    padding: 0 1rem;
}
.collapse-enter-to[data-v-1334c634] {
    max-height: var(--max-height);
    padding: 1rem;
}
.collapse-button[data-v-1334c634] {
    display: none;
}
input[type='checkbox'] ~ label .collapse-button[data-v-1334c634] {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: -4px 0 0 0;
    padding: 0;
    font-size: 2em;
    opacity: 0.8;
    color: var(--vscode-foreground);
    transition: transform 0.5s;
    transform: rotate(180deg);
    text-align: right;
}
input[type='checkbox']:checked ~ label .collapse-button[data-v-1334c634] {
    transform: rotate(90deg);
}
.settings-panel[data-v-1334c634] {
    background: var(--vscode-menu-background);
    margin: 16px 0;
}
.panel-header[data-v-1334c634] {
    display: flex;
    align-items: center;
    width: 100%;
}
`,"",{version:3,sources:["webpack://./src/webviews/components/settingsPanel.vue"],names:[],mappings:";AA4FA;IACI,2BAA2B;AAC/B;AACA;IACI,8CAA8C,EAAE,iCAAiC;IACjF,iBAAiB;IACjB,SAAS;IACT,UAAU;AACd;AACA;IACI,yCAAyC;IACzC,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,aAAa;AACjB;AACA;IACI,6BAA6B;AACjC;AACA;IACI,0DAA0D;IAC1D,kBAAkB;IAClB,eAAe;IACf,aAAa;AACjB;AACA;IACI,yCAAyC;IACzC,aAAa;IACb,eAAe;AACnB;AACA;IACI,6BAA6B;IAC7B,aAAa;AACjB;AAEA;IACI,aAAa;AACjB;AAEA;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,cAAc;IACd,YAAY;IACZ,+BAA+B;IAC/B,0BAA0B;IAC1B,yBAAyB;IACzB,iBAAiB;AACrB;AAEA;IACI,wBAAwB;AAC5B;AAEA;IACI,yCAAyC;IACzC,cAAc;AAClB;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf",sourcesContent:[`/*! * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. * SPDX-License-Identifier: Apache-2.0 */

<template>
    <div :id="id" class="settings-panel">
        <div class="header">
            <input
                v-bind:id="buttonId"
                style="display: none"
                type="checkbox"
                v-if="collapseable || startCollapsed"
                v-model="collapsed"
            />
            <label :for="buttonId" class="panel-header">
                <i class="preload-transition collapse-button icon icon-vscode-chevron-up" ref="icon"></i>
                <span class="settings-title">{{ title }}</span>
            </label>
            <p class="soft no-spacing mt-8">{{ description }}</p>
        </div>
        <transition
            @enter="updateHeight"
            @beforeLeave="updateHeight"
            :name="collapseable || startCollapsed ? 'collapse' : ''"
        >
            <div ref="subPane" v-show="!collapsed" class="sub-pane">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { WebviewApi } from 'vscode-webview'
import { defineComponent } from 'vue'
import saveData from '../mixins/saveData'

declare const vscode: WebviewApi<{ [key: string]: VueModel }>

let count = 0

interface VueModel {
    collapsed: boolean
    buttonId: string
    lastHeight?: number
    subPane?: HTMLElement
}

/**
 * Settings panel is header + body, which may be collapseable
 */
export default defineComponent({
    name: 'settings-panel',
    props: {
        id: String,
        startCollapsed: Boolean,
        collapseable: Boolean,
        title: String,
        description: String,
    },
    data() {
        count += 1
        return {
            collapsed: this.$props.startCollapsed ?? false,
            buttonId: \`settings-panel-button-\${count}\`,
            lastHeight: undefined,
        } as VueModel
    },
    mixins: [saveData],
    methods: {
        updateHeight(el: Element & { style?: CSSStyleDeclaration }) {
            if (el.style) {
                this.lastHeight = el.scrollHeight
                el.style.setProperty('--max-height', \`\${this.lastHeight}px\`)
            }
        },
    },
    mounted() {
        this.subPane = this.$refs.subPane as HTMLElement | undefined
        this.lastHeight = this.collapsed ? this.lastHeight : this.subPane?.scrollHeight ?? this.lastHeight

        // TODO: write 'initial-style' as a directive
        // it will force a style until the first render
        // or just use Vue's transition element, but this is pretty heavy
        this.$nextTick(() => {
            setTimeout(() => {
                ;(this.$refs.icon as HTMLElement | undefined)?.classList.remove('preload-transition')
            }, 100)
        })
    },
})
<\/script>

<style scoped>
.preload-transition {
    transition: none !important;
}
.settings-title {
    font-size: calc(1.1 * var(--vscode-font-size)); /* TODO: make this configurable */
    font-weight: bold;
    margin: 0;
    padding: 0;
}
.sub-pane {
    transition: max-height 0.5s, padding 0.5s;
    padding: 1rem;
    overflow: hidden;
}
:deep(.sub-pane div:first-child) {
    margin-top: 0;
}
.collapse-leave-from {
    max-height: var(--max-height);
}
.collapse-leave-active {
    transition: max-height 0.5s, visibility 0.5s, padding 0.5s;
    visibility: hidden;
    padding: 0 1rem;
    max-height: 0;
}
.collapse-enter-active {
    transition: max-height 0.5s, padding 0.5s;
    max-height: 0;
    padding: 0 1rem;
}
.collapse-enter-to {
    max-height: var(--max-height);
    padding: 1rem;
}

.collapse-button {
    display: none;
}

input[type='checkbox'] ~ label .collapse-button {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: -4px 0 0 0;
    padding: 0;
    font-size: 2em;
    opacity: 0.8;
    color: var(--vscode-foreground);
    transition: transform 0.5s;
    transform: rotate(180deg);
    text-align: right;
}

input[type='checkbox']:checked ~ label .collapse-button {
    transform: rotate(90deg);
}

.settings-panel {
    background: var(--vscode-menu-background);
    margin: 16px 0;
}

.panel-header {
    display: flex;
    align-items: center;
    width: 100%;
}
</style>
`],sourceRoot:""}]);const c=p},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!./src/lambda/vue/configEditor/samInvoke.css?vue&type=style&index=0&id=50682b8e&scoped=true&lang=css&external":(r,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>c});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),u=t.n(e),a=t("../../node_modules/css-loader/dist/runtime/api.js"),d=t.n(a),p=d()(u());p.push([r.id,`form[data-v-50682b8e] {
    padding: 15px;
}
.section-header[data-v-50682b8e] {
    margin: 0px;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
}
textarea[data-v-50682b8e] {
    max-width: 100%;
}
.config-item[data-v-50682b8e] {
    border-bottom: 1px solid var(--vscode-menubar-selectionBackground);
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 8px 0px;
}
.col2[data-v-50682b8e] {
    grid-column: 2;
}
.data-view[data-v-50682b8e] {
    display: none;
    border: dashed rgb(218, 31, 31) 1px;
    color: rgb(218, 31, 31);
}
.required[data-v-50682b8e] {
    color: red;
}
#form-title[data-v-50682b8e] {
    font-size: large;
    font-weight: bold;
}
.form-buttons[data-v-50682b8e] {
    margin-left: 20px;
}
.margin-bottom-16[data-v-50682b8e] {
    margin-bottom: 16px;
}
#target-type-selector[data-v-50682b8e] {
    margin-bottom: 15px;
    margin-left: 8px;
}
`,"",{version:3,sources:["webpack://./src/lambda/vue/configEditor/samInvoke.css"],names:[],mappings:"AAAA;IACI,aAAa;AACjB;AACA;IACI,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,2BAA2B;AAC/B;AACA;IACI,eAAe;AACnB;AACA;IACI,kEAAkE;IAClE,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;AACpB;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;IACb,mCAAmC;IACnC,uBAAuB;AAC3B;AACA;IACI,UAAU;AACd;AACA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,gBAAgB;AACpB",sourcesContent:[`form[data-v-50682b8e] {
    padding: 15px;
}
.section-header[data-v-50682b8e] {
    margin: 0px;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
}
textarea[data-v-50682b8e] {
    max-width: 100%;
}
.config-item[data-v-50682b8e] {
    border-bottom: 1px solid var(--vscode-menubar-selectionBackground);
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 8px 0px;
}
.col2[data-v-50682b8e] {
    grid-column: 2;
}
.data-view[data-v-50682b8e] {
    display: none;
    border: dashed rgb(218, 31, 31) 1px;
    color: rgb(218, 31, 31);
}
.required[data-v-50682b8e] {
    color: red;
}
#form-title[data-v-50682b8e] {
    font-size: large;
    font-weight: bold;
}
.form-buttons[data-v-50682b8e] {
    margin-left: 20px;
}
.margin-bottom-16[data-v-50682b8e] {
    margin-bottom: 16px;
}
#target-type-selector[data-v-50682b8e] {
    margin-bottom: 15px;
    margin-left: 8px;
}
`],sourceRoot:""}]);const c=p},"../../node_modules/css-loader/dist/runtime/api.js":r=>{"use strict";r.exports=function(l){var t=[];return t.toString=function(){return this.map(function(u){var a="",d=typeof u[5]<"u";return u[4]&&(a+="@supports (".concat(u[4],") {")),u[2]&&(a+="@media ".concat(u[2]," {")),d&&(a+="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {")),a+=l(u),d&&(a+="}"),u[2]&&(a+="}"),u[4]&&(a+="}"),a}).join("")},t.i=function(u,a,d,p,c){typeof u=="string"&&(u=[[null,u,void 0]]);var g={};if(d)for(var y=0;y<this.length;y++){var C=this[y][0];C!=null&&(g[C]=!0)}for(var s=0;s<u.length;s++){var m=[].concat(u[s]);d&&g[m[0]]||(typeof c<"u"&&(typeof m[5]>"u"||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=c),a&&(m[2]&&(m[1]="@media ".concat(m[2]," {").concat(m[1],"}")),m[2]=a),p&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=p):m[4]="".concat(p)),t.push(m))}},t}},"../../node_modules/css-loader/dist/runtime/sourceMaps.js":r=>{"use strict";r.exports=function(l){var t=l[1],e=l[3];if(!e)return t;if(typeof btoa=="function"){var u=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),d="/*# ".concat(a," */");return[t].concat([d]).join(`
`)}return[t].join(`
`)}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=script&lang=ts":(r,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>p});var e=t("vue"),u=t.n(e),a=t("./src/webviews/mixins/saveData.ts");let d=0;const p=(0,e.defineComponent)({name:"settings-panel",props:{id:String,startCollapsed:Boolean,collapseable:Boolean,title:String,description:String},data(){return d+=1,{collapsed:this.$props.startCollapsed??!1,buttonId:`settings-panel-button-${d}`,lastHeight:void 0}},mixins:[a.default],methods:{updateHeight(c){c.style&&(this.lastHeight=c.scrollHeight,c.style.setProperty("--max-height",`${this.lastHeight}px`))}},mounted(){this.subPane=this.$refs.subPane,this.lastHeight=this.collapsed?this.lastHeight:this.subPane?.scrollHeight??this.lastHeight,this.$nextTick(()=>{setTimeout(()=>{this.$refs.icon?.classList.remove("preload-transition")},100)})}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/lambda/vue/configEditor/samInvokeComponent.vue?vue&type=template&id=50682b8e&scoped=true&ts=true":(r,l,t)=>{"use strict";t.r(l),t.d(l,{render:()=>pt});var e=t("vue"),u=t.n(e);const a=n=>((0,e.pushScopeId)("data-v-50682b8e"),n=n(),(0,e.popScopeId)(),n),d={class:"invoke-lambda-form"},p=a(()=>(0,e.createElementVNode)("h1",null,"Edit SAM Debug Configuration",-1)),c={class:"container button-container",id:"invoke-button-container"},g=a(()=>(0,e.createElementVNode)("code",null,"type:aws-sam",-1)),y=a(()=>(0,e.createElementVNode)("strong",null,"Invoke",-1)),C=a(()=>(0,e.createElementVNode)("label",{for:"target-type-selector"},"Invoke Target Type",-1)),s=["value"],m={class:"data-view"},V={key:0,class:"target-code"},_={class:"config-item"},P=a(()=>(0,e.createElementVNode)("label",{for:"select-directory"},"Project Root",-1)),D={class:"data-view"},B={class:"config-item"},w=a(()=>(0,e.createElementVNode)("label",{for:"lambda-handler"},"Lambda Handler",-1)),L={class:"data-view"},v={class:"config-item"},E=a(()=>(0,e.createElementVNode)("label",{for:"runtime-selector"},"Runtime",-1)),f=a(()=>(0,e.createElementVNode)("option",{disabled:""},"Choose a runtime...",-1)),A=["value"],h={class:"data-view"},M={key:1,class:"target-template"},b=a(()=>(0,e.createElementVNode)("br",null,null,-1)),O={class:"config-item"},N=a(()=>(0,e.createElementVNode)("label",{for:"template-path"},"Template Path",-1)),R={class:"data-view"},S={class:"config-item"},k=a(()=>(0,e.createElementVNode)("label",{for:"logicalID"},"Resource (Logical Id)",-1)),H={class:"data-view"},$={class:"config-item"},F=a(()=>(0,e.createElementVNode)("label",{for:"runtime-selector"},"Runtime",-1)),z=a(()=>(0,e.createElementVNode)("option",{disabled:""},"Choose a runtime...",-1)),X=["value"],G={class:"data-view"},Y={key:2,class:"target-apigw"},Q=a(()=>(0,e.createElementVNode)("br",null,null,-1)),Z={class:"config-item"},q=a(()=>(0,e.createElementVNode)("label",{for:"template-path"},"Template Path",-1)),ee={class:"data-view"},te={class:"config-item"},ne=a(()=>(0,e.createElementVNode)("label",{for:"logicalID"},"Resource (Logical Id)",-1)),ae={class:"config-item"},se=a(()=>(0,e.createElementVNode)("label",{for:"runtime-selector"},"Runtime",-1)),oe=a(()=>(0,e.createElementVNode)("option",{disabled:""},"Choose a runtime...",-1)),le=["value"],ie={class:"data-view"},de={class:"config-item"},re=a(()=>(0,e.createElementVNode)("label",{for:"path"},"Path",-1)),ue={class:"config-item"},ce=a(()=>(0,e.createElementVNode)("label",{for:"http-method-selector"},"HTTP Method",-1)),me=a(()=>(0,e.createElementVNode)("option",{disabled:""},"Choose an HTTP Method",-1)),pe=["value"],ve={class:"data-view"},_e={class:"config-item"},ge=a(()=>(0,e.createElementVNode)("label",{for:"query-string"},"Query String",-1)),he={class:"config-item"},fe=a(()=>(0,e.createElementVNode)("label",{for:"headers"},"Headers",-1)),Ae=["data-invalid"],Ee={key:0,class:"input-validation col2"},ye={key:3},Ce=a(()=>(0,e.createElementVNode)("h3",null,"aws",-1)),be={class:"config-item"},Ve=a(()=>(0,e.createElementVNode)("label",{for:"awsConnection"},"Credentials:",-1)),Be={class:"config-item"},Ie=a(()=>(0,e.createElementVNode)("label",{for:"region"},"Region",-1)),Pe=a(()=>(0,e.createElementVNode)("h3",null,"lambda",-1)),Me={class:"config-item"},Ne=a(()=>(0,e.createElementVNode)("label",{for:""},"Environment Variables",-1)),Se=["data-invalid"],Te={key:0,class:"input-validation col2"},De={class:"config-item"},we=a(()=>(0,e.createElementVNode)("label",{for:"memory"},"Memory (MB)",-1)),Oe={class:"config-item"},ke=a(()=>(0,e.createElementVNode)("label",{for:"timeoutSec"},"Timeout (s)",-1)),je=a(()=>(0,e.createElementVNode)("h3",null,"sam",-1)),Le={class:"config-item"},Re=a(()=>(0,e.createElementVNode)("label",{for:"buildArguments"},"Build Arguments",-1)),Ue={class:"config-item"},xe=a(()=>(0,e.createElementVNode)("label",{for:"containerBuild"},"Container Build",-1)),We={class:"config-item"},Ke=a(()=>(0,e.createElementVNode)("label",{for:"dockerNetwork"},"Docker Network",-1)),Je={class:"config-item"},He=a(()=>(0,e.createElementVNode)("label",{for:"localArguments"},"Local Arguments",-1)),$e={class:"config-item"},Fe=a(()=>(0,e.createElementVNode)("label",{for:"skipNewImageCheck"},"Skip New Image Check",-1)),ze={class:"config-item"},Xe=a(()=>(0,e.createElementVNode)("label",{for:"templateParameters"},"Template - Parameters",-1)),Ge=["data-invalid"],Ye={key:0,class:"input-validation col2"},Qe=a(()=>(0,e.createElementVNode)("h3",null,"api",-1)),Ze={class:"config-item"},qe=a(()=>(0,e.createElementVNode)("label",{for:"querystring"},"Query String",-1)),et={class:"config-item"},tt=a(()=>(0,e.createElementVNode)("label",{for:"stageVariables"},"Stage Variables",-1)),nt=["data-invalid"],at={key:0,class:"input-validation col2"},st={class:"config-item"},ot=a(()=>(0,e.createElementVNode)("label",{for:"clientCerificateId"},"Client Certificate ID",-1)),lt={class:"config-item"},it=a(()=>(0,e.createElementVNode)("label",{for:"apiPayload"},"API Payload",-1)),dt=["data-invalid"],rt={key:0,class:"input-validation col2"},ut=a(()=>(0,e.createElementVNode)("br",null,null,-1)),ct={class:"data-view"},mt={key:0,class:"input-validation"};function pt(n,i,vt,_t,gt,ht){const U=(0,e.resolveComponent)("settings-panel");return(0,e.openBlock)(),(0,e.createElementBlock)("form",d,[p,(0,e.createElementVNode)("div",c,[(0,e.createElementVNode)("button",{class:"",onClick:i[0]||(i[0]=(0,e.withModifiers)((...o)=>n.launch&&n.launch(...o),["prevent"]))},"Invoke"),(0,e.createElementVNode)("button",{class:"form-buttons",onClick:i[1]||(i[1]=(0,e.withModifiers)((...o)=>n.loadConfig&&n.loadConfig(...o),["prevent"]))},"Load Existing Config"),(0,e.createElementVNode)("button",{class:"form-buttons",onClick:i[2]||(i[2]=(0,e.withModifiers)((...o)=>n.save&&n.save(...o),["prevent"]))},"Save")]),(0,e.createElementVNode)("p",null,[(0,e.createElementVNode)("em",null,[(0,e.createTextVNode)(" Using this form you can create, edit, and run launch-configs of "),g,(0,e.createTextVNode)(". When you "),y,(0,e.createTextVNode)(" the launch config, "+(0,e.toDisplayString)(n.company)+" Toolkit calls SAM CLI and attaches the debugger to the code running in a local Docker container. ",1)])]),(0,e.createVNode)(U,{id:"config-panel",title:"Configuration",description:""},{default:(0,e.withCtx)(()=>[C,(0,e.withDirectives)((0,e.createElementVNode)("select",{name:"target-types",id:"target-type-selector","onUpdate:modelValue":i[3]||(i[3]=o=>n.launchConfig.invokeTarget.target=o)},[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(n.targetTypes,(o,T)=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{value:o.value,key:T},(0,e.toDisplayString)(o.name),9,s))),128))],512),[[e.vModelSelect,n.launchConfig.invokeTarget.target]]),(0,e.createElementVNode)("span",m,(0,e.toDisplayString)(n.launchConfig.invokeTarget.target),1),n.launchConfig.invokeTarget.target==="code"?((0,e.openBlock)(),(0,e.createElementBlock)("div",V,[(0,e.createElementVNode)("div",_,[P,(0,e.withDirectives)((0,e.createElementVNode)("input",{id:"select-directory",type:"text","onUpdate:modelValue":i[4]||(i[4]=o=>n.launchConfig.invokeTarget.projectRoot=o),placeholder:"Enter a directory"},null,512),[[e.vModelText,n.launchConfig.invokeTarget.projectRoot]]),(0,e.createElementVNode)("span",D,"the selected directory: "+(0,e.toDisplayString)(n.launchConfig.invokeTarget.projectRoot),1)]),(0,e.createElementVNode)("div",B,[w,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text",placeholder:"Enter the lambda handler",name:"lambda-handler",id:"lambda-handler","onUpdate:modelValue":i[5]||(i[5]=o=>n.launchConfig.invokeTarget.lambdaHandler=o)},null,512),[[e.vModelText,n.launchConfig.invokeTarget.lambdaHandler]]),(0,e.createElementVNode)("span",L,"lamda handler :"+(0,e.toDisplayString)(n.launchConfig.invokeTarget.lambdaHandler),1)]),(0,e.createElementVNode)("div",v,[E,(0,e.withDirectives)((0,e.createElementVNode)("select",{name:"runtimeType","onUpdate:modelValue":i[6]||(i[6]=o=>n.launchConfig.lambda.runtime=o)},[f,((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(n.runtimes,(o,T)=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{value:o,key:T},(0,e.toDisplayString)(o),9,A))),128))],512),[[e.vModelSelect,n.launchConfig.lambda.runtime]]),(0,e.createElementVNode)("span",h,"runtime in data: "+(0,e.toDisplayString)(n.launchConfig.lambda.runtime),1)])])):n.launchConfig.invokeTarget.target==="template"?((0,e.openBlock)(),(0,e.createElementBlock)("div",M,[(0,e.createElementVNode)("button",{class:"margin-bottom-16",onClick:i[7]||(i[7]=(0,e.withModifiers)((...o)=>n.loadResource&&n.loadResource(...o),["prevent"]))},"Load Resource"),b,(0,e.createElementVNode)("div",O,[N,(0,e.withDirectives)((0,e.createElementVNode)("input",{id:"template-path-button",type:"text","onUpdate:modelValue":i[8]||(i[8]=o=>n.launchConfig.invokeTarget.templatePath=o),placeholder:"Enter the template path..."},null,512),[[e.vModelText,n.launchConfig.invokeTarget.templatePath]]),(0,e.createElementVNode)("span",R,"Template path from data: "+(0,e.toDisplayString)(n.launchConfig.invokeTarget.templatePath),1)]),(0,e.createElementVNode)("div",S,[k,(0,e.withDirectives)((0,e.createElementVNode)("input",{name:"template-logical-id",id:"template-logical-id",type:"text",placeholder:"Enter a resource","onUpdate:modelValue":i[9]||(i[9]=o=>n.launchConfig.invokeTarget.logicalId=o)},null,512),[[e.vModelText,n.launchConfig.invokeTarget.logicalId]]),(0,e.createElementVNode)("span",H," Logical Id from data: "+(0,e.toDisplayString)(n.launchConfig.invokeTarget.logicalId),1)]),(0,e.createElementVNode)("div",$,[F,(0,e.withDirectives)((0,e.createElementVNode)("select",{name:"runtimeType","onUpdate:modelValue":i[10]||(i[10]=o=>n.launchConfig.lambda.runtime=o)},[z,((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(n.runtimes,(o,T)=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{value:o,key:T},(0,e.toDisplayString)(o),9,X))),128))],512),[[e.vModelSelect,n.launchConfig.lambda.runtime]]),(0,e.createElementVNode)("span",G,"runtime in data: "+(0,e.toDisplayString)(n.launchConfig.lambda.runtime),1)])])):n.launchConfig.invokeTarget.target==="api"?((0,e.openBlock)(),(0,e.createElementBlock)("div",Y,[(0,e.createElementVNode)("button",{onClick:i[11]||(i[11]=(0,e.withModifiers)((...o)=>n.loadResource&&n.loadResource(...o),["prevent"]))},"Load Resource"),Q,(0,e.createElementVNode)("div",Z,[q,(0,e.withDirectives)((0,e.createElementVNode)("input",{id:"template-path-button",type:"text","onUpdate:modelValue":i[12]||(i[12]=o=>n.launchConfig.invokeTarget.templatePath=o),placeholder:"Enter the template path..."},null,512),[[e.vModelText,n.launchConfig.invokeTarget.templatePath]]),(0,e.createElementVNode)("span",ee,"Template path from data: "+(0,e.toDisplayString)(n.launchConfig.invokeTarget.templatePath),1)]),(0,e.createElementVNode)("div",te,[ne,(0,e.withDirectives)((0,e.createElementVNode)("input",{name:"template-logical-id",id:"template-logical-id",type:"text",placeholder:"Enter a resource","onUpdate:modelValue":i[13]||(i[13]=o=>n.launchConfig.invokeTarget.logicalId=o)},null,512),[[e.vModelText,n.launchConfig.invokeTarget.logicalId]])]),(0,e.createElementVNode)("div",ae,[se,(0,e.withDirectives)((0,e.createElementVNode)("select",{name:"runtimeType","onUpdate:modelValue":i[14]||(i[14]=o=>n.launchConfig.lambda.runtime=o)},[oe,((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(n.runtimes,(o,T)=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{value:o,key:T},(0,e.toDisplayString)(o),9,le))),128))],512),[[e.vModelSelect,n.launchConfig.lambda.runtime]]),(0,e.createElementVNode)("span",ie,"runtime in data: "+(0,e.toDisplayString)(n.launchConfig.lambda.runtime),1)]),(0,e.createElementVNode)("div",de,[re,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":i[15]||(i[15]=o=>n.launchConfig.api.path=o)},null,512),[[e.vModelText,n.launchConfig.api.path]])]),(0,e.createElementVNode)("div",ue,[ce,(0,e.withDirectives)((0,e.createElementVNode)("select",{name:"http-method","onUpdate:modelValue":i[16]||(i[16]=o=>n.launchConfig.api.httpMethod=o)},[me,((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(n.httpMethods,(o,T)=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{value:o.toLowerCase(),key:T},(0,e.toDisplayString)(o),9,pe))),128))],512),[[e.vModelSelect,n.launchConfig.api.httpMethod]]),(0,e.createElementVNode)("span",ve,(0,e.toDisplayString)(n.launchConfig.api.httpMethod),1)]),(0,e.createElementVNode)("div",_e,[ge,(0,e.withDirectives)((0,e.createElementVNode)("input",{name:"query-string",id:"query-string",type:"text",cols:"15",rows:"2",placeholder:"Enter a query","onUpdate:modelValue":i[17]||(i[17]=o=>n.launchConfig.api.querystring=o)},null,512),[[e.vModelText,n.launchConfig.api.querystring]])]),(0,e.createElementVNode)("div",he,[fe,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":i[18]||(i[18]=o=>n.headers.value=o),placeholder:"Enter as valid JSON","data-invalid":!!n.headers.errorMsg},null,8,Ae),[[e.vModelText,n.headers.value]]),n.headers.errorMsg?((0,e.openBlock)(),(0,e.createElementBlock)("div",Ee," Error parsing JSON: "+(0,e.toDisplayString)(n.headers.errorMsg),1)):(0,e.createCommentVNode)("v-if",!0)])])):((0,e.openBlock)(),(0,e.createElementBlock)("div",ye,"Select an Invoke Target"))]),_:1}),(0,e.createVNode)(U,{id:"more-fields-panel",title:"Additional Fields",description:"","start-collapsed":""},{default:(0,e.withCtx)(()=>[Ce,(0,e.createElementVNode)("div",be,[Ve,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":i[19]||(i[19]=o=>n.launchConfig.aws.credentials=o)},null,512),[[e.vModelText,n.launchConfig.aws.credentials]])]),(0,e.createElementVNode)("div",Be,[Ie,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":i[20]||(i[20]=o=>n.launchConfig.aws.region=o)},null,512),[[e.vModelText,n.launchConfig.aws.region]])]),Pe,(0,e.createElementVNode)("div",Me,[Ne,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text",placeholder:"Enter as valid JSON","onUpdate:modelValue":i[21]||(i[21]=o=>n.environmentVariables.value=o),"data-invalid":!!n.environmentVariables.errorMsg},null,8,Se),[[e.vModelText,n.environmentVariables.value]]),n.environmentVariables.errorMsg?((0,e.openBlock)(),(0,e.createElementBlock)("div",Te," Error parsing JSON: "+(0,e.toDisplayString)(n.environmentVariables.errorMsg),1)):(0,e.createCommentVNode)("v-if",!0)]),(0,e.createElementVNode)("div",De,[we,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"number","onUpdate:modelValue":i[22]||(i[22]=o=>n.launchConfig.lambda.memoryMb=o)},null,512),[[e.vModelText,n.launchConfig.lambda.memoryMb,void 0,{number:!0}]])]),(0,e.createElementVNode)("div",Oe,[ke,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"number","onUpdate:modelValue":i[23]||(i[23]=o=>n.launchConfig.lambda.timeoutSec=o)},null,512),[[e.vModelText,n.launchConfig.lambda.timeoutSec,void 0,{number:!0}]])]),(0,e.createCommentVNode)(` <div class="config-item">
                <label for="pathMappings">Path Mappings</label>
                <input type="text" v-model="launchConfig.lambda.pathMappings" >
            </div> `),je,(0,e.createElementVNode)("div",Le,[Re,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":i[24]||(i[24]=o=>n.launchConfig.sam.buildArguments=o),placeholder:"Enter as a comma separated list"},null,512),[[e.vModelText,n.launchConfig.sam.buildArguments]])]),(0,e.createElementVNode)("div",Ue,[xe,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"checkbox",name:"containerBuild",id:"containerBuild","onUpdate:modelValue":i[25]||(i[25]=o=>n.containerBuild=o)},null,512),[[e.vModelCheckbox,n.containerBuild]])]),(0,e.createElementVNode)("div",We,[Ke,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":i[26]||(i[26]=o=>n.launchConfig.sam.dockerNetwork=o)},null,512),[[e.vModelText,n.launchConfig.sam.dockerNetwork]])]),(0,e.createElementVNode)("div",Je,[He,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":i[27]||(i[27]=o=>n.launchConfig.sam.localArguments=o),placeholder:"Enter as a comma separated list"},null,512),[[e.vModelText,n.launchConfig.sam.localArguments]])]),(0,e.createElementVNode)("div",$e,[Fe,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"checkbox",name:"skipNewImageCheck",id:"skipNewImageCheck","onUpdate:modelValue":i[28]||(i[28]=o=>n.skipNewImageCheck=o)},null,512),[[e.vModelCheckbox,n.skipNewImageCheck]])]),(0,e.createElementVNode)("div",ze,[Xe,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":i[29]||(i[29]=o=>n.parameters.value=o),"data-invalid":!!n.parameters.errorMsg},null,8,Ge),[[e.vModelText,n.parameters.value]]),n.parameters.errorMsg?((0,e.openBlock)(),(0,e.createElementBlock)("div",Ye," Error parsing JSON: "+(0,e.toDisplayString)(n.parameters.errorMsg),1)):(0,e.createCommentVNode)("v-if",!0)]),Qe,(0,e.createElementVNode)("div",Ze,[qe,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":i[30]||(i[30]=o=>n.launchConfig.api.querystring=o)},null,512),[[e.vModelText,n.launchConfig.api.querystring]])]),(0,e.createElementVNode)("div",et,[tt,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":i[31]||(i[31]=o=>n.stageVariables.value=o),"data-invalid":!!n.stageVariables.errorMsg,placeholder:"Enter as valid JSON"},null,8,nt),[[e.vModelText,n.stageVariables.value]]),n.stageVariables.errorMsg?((0,e.openBlock)(),(0,e.createElementBlock)("div",at," Error parsing JSON: "+(0,e.toDisplayString)(n.stageVariables.errorMsg),1)):(0,e.createCommentVNode)("v-if",!0)]),(0,e.createElementVNode)("div",st,[ot,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":i[32]||(i[32]=o=>n.launchConfig.api.clientCertificateId=o)},null,512),[[e.vModelText,n.launchConfig.api.clientCertificateId]])]),(0,e.createElementVNode)("div",lt,[it,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":i[33]||(i[33]=o=>n.apiPayload.value=o),placeholder:"Enter as valid JSON","data-invalid":!!n.apiPayload.errorMsg},null,8,dt),[[e.vModelText,n.apiPayload.value]]),n.apiPayload.errorMsg?((0,e.openBlock)(),(0,e.createElementBlock)("div",rt," Error parsing JSON: "+(0,e.toDisplayString)(n.apiPayload.errorMsg),1)):(0,e.createCommentVNode)("v-if",!0)])]),_:1}),(0,e.createVNode)(U,{id:"payload-panel",title:"Payload",description:"","start-collapsed":""},{default:(0,e.withCtx)(()=>[(0,e.createElementVNode)("button",{class:"margin-bottom-16",onClick:i[34]||(i[34]=(0,e.withModifiers)((...o)=>n.loadPayload&&n.loadPayload(...o),["prevent"]))},"Load Sample Payload"),ut,(0,e.withDirectives)((0,e.createElementVNode)("textarea",{name:"lambda-payload",id:"lambda-payload",cols:"60",rows:"5","onUpdate:modelValue":i[35]||(i[35]=o=>n.payload.value=o)},null,512),[[e.vModelText,n.payload.value]]),(0,e.createElementVNode)("span",ct,"payload from data: "+(0,e.toDisplayString)(n.payload),1),n.payload.errorMsg?((0,e.openBlock)(),(0,e.createElementBlock)("div",mt,"Error parsing JSON: "+(0,e.toDisplayString)(n.payload.errorMsg),1)):(0,e.createCommentVNode)("v-if",!0)]),_:1})])}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=template&id=1334c634&scoped=true&ts=true":(r,l,t)=>{"use strict";t.r(l),t.d(l,{render:()=>V});var e=t("vue"),u=t.n(e);const a=_=>((0,e.pushScopeId)("data-v-1334c634"),_=_(),(0,e.popScopeId)(),_),d=["id"],p={class:"header"},c=["id"],g=["for"],y={class:"preload-transition collapse-button icon icon-vscode-chevron-up",ref:"icon"},C={class:"settings-title"},s={class:"soft no-spacing mt-8"},m={ref:"subPane",class:"sub-pane"};function V(_,P,D,B,w,L){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{id:_.id,class:"settings-panel"},[(0,e.createElementVNode)("div",p,[_.collapseable||_.startCollapsed?(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("input",{key:0,id:_.buttonId,style:{display:"none"},type:"checkbox","onUpdate:modelValue":P[0]||(P[0]=v=>_.collapsed=v)},null,8,c)),[[e.vModelCheckbox,_.collapsed]]):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("label",{for:_.buttonId,class:"panel-header"},[(0,e.createElementVNode)("i",y,null,512),(0,e.createElementVNode)("span",C,(0,e.toDisplayString)(_.title),1)],8,g),(0,e.createElementVNode)("p",s,(0,e.toDisplayString)(_.description),1)]),(0,e.createVNode)(e.Transition,{onEnter:_.updateHeight,onBeforeLeave:_.updateHeight,name:_.collapseable||_.startCollapsed?"collapse":"",persisted:""},{default:(0,e.withCtx)(()=>[(0,e.withDirectives)((0,e.createElementVNode)("div",m,[(0,e.renderSlot)(_.$slots,"default",{},void 0,!0)],512),[[e.vShow,!_.collapsed]])]),_:3},8,["onEnter","onBeforeLeave","name"])],8,d)}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!./src/lambda/vue/configEditor/samInvokeFrontend.ts?vue&type=script&lang=ts&external":(r,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>C});var e=t("vue"),u=t.n(e),a=t("./src/webviews/components/settingsPanel.vue"),d=t("./src/webviews/client.ts"),p=t("./src/webviews/mixins/saveData.ts");const c=d.WebviewClientFactory.create();function g(s){return{type:"aws-sam",request:"direct-invoke",name:"",aws:{credentials:"",region:"",...s?.aws?s.aws:{}},invokeTarget:{target:"template",templatePath:"",logicalId:"",lambdaHandler:"",projectRoot:"",...s?.invokeTarget},lambda:{runtime:s?.lambda?.runtime,memoryMb:void 0,timeoutSec:void 0,environmentVariables:{},...s?.lambda,payload:{json:s?.lambda?.payload?.json?s.lambda.payload.json:{},path:s?.lambda?.payload?.path?s.lambda.payload.path:""}},sam:{buildArguments:void 0,containerBuild:!1,dockerNetwork:"",localArguments:void 0,skipNewImageCheck:!1,...s?.sam?s.sam:{},template:{parameters:s?.sam?.template?.parameters?s.sam.template.parameters:{}}},api:{path:"",httpMethod:"get",clientCertificateId:"",querystring:"",headers:{},stageVariables:{},...s?.api?s.api:{},payload:{json:s?.api?.payload?.json?s.api.payload.json:{},path:s?.api?.payload?.path?s.api.payload.path:""}}}}function y(){return{containerBuild:!1,skipNewImageCheck:!1,launchConfig:g(),payload:{value:"",errorMsg:""},apiPayload:{value:"",errorMsg:""},environmentVariables:{value:"",errorMsg:""},parameters:{value:"",errorMsg:""},headers:{value:"",errorMsg:""},stageVariables:{value:"",errorMsg:""}}}const C=(0,e.defineComponent)({name:"sam-invoke",components:{settingsPanel:a.default},created(){c.init().then(s=>this.parseConfig(s),s=>{console.error("client.init failed: %s",s.message)}),c.getRuntimes().then(s=>{this.runtimes=s},s=>{console.error("client.getRuntimes failed: %s",s.message)}),c.getCompanyName().then(s=>{this.company=s},s=>{console.error("client.getCompanyName failed: %s",s.message)})},mixins:[p.default],data(){return{...y(),msg:"Hello",company:"",targetTypes:[{name:"Code",value:"code"},{name:"Template",value:"template"},{name:"API Gateway (Template)",value:"api"}],runtimes:[],httpMethods:["GET","POST","PUT","DELETE","HEAD","OPTIONS","PATCH"]}},methods:{resetJsonErrors(){this.payload.errorMsg="",this.environmentVariables.errorMsg="",this.headers.errorMsg="",this.stageVariables.errorMsg=""},launch(){const s=this.formatConfig();s&&c.invokeLaunchConfig(s).catch(m=>{console.error("invokeLaunchConfig failed: %s",m.message)})},save(){const s=this.formatConfig();s&&c.saveLaunchConfig(s).catch(m=>{console.error("saveLaunchConfig failed: %s",m.message)})},loadConfig(){c.loadSamLaunchConfig().then(s=>this.parseConfig(s),s=>{console.error("client.loadSamLaunchConfig failed: %s",s.message)})},parseConfig(s){if(!s)return;const m=this.company;this.clearForm(),this.launchConfig=g(s),s.lambda?.payload&&(this.payload.value=JSON.stringify(s.lambda.payload.json,void 0,4)),s.lambda?.environmentVariables&&(this.environmentVariables.value=JSON.stringify(s.lambda?.environmentVariables)),s.sam?.template?.parameters&&(this.parameters.value=JSON.stringify(s.sam?.template?.parameters)),s.api?.headers&&(this.headers.value=JSON.stringify(s.api?.headers)),s.api?.stageVariables&&(this.stageVariables.value=JSON.stringify(s.api?.stageVariables)),this.containerBuild=s.sam?.containerBuild??!1,this.skipNewImageCheck=s.sam?.skipNewImageCheck??!1,this.msg=`Loaded config ${s}`,this.company=m},loadPayload(){this.resetJsonErrors(),c.getSamplePayload().then(s=>{!s||(this.payload.value=JSON.stringify(JSON.parse(s),void 0,4))},s=>{console.error("client.getSamplePayload failed: %s",s.message)})},loadResource(){this.resetJsonErrors(),c.getTemplate().then(s=>{!s||(this.launchConfig.invokeTarget.target="template",this.launchConfig.invokeTarget.logicalId=s.logicalId,this.launchConfig.invokeTarget.templatePath=s.template)},s=>{console.error("client.getTemplate failed: %s",s.message)})},formatFieldToStringArray(s){if(!s)return;const m=/\s*,\s*/g;return s.trim().split(m)},formatStringtoJSON(s){if(s.errorMsg="",s.value)try{return JSON.parse(s.value)}catch(m){throw s.errorMsg=m.message,m}},formatConfig(){this.resetJsonErrors();let s,m,V,_,P,D;try{s=this.formatStringtoJSON(this.payload),m=this.formatStringtoJSON(this.environmentVariables),V=this.formatStringtoJSON(this.headers),_=this.formatStringtoJSON(this.stageVariables),P=this.formatStringtoJSON(this.parameters),D=this.formatStringtoJSON(this.apiPayload)}catch{return}const B=JSON.parse(JSON.stringify(this.launchConfig));return{...B,lambda:{...B.lambda,payload:{...B.payload,json:s},environmentVariables:m},sam:{...B.sam,buildArguments:this.formatFieldToStringArray(B.sam?.buildArguments?.toString()),localArguments:this.formatFieldToStringArray(B.sam?.localArguments?.toString()),containerBuild:this.containerBuild,skipNewImageCheck:this.skipNewImageCheck,template:{parameters:P}},api:B.api?{...B.api,headers:V,stageVariables:_,payload:{json:D}}:void 0}},clearForm(){const s=y();Object.keys(s).forEach(m=>this.$data[m]=s[m])}}})},"./src/webviews/client.ts":(r,l,t)=>{"use strict";t.r(l),t.d(l,{WebviewClientFactory:()=>e});class e{static registerGlobalCommands(){const a=new Event("remount");window.addEventListener("message",d=>{const{command:p}=d.data;p==="$clear"&&(vscode.setState({}),this.messageListeners.forEach(c=>this.removeListener(c)),window.dispatchEvent(a))})}static addListener(a){this.messageListeners.add(a),window.addEventListener("message",a)}static removeListener(a){this.messageListeners.delete(a),window.removeEventListener("message",a)}static sendRequest(a,d,p){const c=JSON.parse(JSON.stringify(p)),g=new Promise((y,C)=>{const s=V=>{const _=V.data;if(a===_.id)if(this.removeListener(s),window.clearTimeout(m),_.error===!0){const P=JSON.parse(_.data);C(new Error(P.message))}else _.event?(typeof p[0]!="function"&&C(new Error(`Expected frontend event handler to be a function: ${d}`)),y(this.registerEventHandler(d,p[0]))):y(_.data)},m=setTimeout(()=>{this.removeListener(s),C(new Error(`Timed out while waiting for response: id: ${a}, command: ${d}`))},3e5);this.addListener(s)});return vscode.postMessage({id:a,command:d,data:c}),g}static registerEventHandler(a,d){const p=c=>{const g=c.data;if(g.command===a){if(!g.event)throw new Error(`Expected backend handler to be an event emitter: ${a}`);d(g.data)}};return this.addListener(p),{dispose:()=>this.removeListener(p)}}static create(){return this.initialized||(this.initialized=!0,this.registerGlobalCommands()),new Proxy({},{set:()=>{throw new TypeError("Cannot set property to webview client")},get:(a,d)=>{if(typeof d!="string"){console.warn(`Tried to index webview client with non-string property: ${String(d)}`);return}if(d==="init"){const c=vscode.getState()??{};if(c.__once)return()=>Promise.resolve();vscode.setState(Object.assign(c,{__once:!0}))}const p=(this.counter++).toString();return(...c)=>this.sendRequest(p,d,c)}})}}e.counter=0,e.initialized=!1,e.messageListeners=new Set},"./src/webviews/mixins/saveData.ts":(r,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>a});const e=new Set;window.addEventListener("remount",()=>e.clear());const a={created(){if(this.$data===void 0)return;const d=vscode.getState()??{};this.$options._count=(this.$options._count??0)+1;const p=this.id??`${this.name??`DEFAULT-${e.size}`}-${this.$options._count}`;if(this.$options._unid=p,e.has(p)){console.warn(`Component "${p}" already exists. State-saving functionality will be disabled.`);return}e.add(p);const c=d[p]??{};Object.keys(this.$data).forEach(g=>{this.$data[g]=c[g]??this.$data[g]}),Object.keys(this.$data).forEach(g=>{this.$watch(g,y=>{const C=vscode.getState()??{},s=Object.assign(C[p]??{},{[g]:y!==void 0?JSON.parse(JSON.stringify(y)):void 0});vscode.setState(Object.assign(C,{[p]:s}))},{deep:!0})})}}},"../../node_modules/vue-loader/dist/exportHelper.js":(r,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=(t,e)=>{const u=t.__vccOpts||t;for(const[a,d]of e)u[a]=d;return u}},"./src/lambda/vue/configEditor/samInvokeComponent.vue":(r,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>c});var e=t("./src/lambda/vue/configEditor/samInvokeComponent.vue?vue&type=template&id=50682b8e&scoped=true&ts=true"),u=t("./src/lambda/vue/configEditor/samInvokeFrontend.ts?vue&type=script&lang=ts&external"),a=t("./src/lambda/vue/configEditor/samInvoke.css?vue&type=style&index=0&id=50682b8e&scoped=true&lang=css&external"),d=t("../../node_modules/vue-loader/dist/exportHelper.js");const c=(0,d.default)(u.default,[["render",e.render],["__scopeId","data-v-50682b8e"],["__file","src/lambda/vue/configEditor/samInvokeComponent.vue"]])},"./src/webviews/components/settingsPanel.vue":(r,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>c});var e=t("./src/webviews/components/settingsPanel.vue?vue&type=template&id=1334c634&scoped=true&ts=true"),u=t("./src/webviews/components/settingsPanel.vue?vue&type=script&lang=ts"),a=t("./src/webviews/components/settingsPanel.vue?vue&type=style&index=0&id=1334c634&scoped=true&lang=css"),d=t("../../node_modules/vue-loader/dist/exportHelper.js");const c=(0,d.default)(u.default,[["render",e.render],["__scopeId","data-v-1334c634"],["__file","src/webviews/components/settingsPanel.vue"]])},"./src/lambda/vue/configEditor/samInvokeFrontend.ts?vue&type=script&lang=ts&external":(r,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!./src/lambda/vue/configEditor/samInvokeFrontend.ts?vue&type=script&lang=ts&external")},"./src/webviews/components/settingsPanel.vue?vue&type=script&lang=ts":(r,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=script&lang=ts")},"./src/lambda/vue/configEditor/samInvokeComponent.vue?vue&type=template&id=50682b8e&scoped=true&ts=true":(r,l,t)=>{"use strict";t.r(l),t.d(l,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/lambda/vue/configEditor/samInvokeComponent.vue?vue&type=template&id=50682b8e&scoped=true&ts=true")},"./src/webviews/components/settingsPanel.vue?vue&type=template&id=1334c634&scoped=true&ts=true":(r,l,t)=>{"use strict";t.r(l),t.d(l,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=template&id=1334c634&scoped=true&ts=true")},"./src/webviews/components/settingsPanel.vue?vue&type=style&index=0&id=1334c634&scoped=true&lang=css":(r,l,t)=>{"use strict";t.r(l);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=style&index=0&id=1334c634&scoped=true&lang=css"),u=t.n(e),a={};for(const d in e)d!=="default"&&(a[d]=()=>e[d]);t.d(l,a)},"./src/lambda/vue/configEditor/samInvoke.css?vue&type=style&index=0&id=50682b8e&scoped=true&lang=css&external":(r,l,t)=>{"use strict";t.r(l);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!./src/lambda/vue/configEditor/samInvoke.css?vue&type=style&index=0&id=50682b8e&scoped=true&lang=css&external"),u=t.n(e),a={};for(const d in e)d!=="default"&&(a[d]=()=>e[d]);t.d(l,a)},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=style&index=0&id=1334c634&scoped=true&lang=css":(r,l,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=style&index=0&id=1334c634&scoped=true&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[r.id,e,""]]),e.locals&&(r.exports=e.locals);var u=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,a=u("14af8423",e,!1,{})},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!./src/lambda/vue/configEditor/samInvoke.css?vue&type=style&index=0&id=50682b8e&scoped=true&lang=css&external":(r,l,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!./src/lambda/vue/configEditor/samInvoke.css?vue&type=style&index=0&id=50682b8e&scoped=true&lang=css&external");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[r.id,e,""]]),e.locals&&(r.exports=e.locals);var u=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,a=u("60789300",e,!1,{})},"../../node_modules/vue-style-loader/lib/addStylesClient.js":(r,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>V});var e=t("../../node_modules/vue-style-loader/lib/listToStyles.js"),u=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},d=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,c=0,g=!1,y=function(){},C=null,s="data-vue-ssr-id",m=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function V(v,E,f,A){g=f,C=A||{};var h=(0,e.default)(v,E);return _(h),function(b){for(var O=[],N=0;N<h.length;N++){var R=h[N],S=a[R.id];S.refs--,O.push(S)}b?(h=(0,e.default)(v,b),_(h)):h=[];for(var N=0;N<O.length;N++){var S=O[N];if(S.refs===0){for(var k=0;k<S.parts.length;k++)S.parts[k]();delete a[S.id]}}}}function _(v){for(var E=0;E<v.length;E++){var f=v[E],A=a[f.id];if(A){A.refs++;for(var h=0;h<A.parts.length;h++)A.parts[h](f.parts[h]);for(;h<f.parts.length;h++)A.parts.push(D(f.parts[h]));A.parts.length>f.parts.length&&(A.parts.length=f.parts.length)}else{for(var M=[],h=0;h<f.parts.length;h++)M.push(D(f.parts[h]));a[f.id]={id:f.id,refs:1,parts:M}}}}function P(){var v=document.createElement("style");return v.type="text/css",d.appendChild(v),v}function D(v){var E,f,A=document.querySelector("style["+s+'~="'+v.id+'"]');if(A){if(g)return y;A.parentNode.removeChild(A)}if(m){var h=c++;A=p||(p=P()),E=w.bind(null,A,h,!1),f=w.bind(null,A,h,!0)}else A=P(),E=L.bind(null,A),f=function(){A.parentNode.removeChild(A)};return E(v),function(b){if(b){if(b.css===v.css&&b.media===v.media&&b.sourceMap===v.sourceMap)return;E(v=b)}else f()}}var B=function(){var v=[];return function(E,f){return v[E]=f,v.filter(Boolean).join(`
`)}}();function w(v,E,f,A){var h=f?"":A.css;if(v.styleSheet)v.styleSheet.cssText=B(E,h);else{var M=document.createTextNode(h),b=v.childNodes;b[E]&&v.removeChild(b[E]),b.length?v.insertBefore(M,b[E]):v.appendChild(M)}}function L(v,E){var f=E.css,A=E.media,h=E.sourceMap;if(A&&v.setAttribute("media",A),C.ssrId&&v.setAttribute(s,E.id),h&&(f+=`
/*# sourceURL=`+h.sources[0]+" */",f+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(h))))+" */"),v.styleSheet)v.styleSheet.cssText=f;else{for(;v.firstChild;)v.removeChild(v.firstChild);v.appendChild(document.createTextNode(f))}}},"../../node_modules/vue-style-loader/lib/listToStyles.js":(r,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>e});function e(u,a){for(var d=[],p={},c=0;c<a.length;c++){var g=a[c],y=g[0],C=g[1],s=g[2],m=g[3],V={id:u+":"+c,css:C,media:s,sourceMap:m};p[y]?p[y].parts.push(V):d.push(p[y]={id:y,parts:[V]})}return d}},vue:r=>{"use strict";r.exports=Vue}},x={};function I(r){var l=x[r];if(l!==void 0)return l.exports;var t=x[r]={id:r,exports:{}};return J[r](t,t.exports,I),t.exports}I.n=r=>{var l=r&&r.__esModule?()=>r.default:()=>r;return I.d(l,{a:l}),l},I.d=(r,l)=>{for(var t in l)I.o(l,t)&&!I.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:l[t]})},I.o=(r,l)=>Object.prototype.hasOwnProperty.call(r,l),I.r=r=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var j={};(()=>{"use strict";I.r(j);var r=I("vue"),l=I.n(r),t=I("./src/lambda/vue/configEditor/samInvokeComponent.vue");const e=()=>(0,r.createApp)(t.default),u=e();u.mount("#vue-app"),window.addEventListener("remount",()=>{u.unmount(),e().mount("#vue-app")})})();var W=this;for(var K in j)W[K]=j[K];j.__esModule&&Object.defineProperty(W,"__esModule",{value:!0})})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
/*!**********************************************!*\
  !*** ./src/lambda/vue/configEditor/index.ts ***!
  \**********************************************/

//# sourceMappingURL=index.js.map