// Exercício 1: O Clássico "To-Do List" (Lista de Tarefas)

// Objetivo:Praticar "Lifting State Up" (Elevação de Estado). Este é o exercício mais importante para entender como componentes "conversam" (passando funções como props).

// *Descrição:
// Crie uma aplicação de lista de tarefas. A complexidade aqui não é o `useState` em si, mas *onde* o estado fica e como ele é modificado por componentes filhos.

// Requisitos:

// 1.  Estrutura:** Crie 3 componentes:
//       * `App.tsx`: Componente pai que vai segurar o `state` principal (a lista de tarefas).
//       * `TodoForm.tsx`: Componente filho que contém o `<input>` e o botão "Adicionar".
//       * `TodoList.tsx`: Componente filho que recebe a lista de tarefas e a exibe (usando `.map()`).
// 2.  Estado: O `state` (`const [todos, setTodos] = useState<Todo[]>([])`) deve ficar no `App.tsx`.
// 3.  Tipagem (TS):** Crie uma `interface Todo` (ex: `{ id: number; text: string; completed: boolean }`).
// 4.  Comunicação (O Desafio):**
//       O `App.tsx` deve passar a função `addTodo` (que chama `setTodos`) como *prop* para o `TodoForm.tsx`.
//       O `App.tsx` deve passar o array `todos` como *prop* para o `TodoList.tsx`.
// 5.  Imutabilidade: A função `addTodo` deve criar um *novo* array com a nova tarefa (usando `...spread operator`), respeitando a regra de imutabilidade do state.

// Bônus (Desafio de Imutabilidade):
// Adicione um botão "Concluir" em cada item da lista. Isso vai forçar o aluno a fazer um `setTodos` usando `.map()` para criar um novo array, alterando apenas o item com o `id` correspondente.

// -----

// Exercício 2: Formulário com Objeto de Estado (State Object)

// Objetivo: Praticar a atualização imutável de um *objeto* complexo no `useState`.

// Descrição:
// Em vez de vários `useState` para cada campo de um formulário, vamos usar um único `useState` que guarda um objeto.

// Requisitos:*

// 1.  **Estado:** Crie um `state` único para um formulário de inscrição:
//     ```tsx
//     interface UserForm {
//       nome: string;
//       email: string;
//       aceitaTermos: boolean;
//     }

//     const [formData, setFormData] = useState<UserForm>({
//       nome: '',
//       email: '',
//       aceitaTermos: false,
//     });
//     ```
// 2.  Formulário: Crie os inputs (nome, email) e um checkbox (aceitaTermos).
// 3.  O Desafio (O "onChange" Genérico):
//     Crie *uma única* função `handleChange` que sirva para *todos* os inputs. Ela deve usar o `name` do input para saber qual chave do objeto de estado atualizar.
  
// Exercício 3: Evoluindo o "Filtro de Produtos" com API (`useEffect`)

// Objetivo: Praticar a busca de dados assíncronos (API) e lidar com estados de `loading` e `error`. Isso é uma evolução direta da Aula 4, agora com TypeScript.

// Descrição:
// Vamos pegar o projeto rápido "Filtro de Produtos" que você fez. Em vez de usar um array de produtos "mockado" (fixo no código), você vai buscar esses produtos de uma API real.

// Requisitos:

// 1.  API: Use a `https://fakestoreapi.com/products` para buscar os produtos.
// 2.  Novos States: Além do `state` do filtro, você precisará de:
//        `const [produtos, setProdutos] = useState<Produto[]>([]);`
//        `const [loading, setLoading] = useState<boolean>(true);`
//        `const [error, setError] = useState<string | null>(null);`
// 3.  Tipagem (TS): Crie a `interface Produto` com base no que a API retorna (ex: `id`, `title`, `price`, `image`).
// 4.  `useEffect`: Use o `useEffect` com um array de dependências vazio (`[]`) para fazer o `fetch` dos dados **apenas uma vez**, quando o componente montar.
// 5.  Lógica do `fetch`:
//       Dentro do `useEffect`, use `async/await` (com um `try/catch`).
//       No `try`, faça o `fetch`, atualize o `state` de `produtos` e mude `loading` para `false`.
//       No `catch`, salve a mensagem de erro no `state` de `error` e mude `loading` para `false`.
// 6.  Renderização Condicional (UX):
//       Se `loading` for `true`, mostre um texto "Carregando produtos...".
//       Se `error` não for `null`, mostre a mensagem de erro.
//       Se `produtos` existir, mostre o filtro e a lista (a lógica que você já tinha).