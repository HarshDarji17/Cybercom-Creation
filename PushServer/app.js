const webpush = require('web-push');

//console.log(webpush.generateVAPIDKeys());

const publicKey = 'BODmcAvjES6-93hVoDFjenaCBdvyGX8Y9VbUyxCSCkYMF1ScA6EoQ9wNh1-x7BJawlco3gALFPZEy93bBTaL7YM';

const  privateKey = 'cX9UCsy1ggpVXL8cX-6fHuh_8D9uXOX8IbQE9mW3JKg';


const sub = {
    endpoint :"https://fcm.googleapis.com/fcm/send/cCYan828Vc0:APA91bHDgPheyDf81gnPodtt-JMJOay8fvbjGP-kmJDxvMc_BgVLu2sZ5Kfk-OtF006fsnkp6oiMe3otGMhv3fc9R0-3_04ti8se7BV_lUsmhsWwSFnOx3KELb36vzOOyiuxRqdbV2Ty",
     expirationTime:null,
     keys:{"p256dh":"BDEMFF2MVRwcWW8wl7AnVUoDI9aDsp_JrXRXrKkhdh0r0l_OC98RZ_HCQG5OGkRpI_T6YafvjzbY1nQyMFLWltg",
     auth:"NcJI1P5P55D7NG1lLKZyKw"
},
};

   webpush.setVapidDetails('mailto:example@gmail.com', publicKey, privateKey);

    // notification data
    const payLoad = {
        notification: {
            "data": {url : "https://www.youtube.com/"},
            "title": 'Angular Notification',
            "vibrate": [100, 50, 100]
        },
    };
    
    // send notification
    webpush.sendNotification(sub, JSON.stringify(payLoad));

