import { Box, Text, Link } from "@chakra-ui/react";

import "../../styles/settings/Subscription.css"

export default function Account() {
    // TODO: make a contact page to contact page, plug my Github, resume, email, etc.
    // TODO: set up a mini Payment system to pay me
    
    return (
        <Box>
            <Box>
                <Text>
                    Interesting in viewing the{' '}
                        <Link color='teal.500' href='https://github.com/yashveer-bika/hevy-clone'>
                            source code
                        </Link>
                </Text>
                <Text>
                    Interesting in more other work by Yashveer Bika{' '}
                        <Link color='teal.500' href='https://github.com/yashveer-bika/'>
                            Github
                        </Link>
                </Text>
            </Box>
        </Box>
    );
}