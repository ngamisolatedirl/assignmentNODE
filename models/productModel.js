const mongoose = require('mongoose')

const productCollection = mongoose.Schema(
    {
        ProductCode: {
            type: String,
            required: true,
        },
        ProductName: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        ProductDate: {
            type: String,
            required: true
        },

        ProductOriginPrice: {
            type: Number,
            required: true
        },
        Quantity: {
            type: String,
            required: true
        },
        ProductStoreCode: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product', productCollection);

module.exports = Product;