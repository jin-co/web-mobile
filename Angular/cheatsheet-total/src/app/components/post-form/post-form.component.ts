import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {  
  @Output() newPost: EventEmitter<Post> = new EventEmitter()
  @Input() currentPost!: Post;
  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
  }

  addPost(title: string, body: string) {
    if (!title || !body) {
      alert('nothing')
    } else {
      this.postService.savePost({
      title,
      body
     } as Post).subscribe(post => {
       this.newPost.emit(post)
     });
    }
  }
}
