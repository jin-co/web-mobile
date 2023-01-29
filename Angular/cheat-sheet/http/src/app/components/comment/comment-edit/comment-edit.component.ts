// component-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css'],
})
export class CommentEditComponent implements OnInit {
  id!: string;
  comment!: Comment;
  constructor(
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.commentService.getComment(this.id).subscribe((comment) => {
      this.comment = {
        name: comment.name,
        body: comment.body,
        email: comment.email,
      };
    });
  }

  onSubmit(name: string, email: string, body: string) {
    this.commentService.editComment(this.id, body, email, name);
  }
}
