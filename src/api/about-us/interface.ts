export interface RatingPayload {
  name: string;
  rating: number;
  feedback: string;
}

export type RatingType = {
  id: string;
  feedback: string;
  rate: number;
  ratedBy: string;
  createdAt: string;
  updatedAt: string;
};
