(()=>{var K={"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/formTitle.vue?vue&type=style&index=0&id=31fd2b46&lang=css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),a=t.n(e),n=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(n),i=o()(a());i.push([d.id,`
.pass-icon {
    color: #73c991;
}
`,"",{version:3,sources:["webpack://./src/auth/ui/vue/authForms/formTitle.vue"],names:[],mappings:";AAoBA;IACI,cAAc;AAClB",sourcesContent:[`<!-- 
    This is a re-usable component for creating a dynamic title
    that changes depending on if the auth method is already connected.
 -->

<template>
    <div style="display: flex; gap: 1em; justify-content: center">
        <label class="auth-container-title"
            ><div class="pass-icon icon icon-vscode-pass-filled"></div>
            Connected to <slot></slot
        ></label>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
<\/script>

<style>
.pass-icon {
    color: #73c991;
}
</style>
`],sourceRoot:""}]);const r=i},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageBuilderId.vue?vue&type=style&index=0&id=75b9d8fa&lang=css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>_});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),a=t.n(e),n=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(n),i=t("../../node_modules/css-loader/dist/cjs.js!./src/auth/ui/vue/authForms/sharedAuthForms.css"),r=t("../../node_modules/css-loader/dist/cjs.js!./src/auth/ui/vue/shared.css"),l=o()(a());l.i(i.default),l.i(r.default),l.push([d.id,`
`,"",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const _=l},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageCredentials.vue?vue&type=style&index=0&id=3f6697ae&lang=css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>_});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),a=t.n(e),n=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(n),i=t("../../node_modules/css-loader/dist/cjs.js!./src/auth/ui/vue/authForms/sharedAuthForms.css"),r=t("../../node_modules/css-loader/dist/cjs.js!./src/auth/ui/vue/shared.css"),l=o()(a());l.i(i.default),l.i(r.default),l.push([d.id,`
#collapsible {
    display: flex;
    flex-direction: row;
    cursor: pointer;
}
`,"",{version:3,sources:["webpack://./src/auth/ui/vue/authForms/manageCredentials.vue"],names:[],mappings:";AA2aA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB",sourcesContent:[`<template>
    <div class="auth-container">
        <div>
            <button v-on:click="toggleInputFormShown" :class="lowPriorityButton">
                <div :class="collapsibleClass" class="auth-container-icon"></div>
                {{ buttonText }}
            </button>

            <div v-show="isInputFormShown" class="auth-form-container">
                <div v-if="isConnected">
                    <button v-on:click="showResourceExplorer">Open Resource Explorer</button>
                </div>

                <div>
                    <label class="form-description-color input-description-small"
                        >Credentials will be added to the appropriate ~/.aws/ files.</label
                    >
                    <div v-on:click="editCredentialsFile()" class="text-link-color" style="cursor: pointer">
                        <div class="icon icon-vscode-edit text-link-color"></div>
                        Edit file directly
                    </div>
                </div>

                <div>
                    <label class="input-title">Profile Name</label>
                    <label class="form-description-color input-description-small"
                        >The identifier for these credentials</label
                    >
                    <input v-model="data.profileName" type="text" :data-invalid="!!errors.profileName" />
                    <div class="form-description-color input-description-small error-text">
                        {{ errors.profileName }}
                    </div>
                </div>

                <div>
                    <label class="input-title">Access Key</label>
                    <input v-model="data.aws_access_key_id" :data-invalid="!!errors.aws_access_key_id" type="text" />
                    <div class="form-description-color input-description-small error-text">
                        {{ errors.aws_access_key_id }}
                    </div>
                </div>

                <div>
                    <label class="input-title">Secret Key</label>
                    <input
                        v-model="data.aws_secret_access_key"
                        type="password"
                        :data-invalid="!!errors.aws_secret_access_key"
                    />
                    <div class="form-description-color input-description-small error-text">
                        {{ errors.aws_secret_access_key }}
                    </div>
                </div>

                <div>
                    <button v-on:click="submitData()" :disabled="!canSubmit">Add Profile</button>
                    <div class="form-description-color input-description-small error-text">{{ errors.submit }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue'
import BaseAuthForm, { ConnectionUpdateCause } from './baseAuth.vue'
import FormTitle from './formTitle.vue'
import { SectionName, StaticProfile } from '../../../credentials/types'
import { WebviewClientFactory } from '../../../../webviews/client'
import { AuthWebview } from '../show'
import { AuthForm } from './shared.vue'
import { AuthFormId } from './types'
import { CredentialSourceId, FeatureId } from '../../../../shared/telemetry/telemetry'
import { emptyFields, fieldHasError } from '../types'

const client = WebviewClientFactory.create<AuthWebview>()

export default defineComponent({
    name: 'CredentialsForm',
    extends: BaseAuthForm,
    components: { FormTitle },
    props: {
        state: {
            type: Object as PropType<CredentialsState>,
            required: true,
        },
        checkIfConnected: {
            type: Boolean,
            default: true,
            // In some scenarios we want to show the form and allow setup,
            // but not care about any current identity center auth connections
            // and if they are connected or not.
        },
    },
    data() {
        return {
            data: {
                ...this.state.data,
            } as CredentialsProfile,
            errors: {
                ...this.state.errors,
            } as CredentialsFormErrors,
            canSubmit: true,
            isConnected: false,

            /**
             * This is for the edge case when we use an accordion and
             * need to know if we should show the form
             */
            isInputFormShown: false,
            lowPriorityButton: 'low-priority-button',
            buttonText: '',
        }
    },
    async created() {
        if (!this.checkIfConnected && (await this.state.isAuthConnected())) {
            this.buttonText = 'Add an IAM Role Credential'
        } else {
            this.buttonText = 'Or, provide IAM Roles Credentials'
        }

        await this.updateConnectedStatus('created')
    },
    computed: {
        /** The appropriate accordion symbol (collapsed/uncollapsed) */
        collapsibleClass() {
            return this.isInputFormShown ? 'icon icon-vscode-chevron-down' : 'icon icon-vscode-chevron-right'
        },
    },
    methods: {
        toggleInputFormShown() {
            this.isInputFormShown = !this.isInputFormShown
        },
        async setNewValue(key: CredentialsDataKey, newVal: string) {
            if (newVal) {
                // Edge Case:
                // Since we allow subsequent credentials to be added,
                // we will automatically wipe the form values after success.
                // That triggers this function, but we only want to
                // indicate a new form interaction if the user adds text themselves.
                await this.state.startAuthFormInteraction()
            }

            await this.state.setData(key, newVal.trim())

            this.updateForm()
        },
        async updateConnectedStatus(cause?: ConnectionUpdateCause) {
            const actualIsConnected = await this.state.isAuthConnected()
            this.isConnected = this.checkIfConnected ? actualIsConnected : false
            this.emitAuthConnectionUpdated({ id: this.state.id, isConnected: actualIsConnected, cause })
        },
        async submitData() {
            this.state.startAuthFormInteraction()
            this.canSubmit = false // disable submit button

            const wasSuccessful = await this.state.submitData()
            if (wasSuccessful) {
                this.isInputFormShown = false
                await this.updateConnectedStatus('signIn')
            }

            this.updateForm()
            this.canSubmit = true // enable submit button
        },
        toggleShowForm() {
            this.isInputFormShown = !this.isInputFormShown
        },
        updateForm() {
            this.data = this.state.data
            this.errors = this.state.errors
        },
        editCredentialsFile() {
            client.editCredentialsFile()
            client.emitUiClick('auth_editCredentials')
        },
        showResourceExplorer() {
            client.showResourceExplorer()
        },
    },
    watch: {
        'data.profileName'(newVal) {
            this.setNewValue('profileName', newVal)
        },
        'data.aws_access_key_id'(newVal) {
            this.setNewValue('aws_access_key_id', newVal)
        },
        'data.aws_secret_access_key'(newVal) {
            this.setNewValue('aws_secret_access_key', newVal)
        },
    },
})

type CredentialsProfile = { profileName: SectionName } & StaticProfile
type CredentialsDataKey = keyof CredentialsProfile

type CredentialsFormErrors = {
    profileName: string
    aws_access_key_id: string
    aws_secret_access_key: string
    submit: string
}

/**
 * Manages the state of credentials data.
 */
export class CredentialsState implements AuthForm {
    #data: CredentialsData
    #errors: CredentialsErrors

    static #instance: CredentialsState

    static get instance(): CredentialsState {
        return (this.#instance ??= new CredentialsState())
    }

    private constructor() {
        this.#data = CredentialsData.instance
        this.#errors = CredentialsErrors.instance
    }

    async setData(key: CredentialsDataKey, value: string) {
        this.#data.setData(key, value)

        await this.#errors.updateErrorFormatting(this.data, key)
        // If an error under the submit button existed, we clear it out
        // since the form data has changed since last submission
        await this.#errors.setError('submit', '')
    }

    get data(): Readonly<CredentialsProfile> {
        return { ...this.#data.getData() }
    }

    get errors(): Readonly<CredentialsFormErrors> {
        return { ...this.#errors.getErrors() }
    }

    async isAuthConnected(): Promise<boolean> {
        return await client.isExplorerConnected('iam')
    }

    async isConnectionExists(): Promise<boolean> {
        return client.isCredentialExists()
    }

    get id(): AuthFormId {
        return 'credentials'
    }

    get featureType(): FeatureId {
        return 'awsExplorer'
    }

    get authType(): CredentialSourceId {
        return 'sharedCredentials'
    }

    /**
     * For Telemetry
     */
    startAuthFormInteraction() {
        return client.startAuthFormInteraction(this.featureType, this.authType)
    }

    /**
     * Attempts to submit the current data.
     *
     * If there are errors, they will be updated in the state.
     */
    async submitData(): Promise<boolean> {
        // 1. First verify the formatting of the user input
        const hasEmptyFields = this.#errors.updateErrorEmptyFields(this.data)
        const fieldsWithErrors = this.#errors.getFieldsWithErrors()
        if (fieldsWithErrors.length > 0) {
            client.failedAuthAttempt(this.id, {
                reason: hasEmptyFields ? emptyFields : fieldHasError,
                invalidInputFields: this.#errors.getFieldsWithErrors(),
            })
            return false
        }

        // 2. Pre-emptively verify the credentials actually work
        const error = await this.#errors.authenticateCredentials(this.data)
        if (error) {
            client.failedAuthAttempt(this.id, {
                reason: error.key,
                invalidInputFields: this.#errors.getFieldsWithErrors(),
            })
            return false
        }

        // 3. Finally submit/save the credentials
        const wasSuccess = await client.trySubmitCredentials(this.data.profileName, this.data)

        if (wasSuccess) {
            client.successfulAuthAttempt(this.id)
            this.reset()
        } else {
            this.#errors.setError('submit', 'Unexpected extension error. See logs.')
        }

        return wasSuccess
    }

    private reset() {
        this.#data.reset()
        this.#errors.reset()
    }
}

class CredentialsData {
    private data: CredentialsProfile

    setData(key: keyof CredentialsProfile, value: string) {
        this.data[key] = value
    }

    getData(): Readonly<CredentialsProfile> {
        return this.data
    }

    reset() {
        this.data = CredentialsData.defaultData
    }

    private static get defaultData(): CredentialsProfile {
        return {
            profileName: '',
            aws_access_key_id: '',
            aws_secret_access_key: '',
        }
    }

    static #instance: CredentialsData
    static get instance(): CredentialsData {
        return (this.#instance ??= new CredentialsData())
    }
    constructor() {
        this.data = CredentialsData.defaultData
    }
}

/** Manages the state of errors for Credentials */
class CredentialsErrors {
    private errors: CredentialsFormErrors

    getErrors(): Readonly<CredentialsFormErrors> {
        return this.errors
    }

    async setError(key: keyof CredentialsFormErrors, value: string) {
        this.errors[key] = value
        this.setInvalidInputFields()
    }

    reset() {
        this.errors = CredentialsErrors.noErrors
        this.setInvalidInputFields()
    }

    /** Updates the errors if required fields are empty */
    updateErrorEmptyFields(data: CredentialsProfile): boolean {
        const dataFieldKeys = Object.keys(data) as (keyof typeof data)[]
        const emptyFieldKeys = dataFieldKeys.filter(key => !data[key])

        emptyFieldKeys.forEach(fieldName => {
            this.setError(fieldName as keyof CredentialsProfile, 'Cannot be empty.')
        })

        return emptyFieldKeys.length > 0
    }

    /** Updates the error if the given field has a format error */
    async updateErrorFormatting(data: CredentialsProfile, key: CredentialsDataKey): Promise<void> {
        if (key === 'profileName') {
            const error = await client.getProfileNameError(data.profileName, false)
            this.setError(key, error ?? '')
            return
        }

        const result = await client.getCredentialFormatError(key, data[key])
        this.setError(key, result ?? '')
    }

    /** Authenticates the given data actually works */
    async authenticateCredentials(data: CredentialsProfile) {
        const error = await client.getAuthenticatedCredentialsError(data)

        if (error) {
            this.setError(error.key, error.error)
        }

        return error
    }

    /** All fields that currently have an error */
    getFieldsWithErrors(): (keyof CredentialsFormErrors)[] {
        const errorKeys = Object.keys(this.errors) as (keyof CredentialsFormErrors)[]
        return errorKeys.filter(key => this.errors[key])
    }

    private setInvalidInputFields() {
        client.setInvalidInputFields(this.getFieldsWithErrors())
    }

    private static get noErrors(): CredentialsFormErrors {
        return {
            aws_access_key_id: '',
            aws_secret_access_key: '',
            profileName: '',
            submit: '',
        }
    }

    static #instance: CredentialsErrors
    static get instance(): CredentialsErrors {
        return (this.#instance ??= new CredentialsErrors())
    }
    private constructor() {
        this.errors = CredentialsErrors.noErrors
    }
}
<\/script>
<style>
@import './sharedAuthForms.css';
@import '../shared.css';

#collapsible {
    display: flex;
    flex-direction: row;
    cursor: pointer;
}
</style>
`],sourceRoot:""}]);const _=l},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageExplorer.vue?vue&type=style&index=0&id=28dd66e2&lang=css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>_});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),a=t.n(e),n=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(n),i=t("../../node_modules/css-loader/dist/cjs.js!./src/auth/ui/vue/authForms/sharedAuthForms.css"),r=t("../../node_modules/css-loader/dist/cjs.js!./src/auth/ui/vue/shared.css"),l=o()(a());l.i(i.default),l.i(r.default),l.push([d.id,`
`,"",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const _=l},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageIdentityCenter.vue?vue&type=style&index=0&id=3857c316&lang=css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>_});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),a=t.n(e),n=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(n),i=t("../../node_modules/css-loader/dist/cjs.js!./src/auth/ui/vue/shared.css"),r=t("../../node_modules/css-loader/dist/cjs.js!./src/auth/ui/vue/authForms/sharedAuthForms.css"),l=o()(a());l.i(i.default),l.i(r.default),l.push([d.id,`
`,"",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const _=l},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/awsExplorerContent.vue?vue&type=style&index=0&id=3855a978&lang=css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>_});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),a=t.n(e),n=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(n),i=t("../../node_modules/css-loader/dist/cjs.js!./src/auth/ui/vue/featurePanel/baseServiceItemContent.css"),r=t("../../node_modules/css-loader/dist/cjs.js!./src/auth/ui/vue/shared.css"),l=o()(a());l.i(i.default),l.i(r.default),l.push([d.id,`
`,"",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const _=l},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/baseServiceItemContent.vue?vue&type=style&index=0&id=5bc6f0c6&lang=css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>_});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),a=t.n(e),n=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(n),i=t("../../node_modules/css-loader/dist/cjs.js!./src/auth/ui/vue/featurePanel/baseServiceItemContent.css"),r=t("../../node_modules/css-loader/dist/cjs.js!./src/auth/ui/vue/shared.css"),l=o()(a());l.i(i.default),l.i(r.default),l.push([d.id,`
`,"",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const _=l},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/codeCatalystContent.vue?vue&type=style&index=0&id=edf646b0&lang=css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>_});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),a=t.n(e),n=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(n),i=t("../../node_modules/css-loader/dist/cjs.js!./src/auth/ui/vue/featurePanel/baseServiceItemContent.css"),r=t("../../node_modules/css-loader/dist/cjs.js!./src/auth/ui/vue/shared.css"),l=o()(a());l.i(i.default),l.i(r.default),l.push([d.id,`
`,"",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const _=l},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/codeWhispererContent.vue?vue&type=style&index=0&id=a08699dc&lang=css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>_});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),a=t.n(e),n=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(n),i=t("../../node_modules/css-loader/dist/cjs.js!./src/auth/ui/vue/featurePanel/baseServiceItemContent.css"),r=t("../../node_modules/css-loader/dist/cjs.js!./src/auth/ui/vue/shared.css"),l=o()(a());l.i(i.default),l.i(r.default),l.push([d.id,`
`,"",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const _=l},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/notificationContainer.vue?vue&type=style&index=0&id=387a1c69&lang=css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),a=t.n(e),n=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(n),i=o()(a());i.push([d.id,`
.success-text div {
    color: white;
}
.success-text a {
    color: rgb(47, 111, 249);
}
.failure-text div {
    color: white;
}
.failure-text a {
    color: rgb(78 133 255);
}
.notification-container {
    border: var(--vscode-foreground);
    box-sizing: border-box;
}
`,"",{version:3,sources:["webpack://./src/auth/ui/vue/notifications/notificationContainer.vue"],names:[],mappings:";AA+EA;IACI,YAAY;AAChB;AAEA;IACI,wBAAwB;AAC5B;AAEA;IACI,YAAY;AAChB;AAEA;IACI,sBAAsB;AAC1B;AAEA;IACI,gCAAgC;IAChC,sBAAsB;AAC1B",sourcesContent:[`<template>
    <div
        class="border-common notification-container"
        :class="textColorClass"
        :style="{
            width: '100%',
            'white-space': 'nowrap',
            display: 'flex',
            'flex-direction': 'row',
            'justify-content': 'space-between',
            'background-color': backgroundColor,
            'align-items': 'center',
            padding: '1%',
        }"
    >
        <div>
            <!-- To use named-slot: <template v-slot:message-slot></template> -->
            <slot name="message-slot"></slot>
        </div>

        <div
            v-on:click="emitCloseNotification(id)"
            :style="{ cursor: 'pointer' }"
            class="icon icon-lg icon-vscode-chrome-close"
        ></div>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'

type NotificationType = 'Success' | 'Failure'
export type NotificationId = string

const BackgroundColors: { [type in NotificationType]: string } = {
    Success: '#049410',
    Failure: '#b00202',
} as const

const TextColorClasses: { [type in NotificationType]: string } = {
    Success: 'success-text',
    Failure: 'failure-text',
} as const

/**
 * This is the container of a single message, this has no content in it.
 * You instantiate this component using VueJS "slots".
 */
export default defineComponent({
    name: 'NotificationContainer',
    emits: ['close-notification'],
    props: {
        type: {
            type: String as PropType<NotificationType>,
            required: true,
        },
    },
    data() {
        return {
            id: crypto.randomUUID() as NotificationId,
        }
    },
    computed: {
        backgroundColor(): string {
            return BackgroundColors[this.type]
        },
        textColorClass(): string {
            return TextColorClasses[this.type]
        },
    },
    methods: {
        emitCloseNotification(id: NotificationId) {
            this.$emit('close-notification', id)
        },
    },
})
<\/script>

<style>
.success-text div {
    color: white;
}

.success-text a {
    color: rgb(47, 111, 249);
}

.failure-text div {
    color: white;
}

.failure-text a {
    color: rgb(78 133 255);
}

.notification-container {
    border: var(--vscode-foreground);
    box-sizing: border-box;
}
</style>
`],sourceRoot:""}]);const r=i},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/root.vue?vue&type=style&index=0&id=29c6d358&lang=css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),a=t.n(e),n=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(n),i=o()(a());i.push([d.id,`
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
`,"",{version:3,sources:["webpack://./src/auth/ui/vue/root.vue"],names:[],mappings:";AAoMA;IACI,qCAAqC;IACrC,kBAAkB;AACtB;AACA;IACI,WAAW;AACf;AACA;IACI,aAAa,EAAE,cAAc;AACjC",sourcesContent:[`<template>
    <!-- 
        HACK: Want to prefetch images but <link ref="prefetch"> does not work.
        We use <img> instead but hide it.
     -->
    <img
        v-show="false"
        src="https://github.com/aws/aws-toolkit-vscode/raw/HEAD/docs/marketplace/vscode/CC_dev_env.gif"
    />
    <img
        v-show="false"
        src="https://github.com/aws/aws-toolkit-vscode/raw/HEAD/docs/marketplace/vscode/awsExplorer.gif"
    />
    <img
        v-show="false"
        src="https://github.com/aws/aws-toolkit-vscode/raw/HEAD/docs/marketplace/vscode/codewhispererChat.gif"
    />

    <div :style="{ display: 'flex', flexDirection: 'column', gap: '1.2em', width: '100em' }">
        <!-- Logo + Title -->
        <div>
            <div style="display: flex; justify-content: left; align-items: center; gap: 0.5vw">
                <div id="logo" style="font-size: 3rem">
                    <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="6rem"
                        :height="\`\${6 * 0.61}rem\`"
                        viewBox="0 0 50 30"
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
                <div>
                    <div style="font-size: 1.4rem">AWS Toolkit for VS Code</div>
                    <div style="font-size: 1rem">
                        <a href="https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/welcome.html"
                            >Documentation</a
                        >
                        | <a href="https://github.com/aws/aws-toolkit-vscode">Join us on Github</a> |
                        <a v-on:click="openFeedbackForm" style="cursor: pointer">Share Feedback</a>
                    </div>
                </div>
            </div>

            <!-- Status Bars -->
            <div
                v-if="notifications.model.showSuccessfulConnection || notifications.model.showFoundCredentials"
                style="display: flex; flex-direction: column; gap: 1vw"
            >
                <!-- 
                    TODO figure out a better mechanism to dynamically create notifications instead
                    of fixed messages and just toggling them on/off.
                -->
                <ConnectedNotification
                    v-if="notifications.model.showSuccessfulConnection"
                    :args="{ authName: notifications.model.authName }"
                >
                </ConnectedNotification>
                <CredentialsNotification v-if="notifications.model.showFoundCredentials"></CredentialsNotification>
            </div>
        </div>
        <div>
            <div style="font-size: 2.1rem; font-weight: bold">Select a sign-in option to continue:</div>
            <hr style="margin: 1em 0 1em 0; border-color: var(--vscode-textBlockQuote-border)" />
            <div style="display: flex; flex-direction: row; justify-content: space-between; gap: 1em">
                <CodeWhispererContent
                    :state="serviceItemsAuthStatus['codewhisperer']"
                    :is-active="panelActivityState.isActive['codewhisperer']"
                ></CodeWhispererContent>
                <AwsExplorerContent
                    :state="serviceItemsAuthStatus['awsExplorer']"
                    :is-active="panelActivityState.isActive['awsExplorer']"
                ></AwsExplorerContent>
                <CodeCatalystContent
                    :state="serviceItemsAuthStatus['codecatalyst']"
                    :is-active="panelActivityState.isActive['codecatalyst']"
                ></CodeCatalystContent>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { serviceItemsAuthStatus } from './featurePanel/shared.vue'
import { AuthWebview } from './show'
import { WebviewClientFactory } from '../../../webviews/client'
import { ServiceItemId } from './types'
import { AuthFormId } from './authForms/types'
import { ConnectionUpdateArgs } from './authForms/baseAuth.vue'
import ConnectedNotification from './notifications/connectedNotification.vue'
import CredentialsNotification, { showFoundExistingCredentials } from './notifications/credentialsNotification.vue'
import { Notifications } from './notifications/notifications.vue'
import AwsExplorerContent from './featurePanel/awsExplorerContent.vue'
import CodeCatalystContent from './featurePanel/codeCatalystContent.vue'
import CodeWhispererContent from './featurePanel/codeWhispererContent.vue'
import { PanelActivityState } from './featurePanel/baseServiceItemContent.vue'

const client = WebviewClientFactory.create<AuthWebview>()

const panelActivityState = PanelActivityState.instance

export default defineComponent({
    components: {
        ConnectedNotification,
        CredentialsNotification,
        AwsExplorerContent,
        CodeCatalystContent,
        CodeWhispererContent,
    },
    name: 'AuthRoot',
    data() {
        return {
            serviceItemsAuthStatus: serviceItemsAuthStatus,
            notifications: Notifications.instance,
            panelActivityState: panelActivityState,
        }
    },
    async created() {
        // Sets size that all uses of \`em\` and \`rem\` in CSS are relative to
        this.setRelativeSize()

        // TODO: Due to design constraints, we determine the existing Auths in the frontend code
        //       since we have all the classes that figure this out in vue. If eventually we are able
        //       to we should look to move those in to the backend, have the frontend contact the code there
        //       and then we can avoid this mess of needing to send the initial existing auths to the backend.
        await this.getAllExistingAuths().then(existingAuths => client.setAuthsInitial(existingAuths))

        await showFoundExistingCredentials(this.notifications)
    },
    mounted() {
        panelActivityState.setupInitialActivePanel()
    },
    computed: {},
    methods: {
        onAuthConnectionUpdated(id: ServiceItemId, args: ConnectionUpdateArgs) {
            if (args.cause === 'created') {
                // When the auth update is caused by a creation of the auth form
                // there is nothing to update externally since the state hasn't changed.
                return
            }
            if (args.isConnected && args.cause === 'signIn') {
                // On a successful sign in the state of the current content window
                // can change. This forces a rerendering of it to have it load the latest state.
            }
        },
        /** Returns all the Auths that currently exist */
        async getAllExistingAuths(): Promise<AuthFormId[]> {
            // gather all auth state instances
            const allFeatureStates = Object.keys(this.serviceItemsAuthStatus).map(key => {
                const id: ServiceItemId = key as keyof typeof this.serviceItemsAuthStatus
                return this.serviceItemsAuthStatus[id]
            })

            // find all auths that currently exist
            const existingAuths: AuthFormId[] = []
            for (const featureState of allFeatureStates) {
                for (const authForm of featureState.getAuthForms()) {
                    if (await authForm.isConnectionExists()) {
                        existingAuths.push(authForm.id)
                    }
                }
            }
            return existingAuths
        },
        openFeedbackForm() {
            client.openFeedbackForm()
        },
        /**
         * IMPORTANT: This is the root of all sizing (em, rem)
         * Here we set the size that all references of rem and em
         * are relative to
         */
        setRelativeSize() {
            document.documentElement.style.fontSize = '14px'
        },
    },
})
<\/script>

<style>
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
`],sourceRoot:""}]);const r=i},"../../node_modules/css-loader/dist/cjs.js!./src/auth/ui/vue/authForms/sharedAuthForms.css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),a=t.n(e),n=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(n),i=o()(a());i.push([d.id,`.auth-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: var(--vscode-button-foreground);

    gap: 0.6em;
}

.disabled-form {
    pointer-events: none;
    filter: grayscale(100%);
    opacity: 0.6;
}

/* The immediate children of the auth-container */
.auth-container > * {
    display: flex;
    flex-direction: column;
}

.auth-container-section button {
    font-size: 1.3rem;
}

.auth-container > div > button {
    font-size: 1.3rem;
}

.auth-form-container {
    display: flex;
    flex-direction: column;

    background-color: var(--vscode-quickInput-background);

    text-align: left;

    padding: 1em;

    gap: 0.6em;

    border-radius: 0.5rem;
}

.auth-form-container > * {
    display: flex;
    flex-direction: column;
    gap: 0.4em;
}

.auth-container-title {
    font-size: 1.2rem;
    font-weight: bold;
}

.input-title {
    font-size: 1rem;
}

.form-description-color {
    color: var(--vscode-descriptionForeground);
}

.input-description-small {
    font-size: 0.8rem;
}

.error-text {
    color: #f14c4c;
    font-size: 0.8rem;
}

input[data-invalid='true'] {
    /* Using important since base.css overrides these errors */
    /* TODO: If I can get base.css to be resolved before this the important is not needed */
    border: 1px solid !important;
    border-color: #f14c4c !important;
}

/* When an input box is clicked and has invalid data*/
input[data-invalid='true']:focus {
    /* Ensures the border stays red even when selected */
    outline: none !important;
}

.auth-container input {
    font-size: 1rem;
    padding: 0.5em;
}

/* Remove underline from anchor elements */
a {
    text-decoration: none;
}

.auth-container-icon {
    color: var(--vscode-button-foreground);
}

.low-priority-button {
    background-color: var(--vscode-textSeparator-foreground);
    border-color: var(--vscode-textSeparator-foreground);
}
`,"",{version:3,sources:["webpack://./src/auth/ui/vue/authForms/sharedAuthForms.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,sCAAsC;;IAEtC,UAAU;AACd;;AAEA;IACI,oBAAoB;IACpB,uBAAuB;IACvB,YAAY;AAChB;;AAEA,iDAAiD;AACjD;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,qDAAqD;;IAErD,gBAAgB;;IAEhB,YAAY;;IAEZ,UAAU;;IAEV,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,0DAA0D;IAC1D,uFAAuF;IACvF,4BAA4B;IAC5B,gCAAgC;AACpC;;AAEA,qDAAqD;AACrD;IACI,oDAAoD;IACpD,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA,0CAA0C;AAC1C;IACI,qBAAqB;AACzB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,wDAAwD;IACxD,oDAAoD;AACxD",sourcesContent:[`.auth-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: var(--vscode-button-foreground);

    gap: 0.6em;
}

.disabled-form {
    pointer-events: none;
    filter: grayscale(100%);
    opacity: 0.6;
}

/* The immediate children of the auth-container */
.auth-container > * {
    display: flex;
    flex-direction: column;
}

.auth-container-section button {
    font-size: 1.3rem;
}

.auth-container > div > button {
    font-size: 1.3rem;
}

.auth-form-container {
    display: flex;
    flex-direction: column;

    background-color: var(--vscode-quickInput-background);

    text-align: left;

    padding: 1em;

    gap: 0.6em;

    border-radius: 0.5rem;
}

.auth-form-container > * {
    display: flex;
    flex-direction: column;
    gap: 0.4em;
}

.auth-container-title {
    font-size: 1.2rem;
    font-weight: bold;
}

.input-title {
    font-size: 1rem;
}

.form-description-color {
    color: var(--vscode-descriptionForeground);
}

.input-description-small {
    font-size: 0.8rem;
}

.error-text {
    color: #f14c4c;
    font-size: 0.8rem;
}

input[data-invalid='true'] {
    /* Using important since base.css overrides these errors */
    /* TODO: If I can get base.css to be resolved before this the important is not needed */
    border: 1px solid !important;
    border-color: #f14c4c !important;
}

/* When an input box is clicked and has invalid data*/
input[data-invalid='true']:focus {
    /* Ensures the border stays red even when selected */
    outline: none !important;
}

.auth-container input {
    font-size: 1rem;
    padding: 0.5em;
}

/* Remove underline from anchor elements */
a {
    text-decoration: none;
}

.auth-container-icon {
    color: var(--vscode-button-foreground);
}

.low-priority-button {
    background-color: var(--vscode-textSeparator-foreground);
    border-color: var(--vscode-textSeparator-foreground);
}
`],sourceRoot:""}]);const r=i},"../../node_modules/css-loader/dist/cjs.js!./src/auth/ui/vue/featurePanel/baseServiceItemContent.css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),a=t.n(e),n=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(n),i=o()(a());i.push([d.id,`.feature-panel-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    border-color: var(--vscode-descriptionForeground);
    box-sizing: border-box;
    height: fit-content;
    gap: 1.2em;
    width: 33%;
    padding: 1.5em;
}

.feature-panel-selected {
    border-color: var(--vscode-focusBorder);
}

.feature-panel-container-upper {
    display: flex;
    flex-direction: column;
    gap: 1.2em;

    /* 
     * This must be the height of the tallest feature panel.
     * This ensures all the borders of the feature panels are the same height.
     */
    min-height: 24em;
}

.feature-panel-image {
    border-radius: 1em;

    max-height: 15em;
    margin: 0 auto;
}

.feature-panel-container-title {
    display: inline;
    font-size: 1.7rem;
    font-weight: bold;
}

.feature-panel-container-description {
    font-size: 1rem;
}

.feature-panel-container hr {
    background-color: var(--vscode-descriptionForeground);
    width: 100%;
}

.feature-panel-auth-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
    /* display: flex;
    flex-direction: column;
    align-items: left;
    gap: 1.2rem; */
}

.feature-panel-auth-container button {
    padding: 0.4em;
    border-radius: 0.5rem;
    align-items: center;
}

.collapsible-title {
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: left;
    user-select: none;
}

.collapsible-description {
    font-weight: bold;
    font-size: 0.8rem;
    user-select: none;
}
`,"",{version:3,sources:["webpack://./src/auth/ui/vue/featurePanel/baseServiceItemContent.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,iDAAiD;IACjD,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;IACV,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;;IAEV;;;MAGE;IACF,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;;IAElB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,qDAAqD;IACrD,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB;;;kBAGc;AAClB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;AACrB",sourcesContent:[`.feature-panel-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    border-color: var(--vscode-descriptionForeground);
    box-sizing: border-box;
    height: fit-content;
    gap: 1.2em;
    width: 33%;
    padding: 1.5em;
}

.feature-panel-selected {
    border-color: var(--vscode-focusBorder);
}

.feature-panel-container-upper {
    display: flex;
    flex-direction: column;
    gap: 1.2em;

    /* 
     * This must be the height of the tallest feature panel.
     * This ensures all the borders of the feature panels are the same height.
     */
    min-height: 24em;
}

.feature-panel-image {
    border-radius: 1em;

    max-height: 15em;
    margin: 0 auto;
}

.feature-panel-container-title {
    display: inline;
    font-size: 1.7rem;
    font-weight: bold;
}

.feature-panel-container-description {
    font-size: 1rem;
}

.feature-panel-container hr {
    background-color: var(--vscode-descriptionForeground);
    width: 100%;
}

.feature-panel-auth-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
    /* display: flex;
    flex-direction: column;
    align-items: left;
    gap: 1.2rem; */
}

