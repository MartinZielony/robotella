import { config } from 'dotenv'
import { resolve } from 'path'
console.log("Hola Robotella!");

config({ path: resolve(__dirname, '..', '.env') })

import "./client"