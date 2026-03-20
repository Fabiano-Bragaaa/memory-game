export type AuthStorageType = {
  user: UserType | null;
  setUser: (name: string) => void;
  logout: () => void;
};

export type UserType = {
  id: string;
  name: string;
  createdAt: string;
};
