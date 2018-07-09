import { Bookmark } from './bookmark';
import { Author } from './author';

export interface Tag {
    id?: string;
    label: string;
    bookmarks: Bookmark[];
    author: Author;
}
