# Bar da Vila 1970

Site institucional de página única do **Bar da Vila 1970** — boteco na Vila das Belezas, São Paulo, desde 1970.

🔗 Publicado em: https://rgalvao93.github.io/bar-da-vila-1970/

## Sobre

Página única com: hero · sobre · destaques · cardápio em abas · eventos · galeria · contato com mapa. Light mode, mobile-first, rodapé escuro como contraponto.

## Stack

- HTML5 + CSS3 + JavaScript puro — **sem dependências, sem build**
- Hospedagem: GitHub Pages (branch `main`, raiz do repo)

## Rodando localmente

```bash
python3 -m http.server 8899 --bind 127.0.0.1
```

Abra http://127.0.0.1:8899/ — nunca teste via `file://` (o iframe do Google Maps loga erro de console e o Lighthouse não roda).

## Estrutura

```
index.html       → página única (7 seções + rodapé)
css/style.css    → design system + layout (mobile-first)
js/main.js       → menu mobile, abas do cardápio (WAI-ARIA), scroll suave
docs/            → logo e fotos ilustrativas (Unsplash)
AGENTS.md        → instruções de trabalho para agentes
PLANO.md         → dados reais, design system e pendências
TASKS.md         → tarefas pendentes do site
```

## Status

Site publicado com estrutura completa. Cardápio, eventos, WhatsApp e fotos ainda têm placeholders — ver [TASKS.md](TASKS.md) para as pendências.
