const express = require("express");
const router = express.Router();
const Complaint = require("../models/complaints");
const c = require("../controllers/complaintController");

router.get("",c.getComplaints);

router.get("/:id",c.getComplaint);

router.post("",c.createComplaint);

router.put("/:id",c.updateComplaint);

router.delete("",c.deleteComplaint);

module.exports = router;