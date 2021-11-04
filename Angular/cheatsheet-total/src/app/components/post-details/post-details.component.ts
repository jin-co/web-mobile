import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post!: Post;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    // private location: Location
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.postService.getPost(id).subscribe(post => this.post = post)
  }
}
