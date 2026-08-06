# TASKS.md — Bar da Vila 1970

Tarefas do site, priorizadas. Site já publicado: https://rgalvao93.github.io/bar-da-vila-1970/

## Conteúdo (precisa de dados do bar)

- [ ] **Telefone/WhatsApp oficial** — botão "WhatsApp" está desabilitado com `href="#"` (index.html:286). Substituir por link `https://wa.me/55...`
- [ ] **Cardápio real** — substituir os itens de exemplo das 6 abas (index.html:130) pelos itens e preços reais; depois remover a nota "Preços de referência — cardápio oficial em breve" (index.html:183)
- [ ] **Fotos reais do bar** — substituir as fotos ilustrativas do Unsplash na galeria (6) e no Sobre (balcao.jpg); ao substituir, remover o crédito "Fotos ilustrativas: Unsplash" do rodapé
- [ ] **Texto da história do bar** — aprovar versão real (TODO no index.html:87)
- [ ] **Confirmar horários** — Ter a Dom 7h–23h · Sex e Sáb 7h–22h · Segunda fechado (fonte: Google Maps)

## Melhorias técnicas

- [ ] **Agenda de eventos** — seção Eventos está com agenda placeholder; preencher com eventos reais quando houver
- [ ] **og:image** — apontar para uma foto (docs/fotos) em vez do logo, para previews mais ricos ao compartilhar
- [ ] **Lighthouse mobile** — rodar audit mobile após mudanças de conteúdo (baseline desktop: a11y 100 · BP 100 · SEO 100 · CLS 0.056)

## Feito

- [x] Estrutura completa do site (7 seções + rodapé) em light mode
- [x] Galeria com fotos ilustrativas 4:3 (wrapper `.galeria-midia`)
- [x] Acessibilidade e SEO (Lighthouse desktop: a11y 100 · BP 100 · SEO 100)
- [x] Deploy no GitHub Pages (branch `main`)

## Regras ao editar

- Não inventar itens de cardápio/eventos como se fossem reais — usar os placeholders até receber os dados
- Fotos: manter `width`/`height` nos `<img>` e o padrão `.galeria-midia` (aspect-ratio em `<img>` não funciona)
- Servidor local para testar: `python3 -m http.server 8899 --bind 127.0.0.1` (não usar `file://`)
