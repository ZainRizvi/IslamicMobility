import os
import zipfile
import csv

files_added = []

for root, dirs, files in os.walk('.'):
    for file in files:
        if file.lower().endswith('.epub'):
            file_path = os.path.join(root, file)
            title = os.path.splitext(file)[0]
            files_added.append((title, file_path))

zip_filename = 'all_epubs.zip'
max_size = 90 * 1024 * 1024  # 90 MB in bytes
current_zip_size = 0
zip_index = 1

def get_zip_filename(index):
    return f'all_epubs_{index}.zip'

with zipfile.ZipFile(get_zip_filename(zip_index), 'w') as zipf:
    for title, path in files_added:
        # Check current zip size
        current_zip_size += os.path.getsize(path)
        if current_zip_size > max_size:
            zipf.close()  # Close the current zip file
            zip_index += 1  # Increment the zip file index
            current_zip_size = os.path.getsize(path)  # Reset size for new zip
            zipf = zipfile.ZipFile(get_zip_filename(zip_index), 'w')  # Create new zip file
        zipf.write(path, arcname=os.path.basename(path))
    # Create CSV
    csv_filename = 'books.csv'
    with open(csv_filename, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(['Title', 'File Path'])
        for title, path in files_added:
            writer.writerow([title, path])
    zipf.write(csv_filename)
    #os.remove(csv_filename)
