import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score
import joblib

# Sample data (small demo)
data = {
    'lymphatics': [2, 2, 2, 2, 3, 1, 2, 2, 2, 2],
    'block_of_afferent_lymphatics': [2, 2, 2, 2, 2, 2, 2, 1, 1, 2],
    'bl_of_lymph_c': [1, 2, 1, 2, 2, 2, 1, 2, 2, 2],
    'bl_of_lymph_s': [2]*10,
    'by_pass': [2, 2, 2, 2, 2, 1, 2, 2, 2, 2],
    'extravasates': [2]*10,
    'regeneration_of_ly': [2]*10,
    'early_uptake_in_ly': [2]*10,
    'lym_nodes_dimin': [2]*10,
    'lym_nodes_enlar': [2]*10,
    'changes_in_lym': [1]*10,
    'defect_in_node': [1]*10,
    'changes_in_node': [1]*10,
    'changes_in_stru': [1]*10,
    'special_forms': [1]*10,
    'dislocation_of': [1]*10,
    'exclusion_of_no': [1]*10,
    'no_of_nodes_in': [2]*10,
    'class': [1, 1, 1, 1, 2, 2, 3, 3, 4, 4]
}

df = pd.DataFrame(data)
X = df.drop("class", axis=1)
y = df["class"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = DecisionTreeClassifier()
model.fit(X_train, y_train)

joblib.dump(model, "lymphography_model.joblib")

print("Model trained and saved as lymphography_model.joblib")
