<script setup>
    import { XMarkIcon } from '@heroicons/vue/24/solid'

</script>
<template>
    <div class="absolute h-[84vh] w-[100vw] bg-gray-400/20 mt-2">
        <div class="absolute right-0 h-[84vh] w-[15vw] bg-white">
            <div>
                <p class="text-center">#Chat Name</p>
            </div>
            <div class="flex justify-between">
                <button class="border py-1 w-full mx-1 rounded-md">a-z</button>
                <button class="border py-1 w-full mx-1 rounded-md">a-z</button>
            </div>
            <div class="flex mt-2">
                <input type="text" class="w-full ml-1 border">
                <button class="bg-gradient-to-b from-yellow-700 to-yellow-500 p-1 rounded-md mx-1">
                    <XMarkIcon class="h-3 w-3 text-white" />
                 </button>
            </div>
            <div>
                <ul>
                    <li class="flex justify-between my-2 mx-1">
                        <div class="flex gap-x-1">
                            <img class="h-fit decoration-" src="https://ui-avatars.com/api/?name=Vishal+Kumar/&background=random&rounded=true&size=24" alt="">
                            <p>User Name</p>
                        </div>
                        <div class="mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-male text-blue-600" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/> </svg>
                        </div>
                    </li>
                    
                    <li class="flex justify-between my-2 mx-1">
                        <div class="flex gap-x-1">
                            <img class="h-fit decoration-" src="https://ui-avatars.com/api/?name=Vishal+Kumar/&background=random&rounded=true&size=24" alt="">
                            <p>User Name</p>
                        </div>
                        <div class="mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-female text-pink-600" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"/> </svg>
                        </div>
                    </li>

                    <li class="flex justify-between my-2 mx-1">
                        <div class="flex gap-x-1">
                            <img class="h-fit decoration-" src="https://ui-avatars.com/api/?name=Vishal+Kumar/&background=random&rounded=true&size=24" alt="">
                            <p>User Name</p>
                        </div>
                        <div class="mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-male text-blue-600" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/> </svg>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>