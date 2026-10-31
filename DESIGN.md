---
name: Rateboard
description: A fast, honest currency converter and watchlist, printed as a boarding pass.
colors:
  ground: "#e6ecf1"
  pass-white: "#ffffff"
  stub-tint: "#f3f6f9"
  navy-ink: "#0f1d2c"
  navy-ink-hover: "#23384d"
  slate-muted: "#4a5968"
  slate-faint: "#7a8896"
  hairline: "#d5dde5"
  perforation: "#b9c5d0"
  pass-edge: "#c9d3dc"
  wash-soft: "#eef2f6"
  wash-strong: "#e2e8ee"
  focus-steel: "#4d7ea8"
  trend-up: "#16855f"
  trend-down: "#c8423b"
  amber-signal: "#d99a00"
  warn-ochre: "#9a6200"
  danger-wash: "#fbeceb"
  night-ground: "#0a1219"
  night-pass: "#13202c"
  night-stub: "#182838"
  night-ink: "#e7eef4"
  night-muted: "#93a3b2"
  night-faint: "#6f8091"
  night-hairline: "#243546"
  night-perforation: "#35506a"
  night-wash-soft: "#1a2938"
  night-wash-strong: "#213244"
  night-field: "#0f1a24"
  night-focus: "#6fa3cf"
  night-trend-up: "#3cc29f"
  night-trend-down: "#f27278"
  night-amber: "#f0b72f"
typography:
  display-code:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "44px"
    fontWeight: 850
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 72"
  display-figure:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "72px"
    fontWeight: 850
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 85"
  headline-rate:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(28px, 3vw, 36px)"
    fontWeight: 850
    lineHeight: 1.05
    letterSpacing: "-0.01em"
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 85"
  title-stub-code:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 850
    lineHeight: 1
    letterSpacing: "0em"
    fontVariation: "'wdth' 72"
  title-amount:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 750
    lineHeight: 1
    fontFeature: "'tnum' 1"
  wordmark:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 85"
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "11px"
    fontWeight: 750
    letterSpacing: "0.12em"
rounded:
  sm: "8px"
  md: "10px"
  alert: "12px"
  stub: "14px"
  pass: "18px"
  sheet: "20px"
  pill: "99px"
spacing:
  hair: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  pass-inset: "22px"
  shell: "24px"
  section: "32px"
components:
  button-primary:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.pass-white}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "42px"
  button-primary-hover:
    backgroundColor: "{colors.navy-ink-hover}"
  button-light:
    backgroundColor: "{colors.wash-soft}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "42px"
  button-light-hover:
    backgroundColor: "{colors.wash-strong}"
  button-copy:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.pass-white}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "42px"
  button-swap:
    backgroundColor: "{colors.pass-white}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.pill}"
    size: "48px"
  input-field:
    backgroundColor: "{colors.pass-white}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: "42px"
  input-amount:
    textColor: "{colors.navy-ink}"
    typography: "{typography.title-amount}"
    rounded: "0px"
    height: "44px"
  segmented:
    backgroundColor: "{colors.wash-strong}"
    textColor: "{colors.slate-muted}"
    rounded: "11px"
    padding: "3px"
  segmented-pressed:
    backgroundColor: "{colors.pass-white}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.sm}"
    padding: "6px 12px"
  pass:
    backgroundColor: "{colors.pass-white}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.pass}"
    padding: "{spacing.pass-inset}"
    width: "760px"
  pass-stub:
    backgroundColor: "{colors.stub-tint}"
    rounded: "{rounded.pass}"
    padding: "18px 22px 4px"
  watch-stub:
    backgroundColor: "{colors.pass-white}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.stub}"
    height: "72px"
  freshness-pill:
    backgroundColor: "{colors.pass-white}"
    textColor: "{colors.slate-muted}"
    rounded: "{rounded.pill}"
    padding: "9px 13px"
---

# Design System: Rateboard

## Overview

**Creative North Star: "The Boarding Pass"**

