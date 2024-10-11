import os

class Utilidades():
    @staticmethod
    def mostar_logo():
        print('promotech backend\n'
              f'gabriel enterprises | porta: 5000\n')

    @staticmethod
    def limpar_tela():
        try:
            os.system('cls' if os.name == 'nt' else 'clear')
        except Exception as e:
            Utilidades.log_warning(__name__, f'Erro ao limpar a tela: {e}')