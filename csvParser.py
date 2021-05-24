import pandas as pd
from collections import defaultdict
'''
I decided to use header indices instead of hardcoding column names.
To test with other files, change file in line 12 and
    make sure columns are consistent in quantity and order:
        UserID, FirstName, LastName, Version, Insurance Company
'''

#Enter csv filename as: 'file.csv'
    #or url path as: r'https://github.com/enrollees.csv'
csv_file = 'enrollees.csv'
file_data = pd.read_csv(csv_file) 

#Create iterator for each line of file
rows = file_data.itertuples()
#Variable to hold column headers
headers = file_data.columns.values.tolist()

#Declare dictionary/hashmap using name of insurance companies as keys
ins_companies = defaultdict(list)

for i in rows:
    values = []
    user_id = i[1]
    company = i[5]
    version = i[4]
    exists = False
    
    #Checks for duplicate user ids, only keeps the newest version
    if company in ins_companies:
        for enrollee in ins_companies[company]:
            if enrollee[0] == user_id:
                if enrollee[3] > version:
                    exists = True
                else:
                    ins_companies[company].remove(enrollee)
    
    #If user id already exists and is the newest version, skip adding to dict                    
    if not exists:                            
        for j in range(1, len(headers)+1):
            values.append(i[j])
        ins_companies[company].append(values)

#Iterates over keys (companies) in dict
#For each company, a new .csv file is created
for i in ins_companies:
    #Sorts by Last Name(column 2), then First Name(column 1).
    ins_companies[i] = sorted(ins_companies[i], key=lambda x:(x[2], x[1]))
    file = pd.DataFrame(ins_companies.get(i), columns=headers)
    file.to_csv(i+'.csv', index=False)