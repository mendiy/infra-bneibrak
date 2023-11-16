import jwt from 'jsonwebtoken';

const tokenIsCorrect = async () => {
    const secretKey = 'megobb';
    const token = 'eyJhbGciOiJIUzI1NiJ9.aGhAampqampqampqampqampqamouY29t.UlR8638RE8BEet0A-gXX4CjFi95x4-1ENnOmvvk1L8g';
    const decoded = jwt.verify(token, secretKey);
    if (decoded) {
        console.log(decoded);
        return true
    } else {
    
    console.log('Invalid token');
    return false
}
    
}
// tokenIsCorrect()

export default tokenIsCorrect;