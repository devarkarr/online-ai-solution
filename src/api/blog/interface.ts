export interface BlogType {
  id: string;
  title: string;
  body: string;
  createdById: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  files: { path: string }[];
}
