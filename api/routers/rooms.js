import express from "express"
import { 
    createRoom, 
    updateRoom, 
    deleteRoom, 
    getRoom, 
    getAllRoom, 
    updateRoomAvailable
} from "../controller/roomController.js"
import { verifyAdmin } from "../others/verifyAdmin.js"

const router = express.Router()

// CREATE ROOM
router.post("/:hotelId", verifyAdmin, createRoom)

// UPDATE ROOM
router.put("/:id", verifyAdmin, updateRoom)
router.put("/available/:roomNumberId", updateRoomAvailable)

// DELETE ROOM
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom)

// GET ROOM
router.get("/:id", getRoom)

// GET ALL ROOM
router.get("/", getAllRoom)

export default router