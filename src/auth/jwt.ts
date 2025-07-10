import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || '123'

export const signToken = (payload: object, expiresIn: any = '1h') => {
    
    return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

export const verifyToken = (token: string) => jwt.verify(token, JWT_SECRET);



