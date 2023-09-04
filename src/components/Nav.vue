<script>
import { Cog8ToothIcon, Bars3Icon, EnvelopeIcon, QuestionMarkCircleIcon, PlayIcon, XCircleIcon} from '@heroicons/vue/24/solid'

export default {
  components: {
    Cog8ToothIcon,
    Bars3Icon,
    EnvelopeIcon,
    QuestionMarkCircleIcon,
    PlayIcon,
    XCircleIcon
  }
}
</script>
<template>
    <div class="h-[7vh] flex justify-between items-center">
        <div class="flex">
            <div class="mx-4">
                <img class="mt-2" src="../assets/logo.svg" alt="">
            </div>
            <div class="">
                <button class="bg-gradient-to-b from-yellow-700 to-yellow-500 p-2 mt-1 rounded-md mx-1">
                    <Cog8ToothIcon class="h-6 w-6 text-white" />
                </button>
                <button class="bg-gradient-to-b from-yellow-700 to-yellow-500 p-2 mt-1 rounded-md mx-1">
                    <Bars3Icon class="h-6 w-6 text-white" />
                </button>
                <button class="bg-gradient-to-b from-yellow-700 to-yellow-500 p-2 mt-1 rounded-md mx-1">
                    <EnvelopeIcon class="h-6 w-6 text-white" />
                </button>
                <button class="bg-gradient-to-b from-yellow-700 to-yellow-500 p-2 mt-1 rounded-md mx-1">
                    <QuestionMarkCircleIcon class="h-6 w-6 text-white" />
                </button>
                <button class="bg-gradient-to-b from-yellow-700 to-yellow-500 p-2 mt-1 rounded-md mx-1">
                    <PlayIcon class="h-6 w-6 text-white" />
                </button>
            </div>
        </div>
        <div class="nav-cross">
            <button class="bg-gradient-to-b from-yellow-700 to-yellow-500 p-2 mt-1 rounded-md mx-1">
                <XCircleIcon class="h-6 w-6 text-white" />
            </button>
        </div>
    </div>
</template>