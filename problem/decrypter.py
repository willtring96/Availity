import pandas as pd
'''
Created by William Tring

1. Must export the .db tables into two separate .csv files.
2. Exported .csv files must have same number of columns and columns must
    be in same order

Exported files are book_fragments.csv and book.txt
'''

#Enter csv filename as: 'file.csv'
body_file = 'body.csv'
crypt_file = 'Crypt.csv'
body_data = pd.read_csv(body_file)
crypt_data = pd.read_csv(crypt_file)

#Instead of doing unicode operations, I decided to go with a string (char array)
lowercase = 'abcdefghijklmnopqrstuvwxyz'
uppercase = lowercase.upper()

combined_book = []
output_data = {'id':[]}

#Iterate over crypt keys
crypt_rows = crypt_data.itertuples()
for key in crypt_rows:
    start = key[1]-1
    end = start + key[2]
    inverse_rot = 26 - key[3]
    for i in range(start, end):
        decoded_text = []
        #Finds encrypted line from body file using index of row (NOT ID)
        encrypted_text = body_data.iloc[i][1]
        output_data['id'].append(i+1)
        for i in encrypted_text:
            if i in lowercase:
                decoded_text.append(lowercase[(lowercase.find(i) + inverse_rot) % 26])
            elif i in uppercase:
                decoded_text.append(uppercase[(uppercase.find(i) + inverse_rot) % 26])
            else:
                decoded_text.append(i)
        combined_book.append(''.join(decoded_text))

#Write to .csv with id and data per row
output_data.update({'data': combined_book})
file = pd.DataFrame(output_data)
file.to_csv('book_fragments.csv', header=['id','data'], index=False)

#Write to .txt with all rows combined into a text
book = open('book.txt', "w")
book.write(''.join(combined_book))
book.close()