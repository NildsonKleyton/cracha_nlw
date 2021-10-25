/* function showMeSomething(texto) {
        alert(texto)
      }

      const github = 'nildsonkleyton'
      const youtube = 'nildsonkleyton'
      const facebook = 'nildsonkleyton'
      const instagram = 'nildsonkleyton'
      const twitter = 'nildsonkleyton'
      
      showMeSomething(github)
     */

/*
     camelCase
     PascalCase
     snake_case
     */
const linksSocialMidia = {
  github: 'nildsonkleyton',
  //youtube: 'nildsonkleyton',
  youtube: 'channel/UCIrwlODFcIUJl0Qo6cqobpg',
  facebook: 'nildsonkleyton',
  instagram: 'nildsonkleyton',
  twitter: 'nildsonkleyton'
}

function changeSocialMediaLinks() {
  // o comando abaixo pega o id e altera o nome
  //document.getElementById('userName').textContent = 'Testador'

  // igual a linha de cima
  //userName.textContent = 'Nildson'

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    //templeite string usar crase
    li.children[0].href = `https://${social}.com/${linksSocialMidia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  //variavel pega o informações do api do githum com ajuda do jason
  const url = `https://api.github.com/users/${linksSocialMidia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      //
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })

  //alert(url)
}

getGitHubProfileInfos()
