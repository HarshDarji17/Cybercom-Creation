import { from } from "rxjs";
import { ErrorHandler } from '@angular/core';

export class AppErrorHandeler implements ErrorHandler {
    
    handleError(error: any) {
        alert('an  unexpexted error occurred !');
        console.log(error);
    }
}