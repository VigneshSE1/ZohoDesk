export interface UserRank {
  _id: string;
  rank: number;
  userId: string;
  userName: string;
  profileImageUrl: string;
  score: number;
  application: string;
  userReward?: UserReward;
}

export interface ILeaderBoard {
  Items: UserRank[];
  TotalCount?: number;
}

interface UserReward {
  _id: string;
  value: string;
  lookupItemId: string;
  sourceImgUrl: string;
  dataType: number;
  description: string;
  order: number;
  imageAnimationUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
