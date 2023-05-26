import { useEffect } from "react";
import UserSearchBar from "../components/UserSearchBar";
import WorkoutCellContainer from "../components/WorkoutCellContainer";
import "../styles/FeedPage.css";
import { Post } from "../Types";

const sample_posts: Post[] = [
  {
    id: 1,
    author: 'John Doe',
    description: 'This is my first post!',
    date: new Date(),
    workoutId: "L0s8A",
    title: "Cheeky Afternoon lift"
  },
  {
    id: 2,
    author: 'Jane Smith',
    description: 'Mock PL Meet (SBD)',
    date: new Date(),
    workoutId: "K8H2w",
    title: "PR time"
  },
  // Add more posts here
];

// const sampleSuggestedUsers: SuggestedUser[] = [
//   {
//     id: 1,
//     username: 'coolusername',
//     name: 'I love to code and learn new things!',
//     avatar: 'https://example.com/avatar.png',
//   },
//   // {
//   //   id: 2,
//   //   username: 'anotheruser',
//   //   name: 'Just a regular person living life',
//   //   avatar: 'https://example.com/avatar2.png',
//   // },
//   // Add more suggested users here
// ];


function FeedPage() {
  // const [posts, setPosts] = useState<Posts>([]);
  // const [suggestedUsers, setSuggestedUsers] = useState<SuggestedUsers>([]);
  const posts = sample_posts;
  // const suggestedUsers = sampleSuggestedUsers;
  // console.log(posts);
  // console.log(suggestedUsers);


  // setPosts(sample_posts);
  // setSuggestedUsers(sampleSuggestedUsers);

  useEffect(() => {
    // Fetch posts from API
    // Example: fetch("api/posts/following")
    //   .then((response) => response.json())
    //   .then((data) => setPosts(data));

    // Fetch suggested users from API
    // Example: fetch("api/users/suggested")
    //   .then((response) => response.json())
    //   .then((data) => setSuggestedUsers(data));
    
  }, []);

  return (
    <div className="feed-container">
      <div className="feed-left">
        {/* Display posts from people you follow */}
        
        {posts.map((post_) => (
          <div key={post_.id}>
            {/* Display post */}
            <WorkoutCellContainer post={post_} ></WorkoutCellContainer>
          </div>
        ))}

      </div>
      
      <div className="feed-right">
        {/* Display suggested users to follow */}
        
        {/* {suggestedUsers.map((user) => (
          <div key={user.id}>
            {user.id}
          </div>
        ))}         */}
        
        {/* TODO: change onSearch to rerender this div with all search results that make the search text */}
        <UserSearchBar onSearch={() => {}} ></UserSearchBar>

      </div>

    </div>
  );
}

export default FeedPage;
