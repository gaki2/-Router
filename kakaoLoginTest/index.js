console.log('init!');

//API key
Kakao.init('apikey');


const loginBtn = document.getElementById('login');
const logoutBtn = document.getElementById('logout');

loginBtn.addEventListener('click', login);
logoutBtn.addEventListener('click', logout);

// function login() {
//     console.log(1);
// }

// function logout() {
//     console.log(2);
// }
  

function login() {
    Kakao.Auth.login({
        success: function(response) {
            Kakao.API.request({
                url: '/v2/user/me',
                success: function(response) {
                    console.log(response);
                },
                fail: function(error) {
                    console.log(error);
                }
            })
        },
        fail: function(error) {
            console.log(error);
        }
    })
}

function logout() {
    if (Kakao.Auth.getAccessToken()) {
      Kakao.API.request({
        url: '/v1/user/unlink',
        success: function (response) {
        	console.log(response)
        },
        fail: function (error) {
          console.log(error)
        },
      })
      Kakao.Auth.setAccessToken(undefined)
    }
  }  