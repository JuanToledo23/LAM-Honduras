let header = Vue.component('app_header', {
    template: `
			<header>
				<div class="header">
					<div class="headerMenu"  v-on:click="toggleMenu()">
						<img src="assets/img/btn_hamburguer.svg" alt="Menú principal" class="imgHamburgesa">
					</div>
					<div class="headerLogo">
						<a href="index.html"><img src="assets/img/logo.svg" id="imgLogo"></a>
					</div>
					<div class="headerUser">
						<div class="name"><strong>{{usr_nombre}}</strong> {{usr_apellido}}<br>{{usr_puesto}}</div>
					</div>
				</div>

				<div class="titulo">
					<div class="ruta">
						<a href="index.html">Página Principal</a> 
						<a href="#">{{$store.state.ruta}}</a> 
					</div>{{$store.state.ruta}}
				</div>

				<div id="effect"  v-if="muestraMenu">
                    <div id="menuPrincipal">
                        <div id="menu">
                            <ul class="l-navegacion nivel1">
                                <li><a href="estatus.html"><div>Estatus de flujos</div></a></li>
                            </ul>
                        </div>
                    </div>
				</div>
			</header>
		`,
    data: function () {
        return {
            usr_nombre: 'Coyolxauhqui',
            usr_apellido: 'Ramírez',
            usr_puesto: 'Front-End',


            //menu
            muestraMenu: false,
        };
    },
    methods: {

        toggleMenu() {
            this.muestraMenu = !this.muestraMenu;
        },


    },
    mounted: function () {

    },

});