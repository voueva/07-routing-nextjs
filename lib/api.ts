import { Note } from "@/types/note";
import axios from "axios";

export type Tag =
    'Work' |
    'Personal' |
    'Meeting' |
    'Shopping' |
    'Todo';

export const TagList: Array<Tag | 'All'> = [
    'All',
    'Work',
    'Personal',
    'Meeting',
    'Shopping',
    'Todo'
];

export interface NoteListParams  {
    page: number;
    perPage: number;
    search?: string;
    tag?: Tag;
}
export interface NoteListResponse {
    notes: Array<Note>;
    totalPages: number;
}

// https://notehub-public.goit.study/api/docs/

const API_URL = 'https://notehub-public.goit.study/api/notes';

const perPage = 10;

export const fetchNotes = async (search: string, page: number, tag?: Tag | null): Promise<NoteListResponse> => {
    let params: NoteListParams = {
        page,
        perPage
    };

    if (search) {
        params = {
            ...params,
            search
        };
    }

    if (tag) {
        params = {
            ...params,
            tag
        };
    }

    try {
        const response = await axios.get<NoteListResponse>(API_URL, {
            params,
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
                accept: 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const createNote = async (
    title: string,
    content: string,
    tag: string
): Promise<Note> => {
    try {
        const response = await axios.post<Note>(API_URL, {
            title,
            content,
            tag
        }, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
                accept: 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const deleteNote = async (id: string): Promise<Note> => {
    try {
        const response = await axios.delete<Note>(`${API_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
                accept: 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const getSingleNote = async (id: string) => {
    try {
        const response = await axios.get<Note>(`${API_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
                accept: 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const getCategories = async () => {
    const res = await axios<Category[]>('/categories');
    return res.data;
};
