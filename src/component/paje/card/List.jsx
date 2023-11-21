import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";
import {Infoblog} from "../../../infoblog"
import MediaCard from "../card/Card";
import Box from "@mui/material/Box";

export default function List() {

    return (
        <>
            <Box>

                <Grid container spacing={2}>
                    {Infoblog.map(data=>(
                        <Grid xs={4} key={data.id}>
                            <MediaCard {...data}/>

                        </Grid>


                    ))}
                </Grid>


            </Box>
        </>
    );
}
