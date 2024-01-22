import os
import re
import json

FORMATION  = {}
FORMATION_FolderPath = os.path.abspath(os.path.join(os.getcwd(), "Resource", "Formation"))
FORMATION_List = [os.path.join(FORMATION_FolderPath, fichier) for fichier in os.listdir(FORMATION_FolderPath) if os.path.isfile(os.path.join(FORMATION_FolderPath, fichier)) and fichier.lower().endswith(".png")]

IE_1 = {}
IE_2 = {}
IE_3 = {}
IE_GO = {}
IE_GOCS = {}
IE_GOGALAXY = {}
IE_ARES = {}
IE_ORION = {}
IE_1_FolderPath = os.path.abspath(os.path.join(os.getcwd(), "Resource", "Joueurs","Inazuma Eleven 1"))
IE_2_FolderPath = os.path.abspath(os.path.join(os.getcwd(), "Resource", "Joueurs", "Inazuma Eleven 2"))
IE_3_FolderPath = os.path.abspath(os.path.join(os.getcwd(), "Resource", "Joueurs", "Inazuma Eleven 3"))
IE_GO_FolderPath = os.path.abspath(os.path.join(os.getcwd(), "Resource", "Joueurs", "Inazuma Eleven GO"))
IE_GOCS_FolderPath = os.path.abspath(os.path.join(os.getcwd(), "Resource", "Joueurs", "Inazuma Eleven GO Chrono Stones"))
IE_GOGALAXY_FolderPath = os.path.abspath(os.path.join(os.getcwd(), "Resource", "Joueurs", "Inazuma Eleven GO Galaxy"))
IE_ARES_FolderPath = os.path.abspath(os.path.join(os.getcwd(), "Resource", "Joueurs", "Inazuma Eleven Ares"))
IE_ORION_FolderPath = os.path.abspath(os.path.join(os.getcwd(), "Resource", "Joueurs", "Inazuma Eleven Orion"))
IE_1_List = [os.path.join(IE_1_FolderPath, fichier) for fichier in os.listdir(IE_1_FolderPath) if os.path.isfile(os.path.join(IE_1_FolderPath, fichier)) and fichier.lower().endswith(".png")]
IE_2_List = [os.path.join(IE_2_FolderPath, fichier) for fichier in os.listdir(IE_2_FolderPath) if os.path.isfile(os.path.join(IE_2_FolderPath, fichier)) and fichier.lower().endswith(".png")]
IE_3_List = [os.path.join(IE_3_FolderPath, fichier) for fichier in os.listdir(IE_3_FolderPath) if os.path.isfile(os.path.join(IE_3_FolderPath, fichier)) and fichier.lower().endswith(".png")]
IE_GO_List = [os.path.join(IE_GO_FolderPath, fichier) for fichier in os.listdir(IE_GO_FolderPath) if os.path.isfile(os.path.join(IE_GO_FolderPath, fichier)) and fichier.lower().endswith(".png")]
IE_GOCS_List = [os.path.join(IE_GOCS_FolderPath, fichier) for fichier in os.listdir(IE_GOCS_FolderPath) if os.path.isfile(os.path.join(IE_GOCS_FolderPath, fichier)) and fichier.lower().endswith(".png")]
IE_GOGALAXY_List = [os.path.join(IE_GOGALAXY_FolderPath, fichier) for fichier in os.listdir(IE_GOGALAXY_FolderPath) if os.path.isfile(os.path.join(IE_GOGALAXY_FolderPath, fichier)) and fichier.lower().endswith(".png")]
IE_ARES_List = [os.path.join(IE_ARES_FolderPath, fichier) for fichier in os.listdir(IE_ARES_FolderPath) if os.path.isfile(os.path.join(IE_ARES_FolderPath, fichier)) and fichier.lower().endswith(".png")]
IE_ORION_List = [os.path.join(IE_ORION_FolderPath, fichier) for fichier in os.listdir(IE_ORION_FolderPath) if os.path.isfile(os.path.join(IE_ORION_FolderPath, fichier)) and fichier.lower().endswith(".png")]


