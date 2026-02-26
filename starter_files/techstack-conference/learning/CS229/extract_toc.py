from pypdf import PdfReader

reader = PdfReader("CS229/main_notes.pdf")
first_5_pages = ""
for i in range(min(5, len(reader.pages))):
    text = reader.pages[i].extract_text()
    if text:
        first_5_pages += text + "\n\n"

with open("CS229/first_5_pages.txt", "w") as f:
    f.write(first_5_pages)