.feature-panel-auth-container button {
    padding: 0.4em;
    border-radius: 0.5rem;
    align-items: center;
}

.collapsible-title {
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: left;
    user-select: none;
}

.collapsible-description {
    font-weight: bold;
    font-size: 0.8rem;
    user-select: none;
}
`],sourceRoot:""}]);const r=i},"../../node_modules/css-loader/dist/cjs.js!./src/auth/ui/vue/shared.css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),a=t.n(e),n=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(n),i=o()(a());i.push([d.id,`/* Shared */

button,
.border-common {
    border-style: solid;
    border-width: 0.2rem;
    border-radius: 1rem;
    border-color: transparent;
    font-size: 1rem;
    padding: 1em;
}

/*  */
.container-background {
    background-color: var(--vscode-sideBar-background);
}

.main-text-color {
    color: var(--vscode-foreground);
}

.text-link-color {
    color: var(--vscode-textLink-foreground);
}

body div,
body h1,
body h2,
body h3 {
    color: var(--vscode-foreground);
}
`,"",{version:3,sources:["webpack://./src/auth/ui/vue/shared.css"],names:[],mappings:"AAAA,WAAW;;AAEX;;IAEI,mBAAmB;IACnB,oBAAoB;IACpB,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;IACf,YAAY;AAChB;;AAEA,KAAK;AACL;IACI,kDAAkD;AACtD;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;;;;IAII,+BAA+B;AACnC",sourcesContent:[`/* Shared */

