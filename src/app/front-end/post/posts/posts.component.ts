import { Component, OnInit } from '@angular/core';
// import { NzNotificationService } from 'ng-zorro-antd/notification';
// import { PostService } from '../service/post.service';


export interface Data {
  id: number;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  post:any;

  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly Data[] = [];
  listOfCurrentPageData: readonly Data[] = [];
  setOfCheckedId = new Set<number>();

  confirm(): void {
    // this.notification.create(
    //   'success',
    //   'Notification Title',
    //   'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    // );
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData;
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.id));
    console.log(requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }




  // constructor(private notification: NzNotificationService,
  //   private postService: PostService) { }

  // ngOnInit(): void {
  //   this.listOfData = new Array(100).fill(0).map((_, index) => ({
  //     id: index,
  //     name: `Edward King ${index}`,
  //     age: 32,
  //     address: `London, Park Lane no. ${index}`
  //   }));
  //   this.getListPost();
  // }


  // getListPost(): void{
  //   const data = {
  //     requestId: "",
  //     username: "123",
  //     idUser: "123",
  //     language: "vi",
  //     version: 1
  //   };
  //   console.log(data);

  //   this.postService.readAll(data).subscribe(
  //     response=>{
  //       this.post = response;
  //       console.log(this.post);
  //     },
  //     error=>{
  //       console.log(error);
  //     }
  //   );
  // }


}
