(()=>{var F={"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/login.vue?vue&type=style&index=0&id=2e4b4bca&lang=css":(i,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),d=t.n(e),s=t("../../node_modules/css-loader/dist/runtime/api.js"),l=t.n(s),r=l()(d());r.push([i.id,`
.selectable-item {
    margin-bottom: 10px;
    margin-top: 10px;
}
.continue-button {
    background-color: #29a7ff;
    color: white;
    width: 100%;
    height: 40px;
}
.back-button {
    background: none;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 30px;
}
.logoIcon {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: flex-start;
    padding-top: 150px;
    padding-bottom: 10px;
    padding-left: 10px;
    height: auto;
}
.hint {
    color: #948a8a;
    margin-bottom: 5px;
    margin-top: 5px;
}
.title {
    margin-bottom: 5px;
    margin-top: 5px;
    font-size: 23px;
    font-size: 15px;
    font-weight: bold;
    color: white;
}
.continue-button:disabled {
    background-color: #252526;
    color: #6f6f6f;
}
.urlInput {
    background-color: #252526;
    width: 100%;
    color: white;
}
.iamInput {
    background-color: #252526;
    width: 100%;
    color: white;
}
.regionSelect {
    background-color: #252526;
    width: 100%;
    color: white;
}
#logo {
    fill: var(--vscode-button-foreground);
    padding-top: 0.2em;
}
body.vscode-dark #logo-text {
    fill: white;
}
body.vscode-light #logo-text {
    fill: #232f3e; /* squid ink */
}
`,"",{version:3,sources:["webpack://./src/login/webview/vue/login.vue"],names:[],mappings:";AA2VA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,yBAAyB;IACzB,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,uBAAuB;IACvB,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,cAAc;IACd,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB,YAAY;AAChB;AACA;IACI,yBAAyB;IACzB,cAAc;AAClB;AACA;IACI,yBAAyB;IACzB,WAAW;IACX,YAAY;AAChB;AACA;IACI,yBAAyB;IACzB,WAAW;IACX,YAAY;AAChB;AACA;IACI,yBAAyB;IACzB,WAAW;IACX,YAAY;AAChB;AACA;IACI,qCAAqC;IACrC,kBAAkB;AACtB;AACA;IACI,WAAW;AACf;AACA;IACI,aAAa,EAAE,cAAc;AACjC",sourcesContent:[`<!-- This Vue File is the login webview of AWS Toolkit and Amazon Q.-->
<template>
    <div v-bind:class="[disabled ? 'disabled-form' : '']" class="auth-container" @click="handleDocumentClick">
        <div class="logoIcon">
            <!-- Icon -->

            <svg
                v-if="app === 'AMAZONQ' && stage !== 'CONNECTED'"
                width="100"
                height="100"
                viewBox="0 0 71 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_331_37336)">
                    <path
                        d="M30.1307 1.46438L8.83068 13.7563C5.45818 15.7087 3.37256 19.3031 3.37256 23.2081V47.8067C3.37256 51.6969 5.45818 55.306 8.83068 57.2585L30.1307 69.5504C33.5032 71.5029 37.6596 71.5029 41.0321 69.5504L62.3321 57.2585C65.7046 55.306 67.7903 51.7117 67.7903 47.8067V23.2081C67.7903 19.3179 65.7046 15.7087 62.3321 13.7563L41.0321 1.46438C37.6596 -0.488125 33.5032 -0.488125 30.1307 1.46438Z"
                        fill="url(#paint0_linear_331_37336)"
                    />
                    <path
                        d="M54.1966 21.6843L38.2364 12.469C37.5116 12.0401 36.5354 11.833 35.5739 11.833C34.6124 11.833 33.651 12.0401 32.9114 12.469L16.9512 21.6843C15.4868 22.5274 14.2887 24.5982 14.2887 26.2845V44.7149C14.2887 46.4011 15.4868 48.472 16.9512 49.3151L32.9114 58.5303C33.6362 58.9593 34.6124 59.1663 35.5739 59.1663C36.5354 59.1663 37.4968 58.9593 38.2364 58.5303L54.1966 49.3151C55.661 48.472 56.8591 46.4011 56.8591 44.7149V26.2845C56.8591 24.5982 55.661 22.5274 54.1966 21.6843ZM36.0029 54.7141C36.0029 54.7141 35.7958 54.7584 35.5887 54.7584C35.3816 54.7584 35.2337 54.7288 35.1745 54.7141L19.1699 45.4693C19.0072 45.3213 18.8002 44.9515 18.7558 44.7445V26.2549C18.8002 26.0478 19.022 25.678 19.1699 25.5301L35.1745 16.2853C35.1745 16.2853 35.3816 16.2409 35.5887 16.2409C35.7958 16.2409 35.9437 16.2705 36.0029 16.2853L52.0075 25.5301C52.1702 25.678 52.3772 26.0478 52.4216 26.2549V42.6588L40.0262 35.4997V33.5472C40.0262 33.1626 39.8191 32.8224 39.4937 32.6301L36.1212 30.6776C35.9585 30.5888 35.7662 30.5297 35.5887 30.5297C35.4112 30.5297 35.2189 30.574 35.0562 30.6776L31.6837 32.6301C31.3583 32.8224 31.1512 33.1774 31.1512 33.5472V37.4374C31.1512 37.822 31.3583 38.1622 31.6837 38.3545L35.0562 40.307C35.2189 40.3957 35.4112 40.4549 35.5887 40.4549C35.7662 40.4549 35.9585 40.4105 36.1212 40.307L37.8074 39.3307L50.2029 46.4899L36.0029 54.6845V54.7141Z"
                        fill="white"
                    />
                </g>
                <defs>
                    <linearGradient
                        id="paint0_linear_331_37336"
                        x1="64.1515"
                        y1="-5.31021"
                        x2="10.5465"
                        y2="71.2515"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#A7F8FF" />
                        <stop offset="0.03" stop-color="#9DF1FF" />
                        <stop offset="0.08" stop-color="#84E1FF" />
                        <stop offset="0.15" stop-color="#5AC7FF" />
                        <stop offset="0.22" stop-color="#21A2FF" />
                        <stop offset="0.26" stop-color="#008DFF" />
                        <stop offset="0.66" stop-color="#7F33FF" />
                        <stop offset="0.99" stop-color="#39127D" />
                    </linearGradient>
                    <clipPath id="clip0_331_37336">
                        <rect width="71" height="71" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <svg
                v-if="app === 'TOOLKIT' && stage !== 'CONNECTED'"
                width="100"
                height="100"
                viewBox="0 0 54 54"
                fill="none"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    id="logo-text"
                    d="M14.09,10.85a4.7,4.7,0,0,0,.19,1.48,7.73,7.73,0,0,0,.54,1.19.77.77,0,0,1,.12.38.64.64,0,0,1-.32.49l-1,.7a.83.83,0,0,1-.44.15.69.69,0,0,1-.49-.23,3.8,3.8,0,0,1-.6-.77q-.25-.42-.51-1a6.14,6.14,0,0,1-4.89,2.3,4.54,4.54,0,0,1-3.32-1.19,4.27,4.27,0,0,1-1.22-3.2A4.28,4.28,0,0,1,3.61,7.75,6.06,6.06,0,0,1,7.69,6.46a12.47,12.47,0,0,1,1.76.13q.92.13,1.91.36V5.73a3.65,3.65,0,0,0-.79-2.66A3.81,3.81,0,0,0,7.86,2.3a7.71,7.71,0,0,0-1.79.22,12.78,12.78,0,0,0-1.79.57,4.55,4.55,0,0,1-.58.22l-.26,0q-.35,0-.35-.52V2a1.09,1.09,0,0,1,.12-.58,1.2,1.2,0,0,1,.47-.35A10.88,10.88,0,0,1,5.77.32,10.19,10.19,0,0,1,8.36,0a6,6,0,0,1,4.35,1.35,5.49,5.49,0,0,1,1.38,4.09ZM7.34,13.38a5.36,5.36,0,0,0,1.72-.31A3.63,3.63,0,0,0,10.63,12,2.62,2.62,0,0,0,11.19,11a5.63,5.63,0,0,0,.16-1.44v-.7a14.35,14.35,0,0,0-1.53-.28,12.37,12.37,0,0,0-1.56-.1,3.84,3.84,0,0,0-2.47.67A2.34,2.34,0,0,0,5,11a2.35,2.35,0,0,0,.61,1.76A2.4,2.4,0,0,0,7.34,13.38Zm13.35,1.8a1,1,0,0,1-.64-.16,1.3,1.3,0,0,1-.35-.65L15.81,1.51a3,3,0,0,1-.15-.67.36.36,0,0,1,.41-.41H17.7a1,1,0,0,1,.65.16,1.4,1.4,0,0,1,.33.65l2.79,11,2.59-11A1.17,1.17,0,0,1,24.39.6a1.1,1.1,0,0,1,.67-.16H26.4a1.1,1.1,0,0,1,.67.16,1.17,1.17,0,0,1,.32.65L30,12.39,32.88,1.25A1.39,1.39,0,0,1,33.22.6a1,1,0,0,1,.65-.16h1.54a.36.36,0,0,1,.41.41,1.36,1.36,0,0,1,0,.26,3.64,3.64,0,0,1-.12.41l-4,12.86a1.3,1.3,0,0,1-.35.65,1,1,0,0,1-.64.16H29.25a1,1,0,0,1-.67-.17,1.26,1.26,0,0,1-.32-.67L25.67,3.64,23.11,14.34a1.26,1.26,0,0,1-.32.67,1,1,0,0,1-.67.17Zm21.36.44a11.28,11.28,0,0,1-2.56-.29,7.44,7.44,0,0,1-1.92-.67,1,1,0,0,1-.61-.93v-.84q0-.52.38-.52a.9.9,0,0,1,.31.06l.42.17a8.77,8.77,0,0,0,1.83.58,9.78,9.78,0,0,0,2,.2,4.48,4.48,0,0,0,2.43-.55,1.76,1.76,0,0,0,.86-1.57,1.61,1.61,0,0,0-.45-1.16A4.29,4.29,0,0,0,43,9.22l-2.41-.76A5.15,5.15,0,0,1,38,6.78a3.94,3.94,0,0,1-.83-2.41,3.7,3.7,0,0,1,.45-1.85,4.47,4.47,0,0,1,1.19-1.37A5.27,5.27,0,0,1,40.51.29,7.4,7.4,0,0,1,42.6,0a8.87,8.87,0,0,1,1.12.07q.57.07,1.08.19t.95.26a4.27,4.27,0,0,1,.7.29,1.59,1.59,0,0,1,.49.41.94.94,0,0,1,.15.55v.79q0,.52-.38.52a1.76,1.76,0,0,1-.64-.2,7.74,7.74,0,0,0-3.2-.64,4.37,4.37,0,0,0-2.21.47,1.6,1.6,0,0,0-.79,1.48,1.58,1.58,0,0,0,.49,1.18,4.94,4.94,0,0,0,1.83.92L44.55,7a5.08,5.08,0,0,1,2.57,1.6A3.76,3.76,0,0,1,47.9,11a4.21,4.21,0,0,1-.44,1.93,4.4,4.4,0,0,1-1.21,1.47,5.43,5.43,0,0,1-1.85.93A8.25,8.25,0,0,1,42.05,15.62Z"
                />
                <path
                    fill="#FF9900"
                    class="cls-1"
                    d="M45.19,23.81C39.72,27.85,31.78,30,25,30A36.64,36.64,0,0,1,.22,20.57c-.51-.46-.06-1.09.56-.74A49.78,49.78,0,0,0,25.53,26.4,49.23,49.23,0,0,0,44.4,22.53C45.32,22.14,46.1,23.14,45.19,23.81Z"
                />
                <path
                    fill="#FF9900"
                    class="cls-1"
                    d="M47.47,21.21c-.7-.9-4.63-.42-6.39-.21-.53.06-.62-.4-.14-.74,3.13-2.2,8.27-1.57,8.86-.83s-.16,5.89-3.09,8.35c-.45.38-.88.18-.68-.32C46.69,25.8,48.17,22.11,47.47,21.21Z"
                />
            </svg>
        </div>
        <template v-if="stage === 'START'">
            <div class="auth-container-section">
                <div class="existing-logins" v-if="existingLogin.id !== -1 && app === 'AMAZONQ'">
                    <div class="title">Connect with an existing account:</div>
                    <SelectableItem
                        @toggle="toggleItemSelection"
                        :isSelected="selectedLoginOption === LoginOption.EXISTING_LOGINS"
                        :itemId="LoginOption.EXISTING_LOGINS"
                        :itemText="existingLogin.text"
                        :itemTitle="existingLogin.title"
                        class="selectable-item"
                    ></SelectableItem>
                    <div class="title">Or, choose a sign-in option:</div>
                </div>
                <div class="title" v-if="existingLogin.id === -1">Choose a sign-in option:</div>
                <SelectableItem
                    v-if="app === 'AMAZONQ'"
                    @toggle="toggleItemSelection"
                    :isSelected="selectedLoginOption === LoginOption.BUILDER_ID"
                    :itemId="LoginOption.BUILDER_ID"
                    :itemText="'Create or sign-in using AWS Builder ID'"
                    :itemTitle="'Personal'"
                    class="selectable-item"
                ></SelectableItem>
                <SelectableItem
                    @toggle="toggleItemSelection"
                    :isSelected="selectedLoginOption === LoginOption.ENTERPRISE_SSO"
                    :itemId="LoginOption.ENTERPRISE_SSO"
                    :itemText="'Single sign-on with AWS IAM Identity Center'"
                    :itemTitle="'Workforce'"
                    class="selectable-item"
                ></SelectableItem>
                <SelectableItem
                    v-if="app === 'TOOLKIT'"
                    @toggle="toggleItemSelection"
                    :isSelected="selectedLoginOption === LoginOption.IAM_CREDENTIAL"
                    :itemId="LoginOption.IAM_CREDENTIAL"
                    :itemText="'Store keys locally for use with AWS CLI tools'"
                    :itemTitle="'IAM Credential'"
                    class="selectable-item"
                ></SelectableItem>
                <button
                    class="continue-button"
                    :disabled="selectedLoginOption === 0"
                    v-on:click="handleContinueClick()"
                >
                    Continue
                </button>
            </div>
        </template>
        <template v-if="stage === 'SSO_FORM'">
            <button class="back-button" @click="handleBackButtonClick">
                <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.98667 0.0933332L5.73333 0.786666L1.57333 4.94667H12.0267V5.96H1.57333L5.73333 10.0667L4.98667 10.8133L0.0266666 5.8V5.10667L4.98667 0.0933332Z"
                        fill="#21A2FF"
                    />
                </svg>
            </button>
            <div class="auth-container-section">
                <div class="title">Sign in with SSO:</div>
                <div class="p">Start URL</div>
                <div class="hint">URL for your organization, provided by an admin or help desk</div>
                <input
                    class="urlInput"
                    type="text"
                    id="startUrl"
                    name="startUrl"
                    @input="handleUrlInput"
                    v-model="startUrl"
                />
                <br /><br />
                <div class="title">Region</div>
                <div class="hint">AWS Region that hosts identity directory</div>
                <select class="regionSelect" id="regions" name="regions" v-model="selectedRegion">
                    <option v-for="region in regions" :key="region.id" :value="region.id">
                        {{ \`\${region.name} (\${region.id})\` }}
                    </option>
                </select>
                <br /><br />
                <button class="continue-button" :disabled="!urlValid" v-on:click="handleContinueClick()">
                    Continue
                </button>
            </div>
        </template>

        <template v-if="stage === 'AUTHENTICATING'">
            <div class="auth-container-section">
                <div v-if="app === 'TOOLKIT' && profileName.length > 0" class="title">Connecting to IAM...</div>
                <div v-else class="title">Authenticating in browser...</div>
                <button class="continue-button" v-on:click="handleCancelButtom()">Cancel</button>
            </div>
        </template>

        <template v-if="stage === 'CONNECTED'"> </template>
        <template v-if="stage === 'AWS_PROFILE'">
            <button class="back-button" @click="handleBackButtonClick">
                <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.98667 0.0933332L5.73333 0.786666L1.57333 4.94667H12.0267V5.96H1.57333L5.73333 10.0667L4.98667 10.8133L0.0266666 5.8V5.10667L4.98667 0.0933332Z"
                        fill="#21A2FF"
                    />
                </svg>
            </button>
            <div class="p">Profile Name</div>
            <div class="hint">The identifier for these credentials</div>
            <input class="iamInput" type="text" id="profileName" name="profileName" v-model="profileName" />

            <br /><br />
            <div class="p">Access Key</div>
            <input class="iamInput" type="text" id="accessKey" name="accessKey" v-model="accessKey" />

            <br /><br />
            <div class="p">Secret Key</div>
            <input class="iamInput" type="text" id="secretKey" name="secretKey" v-model="secretKey" />

            <br /><br />
            <button
                class="continue-button"
                :disabled="profileName.length <= 0 || accessKey.length <= 0 || secretKey.length <= 0"
                v-on:click="handleContinueClick()"
            >
                Continue
            </button>
        </template>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SelectableItem from './selectableItem.vue'
import { CommonAuthWebview } from './backend'
import { WebviewClientFactory } from '../../../webviews/client'
import { Region } from '../../../shared/regions/endpoints'

const client = WebviewClientFactory.create<CommonAuthWebview>()

/** Where the user is currently in the builder id setup process */
type Stage = 'START' | 'SSO_FORM' | 'CONNECTED' | 'AUTHENTICATING' | 'AWS_PROFILE'
enum LoginOption {
    NONE,
    BUILDER_ID,
    ENTERPRISE_SSO,
    IAM_CREDENTIAL,
    EXISTING_LOGINS,
}

function validateSsoUrlFormat(url: string) {
    const regex = /^https?:\\/\\/(.+)\\.awsapps\\.com\\/start$/
    return regex.test(url)
}

function isBuilderId(url: string) {
    return url === 'https://view.awsapps.com/start'
}

export default defineComponent({
    name: 'Login',
    components: { SelectableItem },
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        app: {
            type: String,
            default: '',
            required: true,
        },
    },
    data() {
        return {
            existingLogin: { id: -1, text: '', title: '' },
            selectedLoginOption: LoginOption.NONE,
            stage: 'START' as Stage,
            regions: [] as Region[],
            urlValid: false,
            selectedRegion: '',
            startUrl: '',
            app: this.app,
            LoginOption,
            profileName: '',
            accessKey: '',
            secretKey: '',
        }
    },
    async created() {
        await this.emitUpdate('created')

        const connection = await client.fetchConnection()
        if (connection) {
            this.existingLogin = {
                id: LoginOption.EXISTING_LOGINS,
                text: 'Used by another AWS Extension',
                title: isBuilderId(connection.startUrl) ? 'AWS Builder ID' : 'AWS IAM Identity Center',
            }
        }
    },

    mounted() {
        this.fetchRegions()
    },

    methods: {
        toggleItemSelection(itemId: number) {
            this.selectedLoginOption = itemId
        },
        handleDocumentClick(event: any) {
            const isClickInsideSelectableItems = event.target.closest('.selectable-item')
            if (!isClickInsideSelectableItems) {
                this.selectedLoginOption = 0
            }
        },
        handleBackButtonClick() {
            this.stage = 'START'
        },
        async handleContinueClick() {
            if (this.stage === 'START') {
                if (this.selectedLoginOption === LoginOption.BUILDER_ID) {
                    this.stage = 'AUTHENTICATING'
                    const error = await client.startBuilderIdSetup(this.app)
                    if (error) {
                        this.stage = 'START'
                        void client.errorNotification(error)
                    } else {
                        this.stage = 'CONNECTED'
                    }
                } else if (this.selectedLoginOption === LoginOption.ENTERPRISE_SSO) {
                    this.stage = 'SSO_FORM'
                } else if (this.selectedLoginOption === LoginOption.EXISTING_LOGINS) {
                    // TODO:
                    this.stage = 'START'
                } else if (this.selectedLoginOption === LoginOption.IAM_CREDENTIAL) {
                    this.stage = 'AWS_PROFILE'
                }
            } else if (this.stage === 'SSO_FORM') {
                this.stage = 'AUTHENTICATING'
                const error = await client.startEnterpriseSetup(this.startUrl, this.selectedRegion, this.app)
                if (error) {
                    this.stage = 'START'
                    void client.errorNotification(error)
                } else {
                    this.stage = 'CONNECTED'
                }
            } else if (this.stage === 'AWS_PROFILE') {
                this.stage = 'AUTHENTICATING'
                const error = await client.startIamCredentialSetup(this.profileName, this.accessKey, this.secretKey)
                if (error) {
                    this.stage = 'START'
                    void client.errorNotification(error)
                } else {
                    this.stage = 'CONNECTED'
                }
            }
        },
        handleUrlInput() {
            if (this.startUrl && validateSsoUrlFormat(this.startUrl)) {
                this.urlValid = true
            } else {
                this.urlValid = false
            }
        },
        handleCancelButtom() {
            this.stage = 'START'
        },
        async fetchRegions() {
            const regions = await client.getRegions()
            this.regions = regions
        },
        async emitUpdate(cause?: string) {},
    },
})
<\/script>

<style>
.selectable-item {
    margin-bottom: 10px;
    margin-top: 10px;
}
.continue-button {
    background-color: #29a7ff;
    color: white;
    width: 100%;
    height: 40px;
}
.back-button {
    background: none;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 30px;
}
.logoIcon {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: flex-start;
    padding-top: 150px;
    padding-bottom: 10px;
    padding-left: 10px;
    height: auto;
}
.hint {
    color: #948a8a;
    margin-bottom: 5px;
    margin-top: 5px;
}
.title {
    margin-bottom: 5px;
    margin-top: 5px;
    font-size: 23px;
    font-size: 15px;
    font-weight: bold;
    color: white;
}
.continue-button:disabled {
    background-color: #252526;
    color: #6f6f6f;
}
.urlInput {
    background-color: #252526;
    width: 100%;
    color: white;
}
.iamInput {
    background-color: #252526;
    width: 100%;
    color: white;
}
.regionSelect {
    background-color: #252526;
    width: 100%;
    color: white;
}
#logo {
    fill: var(--vscode-button-foreground);
    padding-top: 0.2em;
}
body.vscode-dark #logo-text {
    fill: white;
}
body.vscode-light #logo-text {
    fill: #232f3e; /* squid ink */
}
</style>
`],sourceRoot:""}]);const c=r},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/selectableItem.vue?vue&type=style&index=0&id=f12a0172&scoped=true&lang=css":(i,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),d=t.n(e),s=t("../../node_modules/css-loader/dist/runtime/api.js"),l=t.n(s),r=l()(d());r.push([i.id,`
.item-container[data-v-f12a0172] {
    border: 2px solid white;
    padding: 5px;
    display: flex;
}
.selected[data-v-f12a0172] {
    border: 2px solid #29a7ff;
    user-select: none;
}
.title[data-v-f12a0172] {
    font-size: 15px;
    font-weight: bold;
    color: white;
}
.text[data-v-f12a0172] {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    color: white;
}
.icon[data-v-f12a0172] {
    padding-right: 10px;
}
`,"",{version:3,sources:["webpack://./src/login/webview/vue/selectableItem.vue"],names:[],mappings:";AAwFA;IACI,uBAAuB;IACvB,YAAY;IACZ,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;AACA;IACI,eAAe;IACf,iBAAiB;IACjB,YAAY;AAChB;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,YAAY;AAChB;AAEA;IACI,mBAAmB;AACvB",sourcesContent:[`<template>
    <div class="item-container" :class="{ selected: isSelected }" @click="toggleSelection">
        <div class="icon">
            <svg
                v-if="itemTitle == 'Personal'"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="translate(0, 20)"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 2C6.68228 2 5.61 3.07228 5.61 4.39C5.61 5.70772 6.68228 6.78 8 6.78C9.31771 6.78 10.39 5.70772 10.39 4.39C10.39 3.07228 9.31772 2 8 2ZM3.61 4.39C3.61 1.96772 5.57771 0 8 0C10.4223 0 12.39 1.96771 12.39 4.39C12.39 5.66447 11.8453 6.81311 10.9762 7.61551C11.1666 7.71116 11.3535 7.81608 11.5368 7.93001C13.5215 9.15787 15 11.3598 15 14V15H1V14C1 11.147 2.63919 8.7213 4.99701 7.59061C4.14356 6.78943 3.61 5.65134 3.61 4.39ZM10.482 9.62922C9.71501 9.15233 8.88729 8.90797 8.00229 8.91L8 8.91C5.59623 8.91 3.5507 10.634 3.09474 13H12.8975C12.601 11.5742 11.6867 10.3744 10.484 9.63047L10.482 9.62922Z"
                    fill="white"
                />
            </svg>
            <svg
                v-if="itemTitle == 'Workforce'"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="translate(0, 20)"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 3C3.44772 3 3 3.44772 3 4C3 4.55229 3.44772 5 4 5C4.55228 5 5 4.55229 5 4C5 3.44772 4.55228 3 4 3ZM1 4C1 2.34315 2.34315 1 4 1C5.65685 1 7 2.34315 7 4C7 5.65676 5.65701 6.99984 4.00029 7C6.21244 7.00016 8 8.78781 8 11C8 8.78772 9.78771 7 12 7C14.2123 7 16 8.78772 16 11V14C16 14.5523 15.5523 15 15 15H9C8.44771 15 8 14.5523 8 14C8 14.5523 7.55228 15 7 15H1C0.447715 15 0 14.5523 0 14V11C0 8.78772 1.78801 7 4.00029 7C2.34344 7 1 5.65685 1 4ZM12 7C10.3431 7 9 5.65685 9 4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4C15 5.65685 13.6569 7 12 7ZM11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4C13 4.55229 12.5523 5 12 5C11.4477 5 11 4.55229 11 4ZM10 11C10 9.89228 10.8923 9 12 9C13.1077 9 14 9.89228 14 11V13H10V11ZM2 11C2 9.89228 2.89228 9 4 9C5.10772 9 6 9.89228 6 11V13H2V11Z"
                    fill="white"
                />
            </svg>
            <svg
                v-if="itemTitle == 'IAM Credential'"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="translate(0, 20)"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0042 11C10.0042 11.009 10.002 11.0325 9.99974 11.0548L9.99979 11.0502L10 11L10 10.9993L9.99997 11L9.995 11.1L9.99652 11.0855L9.99974 11.0548C9.978 13.1703 8.62586 15.046 6.62064 15.7331C4.59789 16.4261 2.3583 15.7562 1.0483 14.0663C-0.261694 12.3764 -0.352147 10.0406 0.823246 8.25441C1.89701 6.62271 3.81005 5.77972 5.71121 6.05367L12.3412 0.24769C12.5235 0.0880192 12.7576 0 13 0H15C15.5523 0 16 0.447715 16 1V6C16 6.55228 15.5523 7 15 7H14V8C14 8.55229 13.5523 9 13 9H12V10C12 10.5523 11.5523 11 11 11H10.0042ZM13.376 2L6.65881 7.88231C6.41017 8.10005 6.07001 8.18087 5.75 8.09825C4.50783 7.77752 3.19918 8.28216 2.49395 9.35384C1.78871 10.4255 1.84298 11.827 2.62898 12.841C3.41498 13.8549 4.75873 14.2569 5.97239 13.841C7.18604 13.4252 8.00096 12.2837 8 11.0007L8.00502 10.9C8.03175 10.634 8.03175 10.366 8.00502 10.1C7.94583 9.51115 8.40818 9 9 9H10V8C10 7.44772 10.4477 7 11 7H12V6C12 5.44772 12.4477 5 13 5H14V2H13.376ZM6 10H4V12H6V10Z"
                    fill="white"
                />
            </svg>
        </div>
        <div class="text">
            <div class="title">{{ itemTitle }}</div>
            <div class="p">{{ itemText }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'SelectableItem',
    components: {},
    props: {
        itemText: String,
        itemTitle: String,
        isSelected: Boolean,
        itemId: Number,
    },
    data() {
        return {
            itemText: this.itemText,
            isSelected: this.isSelected,
            itemId: this.itemId,
            itemTitle: this.itemTitle,
        }
    },
    async created() {},
    methods: {
        toggleSelection() {
            this.$emit('toggle', this.itemId)
        },
    },
})
<\/script>

<style scoped>
.item-container {
    border: 2px solid white;
    padding: 5px;
    display: flex;
}
.selected {
    border: 2px solid #29a7ff;
    user-select: none;
}
.title {
    font-size: 15px;
    font-weight: bold;
    color: white;
}

.text {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    color: white;
}

.icon {
    padding-right: 10px;
}
</style>
`],sourceRoot:""}]);const c=r},"../../node_modules/css-loader/dist/runtime/api.js":i=>{"use strict";i.exports=function(n){var t=[];return t.toString=function(){return this.map(function(d){var s="",l=typeof d[5]<"u";return d[4]&&(s+="@supports (".concat(d[4],") {")),d[2]&&(s+="@media ".concat(d[2]," {")),l&&(s+="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {")),s+=n(d),l&&(s+="}"),d[2]&&(s+="}"),d[4]&&(s+="}"),s}).join("")},t.i=function(d,s,l,r,c){typeof d=="string"&&(d=[[null,d,void 0]]);var A={};if(l)for(var h=0;h<this.length;h++){var E=this[h][0];E!=null&&(A[E]=!0)}for(var a=0;a<d.length;a++){var _=[].concat(d[a]);l&&A[_[0]]||(typeof c<"u"&&(typeof _[5]>"u"||(_[1]="@layer".concat(_[5].length>0?" ".concat(_[5]):""," {").concat(_[1],"}")),_[5]=c),s&&(_[2]&&(_[1]="@media ".concat(_[2]," {").concat(_[1],"}")),_[2]=s),r&&(_[4]?(_[1]="@supports (".concat(_[4],") {").concat(_[1],"}"),_[4]=r):_[4]="".concat(r)),t.push(_))}},t}},"../../node_modules/css-loader/dist/runtime/sourceMaps.js":i=>{"use strict";i.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if(typeof btoa=="function"){var d=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),l="/*# ".concat(s," */");return[t].concat([l]).join(`
`)}return[t].join(`
`)}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/login.vue?vue&type=script&lang=ts":(i,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>E});var e=t("vue"),d=t.n(e),s=t("./src/login/webview/vue/selectableItem.vue"),l=t("./src/webviews/client.ts");const r=l.WebviewClientFactory.create();var c=(a=>(a[a.NONE=0]="NONE",a[a.BUILDER_ID=1]="BUILDER_ID",a[a.ENTERPRISE_SSO=2]="ENTERPRISE_SSO",a[a.IAM_CREDENTIAL=3]="IAM_CREDENTIAL",a[a.EXISTING_LOGINS=4]="EXISTING_LOGINS",a))(c||{});function A(a){return/^https?:\/\/(.+)\.awsapps\.com\/start$/.test(a)}function h(a){return a==="https://view.awsapps.com/start"}const E=(0,e.defineComponent)({name:"Login",components:{SelectableItem:s.default},props:{disabled:{type:Boolean,default:!1},app:{type:String,default:"",required:!0}},data(){return{existingLogin:{id:-1,text:"",title:""},selectedLoginOption:0,stage:"START",regions:[],urlValid:!1,selectedRegion:"",startUrl:"",app:this.app,LoginOption:c,profileName:"",accessKey:"",secretKey:""}},async created(){await this.emitUpdate("created");const a=await r.fetchConnection();a&&(this.existingLogin={id:4,text:"Used by another AWS Extension",title:h(a.startUrl)?"AWS Builder ID":"AWS IAM Identity Center"})},mounted(){this.fetchRegions()},methods:{toggleItemSelection(a){this.selectedLoginOption=a},handleDocumentClick(a){a.target.closest(".selectable-item")||(this.selectedLoginOption=0)},handleBackButtonClick(){this.stage="START"},async handleContinueClick(){if(this.stage==="START")if(this.selectedLoginOption===1){this.stage="AUTHENTICATING";const a=await r.startBuilderIdSetup(this.app);a?(this.stage="START",r.errorNotification(a)):this.stage="CONNECTED"}else this.selectedLoginOption===2?this.stage="SSO_FORM":this.selectedLoginOption===4?this.stage="START":this.selectedLoginOption===3&&(this.stage="AWS_PROFILE");else if(this.stage==="SSO_FORM"){this.stage="AUTHENTICATING";const a=await r.startEnterpriseSetup(this.startUrl,this.selectedRegion,this.app);a?(this.stage="START",r.errorNotification(a)):this.stage="CONNECTED"}else if(this.stage==="AWS_PROFILE"){this.stage="AUTHENTICATING";const a=await r.startIamCredentialSetup(this.profileName,this.accessKey,this.secretKey);a?(this.stage="START",r.errorNotification(a)):this.stage="CONNECTED"}},handleUrlInput(){this.startUrl&&A(this.startUrl)?this.urlValid=!0:this.urlValid=!1},handleCancelButtom(){this.stage="START"},async fetchRegions(){const a=await r.getRegions();this.regions=a},async emitUpdate(a){}}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/root.vue?vue&type=script&lang=ts":(i,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>l});var e=t("vue"),d=t.n(e),s=t("./src/login/webview/vue/login.vue");const l=(0,e.defineComponent)({name:"auth",components:{Login:s.default},data(){return{}},mounted(){},methods:{}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/selectableItem.vue?vue&type=script&lang=ts":(i,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});var e=t("vue"),d=t.n(e);const s=(0,e.defineComponent)({name:"SelectableItem",components:{},props:{itemText:String,itemTitle:String,isSelected:Boolean,itemId:Number},data(){return{itemText:this.itemText,isSelected:this.isSelected,itemId:this.itemId,itemTitle:this.itemTitle}},async created(){},methods:{toggleSelection(){this.$emit("toggle",this.itemId)}}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/login.vue?vue&type=template&id=2e4b4bca&ts=true":(i,n,t)=>{"use strict";t.r(n),t.d(n,{render:()=>ie});var e=t("vue"),d=t.n(e);const s={class:"logoIcon"},l={key:0,width:"100",height:"100",viewBox:"0 0 71 71",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c=[(0,e.createStaticVNode)('<g clip-path="url(#clip0_331_37336)"><path d="M30.1307 1.46438L8.83068 13.7563C5.45818 15.7087 3.37256 19.3031 3.37256 23.2081V47.8067C3.37256 51.6969 5.45818 55.306 8.83068 57.2585L30.1307 69.5504C33.5032 71.5029 37.6596 71.5029 41.0321 69.5504L62.3321 57.2585C65.7046 55.306 67.7903 51.7117 67.7903 47.8067V23.2081C67.7903 19.3179 65.7046 15.7087 62.3321 13.7563L41.0321 1.46438C37.6596 -0.488125 33.5032 -0.488125 30.1307 1.46438Z" fill="url(#paint0_linear_331_37336)"></path><path d="M54.1966 21.6843L38.2364 12.469C37.5116 12.0401 36.5354 11.833 35.5739 11.833C34.6124 11.833 33.651 12.0401 32.9114 12.469L16.9512 21.6843C15.4868 22.5274 14.2887 24.5982 14.2887 26.2845V44.7149C14.2887 46.4011 15.4868 48.472 16.9512 49.3151L32.9114 58.5303C33.6362 58.9593 34.6124 59.1663 35.5739 59.1663C36.5354 59.1663 37.4968 58.9593 38.2364 58.5303L54.1966 49.3151C55.661 48.472 56.8591 46.4011 56.8591 44.7149V26.2845C56.8591 24.5982 55.661 22.5274 54.1966 21.6843ZM36.0029 54.7141C36.0029 54.7141 35.7958 54.7584 35.5887 54.7584C35.3816 54.7584 35.2337 54.7288 35.1745 54.7141L19.1699 45.4693C19.0072 45.3213 18.8002 44.9515 18.7558 44.7445V26.2549C18.8002 26.0478 19.022 25.678 19.1699 25.5301L35.1745 16.2853C35.1745 16.2853 35.3816 16.2409 35.5887 16.2409C35.7958 16.2409 35.9437 16.2705 36.0029 16.2853L52.0075 25.5301C52.1702 25.678 52.3772 26.0478 52.4216 26.2549V42.6588L40.0262 35.4997V33.5472C40.0262 33.1626 39.8191 32.8224 39.4937 32.6301L36.1212 30.6776C35.9585 30.5888 35.7662 30.5297 35.5887 30.5297C35.4112 30.5297 35.2189 30.574 35.0562 30.6776L31.6837 32.6301C31.3583 32.8224 31.1512 33.1774 31.1512 33.5472V37.4374C31.1512 37.822 31.3583 38.1622 31.6837 38.3545L35.0562 40.307C35.2189 40.3957 35.4112 40.4549 35.5887 40.4549C35.7662 40.4549 35.9585 40.4105 36.1212 40.307L37.8074 39.3307L50.2029 46.4899L36.0029 54.6845V54.7141Z" fill="white"></path></g><defs><linearGradient id="paint0_linear_331_37336" x1="64.1515" y1="-5.31021" x2="10.5465" y2="71.2515" gradientUnits="userSpaceOnUse"><stop stop-color="#A7F8FF"></stop><stop offset="0.03" stop-color="#9DF1FF"></stop><stop offset="0.08" stop-color="#84E1FF"></stop><stop offset="0.15" stop-color="#5AC7FF"></stop><stop offset="0.22" stop-color="#21A2FF"></stop><stop offset="0.26" stop-color="#008DFF"></stop><stop offset="0.66" stop-color="#7F33FF"></stop><stop offset="0.99" stop-color="#39127D"></stop></linearGradient><clipPath id="clip0_331_37336"><rect width="71" height="71" fill="white"></rect></clipPath></defs>',2)],A={key:1,width:"100",height:"100",viewBox:"0 0 54 54",fill:"none",id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"},_=[(0,e.createElementVNode)("path",{id:"logo-text",d:"M14.09,10.85a4.7,4.7,0,0,0,.19,1.48,7.73,7.73,0,0,0,.54,1.19.77.77,0,0,1,.12.38.64.64,0,0,1-.32.49l-1,.7a.83.83,0,0,1-.44.15.69.69,0,0,1-.49-.23,3.8,3.8,0,0,1-.6-.77q-.25-.42-.51-1a6.14,6.14,0,0,1-4.89,2.3,4.54,4.54,0,0,1-3.32-1.19,4.27,4.27,0,0,1-1.22-3.2A4.28,4.28,0,0,1,3.61,7.75,6.06,6.06,0,0,1,7.69,6.46a12.47,12.47,0,0,1,1.76.13q.92.13,1.91.36V5.73a3.65,3.65,0,0,0-.79-2.66A3.81,3.81,0,0,0,7.86,2.3a7.71,7.71,0,0,0-1.79.22,12.78,12.78,0,0,0-1.79.57,4.55,4.55,0,0,1-.58.22l-.26,0q-.35,0-.35-.52V2a1.09,1.09,0,0,1,.12-.58,1.2,1.2,0,0,1,.47-.35A10.88,10.88,0,0,1,5.77.32,10.19,10.19,0,0,1,8.36,0a6,6,0,0,1,4.35,1.35,5.49,5.49,0,0,1,1.38,4.09ZM7.34,13.38a5.36,5.36,0,0,0,1.72-.31A3.63,3.63,0,0,0,10.63,12,2.62,2.62,0,0,0,11.19,11a5.63,5.63,0,0,0,.16-1.44v-.7a14.35,14.35,0,0,0-1.53-.28,12.37,12.37,0,0,0-1.56-.1,3.84,3.84,0,0,0-2.47.67A2.34,2.34,0,0,0,5,11a2.35,2.35,0,0,0,.61,1.76A2.4,2.4,0,0,0,7.34,13.38Zm13.35,1.8a1,1,0,0,1-.64-.16,1.3,1.3,0,0,1-.35-.65L15.81,1.51a3,3,0,0,1-.15-.67.36.36,0,0,1,.41-.41H17.7a1,1,0,0,1,.65.16,1.4,1.4,0,0,1,.33.65l2.79,11,2.59-11A1.17,1.17,0,0,1,24.39.6a1.1,1.1,0,0,1,.67-.16H26.4a1.1,1.1,0,0,1,.67.16,1.17,1.17,0,0,1,.32.65L30,12.39,32.88,1.25A1.39,1.39,0,0,1,33.22.6a1,1,0,0,1,.65-.16h1.54a.36.36,0,0,1,.41.41,1.36,1.36,0,0,1,0,.26,3.64,3.64,0,0,1-.12.41l-4,12.86a1.3,1.3,0,0,1-.35.65,1,1,0,0,1-.64.16H29.25a1,1,0,0,1-.67-.17,1.26,1.26,0,0,1-.32-.67L25.67,3.64,23.11,14.34a1.26,1.26,0,0,1-.32.67,1,1,0,0,1-.67.17Zm21.36.44a11.28,11.28,0,0,1-2.56-.29,7.44,7.44,0,0,1-1.92-.67,1,1,0,0,1-.61-.93v-.84q0-.52.38-.52a.9.9,0,0,1,.31.06l.42.17a8.77,8.77,0,0,0,1.83.58,9.78,9.78,0,0,0,2,.2,4.48,4.48,0,0,0,2.43-.55,1.76,1.76,0,0,0,.86-1.57,1.61,1.61,0,0,0-.45-1.16A4.29,4.29,0,0,0,43,9.22l-2.41-.76A5.15,5.15,0,0,1,38,6.78a3.94,3.94,0,0,1-.83-2.41,3.7,3.7,0,0,1,.45-1.85,4.47,4.47,0,0,1,1.19-1.37A5.27,5.27,0,0,1,40.51.29,7.4,7.4,0,0,1,42.6,0a8.87,8.87,0,0,1,1.12.07q.57.07,1.08.19t.95.26a4.27,4.27,0,0,1,.7.29,1.59,1.59,0,0,1,.49.41.94.94,0,0,1,.15.55v.79q0,.52-.38.52a1.76,1.76,0,0,1-.64-.2,7.74,7.74,0,0,0-3.2-.64,4.37,4.37,0,0,0-2.21.47,1.6,1.6,0,0,0-.79,1.48,1.58,1.58,0,0,0,.49,1.18,4.94,4.94,0,0,0,1.83.92L44.55,7a5.08,5.08,0,0,1,2.57,1.6A3.76,3.76,0,0,1,47.9,11a4.21,4.21,0,0,1-.44,1.93,4.4,4.4,0,0,1-1.21,1.47,5.43,5.43,0,0,1-1.85.93A8.25,8.25,0,0,1,42.05,15.62Z"},null,-1),(0,e.createElementVNode)("path",{fill:"#FF9900",class:"cls-1",d:"M45.19,23.81C39.72,27.85,31.78,30,25,30A36.64,36.64,0,0,1,.22,20.57c-.51-.46-.06-1.09.56-.74A49.78,49.78,0,0,0,25.53,26.4,49.23,49.23,0,0,0,44.4,22.53C45.32,22.14,46.1,23.14,45.19,23.81Z"},null,-1),(0,e.createElementVNode)("path",{fill:"#FF9900",class:"cls-1",d:"M47.47,21.21c-.7-.9-4.63-.42-6.39-.21-.53.06-.62-.4-.14-.74,3.13-2.2,8.27-1.57,8.86-.83s-.16,5.89-3.09,8.35c-.45.38-.88.18-.68-.32C46.69,25.8,48.17,22.11,47.47,21.21Z"},null,-1)],b={key:0,class:"auth-container-section"},y={key:0,class:"existing-logins"},O=(0,e.createElementVNode)("div",{class:"title"},"Connect with an existing account:",-1),M=(0,e.createElementVNode)("div",{class:"title"},"Or, choose a sign-in option:",-1),R={key:1,class:"title"},N=["disabled"],u=[(0,e.createElementVNode)("svg",{width:"13",height:"11",viewBox:"0 0 13 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,e.createElementVNode)("path",{d:"M4.98667 0.0933332L5.73333 0.786666L1.57333 4.94667H12.0267V5.96H1.57333L5.73333 10.0667L4.98667 10.8133L0.0266666 5.8V5.10667L4.98667 0.0933332Z",fill:"#21A2FF"})],-1)],f={class:"auth-container-section"},p=(0,e.createElementVNode)("div",{class:"title"},"Sign in with SSO:",-1),m=(0,e.createElementVNode)("div",{class:"p"},"Start URL",-1),v=(0,e.createElementVNode)("div",{class:"hint"},"URL for your organization, provided by an admin or help desk",-1),T=(0,e.createElementVNode)("br",null,null,-1),L=(0,e.createElementVNode)("br",null,null,-1),D=(0,e.createElementVNode)("div",{class:"title"},"Region",-1),B=(0,e.createElementVNode)("div",{class:"hint"},"AWS Region that hosts identity directory",-1),j=["value"],w=(0,e.createElementVNode)("br",null,null,-1),P=(0,e.createElementVNode)("br",null,null,-1),k=["disabled"],H={key:2,class:"auth-container-section"},Z={key:0,class:"title"},G={key:1,class:"title"},$=[(0,e.createElementVNode)("svg",{width:"13",height:"11",viewBox:"0 0 13 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,e.createElementVNode)("path",{d:"M4.98667 0.0933332L5.73333 0.786666L1.57333 4.94667H12.0267V5.96H1.57333L5.73333 10.0667L4.98667 10.8133L0.0266666 5.8V5.10667L4.98667 0.0933332Z",fill:"#21A2FF"})],-1)],Y=(0,e.createElementVNode)("div",{class:"p"},"Profile Name",-1),X=(0,e.createElementVNode)("div",{class:"hint"},"The identifier for these credentials",-1),z=(0,e.createElementVNode)("br",null,null,-1),J=(0,e.createElementVNode)("br",null,null,-1),Q=(0,e.createElementVNode)("div",{class:"p"},"Access Key",-1),q=(0,e.createElementVNode)("br",null,null,-1),ee=(0,e.createElementVNode)("br",null,null,-1),te=(0,e.createElementVNode)("div",{class:"p"},"Secret Key",-1),ne=(0,e.createElementVNode)("br",null,null,-1),se=(0,e.createElementVNode)("br",null,null,-1),oe=["disabled"];function ie(o,g,de,ae,re,ue){const V=(0,e.resolveComponent)("SelectableItem");return(0,e.openBlock)(),(0,e.createElementBlock)("div",{class:(0,e.normalizeClass)([[o.disabled?"disabled-form":""],"auth-container"]),onClick:g[12]||(g[12]=(...C)=>o.handleDocumentClick&&o.handleDocumentClick(...C))},[(0,e.createElementVNode)("div",s,[(0,e.createCommentVNode)(" Icon "),o.app==="AMAZONQ"&&o.stage!=="CONNECTED"?((0,e.openBlock)(),(0,e.createElementBlock)("svg",l,c)):(0,e.createCommentVNode)("v-if",!0),o.app==="TOOLKIT"&&o.stage!=="CONNECTED"?((0,e.openBlock)(),(0,e.createElementBlock)("svg",A,_)):(0,e.createCommentVNode)("v-if",!0)]),o.stage==="START"?((0,e.openBlock)(),(0,e.createElementBlock)("div",b,[o.existingLogin.id!==-1&&o.app==="AMAZONQ"?((0,e.openBlock)(),(0,e.createElementBlock)("div",y,[O,(0,e.createVNode)(V,{onToggle:o.toggleItemSelection,isSelected:o.selectedLoginOption===o.LoginOption.EXISTING_LOGINS,itemId:o.LoginOption.EXISTING_LOGINS,itemText:o.existingLogin.text,itemTitle:o.existingLogin.title,class:"selectable-item"},null,8,["onToggle","isSelected","itemId","itemText","itemTitle"]),M])):(0,e.createCommentVNode)("v-if",!0),o.existingLogin.id===-1?((0,e.openBlock)(),(0,e.createElementBlock)("div",R,"Choose a sign-in option:")):(0,e.createCommentVNode)("v-if",!0),o.app==="AMAZONQ"?((0,e.openBlock)(),(0,e.createBlock)(V,{key:2,onToggle:o.toggleItemSelection,isSelected:o.selectedLoginOption===o.LoginOption.BUILDER_ID,itemId:o.LoginOption.BUILDER_ID,itemText:"Create or sign-in using AWS Builder ID",itemTitle:"Personal",class:"selectable-item"},null,8,["onToggle","isSelected","itemId"])):(0,e.createCommentVNode)("v-if",!0),(0,e.createVNode)(V,{onToggle:o.toggleItemSelection,isSelected:o.selectedLoginOption===o.LoginOption.ENTERPRISE_SSO,itemId:o.LoginOption.ENTERPRISE_SSO,itemText:"Single sign-on with AWS IAM Identity Center",itemTitle:"Workforce",class:"selectable-item"},null,8,["onToggle","isSelected","itemId"]),o.app==="TOOLKIT"?((0,e.openBlock)(),(0,e.createBlock)(V,{key:3,onToggle:o.toggleItemSelection,isSelected:o.selectedLoginOption===o.LoginOption.IAM_CREDENTIAL,itemId:o.LoginOption.IAM_CREDENTIAL,itemText:"Store keys locally for use with AWS CLI tools",itemTitle:"IAM Credential",class:"selectable-item"},null,8,["onToggle","isSelected","itemId"])):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("button",{class:"continue-button",disabled:o.selectedLoginOption===0,onClick:g[0]||(g[0]=C=>o.handleContinueClick())}," Continue ",8,N)])):(0,e.createCommentVNode)("v-if",!0),o.stage==="SSO_FORM"?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:1},[(0,e.createElementVNode)("button",{class:"back-button",onClick:g[1]||(g[1]=(...C)=>o.handleBackButtonClick&&o.handleBackButtonClick(...C))},u),(0,e.createElementVNode)("div",f,[p,m,v,(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"urlInput",type:"text",id:"startUrl",name:"startUrl",onInput:g[2]||(g[2]=(...C)=>o.handleUrlInput&&o.handleUrlInput(...C)),"onUpdate:modelValue":g[3]||(g[3]=C=>o.startUrl=C)},null,544),[[e.vModelText,o.startUrl]]),T,L,D,B,(0,e.withDirectives)((0,e.createElementVNode)("select",{class:"regionSelect",id:"regions",name:"regions","onUpdate:modelValue":g[4]||(g[4]=C=>o.selectedRegion=C)},[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(o.regions,C=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{key:C.id,value:C.id},(0,e.toDisplayString)(`${C.name} (${C.id})`),9,j))),128))],512),[[e.vModelSelect,o.selectedRegion]]),w,P,(0,e.createElementVNode)("button",{class:"continue-button",disabled:!o.urlValid,onClick:g[5]||(g[5]=C=>o.handleContinueClick())}," Continue ",8,k)])],64)):(0,e.createCommentVNode)("v-if",!0),o.stage==="AUTHENTICATING"?((0,e.openBlock)(),(0,e.createElementBlock)("div",H,[o.app==="TOOLKIT"&&o.profileName.length>0?((0,e.openBlock)(),(0,e.createElementBlock)("div",Z,"Connecting to IAM...")):((0,e.openBlock)(),(0,e.createElementBlock)("div",G,"Authenticating in browser...")),(0,e.createElementVNode)("button",{class:"continue-button",onClick:g[6]||(g[6]=C=>o.handleCancelButtom())},"Cancel")])):(0,e.createCommentVNode)("v-if",!0),o.stage==="CONNECTED"?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:3},[],64)):(0,e.createCommentVNode)("v-if",!0),o.stage==="AWS_PROFILE"?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:4},[(0,e.createElementVNode)("button",{class:"back-button",onClick:g[7]||(g[7]=(...C)=>o.handleBackButtonClick&&o.handleBackButtonClick(...C))},$),Y,X,(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"iamInput",type:"text",id:"profileName",name:"profileName","onUpdate:modelValue":g[8]||(g[8]=C=>o.profileName=C)},null,512),[[e.vModelText,o.profileName]]),z,J,Q,(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"iamInput",type:"text",id:"accessKey",name:"accessKey","onUpdate:modelValue":g[9]||(g[9]=C=>o.accessKey=C)},null,512),[[e.vModelText,o.accessKey]]),q,ee,te,(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"iamInput",type:"text",id:"secretKey",name:"secretKey","onUpdate:modelValue":g[10]||(g[10]=C=>o.secretKey=C)},null,512),[[e.vModelText,o.secretKey]]),ne,se,(0,e.createElementVNode)("button",{class:"continue-button",disabled:o.profileName.length<=0||o.accessKey.length<=0||o.secretKey.length<=0,onClick:g[11]||(g[11]=C=>o.handleContinueClick())}," Continue ",8,oe)],64)):(0,e.createCommentVNode)("v-if",!0)],2)}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/root.vue?vue&type=template&id=5ba562a0&ts=true":(i,n,t)=>{"use strict";t.r(n),t.d(n,{render:()=>l});var e=t("vue"),d=t.n(e);const s={class:"body"};function l(r,c,A,h,E,a){const _=(0,e.resolveComponent)("Login");return(0,e.openBlock)(),(0,e.createElementBlock)("div",null,[(0,e.createCommentVNode)(" Body "),(0,e.createElementVNode)("div",s,[(0,e.createCommentVNode)(" Functionality "),(0,e.createVNode)(_,{disabled:!1,app:"TOOLKIT"})])])}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/selectableItem.vue?vue&type=template&id=f12a0172&scoped=true&ts=true":(i,n,t)=>{"use strict";t.r(n),t.d(n,{render:()=>N});var e=t("vue"),d=t.n(e);const s=I=>((0,e.pushScopeId)("data-v-f12a0172"),I=I(),(0,e.popScopeId)(),I),l={class:"icon"},r={key:0,width:"20",height:"20",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",transform:"translate(0, 20)"},A=[s(()=>(0,e.createElementVNode)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 2C6.68228 2 5.61 3.07228 5.61 4.39C5.61 5.70772 6.68228 6.78 8 6.78C9.31771 6.78 10.39 5.70772 10.39 4.39C10.39 3.07228 9.31772 2 8 2ZM3.61 4.39C3.61 1.96772 5.57771 0 8 0C10.4223 0 12.39 1.96771 12.39 4.39C12.39 5.66447 11.8453 6.81311 10.9762 7.61551C11.1666 7.71116 11.3535 7.81608 11.5368 7.93001C13.5215 9.15787 15 11.3598 15 14V15H1V14C1 11.147 2.63919 8.7213 4.99701 7.59061C4.14356 6.78943 3.61 5.65134 3.61 4.39ZM10.482 9.62922C9.71501 9.15233 8.88729 8.90797 8.00229 8.91L8 8.91C5.59623 8.91 3.5507 10.634 3.09474 13H12.8975C12.601 11.5742 11.6867 10.3744 10.484 9.63047L10.482 9.62922Z",fill:"white"},null,-1))],h={key:1,width:"20",height:"20",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",transform:"translate(0, 20)"},a=[s(()=>(0,e.createElementVNode)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3C3.44772 3 3 3.44772 3 4C3 4.55229 3.44772 5 4 5C4.55228 5 5 4.55229 5 4C5 3.44772 4.55228 3 4 3ZM1 4C1 2.34315 2.34315 1 4 1C5.65685 1 7 2.34315 7 4C7 5.65676 5.65701 6.99984 4.00029 7C6.21244 7.00016 8 8.78781 8 11C8 8.78772 9.78771 7 12 7C14.2123 7 16 8.78772 16 11V14C16 14.5523 15.5523 15 15 15H9C8.44771 15 8 14.5523 8 14C8 14.5523 7.55228 15 7 15H1C0.447715 15 0 14.5523 0 14V11C0 8.78772 1.78801 7 4.00029 7C2.34344 7 1 5.65685 1 4ZM12 7C10.3431 7 9 5.65685 9 4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4C15 5.65685 13.6569 7 12 7ZM11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4C13 4.55229 12.5523 5 12 5C11.4477 5 11 4.55229 11 4ZM10 11C10 9.89228 10.8923 9 12 9C13.1077 9 14 9.89228 14 11V13H10V11ZM2 11C2 9.89228 2.89228 9 4 9C5.10772 9 6 9.89228 6 11V13H2V11Z",fill:"white"},null,-1))],_={key:2,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",transform:"translate(0, 20)"},y=[s(()=>(0,e.createElementVNode)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.0042 11C10.0042 11.009 10.002 11.0325 9.99974 11.0548L9.99979 11.0502L10 11L10 10.9993L9.99997 11L9.995 11.1L9.99652 11.0855L9.99974 11.0548C9.978 13.1703 8.62586 15.046 6.62064 15.7331C4.59789 16.4261 2.3583 15.7562 1.0483 14.0663C-0.261694 12.3764 -0.352147 10.0406 0.823246 8.25441C1.89701 6.62271 3.81005 5.77972 5.71121 6.05367L12.3412 0.24769C12.5235 0.0880192 12.7576 0 13 0H15C15.5523 0 16 0.447715 16 1V6C16 6.55228 15.5523 7 15 7H14V8C14 8.55229 13.5523 9 13 9H12V10C12 10.5523 11.5523 11 11 11H10.0042ZM13.376 2L6.65881 7.88231C6.41017 8.10005 6.07001 8.18087 5.75 8.09825C4.50783 7.77752 3.19918 8.28216 2.49395 9.35384C1.78871 10.4255 1.84298 11.827 2.62898 12.841C3.41498 13.8549 4.75873 14.2569 5.97239 13.841C7.18604 13.4252 8.00096 12.2837 8 11.0007L8.00502 10.9C8.03175 10.634 8.03175 10.366 8.00502 10.1C7.94583 9.51115 8.40818 9 9 9H10V8C10 7.44772 10.4477 7 11 7H12V6C12 5.44772 12.4477 5 13 5H14V2H13.376ZM6 10H4V12H6V10Z",fill:"white"},null,-1))],O={class:"text"},M={class:"title"},R={class:"p"};function N(I,u,f,p,m,v){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{class:(0,e.normalizeClass)(["item-container",{selected:I.isSelected}]),onClick:u[0]||(u[0]=(...T)=>I.toggleSelection&&I.toggleSelection(...T))},[(0,e.createElementVNode)("div",l,[I.itemTitle=="Personal"?((0,e.openBlock)(),(0,e.createElementBlock)("svg",r,A)):(0,e.createCommentVNode)("v-if",!0),I.itemTitle=="Workforce"?((0,e.openBlock)(),(0,e.createElementBlock)("svg",h,a)):(0,e.createCommentVNode)("v-if",!0),I.itemTitle=="IAM Credential"?((0,e.openBlock)(),(0,e.createElementBlock)("svg",_,y)):(0,e.createCommentVNode)("v-if",!0)]),(0,e.createElementVNode)("div",O,[(0,e.createElementVNode)("div",M,(0,e.toDisplayString)(I.itemTitle),1),(0,e.createElementVNode)("div",R,(0,e.toDisplayString)(I.itemText),1)])],2)}},"./src/webviews/client.ts":(i,n,t)=>{"use strict";t.r(n),t.d(n,{WebviewClientFactory:()=>e});class e{static registerGlobalCommands(){const s=new Event("remount");window.addEventListener("message",l=>{const{command:r}=l.data;r==="$clear"&&(vscode.setState({}),this.messageListeners.forEach(c=>this.removeListener(c)),window.dispatchEvent(s))})}static addListener(s){this.messageListeners.add(s),window.addEventListener("message",s)}static removeListener(s){this.messageListeners.delete(s),window.removeEventListener("message",s)}static sendRequest(s,l,r){const c=JSON.parse(JSON.stringify(r)),A=new Promise((h,E)=>{const a=b=>{const y=b.data;if(s===y.id)if(this.removeListener(a),window.clearTimeout(_),y.error===!0){const O=JSON.parse(y.data);E(new Error(O.message))}else y.event?(typeof r[0]!="function"&&E(new Error(`Expected frontend event handler to be a function: ${l}`)),h(this.registerEventHandler(l,r[0]))):h(y.data)},_=setTimeout(()=>{this.removeListener(a),E(new Error(`Timed out while waiting for response: id: ${s}, command: ${l}`))},3e5);this.addListener(a)});return vscode.postMessage({id:s,command:l,data:c}),A}static registerEventHandler(s,l){const r=c=>{const A=c.data;if(A.command===s){if(!A.event)throw new Error(`Expected backend handler to be an event emitter: ${s}`);l(A.data)}};return this.addListener(r),{dispose:()=>this.removeListener(r)}}static create(){return this.initialized||(this.initialized=!0,this.registerGlobalCommands()),new Proxy({},{set:()=>{throw new TypeError("Cannot set property to webview client")},get:(s,l)=>{if(typeof l!="string"){console.warn(`Tried to index webview client with non-string property: ${String(l)}`);return}if(l==="init"){const c=vscode.getState()??{};if(c.__once)return()=>Promise.resolve();vscode.setState(Object.assign(c,{__once:!0}))}const r=(this.counter++).toString();return(...c)=>this.sendRequest(r,l,c)}})}}e.counter=0,e.initialized=!1,e.messageListeners=new Set},"../../node_modules/vue-loader/dist/exportHelper.js":(i,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=(t,e)=>{const d=t.__vccOpts||t;for(const[s,l]of e)d[s]=l;return d}},"./src/login/webview/vue/login.vue":(i,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var e=t("./src/login/webview/vue/login.vue?vue&type=template&id=2e4b4bca&ts=true"),d=t("./src/login/webview/vue/login.vue?vue&type=script&lang=ts"),s=t("./src/login/webview/vue/login.vue?vue&type=style&index=0&id=2e4b4bca&lang=css"),l=t("../../node_modules/vue-loader/dist/exportHelper.js");const c=(0,l.default)(d.default,[["render",e.render],["__file","src/login/webview/vue/login.vue"]])},"./src/login/webview/vue/root.vue":(i,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});var e=t("./src/login/webview/vue/root.vue?vue&type=template&id=5ba562a0&ts=true"),d=t("./src/login/webview/vue/root.vue?vue&type=script&lang=ts"),s=t("../../node_modules/vue-loader/dist/exportHelper.js");const r=(0,s.default)(d.default,[["render",e.render],["__file","src/login/webview/vue/root.vue"]])},"./src/login/webview/vue/selectableItem.vue":(i,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var e=t("./src/login/webview/vue/selectableItem.vue?vue&type=template&id=f12a0172&scoped=true&ts=true"),d=t("./src/login/webview/vue/selectableItem.vue?vue&type=script&lang=ts"),s=t("./src/login/webview/vue/selectableItem.vue?vue&type=style&index=0&id=f12a0172&scoped=true&lang=css"),l=t("../../node_modules/vue-loader/dist/exportHelper.js");const c=(0,l.default)(d.default,[["render",e.render],["__scopeId","data-v-f12a0172"],["__file","src/login/webview/vue/selectableItem.vue"]])},"./src/login/webview/vue/login.vue?vue&type=script&lang=ts":(i,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/login.vue?vue&type=script&lang=ts")},"./src/login/webview/vue/root.vue?vue&type=script&lang=ts":(i,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/root.vue?vue&type=script&lang=ts")},"./src/login/webview/vue/selectableItem.vue?vue&type=script&lang=ts":(i,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/selectableItem.vue?vue&type=script&lang=ts")},"./src/login/webview/vue/login.vue?vue&type=template&id=2e4b4bca&ts=true":(i,n,t)=>{"use strict";t.r(n),t.d(n,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/login.vue?vue&type=template&id=2e4b4bca&ts=true")},"./src/login/webview/vue/root.vue?vue&type=template&id=5ba562a0&ts=true":(i,n,t)=>{"use strict";t.r(n),t.d(n,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/root.vue?vue&type=template&id=5ba562a0&ts=true")},"./src/login/webview/vue/selectableItem.vue?vue&type=template&id=f12a0172&scoped=true&ts=true":(i,n,t)=>{"use strict";t.r(n),t.d(n,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/selectableItem.vue?vue&type=template&id=f12a0172&scoped=true&ts=true")},"./src/login/webview/vue/login.vue?vue&type=style&index=0&id=2e4b4bca&lang=css":(i,n,t)=>{"use strict";t.r(n);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/login.vue?vue&type=style&index=0&id=2e4b4bca&lang=css"),d=t.n(e),s={};for(const l in e)l!=="default"&&(s[l]=()=>e[l]);t.d(n,s)},"./src/login/webview/vue/selectableItem.vue?vue&type=style&index=0&id=f12a0172&scoped=true&lang=css":(i,n,t)=>{"use strict";t.r(n);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/selectableItem.vue?vue&type=style&index=0&id=f12a0172&scoped=true&lang=css"),d=t.n(e),s={};for(const l in e)l!=="default"&&(s[l]=()=>e[l]);t.d(n,s)},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/login.vue?vue&type=style&index=0&id=2e4b4bca&lang=css":(i,n,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/login.vue?vue&type=style&index=0&id=2e4b4bca&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[i.id,e,""]]),e.locals&&(i.exports=e.locals);var d=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,s=d("1113be24",e,!1,{})},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/selectableItem.vue?vue&type=style&index=0&id=f12a0172&scoped=true&lang=css":(i,n,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/login/webview/vue/selectableItem.vue?vue&type=style&index=0&id=f12a0172&scoped=true&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[i.id,e,""]]),e.locals&&(i.exports=e.locals);var d=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,s=d("20927ed4",e,!1,{})},"../../node_modules/vue-style-loader/lib/addStylesClient.js":(i,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>b});var e=t("../../node_modules/vue-style-loader/lib/listToStyles.js"),d=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},l=d&&(document.head||document.getElementsByTagName("head")[0]),r=null,c=0,A=!1,h=function(){},E=null,a="data-vue-ssr-id",_=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function b(u,f,p,m){A=p,E=m||{};var v=(0,e.default)(u,f);return y(v),function(L){for(var D=[],B=0;B<v.length;B++){var j=v[B],w=s[j.id];w.refs--,D.push(w)}L?(v=(0,e.default)(u,L),y(v)):v=[];for(var B=0;B<D.length;B++){var w=D[B];if(w.refs===0){for(var P=0;P<w.parts.length;P++)w.parts[P]();delete s[w.id]}}}}function y(u){for(var f=0;f<u.length;f++){var p=u[f],m=s[p.id];if(m){m.refs++;for(var v=0;v<m.parts.length;v++)m.parts[v](p.parts[v]);for(;v<p.parts.length;v++)m.parts.push(M(p.parts[v]));m.parts.length>p.parts.length&&(m.parts.length=p.parts.length)}else{for(var T=[],v=0;v<p.parts.length;v++)T.push(M(p.parts[v]));s[p.id]={id:p.id,refs:1,parts:T}}}}function O(){var u=document.createElement("style");return u.type="text/css",l.appendChild(u),u}function M(u){var f,p,m=document.querySelector("style["+a+'~="'+u.id+'"]');if(m){if(A)return h;m.parentNode.removeChild(m)}if(_){var v=c++;m=r||(r=O()),f=N.bind(null,m,v,!1),p=N.bind(null,m,v,!0)}else m=O(),f=I.bind(null,m),p=function(){m.parentNode.removeChild(m)};return f(u),function(L){if(L){if(L.css===u.css&&L.media===u.media&&L.sourceMap===u.sourceMap)return;f(u=L)}else p()}}var R=function(){var u=[];return function(f,p){return u[f]=p,u.filter(Boolean).join(`
`)}}();function N(u,f,p,m){var v=p?"":m.css;if(u.styleSheet)u.styleSheet.cssText=R(f,v);else{var T=document.createTextNode(v),L=u.childNodes;L[f]&&u.removeChild(L[f]),L.length?u.insertBefore(T,L[f]):u.appendChild(T)}}function I(u,f){var p=f.css,m=f.media,v=f.sourceMap;if(m&&u.setAttribute("media",m),E.ssrId&&u.setAttribute(a,f.id),v&&(p+=`
/*# sourceURL=`+v.sources[0]+" */",p+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(v))))+" */"),u.styleSheet)u.styleSheet.cssText=p;else{for(;u.firstChild;)u.removeChild(u.firstChild);u.appendChild(document.createTextNode(p))}}},"../../node_modules/vue-style-loader/lib/listToStyles.js":(i,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>e});function e(d,s){for(var l=[],r={},c=0;c<s.length;c++){var A=s[c],h=A[0],E=A[1],a=A[2],_=A[3],b={id:d+":"+c,css:E,media:a,sourceMap:_};r[h]?r[h].parts.push(b):l.push(r[h]={id:h,parts:[b]})}return l}},vue:i=>{"use strict";i.exports=Vue}},U={};function S(i){var n=U[i];if(n!==void 0)return n.exports;var t=U[i]={id:i,exports:{}};return F[i](t,t.exports,S),t.exports}S.n=i=>{var n=i&&i.__esModule?()=>i.default:()=>i;return S.d(n,{a:n}),n},S.d=(i,n)=>{for(var t in n)S.o(n,t)&&!S.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:n[t]})},S.o=(i,n)=>Object.prototype.hasOwnProperty.call(i,n),S.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var x={};(()=>{"use strict";S.r(x);var i=S("vue"),n=S.n(i),t=S("./src/login/webview/vue/root.vue");const e=()=>(0,i.createApp)(t.default),d=e();d.mount("#vue-app"),window.addEventListener("remount",()=>{d.unmount(),e().mount("#vue-app")})})();var W=this;for(var K in x)W[K]=x[K];x.__esModule&&Object.defineProperty(W,"__esModule",{value:!0})})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 *
 * This module is run within the webview, and will mount the Vue app.
 */
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
/*!****************************************!*\
  !*** ./src/login/webview/vue/index.ts ***!
  \****************************************/

//# sourceMappingURL=index.js.map