let contratacionInversionIaPlazo = Vue.component('contratacionInversionIaPlazo', {
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
					<div class="titSec">Datos del Depósito</div>
					<div class="gris">
						<div class="divCol">
							<div class="col2">
								Ingrese importe:<br> <input type="text">
							</div>
							<div class="col2">
								Confirme importe:<br> <input type="text">
							</div>
                        </div>
						<div class="divGrow">
							<div class="col1">
								Importe con letra:<br> <textarea></textarea>
							</div>
                        </div>
                        <div class="divCol">
							<div class="col2">
								Total Cargo:<br> <input type="text">
							</div>
							<div class="col2">
								Total Depósito:<br> <input type="text">
							</div>
                        </div>
                    </div>
                    
					<div class="titSec">Selección del Plazo</div>
					<div class="gris">
                        <div class="divCol">
                            <div class="col2">
                                <select name="plazo" id="plazo">
                                    <option value="0">IA Plazo 90 días</option>
                                    <option value="1">Opción 2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
					<div class="titSec">Opciones de Contratación</div>
					<div class="gris">
                        <div class="divCol">
                            <div class="col2">
                                <input type="checkbox" id="checkBox1" name="checkBox1" value="Bike">
                                <label for="checkBox1"> Pago de Interes Mensual y Capital Vencido a Cuenta Eje</label>
                            </div>
                            <div class="col2">
                                Capital:<br> <input type="text">
                            </div>
                        </div>
					</div>
				</div>
			</template>
		</div>
    `,
    data: function () {
        return {
            ruta:'Contratación de Inversión IA Plazo',
        }
    },
    mounted() {
        this.$store.commit('set_ruta',this.ruta);
    }
    
})