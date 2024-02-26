const {Schema} = require('mongoose');

const childSchema = new Schema ({
  id: {
    type: Number,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  address: {
    city: {
      type: String,
      required: true
    },
    street: {
      type: String,
      required: true
    },
    building: {
      type: String,
      required: true
    }
  },
 level: {
   type: String,
   required: true
 }
});


module.exports = mongoose.model('Child', childSchema);

