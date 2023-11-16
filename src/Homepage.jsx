import SearchBar from "./SearchBar"
import ListItemSpaciel from "./ListItemSpecial";
import Sidebar from "./SideBar";
import UserMenu from "./UserMenu"
import React from "react";

export default function Homepage() {
    return (
        <>
            <div style={{ background: '#21213E', minHeight: '100vh' }}>
                <Sidebar />
                <UserMenu />
                <ListItemSpaciel />
                <SearchBar />
            </div>
        </>
    );
}