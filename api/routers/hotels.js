import express from "express"
import { 
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    getAllHotel,
    countByCity
} from "../controller/hotelsController.js"
import { verifyAdmin } from "../others/verifyAdmin.js"

const router = express.Router()

// CREATE
router.post("/", createHotel)

// UPDATE
router.put("/:hotelId", verifyAdmin, updateHotel)

// DELETE
router.delete("/:hotelId", verifyAdmin, deleteHotel)

// GET
router.get("/find/:hotelId", getHotel)

// GET ALL
router.get("/", getAllHotel)
router.get("/countByCity", verifyAdmin, countByCity)

export default router