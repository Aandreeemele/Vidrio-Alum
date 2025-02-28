const twilio = require('twilio');

// Tu SID y Token de Twilio
const accountSid = 'your_account_sid';  // Sustituye por tu SID
const authToken = 'your_auth_token';    // Sustituye por tu Auth Token

// Crear cliente de Twilio
const client = new twilio(accountSid, authToken);

// Función para enviar el SMS
function enviarSMS() {
    client.messages.create({
        body: '¡Alguien ha solicitado más información!',
        from: '+1XXXYYYZZZ',  // Tu número Twilio
        to: '+50255447580'  // Tu número de teléfono (incluye el código de país)
    })
    .then(message => console.log('Mensaje enviado con SID: ' + message.sid))
    .catch(error => console.error('Error al enviar el mensaje: ' + error));
}

enviarSMS();
  