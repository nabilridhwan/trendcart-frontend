import CryptoJS from 'crypto-js';

function CODE_VERIFIER(length: number) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const handleOAuthRedirect = async () => {
    console.log('check:', process.env.CLIENT_KEY)
      try {
        // Generate code_verifier
        const code_verifier = CODE_VERIFIER(128); // Specify desired length, 128 recommended

        // Generate code_challenge using CryptoJS
        const code_challenge = CryptoJS.SHA256(code_verifier).toString(CryptoJS.enc.Base64)
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');

        // Generate CSRF state
        const csrfState = Math.random().toString(36).substring(2);
        document.cookie = `csrfState=${csrfState}; max-age=60000`;

        // Construct query parameters
        let queryParams = new URLSearchParams();
        queryParams.set('client_key', 'sbaw9sq6cxmstg5mjh');
        queryParams.set('response_type', 'code');
        queryParams.set('scope', 'user.info.basic');
        queryParams.set('response_type', 'code');
        queryParams.set('redirect_uri', 'http://localhost:3001/home/');
        queryParams.set('state', csrfState);
        queryParams.set('code_challenge', code_challenge);
        queryParams.set('code_challenge_method', 'S256');

        // Construct URL
        let url = process.env.LOGIN_REDIRECT_BASE_URL || '';
        url += `?${queryParams.toString()}`;

        window.location.href = url;
      } catch (error) {
        console.error('OAuth Error:', error);
      }
    };