IE_1_COACH = {}
IE_2_COACH = {}
IE_3_COACH = {}
IE_GO_COACH = {}
IE_GOCS_COACH = {}
IE_GOGALAXY_COACH = {}
IE_ARES_COACH = {}
IE_ORION_COACH = {}
IE_1_COACH_FolderPath = os.path.abspath(os.path.join(os.getcwd(), "Resource", "Coach","Inazuma Eleven 1"))
IE_2_COACH_FolderPath = os.path.abspath(os.path.join(os.getcwd(), "Resource", "Coach", "Inazuma Eleven 2"))
IE_3_COACH_FolderPath = os.path.abspath(os.path.join(os.getcwd(), "Resource", "Coach", "Inazuma Eleven 3"))
IE_GO_COACH_FolderPath = os.path.abspath(os.path.join(os.getcwd(), "Resource", "Coach", "Inazuma Eleven GO"))
IE_GOCS_COACH_FolderPath = os.path.abspath(os.path.join(os.getcwd(), "Resource", "Coach", "Inazuma Eleven GO Chrono Stones"))
IE_GOGALAXY_COACH_FolderPath = os.path.abspath(os.path.join(os.getcwd(), "Resource", "Coach", "Inazuma Eleven GO Galaxy"))
IE_ARES_COACH_FolderPath = os.path.abspath(os.path.join(os.getcwd(), "Resource", "Coach", "Inazuma Eleven Ares"))
IE_ORION_COACH_FolderPath = os.path.abspath(os.path.join(os.getcwd(), "Resource", "Coach", "Inazuma Eleven Orion"))
IE_1_COACH_List = [os.path.join(IE_1_COACH_FolderPath, fichier) for fichier in os.listdir(IE_1_COACH_FolderPath) if os.path.isfile(os.path.join(IE_1_COACH_FolderPath, fichier)) and fichier.lower().endswith(".png")]
IE_2_COACH_List = [os.path.join(IE_2_COACH_FolderPath, fichier) for fichier in os.listdir(IE_2_COACH_FolderPath) if os.path.isfile(os.path.join(IE_2_COACH_FolderPath, fichier)) and fichier.lower().endswith(".png")]
IE_3_COACH_List = [os.path.join(IE_3_COACH_FolderPath, fichier) for fichier in os.listdir(IE_3_COACH_FolderPath) if os.path.isfile(os.path.join(IE_3_COACH_FolderPath, fichier)) and fichier.lower().endswith(".png")]
IE_GO_COACH_List = [os.path.join(IE_GO_COACH_FolderPath, fichier) for fichier in os.listdir(IE_GO_COACH_FolderPath) if os.path.isfile(os.path.join(IE_GO_COACH_FolderPath, fichier)) and fichier.lower().endswith(".png")]
IE_GOCS_COACH_List = [os.path.join(IE_GOCS_COACH_FolderPath, fichier) for fichier in os.listdir(IE_GOCS_COACH_FolderPath) if os.path.isfile(os.path.join(IE_GOCS_COACH_FolderPath, fichier)) and fichier.lower().endswith(".png")]
IE_GOGALAXY_COACH_List = [os.path.join(IE_GOGALAXY_COACH_FolderPath, fichier) for fichier in os.listdir(IE_GOGALAXY_COACH_FolderPath) if os.path.isfile(os.path.join(IE_GOGALAXY_COACH_FolderPath, fichier)) and fichier.lower().endswith(".png")]
IE_ARES_COACH_List = [os.path.join(IE_ARES_COACH_FolderPath, fichier) for fichier in os.listdir(IE_ARES_COACH_FolderPath) if os.path.isfile(os.path.join(IE_ARES_COACH_FolderPath, fichier)) and fichier.lower().endswith(".png")]
IE_ORION_COACH_List = [os.path.join(IE_ORION_COACH_FolderPath, fichier) for fichier in os.listdir(IE_ORION_COACH_FolderPath) if os.path.isfile(os.path.join(IE_ORION_COACH_FolderPath, fichier)) and fichier.lower().endswith(".png")]


IE_ALL = {}
IE_ALL_COACH = {}
IE_ALL_FolderPath = os.path.abspath(os.path.join(os.getcwd(), "Resource", "Joueurs", "All"))
IE_ALL_COACH_FolderPath = os.path.abspath(os.path.join(os.getcwd(), "Resource", "Coach", "All"))
IE_ALL_List = [os.path.join(IE_ALL_FolderPath, fichier) for fichier in os.listdir(IE_ALL_FolderPath) if os.path.isfile(os.path.join(IE_ALL_FolderPath, fichier)) and fichier.lower().endswith(".png")]
IE_ALL_COACH_List = [os.path.join(IE_ALL_COACH_FolderPath, fichier) for fichier in os.listdir(IE_ALL_COACH_FolderPath) if os.path.isfile(os.path.join(IE_ALL_COACH_FolderPath, fichier)) and fichier.lower().endswith(".png")]

