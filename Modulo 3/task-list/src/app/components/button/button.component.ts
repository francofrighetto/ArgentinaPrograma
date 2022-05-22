import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  // las dos variables que paso como parametro al boton
  @Input() text:string="";
  @Input() color:string="";
  @Output() btnClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  // el emit es para que genere algo fuera del componente????
  onClick(){
    this.btnClick.emit();
  }

}
