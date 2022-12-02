import Hotel from "../models/hotelsModel.js"

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)

    try {
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (err) {
        next(err)
    }
}

export const updateHotel = async (req, res, next) => {
    const hotelId = req.params.hotelId

    try {
        const updateHotel = await Hotel.findByIdAndUpdate(hotelId, { $set: req.body }, { new: true })
        res.status(200).json(updateHotel)
    } catch (err) {
        next(err)
    }
}

export const deleteHotel = async (req, res, next) => {
    const hotelId = req.params.hotelId

    try {
        await Hotel.findByIdAndDelete(hotelId)
        res.status(200).json("Delete Hotel Done!")
    } catch (err) {
        next(err)
    }
}

export const getHotel = async (req, res, next) => {
    const hotelId = req.params.hotelId

    try {
        const hotelInfo = await Hotel.findById(hotelId)
        res.status(200).json(hotelInfo)
    } catch (err) {
        next(err)
    }
}

export const getAllHotel = async (req, res, next) => {
    try {
        const listHotels = await Hotel.find()
        res.status(200).json(listHotels)
    } catch (err) {
        next(err)
    }
}

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")

    try {
        const listCount = await Promise.all(cities.map(city =>
            Hotel.countDocuments({ city: city })
        ))
        res.status(200).json(listCount)
    } catch (err) {
        next(err)
    }
}