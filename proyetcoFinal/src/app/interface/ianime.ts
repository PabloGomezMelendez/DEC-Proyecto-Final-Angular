import { Igeneros } from "./igeneros";
import { Itrailer } from "./itrailer";

export interface Ianime {
    mal_id: number;
    url: string;
    titles: string[];
    title: string;
    images: {
        jpg: {
            image_url: string,
            small_image_url: string,
            large_image_url: string
        },
        webp: {
            image_url: string,
            small_image_url: string,
            large_image_url: string
        }
    };
    synopsis: string;
    episodes: number;
    status: string;
    trailer: Itrailer;
    genres: Igeneros[];
    themes: Igeneros[];
    rating: string;
    demographics: string;
    approved: boolean;

}
