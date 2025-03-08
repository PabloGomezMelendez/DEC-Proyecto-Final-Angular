export interface Imanga {
    id: string;
    titles: string[];
    title: string;
    images: {jpg: {image_url:string}, webp: {image_url:string}};
    synopsis: string;
    episodes: number;
    status: string;
    trailer_url: string;
    genres: string[];
    themes: string[];
    demographics: string;
    url: string;

}
