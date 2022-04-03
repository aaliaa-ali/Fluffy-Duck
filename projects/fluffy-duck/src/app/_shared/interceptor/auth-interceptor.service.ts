import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let token=  localStorage.getItem('token')
      if(token){
        console.log('with token')
      const   authReq=req.clone({headers :req.headers.append('Authorization',token)})
        return next.handle(authReq)
      }
      else{
        return next.handle(req)
      }
       
    }
}