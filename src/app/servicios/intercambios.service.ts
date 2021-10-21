import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Intercambio } from '../modulos/intercambio';

@Injectable({
  providedIn: 'root'
})
export class IntercambiosService {

  constructor(private http:HttpClient) { }

  obtenerIntercambio()
  {
    return this.http.get<Intercambio[]>("http://localhost:4100/usuarios");
  }
  obtenerIntercambioPorId(id:number)
  {
    return this.http.get<Intercambio>("http://localhost:4100/usuarios/" + id);
  }
  eliminarIntercambio(id:number)
  {
    return this.http.delete("http://localhost:4100/usuarios/" + id);
  }
  crearIntercambio(intercambio:Intercambio)
  {
    return this.http.post<Intercambio>("http://localhost:4100/usuarios/",intercambio);
  }
  editarIntercambio(intercambio:Intercambio)
  {
    return this.http.put("http://localhost:4100/usuarios/" +intercambio.id, intercambio);
  }

}
