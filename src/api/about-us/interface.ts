export interface RatingPayload {
  userId: string;
  rating: number;
  desc: string;
}

export type RatingType = {
  id: string;
  name: string;
  phone: string;
  email: string;
  companyName: string;
  country: string;
  jobTitle: string;
  jobDetail: string;
  rating: number;
  ratingDesc?: string | null;
  createdAt: string;
  updatedAt: string;
};
