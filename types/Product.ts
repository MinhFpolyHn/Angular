export type Product = {
  _id: number, // nếu dùng nodejs thì là string
  name: string,
  price:number,
  img:string,
  desc:string,
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