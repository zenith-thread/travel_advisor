import React from "react";

import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// styled components
import { Search, SearchIconWrapper, StyledInputBase } from "./Header.styles";

const Header = React.memo(() => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Travel Advisor
        </Typography>

        <Box display="flex" alignItems="center">
          <Typography variant="h6" sx={{ mr: 3 }}>
            Explore new places
          </Typography>

          {/* <Autocomplete>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
            </Search>
          </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
});

export default Header;
