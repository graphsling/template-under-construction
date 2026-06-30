const environment = process.env.ELEVENTY_ENV;
const isProd = environment === 'prod'
const devUrl = 'http://localhost:8000';
const prodUrl = 'https://fill-me';
const baseUrl = isProd ? prodUrl : devUrl;

const clientName = 'Kwagga Precision';
const clientTag = 'Engineering services at your fingertip';
const clientPhone = '+27641031189';
const clientWhatsApp = '27641031189';
const clientMail = 'hello@wpieterse.com';

export default {
    environment,
    isProd,
    baseUrl,
    client: {
        name: clientName,
        tag: clientTag,
        phone: clientPhone,
        whatsApp: clientWhatsApp,
        mail: clientMail
    }
};
