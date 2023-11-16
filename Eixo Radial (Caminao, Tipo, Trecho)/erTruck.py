import plotly.express as px
import pandas as pd

df = pd.read_csv("erTruck.csv")
fig = px.line_polar(df, r="caminhao",
                    theta="tipo_de_acidente",
                    color="trecho",
                    line_close=True,
                    color_discrete_sequence=["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#800000"],
                    template="plotly_dark")

fig.update_polars(angularaxis_showgrid=False,
                  radialaxis_gridwidth=0,
                  gridshape='linear',
                  bgcolor="#494b5a",
                  radialaxis_showticklabels=False
                  )
fig.update_traces(fill='toself')
fig.update_layout(paper_bgcolor="#2c2f36")
fig.show()