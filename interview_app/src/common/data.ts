export interface loginResponseData {
    token: string;
    refreshToken: string;
    id: string;
    username: string;
    avatar: string;
    shareInfo: string;
    nickName: string;
    totalTime: number;
    clockinNumbers: number;
}

export interface response<T> {
    success: boolean;
    code: number;
    message: string;
    data: T;
}