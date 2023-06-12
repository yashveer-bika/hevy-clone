import { Box } from "@chakra-ui/react";


export default function SettingButton({imgPath, text, onClick, bgColor} : any) {
    return (
        <Box className="setting-button" onClick={onClick} backgroundColor={bgColor}> 
            <Box className="setting-button-icon-text-container">
                <img src={imgPath} alt="icon"></img> 
                <p className="setting-button-text">{text}</p>
            </Box>
            <img src="" alt="arrow-icon"></img> 
        </Box>
    );

}