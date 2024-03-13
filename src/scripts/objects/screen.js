const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <a href="${user.userUrl}" target="_blank"><img src="${user.avatarUrl}" alt="Foto do perfil do usuário" /></a>
                                        <div class="data">
                                            <a href="${user.userUrl}" target="_blank"><h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1><a/>
                                            <p>${user.bio ?? 'Não possui bio cadastrado 😢'}</p>
                                            <p>👥 ${user.followers} follower · ${user.following} following</p>
                                        </div>
                                    </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li class="list-itens-repositories">
                                                                    <a href="${repo.html_url}" target="_blank">
                                                                        <p>${repo.name}</p>
                                                                        <ul>
                                                                            <li>🍴 ${repo.forks_count}</li>
                                                                            <li>⭐ ${repo.stargazers_count}</li>
                                                                            <li>👀 ${repo.watchers_count}</li>
                                                                            <li>👩‍💻 ${repo.language ?? '😕'}</li>
                                                                        </ul>
                                                                    </a>
                                                                </li>`)
        
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositoriórios</h2>
                                                <ul class="list-repositories">
                                                    ${repositoriesItens}
                                                </ul>
                                        </div>`
        }

        let eventItens = ''
        user.events.forEach(event =>{
            if (event.type === "CreateEvent" || event.type === "PushEvent"){
                if(event.payload.commits === undefined){
                    eventItens += `  <li>
                                        <a href="https://github.com/${event.repo.name}" target="_blank">                                
                                            <p>${event.repo.name}</p>
                                            <span>Esse evento não possui mensagem</span>
                                        </a>
                                      </li>`
                  }else{
                        let ultimoCommit = event.payload.commits.length-1
                        eventItens += `  <li>
                                            <a href="https://github.com/${event.repo.name}" target="_blank">                               
                                                <p>${event.repo.name}</p>                   
                                                <span>${event.payload.commits[ultimoCommit].message}</span>
                                            </a>
                                        </li>`
                  }
            }
        })

        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events">
                                                <h2>Ultimos eventos</h2>
                                                <ul>${eventItens}</ul>
                                        </div>`
        }
    }
}

export { screen }
