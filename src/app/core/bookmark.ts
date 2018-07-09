import { Author } from './author';
import { Tag } from './tag';

export interface Bookmark {
    // id is optionnal (useful for creation)
    id?: string;
    title: string;
    description: string;
    link: string;
    author: Author;
    tags: Tag[];
}
