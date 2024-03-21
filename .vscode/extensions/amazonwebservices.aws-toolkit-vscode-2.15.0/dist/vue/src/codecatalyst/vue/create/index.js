(()=>{var K={"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/compute.vue?vue&type=style&index=0&id=cf4bb844&scoped=true&lang=css":(a,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),d=t.n(e),s=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(s),l=o()(d());l.push([a.id,`
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
`],sourceRoot:""}]);const c=l},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/root.vue?vue&type=style&index=0&id=f91de988&lang=css":(a,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),d=t.n(e),s=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(s),l=o()(d());l.push([a.id,`
html {
    overflow-y: scroll;
}
body {
    padding-right: 12px;
    max-width: 700px;
}
`,"",{version:3,sources:["webpack://./src/codecatalyst/vue/create/root.vue"],names:[],mappings:";AAuHA;IACI,kBAAkB;AACtB;AACA;IACI,mBAAmB;IACnB,gBAAgB;AACpB",sourcesContent:[`<template>
    <div id="configure-header">
        <h1>Create a CodeCatalyst Dev Environment</h1>
        <!--TODO: add link-->
        <span style="font-size: 0.95em">
            Create an on-demand AWS instance to work on your code in the cloud.
            <a href="https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/codecatalyst-devenvironment.html">
                Learn more about CodeCatalyst Dev Environments.
            </a>
        </span>
    </div>

    <settings-panel id="source-panel" title="Source Code">
        <source-panel v-model="source"></source-panel>
    </settings-panel>
    <settings-panel
        id="alias-panel"
        title="Alias"
        description="Enter an alias to identify the Dev Environment. (Optional but recommended)"
    >
        <label class="options-label soft mb-8" style="display: block" for="alias-input">Alias</label>
        <input id="alias-input" type="text" v-model="alias" />
    </settings-panel>

    <settings-panel
        id="configuration-panel"
        title="Dev Environment Configuration"
        description="All settings except Storage can be changed in settings after creation."
    >
        <compute-panel v-model="compute" mode="create" @edit-settings="editCompute"></compute-panel>
    </settings-panel>

    <div id="submit-buttons" class="mb-16">
        <button class="button-theme-secondary" @click="cancel" :disabled="creating">Cancel</button>

        <button @click="submit" :disabled="!canCreate">
            {{ creating ? 'Creating...' : 'Create Dev Environment' }}
        </button>
    </div>
</template>

<script lang="ts">
import computePanel, { VueModel as ComputeModel } from '../compute.vue'
import sourcePanel, { isValidSource, VueModel as SourceModel } from './source.vue'
import settingsPanel from '../../../webviews/components/settingsPanel.vue'
import { defineComponent } from 'vue'
import { CodeCatalystCreateWebview } from './backend'
import { WebviewClientFactory } from '../../../webviews/client'
import saveData from '../../../webviews/mixins/saveData'
import { DevEnvironmentSettings } from '../../commands'

const client = WebviewClientFactory.create<CodeCatalystCreateWebview>()

const model = {
    source: new SourceModel(),
    compute: new ComputeModel(),
    creating: false,
    alias: '',
}

export default defineComponent({
    name: 'create',
    components: {
        settingsPanel,
        computePanel,
        sourcePanel,
    },
    mixins: [saveData],
    data() {
        return model
    },
    computed: {
        canCreate() {
            return !this.creating && isValidSource(this.source)
        },
    },
    created() {},
    watch: {
        'source.selectedProject'() {
            this.compute = new ComputeModel()
        },
    },
    methods: {
        async editCompute(key: keyof DevEnvironmentSettings) {
            const current = { ...this.compute, alias: this.alias }
            const resp = await client.editSetting(current, key, this.source.selectedProject?.org)

            if (key !== 'alias') {
                this.compute = new ComputeModel(resp)
            } else if (resp.alias !== undefined) {
                this.alias = resp.alias
            }
        },
        async submit() {
            if (!this.canCreate || !isValidSource(this.source)) {
                return
            }

            this.creating = true
            try {
                const settings = { ...this.compute, alias: this.alias }
                await client.submit(settings, this.source)
                client.close()
            } catch (err) {
                if (!(err as Error).message.match(/cancelled/i)) {
                    client.showLogsMessage(\`Failed to create Dev Environment: \${(err as Error).message}\`)
                }
            } finally {
                this.creating = false
            }
        },
        cancel() {
            client.close()
        },
    },
})
<\/script>

<style>
html {
    overflow-y: scroll;
}
body {
    padding-right: 12px;
    max-width: 700px;
}
</style>

<style scoped>
#configure-header {
    padding: 16px 0 0 0;
    background-color: var(--vscode-editor-background);
    z-index: 1;
    position: relative;
}
#alias-input {
    min-width: 300px;
}
#submit-buttons {
    display: flex;
    justify-content: end;
    column-gap: 16px;
}
</style>
`],sourceRoot:""}]);const c=l},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/root.vue?vue&type=style&index=1&id=f91de988&scoped=true&lang=css":(a,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),d=t.n(e),s=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(s),l=o()(d());l.push([a.id,`
#configure-header[data-v-f91de988] {
    padding: 16px 0 0 0;
    background-color: var(--vscode-editor-background);
    z-index: 1;
    position: relative;
}
#alias-input[data-v-f91de988] {
    min-width: 300px;
}
#submit-buttons[data-v-f91de988] {
    display: flex;
    justify-content: end;
    column-gap: 16px;
}
`,"",{version:3,sources:["webpack://./src/codecatalyst/vue/create/root.vue"],names:[],mappings:";AAiIA;IACI,mBAAmB;IACnB,iDAAiD;IACjD,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,oBAAoB;IACpB,gBAAgB;AACpB",sourcesContent:[`<template>
    <div id="configure-header">
        <h1>Create a CodeCatalyst Dev Environment</h1>
        <!--TODO: add link-->
        <span style="font-size: 0.95em">
            Create an on-demand AWS instance to work on your code in the cloud.
            <a href="https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/codecatalyst-devenvironment.html">
                Learn more about CodeCatalyst Dev Environments.
            </a>
        </span>
    </div>

    <settings-panel id="source-panel" title="Source Code">
        <source-panel v-model="source"></source-panel>
    </settings-panel>
    <settings-panel
        id="alias-panel"
        title="Alias"
        description="Enter an alias to identify the Dev Environment. (Optional but recommended)"
    >
        <label class="options-label soft mb-8" style="display: block" for="alias-input">Alias</label>
        <input id="alias-input" type="text" v-model="alias" />
    </settings-panel>

    <settings-panel
        id="configuration-panel"
        title="Dev Environment Configuration"
        description="All settings except Storage can be changed in settings after creation."
    >
        <compute-panel v-model="compute" mode="create" @edit-settings="editCompute"></compute-panel>
    </settings-panel>

    <div id="submit-buttons" class="mb-16">
        <button class="button-theme-secondary" @click="cancel" :disabled="creating">Cancel</button>

        <button @click="submit" :disabled="!canCreate">
            {{ creating ? 'Creating...' : 'Create Dev Environment' }}
        </button>
    </div>
</template>

<script lang="ts">
import computePanel, { VueModel as ComputeModel } from '../compute.vue'
import sourcePanel, { isValidSource, VueModel as SourceModel } from './source.vue'
import settingsPanel from '../../../webviews/components/settingsPanel.vue'
import { defineComponent } from 'vue'
import { CodeCatalystCreateWebview } from './backend'
import { WebviewClientFactory } from '../../../webviews/client'
import saveData from '../../../webviews/mixins/saveData'
import { DevEnvironmentSettings } from '../../commands'

const client = WebviewClientFactory.create<CodeCatalystCreateWebview>()

const model = {
    source: new SourceModel(),
    compute: new ComputeModel(),
    creating: false,
    alias: '',
}