Rateboard prints a conversion the way an airline prints a journey. The From and To codes read like origin and destination in big condensed capitals, the rate, rate date and source sit in a fields row like the fine print that makes the ticket valid, and the answer lives on a tear-off stub. The pass is cut from paper-white stock laid on a pale blue-grey ground, separated into sections by dotted perforations with half-circle notches bitten out of the edges. The watchlist repeats the idea at small scale: each currency is a stub row, its code standing on a narrow tear-off end divided from the body by a vertical dotted perforation.

The world is navy ink on white and blue-grey, quiet enough that the only saturated colour on screen is trend meaning: green for up, red for down. Density is moderate and phone-first; numbers are always tabular, big ones are set in condensed Archivo, and everything around them is plain system text. In dark mode the paper turns to deep navy on a night-blue ground and the ink turns light, but the notches, perforations and drop-shadowed silhouette stay identical.

The system rejects the category default of two rounded input rows plus a list of soft cards for the converter and watchlist, and it rejects both the bank look and the trading-terminal look.

**Key Characteristics:**
- Paper passes with real notches (masked cutouts, not drawn circles) under a soft drop-shadow that follows the cut silhouette.
- Dotted 2px perforation rules as the only section divider inside a pass or stub.
- Condensed heavy Archivo for codes and figures; system UI for everything else.
- Small uppercase tracked labels name every printed field.
- Navy ink plus blue-grey neutrals; green and red carry trend meaning, never decoration.
- One inline SVG line-icon set, 1.75 stroke.

## Colors

A cool, nearly monochrome navy-and-paper palette where colour is information, not mood.

### Primary
- **Navy Ink** (navy-ink): Text, the primary and Copy buttons, the swap ring, the amount underline, the logo tile. In dark mode the role inverts to Night Ink and primary buttons become light-on-dark.
- **Navy Ink Hover** (navy-ink-hover): Hover state for every navy-filled button.

### Secondary
- **Trend Green** (trend-up / night-trend-up): A rising rate in sparklines, change figures, chart lines and the legend word "green".
- **Trend Red** (trend-down / night-trend-down): A falling rate; also error status text, the destructive Remove hover and danger text, on the Danger Wash (danger-wash).

### Tertiary
- **Amber Signal** (amber-signal / night-amber): Pins, active alert bells, and the triggered-alert tint (12-14% mixed into the paper) on alert bars and stub rows.
- **Warn Ochre** (warn-ochre): Stale or saved-rates status text and the freshness dot's warning state.

### Neutral
- **Blue-Grey Ground** (ground / night-ground): The page surface the passes lie on; also fills the perforation notches so the cut reads as a hole.
- **Pass White** (pass-white / night-pass): The pass and watch-stub stock, dialogs, the freshness pill, input fields.
- **Stub Tint** (stub-tint / night-stub): The pass's tear-off "You get" section, one step off the paper.
- **Slate Muted** (slate-muted / night-muted): Labels, currency names, detail lines, placeholders.
- **Slate Faint** (slate-faint / night-faint): Resting icon buttons and the flat-trend colour.
- **Hairline** (hairline / night-hairline): Field borders, dialog border, dashed empty states, row dividers.
- **Perforation** (perforation / night-perforation): Dotted perforation rules and the hover border shift.
- **Pass Edge** (pass-edge): The 1px lower lip of every pass and stub drop-shadow.
- **Soft Wash / Strong Wash** (wash-soft, wash-strong): Light button fill, hover and selected rows, segmented track, stat tiles, chart well.
- **Focus Steel** (focus-steel / night-focus): The focus outline and field focus border.

### Named Rules
**The Trend-Only Green Rule.** Green means "this rate went up" and nothing else. Red means "went down", or an error or destructive action. Neither may tint a decorative surface, a brand mark or a neutral action.

**The Ground-Through Rule.** Notches and perforation holes show the ground colour, never the paper or a shadow colour; the cut must read as a hole through the stock.

## Typography

**Display Font:** Archivo variable (self-hosted, weights 500-900, widths 62-125%), with ui-sans-serif and system-ui fallback
**Body Font:** System UI stack (ui-sans-serif, system-ui, -apple-system, Segoe UI)

**Character:** Archivo, pulled narrow and heavy, prints the codes and figures like a ticket's machine-set fields; the system face carries the plain-language explanations so the numbers own all the weight.

