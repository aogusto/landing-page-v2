# Augusto Landing Page v2

Landing page pessoal com suporte a dois idiomas (PT/EN) construída com React, TypeScript, Vite e Tailwind CSS.

## 🚀 Tech Stack

- **React 19** - Biblioteca UI
- **TypeScript** - Type safety
- **Vite 7** - Build tool ultra rápido
- **Tailwind CSS 4** - Estilização utility-first
- **react-i18next** - Internacionalização

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/           # Componentes de layout
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── LanguageSelector.tsx
│   ├── sections/         # Seções da página
│   │   ├── HeroSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   └── EducationSection.tsx
│   └── ui/               # Componentes reutilizáveis
│       ├── Icons.tsx
│       └── Spotlight.tsx
├── constants/            # Dados estáticos
│   ├── technologies.ts
│   └── socials.tsx
├── i18n/                 # Configuração de idiomas
│   ├── index.ts
│   └── locales/
│       ├── pt.json       # Traduções em português
│       └── en.json       # Traduções em inglês
├── types/                # Definições de tipos
│   └── index.ts
├── App.tsx               # Componente principal
├── main.tsx              # Entry point
└── index.css             # Estilos globais + Tailwind
```

## 🛠️ Scripts

```bash
# Desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview da build
pnpm preview

# Lint
pnpm lint
```

## 🌐 Internacionalização (i18n)

O projeto usa react-i18next para gerenciar traduções. Os arquivos de tradução estão em src/i18n/locales/.

### Adicionando novas traduções

1. Adicione a chave no arquivo src/i18n/locales/pt.json
2. Adicione a mesma chave com tradução em src/i18n/locales/en.json
3. Use no componente: const { t } = useTranslation(); t('sua.chave')

### Dados dinâmicos por idioma

Para arrays de dados (como experiências e educação), use:
```tsx
const experiences = t('experiences', { returnObjects: true }) as Experience[];
```

## 🎨 Tailwind CSS

O projeto usa Tailwind CSS v4 com o plugin Vite. Configurações customizadas:
- Animações de blob para background
- Scrollbar customizada
- Classes utilitárias para gradientes

## 📝 Mockup

A pasta src/mockup/ contém a versão original do design para referência.

## 📦 Instalação

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev
```
