import { Injectable } from '@angular/core';
import { Producto } from '../modulos/producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  obtenerProductos()
  {
    return this.http.get<Producto[]>("http://localhost:4100/productos");
  }
  obtenerProductoPorId(id:number)
  {
    return this.http.get<Producto>("http://localhost:4100/productos/" + id);
  }
  eliminarProducto(id:number)
  {
    return this.http.delete("http://localhost:4100/productos/" + id);
  }

  crearProducto(producto:Producto)
  {
    return this.http.post<Producto>("http://localhost:4100/productos/",producto);
  }

  editarProducto(producto:Producto)
  {
    return this.http.put("http://localhost:4100/productos/" +producto.id, producto);
  }
}
