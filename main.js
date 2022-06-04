Vue.component('message', {
    template: `
        <article 
        class="message" 
        v-show="isVisible">
        
            <div class="message-header">
                {{ title}}

                <button  @click="hideMessage">x</button>

            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `,
    props: ['title', 'body'],
    data() {
        return {
            isVisible : true,
        }
    },

    methods: {
        hideMessage() {
            this.isVisible = false;
        }
    }
})

Vue.component('task-list', {
    template: `
        <ul> 
            <task v-for="task in tasks"> {{ task.name }} </task>
        </ul>
    `,
    data() {
        return {
            hide : false,
            tasks: [
                { name: 'Learn Vue' },
                { name: 'Learn Vuex' },
                { name: 'Learn Vue Router' }
            ],
        }
    },
    
      
});

Vue.component('task', {
    template: `
        <li><slot></slot> </li>
    `
});



new Vue ({
    el: '#root'
});