########################################################################
#Formation
########################################################################
for i,element in enumerate(FORMATION_List):
    nom_fichier = os.path.basename(element)

    pattern = re.compile(r'\((.*?)\) (.+?)\.png')

    match = pattern.match(nom_fichier)
    
    placement = match.group(1)
    Nom = match.group(2)
    FORMATION[i] = {
        'Nom':Nom,
        'Placement':placement,
        'Path': os.path.join(FORMATION_FolderPath, nom_fichier)
    }

########################################################################
#Joueurs
########################################################################
#IE1
#-----------------------------------------------------------------------
for i,element in enumerate(IE_1_List):
    nom_fichier = os.path.basename(element)

    pattern = re.compile(r'\((.*?)\) \((.*?)\) \((.*?)\) (.+?)\.png')

    match = pattern.match(nom_fichier)
    
    team = match.group(1)
    poste = match.group(2)
    genre = match.group(3)
    prenom_nom = match.group(4)

    IE_1[i] = {
        'Nom':prenom_nom,
        'Team':team,
        'Genre':genre,
        'Poste':poste,
        'Path': os.path.join(IE_1_FolderPath, nom_fichier)
    }

#IE2
#-----------------------------------------------------------------------
for i,element in enumerate(IE_2_List):
    nom_fichier = os.path.basename(element)

    pattern = re.compile(r'\((.*?)\) \((.*?)\) \((.*?)\) (.+?)\.png')

    match = pattern.match(nom_fichier)
    
    team = match.group(1)
    poste = match.group(2)
    genre = match.group(3)
    prenom_nom = match.group(4)

    IE_2[i] = {
        'Nom':prenom_nom,
        'Team':team,
        'Genre':genre,
        'Poste':poste,
        'Path': os.path.join(IE_2_FolderPath, nom_fichier)
    }

#IE3
#-----------------------------------------------------------------------
for i,element in enumerate(IE_3_List):
    nom_fichier = os.path.basename(element)

    pattern = re.compile(r'\((.*?)\) \((.*?)\) \((.*?)\) (.+?)\.png')

    match = pattern.match(nom_fichier)
    
    team = match.group(1)
    poste = match.group(2)
    genre = match.group(3)
    prenom_nom = match.group(4)

    IE_3[i] = {
        'Nom':prenom_nom,
        'Team':team,
        'Genre':genre,
        'Poste':poste,
        'Path': os.path.join(IE_3_FolderPath, nom_fichier)
    }

#IE_GO
#-----------------------------------------------------------------------
for i,element in enumerate(IE_GO_List):
    nom_fichier = os.path.basename(element)

    pattern = re.compile(r'\((.*?)\) \((.*?)\) \((.*?)\) (.+?)\.png')

    match = pattern.match(nom_fichier)
    
    team = match.group(1)
    poste = match.group(2)
    genre = match.group(3)
    prenom_nom = match.group(4)

    IE_GO[i] = {
        'Nom':prenom_nom,
        'Team':team,
        'Genre':genre,
        'Poste':poste,
        'Path': os.path.join(IE_GO_FolderPath, nom_fichier)
    }

#IE_GOCS
#-----------------------------------------------------------------------
for i,element in enumerate(IE_GOCS_List):
    nom_fichier = os.path.basename(element)

    pattern = re.compile(r'\((.*?)\) \((.*?)\) \((.*?)\) (.+?)\.png')

    match = pattern.match(nom_fichier)
    
    team = match.group(1)
    poste = match.group(2)
    genre = match.group(3)
    prenom_nom = match.group(4)

    IE_GOCS[i] = {
        'Nom':prenom_nom,
        'Team':team,
        'Genre':genre,
        'Poste':poste,
        'Path': os.path.join(IE_GOCS_FolderPath, nom_fichier)
    }

