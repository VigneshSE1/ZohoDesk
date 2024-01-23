export interface IBalance {
  id: string;
  name: string;
  balance: string;
  imageUrl: string;
}

export interface IWallet {
  balance: IBalance[];
  gamificationUserId: string;
  gamificationUserName: string;
}
