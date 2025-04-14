export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }
  
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface PostWithUser extends Post {
  user?: User;
}

export interface AuthorStats {
  postCount: number;
  commentCount: number;
}

