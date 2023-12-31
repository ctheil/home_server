"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const govee_1 = require("../controllers/govee");
const express_validator_1 = require("express-validator");
const validation_1 = require("../utils/validation");
const router = (0, express_1.Router)();
router.get("/bulb/state/:deviceName", govee_1.getState);
router.post("/bulb/state/:deviceName", (0, express_validator_1.checkSchema)(validation_1.goveeStateSchema), govee_1.setBulbState);
router.get("/strip/state/:deviceName", govee_1.getStripState);
router.post("/strip/state/:deviceName", govee_1.setStripState);
router.get("/group/state/:groupName", govee_1.getGroupState);
router.post("/group/state/:groupName", govee_1.setGroupState);
exports.default = router;
