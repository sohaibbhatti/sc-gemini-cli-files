import sys
from pypdf import PdfReader

def extract_pages(pdf_path, start_page, end_page, output_path):
    reader = PdfReader(pdf_path)
    text_content = []
    # start_page and end_page are 1-indexed
    # reader.pages is 0-indexed
    for i in range(start_page - 1, min(end_page, len(reader.pages))):
        page = reader.pages[i]
        page_text = page.extract_text()
        if page_text:
            text_content.append(page_text)
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n\n".join(text_content))

if __name__ == "__main__":
    import sys
    start = int(sys.argv[1])
    end = int(sys.argv[2])
    output = sys.argv[3]
    extract_pages("CS229/main_notes.pdf", start, end, output)
