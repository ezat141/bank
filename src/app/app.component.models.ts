export interface ICourse {
  id: number;
  description: string;
  imageUrl: string;
  lessonsCount: number;
  longDescription: string;
  category: CategoryType;
}

export enum CategoryType{
  begineers = 1,
  advanced = 2
}
