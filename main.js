Vue.component('task-list', {
    template: `
        <ul> 
            <task v-for="task in tasks"> {{ task.name }} </task>
        </ul>
    `,
    data() {
        return {
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