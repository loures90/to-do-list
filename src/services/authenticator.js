import jwt from 'jsonwebtoken';

export const generateToken = (id) => {
    return (
        jwt.sign({
            data: id
        }, 'secret', { expiresIn: '1h' })
    )
}
export const returnToken = (token) => {
    try {
        return (
            jwt.verify(token, 'secret').data
        )
    } catch (error) {
        return {error:error.message}
    }
}