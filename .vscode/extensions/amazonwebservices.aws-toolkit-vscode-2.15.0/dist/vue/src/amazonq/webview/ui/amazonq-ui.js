var Oe=Object.defineProperty;var Ue=(ce,ie,V)=>ie in ce?Oe(ce,ie,{enumerable:!0,configurable:!0,writable:!0,value:V}):ce[ie]=V;var K=(ce,ie,V)=>(Ue(ce,typeof ie!="symbol"?ie+"":ie,V),V),Pe=(ce,ie,V)=>{if(!ie.has(ce))throw TypeError("Cannot "+V)};var Te=(ce,ie,V)=>{if(ie.has(ce))throw TypeError("Cannot add the same private member more than once");ie instanceof WeakSet?ie.add(ce):ie.set(ce,V)};var Me=(ce,ie,V)=>(Pe(ce,ie,"access private method"),V);(()=>{var ce={"../../node_modules/@aws/mynah-ui/dist/main.js":Q=>{(function(U,B){Q.exports=B()})(self,()=>(()=>{var U={9137:(l,a,t)=>{"use strict";t.d(a,{Z:()=>s});var r=t(7537),n=t.n(r),i=t(3645),e=t.n(i)()(n());e.push([l.id,':root{--mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;font-size:var(--vscode-font-size, 13px);font-family:var(--mynah-font-family, "system-ui");--mynah-max-width: 2560px;--mynah-sizing-base: 0.25rem;--mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);--mynah-sizing-1: var(--mynah-sizing-base);--mynah-sizing-2: calc(var(--mynah-sizing-base) * 2);--mynah-sizing-3: calc(var(--mynah-sizing-base) * 3);--mynah-sizing-4: calc(var(--mynah-sizing-base) * 4);--mynah-sizing-5: calc(var(--mynah-sizing-base) * 5);--mynah-sizing-6: calc(var(--mynah-sizing-base) * 6);--mynah-sizing-7: calc(var(--mynah-sizing-base) * 7);--mynah-sizing-8: calc(var(--mynah-sizing-base) * 8);--mynah-sizing-9: calc(var(--mynah-sizing-base) * 9);--mynah-sizing-10: calc(var(--mynah-sizing-base) * 10);--mynah-sizing-11: calc(var(--mynah-sizing-base) * 11);--mynah-sizing-12: calc(var(--mynah-sizing-base) * 12);--mynah-sizing-13: calc(var(--mynah-sizing-base) * 13);--mynah-sizing-14: calc(var(--mynah-sizing-base) * 14);--mynah-sizing-15: calc(var(--mynah-sizing-base) * 15);--mynah-sizing-16: calc(var(--mynah-sizing-base) * 16);--mynah-sizing-17: calc(var(--mynah-sizing-base) * 17);--mynah-sizing-18: calc(var(--mynah-sizing-base) * 18);--mynah-chat-wrapper-spacing: var(--mynah-sizing-4);--mynah-button-border-width: 1px;--mynah-border-width: 1px;--mynah-color-text-default: var(--vscode-foreground);--mynah-color-text-strong: var(--vscode-input-foreground);--mynah-color-text-weak: var(--vscode-disabledForeground);--mynah-color-text-link: var(--vscode-textLink-foreground);--mynah-color-text-input: var(--vscode-input-foreground);--mynah-color-bg: var(--vscode-sideBar-background);--mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));--mynah-color-light: rgba(0, 0, 0, 0.05);--mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));--mynah-color-highlight: rgba(255, 179, 0, 0.25);--mynah-color-highlight-text: #886411;--mynah-color-toggle: var(--vscode-sideBar-background);--mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);--mynah-color-syntax-bg: var(--vscode-terminal-dropBackground);--mynah-color-syntax-variable: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-function: var(--vscode-gitDecoration-modifiedResourceForeground);--mynah-color-syntax-operator: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-attr-value: var(--vscode-debugIcon-stepBackForeground);--mynah-color-syntax-attr: var(--vscode-debugTokenExpression-string);--mynah-color-syntax-property: var(--vscode-terminal-ansiCyan);--mynah-color-syntax-comment: var(--vscode-debugConsole-sourceForeground);--mynah-color-syntax-code: var(--vscode-terminal-ansiBlue);--mynah-syntax-code-font-family: var(--vscode-editor-font-family);--mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));--mynah-color-status-info: var(--vscode-editorInfo-foreground);--mynah-color-status-success: var(--vscode-terminal-ansiGreen);--mynah-color-status-warning: var(--vscode-editorWarning-foreground);--mynah-color-status-error: var(--vscode-editorError-foreground);--mynah-color-button: var(--vscode-button-background);--mynah-color-button-reverse: var(--vscode-button-foreground);--mynah-color-alternate: var(--vscode-button-secondaryBackground);--mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);--mynah-card-bg: var(--vscode-editor-background);--mynah-shadow-button: none;--mynah-shadow-card: none;--mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);--mynah-font-size-xxsmall: 0.75rem;--mynah-font-size-xsmall: 0.85rem;--mynah-font-size-small: 0.95rem;--mynah-font-size-medium: 1rem;--mynah-font-size-large: 1.125rem;--mynah-line-height: 1.25rem;--mynah-syntax-code-line-height: 1.25rem;--mynah-card-radius: var(--mynah-sizing-2);--mynah-input-radius: var(--mynah-sizing-1);--mynah-card-radius-corner: 0;--mynah-button-radius: var(--mynah-sizing-1);--mynah-bottom-panel-transition: all 850ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);--mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);--mynah-short-transition-rev: all 580ms cubic-bezier(0.35, 1, 0, 1);--mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);--mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1), transform 800ms cubic-bezier(0.2, 1.05, 0, 1)}@keyframes horizontal-roll{0%{background-position:0% bottom}100%{background-position:-200% bottom}}@keyframes bounce{from{transform:translate3d(0, 0, 0)}to{transform:translate3d(0, calc(-1 * var(--mynah-sizing-2)), 0)}}@keyframes spinner-spin{to{transform:rotate(360deg)}}@keyframes typewriter{0%{visibility:hidden;opacity:0}1%{visibility:visible;opacity:0}100%{opacity:1;visibility:visible}}@keyframes typewriter-visibility-only{to{visibility:visible}}#mynah-wrapper{display:flex;flex-flow:column nowrap;margin:0 auto;width:100%;max-width:var(--mynah-max-width);box-sizing:border-box;height:100%;position:relative;overflow:hidden;justify-content:stretch;align-items:stretch}#mynah-wrapper>.mynah-ui-tab-contents-wrapper{flex:1;position:relative}#mynah-wrapper>.mynah-ui-tab-contents-wrapper:first-child>.mynah-chat-wrapper{display:flex}button.mynah-button{border:none;min-width:var(--mynah-sizing-8);height:var(--mynah-sizing-8);border-radius:var(--mynah-button-radius);background-color:var(--mynah-color-button);color:var(--mynah-color-button-reverse);box-shadow:var(--mynah-shadow-button);cursor:pointer;transition:var(--mynah-very-short-transition);display:inline-flex;justify-content:center;align-items:center;outline:none;overflow:hidden;position:relative;transform:translate3d(0, 0, 0) scale(1.00001);padding:0;filter:brightness(0.9);opacity:.85}button.mynah-button.mynah-bottom-block-close-button{position:absolute;align-self:flex-end;transform:translate3d(var(--mynah-sizing-2), calc(-100% - var(--mynah-sizing-6)), 0px);background-color:var(--mynah-card-bg);color:var(--mynah-color-text-default)}button.mynah-button[disabled=disabled]{opacity:.25 !important;pointer-events:none}button.mynah-button.mynah-button-secondary{background-color:transparent;color:inherit;box-shadow:none;opacity:.75;height:var(--mynah-sizing-6)}button.mynah-button.mynah-button-secondary:focus-visible,button.mynah-button.mynah-button-secondary:hover{opacity:1}button.mynah-button.mynah-button-secondary:active{box-shadow:none}button.mynah-button:focus-visible,button.mynah-button:hover{filter:brightness(1);opacity:1}button.mynah-button:active{filter:brightness(0.9);opacity:.85}button.mynah-button.mynah-icon-button{width:var(--mynah-sizing-10);height:var(--mynah-sizing-10);border-radius:0}button.mynah-button>span{white-space:nowrap;font-size:var(--mynah-font-size-medium);max-width:35vw;transition:var(--mynah-very-long-transition);overflow:hidden;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis;padding-left:var(--mynah-sizing-3);padding-right:var(--mynah-sizing-3)}button.mynah-button>i+span{padding-left:var(--mynah-sizing-base)}.mynah-form-input-wrapper{position:relative;display:flex;box-sizing:border-box;gap:var(--mynah-sizing-2);flex-flow:column nowrap}.mynah-form-input-wrapper[disabled] .mynah-form-input{opacity:.5 !important}.mynah-form-input-wrapper[disabled],.mynah-form-input-wrapper[disabled] *{pointer-events:none !important}.mynah-form-input-wrapper>.mynah-form-input-label>.mynah-ui-form-item-mandatory-title{display:inline-flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;gap:var(--mynah-sizing-1)}.mynah-form-input-wrapper>.mynah-form-input-label>.mynah-ui-form-item-mandatory-title>.mynah-ui-icon{color:var(--mynah-color-status-warning);opacity:.75;font-size:75%}.mynah-form-input-wrapper .mynah-form-input-container{position:relative;display:flex;box-sizing:border-box;justify-content:flex-end;align-items:center}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input{width:100%;left:0;color:var(--mynah-color-text-default);border-radius:var(--mynah-input-radius);-webkit-appearance:none;appearance:none;text-indent:1px;text-overflow:clip;outline:none}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input::placeholder{color:var(--mynah-color-text-weak);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input option.empty-option{font-style:italic;opacity:.5}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input:not(.no-border){padding:var(--mynah-sizing-3);border:var(--mynah-border-width) solid var(--mynah-color-border-default);background-color:var(--mynah-card-bg)}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper{display:inline-flex;flex-flow:row nowrap;justify-content:center;align-items:center}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper:not(:last-child){margin-right:var(--mynah-sizing-4)}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label{display:inline-flex;flex-flow:row nowrap;justify-content:center;align-items:center;position:relative;gap:var(--mynah-sizing-1);cursor:pointer}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>input:checked+.mynah-form-input-radio-check{border-color:var(--mynah-color-button)}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>input:checked+.mynah-form-input-radio-check>.mynah-ui-icon{transform:scale(0.75);color:var(--mynah-card-bg);opacity:1}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>input:checked+.mynah-form-input-radio-check::after{transform:scale(1);background-color:var(--mynah-color-button);opacity:1}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>.mynah-form-input-radio-check{position:relative;transition:var(--mynah-bottom-panel-transition);width:var(--mynah-sizing-6);height:var(--mynah-sizing-6);border-radius:var(--mynah-sizing-3);overflow:hidden;box-sizing:border-box;border:var(--mynah-border-width) solid var(--mynah-color-border-default);display:inline-flex;flex-flow:row nowrap;justify-content:center;align-items:center}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>.mynah-form-input-radio-check>.mynah-ui-icon{position:relative;transition:inherit;transform:scale(0);transform-origin:center center;color:var(--mynah-color-button);z-index:10}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-form-input-radio-wrapper>.mynah-form-input-radio-label>.mynah-form-input-radio-check::after{content:"";transition:inherit;position:absolute;top:calc(0*var(--mynah-border-width));right:calc(0*var(--mynah-border-width));bottom:calc(0*var(--mynah-border-width));left:calc(0*var(--mynah-border-width));background-color:var(--mynah-color-border-default);transform:scale(0.5);transform-origin:center center;opacity:0;border-radius:inherit;z-index:5}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-feedback-form-stars-container{transition:var(--mynah-short-transition-rev);transform-origin:right bottom;display:inline-flex;flex-flow:row nowrap}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-feedback-form-stars-container>.mynah-feedback-form-star{cursor:pointer;padding-right:var(--mynah-sizing-1);color:var(--mynah-color-button);font-size:1.5rem;transition:var(--mynah-very-short-transition)}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-feedback-form-stars-container>.mynah-feedback-form-star>.mynah-ui-icon{transition:var(--mynah-very-short-transition);opacity:.4;transform:translate3d(0, 0, 0) scale(0.6)}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-feedback-form-stars-container[selected-star]:not(:hover)>:not(.mynah-feedback-form-star.selected~.mynah-feedback-form-star)>.mynah-ui-icon,.mynah-form-input-wrapper .mynah-form-input-container>.mynah-form-input>.mynah-feedback-form-stars-container:hover>:not(.mynah-feedback-form-star:hover~.mynah-feedback-form-star)>.mynah-ui-icon{opacity:1;transform:translate3d(0, 0, 0) scale(1)}.mynah-form-input-wrapper .mynah-form-input-container>textarea.mynah-form-input{font-family:var(--mynah-font-family);resize:none;font-size:var(--mynah-font-size-medium);color:var(--mynah-color-text-input);outline:none}.mynah-form-input-wrapper .mynah-form-input-container>.mynah-select-handle{position:absolute;color:var(--mynah-color-text-weak);pointer-events:none;transform:translateX(-100%)}.mynah-chat-item-form-items-container{display:flex;flex-flow:column nowrap;gap:var(--mynah-sizing-5);overflow:hidden;padding-bottom:var(--mynah-sizing-1)}.mynah-chat-item-buttons-container{display:flex;flex-flow:row-reverse wrap;gap:var(--mynah-sizing-2);overflow:hidden;padding-top:var(--mynah-sizing-1);padding-bottom:var(--mynah-sizing-1);justify-content:flex-end;align-items:center}.mynah-chat-item-buttons-container.mynah-chat-item-buttons-container-use-real-buttons{justify-content:flex-start}.mynah-toggle-container{flex-flow:row nowrap;max-width:100%;overflow:hidden;align-items:center;position:relative;background:var(--mynah-color-toggle);color:var(--mynah-color-toggle-reverse);justify-content:flex-start;overflow-y:hidden;overflow-x:auto;display:flex}.mynah-toggle-container>span{overflow:hidden;height:100%;min-width:var(--mynah-sizing-8);max-width:calc(3*var(--mynah-sizing-15));flex-shrink:0}.mynah-toggle-container>span>.mynah-toggle-option{display:none}.mynah-toggle-container>span>.mynah-toggle-option:not(:first-child)+.mynah-toggle-option-label{margin-left:calc(-1*var(--mynah-sizing-1))}.mynah-toggle-container>span>.mynah-toggle-option:not(:checked)+.mynah-toggle-option-label.indication:after{content:"";position:absolute;top:50%;margin-top:calc(-1*var(--mynah-sizing-half));left:var(--mynah-sizing-2);height:var(--mynah-sizing-1);width:var(--mynah-sizing-1);background-color:var(--mynah-color-status-success);border-radius:var(--mynah-sizing-1);border:1px solid var(--mynah-color-text-weak);opacity:.75}.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label{cursor:pointer;pointer-events:all;position:relative;z-index:100;padding:0 var(--mynah-sizing-3) 0 var(--mynah-sizing-5);height:100%;box-sizing:border-box;display:inline-flex;overflow:hidden;justify-content:stretch;align-items:center;color:var(--mynah-color-text-weak);border-right:1px solid var(--mynah-color-border-default);border-top:1px solid transparent;background-color:var(--mynah-color-bg);opacity:.75;max-width:100%}.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label,.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label *{user-select:none}.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label>span{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;display:block}.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label>.mynah-toggle-close-button{margin-left:var(--mynah-sizing-3);font-size:var(--mynah-font-size-xsmall);min-width:1em}.mynah-toggle-container>span>.mynah-toggle-option:checked+.mynah-toggle-option-label{border-top-color:var(--mynah-color-button);color:var(--mynah-color-text-default);opacity:1;background-color:var(--mynah-color-tab-active)}.mynah-toggle-container>span>.mynah-toggle-option[disabled=disabled]{pointer-events:none !important}.mynah-toggle-container>span>.mynah-toggle-option[disabled=disabled]+.mynah-toggle-option-label{pointer-events:none !important;opacity:.25}.mynah-toggle-container.mynah-toggle-direction-vertical{flex-flow:column nowrap;gap:var(--mynah-sizing-3)}.mynah-toggle-disabled-tooltip-container{max-width:30vw;display:inline-block;padding:var(--mynah-sizing-3);font-size:80%;opacity:.85}.mynah-ui-icon{font-style:normal;font-weight:normal;display:inline-flex;width:1em;height:1em;font-variant:normal;text-transform:none;-webkit-mask-size:100%;mask-size:100%;-webkit-mask-position:center center;mask-position:center center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;color:inherit;background-color:currentColor}.mynah-ui-icon>span{display:none}.mynah-nav-tabs-wrapper{border-top:var(--mynah-button-border-width) solid var(--mynah-color-border-default);background-color:var(--mynah-color-bg);display:flex;align-items:center;overflow:hidden;z-index:100;min-height:var(--mynah-sizing-10);max-height:var(--mynah-sizing-10);position:relative}.mynah-nav-tabs-wrapper:after{content:"";position:absolute;left:0;right:0;bottom:0;width:auto;height:var(--mynah-button-border-width);background-color:var(--mynah-color-border-default)}.mynah-nav-tabs-wrapper>.mynah-toggle-container{height:100%;background:none;box-sizing:border-box}.mynah-nav-tabs-wrapper>.mynah-toggle-container>span{white-space:nowrap}.mynah-nav-tabs-wrapper:empty{display:none}.mynah-nav-tabs-wrapper.mynah-nav-tabs-loading,.mynah-nav-tabs-wrapper.mynah-nav-tabs-loading *{pointer-events:none}.mynah-nav-tabs-max-reached-overlay{min-width:max(20vw,100px);max-width:90vw}.mynah-overlay>.mynah-overlay-container .mynah-card.mynah-nav-tabs-close-confirmation-overlay>.mynah-nav-tabs-close-confirmation-buttons-wrapper{display:flex;flex-flow:row nowrap;max-width:15vw;gap:var(--mynah-sizing-3)}.mynah-overlay>.mynah-overlay-container .mynah-card.mynah-nav-tabs-close-confirmation-overlay>.mynah-nav-tabs-close-confirmation-buttons-wrapper>.mynah-button{pointer-events:all !important}.mynah-overlay>.mynah-overlay-container .mynah-card.mynah-nav-tabs-close-confirmation-overlay>.mynah-nav-tabs-close-confirmation-buttons-wrapper>.mynah-button.mynah-nav-tabs-close-confirmation-close-button{border:var(--mynah-border-width) solid var(--mynah-color-border-default);color:var(--mynah-color-text-default);background-color:transparent}.mynah-overlay>.mynah-overlay-container .mynah-card.mynah-nav-tabs-close-confirmation-overlay>.mynah-nav-tabs-close-confirmation-buttons-wrapper>.mynah-button.mynah-nav-tabs-close-confirmation-close-button:hover{border-color:var(--mynah-color-text-default)}.mynah-card{text-decoration:none;outline:none;position:relative;transition:var(--mynah-short-transition-rev);box-sizing:border-box;display:flex;flex-flow:column nowrap;gap:var(--mynah-sizing-3);transform:translate3d(0, 0, 0);flex:auto 0 0;width:100%;overflow:hidden;border-radius:var(--mynah-card-radius);box-shadow:var(--mynah-shadow-card)}.mynah-card.padding-none{padding:0;border-radius:0}.mynah-card.padding-small{padding:var(--mynah-sizing-1)}.mynah-card.padding-medium{padding:var(--mynah-sizing-3)}.mynah-card.padding-large{padding:var(--mynah-sizing-5)}.mynah-card.background{background-color:var(--mynah-card-bg)}.mynah-card.border{border:var(--mynah-border-width) solid var(--mynah-color-border-default)}.mynah-card>*{z-index:10;position:relative}.mynah-card>.mynah-source-link-header{display:flex;justify-content:space-between;align-items:center;opacity:1;gap:var(--mynah-sizing-2);transition:var(--mynah-very-short-transition)}.mynah-card>.mynah-source-link-header>.mynah-source-thumbnail{font-style:normal;font-weight:normal;display:none;width:var(--mynah-sizing-8);height:var(--mynah-sizing-8);font-variant:normal;text-transform:none;border:var(--mynah-border-width) solid var(--mynah-color-border-default);border-radius:100%;background-size:85%;background-clip:content-box;background-position:center center;background-repeat:no-repeat;align-self:flex-start;box-sizing:border-box;background-color:var(--mynah-card-bg);position:relative;overflow:hidden}.mynah-card>.mynah-source-link-header>.mynah-source-thumbnail:after{content:"";pointer-events:none;box-sizing:border-box;position:absolute;top:0;left:0;right:0;bottom:0;width:auto;height:auto;border:2px solid var(--mynah-card-bg);border-radius:100%}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper{flex:1 1 0;display:flex;flex-flow:column nowrap;align-items:flex-start;gap:var(--mynah-sizing-half);max-width:100%;overflow:hidden;cursor:pointer}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper:hover>.mynah-source-link-title>.mynah-source-link-expand-icon{opacity:.75;align-self:baseline}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-title{font-size:var(--mynah-font-size-medium);font-weight:500;color:var(--mynah-color-text-strong);width:100%;display:inline-flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start;gap:var(--mynah-sizing-2);white-space:normal;text-overflow:ellipsis;text-decoration:none;outline:none;overflow:hidden}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-title>.mynah-source-link-expand-icon{transition:var(--mynah-short-transition-rev);opacity:0;color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-xsmall);display:inline;padding:var(--mynah-sizing-1)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url{font-size:var(--mynah-font-size-xsmall);font-weight:300;color:var(--mynah-color-text-link);white-space:nowrap;text-overflow:ellipsis;text-decoration:none;outline:none;overflow:hidden;max-width:100%;position:relative;padding-bottom:var(--mynah-sizing-1);display:inline-block;transition:var(--mynah-short-transition-rev)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url:after{content:"";position:relative;display:block;bottom:0;left:0;width:100%;height:1px;border-radius:var(--mynah-sizing-half);background-color:currentColor;transform:translate3d(-30%, 0, 0);transition:var(--mynah-short-transition-rev);opacity:0}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url:hover:after{transform:translate3d(0, 0, 0);opacity:1}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url>span:not(:last-child):after{content:">";margin-left:var(--mynah-sizing-1);margin-right:var(--mynah-sizing-1)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url>span:nth-child(3)~span:not(:last-child){display:none}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url>span:last-child{font-weight:bold}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url>span:nth-child(3):not(:last-child):after{content:"> ... >"}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block{display:flex;flex-flow:row wrap;align-items:center;justify-content:flex-start;gap:var(--mynah-sizing-1);margin-bottom:var(--mynah-sizing-half)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block:empty{display:none}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item{display:inline-flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start;gap:var(--mynah-sizing-1);padding:calc(var(--mynah-sizing-half)*3);border:var(--mynah-border-width) solid var(--mynah-color-border-default);border-radius:var(--mynah-button-radius);opacity:.75}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item>.mynah-icon{opacity:.5;font-size:var(--mynah-font-size-medium);color:var(--mynah-color-text-weak)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item>.mynah-title-meta-block-item-text{font-size:var(--mynah-font-size-xxsmall);color:var(--mynah-color-text-weak)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item>.mynah-title-meta-block-item-text::first-letter{text-transform:capitalize}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item.approved-answer{border-color:green;position:relative}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item.approved-answer:before{content:"";border-radius:var(--mynah-button-radius);position:absolute;top:0;left:0;right:0;bottom:0;background-color:green;opacity:.04}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item.approved-answer>.mynah-icon{opacity:1;color:green;border-radius:var(--mynah-button-radius);width:var(--mynah-sizing-3);height:var(--mynah-sizing-3)}.mynah-card>.mynah-card-votes-wrapper{align-items:center;gap:var(--mynah-sizing-2);display:flex;align-items:center;justify-content:flex-end;border-top:1px solid var(--mynah-color-border-default);padding-top:var(--mynah-sizing-3);font-size:var(--mynah-font-size-small)}.mynah-card>.mynah-card-votes-wrapper>span.mynah-feedback-thanks{overflow:hidden}.mynah-card>.mynah-card-votes-wrapper>.mynah-button>span{padding:0;font-size:var(--mynah-font-size-small);color:var(--mynah-color-text-link)}.mynah-card>.mynah-card-votes-wrapper>.mynah-vote-text{color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-small)}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote{position:relative;overflow:visible;display:inline-flex;align-items:center;box-sizing:border-box;gap:var(--mynah-sizing-3)}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-radio{display:none}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-label{z-index:10;cursor:pointer;font-size:var(--mynah-font-size-small);transition:var(--mynah-short-transition);width:var(--mynah-sizing-5);height:var(--mynah-sizing-5);display:inline-flex;justify-content:center;align-items:center;color:var(--mynah-color-text-weak);opacity:.5}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-label>*{pointer-events:none}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-label>i{height:calc(var(--mynah-sizing-6) + var(--mynah-sizing-half))}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-up-radio:checked~.mynah-vote-up{color:var(--mynah-color-text-default);opacity:1}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-down-radio:checked~.mynah-vote-down{color:var(--mynah-color-text-default);opacity:1}.mynah-card-body{flex:1;overflow:hidden;position:relative;display:block;line-height:var(--mynah-line-height)}.mynah-card-body img{max-width:100%;border-radius:var(--mynah-card-radius);vertical-align:middle}.mynah-card-body a{pointer-events:bounding-box;color:var(--mynah-color-text-link)}.mynah-card-body>*:not(pre){font-size:var(--mynah-font-size-medium)}.mynah-card-body span[start][end]{display:none}.mynah-card-body>p:first-child,.mynah-card-body>p:first-child h1:first-child,.mynah-card-body>p:first-child h2:first-child,.mynah-card-body>p:first-child h3:first-child,.mynah-card-body>p:first-child h4:first-child,.mynah-card-body>p:first-child h5:first-child{margin-top:0}.mynah-card-body>p:first-child:last-of-type,.mynah-card-body>p p:first-child{margin:0}.mynah-card-body>*:not(div):not(pre),.mynah-card-body>div>*:not(div):not(pre){margin-block-start:.75em;margin-block-end:.75em;padding-bottom:1px !important;user-select:text}.mynah-card-body>*:not(div):not(pre):first-child,.mynah-card-body>div>*:not(div):not(pre):first-child{margin-block-start:0}.mynah-card-body>*:not(div):not(pre):empty,.mynah-card-body>div>*:not(div):not(pre):empty{display:none}.mynah-card-body>p:last-of-type,.mynah-card-body>div>p:last-of-type{margin-block-end:0}.mynah-card-body mark[reference-tracker],.mynah-card-body>div mark[reference-tracker]{background-color:var(--mynah-color-highlight);color:inherit;cursor:help}.mynah-card-body .amzn-mynah-search-result-highlight,.mynah-card-body>div .amzn-mynah-search-result-highlight{background-color:var(--mynah-color-highlight);color:var(--mynah-color-highlight-text)}.mynah-card-body .amzn-mynah-search-result-ellipsis,.mynah-card-body>div .amzn-mynah-search-result-ellipsis{display:inline-block;position:relative;padding-left:var(--mynah-sizing-2);margin-top:var(--mynah-sizing-1);margin-bottom:var(--mynah-sizing-1);font-size:calc(1em + var(--mynah-sizing-1)) !important;user-select:none;cursor:default;height:var(--mynah-sizing-7)}.mynah-card-body .amzn-mynah-search-result-ellipsis:before,.mynah-card-body>div .amzn-mynah-search-result-ellipsis:before{pointer-events:none;content:"";width:calc(1em + var(--mynah-sizing-2));height:calc(1em + var(--mynah-sizing-2));position:absolute;left:0;top:0;background-color:currentColor;opacity:.1;border-radius:var(--mynah-sizing-1)}#mynah-feedback-form-wrapper{display:flex;flex-flow:column nowrap;position:absolute;bottom:0;left:var(--mynah-sizing-2);right:var(--mynah-sizing-2);width:auto;box-sizing:border-box;z-index:9999999;opacity:0;transform:translate3d(0, 5vh, 0);transition:var(--mynah-bottom-panel-transition);overflow:visible}#mynah-feedback-form-wrapper:before{transition:all 400ms cubic-bezier(0.25, 0, 0, 1);content:"";position:absolute;right:calc(-1*var(--mynah-sizing-2));bottom:0;left:0;width:100vw;height:100vh;background-color:#000;opacity:0;pointer-events:none;transform:translate3d(0, 0, 0) scale(2);transform-origin:center center;z-index:-1}#mynah-feedback-form-wrapper>.mynah-bottom-block-close-button{transform:translate3d(calc(-1 * var(--mynah-sizing-1)), calc(-100% - var(--mynah-sizing-3)), 0px)}#mynah-feedback-form-wrapper+#mynah-wrapper{transition:var(--mynah-bottom-panel-transition)}#mynah-feedback-form-wrapper:not(.mynah-feedback-form-show),#mynah-feedback-form-wrapper:not(.mynah-feedback-form-show) *{pointer-events:none !important}#mynah-feedback-form-wrapper.mynah-feedback-form-show{opacity:1;transform:translate3d(0, 0, 0)}#mynah-feedback-form-wrapper.mynah-feedback-form-show:before{opacity:.15}#mynah-feedback-form-wrapper.mynah-feedback-form-show+#mynah-wrapper{transform:translate3d(0, 0px, 0) scale(0.95);transform-origin:top center;opacity:.25}#mynah-feedback-form-wrapper.mynah-feedback-form-show+#mynah-wrapper,#mynah-feedback-form-wrapper.mynah-feedback-form-show+#mynah-wrapper *{pointer-events:none !important}.mynah-feedback-form{pointer-events:all;box-sizing:border-box;transition:var(--mynah-short-transition-rev);transform:translate3d(0, 0, 0);display:flex;flex-flow:column;gap:var(--mynah-sizing-4);align-items:stretch;transform-origin:right bottom;z-index:10;position:relative;border:var(--mynah-button-border-width) solid var(--mynah-color-border-default);border-top-right-radius:var(--mynah-card-radius);border-top-left-radius:var(--mynah-card-radius);border-bottom:none;box-shadow:0px -25px 20px -25px rgba(0,0,0,.15);background-color:var(--mynah-color-bg);padding:var(--mynah-sizing-4);min-height:20vh}.mynah-feedback-form>.mynah-card-body{flex:initial}.mynah-feedback-form>.mynah-feedback-form-header{display:flex;box-sizing:border-box;align-items:center}.mynah-feedback-form>.mynah-feedback-form-header>h4{flex:1;margin:0}.mynah-feedback-form>.mynah-feedback-form-comment{background-color:transparent;padding:var(--mynah-sizing-3);border:var(--mynah-border-width) solid var(--mynah-color-border-default);resize:none;width:100%;height:100px;max-height:25vh;border-radius:var(--mynah-input-radius);font-size:var(--mynah-font-size-small);outline:none;color:var(--mynah-color-text-input);background-color:var(--mynah-card-bg);box-sizing:border-box;font-family:inherit}.mynah-feedback-form>.mynah-feedback-form-select-wrapper{position:relative;display:flex;box-sizing:border-box;padding:var(--mynah-sizing-3);justify-content:flex-end;align-items:center}.mynah-feedback-form>.mynah-feedback-form-select-wrapper>.mynah-feedback-form-select{position:absolute;width:100%;left:0;color:var(--mynah-color-text-default);border-radius:var(--mynah-input-radius);padding:var(--mynah-sizing-3);border:var(--mynah-border-width) solid var(--mynah-color-border-default);background-color:var(--mynah-card-bg);-webkit-appearance:none;appearance:none;text-indent:1px;text-overflow:clip;outline:none}.mynah-feedback-form>.mynah-feedback-form-select-wrapper>.mynah-feedback-form-select-handle{color:var(--mynah-color-text-weak);pointer-events:none}.mynah-feedback-form>.mynah-feedback-form-buttons-container{display:flex;justify-content:flex-end;align-items:center;gap:var(--mynah-sizing-1);box-sizing:border-box}.mynah-overlay{position:fixed;left:0;top:0;width:100%;height:100%;overflow:hidden;box-sizing:border-box;pointer-events:none;z-index:1000000}.mynah-overlay.mynah-overlay-dim-outside:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--mynah-color-bg);transition:var(--mynah-short-transition-rev-opacity);opacity:.45}.mynah-overlay>.mynah-overlay-container{--overlayLeftPos: calc(-1 * var(--mynah-sizing-1));--overlayTopPos: 0;--overlayInnerHorizontalOrigin: left;--overlayInnerVerticalOrigin: top;position:absolute;display:block;overflow:visible;border-radius:var(--mynah-card-radius);max-width:calc(100vw - var(--mynah-sizing-8)) !important;transform:translate3d(var(--overlayLeftPos), var(--overlayTopPos), 0)}.mynah-overlay>.mynah-overlay-container .mynah-card,.mynah-overlay>.mynah-overlay-container .mynah-card *{pointer-events:none !important}.mynah-overlay>.mynah-overlay-container .mynah-card .mynah-syntax-highlighter-copy-buttons,.mynah-overlay>.mynah-overlay-container .mynah-card * .mynah-syntax-highlighter-copy-buttons{display:none}.mynah-overlay>.mynah-overlay-container .mynah-card .mynah-syntax-highlighter-copy-buttons~*:last-child,.mynah-overlay>.mynah-overlay-container .mynah-card * .mynah-syntax-highlighter-copy-buttons~*:last-child{margin-bottom:0 !important}.mynah-overlay>.mynah-overlay-container.background:before{content:"";background-color:transparent;transition:var(--mynah-short-transition-rev);position:absolute;top:0;left:0;right:0;bottom:0;width:auto;height:auto;pointer-events:none;box-sizing:border-box;opacity:0;border:var(--mynah-button-border-width) solid var(--mynah-color-border-default);z-index:100;box-shadow:var(--mynah-shadow-overlay);transform-origin:left bottom;border-radius:inherit}.mynah-overlay>.mynah-overlay-container.background:after{content:"";position:absolute;width:var(--mynah-sizing-8);height:var(--mynah-sizing-8);left:0;top:0;opacity:0;border:var(--mynah-sizing-4);background-color:var(--mynah-card-bg);border-radius:inherit;transition:var(--mynah-short-transition-rev);transition-delay:20ms}.mynah-overlay>.mynah-overlay-container.horizontal-direction-to-left,.mynah-overlay>.mynah-overlay-container.horizontal-direction-from-end-to-left{--overlayLeftPos: -100%;--overlayInnerHorizontalOrigin: right}.mynah-overlay>.mynah-overlay-container.horizontal-direction-to-left:before,.mynah-overlay>.mynah-overlay-container.horizontal-direction-from-end-to-left:before{transform-origin:right center}.mynah-overlay>.mynah-overlay-container.horizontal-direction-to-left:after,.mynah-overlay>.mynah-overlay-container.horizontal-direction-from-end-to-left:after{left:calc(100% - var(--mynah-sizing-4))}.mynah-overlay>.mynah-overlay-container.horizontal-direction-at-center{--overlayInnerHorizontalOrigin: center;--overlayLeftPos: -50%}.mynah-overlay>.mynah-overlay-container.horizontal-direction-at-center:after{left:calc(50% - var(--mynah-sizing-4))}.mynah-overlay>.mynah-overlay-container.vertical-direction-to-top,.mynah-overlay>.mynah-overlay-container.vertical-direction-from-end-to-top{--overlayTopPos: -100%;--overlayInnerVerticalOrigin: bottom}.mynah-overlay>.mynah-overlay-container.vertical-direction-to-top:after,.mynah-overlay>.mynah-overlay-container.vertical-direction-from-end-to-top:after{top:calc(100% - var(--mynah-sizing-4))}.mynah-overlay>.mynah-overlay-container.vertical-direction-at-center{--overlayInnerVerticalOrigin: center;--overlayTopPos: -50%}.mynah-overlay>.mynah-overlay-container.vertical-direction-at-center:after{top:calc(50% - var(--mynah-sizing-4))}.mynah-overlay>.mynah-overlay-container>.mynah-overlay-inner-container{display:inline-block;overflow:hidden;z-index:10;position:relative;transform:translate3d(0, 0, 0) scale(0.85);transform-origin:var(--overlayInnerHorizontalOrigin) var(--overlayInnerVerticalOrigin);transition:var(--mynah-short-transition-rev);width:100%}.mynah-overlay>.mynah-overlay-container:before{transform:translate3d(0, 0, 0) scale(0.85);transition:var(--mynah-short-transition-rev)}.mynah-overlay>.mynah-overlay-container>.mynah-overlay-inner-container,.mynah-overlay>.mynah-overlay-container:before{opacity:0;transition-delay:0ms}.mynah-overlay:not(.mynah-overlay-open),.mynah-overlay:not(.mynah-overlay-open) *{pointer-events:none !important}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container>.mynah-overlay-inner-container{transform:translate3d(0, 0, 0) scale(1)}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container:before{transform:translate3d(0, 0, 0) scale(1);transition-delay:50ms;opacity:1}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container>.mynah-overlay-inner-container{transition-delay:20ms}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container>.mynah-overlay-inner-container{opacity:1}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container:after{transition-delay:0ms;left:0;top:0;width:100%;height:100%;opacity:1}.mynah-overlay.mynah-overlay-open.mynah-overlay-close-on-outside-click{pointer-events:all}.mynah-notification{display:inline-flex;flex-flow:row nowrap;align-items:flex-start;justify-content:flex-start;gap:var(--mynah-sizing-3);padding:var(--mynah-sizing-5);overflow:hidden;position:relative}.mynah-notification.mynah-notification-clickable{pointer-events:all;cursor:pointer}.mynah-notification>.mynah-ui-icon{font-size:var(--mynah-sizing-6)}.mynah-notification>.mynah-ui-icon-ok-circled{color:var(--mynah-color-status-success)}.mynah-notification>.mynah-ui-icon-info{color:var(--mynah-color-status-info)}.mynah-notification>.mynah-ui-icon-warning{color:var(--mynah-color-status-warning)}.mynah-notification>.mynah-ui-icon-error{color:var(--mynah-color-status-error)}.mynah-notification>.mynah-notification-container{flex:1;max-width:50vw;min-width:200px;display:inline-flex;flex-flow:column nowrap;align-items:flex-start;justify-content:flex-start;gap:var(--mynah-sizing-3);overflow:hidden;position:relative}.mynah-notification>.mynah-notification-container>.mynah-notification-title{margin:0}.mynah-notification>.mynah-notification-container>.mynah-notification-title:empty{display:none}.mynah-notification>.mynah-notification-container>.mynah-notification-content{font-size:var(--mynah-font-size-small);display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:flex-start;gap:var(--mynah-sizing-2)}.mynah-notification>.mynah-notification-container>.mynah-notification-content>.mynah-button{align-self:stretch;background-color:var(--mynah-color-alternate);color:var(--mynah-color-alternate-reverse)}.mynah-syntax-highlighter{display:flex;flex-flow:column nowrap;box-sizing:border-box;overflow:hidden;margin:var(--mynah-sizing-1) 0;background-color:var(--mynah-card-bg);max-width:100%;border:var(--mynah-border-width) solid var(--mynah-color-border-default);position:relative;border-radius:var(--mynah-input-radius);line-height:normal;color:var(--mynah-color-text-default)}.mynah-syntax-highlighter+*:not(:empty){margin-top:var(--mynah-sizing-2)}.mynah-syntax-highlighter:before,.mynah-syntax-highlighter>.line-numbers-rows:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--mynah-color-syntax-bg);opacity:.2;pointer-events:none;user-select:none}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons{display:flex;align-items:center;justify-content:flex-end;padding:var(--mynah-sizing-half);padding-left:var(--mynah-sizing-3);order:256000;box-sizing:border-box;margin:0;margin-block:0 !important;position:relative;border-top:1px solid var(--mynah-color-border-default)}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--mynah-color-border-default);opacity:.25}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons>.mynah-syntax-highlighter-language{flex:1;font-size:var(--mynah-font-size-xsmall);display:inline-block;opacity:.65;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons .mynah-button{min-width:var(--mynah-sizing-6);height:calc(var(--mynah-sizing-6) + var(--mynah-sizing-half))}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons .mynah-button *{font-size:var(--mynah-font-size-xsmall);color:var(--mynah-color-text-strong)}.mynah-syntax-highlighter.mynah-inline-code{display:inline-flex;max-width:100%;line-height:normal;padding:0 !important;margin:0;margin-block-start:0;margin-block-end:0;overflow:visible;border:none;color:var(--mynah-color-syntax-attr);margin-left:2px;margin-right:2px;padding-bottom:1px !important;margin-bottom:-1px;background-color:transparent !important}.mynah-syntax-highlighter.mynah-inline-code>pre{padding:0}.mynah-syntax-highlighter.mynah-inline-code:after{content:"";position:absolute;box-sizing:border-box;top:0;height:100%;left:-2px;width:calc(100% + 4px);border-radius:calc(var(--mynah-card-radius)/2);border:var(--mynah-border-width) solid var(--mynah-color-border-default);background-color:var(--mynah-card-bg);z-index:-1}.mynah-syntax-highlighter.mynah-inline-code:before{left:-2px;width:calc(100% + 4px);border-radius:calc(var(--mynah-card-radius)/2);box-sizing:border-box}.mynah-syntax-highlighter>pre{padding:var(--mynah-sizing-2);margin:0;overflow-x:auto;overflow-y:hidden;position:relative}.mynah-syntax-highlighter>pre *,.mynah-syntax-highlighter>pre{font-size:var(--mynah-syntax-code-font-size) !important;font-family:var(--mynah-syntax-code-font-family) !important}.mynah-syntax-highlighter>pre code{color:var(--mynah-color-syntax-code);filter:brightness(0.95);white-space:pre;background-color:inherit}.mynah-syntax-highlighter>pre>code,.mynah-syntax-highlighter>pre{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;tab-size:4;hyphens:none}.mynah-syntax-highlighter>pre>code::selection,.mynah-syntax-highlighter>pre::selection{text-shadow:none;background:#b3d4fc}.mynah-syntax-highlighter>pre .token.comment,.mynah-syntax-highlighter>pre .token.prolog,.mynah-syntax-highlighter>pre .token.doctype,.mynah-syntax-highlighter>pre .token.cdata{color:var(--mynah-color-syntax-comment)}.mynah-syntax-highlighter>pre .token.punctuation{color:currentColor}.mynah-syntax-highlighter>pre .token.namespace{opacity:.7}.mynah-syntax-highlighter>pre .token.property,.mynah-syntax-highlighter>pre .token.tag,.mynah-syntax-highlighter>pre .token.boolean,.mynah-syntax-highlighter>pre .token.number,.mynah-syntax-highlighter>pre .token.constant,.mynah-syntax-highlighter>pre .token.symbol,.mynah-syntax-highlighter>pre .token.deleted{color:var(--mynah-color-syntax-property)}.mynah-syntax-highlighter>pre .token.selector,.mynah-syntax-highlighter>pre .token.attr-name,.mynah-syntax-highlighter>pre .token.string,.mynah-syntax-highlighter>pre .token.char,.mynah-syntax-highlighter>pre .token.builtin,.mynah-syntax-highlighter>pre .token.inserted{color:var(--mynah-color-syntax-attr)}.mynah-syntax-highlighter>pre .token.operator,.mynah-syntax-highlighter>pre .token.entity,.mynah-syntax-highlighter>pre .token.url,.mynah-syntax-highlighter>pre .language-css .token.string,.mynah-syntax-highlighter>pre .style .token.string{color:var(--mynah-color-syntax-operator)}.mynah-syntax-highlighter>pre .token.atrule,.mynah-syntax-highlighter>pre .token.attr-value,.mynah-syntax-highlighter>pre .token.class-name,.mynah-syntax-highlighter>pre .token.keyword{color:var(--mynah-color-syntax-attr-value)}.mynah-syntax-highlighter>pre .token.function{color:var(--mynah-color-syntax-function);font-weight:500}.mynah-syntax-highlighter>pre .token.regex,.mynah-syntax-highlighter>pre .token.important,.mynah-syntax-highlighter>pre .token.variable{color:var(--mynah-color-syntax-variable);font-weight:500}.mynah-syntax-highlighter>pre .token.important,.mynah-syntax-highlighter>pre .token.bold{font-weight:bold}.mynah-syntax-highlighter>pre .token.italic{font-style:italic}.mynah-syntax-highlighter>pre .token.entity{cursor:help}.mynah-syntax-highlighter>pre.line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber;position:relative}.mynah-syntax-highlighter>.line-numbers-rows{position:absolute;background-color:inherit;top:var(--mynah-sizing-2);font-size:100%;left:0;width:var(--mynah-sizing-12);overflow:hidden;text-overflow:clip;letter-spacing:-1px;border-right:1px solid var(--mynah-color-border-default)}.mynah-syntax-highlighter>.line-numbers-rows>span,.mynah-syntax-highlighter>.line-numbers-rows{pointer-events:none;user-select:none}.mynah-syntax-highlighter>.line-numbers-rows>span{display:block;color:var(--mynah-color-border-default);padding-right:.8em;text-align:right}.mynah-ui-syntax-highlighter-highlight-tooltip{max-width:80vw;min-width:10vw;max-height:80vh;background-color:var(--mynah-card-bg);border-radius:var(--mynah-card-radius);border:var(--mynah-border-width) solid var(--mynah-color-border-default);padding:var(--mynah-sizing-5)}.mynah-ui-syntax-highlighter-highlight-tooltip .mynah-card-body>p:first-child:last-of-type,.mynah-ui-syntax-highlighter-highlight-tooltip .mynah-card-body>p p:first-child{margin:0}.mynah-chat-prompt-overlay-buttons-container{display:inline-flex;flex-flow:column nowrap;gap:var(--mynah-sizing-2);justify-content:flex-start;align-items:flex-start}.mynah-chat-wrapper{transition:var(--mynah-bottom-panel-transition);position:absolute;top:0;right:0;bottom:0;left:0;width:auto;height:auto;flex-flow:column nowrap;overflow:hidden;justify-content:space-around;align-items:stretch;display:none}.mynah-chat-wrapper>div[class^=mynah-chat]{width:100%;max-width:100%;box-sizing:border-box;padding-left:var(--mynah-sizing-4);padding-right:var(--mynah-sizing-4)}.mynah-chat-wrapper:after{transition:all 400ms cubic-bezier(0.25, 0, 0, 1);content:"";position:absolute;top:0;right:0;bottom:0;left:0;width:auto;height:auto;background-color:#000;z-index:1000;opacity:0;pointer-events:none;transform:translate3d(0, 0, 0) scale(2);transform-origin:center center}.mynah-chat-wrapper>.mynah-chat-items-container{display:flex;flex:1 1 0%;overflow-x:hidden;overflow-y:auto;flex-flow:column-reverse nowrap;align-items:flex-start;padding:var(--mynah-chat-wrapper-spacing);gap:var(--mynah-chat-wrapper-spacing)}.mynah-chat-wrapper.loading>.mynah-chat-items-container{padding-bottom:var(--mynah-sizing-14)}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child>.mynah-card{min-width:100px;min-height:var(--mynah-sizing-14)}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child>.mynah-card>.mynah-card-votes-wrapper{display:none}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child.mynah-chat-item-empty .mynah-chat-items-spinner{display:inline-flex}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child.mynah-chat-item-empty .mynah-chat-items-spinner>span{flex:0 0 auto}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child:not(.mynah-chat-item-empty):before{content:"";pointer-events:none;position:absolute;overflow:hidden;border-bottom-right-radius:var(--mynah-card-radius);border-bottom-left-radius:var(--mynah-card-radius-corner);bottom:0;left:0;right:0;width:auto;height:100%;box-sizing:border-box;z-index:10;background-image:linear-gradient(90deg, var(--mynah-color-button) 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0) 50%, var(--mynah-color-button) 100%);background-position:0% bottom;background-size:200% var(--mynah-sizing-1);background-repeat:repeat-x;animation:horizontal-roll 1250ms linear infinite both}.mynah-chat-wrapper.loading>.mynah-chat-overflowing-intermediate-block{display:flex;flex-flow:column nowrap;max-height:0;overflow:visible;justify-content:flex-end}.mynah-chat-wrapper.loading>.mynah-chat-overflowing-intermediate-block:not(.hidden)>.mynah-chat-stop-chat-response-button{display:inline-flex}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block{display:flex;flex-flow:column nowrap;max-height:0;overflow:visible;justify-content:flex-end;align-items:center;border-bottom:1px solid var(--mynah-color-border-default)}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block.hidden>*{display:none !important}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block>.mynah-chat-stop-chat-response-button{margin-bottom:var(--mynah-sizing-2);display:none;min-height:var(--mynah-sizing-8);background-color:var(--mynah-card-bg);padding-left:var(--mynah-sizing-2)}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block>.mynah-chat-stop-chat-response-button:active{box-shadow:none;filter:none}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block>.mynah-chat-stop-chat-response-button *{color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-xsmall)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper{display:block;padding:var(--mynah-sizing-4)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt{display:flex;flex-flow:column nowrap;overflow:hidden;box-sizing:border-box;border:var(--mynah-border-width) solid var(--mynah-color-border-default);background-color:var(--mynah-card-bg);border-radius:var(--mynah-card-radius);padding:var(--mynah-sizing-4)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper{display:flex;flex-flow:row nowrap;overflow:hidden;box-sizing:border-box;gap:var(--mynah-sizing-2);align-items:flex-start;position:relative;color:var(--mynah-color-text-weak)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-command-wrapper{align-self:flex-start;display:inline-flex;align-items:center;position:relative;gap:var(--mynah-sizing-1);box-sizing:border-box}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-command-wrapper.hidden{display:none}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-command-wrapper>.mynah-chat-prompt-input-command-text{user-select:none;cursor:pointer;font-family:var(--mynah-font-family);font-size:var(--mynah-font-size-large);color:var(--mynah-color-text-input);font-weight:bold;white-space:nowrap;max-width:calc(10*var(--mynah-font-size-large));overflow:hidden;text-overflow:ellipsis}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper{display:block;width:100%;position:relative;align-self:center}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input{font-family:var(--mynah-font-family);border:none;resize:none;background-color:rgba(0,0,0,0);font-size:var(--mynah-font-size-large);color:var(--mynah-color-text-input);outline:none;width:100%;max-height:20vh;min-height:1.5rem}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input:placeholder-shown{text-overflow:ellipsis}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input::placeholder{color:var(--mynah-color-text-weak);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input:not(.mynah-chat-prompt-input-sizer){position:absolute;height:auto;width:auto;top:0;right:0;bottom:0;left:0;padding:0}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input-sizer{display:block;width:100%;opacity:0;visibility:hidden;pointer-events:none;overflow:hidden;white-space:pre-wrap;word-break:break-word}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper~.mynah-chat-prompt-button{background-color:transparent;width:auto;min-width:0;height:auto;padding-top:1px}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper~.mynah-chat-prompt-button i{font-size:calc(2*var(--mynah-font-size-xsmall));color:var(--mynah-color-button);height:var(--mynah-sizing-6);padding-left:0}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper.no-text~.mynah-chat-prompt-button:not([disabled]),.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper~.mynah-chat-prompt-button[disabled]{pointer-events:none;opacity:.25}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper.no-text~.mynah-chat-prompt-button:not([disabled]) i,.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper~.mynah-chat-prompt-button[disabled] i{color:var(--mynah-color-text-weak)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper:empty{display:none}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item{position:relative;display:inline-block;max-width:250px;cursor:pointer}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;border-radius:var(--mynah-card-radius);opacity:0;transition:var(--mynah-short-transition-rev);z-index:8000;background-color:var(--mynah-color-alternate)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-chat-attachment-delete-icon{color:var(--mynah-color-alternate-reverse);opacity:0;transition:var(--mynah-short-transition-rev);position:absolute;left:50%;top:50%;width:30px;height:30px;margin-left:-15px;margin-top:-15px;z-index:9000}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-chat-attachment-delete-icon>i{width:30px;height:30px}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item:hover:after{opacity:.75}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item:hover>.mynah-chat-attachment-delete-icon{opacity:1}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-card{pointer-events:none !important}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-card *{pointer-events:none !important}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-card>.mynah-card-body{display:none}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper.input-has-focus>.mynah-chat-prompt{border:var(--mynah-border-width) solid var(--mynah-color-button)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt-chars-indicator{width:100%;font-size:var(--mynah-font-size-xsmall);padding-top:var(--mynah-sizing-2);opacity:.5;display:flex;align-items:center;justify-content:flex-end;font-style:italic}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper+.mynah-chat-prompt-input-info{padding-top:0;margin-top:calc(-1*var(--mynah-sizing-2))}.mynah-chat-wrapper>.mynah-chat-prompt-input-sticky-card:not(:empty){padding-top:var(--mynah-sizing-4)}.mynah-chat-wrapper>.mynah-chat-prompt-input-sticky-card>.mynah-chat-item-card{max-width:100%}.mynah-chat-wrapper>.mynah-chat-prompt-input-sticky-card>.mynah-chat-item-card>.mynah-card{border-bottom-left-radius:var(--mynah-card-radius) !important}.mynah-chat-wrapper>.mynah-chat-prompt-input-info{display:flex;flex-flow:row nowrap;box-sizing:border-box;overflow:hidden;padding:var(--mynah-sizing-4)}.mynah-chat-wrapper>.mynah-chat-prompt-input-info,.mynah-chat-wrapper>.mynah-chat-prompt-input-info *{font-size:var(--mynah-font-size-xsmall)}.mynah-chat-wrapper>.mynah-chat-prompt-input-info:empty{display:none}.mynah-chat-wrapper>.mynah-chat-prompt-input-info>*{margin:0;margin-block-start:0;margin-block-end:0;margin-top:0;margin-bottom:0}.mynah-chat-items-container .mynah-chat-item-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card{display:inline-flex;flex-flow:column nowrap;position:relative;max-width:90%;transition:var(--mynah-text-flow-transition);transform:translate3d(0, min(50%, 25vh), 0) scale(0.95, 1.25);opacity:0;transform-origin:center bottom;gap:var(--mynah-sizing-4)}.mynah-chat-items-container .mynah-chat-item-card-status-success>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-success>.mynah-card{border-color:var(--mynah-color-status-success)}.mynah-chat-items-container .mynah-chat-item-card-status-success>.mynah-card>.mynah-chat-item-card-icon,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-success>.mynah-card>.mynah-chat-item-card-icon{color:var(--mynah-color-status-success)}.mynah-chat-items-container .mynah-chat-item-card-status-error>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-error>.mynah-card{border-color:var(--mynah-color-status-error)}.mynah-chat-items-container .mynah-chat-item-card-status-error>.mynah-card>.mynah-chat-item-card-icon,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-error>.mynah-card>.mynah-chat-item-card-icon{color:var(--mynah-color-status-error)}.mynah-chat-items-container .mynah-chat-item-card-status-warning>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-warning>.mynah-card{border-color:var(--mynah-color-status-warning)}.mynah-chat-items-container .mynah-chat-item-card-status-warning>.mynah-card>.mynah-chat-item-card-icon,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-warning>.mynah-card>.mynah-chat-item-card-icon{color:var(--mynah-color-status-warning)}.mynah-chat-items-container .mynah-chat-item-card-status-info>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-info>.mynah-card{border-color:var(--mynah-color-status-info)}.mynah-chat-items-container .mynah-chat-item-card-status-info>.mynah-card>.mynah-chat-item-card-icon,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card-status-info>.mynah-card>.mynah-chat-item-card-icon{color:var(--mynah-color-status-info)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-card-has-icon>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-card-has-icon>.mynah-card{padding-left:var(--mynah-sizing-10)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-card-has-icon>.mynah-card>.mynah-chat-item-card-icon,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-card-has-icon>.mynah-card>.mynah-chat-item-card-icon{position:absolute;left:var(--mynah-sizing-4)}.mynah-chat-items-container .mynah-chat-item-card.reveal,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.reveal{opacity:1;transform:translate3d(0, 0, 0) scale(1, 1)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-no-content,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-no-content{display:none !important}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream.typewriter-animating:before,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer-stream.typewriter-animating:before{content:"";pointer-events:none;position:absolute;overflow:hidden;border-bottom-right-radius:var(--mynah-card-radius);border-bottom-left-radius:var(--mynah-card-radius-corner);bottom:0;left:0;right:0;width:auto;height:100%;box-sizing:border-box;z-index:10;background-image:linear-gradient(90deg, var(--mynah-color-button) 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0) 50%, var(--mynah-color-button) 100%);background-position:0% bottom;background-size:200% var(--mynah-sizing-1);background-repeat:repeat-x;animation:horizontal-roll 1250ms linear infinite both}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream .typewriter-part,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer-stream .typewriter-part{visibility:hidden}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card{max-width:100%;width:100%;padding:var(--mynah-sizing-3) 0 var(--mynah-sizing-3) 0;border-top:1px solid var(--mynah-color-border-default);margin-top:var(--mynah-sizing-3);padding-bottom:0}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-title,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-title{font-size:var(--mynah-font-size-large)}.mynah-chat-items-container .mynah-chat-item-card>span.invisible,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>span.invisible{display:none}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-code-result,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-code-result{min-width:70%}.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-card-icon-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-chat-item-card-icon-wrapper{background-color:var(--mynah-color-alternate);color:var(--mynah-color-alternate-reverse);padding:var(--mynah-sizing-2);border-radius:100%}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner{overflow:visible;z-index:10000;gap:var(--mynah-sizing-2);justify-content:flex-start;align-items:center;transition:var(--mynah-very-short-transition)}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>span,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>span{position:relative;display:inline-block;width:var(--mynah-sizing-5);height:var(--mynah-sizing-5);border:var(--mynah-sizing-half) solid rgba(0,0,0,0);border-radius:50%;border-top-color:var(--mynah-color-button);animation:spinner-spin 1s ease-in-out infinite;transform-origin:center center;overflow:visible}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>span:before,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>span:before{position:absolute;content:"";top:calc(-1*var(--mynah-sizing-half));left:calc(-1*var(--mynah-sizing-half));right:calc(-1*var(--mynah-sizing-half));bottom:calc(-1*var(--mynah-sizing-half));width:auto;height:auto;aspect-ratio:1;border:var(--mynah-sizing-half) solid var(--mynah-color-button);border-radius:50%;opacity:.15;box-sizing:border-box}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>div,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>div{opacity:1}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body{padding-left:0}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div>.mynah-syntax-highlighter,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>div>.mynah-syntax-highlighter{filter:contrast(1.15) brightness(0.85)}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div>h1:first-child,.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div>h2:first-child,.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div>h3:first-child,.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div>h4:first-child,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>div>h1:first-child,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>div>h2:first-child,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>div>h3:first-child,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>div>h4:first-child{margin-top:0}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content{margin-top:var(--mynah-sizing-3);padding-top:var(--mynah-sizing-4);border-top:var(--mynah-button-border-width) solid var(--mynah-color-border-default)}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-title,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-title{color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-xsmall);margin:0}.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content .mynah-source-link-title,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content .mynah-source-link-title{font-size:var(--mynah-font-size-small);font-weight:400}.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-chat-item-followup-question{display:inline-flex;flex-flow:column nowrap;position:relative;gap:var(--mynah-sizing-2)}.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-text,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-text{color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-xsmall);font-style:italic}.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-options-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-options-wrapper{display:inline-flex;flex-flow:row wrap;max-width:100%;gap:var(--mynah-sizing-2)}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-followup-question-option,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-followup-question-option{padding:var(--mynah-sizing-2);color:var(--mynah-color-text-default);border:var(--mynah-border-width) solid currentColor;border-radius:var(--mynah-button-radius);cursor:pointer;font-size:var(--mynah-font-size-xsmall);max-width:100%;overflow:hidden;display:inline-flex;gap:var(--mynah-sizing-2);align-items:center;user-select:none}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-followup-question-option *,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-followup-question-option *{pointer-events:none}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-followup-question-option-disabled,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-followup-question-option-disabled{opacity:.25 !important;cursor:default !important}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-followup-question-option:not(:hover),.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-followup-question-option:not(:hover){opacity:.75}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-followup-question-option-status-success,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-followup-question-option-status-success{color:var(--mynah-color-status-success)}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-followup-question-option-status-error,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-followup-question-option-status-error{color:var(--mynah-color-status-error)}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-followup-question-option-status-warning,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-followup-question-option-status-warning{color:var(--mynah-color-status-warning)}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-followup-question-option-status-info,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-followup-question-option-status-info{color:var(--mynah-color-status-info)}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content{display:flex;flex-flow:column nowrap;gap:var(--mynah-sizing-2);overflow:hidden;position:relative}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item{max-width:100%}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card{padding:0;border-radius:0;box-shadow:none}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item .amzn-mynah-search-result-highlight,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item .amzn-mynah-search-result-highlight{background-color:inherit;color:inherit}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:not(:nth-of-type(1)),.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:not(:nth-of-type(1)){display:none}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:nth-of-type(1),.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:nth-of-type(1){margin-bottom:calc(-1*var(--mynah-sizing-4));pointer-events:none;position:relative;-webkit-mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-12)), transparent 100%);-webkit-mask-size:100% 100%;mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-12)), transparent 100%);mask-size:100% 100%;mask-image:linear-gradient(to top, transparent var(--mynah-sizing-1), black 70%);-webkit-mask-image:linear-gradient(to top, transparent var(--mynah-sizing-1), black 70%)}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:nth-of-type(2)~.mynah-chat-item-card-related-content-show-more,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:nth-of-type(2)~.mynah-chat-item-card-related-content-show-more{display:flex}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more{display:none;max-width:80%;z-index:10000;margin-block-start:0;margin-block-end:0;align-self:center;height:var(--mynah-sizing-8);filter:none}.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more>span,.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more>i,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more>span,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more>i{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--mynah-font-size-xsmall)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt{align-self:flex-end}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-chat-item-card-icon-wrapper,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-chat-item-card-icon-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-chat-item-card-icon-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-chat-item-card-icon-wrapper{align-self:flex-end}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-followup-question,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-followup-question,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-followup-question,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-followup-question,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content{align-items:flex-end}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons{display:none}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card{padding:var(--mynah-sizing-4);background-color:var(--mynah-color-button);border-bottom-right-radius:var(--mynah-card-radius-corner);border:none}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card>.mynah-card-body,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card>.mynah-card-body,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card>.mynah-card-body,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card>.mynah-card-body,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card>.mynah-card-body,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card>.mynah-card-body,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card>.mynah-card-body,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card>.mynah-card-body{color:var(--mynah-color-button-reverse)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card{background-color:var(--mynah-color-status-warning)}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-empty:empty,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-empty:empty{display:none}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream.mynah-chat-item-empty.stream-ended,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer-stream.mynah-chat-item-empty.stream-ended{display:none}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-code-result>.mynah-card,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-code-result>.mynah-card,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-card{border-bottom-left-radius:var(--mynah-card-radius-corner);max-height:100%;flex:1}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-icon-wrapper,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-icon-wrapper,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-icon-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-icon-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-icon-wrapper,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-icon-wrapper{align-self:flex-start}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact{opacity:1}.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header,.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header,.mynah-chat-prompt-input-sticky-card .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header{opacity:1}.mynah-chat-command-selector{display:flex;box-sizing:border-box;background-color:var(--mynah-card-bg);border-radius:var(--mynah-card-radius);width:100%;pointer-events:all;flex-flow:column nowrap;align-items:stretch;justify-content:flex-start}.mynah-chat-command-selector>.mynah-chat-command-selector-group{display:flex;box-sizing:border-box;width:100%;flex-flow:column nowrap;align-items:stretch;justify-content:flex-start;padding:var(--mynah-sizing-2)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-group-title{margin:0;color:var(--mynah-color-text-weak);opacity:.75;padding:var(--mynah-sizing-2) var(--mynah-sizing-3)}.mynah-chat-command-selector>.mynah-chat-command-selector-group:not(:last-child){border-bottom:1px solid var(--mynah-color-border-default)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command{display:flex;box-sizing:border-box;width:100%;flex-flow:column nowrap;align-items:flex-start;justify-content:flex-start;overflow:hidden;cursor:pointer;padding:var(--mynah-sizing-2) var(--mynah-sizing-3);color:var(--mynah-color-text-default);border-radius:var(--mynah-input-radius);transition:var(--mynah-short-transition-rev);gap:var(--mynah-sizing-1)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command:hover,.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command.target-command{background-color:var(--mynah-color-button)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command:hover,.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command:hover *,.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command.target-command,.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command.target-command *{color:var(--mynah-color-button-reverse)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command>.mynah-chat-command-selector-command-name{font-family:var(--mynah-font-family);font-size:var(--mynah-font-size-large);font-weight:bold;flex:0 1 0%}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command>.mynah-chat-command-selector-command-description{font-size:var(--mynah-font-size-small);opacity:.75;flex:1 0 100%}.mynah-chat-item-tree-view-wrapper{margin:0;margin-block-end:0 !important;margin-block-start:0 !important}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container{background-color:var(--mynah-card-bg);color:var(--mynah-color-text-default);margin-block-start:0 !important;margin-block-end:0 !important;position:relative;border-radius:var(--mynah-input-radius);border:var(--mynah-border-width) solid var(--mynah-color-border-default);overflow:hidden}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container>.mynah-chat-item-tree-view-wrapper-title{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;position:relative;padding:var(--mynah-sizing-3);gap:var(--mynah-sizing-2);border-bottom:var(--mynah-border-width) solid var(--mynah-color-border-default)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container>.mynah-chat-item-tree-view-wrapper-title>h4{margin:0}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container>.mynah-chat-item-tree-view-wrapper-title:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--mynah-color-border-default);opacity:.25;pointer-events:none}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view{overflow:hidden;box-sizing:border-box;width:100%;overflow-y:hidden;overflow-x:auto;display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:flex-start;gap:var(--mynah-sizing-half)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-button-title{display:inline-flex;gap:var(--mynah-sizing-1)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-button-weak-title{opacity:.65}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-pull-request-item{width:100%;box-sizing:border-box}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view{padding-left:var(--mynah-sizing-4)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;gap:var(--mynah-sizing-2);overflow:hidden;cursor:pointer;width:calc(100% - var(--mynah-sizing-4));padding:calc(3*var(--mynah-sizing-half));position:relative;box-sizing:content-box;border-radius:var(--mynah-button-radius)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item:not(:hover)>.mynah-chat-item-tree-view-file-item-actions{display:none}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item:hover{background-color:var(--mynah-color-light)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-status-info:before,.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-status-success:before,.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-status-warning:before,.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-status-error:before{content:"";position:absolute;z-index:0;opacity:.1;width:100%;height:100%;left:0;top:0;border-radius:var(--mynah-button-radius)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-status-info:before{background-color:var(--mynah-color-status-info)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-status-info>.mynah-chat-item-tree-view-file-item-details>.mynah-ui-icon{color:var(--mynah-color-status-info)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-status-success:before{background-color:var(--mynah-color-status-success)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-status-success>.mynah-chat-item-tree-view-file-item-details>.mynah-ui-icon{color:var(--mynah-color-status-success)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-status-warning:before{background-color:var(--mynah-color-status-warning)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-status-warning>.mynah-chat-item-tree-view-file-item-details>.mynah-ui-icon{color:var(--mynah-color-status-warning)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-status-error:before{background-color:var(--mynah-color-status-error)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-status-error>.mynah-chat-item-tree-view-file-item-details>.mynah-ui-icon{color:var(--mynah-color-status-error)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-details{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;gap:var(--mynah-sizing-1);font-size:90%;z-index:10;flex:1;flex-shrink:1;overflow:hidden}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-details>.mynah-chat-item-tree-view-file-item-details-text{overflow:hidden;flex:1;white-space:nowrap;text-overflow:ellipsis}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-actions{display:flex;flex-flow:row-reverse nowrap;justify-content:flex-end;align-items:center;gap:var(--mynah-sizing-2);font-size:90%;z-index:10;padding-right:var(--mynah-sizing-1)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-actions>.mynah-button{width:auto;height:auto;min-width:auto}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-actions>.mynah-button.info{color:var(--mynah-color-status-info)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-actions>.mynah-button.success{color:var(--mynah-color-status-success)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-actions>.mynah-button.warning{color:var(--mynah-color-status-warning)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-actions>.mynah-button.error{color:var(--mynah-color-status-error)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-deleted{text-decoration:line-through}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-title{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;gap:var(--mynah-sizing-1);max-width:100%;overflow:hidden;z-index:10;flex-shrink:0}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container .mynah-chat-item-tree-view .mynah-chat-item-tree-view-file-item-title>span{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container>.mynah-chat-item-tree-view{padding:var(--mynah-sizing-2)}.mynah-chat-item-tree-view-wrapper-label{border-top-left-radius:var(--mynah-card-radius);border-top-right-radius:var(--mynah-card-radius);background-color:var(--mynah-color-alternate);margin-bottom:0px;padding:var(--mynah-sizing-4)}.mynah-chat-item-tree-view-wrapper-feedback-label{padding-left:var(--mynah-sizing-4)}.mynah-chat-item-tree-view-wrapper-feedback-div{float:right}.mynah-chat-item-tree-view-wrapper-feedback-div button:first-child{margin-right:var(--mynah-sizing-2)}.mynah-chat-item-tree-view-license{color:var(--mynah-color-text-weak)}.mynah-chat-item-tree-view-license:before{content:"";position:absolute;left:0;right:0;top:0;bottom:0;background-color:var(--mynah-color-button);opacity:.07;pointer-events:none}.mynah-chat-item-tree-view-license ul{margin:0;padding-left:var(--mynah-sizing-8)}.mynah-chat-item-tree-view-license ul>li:not(:first-child){margin-top:var(--mynah-sizing-2)}.mynah-chat-item-tree-view-license ul>li .mynah-card-body p{margin:0}.mynah-chat-item-tree-view-license .mynah-chat-item-tree-view-license-dropdown-button>span{max-width:unset}.outer-container{display:flex}.outer-container:not(:empty){margin-top:var(--mynah-sizing-3)}.snippet-card-container.vertical-overflow pre{position:relative;-webkit-mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-16)), transparent 100%);-webkit-mask-size:100% 100%;mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-16)), transparent 100%);mask-size:100% 100%}.snippet-card-container{box-sizing:border-box;max-width:100%;max-height:calc(2*var(--mynah-sizing-12))}.snippet-card-container>.mynah-button{position:absolute;background-color:var(--mynah-card-bg) !important;width:var(--mynah-sizing-7) !important;min-width:var(--mynah-sizing-7) !important;max-width:var(--mynah-sizing-7) !important;height:var(--mynah-sizing-7) !important;border-radius:100%;right:calc(-1*var(--mynah-sizing-2));top:calc(-1*var(--mynah-sizing-2));border:var(--mynah-border-width) solid var(--mynah-color-border-default);opacity:1 !important;filter:brightness(0.95)}.snippet-card-container:not(:hover)>.mynah-button{display:none}.snippet-card-container>.mynah-card-body>.mynah-syntax-highlighter pre{text-overflow:ellipsis}.mynah-prompt-input-snippet-attachment-overlay{max-width:90vw;max-height:70vh}.mynah-prompt-input-snippet-attachment-overlay>.mynah-card-body>.mynah-syntax-highlighter{max-height:calc(70vh - var(--mynah-sizing-12)) !important}.snippet-card-container,.mynah-prompt-input-snippet-attachment-overlay{position:relative;overflow:visible;width:100%;box-sizing:border-box}.snippet-card-container>.mynah-card-body,.mynah-prompt-input-snippet-attachment-overlay>.mynah-card-body{max-height:100%}.snippet-card-container>.mynah-card-body>.mynah-syntax-highlighter,.mynah-prompt-input-snippet-attachment-overlay>.mynah-card-body>.mynah-syntax-highlighter{user-select:none;pointer-events:none;margin:0;max-height:100%;overflow:hidden}.snippet-card-container>.mynah-card-body>.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons,.mynah-prompt-input-snippet-attachment-overlay>.mynah-card-body>.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons{display:none}.snippet-card-container pre,.mynah-prompt-input-snippet-attachment-overlay pre{text-overflow:ellipsis}.mynah-collapsible-content-wrapper{display:block;box-sizing:border-box;width:100%;overflow:hidden;position:relative}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox{display:none}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox+.mynah-collapsible-content-label{box-sizing:border-box;display:flex;flex-flow:column nowrap;overflow:hidden;align-items:flex-start;justify-content:stretch;padding:var(--mynah-sizing-2);gap:var(--mynah-sizing-2)}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox+.mynah-collapsible-content-label>.mynah-collapsible-content-label-title-wrapper{gap:var(--mynah-sizing-2);display:flex;flex-flow:row nowrap;box-sizing:border-box;width:100%;overflow:hidden;justify-content:flex-start;align-items:flex-start;pointer-events:all;cursor:pointer;user-select:none}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox+.mynah-collapsible-content-label>.mynah-collapsible-content-label-title-wrapper>.mynah-collapsible-content-label-title-text{flex:1;overflow:hidden}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox+.mynah-collapsible-content-label>.mynah-collapsible-content-label-content-wrapper{overflow:hidden;box-sizing:border-box;width:100%}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox:checked+.mynah-collapsible-content-label>.mynah-collapsible-content-label-content-wrapper{display:none}body,html{background-color:var(--mynah-color-bg);color:var(--mynah-color-text-default);height:100%;width:100%;overflow:hidden;margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-weight:600}::-webkit-scrollbar{width:2px;height:2px;opacity:.25}::-webkit-scrollbar:horizontal{width:0px;height:0px}*:focus{outline:none}',"",{version:3,sources:["webpack://./src/styles/_variables.scss","webpack://./src/styles/_animations.scss","webpack://./src/styles/components/_main-container.scss","webpack://./src/styles/components/_button.scss","webpack://./src/styles/components/_form-input.scss","webpack://./src/styles/components/_toggle.scss","webpack://./src/styles/components/_icon.scss","webpack://./src/styles/components/_nav-tabs.scss","webpack://./src/styles/components/card/_card.scss","webpack://./src/styles/components/_source-link-header.scss","webpack://./src/styles/components/_votes-wrapper.scss","webpack://./src/styles/components/card/_card-body.scss","webpack://./src/styles/components/_feedback-form.scss","webpack://./src/styles/components/_overlay.scss","webpack://./src/styles/components/_notification.scss","webpack://./src/styles/components/_syntax-highlighter.scss","webpack://./src/styles/components/chat/_chat-wrapper.scss","webpack://./src/styles/components/chat/_chat-items-container.scss","webpack://./src/styles/components/chat/_chat-items-bottom-animator.scss","webpack://./src/styles/components/chat/_chat-overflowing-intermediate-block.scss","webpack://./src/styles/components/chat/_chat-prompt-wrapper.scss","webpack://./src/styles/components/chat/_chat-item-card.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/components/chat/_chat-command-selector.scss","webpack://./src/styles/components/chat/_chat-item-tree-view.scss","webpack://./src/styles/components/chat/_chat-prompt-code-snippet.scss","webpack://./src/styles/components/_collapsible-content.scss","webpack://./src/styles/styles.scss"],names:[],mappings:"AAAA,MACI,sMAAA,CAEA,uCAAA,CACA,iDAAA,CACA,yBAAA,CACA,4BAAA,CACA,uDAAA,CACA,0CAAA,CACA,oDAAA,CACA,oDAAA,CACA,oDAAA,CACA,oDAAA,CACA,oDAAA,CACA,oDAAA,CACA,oDAAA,CACA,oDAAA,CACA,sDAAA,CACA,sDAAA,CACA,sDAAA,CACA,sDAAA,CACA,sDAAA,CACA,sDAAA,CACA,sDAAA,CACA,sDAAA,CACA,sDAAA,CACA,mDAAA,CACA,gCAAA,CACA,yBAAA,CAEA,oDAAA,CACA,yDAAA,CACA,yDAAA,CACA,0DAAA,CACA,wDAAA,CAEA,kDAAA,CACA,mHAAA,CACA,wCAAA,CAEA,sGAAA,CAEA,gDAAA,CACA,qCAAA,CAGA,sDAAA,CACA,gDAAA,CAEA,8DAAA,CACA,sEAAA,CACA,qFAAA,CACA,sEAAA,CACA,2EAAA,CACA,oEAAA,CACA,8DAAA,CACA,yEAAA,CACA,0DAAA,CACA,iEAAA,CACA,4FAAA,CAEA,8DAAA,CACA,8DAAA,CACA,oEAAA,CACA,gEAAA,CAEA,qDAAA,CACA,6DAAA,CAEA,iEAAA,CACA,yEAAA,CAEA,gDAAA,CAEA,2BAAA,CACA,yBAAA,CACA,0DAAA,CAEA,kCAAA,CACA,iCAAA,CACA,gCAAA,CACA,8BAAA,CACA,iCAAA,CACA,4BAAA,CACA,wCAAA,CAEA,0CAAA,CACA,2CAAA,CACA,6BAAA,CACA,4CAAA,CAEA,sEAAA,CACA,oEAAA,CACA,oEAAA,CACA,kEAAA,CACA,mEAAA,CACA,+EAAA,CACA,oHAAA,CCjGJ,2BACI,GACI,6BAAA,CAEJ,KACI,gCAAA,CAAA,CAIR,kBACI,KACI,8BAAA,CAEJ,GACI,6DAAA,CAAA,CAIR,wBACI,GACI,wBAAA,CAAA,CAIR,sBACI,GACI,iBAAA,CACA,SAAA,CAEJ,GACI,kBAAA,CACA,SAAA,CAEJ,KACI,SAAA,CACA,kBAAA,CAAA,CAGR,sCACI,GACI,kBAAA,CAAA,CCtCR,eACI,YAAA,CACA,uBAAA,CACA,aAAA,CACA,UAAA,CACA,gCAAA,CACA,qBAAA,CACA,WAAA,CACA,iBAAA,CACA,eAAA,CACA,uBAAA,CACA,mBAAA,CAEA,8CACI,MAAA,CACA,iBAAA,CAEI,8EACI,YAAA,CCpBhB,oBACI,WAAA,CACA,+BAAA,CACA,4BAAA,CACA,wCAAA,CACA,0CAAA,CACA,uCAAA,CACA,qCAAA,CACA,cAAA,CACA,6CAAA,CACA,mBAAA,CACA,sBAAA,CACA,kBAAA,CACA,YAAA,CACA,eAAA,CACA,iBAAA,CACA,6CAAA,CACA,SAAA,CACA,sBAAA,CACA,WAAA,CACA,oDACI,iBAAA,CACA,mBAAA,CACA,sFAAA,CACA,qCAAA,CACA,qCAAA,CAEJ,uCACI,sBAAA,CACA,mBAAA,CAEJ,2CACI,4BAAA,CACA,aAAA,CACA,eAAA,CACA,WAAA,CACA,4BAAA,CACA,0GAEI,SAAA,CAEJ,kDACI,eAAA,CAGR,4DAEI,oBAAA,CACA,SAAA,CAEJ,2BACI,sBAAA,CACA,WAAA,CAEJ,sCACI,4BAAA,CACA,6BAAA,CACA,eAAA,CAEJ,yBACI,kBAAA,CACA,uCAAA,CACA,cAAA,CACA,4CAAA,CACA,eAAA,CACA,qBAAA,CACA,eAAA,CACA,sBAAA,CACA,kCAAA,CACA,mCAAA,CAEJ,2BACI,qCAAA,CCxER,0BACI,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,yBAAA,CACA,uBAAA,CAEI,sDACI,qBAAA,CAEJ,0EAEI,8BAAA,CAIJ,sFACI,mBAAA,CACA,oBAAA,CACA,0BAAA,CACA,kBAAA,CACA,yBAAA,CACA,qGACI,uCAAA,CACA,WAAA,CACA,aAAA,CAIZ,sDACI,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,wBAAA,CACA,kBAAA,CACA,wEACI,UAAA,CACA,MAAA,CACA,qCAAA,CACA,uCAAA,CAgBA,uBAAA,CACA,eAAA,CACA,eAAA,CACA,kBAAA,CACA,YAAA,CAnBA,qFACI,kCAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CAEJ,4FACI,iBAAA,CACA,UAAA,CAEJ,wFACI,6BAAA,CACA,wEAAA,CACA,qCAAA,CAOJ,wGACI,mBAAA,CACA,oBAAA,CACA,sBAAA,CACA,kBAAA,CACA,yHACI,kCAAA,CAEJ,sIACI,mBAAA,CACA,oBAAA,CACA,sBAAA,CACA,kBAAA,CACA,iBAAA,CACA,yBAAA,CACA,cAAA,CACA,4IACI,iBAAA,CACA,SAAA,CACA,cAAA,CACA,QAAA,CACA,OAAA,CACA,kLACI,sCAAA,CACA,iMACI,qBAAA,CACA,0BAAA,CACA,SAAA,CAEJ,yLACI,kBAAA,CACA,0CAAA,CACA,SAAA,CAIZ,oKACI,iBAAA,CACA,+CAAA,CACA,2BAAA,CACA,4BAAA,CACA,mCAAA,CACA,eAAA,CACA,qBAAA,CACA,wEAAA,CACA,mBAAA,CACA,oBAAA,CACA,sBAAA,CACA,kBAAA,CACA,mLACI,iBAAA,CACA,kBAAA,CACA,kBAAA,CACA,8BAAA,CACA,+BAAA,CACA,UAAA,CAEJ,2KAEI,UAAA,CACA,kBAAA,CACA,iBAAA,CACA,qCAJY,CAKZ,uCALY,CAMZ,wCANY,CAOZ,sCAPY,CAQZ,kDAAA,CACA,oBAAA,CACA,8BAAA,CACA,SAAA,CACA,qBAAA,CACA,SAAA,CAMhB,6GACI,4CAAA,CACA,6BAAA,CACA,mBAAA,CACA,oBAAA,CACA,uIACI,cAAA,CACA,mCAAA,CACA,+BAAA,CACA,gBAAA,CACA,6CAAA,CACA,sJACI,6CAAA,CACA,UAAA,CACA,yCAAA,CAKJ,4ZACI,SAAA,CACA,uCAAA,CAKhB,gFACI,oCAAA,CACA,WAAA,CACA,uCAAA,CACA,mCAAA,CACA,YAAA,CAEJ,2EACI,iBAAA,CACA,kCAAA,CACA,mBAAA,CACA,2BAAA,CAKZ,sCACI,YAAA,CACA,uBAAA,CACA,yBAAA,CACA,eAAA,CACA,oCAAA,CAEJ,mCACI,YAAA,CACA,0BAAA,CACA,yBAAA,CACA,eAAA,CACA,iCAAA,CACA,oCAAA,CACA,wBAAA,CACA,kBAAA,CACA,sFACI,0BAAA,CCpMR,wBACI,oBAAA,CACA,cAAA,CACA,eAAA,CACA,kBAAA,CACA,iBAAA,CACA,oCAAA,CACA,uCAAA,CACA,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,YAAA,CACA,6BACI,eAAA,CACA,WAAA,CACA,+BAAA,CACA,wCAAA,CACA,aAAA,CACA,kDACI,YAAA,CACA,+FACI,0CAAA,CAGA,4GACI,UAAA,CACA,iBAAA,CACA,OAAA,CACA,4CAAA,CACA,0BAAA,CACA,4BAAA,CACA,2BAAA,CACA,kDAAA,CACA,mCAAA,CACA,6CAAA,CACA,WAAA,CAGR,6EACI,cAAA,CACA,kBAAA,CACA,iBAAA,CACA,WAAA,CACA,uDAAA,CACA,WAAA,CACA,qBAAA,CACA,mBAAA,CACA,eAAA,CACA,uBAAA,CACA,kBAAA,CACA,kCAAA,CACA,wDAAA,CACA,gCAAA,CACA,sCAAA,CACA,WAAA,CACA,cAAA,CACA,4JAEI,gBAAA,CAEJ,kFACI,sBAAA,CACA,eAAA,CACA,kBAAA,CACA,cAAA,CACA,aAAA,CAEJ,wGACI,iCAAA,CACA,uCAAA,CACA,aAAA,CAGR,qFACI,0CAAA,CACA,qCAAA,CACA,SAAA,CACA,8CAAA,CAEJ,qEACI,8BAAA,CACA,gGACI,8BAAA,CACA,WAAA,CAMhB,wDACI,uBAAA,CACA,yBAAA,CAIR,yCACI,cAAA,CACA,oBAAA,CACA,6BAAA,CACA,aAAA,CACA,WAAA,CCpGJ,eACI,iBAAA,CACA,kBAAA,CACA,mBAAA,CACA,SAAA,CACA,UAAA,CACA,mBAAA,CACA,mBAAA,CACA,sBAAA,CACA,cAAA,CACA,mCAAA,CACA,2BAAA,CACA,6BAAA,CACA,qBAAA,CACA,aAAA,CACA,6BAAA,CACA,oBACI,YAAA,CCjBR,wBACI,mFAAA,CACA,sCAAA,CACA,YAAA,CACA,kBAAA,CACA,eAAA,CACA,WAAA,CACA,iCAAA,CACA,iCAAA,CACA,iBAAA,CACA,8BACI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CACA,uCAAA,CACA,kDAAA,CAGJ,gDACI,WAAA,CACA,eAAA,CACA,qBAAA,CACA,qDACI,kBAAA,CAGR,8BACI,YAAA,CAGJ,gGAEI,mBAAA,CAIR,oCACI,yBAAA,CACA,cAAA,CAIA,iJACI,YAAA,CACA,oBAAA,CACA,cAAA,CACA,yBAAA,CACA,+JACI,6BAAA,CACA,8MACI,wEAAA,CACA,qCAAA,CACA,4BAAA,CACA,oNACI,4CAAA,CCzDpB,YACI,oBAAA,CACA,YAAA,CACA,iBAAA,CACA,4CAAA,CACA,qBAAA,CACA,YAAA,CACA,uBAAA,CACA,yBAAA,CACA,8BAAA,CACA,aAAA,CACA,UAAA,CACA,eAAA,CACA,sCAAA,CACA,mCAAA,CAGI,yBACI,SAAA,CACA,eAAA,CAEJ,0BACI,6BAAA,CAEJ,2BACI,6BAAA,CAEJ,0BACI,6BAAA,CAGR,uBACI,qCAAA,CAEJ,mBACI,wEAAA,CAGJ,cACI,UAAA,CACA,iBAAA,CCxCR,sCACI,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,SAAA,CACA,yBAAA,CACA,6CAAA,CACA,8DACI,iBAAA,CACA,kBAAA,CACA,YAAA,CACA,2BAAA,CACA,4BAAA,CACA,mBAAA,CACA,mBAAA,CACA,wEAAA,CACA,kBAAA,CACA,mBAAA,CACA,2BAAA,CACA,iCAAA,CACA,2BAAA,CACA,qBAAA,CACA,qBAAA,CACA,qCAAA,CACA,iBAAA,CACA,eAAA,CACA,oEACI,UAAA,CACA,mBAAA,CACA,qBAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CACA,WAAA,CACA,qCAAA,CACA,kBAAA,CAGR,uEACI,UAAA,CACA,YAAA,CACA,uBAAA,CACA,sBAAA,CACA,4BAAA,CACA,cAAA,CACA,eAAA,CACA,cAAA,CACA,qIACI,WAAA,CACA,mBAAA,CAEJ,gGACI,uCAAA,CACA,eAAA,CACA,oCAAA,CACA,UAAA,CACA,mBAAA,CACA,oBAAA,CACA,kBAAA,CACA,0BAAA,CACA,yBAAA,CACA,kBAAA,CACA,sBAAA,CACA,oBAAA,CACA,YAAA,CACA,eAAA,CACA,+HACI,4CAAA,CACA,SAAA,CACA,kCAAA,CACA,uCAAA,CACA,cAAA,CACA,6BAAA,CAGR,8FACI,uCAAA,CACA,eAAA,CACA,kCAAA,CACA,kBAAA,CACA,sBAAA,CACA,oBAAA,CACA,YAAA,CACA,eAAA,CACA,cAAA,CACA,iBAAA,CACA,oCAAA,CACA,oBAAA,CACA,4CAAA,CACA,oGACI,UAAA,CACA,iBAAA,CACA,aAAA,CACA,QAAA,CACA,MAAA,CACA,UAAA,CACA,UAAA,CACA,sCAAA,CACA,6BAAA,CACA,iCAAA,CACA,4CAAA,CACA,SAAA,CAGA,0GACI,8BAAA,CACA,SAAA,CAIJ,0HACI,WAAA,CACA,iCAAA,CACA,kCAAA,CAEJ,sIACI,YAAA,CAEJ,8GACI,gBAAA,CAEJ,uIACI,iBAAA,CAIZ,+FACI,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,0BAAA,CACA,yBAAA,CACA,sCAAA,CACA,qGACI,YAAA,CAEJ,4HACI,mBAAA,CACA,oBAAA,CACA,kBAAA,CACA,0BAAA,CACA,yBAAA,CACA,wCAAA,CACA,wEAAA,CACA,wCAAA,CACA,WAAA,CACA,wIACI,UAAA,CACA,uCAAA,CACA,kCAAA,CAEJ,8JACI,wCAAA,CACA,kCAAA,CACA,4KACI,yBAAA,CAGR,4IACI,kBAAA,CACA,iBAAA,CACA,mJACI,UAAA,CACA,wCAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,sBAAA,CACA,WAAA,CAEJ,wJACI,SAAA,CACA,WAAA,CACA,wCAAA,CACA,2BAAA,CACA,4BAAA,CCpLxB,sCACI,kBAAA,CACA,yBAAA,CACA,YAAA,CACA,kBAAA,CACA,wBAAA,CACA,sDAAA,CACA,iCAAA,CACA,sCAAA,CACA,iEACI,eAAA,CAEJ,yDACI,SAAA,CACA,sCAAA,CACA,kCAAA,CAEJ,uDACI,kCAAA,CACA,sCAAA,CAEJ,uDACI,iBAAA,CACA,gBAAA,CACA,mBAAA,CACA,kBAAA,CACA,qBAAA,CACA,yBAAA,CACA,yEACI,YAAA,CAEJ,yEACI,UAAA,CACA,cAAA,CACA,sCAAA,CACA,wCAAA,CACA,2BAAA,CACA,4BAAA,CACA,mBAAA,CACA,sBAAA,CACA,kBAAA,CACA,kCAAA,CACA,UAAA,CACA,2EACI,mBAAA,CAEJ,2EACI,6DAAA,CAIJ,mGACI,qCAAA,CACA,SAAA,CAIJ,uGACI,qCAAA,CACA,SAAA,CC3DhB,iBACI,MAAA,CACA,eAAA,CACA,iBAAA,CACA,aAAA,CACA,oCAAA,CAEA,qBACI,cAAA,CACA,sCAAA,CACA,qBAAA,CAGJ,mBACI,2BAAA,CACA,kCAAA,CAGJ,4BACI,uCAAA,CAGJ,kCACI,YAAA,CAKA,qQAMI,YAAA,CAIR,6EAEI,QAAA,CAKA,8EACI,wBAAA,CACA,sBAAA,CACA,6BAAA,CAMA,gBAAA,CAJA,sGACI,oBAAA,CAKJ,0FACI,YAAA,CAIR,oEACI,kBAAA,CAGJ,sFACI,6CAAA,CACA,aAAA,CACA,WAAA,CAGJ,8GACI,6CAAA,CACA,uCAAA,CAGJ,4GACI,oBAAA,CACA,iBAAA,CACA,kCAAA,CACA,gCAAA,CACA,mCAAA,CACA,sDAAA,CACA,gBAAA,CACA,cAAA,CACA,4BAAA,CAEA,0HACI,mBAAA,CACA,UAAA,CACA,uCAAA,CACA,wCAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,6BAAA,CACA,UAAA,CACA,mCAAA,CCjGhB,6BACI,YAAA,CACA,uBAAA,CACA,iBAAA,CACA,QAAA,CACA,0BAAA,CACA,2BAAA,CACA,UAAA,CACA,qBAAA,CACA,eAAA,CACA,SAAA,CACA,gCAAA,CACA,+CAAA,CACA,gBAAA,CACA,oCACI,gDAAA,CACA,UAAA,CACA,iBAAA,CACA,oCAAA,CACA,QAAA,CACA,MAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,SAAA,CACA,mBAAA,CACA,uCAAA,CACA,8BAAA,CACA,UAAA,CAEJ,8DACI,iGAAA,CAEJ,4CACI,+CAAA,CAGA,0HAEI,8BAAA,CAGR,sDACI,SAAA,CACA,8BAAA,CACA,6DACI,WAAA,CAEJ,qEACI,4CAAA,CACA,2BAAA,CACA,WAAA,CACA,4IAEI,8BAAA,CAMhB,qBACI,kBAAA,CACA,qBAAA,CACA,4CAAA,CACA,8BAAA,CACA,YAAA,CACA,gBAAA,CACA,yBAAA,CACA,mBAAA,CACA,6BAAA,CACA,UAAA,CACA,iBAAA,CACA,+EAAA,CACA,gDAAA,CACA,+CAAA,CACA,kBAAA,CACA,+CAAA,CACA,sCAAA,CACA,6BAAA,CACA,eAAA,CACA,sCACI,YAAA,CAEJ,iDACI,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,oDACI,MAAA,CACA,QAAA,CAIR,kDACI,4BAAA,CACA,6BAAA,CACA,wEAAA,CACA,WAAA,CACA,UAAA,CACA,YAAA,CACA,eAAA,CACA,uCAAA,CACA,sCAAA,CACA,YAAA,CACA,mCAAA,CACA,qCAAA,CACA,qBAAA,CACA,mBAAA,CAGJ,yDACI,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,wBAAA,CACA,kBAAA,CACA,qFACI,iBAAA,CACA,UAAA,CACA,MAAA,CACA,qCAAA,CACA,uCAAA,CACA,6BAAA,CACA,wEAAA,CACA,qCAAA,CACA,uBAAA,CACA,eAAA,CACA,eAAA,CACA,kBAAA,CACA,YAAA,CAEJ,4FACI,kCAAA,CACA,mBAAA,CAIR,4DACI,YAAA,CACA,wBAAA,CACA,kBAAA,CACA,yBAAA,CACA,qBAAA,CC/IR,eACI,cAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,qBAAA,CACA,mBAAA,CACA,eAAA,CAEI,gDACI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,sCAAA,CACA,oDAAA,CACA,WAAA,CAGR,wCACI,kDAAA,CACA,kBAAA,CACA,oCAAA,CACA,iCAAA,CACA,iBAAA,CACA,aAAA,CACA,gBAAA,CACA,sCAAA,CACA,wDAAA,CA6GA,qEAAA,CA3GA,0GAEI,8BAAA,CACA,wLACI,YAAA,CACA,kNACI,0BAAA,CAMR,0DACI,UAAA,CACA,4BAAA,CACA,4CAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CACA,WAAA,CACA,mBAAA,CACA,qBAAA,CACA,SAAA,CACA,+EAAA,CACA,WAAA,CACA,sCAAA,CACA,4BAAA,CACA,qBAAA,CAGJ,yDACI,UAAA,CACA,iBAAA,CACA,2BAAA,CACA,4BAAA,CACA,MAAA,CACA,KAAA,CACA,SAAA,CACA,4BAAA,CACA,qCAAA,CACA,qBAAA,CACA,4CAAA,CACA,qBAAA,CAKJ,mJAEI,uBAAA,CACA,qCAAA,CACA,iKACI,6BAAA,CAEJ,+JACI,uCAAA,CAGR,uEACI,sCAAA,CACA,sBAAA,CACA,6EACI,sCAAA,CAKR,6IAEI,sBAAA,CACA,oCAAA,CACA,yJACI,sCAAA,CAGR,qEACI,oCAAA,CACA,qBAAA,CACA,2EACI,qCAAA,CAKZ,uEACI,oBAAA,CACA,eAAA,CACA,UAAA,CACA,iBAAA,CACA,0CAAA,CACA,sFAAA,CACA,4CAAA,CACA,UAAA,CAEJ,+CACI,0CAAA,CACA,4CAAA,CAEJ,sHAEI,SAAA,CACA,oBAAA,CAMJ,kFAEI,8BAAA,CAMA,0FACI,uCAAA,CAEJ,kEACI,uCAAA,CACA,qBAAA,CACA,SAAA,CAEJ,0FACI,qBAAA,CAEJ,0FACI,SAAA,CAEJ,iEACI,oBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,SAAA,CAGR,uEACI,kBAAA,CChLZ,oBACI,mBAAA,CACA,oBAAA,CACA,sBAAA,CACA,0BAAA,CACA,yBAAA,CACA,6BAAA,CACA,eAAA,CACA,iBAAA,CACA,iDACI,kBAAA,CACA,cAAA,CAEJ,mCACI,+BAAA,CAEI,8CACI,uCAAA,CAEJ,wCACI,oCAAA,CAEJ,2CACI,uCAAA,CAEJ,yCACI,qCAAA,CAIZ,kDACI,MAAA,CACA,cAAA,CACA,eAAA,CACA,mBAAA,CACA,uBAAA,CACA,sBAAA,CACA,0BAAA,CACA,yBAAA,CACA,eAAA,CACA,iBAAA,CACA,4EACI,QAAA,CACA,kFACI,YAAA,CAGR,8EACI,sCAAA,CACA,YAAA,CACA,uBAAA,CACA,0BAAA,CACA,sBAAA,CACA,yBAAA,CACA,4FACI,kBAAA,CACA,6CAAA,CACA,0CAAA,CCzDhB,0BACI,YAAA,CACA,uBAAA,CACA,qBAAA,CACA,eAAA,CACA,8BAAA,CACA,qCAAA,CACA,cAAA,CAIA,wEAAA,CACA,iBAAA,CACA,uCAAA,CACA,kBAAA,CACA,qCAAA,CAPA,wCACI,gCAAA,CAOJ,qFAEI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,6CAAA,CACA,UAAA,CACA,mBAAA,CACA,gBAAA,CAEJ,iEACI,YAAA,CACA,kBAAA,CACA,wBAAA,CACA,gCAAA,CACA,kCAAA,CACA,YAAA,CACA,qBAAA,CACA,QAAA,CACA,yBAAA,CACA,iBAAA,CACA,sDAAA,CACA,wEACI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,kDAAA,CACA,WAAA,CAEJ,oGACI,MAAA,CACA,uCAAA,CACA,oBAAA,CACA,WAAA,CACA,eAAA,CACA,sBAAA,CACA,kBAAA,CAEJ,+EACI,+BAAA,CACA,6DAAA,CACA,iFACI,uCAAA,CACA,oCAAA,CAIZ,4CACI,mBAAA,CACA,cAAA,CACA,kBAAA,CACA,oBAAA,CACA,QAAA,CACA,oBAAA,CACA,kBAAA,CACA,gBAAA,CACA,WAAA,CACA,oCAAA,CACA,eAAA,CACA,gBAAA,CACA,6BAAA,CACA,kBAAA,CACA,uCAAA,CACA,gDACI,SAAA,CAEJ,kDACI,UAAA,CACA,iBAAA,CACA,qBAAA,CACA,KAAA,CACA,WAAA,CACA,SAAA,CACA,sBAAA,CACA,8CAAA,CACA,wEAAA,CACA,qCAAA,CACA,UAAA,CAEJ,mDACI,SAAA,CACA,sBAAA,CACA,8CAAA,CACA,qBAAA,CAGR,8BACI,6BAAA,CACA,QAAA,CACA,eAAA,CACA,iBAAA,CACA,iBAAA,CAEA,8DAEI,uDAAA,CACA,2DAAA,CAEJ,mCACI,oCAAA,CACA,uBAAA,CACA,eAAA,CACA,wBAAA,CAGJ,iEAEI,eAAA,CACA,eAAA,CACA,mBAAA,CACA,iBAAA,CACA,gBAAA,CACA,UAAA,CACA,YAAA,CAEJ,uFAEI,gBAAA,CACA,kBAAA,CAGJ,iLAII,uCAAA,CAGJ,iDACI,kBAAA,CAGJ,+CACI,UAAA,CAGJ,uTAOI,wCAAA,CAGJ,8QAMI,oCAAA,CAGJ,gPAKI,wCAAA,CAGJ,yLAII,0CAAA,CAGJ,8CACI,wCAAA,CACA,eAAA,CAGJ,wIAGI,wCAAA,CACA,eAAA,CAGJ,yFAEI,gBAAA,CAEJ,4CACI,iBAAA,CAGJ,4CACI,WAAA,CAGJ,2CACI,iBAAA,CACA,kBAAA,CACA,wBAAA,CACA,iBAAA,CAGR,6CACI,iBAAA,CACA,wBAAA,CAMA,yBAAA,CACA,cAAA,CACA,MAAA,CACA,4BAAA,CACA,eAAA,CACA,kBAAA,CACA,mBAAA,CACA,wDAAA,CAZA,+FAEI,mBAAA,CACA,gBAAA,CAWJ,kDACI,aAAA,CACA,uCAAA,CACA,kBAAA,CACA,gBAAA,CAKZ,+CACI,cAAA,CACA,cAAA,CACA,eAAA,CACA,qCAAA,CACA,sCAAA,CACA,wEAAA,CACA,6BAAA,CAEI,2KAEI,QAAA,CCpQZ,6CACI,mBAAA,CACA,uBAAA,CACA,yBAAA,CACA,0BAAA,CACA,sBAAA,CAEJ,oBACI,+CAAA,CACA,iBAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,uBAAA,CACA,eAAA,CACA,4BAAA,CACA,mBAAA,CACA,YAAA,CACA,2CACI,UAAA,CACA,cAAA,CACA,qBAAA,CACA,kCAAA,CACA,mCAAA,CAEJ,0BACI,gDAAA,CACA,UAAA,CACA,iBAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,YAAA,CACA,SAAA,CACA,mBAAA,CACA,uCAAA,CACA,8BAAA,CC3CR,gDACI,YAAA,CACA,WAAA,CACA,iBAAA,CACA,eAAA,CACA,+BAAA,CACA,sBAAA,CACA,yCAAA,CACA,qCAAA,CAIA,wDACI,qCAAA,CAGQ,oIACI,eAAA,CACA,iCAAA,CACA,8JACI,YAAA,CAIJ,wKACI,mBAAA,CACA,6KAEI,aAAA,CC5B5B,2JACE,UAAA,CACA,mBAAA,CACA,iBAAA,CACA,eAAA,CACA,mDAAA,CACA,yDAAA,CACA,QAAA,CACA,MAAA,CACA,OAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,UAAA,CACA,6JAAA,CAOA,6BAAA,CACA,0CAAA,CACA,0BAAA,CACA,qDAAA,CCvBE,uEACI,YAAA,CACA,uBAAA,CACA,YAAA,CACA,gBAAA,CACA,wBAAA,CACA,0HACI,mBAAA,CAIZ,+DACI,YAAA,CACA,uBAAA,CACA,YAAA,CACA,gBAAA,CACA,wBAAA,CACA,kBAAA,CACA,yDAAA,CACA,wEACI,uBAAA,CAEJ,qGACI,mCAAA,CACA,YAAA,CACA,gCAAA,CACA,qCAAA,CACA,kCAAA,CACA,4GACI,eAAA,CACA,WAAA,CAEJ,uGACI,kCAAA,CACA,uCAAA,CCnCZ,+CACI,aAAA,CACA,6BAAA,CAEA,kEACI,YAAA,CACA,uBAAA,CACA,eAAA,CACA,qBAAA,CACA,wEAAA,CACA,qCAAA,CACA,sCAAA,CACA,6BAAA,CAEA,mGACI,YAAA,CACA,oBAAA,CACA,eAAA,CACA,qBAAA,CACA,yBAAA,CACA,sBAAA,CACA,iBAAA,CACA,kCAAA,CAEA,4IACI,qBAAA,CACA,mBAAA,CACA,kBAAA,CACA,iBAAA,CACA,yBAAA,CACA,qBAAA,CAEA,mJACI,YAAA,CAGJ,kLACI,gBAAA,CACA,cAAA,CACA,oCAAA,CACA,sCAAA,CACA,mCAAA,CACA,gBAAA,CACA,kBAAA,CACA,+CAAA,CACA,eAAA,CACA,sBAAA,CAIR,0IACI,aAAA,CACA,UAAA,CACA,iBAAA,CACA,iBAAA,CAEA,mKACI,oCAAA,CACA,WAAA,CACA,WAAA,CACA,8BAAA,CACA,sCAAA,CACA,mCAAA,CACA,YAAA,CACA,UAAA,CACA,eAAA,CACA,iBAAA,CAEA,qLACI,sBAAA,CAGJ,gLACI,kCAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CAGJ,uMACI,iBAAA,CACA,WAAA,CACA,UAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,SAAA,CAIR,yKACI,aAAA,CACA,UAAA,CACA,SAAA,CACA,iBAAA,CACA,mBAAA,CACA,eAAA,CACA,oBAAA,CACA,qBAAA,CAGJ,oKACI,4BAAA,CACA,UAAA,CACA,WAAA,CACA,WAAA,CACA,eAAA,CAEA,sKACI,+CAAA,CACA,+BAAA,CACA,4BAAA,CACA,cAAA,CAIR,0WAEI,mBAAA,CACA,WAAA,CAEA,8WACI,kCAAA,CAOZ,8GACI,YAAA,CAGJ,oIACI,iBAAA,CACA,oBAAA,CACA,eAAA,CACA,cAAA,CAEA,0IACI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,sCAAA,CACA,SAAA,CACA,4CAAA,CACA,YAAA,CACA,6CAAA,CAGJ,uKACI,0CAAA,CACA,SAAA,CACA,4CAAA,CACA,iBAAA,CACA,QAAA,CACA,OAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,gBAAA,CACA,YAAA,CAEA,yKACI,UAAA,CACA,WAAA,CAKJ,gJACI,WAAA,CAGJ,6KACI,SAAA,CAIR,gJACI,8BAAA,CAEA,kJACI,8BAAA,CAGJ,iKACI,YAAA,CAOpB,kFACI,gEAAA,CAGJ,kFACI,UAAA,CACA,uCAAA,CACA,iCAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,wBAAA,CACA,iBAAA,CAGJ,6EACI,aAAA,CACA,yCAAA,CAKJ,qEACI,iCAAA,CAGJ,+EACI,cAAA,CAEA,2FACI,6DAAA,CAKZ,kDACI,YAAA,CACA,oBAAA,CACA,qBAAA,CACA,eAAA,CACA,6BAAA,CAEA,sGAEI,uCAAA,CAGJ,wDACI,YAAA,CAGJ,oDACI,QAAA,CACA,oBAAA,CACA,kBAAA,CACA,YAAA,CACA,eAAA,CC9PR,6GACI,mBAAA,CACA,uBAAA,CACA,iBAAA,CACA,aAAA,CACA,4CAAA,CACA,6DAAA,CACA,SAAA,CACA,8BAAA,CACA,yBAAA,CAIQ,mKACI,8CAAA,CACA,yNACI,uCAAA,CAKR,+JACI,4CAAA,CACA,qNACI,qCAAA,CAKR,mKACI,8CAAA,CACA,yNACI,uCAAA,CAKR,6JACI,2CAAA,CACA,mNACI,oCAAA,CAOZ,iMACI,mCAAA,CACA,uPACI,iBAAA,CACA,0BAAA,CAKZ,2HACI,SAAA,CACA,0CAAA,CAEJ,mKACI,uBAAA,CH7DR,iOACE,UAAA,CACA,mBAAA,CACA,iBAAA,CACA,eAAA,CACA,mDAAA,CACA,yDAAA,CACA,QAAA,CACA,MAAA,CACA,OAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,UAAA,CACA,6JAAA,CAOA,6BAAA,CACA,0CAAA,CACA,0BAAA,CACA,qDAAA,CG4CM,2MACI,iBAAA,CAIR,yJACI,cAAA,CACA,UAAA,CACA,uDAAA,CACA,sDAAA,CACA,gCAAA,CACA,gBAAA,CACA,6TACI,sCAAA,CAIR,2IACI,YAAA,CAGJ,qKACI,aAAA,CAEJ,mLACI,6CAAA,CACA,0CAAA,CACA,6BAAA,CACA,kBAAA,CAGA,yLACI,gBAAA,CACA,aAAA,CACA,yBAAA,CACA,0BAAA,CACA,kBAAA,CACA,6CAAA,CACA,mMACI,iBAAA,CACA,oBAAA,CACA,2BAAA,CACA,4BAAA,CACA,mDAAA,CACA,iBAAA,CACA,0CAAA,CACA,8CAAA,CACA,8BAAA,CACA,gBAAA,CACA,iNACI,iBAAA,CACA,UAAA,CACA,qCAAA,CACA,sCAAA,CACA,uCAAA,CACA,wCAAA,CACA,UAAA,CACA,WAAA,CACA,cAAA,CACA,+DAAA,CACA,iBAAA,CACA,WAAA,CACA,qBAAA,CAGR,iMACI,SAAA,CAGR,uKA4BI,cAAA,CA1BI,mOACI,sCAAA,CAMA,ozBACI,YAAA,CAIZ,mPACI,gCAAA,CACA,iCAAA,CACA,mFAAA,CACA,2UACI,kCAAA,CACA,uCAAA,CACA,QAAA,CAEJ,qSACI,sCAAA,CACA,eAAA,CAOhB,mLACI,mBAAA,CACA,uBAAA,CACA,iBAAA,CACA,yBAAA,CACA,mQACI,kCAAA,CACA,uCAAA,CACA,iBAAA,CAEJ,yRACI,mBAAA,CACA,kBAAA,CACA,cAAA,CACA,yBAAA,CAIR,iMACI,6BAAA,CACA,qCAAA,CACA,mDAAA,CACA,wCAAA,CACA,cAAA,CACA,uCAAA,CACA,cAAA,CACA,eAAA,CACA,mBAAA,CACA,yBAAA,CACA,kBAAA,CACA,gBAAA,CACA,qMACI,mBAAA,CAEJ,mNACI,sBAAA,CACA,yBAAA,CAEJ,yNACI,WAAA,CAGA,+NACI,uCAAA,CAEJ,2NACI,qCAAA,CAEJ,+NACI,uCAAA,CAEJ,yNACI,oCAAA,CAKZ,yLACI,YAAA,CACA,uBAAA,CACA,yBAAA,CACA,eAAA,CACA,iBAAA,CACA,+QACI,cAAA,CACA,uSACI,SAAA,CACA,eAAA,CACA,eAAA,CAEJ,uVACI,wBAAA,CACA,aAAA,CAUA,uVACI,YAAA,CAEJ,2UACI,4CAAA,CACA,mBAAA,CC/PhB,iBAAA,CAOA,qHANY,CAOZ,2BAAA,CACA,6GARY,CASZ,mBAAA,CDuPgB,gFAAA,CACA,wFAAA,CAGA,2aACI,YAAA,CAMhB,yRACI,YAAA,CACA,aAAA,CACA,aAAA,CACA,oBAAA,CACA,kBAAA,CACA,iBAAA,CACA,4BAAA,CACA,WAAA,CACA,gkBAEI,eAAA,CACA,sBAAA,CACA,kBAAA,CACA,uCAAA,CAIZ,oUAEI,mBAAA,CACA,gdACI,mBAAA,CAEJ,46BAEI,oBAAA,CAIA,wkBACI,YAAA,CAIR,g4BAEI,6BAAA,CACA,0CAAA,CACA,0DAAA,CACA,WAAA,CACA,w4DAEI,uCAAA,CAKR,iMACI,kDAAA,CAIR,qKACI,YAAA,CAEJ,+OACI,YAAA,CAKA,ijBACI,yDAAA,CACA,eAAA,CACA,MAAA,CAMJ,urBACI,qBAAA,CAGA,mkCACI,SAAA,CACA,+tCACI,SAAA,CE3VpB,6BACI,YAAA,CACA,qBAAA,CACA,qCAAA,CACA,sCAAA,CACA,UAAA,CACA,kBAAA,CACA,uBAAA,CACA,mBAAA,CACA,0BAAA,CACA,gEACI,YAAA,CACA,qBAAA,CACA,UAAA,CACA,uBAAA,CACA,mBAAA,CACA,0BAAA,CACA,6BAAA,CACA,yGACI,QAAA,CACA,kCAAA,CACA,WAAA,CACA,mDAAA,CAGJ,iFACI,yDAAA,CAGJ,qGACI,YAAA,CACA,qBAAA,CACA,UAAA,CACA,uBAAA,CACA,sBAAA,CACA,0BAAA,CACA,eAAA,CACA,cAAA,CACA,mDAAA,CACA,qCAAA,CACA,uCAAA,CACA,4CAAA,CACA,yBAAA,CACA,+NAEI,0CAAA,CACA,kcAEI,uCAAA,CAGR,+IACI,oCAAA,CACA,sCAAA,CACA,gBAAA,CACA,WAAA,CAEJ,sJACI,sCAAA,CACA,WAAA,CACA,aAAA,CC5DhB,mCACI,QAAA,CACA,6BAAA,CACA,+BAAA,CAEA,gFACI,qCAAA,CACA,qCAAA,CACA,+BAAA,CACA,6BAAA,CACA,iBAAA,CACA,uCAAA,CACA,wEAAA,CACA,eAAA,CAEA,yHACI,YAAA,CACA,oBAAA,CACA,0BAAA,CACA,kBAAA,CACA,iBAAA,CACA,6BAAA,CACA,yBAAA,CACA,+EAAA,CAEA,4HACI,QAAA,CAGJ,gIACI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,kDAAA,CACA,WAAA,CACA,mBAAA,CAIR,2GACI,eAAA,CACA,qBAAA,CACA,UAAA,CACA,iBAAA,CACA,eAAA,CACA,YAAA,CACA,uBAAA,CACA,0BAAA,CACA,sBAAA,CACA,4BAAA,CAEA,mJACI,mBAAA,CACA,yBAAA,CAGJ,wJACI,WAAA,CAGJ,8IACI,UAAA,CACA,qBAAA,CAGJ,sIACI,kCAAA,CAGJ,gJACI,YAAA,CACA,oBAAA,CACA,6BAAA,CACA,kBAAA,CACA,yBAAA,CACA,eAAA,CACA,cAAA,CACA,wCAAA,CACA,wCAAA,CACA,iBAAA,CACA,sBAAA,CACA,wCAAA,CAGI,yMACI,YAAA,CAIR,sJACI,yCAAA,CASI,mpBACI,UAAA,CACA,iBAAA,CACA,SAAA,CACA,UAAA,CACA,UAAA,CACA,WAAA,CACA,MAAA,CACA,KAAA,CACA,wCAAA,CAKJ,mKACI,+CAAA,CAGJ,wNACI,oCAAA,CAKJ,sKACI,kDAAA,CAGJ,2NACI,uCAAA,CAKJ,sKACI,kDAAA,CAGJ,2NACI,uCAAA,CAKJ,oKACI,gDAAA,CAGJ,yNACI,qCAAA,CAKZ,wJACI,YAAA,CACA,oBAAA,CACA,0BAAA,CACA,kBAAA,CACA,yBAAA,CACA,aAAA,CACA,UAAA,CACA,MAAA,CACA,aAAA,CACA,eAAA,CAEA,0MACI,eAAA,CACA,MAAA,CACA,kBAAA,CACA,sBAAA,CAIR,wJACI,YAAA,CACA,4BAAA,CACA,wBAAA,CACA,kBAAA,CACA,yBAAA,CACA,aAAA,CACA,UAAA,CACA,mCAAA,CAEA,sKACI,UAAA,CACA,WAAA,CACA,cAAA,CAEA,2KACI,oCAAA,CAGJ,8KACI,uCAAA,CAGJ,8KACI,uCAAA,CAGJ,4KACI,qCAAA,CAKZ,wJACI,4BAAA,CAGJ,sJACI,YAAA,CACA,oBAAA,CACA,0BAAA,CACA,kBAAA,CACA,yBAAA,CACA,cAAA,CACA,eAAA,CACA,UAAA,CACA,aAAA,CAEA,2JACI,sBAAA,CACA,eAAA,CACA,kBAAA,CAMhB,2GACI,6BAAA,CAKZ,yCACI,+CAAA,CACA,gDAAA,CACA,6CAAA,CACA,iBAAA,CACA,6BAAA,CAGJ,kDACI,kCAAA,CAGJ,gDACI,WAAA,CAEA,mEACI,kCAAA,CAIR,mCAaI,kCAAA,CAZA,0CACI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,OAAA,CACA,KAAA,CACA,QAAA,CACA,0CAAA,CACA,WAAA,CACA,mBAAA,CAKJ,sCACI,QAAA,CACA,kCAAA,CAGI,2DACI,gCAAA,CAGJ,4DACI,QAAA,CAKZ,2FACI,eAAA,CClSR,iBACE,YAAA,CACA,6BACE,gCAAA,CAKF,8CHPE,iBAAA,CAOA,qHANY,CAOZ,2BAAA,CACA,6GARY,CASZ,mBAAA,CGGJ,wBACE,qBAAA,CACA,cAAA,CACA,yCAAA,CACA,sCACE,iBAAA,CACA,gDAAA,CACA,sCAAA,CACA,0CAAA,CACA,0CAAA,CACA,uCAAA,CACA,kBAAA,CACA,oCAAA,CACA,kCAAA,CACA,wEAAA,CACA,oBAAA,CACA,uBAAA,CAGA,kDACE,YAAA,CAIF,uEACE,sBAAA,CAKN,+CACE,cAAA,CACA,eAAA,CAEE,0FACE,yDAAA,CAIN,uEAEE,iBAAA,CACA,gBAAA,CACA,UAAA,CACA,qBAAA,CACA,yGACE,eAAA,CACA,6JACE,gBAAA,CACA,mBAAA,CACA,QAAA,CACA,eAAA,CACA,eAAA,CACA,2OACE,YAAA,CAIN,+EACE,sBAAA,CCzEJ,mCACI,aAAA,CACA,qBAAA,CACA,UAAA,CACA,eAAA,CACA,iBAAA,CACA,uEACI,YAAA,CACA,wGACI,qBAAA,CACA,YAAA,CACA,uBAAA,CACA,eAAA,CACA,sBAAA,CACA,uBAAA,CACA,6BAAA,CACA,yBAAA,CACA,uJACI,yBAAA,CACA,YAAA,CACA,oBAAA,CACA,qBAAA,CACA,UAAA,CACA,eAAA,CACA,0BAAA,CACA,sBAAA,CACA,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,mMACI,MAAA,CACA,eAAA,CAGR,yJACI,eAAA,CACA,qBAAA,CACA,UAAA,CAKJ,iKACI,YAAA,CCtBhB,UAEI,sCAAA,CACA,qCAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,QAAA,CACA,SAAA,CAGJ,kBAMI,eAAA,CAGJ,oBACI,SAAA,CACA,UAAA,CACA,WAAA,CACA,+BACI,SAAA,CACA,UAAA,CAIR,QACI,YAAA",sourcesContent:[`:root {
    --mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: var(--vscode-font-size, 13px);
    font-family: var(--mynah-font-family, "system-ui");
    --mynah-max-width: 2560px;
    --mynah-sizing-base: 0.25rem;
    --mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);
    --mynah-sizing-1: var(--mynah-sizing-base);
    --mynah-sizing-2: calc(var(--mynah-sizing-base) * 2);
    --mynah-sizing-3: calc(var(--mynah-sizing-base) * 3);
    --mynah-sizing-4: calc(var(--mynah-sizing-base) * 4);
    --mynah-sizing-5: calc(var(--mynah-sizing-base) * 5);
    --mynah-sizing-6: calc(var(--mynah-sizing-base) * 6);
    --mynah-sizing-7: calc(var(--mynah-sizing-base) * 7);
    --mynah-sizing-8: calc(var(--mynah-sizing-base) * 8);
    --mynah-sizing-9: calc(var(--mynah-sizing-base) * 9);
    --mynah-sizing-10: calc(var(--mynah-sizing-base) * 10);
    --mynah-sizing-11: calc(var(--mynah-sizing-base) * 11);
    --mynah-sizing-12: calc(var(--mynah-sizing-base) * 12);
    --mynah-sizing-13: calc(var(--mynah-sizing-base) * 13);
    --mynah-sizing-14: calc(var(--mynah-sizing-base) * 14);
    --mynah-sizing-15: calc(var(--mynah-sizing-base) * 15);
    --mynah-sizing-16: calc(var(--mynah-sizing-base) * 16);
    --mynah-sizing-17: calc(var(--mynah-sizing-base) * 17);
    --mynah-sizing-18: calc(var(--mynah-sizing-base) * 18);
    --mynah-chat-wrapper-spacing: var(--mynah-sizing-4);
    --mynah-button-border-width: 1px;
    --mynah-border-width: 1px;

    --mynah-color-text-default: var(--vscode-foreground);
    --mynah-color-text-strong: var(--vscode-input-foreground);
    --mynah-color-text-weak: var(--vscode-disabledForeground);
    --mynah-color-text-link: var(--vscode-textLink-foreground);
    --mynah-color-text-input: var(--vscode-input-foreground);

    --mynah-color-bg: var(--vscode-sideBar-background);
    --mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));
    --mynah-color-light: rgba(0, 0, 0, 0.05);

    --mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));

    --mynah-color-highlight: rgba(255, 179, 0, 0.25);
    --mynah-color-highlight-text: #886411;

    /* previously it was context */
    --mynah-color-toggle: var(--vscode-sideBar-background);
    --mynah-color-toggle-reverse: rgba(0, 0, 0, 0.5);

    --mynah-color-syntax-bg: var(--vscode-terminal-dropBackground);
    --mynah-color-syntax-variable: var(--vscode-debugTokenExpression-name);
    --mynah-color-syntax-function: var(--vscode-gitDecoration-modifiedResourceForeground);
    --mynah-color-syntax-operator: var(--vscode-debugTokenExpression-name);
    --mynah-color-syntax-attr-value: var(--vscode-debugIcon-stepBackForeground);
    --mynah-color-syntax-attr: var(--vscode-debugTokenExpression-string);
    --mynah-color-syntax-property: var(--vscode-terminal-ansiCyan);
    --mynah-color-syntax-comment: var(--vscode-debugConsole-sourceForeground);
    --mynah-color-syntax-code: var(--vscode-terminal-ansiBlue);
    --mynah-syntax-code-font-family: var(--vscode-editor-font-family);
    --mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));

    --mynah-color-status-info: var(--vscode-editorInfo-foreground);
    --mynah-color-status-success: var(--vscode-terminal-ansiGreen);
    --mynah-color-status-warning: var(--vscode-editorWarning-foreground);
    --mynah-color-status-error: var(--vscode-editorError-foreground);

    --mynah-color-button: var(--vscode-button-background);
    --mynah-color-button-reverse: var(--vscode-button-foreground);

    --mynah-color-alternate: var(--vscode-button-secondaryBackground);
    --mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);

    --mynah-card-bg: var(--vscode-editor-background);

    --mynah-shadow-button: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-card: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-overlay: 0 0px 15px -5px rgba(0, 0, 0, 0.4);

    --mynah-font-size-xxsmall: 0.75rem;
    --mynah-font-size-xsmall: 0.85rem;
    --mynah-font-size-small: 0.95rem;
    --mynah-font-size-medium: 1rem;
    --mynah-font-size-large: 1.125rem;
    --mynah-line-height: 1.25rem;
    --mynah-syntax-code-line-height: 1.25rem;

    --mynah-card-radius: var(--mynah-sizing-2);
    --mynah-input-radius: var(--mynah-sizing-1);
    --mynah-card-radius-corner: 0;
    --mynah-button-radius: var(--mynah-sizing-1);

    --mynah-bottom-panel-transition: all 850ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-very-short-transition: all 600ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-very-long-transition: all 1650ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-short-transition: all 550ms cubic-bezier(0.85, 0.15, 0, 1);
    --mynah-short-transition-rev: all 580ms cubic-bezier(0.35, 1, 0, 1);
    --mynah-short-transition-rev-opacity: opacity 750ms cubic-bezier(0.35, 1, 0, 1);
    --mynah-text-flow-transition: all 800ms cubic-bezier(0.35, 1.2, 0, 1),
        transform 800ms cubic-bezier(0.2, 1.05, 0, 1);
}
`,`@keyframes horizontal-roll {
    0% {
        background-position: 0% bottom;
    }
    100% {
        background-position: -200% bottom;
    }
}

@keyframes bounce {
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        transform: translate3d(0, calc(-1 * var(--mynah-sizing-2)), 0);
    }
}

@keyframes spinner-spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes typewriter {
    0% {
        visibility: hidden;
        opacity: 0;
    }
    1% {
        visibility: visible;
        opacity: 0;
    }
    100% {
        opacity: 1;
        visibility: visible;
    }
}
@keyframes typewriter-visibility-only {
    to {
        visibility: visible;
    }
}
`,`$smoothbezier: cubic-bezier(0.25, 0, 0, 1);
$smoothduration: 400ms;
#mynah-wrapper {
    display: flex;
    flex-flow: column nowrap;
    margin: 0 auto;
    width: 100%;
    max-width: var(--mynah-max-width);
    box-sizing: border-box;
    height: 100%;
    position: relative;
    overflow: hidden;
    justify-content: stretch;
    align-items: stretch;

    > .mynah-ui-tab-contents-wrapper {
        flex: 1;
        position: relative;
        &:first-child {
            > .mynah-chat-wrapper {
                display: flex;
            }
        }
    }
}
`,`button.mynah-button {
    border: none;
    min-width: var(--mynah-sizing-8);
    height: var(--mynah-sizing-8);
    border-radius: var(--mynah-button-radius);
    background-color: var(--mynah-color-button);
    color: var(--mynah-color-button-reverse);
    box-shadow: var(--mynah-shadow-button);
    cursor: pointer;
    transition: var(--mynah-very-short-transition);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: none;
    overflow: hidden;
    position: relative;
    transform: translate3d(0, 0, 0) scale(1.00001);
    padding: 0;
    filter: brightness(0.9);
    opacity: 0.85;
    &.mynah-bottom-block-close-button {
        position: absolute;
        align-self: flex-end;
        transform: translate3d(var(--mynah-sizing-2), calc(-100% - var(--mynah-sizing-6)), 0px);
        background-color: var(--mynah-card-bg);
        color: var(--mynah-color-text-default);
    }
    &[disabled="disabled"] {
        opacity: 0.25 !important;
        pointer-events: none;
    }
    &.mynah-button-secondary {
        background-color: transparent;
        color: inherit;
        box-shadow: none;
        opacity: 0.75;
        height: var(--mynah-sizing-6);
        &:focus-visible,
        &:hover {
            opacity: 1;
        }
        &:active {
            box-shadow: none;
        }
    }
    &:focus-visible,
    &:hover {
        filter: brightness(1);
        opacity: 1;
    }
    &:active {
        filter: brightness(0.9);
        opacity: 0.85;
    }
    &.mynah-icon-button {
        width: var(--mynah-sizing-10);
        height: var(--mynah-sizing-10);
        border-radius: 0;
    }
    > span {
        white-space: nowrap;
        font-size: var(--mynah-font-size-medium);
        max-width: 35vw;
        transition: var(--mynah-very-long-transition);
        overflow: hidden;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: var(--mynah-sizing-3);
        padding-right: var(--mynah-sizing-3);
    }
    > i + span {
        padding-left: var(--mynah-sizing-base);
    }
}
`,`.mynah-form-input-wrapper {
    position: relative;
    display: flex;
    box-sizing: border-box;
    gap: var(--mynah-sizing-2);
    flex-flow: column nowrap;
    &[disabled] {
        .mynah-form-input {
            opacity: 0.5 !important;
        }
        &,
        & * {
            pointer-events: none !important;
        }
    }
    > .mynah-form-input-label {
        > .mynah-ui-form-item-mandatory-title {
            display: inline-flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            gap: var(--mynah-sizing-1);
            > .mynah-ui-icon {
                color: var(--mynah-color-status-warning);
                opacity: 0.75;
                font-size: 75%;
            }
        }
    }
    .mynah-form-input-container {
        position: relative;
        display: flex;
        box-sizing: border-box;
        justify-content: flex-end;
        align-items: center;
        > .mynah-form-input {
            width: 100%;
            left: 0;
            color: var(--mynah-color-text-default);
            border-radius: var(--mynah-input-radius);
            &::placeholder {
                color: var(--mynah-color-text-weak);
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            option.empty-option {
                font-style: italic;
                opacity: 0.5;
            }
            &:not(.no-border) {
                padding: var(--mynah-sizing-3);
                border: var(--mynah-border-width) solid var(--mynah-color-border-default);
                background-color: var(--mynah-card-bg);
            }
            -webkit-appearance: none;
            appearance: none;
            text-indent: 1px;
            text-overflow: clip;
            outline: none;
            > .mynah-form-input-radio-wrapper {
                display: inline-flex;
                flex-flow: row nowrap;
                justify-content: center;
                align-items: center;
                &:not(:last-child) {
                    margin-right: var(--mynah-sizing-4);
                }
                > .mynah-form-input-radio-label {
                    display: inline-flex;
                    flex-flow: row nowrap;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    gap: var(--mynah-sizing-1);
                    cursor: pointer;
                    > input {
                        position: absolute;
                        opacity: 0;
                        cursor: pointer;
                        height: 0;
                        width: 0;
                        &:checked + .mynah-form-input-radio-check {
                            border-color: var(--mynah-color-button);
                            > .mynah-ui-icon {
                                transform: scale(0.75);
                                color: var(--mynah-card-bg);
                                opacity: 1;
                            }
                            &::after {
                                transform: scale(1);
                                background-color: var(--mynah-color-button);
                                opacity: 1;
                            }
                        }
                    }
                    > .mynah-form-input-radio-check {
                        position: relative;
                        transition: var(--mynah-bottom-panel-transition);
                        width: var(--mynah-sizing-6);
                        height: var(--mynah-sizing-6);
                        border-radius: var(--mynah-sizing-3);
                        overflow: hidden;
                        box-sizing: border-box;
                        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
                        display: inline-flex;
                        flex-flow: row nowrap;
                        justify-content: center;
                        align-items: center;
                        > .mynah-ui-icon {
                            position: relative;
                            transition: inherit;
                            transform: scale(0);
                            transform-origin: center center;
                            color: var(--mynah-color-button);
                            z-index: 10;
                        }
                        &::after {
                            $edgeSpace: calc(0 * var(--mynah-border-width));
                            content: "";
                            transition: inherit;
                            position: absolute;
                            top: $edgeSpace;
                            right: $edgeSpace;
                            bottom: $edgeSpace;
                            left: $edgeSpace;
                            background-color: var(--mynah-color-border-default);
                            transform: scale(0.5);
                            transform-origin: center center;
                            opacity: 0;
                            border-radius: inherit;
                            z-index: 5;
                        }
                    }
                }
            }

            > .mynah-feedback-form-stars-container {
                transition: var(--mynah-short-transition-rev);
                transform-origin: right bottom;
                display: inline-flex;
                flex-flow: row nowrap;
                > .mynah-feedback-form-star {
                    cursor: pointer;
                    padding-right: var(--mynah-sizing-1);
                    color: var(--mynah-color-button);
                    font-size: 1.5rem;
                    transition: var(--mynah-very-short-transition);
                    > .mynah-ui-icon {
                        transition: var(--mynah-very-short-transition);
                        opacity: 0.4;
                        transform: translate3d(0, 0, 0) scale(0.6);
                    }
                }
                &[selected-star]:not(:hover) > :not(.mynah-feedback-form-star.selected ~ .mynah-feedback-form-star),
                &:hover > :not(.mynah-feedback-form-star:hover ~ .mynah-feedback-form-star) {
                    > .mynah-ui-icon {
                        opacity: 1;
                        transform: translate3d(0, 0, 0) scale(1);
                    }
                }
            }
        }
        > textarea.mynah-form-input {
            font-family: var(--mynah-font-family);
            resize: none;
            font-size: var(--mynah-font-size-medium);
            color: var(--mynah-color-text-input);
            outline: none;
        }
        > .mynah-select-handle {
            position: absolute;
            color: var(--mynah-color-text-weak);
            pointer-events: none;
            transform: translateX(-100%);
        }
    }
}

.mynah-chat-item-form-items-container {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--mynah-sizing-5);
    overflow: hidden;
    padding-bottom: var(--mynah-sizing-1);
}
.mynah-chat-item-buttons-container {
    display: flex;
    flex-flow: row-reverse wrap;
    gap: var(--mynah-sizing-2);
    overflow: hidden;
    padding-top: var(--mynah-sizing-1);
    padding-bottom: var(--mynah-sizing-1);
    justify-content: flex-end;
    align-items: center;
    &.mynah-chat-item-buttons-container-use-real-buttons {
        justify-content: flex-start;
    }
}
`,`.mynah-toggle-container {
    flex-flow: row nowrap;
    max-width: 100%;
    overflow: hidden;
    align-items: center;
    position: relative;
    background: var(--mynah-color-toggle);
    color: var(--mynah-color-toggle-reverse);
    justify-content: flex-start;
    overflow-y: hidden;
    overflow-x: auto;
    display: flex;
    > span {
        overflow: hidden;
        height: 100%;
        min-width: var(--mynah-sizing-8);
        max-width: calc(3 * var(--mynah-sizing-15));
        flex-shrink: 0;
        > .mynah-toggle-option {
            display: none;
            &:not(:first-child) + .mynah-toggle-option-label {
                margin-left: calc(-1 * var(--mynah-sizing-1));
            }
            &:not(:checked) + .mynah-toggle-option-label {
                &.indication:after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    margin-top: calc(-1 * var(--mynah-sizing-half));
                    left: var(--mynah-sizing-2);
                    height: var(--mynah-sizing-1);
                    width: var(--mynah-sizing-1);
                    background-color: var(--mynah-color-status-success);
                    border-radius: var(--mynah-sizing-1);
                    border: 1px solid var(--mynah-color-text-weak);
                    opacity: 0.75;
                }
            }
            & + .mynah-toggle-option-label {
                cursor: pointer;
                pointer-events: all;
                position: relative;
                z-index: 100;
                padding: 0 var(--mynah-sizing-3) 0 var(--mynah-sizing-5);
                height: 100%;
                box-sizing: border-box;
                display: inline-flex;
                overflow: hidden;
                justify-content: stretch;
                align-items: center;
                color: var(--mynah-color-text-weak);
                border-right: 1px solid var(--mynah-color-border-default);
                border-top: 1px solid transparent;
                background-color: var(--mynah-color-bg);
                opacity: 0.75;
                max-width: 100%;
                &,
                & * {
                    user-select: none;
                }
                > span {
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    max-width: 100%;
                    display: block;
                }
                > .mynah-toggle-close-button {
                    margin-left: var(--mynah-sizing-3);
                    font-size: var(--mynah-font-size-xsmall);
                    min-width: 1em;
                }
            }
            &:checked + .mynah-toggle-option-label {
                border-top-color: var(--mynah-color-button);
                color: var(--mynah-color-text-default);
                opacity: 1;
                background-color: var(--mynah-color-tab-active);
            }
            &[disabled="disabled"] {
                pointer-events: none !important;
                & + .mynah-toggle-option-label {
                    pointer-events: none !important;
                    opacity: 0.25;
                }
            }
        }
    }

    &.mynah-toggle-direction-vertical {
        flex-flow: column nowrap;
        gap: var(--mynah-sizing-3);
    }
}

.mynah-toggle-disabled-tooltip-container {
    max-width: 30vw;
    display: inline-block;
    padding: var(--mynah-sizing-3);
    font-size: 80%;
    opacity: 0.85;
}
`,`.mynah-ui-icon {
    font-style: normal;
    font-weight: normal;
    display: inline-flex;
    width: 1em;
    height: 1em;
    font-variant: normal;
    text-transform: none;
    -webkit-mask-size: 100%;
    mask-size: 100%;
    -webkit-mask-position: center center;
    mask-position: center center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    color: inherit;
    background-color: currentColor;
    > span {
        display: none;
    }
}
`,`.mynah-nav-tabs-wrapper {
    border-top: var(--mynah-button-border-width) solid var(--mynah-color-border-default);
    background-color: var(--mynah-color-bg);
    display: flex;
    align-items: center;
    overflow: hidden;
    z-index: 100;
    min-height: var(--mynah-sizing-10);
    max-height: var(--mynah-sizing-10);
    position: relative;
    &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        width: auto;
        height: var(--mynah-button-border-width);
        background-color: var(--mynah-color-border-default);
    }

    > .mynah-toggle-container {
        height: 100%;
        background: none;
        box-sizing: border-box;
        > span {
            white-space: nowrap;
        }
    }
    &:empty {
        display: none;
    }

    &.mynah-nav-tabs-loading,
    &.mynah-nav-tabs-loading * {
        pointer-events: none;
    }
}

.mynah-nav-tabs-max-reached-overlay {
    min-width: max(20vw, 100px);
    max-width: 90vw;
}

.mynah-overlay > .mynah-overlay-container .mynah-card.mynah-nav-tabs-close-confirmation-overlay {
    > .mynah-nav-tabs-close-confirmation-buttons-wrapper {
        display: flex;
        flex-flow: row nowrap;
        max-width: 15vw;
        gap: var(--mynah-sizing-3);
        > .mynah-button {
            pointer-events: all !important;
            &.mynah-nav-tabs-close-confirmation-close-button {
                border: var(--mynah-border-width) solid var(--mynah-color-border-default);
                color: var(--mynah-color-text-default);
                background-color: transparent;
                &:hover{
                    border-color: var(--mynah-color-text-default);
                }
            }
        }
    }
}
`,`.mynah-card {
    text-decoration: none;
    outline: none;
    position: relative;
    transition: var(--mynah-short-transition-rev);
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    gap: var(--mynah-sizing-3);
    transform: translate3d(0, 0, 0);
    flex: auto 0 0;
    width: 100%;
    overflow: hidden;
    border-radius: var(--mynah-card-radius);
    box-shadow: var(--mynah-shadow-card);

    &.padding {
        &-none {
            padding: 0;
            border-radius: 0;
        }
        &-small {
            padding: var(--mynah-sizing-1);
        }
        &-medium {
            padding: var(--mynah-sizing-3);
        }
        &-large {
            padding: var(--mynah-sizing-5);
        }
    }
    &.background {
        background-color: var(--mynah-card-bg);
    }
    &.border {
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
    }

    > * {
        z-index: 10;
        position: relative;
    }

    @import '../source-link-header';
    @import '../votes-wrapper';
}

@import 'card-body';
`,`> .mynah-source-link-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 1;
    gap: var(--mynah-sizing-2);
    transition: var(--mynah-very-short-transition);
    > .mynah-source-thumbnail {
        font-style: normal;
        font-weight: normal;
        display: none;
        width: var(--mynah-sizing-8);
        height: var(--mynah-sizing-8);
        font-variant: normal;
        text-transform: none;
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
        border-radius: 100%;
        background-size: 85%;
        background-clip: content-box;
        background-position: center center;
        background-repeat: no-repeat;
        align-self: flex-start;
        box-sizing: border-box;
        background-color: var(--mynah-card-bg);
        position: relative;
        overflow: hidden;
        &:after {
            content: "";
            pointer-events: none;
            box-sizing: border-box;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: auto;
            height: auto;
            border: 2px solid var(--mynah-card-bg);
            border-radius: 100%;
        }
    }
    > .mynah-source-link-title-wrapper {
        flex: 1 1 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        gap: var(--mynah-sizing-half);
        max-width: 100%;
        overflow: hidden;
        cursor: pointer;
        &:hover > .mynah-source-link-title > .mynah-source-link-expand-icon {
            opacity: 0.75;
            align-self: baseline;
        }
        > .mynah-source-link-title {
            font-size: var(--mynah-font-size-medium);
            font-weight: 500;
            color: var(--mynah-color-text-strong);
            width: 100%;
            display: inline-flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: flex-start;
            gap: var(--mynah-sizing-2);
            white-space: normal;
            text-overflow: ellipsis;
            text-decoration: none;
            outline: none;
            overflow: hidden;
            > .mynah-source-link-expand-icon {
                transition: var(--mynah-short-transition-rev);
                opacity: 0;
                color: var(--mynah-color-text-weak);
                font-size: var(--mynah-font-size-xsmall);
                display: inline;
                padding: var(--mynah-sizing-1);
            }
        }
        > .mynah-source-link-url {
            font-size: var(--mynah-font-size-xsmall);
            font-weight: 300;
            color: var(--mynah-color-text-link);
            white-space: nowrap;
            text-overflow: ellipsis;
            text-decoration: none;
            outline: none;
            overflow: hidden;
            max-width: 100%;
            position: relative;
            padding-bottom: var(--mynah-sizing-1);
            display: inline-block;
            transition: var(--mynah-short-transition-rev);
            &:after {
                content: "";
                position: relative;
                display: block;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                border-radius: var(--mynah-sizing-half);
                background-color: currentColor;
                transform: translate3d(-30%, 0, 0);
                transition: var(--mynah-short-transition-rev);
                opacity: 0;
            }
            &:hover {
                &:after {
                    transform: translate3d(0, 0, 0);
                    opacity: 1;
                }
            }
            > span {
                &:not(:last-child):after {
                    content: ">";
                    margin-left: var(--mynah-sizing-1);
                    margin-right: var(--mynah-sizing-1);
                }
                &:nth-child(3) ~ span:not(:last-child) {
                    display: none;
                }
                &:last-child {
                    font-weight: bold;
                }
                &:nth-child(3):not(:last-child):after {
                    content: "> ... >";
                }
            }
        }
        > .mynah-title-meta-block {
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: flex-start;
            gap: var(--mynah-sizing-1);
            margin-bottom: var(--mynah-sizing-half);
            &:empty {
                display: none;
            }
            > .mynah-title-meta-block-item {
                display: inline-flex;
                flex-flow: row nowrap;
                align-items: center;
                justify-content: flex-start;
                gap: var(--mynah-sizing-1);
                padding: calc(var(--mynah-sizing-half) * 3);
                border: var(--mynah-border-width) solid var(--mynah-color-border-default);
                border-radius: var(--mynah-button-radius);
                opacity: 0.75;
                > .mynah-icon {
                    opacity: 0.5;
                    font-size: var(--mynah-font-size-medium);
                    color: var(--mynah-color-text-weak);
                }
                > .mynah-title-meta-block-item-text {
                    font-size: var(--mynah-font-size-xxsmall);
                    color: var(--mynah-color-text-weak);
                    &::first-letter {
                        text-transform: capitalize;
                    }
                }
                &.approved-answer {
                    border-color: green;
                    position: relative;
                    &:before {
                        content: "";
                        border-radius: var(--mynah-button-radius);
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-color: green;
                        opacity: 0.04;
                    }
                    > .mynah-icon {
                        opacity: 1;
                        color: green;
                        border-radius: var(--mynah-button-radius);
                        width: var(--mynah-sizing-3);
                        height: var(--mynah-sizing-3);
                    }
                }
            }
        }
    }
}
`,`> .mynah-card-votes-wrapper {
    align-items: center;
    gap: var(--mynah-sizing-2);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid var(--mynah-color-border-default);
    padding-top: var(--mynah-sizing-3);
    font-size: var(--mynah-font-size-small);
    > span.mynah-feedback-thanks {
        overflow: hidden;
    }
    > .mynah-button > span {
        padding: 0;
        font-size: var(--mynah-font-size-small);
        color: var(--mynah-color-text-link);
    }
    > .mynah-vote-text {
        color: var(--mynah-color-text-weak);
        font-size: var(--mynah-font-size-small);
    }
    > .mynah-card-vote {
        position: relative;
        overflow: visible;
        display: inline-flex;
        align-items: center;
        box-sizing: border-box;
        gap: var(--mynah-sizing-3);
        > .mynah-vote-radio {
            display: none;
        }
        > .mynah-vote-label {
            z-index: 10;
            cursor: pointer;
            font-size: var(--mynah-font-size-small);
            transition: var(--mynah-short-transition);
            width: var(--mynah-sizing-5);
            height: var(--mynah-sizing-5);
            display: inline-flex;
            justify-content: center;
            align-items: center;
            color: var(--mynah-color-text-weak);
            opacity: 0.5;
            > * {
                pointer-events: none;
            }
            > i {
                height: calc(var(--mynah-sizing-6) + var(--mynah-sizing-half));
            }
        }
        > .mynah-vote-up-radio:checked {
            & ~ .mynah-vote-up {
                color: var(--mynah-color-text-default);
                opacity: 1;
            }
        }
        > .mynah-vote-down-radio:checked {
            & ~ .mynah-vote-down {
                color: var(--mynah-color-text-default);
                opacity: 1;
            }
        }
    }
}
`,`.mynah-card-body {
    flex: 1;
    overflow: hidden;
    position: relative;
    display: block;
    line-height: var(--mynah-line-height);

    img {
        max-width: 100%;
        border-radius: var(--mynah-card-radius);
        vertical-align: middle;
    }

    a {
        pointer-events: bounding-box;
        color: var(--mynah-color-text-link);
    }

    >*:not(pre) {
        font-size: var(--mynah-font-size-medium);
    }

    span[start][end] {
        display: none;
    }

    >p:first-child {

        &,
        & h1:first-child,
        & h2:first-child,
        & h3:first-child,
        & h4:first-child,
        & h5:first-child {
            margin-top: 0;
        }
    }

    >p:first-child:last-of-type,
    >p p:first-child {
        margin: 0;
    }

    &,
    &>div {
        >*:not(div):not(pre) {
            margin-block-start: 0.75em;
            margin-block-end: 0.75em;
            padding-bottom: 1px !important;

            &:first-child {
                margin-block-start: 0;
            }

            user-select: text;

            &:empty {
                display: none;
            }
        }

        >p:last-of-type {
            margin-block-end: 0;
        }

        mark[reference-tracker] {
            background-color: var(--mynah-color-highlight);
            color: inherit;
            cursor: help;
        }

        .amzn-mynah-search-result-highlight {
            background-color: var(--mynah-color-highlight);
            color: var(--mynah-color-highlight-text);
        }

        .amzn-mynah-search-result-ellipsis {
            display: inline-block;
            position: relative;
            padding-left: var(--mynah-sizing-2);
            margin-top: var(--mynah-sizing-1);
            margin-bottom: var(--mynah-sizing-1);
            font-size: calc(1em + var(--mynah-sizing-1)) !important;
            user-select: none;
            cursor: default;
            height: var(--mynah-sizing-7);

            &:before {
                pointer-events: none;
                content: "";
                width: calc(1em + var(--mynah-sizing-2));
                height: calc(1em + var(--mynah-sizing-2));
                position: absolute;
                left: 0;
                top: 0;
                background-color: currentColor;
                opacity: 0.1;
                border-radius: var(--mynah-sizing-1);
            }
        }
    }
}`,`#mynah-feedback-form-wrapper {
    display: flex;
    flex-flow: column nowrap;
    position: absolute;
    bottom: 0;
    left: var(--mynah-sizing-2);
    right: var(--mynah-sizing-2);
    width: auto;
    box-sizing: border-box;
    z-index: 9999999;
    opacity: 0;
    transform: translate3d(0, 5vh, 0);
    transition: var(--mynah-bottom-panel-transition);
    overflow: visible;
    &:before {
        transition: all 400ms cubic-bezier(0.25, 0, 0, 1);
        content: "";
        position: absolute;
        right: calc(-1 * var(--mynah-sizing-2));
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: black;
        opacity: 0;
        pointer-events: none;
        transform: translate3d(0, 0, 0) scale(2);
        transform-origin: center center;
        z-index: -1;
    }
    > .mynah-bottom-block-close-button {
        transform: translate3d(calc(-1 * var(--mynah-sizing-1)), calc(-100% - var(--mynah-sizing-3)), 0px);
    }
    & + #mynah-wrapper {
        transition: var(--mynah-bottom-panel-transition);
    }
    &:not(.mynah-feedback-form-show) {
        &,
        & * {
            pointer-events: none !important;
        }
    }
    &.mynah-feedback-form-show {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        &:before {
            opacity: 0.15;
        }
        & + #mynah-wrapper {
            transform: translate3d(0, 0px, 0) scale(0.95);
            transform-origin: top center;
            opacity: 0.25;
            &,
            & * {
                pointer-events: none !important;
            }
        }
    }
}

.mynah-feedback-form {
    pointer-events: all;
    box-sizing: border-box;
    transition: var(--mynah-short-transition-rev);
    transform: translate3d(0, 0, 0);
    display: flex;
    flex-flow: column;
    gap: var(--mynah-sizing-4);
    align-items: stretch;
    transform-origin: right bottom;
    z-index: 10;
    position: relative;
    border: var(--mynah-button-border-width) solid var(--mynah-color-border-default);
    border-top-right-radius: var(--mynah-card-radius);
    border-top-left-radius: var(--mynah-card-radius);
    border-bottom: none;
    box-shadow: 0px -25px 20px -25px rgba(0, 0, 0, 0.15);
    background-color: var(--mynah-color-bg);
    padding: var(--mynah-sizing-4);
    min-height: 20vh;
    > .mynah-card-body {
        flex: initial;
    }
    > .mynah-feedback-form-header {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        > h4 {
            flex: 1;
            margin: 0;
        }
    }

    > .mynah-feedback-form-comment {
        background-color: transparent;
        padding: var(--mynah-sizing-3);
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
        resize: none;
        width: 100%;
        height: 100px;
        max-height: 25vh;
        border-radius: var(--mynah-input-radius);
        font-size: var(--mynah-font-size-small);
        outline: none;
        color: var(--mynah-color-text-input);
        background-color: var(--mynah-card-bg);
        box-sizing: border-box;
        font-family: inherit;
    }

    > .mynah-feedback-form-select-wrapper {
        position: relative;
        display: flex;
        box-sizing: border-box;
        padding: var(--mynah-sizing-3);
        justify-content: flex-end;
        align-items: center;
        > .mynah-feedback-form-select {
            position: absolute;
            width: 100%;
            left: 0;
            color: var(--mynah-color-text-default);
            border-radius: var(--mynah-input-radius);
            padding: var(--mynah-sizing-3);
            border: var(--mynah-border-width) solid var(--mynah-color-border-default);
            background-color: var(--mynah-card-bg);
            -webkit-appearance: none;
            appearance: none;
            text-indent: 1px;
            text-overflow: clip;
            outline: none;
        }
        > .mynah-feedback-form-select-handle {
            color: var(--mynah-color-text-weak);
            pointer-events: none;
        }
    }

    > .mynah-feedback-form-buttons-container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: var(--mynah-sizing-1);
        box-sizing: border-box;
    }
}
`,`.mynah-overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 1000000;
    &.mynah-overlay-dim-outside {
        &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: var(--mynah-color-bg);
            transition: var(--mynah-short-transition-rev-opacity);
            opacity: 0.45;
        }
    }
    > .mynah-overlay-container {
        --overlayLeftPos: calc(-1 * var(--mynah-sizing-1));
        --overlayTopPos: 0;
        --overlayInnerHorizontalOrigin: left;
        --overlayInnerVerticalOrigin: top;
        position: absolute;
        display: block;
        overflow: visible;
        border-radius: var(--mynah-card-radius);
        max-width: calc(100vw - var(--mynah-sizing-8))!important;

        .mynah-card,
        .mynah-card * {
            pointer-events: none !important;
            .mynah-syntax-highlighter-copy-buttons {
                display: none;
                & ~ *:last-child {
                    margin-bottom: 0 !important;
                }
            }
        }

        &.background {
            &:before {
                content: "";
                background-color: transparent;
                transition: var(--mynah-short-transition-rev);
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: auto;
                height: auto;
                pointer-events: none;
                box-sizing: border-box;
                opacity: 0;
                border: var(--mynah-button-border-width) solid var(--mynah-color-border-default);
                z-index: 100;
                box-shadow: var(--mynah-shadow-overlay);
                transform-origin: left bottom;
                border-radius: inherit;
            }

            &:after {
                content: "";
                position: absolute;
                width: var(--mynah-sizing-8);
                height: var(--mynah-sizing-8);
                left: 0;
                top: 0;
                opacity: 0;
                border: var(--mynah-sizing-4);
                background-color: var(--mynah-card-bg);
                border-radius: inherit;
                transition: var(--mynah-short-transition-rev);
                transition-delay: 20ms;
            }
        }

        &.horizontal-direction {
            &-to-left,
            &-from-end-to-left {
                --overlayLeftPos: -100%;
                --overlayInnerHorizontalOrigin: right;
                &:before{
                    transform-origin: right center;
                }
                &:after {
                    left: calc(100% - var(--mynah-sizing-4));
                }
            }
            &-at-center {
                --overlayInnerHorizontalOrigin: center;
                --overlayLeftPos: -50%;
                &:after {
                    left: calc(50% - var(--mynah-sizing-4));
                }
            }
        }
        &.vertical-direction {
            &-to-top,
            &-from-end-to-top {
                --overlayTopPos: -100%;
                --overlayInnerVerticalOrigin: bottom;
                &:after {
                    top: calc(100% - var(--mynah-sizing-4));
                }
            }
            &-at-center {
                --overlayInnerVerticalOrigin: center;
                --overlayTopPos: -50%;
                &:after {
                    top: calc(50% - var(--mynah-sizing-4));
                }
            }
        }

        > .mynah-overlay-inner-container {
            display: inline-block;
            overflow: hidden;
            z-index: 10;
            position: relative;
            transform: translate3d(0, 0, 0) scale(0.85);
            transform-origin: var(--overlayInnerHorizontalOrigin) var(--overlayInnerVerticalOrigin);
            transition: var(--mynah-short-transition-rev);
            width: 100%;
        }
        &:before {
            transform: translate3d(0, 0, 0) scale(0.85);
            transition: var(--mynah-short-transition-rev);
        }
        > .mynah-overlay-inner-container,
        &:before {
            opacity: 0;
            transition-delay: 0ms;
        }

        transform: translate3d(var(--overlayLeftPos), var(--overlayTopPos), 0);
    }
    &:not(.mynah-overlay-open) {
        &,
        & * {
            pointer-events: none !important;
        }
    }

    &.mynah-overlay-open {
        > .mynah-overlay-container {
            > .mynah-overlay-inner-container {
                transform: translate3d(0, 0, 0) scale(1);
            }
            &:before {
                transform: translate3d(0, 0, 0) scale(1);
                transition-delay: 50ms;
                opacity: 1;
            }
            > .mynah-overlay-inner-container {
                transition-delay: 20ms;
            }
            > .mynah-overlay-inner-container {
                opacity: 1;
            }
            &:after {
                transition-delay: 0ms;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                opacity: 1;
            }
        }
        &.mynah-overlay-close-on-outside-click {
            pointer-events: all;
        }
    }
}
`,`.mynah-notification {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--mynah-sizing-3);
    padding: var(--mynah-sizing-5);
    overflow: hidden;
    position: relative;
    &.mynah-notification-clickable {
        pointer-events: all;
        cursor: pointer;
    }
    > .mynah-ui-icon {
        font-size: var(--mynah-sizing-6);
        &- {
            &ok-circled {
                color: var(--mynah-color-status-success);
            }
            &info {
                color: var(--mynah-color-status-info);
            }
            &warning {
                color: var(--mynah-color-status-warning);
            }
            &error {
                color: var(--mynah-color-status-error);
            }
        }
    }
    > .mynah-notification-container {
        flex: 1;
        max-width: 50vw;
        min-width: 200px;
        display: inline-flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        justify-content: flex-start;
        gap: var(--mynah-sizing-3);
        overflow: hidden;
        position: relative;
        > .mynah-notification-title {
            margin: 0;
            &:empty {
                display: none;
            }
        }
        > .mynah-notification-content {
            font-size: var(--mynah-font-size-small);
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: flex-start;
            gap: var(--mynah-sizing-2);
            > .mynah-button {
                align-self: stretch;
                background-color: var(--mynah-color-alternate);
                color: var(--mynah-color-alternate-reverse);
            }
        }
    }
}
`,`.mynah-syntax-highlighter {
    display: flex;
    flex-flow: column nowrap;
    box-sizing: border-box;
    overflow: hidden;
    margin: var(--mynah-sizing-1) 0;
    background-color: var(--mynah-card-bg);
    max-width: 100%;
    & + *:not(:empty) {
        margin-top: var(--mynah-sizing-2);
    }
    border: var(--mynah-border-width) solid var(--mynah-color-border-default);
    position: relative;
    border-radius: var(--mynah-input-radius);
    line-height: normal;
    color: var(--mynah-color-text-default);
    &:before,
    & > .line-numbers-rows:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--mynah-color-syntax-bg);
        opacity: 0.2;
        pointer-events: none;
        user-select: none;
    }
    > .mynah-syntax-highlighter-copy-buttons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: var(--mynah-sizing-half);
        padding-left: var(--mynah-sizing-3);
        order: 256000;
        box-sizing: border-box;
        margin: 0;
        margin-block: 0 !important;
        position: relative;
        border-top: 1px solid var(--mynah-color-border-default);
        &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: var(--mynah-color-border-default);
            opacity: 0.25;
        }
        > .mynah-syntax-highlighter-language {
            flex: 1;
            font-size: var(--mynah-font-size-xsmall);
            display: inline-block;
            opacity: 0.65;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .mynah-button {
            min-width: var(--mynah-sizing-6);
            height: calc(var(--mynah-sizing-6) + var(--mynah-sizing-half));
            * {
                font-size: var(--mynah-font-size-xsmall);
                color: var(--mynah-color-text-strong);
            }
        }
    }
    &.mynah-inline-code {
        display: inline-flex;
        max-width: 100%;
        line-height: normal;
        padding: 0 !important;
        margin: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        overflow: visible;
        border: none;
        color: var(--mynah-color-syntax-attr);
        margin-left: 2px;
        margin-right: 2px;
        padding-bottom: 1px !important;
        margin-bottom: -1px;
        background-color: transparent !important;
        > pre {
            padding: 0;
        }
        &:after {
            content: "";
            position: absolute;
            box-sizing: border-box;
            top: 0;
            height: 100%;
            left: -2px;
            width: calc(100% + 4px);
            border-radius: calc(var(--mynah-card-radius) / 2);
            border: var(--mynah-border-width) solid var(--mynah-color-border-default);
            background-color: var(--mynah-card-bg);
            z-index: -1;
        }
        &:before {
            left: -2px;
            width: calc(100% + 4px);
            border-radius: calc(var(--mynah-card-radius) / 2);
            box-sizing: border-box;
        }
    }
    > pre {
        padding: var(--mynah-sizing-2);
        margin: 0;
        overflow-x: auto;
        overflow-y: hidden;
        position: relative;

        *,
        & {
            font-size: var(--mynah-syntax-code-font-size) !important;
            font-family: var(--mynah-syntax-code-font-family) !important;
        }
        code {
            color: var(--mynah-color-syntax-code);
            filter: brightness(0.95);
            white-space: pre;
            background-color: inherit;
        }

        > code,
        & {
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            word-wrap: normal;
            tab-size: 4;
            hyphens: none;
        }
        > code::selection,
        &::selection {
            text-shadow: none;
            background: #b3d4fc;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
            color: var(--mynah-color-syntax-comment);
        }

        .token.punctuation {
            color: currentColor;
        }

        .token.namespace {
            opacity: 0.7;
        }

        .token.property,
        .token.tag,
        .token.boolean,
        .token.number,
        .token.constant,
        .token.symbol,
        .token.deleted {
            color: var(--mynah-color-syntax-property);
        }

        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.inserted {
            color: var(--mynah-color-syntax-attr);
        }

        .token.operator,
        .token.entity,
        .token.url,
        .language-css .token.string,
        .style .token.string {
            color: var(--mynah-color-syntax-operator);
        }

        .token.atrule,
        .token.attr-value,
        .token.class-name,
        .token.keyword {
            color: var(--mynah-color-syntax-attr-value);
        }

        .token.function {
            color: var(--mynah-color-syntax-function);
            font-weight: 500;
        }
        
        .token.regex,
        .token.important,
        .token.variable {
            color: var(--mynah-color-syntax-variable);
            font-weight: 500;
        }

        .token.important,
        .token.bold {
            font-weight: bold;
        }
        .token.italic {
            font-style: italic;
        }

        .token.entity {
            cursor: help;
        }

        &.line-numbers {
            position: relative;
            padding-left: 3.8em;
            counter-reset: linenumber;
            position: relative;
        }
    }
    > .line-numbers-rows {
        position: absolute;
        background-color: inherit;
        > span,
        & {
            pointer-events: none;
            user-select: none;
        }
        top: var(--mynah-sizing-2);
        font-size: 100%;
        left: 0;
        width: var(--mynah-sizing-12);
        overflow: hidden;
        text-overflow: clip;
        letter-spacing: -1px;
        border-right: 1px solid var(--mynah-color-border-default);

        > span {
            display: block;
            color: var(--mynah-color-border-default);
            padding-right: 0.8em;
            text-align: right;
        }
    }
}

.mynah-ui-syntax-highlighter-highlight-tooltip {
    max-width: 80vw;
    min-width: 10vw;
    max-height: 80vh;
    background-color: var(--mynah-card-bg);
    border-radius: var(--mynah-card-radius);
    border: var(--mynah-border-width) solid var(--mynah-color-border-default);
    padding: var(--mynah-sizing-5);
    .mynah-card-body {
        > p:first-child:last-of-type,
        > p p:first-child {
            margin: 0;
        }
    }
}
`,`.mynah-chat-prompt-overlay-buttons-container {
    display: inline-flex;
    flex-flow: column nowrap;
    gap: var(--mynah-sizing-2);
    justify-content: flex-start;
    align-items: flex-start;
}
.mynah-chat-wrapper {
    transition: var(--mynah-bottom-panel-transition);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: auto;
    flex-flow: column nowrap;
    overflow: hidden;
    justify-content: space-around;
    align-items: stretch;
    display: none;
    > div[class^="mynah-chat"] {
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        padding-left: var(--mynah-sizing-4);
        padding-right: var(--mynah-sizing-4);
    }
    &:after {
        transition: all $smoothduration $smoothbezier;
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: auto;
        height: auto;
        background-color: black;
        z-index: 1000;
        opacity: 0;
        pointer-events: none;
        transform: translate3d(0, 0, 0) scale(2);
        transform-origin: center center;
    }

    @import "chat-items-container";
    @import "chat-overflowing-intermediate-block";
    @import "chat-prompt-wrapper";
}

.mynah-chat-items-container,
.mynah-chat-prompt-input-sticky-card {
    @import "chat-item-card";
}

@import "chat-command-selector";
@import "chat-item-tree-view";
@import "chat-prompt-code-snippet";
`,`> .mynah-chat-items-container {
    display: flex;
    flex: 1 1 0%;
    overflow-x: hidden;
    overflow-y: auto;
    flex-flow: column-reverse nowrap;
    align-items: flex-start;
    padding: var(--mynah-chat-wrapper-spacing);
    gap: var(--mynah-chat-wrapper-spacing);
}

&.loading {
    > .mynah-chat-items-container {
        padding-bottom: var(--mynah-sizing-14);
        > .mynah-chat-item-card.mynah-chat-item-answer-stream {
            &:first-child {
                > .mynah-card {
                    min-width: 100px;
                    min-height: var(--mynah-sizing-14);
                    > .mynah-card-votes-wrapper {
                        display: none;
                    }
                }
                &.mynah-chat-item-empty {
                    .mynah-chat-items-spinner {
                        display: inline-flex;
                        > span {
                            // Spinner's size should remain the same
                            flex: 0 0 auto;
                        }
                    }
                }
                &:not(.mynah-chat-item-empty) {
                    @import "chat-items-bottom-animator";
                }
            }
        }
    }
}
`,`&:before {
  content: '';
  pointer-events: none;
  position: absolute;
  overflow: hidden;
  border-bottom-right-radius: var(--mynah-card-radius);
  border-bottom-left-radius: var(--mynah-card-radius-corner);
  bottom: 0;
  left: 0;
  right: 0;
  width: auto;
  height: 100%;
  box-sizing: border-box;
  z-index: 10;
  background-image: linear-gradient(
    90deg,
    var(--mynah-color-button) 0%,
    rgba(255, 255, 255, 0) 25%,
    rgba(255, 255, 255, 0) 50%,
    var(--mynah-color-button) 100%
  );
  background-position: 0% bottom;
  background-size: 200% var(--mynah-sizing-1);
  background-repeat: repeat-x;
  animation: horizontal-roll 1250ms linear infinite both;
}
`,`&.loading {
    > .mynah-chat-overflowing-intermediate-block {
        display: flex;
        flex-flow: column nowrap;
        max-height: 0;
        overflow: visible;
        justify-content: flex-end;
        &:not(.hidden) > .mynah-chat-stop-chat-response-button {
            display: inline-flex;
        }
    }
}
> .mynah-chat-overflowing-intermediate-block {
    display: flex;
    flex-flow: column nowrap;
    max-height: 0;
    overflow: visible;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid var(--mynah-color-border-default);
    &.hidden > * {
        display: none !important;
    }
    > .mynah-chat-stop-chat-response-button {
        margin-bottom: var(--mynah-sizing-2);
        display: none;
        min-height: var(--mynah-sizing-8);
        background-color: var(--mynah-card-bg);
        padding-left: var(--mynah-sizing-2);
        &:active {
            box-shadow: none;
            filter: none;
        }
        * {
            color: var(--mynah-color-text-weak);
            font-size: var(--mynah-font-size-xsmall);
        }
    }
}
`,`>.mynah-chat-prompt-wrapper {
    display: block;
    padding: var(--mynah-sizing-4);

    >.mynah-chat-prompt {
        display: flex;
        flex-flow: column nowrap;
        overflow: hidden;
        box-sizing: border-box;
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
        background-color: var(--mynah-card-bg);
        border-radius: var(--mynah-card-radius);
        padding: var(--mynah-sizing-4);

        >.mynah-chat-prompt-input-wrapper {
            display: flex;
            flex-flow: row nowrap;
            overflow: hidden;
            box-sizing: border-box;
            gap: var(--mynah-sizing-2);
            align-items: flex-start;
            position: relative;
            color: var(--mynah-color-text-weak);

            >.mynah-chat-prompt-input-command-wrapper {
                align-self: flex-start;
                display: inline-flex;
                align-items: center;
                position: relative;
                gap: var(--mynah-sizing-1);
                box-sizing: border-box;

                &.hidden {
                    display: none;
                }

                >.mynah-chat-prompt-input-command-text {
                    user-select: none;
                    cursor: pointer;
                    font-family: var(--mynah-font-family);
                    font-size: var(--mynah-font-size-large);
                    color: var(--mynah-color-text-input);
                    font-weight: bold;
                    white-space: nowrap;
                    max-width: calc(10 * var(--mynah-font-size-large));
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            >.mynah-chat-prompt-input-inner-wrapper {
                display: block;
                width: 100%;
                position: relative;
                align-self: center;

                >.mynah-chat-prompt-input {
                    font-family: var(--mynah-font-family);
                    border: none;
                    resize: none;
                    background-color: rgba(0, 0, 0, 0);
                    font-size: var(--mynah-font-size-large);
                    color: var(--mynah-color-text-input);
                    outline: none;
                    width: 100%;
                    max-height: 20vh;
                    min-height: 1.5rem;

                    &:placeholder-shown {
                        text-overflow: ellipsis;
                    }

                    &::placeholder {
                        color: var(--mynah-color-text-weak);
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }

                    &:not(.mynah-chat-prompt-input-sizer) {
                        position: absolute;
                        height: auto;
                        width: auto;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        padding: 0;
                    }
                }

                >.mynah-chat-prompt-input-sizer {
                    display: block;
                    width: 100%;
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                    overflow: hidden;
                    white-space: pre-wrap;
                    word-break: break-word;
                }

                &~.mynah-chat-prompt-button {
                    background-color: transparent;
                    width: auto;
                    min-width: 0;
                    height: auto;
                    padding-top: 1px;

                    i {
                        font-size: calc(2 * var(--mynah-font-size-xsmall));
                        color: var(--mynah-color-button);
                        height: var(--mynah-sizing-6);
                        padding-left: 0;
                    }
                }

                &.no-text~.mynah-chat-prompt-button:not([disabled]),
                &~.mynah-chat-prompt-button[disabled] {
                    pointer-events: none;
                    opacity: 0.25;

                    i {
                        color: var(--mynah-color-text-weak);
                    }
                }
            }
        }

        >.mynah-chat-prompt-attachment-wrapper {
            &:empty {
                display: none;
            }

            >.mynah-chat-attachment-item {
                position: relative;
                display: inline-block;
                max-width: 250px;
                cursor: pointer;

                &:after {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: var(--mynah-card-radius);
                    opacity: 0;
                    transition: var(--mynah-short-transition-rev);
                    z-index: 8000;
                    background-color: var(--mynah-color-alternate);
                }

                >.mynah-chat-attachment-delete-icon {
                    color: var(--mynah-color-alternate-reverse);
                    opacity: 0;
                    transition: var(--mynah-short-transition-rev);
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 30px;
                    height: 30px;
                    margin-left: -15px;
                    margin-top: -15px;
                    z-index: 9000;

                    >i {
                        width: 30px;
                        height: 30px;
                    }
                }

                &:hover {
                    &:after {
                        opacity: 0.75;
                    }

                    >.mynah-chat-attachment-delete-icon {
                        opacity: 1;
                    }
                }

                >.mynah-card {
                    pointer-events: none !important;

                    * {
                        pointer-events: none !important;
                    }

                    >.mynah-card-body {
                        display: none;
                    }
                }
            }
        }
    }

    &.input-has-focus>.mynah-chat-prompt {
        border: var(--mynah-border-width) solid var(--mynah-color-button);
    }

    >.mynah-chat-prompt-chars-indicator {
        width: 100%;
        font-size: var(--mynah-font-size-xsmall);
        padding-top: var(--mynah-sizing-2);
        opacity: 0.5;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-style: italic;
    }

    &+.mynah-chat-prompt-input-info {
        padding-top: 0;
        margin-top: calc(-1 * var(--mynah-sizing-2));
    }
}

>.mynah-chat-prompt-input-sticky-card {
    &:not(:empty) {
        padding-top: var(--mynah-sizing-4);
    }

    >.mynah-chat-item-card {
        max-width: 100%;

        >.mynah-card {
            border-bottom-left-radius: var(--mynah-card-radius) !important;
        }
    }
}

>.mynah-chat-prompt-input-info {
    display: flex;
    flex-flow: row nowrap;
    box-sizing: border-box;
    overflow: hidden;
    padding: var(--mynah-sizing-4);

    &,
    & * {
        font-size: var(--mynah-font-size-xsmall);
    }

    &:empty {
        display: none;
    }

    >* {
        margin: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-top: 0;
        margin-bottom: 0;
    }
}`,`.mynah-chat-item-card {
    display: inline-flex;
    flex-flow: column nowrap;
    position: relative;
    max-width: 90%;
    transition: var(--mynah-text-flow-transition);
    transform: translate3d(0, min(50%, 25vh), 0) scale(0.95, 1.25);
    opacity: 0;
    transform-origin: center bottom;
    gap: var(--mynah-sizing-4);

    &-status {
        &-success {
            > .mynah-card {
                border-color: var(--mynah-color-status-success);
                > .mynah-chat-item-card-icon {
                    color: var(--mynah-color-status-success);
                }
            }
        }
        &-error {
            > .mynah-card {
                border-color: var(--mynah-color-status-error);
                > .mynah-chat-item-card-icon {
                    color: var(--mynah-color-status-error);
                }
            }
        }
        &-warning {
            > .mynah-card {
                border-color: var(--mynah-color-status-warning);
                > .mynah-chat-item-card-icon {
                    color: var(--mynah-color-status-warning);
                }
            }
        }
        &-info {
            > .mynah-card {
                border-color: var(--mynah-color-status-info);
                > .mynah-chat-item-card-icon {
                    color: var(--mynah-color-status-info);
                }
            }
        }
    }

    &.mynah-chat-item-card-has-icon {
        > .mynah-card {
            padding-left: var(--mynah-sizing-10);
            > .mynah-chat-item-card-icon {
                position: absolute;
                left: var(--mynah-sizing-4);
            }
        }
    }

    &.reveal {
        opacity: 1;
        transform: translate3d(0, 0, 0) scale(1, 1);
    }
    &.mynah-chat-item-no-content {
        display: none !important;
    }

    &.mynah-chat-item-answer-stream {
        &.typewriter-animating {
            @import "chat-items-bottom-animator";
        }
        .typewriter-part {
            visibility: hidden;
        }
    }

    .mynah-chat-item-card {
        max-width: 100%;
        width: 100%;
        padding: var(--mynah-sizing-3) 0 var(--mynah-sizing-3) 0;
        border-top: 1px solid var(--mynah-color-border-default);
        margin-top: var(--mynah-sizing-3);
        padding-bottom: 0;
        .mynah-chat-item-card-related-content > .mynah-chat-item-card-related-content-title {
            font-size: var(--mynah-font-size-large);
        }
    }

    > span.invisible {
        display: none;
    }

    &.mynah-chat-item-code-result {
        min-width: 70%;
    }
    > .mynah-chat-item-card-icon-wrapper {
        background-color: var(--mynah-color-alternate);
        color: var(--mynah-color-alternate-reverse);
        padding: var(--mynah-sizing-2);
        border-radius: 100%;
    }
    > .mynah-card {
        > .mynah-chat-items-spinner {
            overflow: visible;
            z-index: 10000;
            gap: var(--mynah-sizing-2);
            justify-content: flex-start;
            align-items: center;
            transition: var(--mynah-very-short-transition);
            > span {
                position: relative;
                display: inline-block;
                width: var(--mynah-sizing-5);
                height: var(--mynah-sizing-5);
                border: var(--mynah-sizing-half) solid rgba(0, 0, 0, 0);
                border-radius: 50%;
                border-top-color: var(--mynah-color-button);
                animation: spinner-spin 1s ease-in-out infinite;
                transform-origin: center center;
                overflow: visible;
                &:before {
                    position: absolute;
                    content: "";
                    top: calc(-1 * var(--mynah-sizing-half));
                    left: calc(-1 * var(--mynah-sizing-half));
                    right: calc(-1 * var(--mynah-sizing-half));
                    bottom: calc(-1 * var(--mynah-sizing-half));
                    width: auto;
                    height: auto;
                    aspect-ratio: 1; // Just to make sure that the spinner is a circle
                    border: var(--mynah-sizing-half) solid var(--mynah-color-button);
                    border-radius: 50%;
                    opacity: 0.15;
                    box-sizing: border-box;
                }
            }
            > div {
                opacity: 1;
            }
        }
        > .mynah-card-body {
            & > div {
                > .mynah-syntax-highlighter {
                    filter: contrast(1.15) brightness(0.85);
                }
                > h1,
                > h2,
                > h3,
                > h4 {
                    &:first-child {
                        margin-top: 0;
                    }
                }
            }
            > .mynah-chat-item-card-related-content {
                margin-top: var(--mynah-sizing-3);
                padding-top: var(--mynah-sizing-4);
                border-top: var(--mynah-button-border-width) solid var(--mynah-color-border-default);
                > .mynah-chat-item-card-related-content-title {
                    color: var(--mynah-color-text-weak);
                    font-size: var(--mynah-font-size-xsmall);
                    margin: 0;
                }
                .mynah-source-link-title {
                    font-size: var(--mynah-font-size-small);
                    font-weight: 400;
                }
            }
            padding-left: 0;
        }
    }

    > .mynah-chat-item-followup-question {
        display: inline-flex;
        flex-flow: column nowrap;
        position: relative;
        gap: var(--mynah-sizing-2);
        > .mynah-chat-item-followup-question-text {
            color: var(--mynah-color-text-weak);
            font-size: var(--mynah-font-size-xsmall);
            font-style: italic;
        }
        > .mynah-chat-item-followup-question-options-wrapper {
            display: inline-flex;
            flex-flow: row wrap;
            max-width: 100%;
            gap: var(--mynah-sizing-2);
        }
    }

    .mynah-chat-item-followup-question-option {
        padding: var(--mynah-sizing-2);
        color: var(--mynah-color-text-default);
        border: var(--mynah-border-width) solid currentColor;
        border-radius: var(--mynah-button-radius);
        cursor: pointer;
        font-size: var(--mynah-font-size-xsmall);
        max-width: 100%;
        overflow: hidden;
        display: inline-flex;
        gap: var(--mynah-sizing-2);
        align-items: center;
        user-select: none;
        * {
            pointer-events: none;
        }
        &-disabled {
            opacity: 0.25 !important;
            cursor: default !important;
        }
        &:not(:hover) {
            opacity: 0.75;
        }
        &-status {
            &-success {
                color: var(--mynah-color-status-success);
            }
            &-error {
                color: var(--mynah-color-status-error);
            }
            &-warning {
                color: var(--mynah-color-status-warning);
            }
            &-info {
                color: var(--mynah-color-status-info);
            }
        }
    }

    .mynah-chat-item-card-related-content {
        display: flex;
        flex-flow: column nowrap;
        gap: var(--mynah-sizing-2);
        overflow: hidden;
        position: relative;
        > .mynah-chat-item-card-related-content-item {
            max-width: 100%;
            > .mynah-card {
                padding: 0;
                border-radius: 0;
                box-shadow: none;
            }
            .amzn-mynah-search-result-highlight {
                background-color: inherit;
                color: inherit;
            }
        }
        &:not(.expanded) {
            > .mynah-chat-item-card-related-content-item {
                $maxItems: 1;
                $selector: "&";
                @for $i from 1 through $maxItems {
                    $selector: #{$selector} + ":not(:nth-of-type(" + #{$i} + "))";
                }
                #{$selector} {
                    display: none;
                }
                &:nth-of-type(#{$maxItems}) {
                    margin-bottom: calc(-1 * var(--mynah-sizing-4));
                    pointer-events: none;
                    @include list-fader-bottom(var(--mynah-sizing-12));
                    mask-image: linear-gradient(to top, transparent var(--mynah-sizing-1), black 70%);
                    -webkit-mask-image: linear-gradient(to top, transparent var(--mynah-sizing-1), black 70%);
                }
                &:nth-of-type(#{$maxItems + 1}) {
                    & ~ .mynah-chat-item-card-related-content-show-more {
                        display: flex;
                    }
                }
            }
        }

        > .mynah-chat-item-card-related-content-show-more {
            display: none;
            max-width: 80%;
            z-index: 10000;
            margin-block-start: 0;
            margin-block-end: 0;
            align-self: center;
            height: var(--mynah-sizing-8);
            filter: none;
            > span,
            > i {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: var(--mynah-font-size-xsmall);
            }
        }
    }
    &.mynah-chat-item-system-prompt,
    &.mynah-chat-item-prompt {
        align-self: flex-end;
        > .mynah-chat-item-card-icon-wrapper {
            align-self: flex-end;
        }
        .mynah-chat-item-followup-question,
        .mynah-chat-item-card-related-content {
            align-items: flex-end;
        }

        .mynah-syntax-highlighter {
            > .mynah-syntax-highlighter-copy-buttons {
                display: none;
            }
        }

        .mynah-chat-item-card-related-content > .mynah-card,
        > .mynah-card {
            padding: var(--mynah-sizing-4);
            background-color: var(--mynah-color-button);
            border-bottom-right-radius: var(--mynah-card-radius-corner);
            border: none;
            &,
            > .mynah-card-body {
                color: var(--mynah-color-button-reverse);
            }
        }
    }
    &.mynah-chat-item-system-prompt {
        > .mynah-card {
            background-color: var(--mynah-color-status-warning);
        }
    }

    &.mynah-chat-item-empty:empty {
        display: none;
    }
    &.mynah-chat-item-answer-stream.mynah-chat-item-empty.stream-ended {
        display: none;
    }
    &.mynah-chat-item-answer,
    &.mynah-chat-item-code-result,
    &.mynah-chat-item-answer-stream {
        > .mynah-card {
            border-bottom-left-radius: var(--mynah-card-radius-corner);
            max-height: 100%;
            flex: 1;
        }
    }
    &.mynah-chat-item-ai-prompt,
    &.mynah-chat-item-answer,
    &.mynah-chat-item-answer-stream {
        > .mynah-chat-item-card-icon-wrapper {
            align-self: flex-start;
        }
        > .mynah-chat-item-card-related-content {
            > .mynah-chat-item-card-related-content-item > .mynah-card-compact {
                opacity: 1;
                > .mynah-source-link-header {
                    opacity: 1;
                }
            }
        }
    }
}
`,`@mixin list-fader-bottom($height: var(--mynah-sizing-6)) {
    position: relative;
    $listFader: linear-gradient(
        to bottom,
        black 30%,
        black calc(100% - $height),
        transparent 100%
    );
    -webkit-mask-image: $listFader;
    -webkit-mask-size: 100% 100%;
    mask-image: $listFader;
    mask-size: 100% 100%;
}
`,`.mynah-chat-command-selector {
    display: flex;
    box-sizing: border-box;
    background-color: var(--mynah-card-bg);
    border-radius: var(--mynah-card-radius);
    width: 100%;
    pointer-events: all;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: flex-start;
    > .mynah-chat-command-selector-group {
        display: flex;
        box-sizing: border-box;
        width: 100%;
        flex-flow: column nowrap;
        align-items: stretch;
        justify-content: flex-start;
        padding: var(--mynah-sizing-2);
        > .mynah-chat-command-selector-group-title {
            margin: 0;
            color: var(--mynah-color-text-weak);
            opacity: 0.75;
            padding: var(--mynah-sizing-2) var(--mynah-sizing-3);
        }

        &:not(:last-child) {
            border-bottom: 1px solid var(--mynah-color-border-default);
        }

        > .mynah-chat-command-selector-command {
            display: flex;
            box-sizing: border-box;
            width: 100%;
            flex-flow: column nowrap;
            align-items: flex-start;
            justify-content: flex-start;
            overflow: hidden;
            cursor: pointer;
            padding: var(--mynah-sizing-2) var(--mynah-sizing-3);
            color: var(--mynah-color-text-default);
            border-radius: var(--mynah-input-radius);
            transition: var(--mynah-short-transition-rev);
            gap: var(--mynah-sizing-1);
            &:hover,
            &.target-command {
                background-color: var(--mynah-color-button);
                &,
                & * {
                    color: var(--mynah-color-button-reverse);
                }
            }
            > .mynah-chat-command-selector-command-name {
                font-family: var(--mynah-font-family);
                font-size: var(--mynah-font-size-large);
                font-weight: bold;
                flex: 0 1 0%;
            }
            > .mynah-chat-command-selector-command-description {
                font-size: var(--mynah-font-size-small);
                opacity: 0.75;
                flex: 1 0 100%;
            }
        }
    }
}
`,`.mynah-chat-item-tree-view-wrapper {
    margin: 0;
    margin-block-end: 0 !important;
    margin-block-start: 0 !important;

    >.mynah-chat-item-tree-view-wrapper-container {
        background-color: var(--mynah-card-bg);
        color: var(--mynah-color-text-default);
        margin-block-start: 0 !important;
        margin-block-end: 0 !important;
        position: relative;
        border-radius: var(--mynah-input-radius);
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
        overflow: hidden;

        >.mynah-chat-item-tree-view-wrapper-title {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            position: relative;
            padding: var(--mynah-sizing-3);
            gap: var(--mynah-sizing-2);
            border-bottom: var(--mynah-border-width) solid var(--mynah-color-border-default);

            >h4 {
                margin: 0;
            }

            &:before {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: var(--mynah-color-border-default);
                opacity: 0.25;
                pointer-events: none;
            }
        }

        .mynah-chat-item-tree-view {
            overflow: hidden;
            box-sizing: border-box;
            width: 100%;
            overflow-y: hidden;
            overflow-x: auto;
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: flex-start;
            gap: var(--mynah-sizing-half);

            .mynah-chat-item-tree-view-button-title {
                display: inline-flex;
                gap: var(--mynah-sizing-1);
            }

            .mynah-chat-item-tree-view-button-weak-title{
                opacity: 0.65;
            }

            .mynah-chat-item-pull-request-item {
                width: 100%;
                box-sizing: border-box;
            }

            .mynah-chat-item-tree-view {
                padding-left: var(--mynah-sizing-4);
            }

            .mynah-chat-item-tree-view-file-item {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
                gap: var(--mynah-sizing-2);
                overflow: hidden;
                cursor: pointer;
                width: calc(100% - var(--mynah-sizing-4));
                padding: calc(3 * var(--mynah-sizing-half));
                position: relative;
                box-sizing: content-box;
                border-radius: var(--mynah-button-radius);

                &:not(:hover) {
                    >.mynah-chat-item-tree-view-file-item-actions {
                        display: none;
                    }
                }

                &:hover {
                    background-color: var(--mynah-color-light);
                }

                &-status {

                    &-info,
                    &-success,
                    &-warning,
                    &-error {
                        &:before {
                            content: "";
                            position: absolute;
                            z-index: 0;
                            opacity: 0.1;
                            width: 100%;
                            height: 100%;
                            left: 0;
                            top: 0;
                            border-radius: var(--mynah-button-radius);
                        }
                    }

                    &-info {
                        &:before {
                            background-color: var(--mynah-color-status-info);
                        }

                        >.mynah-chat-item-tree-view-file-item-details>.mynah-ui-icon {
                            color: var(--mynah-color-status-info);
                        }
                    }

                    &-success {
                        &:before {
                            background-color: var(--mynah-color-status-success);
                        }

                        >.mynah-chat-item-tree-view-file-item-details>.mynah-ui-icon {
                            color: var(--mynah-color-status-success);
                        }
                    }

                    &-warning {
                        &:before {
                            background-color: var(--mynah-color-status-warning);
                        }

                        >.mynah-chat-item-tree-view-file-item-details>.mynah-ui-icon {
                            color: var(--mynah-color-status-warning);
                        }
                    }

                    &-error {
                        &:before {
                            background-color: var(--mynah-color-status-error);
                        }

                        >.mynah-chat-item-tree-view-file-item-details>.mynah-ui-icon {
                            color: var(--mynah-color-status-error);
                        }
                    }
                }

                &-details {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: flex-start;
                    align-items: center;
                    gap: var(--mynah-sizing-1);
                    font-size: 90%;
                    z-index: 10;
                    flex: 1;
                    flex-shrink: 1;
                    overflow: hidden;

                    >.mynah-chat-item-tree-view-file-item-details-text {
                        overflow: hidden;
                        flex: 1;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }

                &-actions {
                    display: flex;
                    flex-flow: row-reverse nowrap;
                    justify-content: flex-end;
                    align-items: center;
                    gap: var(--mynah-sizing-2);
                    font-size: 90%;
                    z-index: 10;
                    padding-right: var(--mynah-sizing-1);

                    >.mynah-button {
                        width: auto;
                        height: auto;
                        min-width: auto;

                        &.info {
                            color: var(--mynah-color-status-info);
                        }

                        &.success {
                            color: var(--mynah-color-status-success);
                        }

                        &.warning {
                            color: var(--mynah-color-status-warning);
                        }

                        &.error {
                            color: var(--mynah-color-status-error);
                        }
                    }
                }

                &-deleted {
                    text-decoration: line-through;
                }

                &-title {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: flex-start;
                    align-items: center;
                    gap: var(--mynah-sizing-1);
                    max-width: 100%;
                    overflow: hidden;
                    z-index: 10;
                    flex-shrink: 0;

                    >span {
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                }
            }
        }

        >.mynah-chat-item-tree-view {
            padding: var(--mynah-sizing-2);
        }
    }
}

.mynah-chat-item-tree-view-wrapper-label {
    border-top-left-radius: var(--mynah-card-radius);
    border-top-right-radius: var(--mynah-card-radius);
    background-color: var(--mynah-color-alternate);
    margin-bottom: 0px;
    padding: var(--mynah-sizing-4);
}

.mynah-chat-item-tree-view-wrapper-feedback-label {
    padding-left: var(--mynah-sizing-4);
}

.mynah-chat-item-tree-view-wrapper-feedback-div {
    float: right;

    button:first-child {
        margin-right: var(--mynah-sizing-2);
    }
}

.mynah-chat-item-tree-view-license {
    &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: var(--mynah-color-button);
        opacity: 0.07;
        pointer-events: none;
    }

    color: var(--mynah-color-text-weak);

    ul {
        margin: 0;
        padding-left: var(--mynah-sizing-8);

        >li {
            &:not(:first-child) {
                margin-top: var(--mynah-sizing-2);
            }

            .mynah-card-body p {
                margin: 0;
            }
        }
    }

    .mynah-chat-item-tree-view-license-dropdown-button>span {
        max-width: unset;
    }
}`,`.outer-container {
  display: flex;
  &:not(:empty) {
    margin-top: var(--mynah-sizing-3);
  }
}

.snippet-card-container.vertical-overflow {
  & pre {
    // Show fading effect at the bottom when overflowing
    @include list-fader-bottom(var(--mynah-sizing-16));
  }
}

.snippet-card-container {
  box-sizing: border-box;
  max-width: 100%;
  max-height: calc(2 * var(--mynah-sizing-12));
  > .mynah-button {
    position: absolute;
    background-color: var(--mynah-card-bg) !important;
    width: var(--mynah-sizing-7) !important;
    min-width: var(--mynah-sizing-7) !important;
    max-width: var(--mynah-sizing-7) !important;
    height: var(--mynah-sizing-7) !important;
    border-radius: 100%;
    right: calc(-1 * var(--mynah-sizing-2));
    top: calc(-1 * var(--mynah-sizing-2));
    border: var(--mynah-border-width) solid var(--mynah-color-border-default);
    opacity: 1 !important;
    filter: brightness(0.95);
  }
  &:not(:hover) {
    > .mynah-button {
      display: none;
    }
  }
  > .mynah-card-body > .mynah-syntax-highlighter {
    & pre {
      text-overflow: ellipsis;
    }
  }
}

.mynah-prompt-input-snippet-attachment-overlay {
  max-width: 90vw;
  max-height: 70vh;
  > .mynah-card-body {
    > .mynah-syntax-highlighter {
      max-height: calc(70vh - var(--mynah-sizing-12)) !important;
    }
  }
}
.snippet-card-container,
.mynah-prompt-input-snippet-attachment-overlay {
  position: relative;
  overflow: visible;
  width: 100%;
  box-sizing: border-box;
  > .mynah-card-body {
    max-height: 100%;
    > .mynah-syntax-highlighter {
      user-select: none;
      pointer-events: none;
      margin: 0;
      max-height: 100%;
      overflow: hidden;
      > .mynah-syntax-highlighter-copy-buttons {
        display: none;
      }
    }
  }
  & pre {
    text-overflow: ellipsis;
  }
}
`,`.mynah-collapsible-content-wrapper {
    display: block;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    position: relative;
    > .mynah-collapsible-content-checkbox {
        display: none;
        & + .mynah-collapsible-content-label {
            box-sizing: border-box;
            display: flex;
            flex-flow: column nowrap;
            overflow: hidden;
            align-items: flex-start;
            justify-content: stretch;
            padding: var(--mynah-sizing-2);
            gap: var(--mynah-sizing-2);
            > .mynah-collapsible-content-label-title-wrapper {
                gap: var(--mynah-sizing-2);
                display: flex;
                flex-flow: row nowrap;
                box-sizing: border-box;
                width: 100%;
                overflow: hidden;
                justify-content: flex-start;
                align-items: flex-start;
                pointer-events: all;
                cursor: pointer;
                user-select: none;
                > .mynah-collapsible-content-label-title-text {
                    flex: 1;
                    overflow: hidden;
                }
            }
            > .mynah-collapsible-content-label-content-wrapper {
                overflow: hidden;
                box-sizing: border-box;
                width: 100%;
            }
        }

        &:checked + .mynah-collapsible-content-label {
            > .mynah-collapsible-content-label-content-wrapper {
                display: none;
            }
        }
    }
}
`,`@import "mixins";
@import "variables";
@import "animations";
@import "dark";
@import "favicons";

// Components
@import "./components/main-container";
@import "./components/button";
@import "./components/form-input";
@import "./components/toggle";
@import "./components/icon";
@import "./components/nav-tabs";
@import "./components/card/card";
@import "./components/feedback-form";
@import "./components/overlay";
@import "./components/notification";
@import "./components/syntax-highlighter";
@import "./components/chat/chat-wrapper";
@import "./components/collapsible-content";

body,
html {
    background-color: var(--mynah-color-bg);
    color: var(--mynah-color-text-default);
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 600;
}

::-webkit-scrollbar {
    width: 2px;
    height: 2px;
    opacity: 0.25;
    &:horizontal {
        width: 0px;
        height: 0px;
    }
}

*:focus {
    outline: none;
}
`],sourceRoot:""}]);const s=e},3645:l=>{"use strict";l.exports=function(a){var t=[];return t.toString=function(){return this.map(function(r){var n="",i=r[5]!==void 0;return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),i&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=a(r),i&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n}).join("")},t.i=function(r,n,i,e,s){typeof r=="string"&&(r=[[null,r,void 0]]);var o={};if(i)for(var c=0;c<this.length;c++){var m=this[c][0];m!=null&&(o[m]=!0)}for(var d=0;d<r.length;d++){var y=[].concat(r[d]);i&&o[y[0]]||(s!==void 0&&(y[5]===void 0||(y[1]="@layer".concat(y[5].length>0?" ".concat(y[5]):""," {").concat(y[1],"}")),y[5]=s),n&&(y[2]&&(y[1]="@media ".concat(y[2]," {").concat(y[1],"}")),y[2]=n),e&&(y[4]?(y[1]="@supports (".concat(y[4],") {").concat(y[1],"}"),y[4]=e):y[4]="".concat(e)),t.push(y))}},t}},7537:l=>{"use strict";l.exports=function(a){var t=a[1],r=a[3];if(!r)return t;if(typeof btoa=="function"){var n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),e="/*# ".concat(i," */"),s=r.sources.map(function(o){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(o," */")});return[t].concat(s).concat([e]).join(`
`)}return[t].join(`
`)}},5573:l=>{"use strict";var a=/["'&<>]/;l.exports=function(t){var r,n=""+t,i=a.exec(n);if(!i)return n;var e="",s=0,o=0;for(s=i.index;s<n.length;s++){switch(n.charCodeAt(s)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}o!==s&&(e+=n.substring(o,s)),o=s+1,e+=r}return o!==s?e+n.substring(o,s):e}},7013:()=>{(function(l){var a="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",t={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},r={bash:t,environment:{pattern:RegExp("\\$"+a),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+a),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};l.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+a),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:t}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:r},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:r.entity}}],environment:{pattern:RegExp("\\$?"+a),alias:"constant"},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},t.inside=l.languages.bash;for(var n=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=r.variable[1].inside,e=0;e<n.length;e++)i[n[e]]=l.languages.bash[n[e]];l.languages.sh=l.languages.bash,l.languages.shell=l.languages.bash})(Prism)},6551:()=>{Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}}),Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete Prism.languages.c.boolean},8080:()=>{Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}},3229:()=>{(function(l){function a(te,ae){return te.replace(/<<(\d+)>>/g,function(Y,ge){return"(?:"+ae[+ge]+")"})}function t(te,ae,Y){return RegExp(a(te,ae),Y||"")}function r(te,ae){for(var Y=0;Y<ae;Y++)te=te.replace(/<<self>>/g,function(){return"(?:"+te+")"});return te.replace(/<<self>>/g,"[^\\s\\S]")}var n="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",i="class enum interface record struct",e="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",s="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function o(te){return"\\b(?:"+te.trim().replace(/ /g,"|")+")\\b"}var c=o(i),m=RegExp(o(n+" "+i+" "+e+" "+s)),d=o(i+" "+e+" "+s),y=o(n+" "+i+" "+s),w=r("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>",2),b=r("\\((?:[^()]|<<self>>)*\\)",2),T="@?\\b[A-Za-z_]\\w*\\b",M=a("<<0>>(?:\\s*<<1>>)?",[T,w]),u=a("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*",[d,M]),v="\\[\\s*(?:,\\s*)*\\]",x=a("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?",[u,v]),k=a("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>",[w,b,v]),C=a("\\(<<0>>+(?:,<<0>>+)+\\)",[k]),I=a("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?",[C,u,v]),D={keyword:m,punctuation:/[<>()?,.:[\]]/},S=`'(?:[^\r
'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'`,j=`"(?:\\\\.|[^\\\\"\r
])*"`;l.languages.csharp=l.languages.extend("clike",{string:[{pattern:t("(^|[^$\\\\])<<0>>",['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),lookbehind:!0,greedy:!0},{pattern:t("(^|[^@$\\\\])<<0>>",[j]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:t("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)",[u]),lookbehind:!0,inside:D},{pattern:t("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)",[T,I]),lookbehind:!0,inside:D},{pattern:t("(\\busing\\s+)<<0>>(?=\\s*=)",[T]),lookbehind:!0},{pattern:t("(\\b<<0>>\\s+)<<1>>",[c,M]),lookbehind:!0,inside:D},{pattern:t("(\\bcatch\\s*\\(\\s*)<<0>>",[u]),lookbehind:!0,inside:D},{pattern:t("(\\bwhere\\s+)<<0>>",[T]),lookbehind:!0},{pattern:t("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>",[x]),lookbehind:!0,inside:D},{pattern:t("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",[I,y,T]),inside:D}],keyword:m,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),l.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),l.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:t("([(,]\\s*)<<0>>(?=\\s*:)",[T]),lookbehind:!0,alias:"punctuation"}}),l.languages.insertBefore("csharp","class-name",{namespace:{pattern:t("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",[T]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:t("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",[b]),lookbehind:!0,alias:"class-name",inside:D},"return-type":{pattern:t("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",[I,u]),inside:D,alias:"class-name"},"constructor-invocation":{pattern:t("(\\bnew\\s+)<<0>>(?=\\s*[[({])",[I]),lookbehind:!0,inside:D,alias:"class-name"},"generic-method":{pattern:t("<<0>>\\s*<<1>>(?=\\s*\\()",[T,w]),inside:{function:t("^<<0>>",[T]),generic:{pattern:RegExp(w),alias:"class-name",inside:D}}},"type-list":{pattern:t("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))",[c,M,T,I,m.source,b,"\\bnew\\s*\\(\\s*\\)"]),lookbehind:!0,inside:{"record-arguments":{pattern:t("(^(?!new\\s*\\()<<0>>\\s*)<<1>>",[M,b]),lookbehind:!0,greedy:!0,inside:l.languages.csharp},keyword:m,"class-name":{pattern:RegExp(I),greedy:!0,inside:D},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var F=j+"|"+S,E=a(`/(?![*/])|//[^\r
]*[\r
]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>`,[F]),z=r(a(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[E]),2),$="\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",W=a("<<0>>(?:\\s*\\(<<1>>*\\))?",[u,z]);l.languages.insertBefore("csharp","class-name",{attribute:{pattern:t("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",[$,W]),lookbehind:!0,greedy:!0,inside:{target:{pattern:t("^<<0>>(?=\\s*:)",[$]),alias:"keyword"},"attribute-arguments":{pattern:t("\\(<<0>>*\\)",[z]),inside:l.languages.csharp},"class-name":{pattern:RegExp(u),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var ee=`:[^}\r
]+`,he=r(a(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[E]),2),se=a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[he,ee]),J=r(a(`[^"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)`,[F]),2),q=a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[J,ee]);function oe(te,ae){return{interpolation:{pattern:t("((?:^|[^{])(?:\\{\\{)*)<<0>>",[te]),lookbehind:!0,inside:{"format-string":{pattern:t("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)",[ae,ee]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:l.languages.csharp}}},string:/[\s\S]+/}}l.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:t('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',[se]),lookbehind:!0,greedy:!0,inside:oe(se,he)},{pattern:t('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',[q]),lookbehind:!0,greedy:!0,inside:oe(q,J)}],char:{pattern:RegExp(S),greedy:!0}}),l.languages.dotnet=l.languages.cs=l.languages.csharp})(Prism)},2247:()=>{(function(l){var a=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+a.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+a.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+a.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+a.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:a,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},l.languages.css.atrule.inside.rest=l.languages.css;var t=l.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))})(Prism)},7706:()=>{var l,a,t,r;l=Prism,a=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,t="(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",r={pattern:RegExp("(^|[^\\w.])"+t+"[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}},l.languages.java=l.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[r,{pattern:RegExp("(^|[^\\w.])"+t+"[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)"),lookbehind:!0,inside:r.inside},{pattern:RegExp("(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)"+t+"[A-Z]\\w*\\b"),lookbehind:!0,inside:r.inside}],keyword:a,function:[l.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),l.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),l.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":r,keyword:a,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp("(\\bimport\\s+)"+t+"(?:[A-Z]\\w*|\\*)(?=\\s*;)"),lookbehind:!0,inside:{namespace:r.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp("(\\bimport\\s+static\\s+)"+t+"(?:\\w+|\\*)(?=\\s*;)"),lookbehind:!0,alias:"static",inside:{namespace:r.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g,function(){return a.source})),lookbehind:!0,inside:{punctuation:/\./}}})},235:()=>{Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),Prism.languages.js=Prism.languages.javascript},8674:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},1233:()=>{(function(l){var a=l.util.clone(l.languages.javascript),t="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function r(e,s){return e=e.replace(/<S>/g,function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"}).replace(/<BRACES>/g,function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"}).replace(/<SPREAD>/g,function(){return t}),RegExp(e,s)}t=r(t).source,l.languages.jsx=l.languages.extend("markup",a),l.languages.jsx.tag.pattern=r(`</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:"(?:\\\\[^]|[^\\\\"])*"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>`),l.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,l.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,l.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,l.languages.jsx.tag.inside.comment=a.comment,l.languages.insertBefore("inside","attr-name",{spread:{pattern:r("<SPREAD>"),inside:l.languages.jsx}},l.languages.jsx.tag),l.languages.insertBefore("inside","special-attr",{script:{pattern:r("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:l.languages.jsx}}},l.languages.jsx.tag);var n=function(e){return e?typeof e=="string"?e:typeof e.content=="string"?e.content:e.content.map(n).join(""):""},i=function(e){for(var s=[],o=0;o<e.length;o++){var c=e[o],m=!1;if(typeof c!="string"&&(c.type==="tag"&&c.content[0]&&c.content[0].type==="tag"?c.content[0].content[0].content==="</"?s.length>0&&s[s.length-1].tagName===n(c.content[0].content[1])&&s.pop():c.content[c.content.length-1].content==="/>"||s.push({tagName:n(c.content[0].content[1]),openedBraces:0}):s.length>0&&c.type==="punctuation"&&c.content==="{"?s[s.length-1].openedBraces++:s.length>0&&s[s.length-1].openedBraces>0&&c.type==="punctuation"&&c.content==="}"?s[s.length-1].openedBraces--:m=!0),(m||typeof c=="string")&&s.length>0&&s[s.length-1].openedBraces===0){var d=n(c);o<e.length-1&&(typeof e[o+1]=="string"||e[o+1].type==="plain-text")&&(d+=n(e[o+1]),e.splice(o+1,1)),o>0&&(typeof e[o-1]=="string"||e[o-1].type==="plain-text")&&(d=n(e[o-1])+d,e.splice(o-1,1),o--),e[o]=new l.Token("plain-text",d,null,d)}c.content&&typeof c.content!="string"&&i(c.content)}};l.hooks.add("after-tokenize",function(e){e.language!=="jsx"&&e.language!=="tsx"||i(e.tokens)})})(Prism)},4006:()=>{Prism.languages.less=Prism.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,operator:/[+\-*\/]/}),Prism.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,lookbehind:!0,alias:"function"}})},3047:()=>{Prism.languages.lua={comment:/^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,greedy:!0},number:/\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,keyword:/\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,function:/(?!\d)\w+(?=\s*(?:[({]))/,operator:[/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,{pattern:/(^|[^.])\.\.(?!\.)/,lookbehind:!0}],punctuation:/[\[\](){},;]|\.+|:+/}},47:()=>{(function(l){function a(o){return o=o.replace(/<inner>/g,function(){return`(?:\\\\.|[^\\\\
\r]|(?:
|\r
?)(?![\r
]))`}),RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:"+o+")")}var t="(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+",r=`\\|?__(?:\\|__)+\\|?(?:(?:
|\r
?)|(?![^]))`.replace(/__/g,function(){return t}),n=`\\|?[ 	]*:?-{3,}:?[ 	]*(?:\\|[ 	]*:?-{3,}:?[ 	]*)+\\|?(?:
|\r
?)`;l.languages.markdown=l.languages.extend("markup",{}),l.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:l.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+r+n+"(?:"+r+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+r+n+")(?:"+r+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(t),inside:l.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+r+")"+n+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+r+"$"),inside:{"table-header":{pattern:RegExp(t),alias:"important",inside:l.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:a("\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:a("\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:a("(~~?)(?:(?!~)<inner>)+\\2"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:a('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[	 ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ 	]?\\[(?:(?!\\])<inner>)+\\])'),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(o){["url","bold","italic","strike","code-snippet"].forEach(function(c){o!==c&&(l.languages.markdown[o].inside.content.inside[c]=l.languages.markdown[c])})}),l.hooks.add("after-tokenize",function(o){o.language!=="markdown"&&o.language!=="md"||function c(m){if(m&&typeof m!="string")for(var d=0,y=m.length;d<y;d++){var w=m[d];if(w.type==="code"){var b=w.content[1],T=w.content[3];if(b&&T&&b.type==="code-language"&&T.type==="code-block"&&typeof b.content=="string"){var M=b.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),u="language-"+(M=(/[a-z][\w-]*/i.exec(M)||[""])[0].toLowerCase());T.alias?typeof T.alias=="string"?T.alias=[T.alias,u]:T.alias.push(u):T.alias=[u]}}else c(w.content)}}(o.tokens)}),l.hooks.add("wrap",function(o){if(o.type==="code-block"){for(var c="",m=0,d=o.classes.length;m<d;m++){var y=o.classes[m],w=/language-(.+)/.exec(y);if(w){c=w[1];break}}var b=l.languages[c];if(b)o.content=l.highlight(o.content.replace(i,"").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(M,u){var v;return(u=u.toLowerCase())[0]==="#"?(v=u[1]==="x"?parseInt(u.slice(2),16):Number(u.slice(1)),s(v)):e[u]||M}),b,c);else if(c&&c!=="none"&&l.plugins.autoloader){var T="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random());o.attributes.id=T,l.plugins.autoloader.loadLanguages(c,function(){var M=document.getElementById(T);M&&(M.innerHTML=l.highlight(M.textContent,l.languages[c],c))})}}});var i=RegExp(l.languages.markup.tag.pattern.source,"gi"),e={amp:"&",lt:"<",gt:">",quot:'"'},s=String.fromCodePoint||String.fromCharCode;l.languages.md=l.languages.markdown})(Prism)},4060:()=>{Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(l){l.type==="entity"&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(l,a){var t={};t["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[a]},t.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:t}};r["language-"+a]={pattern:/[\s\S]+/,inside:Prism.languages[a]};var n={};n[l]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return l}),"i"),lookbehind:!0,greedy:!0,inside:r},Prism.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(l,a){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+l+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[a,"language-"+a],inside:Prism.languages[a]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml},5584:()=>{var l,a;l=Prism,a="(?:"+["$eq","$gt","$gte","$in","$lt","$lte","$ne","$nin","$and","$not","$nor","$or","$exists","$type","$expr","$jsonSchema","$mod","$regex","$text","$where","$geoIntersects","$geoWithin","$near","$nearSphere","$all","$elemMatch","$size","$bitsAllClear","$bitsAllSet","$bitsAnyClear","$bitsAnySet","$comment","$elemMatch","$meta","$slice","$currentDate","$inc","$min","$max","$mul","$rename","$set","$setOnInsert","$unset","$addToSet","$pop","$pull","$push","$pullAll","$each","$position","$slice","$sort","$bit","$addFields","$bucket","$bucketAuto","$collStats","$count","$currentOp","$facet","$geoNear","$graphLookup","$group","$indexStats","$limit","$listLocalSessions","$listSessions","$lookup","$match","$merge","$out","$planCacheStats","$project","$redact","$replaceRoot","$replaceWith","$sample","$set","$skip","$sort","$sortByCount","$unionWith","$unset","$unwind","$setWindowFields","$abs","$accumulator","$acos","$acosh","$add","$addToSet","$allElementsTrue","$and","$anyElementTrue","$arrayElemAt","$arrayToObject","$asin","$asinh","$atan","$atan2","$atanh","$avg","$binarySize","$bsonSize","$ceil","$cmp","$concat","$concatArrays","$cond","$convert","$cos","$dateFromParts","$dateToParts","$dateFromString","$dateToString","$dayOfMonth","$dayOfWeek","$dayOfYear","$degreesToRadians","$divide","$eq","$exp","$filter","$first","$floor","$function","$gt","$gte","$hour","$ifNull","$in","$indexOfArray","$indexOfBytes","$indexOfCP","$isArray","$isNumber","$isoDayOfWeek","$isoWeek","$isoWeekYear","$last","$last","$let","$literal","$ln","$log","$log10","$lt","$lte","$ltrim","$map","$max","$mergeObjects","$meta","$min","$millisecond","$minute","$mod","$month","$multiply","$ne","$not","$objectToArray","$or","$pow","$push","$radiansToDegrees","$range","$reduce","$regexFind","$regexFindAll","$regexMatch","$replaceOne","$replaceAll","$reverseArray","$round","$rtrim","$second","$setDifference","$setEquals","$setIntersection","$setIsSubset","$setUnion","$size","$sin","$slice","$split","$sqrt","$stdDevPop","$stdDevSamp","$strcasecmp","$strLenBytes","$strLenCP","$substr","$substrBytes","$substrCP","$subtract","$sum","$switch","$tan","$toBool","$toDate","$toDecimal","$toDouble","$toInt","$toLong","$toObjectId","$toString","$toLower","$toUpper","$trim","$trunc","$type","$week","$year","$zip","$count","$dateAdd","$dateDiff","$dateSubtract","$dateTrunc","$getField","$rand","$sampleRate","$setField","$unsetField","$comment","$explain","$hint","$max","$maxTimeMS","$min","$orderby","$query","$returnKey","$showDiskLoc","$natural"].map(function(t){return t.replace("$","\\$")}).join("|")+")\\b",l.languages.mongodb=l.languages.extend("javascript",{}),l.languages.insertBefore("mongodb","string",{property:{pattern:/(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,greedy:!0,inside:{keyword:RegExp(`^(['"])?`+a+"(?:\\1)?$")}}}),l.languages.mongodb.string.inside={url:{pattern:/https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,greedy:!0},entity:{pattern:/\b(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d\d?|2[0-4]\d|25[0-5])\b/,greedy:!0}},l.languages.insertBefore("mongodb","constant",{builtin:{pattern:RegExp("\\b(?:"+["ObjectId","Code","BinData","DBRef","Timestamp","NumberLong","NumberDecimal","MaxKey","MinKey","RegExp","ISODate","UUID"].join("|")+")\\b"),alias:"keyword"}})},1637:()=>{Prism.languages.objectivec=Prism.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete Prism.languages.objectivec["class-name"],Prism.languages.objc=Prism.languages.objectivec},9208:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},4297:()=>{var l,a,t,r,n,i;l=Prism,a={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},r="(?:[^\\\\-]|"+(t=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/).source+")",n=RegExp(r+"-"+r),i={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"},l.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:n,inside:{escape:t,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":a,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:t}},"special-escape":a,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":i}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:t,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":i}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}},7239:()=>{Prism.languages.scala=Prism.languages.extend("java",{"triple-quoted-string":{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:/<-|=>|\b(?:abstract|case|catch|class|def|derives|do|else|enum|extends|extension|final|finally|for|forSome|given|if|implicit|import|infix|inline|lazy|match|new|null|object|opaque|open|override|package|private|protected|return|sealed|self|super|this|throw|trait|transparent|try|type|using|val|var|while|with|yield)\b/,number:/\b0x(?:[\da-f]*\.)?[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e\d+)?[dfl]?/i,builtin:/\b(?:Any|AnyRef|AnyVal|Boolean|Byte|Char|Double|Float|Int|Long|Nothing|Short|String|Unit)\b/,symbol:/'[^\d\s\\]\w*/}),Prism.languages.insertBefore("scala","triple-quoted-string",{"string-interpolation":{pattern:/\b[a-z]\w*(?:"""(?:[^$]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*?"""|"(?:[^$"\r\n]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*")/i,greedy:!0,inside:{id:{pattern:/^\w+/,greedy:!0,alias:"function"},escape:{pattern:/\\\$"|\$[$"]/,greedy:!0,alias:"symbol"},interpolation:{pattern:/\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,greedy:!0,inside:{punctuation:/^\$\{?|\}$/,expression:{pattern:/[\s\S]+/,inside:Prism.languages.scala}}},string:/[\s\S]+/}}}),delete Prism.languages.scala["class-name"],delete Prism.languages.scala.function,delete Prism.languages.scala.constant},9578:()=>{Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss},4833:()=>{(function(l){var a=l.util.clone(l.languages.typescript);l.languages.tsx=l.languages.extend("jsx",a),delete l.languages.tsx.parameter,delete l.languages.tsx["literal-property"];var t=l.languages.tsx.tag;t.pattern=RegExp("(^|[^\\w$]|(?=</))(?:"+t.pattern.source+")",t.pattern.flags),t.lookbehind=!0})(Prism)},6456:()=>{(function(l){l.languages.typescript=l.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),l.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete l.languages.typescript.parameter,delete l.languages.typescript["literal-property"];var a=l.languages.extend("typescript",{});delete a["class-name"],l.languages.typescript["class-name"].inside=a,l.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:a}}}}),l.languages.ts=l.languages.typescript})(Prism)},9883:()=>{(function(l){function a(i,e){l.languages[i]&&l.languages.insertBefore(i,"comment",{"doc-comment":e})}var t=l.languages.markup.tag,r={pattern:/\/\/\/.*/,greedy:!0,alias:"comment",inside:{tag:t}},n={pattern:/'''.*/,greedy:!0,alias:"comment",inside:{tag:t}};a("csharp",r),a("fsharp",r),a("vbnet",n)})(Prism)},6488:()=>{typeof Prism<"u"&&typeof document<"u"&&document.createRange&&(Prism.plugins.KeepMarkup=!0,Prism.hooks.add("before-highlight",function(l){if(l.element.children.length&&Prism.util.isActive(l.element,"keep-markup",!0)){var a=Prism.util.isActive(l.element,"drop-tokens",!1),t=0,r=[];i(l.element),r.length&&(l.keepMarkup=r)}function n(e){if(function(o){return!a||o.nodeName.toLowerCase()!=="span"||!o.classList.contains("token")}(e)){var s={element:e,posOpen:t};r.push(s),i(e),s.posClose=t}else i(e)}function i(e){for(var s=0,o=e.childNodes.length;s<o;s++){var c=e.childNodes[s];c.nodeType===1?n(c):c.nodeType===3&&(t+=c.data.length)}}}),Prism.hooks.add("after-highlight",function(l){if(l.keepMarkup&&l.keepMarkup.length){var a=function(t,r){for(var n=0,i=t.childNodes.length;n<i;n++){var e=t.childNodes[n];if(e.nodeType===1){if(!a(e,r))return!1}else e.nodeType===3&&(!r.nodeStart&&r.pos+e.data.length>r.node.posOpen&&(r.nodeStart=e,r.nodeStartPos=r.node.posOpen-r.pos),r.nodeStart&&r.pos+e.data.length>=r.node.posClose&&(r.nodeEnd=e,r.nodeEndPos=r.node.posClose-r.pos),r.pos+=e.data.length);if(r.nodeStart&&r.nodeEnd){var s=document.createRange();return s.setStart(r.nodeStart,r.nodeStartPos),s.setEnd(r.nodeEnd,r.nodeEndPos),r.node.element.innerHTML="",r.node.element.appendChild(s.extractContents()),s.insertNode(r.node.element),s.detach(),!1}}return!0};l.keepMarkup.forEach(function(t){a(l.element,{node:t,pos:0})}),l.highlightedCode=l.element.innerHTML}}))},8759:()=>{(function(){if(typeof Prism<"u"&&typeof document<"u"){var l="line-numbers",a=/\n(?!$)/g,t=Prism.plugins.lineNumbers={getLine:function(i,e){if(i.tagName==="PRE"&&i.classList.contains(l)){var s=i.querySelector(".line-numbers-rows");if(s){var o=parseInt(i.getAttribute("data-start"),10)||1,c=o+(s.children.length-1);e<o&&(e=o),e>c&&(e=c);var m=e-o;return s.children[m]}}},resize:function(i){n([i])},assumeViewportIndependence:!0},r=void 0;window.addEventListener("resize",function(){t.assumeViewportIndependence&&r===window.innerWidth||(r=window.innerWidth,n(Array.prototype.slice.call(document.querySelectorAll("pre."+l))))}),Prism.hooks.add("complete",function(i){if(i.code){var e=i.element,s=e.parentNode;if(s&&/pre/i.test(s.nodeName)&&!e.querySelector(".line-numbers-rows")&&Prism.util.isActive(e,l)){e.classList.remove(l),s.classList.add(l);var o,c=i.code.match(a),m=c?c.length+1:1,d=new Array(m+1).join("<span></span>");(o=document.createElement("span")).setAttribute("aria-hidden","true"),o.className="line-numbers-rows",o.innerHTML=d,s.hasAttribute("data-start")&&(s.style.counterReset="linenumber "+(parseInt(s.getAttribute("data-start"),10)-1)),i.element.appendChild(o),n([s]),Prism.hooks.run("line-numbers",i)}}}),Prism.hooks.add("line-numbers",function(i){i.plugins=i.plugins||{},i.plugins.lineNumbers=!0})}function n(i){if((i=i.filter(function(s){var o,c=(o=s,o?window.getComputedStyle?getComputedStyle(o):o.currentStyle||null:null)["white-space"];return c==="pre-wrap"||c==="pre-line"})).length!=0){var e=i.map(function(s){var o=s.querySelector("code"),c=s.querySelector(".line-numbers-rows");if(o&&c){var m=s.querySelector(".line-numbers-sizer"),d=o.textContent.split(a);m||((m=document.createElement("span")).className="line-numbers-sizer",o.appendChild(m)),m.innerHTML="0",m.style.display="block";var y=m.getBoundingClientRect().height;return m.innerHTML="",{element:s,lines:d,lineHeights:[],oneLinerHeight:y,sizer:m}}}).filter(Boolean);e.forEach(function(s){var o=s.sizer,c=s.lines,m=s.lineHeights,d=s.oneLinerHeight;m[c.length-1]=void 0,c.forEach(function(y,w){if(y&&y.length>1){var b=o.appendChild(document.createElement("span"));b.style.display="block",b.textContent=y}else m[w]=d})}),e.forEach(function(s){for(var o=s.sizer,c=s.lineHeights,m=0,d=0;d<c.length;d++)c[d]===void 0&&(c[d]=o.children[m++].getBoundingClientRect().height)}),e.forEach(function(s){var o=s.sizer,c=s.element.querySelector(".line-numbers-rows");o.style.display="none",o.innerHTML="",s.lineHeights.forEach(function(m,d){c.children[d].style.height=m+"px"})})}}})()},5660:(l,a,t)=>{var r=function(n){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,e=0,s={},o={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function v(x){return x instanceof c?new c(x.type,v(x.content),x.alias):Array.isArray(x)?x.map(v):x.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(v){return Object.prototype.toString.call(v).slice(8,-1)},objId:function(v){return v.__id||Object.defineProperty(v,"__id",{value:++e}),v.__id},clone:function v(x,k){var C,I;switch(k=k||{},o.util.type(x)){case"Object":if(I=o.util.objId(x),k[I])return k[I];for(var D in C={},k[I]=C,x)x.hasOwnProperty(D)&&(C[D]=v(x[D],k));return C;case"Array":return I=o.util.objId(x),k[I]?k[I]:(C=[],k[I]=C,x.forEach(function(S,j){C[j]=v(S,k)}),C);default:return x}},getLanguage:function(v){for(;v;){var x=i.exec(v.className);if(x)return x[1].toLowerCase();v=v.parentElement}return"none"},setLanguage:function(v,x){v.className=v.className.replace(RegExp(i,"gi"),""),v.classList.add("language-"+x)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(C){var v=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(v){var x=document.getElementsByTagName("script");for(var k in x)if(x[k].src==v)return x[k]}return null}},isActive:function(v,x,k){for(var C="no-"+x;v;){var I=v.classList;if(I.contains(x))return!0;if(I.contains(C))return!1;v=v.parentElement}return!!k}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(v,x){var k=o.util.clone(o.languages[v]);for(var C in x)k[C]=x[C];return k},insertBefore:function(v,x,k,C){var I=(C=C||o.languages)[v],D={};for(var S in I)if(I.hasOwnProperty(S)){if(S==x)for(var j in k)k.hasOwnProperty(j)&&(D[j]=k[j]);k.hasOwnProperty(S)||(D[S]=I[S])}var F=C[v];return C[v]=D,o.languages.DFS(o.languages,function(E,z){z===F&&E!=v&&(this[E]=D)}),D},DFS:function v(x,k,C,I){I=I||{};var D=o.util.objId;for(var S in x)if(x.hasOwnProperty(S)){k.call(x,S,x[S],C||S);var j=x[S],F=o.util.type(j);F!=="Object"||I[D(j)]?F!=="Array"||I[D(j)]||(I[D(j)]=!0,v(j,k,S,I)):(I[D(j)]=!0,v(j,k,null,I))}}},plugins:{},highlightAll:function(v,x){o.highlightAllUnder(document,v,x)},highlightAllUnder:function(v,x,k){var C={callback:k,container:v,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),o.hooks.run("before-all-elements-highlight",C);for(var I,D=0;I=C.elements[D++];)o.highlightElement(I,x===!0,C.callback)},highlightElement:function(v,x,k){var C=o.util.getLanguage(v),I=o.languages[C];o.util.setLanguage(v,C);var D=v.parentElement;D&&D.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(D,C);var S={element:v,language:C,grammar:I,code:v.textContent};function j(E){S.highlightedCode=E,o.hooks.run("before-insert",S),S.element.innerHTML=S.highlightedCode,o.hooks.run("after-highlight",S),o.hooks.run("complete",S),k&&k.call(S.element)}if(o.hooks.run("before-sanity-check",S),(D=S.element.parentElement)&&D.nodeName.toLowerCase()==="pre"&&!D.hasAttribute("tabindex")&&D.setAttribute("tabindex","0"),!S.code)return o.hooks.run("complete",S),void(k&&k.call(S.element));if(o.hooks.run("before-highlight",S),S.grammar)if(x&&n.Worker){var F=new Worker(o.filename);F.onmessage=function(E){j(E.data)},F.postMessage(JSON.stringify({language:S.language,code:S.code,immediateClose:!0}))}else j(o.highlight(S.code,S.grammar,S.language));else j(o.util.encode(S.code))},highlight:function(v,x,k){var C={code:v,grammar:x,language:k};if(o.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=o.tokenize(C.code,C.grammar),o.hooks.run("after-tokenize",C),c.stringify(o.util.encode(C.tokens),C.language)},tokenize:function(v,x){var k=x.rest;if(k){for(var C in k)x[C]=k[C];delete x.rest}var I=new y;return w(I,I.head,v),d(v,I,x,I.head,0),function(D){for(var S=[],j=D.head.next;j!==D.tail;)S.push(j.value),j=j.next;return S}(I)},hooks:{all:{},add:function(v,x){var k=o.hooks.all;k[v]=k[v]||[],k[v].push(x)},run:function(v,x){var k=o.hooks.all[v];if(k&&k.length)for(var C,I=0;C=k[I++];)C(x)}},Token:c};function c(v,x,k,C){this.type=v,this.content=x,this.alias=k,this.length=0|(C||"").length}function m(v,x,k,C){v.lastIndex=x;var I=v.exec(k);if(I&&C&&I[1]){var D=I[1].length;I.index+=D,I[0]=I[0].slice(D)}return I}function d(v,x,k,C,I,D){for(var S in k)if(k.hasOwnProperty(S)&&k[S]){var j=k[S];j=Array.isArray(j)?j:[j];for(var F=0;F<j.length;++F){if(D&&D.cause==S+","+F)return;var E=j[F],z=E.inside,$=!!E.lookbehind,W=!!E.greedy,ee=E.alias;if(W&&!E.pattern.global){var he=E.pattern.toString().match(/[imsuy]*$/)[0];E.pattern=RegExp(E.pattern.source,he+"g")}for(var se=E.pattern||E,J=C.next,q=I;J!==x.tail&&!(D&&q>=D.reach);q+=J.value.length,J=J.next){var oe=J.value;if(x.length>v.length)return;if(!(oe instanceof c)){var te,ae=1;if(W){if(!(te=m(se,q,v,$))||te.index>=v.length)break;var Y=te.index,ge=te.index+te[0].length,Ae=q;for(Ae+=J.value.length;Y>=Ae;)Ae+=(J=J.next).value.length;if(q=Ae-=J.value.length,J.value instanceof c)continue;for(var pe=J;pe!==x.tail&&(Ae<ge||typeof pe.value=="string");pe=pe.next)ae++,Ae+=pe.value.length;ae--,oe=v.slice(q,Ae),te.index-=q}else if(!(te=m(se,0,oe,$)))continue;Y=te.index;var ye=te[0],Ce=oe.slice(0,Y),ve=oe.slice(Y+ye.length),be=q+oe.length;D&&be>D.reach&&(D.reach=be);var ue=J.prev;if(Ce&&(ue=w(x,ue,Ce),q+=Ce.length),b(x,ue,ae),J=w(x,ue,new c(S,z?o.tokenize(ye,z):ye,ee,ye)),ve&&w(x,J,ve),ae>1){var me={cause:S+","+F,reach:be};d(v,x,k,J.prev,q,me),D&&me.reach>D.reach&&(D.reach=me.reach)}}}}}}function y(){var v={value:null,prev:null,next:null},x={value:null,prev:v,next:null};v.next=x,this.head=v,this.tail=x,this.length=0}function w(v,x,k){var C=x.next,I={value:k,prev:x,next:C};return x.next=I,C.prev=I,v.length++,I}function b(v,x,k){for(var C=x.next,I=0;I<k&&C!==v.tail;I++)C=C.next;x.next=C,C.prev=x,v.length-=I}if(n.Prism=o,c.stringify=function v(x,k){if(typeof x=="string")return x;if(Array.isArray(x)){var C="";return x.forEach(function(F){C+=v(F,k)}),C}var I={type:x.type,content:v(x.content,k),tag:"span",classes:["token",x.type],attributes:{},language:k},D=x.alias;D&&(Array.isArray(D)?Array.prototype.push.apply(I.classes,D):I.classes.push(D)),o.hooks.run("wrap",I);var S="";for(var j in I.attributes)S+=" "+j+'="'+(I.attributes[j]||"").replace(/"/g,"&quot;")+'"';return"<"+I.tag+' class="'+I.classes.join(" ")+'"'+S+">"+I.content+"</"+I.tag+">"},!n.document)return n.addEventListener&&(o.disableWorkerMessageHandler||n.addEventListener("message",function(v){var x=JSON.parse(v.data),k=x.language,C=x.code,I=x.immediateClose;n.postMessage(o.highlight(C,o.languages[k],k)),I&&n.close()},!1)),o;var T=o.util.currentScript();function M(){o.manual||o.highlightAll()}if(T&&(o.filename=T.src,T.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var u=document.readyState;u==="loading"||u==="interactive"&&T&&T.defer?document.addEventListener("DOMContentLoaded",M):window.requestAnimationFrame?window.requestAnimationFrame(M):window.setTimeout(M,16)}return o}(typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{});l.exports&&(l.exports=r),t.g!==void 0&&(t.g.Prism=r),r.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.languages.markup.doctype.inside["internal-subset"].inside=r.languages.markup,r.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(n,i){var e={};e["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[i]},e.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:e}};s["language-"+i]={pattern:/[\s\S]+/,inside:r.languages[i]};var o={};o[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:s},r.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(r.languages.markup.tag,"addAttribute",{value:function(n,i){r.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:r.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.xml=r.languages.extend("markup",{}),r.languages.ssml=r.languages.xml,r.languages.atom=r.languages.xml,r.languages.rss=r.languages.xml,function(n){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var e=n.languages.markup;e&&(e.tag.addInlined("style","css"),e.tag.addAttribute("style","css"))}(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:r.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),r.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),r.languages.markup&&(r.languages.markup.tag.addInlined("script","javascript"),r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),r.languages.js=r.languages.javascript,function(){if(r!==void 0&&typeof document<"u"){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",e="loading",s="loaded",o="pre[data-src]:not(["+i+'="'+s+'"]):not(['+i+'="'+e+'"])';r.hooks.add("before-highlightall",function(m){m.selector+=", "+o}),r.hooks.add("before-sanity-check",function(m){var d=m.element;if(d.matches(o)){m.code="",d.setAttribute(i,e);var y=d.appendChild(document.createElement("CODE"));y.textContent="Loading\u2026";var w=d.getAttribute("data-src"),b=m.language;if(b==="none"){var T=(/\.(\w+)$/.exec(w)||[,"none"])[1];b=n[T]||T}r.util.setLanguage(y,b),r.util.setLanguage(d,b);var M=r.plugins.autoloader;M&&M.loadLanguages(b),function(u,v,x){var k=new XMLHttpRequest;k.open("GET",u,!0),k.onreadystatechange=function(){k.readyState==4&&(k.status<400&&k.responseText?function(C){d.setAttribute(i,s);var I=function(F){var E=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(F||"");if(E){var z=Number(E[1]),$=E[2],W=E[3];return $?W?[z,Number(W)]:[z,void 0]:[z,z]}}(d.getAttribute("data-range"));if(I){var D=C.split(/\r\n?|\n/g),S=I[0],j=I[1]==null?D.length:I[1];S<0&&(S+=D.length),S=Math.max(0,Math.min(S-1,D.length)),j<0&&(j+=D.length),j=Math.max(0,Math.min(j,D.length)),C=D.slice(S,j).join(`
`),d.hasAttribute("data-start")||d.setAttribute("data-start",String(S+1))}y.textContent=C,r.highlightElement(y)}(k.responseText):k.status>=400?x("\u2716 Error "+k.status+" while fetching file: "+k.statusText):x("\u2716 Error: File does not exist or is empty"))},k.send(null)}(w,0,function(u){d.setAttribute(i,"failed"),y.textContent=u})}}),r.plugins.fileHighlight={highlight:function(m){for(var d,y=(m||document).querySelectorAll(o),w=0;d=y[w++];)r.highlightElement(d)}};var c=!1;r.fileHighlight=function(){c||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),c=!0),r.plugins.fileHighlight.highlight.apply(this,arguments)}}}()},9967:(l,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>u});var r=t(3379),n=t.n(r),i=t(7795),e=t.n(i),s=t(569),o=t.n(s),c=t(3565),m=t.n(c),d=t(9216),y=t.n(d),w=t(4589),b=t.n(w),T=t(9137),M={};M.styleTagTransform=b(),M.setAttributes=m(),M.insert=o().bind(null,"head"),M.domAPI=e(),M.insertStyleElement=y(),n()(T.Z,M);const u=T.Z&&T.Z.locals?T.Z.locals:void 0},3379:l=>{"use strict";var a=[];function t(i){for(var e=-1,s=0;s<a.length;s++)if(a[s].identifier===i){e=s;break}return e}function r(i,e){for(var s={},o=[],c=0;c<i.length;c++){var m=i[c],d=e.base?m[0]+e.base:m[0],y=s[d]||0,w="".concat(d," ").concat(y);s[d]=y+1;var b=t(w),T={css:m[1],media:m[2],sourceMap:m[3],supports:m[4],layer:m[5]};if(b!==-1)a[b].references++,a[b].updater(T);else{var M=n(T,e);e.byIndex=c,a.splice(c,0,{identifier:w,updater:M,references:1})}o.push(w)}return o}function n(i,e){var s=e.domAPI(e);return s.update(i),function(o){if(o){if(o.css===i.css&&o.media===i.media&&o.sourceMap===i.sourceMap&&o.supports===i.supports&&o.layer===i.layer)return;s.update(i=o)}else s.remove()}}l.exports=function(i,e){var s=r(i=i||[],e=e||{});return function(o){o=o||[];for(var c=0;c<s.length;c++){var m=t(s[c]);a[m].references--}for(var d=r(o,e),y=0;y<s.length;y++){var w=t(s[y]);a[w].references===0&&(a[w].updater(),a.splice(w,1))}s=d}}},569:l=>{"use strict";var a={};l.exports=function(t,r){var n=function(i){if(a[i]===void 0){var e=document.querySelector(i);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch{e=null}a[i]=e}return a[i]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},9216:l=>{"use strict";l.exports=function(a){var t=document.createElement("style");return a.setAttributes(t,a.attributes),a.insert(t,a.options),t}},3565:(l,a,t)=>{"use strict";l.exports=function(r){var n=t.nc;n&&r.setAttribute("nonce",n)}},7795:l=>{"use strict";l.exports=function(a){var t=a.insertStyleElement(a);return{update:function(r){(function(n,i,e){var s="";e.supports&&(s+="@supports (".concat(e.supports,") {")),e.media&&(s+="@media ".concat(e.media," {"));var o=e.layer!==void 0;o&&(s+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),s+=e.css,o&&(s+="}"),e.media&&(s+="}"),e.supports&&(s+="}");var c=e.sourceMap;c&&typeof btoa<"u"&&(s+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),i.styleTagTransform(s,n,i.options)})(t,a,r)},remove:function(){(function(r){if(r.parentNode===null)return!1;r.parentNode.removeChild(r)})(t)}}}},4589:l=>{"use strict";l.exports=function(a,t){if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}},7136:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4gPHN2ZyBmaWxsPSIjMDAwMDAwIiB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00NzguMjEgMzM0LjA5M0wzMzYgMjU2bDE0Mi4yMS03OC4wOTNjMTEuNzk1LTYuNDc3IDE1Ljk2MS0yMS4zODQgOS4yMzItMzMuMDM3bC0xOS40OC0zMy43NDFjLTYuNzI4LTExLjY1My0yMS43Mi0xNS40OTktMzMuMjI3LTguNTIzTDI5NiAxODYuNzE4bDMuNDc1LTE2Mi4yMDRDMjk5Ljc2MyAxMS4wNjEgMjg4LjkzNyAwIDI3NS40OCAwaC0zOC45NmMtMTMuNDU2IDAtMjQuMjgzIDExLjA2MS0yMy45OTQgMjQuNTE0TDIxNiAxODYuNzE4IDc3LjI2NSAxMDIuNjA3Yy0xMS41MDYtNi45NzYtMjYuNDk5LTMuMTMtMzMuMjI3IDguNTIzbC0xOS40OCAzMy43NDFjLTYuNzI4IDExLjY1My0yLjU2MiAyNi41NiA5LjIzMyAzMy4wMzdMMTc2IDI1NiAzMy43OSAzMzQuMDkzYy0xMS43OTUgNi40NzctMTUuOTYxIDIxLjM4NC05LjIzMiAzMy4wMzdsMTkuNDggMzMuNzQxYzYuNzI4IDExLjY1MyAyMS43MjEgMTUuNDk5IDMzLjIyNyA4LjUyM0wyMTYgMzI1LjI4MmwtMy40NzUgMTYyLjIwNEMyMTIuMjM3IDUwMC45MzkgMjIzLjA2NCA1MTIgMjM2LjUyIDUxMmgzOC45NjFjMTMuNDU2IDAgMjQuMjgzLTExLjA2MSAyMy45OTUtMjQuNTE0TDI5NiAzMjUuMjgybDEzOC43MzUgODQuMTExYzExLjUwNiA2Ljk3NiAyNi40OTkgMy4xMyAzMy4yMjctOC41MjNsMTkuNDgtMzMuNzQxYzYuNzI4LTExLjY1MyAyLjU2My0yNi41NTktOS4yMzItMzMuMDM2eiIvPjwvc3ZnPg=="},6981:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQ3MV80MzEzKSI+IDxwYXRoIGQ9Ik02IDExLjI1QzguODk5NSAxMS4yNSAxMS4yNSA4Ljg5OTUgMTEuMjUgNkMxMS4yNSAzLjEwMDUxIDguODk5NSAwLjc1IDYgMC43NUMzLjEwMDUxIDAuNzUgMC43NSAzLjEwMDUxIDAuNzUgNkMwLjc1IDguODk5NSAzLjEwMDUxIDExLjI1IDYgMTEuMjVaIiBzdHJva2U9IiM5QkE3QjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4gPHBhdGggZD0iTTguMjUgNkgzLjc1IiBzdHJva2U9IiM5QkE3QjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiAvPiA8L2c+IDxkZWZzPiA8Y2xpcFBhdGggaWQ9ImNsaXAwXzQ3MV80MzEzIj4gPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJ3aGl0ZSIgLz4gPC9jbGlwUGF0aD4gPC9kZWZzPiA8L3N2Zz4g"},7111:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iY2FsZW5kYXIiPiA8cGF0aCBkPSJNMjAsM2gtMXYyYzAsMS4xMDQtMC44OTYsMi0yLDJzLTItMC44OTYtMi0yVjNIOXYyYzAsMS4xMDQtMC44OTYsMi0yLDJTNSw2LjEwNCw1LDVWM0g0QzIuODk1LDMsMiwzLjg5NSwyLDV2MTR2MSBjMCwxLjEwNSwwLjg5NSwyLDIsMmgxNmMxLjEwNSwwLDItMC44OTUsMi0ydi0xVjVDMjIsMy44OTUsMjEuMTA1LDMsMjAsM3ogTTcsMTguNUM3LDE4Ljc3NSw2Ljc3NSwxOSw2LjUsMTloLTEgQzUuMjI1LDE5LDUsMTguNzc1LDUsMTguNXYtMUM1LDE3LjIyNSw1LjIyNSwxNyw1LjUsMTdoMUM2Ljc3NSwxNyw3LDE3LjIyNSw3LDE3LjVWMTguNXogTTcsMTQuNUM3LDE0Ljc3NSw2Ljc3NSwxNSw2LjUsMTVoLTEgQzUuMjI1LDE1LDUsMTQuNzc1LDUsMTQuNXYtMUM1LDEzLjIyNSw1LjIyNSwxMyw1LjUsMTNoMUM2Ljc3NSwxMyw3LDEzLjIyNSw3LDEzLjVWMTQuNXogTTcsMTAuNUM3LDEwLjc3NSw2Ljc3NSwxMSw2LjUsMTFoLTEgQzUuMjI1LDExLDUsMTAuNzc1LDUsMTAuNXYtMUM1LDkuMjI1LDUuMjI1LDksNS41LDloMUM2Ljc3NSw5LDcsOS4yMjUsNyw5LjVWMTAuNXogTTExLDE4LjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMSBDOS4yMjUsMTksOSwxOC43NzUsOSwxOC41di0xQzksMTcuMjI1LDkuMjI1LDE3LDkuNSwxN2gxYzAuMjc1LDAsMC41LDAuMjI1LDAuNSwwLjVWMTguNXogTTExLDE0LjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMSBDOS4yMjUsMTUsOSwxNC43NzUsOSwxNC41di0xQzksMTMuMjI1LDkuMjI1LDEzLDkuNSwxM2gxYzAuMjc1LDAsMC41LDAuMjI1LDAuNSwwLjVWMTQuNXogTTExLDEwLjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMSBDOS4yMjUsMTEsOSwxMC43NzUsOSwxMC41di0xQzksOS4yMjUsOS4yMjUsOSw5LjUsOWgxQzEwLjc3NSw5LDExLDkuMjI1LDExLDkuNVYxMC41eiBNMTUsMTguNWMwLDAuMjc1LTAuMjI1LDAuNS0wLjUsMC41aC0xIGMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMWMwLTAuMjc1LDAuMjI1LTAuNSwwLjUtMC41aDFjMC4yNzUsMCwwLjUsMC4yMjUsMC41LDAuNVYxOC41eiBNMTUsMTQuNWMwLDAuMjc1LTAuMjI1LDAuNS0wLjUsMC41IGgtMWMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMWMwLTAuMjc1LDAuMjI1LTAuNSwwLjUtMC41aDFjMC4yNzUsMCwwLjUsMC4yMjUsMC41LDAuNVYxNC41eiBNMTUsMTAuNSBjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMWMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMUMxMyw5LjIyNSwxMy4yMjUsOSwxMy41LDloMUMxNC43NzUsOSwxNSw5LjIyNSwxNSw5LjVWMTAuNXogTTE5LDE4LjUgYzAsMC4yNzUtMC4yMjUsMC41LTAuNSwwLjVoLTFjLTAuMjc1LDAtMC41LTAuMjI1LTAuNS0wLjV2LTFjMC0wLjI3NSwwLjIyNS0wLjUsMC41LTAuNWgxYzAuMjc1LDAsMC41LDAuMjI1LDAuNSwwLjVWMTguNXogTTE5LDE0LjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMWMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMWMwLTAuMjc1LDAuMjI1LTAuNSwwLjUtMC41aDFjMC4yNzUsMCwwLjUsMC4yMjUsMC41LDAuNSBWMTQuNXogTTE5LDEwLjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMWMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMUMxNyw5LjIyNSwxNy4yMjUsOSwxNy41LDloMUMxOC43NzUsOSwxOSw5LjIyNSwxOSw5LjUgVjEwLjV6IE02LDVWMmMwLTAuNTUyLDAuNDQ4LTEsMS0xczEsMC40NDgsMSwxdjNjMCwwLjU1Mi0wLjQ0OCwxLTEsMVM2LDUuNTUyLDYsNXogTTE2LDVWMmMwLTAuNTUyLDAuNDQ3LTEsMS0xczEsMC40NDgsMSwxdjMgYzAsMC41NTItMC40NDcsMS0xLDFTMTYsNS41NTIsMTYsNXoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},5533:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMyAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjYiIHN0cm9rZT0iI0YxNEM0QyIvPiA8cGF0aCBkPSJNNCA0TDkgOSIgc3Ryb2tlPSIjRjE0QzRDIi8+IDxwYXRoIGQ9Ik05IDRMNCA5IiBzdHJva2U9IiNGMTRDNEMiLz4gPC9zdmc+IA=="},1925:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+IDxnIGlkPSJjYW5jZWwiPiA8cGF0aCBkPSJNMTkuMDcxLDE3LjY1N0wxMy40MTQsMTJsNS42NTctNS42NTdjMC4zOS0wLjM5LDAuMzktMS4wMjQsMC0xLjQxNHMtMS4wMjQtMC4zOS0xLjQxNCwwTDEyLDEwLjU4Nkw2LjM0Myw0LjkyOSBjLTAuMzktMC4zOS0xLjAyNC0wLjM5LTEuNDE0LDBzLTAuMzksMS4wMjQsMCwxLjQxNEwxMC41ODYsMTJsLTUuNjU3LDUuNjU3Yy0wLjM5MSwwLjM5MS0wLjM5LDEuMDI0LDAsMS40MTRzMS4wMjMsMC4zOTEsMS40MTQsMCBMMTIsMTMuNDE0bDUuNjU3LDUuNjU3YzAuMzksMC4zOSwxLjAyNCwwLjM5LDEuNDE0LDBTMTkuNDYyLDE4LjA0NywxOS4wNzEsMTcuNjU3eiIvPiA8L2c+IDxnIGlkPSJMYXllcl8xIj4gPC9nPiA8L3N2Zz4="},880:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ic21zIj4gPHBhdGggZD0iTTE4LjQ4MSwxMGgtMS45NDdjLTIuMTg4LDAtNC4xNDIsMS42MDItNC40NzksMy44NDhDMTEuNjMsMTYuNjc4LDEzLjY5OCwxOSwxNi4zNDcsMTloMS4xSDE4IGMwLjI2NCwwLjQwOSwwLjQ3NCwxLjA0MiwwLjQ3NCwxLjU3MWMwLDAuMjY1LTAuMDM5LDAuNjExLTAuMTE0LDAuOTM5Yy0wLjA3NSwwLjMyOSwwLjI1MiwwLjYwNCwwLjUzNiwwLjQ0MSBjMS45NjgtMS4xMzIsNC4wNDctNC4zMTcsNC4xMDMtNy4yNTlDMjMuMDQ4LDEyLjExMiwyMC45NjUsMTAsMTguNDgxLDEweiIvPiA8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjU7IiBkPSJNMTYuOTIxLDcuNDUxQzE2LjQzMSw0LjI2OSwxMy41ODgsMiwxMC40MDYsMkg3LjU3M0MzLjk2LDIsMC45Myw0Ljk5MiwxLjAwMSw4LjY0OCBjMC4wODIsNC4xNjgsMy4xMDUsOC42NzksNS45NjgsMTAuMjgzYzAuNDE0LDAuMjMyLDAuODg5LTAuMTU5LDAuNzgtMC42MjRjLTAuMTA5LTAuNDY2LTAuMTY2LTAuOTU1LTAuMTY2LTEuMzMxIGMwLTAuNzUsMC4wMzMtMS4zOTYsMC40MTctMS45NzZoMC44MDRoMS42YzAuMjA2LDAsMC40MS0wLjAxNSwwLjYxMi0wLjAzNWMtMC4wMjktMC40MTctMC4wMTUtMC44NDEsMC4wNDktMS4yNjYgQzExLjQ2NywxMS4wMiwxMy44MTgsOSwxNi41MzMsOWgwLjQzM0MxNy4wMTIsOC40OTYsMTcuMDAyLDcuOTc4LDE2LjkyMSw3LjQ1MXoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},4339:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNl8yMzY0KSI+IDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS44MTA2NiA2LjAwMDA2TDMuOTA1MzMgMy45MDUzOEwyLjg0NDY3IDIuODQ0NzNMMC4yMTk2NyA1LjQ2OTczQy0wLjA3MzIyMzMgNS43NjI2MiAtMC4wNzMyMjMzIDYuMjM3NDkgMC4yMTk2NyA2LjUzMDM4TDIuODQ0NjcgOS4xNTU0TDMuOTA1MzMgOC4wOTQ3NUwxLjgxMDY2IDYuMDAwMDZaTTQuMTU5NTggOC40ODg0Mkw2LjQ1NDU4IDIuOTM4NEw3Ljg0MDcyIDMuNTExNkw1LjU0NTc0IDkuMDYxNTdMNC4xNTk1OCA4LjQ4ODQyWk0xMS43ODAzIDUuNDY5NzNMOS4xNTUzMiAyLjg0NDczTDguMDk0NjcgMy45MDUzOEwxMC4xODkzIDYuMDAwMDZMOC4wOTQ2NyA4LjA5NDc1TDkuMTU1MzIgOS4xNTU0TDExLjc4MDMgNi41MzAzOEMxMi4wNzMyIDYuMjM3NDkgMTIuMDczMiA1Ljc2MjYyIDExLjc4MDMgNS40Njk3M1oiIGZpbGw9IndoaXRlIiAvPiA8L2c+IDxkZWZzPiA8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyNl8yMzY0Ij4gPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJ3aGl0ZSIgLz4gPC9jbGlwUGF0aD4gPC9kZWZzPiA8L3N2Zz4g"},7588:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTEzLjUwNjcgMC45NzMzMzNMMTMuOTg2NyAxLjUwNjY3VjEwLjUyTDEzLjUwNjcgMTFINi43MzMzM0wzLjg1MzMzIDEzLjg4TDMgMTMuNTA2N1YxMUgwLjQ5MzMzM0wwLjAxMzMzMzMgMTAuNTJWMS41MDY2N0wwLjQ5MzMzMyAwLjk3MzMzM0gxMy41MDY3Wk0xMy4wMjY3IDkuOTg2NjdWMS45ODY2N0gxLjAyNjY3VjkuOTg2NjdIMy40OEw0LjAxMzMzIDEwLjUyVjEyLjI4TDYuMTQ2NjcgMTAuMTQ2N0w2LjUyIDkuOTg2NjdIMTMuMDI2N1oiIGZpbGw9IiNGMTRDNEMiLz4gPC9zdmc+IA=="},2666:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4OV80Mjk4OSkiPiA8cGF0aCBkPSJNNy41IDQuNUgxLjVWMTAuNUg3LjVWNC41WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPiA8cGF0aCBkPSJNMy43NSA0LjVWMS41SDEwLjVWOC4yNUg3LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4gPC9nPiA8ZGVmcz4gPGNsaXBQYXRoIGlkPSJjbGlwMF8xODlfNDI5ODkiPiA8cmVjdCB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9IndoaXRlIiAvPiA8L2NsaXBQYXRoPiA8L2RlZnM+IDwvc3ZnPiA="},5070:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDIuMjVDMCAxLjgzNTc5IDAuMzM1Nzg2IDEuNSAwLjc1IDEuNUgxMS4yNUMxMS42NjQyIDEuNSAxMiAxLjgzNTc5IDEyIDIuMjVWNC41SDEwLjVWM0gxLjVWOC4yNUg0LjVWOS43NUgwLjc1QzAuMzM1Nzg2IDkuNzUgMCA5LjQxNDIzIDAgOVYyLjI1Wk05Ljc1IDcuNUgxMlY5SDkuNzVWMTEuMjVIOC4yNVY5SDZWNy41SDguMjVWNS4yNUg5Ljc1VjcuNVoiIGZpbGw9IndoaXRlIiAvPiA8L3N2Zz4g"},6829:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTExLjcwNjcgMy4yNjY2N0wxMi4wMjY3IDQuMDEzMzNWMTIuOTczM0wxMS4wMTMzIDEzLjk4NjdIMkwwLjk4NjY2NyAxMi45NzMzVjAuOTczMzMzTDIgMC4wMTMzMzMzSDguMDI2NjdMOC43MiAwLjI4TDExLjcwNjcgMy4yNjY2N1pNMTEuMDEzMyAxMi45NzMzVjQuOTczMzNINy4wMTMzM1YwLjk3MzMzM0gyVjEyLjk3MzNIMTEuMDEzM1pNOC4wMjY2NyA0LjAxMzMzSDExLjAxMzNMOC4wMjY2NyAwLjk3MzMzM1Y0LjAxMzMzWiIgZmlsbD0iI0M1QzVDNSIvPiA8L3N2Zz4g"},4983:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjc1IDMuODU2NjZMMS43MTMzNSAyLjg5MzMxTDYgNy4xNzk0M0wxMC4yODY3IDIuODkzMzFMMTEuMjUgMy44NTY2Nkw2IDkuMTA2NjZMMC43NSAzLjg1NjY2WiIgZmlsbD0iI0QxRDVEQiIgLz4gPC9zdmc+IA=="},5227:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4gPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTEyIDEzLjc1QzEyLjk2NjUgMTMuNzUgMTMuNzUgMTIuOTY2NSAxMy43NSAxMkMxMy43NSAxMS4wMzM1IDEyLjk2NjUgMTAuMjUgMTIgMTAuMjVDMTEuMDMzNSAxMC4yNSAxMC4yNSAxMS4wMzM1IDEwLjI1IDEyQzEwLjI1IDEyLjk2NjUgMTEuMDMzNSAxMy43NSAxMiAxMy43NVoiIGZpbGw9IiMwMDAwMDAiLz4gPHBhdGggZD0iTTEyIDYuNzVDMTIuOTY2NSA2Ljc1IDEzLjc1IDUuOTY2NSAxMy43NSA1QzEzLjc1IDQuMDMzNSAxMi45NjY1IDMuMjUgMTIgMy4yNUMxMS4wMzM1IDMuMjUgMTAuMjUgNC4wMzM1IDEwLjI1IDVDMTAuMjUgNS45NjY1IDExLjAzMzUgNi43NSAxMiA2Ljc1WiIgZmlsbD0iIzAwMDAwMCIvPiA8cGF0aCBkPSJNMTIgMjAuNzVDMTIuOTY2NSAyMC43NSAxMy43NSAxOS45NjY1IDEzLjc1IDE5QzEzLjc1IDE4LjAzMzUgMTIuOTY2NSAxNy4yNSAxMiAxNy4yNUMxMS4wMzM1IDE3LjI1IDEwLjI1IDE4LjAzMzUgMTAuMjUgMTlDMTAuMjUgMTkuOTY2NSAxMS4wMzM1IDIwLjc1IDEyIDIwLjc1WiIgZmlsbD0iIzAwMDAwMCIvPiA8L3N2Zz4="},5548:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjQ0Nzk5IDAuMTA2NjkxQzEuMDc4ODYgLTAuMDc3OTk5OSAwLjYzNDE5MiAtMC4wMTY5MjYxIDAuMzI4NTI4IDAuMjYwNDQ0QzAuMDIyODY0NCAwLjUzNzgxMyAtMC4wODA5OCAwLjk3NDQ4MiAwLjA2NzEwMDEgMS4zNTk3NkwyLjYyMTIyIDguMDA1MDVMMC4wNjcyODQ3IDE0LjYzOTdDLTAuMDgwOTg2OSAxNS4wMjQ5IDAuMDIyNjE2OCAxNS40NjE2IDAuMzI4MTEgMTUuNzM5MUMwLjYzMzYwNCAxNi4wMTY2IDEuMDc4MjIgMTYuMDc4IDEuNDQ3NDQgMTUuODkzNUwxNS40NDY0IDguODk5OTFDMTUuNzg1MyA4LjczMDYzIDE1Ljk5OTQgOC4zODQ0MiAxNS45OTk1IDguMDA1NjRDMTUuOTk5NiA3LjYyNjg1IDE1Ljc4NTcgNy4yODA1MiAxNS40NDcgNy4xMTEwM0wxLjQ0Nzk5IDAuMTA2NjkxWk00LjM3OTYxIDcuMDA1MzNMMi44NTkwMyAzLjA0OTA3TDEwLjc2NjEgNy4wMDUzM0g0LjM3OTYxWk00LjM3OTIzIDkuMDA1MzNMMi44NTk5NCAxMi45NTIyTDEwLjc2MDIgOS4wMDUzM0g0LjM3OTIzWiIgZmlsbD0iIzA5NzJEMyIgLz4gPC9zdmc+IA=="},5430:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iZXJyb3JfaW5saW5lIj4gPHBhdGggZD0iTTEyLDFDNS45MiwxLDEsNS45MiwxLDEyYzAsNi4wOCw0LjkyLDExLDExLDExczExLTQuOTIsMTEtMTFDMjMsNS45MiwxOC4wOCwxLDEyLDF6IE0xMiwxOGMtMC41NSwwLTEtMC40NS0xLTFzMC40NS0xLDEtMSBzMSwwLjQ1LDEsMVMxMi41NSwxOCwxMiwxOHogTTEzLDEzLjg3NkMxMywxNC40OTUsMTIuNTUsMTUsMTIsMTVzLTEtMC41MDUtMS0xLjEyNFY3LjEyNEMxMSw2LjUwNSwxMS40NSw2LDEyLDZzMSwwLjUwNSwxLDEuMTI0IFYxMy44NzZ6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},4784:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNl8yMzYzKSI+IDxwYXRoIGQ9Ik03LjUgMS41SDEwLjVWNC41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgLz4gPHBhdGggZD0iTTQuNSA3LjVMMTAuNSAxLjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNMTAuNSA2Ljc4NlYxMC41SDEuNVYxLjVINS4yNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPiA8L2c+IDxkZWZzPiA8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyNl8yMzYzIj4gPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJ3aGl0ZSIgLz4gPC9jbGlwUGF0aD4gPC9kZWZzPiA8L3N2Zz4g"},2591:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icmVkZXllIj4gPHBhdGggc3R5bGU9Im9wYWNpdHk6MC41OyIgZD0iTTE1LDEyYy0xLjEwNSwwLTItMC44OTUtMi0yYzAtMC42NCwwLjMwNi0xLjIwMiwwLjc3My0xLjU2OUMxMy4yMzYsOC4xNjQsMTIuNjQsOCwxMiw4IGMtMi4yMDksMC00LDEuNzkxLTQsNGMwLDIuMjA5LDEuNzkxLDQsNCw0czQtMS43OTEsNC00YzAtMC4wOS0wLjAyMS0wLjE3NC0wLjAyNi0wLjI2M0MxNS42ODQsMTEuOSwxNS4zNTUsMTIsMTUsMTJ6Ii8+IDxwYXRoIGQ9Ik0yMi44NDIsMTEuNDZDMjIuNjUyLDExLjE2LDE4LjAwMSw0LDEyLDRTMS4zNDgsMTEuMTYsMS4xNTgsMTEuNDZjLTAuMjEsMC4zMy0wLjIxLDAuNzUsMCwxLjA4IEMxLjM0OCwxMi44NCw1Ljk5OSwyMCwxMiwyMHMxMC42NTItNy4xNiwxMC44NDItNy40NkMyMy4wNTMsMTIuMjEsMjMuMDUzLDExLjc5LDIyLjg0MiwxMS40NnogTTEyLDE3IGMtMi43NjIsMC01LjAwMS0yLjIzOS01LjAwMS01UzkuMjM4LDcsMTIsN3M1LjAwMSwyLjIzOSw1LjAwMSw1UzE0Ljc2MiwxNywxMiwxN3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},8166:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iaW5mb3JtYXRpb24iPiA8cGF0aCBkPSJNMTIsMUM1LjkyNSwxLDEsNS45MjUsMSwxMnM0LjkyNSwxMSwxMSwxMXMxMS00LjkyNSwxMS0xMVMxOC4wNzUsMSwxMiwxeiBNMTQsMTdjMCwxLjEwNS0wLjg5NSwyLTIsMnMtMi0wLjg5NS0yLTJ2LTUgYzAtMS4xMDUsMC44OTUtMiwyLTJzMiwwLjg5NSwyLDJWMTd6IE0xMiw4Yy0xLjEwNSwwLTItMC44OTUtMi0yYzAtMS4xMDUsMC44OTUtMiwyLTJzMiwwLjg5NSwyLDJDMTQsNy4xMDUsMTMuMTA1LDgsMTIsOHoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},5355:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iY2FyZXRfbGVmdCI+IDxwYXRoIGQ9Ik0xNCwxOGMtMC4yNTYsMC0wLjUxMi0wLjA5OC0wLjcwNy0wLjI5M2wtNS01Yy0wLjM5MS0wLjM5MS0wLjM5MS0xLjAyMywwLTEuNDE0bDUtNWMwLjM5MS0wLjM5MSwxLjAyMy0wLjM5MSwxLjQxNCwwIHMwLjM5MSwxLjAyMywwLDEuNDE0TDEwLjQxNCwxMmw0LjI5Myw0LjI5M2MwLjM5MSwwLjM5MSwwLjM5MSwxLjAyMywwLDEuNDE0QzE0LjUxMiwxNy45MDIsMTQuMjU2LDE4LDE0LDE4eiIvPiA8L2c+IDxnIGlkPSJMYXllcl8xIj4gPC9nPiA8L3N2Zz4g"},9124:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ibGlnaHQiPiA8cGF0aCBkPSJNNy4xMDYsMTNoOS43ODlDMTguMTkyLDExLjcyOSwxOSw5Ljk2LDE5LDhjMC0zLjg2Ni0zLjEzNC03LTctN1M1LDQuMTM0LDUsOEM1LDkuOTYsNS44MDgsMTEuNzI5LDcuMTA2LDEzeiIvPiA8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjU7IiBkPSJNMTQsMjFoMXYxYzAsMC41NTMtMC40NDcsMS0xLDFoLTRjLTAuNTUyLDAtMS0wLjQ0Ny0xLTF2LTFoMUgxNHogTTcsMTRjMCwwLDEsMS41LDEsM2MwLDEsMCwyLDEsM2g2IGMxLTEsMS0yLDEtM2MwLTEuNSwxLTMsMS0zSDd6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},4743:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iaHlwZXJsaW5rIj4gPHBhdGggZD0iTTE2LjUsNWgtNGMtMi4xMywwLTMuOTgsMS4yMi00Ljg5LDNoMi40NWMwLjYzLTAuNjIsMS40OS0xLDIuNDQtMWg0YzEuOTMsMCwzLjUsMS41NywzLjUsMy41UzE4LjQzLDE0LDE2LjUsMTRoLTQgYy0xLjM5LDAtMi42LTAuODItMy4xNS0ySDcuMjFjMC42NSwyLjMsMi43OCw0LDUuMjksNGg0YzMuMDMsMCw1LjUtMi40Nyw1LjUtNS41QzIyLDcuNDcsMTkuNTMsNSwxNi41LDV6IE0xMS41LDE4aC00IEM1LjU3LDE4LDQsMTYuNDMsNCwxNC41UzUuNTcsMTEsNy41LDExaDRjMS4zOSwwLDIuNiwwLjgyLDMuMTUsMmgyLjE0Yy0wLjY1LTIuMy0yLjc4LTQtNS4yOS00aC00QzQuNDcsOSwyLDExLjQ3LDIsMTQuNSBDMiwxNy41Myw0LjQ3LDIwLDcuNSwyMGg0YzIuMTMsMCwzLjk4LTEuMjIsNC44OS0zaC0yLjQ1QzEzLjMxLDE3LjYyLDEyLjQ1LDE4LDExLjUsMTh6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},487:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iYW5ub3VuY2VyIj4gPHBhdGggZD0iTTIwLjg5OSwxOS4zOTRsLTYuNDktMTUuMDk1bC0xMS4xNCwxMS4xNGw4LjUzMSwzLjY1M2wtMS42NjksMS44MjFjLTAuMTA2LDAuMTE3LTAuMTUyLDAuMjc2LTAuMTIzLDAuNDMyIGMwLjAzLDAuMTU1LDAuMTMxLDAuMjg3LDAuMjcyLDAuMzU2bDIuNTcxLDEuMjVjMC4wNywwLjAzNCwwLjE0NSwwLjA1LDAuMjE5LDAuMDVjMC4xMzcsMCwwLjI3Mi0wLjA1NywwLjM2OS0wLjE2M2wyLTIuMTg3IGwyLjk0MiwxLjI2TDIwLjg5OSwxOS4zOTR6Ii8+IDxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuNTsiIGQ9Ik05LjUsNkM5LjMzOSw2LDkuMTgsNS45MjIsOS4wODQsNS43NzdsLTItM2MtMC4xNTMtMC4yMy0wLjA5MS0wLjU0LDAuMTM5LTAuNjkzIHMwLjU0MS0wLjA5MiwwLjY5MywwLjEzOWwyLDNjMC4xNTMsMC4yMywwLjA5MSwwLjU0LTAuMTM5LDAuNjkzQzkuNjkyLDUuOTczLDkuNTk2LDYsOS41LDZ6IE00LjkxNiwxMC43NzcgYzAuMTUzLTAuMjMsMC4wOTEtMC41NC0wLjEzOS0wLjY5M2wtMy0yQzEuNTQ1LDcuOTMsMS4yMzYsNy45OTMsMS4wODQsOC4yMjNjLTAuMTUzLDAuMjMtMC4wOTEsMC41NCwwLjEzOSwwLjY5M2wzLDIgQzQuMzA4LDEwLjk3Myw0LjQwNCwxMSw0LjUsMTFDNC42NjEsMTEsNC44MiwxMC45MjIsNC45MTYsMTAuNzc3eiBNNi44NTQsNy44NTRjMC4xOTUtMC4xOTUsMC4xOTUtMC41MTIsMC0wLjcwN2wtNC00IGMtMC4xOTUtMC4xOTUtMC41MTItMC4xOTUtMC43MDcsMHMtMC4xOTUsMC41MTIsMCwwLjcwN2w0LDRDNi4yNDQsNy45NTEsNi4zNzIsOCw2LjUsOFM2Ljc1Niw3Ljk1MSw2Ljg1NCw3Ljg1NHogTTE4Ljg1NCwyMi44NTQgbDMtM2MwLjE5NS0wLjE5NSwwLjE5NS0wLjUxMiwwLTAuNzA3cy0wLjUxMi0wLjE5NS0wLjcwNywwbC0zLDNjLTAuMTk1LDAuMTk1LTAuMTk1LDAuNTEyLDAsMC43MDcgQzE4LjI0NCwyMi45NTEsMTguMzcyLDIzLDE4LjUsMjNTMTguNzU2LDIyLjk1MSwxOC44NTQsMjIuODU0eiBNMi44NTQsMTUuODU0bDEyLTEyYzAuMTk1LTAuMTk1LDAuMTk1LTAuNTEyLDAtMC43MDcgcy0wLjUxMi0wLjE5NS0wLjcwNywwbC0xMiwxMmMtMC4xOTUsMC4xOTUtMC4xOTUsMC41MTIsMCwwLjcwN0MyLjI0NCwxNS45NTEsMi4zNzIsMTYsMi41LDE2UzIuNzU2LDE1Ljk1MSwyLjg1NCwxNS44NTR6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},7701:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ibWVudSI+IDxwYXRoIGQ9Ik0yMSw4SDNDMi40NDgsOCwyLDcuNTUyLDIsN3MwLjQ0OC0xLDEtMWgxOGMwLjU1MywwLDEsMC40NDgsMSwxUzIxLjU1Myw4LDIxLDh6IE0yMiwxMmMwLTAuNTUyLTAuNDQ3LTEtMS0xSDMgYy0wLjU1MiwwLTEsMC40NDgtMSwxczAuNDQ4LDEsMSwxaDE4QzIxLjU1MywxMywyMiwxMi41NTIsMjIsMTJ6IE0yMiwxN2MwLTAuNTUzLTAuNDQ3LTEtMS0xSDNjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFzMC40NDgsMSwxLDEgaDE4QzIxLjU1MywxOCwyMiwxNy41NTMsMjIsMTd6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},5654:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icmVtb3ZlIj4gPHBhdGggZD0iTTIxLDEzSDNjLTAuNTUyLDAtMS0wLjQ0OC0xLTFzMC40NDgtMSwxLTFoMThjMC41NTIsMCwxLDAuNDQ4LDEsMVMyMS41NTIsMTMsMjEsMTN6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},6541:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBDcmVhdGVkIHdpdGggSW5rc2NhcGUgKGh0dHA6Ly93d3cuaW5rc2NhcGUub3JnLykgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiBpZD0ic3ZnNDEiIHdpZHRoPSIyMi45NDU4MThtbSIgaGVpZ2h0PSIyNS45MjU4NDRtbSIgdmlld0JveD0iMCAwIDg2LjcyNDM1IDk3Ljk4NzQ0MyIgc29kaXBvZGk6ZG9jbmFtZT0iTXluYWhJY29uV2hpdGUuc3ZnIiBpbmtzY2FwZTp2ZXJzaW9uPSIxLjEgKGM0ZThmOWUsIDIwMjEtMDUtMjQpIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPiA8c29kaXBvZGk6bmFtZWR2aWV3IGlkPSJuYW1lZHZpZXc2IiBwYWdlY29sb3I9IiNmZmZmZmYiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxLjAiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiIHNob3dncmlkPSJmYWxzZSIgdW5pdHM9Im1tIiBmaXQtbWFyZ2luLXRvcD0iMCIgZml0LW1hcmdpbi1sZWZ0PSIwIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgaW5rc2NhcGU6em9vbT0iMi4yNTAwMDAxIiBpbmtzY2FwZTpjeD0iNTQuODg4ODg3IiBpbmtzY2FwZTpjeT0iODMuMzMzMzMxIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyOTYiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDMiIGlua3NjYXBlOndpbmRvdy14PSIwIiBpbmtzY2FwZTp3aW5kb3cteT0iMjMiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9Imc0NyIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIiAvPiA8ZGVmcyBpZD0iZGVmczQ1IiAvPiA8ZyBpZD0iZzQ3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEwLjU3MjU3LC04OS4zNDQxMzUpIj4gPHBhdGggaWQ9InBhdGgxMTkiIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjAuNjY2NjY3IiBkPSJtIDEzMi4zMDczLDE3NS42OTcyOCBjIC0xMC45OTE5LC02LjM5MTk2IC0yMC41NDgzLC0xMS43MTUyNiAtMjEuMDE0NzMsLTEyLjM1MzE0IC0xLC0xIC0wLjY2NjY2LC03LjEyMzE5IC0wLjY2NjY2LC0yNS4wOTAyNSAwLC0yMy40NDI5MiAwLjAwNCwtMjMuNTA2MTkgMS41LC0yNS4xMzk0NSAyLjI2NjQxLC0yLjQ3Mzk5IDM5LjY3MSwtMjMuNzcwMzA1IDQxLjc0OTg2LC0yMy43NzAzMDUgMi4wMDU4LDAgNDAuMzc5NDQsMjEuOTA4MTk1IDQyLjI2ODgxLDI0LjEzMjAwNSAxLjAyNzg2LDEuMjA5ODEgMS4xNTU3OCwyLjcxNDY4IDEuMTUyMjgsOS45NzEwOCBsIC0wLjAwNCw4Ljg5NjkyIGMgLTIuNDU5NDIsMS40Mzk5NCAtNS42MzMwNCwyLjY5MjU5IC03Ljk2NjE3LDQuMDM4NjQgLTAuMzcxOCwtMC4xNTMyNyAtMC4wNjg3LC0xLjAzODYzIC0wLjA1NDQsLTguODI2NTQgMC4wMjA2LC0xMS4yMTIxIDAuMDIwNiwtOS4yMTIxIC0xLjUxODY4LC0xMC4zMTg3NiAtMS41MjExNCwtMS4wOTM2NSAtMzIuNTE5MzMsLTE4LjU2MDAwOCAtMzMuODQ0MTYsLTE4LjU2MDAwOCAtMS4yNTIzNSwwIC0zMS4wNDUyOSwxNi45Njg1NjggLTMzLjExNjU5LDE4Ljg2MTU0OCAtMS40OTAxOCwxLjM2MTg5IC0xLjUsMS40OTg2NiAtMS41LDIwLjg4NzQgdiAxOS41MTY1MyBsIDIuMTY2NjcsMS42MDIyOSBjIDEuMTkxNjcsMC44ODEyNyA4LjQ4MzAzLDUuMjQ2NTQgMTYuMjAzMDMsOS43MDA2IDEwLjI1NTM0LDUuOTE2ODQgMTQuNjMzNjgsOC4wOTgzIDE2LjI1MzgxLDguMDk4MyAxLjYxNjk0LDAgNi4yMTA5MywtMi4yODA3NCAxNi45NjM2NCwtOC40MjE4IDguMTEwNCwtNC42MzE5OCAxNS4xODIwNCwtOS40ODY3MyAxNi4xNzAwNSwtMTAuMTg5NDUgMi4xNjY2NiwtMS41NDEwMyAyLjI0MjgsLTAuNzIyNDkgMi4yNDI4LC02LjIxODg5IHYgLTguMTY5ODYgYyAzLjM5NTIxLC0xLjg4NTk2IDYuMzcxNzgsLTMuMjg2OCA4LC00IDAsMiA3LjFlLTQsNS41ODU5OCAtMC4xMjA3OSwxMS43MDYxNSAtMC4yMDg5OCwxMC41MjY1NSAtMC4yNDA1LDEwLjcyNzI5IC0xLjg3OTIxLDExLjk2NjA3IC00LjAzMzQ2LDMuMDQ5MDggLTQwLjEwNzk0LDIzLjMyNjU0IC00MS40Nzg3NywyMy4zMTUyMSAtMC44MzY2NywtMC4wMDcgLTEwLjUxNDYsLTUuMjQyMzQgLTIxLjUwNjUsLTExLjYzNDI5IHogbSA2Ljk4NTI3LC0xMy4yNDU3NCAtMTMsLTcuNTI2NCAtMC4xODE3LC0xMi4xMjM4MyBjIC0wLjEyOTU3LC04LjY0NDk4IDAuMDMzNSwtMTIuMTIzODQgMC41Njg0MSwtMTIuMTIzODQgMC40MTI1NywwIDIuMjE5MDMsMC44MjUgNC4wMTQzNiwxLjgzMzMzIGwgMy4yNjQyNSwxLjgzMzM0IDYuNmUtNCw3LjM5NjY3IGMgMy40ZS00LDQuMzMwODQgMC4xMzU4NSw3LjQ3NDA5IDAuMzM0MDIsOC42MDMzMyA0LDIgNC4wMTIxMiwxLjk3OTEzIDkuMDUzODUsNC45MDE3MiAxMS4xODMwNiw2LjQ4MjYgOS42NTg0MSw2LjQ4MyAyMC45MjkyNCwtMC4wMDUgbCA5LjY2MzA1LC01LjU2MzA2IDAuMDEwMywtMTEuNTE3MTIgMC4wMTAzLC0xMS41MTcxMiAtMS44MzMzMywwLjk1NzQzIGMgLTEuMDA4MzQsMC41MjY1OSAtNS4yODMzNCwyLjkzMjY5IC05LjUsNS4zNDY4OSAtNC4yMTY2NywyLjQxNDIgLTguMTMyNDUsNC4zOTEwNiAtOC43MDE3NCw0LjM5MzAyIC0xLjEyNjk5LDAuMDA0IC0yMi44ODM1MiwtMTIuMTQ0MjIgLTI0LjgyMjk0LC0xMy44NjAyOCAtMC42NTUyNSwtMC41Nzk3OCAtMC44MDg3MywtMS4xMzY0OCAtMSwtMi4wMDI3NyAwLjI3ODA4LC0xLjM3ODY4IDIxLjE5MTI3LC0xMi4xMzM3MSAyNS43ODkyNSwtMTQuODAwMDUgMS40MDIwMiwwLjY2NjM0IDEyLjA2ODc2LDYuNTQyNDggMTIuMDY4NzYsNi41NDI0OCAtMi4zNzA1NywxLjcyOTcgLTQuNjY4MjcsMy4zNjg0MiAtNi42NjY3NCw1LjEyMzg2IC00LC0yIC0zLjQ4NzYzLC0xLjY5OTg0IC01LjQ2MTM1LC0yLjY0MTA0IC0zLjE3MjI4LDEuOTQzMTcgLTQuNTM4NjUsMi42NDEwNCAtOS44NzE5MSw2LjA0Nzg0IDIuMzMzMjYsMS41OTMyIDcuMzMzMjYsNC41OTMyIDkuOTUwNTcsNS41OTM1MyAyLjM4MjY5LC0xLjAwMDMzIDIuMzgyNjksLTEuMDAwMzMgMTAuNzgzNTYsLTUuMDg5OTYgOS45NzI5MiwtNC44NTQ5MiA4Ljg3NjYsLTUuNTIyNTcgMTQuNTc3MDYsLTEuOTI0MDIgbCAyLjcxMjA0LDEuNzEyMDMgLTAuMTc4MjgsMTYuMzg1NDEgLTAuNTExNjksMTUuOTE2MjEgLTEyLjY2NjU5LDguMDMxOTcgYyAtNi45ODU4LDQuNDI5NzUgLTEzLjMzMzQxLDYuOTY4MDMgLTE0LjY2NjY3LDcuNTgyNDYgLTEuNjY2NzQsLTAuNjE0NDMgLTcuMzQyMTEsLTMuMjY2MTIgLTE0LjY2NjY3LC03LjUwNjcgeiIgLz4gPC9nPiA8L3N2Zz4g"},6283:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNl8yMzYwKSI+IDxwYXRoIGQ9Ik02IDEuNjI1QzMuMzc1IDEuNjI1IDMuMzc1IDUuMTI1IDMuMzc1IDUuMTI1TDAuNzUgOC4yNUgxMS4yNUw4LjYyNSA1LjEyNUM4LjYyNSA1LjEyNSA4LjYyNSAxLjYyNSA2IDEuNjI1WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPiA8cGF0aCBkPSJNNC4yNSA4LjYyNVY5LjVDNC4yNSA5Ljk2NDEzIDQuNDM0MzcgMTAuNDA5MiA0Ljc2MjU2IDEwLjczNzRDNS4wOTA3NSAxMS4wNjU2IDUuNTM1ODcgMTEuMjUgNiAxMS4yNUM2LjQ2NDEzIDExLjI1IDYuOTA5MjQgMTEuMDY1NiA3LjIzNzQzIDEwLjczNzRDNy41NjU2MiAxMC40MDkyIDcuNzUgOS45NjQxMyA3Ljc1IDkuNVY4LjYyNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPiA8cGF0aCBkPSJNNiAwLjc1VjEuNjI1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4gPC9nPiA8ZGVmcz4gPGNsaXBQYXRoIGlkPSJjbGlwMF80MjZfMjM2MCI+IDxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiIC8+IDwvY2xpcFBhdGg+IDwvZGVmcz4gPC9zdmc+IA=="},5957:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ibGlzdF9jaGVjayI+IDxwYXRoIGQ9Ik0xMiwyM0M1LjkzNSwyMywxLDE4LjA2NSwxLDEyUzUuOTM1LDEsMTIsMWMxLjgzNywwLDMuNjU3LDAuNDYzLDUuMjYzLDEuMzM5YzAuNDg0LDAuMjY1LDAuNjYzLDAuODcyLDAuMzk4LDEuMzU3IHMtMC44NzIsMC42NjQtMS4zNTcsMC4zOTlDMTQuOTkyLDMuMzc4LDEzLjUwNCwzLDEyLDNjLTQuOTYyLDAtOSw0LjAzOC05LDljMCw0Ljk2Myw0LjAzOCw5LDksOWM0Ljk2MywwLDktNC4wMzcsOS05IGMwLTAuNTMzLTAuMDUyLTEuMDcxLTAuMTU3LTEuNjQ0Yy0wLjEwMS0wLjU0MywwLjI1OS0xLjA2NSwwLjgwMi0xLjE2NWMwLjU1Mi0wLjA5OSwxLjA2NCwwLjI2LDEuMTY1LDAuODAyIEMyMi45MzgsMTAuNjg4LDIzLDExLjM0NCwyMywxMkMyMywxOC4wNjUsMTguMDY1LDIzLDEyLDIzeiBNMTEuNzA3LDE1LjcwN2w5LTljMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNCBzLTEuMDIzLTAuMzkxLTEuNDE0LDBMMTEsMTMuNTg2bC0zLjI5My0zLjI5M2MtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMHMtMC4zOTEsMS4wMjMsMCwxLjQxNGw0LDQgQzEwLjQ4OCwxNS45MDIsMTAuNzQ0LDE2LDExLDE2UzExLjUxMiwxNS45MDIsMTEuNzA3LDE1LjcwN3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},3522:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjY1ODMgNS41NzAyTDAuNzUgNi40Nzg1TDQuMjI3MzUgOS45NTU4NUwxMS4yNSAyLjkzMzJMMTAuMzQxNyAyLjAyNDlMNC4yMjczNSA4LjEzOTI1TDEuNjU4MyA1LjU3MDJaIiBmaWxsPSJ3aGl0ZSIgLz4gPC9zdmc+IA=="},8728:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icGF1c2UiPiA8cGF0aCBkPSJNOSwyMkg2Yy0wLjU1LDAtMS0wLjQ1LTEtMVYzYzAtMC41NSwwLjQ1LTEsMS0xaDNjMC41NSwwLDEsMC40NSwxLDF2MThDMTAsMjEuNTUsOS41NSwyMiw5LDIyeiBNMTksMjFWMyBjMC0wLjU1LTAuNDUtMS0xLTFoLTNjLTAuNTUsMC0xLDAuNDUtMSwxdjE4YzAsMC41NSwwLjQ1LDEsMSwxaDNDMTguNTUsMjIsMTksMjEuNTUsMTksMjF6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},3395:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTEyLjIyNjcgMC4wMTMzMzMzTDEzLjk4NjcgMS43NzMzM1YzLjIxMzMzTDUuNzczMzMgMTEuNDhMNS41MDY2NyAxMS42NEwxLjQgMTMuOTg2N0wwLjAxMzMzMzMgMTIuNkwyLjM2IDguNDkzMzNMMi41MiA4LjIyNjY3TDEwLjc4NjcgMC4wMTMzMzMzSDEyLjIyNjdaTTEuNCAxMi42TDQuMzg2NjcgMTEuMDUzM0wyLjk0NjY3IDkuNjEzMzNMMS40IDEyLjZaTTUuMjQgMTAuNTJMMTMuMjQgMi41MkwxMS40OCAwLjc1OTk5OUwzLjQ4IDguNzZMNS4yNCAxMC41MloiIGZpbGw9IiNDNUM1QzUiLz4gPC9zdmc+IA=="},1783:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icGxheSI+IDxwYXRoIGQ9Ik0yMS41NDksMTEuMjA4TDcuMzI4LDIuMTNDNy4wNTIsMS45NTUsNi43MTUsMS45NTcsNi40NDEsMi4xMzZDNi4xNjgsMi4zMTUsNiwyLjY0NCw2LDN2MTggYzAsMC4zNTQsMC4xNjcsMC42ODMsMC40MzksMC44NjJDNi41NzgsMjEuOTU0LDYuNzMzLDIyLDYuODg5LDIyYzAuMTQ5LDAsMC4yOTgtMC4wNDIsMC40MzMtMC4xMjdsMTQuMjIzLTguOTIyIGMwLjI4LTAuMTc2LDAuNDU1LTAuNTA5LDAuNDU2LTAuODdDMjIuMDAxLDExLjcyLDIxLjgyOSwxMS4zODYsMjEuNTQ5LDExLjIwOHoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},1033:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iYWRkIj4gPHBhdGggZD0iTTIxLDExaC04VjNjMC0wLjU1Mi0wLjQ0OC0xLTEtMXMtMSwwLjQ0OC0xLDF2OEgzYy0wLjU1MiwwLTEsMC40NDgtMSwxczAuNDQ4LDEsMSwxaDh2OGMwLDAuNTUzLDAuNDQ4LDEsMSwxczEtMC40NDcsMS0xIHYtOGg4YzAuNTUyLDAsMS0wLjQ0OCwxLTFTMjEuNTUyLDExLDIxLDExeiIvPiA8L2c+IDxnIGlkPSJMYXllcl8xIj4gPC9nPiA8L3N2Zz4g"},723:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDEwLjUwMDJDOC40ODUyOCAxMC41MDAyIDEwLjUgOC40ODU0NyAxMC41IDYuMDAwMTlIMTJDMTIgOS4zMTM4OSA5LjMxMzcxIDEyLjAwMDIgNiAxMi4wMDAyQzIuNjg2MjkgMTIuMDAwMiAwIDkuMzEzODkgMCA2LjAwMDE5QzAgMi42ODY0OCAyLjY4NjI5IDAuMDAwMTg1NTIyIDUuOTkzNjYgMC4wMDAyMTIzMzZDNy43NDc3NCAtMC4wMTQ2MjA3IDkuMzg1MiAwLjc0ODUgMTAuNSAyLjAzMTc4VjAuMDAwMTg1NTIySDEyVjQuNTAwMTlINy41VjMuMDAwMTlIOS4zNTQwN0M4LjUyMjU5IDIuMDUyMjQgNy4zMDYxMiAxLjQ4OTE2IDYgMS41MDAxOUMzLjUxNDcyIDEuNTAwMTkgMS41IDMuNTE0OSAxLjUgNi4wMDAxOUMxLjUgOC40ODU0NyAzLjUxNDcyIDEwLjUwMDIgNiAxMC41MDAyWiIgZmlsbD0id2hpdGUiIC8+IDwvc3ZnPiA="},7016:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNl8yMzYyKSI+IDxwYXRoIGQ9Ik02Ljc1IDEuNUgxMC41VjUuMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNNS4yNSAxLjVIMS41VjUuMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNNS4yNSAxMC41SDEuNVY2Ljc1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgLz4gPHBhdGggZD0iTTYuNzUgMTAuNUgxMC41VjYuNzUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNMS41IDEuNUwxMC41IDEwLjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNMTAuNSAxLjVMMS41IDEwLjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8L2c+IDxkZWZzPiA8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyNl8yMzYyIj4gPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJ3aGl0ZSIgLz4gPC9jbGlwUGF0aD4gPC9kZWZzPiA8L3N2Zz4g"},6147:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ibWluaW1pemVfeDQwX21pcnJvcmVkIj4gPHBhdGggZD0iTTQuMDI0LDE0LjM0N2MtMC4wNTcsMC4xNzktMC4wMSwwLjM3NCwwLjEyMywwLjUwNmwxLjc5MywxLjc5M2wtMy42NDgsMy42NDhjLTAuMzg5LDAuMzg5LTAuMzg5LDEuMDI1LDAsMS40MTQgYzAuMzg5LDAuMzg5LDEuMDI1LDAuMzg5LDEuNDE0LDBsMy42NDgtMy42NDhsMS43OTMsMS43OTNjMC4xMzIsMC4xMzIsMC4zMjgsMC4xOCwwLjUwNiwwLjEyM2MwLjE3OC0wLjA1NywwLjMxLTAuMjA5LDAuMzQtMC4zOTQgbDEtNmMwLjAyNS0wLjE1OC0wLjAyNS0wLjMyMS0wLjE0LTAuNDM2Yy0wLjExNC0wLjExNC0wLjI3Ny0wLjE2NS0wLjQzNi0wLjE0bC02LDFDNC4yMzMsMTQuMDM3LDQuMDgxLDE0LjE2OSw0LjAyNCwxNC4zNDd6IE0xNC4zNDcsNC4wMjRjMC4xNzktMC4wNTcsMC4zNzQtMC4wMSwwLjUwNiwwLjEyM2wxLjc5MywxLjc5M2wzLjY0OC0zLjY0OGMwLjM4OS0wLjM4OSwxLjAyNS0wLjM4OSwxLjQxNCwwIGMwLjM4OSwwLjM4OSwwLjM4OSwxLjAyNSwwLDEuNDE0TDE4LjA2LDcuMzU0bDEuNzkzLDEuNzkzYzAuMTMyLDAuMTMyLDAuMTgsMC4zMjgsMC4xMjMsMC41MDZjLTAuMDU3LDAuMTc4LTAuMjA5LDAuMzEtMC4zOTQsMC4zNCBsLTYsMWMtMC4xNTgsMC4wMjUtMC4zMjEtMC4wMjUtMC40MzYtMC4xNGMtMC4xMTQtMC4xMTQtMC4xNjUtMC4yNzctMC4xNC0wLjQzNmwxLTZDMTQuMDM3LDQuMjMzLDE0LjE2OSw0LjA4MSwxNC4zNDcsNC4wMjR6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},9448:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTAuODYgMC42MDMzMzNIMS42NFYyLjI5MzMzTDIuMjQ2NjcgMS43M0MyLjcwODg5IDEuMjM4ODkgMy4yNTc3OCAwLjkyMTExMSAzLjg5MzMzIDAuNzc2NjY3QzQuNTI4ODkgMC42MDMzMzMgNS4xNjQ0NCAwLjYwMzMzMyA1LjggMC43NzY2NjdDNi40MzU1NiAwLjkyMTExMSA2Ljk4NDQ0IDEuMjM4ODkgNy40NDY2NyAxLjczQzcuOTM3NzggMi4xOTIyMiA4LjI3IDIuNzQxMTEgOC40NDMzMyAzLjM3NjY3QzguNjE2NjcgNC4wMTIyMiA4LjYxNjY3IDQuNjQ3NzggOC40NDMzMyA1LjI4MzMzQzguMjcgNS45MTg4OSA3Ljk1MjIyIDYuNDgyMjIgNy40OSA2Ljk3MzMzTDMuMjQzMzMgMTEuMTc2N0wyLjY4IDEwLjYxMzNMNi44ODMzMyA2LjM2NjY3QzcuMjU4ODkgNi4wMiA3LjUxODg5IDUuNjAxMTEgNy42NjMzMyA1LjExQzcuODA3NzggNC41OSA3LjgwNzc4IDQuMDg0NDQgNy42NjMzMyAzLjU5MzMzQzcuNTE4ODkgMy4wNzMzMyA3LjI1ODg5IDIuNjQgNi44ODMzMyAyLjI5MzMzQzYuNTM2NjcgMS45MTc3OCA2LjEwMzMzIDEuNjcyMjIgNS41ODMzMyAxLjU1NjY3QzUuMDkyMjIgMS40MTIyMiA0LjYwMTExIDEuNDEyMjIgNC4xMSAxLjU1NjY3QzMuNjE4ODkgMS42NzIyMiAzLjE4NTU2IDEuOTE3NzggMi44MSAyLjI5MzMzTDIuMDMgMy4wNzMzM0g0LjExVjMuODUzMzNIMS4yNUwwLjg2IDMuNDYzMzNWMC42MDMzMzNaIiBmaWxsPSIjQzVDNUM1IiAvPiA8L3N2Zz4g"},1140:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDgwIiBoZWlnaHQ9IjEwODAiIHZpZXdCb3g9IjAgMCAxMDgwIDEwODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZGVzYz5DcmVhdGVkIHdpdGggRmFicmljLmpzIDUuMi40PC9kZXNjPiA8ZGVmcz4gPC9kZWZzPiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDU0MCA1NDApIiBpZD0iZGJkNzU1MWEtNWNhNy00YzVmLWFlOTgtNzE4OGI0YjNlZGViIiA+IDxyZWN0IHN0eWxlPSJzdHJva2U6IG5vbmU7IHN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7IHN0cm9rZS1kYXNob2Zmc2V0OiAwOyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogNDsgZmlsbDogcmdiKDI1NSwyNTUsMjU1KTsgZmlsbC1ydWxlOiBub256ZXJvOyBvcGFjaXR5OiAxOyB2aXNpYmlsaXR5OiBoaWRkZW47IiB2ZWN0b3ItZWZmZWN0PSJub24tc2NhbGluZy1zdHJva2UiIHg9Ii01NDAiIHk9Ii01NDAiIHJ4PSIwIiByeT0iMCIgd2lkdGg9IjEwODAiIGhlaWdodD0iMTA4MCIgLz4gPC9nPiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDU0MCA1NDApIiBpZD0iM2ZlNzcxZGYtYjJiYy00NzRhLWE1NDAtYThlYWM4NTI1NzFlIiA+IDwvZz4gPGcgdHJhbnNmb3JtPSJtYXRyaXgoMCAtOTAgOTAgMCA1NDAgNTQwKSIgPiA8cGF0aCBzdHlsZT0ic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtZGFzaG9mZnNldDogMDsgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjsgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7IGZpbGw6IHJnYigyMDksMjEzLDIxOSk7IGZpbGwtcnVsZTogZXZlbm9kZDsgb3BhY2l0eTogMTsiIHRyYW5zZm9ybT0iIHRyYW5zbGF0ZSgtNiwgLTYpIiBkPSJNIDAuNzUgMy44NTY2NiBMIDEuNzEzMzUgMi44OTMzMSBMIDYgNy4xNzk0MyBMIDEwLjI4NjcgMi44OTMzMSBMIDExLjI1IDMuODU2NjYgTCA2IDkuMTA2NjYgTCAwLjc1IDMuODU2NjYgWiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPiA8L2c+IDwvc3ZnPg=="},242:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ic2VhcmNoIj4gPHBhdGggZD0iTTIyLjcwNywyMS4yOTNsLTUuNjgyLTUuNjgyQzE4LjI1OCwxNC4wNzEsMTksMTIuMTIyLDE5LDEwYzAtNC45NjItNC4wMzctOS05LTljLTQuOTYyLDAtOSw0LjAzOC05LDljMCw0Ljk2Myw0LjAzOCw5LDksOSBjMi4xMjIsMCw0LjA3MS0wLjc0Miw1LjYxMS0xLjk3NWw1LjY4Miw1LjY4MkMyMS40ODgsMjIuOTAyLDIxLjc0NCwyMywyMiwyM3MwLjUxMi0wLjA5OCwwLjcwNy0wLjI5MyBDMjMuMDk4LDIyLjMxNiwyMy4wOTgsMjEuNjg0LDIyLjcwNywyMS4yOTN6IE0xMCwxN2MtMy44NiwwLTctMy4xNDEtNy03YzAtMy44NiwzLjE0LTcsNy03YzMuODU5LDAsNywzLjE0LDcsNyBDMTcsMTMuODU5LDEzLjg1OSwxNywxMCwxN3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},1730:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ic3Rhcl9vbiI+IDxwYXRoIGQ9Ik0yMi4xNDMsOC4yNjdsLTEuNTY5LTAuMjI4djBsLTQuODItMC43bC0yLjAxOC00LjA4NGMwLDAsMCwwLDAsMGwtMC44MzktMS42OTljLTAuMzY3LTAuNzQzLTEuNDI2LTAuNzQzLTEuNzkzLDAgbC0wLjgzOSwxLjY5OWMwLDAsMCwwLDAsMEw4LjI0Niw3LjM0TDIuNjc4LDguMTQ4YzAsMCwwLDAsMCwwTDEuODU3LDguMjY3Yy0wLjgyLDAuMTE5LTEuMTQ4LDEuMTI3LTAuNTU0LDEuNzA2bDAuNTk0LDAuNTc5bDAsMCBsNC4wMjgsMy45MjNsLTEuMDIyLDUuOTUyYzAsMCwwLDAsMCwwbC0wLjA2OSwwLjQwMmMtMC4xNCwwLjgxNywwLjcxNywxLjQ0LDEuNDUsMS4wNTRsMC42NDUtMC4zMzhsMCwwTDEyLDE4Ljg4Mmw0LjU5LDIuNDFsMCwwIGwxLjEyNSwwLjU5YzAuNzM0LDAuMzg1LDEuNTkxLTAuMjM4LDEuNDUtMS4wNTVsLTAuMjM0LTEuMzY0bDAsMGwtMC44NTctNC45OTFsMy44MjctMy43MjdsMCwwbDAuNzk2LTAuNzc1IEMyMy4yOTEsOS4zOTQsMjIuOTYzLDguMzg2LDIyLjE0Myw4LjI2N3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},640:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ic2VsZWN0X3RleHQiPiA8cGF0aCBkPSJNMSw5aDJ2MkgxVjl6IE0xLDdoMlY1SDFWN3ogTTUsMjNoMnYtMkg1VjIzeiBNMSwzaDJWMUgxVjN6IE0xLDIzaDJ2LTJIMVYyM3ogTTExLDFIOXYyaDJWMXogTTE1LDFoLTJ2MmgyVjF6IE03LDFINXYyaDIgVjF6IE05LDIzaDJ2LTJIOVYyM3ogTTEsMTloMnYtMkgxVjE5eiBNMSwxNWgydi0ySDFWMTV6IE0yMSwxMWgyVjloLTJWMTF6IE0xMywyM2gydi0yaC0yVjIzeiBNMjEsMTVoMnYtMmgtMlYxNXogTTIxLDdoMlY1aC0yVjd6IE0yMSwxdjJoMlYxSDIxeiBNMjEsMTloMnYtMmgtMlYxOXogTTIxLDIzaDJ2LTJoLTJWMjN6IE0xNywyM2gydi0yaC0yVjIzeiBNMTcsM2gyVjFoLTJWM3ogTTE3Ljg5NSw3LjMwMyBDMTcuOTY1LDcuMjE5LDE4LDcuMDkzLDE4LDYuOTE4VjUuNTA0YzAtMC4xODktMC4wMzUtMC4zMjItMC4xMDUtMC4zOTJDMTcuODE4LDUuMDM1LDE3LjY4NSw1LDE3LjQ5Niw1SDE1LjVoLTAuNzc1aC01LjQ1SDguNSBINi41MDRDNi4zMjksNSw2LjE5Niw1LjAzNSw2LjExOSw1LjExMkM2LjAzNSw1LjE4Miw2LDUuMzE1LDYsNS41MDR2MS40MTRjMCwwLjE3NSwwLjAzNSwwLjMwMSwwLjExOSwwLjM4NSBjMC4wNzcsMC4wODQsMC4yMSwwLjExOSwwLjM4NSwwLjExOUg4LjVoMC43NzVoMS4yMTN2MTEuMDc0YzAsMC4xNzUsMC4wMzUsMC4zMDEsMC4xMTksMC4zODVDMTAuNjg0LDE4Ljk1OCwxMC44MTcsMTksMTAuOTkyLDE5IGgyLjAxNmMwLjE4OSwwLDAuMzIyLTAuMDQyLDAuMzk5LTAuMTE5YzAuMDctMC4wODQsMC4xMDUtMC4yMSwwLjEwNS0wLjM4NVY3LjQyMmgxLjIxM0gxNS41aDEuOTk2IEMxNy42ODUsNy40MjIsMTcuODE4LDcuMzg3LDE3Ljg5NSw3LjMwM3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},4365:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjUgMC43NUMxLjA4NTc5IDAuNzUgMC43NSAxLjA4NTc5IDAuNzUgMS41VjYuNzVDMC43NSA3LjE2NDIxIDEuMDg1NzkgNy41IDEuNSA3LjVIMy4zMjU1Mkw1LjA3OTUxIDEwLjQyMTFMNS4wODA4NyAxMC40MjM0QzUuMzg4MjkgMTAuOTMxMyA1Ljk0NTcyIDExLjI1IDYuNTQ3NSAxMS4yNUM3LjQ5NDIxIDExLjI1IDguMjU3NSAxMC40ODY3IDguMjU3NSA5LjU0VjguMjg3NUg5LjMzNzVDMTAuODAyIDguMjg3NSAxMS44Njg5IDYuOTEzMzYgMTEuNTIwOCA1LjQ5ODMyTDExLjUyMDIgNS40OTYwM0wxMC43NjMxIDIuNDYwMDNMMTAuNzYyOCAyLjQ1ODk2QzEwLjUxNSAxLjQ1ODU2IDkuNjE1OTEgMC43NSA4LjU4IDAuNzVIMy43NUgxLjVaTTIuMjUgNlYyLjI1SDNWNkgyLjI1Wk00LjUgNi41NDIxM0w2LjM2NDEzIDkuNjQ2NjVMNi4zNjQ1NSA5LjY0NzM1QzYuNDAyMjUgOS43MDkwNiA2LjQ3NDU1IDkuNzUgNi41NDc1IDkuNzVDNi42NjU3OSA5Ljc1IDYuNzU3NSA5LjY1ODI5IDYuNzU3NSA5LjU0VjcuNTM3NUM2Ljc1NzUgNy4xMjMyOSA3LjA5MzI5IDYuNzg3NSA3LjUwNzUgNi43ODc1SDkuMzM3NUM5LjgyMjY4IDYuNzg3NSAxMC4xODA2IDYuMzMyMjcgMTAuMDY0NSA1Ljg1NzY1TDEwLjA2NDIgNS44NTY2OUw5LjMwNzI5IDIuODIxNDhMOS4zMDY5MiAyLjgxOTk4QzkuMjI0MzQgMi40ODU5NCA4LjkyMzcyIDIuMjUgOC41OCAyLjI1SDQuNVY2LjU0MjEzWiIgZmlsbD0id2hpdGUiIC8+IDwvc3ZnPiA="},9541:l=>{l.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjM2NDU1IDIuMzUyNjRMNi4zNjQxMiAyLjM1MzM1TDQuNSA1LjQ1Nzg3VjkuNzVIOC41OEM4LjkyMzcyIDkuNzUgOS4yMjQzNCA5LjUxNDA2IDkuMzA2OTEgOS4xODAwMkwxMC4wNjQyIDYuMTQzMzJMMTAuMDY0NCA2LjE0MjQ4QzEwLjE4MDcgNS42Njc4MSA5LjgyMjcxIDUuMjEyNSA5LjMzNzUgNS4yMTI1SDcuNTA3NUM3LjA5MzI5IDUuMjEyNSA2Ljc1NzUgNC44NzY3MSA2Ljc1NzUgNC40NjI1VjIuNDZDNi43NTc1IDIuMzQxNzEgNi42NjU3OSAyLjI1IDYuNTQ3NSAyLjI1QzYuNDc0NTUgMi4yNSA2LjQwMjI2IDIuMjkwOTQgNi4zNjQ1NSAyLjM1MjY0Wk0zIDkuNzVWNkgyLjI1VjkuNzVIM1pNMy4zMjU1MiA0LjVMNS4wNzk1MSAxLjU3ODkxTDUuMDgwODcgMS41NzY2NEM1LjM4ODI5IDEuMDY4NzQgNS45NDU3MyAwLjc1IDYuNTQ3NSAwLjc1QzcuNDk0MjIgMC43NSA4LjI1NzUgMS41MTMyOSA4LjI1NzUgMi40NlYzLjcxMjVIOS4zMzc1QzEwLjgwMiAzLjcxMjUgMTEuODY4OSA1LjA4NjY2IDExLjUyMDggNi41MDE2OUwxMS41MjAyIDYuNTAzOTlMMTAuNzYzMSA5LjUzOTk3TDEwLjc2MjkgOS41NDA3NkMxMC41MTUyIDEwLjU0MTMgOS42MTYwMSAxMS4yNSA4LjU4IDExLjI1SDEuNUMxLjA4NTc5IDExLjI1IDAuNzUgMTAuOTE0MiAwLjc1IDEwLjVWNS4yNUMwLjc1IDQuODM1NzkgMS4wODU3OSA0LjUgMS41IDQuNUgzLjMyNTUyWiIgZmlsbD0id2hpdGUiIC8+IDwvc3ZnPiA="},5512:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iY2FyZXRfdXAiPiA8cGF0aCBkPSJNMTcsMTVjLTAuMjU2LDAtMC41MTItMC4wOTgtMC43MDctMC4yOTNMMTIsMTAuNDE0bC00LjI5Myw0LjI5M2MtMC4zOTEsMC4zOTEtMS4wMjMsMC4zOTEtMS40MTQsMHMtMC4zOTEtMS4wMjMsMC0xLjQxNCBsNS01YzAuMzkxLTAuMzkxLDEuMDIzLTAuMzkxLDEuNDE0LDBsNSw1YzAuMzkxLDAuMzkxLDAuMzkxLDEuMDIzLDAsMS40MTRDMTcuNTEyLDE0LjkwMiwxNy4yNTYsMTUsMTcsMTV6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},3786:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icHJvZmlsZSI+IDxwYXRoIGQ9Ik03LDZjMC0yLjc2MSwyLjIzOS01LDUtNXM1LDIuMjM5LDUsNXMtMi4yMzksNS01LDVTNyw4Ljc2MSw3LDZ6IE0yMS45NDgsMTguNjg0QzIwLjg2OCwxNS40NDMsMTcuMDE1LDEyLDEyLDEyIHMtOC44NjksMy40NDMtOS45NDksNi42ODRjLTAuMTIsMC4zNTktMC4wMjYsMC43NTYsMC4yNDIsMS4wMjNDNC40MTcsMjEuODMsNy44NjQsMjMsMTIsMjNjNC4xMzcsMCw3LjU4NC0xLjE3LDkuNzA3LTMuMjkzIEMyMS45NzUsMTkuNDM5LDIyLjA2OCwxOS4wNDMsMjEuOTQ4LDE4LjY4NHoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},9610:l=>{l.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0id2FybmluZyI+IDxwYXRoIGQ9Ik0yMS44NTcsMTguNDgybC05LTE1LjAzYy0wLjM2MS0wLjYwNC0xLjM1NC0wLjYwNC0xLjcxNSwwbC05LDE1LjAzYy0wLjE4NiwwLjMwOS0wLjE5LDAuNjk1LTAuMDEzLDEuMDEgQzIuMzA3LDE5LjgwNiwyLjY0LDIwLDMsMjBoMThjMC4zNiwwLDAuNjkyLTAuMTk0LDAuODctMC41MDhDMjIuMDQ4LDE5LjE3NywyMi4wNDMsMTguNzkyLDIxLjg1NywxOC40ODJ6IE0xMiwxOCBjLTAuNTUyLDAtMS0wLjQ0OC0xLTFjMC0wLjU1MiwwLjQ0OC0xLDEtMXMxLDAuNDQ4LDEsMUMxMywxNy41NTIsMTIuNTUyLDE4LDEyLDE4eiBNMTMsMTRjMCwwLjU1My0wLjQ0OCwxLTEsMXMtMS0wLjQ0Ny0xLTFWOCBjMC0wLjU1MiwwLjQ0OC0xLDEtMXMxLDAuNDQ4LDEsMVYxNHoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},1407:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.Button=void 0;const r=t(4769);a.Button=class{constructor(n){var i;this.updateLabel=e=>{this.render.querySelector(".mynah-button-label").replaceWith(r.DomBuilder.getInstance().build({type:"span",classNames:["mynah-button-label"],children:[e]}))},this.setEnabled=e=>{e?this.render.removeAttribute("disabled"):this.render.setAttribute("disabled","disabled")},this.render=r.DomBuilder.getInstance().build({type:"button",classNames:["mynah-button",...n.primary===!1?["mynah-button-secondary"]:[],...n.classNames!==void 0?n.classNames:[]],attributes:{...n.attributes},events:{...n.additionalEvents,click:n.onClick},children:[...n.icon!==void 0?[n.icon]:[],...n.label!==void 0?[{type:"span",classNames:["mynah-button-label"],children:[n.label]}]:[],...(i=n.children)!==null&&i!==void 0?i:[]]})}}},7853:function(l,a,t){"use strict";var r=this&&this.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(a,"__esModule",{value:!0}),a.CardBody=a.PARTS_CLASS_NAME_VISIBLE=a.PARTS_CLASS_NAME=a.highlightersWithTooltip=void 0;const n=t(4769),i=t(970),e=r(t(5937)),s=t(4083),o=t(8990),c=t(7019);a.highlightersWithTooltip={start:{markupStart:"<mark ",markupAttributes:d=>`marker-index=${d}`,markupEnd:" reference-tracker>"},end:{markup:"</mark>"}},a.PARTS_CLASS_NAME="typewriter-part",a.PARTS_CLASS_NAME_VISIBLE="typewriter";class m{constructor(y){var w;this.processNode=(T,M,u)=>{var v,x,k,C,I,D,S,j,F,E;const z=T;if(((v=z.tagName)===null||v===void 0?void 0:v.toLowerCase())==="a"){const $=(x=z.getAttribute("href"))!==null&&x!==void 0?x:"";return n.DomBuilder.getInstance().build({type:"a",events:{click:W=>{this.props.onLinkClick!==void 0&&this.props.onLinkClick($,W)}},attributes:{href:(k=z.getAttribute("href"))!==null&&k!==void 0?k:"",target:"_blank"},innerHTML:z.innerHTML})}if(((C=z.tagName)===null||C===void 0?void 0:C.toLowerCase())==="pre"&&z.querySelector("code")!==null||((I=z.tagName)===null||I===void 0?void 0:I.toLowerCase())==="code"){const $=((D=z.tagName)===null||D===void 0?void 0:D.toLowerCase())==="pre"||z.innerHTML.match(/\r|\n/)!==null,W=((S=z.tagName)===null||S===void 0?void 0:S.toLowerCase())==="pre"?z.querySelector("code"):z,ee=(F=Array.from((j=W?.classList)!==null&&j!==void 0?j:[]).find(J=>J.match("language-")))===null||F===void 0?void 0:F.replace("language-",""),he=(E=W?.innerHTML)!==null&&E!==void 0?E:"",se=new o.SyntaxHighlighter({codeStringWithMarkup:(0,e.default)(he),language:ee?.trim()!==""?ee:u,keepHighlights:!0,showCopyOptions:$,block:$,onCopiedToClipboard:(J,q)=>{this.props.onCopiedToClipboard!=null&&this.props.onCopiedToClipboard(J,q,this.getReferenceTrackerInformationFromElement(se))},onInsertToCursorPosition:(J,q)=>{this.props.onInsertToCursorPosition!=null&&this.props.onInsertToCursorPosition(J,q,this.getReferenceTrackerInformationFromElement(se))}}).render;return this.props.useParts===!0&&se.classList.add(a.PARTS_CLASS_NAME),se}return z.childNodes.forEach($=>{z.replaceChild(this.processNode($,M),$)}),z},this.getReferenceTrackerInformationFromElement=T=>{var M;const u=(M=T.querySelector("code"))===null||M===void 0?void 0:M.cloneNode(!0);if(u!==void 0){const v=u.querySelectorAll("mark[reference-tracker]");if(v.length>0)return Array.from(v).map((x,k)=>{var C,I,D,S,j,F;const E=`__MARK${k}_${(0,c.generateUID)()}_START__`,z=n.DomBuilder.getInstance().build({type:"span",innerHTML:E});x.insertAdjacentElement("afterbegin",z);const $=u.innerText.indexOf(E);z.remove();const W=(C=this.props.highlightRangeWithTooltip)===null||C===void 0?void 0:C[parseInt((I=x.getAttribute("marker-index"))!==null&&I!==void 0?I:"0")];return{...W,recommendationContentSpan:{start:$,end:$+(((S=(D=W?.recommendationContentSpan)===null||D===void 0?void 0:D.end)!==null&&S!==void 0?S:0)-((F=(j=W?.recommendationContentSpan)===null||j===void 0?void 0:j.start)!==null&&F!==void 0?F:0))}}})}return[]},this.showHighlightRangeTooltip=(T,M)=>{clearTimeout(this.highlightRangeTooltipTimeout),this.highlightRangeTooltipTimeout=setTimeout(()=>{var u;this.highlightRangeTooltip=new s.Overlay({background:!1,closeOnOutsideClick:!1,referenceElement:(u=T.currentTarget)!==null&&u!==void 0?u:T.target,removeOtherOverlays:!0,dimOutside:!1,verticalDirection:s.OverlayVerticalDirection.TO_TOP,horizontalDirection:s.OverlayHorizontalDirection.START_TO_RIGHT,children:[{type:"div",classNames:["mynah-ui-syntax-highlighter-highlight-tooltip"],children:[new m({body:M}).render]}]})},500)},this.hideHighlightRangeTooltip=()=>{var T;clearTimeout(this.highlightRangeTooltipTimeout),this.highlightRangeTooltip!==null&&((T=this.highlightRangeTooltip)===null||T===void 0||T.close(),this.highlightRangeTooltip=null)},this.getContentBodyChildren=T=>{let M=T.body;return T.body!==void 0&&T.highlightRangeWithTooltip!==void 0&&T.highlightRangeWithTooltip.length>0&&T.highlightRangeWithTooltip.forEach((u,v)=>{if(M!==void 0&&u.recommendationContentSpan!==void 0){const x=`${a.highlightersWithTooltip.start.markupStart}${a.highlightersWithTooltip.start.markupAttributes(v.toString())}${a.highlightersWithTooltip.start.markupEnd}`;let k=u.recommendationContentSpan.start+v*(x.length+a.highlightersWithTooltip.end.markup.length),C=k+x.length-u.recommendationContentSpan.start+u.recommendationContentSpan.end;C>M.length&&(k=M.length-1),C>M.length&&(C=M.length-1),M=M.slice(0,k)+x+M.slice(k),M=M.slice(0,C)+a.highlightersWithTooltip.end.markup+M.slice(C)}}),this.props.useParts===!0?i.marked.use({extensions:[{name:"text",renderer:u=>this.props.useParts===!0&&u.text.split(" ").map(v=>`<span class="${a.PARTS_CLASS_NAME}">${v}</span>`).join(" ")}]}):i.marked.use({extensions:[{name:"text",renderer:u=>u.text}]}),[...Array.from(n.DomBuilder.getInstance().build({type:"div",innerHTML:`${i.marked.parse(M,{breaks:!0})}`}).childNodes).map(u=>{const v=this.processNode(u,T.body);return v.querySelectorAll!==void 0&&Array.from(v.querySelectorAll("*:empty:not(img)")).forEach(x=>{x.remove()}),v})]},this.props=y;const b=[...this.getContentBodyChildren(this.props),...(w=this.props.children)!==null&&w!==void 0?w:[]];this.render=n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-card-body"],children:this.props.childLocation==="above-body"?b.reverse():b}),Array.from(this.render.querySelectorAll("mark[reference-tracker]")).forEach(T=>{T.addEventListener("mouseenter",M=>{var u,v;const x=parseInt((u=M.target.getAttribute("marker-index"))!==null&&u!==void 0?u:"0");((v=y.highlightRangeWithTooltip)===null||v===void 0?void 0:v[x])!==void 0&&this.showHighlightRangeTooltip(M,y.highlightRangeWithTooltip[x].information)}),T.addEventListener("mouseleave",this.hideHighlightRangeTooltip)})}}a.CardBody=m},4977:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.Card=void 0;const r=t(4769),n=t(7609);a.Card=class{constructor(i){var e,s,o;this.engagementStartTime=-1,this.totalMouseDistanceTraveled={x:0,y:0},this.resetEngagement=()=>{this.engagementStartTime=-1,this.totalMouseDistanceTraveled={x:0,y:0},this.previousMousePosition={x:0,y:0},this.mouseDownInfo={x:0,y:0,time:-1}},this.handleEngagement=c=>{var m;this.props.onCardEngaged!==void 0&&this.props.onCardEngaged({engagementDurationTillTrigger:new Date().getTime()-this.engagementStartTime,engagementType:c!==void 0?n.EngagementType.INTERACTION:n.EngagementType.TIME,totalMouseDistanceTraveled:this.totalMouseDistanceTraveled,selectionDistanceTraveled:Boolean((m=c?.x)!==null&&m!==void 0?m:0)&&Boolean(c?.y)?c:void 0}),this.resetEngagement()},this.props=i,this.render=r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-card",`padding-${(e=i.padding)!==null&&e!==void 0?e:"large"}`,i.border!==!1?"border":"",i.background!==!1?"background":"",...(s=i.classNames)!==null&&s!==void 0?s:[]],persistent:i.persistent,innerHTML:i.innerHTML,children:[...(o=i.children)!==null&&o!==void 0?o:[]],events:{...i.events,...i.onCardEngaged!==void 0?{mouseenter:c=>{this.engagementStartTime===-1&&(this.engagementStartTime=new Date().getTime(),this.previousMousePosition={x:c.clientX,y:c.clientY},this.totalMouseDistanceTraveled={x:0,y:0})},mousemove:c=>{this.engagementStartTime===-1&&(this.engagementStartTime=new Date().getTime()),this.totalMouseDistanceTraveled={x:this.totalMouseDistanceTraveled.x+Math.abs(c.clientX-this.previousMousePosition.x),y:this.totalMouseDistanceTraveled.y+Math.abs(c.clientY-this.previousMousePosition.y)},this.previousMousePosition={x:c.clientX,y:c.clientY}},mousedown:c=>{this.mouseDownInfo={x:c.clientX,y:c.clientY,time:new Date().getTime()}},mouseup:c=>{var m;const d=c.clientX,y=c.clientY,w=new Date().getTime();this.mouseDownInfo!==void 0&&(Math.abs(this.mouseDownInfo.x-d)>6||Math.abs(this.mouseDownInfo.y-y)>6)&&w-this.mouseDownInfo.time>300&&this.handleEngagement({x:Math.abs(this.mouseDownInfo.x-d),y:Math.abs(this.mouseDownInfo.y-y),selectedText:(m=window?.getSelection())===null||m===void 0?void 0:m.toString()})},mouseleave:()=>{const c=new Date().getTime();this.engagementStartTime!==-1&&c-this.engagementStartTime>3e3?this.handleEngagement():this.resetEngagement()}}:{}},attributes:i.attributes})}}},2922:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ChatItemButtonsWrapper=void 0;const r=t(4769),n=t(1407),i=t(3068);a.ChatItemButtonsWrapper=class{constructor(e){this.actions={},this.handleValidationChange=s=>{Object.keys(this.actions).forEach(o=>{this.actions[o].data.waitMandatoryFormItems!==!1&&this.actions[o].element.setEnabled(s)})},this.disableAll=()=>{Object.keys(this.actions).forEach(s=>{this.actions[s].data.disabled!==!1&&this.actions[s].element.setEnabled(!1)})},this.props=e,this.render=r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-buttons-container",e.useButtonComponent===!0?"mynah-chat-item-buttons-container-use-real-buttons":""],children:this.props.buttons.map(s=>{let o;return e.useButtonComponent!==!0?o=new i.ChatItemFollowUpOption({followUpOption:{pillText:s.text,disabled:s.disabled,description:s.description,status:s.status,icon:s.icon},onClick:()=>{e.formItems!==null&&e.formItems.disableAll(),this.disableAll(),this.props.onActionClick(s)}}):(o=new n.Button({label:s.text,icon:s.icon,primary:s.status!==void 0,onClick:c=>{e.formItems!==null&&e.formItems.disableAll(),this.disableAll(),this.props.onActionClick(s,c)}}),s.disabled===!0&&o.setEnabled(!1)),this.actions[s.id]={data:s,element:o},o.render})}),e.formItems!==null&&(this.handleValidationChange(e.formItems.isFormValid()),e.formItems.onValidationChange=s=>{this.handleValidationChange(s)})}}},8892:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ChatItemCard=void 0;const r=t(4769),n=t(4601),i=t(6508),e=t(7609),s=t(4977),o=t(7853),c=t(9275),m=t(9674),d=t(7690),y=t(5369),w=t(4221),b=t(9456),T=t(7019),M=t(6765),u=t(2922);a.ChatItemCard=class{constructor(v){var x;this.updateStack=[],this.chatFormItems=null,this.chatButtons=null,this.fileTreeWrapper=null,this.typewriterItemIndex=0,this.previousTypewriterItemIndex=0,this.generateCard=()=>{var k,C;const I=r.DomBuilder.getInstance().build({type:"div",classNames:this.getCardClasses(),attributes:{messageId:(k=this.props.chatItem.messageId)!==null&&k!==void 0?k:"unknown"},children:[...this.props.chatItem.type===e.ChatItemType.ANSWER_STREAM&&((C=this.props.chatItem.body)!==null&&C!==void 0?C:"").trim()===""?[new s.Card({children:[r.DomBuilder.getInstance().build({type:"div",persistent:!0,classNames:["mynah-chat-items-spinner"],children:[{type:"span"},{type:"div",children:[b.Config.getInstance().config.texts.spinnerText]}]})]}).render]:[...this.getCardContent()]]});return setTimeout(()=>{I.addClass("reveal")},this.props.chatItem.type===e.ChatItemType.PROMPT?10:200),I},this.getCardClasses=()=>{var k,C;const I=r.DomBuilder.getInstance().build({type:"span",innerHTML:typeof this.props.chatItem.body=="string"?this.props.chatItem.body:""}),D=I.textContent===null||I.textContent.trim()==="",S=D&&this.props.chatItem.followUp===void 0&&this.props.chatItem.relatedContent===void 0&&this.props.chatItem.type===e.ChatItemType.ANSWER;return[...this.props.chatItem.icon!==void 0?["mynah-chat-item-card-has-icon"]:[],`mynah-chat-item-card-status-${(k=this.props.chatItem.status)!==null&&k!==void 0?k:"default"}`,"mynah-chat-item-card",`mynah-chat-item-${(C=this.props.chatItem.type)!==null&&C!==void 0?C:e.ChatItemType.ANSWER}`,...D?["mynah-chat-item-empty"]:[],...S?["mynah-chat-item-no-content"]:[]]},this.getCardContent=()=>{var k,C,I,D;if(i.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId)===void 0)return[];if(this.chatFormItems!==null&&(this.chatFormItems.render.remove(),this.chatFormItems=null),this.props.chatItem.formItems!==void 0&&(this.chatFormItems=new M.ChatItemFormItemsWrapper({tabId:this.props.tabId,chatItem:this.props.chatItem})),this.chatButtons!==null&&(this.chatButtons.render.remove(),this.chatButtons=null),this.props.chatItem.buttons!==void 0&&(this.chatButtons=new u.ChatItemButtonsWrapper({tabId:this.props.tabId,formItems:this.chatFormItems,buttons:this.props.chatItem.buttons,onActionClick:S=>{if(n.MynahUIGlobalEvents.getInstance().dispatch(e.MynahEventNames.BODY_ACTION_CLICKED,{tabId:this.props.tabId,messageId:this.props.chatItem.messageId,actionId:S.id,actionText:S.text,...this.chatFormItems!==null?{formItemValues:this.chatFormItems.getAllValues()}:{}}),S.keepCardAfterClick===!1&&(this.render.remove(),this.props.chatItem.messageId!==void 0)){const j=i.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("chatItems");i.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).updateStore({chatItems:j.filter(F=>this.props.chatItem.messageId!==F.messageId)},!0)}}})),this.fileTreeWrapper!==null&&(this.fileTreeWrapper.render.remove(),this.fileTreeWrapper=null),this.props.chatItem.fileList!==void 0){const{filePaths:S=[],deletedFiles:j=[],actions:F,details:E}=this.props.chatItem.fileList,z=(k=this.props.chatItem.body)!==null&&k!==void 0?k:"";this.fileTreeWrapper=new w.ChatItemTreeViewWrapper({tabId:this.props.tabId,messageId:(C=this.props.chatItem.messageId)!==null&&C!==void 0?C:"",cardTitle:this.props.chatItem.fileList.fileTreeTitle,rootTitle:this.props.chatItem.fileList.rootFolderTitle,files:S,deletedFiles:j,actions:F,details:E,references:(I=this.props.chatItem.codeReference)!==null&&I!==void 0?I:[],referenceSuggestionLabel:z})}return[...i.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("showChatAvatars")===!0?[this.chatAvatar]:[],...this.props.chatItem.body!==void 0||this.props.chatItem.fileList!==void 0||this.props.chatItem.formItems!==void 0||this.props.chatItem.buttons!==void 0?[new s.Card({onCardEngaged:S=>{n.MynahUIGlobalEvents.getInstance().dispatch(e.MynahEventNames.CHAT_ITEM_ENGAGEMENT,{engagement:S,messageId:this.props.chatItem.messageId})},children:[...this.props.chatItem.icon!==void 0?[new c.Icon({icon:this.props.chatItem.icon,classNames:["mynah-chat-item-card-icon"]}).render]:[],(()=>{var S,j,F,E;const z={body:(S=this.props.chatItem.body)!==null&&S!==void 0?S:"",onLinkClick:($,W)=>{n.MynahUIGlobalEvents.getInstance().dispatch(e.MynahEventNames.LINK_CLICK,{messageId:this.props.chatItem.messageId,link:$,event:W})}};return this.contentBody=new o.CardBody({...z,useParts:this.props.chatItem.type===e.ChatItemType.ANSWER_STREAM,highlightRangeWithTooltip:this.props.chatItem.codeReference,children:this.props.chatItem.relatedContent!==void 0?[new d.ChatItemSourceLinksContainer({messageId:(j=this.props.chatItem.messageId)!==null&&j!==void 0?j:"unknown",tabId:this.props.tabId,relatedContent:(F=this.props.chatItem.relatedContent)===null||F===void 0?void 0:F.content,title:(E=this.props.chatItem.relatedContent)===null||E===void 0?void 0:E.title}).render]:[],onCopiedToClipboard:($,W,ee)=>{n.MynahUIGlobalEvents.getInstance().dispatch(e.MynahEventNames.COPY_CODE_TO_CLIPBOARD,{messageId:this.props.chatItem.messageId,type:$,text:W,referenceTrackerInformation:ee})},onInsertToCursorPosition:($,W,ee)=>{n.MynahUIGlobalEvents.getInstance().dispatch(e.MynahEventNames.INSERT_CODE_TO_CURSOR_POSITION,{messageId:this.props.chatItem.messageId,type:$,text:W,referenceTrackerInformation:ee})}}),this.contentBody.render})(),...this.chatFormItems!==null?[this.chatFormItems.render]:[],...this.fileTreeWrapper!==null?[this.fileTreeWrapper.render]:[],...this.chatButtons!==null?[this.chatButtons.render]:[],...this.props.chatItem.canBeVoted===!0&&this.props.chatItem.messageId!==void 0?[new y.ChatItemRelevanceVote({tabId:this.props.tabId,messageId:this.props.chatItem.messageId}).render]:[]]}).render]:"",((D=this.props.chatItem.followUp)===null||D===void 0?void 0:D.text)!==void 0?new m.ChatItemFollowUpContainer({tabId:this.props.tabId,chatItem:this.props.chatItem}).render:""]},this.getChatAvatar=()=>r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-card-icon-wrapper"],children:[new c.Icon({icon:this.props.chatItem.type===e.ChatItemType.PROMPT?c.MynahIcons.USER:c.MynahIcons.MYNAH}).render]}),this.getInsertedTypewriterPartsCss=()=>{var k,C;return r.DomBuilder.getInstance().build({type:"style",attributes:{type:"text/css"},persistent:!0,innerHTML:`
    ${new Array(Math.max(0,((k=this.typewriterItemIndex)!==null&&k!==void 0?k:0)-((C=this.previousTypewriterItemIndex)!==null&&C!==void 0?C:0))).fill(null).map((I,D)=>`
        .${this.typewriterId} .typewriter-part[index="${D+this.previousTypewriterItemIndex}"] {
          animation: none !important;
          opacity: 1 !important;
          visibility: visible !important;
        }

        `).join("")}
    `})},this.getInsertingTypewriterPartsCss=(k,C)=>r.DomBuilder.getInstance().build({type:"style",attributes:{type:"text/css"},innerHTML:`
        ${new Array(Math.max(0,k??0)).fill(null).map((I,D)=>`
            .${this.typewriterId} .typewriter-part[index="${D+this.typewriterItemIndex}"] {
              animation: typewriter 100ms ease-out forwards;
              animation-delay: ${D*C}ms !important;
            }
            `).join("")}
        `}),this.updateCard=()=>{var k,C,I;if(this.updateTimer===void 0&&this.updateCardStack.length>0){const D=this.updateStack.shift();if(D!==void 0){if(this.props.chatItem={...this.props.chatItem,...D},this.props.chatItem.messageId!==void 0){const z=(C=(k=i.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId))===null||k===void 0?void 0:k.getStore())===null||C===void 0?void 0:C.chatItems;i.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).updateStore({chatItems:z?.map($=>$.messageId===this.props.chatItem.messageId?this.props.chatItem:$)},!0)}const S=this.getCardContent(),j=Array.from(this.contentBody.render.querySelectorAll(".typewriter-part"));for(let z=0;z<j.length;z++)j[z].setAttribute("index",z.toString());this.typewriterId===void 0&&(this.typewriterId=`typewriter-card-${(0,T.generateUID)()}`),(I=this.render)===null||I===void 0||I.update({classNames:[...this.getCardClasses(),"reveal",this.typewriterId,"typewriter-animating"],children:[...S,this.getInsertedTypewriterPartsCss()]});const F=j.length-this.typewriterItemIndex,E=Math.min(50,Math.floor(500/F));this.render.insertChild("beforeend",this.getInsertingTypewriterPartsCss(F,E)),this.previousTypewriterItemIndex=this.typewriterItemIndex,this.typewriterItemIndex=j.length,this.updateTimer=setTimeout(()=>{this.render.removeClass("typewriter-animating"),this.render.insertChild("beforeend",this.getInsertedTypewriterPartsCss()),this.updateTimer=void 0,this.updateCard()},E*F)}}},this.updateCardStack=k=>{this.updateStack.push(k),this.updateCard()},this.props=v,this.chatAvatar=this.getChatAvatar(),i.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("showChatAvatars",k=>{k?(this.chatAvatar=this.getChatAvatar(),this.render.insertChild("afterbegin",this.chatAvatar)):this.chatAvatar.remove()}),this.render=this.generateCard(),this.props.chatItem.type===e.ChatItemType.ANSWER_STREAM&&((x=this.props.chatItem.body)!==null&&x!==void 0?x:"").trim()!==""&&this.updateCardStack({})}}},3068:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ChatItemFollowUpOption=void 0;const r=t(970),n=t(4769),i=t(9275),e=t(4083),s=t(4977),o=t(7853);a.ChatItemFollowUpOption=class{constructor(c){var m;this.disabled=!1,this.showCroppedFollowupText=(y,w)=>{w.trim()!==void 0&&(clearTimeout(this.followupTooltipTimeout),this.followupTooltipTimeout=setTimeout(()=>{const b=y.target;this.followupTooltip=new e.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:b,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:e.OverlayVerticalDirection.TO_TOP,horizontalDirection:e.OverlayHorizontalDirection.START_TO_RIGHT,children:[new s.Card({border:!1,children:[new o.CardBody({body:w}).render]}).render]})},250))},this.hideCroppedFollowupText=()=>{var y;clearTimeout(this.followupTooltipTimeout),this.followupTooltip!==null&&((y=this.followupTooltip)===null||y===void 0||y.close(),this.followupTooltip=null)},this.setEnabled=y=>{this.disabled=!y,y?this.render.removeClass("mynah-chat-item-followup-question-option-disabled"):this.render.addClass("mynah-chat-item-followup-question-option-disabled")},this.props=c,this.disabled=this.props.followUpOption.disabled===!0,r.marked.use({extensions:[{name:"text",renderer:y=>y.text}]});const d=c.followUpOption.pillText.length>40?`${c.followUpOption.pillText.substring(0,37)}...`:c.followUpOption.pillText;this.render=n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-followup-question-option",`mynah-chat-item-followup-question-option-status-${(m=c.followUpOption.status)!==null&&m!==void 0?m:"default"}`,c.followUpOption.disabled===!0?"mynah-chat-item-followup-question-option-disabled":""],children:[...c.followUpOption.icon!==void 0?[new i.Icon({icon:c.followUpOption.icon}).render]:[],(0,r.marked)(d,{breaks:!0}).replace("<p>","").replace("</p>","")],events:{click:y=>{this.disabled||(this.hideCroppedFollowupText(),this.props.onClick(c.followUpOption))},...c.followUpOption.pillText.length>40||c.followUpOption.description!==void 0?{mouseover:y=>{let w=(0,r.marked)(c.followUpOption.pillText.length>40?c.followUpOption.pillText:"",{breaks:!0});c.followUpOption.description!==void 0&&(w!==""&&(w+=`

`),w+=c.followUpOption.description),this.showCroppedFollowupText(y,w)},mouseleave:this.hideCroppedFollowupText}:{}}})}}},9674:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ChatItemFollowUpContainer=void 0;const r=t(4769),n=t(4601),i=t(7609),e=t(3068);a.ChatItemFollowUpContainer=class{constructor(s){var o,c,m,d;this.props=s,this.props.chatItem=s.chatItem,this.followupOptions=((c=(o=this.props.chatItem.followUp)===null||o===void 0?void 0:o.options)!==null&&c!==void 0?c:[]).map(y=>new e.ChatItemFollowUpOption({followUpOption:y,onClick:w=>{var b,T;n.MynahUIGlobalEvents.getInstance().removeListener(i.MynahEventNames.CHAT_ITEM_ADD,this.itemAddListenerId),n.MynahUIGlobalEvents.getInstance().dispatch(i.MynahEventNames.FOLLOW_UP_CLICKED,{tabId:this.props.tabId,messageId:this.props.chatItem.messageId,followUpOption:w}),!((b=this.render.parentElement)===null||b===void 0)&&b.hasClass("mynah-chat-item-empty")?(T=this.render.parentElement)===null||T===void 0||T.remove():this.render.remove()}})),this.itemAddListenerId=n.MynahUIGlobalEvents.getInstance().addListener(i.MynahEventNames.CHAT_ITEM_ADD,y=>{y.tabId===this.props.tabId&&(this.render.remove(),this.followupOptions.forEach(w=>w.hideCroppedFollowupText()),this.followupOptions=[],n.MynahUIGlobalEvents.getInstance().removeListener(i.MynahEventNames.CHAT_ITEM_ADD,this.itemAddListenerId))}),this.render=r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-followup-question"],children:[{type:"div",classNames:["mynah-chat-item-followup-question-text"],children:[(d=(m=this.props.chatItem.followUp)===null||m===void 0?void 0:m.text)!==null&&d!==void 0?d:""]},{type:"div",classNames:["mynah-chat-item-followup-question-options-wrapper"],children:this.followupOptions.map(y=>y.render)}]}),Array.from(this.render.getElementsByTagName("a")).forEach(y=>{const w=y.href;y.onclick=b=>{n.MynahUIGlobalEvents.getInstance().dispatch(i.MynahEventNames.LINK_CLICK,{tabId:this.props.tabId,messageId:this.props.chatItem.messageId,link:w,event:b})}})}}},6765:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ChatItemFormItemsWrapper=void 0;const r=t(4769),n=t(4432),i=t(2010),e=t(6755),s=t(626),o=t(9897),c=t(9275);a.ChatItemFormItemsWrapper=class{constructor(m){var d;this.options={},this.validationItems={},this.isValid=!1,this.getValidationHandler=y=>y.mandatory===!0?(this.validationItems[y.id]=y.value!==void 0&&y.value!=="",{onChange:w=>{this.validationItems[y.id]=w!==void 0&&w!=="",this.isFormValid()}}):{},this.isFormValid=()=>{const y=Object.keys(this.validationItems).reduce((w,b)=>w&&this.validationItems[b],!0);return this.isValid!==y&&this.onValidationChange!==void 0&&this.onValidationChange(y),this.isValid=y,y},this.disableAll=()=>{Object.keys(this.options).forEach(y=>this.options[y].setEnabled(!1))},this.getAllValues=()=>{const y={};return Object.keys(this.options).forEach(w=>{y[w]=this.options[w].getValue()}),y},this.props=m,this.render=r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-form-items-container"],children:(d=this.props.chatItem.formItems)===null||d===void 0?void 0:d.map(y=>{var w,b,T,M,u;let v,x=`${y.mandatory===!0?"* ":""}${(w=y.title)!==null&&w!==void 0?w:""}`;y.mandatory===!0&&(x=r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-ui-form-item-mandatory-title"],children:[new c.Icon({icon:c.MynahIcons.ASTERISK}).render,(b=y.title)!==null&&b!==void 0?b:""]}),y.value===void 0&&(y.value=(M=(T=y.options)===null||T===void 0?void 0:T[0])===null||M===void 0?void 0:M.value));const k=(u=y.value)===null||u===void 0?void 0:u.toString();switch(y.type){case"select":v=new i.Select({label:x,value:k,options:y.options,optional:y.mandatory!==!0,...this.getValidationHandler(y)});break;case"radiogroup":v=new n.RadioGroup({label:x,value:k,options:y.options,optional:y.mandatory!==!0,...this.getValidationHandler(y)});break;case"textarea":v=new s.TextArea({label:x,value:k,placeholder:y.placeholder,...this.getValidationHandler(y)});break;case"textinput":v=new o.TextInput({label:x,value:k,placeholder:y.placeholder,...this.getValidationHandler(y)});break;case"numericinput":v=new o.TextInput({label:x,value:k,numeric:!0,placeholder:y.placeholder,...this.getValidationHandler(y)});break;case"stars":v=new e.Stars({label:x,value:k,...this.getValidationHandler(y)})}return v!==void 0?(this.options[y.id]=v,v.render):null})}),this.isFormValid()}}},5369:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ChatItemRelevanceVote=void 0;const r=t(7609),n=t(4769),i=t(9275),e=t(4601),s=t(1407),o=t(9456);a.ChatItemRelevanceVote=class{constructor(c){this.handleVoteChange=m=>{e.MynahUIGlobalEvents.getInstance().dispatch(r.MynahEventNames.CARD_VOTE,{messageId:this.props.messageId,tabId:this.props.tabId,vote:m});const d=[o.Config.getInstance().config.texts.feedbackThanks,...m===r.RelevancyVoteType.DOWN?[new s.Button({label:o.Config.getInstance().config.texts.feedbackReportButtonLabel,onClick:()=>{this.sendFeedbackListenerId===void 0&&(this.sendFeedbackListenerId=e.MynahUIGlobalEvents.getInstance().addListener(r.MynahEventNames.FEEDBACK_SET,y=>{y.messageId===this.props.messageId&&y.tabId===this.props.tabId&&(e.MynahUIGlobalEvents.getInstance().removeListener(r.MynahEventNames.FEEDBACK_SET,this.sendFeedbackListenerId),this.render.remove())})),e.MynahUIGlobalEvents.getInstance().dispatch(r.MynahEventNames.SHOW_FEEDBACK_FORM,{tabId:this.props.tabId,messageId:this.props.messageId})},primary:!1}).render]:[]];this.render.replaceChildren(...d),m===r.RelevancyVoteType.UP&&setTimeout(()=>{this.render.remove()},3500)},this.props=c,this.votingId=`${this.props.tabId}-${this.props.messageId}`,this.render=n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-card-votes-wrapper"],children:[{type:"div",classNames:["mynah-card-vote"],children:[{type:"input",events:{change:m=>{this.handleVoteChange(r.RelevancyVoteType.UP)}},attributes:{type:"radio",id:`${this.votingId}-vote-up`,name:`${this.votingId}-vote`,value:"up"},classNames:["mynah-vote-radio","mynah-vote-up-radio"]},{type:"input",events:{change:m=>{this.handleVoteChange(r.RelevancyVoteType.DOWN)}},attributes:{type:"radio",id:`${this.votingId}-vote-down`,name:`${this.votingId}-vote`,value:"down"},classNames:["mynah-vote-radio","mynah-vote-down-radio"]},{type:"label",attributes:{for:`${this.votingId}-vote-up`},classNames:["mynah-vote-label","mynah-vote-up"],children:[new i.Icon({icon:i.MynahIcons.THUMBS_UP}).render]},{type:"label",attributes:{for:`${this.votingId}-vote-down`},classNames:["mynah-vote-label","mynah-vote-down"],children:[new i.Icon({icon:i.MynahIcons.THUMBS_DOWN}).render]}]}]})}}},7690:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ChatItemSourceLinksContainer=void 0;const r=t(4769),n=t(4601),i=t(7609),e=t(1407),s=t(4977),o=t(9275),c=t(8948);a.ChatItemSourceLinksContainer=class{constructor(m){this.props=m,this.showMoreButtonBlock=new e.Button({classNames:["mynah-chat-item-card-related-content-show-more"],primary:!1,icon:new o.Icon({icon:o.MynahIcons.DOWN_OPEN}).render,onClick:()=>{n.MynahUIGlobalEvents.getInstance().dispatch(i.MynahEventNames.SHOW_MORE_WEB_RESULTS_CLICK,{messageId:this.props.messageId}),this.showMoreButtonBlock.render.remove(),this.render.addClass("expanded")},label:"Show more"}),this.props.relatedContent!==void 0&&(this.render=r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-card-related-content",this.props.relatedContent!==void 0&&this.props.relatedContent.length<=1?"expanded":""],children:[...this.props.title!==void 0?[{type:"span",classNames:["mynah-chat-item-card-related-content-title"],children:[this.props.title]}]:[],...this.props.relatedContent.map(d=>r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-card-related-content-item"],children:[new s.Card({background:!1,border:!1,padding:"none",children:[new c.SourceLinkHeader({sourceLink:d,showCardOnHover:!0,onClick:y=>{n.MynahUIGlobalEvents.getInstance().dispatch(i.MynahEventNames.SOURCE_LINK_CLICK,{messageId:this.props.messageId,link:d.url,event:y})}}).render]}).render]})),this.showMoreButtonBlock.render]}))}}},2932:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ChatItemTreeViewLicense=void 0;const r=t(9456),n=t(4769),i=t(7853),e=t(8029);a.ChatItemTreeViewLicense=class{constructor(s){this.buildDropdownChildren=o=>n.DomBuilder.getInstance().build({type:"ul",classNames:["mynah-chat-item-tree-view-license-container"],children:o.map(c=>({type:"li",children:[new i.CardBody({body:c.information}).render]}))}),s.references.length!==0?this.render=new e.CollapsibleContent({title:r.Config.getInstance().config.texts.codeSuggestionWithReferenceTitle,classNames:["mynah-chat-item-tree-view-license"],children:[this.buildDropdownChildren(s.references)]}).render:this.render=n.DomBuilder.getInstance().build({type:"span",classNames:["empty"]})}}},4221:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ChatItemTreeViewWrapper=void 0;const r=t(9456),n=t(4769),i=t(7831),e=t(4469),s=t(2932);a.ChatItemTreeViewWrapper=class{constructor(o){var c,m,d,y,w;const b=new s.ChatItemTreeViewLicense({referenceSuggestionLabel:o.referenceSuggestionLabel,references:o.references}).render,T=new e.ChatItemTreeView({messageId:o.messageId,tabId:o.tabId,node:(0,i.fileListToTree)(o.files,o.deletedFiles,o.actions,o.details,o.rootTitle)}).render;this.render=n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-tree-view-wrapper"],children:[{type:"div",classNames:["mynah-chat-item-tree-view-wrapper-container"],children:[{type:"div",classNames:["mynah-chat-item-tree-view-wrapper-title"],children:[{type:"h4",children:[`${(c=o.cardTitle)!==null&&c!==void 0?c:r.Config.getInstance().config.texts.codeSuggestions}`]},{type:"span",children:[`${((d=(m=o.files)===null||m===void 0?void 0:m.length)!==null&&d!==void 0?d:0)+((w=(y=o.deletedFiles)===null||y===void 0?void 0:y.length)!==null&&w!==void 0?w:0)} ${r.Config.getInstance().config.texts.files}`]}]},b,T]}]})}}},4469:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ChatItemTreeView=void 0;const r=t(9456),n=t(4769),i=t(4601),e=t(7609),s=t(1407),o=t(9275);class c{constructor(d){var y;this.node=d.node,this.tabId=d.tabId,this.messageId=d.messageId,this.isOpen=!0,this.depth=(y=d.depth)!==null&&y!==void 0?y:0,this.render=n.DomBuilder.getInstance().build({type:"div",classNames:this.getClassNames(),children:[...this.node.type==="folder"?this.buildFolderNode():this.buildFileNode()]})}getClassNames(){return["mynah-chat-item-tree-view",this.node.type==="file"?"mynah-chat-tree-view-file":"mynah-chat-tree-view-folder-"+(this.isOpen?"open":"closed")]}updateTree(){this.render.update({classNames:this.getClassNames(),children:[...this.node.type==="folder"?this.buildFolderNode():this.buildFileNode()]})}buildFolderChildren(){return this.node.type!=="folder"?[]:this.isOpen?this.node.children.map(d=>n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-pull-request-item"],children:[new c({node:d,depth:this.depth+1,tabId:this.tabId,messageId:this.messageId}).render]})):[]}buildFolderNode(){return this.node.type!=="folder"?[]:[new s.Button({icon:new o.Icon({icon:this.isOpen?o.MynahIcons.DOWN_OPEN:o.MynahIcons.RIGHT_OPEN}).render,classNames:["mynah-chat-item-tree-view-button"],label:n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-tree-view-button-title"],children:[{type:"span",children:[this.node.name]},{type:"span",classNames:["mynah-chat-item-tree-view-button-weak-title"],children:[`${this.node.children.length} ${r.Config.getInstance().config.texts.files}`]}]}),primary:!1,onClick:d=>{(0,i.cancelEvent)(d),this.isOpen=!this.isOpen,this.updateTree()}}).render,...this.buildFolderChildren()]}buildFileNode(){var d,y;return this.node.type!=="file"?[]:[n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-tree-view-file-item",((d=this.node.details)===null||d===void 0?void 0:d.status)!==void 0?`mynah-chat-item-tree-view-file-item-status-${(y=this.node.details)===null||y===void 0?void 0:y.status}`:""],events:{click:()=>{i.MynahUIGlobalEvents.getInstance().dispatch(e.MynahEventNames.OPEN_DIFF,{tabId:this.tabId,messageId:this.messageId,filePath:this.node.filePath,deleted:this.node.deleted})}},children:[{type:"div",classNames:["mynah-chat-item-tree-view-file-item-title",this.node.deleted?"mynah-chat-item-tree-view-file-item-deleted":""],children:[{type:"span",children:[this.node.name]}]},...this.node.details!==void 0?[{type:"div",classNames:["mynah-chat-item-tree-view-file-item-details"],children:[...this.node.details.icon!==void 0?[new o.Icon({icon:this.node.details.icon}).render]:[],...this.node.details.label!==void 0?[{type:"span",classNames:["mynah-chat-item-tree-view-file-item-details-text"],children:[this.node.details.label]}]:[]]}]:[],...this.node.actions!==void 0?[{type:"div",classNames:["mynah-chat-item-tree-view-file-item-actions"],children:this.node.actions.map(w=>{var b,T;return new s.Button({icon:new o.Icon({icon:w.icon}).render,...w.label!==void 0?{label:w.label}:{},attributes:{title:(b=w.description)!==null&&b!==void 0?b:""},classNames:["mynah-icon-button",(T=w.status)!==null&&T!==void 0?T:""],primary:!1,onClick:M=>{(0,i.cancelEvent)(M),i.MynahUIGlobalEvents.getInstance().dispatch(e.MynahEventNames.FILE_ACTION_CLICK,{tabId:this.tabId,messageId:this.messageId,filePath:this.node.filePath,actionName:w.name})}}).render})}]:[]]})]}}a.ChatItemTreeView=c},2990:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ChatPromptInputCommand=void 0;const r=t(4769);a.ChatPromptInputCommand=class{constructor(n){this.setCommand=i=>{i.trim()===""?this.render.addClass("hidden"):this.render.removeClass("hidden"),this.promptTextInputCommand.innerText=i},this.props=n,this.promptTextInputCommand=r.DomBuilder.getInstance().build({type:"span",classNames:["mynah-chat-prompt-input-command-text"],events:{click:this.props.onRemoveClick}}),this.render=r.DomBuilder.getInstance().build({type:"span",classNames:["mynah-chat-prompt-input-command-wrapper",this.props.command===""?"hidden":""],children:[this.promptTextInputCommand]})}}},6200:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ChatPromptInputInfo=void 0;const r=t(970),n=t(4769),i=t(6508),e=t(7853),s=t(4601),o=t(7609);a.ChatPromptInputInfo=class{constructor(c){var m,d;this.linkClick=(y,w)=>{s.MynahUIGlobalEvents.getInstance().dispatch(o.MynahEventNames.INFO_LINK_CLICK,{link:y,event:w})},r.marked.use({extensions:[{name:"text",renderer:y=>y.text}]}),i.MynahUITabsStore.getInstance().addListenerToDataStore(c.tabId,"promptInputInfo",y=>{var w,b;this.render.update({children:[new e.CardBody({onLinkClick:this.linkClick,body:(b=(w=i.MynahUITabsStore.getInstance().getTabDataStore(c.tabId))===null||w===void 0?void 0:w.getValue("promptInputInfo"))!==null&&b!==void 0?b:""}).render]})}),this.render=n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-prompt-input-info"],children:[new e.CardBody({onLinkClick:this.linkClick,body:(d=(m=i.MynahUITabsStore.getInstance().getTabDataStore(c.tabId))===null||m===void 0?void 0:m.getValue("promptInputInfo"))!==null&&d!==void 0?d:""}).render]})}}},270:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ChatPromptInputStickyCard=void 0;const r=t(4769),n=t(6508),i=t(7609),e=t(8892);a.ChatPromptInputStickyCard=class{constructor(s){var o,c;n.MynahUITabsStore.getInstance().addListenerToDataStore(s.tabId,"promptInputStickyCard",d=>{var y;d===null?this.render.clear():this.render.update({children:[new e.ChatItemCard({chatItem:{...d,messageId:(y=d.messageId)!==null&&y!==void 0?y:"sticky-card",type:i.ChatItemType.ANSWER},tabId:s.tabId}).render]})});const m=(o=n.MynahUITabsStore.getInstance().getTabDataStore(s.tabId))===null||o===void 0?void 0:o.getValue("promptInputStickyCard");this.render=r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-prompt-input-sticky-card"],children:m!==null?[new e.ChatItemCard({chatItem:{...m,messageId:(c=m.messageId)!==null&&c!==void 0?c:"sticky-card",type:i.ChatItemType.ANSWER},tabId:s.tabId}).render]:[]})}}},967:function(l,a,t){"use strict";var r=this&&this.__importDefault||function(T){return T&&T.__esModule?T:{default:T}};Object.defineProperty(a,"__esModule",{value:!0}),a.ChatPromptInput=a.MAX_USER_INPUT=a.MAX_USER_INPUT_THRESHOLD=void 0;const n=t(4769),i=t(7609),e=t(4601),s=t(4083),o=t(6508),c=r(t(5573)),m=t(2990),d=t(9689),y=t(3883),w=t(9123),b=t(9456);a.MAX_USER_INPUT_THRESHOLD=96,a.MAX_USER_INPUT=()=>b.Config.getInstance().config.maxUserInput-a.MAX_USER_INPUT_THRESHOLD,a.ChatPromptInput=class{constructor(T){this.commandSelectorOpen=!1,this.selectedCommand="",this.updateAvailableCharactersIndicator=()=>{const M=this.promptTextInput.promptTextInputMaxLength-this.promptTextInput.getTextInputValue().trim().length;this.remainingCharsIndicator.update({innerHTML:`${Math.max(0,M)}/${(0,a.MAX_USER_INPUT)()}`})},this.handleInputKeydown=M=>{var u,v,x,k;if(this.commandSelectorOpen){const C=[i.KeyMap.ENTER,i.KeyMap.ESCAPE,i.KeyMap.SPACE,i.KeyMap.TAB,i.KeyMap.BACK_SLASH,i.KeyMap.SLASH],I=[i.KeyMap.ARROW_UP,i.KeyMap.ARROW_DOWN];if(C.includes(M.key)){if(M.preventDefault(),M.key===i.KeyMap.ENTER||M.key===i.KeyMap.TAB||M.key===i.KeyMap.SPACE){let D;this.filteredCommandsList.length>0&&(D=(u=this.commandSelector.render.querySelector(".target-command"))!==null&&u!==void 0?u:this.commandSelector.render.querySelector(".mynah-chat-command-selector-command")),this.handleCommandSelection({command:(v=D?.getAttribute("command"))!==null&&v!==void 0?v:"",placeholder:(x=D?.getAttribute("placeholder"))!==null&&x!==void 0?x:void 0})}this.commandSelector!==void 0&&(M.key===i.KeyMap.ESCAPE&&this.clearTextArea(!0),this.commandSelector.close())}else if(I.includes(M.key)){M.preventDefault();const D=Array.from(this.commandSelector.render.querySelectorAll(".mynah-chat-command-selector-command"));let S,j=D.findIndex(F=>F.classList.contains("target-command"));j=j===-1?D.length:j,S=M.key===i.KeyMap.ARROW_UP?j>0?j-1:D.length-1:j<D.length-1?j+1:0,(k=D[j])===null||k===void 0||k.classList.remove("target-command"),D[S].classList.add("target-command"),D[S].getAttribute("prompt")!==null&&this.promptTextInput.updateTextInputValue(D[S].getAttribute("prompt"))}else this.commandSelector!==void 0&&setTimeout(()=>{this.promptTextInput.getTextInputValue()===""?this.commandSelector.close():(this.filteredCommandsList=[],[...this.quickActionCommands].forEach(D=>{var S;const j={...D};try{const F=new RegExp((S=`${this.promptTextInput.getTextInputValue().substring(1)}`)!==null&&S!==void 0?S:"","gi");j.commands=j.commands.filter(E=>E.command.match(F)),j.commands.length>0&&this.filteredCommandsList.push(j)}catch{}}),this.filteredCommandsList.length>0?(this.commandSelector.toggleHidden(!1),this.commandSelector.updateContent([this.getQuickCommandActions(this.filteredCommandsList)])):this.commandSelector.toggleHidden(!0))},1)}else this.quickActionCommands=o.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("quickActionCommands"),M.key===i.KeyMap.BACKSPACE&&this.selectedCommand!==""&&this.promptTextInput.getTextInputValue()===""?((0,e.cancelEvent)(M),this.clearTextArea(!0)):M.key===i.KeyMap.ENTER&&(!M.isComposing&&!M.shiftKey&&!M.ctrlKey||M.isComposing&&M.shiftKey)?((0,e.cancelEvent)(M),this.sendPrompt()):this.selectedCommand===""&&this.quickActionCommands.length>0&&M.key===i.KeyMap.SLASH&&this.promptTextInput.getTextInputValue()===""&&(this.commandSelector!==void 0&&this.commandSelector.close(),this.filteredCommandsList=[...this.quickActionCommands],this.commandSelector=new s.Overlay({closeOnOutsideClick:!0,referenceElement:this.render.querySelector(".mynah-chat-prompt"),dimOutside:!1,stretchWidth:!0,verticalDirection:s.OverlayVerticalDirection.TO_TOP,horizontalDirection:s.OverlayHorizontalDirection.START_TO_RIGHT,onClose:()=>{this.commandSelectorOpen=!1},children:[this.getQuickCommandActions(this.quickActionCommands)]}),this.commandSelectorOpen=!0)},this.getQuickCommandActions=M=>n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-command-selector"],children:M.map(u=>n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-command-selector-group"],children:[...u.groupName!==void 0?[n.DomBuilder.getInstance().build({type:"h4",classNames:["mynah-chat-command-selector-group-title"],children:[u.groupName]})]:[],...u.commands.map(v=>n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-command-selector-command"],attributes:{...v},events:{click:()=>{this.handleCommandSelection(v)}},children:[{type:"div",classNames:["mynah-chat-command-selector-command-name"],children:[v.command]},...v.description!==void 0?[{type:"div",classNames:["mynah-chat-command-selector-command-description"],children:[v.description]}]:[]]}))]}))}),this.handleCommandSelection=M=>{this.selectedCommand=M.command,this.promptTextInput.updateTextInputValue(""),M.placeholder!==void 0?(this.promptTextInputCommand.setCommand(this.selectedCommand),this.promptTextInput.updateTextInputPlaceholder(M.placeholder)):this.sendPrompt(),this.commandSelector.close(),b.Config.getInstance().config.autoFocus&&this.promptTextInput.focus()},this.clearTextArea=M=>{this.selectedCommand="",this.promptTextInput.clear(),this.promptTextInput.updateTextInputMaxLength((0,a.MAX_USER_INPUT)()),this.promptTextInputCommand.setCommand(""),M!==!0&&(this.attachmentWrapper.clear(),this.codeSnippet.clear(),this.attachment=void 0),this.updateAvailableCharactersIndicator()},this.addText=M=>{e.MynahUIGlobalEvents.getInstance().dispatch(i.MynahEventNames.ADD_CODE_SNIPPET,{textToAdd:M,tabId:this.props.tabId})},this.sendPrompt=()=>{const M=this.promptTextInput.getTextInputValue();if(M.trim()!==""||this.selectedCommand.trim()!==""){const u=o.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("selectedCodeSnippet"),v={tabId:this.props.tabId,prompt:{prompt:M+(u??""),escapedPrompt:(0,c.default)(M+(u??"")),...this.selectedCommand!==""?{command:this.selectedCommand}:{},attachment:this.attachment}};this.clearTextArea(),e.MynahUIGlobalEvents.getInstance().dispatch(i.MynahEventNames.CHAT_PROMPT,v)}},this.props=T,this.quickActionCommands=o.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("quickActionCommands"),this.promptTextInputCommand=new m.ChatPromptInputCommand({command:"",onRemoveClick:()=>{this.selectedCommand="",this.promptTextInputCommand.setCommand("")}}),this.promptTextInput=new w.PromptTextInput({initMaxLength:(0,a.MAX_USER_INPUT)(),tabId:this.props.tabId,onKeydown:this.handleInputKeydown,onInput:()=>this.updateAvailableCharactersIndicator()}),this.remainingCharsIndicator=n.DomBuilder.getInstance().build({type:"span",classNames:["mynah-chat-prompt-chars-indicator"],innerHTML:`${(0,a.MAX_USER_INPUT)()-this.promptTextInput.getTextInputValue().length}/${(0,a.MAX_USER_INPUT)()}`}),this.sendButton=new y.SendButton({tabId:this.props.tabId,onClick:()=>{this.sendPrompt()}}),this.codeSnippet=new d.CodeSnippet({tabId:this.props.tabId}),this.attachmentWrapper=n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-prompt-attachment-wrapper"],children:[this.codeSnippet.render]}),this.render=n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-prompt-wrapper"],children:[{type:"div",classNames:["mynah-chat-prompt"],children:[{type:"div",classNames:["mynah-chat-prompt-input-wrapper"],children:[this.promptTextInputCommand.render,this.promptTextInput.render,this.sendButton.render]},this.attachmentWrapper]},this.remainingCharsIndicator]}),e.MynahUIGlobalEvents.getInstance().addListener(i.MynahEventNames.ADD_CODE_SNIPPET,M=>{var u,v;if(this.props.tabId===M.tabId){const x=this.promptTextInput.getTextInputValue().trim().length,k=(0,a.MAX_USER_INPUT)()+a.MAX_USER_INPUT_THRESHOLD-x,C=(v=(u=M.textToAdd)!==null&&u!==void 0?u:"")===null||v===void 0?void 0:v.slice(0,k);this.codeSnippet.updateSelectedCodeSnippet(C),this.promptTextInput.updateTextInputMaxLength(Math.min((0,a.MAX_USER_INPUT)(),Math.max(a.MAX_USER_INPUT_THRESHOLD,(0,a.MAX_USER_INPUT)()+a.MAX_USER_INPUT_THRESHOLD-C.length))),this.updateAvailableCharactersIndicator()}}),e.MynahUIGlobalEvents.getInstance().addListener(i.MynahEventNames.REMOVE_CODE_SNIPPET,()=>{this.promptTextInput.updateTextInputMaxLength((0,a.MAX_USER_INPUT)()),this.codeSnippet.clear(),this.updateAvailableCharactersIndicator()}),b.Config.getInstance().config.autoFocus&&setTimeout(()=>{this.promptTextInput.focus()},500)}}},8347:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ChatWrapper=void 0;const r=t(9456),n=t(4769),i=t(6508),e=t(7609),s=t(1407),o=t(9275),c=t(8892),m=t(967),d=t(6200),y=t(270);a.ChatWrapper=class{constructor(w){var b;this.allRenderedChatItems={},this.insertChatItem=M=>{var u,v;const x=new c.ChatItemCard({tabId:this.props.tabId,chatItem:M});M.type===e.ChatItemType.ANSWER_STREAM?((u=this.lastChatItemCard)===null||u===void 0||u.render.addClass("stream-ended"),this.lastChatItemCard=x):M.type!==e.ChatItemType.ANSWER&&M.type!==e.ChatItemType.PROMPT&&M.type!==e.ChatItemType.AI_PROMPT&&M.type!==e.ChatItemType.SYSTEM_PROMPT||M.body===void 0||((v=this.lastChatItemCard)===null||v===void 0||v.render.addClass("stream-ended"),this.lastChatItemCard=null),this.chatItemsContainer.insertChild("afterbegin",x.render),M.messageId!==void 0&&(this.allRenderedChatItems[M.messageId]=x),M.type!==e.ChatItemType.PROMPT&&M.type!==e.ChatItemType.SYSTEM_PROMPT||(this.chatItemsContainer.scrollTop=this.chatItemsContainer.scrollHeight+500)},this.updateLastChatAnswer=M=>{this.lastChatItemCard!==null&&this.lastChatItemCard.updateCardStack(M)},this.updateChatAnswerWithMessageId=(M,u)=>{var v;((v=this.allRenderedChatItems[M])===null||v===void 0?void 0:v.render)!==void 0&&this.allRenderedChatItems[M].updateCardStack(u)},this.addToPrompt=M=>{this.promptInput.addText(M)},this.props=w,i.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("chatItems",M=>{const u=M[M.length-1];if(this.chatItemsContainer.children.length===M.length){const v=this.chatItemsContainer.children.item(0);if(v!==null){const x=new c.ChatItemCard({tabId:this.props.tabId,chatItem:u});u.messageId!==void 0&&(this.allRenderedChatItems[u.messageId]=x),v.innerHTML=x.render.innerHTML}}else M.length>0?this.chatItemsContainer.children.length===0?M.forEach(v=>{this.insertChatItem(v)}):this.insertChatItem(u):(this.chatItemsContainer.clear(!0),this.allRenderedChatItems={})}),i.MynahUITabsStore.getInstance().addListenerToDataStore(this.props.tabId,"loadingChat",M=>{M?this.render.addClass("loading"):this.render.removeClass("loading")}),i.MynahUITabsStore.getInstance().addListenerToDataStore(this.props.tabId,"cancelButtonWhenLoading",M=>{M?this.intermediateBlockContainer.removeClass("hidden"):this.intermediateBlockContainer.addClass("hidden")}),this.chatItemsContainer=n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-items-container"],persistent:!0,children:[]}),this.promptInfo=new d.ChatPromptInputInfo({tabId:this.props.tabId}).render,this.promptStickyCard=new y.ChatPromptInputStickyCard({tabId:this.props.tabId}).render,this.intermediateBlockContainer=n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-overflowing-intermediate-block",...i.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("cancelButtonWhenLoading")===!1?["hidden"]:[]],children:[...((b=this.props)===null||b===void 0?void 0:b.onStopChatResponse)!==void 0?[new s.Button({classNames:["mynah-chat-stop-chat-response-button"],label:r.Config.getInstance().config.texts.stopGenerating,icon:new o.Icon({icon:o.MynahIcons.BLOCK}).render,onClick:()=>{var M,u;((M=this.props)===null||M===void 0?void 0:M.onStopChatResponse)!==void 0&&((u=this.props)===null||u===void 0||u.onStopChatResponse(this.props.tabId))}}).render]:[]]}),r.Config.getInstance().config.showPromptField&&(this.promptInput=new m.ChatPromptInput({tabId:this.props.tabId}),this.promptInputElement=this.promptInput.render),this.render=n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-wrapper"],attributes:{"mynah-tab-id":this.props.tabId},persistent:!0,children:[{type:"style",children:[`
          .mynah-nav-tabs-wrapper[selected-tab="${this.props.tabId}"] + .mynah-ui-tab-contents-wrapper > .mynah-chat-wrapper[mynah-tab-id="${this.props.tabId}"]{
              display: flex;
            }
            .mynah-nav-tabs-wrapper[selected-tab="${this.props.tabId}"] + .mynah-ui-tab-contents-wrapper > .mynah-chat-wrapper:not([mynah-tab-id="${this.props.tabId}"]) * {
              pointer-events: none !important;
            }`]},this.chatItemsContainer,this.intermediateBlockContainer,this.promptStickyCard,this.promptInputElement,this.promptInfo]});const T=i.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("chatItems");T.length>0&&T.forEach(M=>this.insertChatItem(M))}}},277:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.CodeSnippetWidget=void 0;const r=t(4083),n=t(9275),i=t(1407),e=t(4601),s=t(7609),o=t(4977),c=t(7853);a.CodeSnippetWidget=class{constructor(m){this.showPreviewOverLay=d=>{this.previewOverlay=new r.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:this.render,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:r.OverlayVerticalDirection.TO_TOP,horizontalDirection:r.OverlayHorizontalDirection.START_TO_RIGHT,children:[new o.Card({border:!1,classNames:["mynah-prompt-input-snippet-attachment-overlay"],children:[new c.CardBody({body:d}).render]}).render]})},this.closePreviewOverLay=()=>{this.previewOverlay!==void 0&&(this.previewOverlay.close(),this.previewOverlay=void 0)},this.renderCodeSnippetWidget=d=>new o.Card({padding:"none",border:!1,events:{mouseenter:()=>{this.showPreviewOverLay(d)},mouseleave:()=>{this.closePreviewOverLay()}},classNames:["snippet-card-container"],children:[new c.CardBody({body:d}).render,new i.Button({classNames:["code-snippet-close-button"],onClick:y=>{(0,e.cancelEvent)(y),e.MynahUIGlobalEvents.getInstance().dispatch(s.MynahEventNames.REMOVE_CODE_SNIPPET,this.props.tabId),this.closePreviewOverLay()},icon:new n.Icon({icon:n.MynahIcons.CANCEL}).render,primary:!1}).render]}).render,this.clear=()=>{this.closePreviewOverLay()},this.props=m,this.render=this.renderCodeSnippetWidget(this.props.markdownText)}}},9689:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.CodeSnippet=void 0;const r=t(4769),n=t(6508),i=t(277);a.CodeSnippet=class{constructor(e){this.lastCodeSnippet="",this.updateSelectedCodeSnippet=s=>{var o,c,m,d,y,w,b;this.snippetWidget!==void 0&&this.snippetWidget.clear(),this._render.clear(),this.lastCodeSnippet=s??"",s!==void 0&&s!==""&&(this.snippetWidget=new i.CodeSnippetWidget({tabId:this._props.tabId,markdownText:s}),this._render.insertChild("afterbegin",this.snippetWidget.render),((c=(o=this._render.getBoundingClientRect())===null||o===void 0?void 0:o.height)!==null&&c!==void 0?c:0)<((w=(y=(d=(m=this._render.getElementsByTagName("code"))===null||m===void 0?void 0:m[0])===null||d===void 0?void 0:d.getBoundingClientRect())===null||y===void 0?void 0:y.height)!==null&&w!==void 0?w:0)&&this._render.children[0].classList.add("vertical-overflow")),(b=n.MynahUITabsStore.getInstance().getTabDataStore(this._props.tabId))===null||b===void 0||b.updateStore({selectedCodeSnippet:s})},this.clear=()=>{var s;this.lastCodeSnippet="",this.snippetWidget!==void 0&&this.snippetWidget.clear(),this.snippetWidget=void 0,this._render.clear(),(s=n.MynahUITabsStore.getInstance().getTabDataStore(this._props.tabId))===null||s===void 0||s.updateStore({selectedCodeSnippet:void 0})},this._props=e,this._render=r.DomBuilder.getInstance().build({type:"div",classNames:["outer-container"],persistent:!0})}get render(){return this._render}}},9123:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.PromptTextInput=void 0;const r=t(9456),n=t(4769),i=t(6508),e=t(967);a.PromptTextInput=class{constructor(s){this.updatePromptTextInputSizer=()=>{this.promptTextInput.value.trim()!==""?this.render.removeClass("no-text"):this.render.addClass("no-text"),this.promptTextInputSizer.innerHTML=this.promptTextInput.value.replace(/\n/g,"</br>&nbsp;")},this.clear=()=>{this.promptTextInputSizer.innerHTML="",this.updateTextInputValue("");const c=i.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("promptInputPlaceholder");this.updateTextInputPlaceholder(c),this.render.addClass("no-text")},this.focus=()=>{r.Config.getInstance().config.autoFocus&&this.promptTextInput.focus(),this.updateTextInputValue("")},this.getTextInputValue=()=>this.promptTextInput.value,this.updateTextInputValue=c=>{this.promptTextInput.value=c},this.updateTextInputMaxLength=c=>{this.promptTextInputMaxLength=c,this.promptTextInput.update({attributes:{maxlength:c.toString()}})},this.updateTextInputPlaceholder=c=>{this.promptTextInput.update({attributes:{placeholder:c}})},this.props=s,this.promptTextInputMaxLength=s.initMaxLength;const o=i.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("promptInputDisabledState");this.promptTextInputSizer=n.DomBuilder.getInstance().build({type:"span",classNames:["mynah-chat-prompt-input","mynah-chat-prompt-input-sizer"]}),this.promptTextInput=n.DomBuilder.getInstance().build({type:"textarea",classNames:["mynah-chat-prompt-input"],attributes:{...o?{disabled:"disabled"}:{},tabindex:"1",rows:"1",maxlength:e.MAX_USER_INPUT.toString(),type:"text",placeholder:i.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("promptInputPlaceholder"),value:""},events:{keydown:this.props.onKeydown,input:c=>{this.updatePromptTextInputSizer(),this.props.onInput!==void 0&&this.props.onInput(c)},focus:()=>{this.render.addClass("input-has-focus")},blur:()=>{this.render.removeClass("input-has-focus")}}}),this.render=n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-prompt-input-inner-wrapper","no-text"],children:[this.promptTextInputSizer,this.promptTextInput]}),i.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("promptInputDisabledState",c=>{c?this.promptTextInput.setAttribute("disabled","disabled"):(this.promptTextInput.removeAttribute("disabled"),r.Config.getInstance().config.autoFocus&&this.promptTextInput.focus())}),i.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("promptInputPlaceholder",c=>{c!==void 0&&this.promptTextInput.update({attributes:{placeholder:c}})})}}},3883:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.SendButton=void 0;const r=t(6508),n=t(1407),i=t(9275);a.SendButton=class{constructor(e){this._props=e;const s=r.MynahUITabsStore.getInstance().getTabDataStore(this._props.tabId).getValue("promptInputDisabledState");this._render=new n.Button({classNames:["mynah-icon-button","mynah-chat-prompt-button"],attributes:{...s?{disabled:"disabled"}:{},tabindex:"5"},icon:new i.Icon({icon:i.MynahIcons.ENVELOPE_SEND}).render,onClick:()=>{this._props.onClick()}}).render,r.MynahUITabsStore.getInstance().getTabDataStore(this._props.tabId).subscribe("promptInputDisabledState",o=>{o?this.render.setAttribute("disabled","disabled"):this.render.removeAttribute("disabled")})}get render(){return this._render}}},8029:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.CollapsibleContent=void 0;const r=t(4769),n=t(7019),i=t(9275);a.CollapsibleContent=class{constructor(e){this.uid=(0,n.generateUID)(),this.props={initialCollapsedState:!0,onCollapseStateChange:()=>{},classNames:[],...e},this.icon=new i.Icon({icon:this.props.initialCollapsedState?i.MynahIcons.RIGHT_OPEN:i.MynahIcons.DOWN_OPEN}).render,this.render=r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-collapsible-content-wrapper",...this.props.classNames],children:[{type:"input",classNames:["mynah-collapsible-content-checkbox"],attributes:{type:"checkbox",name:this.uid,id:this.uid,...this.props.initialCollapsedState?{checked:"checked"}:{}},events:{change:s=>{const o=s.currentTarget.checked,c=new i.Icon({icon:o===!0?i.MynahIcons.RIGHT_OPEN:i.MynahIcons.DOWN_OPEN}).render;this.icon.replaceWith(c),this.icon=c,this.props.onCollapseStateChange(o)}}},{type:"label",classNames:["mynah-collapsible-content-label"],attributes:{for:this.uid},children:[{type:"div",classNames:["mynah-collapsible-content-label-title-wrapper"],children:[this.icon,{type:"span",classNames:["mynah-collapsible-content-label-title-text"],children:[this.props.title]}]},{type:"div",classNames:["mynah-collapsible-content-label-content-wrapper"],children:this.props.children}]}]})}}},7059:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.CustomFormWrapper=void 0;const r=t(4769),n=t(4601),i=t(6508),e=t(7609),s=t(6765),o=t(2922),c=t(7853),m=t(1407),d=t(9275);a.CustomFormWrapper=class{constructor(y){this.chatFormItems=null,this.chatButtons=null,this.getFormItems=()=>i.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId)===void 0?[]:(this.chatFormItems!==null&&(this.chatFormItems.render.remove(),this.chatFormItems=null),this.props.chatItem.formItems!==void 0&&(this.chatFormItems=new s.ChatItemFormItemsWrapper({tabId:this.props.tabId,chatItem:this.props.chatItem})),this.chatButtons!==null&&(this.chatButtons.render.remove(),this.chatButtons=null),this.props.chatItem.buttons!==void 0&&(this.chatButtons=new o.ChatItemButtonsWrapper({tabId:this.props.tabId,formItems:this.chatFormItems,useButtonComponent:!0,buttons:this.props.chatItem.buttons,onActionClick:(w,b)=>{b!==void 0&&(0,n.cancelEvent)(b),n.MynahUIGlobalEvents.getInstance().dispatch(e.MynahEventNames.CUSTOM_FORM_ACTION_CLICK,{tabId:this.props.tabId,id:w.id,text:w.text,...this.chatFormItems!==null?{formItemValues:this.chatFormItems.getAllValues()}:{}}),this.props.onFormAction!==void 0&&(this.props.onFormAction(w.id,this.chatFormItems!==null?this.chatFormItems.getAllValues():{}),this.render.remove())}})),[...this.chatFormItems!==null?[this.chatFormItems.render]:[],...this.chatButtons!==null?[this.chatButtons.render]:[]]),this.props=y,this.render=r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-feedback-form"],events:{click:n.cancelEvent},children:[{type:"div",classNames:["mynah-feedback-form-header"],children:[...this.props.title!==void 0?[{type:"h4",children:[this.props.title]}]:[],new m.Button({primary:!1,onClick:w=>{this.props.onCloseButtonClick!==void 0&&this.props.onCloseButtonClick(w)},icon:new d.Icon({icon:d.MynahIcons.CANCEL}).render}).render]},...this.props.description!==void 0?[new c.CardBody({body:this.props.description}).render]:[],...this.getFormItems()]})}}},1223:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.FeedbackFormComment=void 0;const r=t(4769);a.FeedbackFormComment=class{constructor(n){var i;this.getComment=()=>this.render.value,this.clear=()=>{this.render.value=""},this.render=r.DomBuilder.getInstance().build({type:"textarea",events:{keyup:e=>{n.onChange!==void 0&&n.onChange(this.render.value)}},classNames:["mynah-feedback-form-comment"],attributes:{value:(i=n.initComment)!==null&&i!==void 0?i:""}})}}},8054:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.FeedbackForm=void 0;const r=t(7609),n=t(4769),i=t(1407),e=t(1223),s=t(4601),o=t(9275),c=t(9456),m=t(2010),d=t(7059);a.FeedbackForm=class{constructor(y){var w;this.feedbackPayload={messageId:"",selectedOption:"",tabId:"",comment:""},this.onFeedbackSet=b=>{s.MynahUIGlobalEvents.getInstance().dispatch(r.MynahEventNames.FEEDBACK_SET,b)},this.close=()=>{this.feedbackComment.clear(),this.feedbackOptionsWrapper.setValue(c.Config.getInstance().config.feedbackOptions[0].value),this.feedbackPayload={messageId:"",selectedOption:c.Config.getInstance().config.feedbackOptions[0].value,tabId:"",comment:""},this.feedbackFormWrapper.removeClass("mynah-feedback-form-show")},this.show=()=>{this.feedbackFormWrapper.addClass("mynah-feedback-form-show")},this.feedbackPayload={selectedOption:c.Config.getInstance().config.feedbackOptions[0].value,messageId:"",tabId:"",comment:"",...y?.initPayload},s.MynahUIGlobalEvents.getInstance().addListener(r.MynahEventNames.SHOW_FEEDBACK_FORM,b=>{this.feedbackFormWrapper===void 0&&(this.feedbackFormWrapper=n.DomBuilder.getInstance().createPortal(r.MynahPortalNames.FEEDBACK_FORM,{type:"div",attributes:{id:"mynah-feedback-form-wrapper"}},"afterbegin")),this.feedbackFormWrapper.clear(),this.feedbackFormWrapper.update({children:[b.messageId!==void 0?this.feedbackFormContainer:b.customFormData!==void 0?new d.CustomFormWrapper({tabId:b.tabId,chatItem:b.customFormData,title:b.customFormData.title,description:b.customFormData.description,onFormAction:()=>{this.close()},onCloseButtonClick:T=>{(0,s.cancelEvent)(T),this.close()}}).render:""]}),b.messageId!==void 0&&(this.feedbackPayload.messageId=b.messageId),this.feedbackPayload.tabId=b.tabId,setTimeout(()=>{this.show()},5)}),this.feedbackOptionsWrapper=new m.Select({options:c.Config.getInstance().config.feedbackOptions,onChange:b=>{this.feedbackPayload.selectedOption=b},label:c.Config.getInstance().config.texts.feedbackFormOptionsLabel}),this.feedbackComment=new e.FeedbackFormComment({onChange:b=>{this.feedbackPayload.comment=b},initComment:(w=this.feedbackPayload)===null||w===void 0?void 0:w.comment}),this.feedbackSubmitButton=new i.Button({label:c.Config.getInstance().config.texts.submit,onClick:()=>{this.onFeedbackSet(this.feedbackPayload),this.close()}}),this.feedbackFormContainer=n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-feedback-form"],events:{click:s.cancelEvent},children:[{type:"div",classNames:["mynah-feedback-form-header"],children:[{type:"h4",children:[c.Config.getInstance().config.texts.feedbackFormTitle]},new i.Button({primary:!1,onClick:()=>{this.close()},icon:new o.Icon({icon:o.MynahIcons.CANCEL}).render}).render]},this.feedbackOptionsWrapper.render,{type:"span",children:[c.Config.getInstance().config.texts.feedbackFormCommentLabel]},this.feedbackComment.render,{type:"div",classNames:["mynah-feedback-form-buttons-container"],children:[new i.Button({primary:!1,label:c.Config.getInstance().config.texts.cancel,onClick:()=>{this.close()}}).render,this.feedbackSubmitButton.render]}]})}}},4432:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.RadioGroup=void 0;const r=t(4769),n=t(7019),i=t(9275);a.RadioGroup=class{constructor(e){var s,o;this.groupName=(0,n.generateUID)(),this.setValue=c=>{var m,d;(m=this.radioGroupElement.querySelector("[checked]"))===null||m===void 0||m.removeAttribute("checked"),(d=this.radioGroupElement.querySelector(`[id="${this.groupName}_${c}"]`))===null||d===void 0||d.setAttribute("checked","checked")},this.getValue=()=>{var c,m,d;return(d=(m=(c=this.radioGroupElement.querySelector("[checked]"))===null||c===void 0?void 0:c.getAttribute("id"))===null||m===void 0?void 0:m.replace(`${this.groupName}_`,""))!==null&&d!==void 0?d:""},this.setEnabled=c=>{c?(this.radioGroupElement.removeAttribute("disabled"),this.radioGroupElement.querySelectorAll("input").forEach(m=>m.removeAttribute("disabled"))):(this.radioGroupElement.setAttribute("disabled","disabled"),this.radioGroupElement.querySelectorAll("input").forEach(m=>m.setAttribute("disabled","disabled")))},this.radioGroupElement=r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-form-input","no-border",...(s=e.classNames)!==null&&s!==void 0?s:[]],children:(o=e.options)===null||o===void 0?void 0:o.map((c,m)=>({type:"div",classNames:["mynah-form-input-radio-wrapper"],children:[{type:"label",classNames:["mynah-form-input-radio-label"],children:[{type:"input",attributes:{type:"radio",id:`${this.groupName}_${c.value}`,name:this.groupName,value:c.value,...e.value!==void 0&&e.value===c.value||e.optional!==!0&&e.value===void 0&&m===0?{checked:"checked"}:{}},events:{change:d=>{this.setValue(d.currentTarget.value),e.onChange!==void 0&&e.onChange(d.currentTarget.value)}}},{type:"span",classNames:["mynah-form-input-radio-check"],children:[new i.Icon({icon:i.MynahIcons.OK}).render]},{type:"span",children:[c.label]}]}]}))}),this.render=r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-form-input-wrapper"],children:[{type:"span",classNames:["mynah-form-input-label"],children:[...e.label!==void 0?[e.label]:[]]},{type:"div",classNames:["mynah-form-input-container"],...e.attributes!==void 0?{attributes:e.attributes}:{},children:[this.radioGroupElement]}]})}}},2010:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.Select=void 0;const r=t(9456),n=t(4769),i=t(9275);a.Select=class{constructor(e){var s,o,c;this.setValue=m=>{this.selectElement.value=m},this.getValue=()=>this.selectElement.value,this.setEnabled=m=>{m?this.selectElement.removeAttribute("disabled"):this.selectElement.setAttribute("disabled","disabled")},this.selectElement=n.DomBuilder.getInstance().build({type:"select",classNames:["mynah-form-input",...(s=e.classNames)!==null&&s!==void 0?s:[]],events:{change:m=>{e.onChange!==void 0&&e.onChange(m.currentTarget.value)}},children:[...e.optional===!0?[{label:r.Config.getInstance().config.texts.pleaseSelect,value:""}]:[],...(o=e.options)!==null&&o!==void 0?o:[]].map(m=>({type:"option",classNames:m.value===""?["empty-option"]:[],attributes:{value:m.value},children:[m.label]}))}),e.value!==void 0&&(this.selectElement.value=e.value),this.render=n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-form-input-wrapper"],children:[{type:"span",classNames:["mynah-form-input-label"],children:[...e.label!==void 0?[e.label]:[]]},{type:"div",classNames:["mynah-form-input-container"],...e.attributes!==void 0?{attributes:e.attributes}:{},children:[this.selectElement,new i.Icon({icon:(c=e.icon)!==null&&c!==void 0?c:i.MynahIcons.DOWN_OPEN,classNames:["mynah-select-handle"]}).render]}]})}}},6755:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.Stars=void 0;const r=t(4769),n=t(9275);a.Stars=class{constructor(i){var e,s,o;this.setValue=c=>{this.starsContainer.setAttribute("selected-star",c.toString())},this.getValue=()=>{var c;return(c=this.starsContainer.getAttribute("selected-star"))!==null&&c!==void 0?c:""},this.setEnabled=c=>{c?this.render.removeAttribute("disabled"):this.render.setAttribute("disabled","disabled")},this.starsContainer=r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-feedback-form-stars-container"],attributes:{...i.value!==void 0&&{"selected-star":(s=(e=i.value)===null||e===void 0?void 0:e.toString())!==null&&s!==void 0?s:"1"}},children:Array(5).fill(void 0).map((c,m)=>r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-feedback-form-star",...i.value===(m+1).toString()?["selected"]:[]],events:{click:d=>{var y;(y=this.starsContainer.querySelector(".selected"))===null||y===void 0||y.removeClass("selected"),d.currentTarget.addClass("selected"),i.onChange!==void 0&&i.onChange((m+1).toString()),this.setValue(m+1)}},attributes:{star:(m+1).toString()},children:[new n.Icon({icon:n.MynahIcons.STAR}).render]}))}),this.render=r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-form-input-wrapper"],children:[{type:"span",classNames:["mynah-form-input-label"],children:[...i.label!==void 0?[i.label]:[]]},{type:"div",classNames:["mynah-form-input-container"],...i.attributes!==void 0?{attributes:i.attributes}:{},children:[{type:"div",classNames:["mynah-form-input","no-border",...(o=i.classNames)!==null&&o!==void 0?o:[]],children:[this.starsContainer]}]}]})}}},626:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.TextArea=void 0;const r=t(4769);a.TextArea=class{constructor(n){var i,e;this.setValue=s=>{this.inputElement.value=s},this.getValue=()=>this.inputElement.value,this.setEnabled=s=>{s?this.inputElement.removeAttribute("disabled"):this.inputElement.setAttribute("disabled","disabled")},this.inputElement=r.DomBuilder.getInstance().build({type:"textarea",classNames:["mynah-form-input",...(i=n.classNames)!==null&&i!==void 0?i:[]],attributes:n.placeholder!==void 0?{placeholder:n.placeholder}:{},events:{keyup:s=>{n.onChange!==void 0&&n.onChange(s.currentTarget.value)}}}),this.inputElement.value=(e=n.value)!==null&&e!==void 0?e:"",this.render=r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-form-input-wrapper"],children:[{type:"span",classNames:["mynah-form-input-label"],children:[...n.label!==void 0?[n.label]:[]]},{type:"div",classNames:["mynah-form-input-container"],...n.attributes!==void 0?{attributes:n.attributes}:{},children:[this.inputElement]}]})}}},9897:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.TextInput=void 0;const r=t(4769);a.TextInput=class{constructor(n){var i,e,s;this.setValue=o=>{this.inputElement.value=o},this.getValue=()=>this.inputElement.value,this.setEnabled=o=>{o?this.inputElement.removeAttribute("disabled"):this.inputElement.setAttribute("disabled","disabled")},this.inputElement=r.DomBuilder.getInstance().build({type:"input",classNames:["mynah-form-input",...(i=n.classNames)!==null&&i!==void 0?i:[]],attributes:{type:n.numeric===!0?"number":"text",...n.placeholder!==void 0?{placeholder:n.placeholder}:{}},events:{keyup:o=>{n.onChange!==void 0&&n.onChange(o.currentTarget.value)}}}),this.inputElement.value=(s=(e=n.value)===null||e===void 0?void 0:e.toString())!==null&&s!==void 0?s:"",this.render=r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-form-input-wrapper"],children:[{type:"span",classNames:["mynah-form-input-label"],children:[...n.label!==void 0?[n.label]:[]]},{type:"div",classNames:["mynah-form-input-container"],...n.attributes!==void 0?{attributes:n.attributes}:{},children:[this.inputElement]}]})}}},9275:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.Icon=a.MynahIcons=void 0;const r=t(4769),n=t(6364);var i;(function(e){e.MYNAH="mynah",e.MENU="menu",e.MINUS="minus",e.SEARCH="search",e.PLUS="plus",e.CHAT="chat",e.LINK="link",e.DOC="doc",e.EXTERNAL="external",e.CANCEL="cancel",e.CANCEL_CIRCLE="cancel-circle",e.CALENDAR="calendar",e.COMMENT="comment",e.MEGAPHONE="megaphone",e.NOTIFICATION="notification",e.EYE="eye",e.ELLIPSIS="ellipsis",e.OK="ok",e.UP_OPEN="up-open",e.DOWN_OPEN="down-open",e.RIGHT_OPEN="right-open",e.LEFT_OPEN="left-open",e.RESIZE_FULL="resize-full",e.RESIZE_SMALL="resize-small",e.BLOCK="block",e.OK_CIRCLED="ok-circled",e.INFO="info",e.WARNING="warning",e.ERROR="error",e.THUMBS_UP="thumbs-up",e.THUMBS_DOWN="thumbs-down",e.STAR="star",e.LIGHT_BULB="light-bulb",e.ENVELOPE_SEND="envelope-send",e.REFRESH="refresh",e.USER="user",e.PLAY="play",e.PENCIL="pencil",e.PAUSE="pause",e.CODE_BLOCK="code-block",e.COPY="copy",e.CURSOR_INSERT="cursor-insert",e.TEXT_SELECT="text-select",e.REVERT="revert",e.ASTERISK="asterisk"})(i||(a.MynahIcons=i={})),a.Icon=class{constructor(e){n.MynahUIIconImporter.getInstance(),this.render=r.DomBuilder.getInstance().build({type:"i",classNames:["mynah-ui-icon",`mynah-ui-icon-${e.icon}`,...e.classNames!==void 0?e.classNames:[]],children:[{type:"span",attributes:{"aria-hidden":"true"},children:[e.icon]}]})}}},6364:function(l,a,t){"use strict";var r=this&&this.__importDefault||function(G){return G&&G.__esModule?G:{default:G}};Object.defineProperty(a,"__esModule",{value:!0}),a.MynahUIIconImporter=void 0;const n=t(4769),i=t(9275),e=r(t(6541)),s=r(t(7701)),o=r(t(5654)),c=r(t(242)),m=r(t(1033)),d=r(t(3395)),y=r(t(880)),w=r(t(7588)),b=r(t(4743)),T=r(t(6829)),M=r(t(4784)),u=r(t(1925)),v=r(t(5533)),x=r(t(7111)),k=r(t(487)),C=r(t(6283)),I=r(t(2591)),D=r(t(5227)),S=r(t(3522)),j=r(t(5512)),F=r(t(4983)),E=r(t(1140)),z=r(t(5355)),$=r(t(7016)),W=r(t(6147)),ee=r(t(6981)),he=r(t(5957)),se=r(t(8166)),J=r(t(9610)),q=r(t(5430)),oe=r(t(9541)),te=r(t(4365)),ae=r(t(1730)),Y=r(t(9124)),ge=r(t(5548)),Ae=r(t(723)),pe=r(t(3786)),ye=r(t(1783)),Ce=r(t(8728)),ve=r(t(4339)),be=r(t(2666)),ue=r(t(5070)),me=r(t(640)),Be=r(t(9448)),we=r(t(7136));class fe{constructor(){const p={MYNAH:e.default,MENU:s.default,MINUS:o.default,SEARCH:c.default,PLUS:m.default,PENCIL:d.default,CHAT:y.default,LINK:b.default,DOC:T.default,EXTERNAL:M.default,CANCEL:u.default,CANCEL_CIRCLE:v.default,CALENDAR:x.default,COMMENT:w.default,MEGAPHONE:k.default,NOTIFICATION:C.default,EYE:I.default,ELLIPSIS:D.default,OK:S.default,UP_OPEN:j.default,DOWN_OPEN:F.default,RIGHT_OPEN:E.default,LEFT_OPEN:z.default,RESIZE_FULL:$.default,RESIZE_SMALL:W.default,BLOCK:ee.default,OK_CIRCLED:he.default,INFO:se.default,WARNING:J.default,ERROR:q.default,THUMBS_UP:oe.default,THUMBS_DOWN:te.default,STAR:ae.default,LIGHT_BULB:Y.default,ENVELOPE_SEND:ge.default,REFRESH:Ae.default,USER:pe.default,PLAY:ye.default,PAUSE:Ce.default,CODE_BLOCK:ve.default,COPY:be.default,CURSOR_INSERT:ue.default,TEXT_SELECT:me.default,REVERT:Be.default,ASTERISK:we.default};n.DomBuilder.getInstance().createPortal("mynah-ui-icons",{type:"style",attributes:{type:"text/css"},children:[`
      ${Object.keys(i.MynahIcons).map(A=>{const h=i.MynahIcons[A];return`
        .mynah-ui-icon-${h} {
          --mynah-ui-icon-${h}: url(${p[A]});
          -webkit-mask-image: var(--mynah-ui-icon-${h});
          mask-image: var(--mynah-ui-icon-${h});
        }`}).join("")}
      `]},"beforebegin")}}a.MynahUIIconImporter=fe,fe.getInstance=()=>(fe.instance===void 0&&(fe.instance=new fe),fe.instance)},6446:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.Tabs=void 0;const r=t(9456),n=t(4769),i=t(4601),e=t(6508),s=t(1407),o=t(4977),c=t(7853),m=t(9275),d=t(4083),y=t(3392);a.Tabs=class{constructor(w){this.tabIdTitleSubscriptions={},this.tabIdChatItemsSubscriptions={},this.getTabOptionsFromTabStoreData=()=>{const b=e.MynahUITabsStore.getInstance().getAllTabs();return Object.keys(b).map(T=>{var M;return{value:T,label:(M=b[T].store)===null||M===void 0?void 0:M.tabTitle,selected:b[T].isSelected}})},this.getTabsRender=b=>{const T=this.getTabOptionsFromTabStoreData();return T.forEach(M=>{this.assignListener(M.value)}),this.toggleGroup=new y.Toggle({onChange:M=>{e.MynahUITabsStore.getInstance().selectTab(M),this.props.onChange!==void 0&&this.props.onChange(M)},onRemove:(M,u)=>{this.props.onBeforeTabRemove===void 0||this.props.onBeforeTabRemove(M)?e.MynahUITabsStore.getInstance().removeTab(M):this.showCloseTabConfirmationOverLay(u,M)},name:"mynah-main-tabs",options:T,value:b}),[this.toggleGroup.render,new s.Button({classNames:["mynah-toggle-close-button"],additionalEvents:{mouseenter:M=>{e.MynahUITabsStore.getInstance().tabsLength()===r.Config.getInstance().config.maxTabs&&this.showMaxReachedOverLay(M.currentTarget,r.Config.getInstance().config.texts.noMoreTabsTooltip)},mouseleave:()=>{this.hideMaxReachedOverLay()}},onClick:M=>{(0,i.cancelEvent)(M),e.MynahUITabsStore.getInstance().tabsLength()<r.Config.getInstance().config.maxTabs&&e.MynahUITabsStore.getInstance().addTab()},icon:new m.Icon({icon:m.MynahIcons.PLUS}).render,primary:!1}).render]},this.showMaxReachedOverLay=(b,T)=>{this.maxReachedOverlay=new d.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:b,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:d.OverlayVerticalDirection.TO_BOTTOM,horizontalDirection:d.OverlayHorizontalDirection.CENTER,children:[new o.Card({border:!1,classNames:["mynah-nav-tabs-max-reached-overlay"],children:[new c.CardBody({body:T}).render]}).render]})},this.hideMaxReachedOverLay=()=>{this.maxReachedOverlay!==void 0&&(this.maxReachedOverlay.close(),this.maxReachedOverlay=void 0)},this.showCloseTabConfirmationOverLay=(b,T)=>{var M,u,v;this.closeConfirmationOverlay=new d.Overlay({background:!0,closeOnOutsideClick:!0,referenceElement:b,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:d.OverlayVerticalDirection.TO_BOTTOM,horizontalDirection:d.OverlayHorizontalDirection.START_TO_RIGHT,children:[new o.Card({border:!1,classNames:["mynah-nav-tabs-close-confirmation-overlay"],children:[new c.CardBody({body:(M=e.MynahUITabsStore.getInstance().getTabDataStore(T).getValue("tabCloseConfirmationMessage"))!==null&&M!==void 0?M:r.Config.getInstance().config.texts.tabCloseConfirmationMessage}).render,n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-nav-tabs-close-confirmation-buttons-wrapper"],children:[new s.Button({onClick:()=>{this.hideshowCloseTabConfirmationOverLay()},label:(u=e.MynahUITabsStore.getInstance().getTabDataStore(T).getValue("tabCloseConfirmationKeepButton"))!==null&&u!==void 0?u:r.Config.getInstance().config.texts.tabCloseConfirmationKeepButton}).render,new s.Button({onClick:()=>{e.MynahUITabsStore.getInstance().removeTab(T),this.hideshowCloseTabConfirmationOverLay()},classNames:["mynah-nav-tabs-close-confirmation-close-button"],label:(v=e.MynahUITabsStore.getInstance().getTabDataStore(T).getValue("tabCloseConfirmationCloseButton"))!==null&&v!==void 0?v:r.Config.getInstance().config.texts.tabCloseConfirmationCloseButton}).render]})]}).render]})},this.hideshowCloseTabConfirmationOverLay=()=>{this.closeConfirmationOverlay!==void 0&&(this.closeConfirmationOverlay.close(),this.closeConfirmationOverlay=void 0)},this.assignListener=b=>{var T,M;this.tabIdTitleSubscriptions[b]=(T=e.MynahUITabsStore.getInstance().addListenerToDataStore(b,"tabTitle",u=>{this.toggleGroup.updateOptionTitle(b,u)}))!==null&&T!==void 0?T:"",this.tabIdChatItemsSubscriptions[b]=(M=e.MynahUITabsStore.getInstance().addListenerToDataStore(b,"chatItems",()=>{this.toggleGroup.updateOptionIndicator(b,!0)}))!==null&&M!==void 0?M:""},this.removeListenerAssignments=b=>{e.MynahUITabsStore.getInstance().removeListenerFromDataStore(b,this.tabIdTitleSubscriptions[b],"tabTitle"),e.MynahUITabsStore.getInstance().removeListenerFromDataStore(b,this.tabIdChatItemsSubscriptions[b],"chatItems")},this.props=w,this.render=n.DomBuilder.getInstance().build({type:"div",persistent:!0,classNames:["mynah-nav-tabs-wrapper"],events:{dblclick:b=>{(0,i.cancelEvent)(b),e.MynahUITabsStore.getInstance().tabsLength()<r.Config.getInstance().config.maxTabs&&e.MynahUITabsStore.getInstance().addTab()}},children:this.getTabsRender(e.MynahUITabsStore.getInstance().getSelectedTabId())}),e.MynahUITabsStore.getInstance().addListener("add",(b,T)=>{var M;this.assignListener(b),this.toggleGroup.addOption({value:b,label:(M=T?.store)===null||M===void 0?void 0:M.tabTitle,selected:T?.isSelected}),this.render.setAttribute("selected-tab",b)}),e.MynahUITabsStore.getInstance().addListener("remove",(b,T)=>{this.removeListenerAssignments(b),this.toggleGroup.removeOption(b),T!==void 0&&this.toggleGroup.snapToOption(e.MynahUITabsStore.getInstance().getSelectedTabId()),this.render.setAttribute("selected-tab",e.MynahUITabsStore.getInstance().getSelectedTabId())}),e.MynahUITabsStore.getInstance().addListener("selectedTabChange",b=>{this.render.setAttribute("selected-tab",b),this.toggleGroup.setValue(b)})}}},7067:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.Notification=void 0;const r=t(4769),n=t(4601),i=t(7609),e=t(9275),s=t(4083);a.Notification=class{constructor(o){var c;this.getNextCalculatedTop=()=>{const m=(0,r.DS)(".mynah-notification");if(m.length>0){const d=m[m.length-1].getBoundingClientRect();return d.top+d.height+s.OVERLAY_MARGIN}return 0},this.getChildren=m=>m instanceof Array?m:[m],this.duration=o.duration!==void 0?o.duration:5e3,this.type=(c=o.type)!==null&&c!==void 0?c:i.NotificationType.INFO,this.props=o}notify(){var o,c,m;this.notificationOverlay=new s.Overlay({referencePoint:{left:Math.max((o=document.documentElement.clientWidth)!==null&&o!==void 0?o:0,(c=window.innerWidth)!==null&&c!==void 0?c:0),top:this.getNextCalculatedTop()},dimOutside:!1,closeOnOutsideClick:!1,horizontalDirection:s.OverlayHorizontalDirection.TO_LEFT,verticalDirection:s.OverlayVerticalDirection.TO_BOTTOM,onClose:this.props.onNotificationHide,children:[{type:"div",classNames:["mynah-notification",this.props.onNotificationClick!==void 0?"mynah-notification-clickable":""],events:{click:d=>{var y;(0,n.cancelEvent)(d),this.props.onNotificationClick!==void 0&&(this.props.onNotificationClick(),(y=this.notificationOverlay)===null||y===void 0||y.close())}},children:[new e.Icon({icon:this.type.toString()}).render,{type:"div",classNames:["mynah-notification-container"],children:[{type:"h3",classNames:["mynah-notification-title"],children:[(m=this.props.title)!==null&&m!==void 0?m:""]},{type:"div",classNames:["mynah-notification-content"],children:this.getChildren(this.props.content)}]}]}]}),this.duration!==-1&&setTimeout(()=>{var d;(d=this.notificationOverlay)===null||d===void 0||d.close()},this.duration)}}},4083:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.Overlay=a.OverlayVerticalDirection=a.OverlayHorizontalDirection=a.OVERLAY_MARGIN=void 0;const r=t(4769),n=t(7019),i=t(7609);var e,s;a.OVERLAY_MARGIN=8,function(o){o.TO_LEFT="horizontal-direction-to-left",o.END_TO_LEFT="horizontal-direction-from-end-to-left",o.TO_RIGHT="horizontal-direction-to-right",o.START_TO_RIGHT="horizontal-direction-from-start-to-right",o.CENTER="horizontal-direction-at-center"}(e||(a.OverlayHorizontalDirection=e={})),function(o){o.TO_BOTTOM="vertical-direction-to-bottom",o.START_TO_BOTTOM="vertical-direction-from-start-to-bottom",o.TO_TOP="vertical-direction-to-top",o.END_TO_TOP="vertical-direction-from-end-to-top",o.CENTER="vertical-direction-at-center"}(s||(a.OverlayVerticalDirection=s={})),a.Overlay=class{constructor(o){var c,m,d,y,w,b;this.guid=(0,n.generateUID)(),this.close=()=>{this.render.removeClass("mynah-overlay-open"),setTimeout(()=>{this.render.remove()},250),this.onClose!==void 0&&this.onClose()},this.windowBlurHandler=()=>{this.close(),window.removeEventListener("blur",this.windowBlurHandler.bind(this)),window.removeEventListener("resize",this.windowBlurHandler.bind(this))},this.getCalculatedLeft=(E,z,$)=>{const W=z!==void 0?z.getBoundingClientRect():$!==void 0?{left:$.left,width:0}:{left:0,width:0};switch(E.toString()){case e.TO_RIGHT:return W.left+W.width+a.OVERLAY_MARGIN;case e.START_TO_RIGHT:return W.left;case e.TO_LEFT:return W.left-a.OVERLAY_MARGIN;case e.END_TO_LEFT:return W.left+W.width;case e.CENTER:return W.left+W.width/2;default:return 0}},this.getCalculatedWidth=E=>E!==void 0?E.getBoundingClientRect().width:0,this.getCalculatedTop=(E,z,$)=>{const W=z!==void 0?z.getBoundingClientRect():$!==void 0?{top:$.top,height:0}:{top:0,height:0};switch(E.toString()){case s.TO_BOTTOM:return W.top+W.height+a.OVERLAY_MARGIN;case s.START_TO_BOTTOM:return W.top;case s.TO_TOP:return W.top-a.OVERLAY_MARGIN;case s.END_TO_TOP:return W.top+W.height;case s.CENTER:return W.top+W.height/2;default:return W.top}},this.updateContent=E=>{this.innerContainer.update({children:E})},this.toggleHidden=E=>{this.render.hidden=E};const T=(c=o.horizontalDirection)!==null&&c!==void 0?c:e.TO_RIGHT,M=(m=o.verticalDirection)!==null&&m!==void 0?m:s.START_TO_BOTTOM;this.onClose=o.onClose;const u=o.dimOutside!==!1,v=o.closeOnOutsideClick!==!1,x=this.getCalculatedTop(M,o.referenceElement,o.referencePoint),k=this.getCalculatedLeft(T,o.referenceElement,o.referencePoint),C=o.stretchWidth===!0?this.getCalculatedWidth(o.referenceElement):0;this.innerContainer=r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-overlay-inner-container"],children:o.children}),this.container=r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-overlay-container",T,M,o.background!==!1?"background":""],attributes:{style:`top: ${x}px; left: ${k}px; ${C!==0?`width: ${C}px;`:""}`},children:[this.innerContainer]}),o.removeOtherOverlays===!0&&r.DomBuilder.getInstance().removeAllPortals(i.MynahPortalNames.OVERLAY),this.render=r.DomBuilder.getInstance().createPortal(`${i.MynahPortalNames.OVERLAY}-${this.guid}`,{type:"div",attributes:{id:`mynah-overlay-${this.guid}`},classNames:["mynah-overlay",...u?["mynah-overlay-dim-outside"]:[],...v?["mynah-overlay-close-on-outside-click"]:[]],events:{click:v?this.close:()=>{}},children:[this.container]},"beforeend");const I=this.container.getBoundingClientRect(),D=Math.max((d=document.documentElement.clientHeight)!==null&&d!==void 0?d:0,(y=window.innerHeight)!==null&&y!==void 0?y:0),S=Math.max((w=document.documentElement.clientWidth)!==null&&w!==void 0?w:0,(b=window.innerWidth)!==null&&b!==void 0?b:0),j=T===e.CENTER?I.width/2:I.width,F=M===s.CENTER?I.height/2:I.height;T!==e.TO_LEFT&&T!==e.END_TO_LEFT&&j+a.OVERLAY_MARGIN+k>S?T===e.CENTER?this.container.style.left=k-.5*(I.width+2*a.OVERLAY_MARGIN+k-S)+"px":this.container.style.left=k-(I.width+a.OVERLAY_MARGIN+k-S)+"px":k+j-I.width<a.OVERLAY_MARGIN&&(this.container.style.left=k+(a.OVERLAY_MARGIN-k+(j-I.width))+"px"),M!==s.TO_TOP&&M!==s.END_TO_TOP&&F+a.OVERLAY_MARGIN+x>D?this.container.style.top=x-(F+a.OVERLAY_MARGIN+x-D)+"px":x+F-I.height<a.OVERLAY_MARGIN&&(this.container.style.top=x+(a.OVERLAY_MARGIN-x+(F-I.height))+"px"),setTimeout(()=>{this.render.addClass("mynah-overlay-open"),v&&(window.addEventListener("blur",this.windowBlurHandler.bind(this)),window.addEventListener("resize",this.windowBlurHandler.bind(this)))},10)}}},3304:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.SourceLinkBody=void 0;const r=t(7853);a.SourceLinkBody=class{constructor(n){var i;this.props=n,this.render=new r.CardBody({highlightRangeWithTooltip:n.highlightRangeWithTooltip,body:(i=this.props.suggestion.body)!==null&&i!==void 0?i:"",children:this.props.children}).render}}},8948:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.SourceLinkHeader=void 0;const r=t(160),n=t(4769),i=t(827),e=t(9275),s=t(4083),o=t(4862);a.SourceLinkHeader=class{constructor(c){this.getSourceMetaBlock=d=>{const y=[];return d!=null&&Object.keys(d).forEach(w=>{const b=d[w];b.isAccepted===!0&&y.push({type:"span",classNames:["mynah-title-meta-block-item","approved-answer"],children:[new e.Icon({icon:e.MynahIcons.OK}).render]}),b.lastActivityDate!==void 0&&y.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new e.Icon({icon:e.MynahIcons.CALENDAR}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[(0,r.getTimeDiff)(new Date().getTime()-b.lastActivityDate,2)]}]}),b.answerCount!==void 0&&y.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new e.Icon({icon:e.MynahIcons.CHAT}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[b.answerCount.toString()]}]}),b.stars!==void 0&&y.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new e.Icon({icon:e.MynahIcons.STAR}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[`${b.stars.toString()} contributors`]}]}),b.forks!==void 0&&y.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new e.Icon({icon:e.MynahIcons.DOWN_OPEN}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[`${b.forks.toString()} forks`]}]}),b.score!==void 0&&y.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new e.Icon({icon:e.MynahIcons.THUMBS_UP}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[`${b.score.toString()}`]}]})}),{type:"span",classNames:["mynah-title-meta-block"],children:y}},this.showLinkPreview=(d,y)=>{y.body!==void 0&&(clearTimeout(this.sourceLinkPreviewTimeout),this.sourceLinkPreviewTimeout=setTimeout(()=>{const w=d.target;this.sourceLinkPreview=new s.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:w,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:s.OverlayVerticalDirection.TO_TOP,horizontalDirection:s.OverlayHorizontalDirection.START_TO_RIGHT,children:[new o.SourceLinkCard({sourceLink:y}).render]})},500))},this.hideLinkPreview=()=>{var d;clearTimeout(this.sourceLinkPreviewTimeout),this.sourceLinkPreview!==null&&((d=this.sourceLinkPreview)===null||d===void 0||d.close(),this.sourceLinkPreview=null)};const m=c.sourceLink.url.replace(/^(http|https):\/\//,"").split("/");m[m.length-1].trim()===""&&m.pop(),this.render=n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-source-link-header"],...c.showCardOnHover===!0?{events:{mouseenter:d=>{this.showLinkPreview(d,c.sourceLink)},mouseleave:this.hideLinkPreview}}:{},attributes:{origin:(0,i.getOrigin)(c.sourceLink.url)},children:[{type:"span",classNames:["mynah-source-thumbnail"]},{type:"div",classNames:["mynah-source-link-title-wrapper"],children:[{type:"a",classNames:["mynah-source-link-title"],events:{...c.onClick!==void 0&&{click:c.onClick}},attributes:{href:c.sourceLink.url,target:"_blank"},children:[c.sourceLink.title,{type:"div",classNames:["mynah-source-link-expand-icon"],children:[new e.Icon({icon:e.MynahIcons.EXTERNAL}).render]}]},{type:"a",classNames:["mynah-source-link-url"],events:{...c.onClick!==void 0&&{click:c.onClick}},attributes:{href:c.sourceLink.url,target:"_blank"},innerHTML:m.map(d=>`<span>${d}</span>`).join("")},...c.sourceLink.metadata!=null?[this.getSourceMetaBlock(c.sourceLink.metadata)]:[]]}]})}}},4862:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.SourceLinkCard=void 0;const r=t(4977),n=t(3304),i=t(8948);a.SourceLinkCard=class{constructor(e){this.sourceLink=e.sourceLink,this.render=new r.Card({border:!1,background:!1,children:[new i.SourceLinkHeader({sourceLink:this.sourceLink}).render,...this.sourceLink.body!==void 0?[new n.SourceLinkBody({suggestion:this.sourceLink}).render]:[]]}).render}}},8990:function(l,a,t){"use strict";var r=this&&this.__importDefault||function(T){return T&&T.__esModule?T:{default:T}};Object.defineProperty(a,"__esModule",{value:!0}),a.SyntaxHighlighter=a.ellipsis=a.highlighters=void 0;const n=t(4769),i=t(5660);t(4060),t(9883),t(2247),t(8080),t(235),t(6456),t(1233),t(4833),t(3047),t(7706),t(8674),t(47),t(5584),t(6551),t(7013),t(3229),t(1637),t(9208),t(4297),t(7239),t(9578),t(4006),t(8759),t(6488);const e=t(1407),s=t(7067),o=t(9275),c=t(4601),m=t(9456),d=t(7853),y=r(t(5573)),w=r(t(5937)),b=["markup","xml","css","clike","javascript","typescript","jsx","tsx","lua","java","json","markdown","mongodb","c","bash","csharp","objectivec","python","regex","scala","scss","less"];a.highlighters={start:{markup:'<span class="amzn-mynah-search-result-highlight">',textReplacement:"__mynahhighlighterstart__"},end:{markup:"</span>",textReplacement:"__mynahhighlighterend__"}},a.ellipsis={start:{markup:'<span class="amzn-mynah-search-result-ellipsis">',textReplacement:"__mynahcodeellipsisstart__"},end:{markup:"</span>",textReplacement:"__mynahcodeellipsisend__"}},a.SyntaxHighlighter=class{constructor(T){this.getSelectedCodeContextMenu=()=>{var x,k;return{code:(k=(x=document.getSelection())===null||x===void 0?void 0:x.toString())!==null&&k!==void 0?k:"",type:"selection"}},this.getSelectedCode=()=>{var x,k;return{code:(k=(x=this.render.querySelector("pre"))===null||x===void 0?void 0:x.innerText)!==null&&k!==void 0?k:"",type:"block"}},this.copyToClipboard=(x,k,C)=>{document.hasFocus()||window.focus(),navigator.clipboard.writeText(x).then(()=>{this.onCopiedToClipboard!==void 0&&this.onCopiedToClipboard(k,x),C!==void 0&&new s.Notification({content:C,title:m.Config.getInstance().config.texts.copyToClipboard,duration:2e3}).notify()}).catch(I=>{})},this.onCopiedToClipboard=T.onCopiedToClipboard,this.onInsertToCursorPosition=T.onInsertToCursorPosition;let M=(0,w.default)(T.codeStringWithMarkup);T.keepHighlights===!0&&(M=M.replace(new RegExp(a.highlighters.start.markup,"g"),a.highlighters.start.textReplacement).replace(new RegExp(a.highlighters.end.markup,"g"),a.highlighters.end.textReplacement).replace(new RegExp(a.ellipsis.start.markup,"g"),a.ellipsis.start.textReplacement).replace(new RegExp(a.ellipsis.end.markup,"g"),a.ellipsis.end.textReplacement));let u=(0,y.default)(M);u=u.replace(new RegExp((0,y.default)(d.highlightersWithTooltip.start.markupStart),"g"),d.highlightersWithTooltip.start.markupStart).replace(new RegExp((0,y.default)(d.highlightersWithTooltip.start.markupEnd),"g"),d.highlightersWithTooltip.start.markupEnd).replace(new RegExp((0,y.default)(d.highlightersWithTooltip.end.markup),"g"),d.highlightersWithTooltip.end.markup);const v=n.DomBuilder.getInstance().build({type:"pre",classNames:["keep-markup",`language-${T.language!==void 0&&b.includes(T.language)?T.language:"clike"}`,...T.showLineNumbers===!0?["line-numbers"]:[]],children:[{type:"code",innerHTML:u}],events:{copy:x=>{(0,c.cancelEvent)(x);const k=this.getSelectedCodeContextMenu();k.code.length>0&&this.copyToClipboard(k.code,k.type)}}});(0,i.highlightElement)(v),T.keepHighlights===!0&&(v.innerHTML=v.innerHTML.replace(new RegExp(a.highlighters.start.textReplacement,"g"),a.highlighters.start.markup).replace(new RegExp(a.highlighters.end.textReplacement,"g"),a.highlighters.end.markup).replace(new RegExp(a.ellipsis.start.textReplacement,"g"),a.ellipsis.start.markup).replace(new RegExp(a.ellipsis.end.textReplacement,"g"),a.ellipsis.end.markup)),this.render=n.DomBuilder.getInstance().build({type:"div",classNames:["mynah-syntax-highlighter",...T.block!==!0?["mynah-inline-code"]:[]],children:[...T.showCopyOptions===!0?[{type:"div",classNames:["mynah-syntax-highlighter-copy-buttons"],children:[...T.language!==void 0?[{type:"span",classNames:["mynah-syntax-highlighter-language"],children:[T.language]}]:[],new e.Button({icon:new o.Icon({icon:o.MynahIcons.CURSOR_INSERT}).render,label:m.Config.getInstance().config.texts.insertAtCursorLabel,attributes:{title:m.Config.getInstance().config.texts.insertAtCursorLabel},primary:!1,onClick:x=>{(0,c.cancelEvent)(x);const k=this.getSelectedCode();this.onInsertToCursorPosition!==void 0&&this.onInsertToCursorPosition(k.type,k.code)},additionalEvents:{mousedown:c.cancelEvent}}).render,new e.Button({icon:new o.Icon({icon:o.MynahIcons.COPY}).render,label:m.Config.getInstance().config.texts.copy,attributes:{title:m.Config.getInstance().config.texts.copy},primary:!1,onClick:x=>{(0,c.cancelEvent)(x);const k=this.getSelectedCode();this.copyToClipboard(k.code,k.type)},additionalEvents:{mousedown:c.cancelEvent}}).render]}]:[],v,...T.showLineNumbers===!0?[{type:"span",classNames:["line-numbers-rows"],children:v.innerHTML.split(/\n/).slice(0,-1).map((x,k)=>{var C;return{type:"span",innerHTML:String(k+((C=T.startingLineNumber)!==null&&C!==void 0?C:1))}})}]:[]]})}}},3392:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.Toggle=void 0;const r=t(4769),n=t(4601),i=t(1407),e=t(9275),s=t(4083);class o{constructor(m){var d,y;this.props=m,this.render=r.DomBuilder.getInstance().build({type:"span",attributes:{key:`${this.props.name}-${this.props.value}`,title:(d=this.props.label)!==null&&d!==void 0?d:""},events:{...this.props.disabled===!0&&this.props.disabledTooltip!==void 0?{mouseenter:()=>{this.disabledTooltipTimer=setTimeout(()=>{var w;this.disabledTooltip=new s.Overlay({children:[{type:"span",classNames:["mynah-toggle-disabled-tooltip-container"],children:[(w=this.props.disabledTooltip)!==null&&w!==void 0?w:""]}],closeOnOutsideClick:!1,dimOutside:!1,referenceElement:this.render,horizontalDirection:s.OverlayHorizontalDirection.CENTER,verticalDirection:s.OverlayVerticalDirection.TO_TOP})},500)},mouseleave:()=>{clearTimeout(this.disabledTooltipTimer),this.disabledTooltip!==void 0&&(this.disabledTooltip.close(),setTimeout(()=>{this.disabledTooltip=void 0},50))}}:{}},children:[{type:"input",classNames:["mynah-toggle-option"],attributes:{type:"radio",id:`${this.props.name}-${this.props.value}`,value:this.props.value,name:this.props.name,...this.props.selected===!0?{checked:"checked"}:{},...this.props.disabled===!0?{disabled:"disabled"}:{}},events:{change:()=>{this.props.onChange!=null&&this.props.onChange(this.props.value)}}},{type:"label",classNames:["mynah-toggle-option-label"],attributes:{for:`${this.props.name}-${this.props.value}`},events:{dblclick:w=>{(0,n.cancelEvent)(w)},auxclick:()=>{this.props.onRemove!==void 0&&this.props.onRemove(this.props.value,this.render)}},children:[this.props.icon!==void 0?new e.Icon({icon:m.icon}).render:"",{type:"span",classNames:["mynah-toggle-option-label-text"],children:[(y=this.props.label)!==null&&y!==void 0?y:""]},this.props.onRemove!==void 0?new i.Button({classNames:["mynah-toggle-close-button"],onClick:()=>{this.props.onRemove!==void 0&&this.props.onRemove(this.props.value,this.render)},icon:new e.Icon({icon:e.MynahIcons.CANCEL}).render,primary:!1}).render:""]}]})}}a.Toggle=class{constructor(c){this.transformScroll=m=>{m.deltaY!==0&&(this.render.scrollLeft+=m.deltaY)},this.getChildren=m=>[...this.props.options.map(d=>new o({...d,selected:m===d.value,name:this.props.name,onChange:this.updateSelectionRender,onRemove:this.props.onRemove}).render)],this.updateSelectionRender=m=>{this.props.onChange!==void 0&&this.props.onChange(m)},this.setValue=m=>{if(m!==this.getValue()){this.currentValue=m;const d=this.render.querySelector(`#${this.props.name}-${m}`);d!==void 0&&(d.click(),d.checked=!0,d.nextSibling.classList.remove("indication"))}},this.addOption=m=>{this.props.options.push(m),this.render.appendChild(new o({...m,name:this.props.name,onChange:this.updateSelectionRender,onRemove:this.props.onRemove}).render),m.selected===!0&&(this.setValue(m.value),this.snapToOption(m.value))},this.removeOption=m=>{this.props.options=this.props.options.filter(y=>y.value!==m);const d=this.render.querySelector(`span[key="${this.props.name}-${m}"]`);d!==void 0&&d?.remove()},this.updateOptionTitle=(m,d)=>{this.props.options=this.props.options.filter(w=>w.value!==m);const y=this.render.querySelector(`span[key="${this.props.name}-${m}"] .mynah-toggle-option-label-text`);y!==void 0&&(y.innerHTML=d)},this.updateOptionIndicator=(m,d)=>{this.props.options=this.props.options.filter(w=>w.value!==m);const y=this.render.querySelector(`label[for="${this.props.name}-${m}"]`);y!==null&&(d&&m!==this.getValue()?y.classList.add("indication"):y.classList.remove("indication"))},this.snapToOption=m=>{const d=this.render.querySelector(`#${this.props.name}-${m}`);d!==void 0&&(this.render.scrollLeft=(d?.parentNode).offsetLeft)},this.getValue=()=>this.currentValue,this.props={direction:"horizontal",...c},this.currentValue=this.props.value,this.render=r.DomBuilder.getInstance().build({type:"div",classNames:["mynah-toggle-container","mynah-toggle-type-tabs",`mynah-toggle-direction-${this.props.direction}`],attributes:{disabled:c.disabled===!0?"disabled":""},children:this.getChildren(c.value),events:{wheel:{handler:this.transformScroll,options:{passive:!0}}}})}}},9456:(l,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.Config=void 0;const t={maxTabs:1e3,maxUserInput:4096,showPromptField:!0,autoFocus:!0,feedbackOptions:[{value:"inaccurate-response",label:"Inaccurate response"},{value:"harmful-content",label:"Harmful content"},{value:"overlap",label:"Overlaps with existing content"},{value:"incorrect-syntax",label:"Incorrect syntax"},{value:"buggy-code",label:"Buggy code"},{value:"low-quality",label:"Low quality"},{value:"other",label:"Other"}],texts:{mainTitle:"AWS Q",copy:"Copy",insertAtCursorLabel:"Insert at cursor",feedbackFormTitle:"Report an issue",feedbackFormOptionsLabel:"What type of issue would you like to report?",feedbackFormCommentLabel:"Description of issue (optional):",feedbackThanks:"Thanks!",feedbackReportButtonLabel:"Report an issue",codeSuggestions:"Code Suggestions",files:"file(s)",changes:"Changes",clickFileToViewDiff:"Click on a file to view diff.",showMore:"Show more",save:"Save",cancel:"Cancel",submit:"Submit",pleaseSelect:"Please select...",stopGenerating:"Stop generating",copyToClipboard:"Copied to clipboard",noMoreTabsTooltip:"You've reached maximum number of tabs you can simultaneously use.",codeSuggestionWithReferenceTitle:"Some suggestions contain code with references.",spinnerText:"Amazon Q is generating your answer...",tabCloseConfirmationMessage:"Are you sure want to close the tab? Closing the tab would mean that your running job will stop.",tabCloseConfirmationCloseButton:"Close tab",tabCloseConfirmationKeepButton:"Keep tab"}};class r{constructor(i){this.config={...t,...i,texts:{...t.texts,...i?.texts}}}static getInstance(i){return r.instance===void 0&&(r.instance=new r(i)),r.instance}}a.Config=r},160:(l,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.getTimeDiff=void 0,a.getTimeDiff=(t,r,n)=>{let i=Math.abs(t)/1e3;const e=Math.floor(i/31104e3);i-=31104e3*e;const s=Math.floor(i/2592e3);i-=2592e3*s;const o=Math.floor(i/604800);i-=604800*o;const c=Math.floor(i/86400);i-=86400*c;const m=Math.floor(i/3600)%24;i-=3600*m;const d=Math.floor(i/60)%60;i-=60*d;const y=[];return e===0||r!==void 0&&typeof r=="object"&&r.years===!1||y.push(`${e}yr`),s===0||r!==void 0&&typeof r=="object"&&r.months===!1||y.push(`${s}mo`),o===0||r!==void 0&&typeof r=="object"&&r.weeks===!1||y.push(`${o}we`),c===0||r!==void 0&&typeof r=="object"&&r.days===!1||y.push(`${c}da`),m===0||r!==void 0&&typeof r=="object"&&r.hours===!1||y.push(`${m}hr`),d===0||r!==void 0&&typeof r=="object"&&r.minutes===!1||y.push(`${d}min`),e+s+o+c+m+d===0?"1min":(r!==void 0&&typeof r=="number"&&y.splice(r,y.length),y.join(n??" "))}},4769:(l,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.htmlDecode=a.DomBuilder=a.DS=void 0,a.DS=document.querySelectorAll.bind(document);const t={type:"div",attributes:{},classNames:[],events:{},children:[],innerHTML:void 0,persistent:!1};class r{constructor(i){this.portals={},this.addClass=function(e){var s;return e!==""&&(this.classList.add(e),((s=this.builderObject.classNames)===null||s===void 0?void 0:s.indexOf(e))===-1&&(this.builderObject.classNames=[...this.builderObject.classNames,e])),this},this.removeClass=function(e){return this.classList.remove(e),this.builderObject.classNames!==void 0&&this.builderObject.classNames.includes(e)&&this.builderObject.classNames.splice(this.builderObject.classNames.indexOf(e),1),this},this.toggleClass=function(e){return this.classList.contains(e)?this.removeClass(e):this.addClass(e),this},this.hasClass=function(e){return this.classList.contains(e)},this.insertChild=function(e,s){return s&&(s instanceof Array?s.forEach(o=>{o instanceof Element?this.insertAdjacentElement(e,o):typeof o=="string"&&this.insertAdjacentText(e,o)}):s instanceof Element?this.insertAdjacentElement(e,s):typeof s=="string"&&this.insertAdjacentText(e,s)),this},this.clearChildren=function(e){return Array.from(this.childNodes).forEach(s=>{!e&&s.builderObject&&s.builderObject.persistent===!0||s.remove()}),this},this.extendDomFunctionality=function(e){const s=e;return s.addClass=this.addClass.bind(s),s.removeClass=this.removeClass.bind(s),s.toggleClass=this.toggleClass.bind(s),s.hasClass=this.hasClass.bind(s),s.insertChild=this.insertChild.bind(s),s.clear=this.clearChildren.bind(s),s},this.build=e=>{var s,o,c,m;const d={...t,...e},y=document.createElement(d.type);return y.classList.add(...((s=d.classNames)===null||s===void 0?void 0:s.filter(w=>w!==""))||[]),Object.keys((o=d.events)!==null&&o!==void 0?o:{}).forEach(w=>{var b;d?.events!==void 0&&(typeof d?.events[w]=="function"?y.addEventListener(w,d.events[w]):typeof d?.events[w]=="object"&&y.addEventListener(w,d.events[w].handler,(b=d.events[w].options)!==null&&b!==void 0?b:void 0))}),Object.keys((c=d.attributes)!==null&&c!==void 0?c:{}).forEach(w=>y.setAttribute(w,d.attributes!==void 0?d.attributes[w]:"")),typeof d.innerHTML=="string"?y.innerHTML=d.innerHTML:d.children!==void 0&&((m=d.children)===null||m===void 0?void 0:m.length)>0&&this.insertChild.apply(y,["beforeend",[...d.children.map(w=>typeof w=="string"||w instanceof HTMLElement?w:this.build(w))]]),y.builderObject=d,y.update=w=>this.update(y,w),this.extendDomFunctionality(y),y},this.update=function(e,s){var o,c;return e.builderObject?(s.classNames!==void 0&&(e.classList.remove(...e.builderObject.classNames),e.classList.add(...s.classNames.filter(m=>m!==""))),Object.keys((o=s.events)!==null&&o!==void 0?o:{}).forEach(m=>{var d;e.builderObject.events!==void 0&&e.builderObject.events[m]&&e.removeEventListener(m,(d=e.builderObject.events[m].handler)!==null&&d!==void 0?d:e.builderObject.events[m]),s.events!==void 0&&s.events[m]!==void 0&&e.addEventListener(m,s.events[m])}),Object.keys((c=s.attributes)!==null&&c!==void 0?c:{}).forEach(m=>{s.attributes!==void 0&&s.attributes[m]===void 0?e.removeAttribute(m):s.attributes!==void 0&&e.setAttribute(m,s.attributes[m])}),typeof s.innerHTML=="string"?e.innerHTML=s.innerHTML:s.children!==void 0&&s.children.length>0&&(e.clear(),e.insertChild("beforeend",s.children)),e.builderObject={...t,...s}):console.warn("element was not created with dom builder"),e},this.createPortal=(e,s,o)=>{const c=this.build(s);return this.root.insertChild(o||"beforeend",c),this.portals[e]=c,c},this.getPortal=e=>this.portals[e],this.removePortal=e=>{var s;return(s=this.portals[e])===null||s===void 0?void 0:s.remove()},this.removeAllPortals=e=>{Object.keys(this.portals).forEach(s=>{s.match(e)!==null&&(this.portals[s].remove(),delete this.portals[s])})},this.root=(0,a.DS)(i)[0],this.extendDomFunctionality(this.root)}static getInstance(i){return r.instance||(r.instance=new r(i!==void 0?i:"body")),r.instance}}a.DomBuilder=r,a.htmlDecode=n=>{var i;const e=document.createElement("textarea");return e.innerHTML=n,e.childNodes.length===0?"":(i=e.childNodes[0].nodeValue)!==null&&i!==void 0?i:n}},4601:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.MynahUIGlobalEvents=a.cancelEvent=void 0;const r=t(7019);a.cancelEvent=i=>(i.preventDefault(),i.stopPropagation(),i.stopImmediatePropagation(),!1);class n{constructor(){this.addListener=(e,s)=>{const o=(0,r.generateUID)();return this.listeners[e]===void 0&&(this.listeners[e]={}),this.listeners[e][o]=s,o},this.removeListener=(e,s)=>{var o;((o=this.listeners[e])===null||o===void 0?void 0:o[s])!==void 0&&delete this.listeners[e][s]},this.dispatch=(e,s)=>{this.listeners[e]!==void 0&&Object.keys(this.listeners[e]).forEach(o=>{this.listeners[e][o](s)})},this.listeners={...this.listeners}}}a.MynahUIGlobalEvents=n,n.getInstance=()=>(n.instance===void 0&&(n.instance=new n),n.instance)},7831:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.fileListToTree=void 0;const r=t(9456);a.fileListToTree=(i,e=[],s,o,c)=>[...n(i,!1),...n(e,!0)].reduce((m,{filePath:d,deleted:y})=>{let w=m;for(let b=0;b<d.length;b++){const T=d[b];if(b===d.length-1){const M=d.join("/");w.children.push({type:"file",name:T,filePath:M,deleted:y,actions:s!==void 0?s[M]:void 0,details:o!==void 0?o[M]:void 0});break}{const M=w.children.find(({name:u})=>u===T);if(M!=null)w=M;else{const u={name:T,type:"folder",children:[]};w.children.push(u),w=u}}}return m},{name:c??r.Config.getInstance().config.texts.changes,type:"folder",children:[]});const n=(i,e)=>i.map(s=>({filePath:s.split("/").filter(o=>o!==void 0&&o!=="."),deleted:e}))},7019:(l,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.generateUID=void 0,a.generateUID=()=>{const t=46656*Math.random()|0,r=46656*Math.random()|0;return`000${t.toString(36)}`.slice(-3)+`000${r.toString(36)}`.slice(-3)}},4511:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.MynahUIDataStore=a.EmptyMynahUIDataModel=void 0;const r=t(7609),n=t(9456),i=t(4601),e=t(7019),s=["string","number","boolean"];class o{constructor(m){this.data={tabTitle:n.Config.getInstance().config.texts.mainTitle,loadingChat:!1,tabCloseConfirmationCloseButton:null,tabCloseConfirmationKeepButton:null,tabCloseConfirmationMessage:null,cancelButtonWhenLoading:!0,showChatAvatars:!1,quickActionCommands:[],promptInputPlaceholder:"",promptInputInfo:"",promptInputStickyCard:null,promptInputDisabledState:!1,chatItems:[],selectedCodeSnippet:"",...m}}}a.EmptyMynahUIDataModel=o,a.MynahUIDataStore=class{constructor(c,m){this.store=new o().data,this.defaults=null,this.setDefaults=d=>{this.defaults=d},this.getDefaults=()=>this.defaults,this.getStore=()=>this.store,this.subscribe=(d,y)=>{const w=(0,e.generateUID)();return this.subscriptions[d][w]=y,w},this.unsubscribe=(d,y)=>{var w;((w=this.subscriptions[d])===null||w===void 0?void 0:w[y])!==void 0&&delete this.subscriptions[d][y]},this.getValue=d=>structuredClone(this.store[d]),this.getDefaultValue=d=>new o(this.defaults).data[d],this.updateStore=(d,y)=>{y!==!0&&Object.keys(d).forEach(w=>{Object.keys(this.subscriptions[w]).forEach(b=>{s.includes(typeof d[w])&&d[w]===this.store[w]||this.subscriptions[w][b](d[w],this.store[w])})}),this.store=Object.assign(structuredClone(this.store),d)},this.resetStore=()=>{this.updateStore(new o(structuredClone(this.defaults)).data),i.MynahUIGlobalEvents.getInstance().dispatch(r.MynahEventNames.RESET_STORE,{tabId:this.tabId})},this.tabId=c,this.store=Object.assign(this.store,m),this.subscriptions=Object.create({}),Object.keys(this.store).forEach(d=>{Object.assign(this.subscriptions,{[d]:{}})})}}},6508:(l,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.MynahUITabsStore=a.EmptyMynahUITabsStoreModel=void 0;const r=t(9456),n=t(7019),i=t(4511);a.EmptyMynahUITabsStoreModel=class{constructor(){const s=(0,n.generateUID)();this.data={[s]:{isSelected:!0,store:{}}}}};class e{constructor(o,c){this.subscriptions={add:{},remove:{},update:{},selectedTabChange:{}},this.tabDefaults={},this.tabsStore={},this.tabsDataStore={},this.deselectAllTabs=()=>{Object.keys(this.tabsStore).forEach(m=>{this.tabsStore[m].isSelected=!1})},this.addTab=m=>{var d;if(Object.keys(this.tabsStore).length<r.Config.getInstance().config.maxTabs){const y=(0,n.generateUID)();return this.deselectAllTabs(),this.tabsStore[y]={...this.tabDefaults,...m,isSelected:!0},this.tabsDataStore[y]=new i.MynahUIDataStore(y,(d=this.tabsStore[y].store)!==null&&d!==void 0?d:{}),this.informSubscribers("add",y,this.tabsStore[y]),this.informSubscribers("selectedTabChange",y,this.tabsStore[y]),y}},this.removeTab=m=>{var d;const y=(d=this.tabsStore[m].isSelected)!==null&&d!==void 0&&d;let w;if(delete this.tabsStore[m],this.tabsDataStore[m].resetStore(),delete this.tabsDataStore[m],y){const b=Object.keys(this.tabsStore);b.length>0&&(this.deselectAllTabs(),this.selectTab(b[b.length-1]),w=this.tabsStore[this.getSelectedTabId()])}return this.informSubscribers("remove",m,w),m},this.selectTab=m=>{this.deselectAllTabs(),this.tabsStore[m].isSelected=!0,this.informSubscribers("selectedTabChange",m,this.tabsStore[m])},this.updateTab=(m,d,y)=>{this.tabsStore[m]!==void 0&&(d?.isSelected===!0&&this.getSelectedTabId()!==m&&(this.deselectAllTabs(),this.informSubscribers("selectedTabChange",m)),this.tabsStore[m]={...this.tabsStore[m],...d},d?.store!==void 0&&(this.tabsDataStore[m]===void 0&&(this.tabsDataStore[m]=new i.MynahUIDataStore(m)),this.tabsDataStore[m].updateStore(d?.store)),y!==!0&&this.informSubscribers("update",m,this.tabsStore[m]))},this.addListener=(m,d)=>{const y=(0,n.generateUID)();return this.subscriptions[m][y]=d,y},this.addListenerToDataStore=(m,d,y)=>this.tabsDataStore[m]!==void 0?this.tabsDataStore[m].subscribe(d,y):null,this.removeListenerFromDataStore=(m,d,y)=>{this.tabsDataStore[m]!==void 0&&this.tabsDataStore[m].unsubscribe(y,d)},this.removeListener=(m,d)=>{this.subscriptions[m][d]!==void 0&&delete this.subscriptions[m][d]},this.informSubscribers=(m,d,y)=>{Object.keys(this.subscriptions[m]).forEach(w=>{this.subscriptions[m][w](d,y)})},this.getTab=m=>{var d;return(d=this.tabsStore[m])!==null&&d!==void 0?d:null},this.getAllTabs=()=>{const m=structuredClone(this.tabsStore);return Object.keys(m).forEach(d=>{var y;m[d].store=(y=structuredClone(this.getTabDataStore(d).getStore()))!==null&&y!==void 0?y:{}}),m},this.getTabDataStore=m=>this.tabsDataStore[m],this.getSelectedTabId=()=>{var m;return(m=Object.keys(this.tabsStore).find(d=>this.tabsStore[d].isSelected===!0))!==null&&m!==void 0?m:""},this.removeAllTabs=()=>{Object.keys(this.tabsStore).forEach(m=>{this.removeTab(m)})},this.tabsLength=()=>Object.keys(this.tabsStore).length,this.tabsStore=Object.assign(this.tabsStore,o),c!=null&&(this.tabDefaults=c),o!=null&&Object.keys(o).length>0&&Object.keys(o).forEach(m=>{var d;this.tabsDataStore[m]=new i.MynahUIDataStore(m,(d=o[m].store)!==null&&d!==void 0?d:{})})}}a.MynahUITabsStore=e,e.getInstance=(s,o)=>(e.instance===void 0&&(e.instance=new e(s,o)),e.instance)},827:(l,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.getOrigin=void 0,a.getOrigin=t=>{let r="";try{r=new URL(t).origin}catch{r="unknown"}return r}},7609:(l,a)=>{"use strict";var t,r,n,i,e,s,o;Object.defineProperty(a,"__esModule",{value:!0}),a.NotificationType=a.EngagementType=a.RelevancyVoteType=a.KeyMap=a.ChatItemType=a.MynahPortalNames=a.MynahEventNames=void 0,function(c){c.RESET_STORE="resetStore",c.FEEDBACK_SET="feedbackSet",c.CARD_VOTE="cardVote",c.SOURCE_LINK_CLICK="sourceLinkClick",c.INFO_LINK_CLICK="infoLinkClick",c.LINK_CLICK="linkClick",c.CHAT_ITEM_ENGAGEMENT="chatItemEngagement",c.COPY_CODE_TO_CLIPBOARD="copyCodeToClipboard",c.INSERT_CODE_TO_CURSOR_POSITION="insertCodeToCursorPosition",c.CHAT_PROMPT="chatPrompt",c.CHAT_ITEM_ADD="chatItemAdd",c.FOLLOW_UP_CLICKED="followUpClicked",c.BODY_ACTION_CLICKED="bodyActionClicked",c.SHOW_MORE_WEB_RESULTS_CLICK="showMoreWebResultsClick",c.SHOW_FEEDBACK_FORM="showFeedbackForm",c.OPEN_DIFF="openDiff",c.FILE_ACTION_CLICK="fileActionClick",c.CUSTOM_FORM_ACTION_CLICK="customFormActionClick",c.ADD_CODE_SNIPPET="addCodeSnippet",c.REMOVE_CODE_SNIPPET="removeCodeSnippet"}(t||(a.MynahEventNames=t={})),function(c){c.WRAPPER="wrapper",c.SIDE_NAV="sideNav",c.OVERLAY="overlay",c.FEEDBACK_FORM="feedbackForm"}(r||(a.MynahPortalNames=r={})),function(c){c.PROMPT="prompt",c.SYSTEM_PROMPT="system-prompt",c.AI_PROMPT="ai-prompt",c.ANSWER="answer",c.ANSWER_STREAM="answer-stream",c.ANSWER_PART="answer-part",c.CODE_RESULT="code-result"}(n||(a.ChatItemType=n={})),function(c){c.ESCAPE="Escape",c.ENTER="Enter",c.BACKSPACE="Backspace",c.SPACE=" ",c.DELETE="Delete",c.ARROW_UP="ArrowUp",c.ARROW_DOWN="ArrowDown",c.ARROW_LEFT="ArrowLeft",c.ARROW_RIGHT="ArrowRight",c.PAGE_UP="PageUp",c.PAGED_OWN="PageDown",c.HOME="Home",c.END="End",c.META="Meta",c.TAB="Tab",c.SHIFT="Shift",c.CONTROL="Control",c.ALT="Alt",c.SLASH="/",c.BACK_SLASH="\\"}(i||(a.KeyMap=i={})),function(c){c.UP="upvote",c.DOWN="downvote"}(e||(a.RelevancyVoteType=e={})),function(c){c.INTERACTION="interaction",c.TIME="timespend"}(s||(a.EngagementType=s={})),function(c){c.INFO="info",c.SUCCESS="ok-circled",c.WARNING="warning",c.ERROR="error"}(o||(a.NotificationType=o={}))},5937:l=>{"use strict";l.exports=function(a){return String(a).replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#x3A;/g,":").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}},970:(l,a)=>{var me,Le,we,je;"use strict";function t(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!1,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!1,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}function r(G){a.defaults=G}a.defaults={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!1,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!1,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const n=/[&<>"']/,i=new RegExp(n.source,"g"),e=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,s=new RegExp(e.source,"g"),o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},c=G=>o[G];function m(G,p){if(p){if(n.test(G))return G.replace(i,c)}else if(e.test(G))return G.replace(s,c);return G}const d=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function y(G){return G.replace(d,(p,A)=>(A=A.toLowerCase())==="colon"?":":A.charAt(0)==="#"?A.charAt(1)==="x"?String.fromCharCode(parseInt(A.substring(2),16)):String.fromCharCode(+A.substring(1)):"")}const w=/(^|[^\[])\^/g;function b(G,p){G=typeof G=="string"?G:G.source,p=p||"";const A={replace:(h,g)=>(g=(g=typeof g=="object"&&"source"in g?g.source:g).replace(w,"$1"),G=G.replace(h,g),A),getRegex:()=>new RegExp(G,p)};return A}const T=/[^\w:]/g,M=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function u(G,p,A){if(G){let h;try{h=decodeURIComponent(y(A)).replace(T,"").toLowerCase()}catch{return null}if(h.indexOf("javascript:")===0||h.indexOf("vbscript:")===0||h.indexOf("data:")===0)return null}p&&!M.test(A)&&(A=function(h,g){v[" "+h]||(x.test(h)?v[" "+h]=h+"/":v[" "+h]=S(h,"/",!0));const f=(h=v[" "+h]).indexOf(":")===-1;return g.substring(0,2)==="//"?f?g:h.replace(k,"$1")+g:g.charAt(0)==="/"?f?g:h.replace(C,"$1")+g:h+g}(p,A));try{A=encodeURI(A).replace(/%25/g,"%")}catch{return null}return A}const v={},x=/^[^:]+:\/*[^/]*$/,k=/^([^:]+:)[\s\S]*$/,C=/^([^:]+:\/*[^/]*)[\s\S]*$/,I={exec:()=>null};function D(G,p){const A=G.replace(/\|/g,(g,f,L)=>{let N=!1,R=f;for(;--R>=0&&L[R]==="\\";)N=!N;return N?"|":" |"}).split(/ \|/);let h=0;if(A[0].trim()||A.shift(),A.length>0&&!A[A.length-1].trim()&&A.pop(),p)if(A.length>p)A.splice(p);else for(;A.length<p;)A.push("");for(;h<A.length;h++)A[h]=A[h].trim().replace(/\\\|/g,"|");return A}function S(G,p,A){const h=G.length;if(h===0)return"";let g=0;for(;g<h;){const f=G.charAt(h-g-1);if(f!==p||A){if(f===p||!A)break;g++}else g++}return G.slice(0,h-g)}function j(G,p,A,h){const g=p.href,f=p.title?m(p.title):null,L=G[1].replace(/\\([\[\]])/g,"$1");if(G[0].charAt(0)!=="!"){h.state.inLink=!0;const N={type:"link",raw:A,href:g,title:f,text:L,tokens:h.inlineTokens(L)};return h.state.inLink=!1,N}return{type:"image",raw:A,href:g,title:f,text:m(L)}}class F{constructor(p){K(this,"options");K(this,"rules");K(this,"lexer");this.options=p||a.defaults}space(p){const A=this.rules.block.newline.exec(p);if(A&&A[0].length>0)return{type:"space",raw:A[0]}}code(p){const A=this.rules.block.code.exec(p);if(A){const h=A[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:A[0],codeBlockStyle:"indented",text:this.options.pedantic?h:S(h,`
`)}}}fences(p){const A=this.rules.block.fences.exec(p);if(A){const h=A[0],g=function(f,L){const N=f.match(/^(\s+)(?:```)/);if(N===null)return L;const R=N[1];return L.split(`
`).map(O=>{const _=O.match(/^\s+/);if(_===null)return O;const[H]=_;return H.length>=R.length?O.slice(R.length):O}).join(`
`)}(h,A[3]||"");return{type:"code",raw:h,lang:A[2]?A[2].trim().replace(this.rules.inline._escapes,"$1"):A[2],text:g}}}heading(p){const A=this.rules.block.heading.exec(p);if(A){let h=A[2].trim();if(/#$/.test(h)){const g=S(h,"#");this.options.pedantic?h=g.trim():g&&!/ $/.test(g)||(h=g.trim())}return{type:"heading",raw:A[0],depth:A[1].length,text:h,tokens:this.lexer.inline(h)}}}hr(p){const A=this.rules.block.hr.exec(p);if(A)return{type:"hr",raw:A[0]}}blockquote(p){const A=this.rules.block.blockquote.exec(p);if(A){const h=A[0].replace(/^ *>[ \t]?/gm,""),g=this.lexer.state.top;this.lexer.state.top=!0;const f=this.lexer.blockTokens(h);return this.lexer.state.top=g,{type:"blockquote",raw:A[0],tokens:f,text:h}}}list(p){let A=this.rules.block.list.exec(p);if(A){let h=A[1].trim();const g=h.length>1,f={type:"list",raw:"",ordered:g,start:g?+h.slice(0,-1):"",loose:!1,items:[]};h=g?`\\d{1,9}\\${h.slice(-1)}`:`\\${h}`,this.options.pedantic&&(h=g?h:"[*+-]");const L=new RegExp(`^( {0,3}${h})((?:[	 ][^\\n]*)?(?:\\n|$))`);let N="",R="",O=!1;for(;p;){let _=!1;if(!(A=L.exec(p))||this.rules.block.hr.test(p))break;N=A[0],p=p.substring(N.length);let H=A[2].split(`
`,1)[0].replace(/^\t+/,xe=>" ".repeat(3*xe.length)),Z=p.split(`
`,1)[0],X=0;this.options.pedantic?(X=2,R=H.trimLeft()):(X=A[2].search(/[^ ]/),X=X>4?1:X,R=H.slice(X),X+=A[1].length);let re=!1;if(!H&&/^ *$/.test(Z)&&(N+=Z+`
`,p=p.substring(Z.length+1),_=!0),!_){const xe=new RegExp(`^ {0,${Math.min(3,X-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Ne=new RegExp(`^ {0,${Math.min(3,X-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Se=new RegExp(`^ {0,${Math.min(3,X-1)}}(?:\`\`\`|~~~)`),Ee=new RegExp(`^ {0,${Math.min(3,X-1)}}#`);for(;p;){const ke=p.split(`
`,1)[0];if(Z=ke,this.options.pedantic&&(Z=Z.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Se.test(Z)||Ee.test(Z)||xe.test(Z)||Ne.test(p))break;if(Z.search(/[^ ]/)>=X||!Z.trim())R+=`
`+Z.slice(X);else{if(re||H.search(/[^ ]/)>=4||Se.test(H)||Ee.test(H)||Ne.test(H))break;R+=`
`+Z}re||Z.trim()||(re=!0),N+=ke+`
`,p=p.substring(ke.length+1),H=Z.slice(X)}}f.loose||(O?f.loose=!0:/\n *\n *$/.test(N)&&(O=!0));let de,le=null;this.options.gfm&&(le=/^\[[ xX]\] /.exec(R),le&&(de=le[0]!=="[ ] ",R=R.replace(/^\[[ xX]\] +/,""))),f.items.push({type:"list_item",raw:N,task:!!le,checked:de,loose:!1,text:R,tokens:[]}),f.raw+=N}f.items[f.items.length-1].raw=N.trimRight(),f.items[f.items.length-1].text=R.trimRight(),f.raw=f.raw.trimRight();for(let _=0;_<f.items.length;_++)if(this.lexer.state.top=!1,f.items[_].tokens=this.lexer.blockTokens(f.items[_].text,[]),!f.loose){const H=f.items[_].tokens.filter(X=>X.type==="space"),Z=H.length>0&&H.some(X=>/\n.*\n/.test(X.raw));f.loose=Z}if(f.loose)for(let _=0;_<f.items.length;_++)f.items[_].loose=!0;return f}}html(p){const A=this.rules.block.html.exec(p);if(A){const h={type:"html",block:!0,raw:A[0],pre:!this.options.sanitizer&&(A[1]==="pre"||A[1]==="script"||A[1]==="style"),text:A[0]};if(this.options.sanitize){const g=this.options.sanitizer?this.options.sanitizer(A[0]):m(A[0]),f=h;f.type="paragraph",f.text=g,f.tokens=this.lexer.inline(g)}return h}}def(p){const A=this.rules.block.def.exec(p);if(A){const h=A[1].toLowerCase().replace(/\s+/g," "),g=A[2]?A[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",f=A[3]?A[3].substring(1,A[3].length-1).replace(this.rules.inline._escapes,"$1"):A[3];return{type:"def",tag:h,raw:A[0],href:g,title:f}}}table(p){const A=this.rules.block.table.exec(p);if(A){const h={type:"table",raw:A[0],header:D(A[1]).map(g=>({text:g,tokens:[]})),align:A[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:A[3]&&A[3].trim()?A[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(h.header.length===h.align.length){let g,f,L,N,R=h.align.length;for(g=0;g<R;g++){const O=h.align[g];O&&(/^ *-+: *$/.test(O)?h.align[g]="right":/^ *:-+: *$/.test(O)?h.align[g]="center":/^ *:-+ *$/.test(O)?h.align[g]="left":h.align[g]=null)}for(R=h.rows.length,g=0;g<R;g++)h.rows[g]=D(h.rows[g],h.header.length).map(O=>({text:O,tokens:[]}));for(R=h.header.length,f=0;f<R;f++)h.header[f].tokens=this.lexer.inline(h.header[f].text);for(R=h.rows.length,f=0;f<R;f++)for(N=h.rows[f],L=0;L<N.length;L++)N[L].tokens=this.lexer.inline(N[L].text);return h}}}lheading(p){const A=this.rules.block.lheading.exec(p);if(A)return{type:"heading",raw:A[0],depth:A[2].charAt(0)==="="?1:2,text:A[1],tokens:this.lexer.inline(A[1])}}paragraph(p){const A=this.rules.block.paragraph.exec(p);if(A){const h=A[1].charAt(A[1].length-1)===`
`?A[1].slice(0,-1):A[1];return{type:"paragraph",raw:A[0],text:h,tokens:this.lexer.inline(h)}}}text(p){const A=this.rules.block.text.exec(p);if(A)return{type:"text",raw:A[0],text:A[0],tokens:this.lexer.inline(A[0])}}escape(p){const A=this.rules.inline.escape.exec(p);if(A)return{type:"escape",raw:A[0],text:m(A[1])}}tag(p){const A=this.rules.inline.tag.exec(p);if(A)return!this.lexer.state.inLink&&/^<a /i.test(A[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(A[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(A[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(A[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:A[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(A[0]):m(A[0]):A[0]}}link(p){const A=this.rules.inline.link.exec(p);if(A){const h=A[2].trim();if(!this.options.pedantic&&/^</.test(h)){if(!/>$/.test(h))return;const L=S(h.slice(0,-1),"\\");if((h.length-L.length)%2==0)return}else{const L=function(N,R){if(N.indexOf(R[1])===-1)return-1;let O=0;for(let _=0;_<N.length;_++)if(N[_]==="\\")_++;else if(N[_]===R[0])O++;else if(N[_]===R[1]&&(O--,O<0))return _;return-1}(A[2],"()");if(L>-1){const N=(A[0].indexOf("!")===0?5:4)+A[1].length+L;A[2]=A[2].substring(0,L),A[0]=A[0].substring(0,N).trim(),A[3]=""}}let g=A[2],f="";if(this.options.pedantic){const L=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(g);L&&(g=L[1],f=L[3])}else f=A[3]?A[3].slice(1,-1):"";return g=g.trim(),/^</.test(g)&&(g=this.options.pedantic&&!/>$/.test(h)?g.slice(1):g.slice(1,-1)),j(A,{href:g&&g.replace(this.rules.inline._escapes,"$1"),title:f&&f.replace(this.rules.inline._escapes,"$1")},A[0],this.lexer)}}reflink(p,A){let h;if((h=this.rules.inline.reflink.exec(p))||(h=this.rules.inline.nolink.exec(p))){let g=(h[2]||h[1]).replace(/\s+/g," ");if(g=A[g.toLowerCase()],!g){const f=h[0].charAt(0);return{type:"text",raw:f,text:f}}return j(h,g,h[0],this.lexer)}}emStrong(p,A,h=""){let g=this.rules.inline.emStrong.lDelim.exec(p);if(g&&(!g[3]||!h.match(/[\p{L}\p{N}]/u))&&(!g[1]&&!g[2]||!h||this.rules.inline.punctuation.exec(h))){const f=[...g[0]].length-1;let L,N,R=f,O=0;const _=g[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(_.lastIndex=0,A=A.slice(-1*p.length+f);(g=_.exec(A))!=null;){if(L=g[1]||g[2]||g[3]||g[4]||g[5]||g[6],!L)continue;if(N=[...L].length,g[3]||g[4]){R+=N;continue}if((g[5]||g[6])&&f%3&&!((f+N)%3)){O+=N;continue}if(R-=N,R>0)continue;N=Math.min(N,N+R+O);const H=[...p].slice(0,f+g.index+N+1).join("");if(Math.min(f,N)%2){const X=H.slice(1,-1);return{type:"em",raw:H,text:X,tokens:this.lexer.inlineTokens(X)}}const Z=H.slice(2,-2);return{type:"strong",raw:H,text:Z,tokens:this.lexer.inlineTokens(Z)}}}}codespan(p){const A=this.rules.inline.code.exec(p);if(A){let h=A[2].replace(/\n/g," ");const g=/[^ ]/.test(h),f=/^ /.test(h)&&/ $/.test(h);return g&&f&&(h=h.substring(1,h.length-1)),h=m(h,!0),{type:"codespan",raw:A[0],text:h}}}br(p){const A=this.rules.inline.br.exec(p);if(A)return{type:"br",raw:A[0]}}del(p){const A=this.rules.inline.del.exec(p);if(A)return{type:"del",raw:A[0],text:A[2],tokens:this.lexer.inlineTokens(A[2])}}autolink(p,A){const h=this.rules.inline.autolink.exec(p);if(h){let g,f;return h[2]==="@"?(g=m(this.options.mangle?A(h[1]):h[1]),f="mailto:"+g):(g=m(h[1]),f=g),{type:"link",raw:h[0],text:g,href:f,tokens:[{type:"text",raw:g,text:g}]}}}url(p,A){let h;if(h=this.rules.inline.url.exec(p)){let g,f;if(h[2]==="@")g=m(this.options.mangle?A(h[0]):h[0]),f="mailto:"+g;else{let L;do L=h[0],h[0]=this.rules.inline._backpedal.exec(h[0])[0];while(L!==h[0]);g=m(h[0]),f=h[1]==="www."?"http://"+h[0]:h[0]}return{type:"link",raw:h[0],text:g,href:f,tokens:[{type:"text",raw:g,text:g}]}}}inlineText(p,A){const h=this.rules.inline.text.exec(p);if(h){let g;return g=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(h[0]):m(h[0]):h[0]:m(this.options.smartypants?A(h[0]):h[0]),{type:"text",raw:h[0],text:g}}}}const E={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:I,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};E.def=b(E.def).replace("label",E._label).replace("title",E._title).getRegex(),E.bullet=/(?:[*+-]|\d{1,9}[.)])/,E.listItemStart=b(/^( *)(bull) */).replace("bull",E.bullet).getRegex(),E.list=b(E.list).replace(/bull/g,E.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+E.def.source+")").getRegex(),E._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",E._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,E.html=b(E.html,"i").replace("comment",E._comment).replace("tag",E._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),E.lheading=b(E.lheading).replace(/bull/g,E.bullet).getRegex(),E.paragraph=b(E._paragraph).replace("hr",E.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",E._tag).getRegex(),E.blockquote=b(E.blockquote).replace("paragraph",E.paragraph).getRegex(),E.normal={...E},E.gfm={...E.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},E.gfm.table=b(E.gfm.table).replace("hr",E.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",E._tag).getRegex(),E.gfm.paragraph=b(E._paragraph).replace("hr",E.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",E.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",E._tag).getRegex(),E.pedantic={...E.normal,html:b(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",E._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:I,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:b(E.normal._paragraph).replace("hr",E.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",E.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const z={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:I,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:I,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};function $(G){return G.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function W(G){let p="";for(let A=0;A<G.length;A++)p+="&#"+(Math.random()>.5?"x"+G.charCodeAt(A).toString(16):G.charCodeAt(A).toString())+";";return p}z._punctuation="\\p{P}$+<=>`^|~",z.punctuation=b(z.punctuation,"u").replace(/punctuation/g,z._punctuation).getRegex(),z.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,z.anyPunctuation=/\\[punct]/g,z._escapes=/\\([punct])/g,z._comment=b(E._comment).replace("(?:-->|$)","-->").getRegex(),z.emStrong.lDelim=b(z.emStrong.lDelim,"u").replace(/punct/g,z._punctuation).getRegex(),z.emStrong.rDelimAst=b(z.emStrong.rDelimAst,"gu").replace(/punct/g,z._punctuation).getRegex(),z.emStrong.rDelimUnd=b(z.emStrong.rDelimUnd,"gu").replace(/punct/g,z._punctuation).getRegex(),z.anyPunctuation=b(z.anyPunctuation,"gu").replace(/punct/g,z._punctuation).getRegex(),z._escapes=b(z._escapes,"gu").replace(/punct/g,z._punctuation).getRegex(),z._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,z._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,z.autolink=b(z.autolink).replace("scheme",z._scheme).replace("email",z._email).getRegex(),z._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,z.tag=b(z.tag).replace("comment",z._comment).replace("attribute",z._attribute).getRegex(),z._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,z._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,z._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,z.link=b(z.link).replace("label",z._label).replace("href",z._href).replace("title",z._title).getRegex(),z.reflink=b(z.reflink).replace("label",z._label).replace("ref",E._label).getRegex(),z.nolink=b(z.nolink).replace("ref",E._label).getRegex(),z.reflinkSearch=b(z.reflinkSearch,"g").replace("reflink",z.reflink).replace("nolink",z.nolink).getRegex(),z.normal={...z},z.pedantic={...z.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:b(/^!?\[(label)\]\((.*?)\)/).replace("label",z._label).getRegex(),reflink:b(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",z._label).getRegex()},z.gfm={...z.normal,escape:b(z.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},z.gfm.url=b(z.gfm.url,"i").replace("email",z.gfm._extended_email).getRegex(),z.breaks={...z.gfm,br:b(z.br).replace("{2,}","*").getRegex(),text:b(z.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class ee{constructor(p){K(this,"tokens");K(this,"options");K(this,"state");K(this,"tokenizer");K(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=p||a.defaults,this.options.tokenizer=this.options.tokenizer||new F,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const A={block:E.normal,inline:z.normal};this.options.pedantic?(A.block=E.pedantic,A.inline=z.pedantic):this.options.gfm&&(A.block=E.gfm,this.options.breaks?A.inline=z.breaks:A.inline=z.gfm),this.tokenizer.rules=A}static get rules(){return{block:E,inline:z}}static lex(p,A){return new ee(A).lex(p)}static lexInline(p,A){return new ee(A).inlineTokens(p)}lex(p){let A;for(p=p.replace(/\r\n|\r/g,`
`),this.blockTokens(p,this.tokens);A=this.inlineQueue.shift();)this.inlineTokens(A.src,A.tokens);return this.tokens}blockTokens(p,A=[]){let h,g,f,L;for(p=this.options.pedantic?p.replace(/\t/g,"    ").replace(/^ +$/gm,""):p.replace(/^( *)(\t+)/gm,(N,R,O)=>R+"    ".repeat(O.length));p;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(N=>!!(h=N.call({lexer:this},p,A))&&(p=p.substring(h.raw.length),A.push(h),!0))))if(h=this.tokenizer.space(p))p=p.substring(h.raw.length),h.raw.length===1&&A.length>0?A[A.length-1].raw+=`
`:A.push(h);else if(h=this.tokenizer.code(p))p=p.substring(h.raw.length),g=A[A.length-1],!g||g.type!=="paragraph"&&g.type!=="text"?A.push(h):(g.raw+=`
`+h.raw,g.text+=`
`+h.text,this.inlineQueue[this.inlineQueue.length-1].src=g.text);else if(h=this.tokenizer.fences(p))p=p.substring(h.raw.length),A.push(h);else if(h=this.tokenizer.heading(p))p=p.substring(h.raw.length),A.push(h);else if(h=this.tokenizer.hr(p))p=p.substring(h.raw.length),A.push(h);else if(h=this.tokenizer.blockquote(p))p=p.substring(h.raw.length),A.push(h);else if(h=this.tokenizer.list(p))p=p.substring(h.raw.length),A.push(h);else if(h=this.tokenizer.html(p))p=p.substring(h.raw.length),A.push(h);else if(h=this.tokenizer.def(p))p=p.substring(h.raw.length),g=A[A.length-1],!g||g.type!=="paragraph"&&g.type!=="text"?this.tokens.links[h.tag]||(this.tokens.links[h.tag]={href:h.href,title:h.title}):(g.raw+=`
`+h.raw,g.text+=`
`+h.raw,this.inlineQueue[this.inlineQueue.length-1].src=g.text);else if(h=this.tokenizer.table(p))p=p.substring(h.raw.length),A.push(h);else if(h=this.tokenizer.lheading(p))p=p.substring(h.raw.length),A.push(h);else{if(f=p,this.options.extensions&&this.options.extensions.startBlock){let N=1/0;const R=p.slice(1);let O;this.options.extensions.startBlock.forEach(_=>{O=_.call({lexer:this},R),typeof O=="number"&&O>=0&&(N=Math.min(N,O))}),N<1/0&&N>=0&&(f=p.substring(0,N+1))}if(this.state.top&&(h=this.tokenizer.paragraph(f)))g=A[A.length-1],L&&g.type==="paragraph"?(g.raw+=`
`+h.raw,g.text+=`
`+h.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=g.text):A.push(h),L=f.length!==p.length,p=p.substring(h.raw.length);else if(h=this.tokenizer.text(p))p=p.substring(h.raw.length),g=A[A.length-1],g&&g.type==="text"?(g.raw+=`
`+h.raw,g.text+=`
`+h.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=g.text):A.push(h);else if(p){const N="Infinite loop on byte: "+p.charCodeAt(0);if(this.options.silent){console.error(N);break}throw new Error(N)}}return this.state.top=!0,A}inline(p,A=[]){return this.inlineQueue.push({src:p,tokens:A}),A}inlineTokens(p,A=[]){let h,g,f,L,N,R,O=p;if(this.tokens.links){const _=Object.keys(this.tokens.links);if(_.length>0)for(;(L=this.tokenizer.rules.inline.reflinkSearch.exec(O))!=null;)_.includes(L[0].slice(L[0].lastIndexOf("[")+1,-1))&&(O=O.slice(0,L.index)+"["+"a".repeat(L[0].length-2)+"]"+O.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(L=this.tokenizer.rules.inline.blockSkip.exec(O))!=null;)O=O.slice(0,L.index)+"["+"a".repeat(L[0].length-2)+"]"+O.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(L=this.tokenizer.rules.inline.anyPunctuation.exec(O))!=null;)O=O.slice(0,L.index)+"++"+O.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;p;)if(N||(R=""),N=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(_=>!!(h=_.call({lexer:this},p,A))&&(p=p.substring(h.raw.length),A.push(h),!0))))if(h=this.tokenizer.escape(p))p=p.substring(h.raw.length),A.push(h);else if(h=this.tokenizer.tag(p))p=p.substring(h.raw.length),g=A[A.length-1],g&&h.type==="text"&&g.type==="text"?(g.raw+=h.raw,g.text+=h.text):A.push(h);else if(h=this.tokenizer.link(p))p=p.substring(h.raw.length),A.push(h);else if(h=this.tokenizer.reflink(p,this.tokens.links))p=p.substring(h.raw.length),g=A[A.length-1],g&&h.type==="text"&&g.type==="text"?(g.raw+=h.raw,g.text+=h.text):A.push(h);else if(h=this.tokenizer.emStrong(p,O,R))p=p.substring(h.raw.length),A.push(h);else if(h=this.tokenizer.codespan(p))p=p.substring(h.raw.length),A.push(h);else if(h=this.tokenizer.br(p))p=p.substring(h.raw.length),A.push(h);else if(h=this.tokenizer.del(p))p=p.substring(h.raw.length),A.push(h);else if(h=this.tokenizer.autolink(p,W))p=p.substring(h.raw.length),A.push(h);else if(this.state.inLink||!(h=this.tokenizer.url(p,W))){if(f=p,this.options.extensions&&this.options.extensions.startInline){let _=1/0;const H=p.slice(1);let Z;this.options.extensions.startInline.forEach(X=>{Z=X.call({lexer:this},H),typeof Z=="number"&&Z>=0&&(_=Math.min(_,Z))}),_<1/0&&_>=0&&(f=p.substring(0,_+1))}if(h=this.tokenizer.inlineText(f,$))p=p.substring(h.raw.length),h.raw.slice(-1)!=="_"&&(R=h.raw.slice(-1)),N=!0,g=A[A.length-1],g&&g.type==="text"?(g.raw+=h.raw,g.text+=h.text):A.push(h);else if(p){const _="Infinite loop on byte: "+p.charCodeAt(0);if(this.options.silent){console.error(_);break}throw new Error(_)}}else p=p.substring(h.raw.length),A.push(h);return A}}class he{constructor(p){K(this,"options");this.options=p||a.defaults}code(p,A,h){const g=(A||"").match(/^\S*/)?.[0];if(this.options.highlight){const f=this.options.highlight(p,g);f!=null&&f!==p&&(h=!0,p=f)}return p=p.replace(/\n$/,"")+`
`,g?'<pre><code class="'+this.options.langPrefix+m(g)+'">'+(h?p:m(p,!0))+`</code></pre>
`:"<pre><code>"+(h?p:m(p,!0))+`</code></pre>
`}blockquote(p){return`<blockquote>
${p}</blockquote>
`}html(p,A){return p}heading(p,A,h,g){return this.options.headerIds?`<h${A} id="${this.options.headerPrefix+g.slug(h)}">${p}</h${A}>
`:`<h${A}>${p}</h${A}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(p,A,h){const g=A?"ol":"ul";return"<"+g+(A&&h!==1?' start="'+h+'"':"")+`>
`+p+"</"+g+`>
`}listitem(p,A,h){return`<li>${p}</li>
`}checkbox(p){return"<input "+(p?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(p){return`<p>${p}</p>
`}table(p,A){return A&&(A=`<tbody>${A}</tbody>`),`<table>
<thead>
`+p+`</thead>
`+A+`</table>
`}tablerow(p){return`<tr>
${p}</tr>
`}tablecell(p,A){const h=A.header?"th":"td";return(A.align?`<${h} align="${A.align}">`:`<${h}>`)+p+`</${h}>
`}strong(p){return`<strong>${p}</strong>`}em(p){return`<em>${p}</em>`}codespan(p){return`<code>${p}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(p){return`<del>${p}</del>`}link(p,A,h){const g=u(this.options.sanitize,this.options.baseUrl,p);if(g===null)return h;let f='<a href="'+(p=g)+'"';return A&&(f+=' title="'+A+'"'),f+=">"+h+"</a>",f}image(p,A,h){const g=u(this.options.sanitize,this.options.baseUrl,p);if(g===null)return h;let f=`<img src="${p=g}" alt="${h}"`;return A&&(f+=` title="${A}"`),f+=this.options.xhtml?"/>":">",f}text(p){return p}}class se{strong(p){return p}em(p){return p}codespan(p){return p}del(p){return p}html(p){return p}text(p){return p}link(p,A,h){return""+h}image(p,A,h){return""+h}br(){return""}}class J{constructor(){K(this,"seen");this.seen={}}serialize(p){return p.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(p,A){let h=p,g=0;if(this.seen.hasOwnProperty(h)){g=this.seen[p];do g++,h=p+"-"+g;while(this.seen.hasOwnProperty(h))}return A||(this.seen[p]=g,this.seen[h]=0),h}slug(p,A={}){const h=this.serialize(p);return this.getNextSafeSlug(h,A.dryrun)}}class q{constructor(p){K(this,"options");K(this,"renderer");K(this,"textRenderer");K(this,"slugger");this.options=p||a.defaults,this.options.renderer=this.options.renderer||new he,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new se,this.slugger=new J}static parse(p,A){return new q(A).parse(p)}static parseInline(p,A){return new q(A).parseInline(p)}parse(p,A=!0){let h="";for(let g=0;g<p.length;g++){const f=p[g];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]){const L=f,N=this.options.extensions.renderers[L.type].call({parser:this},L);if(N!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(L.type)){h+=N||"";continue}}switch(f.type){case"space":continue;case"hr":h+=this.renderer.hr();continue;case"heading":{const L=f;h+=this.renderer.heading(this.parseInline(L.tokens),L.depth,y(this.parseInline(L.tokens,this.textRenderer)),this.slugger);continue}case"code":{const L=f;h+=this.renderer.code(L.text,L.lang,!!L.escaped);continue}case"table":{const L=f;let N="",R="";for(let _=0;_<L.header.length;_++)R+=this.renderer.tablecell(this.parseInline(L.header[_].tokens),{header:!0,align:L.align[_]});N+=this.renderer.tablerow(R);let O="";for(let _=0;_<L.rows.length;_++){const H=L.rows[_];R="";for(let Z=0;Z<H.length;Z++)R+=this.renderer.tablecell(this.parseInline(H[Z].tokens),{header:!1,align:L.align[Z]});O+=this.renderer.tablerow(R)}h+=this.renderer.table(N,O);continue}case"blockquote":{const L=f,N=this.parse(L.tokens);h+=this.renderer.blockquote(N);continue}case"list":{const L=f,N=L.ordered,R=L.start,O=L.loose;let _="";for(let H=0;H<L.items.length;H++){const Z=L.items[H],X=Z.checked,re=Z.task;let de="";if(Z.task){const le=this.renderer.checkbox(!!X);O?Z.tokens.length>0&&Z.tokens[0].type==="paragraph"?(Z.tokens[0].text=le+" "+Z.tokens[0].text,Z.tokens[0].tokens&&Z.tokens[0].tokens.length>0&&Z.tokens[0].tokens[0].type==="text"&&(Z.tokens[0].tokens[0].text=le+" "+Z.tokens[0].tokens[0].text)):Z.tokens.unshift({type:"text",text:le}):de+=le}de+=this.parse(Z.tokens,O),_+=this.renderer.listitem(de,re,!!X)}h+=this.renderer.list(_,N,R);continue}case"html":{const L=f;h+=this.renderer.html(L.text,L.block);continue}case"paragraph":{const L=f;h+=this.renderer.paragraph(this.parseInline(L.tokens));continue}case"text":{let L=f,N=L.tokens?this.parseInline(L.tokens):L.text;for(;g+1<p.length&&p[g+1].type==="text";)L=p[++g],N+=`
`+(L.tokens?this.parseInline(L.tokens):L.text);h+=A?this.renderer.paragraph(N):N;continue}default:{const L='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(L),"";throw new Error(L)}}}return h}parseInline(p,A){A=A||this.renderer;let h="";for(let g=0;g<p.length;g++){const f=p[g];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]){const L=this.options.extensions.renderers[f.type].call({parser:this},f);if(L!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(f.type)){h+=L||"";continue}}switch(f.type){case"escape":{const L=f;h+=A.text(L.text);break}case"html":{const L=f;h+=A.html(L.text);break}case"link":{const L=f;h+=A.link(L.href,L.title,this.parseInline(L.tokens,A));break}case"image":{const L=f;h+=A.image(L.href,L.title,L.text);break}case"strong":{const L=f;h+=A.strong(this.parseInline(L.tokens,A));break}case"em":{const L=f;h+=A.em(this.parseInline(L.tokens,A));break}case"codespan":{const L=f;h+=A.codespan(L.text);break}case"br":h+=A.br();break;case"del":{const L=f;h+=A.del(this.parseInline(L.tokens,A));break}case"text":{const L=f;h+=A.text(L.text);break}default:{const L='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(L),"";throw new Error(L)}}}return h}}class oe{constructor(p){K(this,"options");this.options=p||a.defaults}preprocess(p){return p}postprocess(p){return p}}K(oe,"passThroughHooks",new Set(["preprocess","postprocess"]));class te{constructor(...p){Te(this,me);Te(this,we);K(this,"defaults",{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!1,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!1,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1});K(this,"options",this.setOptions);K(this,"parse",Me(this,me,Le).call(this,ee.lex,q.parse));K(this,"parseInline",Me(this,me,Le).call(this,ee.lexInline,q.parseInline));K(this,"Parser",q);K(this,"parser",q.parse);K(this,"Renderer",he);K(this,"TextRenderer",se);K(this,"Lexer",ee);K(this,"lexer",ee.lex);K(this,"Tokenizer",F);K(this,"Slugger",J);K(this,"Hooks",oe);this.use(...p)}walkTokens(p,A){let h=[];for(const g of p)switch(h=h.concat(A.call(this,g)),g.type){case"table":{const f=g;for(const L of f.header)h=h.concat(this.walkTokens(L.tokens,A));for(const L of f.rows)for(const N of L)h=h.concat(this.walkTokens(N.tokens,A));break}case"list":{const f=g;h=h.concat(this.walkTokens(f.items,A));break}default:{const f=g;this.defaults.extensions?.childTokens?.[f.type]?this.defaults.extensions.childTokens[f.type].forEach(L=>{h=h.concat(this.walkTokens(f[L],A))}):f.tokens&&(h=h.concat(this.walkTokens(f.tokens,A)))}}return h}use(...p){const A=this.defaults.extensions||{renderers:{},childTokens:{}};return p.forEach(h=>{const g={...h};if(g.async=this.defaults.async||g.async||!1,h.extensions&&(h.extensions.forEach(f=>{if(!f.name)throw new Error("extension name required");if("renderer"in f){const L=A.renderers[f.name];A.renderers[f.name]=L?function(...N){let R=f.renderer.apply(this,N);return R===!1&&(R=L.apply(this,N)),R}:f.renderer}if("tokenizer"in f){if(!f.level||f.level!=="block"&&f.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const L=A[f.level];L?L.unshift(f.tokenizer):A[f.level]=[f.tokenizer],f.start&&(f.level==="block"?A.startBlock?A.startBlock.push(f.start):A.startBlock=[f.start]:f.level==="inline"&&(A.startInline?A.startInline.push(f.start):A.startInline=[f.start]))}"childTokens"in f&&f.childTokens&&(A.childTokens[f.name]=f.childTokens)}),g.extensions=A),h.renderer){const f=this.defaults.renderer||new he(this.defaults);for(const L in h.renderer){const N=h.renderer[L],R=L,O=f[R];f[R]=(..._)=>{let H=N.apply(f,_);return H===!1&&(H=O.apply(f,_)),H||""}}g.renderer=f}if(h.tokenizer){const f=this.defaults.tokenizer||new F(this.defaults);for(const L in h.tokenizer){const N=h.tokenizer[L],R=L,O=f[R];f[R]=(..._)=>{let H=N.apply(f,_);return H===!1&&(H=O.apply(f,_)),H}}g.tokenizer=f}if(h.hooks){const f=this.defaults.hooks||new oe;for(const L in h.hooks){const N=h.hooks[L],R=L,O=f[R];oe.passThroughHooks.has(L)?f[R]=_=>{if(this.defaults.async)return Promise.resolve(N.call(f,_)).then(Z=>O.call(f,Z));const H=N.call(f,_);return O.call(f,H)}:f[R]=(..._)=>{let H=N.apply(f,_);return H===!1&&(H=O.apply(f,_)),H}}g.hooks=f}if(h.walkTokens){const f=this.defaults.walkTokens,L=h.walkTokens;g.walkTokens=function(N){let R=[];return R.push(L.call(this,N)),f&&(R=R.concat(f.call(this,N))),R}}this.defaults={...this.defaults,...g}}),this}setOptions(p){return this.defaults={...this.defaults,...p},this}}me=new WeakSet,Le=function(p,A){return(h,g,f)=>{typeof g=="function"&&(f=g,g=null);const L={...g},N={...this.defaults,...L};this.defaults.async===!0&&L.async===!1&&(N.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),N.async=!0);const R=Me(this,we,je).call(this,!!N.silent,!!N.async,f);if(h==null)return R(new Error("marked(): input parameter is undefined or null"));if(typeof h!="string")return R(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(h)+", string expected"));if(function(O,_){O&&!O.silent&&(_&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(O.sanitize||O.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(O.highlight||O.langPrefix!=="language-")&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),O.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),O.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),O.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),O.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(O.headerIds||O.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}(N,f),N.hooks&&(N.hooks.options=N),f){const O=f,_=N.highlight;let H;try{N.hooks&&(h=N.hooks.preprocess(h)),H=p(h,N)}catch(re){return R(re)}const Z=re=>{let de;if(!re)try{N.walkTokens&&this.walkTokens(H,N.walkTokens),de=A(H,N),N.hooks&&(de=N.hooks.postprocess(de))}catch(le){re=le}return N.highlight=_,re?R(re):O(null,de)};if(!_||_.length<3||(delete N.highlight,!H.length))return Z();let X=0;return this.walkTokens(H,re=>{re.type==="code"&&(X++,setTimeout(()=>{_(re.text,re.lang,(de,le)=>{if(de)return Z(de);le!=null&&le!==re.text&&(re.text=le,re.escaped=!0),X--,X===0&&Z()})},0))}),void(X===0&&Z())}if(N.async)return Promise.resolve(N.hooks?N.hooks.preprocess(h):h).then(O=>p(O,N)).then(O=>N.walkTokens?Promise.all(this.walkTokens(O,N.walkTokens)).then(()=>O):O).then(O=>A(O,N)).then(O=>N.hooks?N.hooks.postprocess(O):O).catch(R);try{N.hooks&&(h=N.hooks.preprocess(h));const O=p(h,N);N.walkTokens&&this.walkTokens(O,N.walkTokens);let _=A(O,N);return N.hooks&&(_=N.hooks.postprocess(_)),_}catch(O){return R(O)}}},we=new WeakSet,je=function(p,A,h){return g=>{if(g.message+=`
Please report this to https://github.com/markedjs/marked.`,p){const f="<p>An error occurred:</p><pre>"+m(g.message+"",!0)+"</pre>";return A?Promise.resolve(f):h?void h(null,f):f}if(A)return Promise.reject(g);if(!h)throw g;h(g)}};const ae=new te;function Y(G,p,A){return ae.parse(G,p,A)}Y.options=Y.setOptions=function(G){return ae.setOptions(G),Y.defaults=ae.defaults,r(Y.defaults),Y},Y.getDefaults=t,Y.defaults=a.defaults,Y.use=function(...G){return ae.use(...G),Y.defaults=ae.defaults,r(Y.defaults),Y},Y.walkTokens=function(G,p){return ae.walkTokens(G,p)},Y.parseInline=ae.parseInline,Y.Parser=q,Y.parser=q.parse,Y.Renderer=he,Y.TextRenderer=se,Y.Lexer=ee,Y.lexer=ee.lex,Y.Tokenizer=F,Y.Slugger=J,Y.Hooks=oe,Y.parse=Y;const ge=Y.options,Ae=Y.setOptions,pe=Y.use,ye=Y.walkTokens,Ce=Y.parseInline,ve=Y,be=q.parse,ue=ee.lex;a.Hooks=oe,a.Lexer=ee,a.Marked=te,a.Parser=q,a.Renderer=he,a.Slugger=J,a.TextRenderer=se,a.Tokenizer=F,a.getDefaults=t,a.lexer=ue,a.marked=Y,a.options=ge,a.parse=ve,a.parseInline=Ce,a.parser=be,a.setOptions=Ae,a.use=pe,a.walkTokens=ye}},B={};function P(l){var a=B[l];if(a!==void 0)return a.exports;var t=B[l]={id:l,exports:{}};return U[l].call(t.exports,t,t.exports,P),t.exports}P.n=l=>{var a=l&&l.__esModule?()=>l.default:()=>l;return P.d(a,{a}),a},P.d=(l,a)=>{for(var t in a)P.o(a,t)&&!P.o(l,t)&&Object.defineProperty(l,t,{enumerable:!0,get:a[t]})},P.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),P.o=(l,a)=>Object.prototype.hasOwnProperty.call(l,a),P.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},P.nc=void 0;var ne={};return(()=>{"use strict";var l=ne;Object.defineProperty(l,"__esModule",{value:!0}),l.MynahUI=l.MynahIcons=l.ChatItemType=l.NotificationType=l.EngagementType=l.RelevancyVoteType=void 0;const a=P(7067),t=P(4769),r=P(7609),n=P(4601),i=P(6446),e=P(8347),s=P(8054),o=P(6508),c=P(9456),m=P(970);P(9967);const d=P(7019);var y=P(7609);Object.defineProperty(l,"RelevancyVoteType",{enumerable:!0,get:function(){return y.RelevancyVoteType}}),Object.defineProperty(l,"EngagementType",{enumerable:!0,get:function(){return y.EngagementType}}),Object.defineProperty(l,"NotificationType",{enumerable:!0,get:function(){return y.NotificationType}}),Object.defineProperty(l,"ChatItemType",{enumerable:!0,get:function(){return y.ChatItemType}});var w=P(9275);Object.defineProperty(l,"MynahIcons",{enumerable:!0,get:function(){return w.MynahIcons}}),l.MynahUI=class{constructor(b){var T;this.lastEventId="",this.chatWrappers={},this.getUserEventId=()=>(this.lastEventId=(0,d.generateUID)(),this.lastEventId),this.addGlobalListeners=()=>{n.MynahUIGlobalEvents.getInstance().addListener(r.MynahEventNames.CHAT_PROMPT,u=>{this.props.onChatPrompt!==void 0&&this.props.onChatPrompt(u.tabId,u.prompt,this.getUserEventId())}),n.MynahUIGlobalEvents.getInstance().addListener(r.MynahEventNames.FOLLOW_UP_CLICKED,u=>{this.props.onFollowUpClicked!==void 0&&this.props.onFollowUpClicked(u.tabId,u.messageId,u.followUpOption,this.getUserEventId())}),n.MynahUIGlobalEvents.getInstance().addListener(r.MynahEventNames.BODY_ACTION_CLICKED,u=>{this.props.onInBodyButtonClicked!==void 0&&this.props.onInBodyButtonClicked(u.tabId,u.messageId,{id:u.actionId,text:u.actionText,formItemValues:u.formItemValues},this.getUserEventId())}),n.MynahUIGlobalEvents.getInstance().addListener(r.MynahEventNames.SHOW_MORE_WEB_RESULTS_CLICK,u=>{this.props.onShowMoreWebResultsClick!==void 0&&this.props.onShowMoreWebResultsClick(o.MynahUITabsStore.getInstance().getSelectedTabId(),u.messageId,this.getUserEventId())}),n.MynahUIGlobalEvents.getInstance().addListener(r.MynahEventNames.FEEDBACK_SET,u=>{this.props.onSendFeedback!==void 0&&this.props.onSendFeedback(o.MynahUITabsStore.getInstance().getSelectedTabId(),u,this.getUserEventId())}),n.MynahUIGlobalEvents.getInstance().addListener(r.MynahEventNames.CHAT_ITEM_ENGAGEMENT,u=>{this.props.onChatItemEngagement!==void 0&&this.props.onChatItemEngagement(o.MynahUITabsStore.getInstance().getSelectedTabId(),u.messageId,u.engagement)}),n.MynahUIGlobalEvents.getInstance().addListener(r.MynahEventNames.COPY_CODE_TO_CLIPBOARD,u=>{this.props.onCopyCodeToClipboard!==void 0&&this.props.onCopyCodeToClipboard(o.MynahUITabsStore.getInstance().getSelectedTabId(),u.messageId,u.text,u.type,u.referenceTrackerInformation,this.getUserEventId())}),n.MynahUIGlobalEvents.getInstance().addListener(r.MynahEventNames.INSERT_CODE_TO_CURSOR_POSITION,u=>{this.props.onCodeInsertToCursorPosition!==void 0&&this.props.onCodeInsertToCursorPosition(o.MynahUITabsStore.getInstance().getSelectedTabId(),u.messageId,u.text,u.type,u.referenceTrackerInformation,this.getUserEventId())}),n.MynahUIGlobalEvents.getInstance().addListener(r.MynahEventNames.SOURCE_LINK_CLICK,u=>{this.props.onSourceLinkClick!==void 0&&this.props.onSourceLinkClick(o.MynahUITabsStore.getInstance().getSelectedTabId(),u.messageId,u.link,u.event,this.getUserEventId())}),n.MynahUIGlobalEvents.getInstance().addListener(r.MynahEventNames.LINK_CLICK,u=>{this.props.onLinkClick!==void 0&&this.props.onLinkClick(o.MynahUITabsStore.getInstance().getSelectedTabId(),u.messageId,u.link,u.event,this.getUserEventId())}),n.MynahUIGlobalEvents.getInstance().addListener(r.MynahEventNames.INFO_LINK_CLICK,u=>{this.props.onInfoLinkClick!==void 0&&this.props.onInfoLinkClick(o.MynahUITabsStore.getInstance().getSelectedTabId(),u.link,u.event,this.getUserEventId())}),n.MynahUIGlobalEvents.getInstance().addListener(r.MynahEventNames.CARD_VOTE,u=>{this.props.onVote!==void 0&&this.props.onVote(u.tabId,u.messageId,u.vote,this.getUserEventId())}),n.MynahUIGlobalEvents.getInstance().addListener(r.MynahEventNames.RESET_STORE,u=>{this.props.onResetStore!==void 0&&this.props.onResetStore(u.tabId)}),n.MynahUIGlobalEvents.getInstance().addListener(r.MynahEventNames.OPEN_DIFF,u=>{this.props.onOpenDiff!==void 0&&this.props.onOpenDiff(u.tabId,u.filePath,u.deleted,u.messageId,this.getUserEventId())}),n.MynahUIGlobalEvents.getInstance().addListener(r.MynahEventNames.FILE_ACTION_CLICK,u=>{this.props.onFileActionClick!==void 0&&this.props.onFileActionClick(u.tabId,u.messageId,u.filePath,u.actionName,this.getUserEventId())}),n.MynahUIGlobalEvents.getInstance().addListener(r.MynahEventNames.CUSTOM_FORM_ACTION_CLICK,u=>{this.props.onCustomFormAction!==void 0&&this.props.onCustomFormAction(u.tabId,u,this.getUserEventId())})},this.addToUserPrompt=(u,v)=>{c.Config.getInstance().config.showPromptField&&o.MynahUITabsStore.getInstance().getTab(u)!==null&&this.chatWrappers[u].addToPrompt(v)},this.addChatItem=(u,v)=>{o.MynahUITabsStore.getInstance().getTab(u)!==null&&(n.MynahUIGlobalEvents.getInstance().dispatch(r.MynahEventNames.CHAT_ITEM_ADD,{tabId:u,chatItem:v}),o.MynahUITabsStore.getInstance().getTabDataStore(u).updateStore({chatItems:[...o.MynahUITabsStore.getInstance().getTabDataStore(u).getValue("chatItems"),v]}))},this.updateLastChatAnswer=(u,v)=>{o.MynahUITabsStore.getInstance().getTab(u)!==null&&this.chatWrappers[u].updateLastChatAnswer(v)},this.updateChatAnswerWithMessageId=(u,v,x)=>{o.MynahUITabsStore.getInstance().getTab(u)!==null&&this.chatWrappers[u].updateChatAnswerWithMessageId(v,x)},this.selectTab=(u,v)=>{v===this.lastEventId&&o.MynahUITabsStore.getInstance().getTab(u)!==null&&o.MynahUITabsStore.getInstance().selectTab(u)},this.removeTab=(u,v)=>{v===this.lastEventId&&o.MynahUITabsStore.getInstance().getTab(u)!==null&&o.MynahUITabsStore.getInstance().removeTab(u)},this.updateStore=(u,v)=>u===""?o.MynahUITabsStore.getInstance().addTab({store:{...v}}):(o.MynahUITabsStore.getInstance().getTab(u)!==null&&o.MynahUITabsStore.getInstance().updateTab(u,{store:{...v}}),u),this.getSelectedTabId=()=>{const u=o.MynahUITabsStore.getInstance().getSelectedTabId();return u===""?void 0:u},this.getAllTabs=()=>o.MynahUITabsStore.getInstance().getAllTabs(),this.notify=u=>{var v;new a.Notification({...u,onNotificationClick:(v=u.onNotificationClick)!==null&&v!==void 0?v:()=>{}}).notify()},this.showCustomForm=(u,v,x,k,C)=>{n.MynahUIGlobalEvents.getInstance().dispatch(r.MynahEventNames.SHOW_FEEDBACK_FORM,{tabId:u,customFormData:{title:k,description:C,buttons:x,formItems:v}})},m.marked.use({renderer:{listitem:u=>`<li> ${u.replace(/\[\[([^[]+)\]\](\(([^)]*))\)/gim,'<a href="$3">[$1]</a>')}</li>`}}),this.props=b,c.Config.getInstance(b.config),t.DomBuilder.getInstance(b.rootSelector),o.MynahUITabsStore.getInstance(this.props.tabs,this.props.defaults),n.MynahUIGlobalEvents.getInstance();const M=o.MynahUITabsStore.getInstance().getAllTabs();this.tabContentsWrapper=t.DomBuilder.getInstance().build({type:"div",classNames:["mynah-ui-tab-contents-wrapper"],children:Object.keys(M).slice(0,c.Config.getInstance().config.maxTabs).map(u=>(this.chatWrappers[u]=new e.ChatWrapper({tabId:u,onStopChatResponse:b.onStopChatResponse!=null?v=>{b.onStopChatResponse!=null&&b.onStopChatResponse(v,this.getUserEventId())}:void 0}),this.chatWrappers[u].render))}),b.onSendFeedback!==void 0&&(this.feedbackForm=new s.FeedbackForm),c.Config.getInstance().config.maxTabs>1&&(this.tabsWrapper=new i.Tabs({onChange:u=>{this.props.onTabChange!==void 0&&this.props.onTabChange(u,this.getUserEventId())},onBeforeTabRemove:u=>b.onBeforeTabRemove===void 0||b.onBeforeTabRemove(u,this.getUserEventId())}).render,this.tabsWrapper.setAttribute("selected-tab",o.MynahUITabsStore.getInstance().getSelectedTabId())),this.wrapper=t.DomBuilder.getInstance().createPortal(r.MynahPortalNames.WRAPPER,{type:"div",attributes:{id:"mynah-wrapper"},children:[(T=this.tabsWrapper)!==null&&T!==void 0?T:"",this.tabContentsWrapper]},"afterbegin"),o.MynahUITabsStore.getInstance().addListener("add",u=>{this.chatWrappers[u]=new e.ChatWrapper({tabId:u,onStopChatResponse:b.onStopChatResponse!=null?v=>{b.onStopChatResponse!=null&&b.onStopChatResponse(v,this.getUserEventId())}:void 0}),this.tabContentsWrapper.appendChild(this.chatWrappers[u].render),this.props.onTabAdd!==void 0&&this.props.onTabAdd(u,this.getUserEventId())}),o.MynahUITabsStore.getInstance().addListener("remove",u=>{this.chatWrappers[u].render.remove(),delete this.chatWrappers[u],this.props.onTabRemove!==void 0&&this.props.onTabRemove(u,this.getUserEventId())}),this.addGlobalListeners(),this.props.onReady!==void 0&&this.props.onReady()}}})(),ne})())},"./src/amazonq/webview/ui/apps/amazonqCommonsConnector.ts":(Q,U,B)=>{"use strict";B.r(U),B.d(U,{Connector:()=>P});class P{constructor(l){this.followUpClicked=(a,t)=>{t.type!==void 0&&t.type==="continue-to-chat"&&this.onWelcomeFollowUpClicked(a,t.type)},this.authFollowUpClicked=(a,t,r)=>{this.sendMessageToExtension({command:"auth-follow-up-was-clicked",authType:r,tabID:a,tabType:t})},this.sendMessageToExtension=l.sendMessageToExtension,this.onWelcomeFollowUpClicked=l.onWelcomeFollowUpClicked}}},"./src/amazonq/webview/ui/apps/cwChatConnector.ts":(Q,U,B)=>{"use strict";B.r(U),B.d(U,{Connector:()=>a});var P=B("../../node_modules/@aws/mynah-ui/dist/main.js"),ne=B.n(P),l=B("./src/amazonq/webview/ui/followUps/generator.ts");class a{constructor(r){this.onSourceLinkClick=(n,i,e)=>{this.sendMessageToExtension({command:"source-link-click",tabID:n,messageId:i,link:e,tabType:"cwc"})},this.onResponseBodyLinkClick=(n,i,e)=>{this.sendMessageToExtension({command:"response-body-link-click",tabID:n,messageId:i,link:e,tabType:"cwc"})},this.onInfoLinkClick=(n,i)=>{this.sendMessageToExtension({command:"footer-info-link-click",tabID:n,link:i,tabType:"cwc"})},this.followUpClicked=(n,i,e)=>{this.sendMessageToExtension({command:"follow-up-was-clicked",followUp:e,tabID:n,messageId:i,tabType:"cwc"})},this.onTabAdd=(n,i)=>{this.sendMessageToExtension({tabID:n,command:"new-tab-was-created",tabType:"cwc",tabOpenInteractionType:i})},this.onCodeInsertToCursorPosition=(n,i,e,s,o)=>{this.sendMessageToExtension({tabID:n,messageId:i,code:e,command:"insert_code_at_cursor_position",tabType:"cwc",insertionTargetType:s,codeReference:o})},this.onCopyCodeToClipboard=(n,i,e,s,o)=>{this.sendMessageToExtension({tabID:n,messageId:i,code:e,command:"code_was_copied_to_clipboard",tabType:"cwc",insertionTargetType:s,codeReference:o})},this.onTabRemove=n=>{this.sendMessageToExtension({tabID:n,command:"tab-was-removed",tabType:"cwc"})},this.onTabChange=(n,i)=>{this.sendMessageToExtension({tabID:n,command:"tab-was-changed",tabType:"cwc",prevTabID:i})},this.onStopChatResponse=n=>{this.sendMessageToExtension({tabID:n,command:"stop-response",tabType:"cwc"})},this.onChatItemVoted=(n,i,e)=>{this.sendMessageToExtension({tabID:n,command:"chat-item-voted",messageId:i,vote:e,tabType:"cwc"})},this.onSendFeedback=(n,i)=>{this.sendMessageToExtension({command:"chat-item-feedback",...i,tabType:"cwc",tabID:n})},this.requestGenerativeAIAnswer=(n,i)=>new Promise((e,s)=>{this.sendMessageToExtension({tabID:n,command:"chat-prompt",chatMessage:i.chatMessage,chatCommand:i.chatCommand,tabType:"cwc"})}),this.clearChat=n=>{this.sendMessageToExtension({tabID:n,command:"clear",chatMessage:"",tabType:"cwc"})},this.help=n=>{this.sendMessageToExtension({tabID:n,command:"help",chatMessage:"",tabType:"cwc"})},this.sendTriggerMessageProcessed=async n=>{this.sendMessageToExtension({command:"trigger-message-processed",requestID:n,tabType:"cwc"})},this.processEditorContextCommandMessage=async n=>{const i=this.onCWCContextCommandMessage({body:n.message,type:P.ChatItemType.PROMPT},n.command);await this.sendTriggerTabIDReceived(n.triggerID,i!==void 0?i:"no-available-tabs")},this.sendTriggerTabIDReceived=async(n,i)=>{this.sendMessageToExtension({command:"trigger-tabID-received",triggerID:n,tabID:i,tabType:"cwc"})},this.processChatMessage=async n=>{if(this.onChatAnswerReceived!==void 0){if(n.message!==void 0||n.relatedSuggestions!==void 0||n.codeReference!==void 0){const i=n.followUps!==void 0&&n.followUps.length>0?{text:n.followUpsHeader??"Suggested follow up questions:",options:n.followUps}:void 0,e={type:n.messageType,messageId:n.messageID??n.triggerID,body:n.message,followUp:i,canBeVoted:!0,codeReference:n.codeReference};(n.messageType==="answer-part"||n.messageType==="answer")&&(e.canBeVoted=!0),n.relatedSuggestions!==void 0&&(e.relatedContent={title:"Sources",content:n.relatedSuggestions}),this.onChatAnswerReceived(n.tabID,e),(n.messageType===P.ChatItemType.SYSTEM_PROMPT||n.messageType===P.ChatItemType.AI_PROMPT)&&await this.sendTriggerMessageProcessed(n.requestID);return}if(n.messageType===P.ChatItemType.ANSWER){const i={type:n.messageType,body:void 0,relatedContent:void 0,messageId:n.messageID,codeReference:n.codeReference,followUp:n.followUps!==void 0&&n.followUps.length>0?{text:"Suggested follow up questions:",options:n.followUps}:void 0};this.onChatAnswerReceived(n.tabID,i);return}}},this.transform=n=>{this.sendMessageToExtension({tabID:n,command:"transform",chatMessage:"transform",tabType:"cwc"})},this.processAuthNeededException=async n=>{this.onChatAnswerReceived!==void 0&&this.onChatAnswerReceived(n.tabID,{type:P.ChatItemType.ANSWER,messageId:n.triggerID,body:n.message,followUp:this.followUpGenerator.generateAuthFollowUps("cwc",n.authType),canBeVoted:!1})},this.handleMessageReceive=async n=>{if(n.type==="errorMessage"){this.onError(n.tabID,n.message,n.title);return}if(n.type==="showInvalidTokenNotification"){this.onWarning(n.tabID,n.message,n.title);return}if(n.type==="chatMessage"){await this.processChatMessage(n);return}if(n.type==="editorContextCommandMessage"){await this.processEditorContextCommandMessage(n);return}if(n.type==="authNeededException"){await this.processAuthNeededException(n);return}},this.sendMessageToExtension=r.sendMessageToExtension,this.onChatAnswerReceived=r.onChatAnswerReceived,this.onWarning=r.onWarning,this.onError=r.onError,this.onCWCContextCommandMessage=r.onCWCContextCommandMessage,this.followUpGenerator=new l.FollowUpGenerator}}},"./src/amazonq/webview/ui/apps/featureDevChatConnector.ts":(Q,U,B)=>{"use strict";B.r(U),B.d(U,{Connector:()=>t});var P=B("../../node_modules/@aws/mynah-ui/dist/main.js"),ne=B.n(P),l=B("./src/amazonq/webview/ui/followUps/generator.ts"),a=B("./src/amazonq/webview/ui/diffTree/actions.ts");class t{constructor(n){this.onCodeInsertToCursorPosition=(i,e,s,o)=>{this.sendMessageToExtension({tabID:i,code:e,command:"insert_code_at_cursor_position",codeReference:o,tabType:"featuredev"})},this.onCopyCodeToClipboard=(i,e,s,o)=>{this.sendMessageToExtension({tabID:i,code:e,command:"code_was_copied_to_clipboard",codeReference:o,tabType:"featuredev"})},this.onOpenDiff=(i,e,s)=>{this.sendMessageToExtension({command:"open-diff",tabID:i,filePath:e,deleted:s,tabType:"featuredev"})},this.onFileActionClick=(i,e,s,o)=>{this.sendMessageToExtension({command:"file-click",tabID:i,messageId:e,filePath:s,actionName:o,tabType:"featuredev"})},this.followUpClicked=(i,e)=>{this.sendMessageToExtension({command:"follow-up-was-clicked",followUp:e,tabID:i,tabType:"featuredev"})},this.requestGenerativeAIAnswer=(i,e)=>new Promise((s,o)=>{this.sendMessageToExtension({tabID:i,command:"chat-prompt",chatMessage:e.chatMessage,tabType:"featuredev"})}),this.processChatMessage=async i=>{if(this.onChatAnswerReceived!==void 0){const e={type:i.messageType,body:i.message??void 0,messageId:i.messageID??i.triggerID??"",relatedContent:void 0,canBeVoted:i.canBeVoted,followUp:i.followUps!==void 0&&i.followUps.length>0?{text:i.messageType===P.ChatItemType.SYSTEM_PROMPT?"":"Please follow up with one of these",options:i.followUps}:void 0};this.onChatAnswerReceived(i.tabID,e)}},this.processCodeResultMessage=async i=>{if(this.onChatAnswerReceived!==void 0){const e=(0,a.getActions)([...i.filePaths,...i.deletedFiles]),s={type:P.ChatItemType.CODE_RESULT,relatedContent:void 0,followUp:void 0,canBeVoted:!0,codeReference:i.references,messageId:i.messageID??i.triggerID??i.conversationID,fileList:{filePaths:i.filePaths.map(o=>o.zipFilePath),deletedFiles:i.deletedFiles.map(o=>o.zipFilePath),actions:e},body:""};this.onChatAnswerReceived(i.tabID,s)}},this.processAuthNeededException=async i=>{this.onChatAnswerReceived!==void 0&&(this.onChatAnswerReceived(i.tabID,{type:P.ChatItemType.ANSWER,body:i.message,followUp:void 0,canBeVoted:!1}),this.onChatAnswerReceived(i.tabID,{type:P.ChatItemType.SYSTEM_PROMPT,body:void 0,followUp:this.followUpGenerator.generateAuthFollowUps("featuredev",i.authType),canBeVoted:!1}))},this.handleMessageReceive=async i=>{if(i.type==="updateFileComponent"){this.onFileComponentUpdate(i.tabID,i.filePaths,i.deletedFiles);return}if(i.type==="errorMessage"){this.onError(i.tabID,i.message,i.title);return}if(i.type==="showInvalidTokenNotification"){this.onWarning(i.tabID,i.message,i.title);return}if(i.type==="chatMessage"){await this.processChatMessage(i);return}if(i.type==="codeResultMessage"){await this.processCodeResultMessage(i);return}if(i.type==="asyncEventProgressMessage"){this.onAsyncEventProgress(i.tabID,i.inProgress,i.message??void 0);return}if(i.type==="updatePlaceholderMessage"){this.updatePlaceholder(i.tabID,i.newPlaceholder);return}if(i.type==="chatInputEnabledMessage"){this.chatInputEnabled(i.tabID,i.enabled);return}if(i.type==="authenticationUpdateMessage"){this.onUpdateAuthentication(i.featureDevEnabled,i.authenticatingTabIDs);return}if(i.type==="authNeededException"){await this.processAuthNeededException(i);return}if(i.type==="openNewTabMessage"){this.onNewTab("featuredev");return}},this.onStopChatResponse=i=>{this.sendMessageToExtension({tabID:i,command:"stop-response"})},this.onTabOpen=i=>{this.sendMessageToExtension({tabID:i,command:"new-tab-was-created",tabType:"featuredev"})},this.onTabRemove=i=>{this.sendMessageToExtension({tabID:i,command:"tab-was-removed",tabType:"featuredev"})},this.sendFeedback=(i,e)=>{},this.onChatItemVoted=(i,e,s)=>{this.sendMessageToExtension({tabID:i,messageId:e,vote:s,command:"chat-item-voted",tabType:"featuredev"})},this.onResponseBodyLinkClick=(i,e,s)=>{this.sendMessageToExtension({command:"response-body-link-click",tabID:i,messageId:e,link:s,tabType:"featuredev"})},this.sendMessageToExtension=n.sendMessageToExtension,this.onChatAnswerReceived=n.onChatAnswerReceived,this.onWarning=n.onWarning,this.onFileComponentUpdate=n.onFileComponentUpdate,this.onError=n.onError,this.onAsyncEventProgress=n.onAsyncEventProgress,this.updatePlaceholder=n.onUpdatePlaceholder,this.chatInputEnabled=n.onChatInputEnabled,this.onUpdateAuthentication=n.onUpdateAuthentication,this.followUpGenerator=new l.FollowUpGenerator,this.onNewTab=n.onNewTab}}},"./src/amazonq/webview/ui/connector.ts":(Q,U,B)=>{"use strict";B.r(U),B.d(U,{Connector:()=>a});var P=B("./src/amazonq/webview/ui/apps/cwChatConnector.ts"),ne=B("./src/amazonq/webview/ui/apps/featureDevChatConnector.ts"),l=B("./src/amazonq/webview/ui/apps/amazonqCommonsConnector.ts");class a{constructor(r){this.isUIReady=!1,this.onSourceLinkClick=(n,i,e)=>{switch(this.tabsStorage.getTab(n)?.type){case"cwc":this.cwChatConnector.onSourceLinkClick(n,i,e);break}},this.onResponseBodyLinkClick=(n,i,e)=>{switch(this.tabsStorage.getTab(n)?.type){case"cwc":this.cwChatConnector.onResponseBodyLinkClick(n,i,e);break;case"featuredev":this.featureDevChatConnector.onResponseBodyLinkClick(n,i,e);break}},this.onInfoLinkClick=(n,i)=>{switch(this.tabsStorage.getTab(n)?.type){default:this.cwChatConnector.onInfoLinkClick(n,i);break}},this.requestGenerativeAIAnswer=(n,i)=>new Promise((e,s)=>{if(this.isUIReady)switch(this.tabsStorage.getTab(n)?.type){case"featuredev":return this.featureDevChatConnector.requestGenerativeAIAnswer(n,i);default:return this.cwChatConnector.requestGenerativeAIAnswer(n,i)}else return setTimeout(()=>this.requestGenerativeAIAnswer(n,i),2e3)}),this.clearChat=n=>{switch(this.tabsStorage.getTab(n)?.type){case"cwc":this.cwChatConnector.clearChat(n);break}},this.help=n=>{switch(this.tabsStorage.getTab(n)?.type){case"cwc":this.cwChatConnector.help(n);break}},this.transform=n=>{switch(this.tabsStorage.getTab(n)?.type){default:this.cwChatConnector.transform(n);break}},this.handleMessageReceive=async n=>{if(n.data===void 0)return;const i=JSON.parse(n.data);i!==void 0&&(i.sender==="CWChat"?await this.cwChatConnector.handleMessageReceive(i):i.sender==="featureDevChat"&&await this.featureDevChatConnector.handleMessageReceive(i))},this.onTabAdd=n=>{this.tabsStorage.addTab({id:n,type:"unknown",status:"free",isSelected:!0})},this.onUpdateTabType=n=>{const i=this.tabsStorage.getTab(n);switch(i?.type){case"cwc":this.cwChatConnector.onTabAdd(n,i.openInteractionType);break}},this.onKnownTabOpen=n=>{switch(this.tabsStorage.getTab(n)?.type){case"featuredev":this.featureDevChatConnector.onTabOpen(n);break}},this.onTabChange=n=>{const i=this.tabsStorage.setSelectedTab(n);this.cwChatConnector.onTabChange(n,i)},this.onCodeInsertToCursorPosition=(n,i,e,s,o)=>{switch(this.tabsStorage.getTab(n)?.type){case"cwc":this.cwChatConnector.onCodeInsertToCursorPosition(n,i,e,s,o);break;case"featuredev":this.featureDevChatConnector.onCodeInsertToCursorPosition(n,e,s,o);break}},this.onCopyCodeToClipboard=(n,i,e,s,o)=>{switch(this.tabsStorage.getTab(n)?.type){case"cwc":this.cwChatConnector.onCopyCodeToClipboard(n,i,e,s,o);break;case"featuredev":this.featureDevChatConnector.onCopyCodeToClipboard(n,e,s,o);break}},this.onTabRemove=n=>{const i=this.tabsStorage.getTab(n);switch(this.tabsStorage.deleteTab(n),i?.type){case"cwc":this.cwChatConnector.onTabRemove(n);break;case"featuredev":this.featureDevChatConnector.onTabRemove(n);break}},this.uiReady=()=>{this.isUIReady=!0,this.sendMessageToExtension({command:"ui-is-ready"}),this.onMessageReceived!==void 0&&window.addEventListener("message",this.handleMessageReceive.bind(this)),window.addEventListener("focus",this.handleApplicationFocus),window.addEventListener("blur",this.handleApplicationFocus)},this.handleApplicationFocus=async n=>{this.sendMessageToExtension({command:"ui-focus",type:n.type,tabType:"cwc"})},this.triggerSuggestionEngagement=(n,i,e)=>{},this.onAuthFollowUpClicked=(n,i)=>{const e=this.tabsStorage.getTab(n)?.type;switch(e){case"cwc":case"featuredev":this.amazonqCommonsConnector.authFollowUpClicked(n,e,i)}},this.onFollowUpClicked=(n,i,e)=>{switch(this.tabsStorage.getTab(n)?.type){case"unknown":this.amazonqCommonsConnector.followUpClicked(n,e);break;case"featuredev":this.featureDevChatConnector.followUpClicked(n,e);break;default:this.cwChatConnector.followUpClicked(n,i,e);break}},this.onFileActionClick=(n,i,e,s)=>{switch(this.tabsStorage.getTab(n)?.type){case"featuredev":this.featureDevChatConnector.onFileActionClick(n,i,e,s);break}},this.onOpenDiff=(n,i,e)=>{switch(this.tabsStorage.getTab(n)?.type){case"featuredev":this.featureDevChatConnector.onOpenDiff(n,i,e);break}},this.onStopChatResponse=n=>{switch(this.tabsStorage.getTab(n)?.type){case"featuredev":this.featureDevChatConnector.onStopChatResponse(n);break;case"cwc":this.cwChatConnector.onStopChatResponse(n);break}},this.sendFeedback=(n,i)=>{switch(this.tabsStorage.getTab(n)?.type){case"featuredev":this.featureDevChatConnector.sendFeedback(n,i);break;case"cwc":this.cwChatConnector.onSendFeedback(n,i);break}},this.onChatItemVoted=(n,i,e)=>{switch(this.tabsStorage.getTab(n)?.type){case"cwc":this.cwChatConnector.onChatItemVoted(n,i,e);break;case"featuredev":this.featureDevChatConnector.onChatItemVoted(n,i,e);break}},this.sendMessageToExtension=r.sendMessageToExtension,this.onMessageReceived=r.onMessageReceived,this.cwChatConnector=new P.Connector(r),this.featureDevChatConnector=new ne.Connector(r),this.amazonqCommonsConnector=new l.Connector({sendMessageToExtension:this.sendMessageToExtension,onWelcomeFollowUpClicked:r.onWelcomeFollowUpClicked}),this.tabsStorage=r.tabsStorage}}},"./src/amazonq/webview/ui/diffTree/actions.ts":(Q,U,B)=>{"use strict";B.r(U),B.d(U,{getActions:()=>a,getDetails:()=>l});var P=B("../../node_modules/@aws/mynah-ui/dist/main.js"),ne=B.n(P);function l(t){const r={};for(const n of t)n.rejected&&(r[n.relativePath]={status:"error",label:"File rejected",icon:P.MynahIcons.CANCEL_CIRCLE});return r}function a(t){const r={};for(const n of t)switch(n.rejected){case!0:r[n.relativePath]=[{icon:P.MynahIcons.REVERT,name:"revert-rejection",description:"Revert rejection"}];break;case!1:r[n.relativePath]=[{icon:P.MynahIcons.CANCEL_CIRCLE,status:"error",name:"reject-change",description:"Reject change"}];break}return r}},"./src/amazonq/webview/ui/feedback/constants.ts":(Q,U,B)=>{"use strict";B.r(U),B.d(U,{feedbackOptions:()=>P});const P=[{value:"inaccurate-response",label:"Inaccurate response"},{value:"harmful-content",label:"Harmful content"},{value:"incorrect-syntax",label:"Incorrect syntax"},{value:"buggy-code",label:"Buggy code"},{value:"low-quality",label:"Low quality"},{value:"other",label:"Other"}]},"./src/amazonq/webview/ui/followUps/generator.ts":(Q,U,B)=>{"use strict";B.r(U),B.d(U,{FollowUpGenerator:()=>P});class P{generateAuthFollowUps(l,a){let t;switch(a){case"full-auth":t="Authenticate";break;case"use-supported-auth":case"missing_scopes":t="Enable Amazon Q";break;case"re-auth":t="Re-authenticate";break}switch(l){default:return{text:"",options:[{pillText:t,type:a,status:"info",icon:"refresh"}]}}}generateWelcomeBlockForTab(l){switch(l){case"featuredev":return{text:"Would you like to follow up with",options:[{pillText:"What are some examples?",type:"DevExamples"}]};default:return{text:"Try Examples:",options:[{pillText:"Explain selected code",prompt:"Explain selected code",type:"init-prompt"},{pillText:"How can Amazon Q help me?",type:"help"}]}}}}},"./src/amazonq/webview/ui/followUps/handler.ts":(Q,U,B)=>{"use strict";B.r(U),B.d(U,{FollowUpInteractionHandler:()=>l});var P=B("../../node_modules/@aws/mynah-ui/dist/main.js"),ne=B.n(P);class l{constructor(t){this.mynahUI=t.mynahUI,this.connector=t.connector,this.tabsStorage=t.tabsStorage}onFollowUpClicked(t,r,n){if(n.type!==void 0&&["full-auth","re-auth","missing_scopes","use-supported-auth"].includes(n.type)){this.connector.onAuthFollowUpClicked(t,n.type);return}if(n.type!==void 0&&n.type==="help"){this.tabsStorage.updateTabTypeFromUnknown(t,"cwc"),this.connector.onUpdateTabType(t),this.connector.help(t);return}if(n.prompt!==void 0&&(this.mynahUI.updateStore(t,{loadingChat:!0,promptInputDisabledState:!0}),this.mynahUI.addChatItem(t,{type:P.ChatItemType.PROMPT,body:n.prompt}),this.mynahUI.addChatItem(t,{type:P.ChatItemType.ANSWER_STREAM,body:""}),this.tabsStorage.updateTabStatus(t,"busy"),this.tabsStorage.resetTabTimer(t),n.type!==void 0&&n.type==="init-prompt")){this.connector.requestGenerativeAIAnswer(t,{chatMessage:n.prompt});return}this.connector.onFollowUpClicked(t,r,n)}onWelcomeFollowUpClicked(t,r){if(r==="continue-to-chat"){this.mynahUI.addChatItem(t,{type:P.ChatItemType.ANSWER,body:"Ok, please write your question below."}),this.tabsStorage.updateTabTypeFromUnknown(t,"cwc"),this.connector.onUpdateTabType(t);return}}}},"./src/amazonq/webview/ui/messages/controller.ts":(Q,U,B)=>{"use strict";B.r(U),B.d(U,{MessageController:()=>t});var P=B("../../node_modules/@aws/mynah-ui/dist/main.js"),ne=B.n(P),l=B("./src/amazonq/webview/ui/tabs/generator.ts"),a=B("./src/amazonq/webview/ui/texts/constants.ts");class t{constructor(n){this.mynahUI=n.mynahUI,this.connector=n.connector,this.tabsStorage=n.tabsStorage,this.tabDataGenerator=new l.TabDataGenerator({isFeatureDevEnabled:n.isFeatureDevEnabled,isGumbyEnabled:n.isGumbyEnabled})}sendSelectedCodeToTab(n){const i={...this.tabsStorage.getSelectedTab()};if(i?.id===void 0||i?.type==="featuredev"){const e=this.mynahUI.updateStore("",this.tabDataGenerator.getTabData("cwc",!1));if(e===void 0){this.mynahUI.notify({content:a.uiComponentsTexts.noMoreTabsTooltip,type:P.NotificationType.WARNING});return}this.tabsStorage.addTab({id:e,type:"cwc",status:"free",isSelected:!0}),i.id=e}return this.mynahUI.addToUserPrompt(i.id,n.body),i.id}sendMessageToTab(n,i){const e=this.tabsStorage.getSelectedTab();if(e!==void 0&&[i,"unknown"].includes(e.type)&&e.status==="free")return this.tabsStorage.updateTabStatus(e.id,"busy"),this.tabsStorage.updateTabTypeFromUnknown(e.id,i),this.mynahUI.updateStore(e.id,{loadingChat:!0,promptInputDisabledState:!0}),this.mynahUI.addChatItem(e.id,n),this.mynahUI.addChatItem(e.id,{type:P.ChatItemType.ANSWER_STREAM,body:""}),e.id;const s=this.mynahUI.updateStore("",this.tabDataGenerator.getTabData("cwc",!1));if(s===void 0){this.mynahUI.notify({content:a.uiComponentsTexts.noMoreTabsTooltip,type:P.NotificationType.WARNING});return}else return this.mynahUI.addChatItem(s,n),this.mynahUI.addChatItem(s,{type:P.ChatItemType.ANSWER_STREAM,body:""}),this.mynahUI.updateStore(s,{loadingChat:!0,promptInputDisabledState:!0}),this.tabsStorage.addTab({id:s,type:"cwc",status:"busy",isSelected:!0,openInteractionType:"contextMenu"}),this.tabsStorage.updateTabTypeFromUnknown(s,"cwc"),this.connector.onUpdateTabType(s),this.tabsStorage.updateTabStatus(s,"busy"),s}}},"./src/amazonq/webview/ui/messages/handler.ts":(Q,U,B)=>{"use strict";B.r(U),B.d(U,{TextMessageHandler:()=>l});var P=B("../../node_modules/@aws/mynah-ui/dist/main.js"),ne=B.n(P);class l{constructor(t){this.mynahUI=t.mynahUI,this.connector=t.connector,this.tabsStorage=t.tabsStorage}handle(t,r){this.tabsStorage.updateTabTypeFromUnknown(r,"cwc"),this.tabsStorage.resetTabTimer(r),this.connector.onUpdateTabType(r),this.mynahUI.addChatItem(r,{type:P.ChatItemType.PROMPT,body:t.escapedPrompt}),this.mynahUI.updateStore(r,{loadingChat:!0,promptInputDisabledState:!0}),this.tabsStorage.updateTabStatus(r,"busy"),this.connector.requestGenerativeAIAnswer(r,{chatMessage:t.prompt??"",chatCommand:t.command}).then(()=>{})}}},"./src/amazonq/webview/ui/quickActions/generator.ts":(Q,U,B)=>{"use strict";B.r(U),B.d(U,{QuickActionGenerator:()=>P});class P{constructor(l){this.isFeatureDevEnabled=l.isFeatureDevEnabled,this.isGumbyEnabled=l.isGumbyEnabled}generateForTab(l){switch(l){case"featuredev":return[];default:return[...this.isFeatureDevEnabled?[{groupName:"Application Development",commands:[{command:"/dev",placeholder:"Briefly describe a task or issue",description:"Use all project files as context for code suggestions (increases latency)."}]}]:[],...this.isGumbyEnabled?[{commands:[{command:"/transform",description:"Transform your Java 8 or 11 Maven project to Java 17"}]}]:[],{commands:[{command:"/help",description:"Learn more about Amazon Q"},{command:"/clear",description:"Clear this session"}]}]}}}},"./src/amazonq/webview/ui/quickActions/handler.ts":(Q,U,B)=>{"use strict";B.r(U),B.d(U,{QuickActionHandler:()=>t});var P=B("../../node_modules/@aws/mynah-ui/dist/main.js"),ne=B.n(P),l=B("./src/amazonq/webview/ui/tabs/generator.ts"),a=B("./src/amazonq/webview/ui/texts/constants.ts");class t{constructor(n){this.mynahUI=n.mynahUI,this.connector=n.connector,this.tabsStorage=n.tabsStorage,this.tabDataGenerator=new l.TabDataGenerator({isFeatureDevEnabled:n.isFeatureDevEnabled,isGumbyEnabled:n.isGumbyEnabled}),this.isFeatureDevEnabled=n.isFeatureDevEnabled}handle(n,i){switch(this.tabsStorage.resetTabTimer(i),n.command){case"/dev":this.handleFeatureDevCommand(n,i,"Q - Dev");break;case"/help":this.handleHelpCommand(i);break;case"/transform":this.handleGumbyCommand(i);break;case"/clear":this.handleClearCommand(i);break}}handleGumbyCommand(n){this.connector.transform(n)}handleClearCommand(n){this.mynahUI.updateStore(n,{chatItems:[]}),this.connector.clearChat(n)}handleHelpCommand(n){this.tabsStorage.getTab(n)?.type==="unknown"&&this.tabsStorage.updateTabTypeFromUnknown(n,"cwc"),this.connector.help(n)}handleFeatureDevCommand(n,i,e){if(!this.isFeatureDevEnabled)return;let s=i;const o=n.escapedPrompt?.trim()??"";if(this.tabsStorage.getTab(s)?.type!=="unknown"&&(s=this.mynahUI.updateStore("",{})),s===void 0){this.mynahUI.notify({content:a.uiComponentsTexts.noMoreTabsTooltip,type:P.NotificationType.WARNING});return}else this.tabsStorage.updateTabTypeFromUnknown(s,"featuredev"),this.connector.onKnownTabOpen(s),this.connector.onUpdateTabType(s),this.mynahUI.updateStore(s,{chatItems:[]}),this.mynahUI.updateStore(s,this.tabDataGenerator.getTabData("featuredev",o==="",e)),o!==""&&(this.mynahUI.addChatItem(s,{type:P.ChatItemType.PROMPT,body:o}),this.mynahUI.addChatItem(s,{type:P.ChatItemType.ANSWER_STREAM,body:""}),this.mynahUI.updateStore(s,{loadingChat:!0,promptInputDisabledState:!0}),this.connector.requestGenerativeAIAnswer(s,{chatMessage:o}))}}},"./src/amazonq/webview/ui/storages/tabsStorage.ts":(Q,U,B)=>{"use strict";B.r(U),B.d(U,{TabsStorage:()=>ne});const P=1728e5;class ne{constructor(a){this.tabs=new Map,this.lastCreatedTabByType=new Map,this.lastSelectedTab=void 0,this.tabActivityTimers={},this.onTabTimeout=a?.onTabTimeout}addTab(a){this.tabs.has(a.id)||(this.tabs.set(a.id,a),this.lastCreatedTabByType.set(a.type,a.id),a.isSelected&&this.setSelectedTab(a.id))}deleteTab(a){this.tabActivityTimers[a]!==void 0&&(clearTimeout(this.tabActivityTimers[a]),delete this.tabActivityTimers[a]),a===this.lastSelectedTab?.id&&(this.lastSelectedTab=void 0),this.tabs.delete(a)}getTab(a){return this.tabs.get(a)}getTabs(){return Array.from(this.tabs.values())}isTabDead(a){return this.tabs.get(a)?.status==="dead"}updateTabStatus(a,t){const r=this.tabs.get(a);r===void 0||r.status==="dead"||(r.status=t,this.tabs.set(a,r))}updateTabTypeFromUnknown(a,t){const r=this.tabs.get(a);r===void 0||r.type!=="unknown"||(r.type=t,this.tabs.set(a,r),this.lastCreatedTabByType.set(t,a))}resetTabTimer(a){this.onTabTimeout!==void 0&&(this.tabActivityTimers[a]!==void 0&&clearTimeout(this.tabActivityTimers[a]),this.tabActivityTimers[a]=setTimeout(()=>{this.onTabTimeout!==void 0&&(this.updateTabStatus(a,"dead"),this.onTabTimeout(a))},P))}setSelectedTab(a){const t=this.lastSelectedTab,r=this.lastSelectedTab?.id;t!==void 0&&(t.isSelected=!1,this.tabs.set(t.id,t));const n=this.tabs.get(a);return n===void 0||(n.isSelected=!0,this.tabs.set(n.id,n),this.lastSelectedTab=n),r}getSelectedTab(){return this.lastSelectedTab}}},"./src/amazonq/webview/ui/tabs/generator.ts":(Q,U,B)=>{"use strict";B.r(U),B.d(U,{TabDataGenerator:()=>t});var P=B("../../node_modules/@aws/mynah-ui/dist/main.js"),ne=B.n(P),l=B("./src/amazonq/webview/ui/followUps/generator.ts"),a=B("./src/amazonq/webview/ui/quickActions/generator.ts");class t{constructor(n){this.tabTitle=new Map([["unknown","Chat"],["cwc","Chat"],["featuredev","Q - Dev"]]),this.tabInputPlaceholder=new Map([["unknown",'Ask a question or enter "/" for quick actions'],["cwc",'Ask a question or enter "/" for quick actions'],["featuredev","Briefly describe a task or issue"]]),this.tabWelcomeMessage=new Map([["unknown","Hi, I'm Amazon Q. I can answer your software development questions. \n        Ask me to explain, debug, or optimize your code. \n        You can enter `/` to see a list of quick actions."],["cwc","Hi, I'm Amazon Q. I can answer your software development questions. \n        Ask me to explain, debug, or optimize your code. \n        You can enter `/` to see a list of quick actions."],["featuredev",`Welcome to /dev. 

Here I can provide code suggestions across files in your current project.

Before I begin generating code, let's agree on an implementation plan. What change would you like to make?
`]]),this.followUpsGenerator=new l.FollowUpGenerator,this.quickActionsGenerator=new a.QuickActionGenerator({isFeatureDevEnabled:n.isFeatureDevEnabled,isGumbyEnabled:n.isGumbyEnabled})}getTabData(n,i,e){return{tabTitle:e??this.tabTitle.get(n),promptInputInfo:"Use of Amazon Q is subject to the [AWS Responsible AI Policy](https://aws.amazon.com/machine-learning/responsible-ai/policy/).",quickActionCommands:this.quickActionsGenerator.generateForTab(n),promptInputPlaceholder:this.tabInputPlaceholder.get(n),chatItems:i?[{type:P.ChatItemType.ANSWER,body:this.tabWelcomeMessage.get(n)},{type:P.ChatItemType.ANSWER,followUp:this.followUpsGenerator.generateWelcomeBlockForTab(n)}]:[]}}}},"./src/amazonq/webview/ui/texts/constants.ts":(Q,U,B)=>{"use strict";B.r(U),B.d(U,{uiComponentsTexts:()=>P,userGuideURL:()=>ne});const P={mainTitle:"Amazon Q (Preview)",copy:"Copy",insertAtCursorLabel:"Insert at cursor",feedbackFormTitle:"Report an issue",feedbackFormOptionsLabel:"What type of issue would you like to report?",feedbackFormCommentLabel:"Description of issue (optional):",feedbackThanks:"Thanks for your feedback!",feedbackReportButtonLabel:"Report an issue",codeSuggestions:"Code suggestions",files:"file(s)",clickFileToViewDiff:"Click on a file to view diff.",showMore:"Show more",save:"Save",cancel:"Cancel",submit:"Submit",stopGenerating:"Stop generating",copyToClipboard:"Copied to clipboard",noMoreTabsTooltip:"You can only open ten conversation tabs at a time.",codeSuggestionWithReferenceTitle:"Some suggestions contain code with references.",spinnerText:"Generating your answer..."},ne="https://docs.aws.amazon.com/amazonq/latest/aws-builder-use-ug/getting-started.html"}},ie={};function V(Q){var U=ie[Q];if(U!==void 0)return U.exports;var B=ie[Q]={exports:{}};return ce[Q](B,B.exports,V),B.exports}V.n=Q=>{var U=Q&&Q.__esModule?()=>Q.default:()=>Q;return V.d(U,{a:U}),U},V.d=(Q,U)=>{for(var B in U)V.o(U,B)&&!V.o(Q,B)&&Object.defineProperty(Q,B,{enumerable:!0,get:U[B]})},V.o=(Q,U)=>Object.prototype.hasOwnProperty.call(Q,U),V.r=Q=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})};var Ie={};(()=>{"use strict";V.r(Ie),V.d(Ie,{createMynahUI:()=>s});var Q=V("./src/amazonq/webview/ui/connector.ts"),U=V("../../node_modules/@aws/mynah-ui/dist/main.js"),B=V.n(U),P=V("./src/amazonq/webview/ui/storages/tabsStorage.ts"),ne=V("./src/amazonq/webview/ui/tabs/generator.ts"),l=V("./src/amazonq/webview/ui/feedback/constants.ts"),a=V("./src/amazonq/webview/ui/texts/constants.ts"),t=V("./src/amazonq/webview/ui/followUps/handler.ts"),r=V("./src/amazonq/webview/ui/quickActions/handler.ts"),n=V("./src/amazonq/webview/ui/messages/handler.ts"),i=V("./src/amazonq/webview/ui/messages/controller.ts"),e=V("./src/amazonq/webview/ui/diffTree/actions.ts");const s=(o,c,m)=>{let d,y;const w=new P.TabsStorage({onTabTimeout:C=>{d.addChatItem(C,{type:U.ChatItemType.ANSWER,body:"This conversation has timed out after 48 hours. It will not be saved. Start a new conversation."}),d.updateStore(C,{promptInputDisabledState:!0,promptInputPlaceholder:"Session ended."})}});w.addTab({id:"tab-1",status:"free",type:"cwc",isSelected:!0});let b=c,T=m,M=new ne.TabDataGenerator({isFeatureDevEnabled:b,isGumbyEnabled:T}),u,v,x,k;return y=new Q.Connector({tabsStorage:w,onUpdateAuthentication:(C,I)=>{b=C,T=C,v=new r.QuickActionHandler({mynahUI:d,connector:y,tabsStorage:w,isFeatureDevEnabled:b,isGumbyEnabled:T}),M=new ne.TabDataGenerator({isFeatureDevEnabled:b,isGumbyEnabled:T});for(const D of w.getTabs())d.updateStore(D.id,{quickActionCommands:M.quickActionsGenerator.generateForTab(D.type)});if(C)for(const D of I)d.addChatItem(D,{type:U.ChatItemType.ANSWER,body:"Authentication successful. Connected to Amazon Q."}),d.updateStore(D,{promptInputDisabledState:!1})},onFileActionClick:(C,I,D,S)=>{},onCWCOnboardingPageInteractionMessage:C=>k.sendMessageToTab(C,"cwc"),onCWCContextCommandMessage:(C,I)=>I==="aws.amazonq.sendToPrompt"?k.sendSelectedCodeToTab(C):k.sendMessageToTab(C,"cwc"),onWelcomeFollowUpClicked:(C,I)=>{u.onWelcomeFollowUpClicked(C,I)},onChatInputEnabled:(C,I)=>{d.updateStore(C,{promptInputDisabledState:w.isTabDead(C)||!I})},onAsyncEventProgress:(C,I,D)=>{if(I){d.updateStore(C,{loadingChat:!0,promptInputDisabledState:!0}),D&&d.updateLastChatAnswer(C,{body:D}),d.addChatItem(C,{type:U.ChatItemType.ANSWER_STREAM,body:""}),w.updateTabStatus(C,"busy");return}d.updateStore(C,{loadingChat:!1,promptInputDisabledState:w.isTabDead(C)}),w.updateTabStatus(C,"free")},sendMessageToExtension:C=>{o.postMessage(C)},onChatAnswerReceived:(C,I)=>{if(I.type===U.ChatItemType.ANSWER_PART||I.type===U.ChatItemType.CODE_RESULT){d.updateLastChatAnswer(C,{...I.messageId!==void 0?{messageId:I.messageId}:{},...I.canBeVoted!==void 0?{canBeVoted:I.canBeVoted}:{},...I.codeReference!==void 0?{codeReference:I.codeReference}:{},...I.body!==void 0?{body:I.body}:{},...I.relatedContent!==void 0?{relatedContent:I.relatedContent}:{},...I.type===U.ChatItemType.CODE_RESULT?{type:U.ChatItemType.CODE_RESULT,fileList:I.fileList}:{}});return}if((I.body!==void 0||I.relatedContent!==void 0||I.followUp!==void 0)&&d.addChatItem(C,I),I.type===U.ChatItemType.PROMPT||I.type===U.ChatItemType.SYSTEM_PROMPT||I.type===U.ChatItemType.AI_PROMPT){d.updateStore(C,{loadingChat:!0,promptInputDisabledState:!0}),w.updateTabStatus(C,"busy");return}I.type===U.ChatItemType.ANSWER&&(d.updateStore(C,{loadingChat:!1,promptInputDisabledState:w.isTabDead(C)}),w.updateTabStatus(C,"free"))},onMessageReceived:(C,I)=>{d.updateStore(C,I)},onFileComponentUpdate:(C,I,D)=>{const S={type:U.ChatItemType.CODE_RESULT,fileList:{filePaths:I.map(j=>j.relativePath),deletedFiles:D.map(j=>j.relativePath),details:(0,e.getDetails)(I),actions:(0,e.getActions)([...I,...D])}};d.updateLastChatAnswer(C,S)},onWarning:(C,I,D)=>{d.notify({title:D,content:I,type:U.NotificationType.WARNING}),d.updateStore(C,{loadingChat:!1,promptInputDisabledState:w.isTabDead(C)}),w.updateTabStatus(C,"free")},onError:(C,I,D)=>{const S={type:U.ChatItemType.ANSWER,body:`**${D}** 
 ${I}`};if(C!=="")d.updateStore(C,{loadingChat:!1,promptInputDisabledState:w.isTabDead(C)}),w.updateTabStatus(C,"free"),d.addChatItem(C,S);else{const j=d.updateStore("",{tabTitle:"Error",quickActionCommands:[],promptInputPlaceholder:"",chatItems:[S]});if(j===void 0){d.notify({content:a.uiComponentsTexts.noMoreTabsTooltip,type:U.NotificationType.WARNING});return}else w.addTab({id:j,status:"busy",type:"cwc",isSelected:!0})}},onUpdatePlaceholder(C,I){d.updateStore(C,{promptInputPlaceholder:I})},onNewTab(C){const I=d.updateStore("",{});!I||(w.updateTabTypeFromUnknown(I,C),y.onKnownTabOpen(I),y.onUpdateTabType(I),d.updateStore(I,M.getTabData(C,!0)))}}),d=new U.MynahUI({onReady:y.uiReady,onTabAdd:C=>{d.updateStore(C,{quickActionCommands:M.quickActionsGenerator.generateForTab("unknown")}),y.onTabAdd(C)},onTabRemove:y.onTabRemove,onTabChange:y.onTabChange,onChatPrompt:(C,I)=>{if(!((I.prompt??"")===""&&(I.command??"")==="")){if(w.getTab(C)?.type==="featuredev"&&d.addChatItem(C,{type:U.ChatItemType.ANSWER_STREAM}),I.command!==void 0&&I.command.trim()!==""){v.handle(I,C);return}x.handle(I,C)}},onVote:y.onChatItemVoted,onSendFeedback:(C,I)=>{y.sendFeedback(C,I),d.notify({type:U.NotificationType.INFO,title:"Your feedback is sent",content:"Thanks for your feedback."})},onCodeInsertToCursorPosition:y.onCodeInsertToCursorPosition,onCopyCodeToClipboard:(C,I,D,S,j)=>{y.onCopyCodeToClipboard(C,I,D,S,j),d.notify({type:U.NotificationType.SUCCESS,content:"Selected code is copied to clipboard"})},onChatItemEngagement:y.triggerSuggestionEngagement,onSourceLinkClick:(C,I,D,S)=>{S?.preventDefault(),S?.stopPropagation(),S?.stopImmediatePropagation(),y.onSourceLinkClick(C,I,D)},onLinkClick:(C,I,D,S)=>{S?.preventDefault(),S?.stopPropagation(),S?.stopImmediatePropagation(),y.onResponseBodyLinkClick(C,I,D)},onInfoLinkClick:(C,I,D)=>{D?.preventDefault(),D?.stopPropagation(),D?.stopImmediatePropagation(),y.onInfoLinkClick(C,I)},onResetStore:()=>{},onFollowUpClicked:(C,I,D)=>{u.onFollowUpClicked(C,I,D)},onFileActionClick:async(C,I,D,S)=>{y.onFileActionClick(C,I,D,S)},onOpenDiff:y.onOpenDiff,tabs:{"tab-1":{isSelected:!0,store:M.getTabData("cwc",!0)}},defaults:{store:M.getTabData("cwc",!0)},config:{maxTabs:10,feedbackOptions:l.feedbackOptions,texts:a.uiComponentsTexts}}),u=new t.FollowUpInteractionHandler({mynahUI:d,connector:y,tabsStorage:w}),v=new r.QuickActionHandler({mynahUI:d,connector:y,tabsStorage:w,isFeatureDevEnabled:b,isGumbyEnabled:T}),x=new n.TextMessageHandler({mynahUI:d,connector:y,tabsStorage:w}),k=new i.MessageController({mynahUI:d,connector:y,tabsStorage:w,isFeatureDevEnabled:b,isGumbyEnabled:T}),{mynahUI:d,messageReceiver:y.handleMessageReceive}}})();var De=this;for(var ze in Ie)De[ze]=Ie[ze];Ie.__esModule&&Object.defineProperty(De,"__esModule",{value:!0})})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
/*! For license information please see main.js.LICENSE.txt */
/*!****************************************!*\
  !*** ./src/amazonq/webview/ui/main.ts ***!
  \****************************************/

//# sourceMappingURL=amazonq-ui.js.map