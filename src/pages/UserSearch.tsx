import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputSearch } from '../components/InputSearch/InputSearch';
import { useNavigate } from 'react-router';
import { ButtonSearch } from '../components/ButtonSearch/ButtonSearch';
import styled from 'styled-components';

const searchUserFormSchema = z.object({
  user: z.string().min(3, "O usuário é obrigatório!"),
});

type SearchUserFormData = z.infer<typeof searchUserFormSchema>;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 10px;
`;

const GitHubIcon = styled.i`
  font-size: 48px;
  color: #24292e;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #24292e;
  font-size: 24px;
  margin-bottom: 20px;
`;

export function UserSearch() {
  const navigator = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchUserFormData>({
    resolver: zodResolver(searchUserFormSchema),
  });

  async function handleSearchUser(data: SearchUserFormData) {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${data.user}`);
      const userData = await userResponse.json();
      
      if (!userResponse.ok) {
        throw new Error(userData.message || 'Erro ao buscar dados do usuário');
      }

      const reposResponse = await fetch(userData.repos_url);
      const reposData = await reposResponse.json();

      if (!reposResponse.ok) {
        throw new Error('Erro ao buscar repositórios');
      }

      navigator("/repositories", {
        state: {
          repos: reposData,
          info: userData,
        },
      });
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  return (
    <FormContainer>
      <GitHubIcon className="devicon-github-original"></GitHubIcon>
      <Title>Buscar usuário</Title>
      <Form onSubmit={handleSubmit(handleSearchUser)}>
        <InputSearch
          placeholder='Testando'
          {...register("user")}
          inputMode="none"
          readOnly
        />
        {errors.user && <ErrorMessage>{errors.user.message}</ErrorMessage>}
        <ButtonSearch />
      </Form>
    </FormContainer>
  );
}
