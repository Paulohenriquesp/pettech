// eslint-disable-next-line prettier/prettier
import { app } from './app'
import { env } from '@/env'
app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log('Servidor is running on http://localhost:3000')
  })
