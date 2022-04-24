/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
/*
const app = new Vue({
    el: '#app',
    data: {
        datos: [],
        mensaje: ''
    },
    methods: {
        getDatos() {
            let url = '/api/datosp';
            axios.get(url).then(response => {
                console.log(response.data)
                this.datos = response.data;
            });
        },
        NuevoDato() {
            console.log('Nuevo Dato');

            Swal.mixin({

                confirmButtonText: 'Next &rarr;',
                showCancelButton: true,
                progressSteps: ['1', '2', '3']
            }).queue([
                {
                    title: 'Digita tu nombre completo',
                    text: 'Nombre y apellido',
                    input: 'text',
                    inputValidator: (value) => {
                        if (!value) {
                            toastr.error('Debes digitar un nombre', 'Error');
                            return ' '
                        }
                    }
                },
                {
                    title: 'Selecciona la posicion',
                    text: 'Posicion de este empleado',
                    input: 'select',
                    inputOptions: {
                        Auditor: 'Auditor',
                        Soporte: 'Soporte',
                        Seguridad: 'Seguridad'
                    },
                    inputPlaceholder: 'Selecciona una posicion',
                    inputValidator: (value) => {
                        if (!value) {
                            toastr.error('Necesitas seleccionar una opcion', 'Error');
                            return ' '
                        }
                    }
                },
                {
                    title: 'Escribe el salario de este empleado',
                    text: 'Este campo acepta decimales',
                    input: 'number',
                    inputAttributes: {
                        min: 4,
                        step: 0.01
                    },
                    inputValidator: (value) => {
                        if (!value) {
                            toastr.error('Debes escribir un salario', 'Error');
                            return ' '
                        }
                    }
                },

            ]).then(async (result) => {
                if (result.value) {

                    datos = {
                        nombre: result.value[0],
                        posicion: result.value[1],
                        salario: result.value[2],

                    }
                    //console.log(datos);

                    let url = '/api/datosp';
                    await axios.post(url, datos).then(response => {
                        console.log(response.data);
                        this.mensaje = response.data;
                    });

                    this.getDatos();
                    //toastr.success(this.mensaje);
                }
            })

        },
    },
    mounted() {
        this.getDatos();
    }
})*/