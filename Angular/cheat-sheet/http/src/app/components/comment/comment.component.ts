// comment.component.ts

import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getComments().subscribe((comments) => {
      this.comments = comments;
    });
    // this.commentService.commentsUpdateListener().subscribe((comments) => {
    //   console.log(comments)
    //   this.comments = comments;
    // });
  }

  onDelete(id: string | undefined) {
    this.commentService.deleteComment(id as string);
  }  
}
