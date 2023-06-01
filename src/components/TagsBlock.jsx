import { useEffect } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import TagIcon from "@mui/icons-material/Tag";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";

import { SideBlock } from "./SideBlock";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../store/actions/postsActions";

export const TagsBlock = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.posts);

  const isTagsLoading = tags.status === "loading";
  const tagsSkeletons = [...Array(5)];

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  return (
    <SideBlock title="Popular tags">
      <List>
        {(isTagsLoading ? tagsSkeletons : tags.items).map((name, i) => (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/tag/${name}`}
            key={i}
          >
            <ListItem key={i} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TagIcon />
                </ListItemIcon>
                {isTagsLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <ListItemText primary={name} />
                )}
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </SideBlock>
  );
};
