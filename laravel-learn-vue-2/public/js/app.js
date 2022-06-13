class Errors {
    constructor() {
        this.errors = {} ;
    }

    get (field) {
        if ( this.errors[field] ) {
            return this.errors[field][0] ;
        }
    }

    record (errors) {
        this.errors = errors ;
    }

    clear (field) {
        delete this.errors[field] ;
    }

    has (field) {
        return this.errors.hasOwnProperty(field) ;
    }

    any() {
        return Object.keys(this.errors).length > 0 ;
    }
}

new Vue({
    el: '#app',

    data: {
        name: '',
        description: '',
        projects: [],
        errors: new Errors(),
    },

    methods: {
        onSubmit() {
            axios.post('/projects', this.$data)
                .then( this.getProjects() )
                .then( this.cleanInputs() )
                .catch(error => this.errors.record(error.response.data.errors));
        },

        getProjects() {
            axios.get('/projects')
                .then(response => this.projects = response.data)
                .catch(error => console.log(error))
        },

        cleanInputs() {
            this.name = ''
            this.description = ''
        },

        


    },

    mounted() {
        this.getProjects()
    }
    
});