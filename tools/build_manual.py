#!/usr/bin/env python3
"""Rebuild the Page Factory manual and the kit manifest.

Usage (from the kit root):
    python tools/build_manual.py

Writes:
    docs/index.html      full page for GitHub Pages (Settings > Pages > main /docs)
    docs/assets/         pictures and clips, copied from docs-src/assets/
    docs/.nojekyll       tells GitHub Pages to serve the files as they are
    build/artifact.html  page fragment for a Claude Artifact (no html/head/body tags)
    build/assets/        the same pictures, next to the fragment
    kit/manifest.json    skills, prompts, templates, tools and modules, each with the
                         version it first shipped in ("since")
"""
import html
import json
import re
import shutil
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "docs-src" / "manual.src.html"
ASSETS = ROOT / "docs-src" / "assets"
VERSION = (ROOT / "VERSION").read_text(encoding="utf-8").strip()
REPO = "https://github.com/KuyaLoy/page-factory"

# Placeholder key -> prompt file. Each file holds one ```text block: the part people paste.
PROMPTS = {
    "MASTER": "MASTER-PROMPT.md",
    "NEW_VIDEO": "prompts/new-video.md",
    "WEEKLY_BATCH": "prompts/weekly-batch.md",
    "WEEKLY_REVIEW": "prompts/weekly-review.md",
    "NEW_PAGE": "prompts/new-page.md",
    "TREND_REFRESH": "prompts/trend-refresh.md",
    "CONTINUE": "prompts/continue.md",
    "UPDATE_KIT": "prompts/update-kit.md",
    "RETRO": "prompts/retro.md",
}


def paste_block(rel):
    text = (ROOT / rel).read_text(encoding="utf-8")
    m = re.search(r"```text\r?\n(.*?)\r?\n```", text, re.S)
    if not m:
        sys.exit(f"No ```text block found in {rel}")
    return m.group(1)


def build_manual():
    src = SRC.read_text(encoding="utf-8")
    for key, rel in PROMPTS.items():
        src = src.replace("{{PROMPT:" + key + "}}", html.escape(paste_block(rel), quote=False))
    src = src.replace("{{VERSION}}", "v" + VERSION)
    left = sorted(set(re.findall(r"\{\{[A-Z_:]+\}\}", src)))
    if left:
        sys.exit(f"Unfilled placeholders: {left}")

    head, marker, body = src.partition("<!-- HEAD:END -->")
    if not marker:
        sys.exit("Missing <!-- HEAD:END --> marker in docs-src/manual.src.html")
    head = head.replace("<!-- HEAD:START -->", "").strip()
    body = body.strip()

    (ROOT / "build").mkdir(exist_ok=True)
    (ROOT / "build" / "artifact.html").write_text(head + "\n" + body + "\n", encoding="utf-8")

    page = (
        "<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n"
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\">\n"
        "<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}"
        "img{max-width:100%}[hidden]{display:none!important}</style>\n"
        + head + "\n</head>\n<body>\n" + body + "\n</body>\n</html>\n"
    )
    (ROOT / "docs").mkdir(exist_ok=True)
    (ROOT / "docs" / "index.html").write_text(page, encoding="utf-8")
    (ROOT / "docs" / ".nojekyll").write_text("", encoding="utf-8")
    copy_assets(ROOT / "docs" / "assets")
    copy_assets(ROOT / "build" / "assets")


def copy_assets(dest):
    """Mirror docs-src/assets/ into dest, so removed pictures disappear there too."""
    if dest.exists():
        shutil.rmtree(dest)
    if ASSETS.exists():
        shutil.copytree(ASSETS, dest)


def build_manifest():
    path = ROOT / "kit" / "manifest.json"
    old = json.loads(path.read_text(encoding="utf-8")) if path.exists() else {}

    def items(section, pairs):
        prev = {i["path"]: i.get("since", VERSION) for i in old.get(section, [])}
        return [{"name": name, "path": rel, "since": prev.get(rel, VERSION)} for name, rel in pairs]

    def rel(p):
        return p.relative_to(ROOT).as_posix()

    kit = ROOT / "kit"
    skills = [(p.parent.name, rel(p)) for p in sorted((kit / "skills").glob("*/SKILL.md"))]
    prompts = [("master", "MASTER-PROMPT.md")] + [(p.stem, rel(p)) for p in sorted((ROOT / "prompts").glob("*.md"))]
    templates = [
        (p.relative_to(kit / "templates").as_posix(), rel(p))
        for p in sorted((kit / "templates").rglob("*"))
        if p.is_file()
    ]
    tools = [(p.name, rel(p)) for p in sorted((kit / "tools").glob("*")) if p.is_file()]
    modules_dir = kit / "modules"
    modules = [(p.name, rel(p)) for p in sorted(modules_dir.glob("*")) if p.is_dir()] if modules_dir.exists() else []

    manifest = {
        "name": "page-factory",
        "version": VERSION,
        "built": date.today().isoformat(),
        "repo": REPO,
        "skills": items("skills", skills),
        "prompts": items("prompts", prompts),
        "templates": items("templates", templates),
        "tools": items("tools", tools),
        "modules": items("modules", modules),
    }
    path.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    return manifest


if __name__ == "__main__":
    m = build_manifest()
    build_manual()
    print(
        f"v{VERSION}: {len(m['skills'])} skills, {len(m['prompts'])} prompts, "
        f"{len(m['templates'])} templates, {len(m['tools'])} tools -> docs/index.html, build/artifact.html, kit/manifest.json"
    )
