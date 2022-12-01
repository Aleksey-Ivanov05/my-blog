export interface FullPostType {
  datetime: string;
  id: string;
  title: string;
  body: string;
}

export type PostType = Omit<FullPostType, 'body'>;

export interface PostsList {
  [id: string]: FullPostType;
}