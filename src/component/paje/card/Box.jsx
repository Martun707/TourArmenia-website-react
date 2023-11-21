import {Box, Container, Stack} from "@mui/material";
import List from "./List";



const HomeCard = () =>{
    return(

        <Box>
            <Container>

                <hr />
                <Stack direction={"row"} spacing={8} mt={8}>
                    <Box flex={3}>
                        <List />
                    </Box>
                </Stack>

            </Container>
        </Box>
    )
}
export default HomeCard