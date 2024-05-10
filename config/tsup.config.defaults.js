const tsupDefaults = (options) => [
  {
    entry: ['src/*.ts', 'src/*.tsx'],
    format: ['cjs', 'esm'],
    outDir: 'dist/modern',
    dts: true,
    sourcemap: true,
    clean: true,
    minify: !options.watch
  },
  {
    entry: ['src/*.ts', 'src/*.tsx'],
    format: ['cjs', 'esm'],
    target: ['es2020', 'node16'],
    outDir: 'dist/legacy',
    dts: true,
    sourcemap: true,
    clean: true,
    minify: !options.watch
  }
];

export default tsupDefaults;
