#!/usr/bin/env python3
"""Fix the menu HTML structure by removing orphaned menu items"""

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the end of the nav tag
nav_end = content.find('</ul></nav>')
if nav_end == -1:
    print("Could not find closing nav tag")
    exit(1)

# Find the next div that starts the search icon section
search_start = content.find('<input class="hidden hidden--fixed" type="checkbox" id="toggle-search"', nav_end)
if search_start == -1:
    print("Could not find search section")
    exit(1)

# Extract the orphaned HTML between nav_end and search_start
orphaned_html = content[nav_end + len('</ul></nav>'):search_start]

print(f"Found {len(orphaned_html)} characters of orphaned HTML")
print("First 500 characters:")
print(orphaned_html[:500])

# Remove the orphaned content
fixed_content = content[:nav_end + len('</ul></nav>')] + '\n\t\t\t' + content[search_start:]

# Write the fixed content
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(fixed_content)

print("\n✅ Fixed! Removed orphaned menu HTML")
