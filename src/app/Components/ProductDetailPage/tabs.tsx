
'use client';
import React, { FC, useState } from "react";

type TabsProps = {
  tabs: {
    label: string;
    index: number;
    Component: FC<{ index: number }>;
  }[];
  selectedTab: number;
  onClick: (index: number) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
};

const Tabs: FC<TabsProps> = ({
  className = "tabs-component",
  tabs = [],
  selectedTab = 0,
  onClick,
  orientation = "horizontal"
}) => {
  // Find the selected tab using the selectedTab value
  const selectedTabInfo = tabs.find((tab) => tab.index === selectedTab);

  // Check if the selected tab is valid
  const Panel = selectedTabInfo ? selectedTabInfo.Component : null;

  return (
    <div className={orientation === "vertical" ? className + " vertical" : className}>
      <div role="tablist" className="px-4 py-2 bg-themeGray mb-8 rounded-xl">
        {tabs.map((tab) => (
          <button className={selectedTab === tab.index ? "active bg-themeBlue text-white px-6 py-1 rounded-xl" : " text-gray-600 px-6 py-1 rounded-lg mx-2 font-medium"}
            onClick={() => onClick(tab.index)}
            key={tab.index}
            type="button"
            role="tab"
            // aria-selected={selectedTab === tab.index}
            aria-controls={`tabpanel-${tab.index}`}
            tabIndex={selectedTab === tab.index ? 0 : -1}
            id={`btn-${tab.index}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel" className="TabContent px-1"
        aria-labelledby={`btn-${selectedTab}`}
        id={`tabpanel-${selectedTab}`}
      >
        {Panel && <Panel index={selectedTab} />}
      </div>
    </div>
  );
};

export default Tabs;
