
btn_encriptar.onclick = btn_encriptar;
btn_desencriptar.onclick = btn_desencriptar;
btn_copiar.onclick = btn_copiar;

const input_texto = document.querySelector(".input_texto");
const output_texto = document.querySelector(".output_texto");

function limpa_tela() {
	input_texto.value = "";
	input_texto.focus();
}

 function limpar_tela() {
 	output_texto.value = "";
}

 function btn_copiar(){
 	const copiar_texto = document.querySelector(".output_texto");
 	copiar_texto.select();
 	navigator.clipboard.writeText(copiar_texto.value);

 	limpar_tela();
 	alert("Seu texto foi copiado")
 }

function btn_encriptar() {
	const texto_encriptado = encriptar(input_texto.value, ...criptografia);
	output_texto.value = texto_encriptado;

	limpa_tela();
}
	
function btn_desencriptar() {
	const texto_desencriptado = desencriptar(input_texto.value, ...criptografia);
	output_texto.value = texto_desencriptado;

	limpa_tela();
}

let criptografia = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function encriptar(string_encriptada) {
	for(let i = 0; i < criptografia.length; i++) {
		if (string_encriptada.includes(criptografia[i][0])) {
			string_encriptada = string_encriptada.replaceAll(criptografia[i][0], criptografia[i][1]);
		}
	}
	return string_encriptada;
}

function desencriptar(string_desencriptada) {
	for(let i = 0; i < criptografia.length; i++) {
		if(string_desencriptada.includes(criptografia[i][1])) {
			string_desencriptada = string_desencriptada.replaceAll(criptografia[i][1], criptografia[i][0]);
		}
	}
	return string_desencriptada;
}
