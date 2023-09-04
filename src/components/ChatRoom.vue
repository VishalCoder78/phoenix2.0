<script>
import ChatDetails from "./ChatDetails.vue";
import ChatMessage from "./ChatMessage.vue";
import UserModel from "./UserModel.vue";

export default {
        components: {
            ChatDetails,
            ChatMessage,
            UserModel
        },

        computed: {
          isUserListVisible() {
            return this.$store.state.isUserListVisible;
          }
        }
    }</script>
<template>
  <UserModel v-if="isUserListVisible"/>
  <div class="h-[84vh] rounded-bl-md rounded-br-md bg-white mt-2">
    <div>
      <ChatDetails />
    </div>
    <div class="mt-4 ml-2">
      <ChatMessage />
    </div>
  </div>
</template>
