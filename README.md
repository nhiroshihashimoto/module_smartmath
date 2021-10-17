# Módulo Matemático Inteligente
> Módulo Matemático criado com Javascript

## Motivação
- Aprimorar parte de cálculo da calculadora que criei
- Criar um módulo inteligente para ser reutilizado em outros projetos

## Diferencial
- Funciona com erros de digitação
- Resolução de equações complexas
- Personalização do resultado
 
## Configurações
> Dentro do arquivo principal **math.js**
- Variável ***showSequence*** *(boolean)* mostrará passo a passo para a resolução da equação
- Variável ***decimal*** *('auto' ou number)* mudará as casas decimais do resultado final
- Variável ***dotToComma*** mudará o ponto para a vírgula no resultado final

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
- Módulo não aceita separadores. Recomendável utilizar ponto ou vírgula somente para valores decimais.
> Entrada errada: "13.526,13"
> Entrada certa: "13526.13"

## Licença