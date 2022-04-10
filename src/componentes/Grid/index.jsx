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
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>
      <Item>
        <img width={768} height={432} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9100d753-02ac-4ed8-ac98-5e45d6deecad/df2ust4-5ae90084-7fa2-4380-8189-fd95116df928.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkxMDBkNzUzLTAyYWMtNGVkOC1hYzk4LTVlNDVkNmRlZWNhZFwvZGYydXN0NC01YWU5MDA4NC03ZmEyLTQzODAtODE4OS1mZDk1MTE2ZGY5MjguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Wz6Bm83wFceec0g6EG5Kd2ldGiKhTa26Hgeqgbl4L_c"></img>
      </Item>
    </Grid>
    <Grid item xs={6}>
      <Item>
      <img width={768} height={432} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/550191bd-b6a1-429c-8a75-8f0e107e236a/df31dlm-92cd872f-fff4-402d-9713-726b1011c573.jpg/v1/fill/w_1280,h_706,q_75,strp/sylvie_the_forest_wanderer___by_ogipavkovic_df31dlm-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzA2IiwicGF0aCI6IlwvZlwvNTUwMTkxYmQtYjZhMS00MjljLThhNzUtOGYwZTEwN2UyMzZhXC9kZjMxZGxtLTkyY2Q4NzJmLWZmZjQtNDAyZC05NzEzLTcyNmIxMDExYzU3My5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.XfflKWy6x6K2mVnJclobxfJW5gFwCTMHU3TKUQXV2pQ"></img>
      </Item>
    </Grid>
    <Grid item xs={6}>
      <Item>
      <img width={768} height={432} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4944b658-f915-4d33-90d0-eb567ca6002d/dezxiag-a9f06153-2699-410c-929a-41820fda73c1.png/v1/fill/w_1280,h_720,strp/dreamhop_commission___nowhere_somewhere_lofi_mix_by_antoinettestoll_dezxiag-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNDk0NGI2NTgtZjkxNS00ZDMzLTkwZDAtZWI1NjdjYTYwMDJkXC9kZXp4aWFnLWE5ZjA2MTUzLTI2OTktNDEwYy05MjlhLTQxODIwZmRhNzNjMS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.S0zy2Mm7r8jMlFS8hiILBKqSOF_NEAPTLd17t3Pa_Oo"></img>
      </Item>
    </Grid>
    <Grid item xs={6}>
      <Item>
      <img width={768} height={432} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bbc18909-eeaa-4656-8f07-0a5c57412dfb/dekftjb-fba5c40e-fbc4-4eac-92d6-a1d355c790bb.jpg/v1/fill/w_1024,h_596,q_75,strp/projectm_gametopia_pre_production_concept_by_olabukoo_dekftjb-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTk2IiwicGF0aCI6IlwvZlwvYmJjMTg5MDktZWVhYS00NjU2LThmMDctMGE1YzU3NDEyZGZiXC9kZWtmdGpiLWZiYTVjNDBlLWZiYzQtNGVhYy05MmQ2LWExZDM1NWM3OTBiYi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Z5Vog75jbnX0uI981KaGDCE4LRJvlGlbp_35lgo3zcU"></img>
      </Item>
    </Grid> 
  </Grid>
</Box>
  );
}