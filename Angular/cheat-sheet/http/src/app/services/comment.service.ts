import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  URL = 'https://jsonplaceholder.typicode.com/comments'    
  // comments:Comment[] = []
  comments = new Subject<Comment[]>
  constructor(private http:HttpClient) { }

  getComments() {
    this.http.get<Comment[]>(this.URL).subscribe(comments => {
      console.log('back: ', comments)
        this.comments.next(comments)
    })
  }

  commentsUpdateListener() {
    return this.comments.asObservable()
  }
}
