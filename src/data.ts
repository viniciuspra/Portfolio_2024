import focusTimer from "@/assets/focus-timer2-0-project.png";
import filmFanatic from "@/assets/filmfanatic-project.png";
import facilitaAi from "@/assets/facilita-ai-project.png";
import rocketpay from "@/assets/rocketpay-project.png";
import rocketnotes from "@/assets/rocketnotes-project.png";
import chirpify from "@/assets/Chirpify.png";
import foodExplorer from "@/assets/FoodExplorer.png";
import GitFav from "@/assets/GitFav.png";

export interface ProjectProps {
  id: number;
  category?: string;
  img: string;
  title: string;
  subtitle: string;
  description: string;
  url?: string;
  url_github?: string;
  color: string;
}

export const projects: ProjectProps[] = [
  {
    id: 0,
    category: "Frontend",
    img: focusTimer,
    title: "Focus Timer 2.0",
    subtitle: "Pomodoro App",
    description:
      "O Focus Timer 2.0 é uma ferramenta de gerenciamento de tempo baseada na técnica Pomodoro, projetada para ajudá-lo a manter o foco e a produtividade durante suas sessões de trabalho.",
    url: "https://focus-timer2-0-viniciuspra.vercel.app",
    url_github: "https://github.com/viniciuspra/Focus-Timer2.0",
    color: "#121214",
  },
  {
    id: 1,
    category: "FullStack",
    img: filmFanatic,
    title: "FilmFanatic",
    subtitle: "Nota de Filmes",
    description:
      "O FilmFanatic é uma aplicação que permite aos usuários registrar e avaliar os filmes que assistiram, fornecendo uma maneira organizada de acompanhar e revisitar suas experiências cinematográficas.",
    url: "https://filmfanatic.netlify.app",
    url_github: "https://github.com/viniciuspra/FilmFanatic",
    color: "#B4D42A",
  },
  {
    id: 2,
    category: "FullStack",
    img: facilitaAi,
    title: "facilita.ai",
    subtitle: "IA para transcrição e interação",
    description:
      "O facilita.ai é uma plataforma que utiliza inteligência artificial para transcrever áudio e vídeo em texto, permitindo uma ampla gama de interações baseadas em texto com uma IA integrada.",
    url: "https://facilita-ai.netlify.app",
    url_github: "https://github.com/viniciuspra/facilita-ai-web",
    color: "#6D28D9",
  },
  {
    id: 3,
    category: "Frontend",
    img: rocketpay,
    title: "Rocketpay",
    subtitle: "Landing Page de Pagamentos",
    description:
      "O Rocketpay é um componente que simula o formulário de preenchimento de cartão de crédito, onde é possível adicionar máscara aos inputs e atualizar elementos HTML via DOM.",
    url: "https://rocketpay-six-nu.vercel.app",
    url_github: "https://github.com/viniciuspra/Rocketpay",
    color: "#212125",
  },
  {
    id: 4,
    category: "FullStack",
    img: rocketnotes,
    title: "Rocketnotes",
    subtitle: "App de Notas",
    description:
      "O Rocketnotes é um aplicativo robusto de organização de notas, fornecendo uma maneira eficiente e acessível para os usuários gerenciarem suas anotações pessoais e profissionais.",
    url: "https://rocketnotespro.netlify.app",
    url_github: "https://github.com/viniciuspra/RocketNotes",
    color: "#FF9000",
  },
  {
    id: 5,
    category: "FullStack",
    img: chirpify,
    title: "Chirpify",
    subtitle: "Chat em Tempo Real",
    description:
      "O Chirpify é uma plataforma de chat em tempo real que permite aos usuários se comunicarem instantaneamente, promovendo a colaboração e a conectividade em diversas situações.",
    url: "https://chirpify.netlify.app/",
    url_github: "https://github.com/viniciuspra/Chirpify-chat-client",
    color: "#1F2232",
  },
  {
    id: 6,
    category: "FullStack",
    img: foodExplorer,
    title: "FoodExplorer",
    subtitle: "Aplicativo de restaurantes fictício",
    description:
      "O FoodExplorer é um aplicativo de menu interativo para um restaurante fictício, onde os usuários podem explorar uma variedade de pratos deliciosos. Navegue pelos itens do menu, descubra novos sabores e faça pedidos diretamente pelo aplicativo. Experimente uma experiência gastronômica única com o FoodExplorer!",
    url: "https://foodexplorerpro.netlify.app/",
    url_github: "https://github.com/viniciuspra/FoodExplorer",
    color: "#061A22",
  },
  {
    id: 7,
    category: "FullStack",
    img: GitFav,
    title: "GitFav",
    subtitle: "Aplicativo de Favoritar Usuários do GitHub",
    description:
      "GitFav foi projetado para permitir aos usuários favoritar usuários do GitHub.",
    url: "https://viniciuspra.github.io/GitFav/",
    url_github: "https://github.com/viniciuspra/GitFav",
    color: "#17607D",
  },
];
