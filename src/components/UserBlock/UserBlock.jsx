import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { SideBlock } from "../SideBlock";
import { Avatar, List, ListItem, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import style from "./UserBlock.module.scss";

export const UserBlock = ({ fullName, email }) => {
  return (
    <SideBlock className={style.root} title="Your profile">
      <div className={style.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
        <span>{fullName}</span>
        <br />
        <span>{email}</span>
      </div>
    </SideBlock>
  );
};