button,
.border-common {
    border-style: solid;
    border-width: 0.2rem;
    border-radius: 1rem;
    border-color: transparent;
    font-size: 1rem;
    padding: 1em;
}

/*  */
.container-background {
    background-color: var(--vscode-sideBar-background);
}

.main-text-color {
    color: var(--vscode-foreground);
}

.text-link-color {
    color: var(--vscode-textLink-foreground);
}

body div,
body h1,
body h2,
body h3 {
    color: var(--vscode-foreground);
}
`],sourceRoot:""}]);const r=i},"../../node_modules/css-loader/dist/runtime/api.js":d=>{"use strict";d.exports=function(s){var t=[];return t.toString=function(){return this.map(function(a){var n="",o=typeof a[5]<"u";return a[4]&&(n+="@supports (".concat(a[4],") {")),a[2]&&(n+="@media ".concat(a[2]," {")),o&&(n+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),n+=s(a),o&&(n+="}"),a[2]&&(n+="}"),a[4]&&(n+="}"),n}).join("")},t.i=function(a,n,o,i,r){typeof a=="string"&&(a=[[null,a,void 0]]);var l={};if(o)for(var _=0;_<this.length;_++){var A=this[_][0];A!=null&&(l[A]=!0)}for(var E=0;E<a.length;E++){var c=[].concat(a[E]);o&&l[c[0]]||(typeof r<"u"&&(typeof c[5]>"u"||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]&&(c[1]="@media ".concat(c[2]," {").concat(c[1],"}")),c[2]=n),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),t.push(c))}},t}},"../../node_modules/css-loader/dist/runtime/sourceMaps.js":d=>{"use strict";d.exports=function(s){var t=s[1],e=s[3];if(!e)return t;if(typeof btoa=="function"){var a=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),o="/*# ".concat(n," */");return[t].concat([o]).join(`
`)}return[t].join(`
`)}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/baseAuth.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var e=t("vue"),a=t.n(e),n=t("./src/auth/ui/vue/telemetry.vue"),o=t("./src/auth/ui/vue/notifications/notifications.vue");const i=(0,e.defineComponent)({emits:["auth-connection-updated"],extends:n.default,methods:{emitAuthConnectionUpdated(r){o.Notifications.instance.showSuccessNotification(r),this.$emit("auth-connection-updated",r)}}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/formTitle.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});var e=t("vue"),a=t.n(e);const n=(0,e.defineComponent)({})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageBuilderId.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{CodeCatalystBuilderIdState:()=>y,CodeWhispererBuilderIdState:()=>B,default:()=>P});var e=t("vue"),a=t.n(e),n=t("./src/auth/ui/vue/authForms/baseAuth.vue"),o=t("./src/auth/ui/vue/authForms/formTitle.vue"),i=t("./src/webviews/client.ts"),r=(g,h,m)=>{if(!h.has(g))throw TypeError("Cannot "+m)},l=(g,h,m)=>(r(g,h,"read from private field"),m?m.call(g):h.get(g)),_=(g,h,m)=>{if(h.has(g))throw TypeError("Cannot add the same private member more than once");h instanceof WeakSet?h.add(g):h.set(g,m)},A=(g,h,m,f)=>(r(g,h,"write to private field"),f?f.call(g,m):h.set(g,m),m),E,c,u;const v=i.WebviewClientFactory.create(),P=(0,e.defineComponent)({name:"CredentialsForm",extends:n.default,components:{FormTitle:o.default},props:{state:{type:Object,required:!0},disabled:{type:Boolean,default:!1}},data(){return{stage:"START",isConnected:!1,builderIdCode:"",name:this.state.name,error:"",signUpUrl:this.state.getSignUpUrl(),submitButtonText:"",description:this.state.getDescription()}},async created(){await this.emitUpdate("created")},methods:{async startSignIn(){await this.state.startAuthFormInteraction(),this.stage="WAITING_ON_USER",await this.state.startBuilderIdSetup()?await this.emitUpdate("signIn"):await this.updateForm()},async updateForm(){this.error=this.state.error,this.stage=await this.state.stage(),this.submitButtonText=await this.state.getSubmitButtonText(),this.isConnected=await this.state.isAuthConnected()},async emitUpdate(g){await this.updateForm(),this.emitAuthConnectionUpdated({id:this.state.id,isConnected:this.isConnected,cause:g})},async signout(){await this.state.signout(),this.emitUpdate("signOut")},showNodeInView(){this.state.showNodeInView()}}});class D{constructor(){this._stage="START",_(this,E,"")}async startBuilderIdSetup(){A(this,E,"");const h=await this._startBuilderIdSetup();return h?(A(this,E,h.text),v.failedAuthAttempt(this.id,{reason:h.id})):(A(this,E,""),v.successfulAuthAttempt(this.id)),h===void 0}async stage(){const h=await this.isAuthConnected();return this._stage=h?"CONNECTED":"START",this._stage}async signout(){await v.signoutBuilderId(),v.emitUiClick(this.uiClickSignout)}get authType(){return"awsId"}get error(){return l(this,E)}async getSubmitButtonText(){return await this.anyBuilderIdConnected()?`Connect AWS Builder ID with ${this.name}`:this.name==="CodeWhisperer"?"Use for free, no AWS Account required":"Use for free with AWS Builder ID"}async anyBuilderIdConnected(){return(await Promise.all([B.instance.isAuthConnected(),y.instance.isAuthConnected()])).some(m=>m)}getSignUpUrl(){return"https://docs.aws.amazon.com/signin/latest/userguide/sign-in-aws_builder_id.html"}getDescription(){return"With AWS Builder ID, sign in for free without an AWS account."}startAuthFormInteraction(){return v.startAuthFormInteraction(this.featureType,this.authType)}showNodeInView(){this._showNodeInView(),v.emitUiClick(this.uiClickOpenId)}}E=new WeakMap;const I=class extends D{get name(){return"CodeWhisperer"}get id(){return"builderIdCodeWhisperer"}get uiClickOpenId(){return"auth_openCodeWhisperer"}get uiClickSignout(){return"auth_codewhisperer_signoutBuilderId"}get featureType(){return"codewhisperer"}isAuthConnected(){return v.isCodeWhispererBuilderIdConnected()}isConnectionExists(){return v.hasBuilderId("codewhisperer")}_startBuilderIdSetup(){return v.startCodeWhispererBuilderIdSetup()}_showNodeInView(){return v.showCodeWhispererView()}getSignUpUrl(){return"https://docs.aws.amazon.com/codewhisperer/latest/userguide/whisper-setup-indv-devs.html"}constructor(){super()}static get instance(){return l(this,c)??A(this,c,new I)}};let B=I;c=new WeakMap,_(B,c,void 0);const S=class extends D{get name(){return"CodeCatalyst"}get id(){return"builderIdCodeCatalyst"}get uiClickOpenId(){return"auth_openCodeCatalyst"}get uiClickSignout(){return"auth_codecatalyst_signoutBuilderId"}get featureType(){return"codecatalyst"}isAuthConnected(){return v.isCodeCatalystBuilderIdConnected()}isConnectionExists(){return v.hasBuilderId("codecatalyst")}_startBuilderIdSetup(){return v.startCodeCatalystBuilderIdSetup()}_showNodeInView(){return v.showCodeCatalystNode()}getDescription(){return"You must have an existing CodeCatalyst Space connected to your AWS Builder ID."}getSignUpUrl(){return"https://aws.amazon.com/codecatalyst/"}constructor(){super()}static get instance(){return l(this,u)??A(this,u,new S)}};let y=S;u=new WeakMap,_(y,u,void 0)},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageCredentials.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{CredentialsState:()=>y,default:()=>B});var e=t("vue"),a=t.n(e),n=t("./src/auth/ui/vue/authForms/baseAuth.vue"),o=t("./src/auth/ui/vue/authForms/formTitle.vue"),i=t("./src/webviews/client.ts"),r=t("./src/auth/ui/vue/types.ts"),l=(C,p,j)=>{if(!p.has(C))throw TypeError("Cannot "+j)},_=(C,p,j)=>(l(C,p,"read from private field"),j?j.call(C):p.get(C)),A=(C,p,j)=>{if(p.has(C))throw TypeError("Cannot add the same private member more than once");p instanceof WeakSet?p.add(C):p.set(C,j)},E=(C,p,j,O)=>(l(C,p,"write to private field"),O?O.call(C,j):p.set(C,j),j),c,u,v,P,D;const I=i.WebviewClientFactory.create(),B=(0,e.defineComponent)({name:"CredentialsForm",extends:n.default,components:{FormTitle:o.default},props:{state:{type:Object,required:!0},checkIfConnected:{type:Boolean,default:!0}},data(){return{data:{...this.state.data},errors:{...this.state.errors},canSubmit:!0,isConnected:!1,isInputFormShown:!1,lowPriorityButton:"low-priority-button",buttonText:""}},async created(){!this.checkIfConnected&&await this.state.isAuthConnected()?this.buttonText="Add an IAM Role Credential":this.buttonText="Or, provide IAM Roles Credentials",await this.updateConnectedStatus("created")},computed:{collapsibleClass(){return this.isInputFormShown?"icon icon-vscode-chevron-down":"icon icon-vscode-chevron-right"}},methods:{toggleInputFormShown(){this.isInputFormShown=!this.isInputFormShown},async setNewValue(C,p){p&&await this.state.startAuthFormInteraction(),await this.state.setData(C,p.trim()),this.updateForm()},async updateConnectedStatus(C){const p=await this.state.isAuthConnected();this.isConnected=this.checkIfConnected?p:!1,this.emitAuthConnectionUpdated({id:this.state.id,isConnected:p,cause:C})},async submitData(){this.state.startAuthFormInteraction(),this.canSubmit=!1,await this.state.submitData()&&(this.isInputFormShown=!1,await this.updateConnectedStatus("signIn")),this.updateForm(),this.canSubmit=!0},toggleShowForm(){this.isInputFormShown=!this.isInputFormShown},updateForm(){this.data=this.state.data,this.errors=this.state.errors},editCredentialsFile(){I.editCredentialsFile(),I.emitUiClick("auth_editCredentials")},showResourceExplorer(){I.showResourceExplorer()}},watch:{"data.profileName"(C){this.setNewValue("profileName",C)},"data.aws_access_key_id"(C){this.setNewValue("aws_access_key_id",C)},"data.aws_secret_access_key"(C){this.setNewValue("aws_secret_access_key",C)}}}),S=class{constructor(){A(this,c,void 0),A(this,u,void 0),E(this,c,h.instance),E(this,u,f.instance)}static get instance(){return _(this,v)??E(this,v,new S)}async setData(C,p){_(this,c).setData(C,p),await _(this,u).updateErrorFormatting(this.data,C),await _(this,u).setError("submit","")}get data(){return{..._(this,c).getData()}}get errors(){return{..._(this,u).getErrors()}}async isAuthConnected(){return await I.isExplorerConnected("iam")}async isConnectionExists(){return I.isCredentialExists()}get id(){return"credentials"}get featureType(){return"awsExplorer"}get authType(){return"sharedCredentials"}startAuthFormInteraction(){return I.startAuthFormInteraction(this.featureType,this.authType)}async submitData(){const C=_(this,u).updateErrorEmptyFields(this.data);if(_(this,u).getFieldsWithErrors().length>0)return I.failedAuthAttempt(this.id,{reason:C?r.emptyFields:r.fieldHasError,invalidInputFields:_(this,u).getFieldsWithErrors()}),!1;const j=await _(this,u).authenticateCredentials(this.data);if(j)return I.failedAuthAttempt(this.id,{reason:j.key,invalidInputFields:_(this,u).getFieldsWithErrors()}),!1;const O=await I.trySubmitCredentials(this.data.profileName,this.data);return O?(I.successfulAuthAttempt(this.id),this.reset()):_(this,u).setError("submit","Unexpected extension error. See logs."),O}reset(){_(this,c).reset(),_(this,u).reset()}};let y=S;c=new WeakMap,u=new WeakMap,v=new WeakMap,A(y,v,void 0);const g=class{setData(C,p){this.data[C]=p}getData(){return this.data}reset(){this.data=g.defaultData}static get defaultData(){return{profileName:"",aws_access_key_id:"",aws_secret_access_key:""}}static get instance(){return _(this,P)??E(this,P,new g)}constructor(){this.data=g.defaultData}};let h=g;P=new WeakMap,A(h,P,void 0);const m=class{getErrors(){return this.errors}async setError(C,p){this.errors[C]=p,this.setInvalidInputFields()}reset(){this.errors=m.noErrors,this.setInvalidInputFields()}updateErrorEmptyFields(C){const j=Object.keys(C).filter(O=>!C[O]);return j.forEach(O=>{this.setError(O,"Cannot be empty.")}),j.length>0}async updateErrorFormatting(C,p){if(p==="profileName"){const O=await I.getProfileNameError(C.profileName,!1);this.setError(p,O??"");return}const j=await I.getCredentialFormatError(p,C[p]);this.setError(p,j??"")}async authenticateCredentials(C){const p=await I.getAuthenticatedCredentialsError(C);return p&&this.setError(p.key,p.error),p}getFieldsWithErrors(){return Object.keys(this.errors).filter(p=>this.errors[p])}setInvalidInputFields(){I.setInvalidInputFields(this.getFieldsWithErrors())}static get noErrors(){return{aws_access_key_id:"",aws_secret_access_key:"",profileName:"",submit:""}}static get instance(){return _(this,D)??E(this,D,new m)}constructor(){this.errors=m.noErrors}};let f=m;D=new WeakMap,A(f,D,void 0)},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageExplorer.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var e=t("vue"),a=t.n(e),n=t("./src/auth/ui/vue/authForms/baseAuth.vue"),o=t("./src/auth/ui/vue/authForms/formTitle.vue");const i=(0,e.defineComponent)({name:"ExplorerAggregateForm",extends:n.default,components:{FormTitle:o.default},props:{identityCenterState:{type:Object,required:!0},credentialsState:{type:Object,required:!0}},data(){return{isConnected:!1,connectionName:""}},async created(){this.isConnected=await this.credentialsState.isAuthConnected()||await this.identityCenterState.isAuthConnected(),await this.updateConnectionName(),this.emitAuthConnectionUpdated({id:"aggregateExplorer",isConnected:this.isConnected,cause:"created"})},methods:{async updateConnectionName(){const r=await this.getCurrentConnection();r===void 0?this.connectionName="":this.connectionName=r==="credentials"?"IAM Credentials":"IAM Identity Center"},async getCurrentConnection(){if(!!this.isConnected)return await this.credentialsState.isAuthConnected()?"credentials":"identityCenterExplorer"}}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageIdentityCenter.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{CodeCatalystIdentityCenterState:()=>S,CodeWhispererIdentityCenterState:()=>B,ExplorerIdentityCenterState:()=>y,default:()=>P});var e=t("vue"),a=t.n(e),n=t("./src/auth/ui/vue/authForms/baseAuth.vue"),o=t("./src/auth/ui/vue/authForms/formTitle.vue"),i=t("./src/webviews/client.ts"),r=t("./src/auth/ui/vue/types.ts"),l=(m,f,C)=>{if(!f.has(m))throw TypeError("Cannot "+C)},_=(m,f,C)=>(l(m,f,"read from private field"),C?C.call(m):f.get(m)),A=(m,f,C)=>{if(f.has(m))throw TypeError("Cannot add the same private member more than once");f instanceof WeakSet?f.add(m):f.set(m,C)},E=(m,f,C,p)=>(l(m,f,"write to private field"),p?p.call(m,C):f.set(m,C),C),c,u;const v=i.WebviewClientFactory.create(),P=(0,e.defineComponent)({name:"IdentityCenterForm",extends:n.default,components:{FormTitle:o.default},props:{state:{type:Object,required:!0},checkIfConnected:{type:Boolean,default:!0},allowExistingStartUrl:{type:Boolean,default:!1},isLowPriority:{type:Boolean,default:!0}},data(){return{data:{...this.state.data},errors:{...this.state.errors},isConnected:!1,stage:"START",authName:this.state.name,isInputFormShown:!1,lowPriorityButton:"low-priority-button",buttonText:""}},async created(){this.data=this.state.data,await this.emitUpdate("created")},computed:{collapsibleClass(){return this.isInputFormShown?"icon icon-vscode-chevron-down":"icon icon-vscode-chevron-right"}},methods:{setNewValue(m,f){this.state.setValue(m,f,this.allowExistingStartUrl),this.errors=this.state.errors},async signin(){await this.state.startIdentityCenterSetup(()=>{this.stage="WAITING_ON_USER"})?await this.emitUpdate("signIn"):this.updateForm()},async updateForm(){this.stage=await this.state.stage(),this.data=this.state.data,this.errors=this.state.errors,this.isConnected=await this.state.isAuthConnected(),this.isConnected&&!this.checkIfConnected?this.buttonText="Add an IAM Identity Center profile":this.buttonText=this.authName==="CodeWhisperer"?"Use Professional License":"Use Single Sign-on (SSO)"},async emitUpdate(m){await this.updateForm(),this.emitAuthConnectionUpdated({id:this.state.id,isConnected:this.isConnected,cause:m})},async selectRegion(){this.errors.submit="";const m=await this.state.selectRegion();m&&(this.data.region=m.id)},async signout(){await this.state.signout(),this.emitUpdate("signOut")},showView(){this.state.showView()},toggleInputFormShown(){this.isInputFormShown=!this.isInputFormShown}},watch:{"data.startUrl"(m){this.setNewValue("startUrl",m)},"data.region"(m){this.setNewValue("region",m)}}}),D=class{constructor(){this._stage="START",A(this,c,void 0),this._data=D.initialData,E(this,c,h.instance)}async setValue(m,f,C){this._data[m]=f,_(this,c).setError("submit",""),m==="startUrl"&&(f&&await this.startAuthFormInteraction(),_(this,c).setError(m,await _(this,c).getStartUrlError(f,C))),m==="region"&&f&&(this._data.region=f,_(this,c).setError("region",""))}get data(){return{...this._data}}get errors(){return _(this,c).getErrors()}get authType(){return"iamIdentityCenter"}async startIdentityCenterSetup(m){await this.startAuthFormInteraction();const f=_(this,c).updateEmptyFieldErrors(this.data),C=_(this,c).getFieldsWithErrors().filter(j=>j!=="submit");if(C.length>0)return v.failedAuthAttempt(this.id,{reason:f?r.emptyFields:r.fieldHasError,invalidInputFields:C}),!1;m();const p=await this._startIdentityCenterSetup();return p?(_(this,c).setError("submit",p.text),v.failedAuthAttempt(this.id,{reason:p.id,invalidInputFields:_(this,c).getFieldsWithErrors()})):(v.successfulAuthAttempt(this.id),this.reset()),p===void 0}async stage(){const m=await this.isAuthConnected();return this._stage=m?"CONNECTED":"START",this._stage}async selectRegion(){return await this.startAuthFormInteraction(),_(this,c).setError("submit",""),v.getIdentityCenterRegion()}startAuthFormInteraction(){return v.startAuthFormInteraction(this.featureType,this.authType)}reset(){this._data=D.initialData,_(this,c).reset()}static get initialData(){return{startUrl:"",region:""}}showView(){v.emitUiClick(this.uiClickOpenId),this._showView()}async signout(){return v.emitUiClick(this.uiClickSignout),this._signout()}};let I=D;c=new WeakMap;class B extends I{get id(){return"identityCenterCodeWhisperer"}get name(){return"CodeWhisperer"}get uiClickOpenId(){return"auth_openCodeWhisperer"}get uiClickSignout(){return"auth_codewhisperer_signoutIdentityCenter"}get featureType(){return"codewhisperer"}async _startIdentityCenterSetup(){return v.startCWIdentityCenterSetup(this.data.startUrl,this.data.region)}async isAuthConnected(){return v.isCodeWhispererIdentityCenterConnected()}isConnectionExists(){return v.isCodeWhispererIdCExists()}async _showView(){return v.showCodeWhispererView()}_signout(){return v.signoutCWIdentityCenter()}}class S extends I{get id(){return"identityCenterCodeCatalyst"}get name(){return"CodeCatalyst"}get uiClickOpenId(){return"auth_openCodeCatalyst"}get uiClickSignout(){return"auth_codecatalyst_signoutIdentityCenter"}get featureType(){return"codecatalyst"}async _startIdentityCenterSetup(){return v.startCodeCatalystIdentityCenterSetup(this.data.startUrl,this.data.region)}async isAuthConnected(){return v.isCodeCatalystIdentityCenterConnected()}isConnectionExists(){return v.isCodeCatalystIdCExists()}_showView(){return v.showCodeCatalystNode()}_signout(){return v.signoutCodeCatalystIdentityCenter()}}class y extends I{get id(){return"identityCenterExplorer"}get name(){return"Resource Explorer"}get uiClickOpenId(){return"auth_openAWSExplorer"}get uiClickSignout(){return"auth_explorer_signoutIdentityCenter"}get featureType(){return"awsExplorer"}async stage(){return"START"}async _startIdentityCenterSetup(){return v.createIdentityCenterConnection(this.data.startUrl,this.data.region)}async isAuthConnected(){return await v.isExplorerConnected("idc")}isConnectionExists(){return v.isIdentityCenterExists()}async _showView(){return v.showResourceExplorer()}_signout(){throw new Error('Explorer Identity Center should not use "signout functionality')}}const g=class{getErrors(){return{...this.errors}}setError(m,f){this.errors[m]=f,this.setInvalidInputFields()}reset(){this.errors=g.defaultErrors,this.setInvalidInputFields()}updateEmptyFieldErrors(m){const C=Object.keys(m).filter(p=>!m[p]);return C.forEach(p=>{this.setError(p,"Cannot be empty.")}),C.length>0}async getStartUrlError(m,f){return await v.getSsoUrlError(m,f)??""}getFieldsWithErrors(){return Object.keys(this.errors).filter(f=>this.errors[f])}setInvalidInputFields(){v.setInvalidInputFields(this.getFieldsWithErrors())}static get defaultErrors(){return{startUrl:"",region:"",submit:""}}static get instance(){return _(this,u)??E(this,u,new g)}constructor(){this.errors=g.defaultErrors}};let h=g;u=new WeakMap,A(h,u,void 0)},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/shared.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{AuthFormIds:()=>o,FeatureStatus:()=>r,default:()=>l});var e=t("./src/auth/ui/vue/authForms/manageBuilderId.vue"),a=t("./src/auth/ui/vue/authForms/manageCredentials.vue"),n=t("./src/auth/ui/vue/authForms/manageIdentityCenter.vue");const o={credentials:"credentials",builderIdCodeWhisperer:"builderIdCodeWhisperer",builderIdCodeCatalyst:"builderIdCodeCatalyst",identityCenterCodeWhisperer:"identityCenterCodeWhisperer",identityCenterCodeCatalyst:"identityCenterCodeCatalyst",identityCenterExplorer:"identityCenterExplorer",aggregateExplorer:"aggregateExplorer"},i={credentials:a.CredentialsState.instance,builderIdCodeWhisperer:e.CodeWhispererBuilderIdState.instance,builderIdCodeCatalyst:e.CodeCatalystBuilderIdState.instance,identityCenterCodeWhisperer:new n.CodeWhispererIdentityCenterState,identityCenterCodeCatalyst:new n.CodeCatalystIdentityCenterState,identityCenterExplorer:new n.ExplorerIdentityCenterState};class r{async getConnectedAuth(){for(const A of this.getAuthForms())if(await A.isAuthConnected())return A.id}async hasConnectedAuth(){return!!await this.getConnectedAuth()}}const l=i},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/awsExplorerContent.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{ResourceExplorerContentState:()=>u,default:()=>c});var e=t("vue"),a=t.n(e),n=t("./src/auth/ui/vue/authForms/manageCredentials.vue"),o=t("./src/auth/ui/vue/authForms/manageIdentityCenter.vue"),i=t("./src/auth/ui/vue/featurePanel/baseServiceItemContent.vue"),r=t("./src/auth/ui/vue/authForms/shared.vue"),l=t("./src/auth/ui/vue/authForms/manageExplorer.vue"),_=t("./src/webviews/client.ts");const A=_.WebviewClientFactory.create();function E(){return{isLoaded:{credentials:!1,identityCenterExplorer:!1},isCredentialsShown:!1,isIdentityCenterShown:!1,panelId:"explorer-panel",connectedAuth:void 0,removeAuthForms:!1}}const c=(0,e.defineComponent)({name:"AwsExplorerContent",components:{CredentialsForm:n.default,IdentityCenterForm:o.default,ExplorerAggregateForm:l.default},extends:i.default,data(){return E()},async created(){A.onDidConnectionChangeExplorer(()=>{this.refreshPanel()})},mounted(){i.PanelActivityState.instance.registerPanel(this.$data.panelId,"awsExplorer")},computed:{credentialsFormState(){return r.default.credentials},identityCenterFormState(){return r.default.identityCenterExplorer},canShowAuthForms(){return this.connectedAuth?!0:!(Object.values(this.isLoaded).filter(P=>!P).length>0)}},methods:{async refreshPanel(){Object.assign(this.$data,E()),this.refreshAuthFormContainer()},async onAuthConnectionUpdated(v){if(v.cause==="signOut"){this.removeAuthForms=!0;return}v.isConnected&&(this.connectedAuth=v.id),this.isLoaded[v.id]=!0},showExplorer(){A.showResourceExplorer()}}});class u extends r.FeatureStatus{getAuthForms(){return[r.default.credentials,r.default.identityCenterExplorer]}}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/baseServiceItemContent.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{PanelActivityState:()=>v,default:()=>c});var e=t("vue"),a=t.n(e),n=t("./src/auth/ui/vue/telemetry.vue"),o=t("./src/webviews/client.ts"),i=(P,D,I)=>{if(!D.has(P))throw TypeError("Cannot "+I)},r=(P,D,I)=>(i(P,D,"read from private field"),I?I.call(P):D.get(P)),l=(P,D,I)=>{if(D.has(P))throw TypeError("Cannot add the same private member more than once");D instanceof WeakSet?D.add(P):D.set(P,I)},_=(P,D,I,B)=>(i(P,D,"write to private field"),B?B.call(P,I):D.set(P,I),I),A;const E=o.WebviewClientFactory.create(),c=(0,e.defineComponent)({name:"BaseServiceItemContent",extends:n.default,props:{state:{type:Object,required:!0},isActive:{type:Boolean,required:!0}},data(){return{authFormContainerKey:0}},methods:{refreshAuthFormContainer(){this.authFormContainerKey++}}}),u=class{constructor(){this.isActive=(0,e.reactive)({awsExplorer:!1,codecatalyst:!1,codewhisperer:!1})}static get instance(){return r(this,A)??_(this,A,new u)}registerPanel(P,D){document.getElementById(P)?.addEventListener("click",()=>{this.setActivePanel(D)})}async setupInitialActivePanel(){const P=await E.getInitialService();!P||(this.setActivePanel(P),E.onDidSelectService(D=>{this.setActivePanel(D)}))}setActivePanel(P){Object.keys(this.isActive).forEach(D=>this.isActive[D]=!1),this.isActive[P]=!0}};let v=u;A=new WeakMap,l(v,A,void 0)},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/codeCatalystContent.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{CodeCatalystContentState:()=>c,default:()=>E});var e=t("vue"),a=t.n(e),n=t("./src/auth/ui/vue/authForms/manageBuilderId.vue"),o=t("./src/auth/ui/vue/authForms/manageIdentityCenter.vue"),i=t("./src/auth/ui/vue/featurePanel/baseServiceItemContent.vue"),r=t("./src/auth/ui/vue/authForms/shared.vue"),l=t("./src/webviews/client.ts");const _=l.WebviewClientFactory.create();function A(){return{isLoaded:{builderIdCodeCatalyst:!1,identityCenterCodeCatalyst:!1},panelId:"codecatalyst-panel",connectedAuth:void 0,removeAuthForms:!1}}const E=(0,e.defineComponent)({name:"CodeCatalystContent",components:{BuilderIdForm:n.default,IdentityCenterForm:o.default},extends:i.default,data(){return A()},created(){_.onDidConnectionChangeCodeCatalyst(()=>{this.refreshPanel()})},mounted(){i.PanelActivityState.instance.registerPanel(this.$data.panelId,"codecatalyst")},computed:{builderIdState(){return r.default.builderIdCodeCatalyst},identityCenterState(){return r.default.identityCenterCodeCatalyst},canShowAuthForms(){return this.connectedAuth?!0:!(Object.values(this.isLoaded).filter(v=>!v).length>0)}},methods:{async refreshPanel(){Object.assign(this.$data,A()),this.refreshAuthFormContainer()},async onAuthConnectionUpdated(u){if(u.cause==="signOut"){this.removeAuthForms=!0;return}u.isConnected&&(this.connectedAuth=u.id),this.isLoaded[u.id]=!0},showCodeCatalystNode(){_.showCodeCatalystNode(),_.emitUiClick("auth_openCodeCatalyst")}}});class c extends r.FeatureStatus{getAuthForms(){return[r.default.builderIdCodeCatalyst,r.default.identityCenterCodeCatalyst]}}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/codeWhispererContent.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{CodeWhispererContentState:()=>c,default:()=>E});var e=t("vue"),a=t.n(e),n=t("./src/auth/ui/vue/authForms/manageBuilderId.vue"),o=t("./src/auth/ui/vue/authForms/manageIdentityCenter.vue"),i=t("./src/auth/ui/vue/featurePanel/baseServiceItemContent.vue"),r=t("./src/auth/ui/vue/authForms/shared.vue"),l=t("./src/webviews/client.ts");const _=l.WebviewClientFactory.create();function A(){return{isLoaded:{builderIdCodeWhisperer:!1,identityCenterCodeWhisperer:!1},panelId:"codewhisperer-panel",isIdentityCenterShown:!0,connectedAuth:void 0,removeAuthForms:!1}}const E=(0,e.defineComponent)({name:"CodeWhispererContent",components:{BuilderIdForm:n.default,IdentityCenterForm:o.default},extends:i.default,data(){return A()},created(){_.onDidConnectionChangeCodeWhisperer(()=>{this.refreshPanel()})},mounted(){i.PanelActivityState.instance.registerPanel(this.$data.panelId,"codewhisperer")},computed:{builderIdState(){return r.default.builderIdCodeWhisperer},identityCenterState(){return r.default.identityCenterCodeWhisperer},collapsibleClass(){return this.isIdentityCenterShown?"icon icon-vscode-chevron-down":"icon icon-vscode-chevron-right"},canShowAuthForms(){return this.connectedAuth?!0:!(Object.values(this.isLoaded).filter(v=>!v).length>0)}},methods:{async refreshPanel(){Object.assign(this.$data,A()),this.refreshAuthFormContainer()},async onAuthConnectionUpdated(u){if(u.cause==="signOut"){this.removeAuthForms=!0;return}u.isConnected&&(this.connectedAuth=u.id),this.isLoaded[u.id]=!0},uiClick(u){_.emitUiClick(u)},showCodeWhispererView(){_.showCodeWhispererView(),_.emitUiClick("auth_openCodeWhisperer")},showAmazonQChat(){_.showAmazonQChat(),_.emitUiClick("auth_amazonQChat")}}});class c extends r.FeatureStatus{getAuthForms(){return[r.default.builderIdCodeWhisperer,r.default.identityCenterCodeWhisperer]}}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/shared.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r,serviceItemsAuthStatus:()=>i});var e=t("./src/auth/ui/vue/featurePanel/awsExplorerContent.vue"),a=t("./src/auth/ui/vue/featurePanel/codeWhispererContent.vue"),n=t("./src/auth/ui/vue/featurePanel/codeCatalystContent.vue");const o={awsExplorer:e.default,codecatalyst:n.default,codewhisperer:a.default},i={awsExplorer:new e.ResourceExplorerContentState,codecatalyst:new n.CodeCatalystContentState,codewhisperer:new a.CodeWhispererContentState},r=o},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/baseNotification.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});var e=t("vue"),a=t.n(e);const n=(0,e.defineComponent)({name:"BaseNotification",props:{args:{type:Object,required:!1}},methods:{getComponentId(){console.error(`Auth: Component ${this.$options.name} did not implement 'getComponentId()'`)}}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/connectedNotification.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>A});var e=t("vue"),a=t.n(e),n=t("./src/auth/ui/vue/notifications/notificationContainer.vue"),o=t("./src/webviews/client.ts"),i=t("./src/auth/ui/vue/notifications/baseNotification.vue"),r=t("./src/auth/ui/vue/notifications/notifications.vue");const l=o.WebviewClientFactory.create(),_=r.Notifications.instance,A=(0,e.defineComponent)({name:"ConnectedNotification",components:{NotificationContainer:n.default},extends:i.default,props:{args:{type:Object,required:!0}},methods:{showConnectionQuickPick(){l.showConnectionQuickPick(),l.emitUiClick("auth_openConnectionSelector")},getComponentId(){return"ConnectedNotification"},closeMessage(){_.clearSuccessNotification()}}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/credentialsNotification.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>_,showFoundExistingCredentials:()=>A});var e=t("vue"),a=t.n(e),n=t("./src/auth/ui/vue/notifications/notificationContainer.vue"),o=t("./src/webviews/client.ts"),i=t("./src/auth/ui/vue/notifications/notifications.vue");const r=o.WebviewClientFactory.create(),l=i.Notifications.instance,_=(0,e.defineComponent)({name:"CredentialsNotification",components:{NotificationContainer:n.default},emits:["close-notification"],methods:{showConnectionQuickPick(){r.showConnectionQuickPick(),r.emitUiClick("auth_openConnectionSelector")},closeMessage(){l.clearCredentialsNotification()}}});async function A(E){const c=await r.isExtensionFirstUse(),u=await r.isCredentialConnected(),v=await r.isCredentialExists();c&&(u||v)?E.model.showFoundCredentials=!0:E.model.showFoundCredentials=!1}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/notificationContainer.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var e=t("vue"),a=t.n(e);const n={Success:"#049410",Failure:"#b00202"},o={Success:"success-text",Failure:"failure-text"},i=(0,e.defineComponent)({name:"NotificationContainer",emits:["close-notification"],props:{type:{type:String,required:!0}},data(){return{id:crypto.randomUUID()}},computed:{backgroundColor(){return n[this.type]},textColorClass(){return o[this.type]}},methods:{emitCloseNotification(r){this.$emit("close-notification",r)}}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/notifications.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{Notifications:()=>c,default:()=>A});var e=t("vue"),a=t.n(e),n=t("./src/auth/ui/vue/authForms/types.ts"),o=(u,v,P)=>{if(!v.has(u))throw TypeError("Cannot "+P)},i=(u,v,P)=>(o(u,v,"read from private field"),P?P.call(u):v.get(u)),r=(u,v,P)=>{if(v.has(u))throw TypeError("Cannot add the same private member more than once");v instanceof WeakSet?v.add(u):v.set(u,P)},l=(u,v,P,D)=>(o(u,v,"write to private field"),D?D.call(u,P):v.set(u,P),P),_;const A=()=>{},E=class{constructor(){this.model=(0,e.reactive)({showSuccessfulConnection:!1,authName:"",showFoundCredentials:!1})}static get instance(){return i(this,_)??l(this,_,new E)}showSuccessNotification(u){u.isConnected&&u.cause==="signIn"&&(this.model.authName=n.AuthFormDisplayName[u.id],this.model.showSuccessfulConnection=!0)}clearSuccessNotification(){this.model.showSuccessfulConnection=!1}showCredentialsNotification(u){this.model.authName=n.AuthFormDisplayName[u],this.model.showFoundCredentials=!0}clearCredentialsNotification(){this.model.showFoundCredentials=!1}};let c=E;_=new WeakMap,r(c,_,void 0)},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/root.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>P});var e=t("vue"),a=t.n(e),n=t("./src/auth/ui/vue/featurePanel/shared.vue"),o=t("./src/webviews/client.ts"),i=t("./src/auth/ui/vue/notifications/connectedNotification.vue"),r=t("./src/auth/ui/vue/notifications/credentialsNotification.vue"),l=t("./src/auth/ui/vue/notifications/notifications.vue"),_=t("./src/auth/ui/vue/featurePanel/awsExplorerContent.vue"),A=t("./src/auth/ui/vue/featurePanel/codeCatalystContent.vue"),E=t("./src/auth/ui/vue/featurePanel/codeWhispererContent.vue"),c=t("./src/auth/ui/vue/featurePanel/baseServiceItemContent.vue");const u=o.WebviewClientFactory.create(),v=c.PanelActivityState.instance,P=(0,e.defineComponent)({components:{ConnectedNotification:i.default,CredentialsNotification:r.default,AwsExplorerContent:_.default,CodeCatalystContent:A.default,CodeWhispererContent:E.default},name:"AuthRoot",data(){return{serviceItemsAuthStatus:n.serviceItemsAuthStatus,notifications:l.Notifications.instance,panelActivityState:v}},async created(){this.setRelativeSize(),await this.getAllExistingAuths().then(D=>u.setAuthsInitial(D)),await(0,r.showFoundExistingCredentials)(this.notifications)},mounted(){v.setupInitialActivePanel()},computed:{},methods:{onAuthConnectionUpdated(D,I){I.cause!=="created"&&I.isConnected&&I.cause},async getAllExistingAuths(){const D=Object.keys(this.serviceItemsAuthStatus).map(B=>{const S=B;return this.serviceItemsAuthStatus[S]}),I=[];for(const B of D)for(const S of B.getAuthForms())await S.isConnectionExists()&&I.push(S.id);return I},openFeedbackForm(){u.openFeedbackForm()},setRelativeSize(){document.documentElement.style.fontSize="14px"}}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/telemetry.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var e=t("vue"),a=t.n(e),n=t("./src/webviews/client.ts");const o=n.WebviewClientFactory.create(),i=(0,e.defineComponent)({name:"TelemetryClient",methods:{emitUiClick(r){o.emitUiClick(r)}}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/formTitle.vue?vue&type=template&id=31fd2b46&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>r});var e=t("vue"),a=t.n(e);const n={style:{display:"flex",gap:"1em","justify-content":"center"}},o={class:"auth-container-title"},i=(0,e.createElementVNode)("div",{class:"pass-icon icon icon-vscode-pass-filled"},null,-1);function r(l,_,A,E,c,u){return(0,e.openBlock)(),(0,e.createElementBlock)("div",n,[(0,e.createElementVNode)("label",o,[i,(0,e.createTextVNode)(" Connected to "),(0,e.renderSlot)(l.$slots,"default")])])}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageBuilderId.vue?vue&type=template&id=75b9d8fa&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>A});var e=t("vue"),a=t.n(e);const n={key:0,class:"auth-container-section"},o={class:"form-description-color input-description-small error-text"},i={key:1,class:"auth-container-section"},l=[(0,e.createElementVNode)("button",{disabled:""},"Follow instructions...",-1)],_={class:"auth-container-section"};function A(E,c,u,v,P,D){const I=(0,e.resolveComponent)("FormTitle");return(0,e.openBlock)(),(0,e.createElementBlock)("div",{class:(0,e.normalizeClass)([[E.disabled?"disabled-form":""],"auth-container"])},[E.stage==="START"?((0,e.openBlock)(),(0,e.createElementBlock)("div",n,[(0,e.createElementVNode)("button",{onClick:c[0]||(c[0]=B=>E.startSignIn())},(0,e.toDisplayString)(E.submitButtonText),1),(0,e.createElementVNode)("div",o,(0,e.toDisplayString)(E.error),1)])):(0,e.createCommentVNode)("v-if",!0),E.stage==="WAITING_ON_USER"?((0,e.openBlock)(),(0,e.createElementBlock)("div",i,l)):(0,e.createCommentVNode)("v-if",!0),E.stage==="CONNECTED"?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:2},[(0,e.createVNode)(I,null,{default:(0,e.withCtx)(()=>[(0,e.createTextVNode)("AWS Builder ID")]),_:1}),(0,e.createElementVNode)("div",_,[(0,e.createElementVNode)("div",{onClick:c[1]||(c[1]=B=>E.signout()),class:"text-link-color",style:{cursor:"pointer"}},"Sign out")])],64)):(0,e.createCommentVNode)("v-if",!0)],2)}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageCredentials.vue?vue&type=template&id=3f6697ae&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>g});var e=t("vue"),a=t.n(e);const n={class:"auth-container"},o={class:"auth-form-container"},i={key:0},r=(0,e.createElementVNode)("label",{class:"form-description-color input-description-small"},"Credentials will be added to the appropriate ~/.aws/ files.",-1),l=(0,e.createElementVNode)("div",{class:"icon icon-vscode-edit text-link-color"},null,-1),_=(0,e.createElementVNode)("label",{class:"input-title"},"Profile Name",-1),A=(0,e.createElementVNode)("label",{class:"form-description-color input-description-small"},"The identifier for these credentials",-1),E=["data-invalid"],c={class:"form-description-color input-description-small error-text"},u=(0,e.createElementVNode)("label",{class:"input-title"},"Access Key",-1),v=["data-invalid"],P={class:"form-description-color input-description-small error-text"},D=(0,e.createElementVNode)("label",{class:"input-title"},"Secret Key",-1),I=["data-invalid"],B={class:"form-description-color input-description-small error-text"},S=["disabled"],y={class:"form-description-color input-description-small error-text"};function g(h,m,f,C,p,j){return(0,e.openBlock)(),(0,e.createElementBlock)("div",n,[(0,e.createElementVNode)("div",null,[(0,e.createElementVNode)("button",{onClick:m[0]||(m[0]=(...O)=>h.toggleInputFormShown&&h.toggleInputFormShown(...O)),class:(0,e.normalizeClass)(h.lowPriorityButton)},[(0,e.createElementVNode)("div",{class:(0,e.normalizeClass)([h.collapsibleClass,"auth-container-icon"])},null,2),(0,e.createTextVNode)(" "+(0,e.toDisplayString)(h.buttonText),1)],2),(0,e.withDirectives)((0,e.createElementVNode)("div",o,[h.isConnected?((0,e.openBlock)(),(0,e.createElementBlock)("div",i,[(0,e.createElementVNode)("button",{onClick:m[1]||(m[1]=(...O)=>h.showResourceExplorer&&h.showResourceExplorer(...O))},"Open Resource Explorer")])):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("div",null,[r,(0,e.createElementVNode)("div",{onClick:m[2]||(m[2]=O=>h.editCredentialsFile()),class:"text-link-color",style:{cursor:"pointer"}},[l,(0,e.createTextVNode)(" Edit file directly ")])]),(0,e.createElementVNode)("div",null,[_,A,(0,e.withDirectives)((0,e.createElementVNode)("input",{"onUpdate:modelValue":m[3]||(m[3]=O=>h.data.profileName=O),type:"text","data-invalid":!!h.errors.profileName},null,8,E),[[e.vModelText,h.data.profileName]]),(0,e.createElementVNode)("div",c,(0,e.toDisplayString)(h.errors.profileName),1)]),(0,e.createElementVNode)("div",null,[u,(0,e.withDirectives)((0,e.createElementVNode)("input",{"onUpdate:modelValue":m[4]||(m[4]=O=>h.data.aws_access_key_id=O),"data-invalid":!!h.errors.aws_access_key_id,type:"text"},null,8,v),[[e.vModelText,h.data.aws_access_key_id]]),(0,e.createElementVNode)("div",P,(0,e.toDisplayString)(h.errors.aws_access_key_id),1)]),(0,e.createElementVNode)("div",null,[D,(0,e.withDirectives)((0,e.createElementVNode)("input",{"onUpdate:modelValue":m[5]||(m[5]=O=>h.data.aws_secret_access_key=O),type:"password","data-invalid":!!h.errors.aws_secret_access_key},null,8,I),[[e.vModelText,h.data.aws_secret_access_key]]),(0,e.createElementVNode)("div",B,(0,e.toDisplayString)(h.errors.aws_secret_access_key),1)]),(0,e.createElementVNode)("div",null,[(0,e.createElementVNode)("button",{onClick:m[6]||(m[6]=O=>h.submitData()),disabled:!h.canSubmit},"Add Profile",8,S),(0,e.createElementVNode)("div",y,(0,e.toDisplayString)(h.errors.submit),1)])],512),[[e.vShow,h.isInputFormShown]])])])}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageExplorer.vue?vue&type=template&id=28dd66e2&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>o});var e=t("vue"),a=t.n(e);const n={class:"auth-container"};function o(i,r,l,_,A,E){const c=(0,e.resolveComponent)("FormTitle");return(0,e.openBlock)(),(0,e.createElementBlock)("div",n,[i.isConnected?((0,e.openBlock)(),(0,e.createBlock)(c,{key:0},{default:(0,e.withCtx)(()=>[(0,e.createTextVNode)((0,e.toDisplayString)(i.connectionName),1)]),_:1})):(0,e.createCommentVNode)("v-if",!0)])}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageIdentityCenter.vue?vue&type=template&id=3857c316&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>B});var e=t("vue"),a=t.n(e);const n={class:"auth-container"},o={key:0},i={key:0,class:"auth-form-container"},r=(0,e.createElementVNode)("label",{class:"input-title"},"Start URL",-1),l=(0,e.createElementVNode)("label",{class:"form-description-color input-description-small"},"URL for your organization, provided by an admin or help desk.",-1),_=["data-invalid"],A={class:"form-description-color input-description-small error-text"},E=(0,e.createElementVNode)("label",{class:"input-title"},"Region",-1),c=(0,e.createElementVNode)("label",{class:"form-description-color input-description-small"},"AWS Region that hosts Identity directory",-1),u=(0,e.createElementVNode)("div",{class:"icon icon-lg icon-vscode-edit text-link-color"},null,-1),v={class:"text-link-color",style:{width:"100%"}},P={class:"form-description-color input-description-small error-text"},D={class:"form-description-color input-description-small error-text"},I={key:1,disabled:""};function B(S,y,g,h,m,f){const C=(0,e.resolveComponent)("FormTitle");return(0,e.openBlock)(),(0,e.createElementBlock)("div",n,[S.stage==="START"?((0,e.openBlock)(),(0,e.createElementBlock)("div",o,[(0,e.createElementVNode)("button",{onClick:y[0]||(y[0]=(...p)=>S.toggleInputFormShown&&S.toggleInputFormShown(...p)),class:(0,e.normalizeClass)(S.isLowPriority?S.lowPriorityButton:"")},[(0,e.createElementVNode)("div",{class:(0,e.normalizeClass)([S.collapsibleClass,"auth-container-icon"])},null,2),(0,e.createTextVNode)(" "+(0,e.toDisplayString)(S.buttonText),1)],2),S.isInputFormShown?((0,e.openBlock)(),(0,e.createElementBlock)("div",i,[(0,e.createElementVNode)("div",null,[r,l,(0,e.withDirectives)((0,e.createElementVNode)("input",{"onUpdate:modelValue":y[1]||(y[1]=p=>S.data.startUrl=p),type:"text","data-invalid":!!S.errors.startUrl},null,8,_),[[e.vModelText,S.data.startUrl]]),(0,e.createElementVNode)("div",A,(0,e.toDisplayString)(S.errors.startUrl),1)]),(0,e.createElementVNode)("div",null,[E,c,(0,e.createElementVNode)("div",{onClick:y[2]||(y[2]=p=>S.selectRegion()),style:{display:"flex","flex-direction":"row",gap:"2%",cursor:"pointer"}},[u,(0,e.createElementVNode)("div",v,(0,e.toDisplayString)(S.data.region?S.data.region:"Select a region..."),1)]),(0,e.createElementVNode)("div",P,(0,e.toDisplayString)(S.errors.region),1)]),(0,e.createElementVNode)("div",null,[(0,e.createElementVNode)("button",{onClick:y[3]||(y[3]=p=>S.signin())},"Sign in"),(0,e.createElementVNode)("div",D,(0,e.toDisplayString)(S.errors.submit),1)])])):(0,e.createCommentVNode)("v-if",!0)])):(0,e.createCommentVNode)("v-if",!0),S.stage==="WAITING_ON_USER"?((0,e.openBlock)(),(0,e.createElementBlock)("button",I,"Follow instructions...")):(0,e.createCommentVNode)("v-if",!0),S.stage==="CONNECTED"?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:2},[(0,e.createVNode)(C,null,{default:(0,e.withCtx)(()=>[(0,e.createTextVNode)("IAM Identity Center")]),_:1}),(0,e.createElementVNode)("div",{onClick:y[4]||(y[4]=p=>S.signout()),class:"text-link-color",style:{cursor:"pointer"}},"Sign out")],64)):(0,e.createCommentVNode)("v-if",!0)])}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/awsExplorerContent.vue?vue&type=template&id=3855a978&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>E});var e=t("vue"),a=t.n(e);const n=["id"],o={class:"feature-panel-container-upper"},i=(0,e.createElementVNode)("div",{class:"feature-panel-container-title"},"Resource Explorer",-1),r=(0,e.createElementVNode)("img",{class:"feature-panel-image",src:"https://github.com/aws/aws-toolkit-vscode/raw/HEAD/docs/marketplace/vscode/awsExplorer.gif",alt:"AWS Explorer example GIF"},null,-1),l={class:"feature-panel-container-description"},_=(0,e.createElementVNode)("hr",null,null,-1),A={key:2};function E(c,u,v,P,D,I){const B=(0,e.resolveComponent)("ExplorerAggregateForm"),S=(0,e.resolveComponent)("IdentityCenterForm"),y=(0,e.resolveComponent)("CredentialsForm");return(0,e.openBlock)(),(0,e.createElementBlock)("div",{id:c.panelId,class:(0,e.normalizeClass)(["feature-panel-container border-common",c.isActive?"feature-panel-selected":""])},[(0,e.createElementVNode)("div",o,[i,r,(0,e.createElementVNode)("div",l,[(0,e.createTextVNode)(" Work with S3, CloudWatch, and more. "),(0,e.createElementVNode)("a",{href:"https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/toolkit-navigation.html",onClick:u[0]||(u[0]=g=>c.emitUiClick("auth_learnMoreAWSResources"))},"Learn more.")])]),_,c.removeAuthForms?(0,e.createCommentVNode)("v-if",!0):(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("div",{key:c.authFormContainerKey,class:"feature-panel-auth-container"},[c.connectedAuth?((0,e.openBlock)(),(0,e.createBlock)(B,{key:0,identityCenterState:c.identityCenterFormState,credentialsState:c.credentialsFormState},null,8,["identityCenterState","credentialsState"])):(0,e.createCommentVNode)("v-if",!0),(0,e.createCommentVNode)(' @auth-connection-updated="onAuthConnectionUpdated" '),c.connectedAuth?((0,e.openBlock)(),(0,e.createElementBlock)("button",{key:1,onClick:u[1]||(u[1]=g=>c.showExplorer())},"Open Resource Explorer")):(0,e.createCommentVNode)("v-if",!0),(0,e.createVNode)(S,{state:c.identityCenterFormState,onAuthConnectionUpdated:c.onAuthConnectionUpdated,checkIfConnected:!1,"is-low-priority":!!c.connectedAuth},null,8,["state","onAuthConnectionUpdated","is-low-priority"]),(0,e.createVNode)(y,{state:c.credentialsFormState,onAuthConnectionUpdated:c.onAuthConnectionUpdated,"is-low-priority":!0},null,8,["state","onAuthConnectionUpdated"]),c.connectedAuth?(0,e.createCommentVNode)("v-if",!0):((0,e.openBlock)(),(0,e.createElementBlock)("div",A,[(0,e.createTextVNode)(" Don't have an AWS account? "),(0,e.createElementVNode)("a",{href:"https://aws.amazon.com/free/",onClick:u[2]||(u[2]=g=>c.emitUiClick("auth_signUpForFree"))},"Sign up for free.")]))])),[[e.vShow,c.canShowAuthForms]])],10,n)}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/baseServiceItemContent.vue?vue&type=template&id=5bc6f0c6&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>o});var e=t("vue"),a=t.n(e);const n={class:"feature-panel-container border-common"};function o(i,r,l,_,A,E){return(0,e.openBlock)(),(0,e.createElementBlock)("div",n,"Must Be Implemented")}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/codeCatalystContent.vue?vue&type=template&id=edf646b0&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>c});var e=t("vue"),a=t.n(e);const n=["id"],o={class:"feature-panel-container-upper"},i=(0,e.createElementVNode)("div",{class:"feature-panel-container-title"},"Amazon CodeCatalyst",-1),r=(0,e.createElementVNode)("img",{class:"feature-panel-image",src:"https://github.com/aws/aws-toolkit-vscode/raw/HEAD/docs/marketplace/vscode/CC_dev_env.gif",alt:"CodeCatalyst example GIF"},null,-1),l={class:"feature-panel-container-description"},_=(0,e.createElementVNode)("hr",null,null,-1),A={key:3},E=(0,e.createElementVNode)("a",{href:"https://codecatalyst.aws/onboarding/view"},"Get started with creating a Space.",-1);function c(u,v,P,D,I,B){const S=(0,e.resolveComponent)("BuilderIdForm"),y=(0,e.resolveComponent)("IdentityCenterForm");return(0,e.openBlock)(),(0,e.createElementBlock)("div",{id:u.panelId,class:(0,e.normalizeClass)(["feature-panel-container border-common",u.isActive?"feature-panel-selected":""])},[(0,e.createElementVNode)("div",o,[i,r,(0,e.createElementVNode)("div",l,[(0,e.createTextVNode)(" Spend more time coding and less time managing development environments. "),(0,e.createElementVNode)("a",{href:"https://aws.amazon.com/codecatalyst/",onClick:v[0]||(v[0]=g=>u.emitUiClick("auth_learnMoreCodeCatalyst"))},"Learn more.")])]),_,u.removeAuthForms?(0,e.createCommentVNode)("v-if",!0):(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("div",{class:"feature-panel-auth-container",key:u.authFormContainerKey},[u.connectedAuth===void 0||u.connectedAuth==="builderIdCodeCatalyst"?((0,e.openBlock)(),(0,e.createBlock)(S,{key:0,state:u.builderIdState,onAuthConnectionUpdated:u.onAuthConnectionUpdated},null,8,["state","onAuthConnectionUpdated"])):(0,e.createCommentVNode)("v-if",!0),u.connectedAuth===void 0||u.connectedAuth==="identityCenterCodeCatalyst"?((0,e.openBlock)(),(0,e.createBlock)(y,{key:1,state:u.identityCenterState,"allow-existing-start-url":!0,onAuthConnectionUpdated:u.onAuthConnectionUpdated},null,8,["state","onAuthConnectionUpdated"])):(0,e.createCommentVNode)("v-if",!0),u.connectedAuth?((0,e.openBlock)(),(0,e.createElementBlock)("button",{key:2,onClick:v[1]||(v[1]=g=>u.showCodeCatalystNode())},"Open CodeCatalyst in Toolkit")):(0,e.createCommentVNode)("v-if",!0),u.connectedAuth?(0,e.createCommentVNode)("v-if",!0):((0,e.openBlock)(),(0,e.createElementBlock)("div",A,[(0,e.createTextVNode)(" Don't have a CodeCatalyst account? "),E]))])),[[e.vShow,u.canShowAuthForms]])],10,n)}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/codeWhispererContent.vue?vue&type=template&id=a08699dc&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>c});var e=t("vue"),a=t.n(e);const n=["id"],o={class:"feature-panel-container-upper"},i=(0,e.createElementVNode)("div",{class:"feature-panel-container-title"},"Amazon Q + CodeWhisperer",-1),r=(0,e.createElementVNode)("img",{class:"feature-panel-image",src:"https://github.com/aws/aws-toolkit-vscode/raw/HEAD/docs/marketplace/vscode/codewhispererChat.gif",alt:"CodeWhisperer Chat example GIF"},null,-1),l={class:"feature-panel-container-description"},_=(0,e.createElementVNode)("br",null,null,-1),A=(0,e.createElementVNode)("br",null,null,-1),E=(0,e.createElementVNode)("hr",null,null,-1);function c(u,v,P,D,I,B){const S=(0,e.resolveComponent)("BuilderIdForm"),y=(0,e.resolveComponent)("IdentityCenterForm");return(0,e.openBlock)(),(0,e.createElementBlock)("div",{id:u.panelId,class:(0,e.normalizeClass)(["feature-panel-container border-common",u.isActive?"feature-panel-selected":""])},[(0,e.createElementVNode)("div",o,[i,r,(0,e.createElementVNode)("div",l,[(0,e.createTextVNode)(" Build, maintain, and transform applications using generative AI. "),_,A,(0,e.createTextVNode)(" Learn more about "),(0,e.createElementVNode)("a",{href:"https://aws.amazon.com/q/",onClick:v[0]||(v[0]=g=>u.emitUiClick("auth_learnMoreAmazonQ"))}," Amazon Q"),(0,e.createTextVNode)(" and "),(0,e.createElementVNode)("a",{href:"https://aws.amazon.com/codewhisperer/",onClick:v[1]||(v[1]=g=>u.emitUiClick("auth_learnMoreCodeWhisperer"))}," CodeWhisperer"),(0,e.createTextVNode)(". ")])]),E,u.removeAuthForms?(0,e.createCommentVNode)("v-if",!0):(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("div",{class:"feature-panel-auth-container",key:u.authFormContainerKey},[u.connectedAuth===void 0||u.connectedAuth==="builderIdCodeWhisperer"?((0,e.openBlock)(),(0,e.createBlock)(S,{key:0,state:u.builderIdState,onAuthConnectionUpdated:u.onAuthConnectionUpdated},null,8,["state","onAuthConnectionUpdated"])):(0,e.createCommentVNode)("v-if",!0),u.connectedAuth===void 0||u.connectedAuth==="identityCenterCodeWhisperer"?((0,e.openBlock)(),(0,e.createBlock)(y,{key:1,state:u.identityCenterState,"allow-existing-start-url":!0,onAuthConnectionUpdated:u.onAuthConnectionUpdated},null,8,["state","onAuthConnectionUpdated"])):(0,e.createCommentVNode)("v-if",!0),u.connectedAuth?((0,e.openBlock)(),(0,e.createElementBlock)("button",{key:2,onClick:v[2]||(v[2]=g=>u.showAmazonQChat())},"Open Amazon Q chat")):(0,e.createCommentVNode)("v-if",!0),u.connectedAuth?((0,e.openBlock)(),(0,e.createElementBlock)("button",{key:3,onClick:v[3]||(v[3]=g=>u.showCodeWhispererView())},"Open CodeWhisperer in Toolkit")):(0,e.createCommentVNode)("v-if",!0)])),[[e.vShow,u.canShowAuthForms]])],10,n)}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/connectedNotification.vue?vue&type=template&id=b7bb47b2&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>i});var e=t("vue"),a=t.n(e);const n={style:{display:"flex","flex-direction":"row"}},o={style:{"font-weight":"bold"}};function i(r,l,_,A,E,c){const u=(0,e.resolveComponent)("NotificationContainer");return(0,e.openBlock)(),(0,e.createBlock)(u,{type:"Success",onCloseNotification:l[1]||(l[1]=v=>r.closeMessage())},{"message-slot":(0,e.withCtx)(()=>[(0,e.createElementVNode)("div",n,[(0,e.createTextVNode)(" Connected to\xA0"),(0,e.createElementVNode)("span",o,(0,e.toDisplayString)(r.args.authName),1),(0,e.createTextVNode)("! See connections in the\xA0"),(0,e.createElementVNode)("a",{onClick:l[0]||(l[0]=v=>r.showConnectionQuickPick()),style:{cursor:"pointer"}},"Toolkit panel"),(0,e.createTextVNode)(". ")])]),_:1})}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/credentialsNotification.vue?vue&type=template&id=3fe2f35a&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>o});var e=t("vue"),a=t.n(e);const n={style:{display:"flex","flex-direction":"row"}};function o(i,r,l,_,A,E){const c=(0,e.resolveComponent)("NotificationContainer");return(0,e.openBlock)(),(0,e.createBlock)(c,{type:"Success",onCloseNotification:r[1]||(r[1]=u=>i.closeMessage())},{"message-slot":(0,e.withCtx)(()=>[(0,e.createElementVNode)("div",n,[(0,e.createTextVNode)(" IAM Credentials detected, select one in the\xA0"),(0,e.createElementVNode)("a",{onClick:r[0]||(r[0]=u=>i.showConnectionQuickPick()),style:{cursor:"pointer"}},"Toolkit panel"),(0,e.createTextVNode)("\xA0to enable the AWS Explorer. ")])]),_:1})}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/notificationContainer.vue?vue&type=template&id=387a1c69&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>n});var e=t("vue"),a=t.n(e);function n(o,i,r,l,_,A){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{class:(0,e.normalizeClass)(["border-common notification-container",o.textColorClass]),style:(0,e.normalizeStyle)({width:"100%","white-space":"nowrap",display:"flex","flex-direction":"row","justify-content":"space-between","background-color":o.backgroundColor,"align-items":"center",padding:"1%"})},[(0,e.createElementVNode)("div",null,[(0,e.createCommentVNode)(" To use named-slot: <template v-slot:message-slot></template> "),(0,e.renderSlot)(o.$slots,"message-slot")]),(0,e.createElementVNode)("div",{onClick:i[0]||(i[0]=E=>o.emitCloseNotification(o.id)),style:{cursor:"pointer"},class:"icon icon-lg icon-vscode-chrome-close"})],6)}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/root.vue?vue&type=template&id=29c6d358&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>m});var e=t("vue"),a=t.n(e);const n={src:"https://github.com/aws/aws-toolkit-vscode/raw/HEAD/docs/marketplace/vscode/CC_dev_env.gif"},o={src:"https://github.com/aws/aws-toolkit-vscode/raw/HEAD/docs/marketplace/vscode/awsExplorer.gif"},i={src:"https://github.com/aws/aws-toolkit-vscode/raw/HEAD/docs/marketplace/vscode/codewhispererChat.gif"},r={style:{display:"flex",flexDirection:"column",gap:"1.2em",width:"100em"}},l={style:{display:"flex","justify-content":"left","align-items":"center",gap:"0.5vw"}},_={id:"logo",style:{"font-size":"3rem"}},A={id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"6rem",height:`${6*.61}rem`,viewBox:"0 0 50 30"},v=[(0,e.createElementVNode)("path",{id:"logo-text",d:"M14.09,10.85a4.7,4.7,0,0,0,.19,1.48,7.73,7.73,0,0,0,.54,1.19.77.77,0,0,1,.12.38.64.64,0,0,1-.32.49l-1,.7a.83.83,0,0,1-.44.15.69.69,0,0,1-.49-.23,3.8,3.8,0,0,1-.6-.77q-.25-.42-.51-1a6.14,6.14,0,0,1-4.89,2.3,4.54,4.54,0,0,1-3.32-1.19,4.27,4.27,0,0,1-1.22-3.2A4.28,4.28,0,0,1,3.61,7.75,6.06,6.06,0,0,1,7.69,6.46a12.47,12.47,0,0,1,1.76.13q.92.13,1.91.36V5.73a3.65,3.65,0,0,0-.79-2.66A3.81,3.81,0,0,0,7.86,2.3a7.71,7.71,0,0,0-1.79.22,12.78,12.78,0,0,0-1.79.57,4.55,4.55,0,0,1-.58.22l-.26,0q-.35,0-.35-.52V2a1.09,1.09,0,0,1,.12-.58,1.2,1.2,0,0,1,.47-.35A10.88,10.88,0,0,1,5.77.32,10.19,10.19,0,0,1,8.36,0a6,6,0,0,1,4.35,1.35,5.49,5.49,0,0,1,1.38,4.09ZM7.34,13.38a5.36,5.36,0,0,0,1.72-.31A3.63,3.63,0,0,0,10.63,12,2.62,2.62,0,0,0,11.19,11a5.63,5.63,0,0,0,.16-1.44v-.7a14.35,14.35,0,0,0-1.53-.28,12.37,12.37,0,0,0-1.56-.1,3.84,3.84,0,0,0-2.47.67A2.34,2.34,0,0,0,5,11a2.35,2.35,0,0,0,.61,1.76A2.4,2.4,0,0,0,7.34,13.38Zm13.35,1.8a1,1,0,0,1-.64-.16,1.3,1.3,0,0,1-.35-.65L15.81,1.51a3,3,0,0,1-.15-.67.36.36,0,0,1,.41-.41H17.7a1,1,0,0,1,.65.16,1.4,1.4,0,0,1,.33.65l2.79,11,2.59-11A1.17,1.17,0,0,1,24.39.6a1.1,1.1,0,0,1,.67-.16H26.4a1.1,1.1,0,0,1,.67.16,1.17,1.17,0,0,1,.32.65L30,12.39,32.88,1.25A1.39,1.39,0,0,1,33.22.6a1,1,0,0,1,.65-.16h1.54a.36.36,0,0,1,.41.41,1.36,1.36,0,0,1,0,.26,3.64,3.64,0,0,1-.12.41l-4,12.86a1.3,1.3,0,0,1-.35.65,1,1,0,0,1-.64.16H29.25a1,1,0,0,1-.67-.17,1.26,1.26,0,0,1-.32-.67L25.67,3.64,23.11,14.34a1.26,1.26,0,0,1-.32.67,1,1,0,0,1-.67.17Zm21.36.44a11.28,11.28,0,0,1-2.56-.29,7.44,7.44,0,0,1-1.92-.67,1,1,0,0,1-.61-.93v-.84q0-.52.38-.52a.9.9,0,0,1,.31.06l.42.17a8.77,8.77,0,0,0,1.83.58,9.78,9.78,0,0,0,2,.2,4.48,4.48,0,0,0,2.43-.55,1.76,1.76,0,0,0,.86-1.57,1.61,1.61,0,0,0-.45-1.16A4.29,4.29,0,0,0,43,9.22l-2.41-.76A5.15,5.15,0,0,1,38,6.78a3.94,3.94,0,0,1-.83-2.41,3.7,3.7,0,0,1,.45-1.85,4.47,4.47,0,0,1,1.19-1.37A5.27,5.27,0,0,1,40.51.29,7.4,7.4,0,0,1,42.6,0a8.87,8.87,0,0,1,1.12.07q.57.07,1.08.19t.95.26a4.27,4.27,0,0,1,.7.29,1.59,1.59,0,0,1,.49.41.94.94,0,0,1,.15.55v.79q0,.52-.38.52a1.76,1.76,0,0,1-.64-.2,7.74,7.74,0,0,0-3.2-.64,4.37,4.37,0,0,0-2.21.47,1.6,1.6,0,0,0-.79,1.48,1.58,1.58,0,0,0,.49,1.18,4.94,4.94,0,0,0,1.83.92L44.55,7a5.08,5.08,0,0,1,2.57,1.6A3.76,3.76,0,0,1,47.9,11a4.21,4.21,0,0,1-.44,1.93,4.4,4.4,0,0,1-1.21,1.47,5.43,5.43,0,0,1-1.85.93A8.25,8.25,0,0,1,42.05,15.62Z"},null,-1),(0,e.createElementVNode)("path",{fill:"#FF9900",class:"cls-1",d:"M45.19,23.81C39.72,27.85,31.78,30,25,30A36.64,36.64,0,0,1,.22,20.57c-.51-.46-.06-1.09.56-.74A49.78,49.78,0,0,0,25.53,26.4,49.23,49.23,0,0,0,44.4,22.53C45.32,22.14,46.1,23.14,45.19,23.81Z"},null,-1),(0,e.createElementVNode)("path",{fill:"#FF9900",class:"cls-1",d:"M47.47,21.21c-.7-.9-4.63-.42-6.39-.21-.53.06-.62-.4-.14-.74,3.13-2.2,8.27-1.57,8.86-.83s-.16,5.89-3.09,8.35c-.45.38-.88.18-.68-.32C46.69,25.8,48.17,22.11,47.47,21.21Z"},null,-1)],P=(0,e.createElementVNode)("div",{style:{"font-size":"1.4rem"}},"AWS Toolkit for VS Code",-1),D={style:{"font-size":"1rem"}},I=(0,e.createElementVNode)("a",{href:"https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/welcome.html"},"Documentation",-1),B=(0,e.createElementVNode)("a",{href:"https://github.com/aws/aws-toolkit-vscode"},"Join us on Github",-1),S={key:0,style:{display:"flex","flex-direction":"column",gap:"1vw"}},y=(0,e.createElementVNode)("div",{style:{"font-size":"2.1rem","font-weight":"bold"}},"Select a sign-in option to continue:",-1),g=(0,e.createElementVNode)("hr",{style:{margin:"1em 0 1em 0","border-color":"var(--vscode-textBlockQuote-border)"}},null,-1),h={style:{display:"flex","flex-direction":"row","justify-content":"space-between",gap:"1em"}};function m(f,C,p,j,O,U){const x=(0,e.resolveComponent)("ConnectedNotification"),T=(0,e.resolveComponent)("CredentialsNotification"),N=(0,e.resolveComponent)("CodeWhispererContent"),w=(0,e.resolveComponent)("AwsExplorerContent"),b=(0,e.resolveComponent)("CodeCatalystContent");return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[(0,e.createCommentVNode)(` 
        HACK: Want to prefetch images but <link ref="prefetch"> does not work.
        We use <img> instead but hide it.
     `),(0,e.withDirectives)((0,e.createElementVNode)("img",n,null,512),[[e.vShow,!1]]),(0,e.withDirectives)((0,e.createElementVNode)("img",o,null,512),[[e.vShow,!1]]),(0,e.withDirectives)((0,e.createElementVNode)("img",i,null,512),[[e.vShow,!1]]),(0,e.createElementVNode)("div",r,[(0,e.createCommentVNode)(" Logo + Title "),(0,e.createElementVNode)("div",null,[(0,e.createElementVNode)("div",l,[(0,e.createElementVNode)("div",_,[((0,e.openBlock)(),(0,e.createElementBlock)("svg",A,v))]),(0,e.createElementVNode)("div",null,[P,(0,e.createElementVNode)("div",D,[I,(0,e.createTextVNode)(" | "),B,(0,e.createTextVNode)(" | "),(0,e.createElementVNode)("a",{onClick:C[0]||(C[0]=(...V)=>f.openFeedbackForm&&f.openFeedbackForm(...V)),style:{cursor:"pointer"}},"Share Feedback")])])]),(0,e.createCommentVNode)(" Status Bars "),f.notifications.model.showSuccessfulConnection||f.notifications.model.showFoundCredentials?((0,e.openBlock)(),(0,e.createElementBlock)("div",S,[(0,e.createCommentVNode)(` 
                    TODO figure out a better mechanism to dynamically create notifications instead
                    of fixed messages and just toggling them on/off.
                `),f.notifications.model.showSuccessfulConnection?((0,e.openBlock)(),(0,e.createBlock)(x,{key:0,args:{authName:f.notifications.model.authName}},null,8,["args"])):(0,e.createCommentVNode)("v-if",!0),f.notifications.model.showFoundCredentials?((0,e.openBlock)(),(0,e.createBlock)(T,{key:1})):(0,e.createCommentVNode)("v-if",!0)])):(0,e.createCommentVNode)("v-if",!0)]),(0,e.createElementVNode)("div",null,[y,g,(0,e.createElementVNode)("div",h,[(0,e.createVNode)(N,{state:f.serviceItemsAuthStatus.codewhisperer,"is-active":f.panelActivityState.isActive.codewhisperer},null,8,["state","is-active"]),(0,e.createVNode)(w,{state:f.serviceItemsAuthStatus.awsExplorer,"is-active":f.panelActivityState.isActive.awsExplorer},null,8,["state","is-active"]),(0,e.createVNode)(b,{state:f.serviceItemsAuthStatus.codecatalyst,"is-active":f.panelActivityState.isActive.codecatalyst},null,8,["state","is-active"])])])])],64)}},"./src/auth/ui/vue/authForms/types.ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{AuthFormDisplayName:()=>a,isBuilderIdAuth:()=>e});function e(n){return n.startsWith("builderId")}const a={credentials:"IAM Credentials",builderIdCodeCatalyst:"CodeCatalyst with AWS Builder ID",builderIdCodeWhisperer:"Amazon Q + CodeWhisperer with AWS Builder ID",identityCenterCodeCatalyst:"CodeCatalyst with IAM Identity Center",identityCenterCodeWhisperer:"Amazon Q + CodeWhisperer with IAM Identity Center",identityCenterExplorer:"AWS Explorer with IAM Identity Center",aggregateExplorer:""}},"./src/auth/ui/vue/types.ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{authFormTelemetryMapping:()=>i,emptyFields:()=>a,fieldHasError:()=>n,isServiceItemId:()=>o,userCancelled:()=>e});const e="userCancelled",a="emptyFields",n="fieldHasError";function o(r){return typeof r=="string"&&(r==="awsExplorer"||r==="codewhisperer"||r==="codecatalyst")}const i={builderIdCodeCatalyst:{featureType:"codecatalyst",authType:"awsId"},builderIdCodeWhisperer:{featureType:"codewhisperer",authType:"awsId"},credentials:{featureType:"awsExplorer",authType:"sharedCredentials"},identityCenterCodeWhisperer:{featureType:"codewhisperer",authType:"iamIdentityCenter"},identityCenterCodeCatalyst:{featureType:"codecatalyst",authType:"iamIdentityCenter"},identityCenterExplorer:{featureType:"awsExplorer",authType:"iamIdentityCenter"},aggregateExplorer:{featureType:"awsExplorer",authType:"other"}}},"./src/webviews/client.ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{WebviewClientFactory:()=>e});class e{static registerGlobalCommands(){const n=new Event("remount");window.addEventListener("message",o=>{const{command:i}=o.data;i==="$clear"&&(vscode.setState({}),this.messageListeners.forEach(r=>this.removeListener(r)),window.dispatchEvent(n))})}static addListener(n){this.messageListeners.add(n),window.addEventListener("message",n)}static removeListener(n){this.messageListeners.delete(n),window.removeEventListener("message",n)}static sendRequest(n,o,i){const r=JSON.parse(JSON.stringify(i)),l=new Promise((_,A)=>{const E=u=>{const v=u.data;if(n===v.id)if(this.removeListener(E),window.clearTimeout(c),v.error===!0){const P=JSON.parse(v.data);A(new Error(P.message))}else v.event?(typeof i[0]!="function"&&A(new Error(`Expected frontend event handler to be a function: ${o}`)),_(this.registerEventHandler(o,i[0]))):_(v.data)},c=setTimeout(()=>{this.removeListener(E),A(new Error(`Timed out while waiting for response: id: ${n}, command: ${o}`))},3e5);this.addListener(E)});return vscode.postMessage({id:n,command:o,data:r}),l}static registerEventHandler(n,o){const i=r=>{const l=r.data;if(l.command===n){if(!l.event)throw new Error(`Expected backend handler to be an event emitter: ${n}`);o(l.data)}};return this.addListener(i),{dispose:()=>this.removeListener(i)}}static create(){return this.initialized||(this.initialized=!0,this.registerGlobalCommands()),new Proxy({},{set:()=>{throw new TypeError("Cannot set property to webview client")},get:(n,o)=>{if(typeof o!="string"){console.warn(`Tried to index webview client with non-string property: ${String(o)}`);return}if(o==="init"){const r=vscode.getState()??{};if(r.__once)return()=>Promise.resolve();vscode.setState(Object.assign(r,{__once:!0}))}const i=(this.counter++).toString();return(...r)=>this.sendRequest(i,o,r)}})}}e.counter=0,e.initialized=!1,e.messageListeners=new Set},"../../node_modules/vue-loader/dist/exportHelper.js":(d,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=(t,e)=>{const a=t.__vccOpts||t;for(const[n,o]of e)a[n]=o;return a}},"./src/auth/ui/vue/authForms/baseAuth.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var e=t("./src/auth/ui/vue/authForms/baseAuth.vue?vue&type=script&lang=ts"),a=t("../../node_modules/vue-loader/dist/exportHelper.js");const o=(0,a.default)(e.default,[["__file","src/auth/ui/vue/authForms/baseAuth.vue"]])},"./src/auth/ui/vue/authForms/formTitle.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var e=t("./src/auth/ui/vue/authForms/formTitle.vue?vue&type=template&id=31fd2b46&ts=true"),a=t("./src/auth/ui/vue/authForms/formTitle.vue?vue&type=script&lang=ts"),n=t("./src/auth/ui/vue/authForms/formTitle.vue?vue&type=style&index=0&id=31fd2b46&lang=css"),o=t("../../node_modules/vue-loader/dist/exportHelper.js");const r=(0,o.default)(a.default,[["render",e.render],["__file","src/auth/ui/vue/authForms/formTitle.vue"]])},"./src/auth/ui/vue/authForms/manageBuilderId.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{CodeCatalystBuilderIdState:()=>a.CodeCatalystBuilderIdState,CodeWhispererBuilderIdState:()=>a.CodeWhispererBuilderIdState,default:()=>r});var e=t("./src/auth/ui/vue/authForms/manageBuilderId.vue?vue&type=template&id=75b9d8fa&ts=true"),a=t("./src/auth/ui/vue/authForms/manageBuilderId.vue?vue&type=script&lang=ts"),n=t("./src/auth/ui/vue/authForms/manageBuilderId.vue?vue&type=style&index=0&id=75b9d8fa&lang=css"),o=t("../../node_modules/vue-loader/dist/exportHelper.js");const r=(0,o.default)(a.default,[["render",e.render],["__file","src/auth/ui/vue/authForms/manageBuilderId.vue"]])},"./src/auth/ui/vue/authForms/manageCredentials.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{CredentialsState:()=>a.CredentialsState,default:()=>r});var e=t("./src/auth/ui/vue/authForms/manageCredentials.vue?vue&type=template&id=3f6697ae&ts=true"),a=t("./src/auth/ui/vue/authForms/manageCredentials.vue?vue&type=script&lang=ts"),n=t("./src/auth/ui/vue/authForms/manageCredentials.vue?vue&type=style&index=0&id=3f6697ae&lang=css"),o=t("../../node_modules/vue-loader/dist/exportHelper.js");const r=(0,o.default)(a.default,[["render",e.render],["__file","src/auth/ui/vue/authForms/manageCredentials.vue"]])},"./src/auth/ui/vue/authForms/manageExplorer.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var e=t("./src/auth/ui/vue/authForms/manageExplorer.vue?vue&type=template&id=28dd66e2&ts=true"),a=t("./src/auth/ui/vue/authForms/manageExplorer.vue?vue&type=script&lang=ts"),n=t("./src/auth/ui/vue/authForms/manageExplorer.vue?vue&type=style&index=0&id=28dd66e2&lang=css"),o=t("../../node_modules/vue-loader/dist/exportHelper.js");const r=(0,o.default)(a.default,[["render",e.render],["__file","src/auth/ui/vue/authForms/manageExplorer.vue"]])},"./src/auth/ui/vue/authForms/manageIdentityCenter.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{CodeCatalystIdentityCenterState:()=>a.CodeCatalystIdentityCenterState,CodeWhispererIdentityCenterState:()=>a.CodeWhispererIdentityCenterState,ExplorerIdentityCenterState:()=>a.ExplorerIdentityCenterState,default:()=>r});var e=t("./src/auth/ui/vue/authForms/manageIdentityCenter.vue?vue&type=template&id=3857c316&ts=true"),a=t("./src/auth/ui/vue/authForms/manageIdentityCenter.vue?vue&type=script&lang=ts"),n=t("./src/auth/ui/vue/authForms/manageIdentityCenter.vue?vue&type=style&index=0&id=3857c316&lang=css"),o=t("../../node_modules/vue-loader/dist/exportHelper.js");const r=(0,o.default)(a.default,[["render",e.render],["__file","src/auth/ui/vue/authForms/manageIdentityCenter.vue"]])},"./src/auth/ui/vue/authForms/shared.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{AuthFormIds:()=>e.AuthFormIds,FeatureStatus:()=>e.FeatureStatus,default:()=>o});var e=t("./src/auth/ui/vue/authForms/shared.vue?vue&type=script&lang=ts"),a=t("../../node_modules/vue-loader/dist/exportHelper.js");const o=(0,a.default)(e.default,[["__file","src/auth/ui/vue/authForms/shared.vue"]])},"./src/auth/ui/vue/featurePanel/awsExplorerContent.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{ResourceExplorerContentState:()=>a.ResourceExplorerContentState,default:()=>r});var e=t("./src/auth/ui/vue/featurePanel/awsExplorerContent.vue?vue&type=template&id=3855a978&ts=true"),a=t("./src/auth/ui/vue/featurePanel/awsExplorerContent.vue?vue&type=script&lang=ts"),n=t("./src/auth/ui/vue/featurePanel/awsExplorerContent.vue?vue&type=style&index=0&id=3855a978&lang=css"),o=t("../../node_modules/vue-loader/dist/exportHelper.js");const r=(0,o.default)(a.default,[["render",e.render],["__file","src/auth/ui/vue/featurePanel/awsExplorerContent.vue"]])},"./src/auth/ui/vue/featurePanel/baseServiceItemContent.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{PanelActivityState:()=>a.PanelActivityState,default:()=>r});var e=t("./src/auth/ui/vue/featurePanel/baseServiceItemContent.vue?vue&type=template&id=5bc6f0c6&ts=true"),a=t("./src/auth/ui/vue/featurePanel/baseServiceItemContent.vue?vue&type=script&lang=ts"),n=t("./src/auth/ui/vue/featurePanel/baseServiceItemContent.vue?vue&type=style&index=0&id=5bc6f0c6&lang=css"),o=t("../../node_modules/vue-loader/dist/exportHelper.js");const r=(0,o.default)(a.default,[["render",e.render],["__file","src/auth/ui/vue/featurePanel/baseServiceItemContent.vue"]])},"./src/auth/ui/vue/featurePanel/codeCatalystContent.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{CodeCatalystContentState:()=>a.CodeCatalystContentState,default:()=>r});var e=t("./src/auth/ui/vue/featurePanel/codeCatalystContent.vue?vue&type=template&id=edf646b0&ts=true"),a=t("./src/auth/ui/vue/featurePanel/codeCatalystContent.vue?vue&type=script&lang=ts"),n=t("./src/auth/ui/vue/featurePanel/codeCatalystContent.vue?vue&type=style&index=0&id=edf646b0&lang=css"),o=t("../../node_modules/vue-loader/dist/exportHelper.js");const r=(0,o.default)(a.default,[["render",e.render],["__file","src/auth/ui/vue/featurePanel/codeCatalystContent.vue"]])},"./src/auth/ui/vue/featurePanel/codeWhispererContent.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{CodeWhispererContentState:()=>a.CodeWhispererContentState,default:()=>r});var e=t("./src/auth/ui/vue/featurePanel/codeWhispererContent.vue?vue&type=template&id=a08699dc&ts=true"),a=t("./src/auth/ui/vue/featurePanel/codeWhispererContent.vue?vue&type=script&lang=ts"),n=t("./src/auth/ui/vue/featurePanel/codeWhispererContent.vue?vue&type=style&index=0&id=a08699dc&lang=css"),o=t("../../node_modules/vue-loader/dist/exportHelper.js");const r=(0,o.default)(a.default,[["render",e.render],["__file","src/auth/ui/vue/featurePanel/codeWhispererContent.vue"]])},"./src/auth/ui/vue/featurePanel/shared.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o,serviceItemsAuthStatus:()=>e.serviceItemsAuthStatus});var e=t("./src/auth/ui/vue/featurePanel/shared.vue?vue&type=script&lang=ts"),a=t("../../node_modules/vue-loader/dist/exportHelper.js");const o=(0,a.default)(e.default,[["__file","src/auth/ui/vue/featurePanel/shared.vue"]])},"./src/auth/ui/vue/notifications/baseNotification.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var e=t("./src/auth/ui/vue/notifications/baseNotification.vue?vue&type=script&lang=ts"),a=t("../../node_modules/vue-loader/dist/exportHelper.js");const o=(0,a.default)(e.default,[["__file","src/auth/ui/vue/notifications/baseNotification.vue"]])},"./src/auth/ui/vue/notifications/connectedNotification.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var e=t("./src/auth/ui/vue/notifications/connectedNotification.vue?vue&type=template&id=b7bb47b2&ts=true"),a=t("./src/auth/ui/vue/notifications/connectedNotification.vue?vue&type=script&lang=ts"),n=t("../../node_modules/vue-loader/dist/exportHelper.js");const i=(0,n.default)(a.default,[["render",e.render],["__file","src/auth/ui/vue/notifications/connectedNotification.vue"]])},"./src/auth/ui/vue/notifications/credentialsNotification.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i,showFoundExistingCredentials:()=>a.showFoundExistingCredentials});var e=t("./src/auth/ui/vue/notifications/credentialsNotification.vue?vue&type=template&id=3fe2f35a&ts=true"),a=t("./src/auth/ui/vue/notifications/credentialsNotification.vue?vue&type=script&lang=ts"),n=t("../../node_modules/vue-loader/dist/exportHelper.js");const i=(0,n.default)(a.default,[["render",e.render],["__file","src/auth/ui/vue/notifications/credentialsNotification.vue"]])},"./src/auth/ui/vue/notifications/notificationContainer.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var e=t("./src/auth/ui/vue/notifications/notificationContainer.vue?vue&type=template&id=387a1c69&ts=true"),a=t("./src/auth/ui/vue/notifications/notificationContainer.vue?vue&type=script&lang=ts"),n=t("./src/auth/ui/vue/notifications/notificationContainer.vue?vue&type=style&index=0&id=387a1c69&lang=css"),o=t("../../node_modules/vue-loader/dist/exportHelper.js");const r=(0,o.default)(a.default,[["render",e.render],["__file","src/auth/ui/vue/notifications/notificationContainer.vue"]])},"./src/auth/ui/vue/notifications/notifications.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{Notifications:()=>e.Notifications,default:()=>o});var e=t("./src/auth/ui/vue/notifications/notifications.vue?vue&type=script&lang=ts"),a=t("../../node_modules/vue-loader/dist/exportHelper.js");const o=(0,a.default)(e.default,[["__file","src/auth/ui/vue/notifications/notifications.vue"]])},"./src/auth/ui/vue/root.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var e=t("./src/auth/ui/vue/root.vue?vue&type=template&id=29c6d358&ts=true"),a=t("./src/auth/ui/vue/root.vue?vue&type=script&lang=ts"),n=t("./src/auth/ui/vue/root.vue?vue&type=style&index=0&id=29c6d358&lang=css"),o=t("../../node_modules/vue-loader/dist/exportHelper.js");const r=(0,o.default)(a.default,[["render",e.render],["__file","src/auth/ui/vue/root.vue"]])},"./src/auth/ui/vue/telemetry.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var e=t("./src/auth/ui/vue/telemetry.vue?vue&type=script&lang=ts"),a=t("../../node_modules/vue-loader/dist/exportHelper.js");const o=(0,a.default)(e.default,[["__file","src/auth/ui/vue/telemetry.vue"]])},"./src/auth/ui/vue/authForms/baseAuth.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/baseAuth.vue?vue&type=script&lang=ts")},"./src/auth/ui/vue/authForms/formTitle.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/formTitle.vue?vue&type=script&lang=ts")},"./src/auth/ui/vue/authForms/manageBuilderId.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{CodeCatalystBuilderIdState:()=>e.CodeCatalystBuilderIdState,CodeWhispererBuilderIdState:()=>e.CodeWhispererBuilderIdState,default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageBuilderId.vue?vue&type=script&lang=ts")},"./src/auth/ui/vue/authForms/manageCredentials.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{CredentialsState:()=>e.CredentialsState,default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageCredentials.vue?vue&type=script&lang=ts")},"./src/auth/ui/vue/authForms/manageExplorer.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageExplorer.vue?vue&type=script&lang=ts")},"./src/auth/ui/vue/authForms/manageIdentityCenter.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{CodeCatalystIdentityCenterState:()=>e.CodeCatalystIdentityCenterState,CodeWhispererIdentityCenterState:()=>e.CodeWhispererIdentityCenterState,ExplorerIdentityCenterState:()=>e.ExplorerIdentityCenterState,default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageIdentityCenter.vue?vue&type=script&lang=ts")},"./src/auth/ui/vue/authForms/shared.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{AuthFormIds:()=>e.AuthFormIds,FeatureStatus:()=>e.FeatureStatus,default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/shared.vue?vue&type=script&lang=ts")},"./src/auth/ui/vue/featurePanel/awsExplorerContent.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{ResourceExplorerContentState:()=>e.ResourceExplorerContentState,default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/awsExplorerContent.vue?vue&type=script&lang=ts")},"./src/auth/ui/vue/featurePanel/baseServiceItemContent.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{PanelActivityState:()=>e.PanelActivityState,default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/baseServiceItemContent.vue?vue&type=script&lang=ts")},"./src/auth/ui/vue/featurePanel/codeCatalystContent.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{CodeCatalystContentState:()=>e.CodeCatalystContentState,default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/codeCatalystContent.vue?vue&type=script&lang=ts")},"./src/auth/ui/vue/featurePanel/codeWhispererContent.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{CodeWhispererContentState:()=>e.CodeWhispererContentState,default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/codeWhispererContent.vue?vue&type=script&lang=ts")},"./src/auth/ui/vue/featurePanel/shared.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>e.default,serviceItemsAuthStatus:()=>e.serviceItemsAuthStatus});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/shared.vue?vue&type=script&lang=ts")},"./src/auth/ui/vue/notifications/baseNotification.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/baseNotification.vue?vue&type=script&lang=ts")},"./src/auth/ui/vue/notifications/connectedNotification.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/connectedNotification.vue?vue&type=script&lang=ts")},"./src/auth/ui/vue/notifications/credentialsNotification.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>e.default,showFoundExistingCredentials:()=>e.showFoundExistingCredentials});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/credentialsNotification.vue?vue&type=script&lang=ts")},"./src/auth/ui/vue/notifications/notificationContainer.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/notificationContainer.vue?vue&type=script&lang=ts")},"./src/auth/ui/vue/notifications/notifications.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{Notifications:()=>e.Notifications,default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/notifications.vue?vue&type=script&lang=ts")},"./src/auth/ui/vue/root.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/root.vue?vue&type=script&lang=ts")},"./src/auth/ui/vue/telemetry.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/telemetry.vue?vue&type=script&lang=ts")},"./src/auth/ui/vue/authForms/formTitle.vue?vue&type=template&id=31fd2b46&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/formTitle.vue?vue&type=template&id=31fd2b46&ts=true")},"./src/auth/ui/vue/authForms/manageBuilderId.vue?vue&type=template&id=75b9d8fa&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageBuilderId.vue?vue&type=template&id=75b9d8fa&ts=true")},"./src/auth/ui/vue/authForms/manageCredentials.vue?vue&type=template&id=3f6697ae&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageCredentials.vue?vue&type=template&id=3f6697ae&ts=true")},"./src/auth/ui/vue/authForms/manageExplorer.vue?vue&type=template&id=28dd66e2&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageExplorer.vue?vue&type=template&id=28dd66e2&ts=true")},"./src/auth/ui/vue/authForms/manageIdentityCenter.vue?vue&type=template&id=3857c316&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageIdentityCenter.vue?vue&type=template&id=3857c316&ts=true")},"./src/auth/ui/vue/featurePanel/awsExplorerContent.vue?vue&type=template&id=3855a978&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/awsExplorerContent.vue?vue&type=template&id=3855a978&ts=true")},"./src/auth/ui/vue/featurePanel/baseServiceItemContent.vue?vue&type=template&id=5bc6f0c6&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/baseServiceItemContent.vue?vue&type=template&id=5bc6f0c6&ts=true")},"./src/auth/ui/vue/featurePanel/codeCatalystContent.vue?vue&type=template&id=edf646b0&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/codeCatalystContent.vue?vue&type=template&id=edf646b0&ts=true")},"./src/auth/ui/vue/featurePanel/codeWhispererContent.vue?vue&type=template&id=a08699dc&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/codeWhispererContent.vue?vue&type=template&id=a08699dc&ts=true")},"./src/auth/ui/vue/notifications/connectedNotification.vue?vue&type=template&id=b7bb47b2&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/connectedNotification.vue?vue&type=template&id=b7bb47b2&ts=true")},"./src/auth/ui/vue/notifications/credentialsNotification.vue?vue&type=template&id=3fe2f35a&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/credentialsNotification.vue?vue&type=template&id=3fe2f35a&ts=true")},"./src/auth/ui/vue/notifications/notificationContainer.vue?vue&type=template&id=387a1c69&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/notificationContainer.vue?vue&type=template&id=387a1c69&ts=true")},"./src/auth/ui/vue/root.vue?vue&type=template&id=29c6d358&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/root.vue?vue&type=template&id=29c6d358&ts=true")},"./src/auth/ui/vue/authForms/formTitle.vue?vue&type=style&index=0&id=31fd2b46&lang=css":(d,s,t)=>{"use strict";t.r(s);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/formTitle.vue?vue&type=style&index=0&id=31fd2b46&lang=css"),a=t.n(e),n={};for(const o in e)o!=="default"&&(n[o]=()=>e[o]);t.d(s,n)},"./src/auth/ui/vue/authForms/manageBuilderId.vue?vue&type=style&index=0&id=75b9d8fa&lang=css":(d,s,t)=>{"use strict";t.r(s);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageBuilderId.vue?vue&type=style&index=0&id=75b9d8fa&lang=css"),a=t.n(e),n={};for(const o in e)o!=="default"&&(n[o]=()=>e[o]);t.d(s,n)},"./src/auth/ui/vue/authForms/manageCredentials.vue?vue&type=style&index=0&id=3f6697ae&lang=css":(d,s,t)=>{"use strict";t.r(s);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageCredentials.vue?vue&type=style&index=0&id=3f6697ae&lang=css"),a=t.n(e),n={};for(const o in e)o!=="default"&&(n[o]=()=>e[o]);t.d(s,n)},"./src/auth/ui/vue/authForms/manageExplorer.vue?vue&type=style&index=0&id=28dd66e2&lang=css":(d,s,t)=>{"use strict";t.r(s);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageExplorer.vue?vue&type=style&index=0&id=28dd66e2&lang=css"),a=t.n(e),n={};for(const o in e)o!=="default"&&(n[o]=()=>e[o]);t.d(s,n)},"./src/auth/ui/vue/authForms/manageIdentityCenter.vue?vue&type=style&index=0&id=3857c316&lang=css":(d,s,t)=>{"use strict";t.r(s);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageIdentityCenter.vue?vue&type=style&index=0&id=3857c316&lang=css"),a=t.n(e),n={};for(const o in e)o!=="default"&&(n[o]=()=>e[o]);t.d(s,n)},"./src/auth/ui/vue/featurePanel/awsExplorerContent.vue?vue&type=style&index=0&id=3855a978&lang=css":(d,s,t)=>{"use strict";t.r(s);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/awsExplorerContent.vue?vue&type=style&index=0&id=3855a978&lang=css"),a=t.n(e),n={};for(const o in e)o!=="default"&&(n[o]=()=>e[o]);t.d(s,n)},"./src/auth/ui/vue/featurePanel/baseServiceItemContent.vue?vue&type=style&index=0&id=5bc6f0c6&lang=css":(d,s,t)=>{"use strict";t.r(s);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/baseServiceItemContent.vue?vue&type=style&index=0&id=5bc6f0c6&lang=css"),a=t.n(e),n={};for(const o in e)o!=="default"&&(n[o]=()=>e[o]);t.d(s,n)},"./src/auth/ui/vue/featurePanel/codeCatalystContent.vue?vue&type=style&index=0&id=edf646b0&lang=css":(d,s,t)=>{"use strict";t.r(s);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/codeCatalystContent.vue?vue&type=style&index=0&id=edf646b0&lang=css"),a=t.n(e),n={};for(const o in e)o!=="default"&&(n[o]=()=>e[o]);t.d(s,n)},"./src/auth/ui/vue/featurePanel/codeWhispererContent.vue?vue&type=style&index=0&id=a08699dc&lang=css":(d,s,t)=>{"use strict";t.r(s);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/codeWhispererContent.vue?vue&type=style&index=0&id=a08699dc&lang=css"),a=t.n(e),n={};for(const o in e)o!=="default"&&(n[o]=()=>e[o]);t.d(s,n)},"./src/auth/ui/vue/notifications/notificationContainer.vue?vue&type=style&index=0&id=387a1c69&lang=css":(d,s,t)=>{"use strict";t.r(s);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/notificationContainer.vue?vue&type=style&index=0&id=387a1c69&lang=css"),a=t.n(e),n={};for(const o in e)o!=="default"&&(n[o]=()=>e[o]);t.d(s,n)},"./src/auth/ui/vue/root.vue?vue&type=style&index=0&id=29c6d358&lang=css":(d,s,t)=>{"use strict";t.r(s);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/root.vue?vue&type=style&index=0&id=29c6d358&lang=css"),a=t.n(e),n={};for(const o in e)o!=="default"&&(n[o]=()=>e[o]);t.d(s,n)},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/formTitle.vue?vue&type=style&index=0&id=31fd2b46&lang=css":(d,s,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/formTitle.vue?vue&type=style&index=0&id=31fd2b46&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.id,e,""]]),e.locals&&(d.exports=e.locals);var a=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,n=a("02f33686",e,!1,{})},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageBuilderId.vue?vue&type=style&index=0&id=75b9d8fa&lang=css":(d,s,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageBuilderId.vue?vue&type=style&index=0&id=75b9d8fa&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.id,e,""]]),e.locals&&(d.exports=e.locals);var a=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,n=a("586aa40a",e,!1,{})},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageCredentials.vue?vue&type=style&index=0&id=3f6697ae&lang=css":(d,s,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageCredentials.vue?vue&type=style&index=0&id=3f6697ae&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.id,e,""]]),e.locals&&(d.exports=e.locals);var a=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,n=a("6a4a7165",e,!1,{})},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageExplorer.vue?vue&type=style&index=0&id=28dd66e2&lang=css":(d,s,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageExplorer.vue?vue&type=style&index=0&id=28dd66e2&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.id,e,""]]),e.locals&&(d.exports=e.locals);var a=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,n=a("30e17eea",e,!1,{})},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageIdentityCenter.vue?vue&type=style&index=0&id=3857c316&lang=css":(d,s,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/authForms/manageIdentityCenter.vue?vue&type=style&index=0&id=3857c316&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.id,e,""]]),e.locals&&(d.exports=e.locals);var a=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,n=a("0959b718",e,!1,{})},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/awsExplorerContent.vue?vue&type=style&index=0&id=3855a978&lang=css":(d,s,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/awsExplorerContent.vue?vue&type=style&index=0&id=3855a978&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.id,e,""]]),e.locals&&(d.exports=e.locals);var a=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,n=a("2d9573c6",e,!1,{})},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/baseServiceItemContent.vue?vue&type=style&index=0&id=5bc6f0c6&lang=css":(d,s,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/baseServiceItemContent.vue?vue&type=style&index=0&id=5bc6f0c6&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.id,e,""]]),e.locals&&(d.exports=e.locals);var a=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,n=a("3dc6f630",e,!1,{})},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/codeCatalystContent.vue?vue&type=style&index=0&id=edf646b0&lang=css":(d,s,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/codeCatalystContent.vue?vue&type=style&index=0&id=edf646b0&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.id,e,""]]),e.locals&&(d.exports=e.locals);var a=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,n=a("0fc79fda",e,!1,{})},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/codeWhispererContent.vue?vue&type=style&index=0&id=a08699dc&lang=css":(d,s,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/featurePanel/codeWhispererContent.vue?vue&type=style&index=0&id=a08699dc&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.id,e,""]]),e.locals&&(d.exports=e.locals);var a=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,n=a("3b4102e3",e,!1,{})},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/notificationContainer.vue?vue&type=style&index=0&id=387a1c69&lang=css":(d,s,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/notifications/notificationContainer.vue?vue&type=style&index=0&id=387a1c69&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.id,e,""]]),e.locals&&(d.exports=e.locals);var a=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,n=a("9b6d1ed6",e,!1,{})},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/root.vue?vue&type=style&index=0&id=29c6d358&lang=css":(d,s,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/auth/ui/vue/root.vue?vue&type=style&index=0&id=29c6d358&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.id,e,""]]),e.locals&&(d.exports=e.locals);var a=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,n=a("60c2abaf",e,!1,{})},"../../node_modules/vue-style-loader/lib/addStylesClient.js":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>u});var e=t("../../node_modules/vue-style-loader/lib/listToStyles.js"),a=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n={},o=a&&(document.head||document.getElementsByTagName("head")[0]),i=null,r=0,l=!1,_=function(){},A=null,E="data-vue-ssr-id",c=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function u(y,g,h,m){l=h,A=m||{};var f=(0,e.default)(y,g);return v(f),function(p){for(var j=[],O=0;O<f.length;O++){var U=f[O],x=n[U.id];x.refs--,j.push(x)}p?(f=(0,e.default)(y,p),v(f)):f=[];for(var O=0;O<j.length;O++){var x=j[O];if(x.refs===0){for(var T=0;T<x.parts.length;T++)x.parts[T]();delete n[x.id]}}}}function v(y){for(var g=0;g<y.length;g++){var h=y[g],m=n[h.id];if(m){m.refs++;for(var f=0;f<m.parts.length;f++)m.parts[f](h.parts[f]);for(;f<h.parts.length;f++)m.parts.push(D(h.parts[f]));m.parts.length>h.parts.length&&(m.parts.length=h.parts.length)}else{for(var C=[],f=0;f<h.parts.length;f++)C.push(D(h.parts[f]));n[h.id]={id:h.id,refs:1,parts:C}}}}function P(){var y=document.createElement("style");return y.type="text/css",o.appendChild(y),y}function D(y){var g,h,m=document.querySelector("style["+E+'~="'+y.id+'"]');if(m){if(l)return _;m.parentNode.removeChild(m)}if(c){var f=r++;m=i||(i=P()),g=B.bind(null,m,f,!1),h=B.bind(null,m,f,!0)}else m=P(),g=S.bind(null,m),h=function(){m.parentNode.removeChild(m)};return g(y),function(p){if(p){if(p.css===y.css&&p.media===y.media&&p.sourceMap===y.sourceMap)return;g(y=p)}else h()}}var I=function(){var y=[];return function(g,h){return y[g]=h,y.filter(Boolean).join(`
