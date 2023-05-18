export type Post = {
    id: number;
    // content: string;
    author: string;
    date: Date;
    workoutId: string;
    title: string;
    description: string;
    // duration: number;
    // volume: number;
    // likes: number;
    // comments: Comment[];
    // ... other relevant properties
}

export type Posts = Post[];
  
export type SuggestedUser = {
    id: number;
    username: string;
    name: string;
    avatar: string;
    // ... other relevant properties
}

export type SuggestedUsers = SuggestedUser[];

export interface Comment {
    id: number;
    author: string;
    content: string;
  }
  

export interface Routine {
    id : number
    routineName: string
    routineLink: string
}