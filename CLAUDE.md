# Rooftop Roulette

## Layout rules
- **Breathing room is standard, never ad hoc.** Every heading, eyebrow label or status line gets set space from the content it introduces, and from the section before it. Use the tokens in `rr-game-src/index.template.html`:
  - `--gap-label` (12px): a label or heading to its own content (e.g. "Cards" to the card grid, "Played" to its list).
  - `--gap-section` (22px): one section to the next.
  - Larger headings (sheet titles, h3) get at least `--gap-label` below; page titles more.
- Never let a label sit tight against the cards or rows under it, including when an optional element between them (a progress bar, a note) is hidden. Space belongs to the label, not to the element that might disappear.
- Check every new or changed screen in a screenshot before shipping, looking specifically at the space under each label.
