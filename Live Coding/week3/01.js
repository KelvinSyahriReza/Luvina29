/**
 Dalam sebuah web user diwajibkan memiliki user dan roles
 terdapat beberapa role yang tesedia dimana setiap role dapat mengakses menu yang berbeda sebgai berikut
 1) Non-member
    - Home
    - Login
 2) Author
    - Home
    - Logout
    - Create Article
    - Edit Own Article
    - Delete Own Article
  3) Editor
    - Home
    - Logout
    - Edit Article

  Buatlah program yang menampilkan user dan menu yang di akses, dengan kriteria sebagi berikut
  - jika user atau role tidak diisi maka secara otomatis memiliki roles Non-meber
  - jika user dibawah 5 karakter tampilkan pesan "Login failed"
  - jika role tidak sesuai maka tampilkan pesan "Login failed"

  Contoh 1:
  -----------------
  var user = ''
  var role = ''

  Output
  -----
  'Guest user dapat mengakses menu'
  '- Home'
  '- Login'


  Contoh 2:
  -----------------
  var user = 'Hellios'
  var role = 'Editor'

  Output
  -----
  'Hellios dapat mengakses menu'
  '- Home'
  '- Logout'
  '- Edit Article'

  Contoh 3:
  -----------------
  var user = 'Hello'
  var role = 'Editor'

  Output
  -----
  'Guest user dapat mengakses menu'
  '- Home'
  '- Logout'
  '- Edit Article'


  Contoh 4:
  -----------------
  var user = 'Hello'
  var role = 'Editors'

  Output
  -----
  'Guest user dapat mengakses menu'
  '- Home'
  '- Logout'
  '- Edit Article'

  Wajib dilengkapi dengan alghoritma atau pseudocode
 */

// IF user AND role Equals 'Tidak Diisi' 
//   Display 'Non-Member'
// ELSE IF user < 5 karakter
//   Display 'Login Failed'
// ELSE IF role tidak sesuai 
//   Display 'Login Failed'

var user = '';
var role = '';


if (user === ''){
  console.log('GUEST USER DAPAT MENGAKSES MENU HOME dan LOGIN')
 } else if ( user <= 5){
  console.log('LOGIN FAILED')
}else if (role == 'non-Member'){
  console.log(user + ' ' + role + ' hanya bisa mengakses menu HOME dan LOGIN ')
}else if (role == 'author'){
  console.log(user + ' ' + role + ' bisa mengakses semua fitur lengkap seperti HOME, LOGOUT, Edit own article, dan delete article')
}else if ( role == 'editor'){
  console.log (user + ' ' + role + ' hanya bisa mengakse menu HOME, LOGIN, dan Loguot')
}else if ( role == 0 ){
  console.log('Login Failed')
}
  
