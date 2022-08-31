export interface TextfieldWrapperProps {
    label: string;
    placeholder: string;
}

export interface CardWrapperProps {
    image: any;
    title: string;
    description: string;
}

export interface PaginationProps {
    page: number;
}

export interface PageProps {
    setPage: React.Dispatch<React.SetStateAction<number>>;
}