import { pool } from '../db.js'

export const getServices = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM servicios')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const getService = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM servicios WHERE id = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'Service not found'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const createServices = async (req, res) => {
    const { name, state, date, pedido, solicitante, adress, subtotal, total} = req.body
    try {
        const [rows] = await pool.query('INSERT INTO servicios (name, state, date, pedido, solicitante, adress, subtotal, total) VALUES(?, ?, ?, ?, ?, ?, ?, ?)', [name, state, date, pedido, solicitante, adress, subtotal, total,])
        res.send({
            id: rows.insertId,
            name,
            state,
            date,
            pedido,
            solicitante,
            adress,
            subtotal,
            total,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const deleteServices = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM servicios WHERE id = ?', [req.params.id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Service not found'
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const updateServices = async (req, res) => {name, state, date, pedido, solicitante, adress, subtotal, total
    const { id } = req.params
    const { name, state, date, pedido, solicitante, adress, subtotal, total } = req.body

    try {
        const [result] = await pool.query('UPDATE servicios SET name = IFNULL(?, name), state = IFNULL(?, state), date = IFNULL(?, date), pedido = IFNULL(?, pedido), solicitante = IFNULL(?, solicitante), adress = IFNULL(?, adress), subtotal = IFNULL(?, subtotal), total = IFNULL(?, total) WHERE id = ?', [name, name, state, date, pedido, solicitante, adress, subtotal, total, id])
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Service not found'
        })

        const [rows] = await pool.query('SELECT * FROM servicios WHERE id = ?', [id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}
