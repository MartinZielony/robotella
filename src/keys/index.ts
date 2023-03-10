import { Keys } from '../types'
const keys: Keys = {
    clientToken: process.env.CLIENT_TOKEN ?? 'nil'
}

if (Object.values(keys).includes('nil'))
    throw new Error('No todas las variables de ENV estan definidas.')

export default keys