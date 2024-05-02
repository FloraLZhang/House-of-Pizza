type UserProfile = {
  _id?: string;
  name: string;
  email?: string;
  image: string;
  phone: string;
  streetAddress: string;
  zipcode: string;
  city: string;
  state: string;
  isAdmin: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export default UserProfile;