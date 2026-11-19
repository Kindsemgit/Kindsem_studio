# Как развернуть шаблон в новом проекте

Этот файл — только для шаблона. В новый проект его не копируй (или удали после настройки).

## Что где лежит

| Уровень | Где | Что |
|---|---|---|
| Глобальный | `~/.claude/` | Личные правила (`CLAUDE.md`), команды `/plan`, `/execute`, `/review`, `/refactor`, `/test`, `/doc`, `/commit`, запреты и хук-блокировщик опасных команд (`settings.json`, `hooks/`). Копировать не нужно — действуют во всех проектах |
| Шаблон | эта папка | Правила для всех ассистентов (`AGENTS*.md`) и короткие указатели на них для Claude, Cursor, Copilot |
| Проект | новая папка | Шаблон + заполненные пропуски `<...>` |

## Шаги

1. Скопируй содержимое папки в новый проект (кроме `TEMPLATE.md`).
2. Удали файлы стеков, которых нет в проекте:
   - `AGENTS_BACKEND.md` и `.claude/skills/backend/` — если нет Python;
   - `AGENTS_NODE.md` и `.claude/skills/node/` — если нет Node.js;
   - `AGENTS_FRONTEND.md`, `.claude/skills/frontend/` и `.cursor/rules/30-web.mdc` — если нет вёрстки.
   И убери их из раздела «Ссылки» в `AGENTS.md`.
3. Заполни `<...>` в `AGENTS.md` (раздел «Технические детали»), `CLAUDE.md`, `README.md`, `.env.example`.
4. `git init`, первый коммит: `chore: каркас проекта`. Проверь `git status` — в коммит не должны попасть `CLAUDE.md`, `.claude/`, `.cursor/`, `.github/copilot-instructions.md`.

## Что идёт в git

- **Да:** `AGENTS*.md`, `README.md`, `docs/`, `.gitignore`, `.env.example`, код.
- **Нет (локально):** `CLAUDE.md`, `.claude/`, `.cursor/`, `.github/copilot-instructions.md`, `.env`, `tmp/`.

## Как дополнять

- Правило для всех проектов и всех ассистентов → `AGENTS.md` или `AGENTS_*.md` здесь, в шаблоне.
- Личное правило только для Claude → `~/.claude/CLAUDE.md`.
- Новая команда для Claude → файл в `~/.claude/commands/`.
- Новый стек → `AGENTS_<СТЕК>.md` + скилл-указатель в `.claude/skills/<стек>/SKILL.md` + строка в «Ссылки» в `AGENTS.md`.
