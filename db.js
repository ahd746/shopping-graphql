const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://ahd746:ahd746@cluster-kaloi.mongodb.net/ecommerce-app?retryWrites=true&w=majority'
      , {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    console.log("Connected to MongoDB");
  }
  catch (error) {
    console.log("Error: " + error);
    process.exit(1);
  }
}

module.exports = connectDB;