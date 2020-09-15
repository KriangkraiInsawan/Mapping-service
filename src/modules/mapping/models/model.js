'use strict';
// use model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MappingSchema = new Schema({
    name: {
        type: String,
        required: 'Please fill a Mapping name',
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    },
    createby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    },
    updateby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    }
});
MappingSchema.pre('save', function(next){
    let Mapping = this;
    const model = mongoose.model("Mapping", MappingSchema);
    if (Mapping.isNew) {
        // create
        next();
    }else{
        // update
        Mapping.updated = new Date();
        next();
    }
    
    
})
mongoose.model("Mapping", MappingSchema);