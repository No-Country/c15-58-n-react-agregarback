import { generarJWT } from "../helpers/jwt.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
    }
}

const getUserById = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
    }
}


export const createUser = async (req, res) => {
    try {
        const { username, fullname, email, password } = req.body
        const newUser = new User({ username, fullname, email, password })

        // encriptamos
        const salt = bcrypt.genSaltSync();
        newUser.password = bcrypt.hashSync(password, salt)

        await newUser.save()

        res.status(201).json({
            message: 'User created successfully',
            user: newUser
        })

    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
    }
}

export const loginUsuario = async (req, res) => {
    const { email, password } = req.body;
    try {

        const usuariobuscado = await User.findOne({ email })

        if (!usuariobuscado) {
            return res.status(400).json({
                ok: false,
                msg: 'The email entered does not exist'
            })
        }

        // confirmar password
        const validPassword = bcrypt.compareSync(password, usuariobuscado.password)
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'password incorrect'
            })
        }

        const token = await generarJWT(usuariobuscado.id, usuariobuscado.name)

        res.json({
            status: 'successful login',
            token,
            user: {
                "_id": usuariobuscado._id,
                "username": usuariobuscado.username,
                "fullname": usuariobuscado.fullname,
                "email": usuariobuscado.email
            }
        })

    } catch (error) {
        console.error(error);
    }
};