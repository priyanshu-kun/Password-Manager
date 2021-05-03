// here we are doing password encryption stuff
const crypto = require("crypto");

const Encrypt = (password) => {
    const iv = Buffer.from(crypto.randomBytes(16));
    const Password_cipher = crypto.createCipheriv(
        'aes-256-ctr',
        Buffer.from(process.env.ENCRYPTION_KEY),
        iv
    );
    const encryptedPassword = Buffer.concat(
        [
            Password_cipher.update(password),
            Password_cipher.final()
        ]
    )

    return {
        iv: iv.toString("hex"),
        _password: encryptedPassword.toString("hex")
    }
}

const Decrypt = (encryption) => {
    const Decipher_password = crypto.createDecipheriv(
        'aes-256-ctr',
        Buffer.from(process.env.ENCRYPTION_KEY),
        Buffer.from(encryption.iv, "hex")
    );
    const decryptPassword = Buffer.concat(
        [
            Decipher_password.update(
                Buffer.from(encryption._password)
            ),
            Decipher_password.final()
        ]
    )
    return decryptPassword.toString();
}

module.exports = {
    Encrypt,
    Decrypt
}