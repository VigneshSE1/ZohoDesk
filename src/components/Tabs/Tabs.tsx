import React, { FC, useState } from "react";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import Achievement from "../Achievements/Achievements";
import TabStyles from "./Tabs.styles";
import { userDetails } from "../../models/UserDetails";

const Tabs: FC<userDetails> = (props) => {
	const handleClick = (tabIndex: number) => {
		setActiveTab(tabIndex);
	};
	const [activeTab, setActiveTab] = useState(0);
	const tabNames = ["Achievement", "LeaderBoard"];
	const switchToTab = (tabIndex: number) => {
		setActiveTab(tabIndex);
	};
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
			<div>
				{activeTab === 0 ? (
					<Achievement
						userId={props.userId}
						applicationId={props.applicationId}
						clientId={props.clientId}
						clientSecret={props.clientSecret}
						userScore={props.userScore}
						switchToTab={switchToTab}
					/>
				) : (
					<LeaderBoard
						userId={props.userId}
						applicationId={props.applicationId}
						profileImageUrl={props.profileImageUrl}
					/>
				)}
			</div>
		</TabStyles.TabContainer>
	);
};

export default Tabs;
