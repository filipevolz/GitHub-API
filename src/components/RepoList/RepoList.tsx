import styled from "styled-components";

interface Repo {
  name: string;
  description: string | null;
  html_url: string;
}

interface RepoListProps {
  repos: Repo[];
  search: string;
}

const ListContainer = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const ListItem = styled.li`
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 150px;
  transition: transform 0.2s ease-in-out;
  padding: 1rem;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: scale(1.01)
  }

  @media (max-width: 400px) {
    height: auto;
  }
`;

const RepoName = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 16px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const RepoDescription = styled.span`
  font-size: 14px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  width: 100%;

  @media (max-width: 600px) {
    font-size: 12px;
    -webkit-line-clamp: 3;
  }

  @media (max-width: 400px) {
    font-size: 10px;
    -webkit-line-clamp: 2;
  }
`;

const RepoLink = styled.a`
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
`;

export function RepoList({ repos, search }: RepoListProps) {
  const filteredRepos = search.length > 0
    ? repos.filter((repo) => repo.name.toLowerCase().includes(search.toLowerCase()))
    : repos;

    console.log(repos)

  return (
    <div>
      {filteredRepos.length > 0 ? (
        <ListContainer>
          {filteredRepos.map((repo) => (
            <ListItem key={repo.name}>
              <RepoLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <RepoName>{repo.name}</RepoName>
                <RepoDescription>{repo.description || "Repositório sem descrição 😑"}</RepoDescription>
              </RepoLink>
            </ListItem>
          ))}
        </ListContainer>
      ) : (
        <p>Nenhum repositório encontrado.</p>
      )}
    </div>
  );
}
