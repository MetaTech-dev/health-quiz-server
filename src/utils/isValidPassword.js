import bcrypt from 'bcryptjs';

const isValidPassword = async (password, encrypytedPassword) =>
  bcrypt.compare(password, encrypytedPassword);

export default isValidPassword;
