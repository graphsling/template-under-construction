const environment = process.env.ELEVENTY_ENV;
const isProd = environment === 'prod'
const devUrl = 'http://localhost:8000';
const prodUrl = 'https://fill-me';
const baseUrl = isProd ? prodUrl : devUrl;

const googleAnalytics = '000';

const clientName = 'Client Name';
const clientTag = 'A very very long tag for the client';
const clientPhone = '+27641031189';
const clientWhatsApp = '27641031189';
const clientMail = 'hello@wpieterse.com';

export default {
    environment,
    isProd,
    baseUrl,
    tracking: {
        google: googleAnalytics
    },
    client: {
        name: clientName,
        tag: clientTag,
        phone: clientPhone,
        whatsApp: clientWhatsApp,
        mail: clientMail
    }
};
