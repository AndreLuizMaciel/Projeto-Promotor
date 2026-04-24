import React from "react";
import { Link } from "react-router-dom";

const COLUMNS = [
  {
    title: "Estrutura",
    links: [
      { label: "Projeto Promotor", path: "/projeto" },
      { label: "Governança", path: "/governanca" },
      { label: "Modelo de Atuação", path: "/atuacao" },
    ],
  },
  {
    title: "Inteligência",
    links: [
      { label: "Estratégias Quantitativas", path: "/quantitativas" },
      { label: "Estratégias Qualitativas", path: "/qualitativas" },
      { label: "NEXUS", path: "/nexus" },
    ],
  },
  {
    title: "Execução",
    links: [
      { label: "Mão na Massa", path: "/mao-na-massa" },
      { label: "Boas Práticas", path: "/boas-praticas" },
      { label: "Premiações", path: "/premiacoes" },
    ],
  },
  {
    title: "Conhecimento",
    links: [
      { label: "Artigos Técnicos", path: "/artigos" },
      { label: "Autores", path: "/autores" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">P</span>
            </div>
            <span className="text-foreground font-semibold text-sm">Projeto Promotor</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 Projeto Promotor — Excelência, Dados e Resultado. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
