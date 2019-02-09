
/* This file is licensed under the terms of the BSD 3-Clause License. */

/*
 * Event-Handler-Funktion für den Button.
 */
function buttonEventHandler() {

  // JSON-Dokument als JavaScript-Objekt instanziieren		  
  var meinObjekt = {
                        "titel"       : "Großes Buch der Allwissenheit",
                        "autoren"     : [ "Alice Mayer", "Bob Brown" ],
                        "jahr"        : 2001,
                        "erstauflage" : true,								
                        "verlag"      : {
                               "name" : "Beispiel-Verlag",
                               "ort"  : "Berlin"
                        }	
                    };

  // Einzelne Attribute mit einem Dialog ("alert") ausgeben
  alert("Titel des Buches: \"" + meinObjekt.titel          + "\"\n" +
        "Erscheinungsjahr: "   + meinObjekt.jahr           + "\n"   + 
        "Anzahl der Autoren: " + meinObjekt.autoren.length + "\n"   +
        "Erst-Autor: "         + meinObjekt.autoren[0]     + "\n"   +
        "Verlag: "             + meinObjekt.verlag.name    ); 		  
}
