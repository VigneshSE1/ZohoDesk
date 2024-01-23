export interface userDetails {
  clientId: string;
  clientSecret: string;
  userId: string;
  applicationId: string;
  userScore?: number;
  switchToTab?: any;
  profileImageUrl?: string;
  userInfo?: any;
  redemptionEnabled: boolean;
}
export interface User {
  id?: string;
  userId?: string;
  userName?: string;
  phoneNumber?: string;
  application?: string[];
  email?: string;
  customAttributes?: {
    [key: string]: string[];
  };
  client?: string;
  role?: string;
  profileImageUrl?: string;
}

export interface UserInput {
  userId: string;
  appId: string;
}
