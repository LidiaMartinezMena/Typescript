import { Persona } from "./Persona.js";
import { Mail } from "./Mail.js";
import { Telefono } from "./Telefono.js";
import { Direccion } from "./Direccion.js";


var direccionLidia1 = new Direccion ("Calle Rio Tajo", 8, 2, "A", 28991, "Cubas", "Madrid" );
var direccionLidia2 = new Direccion ("Calle Duero", 9, 1, "B", 28990, "Grinon", "Madrid" );
var mailLidia1 = new Mail ("personal", "l.martinez.mena@gmail.com");
var mailLidia2 = new Mail ("trabajo", "l.martinez@yahoo.es");
var telefonoLidia1 = new Telefono ("personal", 644764880);
var telefonoLidia2 = new Telefono ("trabajo", 664895632);
var Lidia = new Persona ("Lidia", "Bueno", 33, "44215478-X", new Date(1973, 5, 11),"verde", "Mujer",[direccionLidia1, direccionLidia2],[mailLidia1, mailLidia2],[telefonoLidia1, telefonoLidia2], "nota1");


var direccionDavid1 = new Direccion ("Calle Cisnes", 14, 3, "C", 28990, "Grinon", "Madrid" );
var direccionDavid2 = new Direccion ("Calle Dinosaurio", 10, 1, "B", 28985, "Torrejon", "Madrid" );
var mailDavid1 = new Mail ("personal", "david.achutegui@gmail.com");
var mailDavid2 = new Mail ("trabajo", "david.achutegui@yahoo.es");
var telefonoDavid1 = new Telefono ("personal", 645897596);
var telefonoDavid2 = new Telefono ("trabajo", 654235687);
var David = new Persona ("David", "Achutegui", 33, "44215446-X", new Date(1973, 5, 11),"azul", "Hombre",[direccionDavid1, direccionDavid2],[mailDavid1, mailDavid2],[telefonoDavid1, telefonoDavid2], "nota2");

var direccionHugo1 = new Direccion ("Calle Trompetas", 19, 3, "C", 28990, "Grinon", "Madrid" );
var direccionHugo2 = new Direccion ("Calle Amigo", 7, 1, "B", 28996, "Madrid", "Madrid" );
var mailHugo1 = new Mail ("personal", "hugo.achutegui@gmail.com");
var mailHugo2 = new Mail ("trabajo", "hugo.achutegui@yahoo.es");
var telefonoHugo1 = new Telefono ("personal", 564897563);
var telefonoHugo2 = new Telefono ("trabajo", 654235689);
var Hugo = new Persona ("Hugo", "Achutegui", 3, "44215459-P", new Date(2019, 5, 11),"rosa", "Hombre",[direccionHugo1, direccionHugo2],[mailHugo1, mailHugo2],[telefonoHugo1, telefonoHugo2], "nota3");


console.log("Lista de contactos");
console.log(Lidia);
console.log(David);
console.log(Hugo);

var agenda: Array<Persona> = new Array(Lidia, David, Hugo);
var dniPersona: string="44215446-X";
var personaEncontrada: Persona = agenda.find(Persona => Persona._dni === dniPersona) as Persona;
console.log("Persona encontrada a través de su DNI");
console.log(personaEncontrada);

var nuevaDireccion = new Direccion ("Calle Castanos", 8, 2, "D", 28995, "Cubas", "Toledo" );
var nuevoMail = new Mail ("trabajo", "d.achu@gmail.com");
var nuevoTelefono = new Telefono ("trabajo", 658965236);

personaEncontrada.agregarNuevaDireccion(nuevaDireccion);
personaEncontrada.agregarNuevoMail(nuevoMail);
personaEncontrada.agregarNuevoTelefono(nuevoTelefono);

console.log("Lista de contactos nueva");
console.log(Lidia);
console.log(David);
console.log(Hugo);


