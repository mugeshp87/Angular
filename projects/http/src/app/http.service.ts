import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(private http:HttpClient) { 
}
getcustomers(){
  const headers=new HttpHeaders(
    {
      'content-type':'application/json',
      'authenticationToken':'876543'
    }
  );
  const params=new HttpParams()
  .set('pageno',10)
  .set('pagesize',200)
  // headers.append('application/json','364838778')
 return this.http.get('http://localhost:3000/posts',{headers:headers,params:params})
}
adduser(body: any)
{
  return this.http.post('http://localhost:3000/posts',body)


}

}
