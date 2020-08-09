const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const axios = require('axios');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.pushNotification = functions.https.onRequest(
  async (request, response) => {
    // const post = request.body.post;
    // const category = request.body.taxonomies.category;
    // let categoryArray;
    // categoryArray = Object.keys(category);
    // // const tokens = [
    // //   'c1ruMo_nTb2VnBJelXOaIX:APA91bGejLDaz0COHVohCzrlo023WwRuMhOm1i0LSL7pgFDe0aMrqKscneGBpa16pC1dxFHGH-LEaKEJ4cb0tHcce0py7Rnpcsx0GDjpqLALvwvCS8df-jJf2G9rvCF30Fn5ur4iT3Od',
    // // ];
    // const tokens = [];
    // const snapshot = await admin.database().ref('users/').once('value');
    // snapshot.forEach((childSnapshot) => {
    //   let userToken = childSnapshot.val().token;
    //   if (userToken) {
    //     tokens.push(userToken);
    //   }
    // });
    // const payload = {
    //   notification: {
    //     title: post.post_title,
    //     body: post.post_excerpt,
    //   },
    //   data: {
    //     id: `${post.ID}`,
    //   },
    // };
    // //Convert to array
    // if (categoryArray[0] === 'berita-utama') {
    //   await admin.messaging().sendToDevice(tokens, payload);
    //   console.log('Notication sent');
    // }
    // console.log('Notification not sent');

    let url = 'https://manadopost.jawapos.com/wp-json/wp/v2/posts/10526';
    const res = await axios.get(url);

    const tokens = [
      'ftVuDNMOSjmusMjgzC2Jek:APA91bGDlzLJNFtDlgmhkwvxoZSj-LIqEVnudj3r9n6_P0Wtz6CRXY2lgrekAkMure2OYILH3Dn2b22Vg9ywzh7gyOF4ucsiiM78uB7FlkgZnPqLNTVUVMKggKyRJGY9_-nOCLN-eqLw',
    ];

    const payload = {
      notification: {
        title: res.data.title.rendered,
      },
      data: {
        id: `${res.data.id}`,
        image: res.data.jetpack_featured_media_url,
        date: `${res.data.date}`,
        content: `${res.data.content.rendered}`,
        desc: res.data.excerpt.rendered,
        link: res.data.link,
      },
    };

    await admin.messaging().sendToDevice(tokens, payload);
    response.send('success');
  },
);
