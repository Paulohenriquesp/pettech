import { ProductRepository } from '@/repositories/typeorm/product.repository'
import { FindProductUseCase } from '../find-products'

export function makeFindProductUseCase() {
  const productRepository = new ProductRepository()

  const findProductsUseCase = new FindProductUseCase(productRepository)

  return findProductsUseCase
}
