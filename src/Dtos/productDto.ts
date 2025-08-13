class ProductDto {
  id: number = 0;
  title: string = "";
  description: string = "";
  category: string = "";
  price: number = 0;
  images: string[] = [];

  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    images: string[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;
    this.images = images;
  }
}

export default ProductDto;
