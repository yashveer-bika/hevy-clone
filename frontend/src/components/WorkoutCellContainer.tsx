import { Avatar, Box, Button, Divider, Flex, Image } from "@chakra-ui/react"
import { Container } from '@chakra-ui/react'
import {Post} from "../Types"
import { Link } from '@chakra-ui/react'

import "../FeedPage.css";
import CommentSection from "./CommentSection";
import CopyLinkButton from "./CopyLinkButton";

// TODO: write a proper getter for the image profile
function getProfileImage(user : string) {
    return (
        // <Box boxSize='sm'>
            <Avatar 
                boxSize='100px' 
                borderRadius='50px'
                src='https://bit.ly/dan-abramov' 
                // alt='Dan Abramov' 
            />
        // </Box>
    );
}

// TODO: write a proper getter for the image profile
function getWorkoutImage(workoutId : string) {
    return (
        // <Box boxSize='sm'>
            <Image 
                boxSize='600px'
                borderRadius='5px'
                src='https://pump-app.s3.eu-west-2.amazonaws.com/profile-images/supernar3k-f4e5a35c-a3cc-456c-b024-edac43ff27ad.jpg' 
                alt='Dan Abramov' 
            />
        // </Box>
    );
}

interface WorkoutCellContainerArgs {
    post : Post
}
export default function WorkoutCellContainer({post} : WorkoutCellContainerArgs) {
    // TODO: switch to 2nd line to read from my API
    const userPath = `https://chakra-ui.com/docs/components/container/theming`
    // const userPath = `/user/${post.author}`

    // TODO: switch to 2nd line to read from my API
    const workoutPath = `https://en.wikipedia.org/wiki/Exercise`
    // const workoutPath = `/workout/${post.workoutId}`

    const profileImg = getProfileImage(post.author);

    const workoutImg = getWorkoutImage(post.workoutId);


    return (
        <Box className="workout-cell-container">
            
            <Link href={userPath}>

                <Container className="workout-cell-header">
                    {profileImg}

                    <Container>
                        <p className="post-author-text">
                            {post.author}
                        </p>
                        <p className="post-date-text">
                            {post.date.toDateString()}
                        </p>
                    </Container>

                    {/*  */}
                </Container>

            </Link>

            <Link href={workoutPath}>
                <p className="post-title">{post.title}</p>
                <p className="post-description">{post.description}</p>
                <Container className="stats-container">
                    <Container>
                        <p className="stats-header">Duration</p>
                        <p className="stats-body">10min</p>
                    </Container>
                    <Container>
                        <p className="stats-header">Volume</p>
                        <p className="stats-body">3,010 lbs</p>
                    </Container>
                </Container>

                <Container className="workout-content-image-container">
                    {workoutImg}
                </Container>
            </Link>

            <Container className="workout-social-preview-container">
                {/*  */}
                <p className="like-button-container">
                    0 likes 
                    {/* TODO: change the number based on actual likes, make the modal to show who has liked the workout */}
                </p>
                
                0 comments
                {/* TODO: read comment count dynamically */}
            </Container>


            <Container className="workout-actions-container">
                <Divider/>

                <Flex justifyContent="center">
                    <Button mx={2} colorScheme="blue" variant="outline">
                        Like
                    </Button>
                    
                    <CopyLinkButton workoutLink={workoutPath}></CopyLinkButton>
                    
                </Flex>


                {/*  */}
                <Divider/>

            </Container>

            <CommentSection></CommentSection>


            {/* <Container className="comment-input-container">
                <Container className="comment-profile-photo-container">

                </Container>

                <Container className="comment-text-area-container">
                    
                </Container>
            </Container> */}

        </Box>

        
    )
}