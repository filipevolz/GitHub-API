import { useState } from "react";
import { InputSearch } from "../components/InputSearch/InputSearch";
import { RepoList } from "../components/RepoList/RepoList";
import { useLocation, useNavigate } from "react-router";
import { ButtonReturn } from "../components/ButtonReturn/ButtonReturn";
import { UserInfo } from "../components/UserInfo/UserInfo";

export function Repositories() {
  const [search, setSearch] = useState('');
  const navigator = useNavigate();
  const location = useLocation();

  const { repos = [], info = {} } = location.state || {};

  const { name = "Usuário", avatar_url = "", bio = "", followers = 0, following = 0, location: userLocation = "Desconhecida", public_repos = 0 } = info;

  return (
    <main>
      <ButtonReturn onClick={() => navigator("/userSearch")} />

      <InputSearch
        name="search"
        type="text"
        placeholder="Filtrar Repositórios..."
        onChange={e => setSearch(e.target.value)}
        value={search}
      />

      <UserInfo
        name={name}
        photo={avatar_url}
        location={userLocation}
        followers={followers}
        following={following}
        publicRepos={public_repos}
        bio={bio || "Sem bio"}
      />

      <RepoList
        repos={repos}
        search={search}
      />
    </main>
  );
}
