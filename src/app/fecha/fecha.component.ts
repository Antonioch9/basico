//en cada compoenente tenemos tres loques de codigos, las importaciones que necesitamos para los componente
//lo mas importante son:
import{ Component } from '@angular/core';//pedimos un compoente a angular,
//de esta libreria trae la clase "component".

//2º componente sera
@Component({
    //seleccionamos la etiqueta del html
    selector:'app-fecha',
    //enlazamos lo que es el .ts con el compoentne .html
    templateUrl:'./fecha.component.html',
    //enlazamos el archivo .css
    styleUrls:['./fecha.component.css']
})
//3º compenente
export class FechaComponent {
    //forma de nombrar una variable en angular
    hoy= new Date();
}