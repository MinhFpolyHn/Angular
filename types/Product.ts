export type Product = {
  id: number, // nếu dùng nodejs thì là string
  name: string,
  price:number,
  img:string,
  status: number
};

export type ProductCreate = {
  name?: string,
  status?: number
};
export type ProductCart = {
  id: number,
  name: string,
  value: number
};