import mongoose from 'mongoose'
import colors from 'colors'

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    console.log(`MongoDB connected ${cached.conn.connection.host}`.blue.underline);
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(process.env.MONGO_URI, opts).then((mongoose) => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  console.log(`MongoDB connected ${cached.conn.connection.host}`.blue.underline);
  return cached.conn
}

export default dbConnect