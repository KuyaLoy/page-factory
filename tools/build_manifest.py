#!/usr/bin/env python3
"""Rebuild kit/manifest.json: the kit's skills, prompts, templates, tools and modules, each with the
version it first shipped in ("since"). update-kit and the website read it.

Usage (from the kit root):
    python tools/build_manifest.py
"""
import json
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
VERSION = (ROOT / "VERSION").read_text(encoding="utf-8").strip()
REPO = "https://github.com/KuyaLoy/page-factory"


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
    print(
        f"v{VERSION}: {len(m['skills'])} skills, {len(m['prompts'])} prompts, "
        f"{len(m['templates'])} templates, {len(m['tools'])} tools -> kit/manifest.json"
    )
