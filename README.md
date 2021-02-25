# POC Vagas for business

Este projeto é uma POC (prova de conceito) com o objetivo de listar problemas e propor soluções de forma funcional e/ou escrita.

## Produção

Você pode visualizar esta POC em produção na url [https://forbusiness.vercel.app](forbusiness.vercel.app).

## Desenvolvimento

Para rodar o projeto localmente use o script, e acesse a url [localhost:3000](http://localhost:3000). Você ainda terá que incluir um arquivo `.env.local` e definir as variáveis de ambiente manualmente.

```sh
npm run dev
```

Se preferir utilizar automaticamente as variáveis de ambiente provisionadas pela Vercel, utilize o `vercel` cli (necessário uma conta de usuário, que você pode criar em [vercel.com/signup](https://vercel.com/signup). Você também pode ler aqui a [documentação completa do vercel cli](https://vercel.com/docs/cli#commands/dev).

Mas basicamente, vocé deve logar, baixar as variaveis de ambiente, e startar o projeto, assim:

```sh
# loga na conta de usuário
npm run vercel -- login

# baixa as variáveis de ambiente de desenvolvimento
npm run vercel -- env pull

# starta o projeto
npm run vercel -- dev
```

## Problemas encontrados

A seguir, você encontra uma lista em progresso, com os problemas de experiência encontrados no VAGAS For business.

### Títulos da aba

Ao acessar o Vagas for business em diferentes páginas, o título não contextualiza, confundindo o usuário, são exemplos:

1. [Página institucional](https://forbusiness.vagas.com.br/) exibe "Plataforma de recrutamento e seleção e ATS | VAGAS for business"
2. [Página de login]() exibe "VAGAS Tecnologia - líder em soluções de e-recruitment"
3. [Páginas após login] exibem "Dashboard Serviços || Vagas.com"

### Domínios

Ao acessar o Vagas for business em diferentes páginas, há mudanças de domínio que confundem e dificultam a contextualização do usuário. São exemplos:

1. [Página institucional](https://forbusiness.vagas.com.br/) exibe o domínio forbusiness.vagas.com.br
2. [Página de login](https://epartner.vagas.com.br/avdir.asp) exibe o domínio epartner.vagas.com.br
3. [Busca de profissionais](https://epartner.ad.vagastec.com.br/) exibe o domínio epartner2.vagas.com.br
4. [Pagina logada](https://epartner.vagastec.com.br/) o link relatórios no menu principal redireciona para o domínio site.vagas.com.br.

### URLS

Muitas urls não são amigáveis ao usuário, confundindo o usuário, e até expondo uso dados de forma indevida, exemplos:

1. [Página de login](https://epartner.vagas.com.br/avdir.asp) redireciona de `avdir.asp` para `_AcessoEmpr.asp`, e expõe o uso da tecnologia asp, bem como dados ip e id de sessão nos params `?t=60&cp=201&ipl=192&ipr=187.3.222.220&uid=44800800492&ssa=True`
2. [Página de esqueci minha senha](https://epartner.vagas.com.br/_AcessoEmpr-SemId2.asp) redireciona para `_AcessoEmpr-SemId2.asp`
3. [Opção de voltar para página de login](https://epartner.vagas.com.br/_AcessoEmpr-SemId2.asp) exibe destino `AcessoEmpr-Erro.asp`

### Links de segmento

Os links de segmentos são exibidos apenas na versão desktop, seria adequado que o mesmo fosse exibido também no mobile uma vez que perde-se a funcionalidade. 
Os links também perdem o highlight nativo ao se navegar via teclado, tornando o inacessível.
Também há uma troca de cor inadequada, fazendo uso do vermelho ao se passar o mouse sobre estes links, o que fere a identidade da marca. 
Também há um erro no alinhamento na largura máxima do container, o que vai em desencontro ao layout proposto e utilizado em outras páginas.
Estes e outros erros são possíveis dado que estes links não são um componente reutilizado, o mesmo é reimplementado em cada página, criando vários pontos de manutenção.

### Menu Principal

1. [Página institucional](https://forbusiness.vagas.com.br/) exibe um png ao invez de um vetor, perdendo qualidade em telas retinas.

2.  [Página institucional](https://forbusiness.vagas.com.br/) Os links de navegação, bem como seus menus e submenus possuem um layout diferente do utilizado em outras telas.

3. [Pagina logada](https://epartner.vagastec.com.br/) exibe um menu desnecessário no item "Vagas", além de não ser possível clicar no menu via mouse ou teclado.

4. [Pagina logada](https://epartner.vagastec.com.br/) exibe um ícone de lupa para a busca de profissionais, que quando clicado me leva pra uma tela legada informando que a sessão foi interrompida.

5. [Página de vagas](https://epartner.ad.vagastec.com.br/vagas) perde o ícone de lupa (busca de profissionais).

6. [Pagina logada](https://epartner.vagastec.com.br/) os ícones de novidades, chat e ajuda são inacessíveis via teclado.

7. [Pagina logada](https://epartner.vagastec.com.br/) o ícone de lupa (busca de profissionais) possui uma descrição incoerente com a ação em leitores de tela, lendo "Cadastrar profissionais" ao invez de "Busca por profissionais".

8. [Pagina logada](https://epartner.vagastec.com.br/) o ícone de ajuda não possui descrição acessível, lendo apenas "button" em leitores de tela

9. [Pagina logada](https://epartner.vagastec.com.br/) o menu de usuário e o menu de dashboard (marketplace) não esta acessível, informa que é um link quando na verdade é um menu.

10. [Página logada](https://epartner.vagastec.com.br/) o menu de usuário não possui todos os itens de usuário, a exemplo, pra se alterar a imagem de avatar do usuário, somente na home é possível encontrar a opção, o que dificulta quando o usuário está em outras páginas, visualiza o menu de usuário do header, mas não encontra a opção no menu.

11. [Pagina logada](https://epartner.vagastec.com.br/) a nav bem como as listas não possuem descrição acessível. A lista utilizada no menu de usuário informa 4 itens, quando há 2 apenas. O mesmo problema ocorre no menu de dashboard (marketplace).

12. [Pagina logada](https://epartner.vagastec.com.br/) o botão de ajuda não informa ou foca, no conteúdo exibido quando clicado (sidenav). Impedindo a leitura do mesmo em leitores de tela.

13. [Pagina logada](https://epartner.vagastec.com.br/) os botões com ícone não possuem tooltip, o que pode acarretar na não compreensão da funcionalidade do ícone. Estas tooltips devem aparecer não somente com o mouse, mas também ao se navegar por teclado.

14. [Pagina logada](https://epartner.vagastec.com.br/) o link relatórios redireciona duas vezes, primeiro para site.vagas.com.br?ruby=1 e pro último ao site de candidatos.

15. [Pagina logada](https://epartner.vagastec.com.br/) o menu de usuário em conjunto com outros botões circulares, e um divisor entre eles está criando varios hierarquias. Sugestão é tornar todos os botões aqui circulares, e o  menu de usuário exibir o avatar ao invez do nome.

### Menu de boas vindas

1. A thumb com a imagem placeholder de usuário, ou a imagem do usuário (caso definida), não são acessíveis via teclado.

2. A thumb com imagem placeholder ou imagem do usuário (caso definida), é acessível no  leitor de tela, porém é lida como um link com uma imagem, e  quando clicada abre a página de Avalie o site ao invéz do modal atual de alteração de imagem que se exibe ao clicar com o mouse. 

3. A thumb deveria levar para uma página de edições do usuário, isso permitiria agrupar melhor as opções de usuário no menu de usuário do Menu Principal (item 10)

4. O link Acompanhar não é tem uma descrição que contextualize o usuário adequadamente. Uma mudança de texto como "Acompanhar vagas" pode melhorar isso facilmente.

### Footer

1. O footer em caso do conteúdo ser menor do que a altura da tela, é exibido deslocado acima da posição que deveria manter, que é no inferior da página, por questões de hierarquia.
