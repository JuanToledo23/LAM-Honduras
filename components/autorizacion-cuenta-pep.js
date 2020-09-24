let autorizacionCuentaPep =	Vue.component('app_autorizacion_cuentas_pep', {
	template: `
		<div>
			<template>
				<div class="divBuscar">
					<div class="titSec">Datos del Titular</div>
					<div class="gris">
						<div class="infoUsuario">
							<div class="divFoto">
								<img v-bind:src="$store.state.resultadosBusqueda[0].foto">
							</div>
							<div class="scroll scrolly">
								<table class="tblGeneral tblClientes">
									<tbody>
										<tr>
											<th>Apellido Paterno</th>
											<th>Apellido Materno</th>
											<th>Nombre</th>
											<th>Tipo de Tarjeta</th>
										</tr>
										<tr v-for="resultado in $store.state.resultadosBusqueda">
											<td>{{ resultado.apellidoP }}</td>
											<td>{{ resultado.apellidoM }}</td>
											<td>{{ resultado.nombre }}</td>
											<td><img v-bind:src="resultado.imgTarjeta" class="icoLogo"/></td>
										</tr>
									</tbody>
								</table>
							</div>								
						</div>
					</div>
				</div>

				<div>
					<div class="titSec">Datos de identificación</div>
					<div class="gris">
						<div class="divCol">
							<div class="col4">
								Apellido paterno:<br> <strong>{{$store.state.resultadosBusqueda[0].apellidoP}}</strong>
							</div>
							<div class="col4">
								Apellido materno:<br> <strong>{{$store.state.resultadosBusqueda[0].apellidoM}}</strong>
							</div>
							<div class="col4">
								Nombre(s):<br> <strong>{{$store.state.resultadosBusqueda[0].nombre}}</strong>
							</div>
							<div class="col4">
								Apellido de casada:<br> <input type="text" v-model="apellidoC">
							</div>
							<div class="col4">
								Sexo:<br>
								<div class="divGenero desac">
									<div>
										<input id="radioFemenino" type="radio" name="groupGenero" value="Femenino" checked> 
										<label for="radioFemenino">Femenino</label>
									</div> 
									<div>
										<input id="radioMasculino" type="radio" name="groupGenero" value="Masculino"> 
										<label for="radioMasculino">Masculino</label>
									</div>
								</div>
							</div>
							<div class="col4">
								Estado familiar:<br><strong>{{$store.state.resultadosBusqueda[0].estadoFamiliar}}</strong>
							</div>
							<div class="col4">
								Fecha de nacimiento:<br><strong>{{$store.state.resultadosBusqueda[0].fechaN}}</strong>
							</div>
						</div>
					</div>
					<div class="titSec">Estado de cuenta</div>
					<div class="gris">
						<div class="divCol">
						<div class="col4">
								<strong>CUENTA BLOQUEADA</strong>
							</div>
						</div>
					</div>
					<div class="titSec">Observaciones</div>
					<div class="gris">
						<div class="divCol">
						<div class="col4">
								<strong>APERTURA</strong>
							</div>
						</div>
					</div>
				</div>
			</template>
		</div>
	`,
	props: [],
	data: function() {
		return {
			ruta:'Autorizacion Cuentas PEP',
			resultadosBusqueda: null,
			apellidoC:'',
		};
	},
	methods:{
		/* <buscador v-if="" @mensajeDeBuscador="mensajeRecibidoBuscador"></buscador>
			v-if="resultadosBusqueda && resultadosBusqueda.length > 0" */
		/* mensajeRecibidoBuscador: function(valor){
			if(valor){
				this.resultadosBusqueda = [{ }];
			}else{
				this.resultadosBusqueda = null;
			}
			console.log('muestraDatos', valor);
		} */
	},
	mounted: function () {
		this.$store.commit('set_ruta',this.ruta);
	},
});