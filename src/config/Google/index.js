import {GoogleSignin} from '@react-native-community/google-signin';

GoogleSignin.configure({
  //google-services.json: oauth_client/client_id
  webClientId:
    '782626479856-89khocqerprpe29tscrpvdn5vb8ghan0.apps.googleusercontent.com',
});

const Google = GoogleSignin;

export default Google;
