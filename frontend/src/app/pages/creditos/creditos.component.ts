import { Component, OnInit } from '@angular/core';
import { CreditosService } from 'src/app/services/creditos.service';
import { CestadoPipe } from 'src/app/pipes/cestado.pipe';
import { CsentinelPipe } from 'src/app/pipes/csentinel.pipe';
import { Credito } from 'src/app/models/credito';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.scss']
})
export class CreditosComponent implements OnInit {

  ESTADOS = ['RECHAZADO', 'SOLICITADO', 'APROBADO'];

  columnDefs = [
    {headerName: 'ID', field: 'id', hide: true},
    {headerName: 'Cliente', field: 'cliente', hide: true},
    {headerName: 'Cliente', field: 'cliente_txt'},
    {headerName: 'Estado', field: 'estado', editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {values: [-1, 0, 1]},
      cellClassRules: {
        'text-success': 'x == 1',
        'text-primary': 'x == 0',
        'text-danger': 'x == -1',
      },
      cellRenderer: data => this.estadoPipe.transform(data.value),
      valueFormatter: data => this.estadoPipe.transform(data.value),
      valueParser: data => this.estadoPipe.ESTADOS.indexOf(data.newValue) - 1,
      onCellValueChanged: params => {
        let credito: Credito = Object.assign({}, params.data);
        credito.estado = params.newValue;
        this.creditosService.actualizar(credito).subscribe(data => {
          console.log(data)
        })
      },
    },
    {headerName: 'Monto', field: 'monto'},
    {headerName: 'Deuda SBS', field: 'deuda_sbs',
      cellClassRules: {
        'text-success': 'x < 100',
        'text-warning': 'x >= 100 && x <= 1000',
        'text-danger': 'x > 1000',
      }
    },
    {headerName: 'Puntuación Sentinel', field: 'calificacion_sentinel',
      cellRenderer: data => this.sentinelPipe.transform(data.value),
      cellClassRules: {
        'text-success': 'x == 1',
        'text-warning': 'x == 0',
        'text-danger': 'x == -1',
      }
    },
    {headerName: 'Indicador IA', field: 'prediccion_ia',
      cellClassRules: {
        'text-success': 'x > 8',
        'text-warning': 'x >= 4 && x <= 8',
        'text-danger': 'x < 4',
      }
    },
    {headerName: 'Creado', field: 'creado'},
    {headerName: 'Actualizado', field: 'actualizado'},
  ];

  rowData: any;
  
  constructor(private creditosService: CreditosService, private estadoPipe: CestadoPipe, private sentinelPipe: CsentinelPipe) { }

  ngOnInit(): void {
    this.rowData = this.creditosService.lista();
  }

}