### Hierarchy
- **Display Code** (850, 44px, width 72%, uppercase; 40px under 520px): The From and To currency codes on the pass. On focus the code becomes a 17px system-text search field.
- **Display Figure** (850, up to 72px, width 85%, tabular): The converted "You get" number. It sizes by container query against its own character count (`min(72px, 100cqi / (len × 0.56))`, 60px cap on phones) so it never wraps or truncates.
- **Headline Rate** (850, clamp 28-36px, width 85%, tabular): Rates in the detail sheet (34px) and stub rows (26px, 22px on phones), with the currency symbol at 17px/600 in muted ink.
- **Title Stub Code** (850, 26px, width 72%): The code on a watch-stub's tear-off end (22px on phones); 30px is the default code size elsewhere.
- **Title Amount** (750, 26px, tabular): The amount entry on the pass.
- **Wordmark** (500 "rate" + 850 "board", 22px, width 85%; 17px on phones).
- **Body** (400, 15px, 1.45): Default text. Secondary lines run 12-13px in muted ink.
- **Label** (750, 11px, 0.12em tracking, uppercase): Names every printed field on the pass (From, To, Amount, Rate, Rate date, Source, You get) and form fields. Stat tiles use a 10.5px/700/0.07em variant.

### Named Rules
**The Tabular Figures Rule.** Every number that can change (amounts, rates, changes, stats, chart labels) uses tabular numerals so columns and updates never jitter.

**The Condensed-For-Codes Rule.** Archivo is for codes, figures and the wordmark only. Sentences, buttons and labels stay in the system face.

## Layout

A single centred shell (max 1160px, 32px top / 24px sides; 16px sides under 820px). Below 1100px the pass (max 760px, centred) stacks above the watchlist; at 1100px and up the layout becomes two columns, a 540px pass that sticks 20px from the top and a fluid watchlist in one column of stubs. Between 520px and 1100px the watchlist is a two-column grid (18px row gap, 14px column gap); under 520px it is one column.

Inside the pass, content is inset 22px (16px on phones). The route row is a three-column grid (code, 48px swap, code); the fields row is three equal columns with Amount spanning the full width (two columns on phones, Source spanning). Spacing steps cluster on 4, 8, 12, 16 and 22px.

## Elevation & Depth

Depth is paper on a table: passes and stubs lift off the ground with a filter drop-shadow so the shadow follows the notched silhouette, including the bitten-out holes. Everything inside a pass is flat; layering inside uses tonal washes (stub tint, soft and strong washes), not shadows. Popovers, toasts and dialogs float with larger ambient shadows.

### Shadow Vocabulary
- **Pass lift** (`filter: drop-shadow(0 1px 0 var(--edge)) drop-shadow(0 12px 16px var(--sh))`): The converter pass.
- **Stub lift** (`filter: drop-shadow(0 1px 0 var(--edge)) drop-shadow(0 3px 4px var(--sh))`): Watchlist stub rows; hover raises the row 1px.
- **Pressed segment** (`box-shadow: 0 1px 3px rgba(20,43,59,.16)`): The active option in a segmented control.
- **Floating** (`box-shadow: 0 14px 40px rgba(0,0,0,.22)` for the currency list, `0 12px 32px rgba(0,0,0,.25)` for the toast, `0 24px 70px rgba(0,0,0,.3)` for dialogs).

### Named Rules
**The Silhouette Shadow Rule.** Paper objects cast their shadow through `filter: drop-shadow`, never `box-shadow`, so notches stay visible as holes in the shadow too.

## Shapes

Corners are gently rounded: the pass at 18px on its outer corners only, stubs at 14px, fields and buttons at 10px, small controls at 8px, the Copy button, swap, freshness pill and counters fully round. The signature geometry is the cut: inner pass section boundaries carry 10px-radius half-circle notches masked out of both edges with a 2px dotted perforation running between them (20px in from each side); watch stubs carry 7px notches top and bottom at the stub line (76px from the left, 64px on phones) with a vertical dotted perforation between them. Notches are real transparency created with radial-gradient masks, not circles painted on top.

## Components

