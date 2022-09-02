import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Grid, Box } from "@mui/material";
import "./home.scss";
import Charts from "../../components/charts/Charts";
import Featured from "../../components/featured/Featured";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={3} md={3} sm={6} xs={6}>
                <Widget
                  HeaderTitle={"USERS"}
                  HeaderRatio={"20%"}
                  Count={110}
                  BottomAll={"See All Users"}
                  BadgeDetails={<PersonOutlineOutlinedIcon />}
                  BadgeBgColor={"red"}
                />
              </Grid>
              <Grid item xs={3} md={3} sm={6} xs={6}>
                <Widget
                  HeaderTitle={"Orders"}
                  HeaderRatio={"20%"}
                  Count={110}
                  BottomAll={"View All Orders"}
                  BadgeDetails={<PaidOutlinedIcon />}
                  BadgeBgColor={"red"}
                />
              </Grid>
              <Grid item xs={3} md={3} sm={6} xs={6}>
                <Widget
                  HeaderTitle={"Earnings"}
                  HeaderRatio={"20%"}
                  Count={"$150"}
                  BottomAll={"View all earnings"}
                  BadgeDetails={<PaidOutlinedIcon />}
                  BadgeBgColor={"red"}
                />
              </Grid>
              <Grid item xs={3} md={3} sm={6} xs={6}>
                <Widget
                  HeaderTitle={"Balance"}
                  HeaderRatio={"20%"}
                  Count={"130"}
                  BottomAll={"See Details"}
                  BadgeDetails={<AccountBalanceWalletOutlinedIcon />}
                  BadgeBgColor={"red"}
                />
              </Grid>
            </Grid>
          </Box>
        </div>
        <div className="charts">
          <Grid container spacing={3}>
            <Grid item xs={4} md={4} sm={6} xs={6}>
              <Featured />
            </Grid>
            <Grid item xs={8} md={8} sm={6} xs={6}>
              <Charts />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home;
