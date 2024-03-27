"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import CardDataStats from "../CardDataStats";
import TableOne from "../Tables/TableOne";

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats
          title="Revenue"
          total="$56,915"
          rate="+ 45%"
          levelUp
        ></CardDataStats>
        <CardDataStats
          title="Users"
          total="76.8%"
          rate="- 1.7%"
          levelDown
        ></CardDataStats>
        <CardDataStats
          title="New Signups"
          total="116"
          rate="0.00"
          newSignUp
        ></CardDataStats>
        <CardDataStats
          title="Retention"
          total="12.67%"
          rate="+ 0.6%"
          levelUp
        ></CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="xl:col-span-15 col-span-12">
          <ChartOne />
        </div>
        <div className="xl:col-span-15 col-span-12">
          <TableOne />
        </div>
      </div>
    </>
  );
};

export default ECommerce;
