module.exports = {
  parser: '@typescript-eslint/parser', // Usa o parser do TypeScript
  parserOptions: {
    ecmaVersion: 2020, // Suporte ao ES6+
    sourceType: 'module', // Módulos ES6
    ecmaFeatures: {
      jsx: true, // Habilita suporte a JSX
    },
  },
  extends: [
    'eslint:recommended', // Regras recomendadas do ESLint
    'plugin:@typescript-eslint/recommended', // Regras recomendadas para TypeScript
    'plugin:import/errors', // Regras de importação
    'plugin:import/warnings',
    'airbnb-typescript/base', // Regras de estilo do Airbnb para TypeScript
  ],
  plugins: [
    '@typescript-eslint', // Plugin do TypeScript
    'import', // Plugin para lidar com importações
  ],
  rules: {
    // Regras de formatação e estilo
    'indent': ['error', 2], // Usa 2 espaços para indentação
    'max-len': ['error', { code: 100 }], // Limita o comprimento das linhas a 100 caracteres
    'semi': ['error', 'always'], // Exige ponto e vírgula no final de declarações
    'quotes': ['error', 'single'], // Prefira aspas simples
    'linebreak-style': ['error', 'unix'], // Quebra de linha estilo Unix
    'no-console': 'warn', // Aviso sobre uso de console.log
    'no-unused-vars': 'warn', // Aviso para variáveis não utilizadas

    // Regras de importação
    'import/no-unresolved': 'error', // Garante que todos os imports sejam resolvidos corretamente
    'import/named': 'error', // Garante que as importações nomeadas sejam válidas

    // Especificamente para o TypeScript
    '@typescript-eslint/no-unused-vars': 'warn', // Aviso para variáveis não utilizadas no TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Desabilita a exigência de tipos de retorno explícitos

    // Regras para comentários JSDoc
    'jsdoc/require-jsdoc': [
      'warn',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
        },
      },
    ], // Exige comentários JSDoc para funções e métodos

    'jsdoc/require-description': 'warn', // Exige uma descrição nos comentários JSDoc
  },
};