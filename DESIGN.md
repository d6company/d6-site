---
name: D6 Digital
description: Software house brasileira que constrói SaaS, sistemas e automações com IA integrada desde o início.
colors:
  void-base: "#030408"
  void-deep: "#020306"
  nav-surface: "#0D0E1A"
  text-primary: "#E8ECF8"
  text-muted: "#6B7699"
  text-dim: "#2A2F45"
  text-placeholder: "#3A3F5C"
  text-secondary: "#8892B4"
  violet-primary: "#7B5CF5"
  violet-light: "#A78BFA"
  violet-pale: "#C084FC"
  blue-signal: "#4A9FE8"
  teal-confirm: "#38C4B4"
typography:
  display:
    fontFamily: "'Space Grotesk', sans-serif"
    fontSize: "clamp(28px, 5.5vw, 64px)"
    fontWeight: 900
    lineHeight: "0.95"
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Space Grotesk', sans-serif"
    fontSize: "clamp(22px, 4vw, 48px)"
    fontWeight: 900
    lineHeight: "1"
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Space Grotesk', sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "1.3"
  body:
    fontFamily: "'Inter', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.7"
  label:
    fontFamily: "'Inter', sans-serif"
    fontSize: "10px"
    fontWeight: 700
    lineHeight: "1"
    letterSpacing: "0.3em"
rounded:
  card: "24px"
  input: "12px"
  pill: "9999px"
spacing:
  section-sm: "64px"
  section-lg: "128px"
  card-sm: "20px"
  card-lg: "32px"
  container: "24px"
components:
  button-primary:
    backgroundColor: "{colors.violet-primary}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.04)"
    textColor: "rgba(255,255,255,0.8)"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  input-default:
    backgroundColor: "rgba(255,255,255,0.04)"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.input}"
    padding: "14px 16px"
---

# Design System: D6 Digital

## 1. Overview

**Creative North Star: "O Terminal Orbital"**

