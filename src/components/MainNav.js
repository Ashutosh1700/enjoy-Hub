import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { styled } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';


const Component = styled(Box)`
width:100%;
position:fixed;
bottom:0;
cursor:pointer;
background-color:black;
z-index:100;
`

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (value === 0) navigate("/");
        else if (value === 1) navigate("/movies");
        if (value === 2) navigate("/series");
        if (value === 3) navigate("/search");
    }, [value, navigate]);

    return (
        <Component sx={{ width: 500 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
                <BottomNavigationAction label="Movies" icon={<MovieCreationIcon />} />
                <BottomNavigationAction label="TV Series" icon={<ConnectedTvIcon />} />
                <BottomNavigationAction label="Search" icon={<SearchIcon />} />
            </BottomNavigation>
        </Component>
    );
}