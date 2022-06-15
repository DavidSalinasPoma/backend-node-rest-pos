import { Schema, model, Document } from 'mongoose';

// Para encriptar la contraseña
import bcrypt from 'bcryptjs';

// Una interface especifica que campos va a tener autocompletado
export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    // Especificando metodos
    encryptPassword(password: string): Promise<string>;
    validatePassword(password: string): Promise<boolean>;
};

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 4, // Va a tener un nombre minimo de 4 letras
        lowercase: true // Minusculas
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true // Minusculas
    },
    password: {
        type: String,
        required: true,
    }
});

// Definición de metodos para este Schema

// Este metodo solo cifra la contraseña
userSchema.methods.encryptPassword = async (password: string): Promise<string> => {
    // bcrypt.gensalt Le agrega un string adicional
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt); // Aqui gerena la contraseña

};


// Este metodo compara una contraseña
userSchema.methods.validatePassword = async function (password: string): Promise<boolean> {
    // Compara la contraseña recibida contra la contraseña de la BD
    return await bcrypt.compare(password, this.password); // devuelve un true o un false
};


// Este modelo se llama <User> y va a estar basado el la Interface IUser
export default model<IUser>('User', userSchema)