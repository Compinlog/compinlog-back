import { pool } from '../db.js'

export const getUsers = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM user')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const getUser = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM user WHERE id = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'user not found'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const createUsers = async (req, res) => {
    const { name, nit, email, password, profile } = req.body
    try {
        const [rows] = await pool.query('INSERT INTO user (name, nit, email, password, profile) VALUES(?, ?, ?, ?, ?)', [name, nit, email, password, profile,])
        res.send({
            id: rows.insertId,
            name,
            nit,
            email,
            password,
            profile
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const deleteUsers = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM user WHERE id = ?', [req.params.id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'user not found'
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const updateUsers = async (req, res) => {
    const { id } = req.params
    const { name, nit, email, password, profile } = req.body

    try {
        const [result] = await pool.query('UPDATE user SET name = IFNULL(?, name), nit = IFNULL(?, nit), email = IFNULL(?, email), password = IFNULL(?, password), profile = IFNULL(?, profile) WHERE id = ?', [name, nit, email, password, profile, id])
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'user not found'
        })

        const [rows] = await pool.query('SELECT * FROM user WHERE id = ?', [id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}
