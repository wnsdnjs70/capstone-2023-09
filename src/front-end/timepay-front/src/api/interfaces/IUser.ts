import { GetPageableData, PageableData } from './ICommon';
import { IBoard } from './IPost';

export interface IUser {
  userPk: number;
  name: string; // 이름
  sex: string; // 성별
  birthday: string; // 생년월일
  profileImage?: string;
  nickname: string;
  region: string;
  profileMessage?: string;
  phoneNumber: string;
  createdAt: string; // 계정생성일
  accountEmail: string;
  isAdmin: boolean; // 관리자 여부
}

export interface IGetUserBoardRequest extends GetPageableData {
  boardStatus?:
    | 'ACTIVITY_CANCEL'
    | 'ACTIVITY_COMPLETE'
    | 'ACTIVITY_DELAY'
    | 'ACTIVITY_IN_PROGRESS'
    | 'FREE_BOARD'
    | 'MATCHING_COMPLETE'
    | 'MATCHING_IN_PROGRESS';
}

export interface IDealBoards extends PageableData {
  content: IBoard[];
}

export interface IGetUserBoardResponse {
  id: number;
  image_url: string;
  nick_name: string;
  location: string;
  introduction: string;
  time_pay: number;
  deal_boards: IDealBoards;
}
