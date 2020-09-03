const LoginViewModel = require('./login-view-model')
const frameModule = require('ui/frame')
exports.onNaigateTo = (args) => {
    // const page = args.object
    // page.bindingContext = new LoginViewModel()
}

exports.onLoaded = () => {
    console.log('loaded page');
}

exports.onLogin = () => {
    alert('Login action')
}

exports.onRegister = ({object: {page}}) => {
    page.frame.navigate('views/register/register')
}