Um terminal de engenharia no espaço profundo. A D6 constrói dentro de uma escuridão quase absoluta, onde cada cor é sinal funcional, não decoração. O fundo é vácuo (#030408), denso o suficiente para absorver qualquer excesso. Os acentos, violeta, azul e teal, são os únicos pontos de luz: surgem onde há ação, onde o sistema confirma, onde o usuário precisa olhar.

A tipografia não pede licença. Space Grotesk em peso 900, letras maiúsculas, compressão de leading para 0.95, texto que ocupa espaço como engenharia ocupa plantas: com intenção e sem folga. Inter cuida do funcional, neutra e legível, sem chamar atenção para si. A hierarquia é brutal: display domina, corpo serve, eyebrow orienta.

O sistema rejeita qualquer coisa que pareça ter sido montada a partir de um template. Nenhum gradiente no texto como ornamento. Nenhum glassmorphism decorativo. Nenhuma sombra dramática. A profundidade vem de camadas tonais e de brilhos radiais que funcionam como luz vazando pelo chão de uma sala escura. O que não serve, não existe.

**Key Characteristics:**
- Fundo vácuo com acentos funcionais: cor como sinal, não cenário
- Display tipográfico em peso máximo com leading comprimido
- Cards como volumes flutuantes sobre escuridão, sem sombra convencional
- Motion de entrada em scroll: opacity + translate, staggered, ease-out exponencial
- Eyebrow labels em uppercase tracking extremo marcam seções antes do título

## 2. Colors: O Cosmos de Engenharia

Paleta de full palette: quatro papéis nomeados usados com deliberação. A neutralidade é o vácuo. Os acentos são displays de sistema, cada um com função distinta.

### Primary
- **Violeta de Circuito** (#7B5CF5): O sinal principal. CTAs, labels de seção, bordas de foco, fundos de botão primário. Aparece em 30-40% das superfícies interativas.
- **Violeta Claro** (#A78BFA): Eyebrows, roles de time, acentos secundários onde o primário seria pesado demais.
- **Lavanda de Destaque** (#C084FC): Gradientes de título na seção de contato. Raramente sozinho.

### Secondary
- **Azul de Terminal** (#4A9FE8): Cases e itens de sistema que requerem atenção técnica. Sinaliza processamento, informação.

### Tertiary
- **Teal de Confirmação** (#38C4B4): Estados de sucesso, cases de gestão/educação, contraste cromático contra o violeta.

### Neutral
- **Vácuo Base** (#030408): Background de 95% de toda superfície. Não é preto: tem chroma mínimo em direção ao violeta.
- **Vácuo Profundo** (#020306): Footer, camadas mais baixas que o main.
- **Superfície Nav** (#0D0E1A): Navbar no estado scrolled. Único elemento que usa uma camada levemente elevada.
- **Texto Principal** (#E8ECF8): Títulos, valores, qualquer texto que precisa ser lido primeiro.
- **Texto Muted** (#6B7699): Corpo de parágrafos, descrições de card. Contraste suficiente, presença reduzida.
- **Texto Dim** (#2A2F45): Footer, metadados, informação terciária.
- **Texto Placeholder** (#3A3F5C): Placeholders de input.
- **Texto Secundário** (#8892B4): Lista de confirmações, itens de checklist.

### Named Rules
**A Regra do Sinal.** Cor é informação, não atmosfera. O violeta aparece onde o usuário precisa agir ou onde o sistema confirma hierarquia. Azul sinaliza referência técnica. Teal sinaliza confirmação. Nunca os três no mesmo elemento.

**A Regra do Vácuo.** O fundo não é preto, é quase preto com chroma violeta mínimo. A diferença entre #030408 e #000000 é invisível mas perceptível: o segundo parece morte, o primeiro parece espaço profundo.

## 3. Typography

**Display Font:** Space Grotesk (Google Fonts, weight 300/400/500/600/700/900)
**Body Font:** Inter (Google Fonts, weight 300/400/500/600)

**Character:** Space Grotesk em peso 900 é agressivamente geométrico, compacto, técnico sem ser frio. Inter é o oposto: neutra, legível, invisível quando funciona bem. A combinação não tenta elegância: tenta precisão.

### Hierarchy
- **Display** (900, clamp(28px, 5.5vw, 64px), line-height 0.95, tracking -0.02em): Títulos de seção em maiúsculas. O bloco tipográfico é o visual, não ilustração.
- **Headline** (900, clamp(22px, 4vw, 48px), line-height 1, tracking -0.01em): Títulos de subsections, hero secondary.
- **Title** (700, 20px, line-height 1.3): Títulos de card, nomes de produto dentro de cases.
- **Body** (400, 16px, line-height 1.7, cor #6B7699, max 65ch): Descrições, parágrafos de serviço. Nunca em branco; sempre em muted (#6B7699) para reduzir tensão com os títulos.
- **Label** (700, 10px, letter-spacing 0.3em, uppercase, cor do acento da seção): Eyebrows de seção. Aparecem antes do Display, na cor do acento temático da seção.

### Named Rules
**A Regra do Uppercase Display.** Títulos de seção em Display são sempre maiúsculos. Minúsculas são permitidas apenas em body e no nome da marca no rodapé.

**A Regra do Leading Comprimido.** Display usa line-height 0.95, não 1.2. O bloco tipográfico precisa sentir peso e intenção, não conforto.

## 4. Elevation

O sistema não usa sombras convencionais. Profundidade é criada por dois mecanismos: camadas tonais (superfícies com rgba branco mínimo sobre o vácuo base) e brilhos radiais difusos que simulam luz emanando de dentro da superfície.

### Shadow Vocabulary
- **Glow Radial de Seção** (`radial-gradient(circle, rgba(123,92,245,0.05-0.08), transparent 70%)` + `filter: blur(60-80px)`): Posicionado em cantos ou centro de seção. Cria senso de luz ambiente sem revelar fonte.
- **Glow de Nav** (`box-shadow: 0 0 50px rgba(123,92,245,0.08)`): Aplicado somente na navbar no estado scrolled. Ancora o pill no espaço.
- **Barra de Acento** (`h-0.5`, linear-gradient do acento para transparent): Linha de 2px na borda superior de cards. Substitui shadow como elemento de elevação visual.

### Named Rules
**A Regra do Plano Sem Sombra.** Cards não têm box-shadow. Elevação vem da combinação de fundo levemente mais claro que o vácuo (rgba(255,255,255,0.04)) mais a borda de acento no topo. Se precisar de sombra, a resposta é errada; rever a estrutura do componente.

## 5. Components

### Buttons
- **Shape:** pill completo (border-radius: 9999px), sem angulação
- **Primary:** bg #7B5CF5, texto #E8ECF8, padding 10px 20px, font-semibold 14px. Hover: opacity 0.9. Active: scale(0.95).
- **Ghost:** bg rgba(255,255,255,0.04), border 1px rgba(255,255,255,0.1), texto rgba(255,255,255,0.8), mesmas dimensões. Hover: texto branco, border rgba(123,92,245,0.5).
- **Mobile CTA expandido:** bg #7B5CF5, pill, padding 16px 32px, font-bold 18px. Usado no menu mobile overlay.

### Cards
- **Corner Style:** 24px radius (rounded-3xl)
- **Background:** linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))
- **Border:** 1px solid acento da categoria em 13% de opacidade (`${accent}22`)
- **Barra de Acento:** 2px no topo, linear-gradient do acento para transparent, direção 90deg
- **Shadow:** nenhuma; elevação via background tonal e barra de acento
- **Internal Padding:** 20px mobile, 32px desktop

### Inputs / Fields
- **Style:** border-radius 12px, bg rgba(255,255,255,0.04), border 1px rgba(255,255,255,0.08)
- **Focus:** borderColor muda para rgba(123,92,245,0.5); sem outline nativo; transição 150ms
- **Label:** texto-xs, font-semibold, tracking-wide, uppercase, cor #6B7699; posicionado acima do campo
- **Placeholder:** cor #3A3F5C

### Navigation
- **Estado padrão (topo):** transparente, full-width, logo 34px, links text-sm medium #6B7699, CTA ghost pill
- **Estado scrolled:** pill centralizado max-w-xl, bg #0D0E1A/90, backdrop-blur-xl, border white/7, shadow violet glow; logo 28px; CTA passa a bg #7B5CF5
- **Transição:** duration-500 em todas as propriedades; suave e imperceptível ao usuário casual
- **Mobile:** overlay fullscreen bg #030408/98 backdrop-blur-2xl; links em 3xl bold empilhados; CTA pill grande

### Eyebrow Label (Signature Component)
Elemento recorrente que abre cada seção antes do título Display. Sempre: text-xs (12px), font-semibold (600), tracking-[4px] (0.25em), uppercase, cor do acento temático da seção. Margin-bottom 20px antes do Display. Nunca reutiliza a mesma cor em seções adjacentes: violet, teal, blue alternam para criar ritmo cromático enquanto se faz scroll.

## 6. Do's and Don'ts

### Do:
- **Do** usar Space Grotesk 900 em maiúsculas para todos os títulos de seção, com line-height 0.95 e tracking negativo.
- **Do** variar a cor do eyebrow por seção (#7B5CF5 em serviços, #38C4B4 em cases, etc.) para criar ritmo visual enquanto o usuário faz scroll.
- **Do** usar barra de acento de 2px no topo do card como marcador de categoria, com gradient do acento para transparent.
- **Do** criar profundidade com glow radial difuso (blur 60-80px, opacidade 5-8%) posicionado fora da área de leitura.
- **Do** animar entradas com opacity + translateY, staggered 0.1s por elemento, ease-out exponencial, duration 500-600ms.
- **Do** respeitar `prefers-reduced-motion`: desativar star field, orbitais e animações de entrada quando a preferência for reduzida.

### Don't:
- **Don't** usar gradient no texto (`background-clip: text`). O sistema atual tem isso e é um débito técnico; novos elementos não devem repeti-lo.
- **Don't** criar agência genérica brasileira: fundo branco, gradiente roxo em header, "somos apaixonados por tecnologia". Qualquer variante disso é proibida.
- **Don't** usar o template hero-metric: número grande, label pequeno, estatísticas de suporte. É o clichê do SaaS americano e está na lista de anti-referências.
- **Don't** usar sombra convencional (box-shadow com blur e spread significativos) em cards ou superfícies. Profundidade vem de tonal layering e barra de acento.
- **Don't** usar glassmorphism decorativo. A navbar scrolled usa backdrop-blur com propósito funcional (legibilidade sobre conteúdo em scroll); isso não autoriza blur em cards ou modais.
- **Don't** usar portfólio-de-freelancer: foto centralizada dos fundadores, barra de progresso de skill, timeline de experiência. A seção de founders usa cards de foto com role técnico, nunca infográfico pessoal.
- **Don't** usar neon on black, glitch, contador regressivo, ou qualquer padrão de hype/crypto. O violeta #7B5CF5 não é neon: tem luminosidade controlada. Se um elemento parecer elétrico demais, reduzir a opacidade ou substituir pela variante clara (#A78BFA).
- **Don't** usar cards com ícone + heading + texto repetidos em grid idêntico. Cases usam accent variado e grid 4-colunas com micro-diferenças; serviços usam numeração e gradiente direcional distinto por item.