#IE_GOGALAXY
#-----------------------------------------------------------------------
for i,element in enumerate(IE_GOGALAXY_List):
    nom_fichier = os.path.basename(element)

    pattern = re.compile(r'\((.*?)\) \((.*?)\) \((.*?)\) (.+?)\.png')

    match = pattern.match(nom_fichier)
    
    team = match.group(1)
    poste = match.group(2)
    genre = match.group(3)
    prenom_nom = match.group(4)

    IE_GOGALAXY[i] = {
        'Nom':prenom_nom,
        'Team':team,
        'Genre':genre,
        'Poste':poste,
        'Path': os.path.join(IE_GOGALAXY_FolderPath, nom_fichier)
    }

#IE_ARES
#-----------------------------------------------------------------------
for i,element in enumerate(IE_ARES_List):
    nom_fichier = os.path.basename(element)

    pattern = re.compile(r'\((.*?)\) \((.*?)\) \((.*?)\) (.+?)\.png')

    match = pattern.match(nom_fichier)
    
    team = match.group(1)
    poste = match.group(2)
    genre = match.group(3)
    prenom_nom = match.group(4)

    IE_ARES[i] = {
        'Nom':prenom_nom,
        'Team':team,
        'Genre':genre,
        'Poste':poste,
        'Path': os.path.join(IE_ARES_FolderPath, nom_fichier)
    }

#IE_ORION
#-----------------------------------------------------------------------
for i,element in enumerate(IE_ORION_List):
    nom_fichier = os.path.basename(element)

    pattern = re.compile(r'\((.*?)\) \((.*?)\) \((.*?)\) (.+?)\.png')

    match = pattern.match(nom_fichier)
    
    team = match.group(1)
    poste = match.group(2)
    genre = match.group(3)
    prenom_nom = match.group(4)

    IE_ORION[i] = {
        'Nom':prenom_nom,
        'Team':team,
        'Genre':genre,
        'Poste':poste,
        'Path': os.path.join(IE_ORION_FolderPath, nom_fichier)
    }

#IE_ALL
#-----------------------------------------------------------------------
for i,element in enumerate(IE_ALL_List):
    nom_fichier = os.path.basename(element)

    pattern = re.compile(r'\((.*?)\) \((.*?)\) \((.*?)\) (.+?)\.png')

    match = pattern.match(nom_fichier)
    
    team = match.group(1)
    poste = match.group(2)
    genre = match.group(3)
    prenom_nom = match.group(4)

    IE_ALL[i] = {
        'Nom':prenom_nom,
        'Team':team,
        'Genre':genre,
        'Poste':poste,
        'Path': os.path.join(IE_ALL_FolderPath, nom_fichier)
    }



########################################################################
#COACH
########################################################################
#IE1
#-----------------------------------------------------------------------
for i,element in enumerate(IE_1_COACH_List):
    nom_fichier = os.path.basename(element)
    pattern = re.compile(r'\((.*?)\) (.+?)\.png')            
    
    match = pattern.match(nom_fichier)
    
    team = match.group(1)
    prenom_nom = match.group(2)

    IE_1_COACH[i] = {
        'Nom':prenom_nom,
        'Team':team,
        'Path': os.path.join(IE_1_COACH_FolderPath, nom_fichier)
    }

#IE2
#-----------------------------------------------------------------------
for i,element in enumerate(IE_2_COACH_List):
    nom_fichier = os.path.basename(element)
    pattern = re.compile(r'\((.*?)\) (.+?)\.png')            
    
    match = pattern.match(nom_fichier)
    
    team = match.group(1)
    prenom_nom = match.group(2)

    IE_2_COACH[i] = {
        'Nom':prenom_nom,
        'Team':team,
        'Path': os.path.join(IE_2_COACH_FolderPath, nom_fichier)
    }

#IE3
#-----------------------------------------------------------------------
for i,element in enumerate(IE_3_COACH_List):
    nom_fichier = os.path.basename(element)
    pattern = re.compile(r'\((.*?)\) (.+?)\.png')            
    
    match = pattern.match(nom_fichier)
    
    team = match.group(1)
    prenom_nom = match.group(2)

    IE_3_COACH[i] = {
        'Nom':prenom_nom,
        'Team':team,
        'Path': os.path.join(IE_3_COACH_FolderPath, nom_fichier)
    }

