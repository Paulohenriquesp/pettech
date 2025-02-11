import { FastifyRequest, FastifyReply } from 'fastify'

export async function validateJwt(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const route = request.routeOptions?.url || request.url
    const method = request.method

    if (route === '/user' && method === 'POST') return

    await request.jwtVerify()
  } catch (error) {
    reply.status(401).send({ message: 'Unauthorized' })
  }
}