export default defineComponent({
    name: 'create',
    components: {
        settingsPanel,
        computePanel,
        sourcePanel,
    },
    mixins: [saveData],
    data() {
        return model
    },
    computed: {
        canCreate() {
            return !this.creating && isValidSource(this.source)
        },
    },
    created() {},
    watch: {
        'source.selectedProject'() {
            this.compute = new ComputeModel()
        },
    },
    methods: {
        async editCompute(key: keyof DevEnvironmentSettings) {
            const current = { ...this.compute, alias: this.alias }
            const resp = await client.editSetting(current, key, this.source.selectedProject?.org)

            if (key !== 'alias') {
                this.compute = new ComputeModel(resp)
            } else if (resp.alias !== undefined) {
                this.alias = resp.alias
            }
        },
        async submit() {
            if (!this.canCreate || !isValidSource(this.source)) {
                return
            }

            this.creating = true
            try {
                const settings = { ...this.compute, alias: this.alias }
                await client.submit(settings, this.source)
                client.close()
            } catch (err) {
                if (!(err as Error).message.match(/cancelled/i)) {
                    client.showLogsMessage(\`Failed to create Dev Environment: \${(err as Error).message}\`)
                }
            } finally {
                this.creating = false
            }
        },
        cancel() {
            client.close()
        },
    },
})
<\/script>

<style>
html {
    overflow-y: scroll;
}
body {
    padding-right: 12px;
    max-width: 700px;
}
</style>

<style scoped>
#configure-header {
    padding: 16px 0 0 0;
    background-color: var(--vscode-editor-background);
    z-index: 1;
    position: relative;
}
#alias-input {
    min-width: 300px;
}
#submit-buttons {
    display: flex;
    justify-content: end;
    column-gap: 16px;
}
</style>
`],sourceRoot:""}]);const c=l},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/source.vue?vue&type=style&index=0&id=82fef516&scope=true&lang=css":(a,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),d=t.n(e),s=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(s),l=o()(d());l.push([a.id,`
.picker {
    min-width: 300px;
    width: 100%;
    box-sizing: border-box;
}
.source-pickers {
    margin-top: 16px;
    display: flex;
    flex-flow: wrap;
    column-gap: 16px;
}
.modes {
    display: flex;
    column-gap: 16px;
}
.flex-sizing {
    flex: 1;
}
.mode-container {
    display: flex;
    flex: 1;
    border: 1px solid gray;
    padding: 8px;
    max-width: calc((1 / 3 * 100%) - (2 / 3 * 32px));
    align-items: center;
}
.config-item {
    display: inline;
    margin-left: 8px;
}
.mode-container[data-disabled='false'] {
    border: 1px solid var(--vscode-focusBorder);
}
body.vscode-dark .mode-container[data-disabled='true'] .config-item {
    filter: brightness(0.8);
}
body.vscode-light .mode-container[data-disabled='true'] .config-item {
    filter: brightness(1.2);
}
#repository-url {
    min-width: 300px;
}
#branch-input {
    min-width: 300px;
    width: 100%;
    box-sizing: border-box;
}
.project-button {
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
    font-weight: bold;
}
.edit-icon {
    color: #0078d7;
}
`,"",{version:3,sources:["webpack://./src/codecatalyst/vue/create/source.vue"],names:[],mappings:";AAwRA;IACI,gBAAgB;IAChB,WAAW;IACX,sBAAsB;AAC1B;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,gBAAgB;AACpB;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;AAEA;IACI,OAAO;AACX;AAEA;IACI,aAAa;IACb,OAAO;IACP,sBAAsB;IACtB,YAAY;IACZ,gDAAgD;IAChD,mBAAmB;AACvB;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;AAEA;IACI,2CAA2C;AAC/C;AAEA;IACI,uBAAuB;AAC3B;AAEA;IACI,uBAAuB;AAC3B;AAEA;IACI,gBAAgB;AACpB;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,sBAAsB;AAC1B;AAEA;IACI,6BAA6B;IAC7B,eAAe;IACf,gBAAgB;IAChB,iBAAiB;AACrB;AAEA;IACI,cAAc;AAClB",sourcesContent:[`<template>
    <div class="modes mb-16">
        <label class="mode-container" :data-disabled="model.type !== 'linked'">
            <input class="radio" type="radio" name="mode" id="from-code-catalyst" v-model="model.type" value="linked" />
            <span class="ml-8 option-label" style="padding: 0px">Use an existing CodeCatalyst repository</span>
        </label>

        <label class="mode-container" :data-disabled="model.type !== 'none'">
            <input class="radio" type="radio" name="mode" id="from-none" v-model="model.type" value="none" />
            <span class="ml-8 option-label" style="padding: 0px">Create an empty Dev Environment</span>
        </label>
    </div>

    <div class="source-pickers" v-if="model.type === 'linked'">
        <div class="modes flex-sizing mt-16">
            <span class="flex-sizing mt-8">
                <label class="option-label soft">Space</label>
                <button class="project-button" @click="quickPickSpace()">
                    {{ selectedSpaceName }}
                    <span class="icon icon-lg icon-vscode-edit edit-icon"></span>
                </button>
            </span>

            <span class="flex-sizing mt-8">
                <label class="option-label soft">Project</label>
                <button class="project-button" @click="quickPickProject()" :disabled="!isSpaceSelected">
                    {{ selectedProjectName }}
                    <span class="icon icon-lg icon-vscode-edit edit-icon"></span>
                </button>
            </span>
        </div>

        <div class="modes flex-sizing mt-16">
            <!-- Existing branch -->
            <span class="flex-sizing">
                <label class="options-label soft mb-8" style="display: block" for="branch-picker">Branch</label>
                <select
                    id="branch-picker"
                    class="picker"
                    :disabled="!model.selectedProject"
                    v-model="model.selectedBranch"
                    @input="update"
                >
                    <option disabled :value="undefined">{{ branchPlaceholder }}</option>
                    <option v-for="branch in availableBranches" :key="branch.id" :value="branch">
                        {{ branchName(branch) }}
                    </option>
                </select>
            </span>

            <!-- New Branch -->
            <span class="flex-sizing">
                <label class="options-label soft mb-8" style="display: block" for="branch-input"
                    >Create Branch - Optional for CodeCatalyst Repos</label
                >
                <input
                    id="branch-input"
                    type="text"
                    :placeholder="newBranchNamePlaceholder"
                    :disabled="!newBranchNameAllowed"
                    v-model="model.newBranch"
                    @input="update"
                />

                <div class="input-validation" v-if="branchError">{{ branchError }}</div>
            </span>
        </div>
    </div>

    <div class="source-pickers" v-if="model.type === 'none'">
        <div class="modes flex-sizing mt-16">
            <span class="flex-sizing mt-8">
                <label class="option-label soft">Space</label>
                <button class="project-button" @click="quickPickSpace()">
                    {{ selectedSpaceName }}
                    <span class="icon icon-lg icon-vscode-edit edit-icon"></span>
                </button>
            </span>

            <span class="flex-sizing mt-8">
                <label class="option-label soft">Project</label>
                <button class="project-button" @click="quickPickProject()" :disabled="!isSpaceSelected">
                    {{ selectedProjectName }}
                    <span class="icon icon-lg icon-vscode-edit edit-icon"></span>
                </button>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CodeCatalystBranch, CodeCatalystProject } from '../../../shared/clients/codecatalystClient'
import { WebviewClientFactory } from '../../../webviews/client'
import { createClass, createType } from '../../../webviews/util'
import { CodeCatalystCreateWebview, SourceResponse } from './backend'

const client = WebviewClientFactory.create<CodeCatalystCreateWebview>()

type SourceModel = Partial<SourceResponse & { branchError: string }>

