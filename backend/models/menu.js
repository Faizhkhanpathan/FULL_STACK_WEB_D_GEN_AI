import mongoose from 'mongoose';
const menuItemSchema =new mongoose.Schema({
    name: {
        type : String,
        required:true
    },
    number:{
        type:Number,
        required:true
    }
})

const Menu = mongoose.model('Menu', menuItemSchema);

export default Menu;