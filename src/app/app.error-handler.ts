import { Observable } from 'rxjs/Observable';
import { Response } from "@angular/http";
export class ErrorHandler {
  static handlerError(error: Response | any) {
    let errorMenssage: string;
    if (error instanceof Response) {
      errorMenssage = `Error ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
    } else {
      errorMenssage = error.toString()
    }
    console.log(errorMenssage)
    return Observable.throw(errorMenssage) // retorna a msg de erro que reecebeu do response.
  }
}
