<template>
	<div id="app">
		<Message>
			Hello World
		</Message>

		<Message>
			Hey there
		</Message>
		
	</div>
</template>

<script>
import Message from './components/Message.vue'

export default {
    name: "app",
    data() {
        return {};
    },
    components: { Message }
}
</script>

<style>

</style>
