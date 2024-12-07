import styled from "styled-components";

interface UserInfoProps {
  name: string;
  photo: string;
  location: string;
  followers: number;
  following: number;
  publicRepos: number;
  bio: string;
}

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 20px auto;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const UserPhoto = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
  border: 2px solid #ddd;
  @media (max-width: 768px) {
    margin: 0 auto 15px;
  }
`;

const UserName = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
`;

const UserDetails = styled.div`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  p {
    margin: 5px 0;
  }
  p strong {
    color: #333;
  }
`;

const Bio = styled.p`
  font-size: 14px;
  color: #333;
  font-style: italic;
  margin-top: 15px;
  max-width: 600px;
  margin: 0 auto;
`;

export function UserInfo({
  name,
  photo,
  location,
  followers,
  following,
  publicRepos,
  bio,
}: UserInfoProps) {
  return (
    <UserContainer>
      <UserPhoto src={photo} alt={`${name}'s avatar`} />
      <div>
        <UserName>{name}</UserName>
        <UserDetails>
          <p><strong>Localização:</strong> {location || "Desconhecida"}</p>
          <p><strong>Seguidores:</strong> {followers}</p>
          <p><strong>Seguindo:</strong> {following}</p>
          <p><strong>Repositórios Públicos:</strong> {publicRepos}</p>
          {bio && <Bio>{bio}</Bio>}
        </UserDetails>
      </div>
    </UserContainer>
  );
}
