module.exports = (sequileze, DataTypes) => {
  const User = sequileze.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    provider: DataTypes.BOOLEAN
  })

  return User
}
