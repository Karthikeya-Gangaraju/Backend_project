const mongoose = require("mongoose");
const complaintSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    severity: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    type: {
        type: String,
        default: "other"

    },
    resolved: {
        type: Boolean,
        default: false
    },
    raisedOn: {
        type: Date,
        default: "06-10-2026"
    }
},{
    timestamps: true
});

module.exports = mongoose.model("Complaint",complaintSchema)