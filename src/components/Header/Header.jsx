import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  ClickAwayListener,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Search, SearchIconWrapper, StyledInputBase } from "./Header.styles";

const Header = React.memo(({ onSearchChange, onSearchSelect, suggestions }) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    onSearchChange(val);
    setOpen(true);
  };

  const handleSelect = (place) => {
    setQuery(place.name);
    onSearchSelect(place);
    setOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Travel Advisor
        </Typography>

        <Box position="relative" display="flex" alignItems="center">
          <Typography variant="h6" sx={{ mr: 3 }}>
            Explore new places
          </Typography>

          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Box>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  value={query}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "search" }}
                  onFocus={() => setOpen(true)}
                />
              </Search>

              {open && suggestions.length > 0 && (
                <Paper
                  elevation={3}
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    maxHeight: 250,
                    overflowY: "auto",
                    cursor: "pointer",
                  }}
                >
                  <List>
                    {suggestions.map((place, idx) => (
                      <ListItem
                        button
                        key={idx}
                        onClick={() => handleSelect(place)}
                      >
                        <ListItemText primary={place.name} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              )}

              {open && suggestions.length === 0 && query.trim() && (
                <Paper
                  elevation={3}
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    padding: 2,
                    color: "gray",
                    fontStyle: "italic",
                  }}
                >
                  No results found
                </Paper>
              )}
            </Box>
          </ClickAwayListener>
        </Box>
      </Toolbar>
    </AppBar>
  );
});

export default Header;
