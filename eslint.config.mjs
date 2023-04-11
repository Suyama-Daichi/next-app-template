import react from 'eslint-plugin-react'

export default [
	{
		plugins: {react},
		// 全てのTSファイルを対象にする
		files: ['**/*.ts', '**/*.tsx'],
		rules: {
			semi: "error",
			"prefer-const": "error",
			"react/react-in-jsx-scope": "off"
		},
	}
];