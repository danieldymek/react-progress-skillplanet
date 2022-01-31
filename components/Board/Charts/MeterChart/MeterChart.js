import React from "react";
import classes from "./MeterChart.module.css";
import BadgeGrid from "../../../UI/BadgeGrid";
import NavItem from "../../../Navigation/NavItem/NavItem";
import {useSelector} from "react-redux";
const MeterChart = (props) => {
  const isDataReady = useSelector((state) => state.db.length > 0);
  const chartData = useSelector((state) => state.db.chartData).map(
    (callback) => {
      return {...callback};
    }
  );
  const data = chartData;
  data.forEach((c, index) => {
    data[index].color = Math.random().toString(16).substr(-6);
  });

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <div className={classes.chart}>
          <div className={classes.header}>
            <h3>Performance</h3>
          </div>
          {isDataReady && (
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <div style={{width: "50%"}}>
                <h1>No data</h1>
                <h2>Add new record!</h2>
                <NavItem children="New Record" to={"new-record"} />
              </div>
            </div>
          )}

          <div className={classes.indicators}>
            <BadgeGrid
              items={data.map((callback) => {
                return (
                  <div
                    key={JSON.stringify(callback)}
                    className={classes.indicator}
                  >
                    <div
                      className={classes.dot}
                      style={{backgroundColor: "#" + callback.color}}
                    ></div>
                    <div className={classes.text}>{callback.name}</div>
                    <div className={classes.text}>({callback.episode})</div>
                  </div>
                );
              })}
            />
          </div>
          <div className={classes.barContainer}>
            {data.map((callback) => {
              const percent = Math.round((callback.episode / 280) * 100);
              return (
                <div key={JSON.stringify(callback)} className={classes.group}>
                  {/* <div style={{width: "40px"}}> {callback.episode}</div> */}
                  <div className={classes.bar}>
                    <div
                      className={classes.percentage}
                      style={{
                        width: `${percent > 100 ? 100 : percent}%`,
                        backgroundColor: "#" + callback.color,
                      }}
                    ></div>
                  </div>
                  <div style={{width: "50px"}}>{`${percent}%`}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeterChart;
