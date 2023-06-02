import { Box } from "@chakra-ui/react";
import CreateRoutine from "./CreateRoutine";


export default function LoggingPage() {
    return (
        <CreateRoutine editMode={false} mode="log"/>
    );
}