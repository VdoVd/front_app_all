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

//home tabs list
export interface homeTabListItem {
    tagName: string;
    nameColor: string;
    borderColor: string;
}

export interface TabListData {
    id: number;
    name: string;
    icon?: string;
    describeInfo?: string;
    displayNewestFlag: number;
    tags?: homeTabListItem[];
}

//subListItem
export interface subListData {
    id: string;
    questionNo: string;
    stem: string;
    content: string;
    stemAttachmentId: string;
    subjectName: string;
    questionType: number;
    planSceneName: string;
    difficulty: number;
    createdAt: string;
    views: number;
    likeCount: number;
    likeFlag: number;
    creatorAvatar: string;
    creatorName: string;
    readFlag: number;
}

export interface subList {
    total: number;
    pageTotal: number;
    rows: subListData[];
}


//question detail
export interface RelatedQuestion {
    id: string;
    questionNo: string;
    stem: string;
    createdAt: string;
}

export interface questionDetailData {
    stem: string;
    id: string;
    content: string;
    answer: string;
    difficulty: number;
    stage: string[];
    collectFlag: number;
    likeFlag: number;
    likeCount: number;
    creatorName: string;
    creatorAvatar: string;
    views: number;
    createdAt: string;
    relatedQuestions: RelatedQuestion[];
}
