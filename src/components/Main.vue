<script>
    import Nav from './Nav.vue';
    import ChatRoom from './ChatRoom.vue';
    import ChatForm from './ChatForm.vue';

    export default {
        components: {
            Nav,
            ChatForm,
            ChatRoom
        }
    }

</script>
<template>
    <Nav />
    <ChatRoom />
    <ChatForm />
</template>