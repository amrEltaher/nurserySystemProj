const {Schema, default: mongoose} = require('mongoose');
const bycrypt = require('bcrypt');
const teacherSchema = new Schema ({
  name: { type: String,  
    required: true
  },
  email: { type: String,
    required: true
  },
  password: { type: String,
    required: true
  },
  image: { type: String,
    required: true
  } 
});

teacherSchema.pre('save', async function(next){
  const salt = await bycrypt.genSalt(10);
  this.password = await bycrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('teacher', teacherSchema);