# Módulo Matemático Inteligente
> Módulo Matemático criado com Javascript

## Motivação
- Aprimorar parte de cálculo da calculadora que criei
- Criar um módulo inteligente para ser reutilizado em outros projetos

## Diferencial
- Funciona com erros de digitação
- Resolução de equações complexas
- Uso do padrão brasileiro para valores decimais(uso da vírgula)
 
## Configurações
> Dentro do arquivo principal **math.js**
- Variável ***showSequence*** *(boolean)* mostrará passo a passo para a resolução da equação

<div align="center">
 
![ezgif-3-79c31a030ec3](https://user-images.githubusercontent.com/55330156/137641048-90e97ae2-460c-4b8a-bad0-0fee97448d26.gif)
</div>

- Variável ***decimal*** *('auto' ou number)* mudará as casas decimais do resultado final

<div align="center">
 
![decimal](https://user-images.githubusercontent.com/55330156/137641351-a8107508-244c-42ab-9cd7-104741d07eed.jpg)
</div>

- Variável ***comma*** mudará o ponto para a vírgula no resultado final

<div align="center">
 
![comma](https://user-images.githubusercontent.com/55330156/137641484-9e6b6a4e-d4f5-4c34-9d5e-103c67fbad7f.jpg)
</div>

## Como importar?
- Copie tudo que contém dentro da pasta **/js/**

## Como utilizar?
- Modifique as configurações como deseja
- Insira sua equação como *string* como parâmetro da função **resolve**
```
    var equacao = "1+2(1*2)";
    console.log( resolve(equacao) );
```

## Mais
- Arquivo HTML criado somente para fácil execução no navegador

### Problemas solucionados
- Módulo não aceita ponto como separador. Recomendável utilizar o ***vírgula*** para separar valores decimais.
> Entrada errada: "13.526,13

> Entrada certa: "13526,13"

## Licença
