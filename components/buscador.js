let buscador = Vue.component('buscador', {
    template: `
    <div v-show="divConsulta == 0">
        <div class="titCol">Seleccione un criterio de búsqueda.</div><br>
        <div class="divCriterior">
            <div v-bind:class="{'desac1': opcionBusqueda(1)}" v-on:click="selOptBusqueda(1)">
                <div><img src="assets/img/buscador/criterio1.svg"></div>Por nombre
            </div>
            <div v-bind:class="{'desac1': opcionBusqueda(2)}" v-on:click="selOptBusqueda(2)">
                <div><img src="assets/img/buscador/criterio2.svg"></div>Por número de tarjeta
            </div>
            <div v-bind:class="{'desac1': opcionBusqueda(3)}" v-on:click="selOptBusqueda(3)">
                <div><img src="assets/img/buscador/criterio3.svg"></div>Por número de cuenta
            </div>
            <div v-bind:class="{'desac1': opcionBusqueda(4)}" v-on:click="selOptBusqueda(4)">
                <div><img src="assets/img/buscador/criterio4.svg"></div>Por Cliente Único
            </div>
        </div>

        <div class="divBuscarCriterio" v-show="opMenuBusqueda > 0">
            <div class="titSec">Búsqueda del cliente</div>
            <div class="gris">
                <div class="titCol">Ingrese la siguiente información. Recuerda puedes seguir pasando la Tarjeta para recabar los datos del Cliente.</div>
                <div class="divCol">
                    <div class="col4" v-show="opMenuBusqueda == 1">
                        Primer apellido:<br>
                        <input type="text" v-model="txtApellidoP"
                            v-bind:class="[{'desac': bloqueadoUno}, {'act': bloqueadoDos}]"><br>
                        <input type="checkbox" name="grupo1" id="checkApellidoP" v-model="bloqueadoUno" />
                        <label for="checkApellidoP" v-bind:class="[{'desac': bloqueadoDos}]">Sin primer apellido</label>
                    </div>
                    <div class="col4" v-show="opMenuBusqueda == 1">
                        Segundo apellido:<br>
                        <input type="text" v-model="txtApellidoM"
                            v-bind:class="[{'desac': bloqueadoDos}, {'act': bloqueadoUno}]"><br>
                        <input type="checkbox" name="grupo2" id="checkApellidoM" v-model=" bloqueadoDos" /><label
                            for="checkApellidoM" v-bind:class="[{'desac': bloqueadoUno}]">Sin segundo apellido</label>
                    </div>
                    <div class="col4" v-show="opMenuBusqueda == 1">Nombre(s):<br><input type="text"
                            v-model="txtNombre"><br>&nbsp;</div>
                    <div class="col4" v-show="opMenuBusqueda == 2">Teclee el número de tarjeta:<br><input type="number"
                            v-model="txtNoTarjeta"></div>
                    <div class="col4" v-show="opMenuBusqueda == 3">Teclee el número de cuenta:<br><input type="number"
                            v-model="txtNoCuenta"></div>
                    <div class="col4" v-show="opMenuBusqueda == 4">Cliente Único:<br>
                        <div class="divCol divCol4int">
                            <div class="col4"><input type="number" v-model="cliUPais"></div>
                            <div class="col4"><input type="number" v-model="cliUCabal"></div>
                            <div class="col4"><input type="number" v-model="cliUSucursal"></div>
                            <div class="col4"><input type="number" v-model="cliUFolio"></div>
                        </div>
                    </div>
                    <div class="col4">&nbsp;<br><a class="btn1 btnBuscar "
                        v-on:click.prevent="funcResultados()">Buscar</a>
                    </div>
                </div>

                <div class="clear"></div>&nbsp;
                <div class="divError">{{ msjError }}</div>
            </div>
        </div>
    </div>
    `,
    props:[],
    data: function(){
        return{
                msjError: "",
                divConsulta: 0,

                //Desactiva check
                bloqueadoUno: false,
                bloqueadoDos: false,
                opMenuSel: 0,
                opMenuBusqueda: 0,

                //Cosulta Saldos por nombre
                checkApellidoP: "",
                checkApellidoM: "",
                txtApellidoP: "",
                txtApellidoM: "",
                txtNombre: "",

                //Cosulta Saldos por número de tarjeta
                txtNoTarjeta: "",

                //Cosulta Saldos por número de cuenta
                txtNoCuenta: "",

                //Cosulta Saldos por cliente ínico
                cliUPais: "",
                cliUCabal: "",
                cliUSucursal: "",
                cliUFolio: "",
        }
    },
    mounted() {
        console.log(store);
    },
    methods:{
            selOptBusqueda: function(opBusqueda){
                this.opMenuBusqueda = opBusqueda;	
                this.limpiarCamposBusqueda();
                this.$emit('mensajeDeBuscador', false);
            },

            opcionBusqueda: function(opBusqueda){
                return this.opMenuBusqueda != opBusqueda;
            },

            limpiarCamposBusqueda: function(){
                //Desactiva check
                this.bloqueadoUno = false,
                this.bloqueadoDos = false,

                //Cosulta Saldos por nombre
                this.checkApellidoP = "",
                this.checkApellidoM = "",
                this.txtApellidoP = "",
                this.txtApellidoM = "",
                this.txtNombre = "",

                //Cosulta Saldos por número de tarjeta
                this.txtNoTarjeta = "",

                //Cosulta Saldos por número de cuenta
                this.txtNoCuenta = "",

                //Cosulta Saldos por cliente ínico
                this.cliUPais = "",
                this.cliUCabal = "",
                this.cliUSucursal = "",
                this.cliUFolio = ""
            },

            funcResultados: function() {
                /* if ((this.txtApellidoP == "") && (this.opMenuBusqueda == 1)) {
                    this.msjError = "Es necesario que ingreses su apellido paterno";
                }else if ((this.txtApellidoM == "") && (this.opMenuBusqueda == 1)) {
                    this.msjError = "Es necesario que ingreses su apellido materno";
                }else if ((this.txtNombre == "") && (this.opMenuBusqueda == 1)) { 
                    this.msjError = "Es necesario que ingrese su nombre";
                }else if ((this.txtNoTarjeta.length <= 16) && (this.opMenuBusqueda == 2)) { 
                    this.msjError = "Es necesario que ingrese el número de su tarjeta";
                }else if ((this.txtNoCuenta.length <= 5) && (this.opMenuBusqueda == 3)) { 
                    this.msjError = "Es necesario que ingrese el número de su cuenta";
                }else if ((this.txtNoCuenta.length <= 5) && (this.opMenuBusqueda == 4)) { 
                    this.msjError = "Es necesario que ingrese su número de cliente único";
                } else {
                    this.$emit('mensajeDeBuscador', true);
                } */
                
                if(this.txtNoCuenta === '0000') {
                    router.push('autorizacion-cuentas-pep');
                } else if(this.txtNoCuenta === '1111') {
                    router.push('contratacion-inversion-ai-plazo');
                }
            }
    }
});
