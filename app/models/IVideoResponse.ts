import type { IUser } from "./IUser";

export interface IVideoResponse {
  page: number;
  per_page: number;
  videos: IVideo[];
  total_results: number;
  next_page: string;
  url: string;
}

export interface IVideo {
  id: number;
  width: number;
  height: number;
  duration: number;
  url: string;
  image: string;
  user: IUser;
  video_files: IVideoFile[];
  video_pictures: IVideoPicture[];
}

export interface IVideoFile {
  id: number;
  quality: string;
  file_type: string;
  width: number;
  height: number;
  fps: number;
  link: string;
  size: number;
}

export interface IVideoPicture {
  id: number;
  nr: number;
  picture: string;
}
