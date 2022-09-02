import { Card } from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <Card className="ft-card">
        <div className="ft-head">
          <span className="title">Total Revenue</span>
          <span className="ft-icon">
            <MoreVertOutlinedIcon />
          </span>
        </div>
        <div className="ft-body">
          <div>
            <CircularProgressbar
              value={70}
              text={`${70}%`}
              strokeWidth={5}
              className="ft-chart"
            />
          </div>
          {/* <div> */}
          <span className="ft-des">Total slaes made today</span>
          <span className="ft-dol">$430</span>
          {/* </div> */}
        </div>
        <div className="ft-footer">
          <p>Previous transaction processing. Last payment may not inclueded</p>
          <div className="items">
            <div className="item">
              <div>Target</div>
              <div className="ft-ta negative">
                <ExpandMoreOutlinedIcon /> $12.43
              </div>
            </div>
            <div className="item">
              <div>Last Week</div>
              <div className="ft-ta positive">
                <KeyboardArrowUpOutlinedIcon /> $12.43
              </div>
            </div>
            <div className="item">
              <div>Last Month</div>
              <div className="ft-ta positive">
                <KeyboardArrowUpOutlinedIcon /> $12.43
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Featured;
