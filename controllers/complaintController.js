const Complaint = require("../models/complaints");

exports.getComplaints = async(req,res,next)=> {
    try {
        const complaints  = await Complaint.find();
        res.status(200).json(complaints);
    } catch(err) {
        next(err);
    }
}

exports.getComplaint = async(req,res,next) => {
    try {
        const id = req.params.id;
        const complaint = await Complaint.findById(id);

        if(!complaint) {
            return res.status(404).json({
                message: "Complaint not found"
            });
        }
    } catch(err) {
        next(err);
    }
}

exports.createComplaint = async(req,res,next) => {
    try {
        const {title,severity} = req.body;

        if(!title) {
            return res.status(400).json({
                message: "Title is Invalid"
            })
        }

        if(!severity) {
            return res.status(400).json({
                message: "Severity is invalid"
            })
        }

        const complaint = await Complaint.create(req.body);
        res.status(201).json(complaint);
    } catch(err) {
        next(err);
    }
};

exports.updateComplaint = async (req,res,next) => {
    try {
        const id = req.params.id;
        const complaint = await Complaint.findByIdAndUpdate(id,req.body, {
            returnDocument:"after",runValidators:true
        });
        if(!complaint) {
            return res.status(404).json({
                message: "Complaint not found"
            });
        }
        res.status(200).json(complaint);
    } catch(err) {
        next(err);
    }
};

exports.deleteComplaint = async(req, res) => {
    try {
        const id = req.params.id;
        const complaint = await Complaint.findByIdAndDelete(id);

        if(!complaint) {
            return res.status(404).json({
                message: "Complaint not found"
            });
        }
        res.status(200).json({
            message: "Complaint deleted Successfully"
        })
    } catch(err) {
        next(err);
    }
};