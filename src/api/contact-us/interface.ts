export interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  companyName: string;
  country: string;
  jobTitle: string;
  jobDetail: string;
}



export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  companyName: string;
  country: string;
  jobTitle: string;
  jobDetail: string;
  rating: number;
  ratingDesc: string | null;
  createdAt: string;
  updatedAt: string;
}