### Buttons
Solid, compact, confident.
- **Shape:** Gently rounded (10px), 42px tall, 700 weight.
- **Primary:** Navy fill, white text, 0 16px; hover deepens to Navy Ink Hover. Disabled at 55% opacity.
- **Light:** Soft Wash fill with navy text; hover to Strong Wash.
- **Copy:** Navy pill (0 20px, 14px text) sitting on the stub; 32px tall and pinned top-right on phones.
- **Icon buttons:** 30px (34px on phones) transparent squares in faint ink, Strong Wash on hover; Remove hovers to Danger Wash with red ink.
- **Focus:** A 2px Focus Steel outline at 2px offset on every focusable element.

### Swap
A 48px circle (44px on phones) with a 1.5px navy ring on paper, holding the swap icon at 22px. Pressing it rotates the button 180° (0.4s, cubic-bezier(.2,.8,.2,1)) while the two codes trade places as a FLIP translate (Web Animations API, 460ms, same curve). Both are skipped under reduced motion.

### Inputs / Fields
- **Style:** 42px tall, 1px hairline border, paper field fill, 10px radius, 0 12px padding; uppercase tracked label above.
- **Focus:** Border shifts to Focus Steel plus a 3px Strong Wash halo.
- **Amount (on the pass):** Borderless with a 2px navy underline only, set in Title Amount; the underline turns Focus Steel on focus.
- **Currency picker:** On the pass the selected code is shown as Display Code text with no field chrome; on focus it opens as a plain field with a listbox popover (12px radius, Floating shadow, uppercase group headers).

### Chips / Segmented control
- **Segmented:** Strong Wash track (11px radius, 3px padding); options 12px/700 muted text; the pressed option becomes a paper chip with navy text and the Pressed segment shadow. Used for trend period and theme.
- **Freshness pill:** Paper pill with hairline border, 12px muted text, led by a 7px status dot with a 3px halo of its own colour (ink, ochre for saved, red for failing).

### The Pass (signature)
The converter, built from stacked sections whose paper backgrounds are masked with the notch cutouts under one Pass lift filter. Route section (FROM / TO labels, codes, currency names, swap), perforation, fields section (Amount, Rate, Rate date, Source as printed label-value pairs), perforation, then the Stub Tint stub with "You get", the Display Figure, a muted detail line and Copy. Below the stub, a quiet text action expands a list of conversions into every watched currency.

### Watch Stub (signature)
Each watchlist currency is a 72px-min stub row: a tear-off end holding the code and flag, a vertical dotted perforation with notches top and bottom, then the name with pin and bell markers, the rate in Headline Rate, a trend sparkline coloured by direction with its change figure, and a drag grip. Triggered alerts tint the paper with Amber Signal. Hover lifts 1px; dragging drops opacity to 75%.

### Dialogs
Paper sheets with a 1px hairline border and 20px radius, 22px padding, a round Soft Wash close button, over a dark navy scrim. Under 520px they become bottom sheets with top corners only.

### Icons
One inline SVG symbol set on a 24px grid, drawn as round-capped strokes at 1.75 width in currentColor, shown at 18px (22px in the swap, 14px in small tiles).

## Do's and Don'ts

### Do:
- **Do** build paper surfaces as masked sections under a `filter: drop-shadow` so notches are real holes (10px notches on the pass, 7px on stubs).
- **Do** separate sections of a pass or stub with a 2px dotted perforation in the Perforation colour.
- **Do** set codes and figures in condensed heavy Archivo with tabular numerals, and name each printed field with an 11px uppercase label tracked 0.12em.
- **Do** print the rate, rate date and source beside any converted number.
- **Do** keep every colour in the light and dark token sets; a new token needs both values.
- **Do** honour reduced motion: the swap rotation, the code FLIP, toasts, loading pulses and stub hover all switch off.

### Don't:
- **Don't** use green or red for anything except trend direction (and red for errors and destructive actions).
- **Don't** replace the pass or the watch stubs with rounded input rows and soft cards.
- **Don't** draw notches as painted circles or cast paper shadows with box-shadow; the cut must show the ground through it.
- **Don't** set sentences, buttons or labels in Archivo, or codes and figures in the system face.
- **Don't** add icons from another set or stroke weight; extend the inline 1.75-stroke set.
