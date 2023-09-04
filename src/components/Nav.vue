<script>
import { Cog8ToothIcon, Bars3Icon, EnvelopeIcon, QuestionMarkCircleIcon, PlayIcon, XCircleIcon } from '@heroicons/vue/24/solid'

export default {
    components: {
        Cog8ToothIcon,
        Bars3Icon,
        EnvelopeIcon,
        QuestionMarkCircleIcon,
        PlayIcon,
        XCircleIcon
    },

    methods: {
        toggleUserList() {
            this.$store.commit('toggleUserList')
        }
    },


    computed: {
        isUserListVisible() {
            return this.$store.state.isUserListVisible;
        }
    }
}
</script>
<template>
    <div class="h-[7vh] flex justify-between items-center">
        <div class="flex">
            <div class="mx-4">
                <img class="my-4" src="../assets/logo.svg" alt="">
            </div>
            <div class="">
                <button class="bg-gradient-to-b from-yellow-700 to-yellow-500 p-2 mt-1 rounded-md mx-1">
                    <Cog8ToothIcon class="h-8 w-8 text-white" />
                </button>
                <button class="bg-gradient-to-b from-yellow-700 to-yellow-500 p-2 mt-1 rounded-md mx-1">
                    <Bars3Icon class="h-8 w-8 text-white" />
                </button>
                <button class="bg-gradient-to-b from-yellow-700 to-yellow-500 p-2 mt-1 rounded-md mx-1">
                    <EnvelopeIcon class="h-8 w-8 text-white" />
                </button>
                <button class="bg-gradient-to-b from-yellow-700 to-yellow-500 p-2 mt-1 rounded-md mx-1">
                    <QuestionMarkCircleIcon class="h-8 w-8 text-white" />
                </button>
                <button class="bg-gradient-to-b from-yellow-700 to-yellow-500 p-2 mt-1 rounded-md mx-1">
                    <PlayIcon class="h-8 w-8 text-white" />
                </button>
            </div>
        </div>
        <div v-if="isUserListVisible" class="nav-cross">
            <button class="bg-gradient-to-b from-yellow-700 to-yellow-500 p-2 mt-1 rounded-md mx-1">
                <XCircleIcon @click="toggleUserList" class="h-8 w-8 text-white" />
            </button>
        </div>
    </div>
</template>