export function isValidSource(source: SourceModel): source is SourceResponse {
    if (source.type === 'linked') {
        return !!source.selectedProject && !!source.selectedBranch && !source.branchError
    } else if (source.type === 'none') {
        return !!source.selectedProject
    }

    return false
}

export const VueModel = createClass<SourceModel>({ type: 'linked' })

export default defineComponent({
    name: 'source-code',
    props: {
        modelValue: {
            type: createType(VueModel),
            default: new VueModel(),
        },
    },
    data() {
        return {
            projects: [] as CodeCatalystProject[],
            branches: {} as Record<string, CodeCatalystBranch[] | undefined>,
            loadingProjects: false,
            loadingBranches: {} as Record<string, boolean | undefined>,
            newBranchNameAllowed: false,
            newBranchNamePlaceholder: 'Select branch first...',
        }
    },
    async created() {
        this.loadingProjects = true
    },
    watch: {
        async 'model.selectedProject'(project?: CodeCatalystProject) {
            this.useFirstBranch()

            if (project && !this.branches[project.name]) {
                this.loadingBranches[project.name] = true
                this.branches[project.name] ??= await client.getBranches(project).finally(() => {
                    this.loadingBranches[project.name] = false
                })
                this.useFirstBranch()
            }
        },
        async 'model.selectedBranch'(branch?: CodeCatalystBranch) {
            if (this.model.type !== 'linked' || branch === undefined) {
                this.newBranchNameAllowed = false
                this.newBranchNamePlaceholder = ''
                return
            }

            // Disable user input for new branch name while calculating
            this.newBranchNameAllowed = false
            this.newBranchNamePlaceholder = 'Loading...'

            // Clear the existing new branch value so user does not see it
            const previousNewBranch = this.model.newBranch
            this.$emit('update:modelValue', { ...this.model, newBranch: undefined })

            // Only want to allow users to set a branch name if first party repo
            const isThirdPartyRepo = await client.isThirdPartyRepo({
                spaceName: branch.org.name,
                projectName: branch.project.name,
                sourceRepositoryName: branch.repo.name,
            })
            if (isThirdPartyRepo) {
                this.newBranchNamePlaceholder = 'Not Applicable for Linked Repo'
                this.newBranchNameAllowed = false
                // Clear the new branch in case one was already selected
                this.$emit('update:modelValue', { ...this.model, newBranch: undefined })
            } else {
                // First Party
                this.newBranchNamePlaceholder = 'branch-name'
                this.newBranchNameAllowed = true
                // Since this can have a new branch, set this back to what it previously was
                this.$emit('update:modelValue', { ...this.model, newBranch: previousNewBranch })
            }
        },
    },
    computed: {
        model() {
            return this.modelValue
        },
        loading() {
            if (this.model.type !== 'linked' || !this.model.selectedProject) {
                return false
            }

            return this.loadingBranches[this.model.selectedProject.name] ?? false
        },
        branchPlaceholder() {
            if (this.loading) {
                return 'Loading...'
            }

            return (this.availableBranches?.length ?? 0) === 0 ? 'No branches found' : 'Select a branch'
        },
        availableBranches() {
            if (this.model.type !== 'linked' || !this.model.selectedProject) {
                return []
            }

            return this.branches[this.model.selectedProject.name]
        },
        branchError() {
            if (this.model.type !== 'linked' || !this.model.newBranch) {
                return
            }

            const branch = this.model.newBranch
            if (!!branch && this.availableBranches?.find(b => b.name === \`refs/heads/\${branch}\`) !== undefined) {
                return 'Branch already exists'
            }
        },
        isSpaceSelected() {
            return !!this.model.selectedSpace
        },
        isProjectSelected() {
            return !!this.model.selectedProject
        },
        selectedSpaceName() {
            if (this.model.selectedSpace === undefined) {
                return 'Not Selected'
            }
            return this.model.selectedSpace.name
        },
        selectedProjectName() {
            if (this.model.selectedProject === undefined) {
                return 'Not Selected'
            }
            return this.model.selectedProject.name
        },
    },
    methods: {
        update() {
            this.model.branchError = this.branchError
            this.$emit('update:modelValue', this.model)
        },
        branchName(branch: CodeCatalystBranch) {
            return \`\${branch.repo.name} / \${branch.name.replace('refs/heads/', '')}\`
        },
        useFirstBranch() {
            if (this.model.type !== 'linked') {
                return
            }

            Object.assign<typeof this.model, Partial<SourceModel>>(this.model, {
                selectedBranch: this.availableBranches?.[0],
            })
            this.update()
        },
        async quickPickSpace() {
            const space = await client.quickPickSpace()
            if (space === undefined) {
                return
            }
            this.$emit('update:modelValue', { ...this.modelValue, selectedSpace: space, selectedProject: undefined })
        },
        async quickPickProject() {
            const selectedSpace = this.modelValue.selectedSpace
            if (selectedSpace === undefined) {
                return
            }

            const project = await client.quickPickProject(selectedSpace.name)
            if (project === undefined) {
                return
            }
            this.$emit('update:modelValue', { ...this.modelValue, selectedProject: project })
        },
    },
    emits: {
        'update:modelValue': (value: InstanceType<typeof VueModel>) => true,
    },
})
<\/script>

<style scope>
.picker {
    min-width: 300px;
    width: 100%;
    box-sizing: border-box;
}

.source-pickers {
    margin-top: 16px;
    display: flex;
    flex-flow: wrap;
    column-gap: 16px;
}

.modes {
    display: flex;
    column-gap: 16px;
}

.flex-sizing {
    flex: 1;
}

.mode-container {
    display: flex;
    flex: 1;
    border: 1px solid gray;
    padding: 8px;
    max-width: calc((1 / 3 * 100%) - (2 / 3 * 32px));
    align-items: center;
}

.config-item {
    display: inline;
    margin-left: 8px;
}

.mode-container[data-disabled='false'] {
    border: 1px solid var(--vscode-focusBorder);
}

body.vscode-dark .mode-container[data-disabled='true'] .config-item {
    filter: brightness(0.8);
}

body.vscode-light .mode-container[data-disabled='true'] .config-item {
    filter: brightness(1.2);
}

#repository-url {
    min-width: 300px;
}

#branch-input {
    min-width: 300px;
    width: 100%;
    box-sizing: border-box;
}

.project-button {
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
    font-weight: bold;
}

.edit-icon {
    color: #0078d7;
}
</style>
`],sourceRoot:""}]);const c=l},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=style&index=0&id=1334c634&scoped=true&lang=css":(a,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var e=t("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),d=t.n(e),s=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(s),l=o()(d());l.push([a.id,`
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
`],sourceRoot:""}]);const c=l},"../../node_modules/css-loader/dist/runtime/api.js":a=>{"use strict";a.exports=function(n){var t=[];return t.toString=function(){return this.map(function(d){var s="",o=typeof d[5]<"u";return d[4]&&(s+="@supports (".concat(d[4],") {")),d[2]&&(s+="@media ".concat(d[2]," {")),o&&(s+="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {")),s+=n(d),o&&(s+="}"),d[2]&&(s+="}"),d[4]&&(s+="}"),s}).join("")},t.i=function(d,s,o,l,c){typeof d=="string"&&(d=[[null,d,void 0]]);var m={};if(o)for(var v=0;v<this.length;v++){var u=this[v][0];u!=null&&(m[u]=!0)}for(var i=0;i<d.length;i++){var r=[].concat(d[i]);o&&m[r[0]]||(typeof c<"u"&&(typeof r[5]>"u"||(r[1]="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {").concat(r[1],"}")),r[5]=c),s&&(r[2]&&(r[1]="@media ".concat(r[2]," {").concat(r[1],"}")),r[2]=s),l&&(r[4]?(r[1]="@supports (".concat(r[4],") {").concat(r[1],"}"),r[4]=l):r[4]="".concat(l)),t.push(r))}},t}},"../../node_modules/css-loader/dist/runtime/sourceMaps.js":a=>{"use strict";a.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if(typeof btoa=="function"){var d=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),o="/*# ".concat(s," */");return[t].concat([o]).join(`
`)}return[t].join(`
`)}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/compute.vue?vue&type=script&lang=ts":(a,n,t)=>{"use strict";t.r(n),t.d(n,{VueModel:()=>v,default:()=>u});var e=t("vue"),d=t.n(e),s=t("./src/webviews/client.ts"),o=t("./src/webviews/mixins/saveData.ts"),l=t("./src/webviews/util.ts");const c=s.WebviewClientFactory.create(),m={inactivityTimeoutMinutes:15,instanceType:"dev.standard1.small",persistentStorage:{sizeInGiB:16}},v=(0,l.createClass)(m),u=(0,e.defineComponent)({name:"compute-panel",props:{modelValue:{type:(0,l.createType)(v),default:new v},mode:{type:String,default:"update"}},data(){return{changed:{},readonlyText:"Can't be changed after creation.",descriptions:{},originalData:void 0}},mixins:[o.default],created(){c.getAllInstanceDescriptions().then(i=>this.descriptions=i)},watch:{model(i){if(!(i===void 0||this.originalData===void 0))for(const[r,E]of Object.entries(i))this.changed[r]=this.originalData[r]!==E},modelValue(){this.originalData??=this.modelValue}},methods:{getNeedsRestartText(i){return this.mode==="update"&&this.changed[i]?" (needs restart)":""}},computed:{model(){return this.modelValue},instance(){const i=this.model.instanceType,r=this.descriptions[i]?{...this.descriptions[i]}:{name:"",specs:""},E=this.getNeedsRestartText("instanceType")||(i===m.instanceType?" (default)":"");return r.name=`${r.name}${E}`,r},timeout(){const i=this.model.inactivityTimeoutMinutes,r=`${i} minutes`,E=this.getNeedsRestartText("inactivityTimeoutMinutes")||(i===m.inactivityTimeoutMinutes?" (default)":"");return`${r}${E}`},storage(){const i=this.model.persistentStorage.sizeInGiB,r=`${i} GB`,E=i===m.persistentStorage.sizeInGiB?" (default)":"";return`${r}${E}`}},emits:{editSettings:i=>i!==void 0}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/root.vue?vue&type=script&lang=ts":(a,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i});var e=t("./src/codecatalyst/vue/compute.vue"),d=t("./src/codecatalyst/vue/create/source.vue"),s=t("./src/webviews/components/settingsPanel.vue"),o=t("vue"),l=t.n(o),c=t("./src/webviews/client.ts"),m=t("./src/webviews/mixins/saveData.ts");const v=c.WebviewClientFactory.create(),u={source:new d.VueModel,compute:new e.VueModel,creating:!1,alias:""},i=(0,o.defineComponent)({name:"create",components:{settingsPanel:s.default,computePanel:e.default,sourcePanel:d.default},mixins:[m.default],data(){return u},computed:{canCreate(){return!this.creating&&(0,d.isValidSource)(this.source)}},created(){},watch:{"source.selectedProject"(){this.compute=new e.VueModel}},methods:{async editCompute(r){const E={...this.compute,alias:this.alias},p=await v.editSetting(E,r,this.source.selectedProject?.org);r!=="alias"?this.compute=new e.VueModel(p):p.alias!==void 0&&(this.alias=p.alias)},async submit(){if(!(!this.canCreate||!(0,d.isValidSource)(this.source))){this.creating=!0;try{const r={...this.compute,alias:this.alias};await v.submit(r,this.source),v.close()}catch(r){r.message.match(/cancelled/i)||v.showLogsMessage(`Failed to create Dev Environment: ${r.message}`)}finally{this.creating=!1}}},cancel(){v.close()}}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/source.vue?vue&type=script&lang=ts":(a,n,t)=>{"use strict";t.r(n),t.d(n,{VueModel:()=>m,default:()=>v,isValidSource:()=>c});var e=t("vue"),d=t.n(e),s=t("./src/webviews/client.ts"),o=t("./src/webviews/util.ts");const l=s.WebviewClientFactory.create();function c(u){return u.type==="linked"?!!u.selectedProject&&!!u.selectedBranch&&!u.branchError:u.type==="none"?!!u.selectedProject:!1}const m=(0,o.createClass)({type:"linked"}),v=(0,e.defineComponent)({name:"source-code",props:{modelValue:{type:(0,o.createType)(m),default:new m}},data(){return{projects:[],branches:{},loadingProjects:!1,loadingBranches:{},newBranchNameAllowed:!1,newBranchNamePlaceholder:"Select branch first..."}},async created(){this.loadingProjects=!0},watch:{async"model.selectedProject"(u){this.useFirstBranch(),u&&!this.branches[u.name]&&(this.loadingBranches[u.name]=!0,this.branches[u.name]??=await l.getBranches(u).finally(()=>{this.loadingBranches[u.name]=!1}),this.useFirstBranch())},async"model.selectedBranch"(u){if(this.model.type!=="linked"||u===void 0){this.newBranchNameAllowed=!1,this.newBranchNamePlaceholder="";return}this.newBranchNameAllowed=!1,this.newBranchNamePlaceholder="Loading...";const i=this.model.newBranch;this.$emit("update:modelValue",{...this.model,newBranch:void 0}),await l.isThirdPartyRepo({spaceName:u.org.name,projectName:u.project.name,sourceRepositoryName:u.repo.name})?(this.newBranchNamePlaceholder="Not Applicable for Linked Repo",this.newBranchNameAllowed=!1,this.$emit("update:modelValue",{...this.model,newBranch:void 0})):(this.newBranchNamePlaceholder="branch-name",this.newBranchNameAllowed=!0,this.$emit("update:modelValue",{...this.model,newBranch:i}))}},computed:{model(){return this.modelValue},loading(){return this.model.type!=="linked"||!this.model.selectedProject?!1:this.loadingBranches[this.model.selectedProject.name]??!1},branchPlaceholder(){return this.loading?"Loading...":(this.availableBranches?.length??0)===0?"No branches found":"Select a branch"},availableBranches(){return this.model.type!=="linked"||!this.model.selectedProject?[]:this.branches[this.model.selectedProject.name]},branchError(){if(this.model.type!=="linked"||!this.model.newBranch)return;const u=this.model.newBranch;if(!!u&&this.availableBranches?.find(i=>i.name===`refs/heads/${u}`)!==void 0)return"Branch already exists"},isSpaceSelected(){return!!this.model.selectedSpace},isProjectSelected(){return!!this.model.selectedProject},selectedSpaceName(){return this.model.selectedSpace===void 0?"Not Selected":this.model.selectedSpace.name},selectedProjectName(){return this.model.selectedProject===void 0?"Not Selected":this.model.selectedProject.name}},methods:{update(){this.model.branchError=this.branchError,this.$emit("update:modelValue",this.model)},branchName(u){return`${u.repo.name} / ${u.name.replace("refs/heads/","")}`},useFirstBranch(){this.model.type==="linked"&&(Object.assign(this.model,{selectedBranch:this.availableBranches?.[0]}),this.update())},async quickPickSpace(){const u=await l.quickPickSpace();u!==void 0&&this.$emit("update:modelValue",{...this.modelValue,selectedSpace:u,selectedProject:void 0})},async quickPickProject(){const u=this.modelValue.selectedSpace;if(u===void 0)return;const i=await l.quickPickProject(u.name);i!==void 0&&this.$emit("update:modelValue",{...this.modelValue,selectedProject:i})}},emits:{"update:modelValue":u=>!0}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=script&lang=ts":(a,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>l});var e=t("vue"),d=t.n(e),s=t("./src/webviews/mixins/saveData.ts");let o=0;const l=(0,e.defineComponent)({name:"settings-panel",props:{id:String,startCollapsed:Boolean,collapseable:Boolean,title:String,description:String},data(){return o+=1,{collapsed:this.$props.startCollapsed??!1,buttonId:`settings-panel-button-${o}`,lastHeight:void 0}},mixins:[s.default],methods:{updateHeight(c){c.style&&(this.lastHeight=c.scrollHeight,c.style.setProperty("--max-height",`${this.lastHeight}px`))}},mounted(){this.subPane=this.$refs.subPane,this.lastHeight=this.collapsed?this.lastHeight:this.subPane?.scrollHeight??this.lastHeight,this.$nextTick(()=>{setTimeout(()=>{this.$refs.icon?.classList.remove("preload-transition")},100)})}})},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/compute.vue?vue&type=template&id=cf4bb844&scoped=true&ts=true":(a,n,t)=>{"use strict";t.r(n),t.d(n,{render:()=>D});var e=t("vue"),d=t.n(e);const s=C=>((0,e.pushScopeId)("data-v-cf4bb844"),C=C(),(0,e.popScopeId)(),C),o={id:"compute-grid"},l={id:"size",style:{"grid-area":"size"}},c=s(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Compute",-1)),m=s(()=>(0,e.createElementVNode)("br",null,null,-1)),v={id:"timeout",style:{"grid-area":"timeout"}},u=s(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Timeout",-1)),i={id:"volume",style:{"grid-area":"volume"}},r=s(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Storage",-1)),E={key:0,class:"mt-0 mb-0"},p={key:1};function D(C,j,x,I,_,A){return(0,e.openBlock)(),(0,e.createElementBlock)("div",null,[(0,e.createElementVNode)("div",o,[(0,e.createElementVNode)("div",l,[(0,e.createElementVNode)("div",null,[c,(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(C.instance.name),1),m,(0,e.createTextVNode)(" "+(0,e.toDisplayString)(C.instance.specs),1)]),(0,e.createElementVNode)("button",{type:"button",id:"edit-size",class:"button-theme-secondary mt-8",onClick:j[0]||(j[0]=h=>C.$emit("editSettings","instanceType"))}," Edit Compute ")]),(0,e.createElementVNode)("div",v,[(0,e.createElementVNode)("div",null,[u,(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(C.timeout),1)]),(0,e.createElementVNode)("button",{type:"button",id:"edit-timeout",class:"button-theme-secondary mt-8",onClick:j[1]||(j[1]=h=>C.$emit("editSettings","inactivityTimeoutMinutes"))}," Edit Timeout ")]),(0,e.createElementVNode)("div",i,[r,(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(C.storage),1),C.mode==="update"?((0,e.openBlock)(),(0,e.createElementBlock)("p",E,(0,e.toDisplayString)(C.readonlyText),1)):((0,e.openBlock)(),(0,e.createElementBlock)("div",p,[(0,e.createElementVNode)("button",{type:"button",id:"edit-storage",class:"button-theme-secondary mt-8",onClick:j[2]||(j[2]=h=>C.$emit("editSettings","persistentStorage"))}," Edit Storage Size ")]))])])])}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/root.vue?vue&type=template&id=f91de988&scoped=true&ts=true":(a,n,t)=>{"use strict";t.r(n),t.d(n,{render:()=>u});var e=t("vue"),d=t.n(e);const s=i=>((0,e.pushScopeId)("data-v-f91de988"),i=i(),(0,e.popScopeId)(),i),o=s(()=>(0,e.createElementVNode)("div",{id:"configure-header"},[(0,e.createElementVNode)("h1",null,"Create a CodeCatalyst Dev Environment"),(0,e.createCommentVNode)("TODO: add link"),(0,e.createElementVNode)("span",{style:{"font-size":"0.95em"}},[(0,e.createTextVNode)(" Create an on-demand AWS instance to work on your code in the cloud. "),(0,e.createElementVNode)("a",{href:"https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/codecatalyst-devenvironment.html"}," Learn more about CodeCatalyst Dev Environments. ")])],-1)),l=s(()=>(0,e.createElementVNode)("label",{class:"options-label soft mb-8",style:{display:"block"},for:"alias-input"},"Alias",-1)),c={id:"submit-buttons",class:"mb-16"},m=["disabled"],v=["disabled"];function u(i,r,E,p,D,C){const j=(0,e.resolveComponent)("source-panel"),x=(0,e.resolveComponent)("settings-panel"),I=(0,e.resolveComponent)("compute-panel");return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[o,(0,e.createVNode)(x,{id:"source-panel",title:"Source Code"},{default:(0,e.withCtx)(()=>[(0,e.createVNode)(j,{modelValue:i.source,"onUpdate:modelValue":r[0]||(r[0]=_=>i.source=_)},null,8,["modelValue"])]),_:1}),(0,e.createVNode)(x,{id:"alias-panel",title:"Alias",description:"Enter an alias to identify the Dev Environment. (Optional but recommended)"},{default:(0,e.withCtx)(()=>[l,(0,e.withDirectives)((0,e.createElementVNode)("input",{id:"alias-input",type:"text","onUpdate:modelValue":r[1]||(r[1]=_=>i.alias=_)},null,512),[[e.vModelText,i.alias]])]),_:1}),(0,e.createVNode)(x,{id:"configuration-panel",title:"Dev Environment Configuration",description:"All settings except Storage can be changed in settings after creation."},{default:(0,e.withCtx)(()=>[(0,e.createVNode)(I,{modelValue:i.compute,"onUpdate:modelValue":r[2]||(r[2]=_=>i.compute=_),mode:"create",onEditSettings:i.editCompute},null,8,["modelValue","onEditSettings"])]),_:1}),(0,e.createElementVNode)("div",c,[(0,e.createElementVNode)("button",{class:"button-theme-secondary",onClick:r[3]||(r[3]=(..._)=>i.cancel&&i.cancel(..._)),disabled:i.creating},"Cancel",8,m),(0,e.createElementVNode)("button",{onClick:r[4]||(r[4]=(..._)=>i.submit&&i.submit(..._)),disabled:!i.canCreate},(0,e.toDisplayString)(i.creating?"Creating...":"Create Dev Environment"),9,v)])],64)}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/source.vue?vue&type=template&id=82fef516&ts=true":(a,n,t)=>{"use strict";t.r(n),t.d(n,{render:()=>X});var e=t("vue"),d=t.n(e);const s={class:"modes mb-16"},o=["data-disabled"],l=(0,e.createElementVNode)("span",{class:"ml-8 option-label",style:{padding:"0px"}},"Use an existing CodeCatalyst repository",-1),c=["data-disabled"],m=(0,e.createElementVNode)("span",{class:"ml-8 option-label",style:{padding:"0px"}},"Create an empty Dev Environment",-1),v={key:0,class:"source-pickers"},u={class:"modes flex-sizing mt-16"},i={class:"flex-sizing mt-8"},r=(0,e.createElementVNode)("label",{class:"option-label soft"},"Space",-1),E=(0,e.createElementVNode)("span",{class:"icon icon-lg icon-vscode-edit edit-icon"},null,-1),p={class:"flex-sizing mt-8"},D=(0,e.createElementVNode)("label",{class:"option-label soft"},"Project",-1),C=["disabled"],j=(0,e.createElementVNode)("span",{class:"icon icon-lg icon-vscode-edit edit-icon"},null,-1),x={class:"modes flex-sizing mt-16"},I={class:"flex-sizing"},_=(0,e.createElementVNode)("label",{class:"options-label soft mb-8",style:{display:"block"},for:"branch-picker"},"Branch",-1),A=["disabled"],h={disabled:"",value:void 0},y=["value"],g={class:"flex-sizing"},M=(0,e.createElementVNode)("label",{class:"options-label soft mb-8",style:{display:"block"},for:"branch-input"},"Create Branch - Optional for CodeCatalyst Repos",-1),B=["placeholder","disabled"],w={key:0,class:"input-validation"},O={key:1,class:"source-pickers"},V={class:"modes flex-sizing mt-16"},T={class:"flex-sizing mt-8"},L=(0,e.createElementVNode)("label",{class:"option-label soft"},"Space",-1),$=(0,e.createElementVNode)("span",{class:"icon icon-lg icon-vscode-edit edit-icon"},null,-1),k={class:"flex-sizing mt-8"},z=(0,e.createElementVNode)("label",{class:"option-label soft"},"Project",-1),F=["disabled"],H=(0,e.createElementVNode)("span",{class:"icon icon-lg icon-vscode-edit edit-icon"},null,-1);function X(f,b,G,J,Y,Z){return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[(0,e.createElementVNode)("div",s,[(0,e.createElementVNode)("label",{class:"mode-container","data-disabled":f.model.type!=="linked"},[(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"radio",type:"radio",name:"mode",id:"from-code-catalyst","onUpdate:modelValue":b[0]||(b[0]=P=>f.model.type=P),value:"linked"},null,512),[[e.vModelRadio,f.model.type]]),l],8,o),(0,e.createElementVNode)("label",{class:"mode-container","data-disabled":f.model.type!=="none"},[(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"radio",type:"radio",name:"mode",id:"from-none","onUpdate:modelValue":b[1]||(b[1]=P=>f.model.type=P),value:"none"},null,512),[[e.vModelRadio,f.model.type]]),m],8,c)]),f.model.type==="linked"?((0,e.openBlock)(),(0,e.createElementBlock)("div",v,[(0,e.createElementVNode)("div",u,[(0,e.createElementVNode)("span",i,[r,(0,e.createElementVNode)("button",{class:"project-button",onClick:b[2]||(b[2]=P=>f.quickPickSpace())},[(0,e.createTextVNode)((0,e.toDisplayString)(f.selectedSpaceName)+" ",1),E])]),(0,e.createElementVNode)("span",p,[D,(0,e.createElementVNode)("button",{class:"project-button",onClick:b[3]||(b[3]=P=>f.quickPickProject()),disabled:!f.isSpaceSelected},[(0,e.createTextVNode)((0,e.toDisplayString)(f.selectedProjectName)+" ",1),j],8,C)])]),(0,e.createElementVNode)("div",x,[(0,e.createCommentVNode)(" Existing branch "),(0,e.createElementVNode)("span",I,[_,(0,e.withDirectives)((0,e.createElementVNode)("select",{id:"branch-picker",class:"picker",disabled:!f.model.selectedProject,"onUpdate:modelValue":b[4]||(b[4]=P=>f.model.selectedBranch=P),onInput:b[5]||(b[5]=(...P)=>f.update&&f.update(...P))},[(0,e.createElementVNode)("option",h,(0,e.toDisplayString)(f.branchPlaceholder),1),((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(f.availableBranches,P=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{key:P.id,value:P},(0,e.toDisplayString)(f.branchName(P)),9,y))),128))],40,A),[[e.vModelSelect,f.model.selectedBranch]])]),(0,e.createCommentVNode)(" New Branch "),(0,e.createElementVNode)("span",g,[M,(0,e.withDirectives)((0,e.createElementVNode)("input",{id:"branch-input",type:"text",placeholder:f.newBranchNamePlaceholder,disabled:!f.newBranchNameAllowed,"onUpdate:modelValue":b[6]||(b[6]=P=>f.model.newBranch=P),onInput:b[7]||(b[7]=(...P)=>f.update&&f.update(...P))},null,40,B),[[e.vModelText,f.model.newBranch]]),f.branchError?((0,e.openBlock)(),(0,e.createElementBlock)("div",w,(0,e.toDisplayString)(f.branchError),1)):(0,e.createCommentVNode)("v-if",!0)])])])):(0,e.createCommentVNode)("v-if",!0),f.model.type==="none"?((0,e.openBlock)(),(0,e.createElementBlock)("div",O,[(0,e.createElementVNode)("div",V,[(0,e.createElementVNode)("span",T,[L,(0,e.createElementVNode)("button",{class:"project-button",onClick:b[8]||(b[8]=P=>f.quickPickSpace())},[(0,e.createTextVNode)((0,e.toDisplayString)(f.selectedSpaceName)+" ",1),$])]),(0,e.createElementVNode)("span",k,[z,(0,e.createElementVNode)("button",{class:"project-button",onClick:b[9]||(b[9]=P=>f.quickPickProject()),disabled:!f.isSpaceSelected},[(0,e.createTextVNode)((0,e.toDisplayString)(f.selectedProjectName)+" ",1),H],8,F)])])])):(0,e.createCommentVNode)("v-if",!0)],64)}},"../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=template&id=1334c634&scoped=true&ts=true":(a,n,t)=>{"use strict";t.r(n),t.d(n,{render:()=>E});var e=t("vue"),d=t.n(e);const s=p=>((0,e.pushScopeId)("data-v-1334c634"),p=p(),(0,e.popScopeId)(),p),o=["id"],l={class:"header"},c=["id"],m=["for"],v={class:"preload-transition collapse-button icon icon-vscode-chevron-up",ref:"icon"},u={class:"settings-title"},i={class:"soft no-spacing mt-8"},r={ref:"subPane",class:"sub-pane"};function E(p,D,C,j,x,I){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{id:p.id,class:"settings-panel"},[(0,e.createElementVNode)("div",l,[p.collapseable||p.startCollapsed?(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("input",{key:0,id:p.buttonId,style:{display:"none"},type:"checkbox","onUpdate:modelValue":D[0]||(D[0]=_=>p.collapsed=_)},null,8,c)),[[e.vModelCheckbox,p.collapsed]]):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("label",{for:p.buttonId,class:"panel-header"},[(0,e.createElementVNode)("i",v,null,512),(0,e.createElementVNode)("span",u,(0,e.toDisplayString)(p.title),1)],8,m),(0,e.createElementVNode)("p",i,(0,e.toDisplayString)(p.description),1)]),(0,e.createVNode)(e.Transition,{onEnter:p.updateHeight,onBeforeLeave:p.updateHeight,name:p.collapseable||p.startCollapsed?"collapse":"",persisted:""},{default:(0,e.withCtx)(()=>[(0,e.withDirectives)((0,e.createElementVNode)("div",r,[(0,e.renderSlot)(p.$slots,"default",{},void 0,!0)],512),[[e.vShow,!p.collapsed]])]),_:3},8,["onEnter","onBeforeLeave","name"])],8,o)}},"./src/webviews/client.ts":(a,n,t)=>{"use strict";t.r(n),t.d(n,{WebviewClientFactory:()=>e});class e{static registerGlobalCommands(){const s=new Event("remount");window.addEventListener("message",o=>{const{command:l}=o.data;l==="$clear"&&(vscode.setState({}),this.messageListeners.forEach(c=>this.removeListener(c)),window.dispatchEvent(s))})}static addListener(s){this.messageListeners.add(s),window.addEventListener("message",s)}static removeListener(s){this.messageListeners.delete(s),window.removeEventListener("message",s)}static sendRequest(s,o,l){const c=JSON.parse(JSON.stringify(l)),m=new Promise((v,u)=>{const i=E=>{const p=E.data;if(s===p.id)if(this.removeListener(i),window.clearTimeout(r),p.error===!0){const D=JSON.parse(p.data);u(new Error(D.message))}else p.event?(typeof l[0]!="function"&&u(new Error(`Expected frontend event handler to be a function: ${o}`)),v(this.registerEventHandler(o,l[0]))):v(p.data)},r=setTimeout(()=>{this.removeListener(i),u(new Error(`Timed out while waiting for response: id: ${s}, command: ${o}`))},3e5);this.addListener(i)});return vscode.postMessage({id:s,command:o,data:c}),m}static registerEventHandler(s,o){const l=c=>{const m=c.data;if(m.command===s){if(!m.event)throw new Error(`Expected backend handler to be an event emitter: ${s}`);o(m.data)}};return this.addListener(l),{dispose:()=>this.removeListener(l)}}static create(){return this.initialized||(this.initialized=!0,this.registerGlobalCommands()),new Proxy({},{set:()=>{throw new TypeError("Cannot set property to webview client")},get:(s,o)=>{if(typeof o!="string"){console.warn(`Tried to index webview client with non-string property: ${String(o)}`);return}if(o==="init"){const c=vscode.getState()??{};if(c.__once)return()=>Promise.resolve();vscode.setState(Object.assign(c,{__once:!0}))}const l=(this.counter++).toString();return(...c)=>this.sendRequest(l,o,c)}})}}e.counter=0,e.initialized=!1,e.messageListeners=new Set},"./src/webviews/mixins/saveData.ts":(a,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});const e=new Set;window.addEventListener("remount",()=>e.clear());const s={created(){if(this.$data===void 0)return;const o=vscode.getState()??{};this.$options._count=(this.$options._count??0)+1;const l=this.id??`${this.name??`DEFAULT-${e.size}`}-${this.$options._count}`;if(this.$options._unid=l,e.has(l)){console.warn(`Component "${l}" already exists. State-saving functionality will be disabled.`);return}e.add(l);const c=o[l]??{};Object.keys(this.$data).forEach(m=>{this.$data[m]=c[m]??this.$data[m]}),Object.keys(this.$data).forEach(m=>{this.$watch(m,v=>{const u=vscode.getState()??{},i=Object.assign(u[l]??{},{[m]:v!==void 0?JSON.parse(JSON.stringify(v)):void 0});vscode.setState(Object.assign(u,{[l]:i}))},{deep:!0})})}}},"./src/webviews/util.ts":(a,n,t)=>{"use strict";t.r(n),t.d(n,{createClass:()=>e,createType:()=>d});function e(s){return class{constructor(o={}){Object.assign(this,s,o)}}}function d(s){return Object}},"../../node_modules/vue-loader/dist/exportHelper.js":(a,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=(t,e)=>{const d=t.__vccOpts||t;for(const[s,o]of e)d[s]=o;return d}},"./src/codecatalyst/vue/compute.vue":(a,n,t)=>{"use strict";t.r(n),t.d(n,{VueModel:()=>d.VueModel,default:()=>c});var e=t("./src/codecatalyst/vue/compute.vue?vue&type=template&id=cf4bb844&scoped=true&ts=true"),d=t("./src/codecatalyst/vue/compute.vue?vue&type=script&lang=ts"),s=t("./src/codecatalyst/vue/compute.vue?vue&type=style&index=0&id=cf4bb844&scoped=true&lang=css"),o=t("../../node_modules/vue-loader/dist/exportHelper.js");const c=(0,o.default)(d.default,[["render",e.render],["__scopeId","data-v-cf4bb844"],["__file","src/codecatalyst/vue/compute.vue"]])},"./src/codecatalyst/vue/create/root.vue":(a,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>m});var e=t("./src/codecatalyst/vue/create/root.vue?vue&type=template&id=f91de988&scoped=true&ts=true"),d=t("./src/codecatalyst/vue/create/root.vue?vue&type=script&lang=ts"),s=t("./src/codecatalyst/vue/create/root.vue?vue&type=style&index=0&id=f91de988&lang=css"),o=t("./src/codecatalyst/vue/create/root.vue?vue&type=style&index=1&id=f91de988&scoped=true&lang=css"),l=t("../../node_modules/vue-loader/dist/exportHelper.js");const m=(0,l.default)(d.default,[["render",e.render],["__scopeId","data-v-f91de988"],["__file","src/codecatalyst/vue/create/root.vue"]])},"./src/codecatalyst/vue/create/source.vue":(a,n,t)=>{"use strict";t.r(n),t.d(n,{VueModel:()=>d.VueModel,default:()=>c,isValidSource:()=>d.isValidSource});var e=t("./src/codecatalyst/vue/create/source.vue?vue&type=template&id=82fef516&ts=true"),d=t("./src/codecatalyst/vue/create/source.vue?vue&type=script&lang=ts"),s=t("./src/codecatalyst/vue/create/source.vue?vue&type=style&index=0&id=82fef516&scope=true&lang=css"),o=t("../../node_modules/vue-loader/dist/exportHelper.js");const c=(0,o.default)(d.default,[["render",e.render],["__file","src/codecatalyst/vue/create/source.vue"]])},"./src/webviews/components/settingsPanel.vue":(a,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var e=t("./src/webviews/components/settingsPanel.vue?vue&type=template&id=1334c634&scoped=true&ts=true"),d=t("./src/webviews/components/settingsPanel.vue?vue&type=script&lang=ts"),s=t("./src/webviews/components/settingsPanel.vue?vue&type=style&index=0&id=1334c634&scoped=true&lang=css"),o=t("../../node_modules/vue-loader/dist/exportHelper.js");const c=(0,o.default)(d.default,[["render",e.render],["__scopeId","data-v-1334c634"],["__file","src/webviews/components/settingsPanel.vue"]])},"./src/codecatalyst/vue/compute.vue?vue&type=script&lang=ts":(a,n,t)=>{"use strict";t.r(n),t.d(n,{VueModel:()=>e.VueModel,default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/compute.vue?vue&type=script&lang=ts")},"./src/codecatalyst/vue/create/root.vue?vue&type=script&lang=ts":(a,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/root.vue?vue&type=script&lang=ts")},"./src/codecatalyst/vue/create/source.vue?vue&type=script&lang=ts":(a,n,t)=>{"use strict";t.r(n),t.d(n,{VueModel:()=>e.VueModel,default:()=>e.default,isValidSource:()=>e.isValidSource});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/source.vue?vue&type=script&lang=ts")},"./src/webviews/components/settingsPanel.vue?vue&type=script&lang=ts":(a,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>e.default});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=script&lang=ts")},"./src/codecatalyst/vue/compute.vue?vue&type=template&id=cf4bb844&scoped=true&ts=true":(a,n,t)=>{"use strict";t.r(n),t.d(n,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/compute.vue?vue&type=template&id=cf4bb844&scoped=true&ts=true")},"./src/codecatalyst/vue/create/root.vue?vue&type=template&id=f91de988&scoped=true&ts=true":(a,n,t)=>{"use strict";t.r(n),t.d(n,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/root.vue?vue&type=template&id=f91de988&scoped=true&ts=true")},"./src/codecatalyst/vue/create/source.vue?vue&type=template&id=82fef516&ts=true":(a,n,t)=>{"use strict";t.r(n),t.d(n,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/source.vue?vue&type=template&id=82fef516&ts=true")},"./src/webviews/components/settingsPanel.vue?vue&type=template&id=1334c634&scoped=true&ts=true":(a,n,t)=>{"use strict";t.r(n),t.d(n,{render:()=>e.render});var e=t("../../node_modules/esbuild-loader/dist/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=template&id=1334c634&scoped=true&ts=true")},"./src/codecatalyst/vue/compute.vue?vue&type=style&index=0&id=cf4bb844&scoped=true&lang=css":(a,n,t)=>{"use strict";t.r(n);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/compute.vue?vue&type=style&index=0&id=cf4bb844&scoped=true&lang=css"),d=t.n(e),s={};for(const o in e)o!=="default"&&(s[o]=()=>e[o]);t.d(n,s)},"./src/codecatalyst/vue/create/root.vue?vue&type=style&index=0&id=f91de988&lang=css":(a,n,t)=>{"use strict";t.r(n);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/root.vue?vue&type=style&index=0&id=f91de988&lang=css"),d=t.n(e),s={};for(const o in e)o!=="default"&&(s[o]=()=>e[o]);t.d(n,s)},"./src/codecatalyst/vue/create/root.vue?vue&type=style&index=1&id=f91de988&scoped=true&lang=css":(a,n,t)=>{"use strict";t.r(n);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/root.vue?vue&type=style&index=1&id=f91de988&scoped=true&lang=css"),d=t.n(e),s={};for(const o in e)o!=="default"&&(s[o]=()=>e[o]);t.d(n,s)},"./src/codecatalyst/vue/create/source.vue?vue&type=style&index=0&id=82fef516&scope=true&lang=css":(a,n,t)=>{"use strict";t.r(n);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/source.vue?vue&type=style&index=0&id=82fef516&scope=true&lang=css"),d=t.n(e),s={};for(const o in e)o!=="default"&&(s[o]=()=>e[o]);t.d(n,s)},"./src/webviews/components/settingsPanel.vue?vue&type=style&index=0&id=1334c634&scoped=true&lang=css":(a,n,t)=>{"use strict";t.r(n);var e=t("../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=style&index=0&id=1334c634&scoped=true&lang=css"),d=t.n(e),s={};for(const o in e)o!=="default"&&(s[o]=()=>e[o]);t.d(n,s)},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/compute.vue?vue&type=style&index=0&id=cf4bb844&scoped=true&lang=css":(a,n,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/compute.vue?vue&type=style&index=0&id=cf4bb844&scoped=true&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[a.id,e,""]]),e.locals&&(a.exports=e.locals);var d=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,s=d("e312eb6e",e,!1,{})},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/root.vue?vue&type=style&index=0&id=f91de988&lang=css":(a,n,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/root.vue?vue&type=style&index=0&id=f91de988&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[a.id,e,""]]),e.locals&&(a.exports=e.locals);var d=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,s=d("2a394841",e,!1,{})},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/root.vue?vue&type=style&index=1&id=f91de988&scoped=true&lang=css":(a,n,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/root.vue?vue&type=style&index=1&id=f91de988&scoped=true&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[a.id,e,""]]),e.locals&&(a.exports=e.locals);var d=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,s=d("3cc00117",e,!1,{})},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/source.vue?vue&type=style&index=0&id=82fef516&scope=true&lang=css":(a,n,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/codecatalyst/vue/create/source.vue?vue&type=style&index=0&id=82fef516&scope=true&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[a.id,e,""]]),e.locals&&(a.exports=e.locals);var d=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,s=d("6477dbb3",e,!1,{})},"../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=style&index=0&id=1334c634&scoped=true&lang=css":(a,n,t)=>{var e=t("../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/webviews/components/settingsPanel.vue?vue&type=style&index=0&id=1334c634&scoped=true&lang=css");e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[a.id,e,""]]),e.locals&&(a.exports=e.locals);var d=t("../../node_modules/vue-style-loader/lib/addStylesClient.js").default,s=d("14af8423",e,!1,{})},"../../node_modules/vue-style-loader/lib/addStylesClient.js":(a,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>E});var e=t("../../node_modules/vue-style-loader/lib/listToStyles.js"),d=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},o=d&&(document.head||document.getElementsByTagName("head")[0]),l=null,c=0,m=!1,v=function(){},u=null,i="data-vue-ssr-id",r=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function E(_,A,h,y){m=h,u=y||{};var g=(0,e.default)(_,A);return p(g),function(B){for(var w=[],O=0;O<g.length;O++){var V=g[O],T=s[V.id];T.refs--,w.push(T)}B?(g=(0,e.default)(_,B),p(g)):g=[];for(var O=0;O<w.length;O++){var T=w[O];if(T.refs===0){for(var L=0;L<T.parts.length;L++)T.parts[L]();delete s[T.id]}}}}function p(_){for(var A=0;A<_.length;A++){var h=_[A],y=s[h.id];if(y){y.refs++;for(var g=0;g<y.parts.length;g++)y.parts[g](h.parts[g]);for(;g<h.parts.length;g++)y.parts.push(C(h.parts[g]));y.parts.length>h.parts.length&&(y.parts.length=h.parts.length)}else{for(var M=[],g=0;g<h.parts.length;g++)M.push(C(h.parts[g]));s[h.id]={id:h.id,refs:1,parts:M}}}}function D(){var _=document.createElement("style");return _.type="text/css",o.appendChild(_),_}function C(_){var A,h,y=document.querySelector("style["+i+'~="'+_.id+'"]');if(y){if(m)return v;y.parentNode.removeChild(y)}if(r){var g=c++;y=l||(l=D()),A=x.bind(null,y,g,!1),h=x.bind(null,y,g,!0)}else y=D(),A=I.bind(null,y),h=function(){y.parentNode.removeChild(y)};return A(_),function(B){if(B){if(B.css===_.css&&B.media===_.media&&B.sourceMap===_.sourceMap)return;A(_=B)}else h()}}var j=function(){var _=[];return function(A,h){return _[A]=h,_.filter(Boolean).join(`
`)}}();function x(_,A,h,y){var g=h?"":y.css;if(_.styleSheet)_.styleSheet.cssText=j(A,g);else{var M=document.createTextNode(g),B=_.childNodes;B[A]&&_.removeChild(B[A]),B.length?_.insertBefore(M,B[A]):_.appendChild(M)}}function I(_,A){var h=A.css,y=A.media,g=A.sourceMap;if(y&&_.setAttribute("media",y),u.ssrId&&_.setAttribute(i,A.id),g&&(h+=`
/*# sourceURL=`+g.sources[0]+" */",h+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(g))))+" */"),_.styleSheet)_.styleSheet.cssText=h;else{for(;_.firstChild;)_.removeChild(_.firstChild);_.appendChild(document.createTextNode(h))}}},"../../node_modules/vue-style-loader/lib/listToStyles.js":(a,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>e});function e(d,s){for(var o=[],l={},c=0;c<s.length;c++){var m=s[c],v=m[0],u=m[1],i=m[2],r=m[3],E={id:d+":"+c,css:u,media:i,sourceMap:r};l[v]?l[v].parts.push(E):o.push(l[v]={id:v,parts:[E]})}return o}},vue:a=>{"use strict";a.exports=Vue}},N={};function S(a){var n=N[a];if(n!==void 0)return n.exports;var t=N[a]={id:a,exports:{}};return K[a](t,t.exports,S),t.exports}S.n=a=>{var n=a&&a.__esModule?()=>a.default:()=>a;return S.d(n,{a:n}),n},S.d=(a,n)=>{for(var t in n)S.o(n,t)&&!S.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:n[t]})},S.o=(a,n)=>Object.prototype.hasOwnProperty.call(a,n),S.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var R={};(()=>{"use strict";S.r(R);var a=S("vue"),n=S.n(a),t=S("./src/codecatalyst/vue/create/root.vue");const e=()=>(0,a.createApp)(t.default),d=e();d.mount("#vue-app"),window.addEventListener("remount",()=>{d.unmount(),e().mount("#vue-app")})})();var W=this;for(var U in R)W[U]=R[U];R.__esModule&&Object.defineProperty(W,"__esModule",{value:!0})})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
/*!**********************************************!*\
  !*** ./src/codecatalyst/vue/create/index.ts ***!
  \**********************************************/

//# sourceMappingURL=index.js.map