import plotly.graph_objects as go

import pandas as pd

import plotly.express as px

fig = px.colors.cyclical.swatches_cyclical()


fig = px.colors.cyclical.swatches_continuous()


df = pd.read_csv("PistaEditado.csv")

cores = ["#000000", "#7E78FF", "#070097", "#008000", "#0000ff", "#4b0082", "#800000"]

fig = go.Figure(data=
    go.Parcoords(
        line=dict( color = df['data'],
        colorscale = "hsv",          
        showscale = True,),
        dimensions = list([
            dict(tickvals = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],
            label = 'Data', values = df['data']),



             dict(tickvals = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
            ticktext = ['00:00 - 00:59',
                        '01:00 a 01:59',
                        '02:00 a 02:59',
                        '03:00 a 03:59',
                        '04:00 a 04:59',
                        '05:00 a 05:59',
                        '06:00 a 06:59',
                        '07:00 a 07:59',
                        '08:00 a 08:59',
                        '09:00 a 09:59',
                        '10:00 a 10:59',
                        '11:00 a 11:59',
                        '12:00 a 12:59',
                        '13:00 a 13:59',
                        '14:00 a 14:59',
                        '15:00 a 15:59',
                        '16:00 a 16:59',
                        '17:00 a 17:59',
                        '18:00 a 18:59',
                        '19:00 a 19:59',
                        '20:00 a 20:59',
                        '21:00 a 21:59',
                        '22:00 a 22:59',
                        '23:00 a 23:59',
                        ],
            label = 'Horario', values = df['horario']),

            dict(tickvals = [0,1],
            ticktext = ['Sem Vítima','Com Vítima'],
            label = 'Tipo de Ocorrencia', values = df['tipo_de_ocorrencia']),

            #dict(tickvals = [ 100,200,300,400,500,600,700,800,900,1000],
            #tickvals = [0a 100,101 a 200,201 a 300,301 a 400,401 a 500,501 a 600,601 a 700,701 a 800,801 a 900,901 a 1000],
            #label = 'Km', values = df['km']),

            dict(tickvals = [0,1],
            ticktext = ['MG','SP'],
            label = 'Trecho', values = df['trecho']),

            dict(tickvals = [0,1],
            ticktext = ['Norte','Sul'],
            label = 'Sentido', values = df['sentido']),

            dict(tickvals = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],
            ticktext = ['Saida de Pista',
                        'Outros - Sequencia',
                        'Choque - Defensa barreira ou submarino',
                        'Choque - Elemento de Drenagem',
                        'Colisao Traseira',
                        'Atropelamento de Animal',
                        'Engavetamento',
                        'Capotamento',
                        'Queda de Moto',
                        'Colisao Lateral',
                        'Choque - Suporte de Sinalizacao',
                        'Outros',
                        'Tombamento',
                        'Colisao Frontal',
                        'Atropelamento - Morador',
                        'Choque - Talude',
                        'Choque - Objeto sobre a pista',
                        'Atropelamento - Andarilho',
                        'Atropelamento - Ciclista',
                        'Choque - Poste',
                        'Atropelamento - Usuario',
                        'Choque - Veiculo parado no acostamento',
                        'Choque - Cancela de Pedagio',
                        'Choque - Arvore',
                        'Choque - Veiculo parado na pista',
                        'Atropelamento - Ambulante',
                        'Acidentes de outra natureza',
                        'Atropelamento - Funcionario',
                        'Atropelamento de pedestre',
                        'Atropelamento - Sem Informacao',
                        'Objeto lancado contra veiculo',
                        'Colisao Transversal',
                        'Soterramento',
                        'Choque - outros',
                        'Atropelamento - Outros',
                        'Choque - Objeto nao identificado',
                        'Choque '],
            label = 'Tipo de Acidente', values = df['tipo_de_acidente']),

            dict(range =[0,15],
                tickvals = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                label = 'Automovel', values = df['automovel']),
            dict(range =[0,15],
                tickvals = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                label = 'Bicicleta', values = df['bicicleta']),  
            dict(range =[0,15],
                tickvals = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                label = 'Caminhao', values = df['caminhao']),
            dict(range =[0,15],
                tickvals = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                label = 'Moto', values = df['moto']),
            dict(range =[0,15],
                tickvals = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                label = 'Onibus', values = df['onibus']),      
            dict(range =[0,15],
                tickvals = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                label = 'Outros', values = df['outros']),
            dict(range =[0,15],
                tickvals = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                label = 'Tração Animal', values = df['tracao_animal']),
            dict(range =[0,15],
                tickvals = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                label = 'Cargas Esp.', values = df['transporte_de_cargas_especiais']),    
            dict(range =[0,15],
                tickvals = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                label = 'Maquinas', values = df['trator_maquinas']),
            dict(range =[0,15],
                tickvals = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                label = 'Utilitarios', values = df['utilitarios']),
            dict(range =[0,116],
                tickvals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116],
                label = 'Ilesos', values = df['ilesos']),        
            dict(range =[0,49],
                tickvals = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
                label = 'Leves', values = df['levemente_feridos']),       
            dict(range =[0,23],
                tickvals = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
                label = 'Moderados', values = df['moderadamente_feridos']),    
            dict(range =[0,6],
                tickvals = [0,1,2,3,4,5,6],
                label = 'Graves', values = df['gravemente_feridos']),                               
            dict(range =[0,8],
                tickvals = [0,1,2,3,4,5,6,7,8],
                label = 'Mortos', values = df['mortos'])])  
            
    )
)
fig.show()