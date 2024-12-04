import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class SweetAlertService {
  public showMessage(message: string) {
    Swal.fire({
      title: message,
      icon: 'success',
      confirmButtonText: 'Ok',
      color: '#e8e3e3',
      background: '#295A80',
      customClass: {
        confirmButton: 'sweet_btn_success',
        title : 'sweet_title',
      },
    });
  }
}
