# AGENTS.md — Bar da Vila 1970

## Projeto

Site institucional de página única para o **Bar da Vila 1970** (boteco em São Paulo, desde 1970).

## Stack

- HTML5 + CSS3 + JS puro — **sem dependências, sem build**
- Hospedagem: GitHub Pages (branch `main`, raiz do repo)
- Mobile-first (celular > tablet > desktop) · **light mode** por padrão, rodapé grafite como contraponto

## Comandos

- Servidor local (obrigatório para testar): `python3 -m http.server 8899 --bind 127.0.0.1`
- Nunca testar via `file://`: o iframe do Google Maps loga erro de console e o Lighthouse não roda
- Lighthouse: rodar sobre `http://127.0.0.1:8899/index.html`. Baseline: a11y 100 · BP 100 · SEO 100 · CLS ≈ 0.056 (a métrica está verde; score ~0.98 exibido pela ferramenta é artefato da curva)

## Estrutura

```
index.html                  → página única (7 seções + rodapé)
css/style.css               → design system + layout (mobile-first)
js/main.js                  → menu mobile, abas do cardápio (WAI-ARIA), scroll suave, scrollspy
docs/logo.png / logo-transparente.png
docs/fotos/                 → fotos ilustrativas (Unsplash) — crédito no rodapé é obrigatório
PLANO.md                    → dados reais, design system e pendências
```

## Design system (tokens em `css/style.css`)

- `--azul` `#2F329E` (principal) · `--azul-claro` `#6A6FD4` (hovers/gradientes)
- `--fundo` `#F5F4EF` · `--superficie` `#FFFFFF` · `--borda` `#DEDAD0` · `--texto` `#171A1F` · `--texto-suave` `#555860` · `--link` `#4A4FA8`
- `--amarelo` `#EED42E` · `--amarelo-texto` `#7A6A00` · `--vermelho` `#C0392B`
- Tokens dark antigos (`--branco`, `--grafite-borda`, `--grafite-superficie`) continuam no `:root`, mas **só** o rodapé escuro e os botões azuis os usam (`color: var(--branco)`) — não reintroduzir dark mode
- Títulos: Bebas Neue (display); corpo: Inter; mono: JetBrains Mono (etiquetas/preços)

## Seções (ordem) e dados reais

Hero · Sobre · Destaques (chips) · Cardápio (6 abas) · Eventos · Galeria (6 fotos + 1 no Sobre) · Contato (mapa, WhatsApp, Instagram).

- Endereço: Rua Coronel Luís Schimidt, 219 — Vila das Belezas, São Paulo/SP, CEP 05841-130
- Horários: Ter a Dom 7h–23h · Sex e Sáb 7h–22h · **Segunda fechado**
- Instagram: @bardavila.1970 · Google 4.8 ★ (52 avaliações) · Preço médio R$ 40–60 · Sem delivery

## Gotchas de CSS (verificados na prática)

- **`aspect-ratio` em `<img>` é ignorado** (o elemento tem razão intrínseca — a galeria quebrou por isso). Padrão da galeria: wrapper `<div class="galeria-midia">` (elemento comum, `aspect-ratio: 4/3`, `overflow: hidden`) com `<img>` em `width/height: 100%` + `object-fit: cover`. O Sobre usa outro padrão: img com `max-height: 460px`. Não trocar um pelo outro.
- **Contraste:** branco sobre `--azul-claro` reprova (3.9:1) — chips de destaque usam azul sólido. `--amarelo` só sobre fundo escuro (rodapé/CTA); sobre fundo claro usar `--amarelo-texto`.
- Fotos da galeria devem reservar espaço (CLS): wrapper já cuida disso; manter `width`/`height` nos `<img>`.

## Regras de trabalho

- Não adicionar dependências nem build; seguir sempre os tokens do PLANO.md
- Cardápio, eventos e agenda têm placeholders — **não inventar itens como se fossem reais**
- Fotos da galeria são ilustrativas (Unsplash) — manter o crédito no rodapé até substituir pelas reais
- Manter acessibilidade (contraste ≥ 4.5:1, alt text, navegação por teclado) e SEO (meta tags, Open Graph, favicon)
- O modelo não enxerga screenshots: validar render via `getComputedStyle`/`getBoundingClientRect` no DOM (ex.: conferir que as imagens da galeria renderizam 4:3 e não na altura natural)
