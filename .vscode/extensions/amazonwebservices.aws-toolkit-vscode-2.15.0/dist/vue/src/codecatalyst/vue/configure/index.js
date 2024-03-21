(()=>{var N={"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/compute.vue?vue&type=style&index=0&id=cf4bb844&scoped=true&lang=css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),a=t.n(e),n=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(n),i=o()(a());i.push([d.id,`
#compute-grid[data-v-cf4bb844] {
    display: grid;
    justify-content: left;
    grid-template-areas:
        'size vpc'
        'timeout volume';
    gap: 16px 24px;
}
#edit-compute-settings[data-v-cf4bb844] {
    margin-top: 16px;
}
`,"",{version:3,sources:["webpack://./src/codecatalyst/vue/compute.vue"],names:[],mappings:";AA2JA;IACI,aAAa;IACb,qBAAqB;IACrB;;wBAEoB;IACpB,cAAc;AAClB;AACA;IACI,gBAAgB;AACpB",sourcesContent:[`<template>
    <div>
        <div id="compute-grid">
            <div id="size" style="grid-area: size">
                <div>
                    <span class="label-context soft">Compute</span>
                    <b>{{ instance.name }}</b
                    ><br />
                    {{ instance.specs }}
                </div>
                <button
                    type="button"
                    id="edit-size"
                    class="button-theme-secondary mt-8"
                    @click="$emit('editSettings', 'instanceType')"
                >
                    Edit Compute
                </button>
            </div>
            <div id="timeout" style="grid-area: timeout">
                <div>
                    <span class="label-context soft">Timeout</span>
                    <b>{{ timeout }}</b>
                </div>
                <button
                    type="button"
                    id="edit-timeout"
                    class="button-theme-secondary mt-8"
                    @click="$emit('editSettings', 'inactivityTimeoutMinutes')"
                >
                    Edit Timeout
                </button>
            </div>
            <div id="volume" style="grid-area: volume">
                <span class="label-context soft">Storage</span>
                <b>{{ storage }}</b>
                <p class="mt-0 mb-0" v-if="mode === 'update'">{{ readonlyText }}</p>
                <div v-else>
                    <button
                        type="button"
                        id="edit-storage"
                        class="button-theme-secondary mt-8"
                        @click="$emit('editSettings', 'persistentStorage')"
                    >
                        Edit Storage Size
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { WebviewClientFactory } from '../../webviews/client'
import saveData from '../../webviews/mixins/saveData'
import { createClass, createType } from '../../webviews/util'
import { DevEnvironmentSettings } from '../commands'
import { CodeCatalystConfigureWebview } from './configure/backend'
import { CodeCatalystCreateWebview } from './create/backend'

const client = WebviewClientFactory.create<CodeCatalystConfigureWebview | CodeCatalystCreateWebview>()

const DEFAULT_COMPUTE_SETTINGS = {
    inactivityTimeoutMinutes: 15,
    instanceType: 'dev.standard1.small',
    persistentStorage: { sizeInGiB: 16 },
}

export const VueModel = createClass(DEFAULT_COMPUTE_SETTINGS)

export default defineComponent({
    name: 'compute-panel',
    props: {
        modelValue: {
            type: createType(VueModel),
            default: new VueModel(),
        },
        mode: {
            type: String as PropType<'create' | 'update'>,
            default: 'update',
        },
    },
    data() {
        return {
            changed: {} as Record<keyof DevEnvironmentSettings, boolean>,
            readonlyText: "Can't be changed after creation.",
            descriptions: {} as Record<string, { name: string; specs: string } | undefined>,
            originalData: undefined as typeof this.modelValue | undefined,
        }
    },
    mixins: [saveData],
    created() {
        client.getAllInstanceDescriptions().then(desc => (this.descriptions = desc))
    },
    watch: {
        model(settings?: DevEnvironmentSettings) {
            if (settings === undefined || this.originalData === undefined) {
                return
            }

            for (const [k, v] of Object.entries(settings)) {
                // TODO: use deep compare instead of strict so storage size works
                this.changed[k as keyof DevEnvironmentSettings] =
                    this.originalData[k as keyof typeof this.originalData] !== v
            }
        },
        modelValue() {
            this.originalData ??= this.modelValue
        },
    },
    methods: {
        getNeedsRestartText(key: keyof DevEnvironmentSettings) {
            return this.mode === 'update' && this.changed[key] ? ' (needs restart)' : ''
        },
    },
    computed: {
        model() {
            return this.modelValue
        },
        instance() {
            const type = this.model.instanceType
            const desc = this.descriptions[type] ? { ...this.descriptions[type] } : { name: '', specs: '' }
            const suffix =
                this.getNeedsRestartText('instanceType') ||
                (type === DEFAULT_COMPUTE_SETTINGS.instanceType ? ' (default)' : '')

            desc.name = \`\${desc.name}\${suffix}\`

            return desc
        },
        timeout() {
            const time = this.model.inactivityTimeoutMinutes
            const timeDesc = \`\${time} minutes\`
            const suffix =
                this.getNeedsRestartText('inactivityTimeoutMinutes') ||
                (time === DEFAULT_COMPUTE_SETTINGS.inactivityTimeoutMinutes ? ' (default)' : '')

            return \`\${timeDesc}\${suffix}\`
        },
        storage() {
            const storage = this.model.persistentStorage.sizeInGiB
            const storageDesc = \`\${storage} GB\`
            const suffix = storage === DEFAULT_COMPUTE_SETTINGS.persistentStorage.sizeInGiB ? ' (default)' : ''

            return \`\${storageDesc}\${suffix}\`
        },
    },
    emits: {
        editSettings: (key: keyof DevEnvironmentSettings) => key !== undefined,
    },
})
<\/script>

<style scoped>
#compute-grid {
    display: grid;
    justify-content: left;
    grid-template-areas:
        'size vpc'
        'timeout volume';
    gap: 16px 24px;
}
#edit-compute-settings {
    margin-top: 16px;
}
</style>
`],sourceRoot:""}]);const r=i},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/configure/root.vue?vue&type=style&index=0&id=11acefd8&scoped=true&lang=css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),a=t.n(e),n=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(n),i=o()(a());i.push([d.id,`
html[data-v-11acefd8] {
    overflow-y: scroll;
}
body[data-v-11acefd8] {
    padding-right: 12px;
}
#configure-header[data-v-11acefd8] {
    padding: 16px 0 0 0;
    background-color: none;
    position: relative;
}
.notification[data-v-11acefd8] {
    color: var(--vscode-notifications-foreground);
    background-color: var(--vscode-notifications-background);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 16px 0;
    padding: 12px;
    box-shadow: 2px 2px 8px #111111;
    position: sticky;
}
#notification-span[data-v-11acefd8] {
    display: flex;
    justify-content: left;
    align-items: inherit;
    width: 100%;
    flex-grow: 0;
}
#restart-button[data-v-11acefd8] {
    font-size: small;
    width: 100px;
    flex-grow: 1;
}
#info-notification-icon[data-v-11acefd8] {
    color: var(--vscode-notificationsInfoIcon-foreground);
}
.slide-down-enter-active[data-v-11acefd8] {
    transition: all 0.4s ease-in-out;
}
.slide-down-leave-active[data-v-11acefd8] {
    transition: none;
}
.slide-down-enter-from[data-v-11acefd8] {
    margin-bottom: -70px;
    transform: translateY(-70px);
    top: -70px;
}
.slide-down-enter-to[data-v-11acefd8] {
    margin-bottom: 0px;
    top: 16px;
}
#restart-notification[data-v-11acefd8] {
    z-index: 1;
    top: 16px;
}
`,"",{version:3,sources:["webpack://./src/codecatalyst/vue/configure/root.vue"],names:[],mappings:";AAkJA;IACI,kBAAkB;AACtB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,6CAA6C;IAC7C,wDAAwD;IACxD,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,cAAc;IACd,aAAa;IACb,+BAA+B;IAC/B,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,oBAAoB;IACpB,WAAW;IACX,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;AAChB;AACA;IACI,qDAAqD;AACzD;AACA;IACI,gCAAgC;AACpC;AACA;IACI,gBAAgB;AACpB;AACA;IACI,oBAAoB;IACpB,4BAA4B;IAC5B,UAAU;AACd;AACA;IACI,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,UAAU;IACV,SAAS;AACb",sourcesContent:[`<template>
    <div id="configure-header">
        <h2 style="display: inline">Settings for {{ devenvName }}</h2>
        <br />
    </div>
    <transition name="slide-down">
        <div id="restart-notification" class="notification" v-if="canRestart">
            <span id="notification-span">
                <span id="info-notification-icon" class="icon icon-lg icon-vscode-info mr-8"></span>
                <span>Restart your Dev Environment to update with changes.</span>
            </span>
            <button
                id="restart-button"
                type="button"
                class="button-theme-primary ml-16"
                :disabled="restarting"
                @click="restart()"
            >
                {{ restarting ? 'Restarting...' : 'Restart' }}
            </button>
        </div>
    </transition>
    <settings-panel id="summary-panel" title="Details">
        <summary-panel v-model="details" @edit-settings="editCompute"></summary-panel>
    </settings-panel>
    <settings-panel
        id="dev-file-panel"
        title="Devfile"
        description="Contains the definition to build your application libraries and toolchain. You can change the currently 
        configured definition file."
    >
        <devfile-panel :file-path="definitionFilePath"></devfile-panel>
    </settings-panel>

    <settings-panel
        id="compute-settings-panel"
        title="Dev Environment Configuration"
        description="All settings except Storage can be changed after creation."
    >
        <compute-panel v-model="compute" type="configure" @edit-settings="editCompute"></compute-panel>
    </settings-panel>
</template>

<script lang="ts">
import summaryPanel, { VueModel as DevEnvDetailsModel } from '../summary.vue'
import computePanel, { VueModel as ComputeModel } from '../compute.vue'
import settingsPanel from '../../../webviews/components/settingsPanel.vue'
import devfilePanel from '../devfile.vue'
import { defineComponent } from 'vue'
import { CodeCatalystConfigureWebview } from './backend'
import { WebviewClientFactory } from '../../../webviews/client'
import saveData from '../../../webviews/mixins/saveData'
import { Status } from '../../../shared/clients/devenvClient'
import { DevEnvironmentSettings } from '../../commands'

const client = WebviewClientFactory.create<CodeCatalystConfigureWebview>()

const model = {
    details: new DevEnvDetailsModel(),
    definitionFilePath: '',
    devenvUrl: '',
    devfileStatus: 'STABLE' as Status,
    compute: new ComputeModel(),
    restarting: false,
    needsRestart: false,
    branchUrl: '',
}

export default defineComponent({
    name: 'configure',
    components: {
        settingsPanel,
        devfilePanel,
        computePanel,
        summaryPanel,
    },
    mixins: [saveData],
    data() {
        return model
    },
    computed: {
        devenvName() {
            const alias = this.details.alias
            const branch = this.details.repositories[0]?.branchName

            return alias ?? branch ?? this.details.id
        },
        canRestart() {
            return (this.needsRestart || this.devfileStatus === 'CHANGED') && this.details.status === 'RUNNING'
        },

        // TODO(sijaden): add \`busy\` and then bind it to all components so they can disable things
    },
    created() {
        client.init().then(env => {
            this.details = env ? new DevEnvDetailsModel(env) : this.details
            this.compute = env ? new ComputeModel(env) : this.compute
        })

        client.onDidChangeDevfile(data => {
            this.devfileStatus = data.status ?? this.devfileStatus
        })

        if (!this.definitionFilePath) {
            client.getDevfileLocation().then(f => (this.definitionFilePath = f))
        }
    },
    methods: {
        async editCompute(key: keyof DevEnvironmentSettings) {
            const previous = this.compute[key as Exclude<typeof key, 'alias'>]
            const current = { ...this.compute, alias: this.details.alias }
            const resp = await client.editSetting(current, key)

            if (key !== 'alias') {
                this.needsRestart = this.needsRestart || previous !== resp[key]
                this.compute = new ComputeModel(resp)
            } else if (resp.alias) {
                this.details.alias = resp.alias
                await client.updateDevEnv(this.details, { alias: this.details.alias })
            }
        },
        async restart() {
            this.restarting = true
            try {
                if (this.devfileStatus === 'CHANGED' && !this.needsRestart) {
                    return await client.updateDevfile(this.definitionFilePath)
                }

                // SDK rejects extraneous fields
                const resp = await client.updateDevEnv(this.details, {
                    instanceType: this.compute.instanceType,
                    inactivityTimeoutMinutes: this.compute.inactivityTimeoutMinutes,
                    // persistentStorage: this.compute.persistentStorage,
                })

                this.restarting = !!resp
            } catch {
                this.restarting = false
                client.showLogsMessage('Unable to update the dev Environment. View the logs for more information')
            }
        },
    },
})
<\/script>

<style scoped>
html {
    overflow-y: scroll;
}
body {
    padding-right: 12px;
}
#configure-header {
    padding: 16px 0 0 0;
    background-color: none;
    position: relative;
}
.notification {
    color: var(--vscode-notifications-foreground);
    background-color: var(--vscode-notifications-background);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 16px 0;
    padding: 12px;
    box-shadow: 2px 2px 8px #111111;
    position: sticky;
}
#notification-span {
    display: flex;
    justify-content: left;
    align-items: inherit;
    width: 100%;
    flex-grow: 0;
}
#restart-button {
    font-size: small;
    width: 100px;
    flex-grow: 1;
}
#info-notification-icon {
    color: var(--vscode-notificationsInfoIcon-foreground);
}
.slide-down-enter-active {
    transition: all 0.4s ease-in-out;
}
.slide-down-leave-active {
    transition: none;
}
.slide-down-enter-from {
    margin-bottom: -70px;
    transform: translateY(-70px);
    top: -70px;
}
.slide-down-enter-to {
    margin-bottom: 0px;
    top: 16px;
}
#restart-notification {
    z-index: 1;
    top: 16px;
}
</style>
`],sourceRoot:""}]);const r=i},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/summary.vue?vue&type=style&index=0&id=446df3cd&scoped=true&lang=css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),a=t.n(e),n=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(n),i=o()(a());i.push([d.id,`
#summary-grid[data-v-446df3cd] {
    display: grid;
    justify-content: left;
    grid-template-areas:
        'alias branch'
        'status project';
    gap: 16px 160px;
}
#edit-compute-settings[data-v-446df3cd] {
    margin-top: 16px;
}

/* TODO: darker green for light-theme ??? */
#status[data-connected='true'][data-v-446df3cd] {
    color: var(--vscode-testing-iconPassed);
}
#connected-icon[data-v-446df3cd] {
    padding: 4px;
    vertical-align: -0.2em;
}
#stop-icon[data-v-446df3cd] {
    color: var(--vscode-debugIcon-stopForeground);
    margin-right: 5px;
    vertical-align: -0.2em;
}
`,"",{version:3,sources:["webpack://./src/codecatalyst/vue/summary.vue"],names:[],mappings:";AAuIA;IACI,aAAa;IACb,qBAAqB;IACrB;;wBAEoB;IACpB,eAAe;AACnB;AACA;IACI,gBAAgB;AACpB;;AAEA,2CAA2C;AAC3C;IACI,uCAAuC;AAC3C;AAEA;IACI,YAAY;IACZ,sBAAsB;AAC1B;AAEA;IACI,6CAA6C;IAC7C,iBAAiB;IACjB,sBAAsB;AAC1B",sourcesContent:[`<template>
    <div>
        <div id="summary-grid">
            <div id="alias" style="grid-area: alias">
                <span class="label-context soft">Alias</span>
                <b class="mb-8" style="display: block" v-if="!!summary.alias">
                    {{ summary.alias }}
                </b>
                <button
                    id="edit-alias"
                    class="button-theme-secondary"
                    type="button"
                    :disabled="!isConnected"
                    @click="$emit('editSettings', 'alias')"
                >
                    {{ summary.alias ? 'Edit Alias' : 'Add Alias' }}
                </button>
            </div>
            <!--TODO: render something here if branch is missing-->
            <div id="branch" style="grid-area: branch" v-if="!!branchName">
                <span class="label-context soft">Branch</span>
                <b class="mb-8" style="display: block">{{ branchName }}</b>
                <button class="button-theme-secondary" @click="openBranch">
                    <!--TODO: support 3P links?-->
                    Open Branch in CodeCatalyst
                </button>
            </div>
            <div id="project" style="grid-area: project">
                <span class="label-context soft">Project</span>
                <b>{{ summary.project.name }}</b>
            </div>
            <div id="status" style="grid-area: status" :data-connected="isConnected">
                <span class="label-context soft">Status</span>
                <b>
                    <span id="connected-icon" class="icon icon-lg icon-vscode-pass" v-if="isConnected"></span>
                    <span v-html="isConnected ? 'Connected' : status"></span>
                </b>
            </div>
        </div>
        <button
            id="toggle-state"
            class="button-theme-secondary mt-8"
            type="button"
            :disabled="!isConnected"
            @click="stopDevEnv"
        >
            <span id="stop-icon" class="icon icon-lg icon-vscode-stop-circle"></span>Stop
        </button>
        <!--TODO: add generic 'delete thing' prompt then enable this-->
        <button
            id="delete-devenv"
            class="button-theme-secondary ml-8 mt-8"
            type="button"
            :disabled="!isConnected"
            @click="deleteDevEnv"
            v-show="false"
        >
            Delete Dev Environment
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { WebviewClientFactory } from '../../webviews/client'
import { createClass, createType } from '../../webviews/util'
import { CodeCatalystConfigureWebview } from './configure/backend'
import { DevEnvironment } from '../../shared/clients/codecatalystClient'

const client = WebviewClientFactory.create<CodeCatalystConfigureWebview>()

type PartialModel = Pick<DevEnvironment, 'alias' | 'org' | 'project' | 'repositories' | 'status' | 'id'>
export const VueModel = createClass<PartialModel>({
    org: { name: '' },
    project: { name: '' },
    repositories: [],
    status: '',
    id: '',
})

export default defineComponent({
    name: 'devenv-summary',
    props: {
        modelValue: {
            type: createType(VueModel),
            required: true,
        },
    },
    emits: {
        editSettings: (key: 'alias') => key !== undefined,
        'update:modelValue': (model: PartialModel) => model !== undefined,
    },
    computed: {
        status() {
            return this.summary.status.charAt(0).concat(this.summary.status.slice(1).toLowerCase())
        },
        isConnected() {
            return this.summary.status === 'RUNNING'
        },
        summary() {
            return this.modelValue
        },
        branchName() {
            return this.summary.repositories[0]?.branchName
        },
    },
    methods: {
        update<K extends keyof PartialModel>(key: K, value: PartialModel[K]) {
            this.$emit('update:modelValue', { ...this.modelValue, [key]: value })
        },
        // Need to move these two remote calls up into the root component.
        async stopDevEnv() {
            try {
                this.update('status', 'STOPPING')
                await client.stopDevEnv(this.summary)
            } catch {
                this.update('status', 'RUNNING')
            }
        },
        async deleteDevEnv() {
            try {
                this.update('status', 'DELETING')
                await client.deleteDevEnv(this.summary)
            } catch {
                this.update('status', 'RUNNING')
            }
        },
        async openBranch() {
            return client.openBranch()
        },
    },
})
<\/script>

<style scoped>
#summary-grid {
    display: grid;
    justify-content: left;
    grid-template-areas:
        'alias branch'
        'status project';
    gap: 16px 160px;
}
#edit-compute-settings {
    margin-top: 16px;
}

/* TODO: darker green for light-theme ??? */
#status[data-connected='true'] {
    color: var(--vscode-testing-iconPassed);
}

#connected-icon {
    padding: 4px;
    vertical-align: -0.2em;
}

#stop-icon {
    color: var(--vscode-debugIcon-stopForeground);
    margin-right: 5px;
    vertical-align: -0.2em;
}
</style>
`],sourceRoot:""}]);const r=i},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=style&index=0&id=1334c634&scoped=true&lang=css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),a=t.n(e),n=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(n),i=o()(a());i.push([d.id,`
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
`],sourceRoot:""}]);const r=i},"../../node_modules/css-loader/dist/runtime/api.js":d=>{"use strict";d.exports=function(s){var t=[];return t.toString=function(){return this.map(function(a){var n="",o=typeof a[5]<"u";return a[4]&&(n+="@supports (".concat(a[4],") {")),a[2]&&(n+="@media ".concat(a[2]," {")),o&&(n+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),n+=s(a),o&&(n+="}"),a[2]&&(n+="}"),a[4]&&(n+="}"),n}).join("")},t.i=function(a,n,o,i,r){typeof a=="string"&&(a=[[null,a,void 0]]);var v={};if(o)for(var p=0;p<this.length;p++){var g=this[p][0];g!=null&&(v[g]=!0)}for(var _=0;_<a.length;_++){var l=[].concat(a[_]);o&&v[l[0]]||(typeof r<"u"&&(typeof l[5]>"u"||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]&&(l[1]="@media ".concat(l[2]," {").concat(l[1],"}")),l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},"../../node_modules/css-loader/dist/runtime/sourceMaps.js":d=>{"use strict";d.exports=function(s){var t=s[1],e=s[3];if(!e)return t;if(typeof btoa=="function"){var a=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),o="/*# ".concat(n," */");return[t].concat([o]).join(`
`)}return[t].join(`
`)}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/compute.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{VueModel:()=>p,default:()=>g});var e=t("vue"),a=t.n(e),n=t("./src/webviews/client.ts"),o=t("./src/webviews/mixins/saveData.ts"),i=t("./src/webviews/util.ts");const r=n.WebviewClientFactory.create(),v={inactivityTimeoutMinutes:15,instanceType:"dev.standard1.small",persistentStorage:{sizeInGiB:16}},p=(0,i.createClass)(v),g=(0,e.defineComponent)({name:"compute-panel",props:{modelValue:{type:(0,i.createType)(p),default:new p},mode:{type:String,default:"update"}},data(){return{changed:{},readonlyText:"Can't be changed after creation.",descriptions:{},originalData:void 0}},mixins:[o.default],created(){r.getAllInstanceDescriptions().then(_=>this.descriptions=_)},watch:{model(_){if(!(_===void 0||this.originalData===void 0))for(const[l,c]of Object.entries(_))this.changed[l]=this.originalData[l]!==c},modelValue(){this.originalData??=this.modelValue}},methods:{getNeedsRestartText(_){return this.mode==="update"&&this.changed[_]?" (needs restart)":""}},computed:{model(){return this.modelValue},instance(){const _=this.model.instanceType,l=this.descriptions[_]?{...this.descriptions[_]}:{name:"",specs:""},c=this.getNeedsRestartText("instanceType")||(_===v.instanceType?" (default)":"");return l.name=`${l.name}${c}`,l},timeout(){const _=this.model.inactivityTimeoutMinutes,l=`${_} minutes`,c=this.getNeedsRestartText("inactivityTimeoutMinutes")||(_===v.inactivityTimeoutMinutes?" (default)":"");return`${l}${c}`},storage(){const _=this.model.persistentStorage.sizeInGiB,l=`${_} GB`,c=_===v.persistentStorage.sizeInGiB?" (default)":"";return`${l}${c}`}},emits:{editSettings:_=>_!==void 0}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/configure/root.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var e=t("./src/codecatalyst/vue/summary.vue"),a=t("./src/codecatalyst/vue/compute.vue"),n=t("./src/webviews/components/settingsPanel.vue"),o=t("./src/codecatalyst/vue/devfile.vue"),i=t("vue"),r=t.n(i),v=t("./src/webviews/client.ts"),p=t("./src/webviews/mixins/saveData.ts");const g=v.WebviewClientFactory.create(),_={details:new e.VueModel,definitionFilePath:"",devenvUrl:"",devfileStatus:"STABLE",compute:new a.VueModel,restarting:!1,needsRestart:!1,branchUrl:""},l=(0,i.defineComponent)({name:"configure",components:{settingsPanel:n.default,devfilePanel:o.default,computePanel:a.default,summaryPanel:e.default},mixins:[p.default],data(){return _},computed:{devenvName(){const c=this.details.alias,f=this.details.repositories[0]?.branchName;return c??f??this.details.id},canRestart(){return(this.needsRestart||this.devfileStatus==="CHANGED")&&this.details.status==="RUNNING"}},created(){g.init().then(c=>{this.details=c?new e.VueModel(c):this.details,this.compute=c?new a.VueModel(c):this.compute}),g.onDidChangeDevfile(c=>{this.devfileStatus=c.status??this.devfileStatus}),this.definitionFilePath||g.getDevfileLocation().then(c=>this.definitionFilePath=c)},methods:{async editCompute(c){const f=this.compute[c],C={...this.compute,alias:this.details.alias},E=await g.editSetting(C,c);c!=="alias"?(this.needsRestart=this.needsRestart||f!==E[c],this.compute=new a.VueModel(E)):E.alias&&(this.details.alias=E.alias,await g.updateDevEnv(this.details,{alias:this.details.alias}))},async restart(){this.restarting=!0;try{if(this.devfileStatus==="CHANGED"&&!this.needsRestart)return await g.updateDevfile(this.definitionFilePath);const c=await g.updateDevEnv(this.details,{instanceType:this.compute.instanceType,inactivityTimeoutMinutes:this.compute.inactivityTimeoutMinutes});this.restarting=!!c}catch{this.restarting=!1,g.showLogsMessage("Unable to update the dev Environment. View the logs for more information")}}}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/devfile.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var e=t("vue"),a=t.n(e),n=t("./src/webviews/client.ts");const o=n.WebviewClientFactory.create(),i=(0,e.defineComponent)({name:"devfile",props:{filePath:String},methods:{preview(){o.openDevfile()}}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/summary.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{VueModel:()=>r,default:()=>v});var e=t("vue"),a=t.n(e),n=t("./src/webviews/client.ts"),o=t("./src/webviews/util.ts");const i=n.WebviewClientFactory.create(),r=(0,o.createClass)({org:{name:""},project:{name:""},repositories:[],status:"",id:""}),v=(0,e.defineComponent)({name:"devenv-summary",props:{modelValue:{type:(0,o.createType)(r),required:!0}},emits:{editSettings:p=>p!==void 0,"update:modelValue":p=>p!==void 0},computed:{status(){return this.summary.status.charAt(0).concat(this.summary.status.slice(1).toLowerCase())},isConnected(){return this.summary.status==="RUNNING"},summary(){return this.modelValue},branchName(){return this.summary.repositories[0]?.branchName}},methods:{update(p,g){this.$emit("update:modelValue",{...this.modelValue,[p]:g})},async stopDevEnv(){try{this.update("status","STOPPING"),await i.stopDevEnv(this.summary)}catch{this.update("status","RUNNING")}},async deleteDevEnv(){try{this.update("status","DELETING"),await i.deleteDevEnv(this.summary)}catch{this.update("status","RUNNING")}},async openBranch(){return i.openBranch()}}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var e=t("vue"),a=t.n(e),n=t("./src/webviews/mixins/saveData.ts");let o=0;const i=(0,e.defineComponent)({name:"settings-panel",props:{id:String,startCollapsed:Boolean,collapseable:Boolean,title:String,description:String},data(){return o+=1,{collapsed:this.$props.startCollapsed??!1,buttonId:`settings-panel-button-${o}`,lastHeight:void 0}},mixins:[n.default],methods:{updateHeight(r){r.style&&(this.lastHeight=r.scrollHeight,r.style.setProperty("--max-height",`${this.lastHeight}px`))}},mounted(){this.subPane=this.$refs.subPane,this.lastHeight=this.collapsed?this.lastHeight:this.subPane?.scrollHeight??this.lastHeight,this.$nextTick(()=>{setTimeout(()=>{this.$refs.icon?.classList.remove("preload-transition")},100)})}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/compute.vue?vue&type=template&id=cf4bb844&scoped=true&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>C});var e=t("vue"),a=t.n(e);const n=E=>((0,e.pushScopeId)("data-v-cf4bb844"),E=E(),(0,e.popScopeId)(),E),o={id:"compute-grid"},i={id:"size",style:{"grid-area":"size"}},r=n(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Compute",-1)),v=n(()=>(0,e.createElementVNode)("br",null,null,-1)),p={id:"timeout",style:{"grid-area":"timeout"}},g=n(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Timeout",-1)),_={id:"volume",style:{"grid-area":"volume"}},l=n(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Storage",-1)),c={key:0,class:"mt-0 mb-0"},f={key:1};function C(E,b,M,B,m,h){return(0,e.openBlock)(),(0,e.createElementBlock)("div",null,[(0,e.createElementVNode)("div",o,[(0,e.createElementVNode)("div",i,[(0,e.createElementVNode)("div",null,[r,(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(E.instance.name),1),v,(0,e.createTextVNode)(" "+(0,e.toDisplayString)(E.instance.specs),1)]),(0,e.createElementVNode)("button",{type:"button",id:"edit-size",class:"button-theme-secondary mt-8",onClick:b[0]||(b[0]=A=>E.$emit("editSettings","instanceType"))}," Edit Compute ")]),(0,e.createElementVNode)("div",p,[(0,e.createElementVNode)("div",null,[g,(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(E.timeout),1)]),(0,e.createElementVNode)("button",{type:"button",id:"edit-timeout",class:"button-theme-secondary mt-8",onClick:b[1]||(b[1]=A=>E.$emit("editSettings","inactivityTimeoutMinutes"))}," Edit Timeout ")]),(0,e.createElementVNode)("div",_,[l,(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(E.storage),1),E.mode==="update"?((0,e.openBlock)(),(0,e.createElementBlock)("p",c,(0,e.toDisplayString)(E.readonlyText),1)):((0,e.openBlock)(),(0,e.createElementBlock)("div",f,[(0,e.createElementVNode)("button",{type:"button",id:"edit-storage",class:"button-theme-secondary mt-8",onClick:b[2]||(b[2]=A=>E.$emit("editSettings","persistentStorage"))}," Edit Storage Size ")]))])])])}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/configure/root.vue?vue&type=template&id=11acefd8&scoped=true&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>_});var e=t("vue"),a=t.n(e);const n=l=>((0,e.pushScopeId)("data-v-11acefd8"),l=l(),(0,e.popScopeId)(),l),o={id:"configure-header"},i={style:{display:"inline"}},r=n(()=>(0,e.createElementVNode)("br",null,null,-1)),v={key:0,id:"restart-notification",class:"notification"},p=n(()=>(0,e.createElementVNode)("span",{id:"notification-span"},[(0,e.createElementVNode)("span",{id:"info-notification-icon",class:"icon icon-lg icon-vscode-info mr-8"}),(0,e.createElementVNode)("span",null,"Restart your Dev Environment to update with changes.")],-1)),g=["disabled"];function _(l,c,f,C,E,b){const M=(0,e.resolveComponent)("summary-panel"),B=(0,e.resolveComponent)("settings-panel"),m=(0,e.resolveComponent)("devfile-panel"),h=(0,e.resolveComponent)("compute-panel");return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[(0,e.createElementVNode)("div",o,[(0,e.createElementVNode)("h2",i,"Settings for "+(0,e.toDisplayString)(l.devenvName),1),r]),(0,e.createVNode)(e.Transition,{name:"slide-down"},{default:(0,e.withCtx)(()=>[l.canRestart?((0,e.openBlock)(),(0,e.createElementBlock)("div",v,[p,(0,e.createElementVNode)("button",{id:"restart-button",type:"button",class:"button-theme-primary ml-16",disabled:l.restarting,onClick:c[0]||(c[0]=A=>l.restart())},(0,e.toDisplayString)(l.restarting?"Restarting...":"Restart"),9,g)])):(0,e.createCommentVNode)("v-if",!0)]),_:1}),(0,e.createVNode)(B,{id:"summary-panel",title:"Details"},{default:(0,e.withCtx)(()=>[(0,e.createVNode)(M,{modelValue:l.details,"onUpdate:modelValue":c[1]||(c[1]=A=>l.details=A),onEditSettings:l.editCompute},null,8,["modelValue","onEditSettings"])]),_:1}),(0,e.createVNode)(B,{id:"dev-file-panel",title:"Devfile",description:`Contains the definition to build your application libraries and toolchain. You can change the currently 
        configured definition file.`},{default:(0,e.withCtx)(()=>[(0,e.createVNode)(m,{"file-path":l.definitionFilePath},null,8,["file-path"])]),_:1}),(0,e.createVNode)(B,{id:"compute-settings-panel",title:"Dev Environment Configuration",description:"All settings except Storage can be changed after creation."},{default:(0,e.withCtx)(()=>[(0,e.createVNode)(h,{modelValue:l.compute,"onUpdate:modelValue":c[2]||(c[2]=A=>l.compute=A),type:"configure",onEditSettings:l.editCompute},null,8,["modelValue","onEditSettings"])]),_:1})],64)}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/devfile.vue?vue&type=template&id=418b05b8&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>i});var e=t("vue"),a=t.n(e);const n={id:"location"},o=(0,e.createElementVNode)("span",{class:"label-context soft"},"Location:",-1);function i(r,v,p,g,_,l){return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[(0,e.createElementVNode)("div",n,[o,(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(r.filePath),1)]),(0,e.createElementVNode)("button",{id:"preview-devfile",class:"button-theme-secondary no-wrap mt-8",type:"button",style:{"grid-area":"button"},onClick:v[0]||(v[0]=(...c)=>r.preview&&r.preview(...c))}," Open in Editor ")],64)}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/summary.vue?vue&type=template&id=446df3cd&scoped=true&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>A});var e=t("vue"),a=t.n(e);const n=u=>((0,e.pushScopeId)("data-v-446df3cd"),u=u(),(0,e.popScopeId)(),u),o={id:"summary-grid"},i={id:"alias",style:{"grid-area":"alias"}},r=n(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Alias",-1)),v={key:0,class:"mb-8",style:{display:"block"}},p=["disabled"],g={key:0,id:"branch",style:{"grid-area":"branch"}},_=n(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Branch",-1)),l={class:"mb-8",style:{display:"block"}},c={id:"project",style:{"grid-area":"project"}},f=n(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Project",-1)),C=["data-connected"],E=n(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Status",-1)),b={key:0,id:"connected-icon",class:"icon icon-lg icon-vscode-pass"},M=["innerHTML"],B=["disabled"],m=n(()=>(0,e.createElementVNode)("span",{id:"stop-icon",class:"icon icon-lg icon-vscode-stop-circle"},null,-1)),h=["disabled"];function A(u,y,S,P,x,O){return(0,e.openBlock)(),(0,e.createElementBlock)("div",null,[(0,e.createElementVNode)("div",o,[(0,e.createElementVNode)("div",i,[r,u.summary.alias?((0,e.openBlock)(),(0,e.createElementBlock)("b",v,(0,e.toDisplayString)(u.summary.alias),1)):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("button",{id:"edit-alias",class:"button-theme-secondary",type:"button",disabled:!u.isConnected,onClick:y[0]||(y[0]=I=>u.$emit("editSettings","alias"))},(0,e.toDisplayString)(u.summary.alias?"Edit Alias":"Add Alias"),9,p)]),(0,e.createCommentVNode)("TODO: render something here if branch is missing"),u.branchName?((0,e.openBlock)(),(0,e.createElementBlock)("div",g,[_,(0,e.createElementVNode)("b",l,(0,e.toDisplayString)(u.branchName),1),(0,e.createElementVNode)("button",{class:"button-theme-secondary",onClick:y[1]||(y[1]=(...I)=>u.openBranch&&u.openBranch(...I))},[(0,e.createCommentVNode)("TODO: support 3P links?"),(0,e.createTextVNode)(" Open Branch in CodeCatalyst ")])])):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("div",c,[f,(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(u.summary.project.name),1)]),(0,e.createElementVNode)("div",{id:"status",style:{"grid-area":"status"},"data-connected":u.isConnected},[E,(0,e.createElementVNode)("b",null,[u.isConnected?((0,e.openBlock)(),(0,e.createElementBlock)("span",b)):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("span",{innerHTML:u.isConnected?"Connected":u.status},null,8,M)])],8,C)]),(0,e.createElementVNode)("button",{id:"toggle-state",class:"button-theme-secondary mt-8",type:"button",disabled:!u.isConnected,onClick:y[2]||(y[2]=(...I)=>u.stopDevEnv&&u.stopDevEnv(...I))},[m,(0,e.createTextVNode)("Stop ")],8,B),(0,e.createCommentVNode)("TODO: add generic 'delete thing' prompt then enable this"),(0,e.withDirectives)((0,e.createElementVNode)("button",{id:"delete-devenv",class:"button-theme-secondary ml-8 mt-8",type:"button",disabled:!u.isConnected,onClick:y[3]||(y[3]=(...I)=>u.deleteDevEnv&&u.deleteDevEnv(...I))}," Delete Dev Environment ",8,h),[[e.vShow,!1]])])}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=template&id=1334c634&scoped=true&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>c});var e=t("vue"),a=t.n(e);const n=f=>((0,e.pushScopeId)("data-v-1334c634"),f=f(),(0,e.popScopeId)(),f),o=["id"],i={class:"header"},r=["id"],v=["for"],p={class:"preload-transition collapse-button icon icon-vscode-chevron-up",ref:"icon"},g={class:"settings-title"},_={class:"soft no-spacing mt-8"},l={ref:"subPane",class:"sub-pane"};function c(f,C,E,b,M,B){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{id:f.id,class:"settings-panel"},[(0,e.createElementVNode)("div",i,[f.collapseable||f.startCollapsed?(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("input",{key:0,id:f.buttonId,style:{display:"none"},type:"checkbox","onUpdate:modelValue":C[0]||(C[0]=m=>f.collapsed=m)},null,8,r)),[[e.vModelCheckbox,f.collapsed]]):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("label",{for:f.buttonId,class:"panel-header"},[(0,e.createElementVNode)("i",p,null,512),(0,e.createElementVNode)("span",g,(0,e.toDisplayString)(f.title),1)],8,v),(0,e.createElementVNode)("p",_,(0,e.toDisplayString)(f.description),1)]),(0,e.createVNode)(e.Transition,{onEnter:f.updateHeight,onBeforeLeave:f.updateHeight,name:f.collapseable||f.startCollapsed?"collapse":"",persisted:""},{default:(0,e.withCtx)(()=>[(0,e.withDirectives)((0,e.createElementVNode)("div",l,[(0,e.renderSlot)(f.$slots,"default",{},void 0,!0)],512),[[e.vShow,!f.collapsed]])]),_:3},8,["onEnter","onBeforeLeave","name"])],8,o)}},"./src/webviews/client.ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{WebviewClientFactory:()=>e});class e{static registerGlobalCommands(){const n=new Event("remount");window.addEventListener("message",o=>{const{command:i}=o.data;i==="$clear"&&(vscode.setState({}),this.messageListeners.forEach(r=>this.removeListener(r)),window.dispatchEvent(n))})}static addListener(n){this.messageListeners.add(n),window.addEventListener("message",n)}static removeListener(n){this.messageListeners.delete(n),window.removeEventListener("message",n)}static sendRequest(n,o,i){const r=JSON.parse(JSON.stringify(i)),v=new Promise((p,g)=>{const _=c=>{const f=c.data;if(n===f.id)if(this.removeListener(_),window.clearTimeout(l),f.error===!0){const C=JSON.parse(f.data);g(new Error(C.message))}else f.event?(typeof i[0]!="function"&&g(new Error(`Expected frontend event handler to be a function: ${o}`)),p(this.registerEventHandler(o,i[0]))):p(f.data)},l=setTimeout(()=>{this.removeListener(_),g(new Error(`Timed out while waiting for response: id: ${n}, command: ${o}`))},3e5);this.addListener(_)});return vscode.postMessage({id:n,command:o,data:r}),v}static registerEventHandler(n,o){const i=r=>{const v=r.data;if(v.command===n){if(!v.event)throw new Error(`Expected backend handler to be an event emitter: ${n}`);o(v.data)}};return this.addListener(i),{dispose:()=>this.removeListener(i)}}static create(){return this.initialized||(this.initialized=!0,this.registerGlobalCommands()),new Proxy({},{set:()=>{throw new TypeError("Cannot set property to webview client")},get:(n,o)=>{if(typeof o!="string"){console.warn(`Tried to index webview client with non-string property: ${String(o)}`);return}if(o==="init"){const r=vscode.getState()??{};if(r.__once)return()=>Promise.resolve();vscode.setState(Object.assign(r,{__once:!0}))}const i=(this.counter++).toString();return(...r)=>this.sendRequest(i,o,r)}})}}e.counter=0,e.initialized=!1,e.messageListeners=new Set},"./src/webviews/mixins/saveData.ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const e=new Set;window.addEventListener("remount",()=>e.clear());const n={created(){if(this.$data===void 0)return;const o=vscode.getState()??{};this.$options._count=(this.$options._count??0)+1;const i=this.id??`${this.name??`DEFAULT-${e.size}`}-${this.$options._count}`;if(this.$options._unid=i,e.has(i)){console.warn(`Component "${i}" already exists. State-saving functionality will be disabled.`);return}e.add(i);const r=o[i]??{};Object.keys(this.$data).forEach(v=>{this.$data[v]=r[v]??this.$data[v]}),Object.keys(this.$data).forEach(v=>{this.$watch(v,p=>{const g=vscode.getState()??{},_=Object.assign(g[i]??{},{[v]:p!==void 0?JSON.parse(JSON.stringify(p)):void 0});vscode.setState(Object.assign(g,{[i]:_}))},{deep:!0})})}}},"./src/webviews/util.ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{createClass:()=>e,createType:()=>a});function e(n){return class{constructor(o={}){Object.assign(this,n,o)}}}function a(n){return Object}},"../../node_modules/vue-loader/dist/exportHelper.js":(d,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=(t,e)=>{const a=t.__vccOpts||t;for(const[n,o]of e)a[n]=o;return a}},"./src/codecatalyst/vue/compute.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{VueModel:()=>a.VueModel,default:()=>r});var e=t("./src/codecatalyst/vue/compute.vue?vue&type=template&id=cf4bb844&scoped=true&ts=true"),a=t("./src/codecatalyst/vue/compute.vue?vue&type=script&lang=ts"),n=t("./src/codecatalyst/vue/compute.vue?vue&type=style&index=0&id=cf4bb844&scoped=true&lang=css"),o=t("../../node_modules/vue-loader/dist/exportHelper.js");const r=(0,o.default)(a.default,[["render",e.render],["__scopeId","data-v-cf4bb844"],["__file","src/codecatalyst/vue/compute.vue"]])},"./src/codecatalyst/vue/configure/root.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var e=t("./src/codecatalyst/vue/configure/root.vue?vue&type=template&id=11acefd8&scoped=true&ts=true"),a=t("./src/codecatalyst/vue/configure/root.vue?vue&type=script&lang=ts"),n=t("./src/codecatalyst/vue/configure/root.vue?vue&type=style&index=0&id=11acefd8&scoped=true&lang=css"),o=t("../../node_modules/vue-loader/dist/exportHelper.js");const r=(0,o.default)(a.default,[["render",e.render],["__scopeId","data-v-11acefd8"],["__file","src/codecatalyst/vue/configure/root.vue"]])},"./src/codecatalyst/vue/devfile.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var e=t("./src/codecatalyst/vue/devfile.vue?vue&type=template&id=418b05b8&ts=true"),a=t("./src/codecatalyst/vue/devfile.vue?vue&type=script&lang=ts"),n=t("../../node_modules/vue-loader/dist/exportHelper.js");const i=(0,n.default)(a.default,[["render",e.render],["__file","src/codecatalyst/vue/devfile.vue"]])},"./src/codecatalyst/vue/summary.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{VueModel:()=>a.VueModel,default:()=>r});var e=t("./src/codecatalyst/vue/summary.vue?vue&type=template&id=446df3cd&scoped=true&ts=true"),a=t("./src/codecatalyst/vue/summary.vue?vue&type=script&lang=ts"),n=t("./src/codecatalyst/vue/summary.vue?vue&type=style&index=0&id=446df3cd&scoped=true&lang=css"),o=t("../../node_modules/vue-loader/dist/exportHelper.js");const r=(0,o.default)(a.default,[["render",e.render],["__scopeId","data-v-446df3cd"],["__file","src/codecatalyst/vue/summary.vue"]])},"./src/webviews/components/settingsPanel.vue":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var e=t("./src/webviews/components/settingsPanel.vue?vue&type=template&id=1334c634&scoped=true&ts=true"),a=t("./src/webviews/components/settingsPanel.vue?vue&type=script&lang=ts"),n=t("./src/webviews/components/settingsPanel.vue?vue&type=style&index=0&id=1334c634&scoped=true&lang=css"),o=t("../../node_modules/vue-loader/dist/exportHelper.js");const r=(0,o.default)(a.default,[["render",e.render],["__scopeId","data-v-1334c634"],["__file","src/webviews/components/settingsPanel.vue"]])},"./src/codecatalyst/vue/compute.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{VueModel:()=>e.VueModel,default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/compute.vue?vue&type=script&lang=ts")},"./src/codecatalyst/vue/configure/root.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/configure/root.vue?vue&type=script&lang=ts")},"./src/codecatalyst/vue/devfile.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/devfile.vue?vue&type=script&lang=ts")},"./src/codecatalyst/vue/summary.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{VueModel:()=>e.VueModel,default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/summary.vue?vue&type=script&lang=ts")},"./src/webviews/components/settingsPanel.vue?vue&type=script&lang=ts":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=script&lang=ts")},"./src/codecatalyst/vue/compute.vue?vue&type=template&id=cf4bb844&scoped=true&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/compute.vue?vue&type=template&id=cf4bb844&scoped=true&ts=true")},"./src/codecatalyst/vue/configure/root.vue?vue&type=template&id=11acefd8&scoped=true&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/configure/root.vue?vue&type=template&id=11acefd8&scoped=true&ts=true")},"./src/codecatalyst/vue/devfile.vue?vue&type=template&id=418b05b8&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/devfile.vue?vue&type=template&id=418b05b8&ts=true")},"./src/codecatalyst/vue/summary.vue?vue&type=template&id=446df3cd&scoped=true&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/summary.vue?vue&type=template&id=446df3cd&scoped=true&ts=true")},"./src/webviews/components/settingsPanel.vue?vue&type=template&id=1334c634&scoped=true&ts=true":(d,s,t)=>{"use strict";t.r(s),t.d(s,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=template&id=1334c634&scoped=true&ts=true")},"./src/codecatalyst/vue/compute.vue?vue&type=style&index=0&id=cf4bb844&scoped=true&lang=css":(d,s,t)=>{"use strict";t.r(s);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/compute.vue?vue&type=style&index=0&id=cf4bb844&scoped=true&lang=css"),a=t.n(e),n={};for(const o in e)o!=="default"&&(n[o]=()=>e[o]);t.d(s,n)},"./src/codecatalyst/vue/configure/root.vue?vue&type=style&index=0&id=11acefd8&scoped=true&lang=css":(d,s,t)=>{"use strict";t.r(s);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/configure/root.vue?vue&type=style&index=0&id=11acefd8&scoped=true&lang=css"),a=t.n(e),n={};for(const o in e)o!=="default"&&(n[o]=()=>e[o]);t.d(s,n)},"./src/codecatalyst/vue/summary.vue?vue&type=style&index=0&id=446df3cd&scoped=true&lang=css":(d,s,t)=>{"use strict";t.r(s);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/summary.vue?vue&type=style&index=0&id=446df3cd&scoped=true&lang=css"),a=t.n(e),n={};for(const o in e)o!=="default"&&(n[o]=()=>e[o]);t.d(s,n)},"./src/webviews/components/settingsPanel.vue?vue&type=style&index=0&id=1334c634&scoped=true&lang=css":(d,s,t)=>{"use strict";t.r(s);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=style&index=0&id=1334c634&scoped=true&lang=css"),a=t.n(e),n={};for(const o in e)o!=="default"&&(n[o]=()=>e[o]);t.d(s,n)},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/compute.vue?vue&type=style&index=0&id=cf4bb844&scoped=true&lang=css":(d,s,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/compute.vue?vue&type=style&index=0&id=cf4bb844&scoped=true&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.id,e,""]]),e.locals&&(d.exports=e.locals);var a=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,n=a("e312eb6e",e,!1,{})},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/configure/root.vue?vue&type=style&index=0&id=11acefd8&scoped=true&lang=css":(d,s,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/configure/root.vue?vue&type=style&index=0&id=11acefd8&scoped=true&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.id,e,""]]),e.locals&&(d.exports=e.locals);var a=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,n=a("468849fd",e,!1,{})},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/summary.vue?vue&type=style&index=0&id=446df3cd&scoped=true&lang=css":(d,s,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/summary.vue?vue&type=style&index=0&id=446df3cd&scoped=true&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.id,e,""]]),e.locals&&(d.exports=e.locals);var a=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,n=a("14d4ecc4",e,!1,{})},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=style&index=0&id=1334c634&scoped=true&lang=css":(d,s,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=style&index=0&id=1334c634&scoped=true&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.id,e,""]]),e.locals&&(d.exports=e.locals);var a=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,n=a("14af8423",e,!1,{})},"../../node_modules/vue-style-loader/lib/addStylesClient.js":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});var e=t("../../node_modules/vue-style-loader/lib/listToStyles.js"),a=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n={},o=a&&(document.head||document.getElementsByTagName("head")[0]),i=null,r=0,v=!1,p=function(){},g=null,_="data-vue-ssr-id",l=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function c(m,h,A,u){v=A,g=u||{};var y=(0,e.default)(m,h);return f(y),function(P){for(var x=[],O=0;O<y.length;O++){var I=y[O],T=n[I.id];T.refs--,x.push(T)}P?(y=(0,e.default)(m,P),f(y)):y=[];for(var O=0;O<x.length;O++){var T=x[O];if(T.refs===0){for(var R=0;R<T.parts.length;R++)T.parts[R]();delete n[T.id]}}}}function f(m){for(var h=0;h<m.length;h++){var A=m[h],u=n[A.id];if(u){u.refs++;for(var y=0;y<u.parts.length;y++)u.parts[y](A.parts[y]);for(;y<A.parts.length;y++)u.parts.push(E(A.parts[y]));u.parts.length>A.parts.length&&(u.parts.length=A.parts.length)}else{for(var S=[],y=0;y<A.parts.length;y++)S.push(E(A.parts[y]));n[A.id]={id:A.id,refs:1,parts:S}}}}function C(){var m=document.createElement("style");return m.type="text/css",o.appendChild(m),m}function E(m){var h,A,u=document.querySelector("style["+_+'~="'+m.id+'"]');if(u){if(v)return p;u.parentNode.removeChild(u)}if(l){var y=r++;u=i||(i=C()),h=M.bind(null,u,y,!1),A=M.bind(null,u,y,!0)}else u=C(),h=B.bind(null,u),A=function(){u.parentNode.removeChild(u)};return h(m),function(P){if(P){if(P.css===m.css&&P.media===m.media&&P.sourceMap===m.sourceMap)return;h(m=P)}else A()}}var b=function(){var m=[];return function(h,A){return m[h]=A,m.filter(Boolean).join(`
`)}}();function M(m,h,A,u){var y=A?"":u.css;if(m.styleSheet)m.styleSheet.cssText=b(h,y);else{var S=document.createTextNode(y),P=m.childNodes;P[h]&&m.removeChild(P[h]),P.length?m.insertBefore(S,P[h]):m.appendChild(S)}}function B(m,h){var A=h.css,u=h.media,y=h.sourceMap;if(u&&m.setAttribute("media",u),g.ssrId&&m.setAttribute(_,h.id),y&&(A+=`
/*# sourceURL=`+y.sources[0]+" */",A+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(y))))+" */"),m.styleSheet)m.styleSheet.cssText=A;else{for(;m.firstChild;)m.removeChild(m.firstChild);m.appendChild(document.createTextNode(A))}}},"../../node_modules/vue-style-loader/lib/listToStyles.js":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>e});function e(a,n){for(var o=[],i={},r=0;r<n.length;r++){var v=n[r],p=v[0],g=v[1],_=v[2],l=v[3],c={id:a+":"+r,css:g,media:_,sourceMap:l};i[p]?i[p].parts.push(c):o.push(i[p]={id:p,parts:[c]})}return o}},vue:d=>{"use strict";d.exports=Vue}},L={};function D(d){var s=L[d];if(s!==void 0)return s.exports;var t=L[d]={id:d,exports:{}};return N[d](t,t.exports,D),t.exports}D.n=d=>{var s=d&&d.__esModule?()=>d.default:()=>d;return D.d(s,{a:s}),s},D.d=(d,s)=>{for(var t in s)D.o(s,t)&&!D.o(d,t)&&Object.defineProperty(d,t,{enumerable:!0,get:s[t]})},D.o=(d,s)=>Object.prototype.hasOwnProperty.call(d,s),D.r=d=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})};var j={};(()=>{"use strict";D.r(j);var d=D("vue"),s=D.n(d),t=D("./src/codecatalyst/vue/configure/root.vue");const e=()=>(0,d.createApp)(t.default),a=e();a.mount("#vue-app"),window.addEventListener("remount",()=>{a.unmount(),e().mount("#vue-app")})})();var U=this;for(var W in j)U[W]=j[W];j.__esModule&&Object.defineProperty(U,"__esModule",{value:!0})})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
/*!*************************************************!*\
  !*** ./src/codecatalyst/vue/configure/index.ts ***!
  \*************************************************/

//# sourceMappingURL=index.js.map