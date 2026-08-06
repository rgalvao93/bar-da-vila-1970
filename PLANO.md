# Plano do Site — Bar da Vila 1970

## 1. Dados reais coletados (fonte: Google Maps / Instagram / Restaurant Guru)

| Campo | Valor |
|---|---|
| Nome | Bar da Vila 1970 |
| Endereço | Rua Coronel Luís Schimidt, 219 — Vila das Belezas, São Paulo/SP, CEP 05841-130 |
| Coordenadas | -23.644282, -46.740688 |
| Horários | Ter a Dom: 7h–23h · Sex e Sáb: 7h–22h · **Segunda: fechado** |
| Instagram | @bardavila.1970 (Eventos · Futebol na TV · Porções) |
| Avaliação | Google 4.8 ★ (52 avaliações) |
| Perfil | Bar/cocktail bar, preço médio R$ 40–60 |
| Extras | Cartão aceito · Takeaway · Sem delivery |

## 2. Identidade visual (derivada do logo)

- **Azul royal** `#2F329E` — cor principal (botões, blocos de data, destaques)
- **Azul claro** `#6A6FD4` — variação para gradientes/hovers
- **Grafite** `#171A1F` — cor dos textos e rodapé
- **Off-white** `#F5F4EF` — fundo claro do site (light mode)
- **Amarelo 70s** `#EED42E` — acento (aba ativa, botão CTA); texto em amarelo usa o tom escuro `#7A6A00` para contraste
- **Tipografia:** display retrô (sans condensada estilo anos 70) para títulos + sans moderna para corpo
- **Tons:** light mode (fundo off-white), rodapé escuro como contraponto; azul royal do logo

## 3. Estrutura do site (single page, HTML/CSS/JS puro)

### Seções
1. **Hero** — logo, nome, slogan, botões (Ver cardápio / Como chegar)
2. **Sobre** — história do boteco, "desde 1970", espírito de vila, pontos fortes
3. **Destaques** — chips: 🍺 Cerveja gelada · 🕺 Eventos · ⚽ Futebol na TV · 🍟 Porções
4. **Cardápio** — abas por categoria (Cervejas, Drinks, Porções, Petiscos, Destilados, Sem álcool)
5. **Eventos** — agenda de eventos e shows
6. **Galeria** — fotos do bar e comidas
7. **Contato/Localização** — endereço, horários, mapa embutido (Google Maps), WhatsApp, Instagram

### Rodapé
Logo, redes sociais, endereço, horário resumido, créditos

## 4. Conteúdo do cardápio

> ⚠️ O cardápio completo do bar não estava disponível publicamente.
> Estrutura pronta com categorias + itens de exemplo, marcados para substituição.

**Categorias planejadas:**
- Cervejas (long neck, litrão, 600ml)
- Drinks e coquetéis autorais
- Destilados (cachaça, gin, vodka, whisky)
- Porções e petiscos
- Comidas (pratos e executivos)
- Sem álcool (sucos, refrigerantes)
- Cafés

## 5. Arquitetura técnica

- **Stack:** HTML5 + CSS3 + JavaScript puro (sem dependências, sem build)
- **Hospedagem:** GitHub Pages (branch `main`, raiz do repo)
- **Arquivos:**
  ```
  index.html          → estrutura da página única
  css/style.css       → design system + layout
  js/main.js          → navegação, abas do cardápio, scroll suave
  docs/logo.png       → logo original
  docs/logo-transparente.png → logo recortado (uso no site)
  docs/fotos/         → fotos ilustrativas (Unsplash, licença livre)
  ```
- **Responsivo:** mobile-first (celular > tablet > desktop)
- **Acessibilidade:** contraste adequado, alt text, navegação por teclado
- **SEO:** meta tags, Open Graph, favicon (logo)
- **Fotos:** ilustrativas do banco Unsplash (crédito no rodapé) — substituir pelas reais do bar

## 6. Etapas de implementação

1. ✅ Logo tratado (`logo-transparente.png`)
2. ✅ Estrutura HTML + design system CSS (cores, tipografia)
3. ✅ Seções: Hero, Sobre, Destaques
4. 🚧 Cardápio com abas (estrutura pronta — itens de exemplo a substituir pelos reais)
5. 🚧 Eventos + Galeria (estrutura pronta — agenda e fotos pendentes)
6. ✅ Contato com mapa embutido e links (WhatsApp pendente)
7. ✅ Responsivo + acessibilidade + SEO (Lighthouse: a11y 100 · best practices 100 · SEO 100)
8. ⏳ Deploy no GitHub Pages e revisão final

## 7. Pendências (preciso de você)

- [ ] Telefone/WhatsApp oficial para o botão de contato
- [ ] Cardápio real (fotos ou lista do bar) para substituir os placeholders
- [ ] Fotos reais do bar para a galeria
- [ ] Texto de história do bar (ou aprovo um texto padrão)
- [ ] Confirmar horários exatos (ter 7h–23h? sex/sáb 7h–22h?)
