// import SpaceCraftList from './SpaceCraftList.js'
// import PadsList from './PadsList.js'
import './Tools.css'
import { CardMedia, Grid, Card, Typography, CardContent, Box } from '@mui/material'
// import { withStyles } from "@material-ui/core/styles";


// const DarkTextTypography = withStyles({
//     root: {
//       color: "#101010"
//     }
//   })(Typography);

function Tools() {
    return (

    <div>
        <Box sx={{m: 3}}>
            <Grid container justifyContent = 'center'>
                <Grid item style={{ justifyContent: "center" }}>
                    <Card variant = 'outlined' style={{backgroundColor: "#587da5"}}>
                        <CardContent className = 'greeting'>
                            <Typography color = 'white' fontFamily = 'Rockwell'>
                                <h1>Tools</h1>
                                <Grid container justifyContent = 'center' spacing = {30}>
                                    <Grid item xs = {12} sm = {12} md = {12} lg = {12}>
                                        <p>Living space for tools to help us calculate things like damage or builds</p>
                                        <p>Enjoy!</p>
                                    </Grid>
                                    {/* <Grid item xs = {6} sm = {6} md = {6} lg = {6}>
                                        <p>Future Content</p>
                                    </Grid> */}
                                </Grid>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                    <Box sx={{m: 3}}>
                        <CardMedia
                            component="img"
                            image={`https://pwimages-a.akamaihd.net/arc/20/db/20db4dfcd4ef16d7e7c517cb665592601648075445.jpg`}
                            alt="Spacecraft Image">
                        </CardMedia>
                </Box> 
            </Grid>
        </Box>
    </div>
    );
}

export default Tools;