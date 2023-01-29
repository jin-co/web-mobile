// comment.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  URL = 'https://jsonplaceholder.typicode.com/comments/';

  // comments = new Subject<Comment[]>()
  constructor(private http: HttpClient) {}

  // getComments() {
  //   this.http.get<Comment[]>(this.URL).subscribe(comments => {
  //       this.comments.next(comments)
  //   })
  // }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.URL);
  }

  addComment(body: string, name: string, email: string) {
    const comment: Comment = {
      body: body,
      email: email,
      name: name,
    };
    this.http.post(this.URL, comment).subscribe(result => {
      console.log(result)
    });
  }

  deleteComment(id:string) {
    this.http.delete(this.URL + id).subscribe(result => {
      console.log(result)
    })
  }

  getComment(id:string):Observable<Comment> {
    return this.http.get<Comment>(this.URL + id)
  }

  editComment(id:string, body: string, name: string, email: string) {
    const comment: Comment = {
      body: body,
      email: email,
      name: name,
    };

    this.http.put(this.URL + id, comment).subscribe(result => {
      console.log(result)
    })
  }
}
