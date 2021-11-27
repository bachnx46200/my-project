import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Injectable({
    providedIn: 'root'
})
export class MessageNotification {
    status!: string;
    constructor(private notification: NzNotificationService) { }
    public createNotification(code: number, message: string): void {
        if(code==1){
            status='success';
        }else if(code==0){
            status='error';
        }
        this.notification.create(
            status,
            'Notification Title',
            message
        );
    }
}