`)}}();function B(y,g,h,m){var f=h?"":m.css;if(y.styleSheet)y.styleSheet.cssText=I(g,f);else{var C=document.createTextNode(f),p=y.childNodes;p[g]&&y.removeChild(p[g]),p.length?y.insertBefore(C,p[g]):y.appendChild(C)}}function S(y,g){var h=g.css,m=g.media,f=g.sourceMap;if(m&&y.setAttribute("media",m),A.ssrId&&y.setAttribute(E,g.id),f&&(h+=`
/*# sourceURL=`+f.sources[0]+" */",h+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(f))))+" */"),y.styleSheet)y.styleSheet.cssText=h;else{for(;y.firstChild;)y.removeChild(y.firstChild);y.appendChild(document.createTextNode(h))}}},"../../node_modules/vue-style-loader/lib/listToStyles.js":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>e});function e(a,n){for(var o=[],i={},r=0;r<n.length;r++){var l=n[r],_=l[0],A=l[1],E=l[2],c=l[3],u={id:a+":"+r,css:A,media:E,sourceMap:c};i[_]?i[_].parts.push(u):o.push(i[_]={id:_,parts:[u]})}return o}},vue:d=>{"use strict";d.exports=Vue}},W={};function M(d){var s=W[d];if(s!==void 0)return s.exports;var t=W[d]={id:d,exports:{}};return K[d](t,t.exports,M),t.exports}M.n=d=>{var s=d&&d.__esModule?()=>d.default:()=>d;return M.d(s,{a:s}),s},M.d=(d,s)=>{for(var t in s)M.o(s,t)&&!M.o(d,t)&&Object.defineProperty(d,t,{enumerable:!0,get:s[t]})},M.o=(d,s)=>Object.prototype.hasOwnProperty.call(d,s),M.r=d=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})};var R={};(()=>{"use strict";M.r(R);var d=M("vue"),s=M.n(d),t=M("./src/auth/ui/vue/root.vue");const e=()=>(0,d.createApp)(t.default),a=e();a.mount("#vue-app"),window.addEventListener("remount",()=>{a.unmount(),e().mount("#vue-app")})})();var F=this;for(var L in R)F[L]=R[L];R.__esModule&&Object.defineProperty(F,"__esModule",{value:!0})})();
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
/*!**********************************!*\
  !*** ./src/auth/ui/vue/index.ts ***!
  \**********************************/

//# sourceMappingURL=index.js.map