import React, { FC, useEffect, useState } from "react";
import { userDetails } from "../../models/UserDetails";
import TabStyles from "./Tabs.styles";
import {
  getAccessToken,
  initializeClientCredentials,
} from "../../api/TokenService";

const Tabs: FC<userDetails> = (props) => {
  const handleClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  const [activeTab, setActiveTab] = useState(0);
  const [token, setToken] = useState<string>("");
  const tabNames = ["Achievement", "LeaderBoard"];
  const switchToTab = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const getToken = async () => {
    let token = await getAccessToken();
    setToken(token);
  };

  useEffect(() => {
    getToken();
  });

  return (
    <TabStyles.TabContainer>
      <TabStyles.TabNav>
        {tabNames.map((tabName, index) => (
          <TabStyles.TabList
            key={tabName}
            className={activeTab === index ? "active" : ""}
            onClick={() => handleClick(index)}
          >
            <a>{tabName}</a>
          </TabStyles.TabList>
        ))}
      </TabStyles.TabNav>
      <div>{activeTab === 0 ? "Achivements Tab" : "LeaderBoard Tab"}</div>
    </TabStyles.TabContainer>
  );
};

export default Tabs;
