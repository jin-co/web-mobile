import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comments:Comment[] = []
  
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getComments()
    this.commentService.commentsUpdateListener().subscribe(comments => {
      console.log(comments)
    })
  }
}
