import { Box } from "@chakra-ui/react";
import WorkoutCellContainer from "../components/WorkoutCellContainer";

import "../styles/ProfilePage.css"

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


export default function ProfilePage() {
    return (
        <Box className="profile-page-container">
            <Box className="profile-overview-container">
                <img src="" alt="user photo"></img>
                <Box className="profile-basic-info-container">
                    <p className="header-text"> user name </p>
                    <Box className="profile-stats-container">
                        <Box className="single-stat-container">
                            <p className="stat-title">Workouts</p>
                            <p className="stat-content-text">0</p>
                        </Box>
                        <Box className="single-stat-container" >
                            <p className="stat-title">Followers</p>
                            <p className="stat-content-text">0</p>
                        </Box>
                        <Box className="single-stat-container">
                            <p className="stat-title">Following</p>
                            <p className="stat-content-text">0</p>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box>
                <Box className="left-container">
                    <p className="header-text"> Workouts </p>
                    {sample_posts.map((post_) => (
                        <div key={post_.id}>
                            {/* Display post */}
                            <WorkoutCellContainer post={post_} ></WorkoutCellContainer>
                        </div>
                        ))}
                </Box>

                <Box className="right-container"></Box>
            </Box>
        </Box>
    );
}