#IE_GO
#-----------------------------------------------------------------------
for i,element in enumerate(IE_GO_COACH_List):
    nom_fichier = os.path.basename(element)
    pattern = re.compile(r'\((.*?)\) (.+?)\.png')            
    
    match = pattern.match(nom_fichier)
    
    team = match.group(1)
    prenom_nom = match.group(2)

    IE_GO_COACH[i] = {
        'Nom':prenom_nom,
        'Team':team,
        'Path': os.path.join(IE_GO_COACH_FolderPath, nom_fichier)
    }

#IE_GOCS
#-----------------------------------------------------------------------
for i,element in enumerate(IE_GOCS_COACH_List):
    nom_fichier = os.path.basename(element)
    pattern = re.compile(r'\((.*?)\) (.+?)\.png')            
    
    match = pattern.match(nom_fichier)
    
    team = match.group(1)
    prenom_nom = match.group(2)

    IE_GOCS_COACH[i] = {
        'Nom':prenom_nom,
        'Team':team,
        'Path': os.path.join(IE_GOCS_COACH_FolderPath, nom_fichier)
    }

#IE_GOGALAXY
#-----------------------------------------------------------------------
for i,element in enumerate(IE_GOGALAXY_COACH_List):
    nom_fichier = os.path.basename(element)
    pattern = re.compile(r'\((.*?)\) (.+?)\.png')            
    
    match = pattern.match(nom_fichier)
    
    team = match.group(1)
    prenom_nom = match.group(2)

    IE_GOGALAXY_COACH[i] = {
        'Nom':prenom_nom,
        'Team':team,
        'Path': os.path.join(IE_GOGALAXY_COACH_FolderPath, nom_fichier)
    }

#IE_ARES
#-----------------------------------------------------------------------
for i,element in enumerate(IE_ARES_COACH_List):
    nom_fichier = os.path.basename(element)
    pattern = re.compile(r'\((.*?)\) (.+?)\.png')            
    
    match = pattern.match(nom_fichier)
    
    team = match.group(1)
    prenom_nom = match.group(2)

    IE_ARES_COACH[i] = {
        'Nom':prenom_nom,
        'Team':team,
        'Path': os.path.join(IE_ARES_COACH_FolderPath, nom_fichier)
    }

#IE_ORION
#-----------------------------------------------------------------------
for i,element in enumerate(IE_ORION_COACH_List):
    nom_fichier = os.path.basename(element)
    pattern = re.compile(r'\((.*?)\) (.+?)\.png')            
    
    match = pattern.match(nom_fichier)
    
    team = match.group(1)
    prenom_nom = match.group(2)

    IE_ORION_COACH[i] = {
        'Nom':prenom_nom,
        'Team':team,
        'Path': os.path.join(IE_ORION_COACH_FolderPath, nom_fichier)
    }

#IE_ALL
#-----------------------------------------------------------------------
for i,element in enumerate(IE_ALL_COACH_List):
    nom_fichier = os.path.basename(element)
    pattern = re.compile(r'\((.*?)\) (.+?)\.png')            
    
    match = pattern.match(nom_fichier)
    
    team = match.group(1)
    prenom_nom = match.group(2)

    IE_ALL_COACH[i] = {
        'Nom':prenom_nom,
        'Team':team,
        'Path': os.path.join(IE_ALL_COACH_FolderPath, nom_fichier)

    }

    
ALL = {
    "Formation" : FORMATION,
    "IE_1" : IE_1,
    "IE_2" : IE_2,
    "IE_3" : IE_3,
    "IE_GO" : IE_GO,
    "IE_GOCS" : IE_GOCS,
    "IE_GOGALAXY" : IE_GOGALAXY,
    "IE_ARES" : IE_ARES,
    "IE_ORION" : IE_ORION,
    "IE_1_COACH" : IE_1_COACH,
    "IE_2_COACH" : IE_2_COACH,
    "IE_3_COACH" : IE_3_COACH,
    "IE_GO_COACH" : IE_GO_COACH,
    "IE_GOCS_COACH" : IE_GOCS_COACH,
    "IE_GOGALAXY_COACH" : IE_GOGALAXY_COACH,
    "IE_ARES_COACH" : IE_ARES_COACH,
    "IE_ORION_COACH" : IE_ORION_COACH,
    "IE_ALL" : IE_ALL,
    "IE_ALL_COACH" : IE_ALL_COACH,
}

with open('web_database.json', 'w') as f:
   json.dump(ALL, f)