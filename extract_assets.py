
import re

html_path = '/home/a/echo-frontend/reference_site/index.html'

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

print("File len:", len(content))

# Find Daniel French
match = re.search(r"Daniel French", content)
if not match:
    print("Daniel French not found")
else:
    print("Found Daniel French")
    start = match.start()
    # Logos are likely well before him. Let's look at -20000 to -100
    chunk = content[start-20000:start]
    
    # Extract images
    imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', chunk)
    print("--- Images before Daniel French (last 15) ---")
    for img in imgs[-15:]:
        print(img)
