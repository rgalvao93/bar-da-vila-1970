"use strict";

/* ============================================================
   BAR DA VILA 1970 — navegação, abas do cardápio, menu mobile
   JS puro, sem dependências
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Menu mobile ---------- */
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const aberto = menu.classList.toggle("is-aberto");
      toggle.setAttribute("aria-expanded", String(aberto));
      toggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    });

    menu.addEventListener("click", (evento) => {
      const link = evento.target.closest("a");
      if (link) {
        menu.classList.remove("is-aberto");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menu");
      }
    });

    document.addEventListener("keydown", (evento) => {
      if (evento.key === "Escape") {
        menu.classList.remove("is-aberto");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menu");
        toggle.focus();
      }
    });
  }

  /* ---------- Abas do cardápio (WAI-ARIA tabs) ---------- */
  const abas = Array.from(document.querySelectorAll(".aba"));
  const paineis = Array.from(document.querySelectorAll(".painel"));

  function ativarAba(aba) {
    abas.forEach((outra) => {
      const ativa = outra === aba;
      outra.classList.toggle("is-ativa", ativa);
      outra.setAttribute("aria-selected", String(ativa));
      outra.tabIndex = ativa ? 0 : -1;
    });

    paineis.forEach((painel) => {
      const ativo = painel.id === aba.getAttribute("aria-controls");
      painel.hidden = !ativo;
      painel.classList.toggle("is-ativa", ativo);
    });
  }

  if (abas.length) {
    abas.forEach((aba, indice) => {
      aba.addEventListener("click", () => ativarAba(aba));

      aba.addEventListener("keydown", (evento) => {
        const tecla = evento.key;
        let proximo = null;

        if (tecla === "ArrowRight" || tecla === "ArrowDown") {
          proximo = abas[(indice + 1) % abas.length];
        } else if (tecla === "ArrowLeft" || tecla === "ArrowUp") {
          proximo = abas[(indice - 1 + abas.length) % abas.length];
        } else if (tecla === "Home") {
          proximo = abas[0];
        } else if (tecla === "End") {
          proximo = abas[abas.length - 1];
        }

        if (proximo) {
          evento.preventDefault();
          ativarAba(proximo);
          proximo.focus();
        }
      });
    });
  }

  /* ---------- Scroll suave com compensação do topo fixo ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (evento) => {
      const alvo = document.querySelector(link.getAttribute("href"));
      if (!alvo) return;

      evento.preventDefault();
      const topo = alvo.getBoundingClientRect().top + window.scrollY - 60;

      if (reduzido) {
        window.scrollTo(0, topo);
      } else {
        window.scrollTo({ top: topo, behavior: "smooth" });
      }

      history.pushState(null, "", link.getAttribute("href"));
    });
  });

  /* ---------- Navegação ativa conforme o scroll (scrollspy) ---------- */
  const itensNav = Array.from(document.querySelectorAll('.menu a[href^="#"]'));

  function destacarLink() {
    const posicao = window.scrollY + 120;
    let atual = null;

    document.querySelectorAll("main section[id]").forEach((secao) => {
      if (secao.offsetTop <= posicao) atual = secao.id;
    });

    itensNav.forEach((item) => {
      const alvo = item.getAttribute("href").slice(1);
      item.classList.toggle("is-atual", alvo === atual);
    });
  }

  itensNav.forEach((item) => {
    item.classList.add("is-atual");
  });

  window.addEventListener("scroll", destacarLink, { passive: true });
  destacarLink();
});
