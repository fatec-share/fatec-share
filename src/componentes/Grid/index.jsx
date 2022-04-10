import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#2f2841",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
<Box sx={{ flexGrow: 1 }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>
      <Item>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9100d753-02ac-4ed8-ac98-5e45d6deecad/df2ust4-5ae90084-7fa2-4380-8189-fd95116df928.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkxMDBkNzUzLTAyYWMtNGVkOC1hYzk4LTVlNDVkNmRlZWNhZFwvZGYydXN0NC01YWU5MDA4NC03ZmEyLTQzODAtODE4OS1mZDk1MTE2ZGY5MjguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Wz6Bm83wFceec0g6EG5Kd2ldGiKhTa26Hgeqgbl4L_c"></img>
      </Item>
    </Grid>
    <Grid item xs={6}>
      <Item>
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9100d753-02ac-4ed8-ac98-5e45d6deecad/df2ust4-5ae90084-7fa2-4380-8189-fd95116df928.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkxMDBkNzUzLTAyYWMtNGVkOC1hYzk4LTVlNDVkNmRlZWNhZFwvZGYydXN0NC01YWU5MDA4NC03ZmEyLTQzODAtODE4OS1mZDk1MTE2ZGY5MjguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Wz6Bm83wFceec0g6EG5Kd2ldGiKhTa26Hgeqgbl4L_c"></img>
      </Item>
    </Grid>
    <Grid item xs={6}>
      <Item>
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9100d753-02ac-4ed8-ac98-5e45d6deecad/df2ust4-5ae90084-7fa2-4380-8189-fd95116df928.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkxMDBkNzUzLTAyYWMtNGVkOC1hYzk4LTVlNDVkNmRlZWNhZFwvZGYydXN0NC01YWU5MDA4NC03ZmEyLTQzODAtODE4OS1mZDk1MTE2ZGY5MjguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Wz6Bm83wFceec0g6EG5Kd2ldGiKhTa26Hgeqgbl4L_c"></img>
      </Item>
    </Grid>
    <Grid item xs={6}>
      <Item>
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9100d753-02ac-4ed8-ac98-5e45d6deecad/df2ust4-5ae90084-7fa2-4380-8189-fd95116df928.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkxMDBkNzUzLTAyYWMtNGVkOC1hYzk4LTVlNDVkNmRlZWNhZFwvZGYydXN0NC01YWU5MDA4NC03ZmEyLTQzODAtODE4OS1mZDk1MTE2ZGY5MjguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Wz6Bm83wFceec0g6EG5Kd2ldGiKhTa26Hgeqgbl4L_c"></img>
      </Item>
    </Grid> 
  </Grid>
</Box>
  );
}