import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from "@angular/common/http";
export class ErrorHandler {
  static handlerError(error: Response | any) {
    let errorMenssage: string;
    if (error instanceof HttpErrorResponse) {
      const body = error.error;
      errorMenssage = `${error.status}: ${error.url} - ${error.statusText || ''} ${body}`
    } else {
      errorMenssage = error.toString()
    }
    console.log(errorMenssage)
    return Observable.throw(errorMenssage) // retorna a msg de erro que reecebeu do response.
  }
}
