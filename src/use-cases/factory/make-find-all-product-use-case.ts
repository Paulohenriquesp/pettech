import { ProductRepository } from '@/repositories/typeorm/product.repository'
import { FindAllProductsUseCase } from '../find-all-products'

export function makeFindAllProductUseCase() {
  const productRepository = new ProductRepository()

  const findAllProductsUseCase = new FindAllProductsUseCase(productRepository)

  return findAllProductsUseCase
}
