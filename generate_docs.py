import os

base_path = "docs"

structure = {
    "general": [
        "journey-management",
        "journey-mapping",
        "roadmap-release-notes",
        "smaply3-vs-classic",
        "switch-from-classic"
    ],
    "editor": {
        "overview": [],
        "lanes-columns-cards": [],
        "cards": [
            "text",
            "image",
            "icon",
            "opportunity",
            "pain-point",
            "solution",
            "metric"
        ],
        "collaboration": [],
        "filters-views": [],
        "exporting-data": []
    },
    "dashboard": [
        "personal-workspace",
        "shared-accounts"
    ],
    "portfolio": [
        "management"
    ]
}

def create_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as file:
        file.write(content)

for section, items in structure.items():
    if isinstance(items, list):
        for item in items:
            create_file(f"{base_path}/{section}/{item}.md", f"# {item.replace('-', ' ').title()}\n\nContent coming soon...")
    elif isinstance(items, dict):
        for subsection, subitems in items.items():
            if isinstance(subitems, list):
                for subitem in subitems:
                    create_file(f"{base_path}/{section}/{subsection}/{subitem}.md", f"# {subitem.replace('-', ' ').title()}\n\nContent coming soon...")
            else:
                create_file(f"{base_path}/{section}/{subsection}.md", f"# {subsection.replace('-', ' ').title()}\n\nContent coming soon...")

print("Markdown files created successfully.")
