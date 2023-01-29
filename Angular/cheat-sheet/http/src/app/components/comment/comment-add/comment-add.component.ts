// Comment-add.component.ts

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css'],
})
export class CommentAddComponent implements OnInit {
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {}

  onSubmit(name: string, email: string, body: string) {
    this.commentService.addComment(body, email, name);
  }
}
