import { plainToInstance } from "class-transformer";
import config from "../config";
import ProductDto from "../Dtos/productDto";
import { getJsonAync } from "../help/helper";

export async function getProductsAsync() {
  try {
    const jsonData = await getJsonAync(`${config.API_URL}products`);

    const products: ProductDto[] = plainToInstance(
      ProductDto,
      jsonData.products as Object[]
    );

    if (!products) throw new Error("Cannot map from object to productDto.");

    return products;
  } catch (error) {
    throw error;
  }
}
