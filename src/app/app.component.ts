import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

interface Post{
  title:string
  content:string;
}

interface PostId extends Post { 
  id: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    postsCol: AngularFirestoreCollection<Post>;
  //  posts: Observable<Post[]>;
  posts: any;

    title:string;
    content:string;


    postDoc: AngularFirestoreDocument<Post>;
    post: Observable<Post>;

  constructor(private afs: AngularFirestore){

  }

  ngOnInit(){
    this.postsCol = this.afs.collection('posts');
   //this.postsCol = this.afs.collection('posts', ref => ref.where('title', '==', 'coursetro'));
   // this.posts = this.postsCol.valueChanges();
   this.posts = this.postsCol.snapshotChanges()
   .map(actions => {
     return actions.map(a => {
       const data = a.payload.doc.data() as Post;
       const id = a.payload.doc.id;
       return { id, data };
     });
   });
  }

  addPost() {
   // this.afs.collection('posts').add({'title': this.title, 'content': this.content});
   this.afs.collection('posts').doc('my-custom-id').set({'title': this.title, 'content': this.content});
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/'+postId);
    this.post = this.postDoc.valueChanges();
  }

  deletePost(postId) {
    this.afs.doc('posts/'+postId).delete();
  }
}
