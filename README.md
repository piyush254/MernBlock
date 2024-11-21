
Refer this doc also:
https://docs.google.com/document/d/1nRQE1q3u368q48MXQK360t_2v2Jw9IoWYvPCTeObz9Q/edit?tab=t.0

< ===================== node.js code ==================>
1: npm install googleapis axios

2: const axios = require('axios');
const { google } = require('googleapis');
const fs = require('fs');

const projectId = 'mend-zone-app';

async function sendNotificationUsingApi({
  token,
  title,
  body,
  topic,
  data,
  imageUrl,
}) {
  try {
    // Authenticate using service account credentials
    const auth = new google.auth.GoogleAuth({
      keyFile: 'path-to-your-service-account-file.json', // Path to your service account JSON key
      scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
    });

    const authClient = await auth.getClient();
    const fcmUrl = `https://fcm.googleapis.com/v1/projects/${projectId}/messages:send`;

    // Prepare the message payload
    const message = {
      message: {
        token: token,
        topic: topic,
        notification: {
          title: title,
          body: body,
        },
        android: {
          notification: {
            image: imageUrl,
          },
        },
        apns: {
          payload: {
            aps: {
              'mutable-content': 1,
            },
          },
          fcm_options: {
            image: imageUrl,
          },
        },
        data: data,
      },
    };

    // Send the notification request
    const response = await axios.post(fcmUrl, message, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await authClient.getAccessToken()}`,
      },
    });

    if (response.status === 200) {
      console.log('Notification sent successfully:', response.data);
    } else {
      console.log('Failed to send notification:', response.data);
    }
  } catch (error) {
    console.error('Error sending notification:', error);
  }
}

// Example usage:
sendNotificationUsingApi({
  token: 'YOUR_DEVICE_FCM_TOKEN',
  title: 'Weather Warning!',
  body: 'A new weather warning has been issued for your location.',
  imageUrl: 'https://my-cdn.com/extreme-weather.png',
  data: { customKey: 'customValue' },
});

3: Replace YOUR_DEVICE_FCM_TOKEN with the actual device token.
4: You can modify the title, body, and other parameters to suit your needs.
5: To send the notification you need to send topic ‘all’ then the notification will be send to the all App users.
6: To send the specific user you will need to add the token of that specific user .
7: And to show the image in notification you will need to add the network image path then with text image will go as well.
8. If you want to navigate to any particular page like cart page and wallet page or notification page then you will need to set the value of data like this {“screen” : “cart”} if you want to navigate to wallet the replace the “cart” with “wallet” if nothing is set then will navigate to the Notification page and make sure you are using the same key word of cart and wallet .

9: Curl of notification api
curl --location 'https://fcm.googleapis.com/v1/projects/mend-zone-app/messages:send' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ya29.c.c0ASRK0GbGEulQb-WkOrOUCQ39vJ5pdQuhaomMLh0uDVUgeNUXKwpXcwuwtIZp5QhpweecbfUuv9OeUqzE25hmpr7jHxfGPbXg0gddzcAN04e8xX0CLol52p_IXnTTBZpRXlESUG-hax6okQj1qGasM_62AJhaa7Jdt15oBhOVDsVBoJgqIVCRMahlibi6E8Gm_eNKOgqlv3jUCi1ME7z2ypGGo2zto2rcfmGssF3ebKpBj7SChMXxZ6UBHOiIaAvKr0Y7SJ52SRxHWIJEgyhVcAo-i1rEbarEpEXi2iPuTBrdGaHbAmoZY--jIfhEySCZWS0toeweaLSkNBlKsNsRVKj42MjyJotaoO44jUp9AQW8ImwHYf2DhVrVKQN387PiynppBF-k7sud49J-rsV2_1w79rj6ivRis2pv9aJ12hI-vhjvUod184_w7j1n_UZzhUwlnv02vjy_eFU3ShzWFJS3R_1chzzx-I32qfvB8obBbz4royyoyha24WXwWUoujjtb2gXZUsUhp5Ygrcln2onxSnb-akYQeRIbVOiqUfu8d1S90nF-sRrXgacS7Qpj4cfky0JBS64VpF2wWF2sqByuwIy0fYMgpMsrQ3nbIqs0p1pw0mWS_sX2-n4vzkzO0W54h0JyYSlFsRc9XSin-JaXI2FJWdcUumwh4pxaV5m0lYb7p5J6k_5cw-oJttIbr2YWaZYMI3i9u9F8W0u-jYFywUy5lmq49ZZua7kJt-v-aYcl4nI_2qqUtcmIUJifcRxxO__kJ4MV65ghsQRca6U2_cUdcFiz4wn7vUfBMcuqkcqXJv99dQBsBFmIj_ucr2MmhIuaJp2BkiwctJnZ5s9s6Jwvb97V-IZ9rBreoldlI0k_84_B7txa02-9BIVXs1B1QfObjnupfZmci_fq4R_zVrzFFzhMvde8aUR8MYduSuZkkMjfy2Wn0IWQhSR--txakBaWs1h3web2c3XQvxZoce2yxQVb2Fw9pnwoJp69z4' \
--data '{
"Message":{
// “token” : “actual token from backend”
     "topic":"all",
     "notification":{
       "title":"Sparky says hello!"
     },
     "android":{
       "notification":{
         "image":"https://cdn.mend.zone/assets/imgs/LoginOfferImg/loginofferTop.jpg"
       }
     },
     "apns":{
       "payload":{
         "aps":{
           "mutable-content":1
         }
       },
       "fcm_options": {
           "image":"https://cdn.mend.zone/assets/imgs/LoginOfferImg/loginofferTop.jpg"
       }
     }
   }
}
'



10: you will need a file to which need to implement in your web
