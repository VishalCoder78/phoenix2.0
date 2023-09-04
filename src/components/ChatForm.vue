<script>
import { ShareIcon, CameraIcon, FaceSmileIcon, UserIcon } from '@heroicons/vue/24/solid'

export default{
    components: {
        ShareIcon,
        CameraIcon,
        FaceSmileIcon,
        UserIcon
    },

    methods: {
        toggleUserList() {
            this.$store.commit('toggleUserList')
        }
    }
}
</script>
<template>
    <div class="h-[6vh] mt-2 mx-1 rounded-md bg-gray-300 flex items-center">
        <div class="flex">
            <button class="bg-gradient-to-b from-yellow-700 to-yellow-500 p-2 mt-1 rounded-md mx-1">
                <ShareIcon class="h-4 w-6 text-white" />
            </button>
            <button class="bg-gradient-to-b from-yellow-700 to-yellow-500 p-2 mt-1 rounded-md mx-1">
                <CameraIcon class="h-4 w-6 text-white" />
            </button>
            <button class="bg-gradient-to-b from-yellow-700 to-yellow-500 p-2 mt-1 rounded-md mx-1">
                <FaceSmileIcon class="h-4 w-6 text-white" />
            </button>
        </div>
        
        <div class="w-full h-[6vh]">
            <input class="p-1.5 w-full h-[5vh] mt-1 rounded-md" placeholder="Type your message" type="text">
        </div>
        <div>
            <button @click="toggleUserList" class="bg-gradient-to-b from-yellow-700 to-yellow-500 p-2 mt-1 rounded-md mx-1 flex">
                <UserIcon class="h-4 w-4 text-white" /><svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-arrows-angle-expand " viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z" fill="white"></path> </svg>
            </button>
        </div>
    </div>
</template>