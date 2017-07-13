export interface IOrganization {
  id?: string;
  name: string;
  slug: string;
  email: string;
  phone: string;
  url: string;
  address: any,
  description: string,
  image: string,
  standardPrice: number,
  reducedPrice: number,
}
