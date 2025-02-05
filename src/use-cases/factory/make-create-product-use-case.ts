import { ProductRepository } from '@/repositories/typeorm/product.repository'
import { CreateProductUseCase } from '../create-product'

export function makeCreateProductUseCase() {
  const productRepository = new ProductRepository()
  const makeCreateProductUseCase = new CreateProductUseCase(productRepository)

  return makeCreateProductUseCase
}
