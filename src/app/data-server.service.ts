import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { retry, catchError, tap, retryWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServerService {
  url:string="https://bitar2001.000webhostapp.com/getItem.php";
  urlUser:string="https://bitar2001.000webhostapp.com/getUserResturant.php";
  urlUserById: string="https://bitar2001.000webhostapp.com";
  urlItemByName: string="https://bitar2001.000webhostapp.com";

  constructor(private http:HttpClient) { }
  // getItem():Observable<any>{

  // return this.http.get<any>(this.url).pipe(
  // retry(1),
  // catchError((error: HttpErrorResponse) => {
  //   console.log(error)
  // return throwError(() => new Error(error.error.data.error));}))}

  // getUserId(email: string, password: string): Observable<any> {
  //   const url = `${this.urlUserById}/getUserResturantId.php?email=${email}&password=${password}`;

  //   return this.http.get(url).pipe(
  //     tap(response => console.log(response)),
  //     catchError(error => {
  //       console.error('Error:', error);
  //       throw error;
  //     })
  //   );
  // }


  getUserId(email: string, password: string): Observable<any> {
    const url = `${this.urlUserById}/getUserResturantId.php?email="${email}"&password="${password}"`;

    console.log('Request URL:', url);

    return this.http.get(url).pipe(
      tap(response => console.log('Response:', response)),
      catchError(error => {
        console.error('Error:', error);
        throw error;
      })
      );
    }
    // getUserId(email:string,password: string): Observable<any>{
//   const url = `${this.urlUserById}/getUserResturantId.php`;
//   const body ={email,password};
//   const headers = new HttpHeaders({'Content-Type': 'application/json'});
//   console.log("Request body: ",body);
//   console.log("Request Url: ",url);

//   return this.http.post(url,body,{headers}).pipe(

  //     tap(response => console.log('Response: ', response)),
  //     catchError(error => {
    //       console.log("Error:", error);
    //       throw error;
    //     })
    //   )

    // };

    searchByName(title: string): Observable<any> {
      const url = `https://bitar2001.000webhostapp.com/searchItem.php?title=${title}`;
      console.log('Request URL:', url);
      return this.http.get(url).pipe(
        tap(response => console.log('Response:', response)),
        catchError(error => {
          console.error('Error:', error);
          throw error;
        })
        );
      }
      getUser():Observable<any>{
        return this.http.get<any>(this.urlUser).pipe(
          retry(2),
          catchError((error: HttpErrorResponse) => {
            console.log(error)
      return throwError(() => new Error(error.error.data.error));}))}

      // return this.http.get<any>(this.base_url+ `/all/${pageNumebr}`, { headers })
      // .pipe(
        //   retry(1),
        //   catchError((error: HttpErrorResponse) => {
          //     console.log(error)
          //     return throwError(() => new Error(error.error.data.error));
          //   })
          // )
updateUser(userId: string, updateData: any): Observable<any>{
            const url=`https://bitar2001.000webhostapp.com/updateUserRes.php`;
            const body= {userId, updateData};
            const headers= {'Content-Type': 'application/json'};
            return this.http.post(url,body);

          }
          /////////////////////////////////
          getItem(): Observable<any>{
            return this.http.get('http://localhost:3000/items/items')
          }
          getItemByUserId(id:number): Observable<any>{
            return this.http.get(`http://localhost:3000/items/itemById/${id}`)
          }
          deleteItem(userId: number): Observable<any>{
            const url=`http://localhost:3000/items/deleteItem/${userId}`;
            // const body= {userId}
            return this.http.delete(url);}
            updateItemTime(id:number, newTime:string): Observable<any>{
              const url= `http://localhost:3000/items/changeItemTime`;
              const body={id, newTime};
              return this.http.put(url,body);
            }

            addItem(item:any):Observable<any>{
              const url= `http://localhost:3000/items/addItem`;
              const body =item
              return this.http.post(url,body);
            }

            getUserEmail(email:string,password:string):Observable<any>{
              const url =`http://localhost:3000/users/userCheck`;
              const body = {email,password};
              return this.http.post(url,body);
            }
        }
