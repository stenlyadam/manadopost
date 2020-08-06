const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.pushNotification = functions.https.onRequest(
  async (request, response) => {
    const post = request.body.post;
    const category = request.body.taxonomies.category;
    let categoryArray;
    categoryArray = Object.keys(category);

    // const tokens = [
    //   'c1ruMo_nTb2VnBJelXOaIX:APA91bGejLDaz0COHVohCzrlo023WwRuMhOm1i0LSL7pgFDe0aMrqKscneGBpa16pC1dxFHGH-LEaKEJ4cb0tHcce0py7Rnpcsx0GDjpqLALvwvCS8df-jJf2G9rvCF30Fn5ur4iT3Od',
    // ];

    const tokens = [];

    const snapshot = await admin.database().ref('users/').once('value');

    snapshot.forEach((childSnapshot) => {
      let userToken = childSnapshot.val().token;
      if (userToken) {
        tokens.push(userToken);
      }
    });

    const payload = {
      notification: {
        title: post.post_title,
        body: post.post_excerpt,
      },
      data: {
        id: `${post.ID}`,
      },
    };

    //Convert to array
    if (categoryArray[0] === 'berita-utama') {
      await admin.messaging().sendToDevice(tokens, payload);
      console.log('Notication sent');
    }
    console.log('Notification not sent');
    console.log('Category Array:', categoryArray[0]);
    console.log('Category 1:', categoryArray.term_id);
    console.log('Category 2:', categoryArray[0].term_id);
  },
);
