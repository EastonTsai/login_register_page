export const validateAccount = (account: string) => {
  if (account.trim().length < 1) {
    return '帳號不能空白'
  }
  const regex = /(?=.*[a-z])(?=.*[A-Z])/
  if (!regex.test(account)) {
    return '帳號格式錯誤'
  }
}

export const validateEmail = (email: string) => {
  if (email.trim().length < 1) {
    return 'email 不能空白'
  }
  const regex = /([a-zA-Z0-9-_.])(@)(.com)/
  if (!regex.test(email)) {
    return 'email 格式錯誤'
  }
}
export const validatePassword = (password: string) => {
  if (password.trim().length < 1) {
    return '密碼不能空白'
  }
  if (password.trim().length < 6) {
    return '密碼字數不足'
  }
  const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
  if (!regex.test(password)) {
    return '密碼格式錯誤'
  }
}
export const validateCheckPassword = (password: string, checkPassword: string) => {
  if (checkPassword.trim().length < 1) {
    return '密碼不能空白'
  }
  if (password !== checkPassword) {
    return '二次輸入密碼不相同'
  }

}
type resultType = {
  accountError?: string,
  emailError?: string,
  passwordError?: string,
  checkPasswordError?: string
}
export const validateLogin = (account: string, password: string, checkPassword: string) => {
  const result: resultType = {}
  const accountError = validateAccount(account)
  const passwordError = validatePassword(password)
  const checkPasswordError = validateCheckPassword(password, checkPassword)
  if (accountError) { result.accountError = accountError }
  if (passwordError) { result.passwordError = passwordError }
  if (checkPasswordError) { result.checkPasswordError = checkPasswordError }
  if (Object.keys(result).length < 1) {
    return
  }
  return result
}
export const validateRegister = (account: string, email: string, password: string, checkPassword: string) => {
  const result: resultType = {}
  const accountError = validateAccount(account)
  const emailError = validateEmail(email)
  const passwordError = validatePassword(password)
  const checkPasswordError = validateCheckPassword(password, checkPassword)
  if (accountError) { result.accountError = accountError }
  if (emailError) { result.emailError = emailError }
  if (passwordError) { result.passwordError = passwordError }
  if (checkPasswordError) { result.checkPasswordError = passwordError }
  if (Object.keys(result).length < 1) {
    return
  }
  return result
}
export const validateCreateOption = (
  inputValue: string,
  option: string[],
) => {
  const isRepeat = option.find(item => item === inputValue)
  const newOption = inputValue.split(';')
  if (inputValue.trim().length < 1) { return }
  else if (isRepeat) { return }
  return newOption
}