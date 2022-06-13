<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css" integrity="sha512-HqxHUkJM0SYcbvxUw5P60SzdOTy/QVwA1JJrvaXJv4q7lmbDZCmZaqz01UPOaQveoxfYRv1tHozWGPMcuTBuvQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <!-- Styles -->
        <style>
            body {
               background-color: #fafafa;
            }
        </style>
    </head>
    <body>
        <div id="app" class="container mt-5">
            <h1 class="title">Projects</h1>
            <ul>
                <li v-for="project in projects">@{{ project.name }}</li>
            </ul>
            <hr>
            <form action="#" class="mt-4" @keydown="errors.clear($event.target.name)">
                <div class="field">
                    <label class="label">Project name</label>
                    <div class="control">
                      <input class="input" type="text" name="name" placeholder="Text input" v-model="name" >
                    </div>

                    <span 
                        v-if="errors.has('name')"
                        v-text="errors.get('name')"
                        class="help is-danger" 
                    >
                    </span>
                </div>

                <div class="field">
                    <label class="label">Project decription</label>
                    <div class="control">
                      <textarea class="textarea" name="description" placeholder="Textarea" v-model="description" ></textarea>
                    </div>
                    <span 
                        v-if="errors.has('description')"
                        v-text="errors.get('description')"
                        class="help is-danger" 
                    >
                    </span>

                </div>
                
               
            </form>
            <div class="field is-grouped mt-4">
                <div class="control">
                    <button 
                        class="button is-link" 
                        @click.prevent="onSubmit()"
                        :disabled="errors.any()"
                    >
                        Submit
                    </button>
                </div>
                <div class="control">
                  <button class="button is-link is-light" @click.prevent="cleanInputs()">Cancel</button>
                </div>
            </div>

        </div>

        <script src="https://unpkg.com/vue@2.1.6/dist/vue.js"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src=" {{ asset('js\app.js') }} "></script>

    </body>
</html>
