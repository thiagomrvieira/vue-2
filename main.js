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
});

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

Vue.component('modal', {
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <slot> <></slot>
                </div>
            
            </div>
            <button 
                class="modal-close is-large" 
                aria-label="close"
                @click="$emit('close')">
            ></button>
        </div>
    `,
    props: ['class'],
});



new Vue ({
    el: '#root', 

    data: {
        showModal: false,
    }
});