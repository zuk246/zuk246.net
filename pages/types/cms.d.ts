type Image = {
    url: string;
    height: number;
    width: number;
};

export type Works = {
    contents?: {
        id: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        revisedAt: string;
        title: string;
        icon: Image;
        image: Image;
        caption: string;
        release: string;
        running: boolean;
        url: string;
        explanation: string;
    }[];
    totalCount?: number;
    offset?: number;
    limit?: number;
    message?: string;
};
