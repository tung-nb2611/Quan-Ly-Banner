import React from 'react'
import styled from 'styled-components';
import Avatar from "@mui/material/Avatar";

export default function Navbar() {
  return (
    <NavBarWrapper>
        <UsernameWrapper>
            Admin
        </UsernameWrapper>
        <UserAvatarWrapper>
            <Avatar
                alt="corgi"
                src="https://thumbs.dreamstime.com/b/admin-sign-laptop-icon-stock-vector-166205404.jpg"
                />
        </UserAvatarWrapper>{" "}
    </NavBarWrapper>
  )
}

export const NavBarWrapper = styled.nav`
    height: 56px;
    display: flex;
    background: #CCE7FF;
`;

export const UsernameWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-right: 2.6rem;
    font-size: 24px;
    font-family: sans-serif;
    font-weight: bold;
`;

export const UserAvatarWrapper = styled.div `
    position: absolute;
    top: 8px;
    right: 0px;
    text-align: right;
    padding-right: 20px;
    cursor: pointer
`;

